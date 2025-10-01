### BOOTAA64.EFI
#### Identification (`file <*>`):
```
Linux kernel ARM64 boot executable Image, little-endian, 4K pages
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Linux kernel ARM64 image, load offset: 0x80000, image size: 10850304 bytes, little endian, 4k page size,
149184        0x246C0         SHA256 hash constants, little endian
6844416       0x687000        ELF, 64-bit LSB shared object, version 1 (SYSV)
6850096       0x688630        SHA256 hash constants, little endian
6979236       0x6A7EA4        Base64 standard index table
6997120       0x6AC480        CRC32 polynomial table, little endian
7159456       0x6D3EA0        Intel x86 or x64 microcode, sig 0x0000000c, pf_mask 0x2012000, 2000-02-01, rev 0x-001, size 6
7647073       0x74AF61        Neighborly text, "neighbor dump requestp request"
7647124       0x74AF94        Neighborly text, "neighbor dump request request"
7647174       0x74AFC6        Neighborly text, "neighbor dump request"
7647433       0x74B0C9        Neighborly text, "neighbor dump requestheader for neighbor get request"
7647507       0x74B113        Neighborly text, "neighbor get requestrequest"
7647557       0x74B145        Neighborly text, "neighbor get requestequest"
7647606       0x74B176        Neighborly text, "neighbor get requestget request"
7647660       0x74B1AC        Neighborly text, "neighbor get requestquest"
7647708       0x74B1DC        Neighborly text, "neighbor get requestest"
7647754       0x74B20A        Neighborly text, "neighbor get requestuest"
7647794       0x74B232        Neighborly text, "neighbor table dump requestor table dump request"
7647851       0x74B26B        Neighborly text, "neighbor table dump requestor table dump request"
7647908       0x74B2A4        Neighborly text, "neighbor table dump request"
7648531       0x74B513        Neighborly text, "Neighbor entry is now deadaddress not specified"
7780573       0x76B8DD        Unix path: /dev/vc/0
7875306       0x782AEA        xz compressed data
8140961       0x7C38A1        Unix path: /lib/firmware/updates/5.6.3
8222650       0x7D77BA        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
8256647       0x7DFC87        Unix path: /sys/firmware/devicetree/base
8258140       0x7E025C        Unix path: /sys/firmware/fdt': CRC check failed
8276555       0x7E4A4B        Neighborly text, "neighbor table overflow!it"
8953129       0x889D29        xz compressed data
9005568       0x896A00        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9005684       0x896A74        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9005808       0x896AF0        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9005924       0x896B64        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
9143616       0x8B8540        AES S-Box
9143872       0x8B8640        AES Inverse S-Box
10289156      0x9D0004        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 188
-rw-r--r-- 1 root root    492 2025-10-01 15:45:48.678446671 +0100 896a00.cpio
-rw-r--r-- 1 root root 186368 2025-10-01 15:45:48.831446697 +0100 9d0004.cpio
```

