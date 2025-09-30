### 12d8c.vmlinux
#### Identification (`file <*>`):
```
Applesoft BASIC program data, first line number 240
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
3427944       0x344E68        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3587008       0x36BBC0        CRC32 polynomial table, little endian
3595476       0x36DCD4        xz compressed data
3662484       0x37E294        Unix path: /lib/firmware/updates/5.6.3
3687999       0x38463F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CA0-16-31, rev 0x4a39c000, size 1
3688031       0x38465F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CA8-16-20, rev 0x4a39c000, size 2048
3688159       0x3846DF        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CCC-14-30, rev 0x4a39c000, size 33
3717131       0x38B80B        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
3726080       0x38DB00        Unix path: /sys/firmware/devicetree/base
3742249       0x391A29        Neighborly text, "neighbor table overflow!ork address"
3742461       0x391AFD        Neighborly text, "neighbor get requestrequest"
3742511       0x391B2F        Neighborly text, "neighbor get requestget request"
3742565       0x391B65        Neighborly text, "neighbor get request request"
3742616       0x391B98        Neighborly text, "neighbor get requestet request"
3742669       0x391BCD        Neighborly text, "neighbor get requestNeighbour entry not found"
3742711       0x391BF7        Neighborly text, "neighbor get requestified"
3742893       0x391CAD        Neighborly text, "neighbor dump requestp request"
3742944       0x391CE0        Neighborly text, "neighbor dump requestump request"
3742997       0x391D15        Neighborly text, "neighbor dump request"
3743039       0x391D3F        Neighborly text, "neighbor dump requesttable dump request"
3743093       0x391D75        Neighborly text, "neighbor table dump requestghbor table dump request"
3743153       0x391DB1        Neighborly text, "neighbor table dump requeste dump request"
3743203       0x391DE3        Neighborly text, "neighbor table dump requestyer address given"
3743284       0x391E34        Neighborly text, "Neighbor entry is now dead"
3907616       0x3BA020        AES Inverse S-Box
3907872       0x3BA120        AES S-Box
4190208       0x3FF000        ELF, 32-bit MSB MIPS64 shared object, MIPS, version 1 (SYSV)
4343776       0x4247E0        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4343892       0x424854        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4344016       0x4248D0        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4344132       0x424944        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4
-rw-r--r-- 1 root root 492 2025-09-30 15:48:06.122342397 +0100 4247e0.cpio
```

