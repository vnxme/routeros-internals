#!/bin/bash

ME="${0##*/}"
IMG_FILE="$1"

if [ "$#" -ne 1 -o ! -s "${IMG_FILE}" ]; then
  echo "${ME}: The only argument must be a path to a non-empty file" >&2
  exit 2
fi

IMG_FILE_INFO="$(file ${IMG_FILE} | cut -f 2- -d ' ')"
if [ -z "$( echo "${IMG_FILE_INFO}" | grep 'DOS/MBR boot sector')" ]; then
  echo "${ME}: File '${IMG_FILE}' doesn't seem to contain a raw disk image; it contains ${IMG_FILE_INFO}" >&2
  exit 2
fi

IMG_FILE_DIR="$(dirname ${IMG_FILE})/_$(basename ${IMG_FILE})"
mkdir -p "${IMG_FILE_DIR}"

sudo mount -o loop,ro "${IMG_FILE}" /tmp/img
rsync -rltgoD /tmp/img/ "${IMG_FILE_DIR}/"
IMG_FILE_LS=$(ls -AlR /tmp/img/)
sudo umount /tmp/img

EFI_FILES=$(find ${IMG_FILE_DIR}/EFI/BOOT/* -type f -name '*.EFI')
for EFI_FILE in ${EFI_FILES}; do
  /tmp/unpack-efi.sh "${EFI_FILE}" || true
done

LINUX_FILES=$(find ${IMG_FILE_DIR}/* -type f -name 'linux.*')
for LINUX_FILE in ${LINUX_FILES}; do
  /tmp/unpack-efi.sh "${LINUX_FILE}" || true
done

IMG_FILE_README="${IMG_FILE_DIR}/README.md"
echo -e "### $(basename ${IMG_FILE})
#### Identification (\`file <*>\`):
\`\`\`
${IMG_FILE_INFO}
\`\`\`
#### Listing (\`ls -AlR <*>\`):
\`\`\`
${ISO_FILE_LS}
\`\`\`
" > "${IMG_FILE_README}"
