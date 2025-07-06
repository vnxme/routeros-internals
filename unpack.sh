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

function check_path {
  # arguments:
  # $N - directory, string
  for ARG in "$@"; do
    [ -d "${ARG%%/}" ] && [[ ":${PATH}:" != *":${ARG%%/}:"* ]] && export PATH="${PATH}:${ARG%%/}"
  done
}

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
  local ZI="${HREF['zipinfo']}"

  [ -n "${FI}" ] && TEXT="${TEXT}#### Identification (\`file <*>\`):\n\`\`\`\n${FI}\n\`\`\`\n"
  [ -n "${BW}" ] && TEXT="${TEXT}#### Analysis (\`binwalk <*>\`):\n\`\`\`\n${BW}\n\`\`\`\n"
  [ -n "${II}" ] && TEXT="${TEXT}#### Description (\`isoinfo -d -i <*>\`):\n\`\`\`\n${II}\n\`\`\`\n"
  [ -n "${ZI}" ] && TEXT="${TEXT}#### Description (\`zipinfo <*>\`):\n\`\`\`\n${ZI}\n\`\`\`\n"
  [ -n "${BD}" ] && TEXT="${TEXT}#### Block device info (\`blockdev --report <*>\`):\n\`\`\`\n${BD}\n\`\`\`\n"
  [ -n "${PA}" ] && TEXT="${TEXT}#### Partition info (\`parted <*> print\`):\n\`\`\`\n${PA}\n\`\`\`\n"
  [ -n "${BI}" ] && TEXT="${TEXT}#### Partition IDs (\`blkid\`):\n\`\`\`\n${BI}\n\`\`\`\n"
  [ -n "${FD}" ] && TEXT="${TEXT}#### MBR info (\`fdisk -l <*>\`):\n\`\`\`\n${FD}\n\`\`\`\n"
  [ -n "${GD}" ] && TEXT="${TEXT}#### GPT info (\`gdisk -l <*>\`):\n\`\`\`\n${GD}\n\`\`\`\n"
  [ -n "${LS}" ] && TEXT="${TEXT}#### Listing (\`ls -AlR --time-style=full-iso <*>\`):\n\`\`\`\n${LS}\n\`\`\`\n"
  [ -n "${NO}" ] && TEXT="${TEXT}#### Notes:\n${NO}\n"
  echo -e "${TEXT}" > "${README}"
}

function detect_filetype {
  # arguments:
  # $1 - file output, string
  if [ -z "$1" ]; then
    echo "unknown"
  elif [ -n "$(echo "$1" | grep -E '^ISO 9660 CD-ROM filesystem data.*$')" ]; then
    echo "iso"
  elif [ -n "$(echo "$1" | grep -E '^DOS/MBR boot sector.*$')" ]; then
    echo "img"
  elif [ -n "$(echo "$1" | grep -E '^Linux kernel (.*) boot executable bzImage.*$')" ]; then
    echo "bzimage" # Linux bzImage (could be named as *.efi or linux.*)
  elif [ -n "$(echo "$1" | grep -E '^Linux kernel (.*) boot executable Image.*$')" ]; then
    echo "image" # Linux Image (could be named as *.efi, but resembles a Linux executable)
  elif [ -n "$(echo "$1" | grep -E '^ELF (.*) executable.*$')" ]; then
    echo "elf" # Linux executable (could be named as kernel)
  elif [ -n "$(echo "$1" | grep -E '^XZ compressed data.*$')" ]; then
    echo "xz"
  elif [ -n "$(echo "$1" | grep -E '^(ASCII )?cpio archive.*$')" ]; then
    echo "cpio"
  elif [ -n "$(echo "$1" | grep -E '^Squashfs filesystem.*$')" ]; then
    echo "sfs"
  elif [ -n "$(echo "$1" | grep -E '^Zip archive data.*$')" ]; then
    echo "zip"
  elif [ -n "$(echo "$1" | grep -E '^Applesoft BASIC program data.*$')" ]; then
    echo "data"
  elif [ -n "$(echo "$1" | grep -E '^data$')" ]; then
    # TODO: implement additional checks
    echo "data"
  else
    echo "unknown"
  fi
}

function render_binwalk {
  # arguments:
  # $1 - source filepath, string
  binwalk "$1" 2>/dev/null
}

function render_file {
  # arguments:
  # $1 - source filepath, string
  file -b "$1"
}

function render_isoinfo {
  # arguments:
  # $1 - source filepath, string
  isoinfo -d -i "$1"
}

function render_ls {
  # arguments:
  # $1 - directory, string
  ls -AlR --time-style=full-iso "${1%%/}/" | sed -e "s,${1%%/},,g"
}

