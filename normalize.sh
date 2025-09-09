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

ME="$(basename $0)"

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

echo "${ME}: Parsing arguments $@"

# Fix directory permissions
readarray -d '' -t DIRS < <(
  find . -type d -not -perm 755 -print0 2>/dev/null || true
)
for DIR in "${DIRS[@]}"; do
  chmod 755 "${DIR}"
done

# Fix file permissions
readarray -d '' -t FILES < <(
  find . -type f -not -perm 644 -print0 2>/dev/null || true
)
for FILE in "${FILES[@]}"; do
  chmod 644 "${FILE}"
done

# Remove block and character devices
readarray -d '' -t DEVICES < <(
  find . -type b -o -type c -print0 2>/dev/null || true
)
for DEVICE in "${DEVICES[@]}"; do
  rm -f "${DEVICE}"
done

# Put .gitignore into empty directories
readarray -d '' -t DIRS < <(
  find . -type d -empty -print0 2>/dev/null || true
)
for DIR in "${DIRS[@]}"; do
  echo -e "*\n!.gitignore\n" > "${DIR}/.gitignore"
done
