### 12d80.vmlinux
#### Identification (`file <*>`):
```
data
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
1685218       0x19B6E2        PGP RSA encrypted session key - keyid: 801000 20 RSA Encrypt-Only 1024b
3997468       0x3CFF1C        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
4170464       0x3FA2E0        CRC32 polynomial table, little endian
4178932       0x3FC3F4        xz compressed data
4229668       0x408A24        Unix path: /lib/firmware/updates/5.6.3
4272480       0x413160        Unix path: /sys/firmware/devicetree/base
4276109       0x413F8D        Unix path: /sys/firmware/fdt': CRC check failed
4292309       0x417ED5        Neighborly text, "neighbor table overflow!tics"
4292693       0x418055        Neighborly text, "neighbor get requestrequest"
4292743       0x418087        Neighborly text, "neighbor get requestget request"
4292797       0x4180BD        Neighborly text, "neighbor get request request"
4292848       0x4180F0        Neighborly text, "neighbor get requestet request"
4292901       0x418125        Neighborly text, "neighbor get requestNeighbour entry not found"
4292943       0x41814F        Neighborly text, "neighbor get requestified"
4293125       0x418205        Neighborly text, "neighbor dump requestp request"
4293176       0x418238        Neighborly text, "neighbor dump requestump request"
4293229       0x41826D        Neighborly text, "neighbor dump request"
4293271       0x418297        Neighborly text, "neighbor dump requesttable dump request"
4293325       0x4182CD        Neighborly text, "neighbor table dump requestghbor table dump request"
4293385       0x418309        Neighborly text, "neighbor table dump requeste dump request"
4293435       0x41833B        Neighborly text, "neighbor table dump requestyer address given"
4293516       0x41838C        Neighborly text, "Neighbor entry is now dead"
4367272       0x42A3A8        Neighborly text, "NeighborSolicitsp6InMsgs"
4367292       0x42A3BC        Neighborly text, "NeighborAdvertisementsrs"
4507744       0x44C860        AES Inverse S-Box
4508000       0x44C960        AES S-Box
4665344       0x473000        ELF, 32-bit LSB MIPS64 shared object, MIPS, version 1 (SYSV)
4841408       0x49DFC0        Flattened device tree, size: 10103 bytes, version: 17
4854696       0x4A13A8        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4854812       0x4A141C        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4854936       0x4A1498        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4855052       0x4A150C        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
-rw-r--r-- 1 root root 10111 2025-09-29 14:40:20.433646009 +0100 49dfc0.dtb
-rw-r--r-- 1 root root   492 2025-09-29 14:40:20.407645775 +0100 4a13a8.cpio
```

