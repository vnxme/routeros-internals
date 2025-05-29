#!/bin/bash

ME="${0##*/}"
VMLINUX_FILE="$1"

if [ "$#" -ne 1 -o ! -s "${VMLINUX_FILE}" ]; then
  echo "${ME}: The only argument must be a path to a non-empty file" >&2
  exit 2
fi

VMLINUX_FILE_INFO="$(file ${VMLINUX_FILE} | cut -f 2- -d ' ')"
if [ -z "$(echo "${VMLINUX_FILE_INFO}" | grep -E 'Linux kernel (.*) boot executable Image')" ]; then
  echo "${ME}: File '${VMLINUX_FILE}' doesn't seem to contain an uncompressed Linux kernel image; it contains ${VMLINUX_FILE_INFO}" >&2
  exit 2
fi

VMLINUX_FILE_DIR="$(dirname ${VMLINUX_FILE})/_$(basename ${VMLINUX_FILE})"
mkdir -p "${VMLINUX_FILE_DIR}"

CPIO_POS="$(binwalk ${VMLINUX_FILE} | grep 'cpio archive' | gawk '{print $1}' | head -1)"
if [ ! -z "${CPIO_POS}" ]; then
  dd if="${VMLINUX_FILE}" bs=1 skip="${CPIO_POS}" | cpio -idmv -D "${VMLINUX_FILE_DIR}"
fi

VMLINUX_FILE_README="${VMLINUX_FILE_DIR}/README.md"
echo -e "### $(basename ${VMLINUX_FILE})
#### Identification (\`file <*>\`):
\`\`\`
${VMLINUX_FILE_INFO}
\`\`\`
#### Analysis (\`binwalk <*>\`):
\`\`\`
$(binwalk ${EFI_FILE})
\`\`\`
" > "${VMLINUX_FILE_README}"
