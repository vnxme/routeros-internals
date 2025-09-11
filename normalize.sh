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

ME="$(basename "$0")"

if [ "${EUID:-$(id -u)}" -ne 0 ]; then
  echo "${ME}: Root permissions are required"
  if [ -n "$(which sudo)" ]; then
    echo "${ME}: Using sudo to run as root"
    sudo bash "$0" "$@"
    exit $?
  else
    echo "${ME}: Using su -c to run as root"
    su - root -c "bash $0 $@"
    exit $?
  fi
fi

[ $# -gt 0 ] && echo "${ME}: Started with $# arguments: $@" || echo "${ME}: Started with no arguments"

if [ -n "$1" -a "${1%/}" != '.' ]; then
  SWD="${1%/}"
  [ ! -d "${SWD}" ] && echo "${ME}: Not found directory ${SWD} ($(realpath "${SWD}")). Exiting" && exit 1
else
  SWD='.'
fi

# Fix directory permissions
find "${SWD}" -type d -not -perm 755 -exec chmod 755 {} \;

# Fix file permissions
find "${SWD}" -type f -not -perm 644 -exec chmod 644 {} \;

# Remove block and character devices
find "${SWD}" -type b -o -type c -exec rm -f {} \;

# Put .gitignore into empty directories
find "${SWD}" -type d -empty -exec bash -c 'echo -e "*\n!.gitignore\n" > "{}/.gitignore"' \;
