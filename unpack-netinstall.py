#!/usr/bin/env python3

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

import os
import pefile
import struct

ME = os.path.basename(__file__)

class Resource:
    file: pefile.PE
    lang: int
    offset: int
    size: int
    type: int
    reid: int

    def __init__(self, f: pefile.PE, t: int, r: int, l: int, o: int, s: int):
        self.file, self.type, self.reid, self.lang, self.offset, self.size = f, t, r, l, o, s

    def rawdata(self):
        return self.file.get_memory_mapped_image()[self.offset:self.offset + self.size]

    def resdata(self):
        data = self.rawdata()
        length, = struct.unpack('<I', data[:4])
        return data[4:][:length] if length + 4 <= self.size else data[4:]

    def save(self, directory: str):
        if self.type == pefile.RESOURCE_TYPE.get('RT_RCDATA'):
            if self.reid in RCDATA:
                rcdata = RCDATA[self.reid]
                filename = f"{self.reid:0=3}-{rcdata['arch']}-{rcdata['alias']}"
            else:
                filename = f"{self.reid:0=3}-rcdata.bin"

            with open(os.path.join(directory, filename), 'wb') as file: file.write(self.resdata())
        # elif self.type == pefile.RESOURCE_TYPE.get('RT_MANIFEST'):
        #     with open(os.path.join(directory, 'manifest.xml'), 'wb') as file: file.write(self.rawdata())
        # elif self.type == pefile.RESOURCE_TYPE.get('RT_VERSION'):
        #     with open(os.path.join(directory, 'version.txt'), 'wb') as file: file.write(self.rawdata())
        else: return

def unpack_pefile(filename: str, directory: str, verbose: bool = False):
    os.makedirs(directory, exist_ok=True)

    try:
        pe = pefile.PE(filename)
    except pefile.PEFormatError:
        if verbose: print(f"{ME}: File '{filename}' is not a valid PE file. Exiting")
        return

    if not hasattr(pe, 'DIRECTORY_ENTRY_RESOURCE'):
        if verbose: print(f"{ME}: File '{filename}' is a valid PE file with no resources. Exiting")
        return

    if verbose: print(f"{ME}: File '{filename}' is a valid PE file with the following resources:")

    for t in getattr(getattr(pe, 'DIRECTORY_ENTRY_RESOURCE', {'entries':[]}), 'entries', []):
        if verbose: print(f"{ME}: - Type ID: {t.id}, Type: {pefile.RESOURCE_TYPE[t.id]}")

        for r in getattr(getattr(t, 'directory', {'entries':[]}), 'entries', []):
            if verbose: print(f"{ME}: -- Resource ID: {r.id}")

            for l in getattr(getattr(r, 'directory', {'entries':[]}), 'entries', []):
                if verbose: print(f"{ME}: --- Lang ID: {l.id}, Lang: {pefile.LANG[l.id & 0x00FF]}, "
                                  f"Sublang: {pefile.get_sublang_name_for_lang(l.id & 0x00FF, (l.id & 0xFF00) >> 10)}")

                if not hasattr(l, 'data') or not hasattr(l.data, 'struct'): continue
                Resource(pe, t.id, r.id, l.id, l.data.struct.OffsetToData, l.data.struct.Size).save(directory)

    pe.close()

RCDATA = {
    120:{'vendor-class-identifier':'',            'arch':'x86',      'alias':'linux',        'file':'Linux kernel x86 boot executable bzImage, version 3.3.5'},
    121:{'vendor-class-identifier':'',            'arch':'x86',      'alias':'initrd.rgz',   'file':'XZ compressed data, checksum CRC32'},
    122:{'vendor-class-identifier':'',            'arch':'x86',      'alias':'syslinux',     'file':'SYSLINUX loader (version 2.08)'},
    #123
    124:{'vendor-class-identifier':'',            'arch':'x86',      'alias':'syslinux.cfg', 'file':'ASCII text', 'comment':'refers to #120 and #132'},
    125:{'vendor-class-identifier':'PXEClient',   'arch':'x86',      'alias':'image',        'file':'data', 'comment':'refers to #120, #126 and #142'},
    126:{'vendor-class-identifier':'',            'arch':'x86',      'alias':'pxelinux.cfg', 'file':'ASCII text'},
    127:{'vendor-class-identifier':'Etherboot',   'arch':'x86',      'alias':'kernel',       'file':'ELF 32-bit LSB executable, Intel 80386, version 1', 'comment':'refers to #120 and #121'},
    128:{'vendor-class-identifier':'Mikroboot'},
    129:{'vendor-class-identifier':'Powerboot',   'arch':'ppc-e300', 'alias':'kernel',       'file':'ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1'},
    130:{'vendor-class-identifier':'e500_boot',   'arch':'ppc-e500', 'alias':'kernel',       'file':'ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1'},
    131:{'vendor-class-identifier':'Mips_boot',   'arch':'mipsbe',   'alias':'kernel',       'file':'ELF 32-bit MSB executable, MIPS, MIPS32 rel2 version 1'},
    132:{'vendor-class-identifier':'',            'arch':'x86',      'alias':'initrd.rgz',   'file':'XZ compressed data, checksum CRC32'},
    #133
    134:{'vendor-class-identifier':'',            'arch':'x86',      'alias':'syslinux.exe', 'file':'PE32 executable (console) Intel 80386'},
    135:{'vendor-class-identifier':'440__boot',   'arch':'ppc-440',  'alias':'kernel',       'file':'ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1'},
    136:{'vendor-class-identifier':'tile_boot',   'arch':'tile',     'alias':'kernel',       'file':'ELF 64-bit LSB executable, Tilera TILE-Gx, version 1'},
    137:{'vendor-class-identifier':'ARM__boot',   'arch':'arm',      'alias':'kernel',       'file':'ELF 32-bit LSB executable, ARM, EABI5 version 1'},
    138:{'vendor-class-identifier':'MMipsBoot',   'arch':'mmips',    'alias':'kernel',       'file':'ELF 32-bit LSB executable, MIPS, MIPS32 rel2 version 1'},
    139:{'vendor-class-identifier':'ARM64__boot', 'arch':'arm64',    'alias':'kernel',       'file':'ELF 64-bit LSB executable, ARM aarch64, version 1'},
    #140
    #141
    142:{'vendor-class-identifier':'',            'arch':'x86',      'alias':'ldlinux',      'file':'ELF 32-bit LSB shared object, Intel 80386, version 1'},
    143:{'vendor-class-identifier':'',            'arch':'x86',      'alias':'kernel',       'file':'Linux kernel x86 boot executable bzImage, version 5.6.3-64', 'comment':'used instead of #125 if client-system-arch == 00:07 (x86_64)'},
    #144
    #145
    #146
    #147
    #148
    #149
    150:{'vendor-class-identifier':'',            'arch':'x86',      'alias':'disk-drivers.npk', 'file':'data'},
}

if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(description='unpack netinstall executable')
    parser.add_argument('filename', type=str, help='netinstall executable filename')
    parser.add_argument('--directory', type=str, help='directory to unpack netinstall executable into')
    parser.add_argument('--verbose', action='store_true', help='verbose output')
    args = parser.parse_args()

    if args.filename is not None and os.path.exists(args.filename):
        unpack_pefile(args.filename, os.path.join(os.path.dirname(args.filename), f"_{os.path.basename(args.filename)}")
        if args.directory is None else args.directory, args.verbose)
