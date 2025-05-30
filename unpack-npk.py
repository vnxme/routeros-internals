import os
from MikroTikPatch import NovaPackage, NpkFileContainer, NpkPartID


def unpack_npk_package(package: NovaPackage, directory: str, skip_files: bool = False, skip_squashfs: bool = False):
    package_name = package[NpkPartID.NAME_INFO].data.name
    if (not skip_squashfs) and (len(package[NpkPartID.SQUASHFS].data) > 0):
        filename = f"{directory}/{package_name}.sfs"
        print(filename)
        os.makedirs(os.path.dirname(filename), exist_ok=True)
        open(filename, 'wb').write(package[NpkPartID.SQUASHFS].data)
    if (not skip_files) and (len(package[NpkPartID.FILE_CONTAINER].data) > 0):
        container = NpkFileContainer.unserialize_from(package[NpkPartID.FILE_CONTAINER].data)
        for item in container:
            if item.type != 65: # if this is not a directory
                filename = f"{directory}/{package_name}.files/{item.name.decode('utf-8')}"
                print(filename)
                os.makedirs(os.path.dirname(filename), exist_ok=True)
                open(filename, 'wb').write(item.data)


def unpack_npk_file(filename: str, directory: str, skip_files: bool = False, skip_squashfs: bool = False):
    outer_package = NovaPackage.load(filename)
    if len(outer_package._packages) > 0:
        for inner_package in outer_package._packages:
            unpack_npk_package(inner_package, directory, skip_files, skip_squashfs)
    else:
        unpack_npk_package(outer_package, directory, skip_files, skip_squashfs)


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(description='unpack NPK package')
    parser.add_argument('filename', type=str, help='NPK package filename')
    parser.add_argument('--directory', type=str, help='directory to unpack NPK package')
    parser.add_argument('--skip-files', action='store_true', help='skip files')
    parser.add_argument('--skip-squashfs', action='store_true', help='skip squashfs')
    args = parser.parse_args()

    if args.filename is not None and os.path.exists(args.filename):
        unpack_npk_file(args.filename, f"{os.path.dirname(args.filename)}/_{os.path.basename(args.filename)}"
        if args.directory is None else args.directory, args.skip_files, args.skip_squashfs)
