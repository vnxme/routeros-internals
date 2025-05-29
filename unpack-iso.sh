#!/bin/bash

ME="${0##*/}"
FILE="$1"

if [ "$#" -ne 1 -o ! -s "${FILE}" ]; then
  echo "${ME}: The only argument must be a path to a non-empty file" >&2
  exit 2
fi

FILE_INFO="$(file ${FILE} | cut -f 2- -d ' ')"
if [ -z "$(echo "${FILE_INFO}" | grep 'ISO 9660 CD-ROM filesystem data')" ]; then
  echo "${ME}: File '${FILE}' doesn't seem to contain CD-ROM filesystem data; it contains '${FILE_INFO}'" >&2
  exit 2
fi

FILE_DIR="$(dirname ${FILE})/_$(basename ${FILE})"
mkdir -p "${FILE_DIR}"

sudo mount -o loop,ro "${FILE}" /tmp/iso
rsync -rltgoD /tmp/iso/ "${FILE_DIR}/"
FILE_LS=$(ls -AlR /tmp/iso/)
sudo umount /tmp/iso

NPK_FILES=$(find ${FILE_DIR}/* -type f -name '*.npk')
for NPK_FILE in ${NPK_FILES}; do
  HASH1="$(sha256sum ${NPK_FILE} | gawk '{ print $1 }')"
  HASH2="$(sha256sum $(dirname ${FILE})/$(basename ${NPK_FILE}) | gawk '{ print $1 }')"
  if [ "${HASH1}" == "${HASH2}" ]; then
    rm ${NPK_FILE}
    ln -s ../$(basename ${NPK_FILE}) ${NPK_FILE}
  fi
done

IMG_FILES=$(find ${FILE_DIR}/* -type f -name '*.img')
for IMG_FILE in ${IMG_FILES}; do
  /tmp/unpack-img.sh "${IMG_FILE}" || true
done

FILE_README="${FILE_DIR}/README.md"
echo -e "### $(basename ${FILE})
#### Identification (\`file <*>\`):
\`\`\`
${FILE_INFO}
\`\`\`
#### Description (\`isoinfo -d -i <*>\`):
\`\`\`
$(isoinfo -d -i ${FILE})
\`\`\`
#### Listing (\`ls -AlR <*>\`):
\`\`\`
${FILE_LS}
\`\`\`
#### Notes:
- Some NPK files are replaced with symlinks to save space, if their SHA256 hashes match those of NPK files downloaded separately.
" > "${FILE_README}"
