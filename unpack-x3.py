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

import tools.routeros_x3 as x3


def unpack_x3_file(filename: str, directory: str) -> None:
    target_filename = f"{directory}/{os.path.basename(filename[:-3])}.xml"
    os.makedirs(os.path.dirname(target_filename), exist_ok=True)
    with open(target_filename, 'w') as file:
        file.write(x3.Document().from_file(filename).to_xml_string(indent=4))


if __name__ == '__main__':
    import argparse

    parser = argparse.ArgumentParser(description='unpack X3 document')
    parser.add_argument('filename', type=str, help='X3 document filename')
    parser.add_argument('--directory', type=str, help='directory to unpack X3 document into')
    args = parser.parse_args()

    if args.filename is not None and os.path.exists(args.filename):
        unpack_x3_file(args.filename, f"{os.path.dirname(args.filename)}/_{os.path.basename(args.filename)}"
        if args.directory is None else args.directory)
