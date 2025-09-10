# Copyright 2025 VNXME
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Relevant materials:
# - https://devco.re/blog/2024/05/24/pwn2own-toronto-2022-a-9-year-old-bug-in-mikrotik-routeros-en/
# - https://margin.re/content/files/2022/11/Pulling_MikroTik_into_the_Limelight-RECon-2022.pdf
# - https://github.com/tenable/routeros/blob/master/slides/bug_hunting_in_routeros_derbycon_2018.pdf
# - https://github.com/tenable/routeros/blob/master/msg_re/parse_x3/src/main.cpp

from __future__ import annotations
import json
import struct
from typing import Any

from .enums import *


class Attribute:
    _HEADER_FMT_BE_ = '>5I'
    _HEADER_FMT_LE_ = '<5I'
    _HEADER_LEN_ = struct.calcsize(_HEADER_FMT_LE_)
    _TOTAL_SIZE_FMT_BE_ = '>I'
    _TOTAL_SIZE_FMT_LE_ = '<I'
    _TOTAL_SIZE_LEN_ = struct.calcsize(_TOTAL_SIZE_FMT_LE_)

    def __init__(self, be: bool = False, tag: str | int = 0, value_type: str | int = 0, values: None | list = None,
                 text: None | str = None):
        if isinstance(tag, str):
            if tag not in TAG_NAMES:
                raise ValueError('Tag must be int or one of ' + ', '.join(TAG_NAMES))
            tag = TAG_NAMES.index(tag.upper())
        else:
            if tag < 0 or tag + 1 > len(TAG_NAMES):
                raise ValueError('Tag must be str or int within [0;' + str(len(TAG_NAMES) - 1) + '] range')
        if isinstance(value_type, str):
            if value_type not in VALUE_TYPES:
                raise ValueError('Value type must be int or one of ' + ', '.join(VALUE_TYPES))
            value_type = VALUE_TYPES.index(value_type.upper())
        else:
            if value_type < 0 or value_type + 1 > len(VALUE_TYPES):
                raise ValueError('Value type must be str or int within [0;' + str(len(TAG_NAMES) - 1) + '] range')
        if values is None:
            values = []
        else:
            if value_type == 0:  # string
                for value in values:
                    if not isinstance(value, str):
                        raise ValueError('Values must be of type corresponding to value type')
            elif value_type == 1:  # bool
                for value in values:
                    if not isinstance(value, bool):
                        raise ValueError('Values must be of type corresponding to value type')
            elif value_type == 2:  # uint
                for value in values:
                    if not isinstance(value, int) or value < 0:
                        raise ValueError('Values must be of type corresponding to value type')
            elif value_type == 3:  # int
                for value in values:
                    if not isinstance(value, int):
                        raise ValueError('Values must be of type corresponding to value type')
        if text is None: text = ""
        self.be, self.tag, self.value_type, self.values, self.text, self.text_hash = be, tag, value_type, values, text, False

    def __repr__(self) -> str:
        return self.to_dict().__repr__()

    def __str__(self) -> str:
        return self.to_xml_string()

    def to_dict(self) -> dict[str, Any]:
        return self.__dict__

    def to_json(self, indent: None | int | str = None) -> str:
        return json.dumps(self.to_dict(), indent=indent)

    def to_xml_string(self, use_tag_names: bool = True) -> str:
        tag = TAG_NAMES[self.tag] if use_tag_names and self.tag < len(TAG_NAMES) else str(self.tag)
        result = tag + '=\"' + self.text + '\"'
        return result

    def unpack(self, raw: bytes, be: bool = False) -> Attribute:
        if len(raw) < self._HEADER_LEN_: raise ValueError("Corrupt data")
        total_size, self.tag, self.value_type, values_count, text_size = struct.unpack(self._HEADER_FMT_BE_ if be else self._HEADER_FMT_LE_,
                                                                                       raw[:self._HEADER_LEN_])
        if total_size == 0 or len(raw) != total_size + self._TOTAL_SIZE_LEN_:
            if not be:
                total_size, self.tag, self.value_type, values_count, text_size = struct.unpack(
                    self._HEADER_FMT_BE_, raw[:self._HEADER_LEN_])
            if total_size == 0 or len(raw) != total_size + self._TOTAL_SIZE_LEN_:
                raise ValueError("Raw data length doesn't match total size")
            else:
                self.be = True
        else:
            self.be = be
        if self.value_type == 0:  # string
            if values_count > 0:
                raise ValueError("String attribute must have no non-string values")
            if text_size + self._HEADER_LEN_ != len(raw):
                raise ValueError("Raw data length doesn't match text size")
            try:
                self.text = raw[self._HEADER_LEN_:].decode('utf-8')
            except UnicodeDecodeError:  # occurs when text contains SHA-1 or another hash
                self.text, self.text_hash = raw[self._HEADER_LEN_:].hex(), True
        elif 1 <= self.value_type <= 3:  # bool, uint, int
            if values_count == 0:
                raise ValueError("Non-string attribute must have at least one non-string value")
            values_fmt = ('>' if self.be else '<') + ('?' if self.value_type == 1 else ('I' if self.value_type == 2 else 'i')) * values_count
            values_len = struct.calcsize(values_fmt)
            if text_size + self._HEADER_LEN_ + values_len != len(raw):
                raise ValueError("Raw data length doesn't match values count and type")
            self.values = struct.unpack(values_fmt, raw[self._HEADER_LEN_:][:values_len])
            try:
                self.text = raw[self._HEADER_LEN_:][values_len:].decode('utf-8')
            except UnicodeDecodeError:  # occurs when text contains SHA-1 or another hash
                self.text, self.text_hash = raw[self._HEADER_LEN_:][values_len:].hex(), True
        else:  # unknown
            raise ValueError("Attribute of unknown value type can't be unpacked")
        return self

    def pack(self) -> bytes:
        result = bytes([])
        if self.value_type == 0:  # string
            if len(self.values) > 0:
                raise ValueError("String attribute must have no non-string values")
        elif 1 <= self.value_type <= 3:  # bool, uint, int
            if len(self.values) == 0:
                raise ValueError("Non-string attribute must have at least one non-string value")
            for value in self.values:
                result += struct.pack(('>' if self.be else '<') + ('?' if self.value_type == 1 else ('I' if self.value_type == 2 else 'i')),
                                      value)
        else:  # unknown
            raise ValueError("Attribute of unknown value type can't be packed")
        result += bytes.fromhex(self.text) if self.text_hash else self.text.encode('utf-8')
        text_size = len(self.text) >> 1 if self.text_hash else len(self.text)
        total_size = len(result) + self._HEADER_LEN_ - self._TOTAL_SIZE_LEN_
        result = struct.pack(self._HEADER_FMT_BE_ if self.be else self._HEADER_FMT_LE_, total_size, self.tag, self.value_type, len(self.values),
                             text_size) + result
        return result


