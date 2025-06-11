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

from tools.routeros_npk import NovaPackage, NpkFileContainer, NpkPartID


def unpack_npk_package(package: NovaPackage, directory: str, skip_files: bool = False, skip_squashfs: bool = False,
                       verbose: bool = False):
    package_name = package[NpkPartID.NAME_INFO].data.name
    if (not skip_squashfs) and (len(package[NpkPartID.SQUASHFS].data) > 0):
        filename = f"{directory}/{package_name}.sfs"
        if verbose: print(filename)
        os.makedirs(os.path.dirname(filename), exist_ok=True)
        open(filename, 'wb').write(package[NpkPartID.SQUASHFS].data)
    if (not skip_files) and (len(package[NpkPartID.FILE_CONTAINER].data) > 0):
        container = NpkFileContainer.unserialize_from(package[NpkPartID.FILE_CONTAINER].data)
        for item in container:
            if item.type != 65:  # if this is not a directory
                filename = f"{directory}/{package_name}.files/{item.name.decode('utf-8')}"
                if verbose: print(filename)
                os.makedirs(os.path.dirname(filename), exist_ok=True)
                open(filename, 'wb').write(item.data)


def unpack_npk_file(filename: str, directory: str, skip_files: bool = False, skip_squashfs: bool = False,
                    verbose: bool = False):
    outer_package = NovaPackage.load(filename)
    if len(outer_package._packages) > 0:
        for inner_package in outer_package._packages:
            unpack_npk_package(inner_package, directory, skip_files, skip_squashfs, verbose)
    else:
        unpack_npk_package(outer_package, directory, skip_files, skip_squashfs, verbose)


if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(description='unpack NPK package')
    parser.add_argument('filename', type=str, help='NPK package filename')
    parser.add_argument('--directory', type=str, help='directory to unpack NPK package into')
    parser.add_argument('--skip-files', action='store_true', help='skip files')
    parser.add_argument('--skip-squashfs', action='store_true', help='skip squashfs')
    parser.add_argument('--verbose', action='store_true', help='verbose output')
    args = parser.parse_args()

    if args.filename is not None and os.path.exists(args.filename):
        unpack_npk_file(args.filename, f"{os.path.dirname(args.filename)}/_{os.path.basename(args.filename)}"
        if args.directory is None else args.directory, args.skip_files, args.skip_squashfs, args.verbose)
