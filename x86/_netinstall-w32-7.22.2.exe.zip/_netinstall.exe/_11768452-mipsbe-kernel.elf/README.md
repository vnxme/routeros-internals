### 11768452-mipsbe-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, MIPS, MIPS32 rel2 version 1 (SYSV), statically linked, BuildID[sha1]=5ab29f5fba84eb7c2dbced95e8ee2be77b9e3fa4, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB MIPS64 executable, MIPS, version 1 (SYSV)
3800712       0x39FE88        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3960608       0x3C6F20        CRC32 polynomial table, little endian
3969076       0x3C9034        xz compressed data
4036084       0x3D95F4        Unix path: /lib/firmware/updates/5.6.3
4061619       0x3DF9B3        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C14-16-31, rev 0x-11c14000, size 1
4061651       0x3DF9D3        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C1C-16-20, rev 0x-11c14000, size 2048
4061779       0x3DFA53        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C40-14-30, rev 0x-11c14000, size 33
4091699       0x3E6F33        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
4100752       0x3E9290        Unix path: /sys/firmware/devicetree/base
4116709       0x3ED0E5        Neighborly text, "neighbor table overflow!tics"
4117093       0x3ED265        Neighborly text, "neighbor get requestrequest"
4117143       0x3ED297        Neighborly text, "neighbor get requestget request"
4117197       0x3ED2CD        Neighborly text, "neighbor get request request"
4117248       0x3ED300        Neighborly text, "neighbor get requestet request"
4117301       0x3ED335        Neighborly text, "neighbor get requestNeighbour entry not found"
4117343       0x3ED35F        Neighborly text, "neighbor get requestified"
4117525       0x3ED415        Neighborly text, "neighbor dump requestp request"
4117576       0x3ED448        Neighborly text, "neighbor dump requestump request"
4117629       0x3ED47D        Neighborly text, "neighbor dump request"
4117671       0x3ED4A7        Neighborly text, "neighbor dump requesttable dump request"
4117725       0x3ED4DD        Neighborly text, "neighbor table dump requestghbor table dump request"
4117785       0x3ED519        Neighborly text, "neighbor table dump requeste dump request"
4117835       0x3ED54B        Neighborly text, "neighbor table dump requestyer address given"
4117916       0x3ED59C        Neighborly text, "Neighbor entry is now dead"
4192272       0x3FF810        Neighborly text, "NeighborSolicitsp6InMsgs"
4192292       0x3FF824        Neighborly text, "NeighborAdvertisementsrs"
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
-rw-r--r-- 1 root root     492 2026-05-02 20:32:20.092595051 +0100 488b60.cpio
-rw-r--r-- 1 root root 1414656 2026-05-02 20:32:20.786595458 +0100 488d95.cpio
```

