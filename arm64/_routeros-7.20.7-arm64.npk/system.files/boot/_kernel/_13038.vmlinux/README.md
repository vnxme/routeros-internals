### 13038.vmlinux
#### Identification (`file <*>`):
```
Linux kernel ARM64 boot executable Image, little-endian, 4K pages
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Linux kernel ARM64 image, load offset: 0x80000, image size: 11812864 bytes, little endian, 4k page size,
287488        0x46300         SHA256 hash constants, little endian
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
8555314       0x828B32        Unix path: /dev/vc/0
8650251       0x83FE0B        xz compressed data
8920748       0x881EAC        Unix path: /lib/firmware/updates/5.6.3
9002652       0x895E9C        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
9037111       0x89E537        Unix path: /sys/firmware/devicetree/base
9039251       0x89ED93        Unix path: /sys/firmware/fdt': CRC check failed
9066370       0x8A5782        Neighborly text, "neighbor table overflow!ighbour cache statistics"
9094741       0x8AC655        Neighborly text, "NeighborSolicitss"
9094758       0x8AC666        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
9838740       0x962094        xz compressed data
9883552       0x96CFA0        Flattened device tree, size: 7966 bytes, version: 17
9900576       0x971220        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9900692       0x971294        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9900816       0x971310        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9900932       0x971384        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
9995584       0x988540        AES S-Box
9995840       0x988640        AES Inverse S-Box
10656848      0xA29C50        Zlib compressed data, default compression
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
-rw-r--r-- 1 root root 7974 2026-01-27 11:38:28.222441709 +0000 96cfa0.dtb
-rw-r--r-- 1 root root  492 2026-01-27 11:38:28.196441992 +0000 971220.cpio
```

