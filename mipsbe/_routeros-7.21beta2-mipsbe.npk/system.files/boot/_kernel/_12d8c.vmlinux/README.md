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
4036155       0x3D963B        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C9C-16-31, rev 0x-65c14000, size 1
4036187       0x3D965B        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CA4-16-20, rev 0x-65c14000, size 2048
4036315       0x3D96DB        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CC8-14-30, rev 0x-65c14000, size 33
4065339       0x3E083B        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
4074364       0x3E2B7C        Unix path: /sys/firmware/devicetree/base
4090325       0x3E69D5        Neighborly text, "neighbor table overflow!tics"
4090709       0x3E6B55        Neighborly text, "neighbor get requestrequest"
4090759       0x3E6B87        Neighborly text, "neighbor get requestget request"
4090813       0x3E6BBD        Neighborly text, "neighbor get request request"
4090864       0x3E6BF0        Neighborly text, "neighbor get requestet request"
4090917       0x3E6C25        Neighborly text, "neighbor get requestNeighbour entry not found"
4090959       0x3E6C4F        Neighborly text, "neighbor get requestified"
4091141       0x3E6D05        Neighborly text, "neighbor dump requestp request"
4091192       0x3E6D38        Neighborly text, "neighbor dump requestump request"
4091245       0x3E6D6D        Neighborly text, "neighbor dump request"
4091287       0x3E6D97        Neighborly text, "neighbor dump requesttable dump request"
4091341       0x3E6DCD        Neighborly text, "neighbor table dump requestghbor table dump request"
4091401       0x3E6E09        Neighborly text, "neighbor table dump requeste dump request"
4091451       0x3E6E3B        Neighborly text, "neighbor table dump requestyer address given"
4091532       0x3E6E8C        Neighborly text, "Neighbor entry is now dead"
4164800       0x3F8CC0        Neighborly text, "NeighborSolicitsp6InMsgs"
4164820       0x3F8CD4        Neighborly text, "NeighborAdvertisementsrs"
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
-rw-r--r-- 1 root root 492 2025-10-10 21:55:58.957778893 +0100 480ad4.cpio
```

