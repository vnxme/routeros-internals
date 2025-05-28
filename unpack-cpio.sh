#!/bin/bash

ME="${0##*/}"
CPIO_FILE="$1"

if [ "$#" -ne 1 -o ! -s "${CPIO_FILE}" ]; then
  echo "${ME}: The only argument must be a path to a non-empty file" >&2
  exit 2
fi

CPIO_FILE_INFO="$(file ${CPIO_FILE} | cut -f 2- -d ' ' | grep -E 'Linux kernel (.*) boot executable Image')"
if [ -z "${CPIO_FILE_INFO}" ]; then
  echo "${ME}: The provided file doesn't seem to contain an uncompressed Linux kernel image" >&2
  exit 2
fi

CPIO_POS="$(binwalk ${CPIO_FILE} | grep 'ASCII cpio archive' | gawk '{print $1}' | head -1)"
if [ -z "${CPIO_POS}" ]; then
  echo "${ME}: The provided file doesn't seem to contain an ASCII cpio archive" >&2
  exit 2
fi

CPIO_FILE_DIR="$(dirname ${CPIO_FILE})/_$(basename ${CPIO_FILE})"
mkdir -p "${CPIO_DIR}"

dd if="${CPIO_FILE}" bs=1 skip="${CPIO_POS}" | cpio -idmv -D "${CPIO_DIR}"

CPIO_FILE_README="${CPIO_FILE_DIR}/README.md"
echo -e "### $(basename ${CPIO_FILE})\n" > "${CPIO_FILE_README}"
echo -e "#### Description:\n\`\`\`\n${CPIO_FILE_INFO}\n\`\`\`\n" >> "${CPIO_FILE_README}"
echo -e "#### Internals:\n\`\`\`\n$(binwalk ${CPIO_FILE})\n\`\`\`\n" >> "${CPIO_FILE_README}"
