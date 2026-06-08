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
3956896       0x3C60A0        CRC32 polynomial table, little endian
3965364       0x3C81B4        xz compressed data
4032372       0x3D8774        Unix path: /lib/firmware/updates/5.6.3
4057907       0x3DEB33        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C94-16-31, rev 0x-10c14000, size 1
4057939       0x3DEB53        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C9C-16-20, rev 0x-10c14000, size 2048
4058067       0x3DEBD3        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CC0-14-30, rev 0x-10c14000, size 33
4087987       0x3E60B3        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
4097056       0x3E8420        Unix path: /sys/firmware/devicetree/base
4113029       0x3EC285        Neighborly text, "neighbor table overflow!tics"
4113413       0x3EC405        Neighborly text, "neighbor get requestrequest"
4113463       0x3EC437        Neighborly text, "neighbor get requestget request"
4113517       0x3EC46D        Neighborly text, "neighbor get request request"
4113568       0x3EC4A0        Neighborly text, "neighbor get requestet request"
4113621       0x3EC4D5        Neighborly text, "neighbor get requestNeighbour entry not found"
4113663       0x3EC4FF        Neighborly text, "neighbor get requestified"
4113845       0x3EC5B5        Neighborly text, "neighbor dump requestp request"
4113896       0x3EC5E8        Neighborly text, "neighbor dump requestump request"
4113949       0x3EC61D        Neighborly text, "neighbor dump request"
4113991       0x3EC647        Neighborly text, "neighbor dump requesttable dump request"
4114045       0x3EC67D        Neighborly text, "neighbor table dump requestghbor table dump request"
4114105       0x3EC6B9        Neighborly text, "neighbor table dump requeste dump request"
4114155       0x3EC6EB        Neighborly text, "neighbor table dump requestyer address given"
4114236       0x3EC73C        Neighborly text, "Neighbor entry is now dead"
4188592       0x3FE9B0        Neighborly text, "NeighborSolicitsp6InMsgs"
4188612       0x3FE9C4        Neighborly text, "NeighborAdvertisementsrs"
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
-rw-r--r-- 1 root root 492 2026-06-08 09:59:25.631082687 +0100 487b60.cpio
```

