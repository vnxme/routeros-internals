#!/usr/bin/env python3

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

import os

import tools.routeros_fwf as fwf


def unpack_fwf_file(filename: str, directory: str) -> None:
    os.makedirs(directory, exist_ok=True)
    document = fwf.Document().from_file(filename)
    for k, v in document.items():
        platform = f".{v.properties['platform']}" if 'platform' in v.properties else '.unknown'
        target_filename = f"{directory}/{hex(k)[2:]}{platform}.routerboot.bin"

        with open(target_filename, 'wb') as file:
            file.write(v.payload)


if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(description='unpack FWF document')
    parser.add_argument('filename', type=str, help='FWF document filename')
    parser.add_argument('--directory', type=str, help='directory to unpack FWF document into')
    args = parser.parse_args()

    if args.filename is not None and os.path.exists(args.filename):
        unpack_fwf_file(args.filename, f"{os.path.dirname(args.filename)}/_{os.path.basename(args.filename)}"
        if args.directory is None else args.directory)
