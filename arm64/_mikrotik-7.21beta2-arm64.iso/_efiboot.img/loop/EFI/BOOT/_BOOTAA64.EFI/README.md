### BOOTAA64.EFI
#### Identification (`file <*>`):
```
Linux kernel ARM64 boot executable Image, little-endian, 4K pages
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Linux kernel ARM64 image, load offset: 0x80000, image size: 11890688 bytes, little endian, 4k page size,
287232        0x46200         SHA256 hash constants, little endian
7565312       0x737000        ELF, 64-bit LSB shared object, version 1 (SYSV)
7615760       0x743510        SHA256 hash constants, little endian
7746900       0x763554        Base64 standard index table
7764800       0x767B40        CRC32 polynomial table, little endian
7940760       0x792A98        Intel x86 or x64 microcode, sig 0x0000000c, pf_mask 0x2012000, 2000-02-01, rev 0x-001, size 6
8456929       0x810AE1        Neighborly text, "neighbor dump requestp request"
8456980       0x810B14        Neighborly text, "neighbor dump request request"
8457030       0x810B46        Neighborly text, "neighbor dump request"
8457321       0x810C69        Neighborly text, "neighbor dump requestnvalid values in header for neighbor get request"
8457362       0x810C92        Neighborly text, "neighbor get requestrequest"
8457412       0x810CC4        Neighborly text, "neighbor get requestequest"
8457461       0x810CF5        Neighborly text, "neighbor get requestget request"
8457515       0x810D2B        Neighborly text, "neighbor get requestquest"
8457563       0x810D5B        Neighborly text, "neighbor get requestest"
8457609       0x810D89        Neighborly text, "neighbor get requestuest"
8457649       0x810DB1        Neighborly text, "neighbor table dump requestor table dump request"
8457706       0x810DEA        Neighborly text, "neighbor table dump requestor table dump request"
8457763       0x810E23        Neighborly text, "neighbor table dump requestlayer address given"
8457791       0x810E3F        Neighborly text, "Neighbor entry is now dead"
8623285       0x8394B5        Unix path: /dev/vc/0
8718131       0x850733        xz compressed data
8988638       0x8927DE        Unix path: /lib/firmware/updates/5.6.3
9070692       0x8A6864        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
9105383       0x8AEFE7        Unix path: /sys/firmware/devicetree/base
9107523       0x8AF843        Unix path: /sys/firmware/fdt': CRC check failed
9134738       0x8B6292        Neighborly text, "neighbor table overflow!ighbour cache statistics"
9163378       0x8BD272        Neighborly text, "NeighborSolicitss"
9163395       0x8BD283        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
9908372       0x973094        xz compressed data
9953600       0x97E140        Flattened device tree, size: 7966 bytes, version: 17
9970636       0x9823CC        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9970752       0x982440        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9970876       0x9824BC        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9970992       0x982530        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
10061120      0x998540        AES S-Box
10061376      0x998640        AES Inverse S-Box
10464008      0x9FAB08        Zlib compressed data, best compression
11280388      0xAC2004        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4088
-rw-r--r-- 1 root root    7974 2025-10-10 21:54:38.987850384 +0100 97e140.dtb
-rw-r--r-- 1 root root     492 2025-10-10 21:54:38.962850124 +0100 9823cc.cpio
-rw-r--r-- 1 root root 4170240 2025-10-10 21:54:40.932870599 +0100 ac2004.cpio
```

