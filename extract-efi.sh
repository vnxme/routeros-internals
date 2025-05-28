#!/bin/bash

if [ "$#" -ne 1 ]; then
  echo "extract-efi.sh: Wrong argument count"
  exit 2
fi

EFI_FILE="$1"
if [ ! -f "${EFI_FILE}" ]; then
  echo "extract-efi.sh: The only argument must be a valid filename"
  exit 2
fi

EFI_FILE_INFO="$(file ${EFI_FILE} | cut -f 2- -d ' ' | grep 'Linux kernel')"
if [ -z "${EFI_FILE_INFO}" ]; then
  echo "extract-efi.sh: The provided file is not a Linux kernel image"
  exit 2
fi

EFI_FILE_DIR="$(dirname ${EFI_FILE})/_$(basename ${EFI_FILE})"
mkdir -p "${EFI_FILE_DIR}"

if [ ! -f "/tmp/extract-vmlinux.sh" ]; then
  echo "extract-efi.sh: Missing script /tmp/extract-vmlinux.sh"
  exit 2
fi

LINUX_FILE="${EFI_FILE_DIR}/vmlinux"
/tmp/extract-vmlinux.sh "${EFI_FILE}" > "${LINUX_FILE}"

CPIO_POS="$(binwalk ${LINUX_FILE} | grep 'ASCII cpio archive' | gawk '{print $1}' | head -1)"
if [ ! -z "${CPIO_POS}" ]; then
  CPIO_DIR="${EFI_FILE_DIR}/_vmlinux"
  mkdir -p "${CPIO_DIR}"
  dd if="${LINUX_FILE}" bs=1 skip="${CPIO_POS}" | cpio -idmv -D "${CPIO_DIR}"
fi

EFI_FILE_README="${EFI_FILE_DIR}/README.md"
echo -e "### $(basename ${EFI_FILE})\n" > "${EFI_FILE_README}"
echo -e "#### Description:\n\`\`\`\n${EFI_FILE_INFO}\n\`\`\`\n" >> "${EFI_FILE_README}"
echo -e "#### Internals:\n\`\`\`\n$(binwalk ${EFI_FILE})\n\`\`\`\n" >> "${EFI_FILE_README}"
echo -e "#### Linux kernel:\n\`\`\`\n$(binwalk ${LINUX_FILE})\n\`\`\`\n" >> "${EFI_FILE_README}"
