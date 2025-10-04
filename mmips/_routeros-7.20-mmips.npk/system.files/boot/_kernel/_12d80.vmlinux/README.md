### 12d80.vmlinux
#### Identification (`file <*>`):
```
data
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
1685270       0x19B716        PGP RSA encrypted session key - keyid: 801000 2D RSA Encrypt-Only 1024b
4001564       0x3D0F1C        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
4174528       0x3FB2C0        CRC32 polynomial table, little endian
4182996       0x3FD3D4        xz compressed data
4233732       0x409A04        Unix path: /lib/firmware/updates/5.6.3
4276564       0x414154        Unix path: /sys/firmware/devicetree/base
4280193       0x414F81        Unix path: /sys/firmware/fdt': CRC check failed
4296405       0x418ED5        Neighborly text, "neighbor table overflow!tics"
4296789       0x419055        Neighborly text, "neighbor get requestrequest"
4296839       0x419087        Neighborly text, "neighbor get requestget request"
4296893       0x4190BD        Neighborly text, "neighbor get request request"
4296944       0x4190F0        Neighborly text, "neighbor get requestet request"
4296997       0x419125        Neighborly text, "neighbor get requestNeighbour entry not found"
4297039       0x41914F        Neighborly text, "neighbor get requestified"
4297221       0x419205        Neighborly text, "neighbor dump requestp request"
4297272       0x419238        Neighborly text, "neighbor dump requestump request"
4297325       0x41926D        Neighborly text, "neighbor dump request"
4297367       0x419297        Neighborly text, "neighbor dump requesttable dump request"
4297421       0x4192CD        Neighborly text, "neighbor table dump requestghbor table dump request"
4297481       0x419309        Neighborly text, "neighbor table dump requeste dump request"
4297531       0x41933B        Neighborly text, "neighbor table dump requestyer address given"
4297612       0x41938C        Neighborly text, "Neighbor entry is now dead"
4371760       0x42B530        Neighborly text, "NeighborSolicitsp6InMsgs"
4371780       0x42B544        Neighborly text, "NeighborAdvertisementsrs"
4515936       0x44E860        AES Inverse S-Box
4516192       0x44E960        AES S-Box
4673536       0x475000        ELF, 32-bit LSB MIPS64 shared object, MIPS, version 1 (SYSV)
4849600       0x49FFC0        Flattened device tree, size: 10103 bytes, version: 17
4862888       0x4A33A8        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4863004       0x4A341C        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4863128       0x4A3498        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4863244       0x4A350C        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
-rw-r--r-- 1 root root 10111 2025-10-04 14:01:07.017365743 +0100 49ffc0.dtb
-rw-r--r-- 1 root root   492 2025-10-04 14:01:06.991365894 +0100 4a33a8.cpio
```

