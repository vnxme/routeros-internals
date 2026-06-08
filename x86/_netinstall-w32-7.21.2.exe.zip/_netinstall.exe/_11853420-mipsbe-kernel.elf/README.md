### 11853420-mipsbe-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, MIPS, MIPS32 rel2 version 1 (SYSV), statically linked, BuildID[sha1]=f0af06d6038f03383f00dff6f1d6e6593b187c9d, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB MIPS64 executable, MIPS, version 1 (SYSV)
3784328       0x39BE88        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3943552       0x3C2C80        CRC32 polynomial table, little endian
3952020       0x3C4D94        xz compressed data
4019036       0x3D535C        Unix path: /lib/firmware/updates/5.6.3
4044571       0x3DB71B        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C7C-16-31, rev 0x-54c14000, size 1
4044603       0x3DB73B        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C84-16-20, rev 0x-54c14000, size 2048
4044731       0x3DB7BB        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CA8-14-30, rev 0x-54c14000, size 33
4073755       0x3E291B        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
4082780       0x3E4C5C        Unix path: /sys/firmware/devicetree/base
4098741       0x3E8AB5        Neighborly text, "neighbor table overflow!tics"
4099125       0x3E8C35        Neighborly text, "neighbor get requestrequest"
4099175       0x3E8C67        Neighborly text, "neighbor get requestget request"
4099229       0x3E8C9D        Neighborly text, "neighbor get request request"
4099280       0x3E8CD0        Neighborly text, "neighbor get requestet request"
4099333       0x3E8D05        Neighborly text, "neighbor get requestNeighbour entry not found"
4099375       0x3E8D2F        Neighborly text, "neighbor get requestified"
4099557       0x3E8DE5        Neighborly text, "neighbor dump requestp request"
4099608       0x3E8E18        Neighborly text, "neighbor dump requestump request"
4099661       0x3E8E4D        Neighborly text, "neighbor dump request"
4099703       0x3E8E77        Neighborly text, "neighbor dump requesttable dump request"
4099757       0x3E8EAD        Neighborly text, "neighbor table dump requestghbor table dump request"
4099817       0x3E8EE9        Neighborly text, "neighbor table dump requeste dump request"
4099867       0x3E8F1B        Neighborly text, "neighbor table dump requestyer address given"
4099948       0x3E8F6C        Neighborly text, "Neighbor entry is now dead"
4174368       0x3FB220        Neighborly text, "NeighborSolicitsp6InMsgs"
4174388       0x3FB234        Neighborly text, "NeighborAdvertisementsrs"
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
-rw-r--r-- 1 root root     492 2026-06-08 15:57:48.178785250 +0100 481ad4.cpio
-rw-r--r-- 1 root root 1424896 2026-06-08 15:57:48.862787102 +0100 481d0d.cpio
```

