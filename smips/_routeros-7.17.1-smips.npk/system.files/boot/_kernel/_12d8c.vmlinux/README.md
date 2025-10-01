### 12d8c.vmlinux
#### Identification (`file <*>`):
```
Applesoft BASIC program data, first line number 96
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
3078660       0x2EFA04        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3221120       0x312680        CRC32 polynomial table, little endian
3229332       0x314694        xz compressed data
3308015       0x3279EF        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C50-16-31, rev 0x7e338000, size 1
3308047       0x327A0F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C58-16-20, rev 0x7e338000, size 2048
3308175       0x327A8F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C7C-14-30, rev 0x7e338000, size 33
3345713       0x330D31        Neighborly text, "neighbor table overflow!ork address"
3345925       0x330E05        Neighborly text, "neighbor get requestrequest"
3345975       0x330E37        Neighborly text, "neighbor get requestget request"
3346029       0x330E6D        Neighborly text, "neighbor get request request"
3346080       0x330EA0        Neighborly text, "neighbor get requestet request"
3346133       0x330ED5        Neighborly text, "neighbor get requestNeighbour entry not found"
3346175       0x330EFF        Neighborly text, "neighbor get requestified"
3346357       0x330FB5        Neighborly text, "neighbor dump requestp request"
3346408       0x330FE8        Neighborly text, "neighbor dump requestump request"
3346461       0x33101D        Neighborly text, "neighbor dump request"
3346503       0x331047        Neighborly text, "neighbor dump requesttable dump request"
3346557       0x33107D        Neighborly text, "neighbor table dump requestghbor table dump request"
3346617       0x3310B9        Neighborly text, "neighbor table dump requeste dump request"
3346667       0x3310EB        Neighborly text, "neighbor table dump requestyer address given"
3346748       0x33113C        Neighborly text, "Neighbor entry is now dead"
3473440       0x350020        AES Inverse S-Box
3473696       0x350120        AES S-Box
3674112       0x381000        ELF, 32-bit MSB MIPS64 shared object, MIPS, version 1 (SYSV)
3815132       0x3A36DC        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
3815248       0x3A3750        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
3815372       0x3A37CC        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
3815488       0x3A3840        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4
-rw-r--r-- 1 root root 492 2025-10-01 15:46:26.974448434 +0100 3a36dc.cpio
```

