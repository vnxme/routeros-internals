### 131-mipsbe-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, MIPS, MIPS32 rel2 version 1 (SYSV), statically linked, BuildID[sha1]=7ba3388c1fe242fae37b471e0a71d4a224e1f493, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB MIPS64 executable, MIPS, version 1 (SYSV)
3780216       0x39AE78        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3939232       0x3C1BA0        CRC32 polynomial table, little endian
3947700       0x3C3CB4        xz compressed data
4014716       0x3D427C        Unix path: /lib/firmware/updates/5.6.3
4040251       0x3DA63B        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C9C-16-31, rev 0x-65c14000, size 1
4040283       0x3DA65B        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CA4-16-20, rev 0x-65c14000, size 2048
4040411       0x3DA6DB        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CC8-14-30, rev 0x-65c14000, size 33
4069435       0x3E183B        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
4078460       0x3E3B7C        Unix path: /sys/firmware/devicetree/base
4094421       0x3E79D5        Neighborly text, "neighbor table overflow!tics"
4094805       0x3E7B55        Neighborly text, "neighbor get requestrequest"
4094855       0x3E7B87        Neighborly text, "neighbor get requestget request"
4094909       0x3E7BBD        Neighborly text, "neighbor get request request"
4094960       0x3E7BF0        Neighborly text, "neighbor get requestet request"
4095013       0x3E7C25        Neighborly text, "neighbor get requestNeighbour entry not found"
4095055       0x3E7C4F        Neighborly text, "neighbor get requestified"
4095237       0x3E7D05        Neighborly text, "neighbor dump requestp request"
4095288       0x3E7D38        Neighborly text, "neighbor dump requestump request"
4095341       0x3E7D6D        Neighborly text, "neighbor dump request"
4095383       0x3E7D97        Neighborly text, "neighbor dump requesttable dump request"
4095437       0x3E7DCD        Neighborly text, "neighbor table dump requestghbor table dump request"
4095497       0x3E7E09        Neighborly text, "neighbor table dump requeste dump request"
4095547       0x3E7E3B        Neighborly text, "neighbor table dump requestyer address given"
4095628       0x3E7E8C        Neighborly text, "Neighbor entry is now dead"
4168896       0x3F9CC0        Neighborly text, "NeighborSolicitsp6InMsgs"
4168916       0x3F9CD4        Neighborly text, "NeighborAdvertisementsrs"
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
total 1396
-rw-r--r-- 1 root root     492 2025-10-10 21:55:06.463160694 +0100 481ad4.cpio
-rw-r--r-- 1 root root 1423360 2025-10-10 21:55:07.170167887 +0100 481d0d.cpio
```

