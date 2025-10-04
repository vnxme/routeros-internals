### 12d8c.vmlinux
#### Identification (`file <*>`):
```
Applesoft BASIC program data, first line number 240
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
3776120       0x399E78        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3935104       0x3C0B80        CRC32 polynomial table, little endian
3943572       0x3C2C94        xz compressed data
4010588       0x3D325C        Unix path: /lib/firmware/updates/5.6.3
4036103       0x3D9607        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C68-16-31, rev 0x-65c14000, size 1
4036135       0x3D9627        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C70-16-20, rev 0x-65c14000, size 2048
4036263       0x3D96A7        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C94-14-30, rev 0x-65c14000, size 33
4065235       0x3E07D3        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
4074196       0x3E2AD4        Unix path: /sys/firmware/devicetree/base
4090165       0x3E6935        Neighborly text, "neighbor table overflow!tics"
4090549       0x3E6AB5        Neighborly text, "neighbor get requestrequest"
4090599       0x3E6AE7        Neighborly text, "neighbor get requestget request"
4090653       0x3E6B1D        Neighborly text, "neighbor get request request"
4090704       0x3E6B50        Neighborly text, "neighbor get requestet request"
4090757       0x3E6B85        Neighborly text, "neighbor get requestNeighbour entry not found"
4090799       0x3E6BAF        Neighborly text, "neighbor get requestified"
4090981       0x3E6C65        Neighborly text, "neighbor dump requestp request"
4091032       0x3E6C98        Neighborly text, "neighbor dump requestump request"
4091085       0x3E6CCD        Neighborly text, "neighbor dump request"
4091127       0x3E6CF7        Neighborly text, "neighbor dump requesttable dump request"
4091181       0x3E6D2D        Neighborly text, "neighbor table dump requestghbor table dump request"
4091241       0x3E6D69        Neighborly text, "neighbor table dump requeste dump request"
4091291       0x3E6D9B        Neighborly text, "neighbor table dump requestyer address given"
4091372       0x3E6DEC        Neighborly text, "Neighbor entry is now dead"
4164328       0x3F8AE8        Neighborly text, "NeighborSolicitsp6InMsgs"
4164348       0x3F8AFC        Neighborly text, "NeighborAdvertisementsrs"
4276256       0x414020        AES Inverse S-Box
4276512       0x414120        AES S-Box
4562944       0x45A000        ELF, 32-bit MSB MIPS64 shared object, MIPS, version 1 (SYSV)
4721364       0x480AD4        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4721480       0x480B48        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4721604       0x480BC4        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4721720       0x480C38        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4
-rw-r--r-- 1 root root 492 2025-10-04 14:01:05.100376888 +0100 480ad4.cpio
```

