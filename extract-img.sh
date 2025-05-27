#!/bin/sh

if [ "$#" -ne 1 ]; then
  echo "extract-img.sh: Wrong argument count"
  exit 2
fi

IMG_FILE="$1"
if [ ! -f "${IMG_FILE}" ]; then
  echo "extract-img.sh: The only argument must be a valid filename"
  exit 2
fi

IMG_FILE_INFO="$(file ${IMG_FILE} | cut -f 2- -d ' ')"

IMG_FILE_DIR="$(dirname ${IMG_FILE})/_$(basename ${IMG_FILE})"

sudo mount -o loop,ro "${IMG_FILE}" /tmp/img
rsync -rltgoD /tmp/img/ "${IMG_FILE_DIR}/"
IMG_FILE_LS=$(ls -AlR /tmp/img/)
sudo umount /tmp/img

EFI_FILES=$(find ${IMG_FILE_DIR}/EFI/BOOT/*.EFI)
for EFI_FILE in ${EFI_FILES}; do
  /tmp/extract-efi.sh "${EFI_FILE}" || true
done

LINUX_FILES=$(find ${IMG_FILE_DIR}/linux.*)
for LINUX_FILE in ${LINUX_FILES}; do
  /tmp/extract-efi.sh "${LINUX_FILE}" || true
done

IMG_FILE_README="${IMG_FILE_DIR}/README.md"
echo -e "### $(basename ${IMG_FILE})\n" > "${IMG_FILE_README}"
echo -e "#### Description:\n\`\`\`\n${IMG_FILE_INFO}\n\`\`\`\n" >> "${IMG_FILE_README}"
echo -e "#### Internals:\n\`\`\`\n${IMG_FILE_LS}\n\`\`\`\n" >> "${IMG_FILE_README}"
