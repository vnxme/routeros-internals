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

import lief
import os
import re
import struct
import typing

ME = os.path.basename(__file__)

MINSIZE_KERNEL = 2 * 1024 * 1024

PATTERN_ELF = rb'\x7fELF[\x00-\xff]{2}\x01[\x00-\xff]'
PATTERN_PE = rb'MZ[\x00-\xff]{128}PE'

RCDATA = {
    120:{'vendor-class-identifier':'',            'arch':'x86',      'filename':'linux',        'contents':'Linux kernel x86 boot executable bzImage, version 3.3.5'},
    121:{'vendor-class-identifier':'',            'arch':'x86',      'filename':'initrd.rgz',   'contents':'XZ compressed data, checksum CRC32'},
    122:{'vendor-class-identifier':'',            'arch':'x86',      'filename':'syslinux',     'contents':'SYSLINUX loader (version 2.08)'},
    #123
    124:{'vendor-class-identifier':'',            'arch':'x86',      'filename':'syslinux.cfg', 'contents':'ASCII text', 'comment':'refers to #120 and #132'},
    125:{'vendor-class-identifier':'PXEClient',   'arch':'x86',      'filename':'image',        'contents':'data', 'comment':'refers to #120, #126 and #142'},
    126:{'vendor-class-identifier':'',            'arch':'x86',      'filename':'pxelinux.cfg', 'contents':'ASCII text'},
    127:{'vendor-class-identifier':'Etherboot',   'arch':'x86',      'filename':'kernel.elf',   'contents':'ELF 32-bit LSB executable, Intel 80386, version 1', 'comment':'refers to #120 and #121'},
    128:{'vendor-class-identifier':'Mikroboot'},
    129:{'vendor-class-identifier':'Powerboot',   'arch':'ppc-e300', 'filename':'kernel.elf',   'contents':'ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1'},
    130:{'vendor-class-identifier':'e500_boot',   'arch':'ppc-e500', 'filename':'kernel.elf',   'contents':'ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1'},
    131:{'vendor-class-identifier':'Mips_boot',   'arch':'mipsbe',   'filename':'kernel.elf',   'contents':'ELF 32-bit MSB executable, MIPS, MIPS32 rel2 version 1'},
    132:{'vendor-class-identifier':'',            'arch':'x86',      'filename':'initrd.rgz',   'contents':'XZ compressed data, checksum CRC32'},
    #133
    134:{'vendor-class-identifier':'',            'arch':'x86',      'filename':'syslinux.exe', 'contents':'PE32 executable (console) Intel 80386'},
    135:{'vendor-class-identifier':'440__boot',   'arch':'ppc-440',  'filename':'kernel.elf',   'contents':'ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1'},
    136:{'vendor-class-identifier':'tile_boot',   'arch':'tile',     'filename':'kernel.elf',   'contents':'ELF 64-bit LSB executable, Tilera TILE-Gx, version 1'},
    137:{'vendor-class-identifier':'ARM__boot',   'arch':'arm',      'filename':'kernel.elf',   'contents':'ELF 32-bit LSB executable, ARM, EABI5 version 1'},
    138:{'vendor-class-identifier':'MMipsBoot',   'arch':'mmips',    'filename':'kernel.elf',   'contents':'ELF 32-bit LSB executable, MIPS, MIPS32 rel2 version 1'},
    139:{'vendor-class-identifier':'ARM64__boot', 'arch':'arm64',    'filename':'kernel.elf',   'contents':'ELF 64-bit LSB executable, ARM aarch64, version 1'},
    #140
    #141
    142:{'vendor-class-identifier':'',            'arch':'x86',      'filename':'ldlinux.elf',  'contents':'ELF 32-bit LSB shared object, Intel 80386, version 1'},
    143:{'vendor-class-identifier':'',            'arch':'x86',      'filename':'kernel.efi',   'contents':'Linux kernel x86 boot executable bzImage, version 5.6.3-64', 'comment':'used instead of #125 if client-system-arch == 00:07 (x86_64)'},
    #144
    #145
    #146
    #147
    #148
    #149
    150:{'vendor-class-identifier':'',            'arch':'x86',      'filename':'disk-drivers.npk', 'contents':'data'},
}

