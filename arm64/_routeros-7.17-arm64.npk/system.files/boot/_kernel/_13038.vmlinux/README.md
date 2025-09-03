### 13038.vmlinux
#### Identification (`file <*>`):
```
Linux kernel ARM64 boot executable Image, little-endian, 4K pages
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Linux kernel ARM64 image, load offset: 0x80000, image size: 11341824 bytes, little endian, 4k page size,
149184        0x246C0         SHA256 hash constants, little endian
7237632       0x6E7000        ELF, 64-bit LSB shared object, version 1 (SYSV)
7243312       0x6E8630        SHA256 hash constants, little endian
7372452       0x707EA4        Base64 standard index table
7390336       0x70C480        CRC32 polynomial table, little endian
7552672       0x733EA0        Intel x86 or x64 microcode, sig 0x0000000c, pf_mask 0x2012000, 2000-02-01, rev 0x-001, size 6
8040289       0x7AAF61        Neighborly text, "neighbor dump requestp request"
8040340       0x7AAF94        Neighborly text, "neighbor dump request request"
8040390       0x7AAFC6        Neighborly text, "neighbor dump request"
8040649       0x7AB0C9        Neighborly text, "neighbor dump requestnvalid values in header for neighbor get request"
8040690       0x7AB0F2        Neighborly text, "neighbor get requestrequest"
8040740       0x7AB124        Neighborly text, "neighbor get requestequest"
8040789       0x7AB155        Neighborly text, "neighbor get requestget request"
8040843       0x7AB18B        Neighborly text, "neighbor get requestquest"
8040891       0x7AB1BB        Neighborly text, "neighbor get requestest"
8040937       0x7AB1E9        Neighborly text, "neighbor get requestuest"
8040977       0x7AB211        Neighborly text, "neighbor table dump requestor table dump request"
8041034       0x7AB24A        Neighborly text, "neighbor table dump requestor table dump request"
8041091       0x7AB283        Neighborly text, "neighbor table dump requestlayer address given"
8041119       0x7AB29F        Neighborly text, "Neighbor entry is now dead"
8195517       0x7D0DBD        Unix path: /dev/vc/0
8290250       0x7E7FCA        xz compressed data
8555902       0x828D7E        Unix path: /lib/firmware/updates/5.6.3
8637591       0x83CC97        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
8671591       0x845167        Unix path: /sys/firmware/devicetree/base
8673084       0x84573C        Unix path: /sys/firmware/fdt': CRC check failed
8691306       0x849E6A        Neighborly text, "neighbor table overflow!ighbour cache statistics"
8719482       0x850C7A        Neighborly text, "NeighborSolicitss"
8719499       0x850C8B        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
8885448       0x8794C8        bix header, header size: 64 bytes, header CRC: 0x7CEEC1FF, created: 1977-05-12 04:33:04, image size: 2004877312 bytes, Data Address: 0x88F588FF, Entry Point: 0x7C620000, data CRC: 0x6B800000, image name: "
9420073       0x8FBD29        xz compressed data
9472532       0x908A14        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9472648       0x908A88        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9472772       0x908B04        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9472888       0x908B78        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
9602368       0x928540        AES S-Box
9602624       0x928640        AES Inverse S-Box
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4
-rw-r--r-- 1 root root 492 2025-09-03 12:24:52.663458452 +0100 908a14.cpio
```

