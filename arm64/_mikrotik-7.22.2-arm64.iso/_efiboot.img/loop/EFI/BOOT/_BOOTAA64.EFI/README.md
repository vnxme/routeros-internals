### BOOTAA64.EFI
#### Identification (`file <*>`):
```
Linux kernel ARM64 boot executable Image, little-endian, 4K pages
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Linux kernel ARM64 image, load offset: 0x80000, image size: 12419072 bytes, little endian, 4k page size,
288064        0x46540         SHA256 hash constants, little endian
7827456       0x777000        ELF, 64-bit LSB shared object, version 1 (SYSV)
7877920       0x783520        SHA256 hash constants, little endian
8027412       0x7A7D14        Base64 standard index table
8045312       0x7AC300        CRC32 polynomial table, little endian
8218576       0x7D67D0        Intel x86 or x64 microcode, sig 0x0000000c, pf_mask 0x2012000, 2000-02-01, rev 0x-001, size 6
8738601       0x855729        Neighborly text, "neighbor dump requestp request"
8738652       0x85575C        Neighborly text, "neighbor dump request request"
8738702       0x85578E        Neighborly text, "neighbor dump request"
8738993       0x8558B1        Neighborly text, "neighbor dump requestnvalid values in header for neighbor get request"
8739034       0x8558DA        Neighborly text, "neighbor get requestrequest"
8739084       0x85590C        Neighborly text, "neighbor get requestequest"
8739133       0x85593D        Neighborly text, "neighbor get requestget request"
8739187       0x855973        Neighborly text, "neighbor get requestquest"
8739235       0x8559A3        Neighborly text, "neighbor get requestest"
8739281       0x8559D1        Neighborly text, "neighbor get requestuest"
8739321       0x8559F9        Neighborly text, "neighbor table dump requestor table dump request"
8739378       0x855A32        Neighborly text, "neighbor table dump requestor table dump request"
8739435       0x855A6B        Neighborly text, "neighbor table dump requestlayer address given"
8739463       0x855A87        Neighborly text, "Neighbor entry is now dead"
8929094       0x883F46        Unix path: /dev/vc/0
9029837       0x89C8CD        xz compressed data
9300622       0x8DEA8E        Unix path: /lib/firmware/updates/5.6.3
9383886       0x8F2FCE        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
9418583       0x8FB757        Unix path: /sys/firmware/devicetree/base
9420723       0x8FBFB3        Unix path: /sys/firmware/fdt': CRC check failed
9448250       0x902B3A        Neighborly text, "neighbor table overflow!ighbour cache statistics"
9476860       0x909AFC        Neighborly text, "NeighborSolicitss"
9476877       0x909B0D        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
10253233      0x9C73B1        xz compressed data
10298656      0x9D2520        Flattened device tree, size: 57903 bytes, version: 17
10356576      0x9E0760        Flattened device tree, size: 7966 bytes, version: 17
10374136      0x9E4BF8        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
10374252      0x9E4C6C        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
10374376      0x9E4CE8        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
10374492      0x9E4D5C        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
10519936      0xA08580        AES S-Box
10520192      0xA08680        AES Inverse S-Box
11739140      0xB32004        xz compressed data
12312314      0xBBDEFA        TROC filesystem, 627508053 file entries
12713747      0xC1FF13        Executable script, shebang: "/"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4220
-rw-r--r-- 1 root root   57911 2026-05-02 20:32:01.445572418 +0100 9d2520.dtb
-rw-r--r-- 1 root root    7974 2026-05-02 20:32:01.464572419 +0100 9e0760.dtb
-rw-r--r-- 1 root root     492 2026-05-02 20:32:01.344572415 +0100 9e4bf8.cpio
-rw-r--r-- 1 root root 4246528 2026-05-02 20:32:03.430572488 +0100 b32004.cpio
```

