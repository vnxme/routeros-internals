#!/bin/bash

if [ "$#" -ne 1 ]; then
  echo "extract-iso.sh: Wrong argument count"
  exit 2
fi

ISO_FILE="$1"
if [ ! -f "${ISO_FILE}" ]; then
  echo "extract-iso.sh: The only argument must be a valid filename"
  exit 2
fi

ISO_FILE_INFO="$(file ${ISO_FILE} | cut -f 2- -d ' ')\n\n$(isoinfo -d -i ${ISO_FILE})"

ISO_FILE_DIR="$(dirname ${ISO_FILE})/_$(basename ${ISO_FILE})"
mkdir -p "${ISO_FILE_DIR}"

sudo mount -o loop,ro "${ISO_FILE}" /tmp/iso
rsync -rltgoD /tmp/iso/ "${ISO_FILE_DIR}/"
ISO_FILE_LS=$(ls -AlR /tmp/iso/)
sudo umount /tmp/iso

NPK_FILES=$(find ${ISO_FILE_DIR}/*.npk)
for NPK_FILE in ${NPK_FILES}; do
  HASH1="$(sha256sum ${NPK_FILE} | gawk '{ print $1 }')"
  HASH2="$(sha256sum $(dirname ${ISO_FILE})/$(basename ${NPK_FILE}) | gawk '{ print $1 }')"
  if [ "${HASH1}" == "${HASH2}" ]; then
    rm ${NPK_FILE}
    ln -s ../$(basename ${NPK_FILE}) ${NPK_FILE}
  fi
done

IMG_FILES=$(find ${ISO_FILE_DIR}/*.img)
for IMG_FILE in ${IMG_FILES}; do
  if [ "$(basename ${IMG_FILE})" == "efiboot.img" ]; then
    /tmp/extract-img.sh "${IMG_FILE}" || true
  fi
done

ISO_FILE_README="${ISO_FILE_DIR}/README.md"
echo -e "### $(basename ${ISO_FILE})\n" > "${ISO_FILE_README}"
echo -e "#### Description:\n\`\`\`\n${ISO_FILE_INFO}\n\`\`\`\n" >> "${ISO_FILE_README}"
echo -e "#### Internals:\n\`\`\`\n${ISO_FILE_LS}\n\`\`\`\n" >> "${ISO_FILE_README}"
echo -e "#### Notes:\n- Some NPK files are replaced with symlinks to save space, " >> "${ISO_FILE_README}"
echo -e "if their SHA256 hashes match those of NPK files downloaded separately.\n" >> "${ISO_FILE_README}"
