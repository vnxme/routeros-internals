### BOOTAA64.EFI
#### Identification (`file <*>`):
```
Linux kernel ARM64 boot executable Image, little-endian, 4K pages
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Linux kernel ARM64 image, load offset: 0x80000, image size: 11403264 bytes, little endian, 4k page size,
149248        0x24700         SHA256 hash constants, little endian
7237632       0x6E7000        ELF, 64-bit LSB shared object, version 1 (SYSV)
7243312       0x6E8630        SHA256 hash constants, little endian
7372964       0x7080A4        Base64 standard index table
7390848       0x70C680        CRC32 polynomial table, little endian
7565432       0x737078        Intel x86 or x64 microcode, sig 0x0000000c, pf_mask 0x2012000, 2000-02-01, rev 0x-001, size 6
8073313       0x7B3061        Neighborly text, "neighbor dump requestp request"
8073364       0x7B3094        Neighborly text, "neighbor dump request request"
8073414       0x7B30C6        Neighborly text, "neighbor dump request"
8073673       0x7B31C9        Neighborly text, "neighbor dump requestnvalid values in header for neighbor get request"
8073714       0x7B31F2        Neighborly text, "neighbor get requestrequest"
8073764       0x7B3224        Neighborly text, "neighbor get requestequest"
8073813       0x7B3255        Neighborly text, "neighbor get requestget request"
8073867       0x7B328B        Neighborly text, "neighbor get requestquest"
8073915       0x7B32BB        Neighborly text, "neighbor get requestest"
8073961       0x7B32E9        Neighborly text, "neighbor get requestuest"
8074001       0x7B3311        Neighborly text, "neighbor table dump requestor table dump request"
8074058       0x7B334A        Neighborly text, "neighbor table dump requestor table dump request"
8074115       0x7B3383        Neighborly text, "neighbor table dump requestlayer address given"
8074143       0x7B339F        Neighborly text, "Neighbor entry is now dead"
8228773       0x7D8FA5        Unix path: /dev/vc/0
8323418       0x7F015A        xz compressed data
8593187       0x831F23        Unix path: /lib/firmware/updates/5.6.3
8674933       0x845E75        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
8708919       0x84E337        Unix path: /sys/firmware/devicetree/base
8710412       0x84E90C        Unix path: /sys/firmware/fdt': CRC check failed
8728634       0x85303A        Neighborly text, "neighbor table overflow!ighbour cache statistics"
8756981       0x859EF5        Neighborly text, "NeighborSolicitss"
8756998       0x859F06        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
9424937       0x8FD029        xz compressed data
9477424       0x909D30        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9477540       0x909DA4        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9477664       0x909E20        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9477780       0x909E94        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
9602368       0x928540        AES S-Box
9602624       0x928640        AES Inverse S-Box
10797060      0xA4C004        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 180
-rw-r--r-- 1 root root    492 2025-09-29 14:39:42.904333555 +0100 909d30.cpio
-rw-r--r-- 1 root root 178176 2025-09-29 14:39:43.051335041 +0100 a4c004.cpio
```

