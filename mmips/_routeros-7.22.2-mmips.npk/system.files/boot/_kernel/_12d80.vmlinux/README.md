### 12d80.vmlinux
#### Identification (`file <*>`):
```
data
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
4022060       0x3D5F2C        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
4195904       0x400640        CRC32 polynomial table, little endian
4204372       0x402754        xz compressed data
4255108       0x40ED84        Unix path: /lib/firmware/updates/5.6.3
4298952       0x4198C8        Unix path: /sys/firmware/devicetree/base
4302581       0x41A6F5        Unix path: /sys/firmware/fdt': CRC check failed
4318757       0x41E625        Neighborly text, "neighbor table overflow!tics"
4319141       0x41E7A5        Neighborly text, "neighbor get requestrequest"
4319191       0x41E7D7        Neighborly text, "neighbor get requestget request"
4319245       0x41E80D        Neighborly text, "neighbor get request request"
4319296       0x41E840        Neighborly text, "neighbor get requestet request"
4319349       0x41E875        Neighborly text, "neighbor get requestNeighbour entry not found"
4319391       0x41E89F        Neighborly text, "neighbor get requestified"
4319573       0x41E955        Neighborly text, "neighbor dump requestp request"
4319624       0x41E988        Neighborly text, "neighbor dump requestump request"
4319677       0x41E9BD        Neighborly text, "neighbor dump request"
4319719       0x41E9E7        Neighborly text, "neighbor dump requesttable dump request"
4319773       0x41EA1D        Neighborly text, "neighbor table dump requestghbor table dump request"
4319833       0x41EA59        Neighborly text, "neighbor table dump requeste dump request"
4319883       0x41EA8B        Neighborly text, "neighbor table dump requestyer address given"
4319964       0x41EADC        Neighborly text, "Neighbor entry is now dead"
4395512       0x4311F8        Neighborly text, "NeighborSolicitsp6InMsgs"
4395532       0x43120C        Neighborly text, "NeighborAdvertisementsrs"
4540512       0x454860        AES Inverse S-Box
4540768       0x454960        AES S-Box
4702208       0x47C000        ELF, 32-bit LSB MIPS64 shared object, MIPS, version 1 (SYSV)
4878464       0x4A7080        Flattened device tree, size: 10039 bytes, version: 17
4891700       0x4AA434        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4891816       0x4AA4A8        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4891940       0x4AA524        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4892056       0x4AA598        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
-rw-r--r-- 1 root root 10047 2026-05-02 20:33:23.310643163 +0100 4a7080.dtb
-rw-r--r-- 1 root root   492 2026-05-02 20:33:23.285643143 +0100 4aa434.cpio
```

