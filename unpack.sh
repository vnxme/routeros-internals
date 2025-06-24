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
RM=false

function clean_and_exit {
  # arguments:
  # $1 - exit code, integer
  # $2 - error message, string
  [ "${RM}" = true ] && rm -rf "${DIR}"
  [ -n "$2" ] && echo $2 >&2
  exit $1
}

function compose_readme {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  # $3 - helpers array name, string

  local -n HREF="$3"
  local TEXT="### $(basename "$1")\n"
  local README="$2/README.md"

  local BD="${HREF['blockdev']}"
  local BI="${HREF['blkid']}"
  local BW="${HREF['binwalk']}"
  local FD="${HREF['fdisk']}"
  local FI="${HREF['file']}"
  local GD="${HREF['gdisk']}"
  local II="${HREF['isoinfo']}"
  local LS="${HREF['ls']}"
  local NO="${HREF['notes']}"
  local PA="${HREF['parted']}"

  [ -n "${FI}" ] && TEXT="${TEXT}#### Identification (\`file <*>\`):\n\`\`\`\n${FI}\n\`\`\`\n"
  [ -n "${BW}" ] && TEXT="${TEXT}#### Analysis (\`binwalk <*>\`):\n\`\`\`\n${BW}\n\`\`\`\n"
  [ -n "${II}" ] && TEXT="${TEXT}#### Description (\`isoinfo -d -i <*>\`):\n\`\`\`\n${II}\n\`\`\`\n"
  [ -n "${BD}" ] && TEXT="${TEXT}#### Block device info (\`blockdev --report <*>\`):\n\`\`\`\n${BD}\n\`\`\`\n"
  [ -n "${FD}" ] && TEXT="${TEXT}#### MBR info (\`fdisk -l <*>\`):\n\`\`\`\n${FD}\n\`\`\`\n"
  [ -n "${GD}" ] && TEXT="${TEXT}#### GPT info (\`gdisk -l <*>\`):\n\`\`\`\n${GD}\n\`\`\`\n"
  [ -n "${BI}" ] && TEXT="${TEXT}#### Partition info (\`parted <*> print\`):\n\`\`\`\n${BI}\n\`\`\`\n"
  [ -n "${PA}" ] && TEXT="${TEXT}#### Partition IDs (\`blkid\`):\n\`\`\`\n${PA}\n\`\`\`\n"
  [ -n "${LS}" ] && TEXT="${TEXT}#### Listing (\`ls -AlR --time-style=full-iso <*>\`):\n\`\`\`\n${LS}\n\`\`\`\n"
  [ -n "${NO}" ] && TEXT="${TEXT}#### Notes:\n${NO}\n"
  echo -e "${TEXT}" > "${README}"
}

