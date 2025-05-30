#!/bin/bash

ME="${0##*/}"
FILE="$1"

if [ "$#" -ne 1 -o ! -s "${FILE}" ]; then
  echo "${ME}: The only argument must be a path to a non-empty file" >&2
  exit 2
fi

FILE_INFO="$(file ${FILE} | cut -f 2- -d ' ')"
if [ -z "$(echo "${FILE_INFO}" | grep 'cpio archive')" ]; then
  echo "${ME}: File '${FILE}' doesn't seem to contain a cpio archive; it contains '${FILE_INFO}'" >&2
  exit 2
fi

FILE_DIR="$(dirname ${FILE})/_$(basename ${FILE})"
mkdir -p "${FILE_DIR}"

cpio --no-preserve-owner -idmv -D "/tmp/cpio" < "${FILE}" || true
rsync -rltgoD /tmp/cpio/ "${FILE_DIR}/"
FILE_LS=$(ls -AlR /tmp/cpio/)
rm -rf /tmp/cpio/*

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
#### Listing (\`ls -AlR <*>\`):
\`\`\`
${FILE_LS}
\`\`\`
" > "${FILE_README}"
