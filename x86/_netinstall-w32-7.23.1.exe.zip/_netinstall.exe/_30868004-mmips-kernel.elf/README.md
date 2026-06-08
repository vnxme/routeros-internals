### 30868004-mmips-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit LSB executable, MIPS, MIPS32 rel2 version 1 (SYSV), statically linked, BuildID[sha1]=71548c9dc0e7ffa5870205e589ec7f7df7e4f411, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit LSB MIPS64 executable, MIPS, version 1 (SYSV)
4026156       0x3D6F2C        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
4200384       0x4017C0        CRC32 polynomial table, little endian
4208852       0x4038D4        xz compressed data
4259588       0x40FF04        Unix path: /lib/firmware/updates/5.6.3
4303448       0x41AA58        Unix path: /sys/firmware/devicetree/base
4307077       0x41B885        Unix path: /sys/firmware/fdt': CRC check failed
4323269       0x41F7C5        Neighborly text, "neighbor table overflow!tics"
4323653       0x41F945        Neighborly text, "neighbor get requestrequest"
4323703       0x41F977        Neighborly text, "neighbor get requestget request"
4323757       0x41F9AD        Neighborly text, "neighbor get request request"
4323808       0x41F9E0        Neighborly text, "neighbor get requestet request"
4323861       0x41FA15        Neighborly text, "neighbor get requestNeighbour entry not found"
4323903       0x41FA3F        Neighborly text, "neighbor get requestified"
4324085       0x41FAF5        Neighborly text, "neighbor dump requestp request"
4324136       0x41FB28        Neighborly text, "neighbor dump requestump request"
4324189       0x41FB5D        Neighborly text, "neighbor dump request"
4324231       0x41FB87        Neighborly text, "neighbor dump requesttable dump request"
4324285       0x41FBBD        Neighborly text, "neighbor table dump requestghbor table dump request"
4324345       0x41FBF9        Neighborly text, "neighbor table dump requeste dump request"
4324395       0x41FC2B        Neighborly text, "neighbor table dump requestyer address given"
4324476       0x41FC7C        Neighborly text, "Neighbor entry is now dead"
4400024       0x432398        Neighborly text, "NeighborSolicitsp6InMsgs"
4400044       0x4323AC        Neighborly text, "NeighborAdvertisementsrs"
4544608       0x455860        AES Inverse S-Box
4544864       0x455960        AES S-Box
4706304       0x47D000        ELF, 32-bit LSB MIPS64 shared object, MIPS, version 1 (SYSV)
4882560       0x4A8080        Flattened device tree, size: 10039 bytes, version: 17
4895796       0x4AB434        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4895912       0x4AB4A8        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4896036       0x4AB524        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4896152       0x4AB598        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4926017       0x4B2A41        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 1220
-rw-r--r-- 1 root root   10047 2026-06-08 09:58:26.866749453 +0100 4a8080.dtb
-rw-r--r-- 1 root root     492 2026-06-08 09:58:26.838748818 +0100 4ab434.cpio
-rw-r--r-- 1 root root 1239040 2026-06-08 09:58:27.555765077 +0100 4b2a41.cpio
```

