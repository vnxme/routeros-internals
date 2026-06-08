### 12d8c.vmlinux
#### Identification (`file <*>`):
```
Applesoft BASIC program data, first line number 96
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
3410468       0x340A24        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3553152       0x363780        CRC32 polynomial table, little endian
3561364       0x365794        xz compressed data
3640047       0x378AEF        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C50-16-31, rev 0x-70c78000, size 1
3640079       0x378B0F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C58-16-20, rev 0x-70c78000, size 2048
3640207       0x378B8F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C7C-14-30, rev 0x-70c78000, size 33
3677629       0x381DBD        Neighborly text, "neighbor table overflow!tics"
3678013       0x381F3D        Neighborly text, "neighbor get requestrequest"
3678063       0x381F6F        Neighborly text, "neighbor get requestget request"
3678117       0x381FA5        Neighborly text, "neighbor get request request"
3678168       0x381FD8        Neighborly text, "neighbor get requestet request"
3678221       0x38200D        Neighborly text, "neighbor get requestNeighbour entry not found"
3678263       0x382037        Neighborly text, "neighbor get requestified"
3678445       0x3820ED        Neighborly text, "neighbor dump requestp request"
3678496       0x382120        Neighborly text, "neighbor dump requestump request"
3678549       0x382155        Neighborly text, "neighbor dump request"
3678591       0x38217F        Neighborly text, "neighbor dump requesttable dump request"
3678645       0x3821B5        Neighborly text, "neighbor table dump requestghbor table dump request"
3678705       0x3821F1        Neighborly text, "neighbor table dump requeste dump request"
3678755       0x382223        Neighborly text, "neighbor table dump requestyer address given"
3678836       0x382274        Neighborly text, "Neighbor entry is now dead"
3751076       0x393CA4        Neighborly text, "NeighborSolicitsp6InMsgs"
3751096       0x393CB8        Neighborly text, "NeighborAdvertisementsrs"
3825696       0x3A6020        AES Inverse S-Box
3825952       0x3A6120        AES S-Box
4034560       0x3D9000        ELF, 32-bit MSB MIPS64 shared object, MIPS, version 1 (SYSV)
4180208       0x3FC8F0        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4180324       0x3FC964        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4180448       0x3FC9E0        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4180564       0x3FCA54        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4
-rw-r--r-- 1 root root 492 2026-06-08 15:59:14.888787751 +0100 3fc8f0.cpio
```