function unpack_bzimage {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  # $3 - helpers array name, string

  local -n HREF="$3"
  local DIR="/tmp/$(head /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 16).efi"
  local RM=false; [ ! -d "${DIR}" ] && mkdir -p "${DIR}" && RM=true

  unpack_xz_elements "$1" "${DIR}"

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
  HREF['ls']="$(render_ls "${DIR}")"
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
  HREF['ls']="$(render_ls "${DIR}")"
  [ "${RM}" = true ] && rm -rf "${DIR}"
}

function unpack_cpio_elements {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  # $3 - helpers array name, string

  local -n HREF="$3"
  local BW="${HREF['binwalk']}"
  local CPIO_ENDS=$(echo "${BW}" | grep -E 'cpio archive(.*)TRAILER!!!' | gawk '{print $1}' | tail -1)
  local CPIO_END; for CPIO_END in ${CPIO_ENDS}; do
    local CPIO_START="$(echo "${BW}" | grep 'cpio archive' | gawk '{print $1}' | head -1)"
    if [ -n "${CPIO_START}" ] && [ -n "${CPIO_END}" ] && [ "${CPIO_START}" -lt "${CPIO_END}" ]; then
      local CPIO_SIZE=$((${CPIO_END}-${CPIO_START}+136)) # 136 is the end pattern length
      local CPIO_FILE="$2/$(printf "%x" "${CPIO_START}").cpio"
      dd if="$1" bs=1 skip="${CPIO_START}" count="${CPIO_SIZE}" of="${CPIO_FILE}" > /dev/null 2>&1 || true
    fi
  done
}

function unpack_dtb_elements {
  # arguments
  # $1 - source filepath, string
  # $2 - destination directory, string

  local DTB_STARTS=$(LC_ALL=C grep -aboP '\xd0\x0d\xfe\xed' "$1" | cut -f 1 -d ':')
  local DTB_START; for DTB_START in ${DTB_STARTS}; do
    local DTB_SIZE=$(($(dd if="$1" bs=1 skip="$((${DTB_START}+4))" count=4 2>/dev/null | od -t d4 --endian=big | awk '{print $2}')+8))
    local DTB_VERSION=$(dd if="$1" bs=1 skip="$((${DTB_START}+20))" count=4 2>/dev/null | od -t d4 --endian=big | awk '{print $2}')
    if [ -n "${DTB_START}" ] && [ -n "${DTB_SIZE}" ] && [ "${DTB_SIZE}" -gt 0 ] && [ "${DTB_VERSION}" = "17" ]; then
      local DTB_FILE="$2/$(printf "%x" "${DTB_START}").dtb"
      dd if="$1" bs=1 skip="${DTB_START}" count="${DTB_SIZE}" of="${DTB_FILE}" > /dev/null 2>&1 || true
      if [ -s "${DTB_FILE}" ]; then
        local DTS_FILE="$2/$(printf "%x" "${DTB_START}").dts"
        dtc -q -I dtb -O dts -o "${DTS_FILE}" "${DTB_FILE}" || true
        if [ -s "${DTS_FILE}" ]; then
          local DTS_MODEL="$(sed -n -E 's,.*model = "(.*)";,\1,p' "${DTS_FILE}")"
          if [ -n "${DTS_MODEL}" ]; then
            mv "${DTS_FILE}" "$2/$(printf "%x" "${DTB_START}").${DTS_MODEL}.dts"
          fi
          rm "${DTB_FILE}"
        fi
      fi
    fi
  done
}

function unpack_elf {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  # $3 - helpers array name, string

  local -n HREF="$3"
  local DIR="/tmp/$(head /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 16).elf"
  local RM=false; [ ! -d "${DIR}" ] && mkdir -p "${DIR}" && RM=true

  unpack_cpio_elements "$1" "${DIR}" "$3"
  unpack_dtb_elements "$1" "${DIR}"
  unpack_xz_elements "$1" "${DIR}"

  rsync -rltgoD "${DIR}/" "$2/"
  HREF['ls']="$(render_ls "${DIR}")"
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

    local BI="$(blkid | grep "${NBD}" | sort)"
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
      mount -o loop,ro "${NBD}" "${PDIR}" && sleep 0.25 && unset HREF['fdisk'] && unset HREF['gdisk']
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
    HREF['ls']="$(render_ls "${DIR}")"

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
  HREF['ls']="$(render_ls "${DIR}")"
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
    unsquashfs -q -n -d "${DIR}" "$1" || true
  fi

  rsync -rltgoD "${DIR}/" "$2/"
  HREF['ls']="$(render_ls "${DIR}")"
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
    cp "$1" "${XZ_FILE}"
    unxz -q "${XZ_FILE}" || true
  fi

  rsync -rltgoD "${DIR}/" "$2/"
  HREF['ls']="$(render_ls "${DIR}")"
  [ "${RM}" = true ] && rm -rf "${DIR}"
}

