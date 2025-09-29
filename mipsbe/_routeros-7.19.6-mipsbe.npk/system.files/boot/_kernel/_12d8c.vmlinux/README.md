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
3935136       0x3C0BA0        CRC32 polynomial table, little endian
3943604       0x3C2CB4        xz compressed data
4010620       0x3D327C        Unix path: /lib/firmware/updates/5.6.3
4036127       0x3D961F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C80-16-31, rev 0x-65c14000, size 1
4036159       0x3D963F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C88-16-20, rev 0x-65c14000, size 2048
4036287       0x3D96BF        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CAC-14-30, rev 0x-65c14000, size 33
4065259       0x3E07EB        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
4074208       0x3E2AE0        Unix path: /sys/firmware/devicetree/base
4090197       0x3E6955        Neighborly text, "neighbor table overflow!tics"
4090581       0x3E6AD5        Neighborly text, "neighbor get requestrequest"
4090631       0x3E6B07        Neighborly text, "neighbor get requestget request"
4090685       0x3E6B3D        Neighborly text, "neighbor get request request"
4090736       0x3E6B70        Neighborly text, "neighbor get requestet request"
4090789       0x3E6BA5        Neighborly text, "neighbor get requestNeighbour entry not found"
4090831       0x3E6BCF        Neighborly text, "neighbor get requestified"
4091013       0x3E6C85        Neighborly text, "neighbor dump requestp request"
4091064       0x3E6CB8        Neighborly text, "neighbor dump requestump request"
4091117       0x3E6CED        Neighborly text, "neighbor dump request"
4091159       0x3E6D17        Neighborly text, "neighbor dump requesttable dump request"
4091213       0x3E6D4D        Neighborly text, "neighbor table dump requestghbor table dump request"
4091273       0x3E6D89        Neighborly text, "neighbor table dump requeste dump request"
4091323       0x3E6DBB        Neighborly text, "neighbor table dump requestyer address given"
4091404       0x3E6E0C        Neighborly text, "Neighbor entry is now dead"
4163968       0x3F8980        Neighborly text, "NeighborSolicitsp6InMsgs"
4163988       0x3F8994        Neighborly text, "NeighborAdvertisementsrs"
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
-rw-r--r-- 1 root root 492 2025-09-29 14:40:18.485628444 +0100 480ad4.cpio
```

