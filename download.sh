#!/bin/bash

# Copyright 2025 VNXME
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

MD="$(dirname -- "$(realpath -- "$0")")"
ME="$(basename -- "$0")"

ARG_DIR=''                              # -d or --dir:      working directory to save files into
ARG_HOST_GITHUB='github.com'            # --host-github:    GitHub hostname, e.g. github.com
ARG_HOST_VENDOR='download.mikrotik.com' # --host-vendor:    vendor hostname, e.g. download.mikrotik.com
ARG_IGNORE_BRANCH='false'               # --ignore-branch:  don't download files from a branch
ARG_IGNORE_RELEASE='false'              # --ignore-release: don't download files from a release
ARG_LABEL='vendor'                      # -l or --label:    branch prefix / tag suffix, e.g. vendor
ARG_REPO='vnxme/routeros-internals'     # -r or --repo:     GitHub repository, e.g. vnxme/routeros-internals
ARG_VERSION=''                          # -v or --version:  software version, e.g. 7.20

FILE_DOWNLOADS='downloads.txt'
FILE_PACKAGES='packages.txt'

declare -a DOWNLOADS

function check_deps {
  local DEPS=('wget')
  local DEP; for DEP in ${DEPS[@]}; do
    [ -z "$(which -- "${DEP}")" ] && { echo "${ME}: Dependency '${DEP}' can't be satisfied. Exiting"; exit 1; }
  done
}

function download {
  # $1 - local file path
  # $2 - remote file URL

  wget -nv -t 3 -O "$1" "$2" && DOWNLOADS+=("$1") || rm -f "$1"
}

function download_from_branch {
  # $1 - local file path

  download "$1" "${URL_GITHUB_B}/$1"
}

function download_from_branch_or_vendor {
  # $1 - local file path
  # $2 - vendor file name
  # $3 - alternative vendor URL

  if [ "${ARG_IGNORE_BRANCH}" == "false" ]; then
    download_from_branch "$1"
  fi

  if [ ! -f "$1" ]; then
    ARG_IGNORE_BRANCH='true'
    download_from_vendor "$1" "$2" "$3"
  fi
}

function download_from_release {
  # $1 - local file path

  download "$1" "${URL_GITHUB_R}/$1"
}

function download_from_vendor {
  # $1 - local file path
  # $2 - vendor file name
  # $3 - alternative vendor URL

  if [ -z "$3" ]; then
    download "$1" "${URL_VENDOR}/$2"
  else
    download "$1" "$3/$2"
  fi
}