class Node:
    _HEADER_FMT_BE_ = '>3I'
    _HEADER_FMT_LE_ = '<3I'
    _HEADER_LEN_ = struct.calcsize(_HEADER_FMT_LE_)
    _TOTAL_SIZE_FMT_BE_ = '>I'
    _TOTAL_SIZE_FMT_LE_ = '<I'
    _TOTAL_SIZE_LEN_ = struct.calcsize(_TOTAL_SIZE_FMT_LE_)

    def __init__(self, be: bool = False, tag: str | int = 0, attributes: None | list[Attribute] = None, nodes: None | list[Node] = None):
        if isinstance(tag, str):
            if tag not in TAG_NAMES:
                raise ValueError('Tag must be int or one of ' + ', '.join(TAG_NAMES))
            tag = TAG_NAMES.index(tag.upper())
        else:
            if tag < 0 or tag + 1 > len(TAG_NAMES):
                raise ValueError('Tag must be str or int within [0;' + str(len(TAG_NAMES) - 1) + '] range')
        if attributes is None: attributes = []
        if nodes is None: nodes = []
        self.be, self.tag, self.attributes, self.nodes = be, tag, attributes, nodes

    def __repr__(self) -> str:
        return self.to_dict().__repr__()

    def __str__(self) -> str:
        return self.to_xml_string()

    def to_dict(self) -> dict[str, Any]:
        result = self.__dict__
        result['attributes'] = [a.to_dict() for a in self.attributes]
        result['nodes'] = [n.to_dict() for n in self.nodes]
        return result

    def to_json(self, indent: None | int | str = None) -> str:
        return json.dumps(self.to_dict(), indent=indent)

    def to_xml_string(self, use_tag_names: bool = True, indent: None | int | str = None, level: int = 0) -> str:
        indent_spaces = ''
        indent_newline = ''
        if indent is not None:
            if isinstance(indent, int):
                indent_spaces = ' ' * indent
                indent_newline = '\n' if indent > 0 else ''
            elif isinstance(indent, str):
                indent_spaces = indent
                indent_newline = '\n' if len(indent) > 0 else ''
        attributes, nodes = '', ''
        tag = TAG_NAMES[self.tag] if use_tag_names and self.tag < len(TAG_NAMES) else str(self.tag)
        for attribute in self.attributes:
            attributes += " " + attribute.to_xml_string(use_tag_names)
        for node in self.nodes:
            nodes += node.to_xml_string(use_tag_names, indent, level + 1) + indent_newline
        nodes = ('>' + indent_newline + nodes + indent_spaces * level + '</' + tag) if len(nodes) > 0 else '/'
        result = indent_spaces * level + '<' + tag + attributes + nodes + '>'
        return result

    def unpack(self, raw: bytes, be: bool = False) -> Node:
        if len(raw) < self._HEADER_LEN_:
            raise ValueError("Raw data must have at least " + str(self._HEADER_LEN_) + " bytes")
        total_size, self.tag, attributes_size = struct.unpack(self._HEADER_FMT_BE_ if be else self._HEADER_FMT_LE_, raw[:self._HEADER_LEN_])
        if total_size == 0 or len(raw) != total_size + self._TOTAL_SIZE_LEN_:
            if not be:
                total_size, self.tag, attributes_size = struct.unpack(self._HEADER_FMT_BE_, raw[:self._HEADER_LEN_])
            if total_size == 0 or len(raw) != total_size + self._TOTAL_SIZE_LEN_:
                raise ValueError("Raw data length doesn't match total size")
            else:
                self.be = True
        else:
            self.be = be
        i, j = self._HEADER_LEN_, 0
        while i < self._HEADER_LEN_ + attributes_size:
            a = Attribute()
            j = i + a._TOTAL_SIZE_LEN_
            j += struct.unpack(a._TOTAL_SIZE_FMT_BE_ if self.be else a._TOTAL_SIZE_FMT_LE_, raw[i:j])[0]
            self.attributes.append(a.unpack(raw[i:j], self.be))
            i = j
        i, j = self._HEADER_LEN_ + attributes_size, 0
        while i < len(raw):
            n = Node()
            j = i + n._TOTAL_SIZE_LEN_
            j += struct.unpack(n._TOTAL_SIZE_FMT_BE_ if self.be else n._TOTAL_SIZE_FMT_LE_, raw[i:j])[0]
            self.nodes.append(n.unpack(raw[i:j], self.be))
            i = j
        return self

    def pack(self) -> bytes:
        result = bytes([])
        for attribute in self.attributes:
            result += attribute.pack()
        attributes_size = len(result)
        for node in self.nodes:
            result += node.pack()
        total_size = len(result) + self._HEADER_LEN_ - self._TOTAL_SIZE_LEN_
        result = struct.pack(self._HEADER_FMT_BE_ if self.be else self._HEADER_FMT_LE_, total_size, self.tag, attributes_size) + result
        return result


class Document(Node):
    def from_file(self, filepath: str, validate: bool = False) -> Document:
        with open(filepath, 'rb') as file:
            data = file.read()
            self.unpack(data)
            if validate and data != self.pack():
                raise ValueError("File data can't be reproduced")
            return self

    def to_file(self, filepath: str) -> None:
        with open(filepath, 'wb') as file:
            file.write(self.pack())
