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

ME="$(basename -- "$0")"
MYDIR="$(dirname -- "$(realpath -- "$0")")"

# Define default flag and option values
DIR='' # -d or --dir: working directory to save files into
HOST_GITHUB='github.com' # --host-github: GitHub hostname
HOST_VENDOR='download.mikrotik.com' # --host-vendor: vendor hostname
IGNORE_BRANCH='false' # --ignore-branch: don't download files from a branch
IGNORE_RELEASE='false' # --ignore-release: don't download files from a release
LABEL='' # -l or --label: branch prefix / tag suffix indicating a source of files
REPO='vnxme/routeros-internals' # -r or --repo: GitHub repository
VERSION='' # -v or --version: software version

function download {
  # arguments:
  # $1 - local file path
  # $2 - remote file URL

  wget -nv -O "$1" "$2" || rm -f "$1"
}

function download_from_branch {
  # arguments:
  # $1 - local file path

  download "$1" "${URL_GITHUB_B}/$1"
}

function download_from_branch_or_vendor {
  # arguments:
  # $1 - local file path
  # $2 - vendor file name

  if [ "${IGNORE_BRANCH}" == "false" ]; then
    download_from_branch "$1"
  fi

  if [ ! -f "$1" ]; then
    download "$1" "${URL_VENDOR}/$2"
  fi
}

function download_from_release {
  # arguments:
  # $1 - local file path

  download "$1" "${URL_GITHUB_R}/$1"
}

function download_from_vendor {
  # arguments:
  # $1 - local file path
  # $2 - vendor file name

  download "$1" "${URL_VENDOR}/$2"
}

