### 12d80.vmlinux
#### Identification (`file <*>`):
```
data
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
1685346       0x19B762        PGP RSA encrypted session key - keyid: 801000 40 RSA Encrypt-Only 1024b
4001564       0x3D0F1C        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
4174560       0x3FB2E0        CRC32 polynomial table, little endian
4183028       0x3FD3F4        xz compressed data
4233764       0x409A24        Unix path: /lib/firmware/updates/5.6.3
4276684       0x4141CC        Unix path: /sys/firmware/devicetree/base
4280313       0x414FF9        Unix path: /sys/firmware/fdt': CRC check failed
4296533       0x418F55        Neighborly text, "neighbor table overflow!tics"
4296917       0x4190D5        Neighborly text, "neighbor get requestrequest"
4296967       0x419107        Neighborly text, "neighbor get requestget request"
4297021       0x41913D        Neighborly text, "neighbor get request request"
4297072       0x419170        Neighborly text, "neighbor get requestet request"
4297125       0x4191A5        Neighborly text, "neighbor get requestNeighbour entry not found"
4297167       0x4191CF        Neighborly text, "neighbor get requestified"
4297349       0x419285        Neighborly text, "neighbor dump requestp request"
4297400       0x4192B8        Neighborly text, "neighbor dump requestump request"
4297453       0x4192ED        Neighborly text, "neighbor dump request"
4297495       0x419317        Neighborly text, "neighbor dump requesttable dump request"
4297549       0x41934D        Neighborly text, "neighbor table dump requestghbor table dump request"
4297609       0x419389        Neighborly text, "neighbor table dump requeste dump request"
4297659       0x4193BB        Neighborly text, "neighbor table dump requestyer address given"
4297740       0x41940C        Neighborly text, "Neighbor entry is now dead"
4372200       0x42B6E8        Neighborly text, "NeighborSolicitsp6InMsgs"
4372220       0x42B6FC        Neighborly text, "NeighborAdvertisementsrs"
4515936       0x44E860        AES Inverse S-Box
4516192       0x44E960        AES S-Box
4677632       0x476000        ELF, 32-bit LSB MIPS64 shared object, MIPS, version 1 (SYSV)
4853696       0x4A0FC0        Flattened device tree, size: 10039 bytes, version: 17
4866920       0x4A4368        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4867036       0x4A43DC        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4867160       0x4A4458        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4867276       0x4A44CC        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
-rw-r--r-- 1 root root 10047 2025-10-15 15:56:33.658651530 +0100 4a0fc0.dtb
-rw-r--r-- 1 root root   492 2025-10-15 15:56:33.633651536 +0100 4a4368.cpio
```

