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
3548832       0x3626A0        CRC32 polynomial table, little endian
3557044       0x3646B4        xz compressed data
3635727       0x377A0F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C70-16-31, rev 0x7e388000, size 1
3635759       0x377A2F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C78-16-20, rev 0x7e388000, size 2048
3635887       0x377AAF        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C9C-14-30, rev 0x7e388000, size 33
3673309       0x380CDD        Neighborly text, "neighbor table overflow!tics"
3673693       0x380E5D        Neighborly text, "neighbor get requestrequest"
3673743       0x380E8F        Neighborly text, "neighbor get requestget request"
3673797       0x380EC5        Neighborly text, "neighbor get request request"
3673848       0x380EF8        Neighborly text, "neighbor get requestet request"
3673901       0x380F2D        Neighborly text, "neighbor get requestNeighbour entry not found"
3673943       0x380F57        Neighborly text, "neighbor get requestified"
3674125       0x38100D        Neighborly text, "neighbor dump requestp request"
3674176       0x381040        Neighborly text, "neighbor dump requestump request"
3674229       0x381075        Neighborly text, "neighbor dump request"
3674271       0x38109F        Neighborly text, "neighbor dump requesttable dump request"
3674325       0x3810D5        Neighborly text, "neighbor table dump requestghbor table dump request"
3674385       0x381111        Neighborly text, "neighbor table dump requeste dump request"
3674435       0x381143        Neighborly text, "neighbor table dump requestyer address given"
3674516       0x381194        Neighborly text, "Neighbor entry is now dead"
3745604       0x392744        Neighborly text, "NeighborSolicitsp6InMsgs"
3745624       0x392758        Neighborly text, "NeighborAdvertisementsrs"
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
-rw-r--r-- 1 root root 492 2025-10-15 15:56:37.042650671 +0100 3fa8f0.cpio
```

