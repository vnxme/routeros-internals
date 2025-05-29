#!/bin/bash

ME="${0##*/}"
ISO_FILE="$1"

if [ "$#" -ne 1 -o ! -s "${ISO_FILE}" ]; then
  echo "${ME}: The only argument must be a path to a non-empty file" >&2
  exit 2
fi

ISO_FILE_INFO="$(file ${ISO_FILE} | cut -f 2- -d ' ')"
if [ -z "$(echo "${ISO_FILE_INFO}" | grep 'ISO 9660 CD-ROM filesystem data')" ]; then
  echo "${ME}: File '${ISO_FILE}' doesn't seem to contain CD-ROM filesystem data; it contains ${ISO_FILE_INFO}" >&2
  exit 2
fi

ISO_FILE_DIR="$(dirname ${ISO_FILE})/_$(basename ${ISO_FILE})"
mkdir -p "${ISO_FILE_DIR}"

sudo mount -o loop,ro "${ISO_FILE}" /tmp/iso
rsync -rltgoD /tmp/iso/ "${ISO_FILE_DIR}/"
ISO_FILE_LS=$(ls -AlR /tmp/iso/)
sudo umount /tmp/iso

NPK_FILES=$(find "${ISO_FILE_DIR}/*" -type f -name '*.npk')
for NPK_FILE in ${NPK_FILES}; do
  HASH1="$(sha256sum ${NPK_FILE} | gawk '{ print $1 }')"
  HASH2="$(sha256sum $(dirname ${ISO_FILE})/$(basename ${NPK_FILE}) | gawk '{ print $1 }')"
  if [ "${HASH1}" == "${HASH2}" ]; then
    rm ${NPK_FILE}
    ln -s ../$(basename ${NPK_FILE}) ${NPK_FILE}
  fi
done

IMG_FILES=$(find "${ISO_FILE_DIR}/*" -type f -name '*.img')
for IMG_FILE in ${IMG_FILES}; do
  /tmp/unpack-img.sh "${IMG_FILE}" || true
done

ISO_FILE_README="${ISO_FILE_DIR}/README.md"
echo -e "### $(basename ${ISO_FILE})
#### Identification (\`file <*>\`):
\`\`\`
${ISO_FILE_INFO}
\`\`\`
#### Description (\`isoinfo -d -i <*>\`):
\`\`\`
$(isoinfo -d -i ${ISO_FILE})
\`\`\`
#### Listing (\`ls -AlR <*>\`):
\`\`\`
${ISO_FILE_LS}
\`\`\`
#### Notes:
- Some NPK files are replaced with symlinks to save space, if their SHA256 hashes match those of NPK files downloaded separately.
" > "${ISO_FILE_README}"
