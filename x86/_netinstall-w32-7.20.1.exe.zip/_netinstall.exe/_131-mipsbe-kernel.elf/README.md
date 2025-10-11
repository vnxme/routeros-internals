### 131-mipsbe-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, MIPS, MIPS32 rel2 version 1 (SYSV), statically linked, BuildID[sha1]=09233ef789631a4429912cb41ea7c49422685fc1, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB MIPS64 executable, MIPS, version 1 (SYSV)
3780216       0x39AE78        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3939200       0x3C1B80        CRC32 polynomial table, little endian
3947668       0x3C3C94        xz compressed data
4014684       0x3D425C        Unix path: /lib/firmware/updates/5.6.3
4040199       0x3DA607        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C68-16-31, rev 0x-65c14000, size 1
4040231       0x3DA627        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C70-16-20, rev 0x-65c14000, size 2048
4040359       0x3DA6A7        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C94-14-30, rev 0x-65c14000, size 33
4069331       0x3E17D3        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
4078292       0x3E3AD4        Unix path: /sys/firmware/devicetree/base
4094261       0x3E7935        Neighborly text, "neighbor table overflow!tics"
4094645       0x3E7AB5        Neighborly text, "neighbor get requestrequest"
4094695       0x3E7AE7        Neighborly text, "neighbor get requestget request"
4094749       0x3E7B1D        Neighborly text, "neighbor get request request"
4094800       0x3E7B50        Neighborly text, "neighbor get requestet request"
4094853       0x3E7B85        Neighborly text, "neighbor get requestNeighbour entry not found"
4094895       0x3E7BAF        Neighborly text, "neighbor get requestified"
4095077       0x3E7C65        Neighborly text, "neighbor dump requestp request"
4095128       0x3E7C98        Neighborly text, "neighbor dump requestump request"
4095181       0x3E7CCD        Neighborly text, "neighbor dump request"
4095223       0x3E7CF7        Neighborly text, "neighbor dump requesttable dump request"
4095277       0x3E7D2D        Neighborly text, "neighbor table dump requestghbor table dump request"
4095337       0x3E7D69        Neighborly text, "neighbor table dump requeste dump request"
4095387       0x3E7D9B        Neighborly text, "neighbor table dump requestyer address given"
4095468       0x3E7DEC        Neighborly text, "Neighbor entry is now dead"
4168424       0x3F9AE8        Neighborly text, "NeighborSolicitsp6InMsgs"
4168444       0x3F9AFC        Neighborly text, "NeighborAdvertisementsrs"
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
-rw-r--r-- 1 root root     492 2025-10-11 13:55:21.338101298 +0100 481ad4.cpio
-rw-r--r-- 1 root root 6539264 2025-10-11 13:55:24.095087161 +0100 481d0d.cpio
```

