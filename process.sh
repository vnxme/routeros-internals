#!/bin/bash

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

MD="$(dirname -- "$(realpath -- "$0")")"
ME="$(basename -- "$0")"

FILE_HASHES='hashes.txt'
FILE_LINKS='links.txt'

SCRIPT_UNPACK='unpack.sh'
SCRIPT_UNPACK_FWF='unpack-fwf.py'
SCRIPT_UNPACK_NETINSTALL='unpack-netinstall.py'
SCRIPT_UNPACK_NPK='unpack-npk.py'
SCRIPT_UNPACK_X3='unpack-x3.py'

function find_files_by_name {
  # arguments:
  # $1 - name filter
  # $2 - glob path

  find $2 -maxdepth 0 -type f -name "$1" -print0 2>/dev/null || true
}

function process_files {
  # arguments:
  # $1 - file descriptor with a null-separated list of files
  # $2 - script to call with each file as an argument

  SCRIPT="${MD}/$2"
  [ ! -f "${SCRIPT}" ] && echo "${ME}: Not found ${SCRIPT}. Exiting" && exit 1
  [ ! -x "${SCRIPT}" ] && chmod +x "${SCRIPT}"

  readarray -d '' -t FILES < <(
    cat "$1"
  )
  declare -A H2RP # maps hashes to real paths
  for FILE in "${FILES[@]}"; do
    HASH="$(sha256sum "${FILE}" | cut -d ' ' -f1)"
    REAL="${H2RP[${HASH}]}"
    if [ -n "${REAL}" ]; then
      RELATIVE="$(realpath --relative-to='.' "${REAL}")"
      echo "${ME}: Found ${FILE} with a matching SHA256 hash. Replacing it with a symbolic link to ${RELATIVE}"
      ln -sfr "${REAL}" "${FILE}"
      echo -e "${FILE} ${RELATIVE}" >> "${FILE_LINKS}"
    else
      echo "${ME}: Found ${FILE} with a SHA256 hash of ${HASH}. Calling $2"
      "${SCRIPT}" "${FILE}" || true
      echo -e "${HASH} ${FILE}" >> "${FILE_HASHES}"
      H2RP[${HASH}]="$(realpath "${FILE}")"
    fi
  done
}

if [ "${EUID:-$(id -u)}" -ne 0 ]; then
  if [ -n "$(which sudo)" ]; then
    echo "${ME}: Root permissions are required. Using sudo to run as root"
    sudo bash -- "$0" "$@"
    exit $?
  else
    echo "${ME}: Root permissions are required. Using su -c to run as root"
    su - root -c "cd \"${PWD}; bash -- \"$(realpath -- "$0")\" \"$@\""
    exit $?
  fi
fi

