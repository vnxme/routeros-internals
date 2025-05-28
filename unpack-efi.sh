#!/bin/bash

ME="${0##*/}"
EFI_FILE="$1"

if [ "$#" -ne 1 -o ! -s "${EFI_FILE}" ]; then
  echo "${ME}: The only argument must be a path to a non-empty file" >&2
  exit 2
fi

EFI_FILE_INFO="$(file ${EFI_FILE} | cut -f 2- -d ' ' | grep -E 'Linux kernel (.*) boot executable (bz|z)Image')"
if [ -z "${EFI_FILE_INFO}" ]; then
  echo "${ME}: The provided file doesn't seem to contain a compressed Linux kernel image" >&2
  exit 2
fi

if [ ! -f "/tmp/extract-vmlinux.sh" ]; then
  echo "${ME}: Missing script /tmp/extract-vmlinux.sh" >&2
  exit 2
fi

EFI_FILE_DIR="$(dirname ${EFI_FILE})/_$(basename ${EFI_FILE})"
mkdir -p "${EFI_FILE_DIR}"

LINUX_FILE="${EFI_FILE_DIR}/vmlinux"
/tmp/extract-vmlinux.sh "${EFI_FILE}" > "${LINUX_FILE}"

if [ ! -s "${LINUX_FILE}" ]; then
  rm "${LINUX_FILE}" || true
  echo "${ME}: Could not extract an uncompressed Linux kernel image" >&2
  exit 2
fi

/tmp/unpack-cpio.sh "${LINUX_FILE}" || true

EFI_FILE_README="${EFI_FILE_DIR}/README.md"
echo -e "### $(basename ${EFI_FILE})\n" > "${EFI_FILE_README}"
echo -e "#### Description:\n\`\`\`\n${EFI_FILE_INFO}\n\`\`\`\n" >> "${EFI_FILE_README}"
echo -e "#### Internals:\n\`\`\`\n$(binwalk ${EFI_FILE})\n\`\`\`\n" >> "${EFI_FILE_README}"
