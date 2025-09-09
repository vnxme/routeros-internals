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

ME="$(basename $0)"

HA='hashes.txt'
LN='links.txt'

function process_files {
  # arguments:
  # $1 - file descriptor with a null-separated list of files
  # $2 - script to call with each file as an argument

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
      echo -e "${FILE} ${RELATIVE}" >> "${LN}"
    else
      echo "${ME}: Found ${FILE} with a SHA256 hash of ${HASH}. Calling $2"
      "$2" "${FILE}" || true
      echo -e "${HASH} ${FILE}" >> "${HA}"
      H2RP[${HASH}]="$(realpath "${FILE}")"
    fi
  done
}

if [ "${EUID:-$(id -u)}" -ne 0 ]; then
  echo "${ME}: Root permissions are required"
  if [ -n "$(which sudo)" ]; then
    echo "${ME}: Using sudo to run as root"
    sudo bash "$0" "$@"
    exit $?
  else
    echo "${ME}: Using su -c to run as root"
    su - root -c "bash $0 $@"
    exit $?
  fi
fi

[ $# -gt 0 ] && echo "${ME}: Started with $# arguments: $@" || echo "${ME}: Started with no arguments"

# Unpack TAR.GZ files
process_files <(
  find */* -maxdepth 0 -type f -name '*.tar.gz' -print0 2>/dev/null || true
) '/tmp/unpack.sh'

# Unpack EXE.ZIP files
process_files <(
  find */* -maxdepth 0 -type f -name '*.exe.zip' -print0 2>/dev/null || true
) '/tmp/unpack.sh'

# Unpack EXE files
process_files <(
  find */_*.exe.zip/* -maxdepth 0 -type f -name '*.exe' -print0 2>/dev/null || true
) '/tmp/unpack.sh'

# Unpack ISO files
process_files <(
  find */* -maxdepth 0 -type f -name '*.iso' -print0 2>/dev/null || true
) '/tmp/unpack.sh'

# Unpack IMG.ZIP files
process_files <(
  find */* -maxdepth 0 -type f -name '*.img.zip' -print0 2>/dev/null || true
) '/tmp/unpack.sh'

# Unpack IMG files
process_files <(
  find */_*.img.zip/* -maxdepth 0 -type f -name '*.img' -print0 2>/dev/null || true
  find */_*.iso/* -maxdepth 0 -type f -name '*.img' -print0 2>/dev/null || true
) '/tmp/unpack.sh'

# Unpack NPK files
process_files <(
  find */* -maxdepth 0 -type f -name '*.npk' -print0 2>/dev/null || true
  find */_*.img.zip/_*.img/loop/* -maxdepth 0 -type f -name '*.npk' -print0 2>/dev/null || true
  find */_*.img.zip/_*.img/part2/var/pdb/*/image -maxdepth 0 -type f -print0 2>/dev/null || true
  find */_*.iso/* -maxdepth 0 -type f -name '*.npk' -print0 2>/dev/null || true
) '/tmp/unpack-npk.py'

# Unpack SFS files
process_files <(
  find */_*.npk/* -maxdepth 0 -type f -name '*.sfs' -print0 2>/dev/null || true
  find */_*.img.zip/_*.img/loop/_*.npk/* -maxdepth 0 -type f -name '*.sfs' -print0 2>/dev/null || true
  find */_*.img.zip/_*.img/part2/var/pdb/*/_image/* -maxdepth 0 -type f -name '*.sfs' -print0 2>/dev/null || true
  find */_*.iso/_*.npk/* -maxdepth 0 -type f -name '*.sfs' -print0 2>/dev/null || true
) '/tmp/unpack.sh'

# Unpack JG.GZ files
process_files <(
  find */_*.npk/_*.sfs/home/web/webfig/* -maxdepth 0 -type f -name '*-*.jg.gz' -print0 2>/dev/null || true
  find */_*.img.zip/_*.img/loop/_*.npk/_*.sfs/home/web/webfig/* -maxdepth 0 -type f -name '*-*.jg.gz' -print0 2>/dev/null || true
  find */_*.img.zip/_*.img/part2/var/pdb/*/_image/_*.sfs/home/web/webfig/* -maxdepth 0 -type f -name '*-*.jg.gz' -print0 2>/dev/null || true
  find */_*.iso/_*.npk/_*.sfs/home/web/webfig/* -maxdepth 0 -type f -name '*-*.jg.gz' -print0 2>/dev/null || true
) '/tmp/unpack.sh'

# Unpack X3 files
process_files <(
  find */_*.npk/_*.sfs/nova/etc/*/* -maxdepth 0 -type f -name '*.x3' -print0 2>/dev/null || true
  find */_*.npk/_*.sfs/bndl/*/nova/etc/*/* -maxdepth 0 -type f -name '*.x3' -print0 2>/dev/null || true
  find */_*.img.zip/_*.img/loop/_*.npk/_*.sfs/nova/etc/*/* -maxdepth 0 -type f -name '*.x3' -print0 2>/dev/null || true
  find */_*.img.zip/_*.img/loop/_*.npk/_*.sfs/bndl/*/nova/etc/*/* -maxdepth 0 -type f -name '*.x3' -print0 2>/dev/null || true
  find */_*.img.zip/_*.img/part2/var/pdb/*/_image/_*.sfs/nova/etc/*/* -maxdepth 0 -type f -name '*.x3' -print0 2>/dev/null || true
  find */_*.img.zip/_*.img/part2/var/pdb/*/_image/_*.sfs/bndl/*/nova/etc/*/* -maxdepth 0 -type f -name '*.x3' -print0 2>/dev/null || true
  find */_*.iso/_*.npk/_*.sfs/nova/etc/*/* -maxdepth 0 -type f -name '*.x3' -print0 2>/dev/null || true
  find */_*.iso/_*.npk/_*.sfs/bndl/*/nova/etc/*/* -maxdepth 0 -type f -name '*.x3' -print0 2>/dev/null || true
) '/tmp/unpack-x3.py'

# Unpack bzImage files
process_files <(
  find x86/_*.npk/*.files/boot/EFI/BOOT/* -maxdepth 0 -type f -name '*.EFI' -print0 2>/dev/null || true
  find x86/_*.npk/_*.sfs/boot/EFI/BOOT/* -maxdepth 0 -type f -name '*.EFI' -print0 2>/dev/null || true
  find x86/_*.img.zip/_*.img/loop/* -maxdepth 0 -type f -name 'linux' -print0 2>/dev/null || true
  find x86/_*.img.zip/_*.img/part1/EFI/BOOT/* -maxdepth 0 -type f -name '*.EFI' -print0 2>/dev/null || true
  find x86/_*.img.zip/_*.img/part2/var/pdb/*/_image/*.files/boot/EFI/BOOT/* -maxdepth 0 -type f -name '*.EFI' -print0 2>/dev/null || true
  find x86/_*.img.zip/_*.img/part2/var/pdb/*/_image/_*.sfs/boot/EFI/BOOT/* -maxdepth 0 -type f -name '*.EFI' -print0 2>/dev/null || true
  find x86/_*.iso/_*.img/loop/* -maxdepth 0 -type f -name 'linux.*' -print0 2>/dev/null || true
  find x86/_*.iso/_*.npk/*.files/boot/EFI/BOOT/* -maxdepth 0 -type f -name '*.EFI' -print0 2>/dev/null || true
  find x86/_*.iso/_*.npk/_*.sfs/boot/EFI/BOOT/* -maxdepth 0 -type f -name '*.EFI' -print0 2>/dev/null || true
) '/tmp/unpack.sh'

# Unpack Image and ELF files (1/2)
process_files <(
  find arm/_*.npk/*.files/boot/* -maxdepth 0 -type f -name 'kernel' -print0 2>/dev/null || true
  find arm64/_*.npk/*.files/boot/* -maxdepth 0 -type f -name 'kernel' -print0 2>/dev/null || true
  find arm64/_*.img.zip/_*.img/part1/EFI/BOOT/* -maxdepth 0 -type f -name '*.EFI' -print0 2>/dev/null || true
  find arm64/_*.img.zip/_*.img/part2/var/pdb/*/_image/*.files/boot/* -maxdepth 0 -type f -name 'kernel' -print0 2>/dev/null || true
  find arm64/_*.iso/_*.img/loop/EFI/BOOT/* -maxdepth 0 -type f -name '*.EFI' -print0 2>/dev/null || true
  find arm64/_*.iso/_*.npk/*.files/boot/* -maxdepth 0 -type f -name 'kernel' -print0 2>/dev/null || true
  find mipsbe/_*.npk/*.files/boot/* -maxdepth 0 -type f -name 'kernel' -print0 2>/dev/null || true
  find mmips/_*.npk/*.files/boot/* -maxdepth 0 -type f -name 'kernel' -print0 2>/dev/null || true
  find ppc/_*.npk/*.files/boot/* -maxdepth 0 -type f -name 'kernel' -print0 2>/dev/null || true
  find smips/_*.npk/*.files/boot/* -maxdepth 0 -type f -name 'kernel' -print0 2>/dev/null || true
  find tile/_*.npk/*.files/boot/* -maxdepth 0 -type f -name 'kernel' -print0 2>/dev/null || true
  find x86/_*.npk/*.files/boot/EFI/BOOT/_*.EFI/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
  find x86/_*.npk/_*.sfs/boot/EFI/BOOT/_*.EFI/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
  find x86/_*.img.zip/_*.img/loop/_linux/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
  find x86/_*.img.zip/_*.img/part1/EFI/BOOT/_*.EFI/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
  find x86/_*.img.zip/_*.img/part2/var/pdb/*/_image/*.files/boot/EFI/BOOT/_*.EFI/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
  find x86/_*.img.zip/_*.img/part2/var/pdb/*/_image/_*.sfs/boot/EFI/BOOT/_*.EFI/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
  find x86/_*.iso/_*.img/loop/_linux.*/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
  find x86/_*.iso/_*.npk/*.files/boot/EFI/BOOT/_*.EFI/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
  find x86/_*.iso/_*.npk/_*.sfs/boot/EFI/BOOT/_*.EFI/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
) '/tmp/unpack.sh'

# Unpack Image and ELF files (2/2)
process_files <(
  find arm/_*.npk/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
  find arm64/_*.npk/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
  find arm64/_*.img.zip/_*.img/part2/var/pdb/*/_image/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
  find arm64/_*.iso/_*.npk/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
  find mipsbe/_*.npk/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
  find mmips/_*.npk/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
  find ppc/_*.npk/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
  find smips/_*.npk/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
  find tile/_*.npk/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.vmlinux' -print0 2>/dev/null || true
) '/tmp/unpack.sh'

# Unpack RGZ files
process_files <(
  find tile/_*.npk/*.files/boot/* -maxdepth 0 -type f -name 'initrd.rgz' -print0 2>/dev/null || true
  find tile/_*.npk/_*.sfs/boot/* -maxdepth 0 -type f -name 'initrd.rgz' -print0 2>/dev/null || true
) '/tmp/unpack.sh'

# Unpack CPIO files
process_files <(
  find arm/_*.npk/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find arm/_*.npk/*.files/boot/_kernel/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find arm64/_*.npk/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find arm64/_*.npk/*.files/boot/_kernel/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find arm64/_*.img.zip/_*.img/part1/EFI/BOOT/_*.EFI/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find arm64/_*.img.zip/_*.img/part2/var/pdb/*/_image/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find arm64/_*.img.zip/_*.img/part2/var/pdb/*/_image/*.files/boot/_kernel/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find arm64/_*.iso/_*.img/loop/EFI/BOOT/_*.EFI/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find arm64/_*.iso/_*.npk/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find arm64/_*.iso/_*.npk/*.files/boot/_kernel/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find mipsbe/_*.npk/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find mipsbe/_*.npk/*.files/boot/_kernel/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find mmips/_*.npk/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find mmips/_*.npk/*.files/boot/_kernel/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find ppc/_*.npk/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find ppc/_*.npk/*.files/boot/_kernel/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find smips/_*.npk/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find smips/_*.npk/*.files/boot/_kernel/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find tile/_*.npk/*.files/boot/_kernel/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find tile/_*.npk/*.files/boot/_kernel/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find tile/_*.npk/*.files/boot/_initrd.rgz/* -maxdepth 0 -type f -name 'initrd' -print0 2>/dev/null || true
  find tile/_*.npk/_*.sfs/boot/_initrd.rgz/* -maxdepth 0 -type f -name 'initrd' -print0 2>/dev/null || true
  find x86/_*.npk/*.files/boot/EFI/BOOT/_*.EFI/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find x86/_*.npk/_*.sfs/boot/EFI/BOOT/_*.EFI/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find x86/_*.img.zip/_*.img/loop/_linux/_*.vmlinux/ -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find x86/_*.img.zip/_*.img/part1/EFI/BOOT/_*.EFI/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find x86/_*.img.zip/_*.img/part2/var/pdb/*/_image/*.files/boot/EFI/BOOT/_*.EFI/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find x86/_*.img.zip/_*.img/part2/var/pdb/*/_image/_*.sfs/boot/EFI/BOOT/_*.EFI/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find x86/_*.iso/_*.img/loop/_linux.*/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find x86/_*.iso/_*.npk/*.files/boot/EFI/BOOT/_*.EFI/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
  find x86/_*.iso/_*.npk/_*.sfs/boot/EFI/BOOT/_*.EFI/_*.vmlinux/* -maxdepth 0 -type f -name '*.cpio' -print0 2>/dev/null || true
) '/tmp/unpack.sh'

# Unpack DTB files
process_files <(
  find arm/_*.npk/*.files/boot/_kernel/_*.vmlinux/* -maxdepth 0 -type f -name '*.dtb' -print0 2>/dev/null || true
  find mmips/_*.npk/*.files/boot/_kernel/_*.vmlinux/* -maxdepth 0 -type f -name '*.dtb' -print0 2>/dev/null || true
) '/tmp/unpack.sh'

# Unpack FWF files
process_files <(
  find */_*.npk/_*.sfs/etc/* -maxdepth 0 -type f -name '*.fwf' -print0 2>/dev/null || true
  find */_*.img.zip/_*.img/part2/var/pdb/*/_image/_*.sfs/etc/* -maxdepth 0 -type f -name '*.fwf' -print0 2>/dev/null || true
  find */_*.iso/_*.npk/_*.sfs/etc/* -maxdepth 0 -type f -name '*.fwf' -print0 2>/dev/null || true
) '/tmp/unpack-fwf.py'
