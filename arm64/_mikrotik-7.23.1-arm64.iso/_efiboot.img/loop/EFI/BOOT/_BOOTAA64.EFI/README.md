### BOOTAA64.EFI
#### Identification (`file <*>`):
```
Linux kernel ARM64 boot executable Image, little-endian, 4K pages
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Linux kernel ARM64 image, load offset: 0x80000, image size: 12562432 bytes, little endian, 4k page size,
288192        0x465C0         SHA256 hash constants, little endian
7892992       0x787000        ELF, 64-bit LSB shared object, version 1 (SYSV)
7943456       0x793520        SHA256 hash constants, little endian
8092948       0x7B7D14        Base64 standard index table
8110848       0x7BC300        CRC32 polynomial table, little endian
8296576       0x7E9880        Intel x86 or x64 microcode, sig 0x0000000c, pf_mask 0x2012000, 2000-02-01, rev 0x-001, size 6
8592521       0x831C89        gzip compressed data, from FAT filesystem (MS-DOS, OS/2, NT), last modified: 1970-07-14 04:18:08 (bogus date)
8834537       0x86CDE9        Neighborly text, "neighbor dump requestp request"
8834588       0x86CE1C        Neighborly text, "neighbor dump request request"
8834638       0x86CE4E        Neighborly text, "neighbor dump request"
8834929       0x86CF71        Neighborly text, "neighbor dump requestnvalid values in header for neighbor get request"
8834970       0x86CF9A        Neighborly text, "neighbor get requestrequest"
8835020       0x86CFCC        Neighborly text, "neighbor get requestequest"
8835069       0x86CFFD        Neighborly text, "neighbor get requestget request"
8835123       0x86D033        Neighborly text, "neighbor get requestquest"
8835171       0x86D063        Neighborly text, "neighbor get requestest"
8835217       0x86D091        Neighborly text, "neighbor get requestuest"
8835257       0x86D0B9        Neighborly text, "neighbor table dump requestor table dump request"
8835314       0x86D0F2        Neighborly text, "neighbor table dump requestor table dump request"
8835371       0x86D12B        Neighborly text, "neighbor table dump requestlayer address given"
8835399       0x86D147        Neighborly text, "Neighbor entry is now dead"
9025110       0x89B656        Unix path: /dev/vc/0
9125853       0x8B3FDD        xz compressed data
9402137       0x8F7719        Unix path: /lib/firmware/updates/5.6.3
9486320       0x90BFF0        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
9521042       0x914792        Unix path: /sys/firmware/devicetree/base
9523165       0x914FDD        Unix path: /sys/firmware/fdt': CRC check failed
9550698       0x91BB6A        Neighborly text, "neighbor table overflow!ighbour cache statistics"
9579308       0x922B2C        Neighborly text, "NeighborSolicitss"
9579325       0x922B3D        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
10392529      0x9E93D1        xz compressed data
10444352      0x9F5E40        Flattened device tree, size: 57955 bytes, version: 17
10502336      0xA040C0        Flattened device tree, size: 7966 bytes, version: 17
10520332      0xA0870C        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
10520448      0xA08780        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
10520572      0xA087FC        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
10520688      0xA08870        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
10651008      0xA28580        AES S-Box
10651264      0xA28680        AES Inverse S-Box
11882500      0xB55004        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4244
-rw-r--r-- 1 root root   57963 2026-06-08 09:57:40.552665192 +0100 9f5e40.dtb
-rw-r--r-- 1 root root    7974 2026-06-08 09:57:40.573665673 +0100 a040c0.dtb
-rw-r--r-- 1 root root     492 2026-06-08 09:57:40.441662651 +0100 a0870c.cpio
-rw-r--r-- 1 root root 4268544 2026-06-08 09:57:42.775716468 +0100 b55004.cpio
```