function parse_arguments {
  # $1... positional arguments

  local OPTIONS_L='dir:,host-github:,host-vendor:,ignore-release,ignore-branch,label:,repo:,version:'
  local OPTIONS_S='d:l:r:v:'

  local PARSED=$(getopt -o ${OPTIONS_S} -l ${OPTIONS_L} --name "${ME}" -- "$@") || exit 2
  eval set -- "$PARSED"

  while true; do
    case "$1" in
      -d|--dir)
        ARG_DIR="$2"
        shift 2
        ;;
      --host-github)
        ARG_HOST_GITHUB="$2"
        shift 2
        ;;
      --host-vendor)
        ARG_HOST_VENDOR="$2"
        shift 2
        ;;
      --ignore-branch)
        ARG_IGNORE_BRANCH='true'
        shift
        ;;
      --ignore-release)
        ARG_IGNORE_RELEASE='true'
        shift
        ;;
      -l|--label)
        ARG_LABEL="$2"
        shift 2
        ;;
      -r|--repo)
        ARG_REPO="$2"
        shift 2
        ;;
      -v|--version)
        ARG_VERSION="$2"
        shift 2
        ;;
      --)
        shift
        break
        ;;
      *)
        echo "${ME}: Got unexpected argument: '$1'. Exiting"
        exit 1
        ;;
    esac
  done

  [ -z "${ARG_VERSION}" ] && { echo "${ME}: Version is required, but missing. Use -v or --version. Exiting"; exit 1; }
  [ -z "${ARG_LABEL}" ] && { echo "${ME}: Label is required, but missing. Use -l or --label. Exiting"; exit 1; }

  [ -z "${ARG_DIR}" -a $# -gt 0 ] && { ARG_DIR="$1"; shift; }
  [ $# -gt 0 ] && { echo "${ME}: Got an unknown positional argument. Exiting"; exit 1; }

  if [ -n "${ARG_DIR}" ]; then
    [ ! -d "${ARG_DIR}" ] && { echo "${ME}: Not found directory ${ARG_DIR} ($(realpath -- "${ARG_DIR}")). Exiting"; exit 1; }
    cd -- "${ARG_DIR}"
  fi
}

check_deps

[ $# -gt 0 ] && { echo "${ME}: Started with $# arguments: $@"; } || { echo "${ME}: Started with no arguments"; }

parse_arguments "$@"

BRANCH="${ARG_LABEL}-${ARG_VERSION}"
TAG="v${ARG_VERSION}-${ARG_LABEL}"

URL_GITHUB_R="https://${ARG_HOST_GITHUB}/${ARG_REPO}/releases/download/${TAG}"
URL_GITHUB_B="https://${ARG_HOST_GITHUB}/${ARG_REPO}/raw/refs/heads/${BRANCH}"
URL_VENDOR="https://${ARG_HOST_VENDOR}/routeros/${ARG_VERSION}"

# Download all files from a full release archive
if [ "${ARG_IGNORE_RELEASE}" == 'false' ]; then
  FILE="routeros-${BRANCH}-full.tar.zst"
  download_from_release "${FILE}"
  if [ -f "${FILE}" ]; then
    LIST="$(tar --zst -tf "${FILE}" | grep -x "${FILE_DOWNLOADS}")"
    if [ -n "${LIST}" ]; then
      tar --zst -xf "${FILE}" -C . "${LIST}" && tar --zst -xf "${FILE}" -C . -T "${LIST}" && rm -f "${FILE}"
    else
      tar --zst -xf "${FILE}" -C . && rm -f "${FILE}" && "${MD}/cleanup.sh" . && find * -type f > ${FILE_DOWNLOADS}
    fi
    exit 0
  fi
fi

# Download a changelog
download_from_branch_or_vendor 'changelog.txt' 'CHANGELOG'

# Download a list of extra packages
USE_FILE_PACKAGES='false'
if [ "${ARG_IGNORE_BRANCH}" == 'false' ]; then
  download_from_branch "${FILE_PACKAGES}"
  [ -f "${FILE_PACKAGES}" ] && USE_FILE_PACKAGES='true'
fi
[ "${USE_FILE_PACKAGES}" == 'false' ] && { truncate -s 0 -- "${FILE_PACKAGES}"; DOWNLOADS+=("${FILE_PACKAGES}"); }

# Download all packages
ARCHS=('arm' 'arm64' 'mipsbe' 'mmips' 'ppc' 'smips' 'tile' 'x86')
PACKAGES=('routeros')
for ARCH in "${ARCHS[@]}"; do
  mkdir -p "${ARCH}"
  [ "${ARCH}" == 'x86' ] && SUFFIX='' || SUFFIX="-${ARCH}"

  for PACKAGE in "${PACKAGES[@]}"; do
    download_from_branch_or_vendor "${ARCH}/${PACKAGE}-${ARG_VERSION}${SUFFIX}.npk" "${PACKAGE}-${ARG_VERSION}${SUFFIX}.npk"
  done

  if [ ${#PACKAGES[@]} -eq 1 -a "${PACKAGES[0]}" == 'routeros' ]; then
    if [ "${USE_FILE_PACKAGES}" == 'true' ]; then
      readarray -t PACKAGES_ < <(cat "${FILE_PACKAGES}" | grep "${ARCH}/")
      for PACKAGE in "${PACKAGES_[@]}"; do
        download_from_branch "${PACKAGE}"
      done
    else
      FILE="${ARCH}/all_packages-${ARG_VERSION}${SUFFIX}.zip"
      download_from_vendor "${FILE}" "all_packages-${ARCH}-${ARG_VERSION}.zip"
      if [ -f "${FILE}" ]; then
        unset -v 'DOWNLOADS[-1]'
        unzip -o -d "${ARCH}/" "${FILE}" && rm -f "${FILE}"
        readarray -t FILES < <(find ${ARCH}/* -maxdepth 0 -type f -name '*.npk' ! -name 'routeros*.npk' | tee -a "${FILE_PACKAGES}")
        for FILE in ${FILES[@]}; do
          DOWNLOADS+=("${FILE}")
        done
      fi
    fi
  fi
done

# Download images
ARCHS=('arm64' 'x86')
for ARCH in "${ARCHS[@]}"; do
  mkdir -p "${ARCH}"
  [ "${ARCH}" == 'x86' ] && SUFFIX='' || SUFFIX="-${ARCH}"

  download_from_branch_or_vendor "${ARCH}/chr-${ARG_VERSION}${SUFFIX}.img.zip" "chr-${ARG_VERSION}${SUFFIX}.img.zip"
  download_from_branch_or_vendor "${ARCH}/mikrotik-${ARG_VERSION}${SUFFIX}.iso" "mikrotik-${ARG_VERSION}${SUFFIX}.iso"

  if [ "${ARCH}" == 'x86' ]; then
    download_from_branch_or_vendor "${ARCH}/install-image-${ARG_VERSION}${SUFFIX}.img.zip" "install-image-${ARG_VERSION}${SUFFIX}.zip"
  fi
done

# Download binaries
ARCHS=('x86')
for ARCH in "${ARCHS[@]}"; do
  mkdir -p "${ARCH}"
  [ "${ARCH}" == 'x86' ] && SUFFIX='' || SUFFIX="-${ARCH}"

  download_from_branch_or_vendor "${ARCH}/netinstall-cli-${ARG_VERSION}${SUFFIX}.tar.gz" "netinstall-${ARG_VERSION}${SUFFIX}.tar.gz"
  download_from_branch_or_vendor "${ARCH}/netinstall-w32-${ARG_VERSION}${SUFFIX}.exe.zip" "netinstall-${ARG_VERSION}${SUFFIX}.zip"
  download_from_branch_or_vendor "${ARCH}/netinstall-w64-${ARG_VERSION}${SUFFIX}.exe.zip" "netinstall64-${ARG_VERSION}${SUFFIX}.zip"
done

# Download other files
download_from_branch_or_vendor 'packages.csv' 'packages.csv'
download_from_branch_or_vendor 'repo.json' 'repo.json' 'https://apps.mikrotik.com/easyapps'

printf '%s\n' "${DOWNLOADS[@]}" > ${FILE_DOWNLOADS}
