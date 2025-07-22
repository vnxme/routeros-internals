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

from __future__ import annotations
import json
import struct
from typing import Any
import zlib

from .enums import *
from .refinery.nrv import nrv2b


class Firmware:
    _HEADER_FMT_BE_ = '>3I20s'
    _HEADER_FMT_LE_ = '<3I20s'
    _HEADER_LEN_ = struct.calcsize(_HEADER_FMT_LE_)
    _SIZE_FMT_BE_ = '>I'
    _SIZE_FMT_LE_ = '<I'
    _SIZE_LEN_ = struct.calcsize(_SIZE_FMT_LE_)
    _BYTES_SAMPLE_LEN_ = 8

    def __init__(self, properties: dict[str, Any] | None = None, identity: int = 0, version: str | None = None,
                 payload: bytes | None = None, compression: str | None = None, compressed: bytes | None = None):
        self.properties, self.identity, self.version, self.payload, self.compression, self.compressed \
            = properties, identity, version, payload,compression, compressed

    def __repr__(self) -> str:
        return self.to_dict().__repr__()

    def _get_formats_(self) -> (str, str):
        if 'be' in self.properties and self.properties['be']:
            return self._HEADER_FMT_BE_, self._SIZE_FMT_BE_
        else:
            return self._HEADER_FMT_LE_, self._SIZE_FMT_LE_

    def _sample_bytes_(self, raw: bytes) -> str:
        return raw.hex() if len(raw) <= 2 * self._BYTES_SAMPLE_LEN_ else (
                raw[:self._BYTES_SAMPLE_LEN_].hex() + '...' + raw[-self._BYTES_SAMPLE_LEN_:].hex())

    def to_dict(self) -> dict[str, Any]:
        return {
            'magic': self.properties['magic'],
            'version': self.version,
            'payload': self._sample_bytes_(self.payload),
            'compression': self.compression,
        }

    def to_json(self, indent: None | int | str = None) -> str:
        return json.dumps(self.to_dict(), indent=indent)

    def pack(self) -> bytes:
        header_fmt, size_fmt = self._get_formats_()

        payload = self.compressed if self.compressed else self.payload
        header_with_zero_checksum = struct.pack(header_fmt, self.identity, 0, len(payload), self.version.encode('utf-8'))
        calculated_checksum = zlib.crc32(header_with_zero_checksum + payload)
        header = struct.pack(header_fmt, self.identity, calculated_checksum, len(payload), self.version.encode('utf-8'))

        return bytes(header + payload)

    def unpack(self, raw: bytes) -> (Firmware, int):
        if len(raw) < self._HEADER_LEN_:
            raise ValueError(f"Raw data must have at least {self._HEADER_LEN_} bytes")

        header = raw[:self._HEADER_LEN_]
        if header[:self._SIZE_LEN_] in MAGIC:
            self.properties = MAGIC[header[:self._SIZE_LEN_]]
        else:
            # detect endianness: for files over 64KB only one firmware is assumed to be included
            self.properties = {'be': False}
            if len(raw) < 0x10000 + self._HEADER_LEN_:
                if header[2 * self._SIZE_LEN_:][:2] == b'\x00' * 2:
                    self.properties['be'] = True
            else:
                if header[2 * self._SIZE_LEN_:][:4] == struct.pack(self._SIZE_FMT_BE_, len(raw) - self._HEADER_LEN_):
                    self.properties['be'] = True

        header_fmt, size_fmt = self._get_formats_()
        self.identity, checksum, size, version = struct.unpack(header_fmt, header)
        self.version = version.decode('utf-8').replace('\x00', '')
        if len(raw) < self._HEADER_LEN_ + size:
            raise ValueError("Raw data length doesn't match payload size")

        self.payload = raw[self._HEADER_LEN_:][:size]
        header_with_zero_checksum = struct.pack(header_fmt, self.identity, 0, size, version)
        calculated_checksum = zlib.crc32(header_with_zero_checksum + self.payload)
        if checksum != calculated_checksum:
            raise ValueError("Invalid raw data checksum: "
                             f"got {hex(checksum)} instead of {hex(calculated_checksum)}")

        if 'magic' not in self.properties:
            self.properties['magic'] = struct.pack(size_fmt, self.identity).decode('utf-8')[::-1]

        if size > 2 * self._SIZE_LEN_:
            c_size, = struct.unpack(size_fmt, raw[self._HEADER_LEN_:][:self._SIZE_LEN_])
            d_size, = struct.unpack(size_fmt, raw[self._HEADER_LEN_ + self._SIZE_LEN_:][:self._SIZE_LEN_])

            if c_size > 0 and d_size > 0 and size == c_size + self._SIZE_LEN_:
                try:
                    d_payload = nrv2b().process(raw[self._HEADER_LEN_ + self._SIZE_LEN_:][:c_size])

                    if len(d_payload) != d_size:
                        raise ValueError("Payload length doesn't match NRV2b decompressed size")

                    self.payload, self.compression, self.compressed = d_payload, 'nrv2b', self.payload
                except Exception as e:
                    raise ValueError("Failed to decompress payload with NRV2b: " + repr(e))

        return self, self._HEADER_LEN_ + size


class Document(dict[int, Firmware]):
    def to_dict(self) -> dict[str, Any]:
        result = {}
        for k, v in self.items():
            result[k] = v.to_dict()
        return result

    def to_json(self, indent: None | int | str = None) -> str:
        return json.dumps(self.to_dict(), indent=indent)

    def pack(self) -> bytes:
        result = bytes([])
        for k, v in self.items():
            result += v.pack()
        return result

    def unpack(self, raw: bytes, offset: int = 0) -> Document:
        if offset >= len(raw): return self
        self[offset], length = Firmware().unpack(raw[offset:])
        return self.unpack(raw, offset + length)

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