def guess_arch_of_routeros_kernel_elf(binary: lief.ELF.Binary) -> str:
    header: lief.ELF.Header = binary.header
    arch = header.machine_type.name.lower()
    if header.identity_data == lief.ELF.Header.ELF_DATA.LSB:  # little endian
        if header.machine_type == lief.ELF.ARCH.ARM:
            arch = 'arm'
        elif header.machine_type == lief.ELF.ARCH.AARCH64:
            arch = 'arm64'
        elif header.machine_type == lief.ELF.ARCH.MIPS:
            arch = 'mmips'
        elif header.machine_type == lief.ELF.ARCH.TILEGX:
            arch = 'tile'
    elif header.identity_data == lief.ELF.Header.ELF_DATA.MSB:  # big endian
        if header.machine_type == lief.ELF.ARCH.MIPS:
            arch = 'mipsbe'
        elif header.machine_type == lief.ELF.ARCH.PPC:
            section = binary.get_section('.rodata')
            if section:
                updates = re.search(rb'/lib/firmware/updates/\d\.\d(\.\d)?', section.content)
                if updates is not None:
                    if section.content[updates.end():][:4] == b'-440':
                        arch = 'ppc-440'
                    elif section.content[updates.end():][:5] == b'-e500':
                        arch = 'ppc-e500'
                    else:
                        arch = 'ppc-e300'
    return arch

def guess_arch_of_routeros_kernel_pe(binary: lief.PE.Binary) -> str:
    header: lief.PE.Header = binary.header
    arch = header.machine.name.lower()
    if header.machine in [lief.PE.Header.MACHINE_TYPES.AMD64, lief.PE.Header.MACHINE_TYPES.I386]: arch = 'x86'
    return arch

def unpack_elf_with_lief(binary: lief.ELF.Binary, filename:str, directory: str, verbose: bool = False):
    section = binary.get_section('.text')
    if not section: return

    if verbose: print(f"{ME}: File '{filename}' is a valid ELF file with the following resources:")

    data, offset = bytes(section.content), 0
    while True:
        match = re.search(PATTERN_ELF + rb'|' + PATTERN_PE, data[offset:])
        if match is None: break

        offset += match.start()
        payload = data[offset:]

        binary = None
        if len(payload) >= MINSIZE_KERNEL:
            lief.logging.disable()  # disable warnings shown while parsing EFI payload
            binary = lief.parse(payload)
            lief.logging.enable()   # enable warnings

        if isinstance(binary, lief.ELF.Binary):
            arch = guess_arch_of_routeros_kernel_elf(binary)
            header: lief.ELF.Header = binary.header
            size = header.section_header_offset + header.section_header_size * header.numberof_sections
            target = f"{offset}-{arch}-kernel.elf"
            if verbose: print(f"{ME}: - ELF at offset {offset} ({offset:x}) with size {size} for {arch}")
        elif isinstance(binary, lief.PE.Binary):
            arch = guess_arch_of_routeros_kernel_pe(binary)
            size = binary.overlay_offset if binary.overlay_offset > 0 else len(payload)
            target = f"{offset}-{arch}-kernel.efi"
            if verbose: print(f"{ME}: - EFI at offset {offset} ({offset:x}) with size {size} for {arch}")
        else:
            if len(payload) < MINSIZE_KERNEL:
                if verbose: print(
                    f"{ME}: Too small ELF/EFI at offset {offset} ({offset:x}) starting with {payload[:16]:x}. Skipping")
            else:
                if verbose: print(
                    f"{ME}: Failed to parse ELF/EFI at offset {offset} ({offset:x}) starting with {payload[:16]:x}. Skipping")
            offset += match.end() - match.start()
            continue

        payload, offset = payload[:size], offset + size
        with open(os.path.join(directory, target), 'wb') as file: file.write(payload)

