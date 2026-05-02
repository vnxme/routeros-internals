### 30818340-mmips-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit LSB executable, MIPS, MIPS32 rel2 version 1 (SYSV), statically linked, BuildID[sha1]=586936e9b419196da175489c6962c93abd0eedb6, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit LSB MIPS64 executable, MIPS, version 1 (SYSV)
4026156       0x3D6F2C        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
4200000       0x401640        CRC32 polynomial table, little endian
4208468       0x403754        xz compressed data
4259204       0x40FD84        Unix path: /lib/firmware/updates/5.6.3
4303048       0x41A8C8        Unix path: /sys/firmware/devicetree/base
4306677       0x41B6F5        Unix path: /sys/firmware/fdt': CRC check failed
4322853       0x41F625        Neighborly text, "neighbor table overflow!tics"
4323237       0x41F7A5        Neighborly text, "neighbor get requestrequest"
4323287       0x41F7D7        Neighborly text, "neighbor get requestget request"
4323341       0x41F80D        Neighborly text, "neighbor get request request"
4323392       0x41F840        Neighborly text, "neighbor get requestet request"
4323445       0x41F875        Neighborly text, "neighbor get requestNeighbour entry not found"
4323487       0x41F89F        Neighborly text, "neighbor get requestified"
4323669       0x41F955        Neighborly text, "neighbor dump requestp request"
4323720       0x41F988        Neighborly text, "neighbor dump requestump request"
4323773       0x41F9BD        Neighborly text, "neighbor dump request"
4323815       0x41F9E7        Neighborly text, "neighbor dump requesttable dump request"
4323869       0x41FA1D        Neighborly text, "neighbor table dump requestghbor table dump request"
4323929       0x41FA59        Neighborly text, "neighbor table dump requeste dump request"
4323979       0x41FA8B        Neighborly text, "neighbor table dump requestyer address given"
4324060       0x41FADC        Neighborly text, "Neighbor entry is now dead"
4399608       0x4321F8        Neighborly text, "NeighborSolicitsp6InMsgs"
4399628       0x43220C        Neighborly text, "NeighborAdvertisementsrs"
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
total 1216
-rw-r--r-- 1 root root   10047 2026-05-02 20:32:39.033606421 +0100 4a8080.dtb
-rw-r--r-- 1 root root     492 2026-05-02 20:32:39.008606402 +0100 4ab434.cpio
-rw-r--r-- 1 root root 1235968 2026-05-02 20:32:39.657606904 +0100 4b2a41.cpio
```

