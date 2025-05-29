#!/bin/bash

ME="${0##*/}"
EFI_FILE="$1"

if [ "$#" -ne 1 -o ! -s "${EFI_FILE}" ]; then
  echo "${ME}: The only argument must be a path to a non-empty file" >&2
  exit 2
fi

EFI_FILE_INFO="$(file ${EFI_FILE} | cut -f 2- -d ' ')"
if [ ! -z "$(echo "${EFI_FILE_INFO}" | grep -E 'Linux kernel (.*) boot executable Image')" ]; then
  /tmp/unpack-vmlinux.sh "${EFI_FILE}" || true
  exit 0
elif [ -z "$(echo "${EFI_FILE_INFO}" | grep -E 'Linux kernel (.*) boot executable (bz|z)Image')" ]; then
  echo "${ME}: File '${EFI_FILE}' doesn't seem to contain a compressed Linux kernel image; it contains ${EFI_FILE_INFO}" >&2
  exit 2
fi

if [ ! -s "/tmp/extract-vmlinux.sh" ]; then
  echo "${ME}: Script '/tmp/extract-vmlinux.sh' is missing" >&2
  exit 2
fi

EFI_FILE_DIR="$(dirname ${EFI_FILE})/_$(basename ${EFI_FILE})"
mkdir -p "${EFI_FILE_DIR}"

LINUX_FILE="${EFI_FILE_DIR}/vmlinux"
/tmp/extract-vmlinux.sh "${EFI_FILE}" > "${LINUX_FILE}" || true

if [ ! -s "${LINUX_FILE}" ]; then
  rm -rf "${EFI_FILE_DIR}"
  echo "${ME}: Could not extract an uncompressed Linux kernel image" >&2
  exit 2
fi

/tmp/unpack-vmlinux.sh "${LINUX_FILE}" || true

EFI_FILE_README="${EFI_FILE_DIR}/README.md"
echo -e "### $(basename ${EFI_FILE})
#### Identification (\`file <*>\`):
\`\`\`
${IMG_FILE_INFO}
\`\`\`
#### Analysis (\`binwalk <*>\`):
\`\`\`
$(binwalk ${EFI_FILE})
\`\`\`
" > "${EFI_FILE_README}"
