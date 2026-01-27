### 18259756-mipsbe-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, MIPS, MIPS32 rel2 version 1 (SYSV), statically linked, BuildID[sha1]=9782db7bd170cfb66659a4f86a285f523da39e43, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB MIPS64 executable, MIPS, version 1 (SYSV)
3780232       0x39AE88        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3939232       0x3C1BA0        CRC32 polynomial table, little endian
3947700       0x3C3CB4        xz compressed data
4014716       0x3D427C        Unix path: /lib/firmware/updates/5.6.3
4040231       0x3DA627        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C88-16-31, rev 0x-65c14000, size 1
4040263       0x3DA647        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C90-16-20, rev 0x-65c14000, size 2048
4040391       0x3DA6C7        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CB4-14-30, rev 0x-65c14000, size 33
4069363       0x3E17F3        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
4078324       0x3E3AF4        Unix path: /sys/firmware/devicetree/base
4094293       0x3E7955        Neighborly text, "neighbor table overflow!tics"
4094677       0x3E7AD5        Neighborly text, "neighbor get requestrequest"
4094727       0x3E7B07        Neighborly text, "neighbor get requestget request"
4094781       0x3E7B3D        Neighborly text, "neighbor get request request"
4094832       0x3E7B70        Neighborly text, "neighbor get requestet request"
4094885       0x3E7BA5        Neighborly text, "neighbor get requestNeighbour entry not found"
4094927       0x3E7BCF        Neighborly text, "neighbor get requestified"
4095109       0x3E7C85        Neighborly text, "neighbor dump requestp request"
4095160       0x3E7CB8        Neighborly text, "neighbor dump requestump request"
4095213       0x3E7CED        Neighborly text, "neighbor dump request"
4095255       0x3E7D17        Neighborly text, "neighbor dump requesttable dump request"
4095309       0x3E7D4D        Neighborly text, "neighbor table dump requestghbor table dump request"
4095369       0x3E7D89        Neighborly text, "neighbor table dump requeste dump request"
4095419       0x3E7DBB        Neighborly text, "neighbor table dump requestyer address given"
4095500       0x3E7E0C        Neighborly text, "Neighbor entry is now dead"
4168456       0x3F9B08        Neighborly text, "NeighborSolicitsp6InMsgs"
4168476       0x3F9B1C        Neighborly text, "NeighborAdvertisementsrs"
4280352       0x415020        AES Inverse S-Box
4280608       0x415120        AES S-Box
4567040       0x45B000        ELF, 32-bit MSB MIPS64 shared object, MIPS, version 1 (SYSV)
4725460       0x481AD4        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4725576       0x481B48        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4725700       0x481BC4        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4725816       0x481C38        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4726029       0x481D0D        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 6392
-rw-r--r-- 1 root root     492 2026-01-27 11:36:48.344554481 +0000 481ad4.cpio
-rw-r--r-- 1 root root 6538752 2026-01-27 11:36:51.076531331 +0000 481d0d.cpio
```