function unpack_bzimage {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  # $3 - helpers array name, string

  local -n HREF="$3"
  local DIR="/tmp/$(head /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 16).efi"
  local RM=false; [ ! -d "${DIR}" ] && mkdir -p "${DIR}" && RM=true

  # credits to @elseif for binary patterns
  # ref: https://github.com/elseif/MikroTikPatch/blob/main/patch.py
  local XZ_ENDS=$(LC_ALL=C grep -aboP '\x00\x00\x00\x00\x01\x59\x5A' "$1" | cut -f 1 -d ':' | head -1)
  local XZ_END; for XZ_END in ${XZ_ENDS}; do
    local XZ_START=$(head -c ${XZ_END} "$1" | LC_ALL=C grep -aboP '\xFD7zXZ\x00\x00\x01' - | cut -f 1 -d ':' | tail -1)
    if [ -n "${XZ_START}" ] && [ -n "${XZ_END}" ] && [ "${XZ_START}" -lt "${XZ_END}" ]; then
      local XZ_SIZE=$((${XZ_END}-${XZ_START}+7)) # 7 is the end pattern length
      local UNK_FILE="${DIR}/$(printf "%x" "${XZ_START}").unknown"
      local XZ_FILE="${UNK_FILE}.xz"
      dd if="$1" bs=1 skip="${XZ_START}" count="${XZ_SIZE}" of="${XZ_FILE}" > /dev/null 2>&1 || true
      if [ -s "${XZ_FILE}" -a -z "$(xz -t "${XZ_FILE}")" ]; then
        unxz -q "${XZ_FILE}" || true
        if [ -s "${UNK_FILE}" ]; then
          local OUT_FILE="$(file "${UNK_FILE}" | cut -f 2- -d ' ')"
          if [ -n "$(echo "${OUT_FILE}" | grep -E '^(ASCII )?cpio archive.*$')" ]; then
            mv "${UNK_FILE}" "${DIR}/$(printf "%x" "${XZ_START}").cpio"
          elif [ -n "$(echo "${OUT_FILE}" | grep -E '^Linux kernel (.*) boot executable Image.*$')" ]; then
            mv "${UNK_FILE}" "${DIR}/$(printf "%x" "${XZ_START}").vmlinux"
          elif [ -n "$(echo "${OUT_FILE}" | grep -E '^ELF (.*) executable.*$')" ]; then
            mv "${UNK_FILE}" "${DIR}/$(printf "%x" "${XZ_START}").vmlinux"
          fi
        fi
      fi
    fi
  done

  # unless bzImage has an XZ-compressed vmlinux inside, use a universal script
  if [ -z "$(find ${DIR}/* -maxdepth 0 -type f -name '*.vmlinux' 2>/dev/null)" ]; then
    local SCRIPT="/tmp/extract-vmlinux.sh"
    if [ ! -s "${SCRIPT}" ]; then
      clean_and_exit 2 "${ME}: Script '${SCRIPT}' is missing"
    fi

    local VMLINUX="${DIR}/fallback.vmlinux"
    "${SCRIPT}" "${FILE}" > "${VMLINUX}" || true

    if [ ! -s "${VMLINUX}" ]; then
      clean_and_exit 2 "${ME}: Could not extract an uncompressed Linux kernel image"
    fi
  fi

  rsync -rltgoD "${DIR}/" "$2/"
  HREF['ls']="$(ls -AlR --time-style=full-iso "${DIR}/" | sed -e "s,${DIR},,g")"
  [ "${RM}" = true ] && rm -rf "${DIR}"
}

function unpack_cpio {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  # $3 - helpers array name, string

  local -n HREF="$3"
  local DIR="/tmp/$(head /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 16).cpio"
  local RM=false; [ ! -d "${DIR}" ] && mkdir -p "${DIR}" && RM=true

  cpio --quiet --no-preserve-owner -idm -D "${DIR}" < "$1" || true
  rsync -rltgoD "${DIR}/" "$2/"
  HREF['ls']="$(ls -AlR --time-style=full-iso "${DIR}/" | sed -e "s,${DIR},,g")"
  [ "${RM}" = true ] && rm -rf "${DIR}"
}

