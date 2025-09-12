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

if [ -n "$1" ]; then
  [ ! -d "$1" ] && { echo "${ME}: Not found directory $1 ($(realpath "$1")). Exiting"; exit 1; }
  cd "$1"
fi

# Remove unpacked subdirectories in arch-based directories
readarray -d '' -t FILES < <(
  find */* -maxdepth 0 -type f -print0 2>/dev/null || true
)
for FILE in "${FILES[@]}"; do
  DIR="$(dirname "${FILE}")/_$(basename "${FILE}")"
  if [ -d "${DIR}" ]; then
    rm -rf "${DIR}"
  fi
done

# Remove support files in the root directory
rm -f "exclusions.txt"
rm -f "hashes.txt"
rm -f "links.txt"
