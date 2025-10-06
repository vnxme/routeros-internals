### BOOTAA64.EFI
#### Identification (`file <*>`):
```
Linux kernel ARM64 boot executable Image, little-endian, 4K pages
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Linux kernel ARM64 image, load offset: 0x80000, image size: 11812864 bytes, little endian, 4k page size,
287232        0x46200         SHA256 hash constants, little endian
7499776       0x727000        ELF, 64-bit LSB shared object, version 1 (SYSV)
7550224       0x733510        SHA256 hash constants, little endian
7680276       0x753114        Base64 standard index table
7698176       0x757700        CRC32 polynomial table, little endian
7873680       0x782490        Intel x86 or x64 microcode, sig 0x0000000c, pf_mask 0x2012000, 2000-02-01, rev 0x-001, size 6
8389153       0x800221        Neighborly text, "neighbor dump requestp request"
8389204       0x800254        Neighborly text, "neighbor dump request request"
8389254       0x800286        Neighborly text, "neighbor dump request"
8389545       0x8003A9        Neighborly text, "neighbor dump requestnvalid values in header for neighbor get request"
8389586       0x8003D2        Neighborly text, "neighbor get requestrequest"
8389636       0x800404        Neighborly text, "neighbor get requestequest"
8389685       0x800435        Neighborly text, "neighbor get requestget request"
8389739       0x80046B        Neighborly text, "neighbor get requestquest"
8389787       0x80049B        Neighborly text, "neighbor get requestest"
8389833       0x8004C9        Neighborly text, "neighbor get requestuest"
8389873       0x8004F1        Neighborly text, "neighbor table dump requestor table dump request"
8389930       0x80052A        Neighborly text, "neighbor table dump requestor table dump request"
8389987       0x800563        Neighborly text, "neighbor table dump requestlayer address given"
8390015       0x80057F        Neighborly text, "Neighbor entry is now dead"
8555034       0x828A1A        Unix path: /dev/vc/0
8649971       0x83FCF3        xz compressed data
8920468       0x881D94        Unix path: /lib/firmware/updates/5.6.3
9002372       0x895D84        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
9036839       0x89E427        Unix path: /sys/firmware/devicetree/base
9038979       0x89EC83        Unix path: /sys/firmware/fdt': CRC check failed
9066098       0x8A5672        Neighborly text, "neighbor table overflow!ighbour cache statistics"
9094469       0x8AC545        Neighborly text, "NeighborSolicitss"
9094486       0x8AC556        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
9842836       0x963094        xz compressed data
9887648       0x96DFA0        Flattened device tree, size: 7966 bytes, version: 17
9904672       0x972220        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9904788       0x972294        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9904912       0x972310        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9905028       0x972384        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
9995584       0x988540        AES S-Box
9995840       0x988640        AES Inverse S-Box
10656848      0xA29C50        Zlib compressed data, default compression
11093561      0xA94639        gzip compressed data, from FAT filesystem (MS-DOS, OS/2, NT), last modified: 1970-07-14 04:18:08 (bogus date)
11202564      0xAAF004        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 188
-rw-r--r-- 1 root root   7974 2025-10-04 14:00:27.570592212 +0100 96dfa0.dtb
-rw-r--r-- 1 root root    492 2025-10-04 14:00:27.545592355 +0100 972220.cpio
-rw-r--r-- 1 root root 178176 2025-10-04 14:00:27.710591406 +0100 aaf004.cpio
```

