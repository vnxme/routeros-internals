### 12d8c.vmlinux
#### Identification (`file <*>`):
```
Applesoft BASIC program data, first line number 240
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
3780232       0x39AE88        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3939456       0x3C1C80        CRC32 polynomial table, little endian
3947924       0x3C3D94        xz compressed data
4014940       0x3D435C        Unix path: /lib/firmware/updates/5.6.3
4040475       0x3DA71B        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C7C-16-31, rev 0x-54c14000, size 1
4040507       0x3DA73B        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C84-16-20, rev 0x-54c14000, size 2048
4040635       0x3DA7BB        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CA8-14-30, rev 0x-54c14000, size 33
4069659       0x3E191B        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
4078684       0x3E3C5C        Unix path: /sys/firmware/devicetree/base
4094645       0x3E7AB5        Neighborly text, "neighbor table overflow!tics"
4095029       0x3E7C35        Neighborly text, "neighbor get requestrequest"
4095079       0x3E7C67        Neighborly text, "neighbor get requestget request"
4095133       0x3E7C9D        Neighborly text, "neighbor get request request"
4095184       0x3E7CD0        Neighborly text, "neighbor get requestet request"
4095237       0x3E7D05        Neighborly text, "neighbor get requestNeighbour entry not found"
4095279       0x3E7D2F        Neighborly text, "neighbor get requestified"
4095461       0x3E7DE5        Neighborly text, "neighbor dump requestp request"
4095512       0x3E7E18        Neighborly text, "neighbor dump requestump request"
4095565       0x3E7E4D        Neighborly text, "neighbor dump request"
4095607       0x3E7E77        Neighborly text, "neighbor dump requesttable dump request"
4095661       0x3E7EAD        Neighborly text, "neighbor table dump requestghbor table dump request"
4095721       0x3E7EE9        Neighborly text, "neighbor table dump requeste dump request"
4095771       0x3E7F1B        Neighborly text, "neighbor table dump requestyer address given"
4095852       0x3E7F6C        Neighborly text, "Neighbor entry is now dead"
4170272       0x3FA220        Neighborly text, "NeighborSolicitsp6InMsgs"
4170292       0x3FA234        Neighborly text, "NeighborAdvertisementsrs"
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
-rw-r--r-- 1 root root 492 2026-06-08 15:59:08.511771454 +0100 480ad4.cpio
```

