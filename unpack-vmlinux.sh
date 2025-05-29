#!/bin/bash

ME="${0##*/}"
FILE="$1"

if [ "$#" -ne 1 -o ! -s "${FILE}" ]; then
  echo "${ME}: The only argument must be a path to a non-empty file" >&2
  exit 2
fi

FILE_INFO="$(file ${FILE} | cut -f 2- -d ' ')"
if [ -z "$(echo "${FILE_INFO}" | grep -E 'Linux kernel (.*) boot executable Image')" ]; then
  echo "${ME}: File '${FILE}' doesn't seem to contain an uncompressed Linux kernel image; it contains '${FILE_INFO}'" >&2
  exit 2
fi

FILE_DIR="$(dirname ${FILE})/_$(basename ${FILE})"
mkdir -p "${FILE_DIR}"

CPIO_POS="$(binwalk ${FILE} | grep 'cpio archive' | gawk '{print $1}' | head -1)"
if [ ! -z "${CPIO_POS}" ]; then
  dd if="${FILE}" bs=1 skip="${CPIO_POS}" | cpio -idmv -D "${FILE_DIR}"
fi

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
