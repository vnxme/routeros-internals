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
4001580       0x3D0F2C        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
4174560       0x3FB2E0        CRC32 polynomial table, little endian
4183028       0x3FD3F4        xz compressed data
4233764       0x409A24        Unix path: /lib/firmware/updates/5.6.3
4276596       0x414174        Unix path: /sys/firmware/devicetree/base
4280225       0x414FA1        Unix path: /sys/firmware/fdt': CRC check failed
4296437       0x418EF5        Neighborly text, "neighbor table overflow!tics"
4296821       0x419075        Neighborly text, "neighbor get requestrequest"
4296871       0x4190A7        Neighborly text, "neighbor get requestget request"
4296925       0x4190DD        Neighborly text, "neighbor get request request"
4296976       0x419110        Neighborly text, "neighbor get requestet request"
4297029       0x419145        Neighborly text, "neighbor get requestNeighbour entry not found"
4297071       0x41916F        Neighborly text, "neighbor get requestified"
4297253       0x419225        Neighborly text, "neighbor dump requestp request"
4297304       0x419258        Neighborly text, "neighbor dump requestump request"
4297357       0x41928D        Neighborly text, "neighbor dump request"
4297399       0x4192B7        Neighborly text, "neighbor dump requesttable dump request"
4297453       0x4192ED        Neighborly text, "neighbor table dump requestghbor table dump request"
4297513       0x419329        Neighborly text, "neighbor table dump requeste dump request"
4297563       0x41935B        Neighborly text, "neighbor table dump requestyer address given"
4297644       0x4193AC        Neighborly text, "Neighbor entry is now dead"
4371792       0x42B550        Neighborly text, "NeighborSolicitsp6InMsgs"
4371812       0x42B564        Neighborly text, "NeighborAdvertisementsrs"
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
-rw-r--r-- 1 root root 10111 2026-01-27 11:38:33.320386328 +0000 49ffc0.dtb
-rw-r--r-- 1 root root   492 2026-01-27 11:38:33.294386610 +0000 4a33a8.cpio
```

