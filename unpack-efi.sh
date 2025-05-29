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

if [ ! -s "/tmp/extract-vmlinux.sh" ]; then
  echo "${ME}: Script '/tmp/extract-vmlinux.sh' is missing" >&2
  exit 2
fi

FILE_DIR="$(dirname ${FILE})/_$(basename ${FILE})"
mkdir -p "${FILE_DIR}"

LINUX_FILE="${FILE_DIR}/vmlinux"
/tmp/extract-vmlinux.sh "${FILE}" > "${LINUX_FILE}" || true

if [ ! -s "${LINUX_FILE}" ]; then
  rm -rf "${FILE_DIR}"
  echo "${ME}: Could not extract an uncompressed Linux kernel image" >&2
  exit 2
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
