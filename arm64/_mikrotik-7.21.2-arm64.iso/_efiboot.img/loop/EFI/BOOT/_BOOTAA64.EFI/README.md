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
287488        0x46300         SHA256 hash constants, little endian
7565312       0x737000        ELF, 64-bit LSB shared object, version 1 (SYSV)
7615760       0x743510        SHA256 hash constants, little endian
7627185       0x7461B1        gzip compressed data, from FAT filesystem (MS-DOS, OS/2, NT), last modified: 1970-07-14 04:18:08 (bogus date)
7627217       0x7461D1        gzip compressed data, from FAT filesystem (MS-DOS, OS/2, NT), last modified: 1970-07-14 04:18:08 (bogus date)
7746964       0x763594        Base64 standard index table
7764864       0x767B80        CRC32 polynomial table, little endian
7940824       0x792AD8        Intel x86 or x64 microcode, sig 0x0000000c, pf_mask 0x2012000, 2000-02-01, rev 0x-001, size 6
8456993       0x810B21        Neighborly text, "neighbor dump requestp request"
8457044       0x810B54        Neighborly text, "neighbor dump request request"
8457094       0x810B86        Neighborly text, "neighbor dump request"
8457385       0x810CA9        Neighborly text, "neighbor dump requestnvalid values in header for neighbor get request"
8457426       0x810CD2        Neighborly text, "neighbor get requestrequest"
8457476       0x810D04        Neighborly text, "neighbor get requestequest"
8457525       0x810D35        Neighborly text, "neighbor get requestget request"
8457579       0x810D6B        Neighborly text, "neighbor get requestquest"
8457627       0x810D9B        Neighborly text, "neighbor get requestest"
8457673       0x810DC9        Neighborly text, "neighbor get requestuest"
8457713       0x810DF1        Neighborly text, "neighbor table dump requestor table dump request"
8457770       0x810E2A        Neighborly text, "neighbor table dump requestor table dump request"
8457827       0x810E63        Neighborly text, "neighbor table dump requestlayer address given"
8457855       0x810E7F        Neighborly text, "Neighbor entry is now dead"
8626381       0x83A0CD        Unix path: /dev/vc/0
8721395       0x8513F3        xz compressed data
8991902       0x89349E        Unix path: /lib/firmware/updates/5.6.3
9073956       0x8A7524        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
9108647       0x8AFCA7        Unix path: /sys/firmware/devicetree/base
9110787       0x8B0503        Unix path: /sys/firmware/fdt': CRC check failed
9138002       0x8B6F52        Neighborly text, "neighbor table overflow!ighbour cache statistics"
9166642       0x8BDF32        Neighborly text, "NeighborSolicitss"
9166659       0x8BDF43        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
9912468       0x974094        xz compressed data
9957696       0x97F140        Flattened device tree, size: 7966 bytes, version: 17
9974732       0x9833CC        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9974848       0x983440        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9974972       0x9834BC        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9975088       0x983530        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
10061120      0x998540        AES S-Box
10061376      0x998640        AES Inverse S-Box
10465737      0x9FB1C9        gzip compressed data, maximum compression, from FAT filesystem (MS-DOS, OS/2, NT), last modified: 1970-07-14 04:18:08 (bogus date)
10465833      0x9FB229        gzip compressed data, maximum compression, from FAT filesystem (MS-DOS, OS/2, NT), last modified: 1970-07-14 04:18:08 (bogus date)
11280388      0xAC2004        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4088
-rw-r--r-- 1 root root    7974 2026-06-08 15:57:57.251587840 +0100 97f140.dtb
-rw-r--r-- 1 root root     492 2026-06-08 15:57:57.234587795 +0100 9833cc.cpio
-rw-r--r-- 1 root root 4170240 2026-06-08 15:57:58.129590148 +0100 ac2004.cpio
```