[ $# -gt 0 ] && { echo "${ME}: Started with $# arguments: $@"; } || { echo "${ME}: Started with no arguments"; }

if [ -n "$1" ]; then
  [ ! -d "$1" ] && { echo "${ME}: Not found directory $1 ($(realpath -- "$1")). Exiting"; exit 1; }
  cd -- "$1"
fi

# Clear contents of support files
truncate -s 0 -- "${FILE_HASHES}"
truncate -s 0 -- "${FILE_LINKS}"

# Unpack TAR.GZ files
process_files <(
  find_files_by_name '*.tar.gz' '*/*'
) "${SCRIPT_UNPACK}"

# Unpack EXE.ZIP files
process_files <(
  find_files_by_name '*.exe.zip' '*/*'
) "${SCRIPT_UNPACK}"

# Unpack EXE files
process_files <(
  find_files_by_name '*.exe' '*/_*.exe.zip/*'
) "${SCRIPT_UNPACK_NETINSTALL}"

# Unpack ISO files
process_files <(
  find_files_by_name '*.iso' '*/*'
) "${SCRIPT_UNPACK}"

# Unpack IMG.ZIP files
process_files <(
  find_files_by_name '*.img.zip' '*/*'
) "${SCRIPT_UNPACK}"

# Unpack IMG files
process_files <(
  find_files_by_name '*.img' '*/_*.img.zip/*'
  find_files_by_name '*.img' '*/_*.iso/*'
) "${SCRIPT_UNPACK}"

# Unpack NPK files
process_files <(
  find_files_by_name '*.npk' '*/*'
  find_files_by_name '*.npk' '*/_*.img.zip/_*.img/loop/*'
  find_files_by_name 'image' '*/_*.img.zip/_*.img/part2/var/pdb/*/*'
  find_files_by_name '*.npk' '*/_*.iso/*'
  find_files_by_name '*.npk' '*/_*.exe.zip/_*.exe/*'
) "${SCRIPT_UNPACK_NPK}"

# Unpack SFS files
process_files <(
  find_files_by_name '*.sfs' '*/_*.npk/*'
  find_files_by_name '*.sfs' '*/_*.img.zip/_*.img/loop/_*.npk/*'
  find_files_by_name '*.sfs' '*/_*.img.zip/_*.img/part2/var/pdb/*/_image/*'
  find_files_by_name '*.sfs' '*/_*.iso/_*.npk/*'
  find_files_by_name '*.sfs' '*/_*.exe.zip/_*.exe/_*.npk/*'
) "${SCRIPT_UNPACK}"

# Unpack JG.GZ files
process_files <(
  find_files_by_name '*-*.jg.gz' '*/_*.npk/_*.sfs/home/web/webfig/*'
  find_files_by_name '*-*.jg.gz' '*/_*.img.zip/_*.img/loop/_*.npk/_*.sfs/home/web/webfig/*'
  find_files_by_name '*-*.jg.gz' '*/_*.img.zip/_*.img/part2/var/pdb/*/_image/_*.sfs/home/web/webfig/*'
  find_files_by_name '*-*.jg.gz' '*/_*.iso/_*.npk/_*.sfs/home/web/webfig/*'
  find_files_by_name '*-*.jg.gz' '*/_*.exe.zip/_*.exe/_*.npk/_*.sfs/home/web/webfig/*'
) "${SCRIPT_UNPACK}"

# Unpack X3 files
process_files <(
  find_files_by_name '*.x3' '*/_*.npk/_*.sfs/nova/etc/*/*'
  find_files_by_name '*.x3' '*/_*.npk/_*.sfs/bndl/*/nova/etc/*/*'
  find_files_by_name '*.x3' '*/_*.img.zip/_*.img/loop/_*.npk/_*.sfs/nova/etc/*/*'
  find_files_by_name '*.x3' '*/_*.img.zip/_*.img/loop/_*.npk/_*.sfs/bndl/*/nova/etc/*/*'
  find_files_by_name '*.x3' '*/_*.img.zip/_*.img/part2/var/pdb/*/_image/_*.sfs/nova/etc/*/*'
  find_files_by_name '*.x3' '*/_*.img.zip/_*.img/part2/var/pdb/*/_image/_*.sfs/bndl/*/nova/etc/*/*'
  find_files_by_name '*.x3' '*/_*.iso/_*.npk/_*.sfs/nova/etc/*/*'
  find_files_by_name '*.x3' '*/_*.iso/_*.npk/_*.sfs/bndl/*/nova/etc/*/*'
  find_files_by_name '*.x3' '*/_*.exe.zip/_*.exe/_*.npk/_*.sfs/nova/etc/*/*'
  find_files_by_name '*.x3' '*/_*.exe.zip/_*.exe/_*.npk/_*.sfs/bndl/*/nova/etc/*/*'
) "${SCRIPT_UNPACK_X3}"

# Unpack bzImage files
process_files <(
  find_files_by_name '*.EFI' 'x86/_*.npk/*.files/boot/EFI/BOOT/*'
  find_files_by_name '*.EFI' 'x86/_*.npk/_*.sfs/boot/EFI/BOOT/*'
  find_files_by_name 'linux' 'x86/_*.img.zip/_*.img/loop/*'
  find_files_by_name '*.EFI' 'x86/_*.img.zip/_*.img/part1/EFI/BOOT/*'
  find_files_by_name '*.EFI' 'x86/_*.img.zip/_*.img/part2/var/pdb/*/_image/*.files/boot/EFI/BOOT/*'
  find_files_by_name '*.EFI' 'x86/_*.img.zip/_*.img/part2/var/pdb/*/_image/_*.sfs/boot/EFI/BOOT/*'
  find_files_by_name 'linux.*' 'x86/_*.iso/_*.img/loop/*'
  find_files_by_name '*.EFI' 'x86/_*.iso/_*.npk/*.files/boot/EFI/BOOT/*'
  find_files_by_name '*.EFI' 'x86/_*.iso/_*.npk/_*.sfs/boot/EFI/BOOT/*'
  find_files_by_name '*-x86-kernel' '*/_*.exe.zip/_*.exe/*'
) "${SCRIPT_UNPACK}"

# Unpack Image and ELF files (1/2)
process_files <(
  find_files_by_name 'kernel' 'arm/_*.npk/*.files/boot/*'
  find_files_by_name 'kernel' 'arm64/_*.npk/*.files/boot/*'
  find_files_by_name '*.EFI' 'arm64/_*.img.zip/_*.img/part1/EFI/BOOT/*'
  find_files_by_name 'kernel' 'arm64/_*.img.zip/_*.img/part2/var/pdb/*/_image/*.files/boot/*'
  find_files_by_name '*.EFI' 'arm64/_*.iso/_*.img/loop/EFI/BOOT/*'
  find_files_by_name 'kernel' 'arm64/_*.iso/_*.npk/*.files/boot/*'
  find_files_by_name 'kernel' 'mipsbe/_*.npk/*.files/boot/*'
  find_files_by_name 'kernel' 'mmips/_*.npk/*.files/boot/*'
  find_files_by_name 'kernel' 'ppc/_*.npk/*.files/boot/*'
  find_files_by_name 'kernel' 'smips/_*.npk/*.files/boot/*'
  find_files_by_name 'kernel' 'tile/_*.npk/*.files/boot/*'
  find_files_by_name '*-arm-kernel' '*/_*.exe.zip/_*.exe/*'
  find_files_by_name '*-arm64-kernel' '*/_*.exe.zip/_*.exe/*'
  find_files_by_name '*-mipsbe-kernel' '*/_*.exe.zip/_*.exe/*'
  find_files_by_name '*-mmips-kernel' '*/_*.exe.zip/_*.exe/*'
  find_files_by_name '*-ppc-*-kernel' '*/_*.exe.zip/_*.exe/*'
  find_files_by_name '*-tile-kernel' '*/_*.exe.zip/_*.exe/*'
  find_files_by_name '*.vmlinux' 'x86/_*.npk/*.files/boot/EFI/BOOT/_*.EFI/*'
  find_files_by_name '*.vmlinux' 'x86/_*.npk/_*.sfs/boot/EFI/BOOT/_*.EFI/*'
  find_files_by_name '*.vmlinux' 'x86/_*.img.zip/_*.img/loop/_linux/*'
  find_files_by_name '*.vmlinux' 'x86/_*.img.zip/_*.img/part1/EFI/BOOT/_*.EFI/*'
  find_files_by_name '*.vmlinux' 'x86/_*.img.zip/_*.img/part2/var/pdb/*/_image/*.files/boot/EFI/BOOT/_*.EFI/*'
  find_files_by_name '*.vmlinux' 'x86/_*.img.zip/_*.img/part2/var/pdb/*/_image/_*.sfs/boot/EFI/BOOT/_*.EFI/*'
  find_files_by_name '*.vmlinux' 'x86/_*.iso/_*.img/loop/_linux.*/*'
  find_files_by_name '*.vmlinux' 'x86/_*.iso/_*.npk/*.files/boot/EFI/BOOT/_*.EFI/*'
  find_files_by_name '*.vmlinux' 'x86/_*.iso/_*.npk/_*.sfs/boot/EFI/BOOT/_*.EFI/*'
  find_files_by_name '*.vmlinux' '*/_*.exe.zip/_*.exe/*-x86-kernel/*'
) "${SCRIPT_UNPACK}"

# Unpack Image and ELF files (2/2)
process_files <(
  find_files_by_name '*.vmlinux' 'arm/_*.npk/*.files/boot/_kernel/*'
  find_files_by_name '*.vmlinux' 'arm64/_*.npk/*.files/boot/_kernel/*'
  find_files_by_name '*.vmlinux' 'arm64/_*.img.zip/_*.img/part2/var/pdb/*/_image/*.files/boot/_kernel/*'
  find_files_by_name '*.vmlinux' 'arm64/_*.iso/_*.npk/*.files/boot/_kernel/*'
  find_files_by_name '*.vmlinux' 'mipsbe/_*.npk/*.files/boot/_kernel/*'
  find_files_by_name '*.vmlinux' 'mmips/_*.npk/*.files/boot/_kernel/*'
  find_files_by_name '*.vmlinux' 'ppc/_*.npk/*.files/boot/_kernel/*'
  find_files_by_name '*.vmlinux' 'smips/_*.npk/*.files/boot/_kernel/*'
  find_files_by_name '*.vmlinux' 'tile/_*.npk/*.files/boot/_kernel/*'
  find_files_by_name '*.vmlinux' '*/_*.exe.zip/_*.exe/*-arm-kernel/*'
  find_files_by_name '*.vmlinux' '*/_*.exe.zip/_*.exe/*-arm64-kernel/*'
  find_files_by_name '*.vmlinux' '*/_*.exe.zip/_*.exe/*-mipsbe-kernel/*'
  find_files_by_name '*.vmlinux' '*/_*.exe.zip/_*.exe/*-mmips-kernel/*'
  find_files_by_name '*.vmlinux' '*/_*.exe.zip/_*.exe/*-ppc-*-kernel/*'
  find_files_by_name '*.vmlinux' '*/_*.exe.zip/_*.exe/*-tile-kernel/*'
) "${SCRIPT_UNPACK}"

# Unpack RGZ files
process_files <(
  find_files_by_name 'initrd.rgz' 'tile/_*.npk/*.files/boot/*'
  find_files_by_name 'initrd.rgz' 'tile/_*.npk/_*.sfs/boot/*'
  find_files_by_name '*-initrd.rgz' '*/_*.exe.zip/_*.exe/*'
) "${SCRIPT_UNPACK}"

# Unpack CPIO files
process_files <(
  find_files_by_name '*.cpio' 'arm/_*.npk/*.files/boot/_kernel/*'
  find_files_by_name '*.cpio' 'arm/_*.npk/*.files/boot/_kernel/_*.vmlinux/*'
  find_files_by_name '*.cpio' 'arm64/_*.npk/*.files/boot/_kernel/*'
  find_files_by_name '*.cpio' 'arm64/_*.npk/*.files/boot/_kernel/_*.vmlinux/*'
  find_files_by_name '*.cpio' 'arm64/_*.img.zip/_*.img/part1/EFI/BOOT/_*.EFI/*'
  find_files_by_name '*.cpio' 'arm64/_*.img.zip/_*.img/part2/var/pdb/*/_image/*.files/boot/_kernel/*'
  find_files_by_name '*.cpio' 'arm64/_*.img.zip/_*.img/part2/var/pdb/*/_image/*.files/boot/_kernel/_*.vmlinux/*'
  find_files_by_name '*.cpio' 'arm64/_*.iso/_*.img/loop/EFI/BOOT/_*.EFI/*'
  find_files_by_name '*.cpio' 'arm64/_*.iso/_*.npk/*.files/boot/_kernel/*'
  find_files_by_name '*.cpio' 'arm64/_*.iso/_*.npk/*.files/boot/_kernel/_*.vmlinux/*'
  find_files_by_name '*.cpio' 'mipsbe/_*.npk/*.files/boot/_kernel/*'
  find_files_by_name '*.cpio' 'mipsbe/_*.npk/*.files/boot/_kernel/_*.vmlinux/*'
  find_files_by_name '*.cpio' 'mmips/_*.npk/*.files/boot/_kernel/*'
  find_files_by_name '*.cpio' 'mmips/_*.npk/*.files/boot/_kernel/_*.vmlinux/*'
  find_files_by_name '*.cpio' 'ppc/_*.npk/*.files/boot/_kernel/*'
  find_files_by_name '*.cpio' 'ppc/_*.npk/*.files/boot/_kernel/_*.vmlinux/*'
  find_files_by_name '*.cpio' 'smips/_*.npk/*.files/boot/_kernel/*'
  find_files_by_name '*.cpio' 'smips/_*.npk/*.files/boot/_kernel/_*.vmlinux/*'
  find_files_by_name '*.cpio' 'tile/_*.npk/*.files/boot/_kernel/*'
  find_files_by_name '*.cpio' 'tile/_*.npk/*.files/boot/_kernel/_*.vmlinux/*'
  find_files_by_name 'initrd' 'tile/_*.npk/*.files/boot/_initrd.rgz/*'
  find_files_by_name 'initrd' 'tile/_*.npk/_*.sfs/boot/_initrd.rgz/*'
  find_files_by_name '*.cpio' 'x86/_*.npk/*.files/boot/EFI/BOOT/_*.EFI/_*.vmlinux/*'
  find_files_by_name '*.cpio' 'x86/_*.npk/_*.sfs/boot/EFI/BOOT/_*.EFI/_*.vmlinux/*'
  find_files_by_name '*.cpio' 'x86/_*.img.zip/_*.img/loop/_linux/_*.vmlinux/'
  find_files_by_name '*.cpio' 'x86/_*.img.zip/_*.img/part1/EFI/BOOT/_*.EFI/_*.vmlinux/*'
  find_files_by_name '*.cpio' 'x86/_*.img.zip/_*.img/part2/var/pdb/*/_image/*.files/boot/EFI/BOOT/_*.EFI/_*.vmlinux/*'
  find_files_by_name '*.cpio' 'x86/_*.img.zip/_*.img/part2/var/pdb/*/_image/_*.sfs/boot/EFI/BOOT/_*.EFI/_*.vmlinux/*'
  find_files_by_name '*.cpio' 'x86/_*.iso/_*.img/loop/_linux.*/_*.vmlinux/*'
  find_files_by_name '*.cpio' 'x86/_*.iso/_*.npk/*.files/boot/EFI/BOOT/_*.EFI/_*.vmlinux/*'
  find_files_by_name '*.cpio' 'x86/_*.iso/_*.npk/_*.sfs/boot/EFI/BOOT/_*.EFI/_*.vmlinux/*'
  find_files_by_name '*.cpio' '*/_*.exe.zip/_*.exe/*-arm-kernel/*'
  find_files_by_name '*.cpio' '*/_*.exe.zip/_*.exe/*-arm-kernel/_*.vmlinux/*'
  find_files_by_name '*.cpio' '*/_*.exe.zip/_*.exe/*-arm64-kernel/*'
  find_files_by_name '*.cpio' '*/_*.exe.zip/_*.exe/*-arm64-kernel/_*.vmlinux/*'
  find_files_by_name '*.cpio' '*/_*.exe.zip/_*.exe/*-mipsbe-kernel/*'
  find_files_by_name '*.cpio' '*/_*.exe.zip/_*.exe/*-mipsbe-kernel/_*.vmlinux/*'
  find_files_by_name '*.cpio' '*/_*.exe.zip/_*.exe/*-mmips-kernel/*'
  find_files_by_name '*.cpio' '*/_*.exe.zip/_*.exe/*-mmips-kernel/_*.vmlinux/*'
  find_files_by_name '*.cpio' '*/_*.exe.zip/_*.exe/*-ppc-*-kernel/*'
  find_files_by_name '*.cpio' '*/_*.exe.zip/_*.exe/*-ppc-*-kernel/_*.vmlinux/*'
  find_files_by_name '*.cpio' '*/_*.exe.zip/_*.exe/*-tile-kernel/*'
  find_files_by_name '*.cpio' '*/_*.exe.zip/_*.exe/*-tile-kernel/_*.vmlinux/*'
  find_files_by_name '*.cpio' '*/_*.exe.zip/_*.exe/*-x86-kernel/_*.vmlinux/*'
  find_files_by_name 'initrd' '*/_*.exe.zip/_*.exe/_*-initrd.rgz/*'
) "${SCRIPT_UNPACK}"

# Unpack DTB files
process_files <(
  find_files_by_name '*.dtb' 'arm/_*.npk/*.files/boot/_kernel/_*.vmlinux/*'
  find_files_by_name '*.dtb' 'mmips/_*.npk/*.files/boot/_kernel/_*.vmlinux/*'
  find_files_by_name '*.dtb' '*/_*.exe.zip/_*.exe/*-arm-kernel/_*.vmlinux/*'
  find_files_by_name '*.dtb' '*/_*.exe.zip/_*.exe/*-mmips-kernel/*'
) "${SCRIPT_UNPACK}"

# Unpack FWF files
process_files <(
  find_files_by_name '*.fwf' '*/_*.npk/_*.sfs/etc/*'
  find_files_by_name '*.fwf' '*/_*.img.zip/_*.img/part2/var/pdb/*/_image/_*.sfs/etc/*'
  find_files_by_name '*.fwf' '*/_*.iso/_*.npk/_*.sfs/etc/*'
  find_files_by_name '*.fwf' '*/_*.exe.zip/_*.exe/_*.npk/_*.sfs/etc/*'
) "${SCRIPT_UNPACK_FWF}"
