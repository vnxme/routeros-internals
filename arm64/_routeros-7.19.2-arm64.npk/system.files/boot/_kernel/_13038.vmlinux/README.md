### 13038.vmlinux
#### Identification (`file <*>`):
```
Linux kernel ARM64 boot executable Image, little-endian, 4K pages
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Linux kernel ARM64 image, load offset: 0x80000, image size: 11382784 bytes, little endian, 4k page size,
149184        0x246C0         SHA256 hash constants, little endian
7237632       0x6E7000        ELF, 64-bit LSB shared object, version 1 (SYSV)
7243312       0x6E8630        SHA256 hash constants, little endian
7372452       0x707EA4        Base64 standard index table
7390336       0x70C480        CRC32 polynomial table, little endian
7564920       0x736E78        Intel x86 or x64 microcode, sig 0x0000000c, pf_mask 0x2012000, 2000-02-01, rev 0x-001, size 6
8072801       0x7B2E61        Neighborly text, "neighbor dump requestp request"
8072852       0x7B2E94        Neighborly text, "neighbor dump request request"
8072902       0x7B2EC6        Neighborly text, "neighbor dump request"
8073161       0x7B2FC9        Neighborly text, "neighbor dump requestnvalid values in header for neighbor get request"
8073202       0x7B2FF2        Neighborly text, "neighbor get requestrequest"
8073252       0x7B3024        Neighborly text, "neighbor get requestequest"
8073301       0x7B3055        Neighborly text, "neighbor get requestget request"
8073355       0x7B308B        Neighborly text, "neighbor get requestquest"
8073403       0x7B30BB        Neighborly text, "neighbor get requestest"
8073449       0x7B30E9        Neighborly text, "neighbor get requestuest"
8073489       0x7B3111        Neighborly text, "neighbor table dump requestor table dump request"
8073546       0x7B314A        Neighborly text, "neighbor table dump requestor table dump request"
8073603       0x7B3183        Neighborly text, "neighbor table dump requestlayer address given"
8073631       0x7B319F        Neighborly text, "Neighbor entry is now dead"
8228261       0x7D8DA5        Unix path: /dev/vc/0
8322906       0x7EFF5A        xz compressed data
8592675       0x831D23        Unix path: /lib/firmware/updates/5.6.3
8674421       0x845C75        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
8708407       0x84E137        Unix path: /sys/firmware/devicetree/base
8709900       0x84E70C        Unix path: /sys/firmware/fdt': CRC check failed
8728122       0x852E3A        Neighborly text, "neighbor table overflow!ighbour cache statistics"
8756469       0x859CF5        Neighborly text, "NeighborSolicitss"
8756486       0x859D06        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
9428265       0x8FDD29        xz compressed data
9480752       0x90AA30        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9480868       0x90AAA4        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9480992       0x90AB20        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9481108       0x90AB94        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
9602368       0x928540        AES S-Box
9602624       0x928640        AES Inverse S-Box
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4
-rw-r--r-- 1 root root 492 2025-06-27 16:06:47.229641939 +0100 90aa30.cpio
```

