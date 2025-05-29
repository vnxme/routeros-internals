#!/bin/bash

ME="${0##*/}"
FILE="$1"

if [ "$#" -ne 1 -o ! -s "${FILE}" ]; then
  echo "${ME}: The only argument must be a path to a non-empty file" >&2
  exit 2
fi

FILE_INFO="$(file ${FILE} | cut -f 2- -d ' ')"
if [ -z "$(echo "${FILE_INFO}" | grep 'XZ compressed data')" ]; then
  echo "${ME}: File '${FILE}' doesn't seem to contain an XZ archive; it contains '${FILE_INFO}'" >&2
  exit 2
fi

FILE_DIR="$(dirname ${FILE})/_$(basename ${FILE})"
mkdir -p "${FILE_DIR}"

cp "${FILE}" "/tmp/xz/$(basename ${FILE})"
xz -d "/tmp/xz/$(basename ${FILE})" || true
rsync -rltgoD /tmp/xz/ "${FILE_DIR}/"
FILE_LS=$(ls -AlR /tmp/xz/)
rm -rf /tmp/xz/*

CPIO_FILES=$(find ${FILE_DIR}/* -type f -name '*.cpio')
for CPIO_FILE in ${CPIO_FILES}; do
  /tmp/unpack-cpio.sh "${CPIO_FILE}" || true
done

FILE_README="${FILE_DIR}/README.md"
echo -e "### $(basename ${FILE})
#### Identification (\`file <*>\`):
\`\`\`
${FILE_INFO}
\`\`\`
#### Description (\`xz -lvv <*>\`):
\`\`\`
$(xz -lvv ${FILE})
\`\`\`
#### Listing (\`ls -AlR <*>\`):
\`\`\`
${FILE_LS}
\`\`\`
" > "${FILE_README}"
