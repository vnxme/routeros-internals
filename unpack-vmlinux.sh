#!/bin/bash

ME="${0##*/}"
FILE="$1"

if [ "$#" -ne 1 -o ! -s "${FILE}" ]; then
  echo "${ME}: The only argument must be a path to a non-empty file" >&2
  exit 2
fi

FILE_INFO="$(file ${FILE} | cut -f 2- -d ' ')"
if [ -z "$(echo "${FILE_INFO}" | grep -E 'ELF (.*) executable|Linux kernel (.*) boot executable Image')" ]; then
  echo "${ME}: File '${FILE}' doesn't seem to contain either an ELF or an uncompressed Linux kernel image; it contains '${FILE_INFO}'" >&2
  exit 2
fi

FILE_DIR="$(dirname ${FILE})/_$(basename ${FILE})"
mkdir -p "${FILE_DIR}"

FILE_WALK="$(binwalk ${FILE})"

CPIO_FIRST="$(echo "${FILE_WALK}" | grep 'cpio archive' | gawk '{print $1}' | head -1)"
CPIO_LAST="$(echo "${FILE_WALK}" | grep -E 'cpio archive(.*)TRAILER!!!' | gawk '{print $1}' | head -1)"
if [ ! -z "${CPIO_FIRST}" -a ! -z "${CPIO_LAST}" ]; then
  CPIO_COUNT=$(($CPIO_LAST-$CPIO_FIRST+124)) # 124 is the length of TRAILER!!! magic file
  CPIO_FILE="${FILE_DIR}/$(printf "%x" "${CPIO_FIRST}").cpio"
  dd if="${FILE}" bs=1 skip="${CPIO_FIRST}" count="${CPIO_COUNT}" of="${CPIO_FILE}"
  /tmp/unpack-cpio.sh "${CPIO_FILE}" || true
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
