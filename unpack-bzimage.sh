#!/bin/bash

ME="${0##*/}"
FILE="$1"

if [ "$#" -ne 1 -o ! -s "${FILE}" ]; then
  echo "${ME}: The only argument must be a path to a non-empty file" >&2
  exit 2
fi

FILE_INFO="$(file ${FILE} | cut -f 2- -d ' ')"
if [ ! -z "$(echo "${FILE_INFO}" | grep -E 'Linux kernel (.*) boot executable Image')" ]; then
  /tmp/unpack-vmlinux.sh "${FILE}" || true
  exit 0
elif [ -z "$(echo "${FILE_INFO}" | grep -E 'Linux kernel (.*) boot executable (bz|z)Image')" ]; then
  echo "${ME}: File '${FILE}' doesn't seem to contain a compressed Linux kernel image; it contains '${FILE_INFO}'" >&2
  exit 2
fi

FILE_DIR="$(dirname ${FILE})/_$(basename ${FILE})"
mkdir -p "${FILE_DIR}"

LINUX_FILE="${FILE_DIR}/vmlinux"

# credits to @elseif for binary patterns
# ref: https://github.com/elseif/MikroTikPatch/blob/main/patch.py
XZ_START=$(LC_ALL=C grep -aboP '\xFD7zXZ\x00\x00\x01' "${FILE}" | cut -f 1 -d ':' | head -1)
XZ_END=$(LC_ALL=C grep -aboP '\x00\x00\x00\x00\x01\x59\x5A' "${FILE}" | cut -f 1 -d ':' | head -1)
if [ ! -z "${XZ_START}" -a ! -z "${XZ_END}" ]; then
  XZ_SIZE=$((${XZ_END}-${XZ_START}+7)) # 7 is the end pattern length
  XZ_FILE="${LINUX_FILE}.xz"
  dd if="${FILE}" bs=1 skip="${XZ_START}" count="${XZ_SIZE}" of="${XZ_FILE}" > /dev/null 2>&1 || true
  if [ -s "${XZ_FILE}" -a -z "$(xz -t "${XZ_FILE}")" ]; then
    unxz "${XZ_FILE}" || true
  fi
fi

# unless bzImage has an XZ archive inside, use a universal script
if [ ! -s "${LINUX_FILE}" ]; then
  if [ ! -s "/tmp/extract-vmlinux.sh" ]; then
    rm -rf "${FILE_DIR}"
    echo "${ME}: Script '/tmp/extract-vmlinux.sh' is missing" >&2
    exit 2
  fi

  /tmp/extract-vmlinux.sh "${FILE}" > "${LINUX_FILE}" || true

  if [ ! -s "${LINUX_FILE}" ]; then
    rm -rf "${FILE_DIR}"
    echo "${ME}: Could not extract an uncompressed Linux kernel image" >&2
    exit 2
  fi
fi

/tmp/unpack-vmlinux.sh "${LINUX_FILE}" || true

FILE_README="${FILE_DIR}/README.md"
echo -e "### $(basename ${FILE})
#### Identification (\`file <*>\`):
\`\`\`
${FILE_INFO}
\`\`\`
#### Analysis (\`binwalk <*>\`):
\`\`\`
$(binwalk ${FILE})
\`\`\`
" > "${FILE_README}"
