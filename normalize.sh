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

FILE_PERMISSIONS='permissions.txt'
FILE_SPECIALS='specials.txt'

if [ "${EUID:-$(id -u)}" -ne 0 ]; then
  if [ -n "$(which sudo)" ]; then
    echo "${ME}: Root permissions are required. Using sudo to run as root"
    sudo bash -- "$0" "$@"
    exit $?
  else
    echo "${ME}: Root permissions are required. Using su -c to run as root"
    su - root -c "cd \"${PWD}; bash -- \"$(realpath -- "$0")\" \"$@\""
    exit $?
  fi
fi

[ $# -gt 0 ] && { echo "${ME}: Started with $# arguments: $@"; } || { echo "${ME}: Started with no arguments"; }

if [ -n "$1" ]; then
  [ ! -d "$1" ] && { echo "${ME}: Not found directory $1 ($(realpath -- "$1")). Exiting"; exit 1; }
  cd -- "$1"
fi

# Clear contents of support files
truncate -s 0 -- "${FILE_PERMISSIONS}"
truncate -s 0 -- "${FILE_SPECIALS}"

# Fix directory permissions
find * -type d -not -perm 755 -printf '%p # type=%y, perm=%m(%M)\n' | while read LINE; do
  chmod 755 "${LINE%% # *}"
  echo "${LINE}" > "${FILE_PERMISSIONS}"
done

# Fix file permissions
find * -type f -not -perm 644 -printf '%p # type=%y, perm=%m(%M)\n' | while read LINE; do
  chmod 644 "${LINE%% # *}"
  echo "${LINE}" > "${FILE_PERMISSIONS}"
done

# Remove block and character devices, pipes and sockets
find * -type b -o -type c -o -type p -o -type s -printf '%p # type: %y\n' | while read LINE; do
  rm -f -- "${LINE%% # *}"
  echo "${LINE}" > "${FILE_SPECIALS}"
done

# Put .gitignore into empty directories
find * -type d -empty | while read LINE; do
  {
    echo '*'
    echo '!.gitignore'
  } > "${LINE}/.gitignore"
done
