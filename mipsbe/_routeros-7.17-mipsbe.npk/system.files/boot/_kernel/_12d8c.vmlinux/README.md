### 12d8c.vmlinux
#### Identification (`file <*>`):
```
Applesoft BASIC program data, first line number 240
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
3706488       0x388E78        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3864096       0x3AF620        CRC32 polynomial table, little endian
3872564       0x3B1734        xz compressed data
3939564       0x3C1CEC        Unix path: /lib/firmware/updates/5.6.3
3965031       0x3C8067        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CC8-16-31, rev 0x-7bc24000, size 1
3965063       0x3C8087        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CD0-16-20, rev 0x-7bc24000, size 2048
3965191       0x3C8107        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CF4-14-30, rev 0x-7bc24000, size 33
3994143       0x3CF21F        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
4003092       0x3D1514        Unix path: /sys/firmware/devicetree/base
4019061       0x3D5375        Neighborly text, "neighbor table overflow!tics"
4019445       0x3D54F5        Neighborly text, "neighbor get requestrequest"
4019495       0x3D5527        Neighborly text, "neighbor get requestget request"
4019549       0x3D555D        Neighborly text, "neighbor get request request"
4019600       0x3D5590        Neighborly text, "neighbor get requestet request"
4019653       0x3D55C5        Neighborly text, "neighbor get requestNeighbour entry not found"
4019695       0x3D55EF        Neighborly text, "neighbor get requestified"
4019877       0x3D56A5        Neighborly text, "neighbor dump requestp request"
4019928       0x3D56D8        Neighborly text, "neighbor dump requestump request"
4019981       0x3D570D        Neighborly text, "neighbor dump request"
4020023       0x3D5737        Neighborly text, "neighbor dump requesttable dump request"
4020077       0x3D576D        Neighborly text, "neighbor table dump requestghbor table dump request"
4020137       0x3D57A9        Neighborly text, "neighbor table dump requeste dump request"
4020187       0x3D57DB        Neighborly text, "neighbor table dump requestyer address given"
4020268       0x3D582C        Neighborly text, "Neighbor entry is now dead"
4092476       0x3E723C        Neighborly text, "NeighborSolicitsp6InMsgs"
4092496       0x3E7250        Neighborly text, "NeighborAdvertisementsrs"
4202528       0x402020        AES Inverse S-Box
4202784       0x402120        AES S-Box
4489216       0x448000        ELF, 32-bit MSB MIPS64 shared object, MIPS, version 1 (SYSV)
4647260       0x46E95C        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4647376       0x46E9D0        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4647500       0x46EA4C        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4647616       0x46EAC0        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4
-rw-r--r-- 1 root root 492 2025-09-03 12:24:54.596466972 +0100 46e95c.cpio
```

