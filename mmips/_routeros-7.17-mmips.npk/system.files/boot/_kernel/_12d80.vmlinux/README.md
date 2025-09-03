### 12d80.vmlinux
#### Identification (`file <*>`):
```
data
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
3923740       0x3BDF1C        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
4095232       0x3E7D00        CRC32 polynomial table, little endian
4103700       0x3E9E14        xz compressed data
4154436       0x3F6444        Unix path: /lib/firmware/updates/5.6.3
4197216       0x400B60        Unix path: /sys/firmware/devicetree/base
4200845       0x40198D        Unix path: /sys/firmware/fdt': CRC check failed
4217045       0x4058D5        Neighborly text, "neighbor table overflow!tics"
4217429       0x405A55        Neighborly text, "neighbor get requestrequest"
4217479       0x405A87        Neighborly text, "neighbor get requestget request"
4217533       0x405ABD        Neighborly text, "neighbor get request request"
4217584       0x405AF0        Neighborly text, "neighbor get requestet request"
4217637       0x405B25        Neighborly text, "neighbor get requestNeighbour entry not found"
4217679       0x405B4F        Neighborly text, "neighbor get requestified"
4217861       0x405C05        Neighborly text, "neighbor dump requestp request"
4217912       0x405C38        Neighborly text, "neighbor dump requestump request"
4217965       0x405C6D        Neighborly text, "neighbor dump request"
4218007       0x405C97        Neighborly text, "neighbor dump requesttable dump request"
4218061       0x405CCD        Neighborly text, "neighbor table dump requestghbor table dump request"
4218121       0x405D09        Neighborly text, "neighbor table dump requeste dump request"
4218171       0x405D3B        Neighborly text, "neighbor table dump requestyer address given"
4218252       0x405D8C        Neighborly text, "Neighbor entry is now dead"
4291684       0x417C64        Neighborly text, "NeighborSolicitsp6InMsgs"
4291704       0x417C78        Neighborly text, "NeighborAdvertisementsrs"
4434016       0x43A860        AES Inverse S-Box
4434272       0x43A960        AES S-Box
4591616       0x461000        ELF, 32-bit LSB MIPS64 shared object, MIPS, version 1 (SYSV)
4767200       0x48BDE0        Flattened device tree, size: 10101 bytes, version: 17
4780464       0x48F1B0        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4780580       0x48F224        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4780704       0x48F2A0        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4780820       0x48F314        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
-rw-r--r-- 1 root root 10109 2025-09-03 12:24:56.511475413 +0100 48bde0.dtb
-rw-r--r-- 1 root root   492 2025-09-03 12:24:56.485475299 +0100 48f1b0.cpio
```

