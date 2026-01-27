### 44506012-mmips-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit LSB executable, MIPS, MIPS32 rel2 version 1 (SYSV), statically linked, BuildID[sha1]=98ad8f5122095837adf1714146e420b41fe99c94, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit LSB MIPS64 executable, MIPS, version 1 (SYSV)
1689366       0x19C716        PGP RSA encrypted session key - keyid: 801000 2D RSA Encrypt-Only 1024b
4005676       0x3D1F2C        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
4178656       0x3FC2E0        CRC32 polynomial table, little endian
4187124       0x3FE3F4        xz compressed data
4237860       0x40AA24        Unix path: /lib/firmware/updates/5.6.3
4280692       0x415174        Unix path: /sys/firmware/devicetree/base
4284321       0x415FA1        Unix path: /sys/firmware/fdt': CRC check failed
4300533       0x419EF5        Neighborly text, "neighbor table overflow!tics"
4300917       0x41A075        Neighborly text, "neighbor get requestrequest"
4300967       0x41A0A7        Neighborly text, "neighbor get requestget request"
4301021       0x41A0DD        Neighborly text, "neighbor get request request"
4301072       0x41A110        Neighborly text, "neighbor get requestet request"
4301125       0x41A145        Neighborly text, "neighbor get requestNeighbour entry not found"
4301167       0x41A16F        Neighborly text, "neighbor get requestified"
4301349       0x41A225        Neighborly text, "neighbor dump requestp request"
4301400       0x41A258        Neighborly text, "neighbor dump requestump request"
4301453       0x41A28D        Neighborly text, "neighbor dump request"
4301495       0x41A2B7        Neighborly text, "neighbor dump requesttable dump request"
4301549       0x41A2ED        Neighborly text, "neighbor table dump requestghbor table dump request"
4301609       0x41A329        Neighborly text, "neighbor table dump requeste dump request"
4301659       0x41A35B        Neighborly text, "neighbor table dump requestyer address given"
4301740       0x41A3AC        Neighborly text, "Neighbor entry is now dead"
4375888       0x42C550        Neighborly text, "NeighborSolicitsp6InMsgs"
4375908       0x42C564        Neighborly text, "NeighborAdvertisementsrs"
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
-rw-r--r-- 1 root root   10111 2026-01-27 11:37:28.952099237 +0000 4a0fc0.dtb
-rw-r--r-- 1 root root     492 2026-01-27 11:37:28.925099519 +0000 4a43a8.cpio
-rw-r--r-- 1 root root 6406656 2026-01-27 11:37:31.661070331 +0000 4aba41.cpio
```

