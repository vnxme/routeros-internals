#!/bin/bash

ME="${0##*/}"
FILE="$1"

if [ "$#" -ne 1 -o ! -s "${FILE}" ]; then
  echo "${ME}: The only argument must be a path to a non-empty file" >&2
  exit 2
fi

FILE_INFO="$(file ${FILE} | cut -f 2- -d ' ')"
if [ -z "$(echo "${FILE_INFO}" | grep -E 'ELF (.*) executable|Linux kernel (.*) boot executable Image')" ]; then
  echo "${ME}: File '${FILE}' doesn't seem to contain either an ELF executable or an uncompressed Linux kernel image; it contains '${FILE_INFO}'" >&2
  exit 2
fi

FILE_DIR="$(dirname ${FILE})/_$(basename ${FILE})"
mkdir -p "${FILE_DIR}"

FILE_WALK="$(binwalk ${FILE})"

# if for whatever reason there are several cpio archives inside, only the first one will be extracted
CPIO_START="$(echo "${FILE_WALK}" | grep 'cpio archive' | gawk '{print $1}' | head -1)"
CPIO_END="$(echo "${FILE_WALK}" | grep -E 'cpio archive(.*)TRAILER!!!' | gawk '{print $1}' | head -1)"
if [ ! -z "${CPIO_START}" -a ! -z "${CPIO_END}" ]; then
  CPIO_SIZE=$(($CPIO_END-$CPIO_START+136)) # 136 is the end pattern length
  CPIO_FILE="${FILE_DIR}/$(printf "%x" "${CPIO_START}").cpio"
  dd if="${FILE}" bs=1 skip="${CPIO_START}" count="${CPIO_SIZE}" of="${CPIO_FILE}" > /dev/null 2>&1 || true
  if [ -s "${CPIO_FILE}" ]; then
    /tmp/unpack-cpio.sh "${CPIO_FILE}" || true
  fi
fi

# credits to @elseif for binary patterns
# ref: https://github.com/elseif/MikroTikPatch/blob/main/patch.py
XZ_START=$(LC_ALL=C grep -aboP '\xFD7zXZ\x00\x00\x01' "${FILE}" | cut -f 1 -d ':' | head -1)
XZ_END=$(LC_ALL=C grep -aboP '\x00\x00\x00\x00\x01\x59\x5A' "${FILE}" | cut -f 1 -d ':' | head -1)
if [ ! -z "${XZ_START}" -a ! -z "${XZ_END}" ]; then
  XZ_SIZE=$((${XZ_END}-${XZ_START}+7)) # 7 is the end pattern length
  CPIO_FILE="${FILE_DIR}/$(printf "%x" "${XZ_START}").cpio"
  XZ_FILE="${CPIO_FILE}.xz"
  dd if="${FILE}" bs=1 skip="${XZ_START}" count="${XZ_SIZE}" of="${XZ_FILE}" > /dev/null 2>&1 || true
  if [ -s "${XZ_FILE}" -a -z "$(xz -t "${XZ_FILE}")" ]; then
    unxz "${XZ_FILE}" || true
  fi
  if [ -s "${CPIO_FILE}" ]; then
    /tmp/unpack-cpio.sh "${CPIO_FILE}" || true
  fi
fi

FILE_README="${FILE_DIR}/README.md"
echo -e "### $(basename ${FILE})
#### Identification (\`file <*>\`):
\`\`\`
${FILE_INFO}
\`\`\`
#### Analysis (\`binwalk <*>\`):
\`\`\`
${FILE_WALK}
\`\`\`
" > "${FILE_README}"
