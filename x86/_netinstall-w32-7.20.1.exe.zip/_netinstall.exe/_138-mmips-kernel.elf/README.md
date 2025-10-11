### 138-mmips-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit LSB executable, MIPS, MIPS32 rel2 version 1 (SYSV), statically linked, BuildID[sha1]=374ad0806d8f24052686d6de9b90eb9be7a47125, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit LSB MIPS64 executable, MIPS, version 1 (SYSV)
1689366       0x19C716        PGP RSA encrypted session key - keyid: 801000 2D RSA Encrypt-Only 1024b
4005660       0x3D1F1C        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
4178624       0x3FC2C0        CRC32 polynomial table, little endian
4187092       0x3FE3D4        xz compressed data
4237828       0x40AA04        Unix path: /lib/firmware/updates/5.6.3
4280660       0x415154        Unix path: /sys/firmware/devicetree/base
4284289       0x415F81        Unix path: /sys/firmware/fdt': CRC check failed
4300501       0x419ED5        Neighborly text, "neighbor table overflow!tics"
4300885       0x41A055        Neighborly text, "neighbor get requestrequest"
4300935       0x41A087        Neighborly text, "neighbor get requestget request"
4300989       0x41A0BD        Neighborly text, "neighbor get request request"
4301040       0x41A0F0        Neighborly text, "neighbor get requestet request"
4301093       0x41A125        Neighborly text, "neighbor get requestNeighbour entry not found"
4301135       0x41A14F        Neighborly text, "neighbor get requestified"
4301317       0x41A205        Neighborly text, "neighbor dump requestp request"
4301368       0x41A238        Neighborly text, "neighbor dump requestump request"
4301421       0x41A26D        Neighborly text, "neighbor dump request"
4301463       0x41A297        Neighborly text, "neighbor dump requesttable dump request"
4301517       0x41A2CD        Neighborly text, "neighbor table dump requestghbor table dump request"
4301577       0x41A309        Neighborly text, "neighbor table dump requeste dump request"
4301627       0x41A33B        Neighborly text, "neighbor table dump requestyer address given"
4301708       0x41A38C        Neighborly text, "Neighbor entry is now dead"
4375856       0x42C530        Neighborly text, "NeighborSolicitsp6InMsgs"
4375876       0x42C544        Neighborly text, "NeighborAdvertisementsrs"
4520032       0x44F860        AES Inverse S-Box
4520288       0x44F960        AES S-Box
4677632       0x476000        ELF, 32-bit LSB MIPS64 shared object, MIPS, version 1 (SYSV)
4853696       0x4A0FC0        Flattened device tree, size: 10103 bytes, version: 17
4866984       0x4A43A8        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4867100       0x4A441C        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4867224       0x4A4498        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4867340       0x4A450C        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4897345       0x4ABA41        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 6276
-rw-r--r-- 1 root root   10111 2025-10-11 13:55:47.420978738 +0100 4a0fc0.dtb
-rw-r--r-- 1 root root     492 2025-10-11 13:55:47.394978871 +0100 4a43a8.cpio
-rw-r--r-- 1 root root 6406656 2025-10-11 13:55:50.125964913 +0100 4aba41.cpio
```