function unpack_elf {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  # $3 - helpers array name, string

  local -n HREF="$3"
  local DIR="/tmp/$(head /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 16).elf"
  local RM=false; [ ! -d "${DIR}" ] && mkdir -p "${DIR}" && RM=true

  local BW="${HREF['binwalk']}"
  local CPIO_ENDS=$(echo "${BW}" | grep -E 'cpio archive(.*)TRAILER!!!' | gawk '{print $1}' | tail -1)
  local CPIO_END; for CPIO_END in ${CPIO_ENDS}; do
    local CPIO_START="$(echo "${BW}" | grep 'cpio archive' | gawk '{print $1}' | head -1)"
    if [ -n "${CPIO_START}" ] && [ -n "${CPIO_END}" ] && [ "${CPIO_START}" -lt "${CPIO_END}" ]; then
      local CPIO_SIZE=$((${CPIO_END}-${CPIO_START}+136)) # 136 is the end pattern length
      local CPIO_FILE="${DIR}/$(printf "%x" "${CPIO_START}").cpio"
      dd if="$1" bs=1 skip="${CPIO_START}" count="${CPIO_SIZE}" of="${CPIO_FILE}" > /dev/null 2>&1 || true
    fi
  done

  # credits to @elseif for binary patterns
  # ref: https://github.com/elseif/MikroTikPatch/blob/main/patch.py
  local XZ_ENDS=$(LC_ALL=C grep -aboP '\x00\x00\x00\x00\x01\x59\x5A' "$1" | cut -f 1 -d ':')
  local XZ_END; for XZ_END in ${XZ_ENDS}; do
    local XZ_START=$(head -c ${XZ_END} "$1" | LC_ALL=C grep -aboP '\xFD7zXZ\x00\x00\x01' - | cut -f 1 -d ':' | tail -1)
    if [ -n "${XZ_START}" ] && [ -n "${XZ_END}" ] && [ "${XZ_START}" -lt "${XZ_END}" ]; then
      local XZ_SIZE=$((${XZ_END}-${XZ_START}+7)) # 7 is the end pattern length
      local UNK_FILE="${DIR}/$(printf "%x" "${XZ_START}").unknown"
      local XZ_FILE="${UNK_FILE}.xz"
      dd if="$1" bs=1 skip="${XZ_START}" count="${XZ_SIZE}" of="${XZ_FILE}" > /dev/null 2>&1 || true
      if [ -s "${XZ_FILE}" -a -z "$(xz -t "${XZ_FILE}")" ]; then
        unxz "${XZ_FILE}" || true
        if [ -s "${UNK_FILE}" ]; then
          local OUT_FILE="$(file "${UNK_FILE}" | cut -f 2- -d ' ')"
          if [ -n "$(echo "${OUT_FILE}" | grep -E '^(ASCII )?cpio archive.*$')" ]; then
            mv "${UNK_FILE}" "${DIR}/$(printf "%x" "${XZ_START}").cpio"
          elif [ -n "$(echo "${OUT_FILE}" | grep -E '^Linux kernel (.*) boot executable Image.*$')" ]; then
            mv "${UNK_FILE}" "${DIR}/$(printf "%x" "${XZ_START}").vmlinux"
          elif [ -n "$(echo "${OUT_FILE}" | grep -E '^ELF (.*) executable.*$')" ]; then
            mv "${UNK_FILE}" "${DIR}/$(printf "%x" "${XZ_START}").vmlinux"
          fi
        fi
      fi
    fi
  done

  rsync -rltgoD "${DIR}/" "$2/"
  HREF['ls']="$(ls -AlR --time-style=full-iso "${DIR}/" | sed -e "s,${DIR},,g")"
  [ "${RM}" = true ] && rm -rf "${DIR}"
}

function unpack_img {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  # $3 - helpers array name, string

  local -n HREF="$3"
  local DIR="/tmp/$(head /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 16).img"
  local RM=false; [ ! -d "${DIR}" ] && mkdir -p "${DIR}" && RM=true

  [ -z "$(lsmod | grep 'nbd')" ] && modprobe nbd && sleep 0.25

  local NBD="/dev/$(lsblk | grep -e "nbd.*0B.*disk" | head -1 | cut -d ' ' -f1)"
  if [ -b "${NBD}" ]; then
    qemu-nbd -c "${NBD}" -f raw "$1" && sleep 0.25

    local BI="$(blkid | grep "${NBD}")"
    local GD="$(echo 2 | gdisk -l "${NBD}")"
    local PA="$(parted "${NBD}" print)"

    HREF['blockdev']="$(blockdev --report "${NBD}")"
    HREF['blkid']="${BI}"
    HREF['fdisk']="$(fdisk -l "${NBD}")"
    HREF['gdisk']="${GD}"
    HREF['parted']="${PA}"

    local SS="$(blockdev --getss "${NBD}")"
    dd if="${NBD}" of="${DIR}/mbr.bin" bs="${SS}" count=1 2>/dev/null
    if [ -n "$(echo "${GD}" | grep 'GPT: present')" ]; then
      local SZ="$(blockdev --getsz "${NBD}")"
      dd if="${DIR}/mbr.bin" of="${DIR}/gpt.bin" bs="${SS}" count=1 seek=0 2>/dev/null
      dd if="${NBD}" of="${DIR}/gpt.bin" bs="${SS}" count=1 skip=1 seek=1 2>/dev/null
      dd if="${NBD}" of="${DIR}/gpt.bin" bs="${SS}" count=1 skip="$((${SZ} - 1))" seek=2 2>/dev/null

      local PT="$(echo "${GD}" | grep 'Main partition table')"
      local PB="$(echo "${PT}" | cut -d ' ' -f7)"
      local PE="$(echo "${PT}" | cut -d ' ' -f12)"
      dd if="${NBD}" of="${DIR}/gpt.bin" bs="${SS}" count="$((${PE} - ${PB} + 1))" skip="${PB}" seek=3 2>/dev/null
    fi

    if [ -n "$(echo "${PA}" | grep 'Partition Table: loop')" ]; then
      local PDIR="${DIR}/loop"
      mkdir -p "${PDIR}"
      mount -o loop,ro "${NBD}" "${PDIR}" && sleep 0.25
    else
      local PARTS="$(echo "${BI}" | cut -d ':' -f1)"
      local PART; for PART in ${PARTS}; do
        local PNUM="$(echo "${PART}" | sed -e "s,${NBD}p,,g")"
        local PDIR="${DIR}/part${PNUM}"
        mkdir -p "${PDIR}"
        mount -o ro "${PART}" "${PDIR}" && sleep 0.25
      done
    fi

    rsync -rltgoD "${DIR}/" "$2/"
    HREF['ls']="$(ls -AlR --time-style=full-iso "${DIR}/" | sed -e "s,${DIR},,g")"

    local MOUNTS="$(mount | grep "${NBD}" | cut -d ' ' -f3)"
    local MOUNT; for MOUNT in ${MOUNTS}; do
      umount "${MOUNT}" && sleep 0.25
    done

    qemu-nbd -d "${NBD}" >/dev/null && sleep 0.25
  fi
  [ "${RM}" = true ] && rm -rf "${DIR}"
}

