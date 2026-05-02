### 12d8c.vmlinux
#### Identification (`file <*>`):
```
Applesoft BASIC program data, first line number 240
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
3796616       0x39EE88        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3956512       0x3C5F20        CRC32 polynomial table, little endian
3964980       0x3C8034        xz compressed data
4031988       0x3D85F4        Unix path: /lib/firmware/updates/5.6.3
4057523       0x3DE9B3        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C14-16-31, rev 0x-11c14000, size 1
4057555       0x3DE9D3        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C1C-16-20, rev 0x-11c14000, size 2048
4057683       0x3DEA53        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C40-14-30, rev 0x-11c14000, size 33
4087603       0x3E5F33        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
4096656       0x3E8290        Unix path: /sys/firmware/devicetree/base
4112613       0x3EC0E5        Neighborly text, "neighbor table overflow!tics"
4112997       0x3EC265        Neighborly text, "neighbor get requestrequest"
4113047       0x3EC297        Neighborly text, "neighbor get requestget request"
4113101       0x3EC2CD        Neighborly text, "neighbor get request request"
4113152       0x3EC300        Neighborly text, "neighbor get requestet request"
4113205       0x3EC335        Neighborly text, "neighbor get requestNeighbour entry not found"
4113247       0x3EC35F        Neighborly text, "neighbor get requestified"
4113429       0x3EC415        Neighborly text, "neighbor dump requestp request"
4113480       0x3EC448        Neighborly text, "neighbor dump requestump request"
4113533       0x3EC47D        Neighborly text, "neighbor dump request"
4113575       0x3EC4A7        Neighborly text, "neighbor dump requesttable dump request"
4113629       0x3EC4DD        Neighborly text, "neighbor table dump requestghbor table dump request"
4113689       0x3EC519        Neighborly text, "neighbor table dump requeste dump request"
4113739       0x3EC54B        Neighborly text, "neighbor table dump requestyer address given"
4113820       0x3EC59C        Neighborly text, "Neighbor entry is now dead"
4188176       0x3FE810        Neighborly text, "NeighborSolicitsp6InMsgs"
4188196       0x3FE824        Neighborly text, "NeighborAdvertisementsrs"
4300832       0x41A020        AES Inverse S-Box
4301088       0x41A120        AES S-Box
4591616       0x461000        ELF, 32-bit MSB MIPS64 shared object, MIPS, version 1 (SYSV)
4750176       0x487B60        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4750292       0x487BD4        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4750416       0x487C50        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4750532       0x487CC4        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4
-rw-r--r-- 1 root root 492 2026-05-02 20:33:21.357641578 +0100 487b60.cpio
```

