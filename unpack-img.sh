#!/bin/bash

ME="${0##*/}"
FILE="$1"

if [ "$#" -ne 1 -o ! -s "${FILE}" ]; then
  echo "${ME}: The only argument must be a path to a non-empty file" >&2
  exit 2
fi

FILE_INFO="$(file ${FILE} | cut -f 2- -d ' ')"
if [ -z "$( echo "${FILE_INFO}" | grep 'DOS/MBR boot sector')" ]; then
  echo "${ME}: File '${FILE}' doesn't seem to contain a raw disk image; it contains '${FILE_INFO}'" >&2
  exit 2
fi

FILE_DIR="$(dirname ${FILE})/_$(basename ${FILE})"
mkdir -p "${FILE_DIR}"

sudo mount -o loop,ro "${FILE}" /tmp/img
rsync -rltgoD /tmp/img/ "${FILE_DIR}/"
FILE_LS=$(ls -AlR /tmp/img/)
sudo umount /tmp/img

EFI_FILES=$(find ${FILE_DIR}/EFI/BOOT/* -type f -name '*.EFI')
for EFI_FILE in ${EFI_FILES}; do
  /tmp/unpack-bzimage.sh "${EFI_FILE}" || true
done

LINUX_FILES=$(find ${FILE_DIR}/* -type f -name 'linux.*')
for LINUX_FILE in ${LINUX_FILES}; do
  /tmp/unpack-bzimage.sh "${LINUX_FILE}" || true
done

FILE_README="${FILE_DIR}/README.md"
echo -e "### $(basename ${FILE})
#### Identification (\`file <*>\`):
\`\`\`
${FILE_INFO}
\`\`\`
#### Listing (\`ls -AlR <*>\`):
\`\`\`
${FILE_LS}
\`\`\`
" > "${FILE_README}"
