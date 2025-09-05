### BOOTAA64.EFI
#### Identification (`file <*>`):
```
Linux kernel ARM64 boot executable Image, little-endian, 4K pages
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Linux kernel ARM64 image, load offset: 0x80000, image size: 11022336 bytes, little endian, 4k page size,
149184        0x246C0         SHA256 hash constants, little endian
6909952       0x697000        ELF, 64-bit LSB shared object, version 1 (SYSV)
6915632       0x698630        SHA256 hash constants, little endian
7044772       0x6B7EA4        Base64 standard index table
7062656       0x6BC480        CRC32 polynomial table, little endian
7237240       0x6E6E78        Intel x86 or x64 microcode, sig 0x0000000c, pf_mask 0x2012000, 2000-02-01, rev 0x-001, size 6
7745121       0x762E61        Neighborly text, "neighbor dump requestp request"
7745172       0x762E94        Neighborly text, "neighbor dump request request"
7745222       0x762EC6        Neighborly text, "neighbor dump request"
7745481       0x762FC9        Neighborly text, "neighbor dump requestheader for neighbor get request"
7745555       0x763013        Neighborly text, "neighbor get requestrequest"
7745605       0x763045        Neighborly text, "neighbor get requestequest"
7745654       0x763076        Neighborly text, "neighbor get requestget request"
7745708       0x7630AC        Neighborly text, "neighbor get requestquest"
7745756       0x7630DC        Neighborly text, "neighbor get requestest"
7745802       0x76310A        Neighborly text, "neighbor get requestuest"
7745842       0x763132        Neighborly text, "neighbor table dump requestor table dump request"
7745899       0x76316B        Neighborly text, "neighbor table dump requestor table dump request"
7745956       0x7631A4        Neighborly text, "neighbor table dump request"
7746579       0x763413        Neighborly text, "Neighbor entry is now deadaddress not specified"
7878853       0x7838C5        Unix path: /dev/vc/0
7973586       0x79AAD2        xz compressed data
8243380       0x7DC8B4        Unix path: /lib/firmware/updates/5.6.3
8325124       0x7F0804        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
8359111       0x7F8CC7        Unix path: /sys/firmware/devicetree/base
8360604       0x7F929C        Unix path: /sys/firmware/fdt': CRC check failed
8379019       0x7FDA8B        Neighborly text, "neighbor table overflow!it"
9088297       0x8AAD29        xz compressed data
9140764       0x8B7A1C        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9140880       0x8B7A90        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9141004       0x8B7B0C        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9141120       0x8B7B80        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
9274688       0x8D8540        AES S-Box
9274944       0x8D8640        AES Inverse S-Box
10444804      0x9F6004        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 180
-rw-r--r-- 1 root root    492 2025-09-05 17:28:04.010420489 +0100 8b7a1c.cpio
-rw-r--r-- 1 root root 178176 2025-09-05 17:28:04.155419844 +0100 9f6004.cpio
```