function unpack_iso {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  # $3 - helpers array name, string

  local -n HREF="$3"
  local DIR="/tmp/$(head /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 16).iso"
  local RM=false; [ ! -d "${DIR}" ] && mkdir -p "${DIR}" && RM=true

  mount -o loop,ro "$1" "${DIR}" && sleep 0.25
  rsync -rltgoD "${DIR}/" "$2/"
  HREF['ls']="$(ls -AlR --time-style=full-iso "${DIR}/" | sed -e "s,${DIR},,g")"
  umount "${DIR}" && sleep 0.25
  [ "${RM}" = true ] && rm -rf "${DIR}"
}

function unpack_sfs {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  # $3 - helpers array name, string

  local -n HREF="$3"
  local DIR="/tmp/$(head /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 16).sfs"
  local RM=false; [ ! -d "${DIR}" ] && mkdir -p "${DIR}" && RM=true

  if [ -n "$(unsquashfs -ll "$1")" ]; then
    unsquashfs -q -d "$2" "$1" || true
  fi

  rsync -rltgoD "${DIR}/" "$2/"
  HREF['ls']="$(ls -AlR --time-style=full-iso "${DIR}/" | sed -e "s,${DIR},,g")"
  [ "${RM}" = true ] && rm -rf "${DIR}"
}