function unpack_xz_elements {
  # arguments
  # $1 - source filepath, string
  # $2 - destination directory, string

  # credits to @elseif for binary patterns
  # ref: https://github.com/elseif/MikroTikPatch/blob/main/patch.py
  local XZ_ENDS=$(LC_ALL=C grep -aboP '\x00\x00\x00\x00\x01\x59\x5A' "$1" | cut -f 1 -d ':' | head -1)
  local XZ_END; for XZ_END in ${XZ_ENDS}; do
    local XZ_START=$(head -c ${XZ_END} "$1" | LC_ALL=C grep -aboP '\xFD7zXZ\x00\x00\x01' - | cut -f 1 -d ':' | tail -1)
    if [ -n "${XZ_START}" ] && [ -n "${XZ_END}" ] && [ "${XZ_START}" -lt "${XZ_END}" ]; then
      local XZ_SIZE=$((${XZ_END}-${XZ_START}+7)) # 7 is the end pattern length
      local UNK_FILE="$2/$(printf "%x" "${XZ_START}").unknown"
      local XZ_FILE="${UNK_FILE}.xz"
      dd if="$1" bs=1 skip="${XZ_START}" count="${XZ_SIZE}" of="${XZ_FILE}" > /dev/null 2>&1 || true
      if [ -s "${XZ_FILE}" -a -z "$(xz -t "${XZ_FILE}")" ]; then
        unxz -q "${XZ_FILE}" || true
        if [ -s "${UNK_FILE}" ]; then
          case "$(detect_filetype "$(render_file "${UNK_FILE}")")" in
            "cpio")
              mv "${UNK_FILE}" "${UNK_FILE%%.unknown}.cpio"
              ;;
            "elf" | "image")
              mv "${UNK_FILE}" "${UNK_FILE%%.unknown}.vmlinux"
              ;;
          esac
        fi
      fi
    fi
  done
}

function unpack_zip {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  # $3 - helpers array name, string

  local -n HREF="$3"
  local DIR="/tmp/$(head /dev/urandom | tr -dc 'a-zA-Z0-9' | head -c 16).zip"
  local RM=false; [ ! -d "${DIR}" ] && mkdir -p "${DIR}" && RM=true

  if [ -z "$(zip -T -q "$1")" ]; then
    HREF['zipinfo']="$(zipinfo "$1")"
    unzip -d "${DIR}/" -q "$1" || true
  fi

  rsync -rltgoD "${DIR}/" "$2/"
  HREF['ls']="$(render_ls "${DIR}")"
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

check_path "/sbin" "/usr/sbin" "/usr/local/sbin"

DEPS=(binwalk blockdev blkid cpio dtc fdisk file gdisk qemu-nbd parted rsync unsquashfs unxz)
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
FI="$(render_file "${FILE}")"; HELPERS['file']="${FI}"
case "$(detect_filetype "${FI}")" in

  "bzimage")
    HELPERS['binwalk']="$(render_binwalk "${FILE}")"
    unpack_bzimage "${FILE}" "${DIR}" "HELPERS"
    ;;

  "cpio")
    unpack_cpio "${FILE}" "${DIR}" "HELPERS"
    ;;

  "elf" | "image" | "data")
    HELPERS['binwalk']="$(render_binwalk "${FILE}")"
    unpack_elf "${FILE}" "${DIR}" "HELPERS"
    ;;

  "img")
    unpack_img "${FILE}" "${DIR}" "HELPERS"
    ;;

  "iso")
    HELPERS['isoinfo']="$(render_isoinfo "${FILE}")"
    unpack_iso "${FILE}" "${DIR}" "HELPERS"
    ;;

  "sfs")
    unpack_sfs "${FILE}" "${DIR}" "HELPERS"
    ;;

  "xz")
    unpack_xz "${FILE}" "${DIR}" "HELPERS"
    ;;

  "zip")
    unpack_zip "${FILE}" "${DIR}" "HELPERS"
    ;;

  *)
    clean_and_exit 2 "${ME}: File '${FILE}' containing '${FI}' can't be unpacked"
    ;;

esac

compose_readme "${FILE}" "${DIR}" "HELPERS"
[ -n "$(ls -A "${DIR}")" ] && RM=false
clean_and_exit 0 ""
