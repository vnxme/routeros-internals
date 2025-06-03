#!/bin/bash

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
  # $3 - identification text, string
  # $4 - analysis text, string
  # $5 - description text, string
  # $6 - listing text, string
  # $7 - notes, string
  local TEXT="### $(basename "$1")\n"
  local README="$2/README.md"
  [ -n "$3" ] && local TEXT="${TEXT}#### Identification (\`file <*>\`):\n\`\`\`\n$3\n\`\`\`\n"
  [ -n "$4" ] && local TEXT="${TEXT}#### Analysis (\`binwalk <*>\`):\n\`\`\`\n$4\n\`\`\`\n"
  [ -n "$5" ] && local TEXT="${TEXT}#### Description (\`isoinfo -d -i <*>\`):\n\`\`\`\n$5\n\`\`\`\n"
  [ -n "$6" ] && local TEXT="${TEXT}#### Listing (\`ls -AlR <*>\`):\n\`\`\`\n$6\n\`\`\`\n"
  [ -n "$7" ] && local TEXT="${TEXT}#### Notes:\n$7\n"
  echo -e "${TEXT}" > "${README}"
}

function unpack_bzimage {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  local VMLINUX="$2/vmlinux"

  # credits to @elseif for binary patterns
  # ref: https://github.com/elseif/MikroTikPatch/blob/main/patch.py
  local XZ_ENDS=$(LC_ALL=C grep -aboP '\x00\x00\x00\x00\x01\x59\x5A' "$1" | cut -f 1 -d ':' | head -1)
  local XZ_END; for XZ_END in ${XZ_ENDS}; do
    local XZ_START=$(head -c ${XZ_END} "${FILE}" | LC_ALL=C grep -aboP '\xFD7zXZ\x00\x00\x01' - | cut -f 1 -d ':' | tail -1)
    if [ -n "${XZ_START}" ] && [ -n "${XZ_END}" ] && [ "${XZ_START}" -lt "${XZ_END}" ]; then
      local XZ_SIZE=$((${XZ_END}-${XZ_START}+7)) # 7 is the end pattern length
      local XZ_FILE="${VMLINUX}.xz"
      dd if="${FILE}" bs=1 skip="${XZ_START}" count="${XZ_SIZE}" of="${XZ_FILE}" > /dev/null 2>&1 || true
      if [ -s "${XZ_FILE}" -a -z "$(xz -t "${XZ_FILE}")" ]; then
        unxz -q "${XZ_FILE}" || true
      fi
    fi
  done

  # unless bzImage has an XZ archive inside, use a universal script
  if [ ! -s "${VMLINUX}" ]; then
    local SCRIPT="/tmp/extract-vmlinux.sh"
    if [ ! -s "${SCRIPT}" ]; then
      clean_and_exit 2 "${ME}: Script '${SCRIPT}' is missing"
    fi

    "${SCRIPT}" "${FILE}" > "${VMLINUX}" || true

    if [ ! -s "${VMLINUX}" ]; then
      clean_and_exit 2 "${ME}: Could not extract an uncompressed Linux kernel image"
    fi
  fi

  RESULT=$(ls -AlR --time-style=full-iso "$2/")
}

function unpack_cpio {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  local DIR='/tmp/cpio'
  local RM=false
  [ ! -d "${DIR}" ] && (mkdir -p "${DIR}" && local RM=true)
  cpio --no-preserve-owner -idm -D "${DIR}" < "$1" || true
  rsync -rltgoD "${DIR}/" "$2/"
  RESULT=$(ls -AlR --time-style=full-iso "${DIR}/")
  [ "${RM}" = true ] && rm -rf "${DIR}"
}

function unpack_elf {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  # $3 - binwalk output, string
  local INITRAMFS="$2/initramfs"
  # if for whatever reason there are several cpio archives inside, only the first one will be extracted
  local CPIO_START="$(echo "$3" | grep 'cpio archive' | gawk '{print $1}' | head -1)"
  local CPIO_END="$(echo "$3" | grep -E 'cpio archive(.*)TRAILER!!!' | gawk '{print $1}' | head -1)"
  if [ -n "${CPIO_START}" -a -n "${CPIO_END}" ]; then
    local CPIO_SIZE=$(($CPIO_END-$CPIO_START+136)) # 136 is the end pattern length
    local CPIO_FILE="${INITRAMFS}.cpio"
    dd if="$1" bs=1 skip="${CPIO_START}" count="${CPIO_SIZE}" of="${CPIO_FILE}" > /dev/null 2>&1 || true
  fi
  # credits to @elseif for binary patterns
  # ref: https://github.com/elseif/MikroTikPatch/blob/main/patch.py
  local XZ_ENDS=$(LC_ALL=C grep -aboP '\x00\x00\x00\x00\x01\x59\x5A' "$1" | cut -f 1 -d ':')
  local XZ_END; for XZ_END in ${XZ_ENDS}; do
    local XZ_START=$(head -c ${XZ_END} "$1" | LC_ALL=C grep -aboP '\xFD7zXZ\x00\x00\x01' - | cut -f 1 -d ':' | tail -1)
    if [ -n "${XZ_START}" ] && [ -n "${XZ_END}" ] && [ "${XZ_START}" -lt "${XZ_END}" ]; then
      local XZ_SIZE=$((${XZ_END}-${XZ_START}+7)) # 7 is the end pattern length
      local CPIO_FILE="$2/$(printf "%x" "${XZ_START}").cpio"
      local XZ_FILE="${CPIO_FILE}.xz"
      dd if="$1" bs=1 skip="${XZ_START}" count="${XZ_SIZE}" of="${XZ_FILE}" > /dev/null 2>&1 || true
      if [ -s "${XZ_FILE}" -a -z "$(xz -t "${XZ_FILE}")" ]; then
        unxz "${XZ_FILE}" || true
      fi
    fi
  done
  RESULT=$(ls -AlR --time-style=full-iso "$2/")
}

