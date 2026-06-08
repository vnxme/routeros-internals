### 11795220-mipsbe-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, MIPS, MIPS32 rel2 version 1 (SYSV), statically linked, BuildID[sha1]=e9bfb4f80ecb23f694ac604804759cbd32cc3c2c, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB MIPS64 executable, MIPS, version 1 (SYSV)
3800712       0x39FE88        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3960992       0x3C70A0        CRC32 polynomial table, little endian
3969460       0x3C91B4        xz compressed data
4036468       0x3D9774        Unix path: /lib/firmware/updates/5.6.3
4062003       0x3DFB33        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C94-16-31, rev 0x-10c14000, size 1
4062035       0x3DFB53        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C9C-16-20, rev 0x-10c14000, size 2048
4062163       0x3DFBD3        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CC0-14-30, rev 0x-10c14000, size 33
4092083       0x3E70B3        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
4101152       0x3E9420        Unix path: /sys/firmware/devicetree/base
4117125       0x3ED285        Neighborly text, "neighbor table overflow!tics"
4117509       0x3ED405        Neighborly text, "neighbor get requestrequest"
4117559       0x3ED437        Neighborly text, "neighbor get requestget request"
4117613       0x3ED46D        Neighborly text, "neighbor get request request"
4117664       0x3ED4A0        Neighborly text, "neighbor get requestet request"
4117717       0x3ED4D5        Neighborly text, "neighbor get requestNeighbour entry not found"
4117759       0x3ED4FF        Neighborly text, "neighbor get requestified"
4117941       0x3ED5B5        Neighborly text, "neighbor dump requestp request"
4117992       0x3ED5E8        Neighborly text, "neighbor dump requestump request"
4118045       0x3ED61D        Neighborly text, "neighbor dump request"
4118087       0x3ED647        Neighborly text, "neighbor dump requesttable dump request"
4118141       0x3ED67D        Neighborly text, "neighbor table dump requestghbor table dump request"
4118201       0x3ED6B9        Neighborly text, "neighbor table dump requeste dump request"
4118251       0x3ED6EB        Neighborly text, "neighbor table dump requestyer address given"
4118332       0x3ED73C        Neighborly text, "Neighbor entry is now dead"
4192688       0x3FF9B0        Neighborly text, "NeighborSolicitsp6InMsgs"
4192708       0x3FF9C4        Neighborly text, "NeighborAdvertisementsrs"
4304928       0x41B020        AES Inverse S-Box
4305184       0x41B120        AES S-Box
4595712       0x462000        ELF, 32-bit MSB MIPS64 shared object, MIPS, version 1 (SYSV)
4754272       0x488B60        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4754388       0x488BD4        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4754512       0x488C50        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4754628       0x488CC4        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4754837       0x488D95        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 1388
-rw-r--r-- 1 root root     492 2026-06-08 09:58:02.938180186 +0100 488b60.cpio
-rw-r--r-- 1 root root 1417216 2026-06-08 09:58:03.711197927 +0100 488d95.cpio
```