function unpack_xz {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  # $3 - helpers array name, string

  local -n HREF="$3"
  local DIR="/tmp/$(head /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 16).xz"
  local RM=false; [ ! -d "${DIR}" ] && mkdir -p "${DIR}" && RM=true

  local XZ_FILE="${DIR}/$(basename "$1")"
  if [ -z "$(xz -t "$1")" ]; then
    (cp "$1" "${XZ_FILE}" && unxz -q "${XZ_FILE}") || true
  fi

  rsync -rltgoD "${DIR}/" "$2/"
  HREF['ls']="$(ls -AlR --time-style=full-iso "${DIR}/" | sed -e "s,${DIR},,g")"
  [ "${RM}" = true ] && rm -rf "${DIR}"
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

[[ ":${PATH}:" != *":/sbin:"* ]] && export PATH="${PATH}:/sbin"
[[ ":${PATH}:" != *":/usr/sbin:"* ]] && export PATH="${PATH}:/usr/sbin"
[[ ":${PATH}:" != *":/usr/local/sbin:"* ]] && export PATH="${PATH}:/usr/local/sbin"

DEPS=(binwalk blockdev blkid cpio fdisk file gdisk qemu-nbd parted rsync unsquashfs unxz)
for DEP in ${DEPS[@]}; do
  if [ -z "$(which "${DEP}")" ]; then
    clean_and_exit 2 "${ME}: Dependency '${DEP}' can't be satisfied"
  fi
done

echo "${ME}: Processing arguments $@"

FILE="$1"
if [ "$#" -ne 1 -o ! -s "${FILE}" ]; then
  clean_and_exit 2 "${ME}: The only argument must be a path to a non-empty file"
fi

DIR="$(dirname ${FILE})/_$(basename ${FILE})"
if [ ! -d "${DIR}" ]; then
  mkdir -p "${DIR}" && RM=true
elif [ -n "$(ls -A "${DIR}")" ]; then
  clean_and_exit 2 "${ME}: Directory '${DIR}' isn't empty"
fi

declare -A HELPERS
OUT_FILE="$(file "${FILE}" | cut -f 2- -d ' ')"; HELPERS['file']="${OUT_FILE}"
if [ -n "$(echo "${OUT_FILE}" | grep -E '^ISO 9660 CD-ROM filesystem data.*$')" ]; then
  # unpack a valid *.iso file
  HELPERS['isoinfo']="$(isoinfo -d -i "${FILE}")"
  unpack_iso "${FILE}" "${DIR}" "HELPERS"
  compose_readme "${FILE}" "${DIR}" "HELPERS"
elif [ -n "$(echo "${OUT_FILE}" | grep -E '^DOS/MBR boot sector.*$')" ]; then
  # unpack a valid *.img file
  unpack_img "${FILE}" "${DIR}" "HELPERS"
  compose_readme "${FILE}" "${DIR}" "HELPERS"
elif [ -n "$(echo "${OUT_FILE}" | grep -E '^Linux kernel (.*) boot executable bzImage.*$')" ]; then
  # unpack a valid Linux bzImage (could be named as *.efi or linux.*)
  HELPERS['binwalk']="$(binwalk "${FILE}" 2>/dev/null)"
  unpack_bzimage "${FILE}" "${DIR}" "HELPERS"
  compose_readme "${FILE}" "${DIR}" "HELPERS"
elif [ -n "$(echo "${OUT_FILE}" | grep -E '^Linux kernel (.*) boot executable Image.*$')" ]; then
  # unpack a valid Linux Image (could be named as *.efi, but resembles a Linux executable)
  HELPERS['binwalk']="$(binwalk "${FILE}" 2>/dev/null)"
  unpack_elf "${FILE}" "${DIR}" "HELPERS"
  compose_readme "${FILE}" "${DIR}" "HELPERS"
elif [ -n "$(echo "${OUT_FILE}" | grep -E '^ELF (.*) executable.*$')" ]; then
  # unpack a valid Linux executable (could be named as kernel)
  HELPERS['binwalk']="$(binwalk "${FILE}" 2>/dev/null)"
  unpack_elf "${FILE}" "${DIR}" "HELPERS"
  compose_readme "${FILE}" "${DIR}" "HELPERS"
elif [ -n "$(echo "${OUT_FILE}" | grep -E '^XZ compressed data.*$')" ]; then
  # unpack a valid *.xz file
  HELPERS['binwalk']="$(binwalk "${FILE}" 2>/dev/null)"
  unpack_xz "${FILE}" "${DIR}" "HELPERS"
  compose_readme "${FILE}" "${DIR}" "HELPERS"
elif [ -n "$(echo "${OUT_FILE}" | grep -E '^(ASCII )?cpio archive.*$')" ]; then
  # unpack a valid *.cpio file
  HELPERS['binwalk']="$(binwalk "${FILE}" 2>/dev/null)"
  unpack_cpio "${FILE}" "${DIR}" "HELPERS"
  compose_readme "${FILE}" "${DIR}" "HELPERS"
elif [ -n "$(echo "${OUT_FILE}" | grep -E '^Squashfs filesystem.*$')" ]; then
  # unpack a valid *.sfs file
  HELPERS['binwalk']="$(binwalk "${FILE}" 2>/dev/null)"
  unpack_sfs "${FILE}" "${DIR}" "HELPERS"
  compose_readme "${FILE}" "${DIR}" "HELPERS"
else
  # reject an unknown file
  clean_and_exit 2 "${ME}: File '${FILE}' containing '${OUT_FILE}' can't be unpacked"
fi

[ -n "$(ls -A "${DIR}")" ] && RM=false
clean_and_exit 0 ""