function unpack_img {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  local SUDO=''; [ -n "$(which sudo)" ] && local SUDO='sudo '
  local DIR='/tmp/img'
  local RM=false
  [ ! -d "${DIR}" ] && (mkdir -p "${DIR}" && local RM=true)
  "${SUDO}mount" -o loop,ro "$1" "${DIR}"
  rsync -rltgoD "${DIR}/" "$2/"
  RESULT=$(ls -AlR --time-style=full-iso "${DIR}/")
  "${SUDO}umount" "${DIR}"
  [ "${RM}" = true ] && rm -rf "${DIR}"
}

function unpack_iso {
  # arguments:
  # $1 - source filepath, string
  # $2 - destination directory, string
  local SUDO=''; [ -n "$(which sudo)" ] && local SUDO='sudo '
  local DIR='/tmp/iso'
  local RM=false
  [ ! -d "${DIR}" ] && (mkdir -p "${DIR}" && local RM=true)
  "${SUDO}mount" -o loop,ro "$1" "${DIR}"
  rsync -rltgoD "${DIR}/" "$2/"
  RESULT=$(ls -AlR --time-style=full-iso "${DIR}/")
  "${SUDO}umount" "${DIR}"
  [ "${RM}" = true ] && rm -rf "${DIR}"
}

FILE="$1"
if [ "$#" -ne 1 -o ! -s "${FILE}" ]; then
  clean_and_exit 2 "${ME}: The only argument must be a path to a non-empty file"
fi

DEPS=(file binwalk)
for DEP in ${DEPS[@]}; do
  if [ -z "$(which "${DEP}")" ]; then
    clean_and_exit 2 "${ME}: Dependency '${DEP}' can't be satisfied"
  fi
done

DIR="$(dirname ${FILE})/_$(basename ${FILE})"
if [ ! -d "${DIR}" ]; then
  mkdir -p "${DIR}" && RM=true
elif [ -n "$(ls -A "${DIR}")" ]; then
  clean_and_exit 2 "${ME}: Directory '${DIR}' isn't empty"
fi

OUT_FILE="$(file "${FILE}" | cut -f 2- -d ' ')"
if [ -n "$(echo "${OUT_FILE}" | grep -E '^ISO 9660 CD-ROM filesystem data.*$')" ]; then
  # unpack a valid *.iso file
  unpack_iso "${FILE}" "${DIR}"; OUT_LS="${RESULT}"
  compose_readme "${FILE}" "${DIR}" "${OUT_FILE}" "" "$(isoinfo -d -i "${FILE}")" "${OUT_LS}"
elif [ -n "$(echo "${OUT_FILE}" | grep -E '^DOS/MBR boot sector.*$')" ]; then
  # unpack a valid *.img file
  unpack_img "${FILE}" "${DIR}"; OUT_LS="${RESULT}"
  compose_readme "${FILE}" "${DIR}" "${OUT_FILE}" "" "" "${OUT_LS}"
elif [ -n "$(echo "${OUT_FILE}" | grep -E '^Linux kernel (.*) boot executable bzImage.*$')" ]; then
  # unpack a valid Linux bzImage (could be named as *.efi or linux.*)
  unpack_bzimage "${FILE}" "${DIR}"; OUT_LS="${RESULT}"
  compose_readme "${FILE}" "${DIR}" "${OUT_FILE}" "$(binwalk "${FILE}")" "" "${OUT_LS}"
elif [ -n "$(echo "${OUT_FILE}" | grep -E '^Linux kernel (.*) boot executable Image.*$')" ]; then
  # unpack a valid Linux Image (could be named as *.efi)
  echo "TODO: Image"
elif [ -n "$(echo "${OUT_FILE}" | grep -E '^ELF (.*) executable.*$')" ]; then
  # unpack a valid Linux executable (could be named as kernel)
  OUT_BINWALK="$(binwalk "${FILE}")"
  unpack_elf "${FILE}" "${DIR}" "${OUT_BINWALK}"; OUT_LS="${RESULT}"
  compose_readme "${FILE}" "${DIR}" "${OUT_FILE}" "${OUT_BINWALK}" "" "${OUT_LS}"
elif [ -n "$(echo "${OUT_FILE}" | grep -E '^XZ compressed data.*$')" ]; then
  # unpack a valid *.xz file
  echo "TODO: XZ"
elif [ -n "$(echo "${OUT_FILE}" | grep -E '^(ASCII )?cpio archive.*$')" ]; then
  # unpack a valid *.cpio file
  unpack_cpio "${FILE}" "${DIR}"; OUT_LS="${RESULT}"
  compose_readme "${FILE}" "${DIR}" "${OUT_FILE}" "$(binwalk "${FILE}")" "" "${OUT_LS}"
else
  # reject an unknown file
  clean_and_exit 2 "${ME}: File '${FILE}' containing '${OUT_FILE}' can't be unpacked"
fi

[ -n "$(ls -A "${DIR}")" ] && RM=false
clean_and_exit 0 ""