def unpack_pe_with_lief(binary: lief.PE.Binary, filename:str, directory: str, verbose: bool = False):
    if not binary.has_resources: return

    manager = binary.resources_manager
    if not isinstance(manager, lief.PE.ResourcesManager): return

    rcdata = manager.get_node_type(lief.PE.ResourcesManager.TYPE.RCDATA)
    if not rcdata.is_directory: return

    if verbose: print(f"{ME}: File '{filename}' is a valid PE file with the following resources:")
    for res_node in rcdata.childs:
        if not res_node.is_directory: continue
        for lang_node in res_node.childs:
            if not lang_node.is_data: continue
            data = typing.cast(lief.PE.ResourceData, lang_node)

            size, = struct.unpack('<I', data.content[:4])
            if size + 4 > len(data.content): continue

            offset = data.offset + 4
            payload = bytes(data.content[4:][:size])
            target = f"{offset}-unknown.bin"

            if res_node.id in RCDATA:
                arch = RCDATA[res_node.id]['arch']
                target = f"{offset}-{arch}-{RCDATA[res_node.id]['filename']}"
                if verbose: print(f"{ME}: - ID {res_node.id} at offset {offset} ({offset:x}) with size {size} for {arch}")
            else:
                binary = None
                if size >= MINSIZE_KERNEL and (re.match(PATTERN_ELF, payload[:8]) or re.match(PATTERN_PE, payload[:132])):
                    lief.logging.disable()  # disable warnings shown while parsing EFI payload
                    binary = lief.parse(payload)
                    lief.logging.enable()   # enable warnings

                if isinstance(binary, lief.ELF.Binary):
                    arch = guess_arch_of_routeros_kernel_elf(binary)
                    target = f"{offset}-{arch}-kernel.elf"
                    if verbose: print(f"{ME}: - ELF at offset {offset} ({offset:x}) with size {size} for {arch}")
                elif isinstance(binary, lief.PE.Binary):
                    arch = guess_arch_of_routeros_kernel_pe(binary)
                    target = f"{offset}-{arch}-kernel.efi"
                    if verbose: print(f"{ME}: - EFI at offset {offset} ({offset:x}) with size {size} for {arch}")
                else:
                    if verbose: print(f"{ME}: - ID {res_node.id} at offset {offset} ({offset:x}) with size {size}")

            with open(os.path.join(directory, target), 'wb') as file: file.write(payload)

def unpack_pe_with_pefile(filename: str, directory: str, verbose: bool = False):
    import pefile

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

                if t.id == pefile.RESOURCE_TYPE.get('RT_RCDATA'):
                    if r.id in RCDATA:
                        rcdata = RCDATA[r.id]
                        target = f"{r.id:0=3}-{rcdata['arch']}-{rcdata['filename']}"
                    else:
                        target = f"{r.id:0=3}-unknown.bin"

                    data = pe.get_memory_mapped_image()[l.data.struct.OffsetToData:][:l.data.struct.Size]
                    size, = struct.unpack('<I', data[:4])
                    if size + 4 > l.data.struct.Size: continue
                    payload = data[4:][:size]

                    with open(os.path.join(directory, target), 'wb') as file: file.write(payload)

    pe.close()

def unpack_with_lief_or_pefile(filename: str, directory: str, verbose: bool = False, use_pefile: bool = False):
    os.makedirs(directory, exist_ok=True)

    if use_pefile:
        unpack_pe_with_pefile(filename, directory, verbose)
    else:
        binary = lief.parse(filename)
        if isinstance(binary, lief.PE.Binary):
            unpack_pe_with_lief(binary, filename, directory, verbose)
        elif isinstance(binary, lief.ELF.Binary) and binary.has_section('.text'):
            unpack_elf_with_lief(binary, filename, directory, verbose)
        else:
            if verbose: print(f"{ME}: File '{filename}' is not a valid ELF or PE file. Exiting")

if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(description='unpack netinstall executable')
    parser.add_argument('filename', type=str, help='netinstall executable filename')
    parser.add_argument('--directory', type=str, help='directory to unpack netinstall executable into')
    parser.add_argument('--use-pefile', action='store_true', help='use pefile instead of lief to unpack a PE file')
    parser.add_argument('--verbose', action='store_true', help='verbose output')
    args = parser.parse_args()

    if args.filename is not None and os.path.exists(args.filename):
        unpack_with_lief_or_pefile(args.filename, os.path.join(os.path.dirname(args.filename), f"_{os.path.basename(args.filename)}")
        if args.directory is None else args.directory, args.verbose, args.use_pefile)
