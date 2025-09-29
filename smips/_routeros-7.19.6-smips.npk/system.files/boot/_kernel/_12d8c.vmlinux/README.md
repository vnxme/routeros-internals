### 12d8c.vmlinux
#### Identification (`file <*>`):
```
Applesoft BASIC program data, first line number 96
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
3402260       0x33EA14        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3544736       0x3616A0        CRC32 polynomial table, little endian
3552948       0x3636B4        xz compressed data
3631631       0x376A0F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C70-16-31, rev 0x6e388000, size 1
3631663       0x376A2F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C78-16-20, rev 0x6e388000, size 2048
3631791       0x376AAF        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C9C-14-30, rev 0x6e388000, size 33
3669149       0x37FC9D        Neighborly text, "neighbor table overflow!tics"
3669533       0x37FE1D        Neighborly text, "neighbor get requestrequest"
3669583       0x37FE4F        Neighborly text, "neighbor get requestget request"
3669637       0x37FE85        Neighborly text, "neighbor get request request"
3669688       0x37FEB8        Neighborly text, "neighbor get requestet request"
3669741       0x37FEED        Neighborly text, "neighbor get requestNeighbour entry not found"
3669783       0x37FF17        Neighborly text, "neighbor get requestified"
3669965       0x37FFCD        Neighborly text, "neighbor dump requestp request"
3670016       0x380000        Neighborly text, "neighbor dump requestump request"
3670069       0x380035        Neighborly text, "neighbor dump request"
3670111       0x38005F        Neighborly text, "neighbor dump requesttable dump request"
3670165       0x380095        Neighborly text, "neighbor table dump requestghbor table dump request"
3670225       0x3800D1        Neighborly text, "neighbor table dump requeste dump request"
3670275       0x380103        Neighborly text, "neighbor table dump requestyer address given"
3670356       0x380154        Neighborly text, "Neighbor entry is now dead"
3740708       0x391424        Neighborly text, "NeighborSolicitsp6InMsgs"
3740728       0x391438        Neighborly text, "NeighborAdvertisementsrs"
3817504       0x3A4020        AES Inverse S-Box
3817760       0x3A4120        AES S-Box
4026368       0x3D7000        ELF, 32-bit MSB MIPS64 shared object, MIPS, version 1 (SYSV)
4172016       0x3FA8F0        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4172132       0x3FA964        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4172256       0x3FA9E0        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4172372       0x3FAA54        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4
-rw-r--r-- 1 root root 492 2025-09-29 14:40:23.820676650 +0100 3fa8f0.cpio
```

