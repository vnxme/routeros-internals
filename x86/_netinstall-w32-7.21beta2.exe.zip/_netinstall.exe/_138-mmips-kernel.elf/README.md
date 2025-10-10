### 138-mmips-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit LSB executable, MIPS, MIPS32 rel2 version 1 (SYSV), statically linked, BuildID[sha1]=95d0d0181a36dc8e3a7c65851651fe245b522d32, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit LSB MIPS64 executable, MIPS, version 1 (SYSV)
1689442       0x19C762        PGP RSA encrypted session key - keyid: 801000 40 RSA Encrypt-Only 1024b
4005660       0x3D1F1C        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
4178656       0x3FC2E0        CRC32 polynomial table, little endian
4187124       0x3FE3F4        xz compressed data
4237860       0x40AA24        Unix path: /lib/firmware/updates/5.6.3
4280780       0x4151CC        Unix path: /sys/firmware/devicetree/base
4284409       0x415FF9        Unix path: /sys/firmware/fdt': CRC check failed
4300629       0x419F55        Neighborly text, "neighbor table overflow!tics"
4301013       0x41A0D5        Neighborly text, "neighbor get requestrequest"
4301063       0x41A107        Neighborly text, "neighbor get requestget request"
4301117       0x41A13D        Neighborly text, "neighbor get request request"
4301168       0x41A170        Neighborly text, "neighbor get requestet request"
4301221       0x41A1A5        Neighborly text, "neighbor get requestNeighbour entry not found"
4301263       0x41A1CF        Neighborly text, "neighbor get requestified"
4301445       0x41A285        Neighborly text, "neighbor dump requestp request"
4301496       0x41A2B8        Neighborly text, "neighbor dump requestump request"
4301549       0x41A2ED        Neighborly text, "neighbor dump request"
4301591       0x41A317        Neighborly text, "neighbor dump requesttable dump request"
4301645       0x41A34D        Neighborly text, "neighbor table dump requestghbor table dump request"
4301705       0x41A389        Neighborly text, "neighbor table dump requeste dump request"
4301755       0x41A3BB        Neighborly text, "neighbor table dump requestyer address given"
4301836       0x41A40C        Neighborly text, "Neighbor entry is now dead"
4376296       0x42C6E8        Neighborly text, "NeighborSolicitsp6InMsgs"
4376316       0x42C6FC        Neighborly text, "NeighborAdvertisementsrs"
4520032       0x44F860        AES Inverse S-Box
4520288       0x44F960        AES S-Box
4681728       0x477000        ELF, 32-bit LSB MIPS64 shared object, MIPS, version 1 (SYSV)
4857792       0x4A1FC0        Flattened device tree, size: 10039 bytes, version: 17
4871016       0x4A5368        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4871132       0x4A53DC        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4871256       0x4A5458        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4871372       0x4A54CC        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4901441       0x4ACA41        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 1228
-rw-r--r-- 1 root root   10047 2025-10-10 21:55:21.564332317 +0100 4a1fc0.dtb
-rw-r--r-- 1 root root     492 2025-10-10 21:55:21.539332028 +0100 4a5368.cpio
-rw-r--r-- 1 root root 1248256 2025-10-10 21:55:22.182339463 +0100 4aca41.cpio
```