function parse_options {
  # arguments
  # $1... positional arguments

  OPTIONS_L='dir:,host-github:,host-vendor:,ignore-release,ignore-branch,label:,repo:,version:'
  OPTIONS_S='d:l:r:v:'

  PARSED=$(getopt -o ${OPTIONS_S} -l ${OPTIONS_L} --name "${ME}" -- "$@") || exit 2
  eval set -- "$PARSED"

  while true; do
    case "$1" in
      -d|--dir)
        DIR="$2"
        shift 2
        ;;
      --host-github)
        HOST_GITHUB="$2"
        shift 2
        ;;
      --host-vendor)
        HOST_VENDOR="$2"
        shift 2
        ;;
      --ignore-branch)
        IGNORE_BRANCH='true'
        shift
        ;;
      --ignore-release)
        IGNORE_RELEASE='true'
        shift
        ;;
      -l|--label)
        LABEL="$2"
        shift 2
        ;;
      -r|--repo)
        REPO="$2"
        shift 2
        ;;
      -v|--version)
        VERSION="$2"
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

  [ -z "${DIR}" -a $# -gt 0 ] && DIR="$1" && shift
  [ -z "${LABEL}" ] && echo "${ME}: Label is required, but missing. Use -l or --label. Exiting" && exit 1
  [ -z "${VERSION}" ] && echo "${ME}: Version is required, but missing. Use -v or --version. Exiting" && exit 1
  [ $# -gt 0 ] && echo "${ME}: Got more than one positional argument. Exiting" && exit 1

  if [ -n "$1" ]; then
    [ ! -d "$1" ] && { echo "${ME}: Not found directory $1 ($(realpath "$1")). Exiting"; exit 1; }
    cd "$1"
  fi
}

[ $# -gt 0 ] && { echo "${ME}: Started with $# arguments: $@"; } || { echo "${ME}: Started with no arguments"; }

parse_options "$@"

BRANCH="${LABEL}-${VERSION}"
TAG="v${VERSION}-${LABEL}"

URL_GITHUB_R="https://${HOST_GITHUB}/${REPO}/releases/download/${TAG}"
URL_GITHUB_B="https://${HOST_GITHUB}/${REPO}/raw/refs/heads/${BRANCH}"
URL_VENDOR="https://${HOST_VENDOR}/routeros/${VERSION}"

# Download all files from a full release archive
if [ "${IGNORE_RELEASE}" == 'false' ]; then
  FILE="routeros-${BRANCH}-full.tar.zst"
  download_from_release "${FILE}"
  if [ -f "${FILE}" ]; then
    tar --zst -xf "${FILE}" -C . && rm -f "${FILE}" && "${MYDIR}/cleanup.sh" .
    exit 0
  fi
fi

# Download a changelog
download_from_branch_or_vendor 'changelog.txt' 'CHANGELOG'

# Download a list of extra packages
FILE_PACKAGES='packages.txt'
[ "${IGNORE_BRANCH}" == 'false' ] && download_from_branch "${FILE_PACKAGES}"

# Download all packages
ARCHS=('arm' 'arm64' 'mipsbe' 'mmips' 'ppc' 'smips' 'tile' 'x86')
PACKAGES=('routeros')
for ARCH in "${ARCHS[@]}"; do
  mkdir -p "${ARCH}"
  [ "${ARCH}" == 'x86' ] && SUFFIX='' || SUFFIX="-${ARCH}"

  for PACKAGE in "${PACKAGES[@]}"; do
    download_from_branch_or_vendor "${ARCH}/${PACKAGE}-${VERSION}${SUFFIX}.npk" "${PACKAGE}-${VERSION}${SUFFIX}.npk"
  done

  if [ ${#PACKAGES[@]} -eq 1 -a "${PACKAGES[0]}" == 'routeros' ]; then
    if [ "${IGNORE_BRANCH}" == 'false' -a -f "${FILE_PACKAGES}" ]; then
      readarray -t PACKAGES_ < <(cat "${FILE_PACKAGES}" | grep "${ARCH}/")
      for PACKAGE in "${PACKAGES_[@]}"; do
        download_from_branch "${PACKAGE}"
      done
    else
      FILE="${ARCH}/all_packages-${VERSION}${SUFFIX}.zip"
      download_from_vendor "${FILE}" "all_packages-${ARCH}-${VERSION}.zip"
      if [ -f "${FILE}" ]; then
        unzip -o -d "${ARCH}/" "${FILE}" && rm -f "${FILE}"
        find ${ARCH}/* -maxdepth 0 -type f -name '*.npk' ! -name 'routeros*.npk' >> "${FILE_PACKAGES}"
      fi
    fi
  fi
done

# Download images
ARCHS=('arm64' 'x86')
for ARCH in "${ARCHS[@]}"; do
  mkdir -p "${ARCH}"
  [ "${ARCH}" == 'x86' ] && SUFFIX='' || SUFFIX="-${ARCH}"

  download_from_branch_or_vendor "${ARCH}/chr-${VERSION}${SUFFIX}.img.zip" "chr-${VERSION}${SUFFIX}.img.zip"
  download_from_branch_or_vendor "${ARCH}/mikrotik-${VERSION}${SUFFIX}.iso" "mikrotik-${VERSION}${SUFFIX}.iso"

  if [ "${ARCH}" == 'x86' ]; then
    download_from_branch_or_vendor "${ARCH}/install-image-${VERSION}${SUFFIX}.img.zip" "install-image-${VERSION}${SUFFIX}.zip"
  fi
done

# Download binaries
ARCHS=('x86')
for ARCH in "${ARCHS[@]}"; do
  mkdir -p "${ARCH}"
  [ "${ARCH}" == 'x86' ] && SUFFIX='' || SUFFIX="-${ARCH}"

  download_from_branch_or_vendor "${ARCH}/netinstall-cli-${VERSION}${SUFFIX}.tar.gz" "netinstall-${VERSION}${SUFFIX}.tar.gz"
  download_from_branch_or_vendor "${ARCH}/netinstall-w32-${VERSION}${SUFFIX}.exe.zip" "netinstall-${VERSION}${SUFFIX}.zip"
  download_from_branch_or_vendor "${ARCH}/netinstall-w64-${VERSION}${SUFFIX}.exe.zip" "netinstall64-${VERSION}${SUFFIX}.zip"
done
