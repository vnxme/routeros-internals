### 12d8c.vmlinux
#### Identification (`file <*>`):
```
Applesoft BASIC program data, first line number 96
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
3406356       0x33FA14        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3548800       0x362680        CRC32 polynomial table, little endian
3557012       0x364694        xz compressed data
3635695       0x3779EF        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C50-16-31, rev 0x7e388000, size 1
3635727       0x377A0F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C58-16-20, rev 0x7e388000, size 2048
3635855       0x377A8F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C7C-14-30, rev 0x7e388000, size 33
3673213       0x380C7D        Neighborly text, "neighbor table overflow!tics"
3673597       0x380DFD        Neighborly text, "neighbor get requestrequest"
3673647       0x380E2F        Neighborly text, "neighbor get requestget request"
3673701       0x380E65        Neighborly text, "neighbor get request request"
3673752       0x380E98        Neighborly text, "neighbor get requestet request"
3673805       0x380ECD        Neighborly text, "neighbor get requestNeighbour entry not found"
3673847       0x380EF7        Neighborly text, "neighbor get requestified"
3674029       0x380FAD        Neighborly text, "neighbor dump requestp request"
3674080       0x380FE0        Neighborly text, "neighbor dump requestump request"
3674133       0x381015        Neighborly text, "neighbor dump request"
3674175       0x38103F        Neighborly text, "neighbor dump requesttable dump request"
3674229       0x381075        Neighborly text, "neighbor table dump requestghbor table dump request"
3674289       0x3810B1        Neighborly text, "neighbor table dump requeste dump request"
3674339       0x3810E3        Neighborly text, "neighbor table dump requestyer address given"
3674420       0x381134        Neighborly text, "Neighbor entry is now dead"
3745204       0x3925B4        Neighborly text, "NeighborSolicitsp6InMsgs"
3745224       0x3925C8        Neighborly text, "NeighborAdvertisementsrs"
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
-rw-r--r-- 1 root root 492 2025-10-11 13:56:32.412781359 +0100 3fa8f0.cpio
```

