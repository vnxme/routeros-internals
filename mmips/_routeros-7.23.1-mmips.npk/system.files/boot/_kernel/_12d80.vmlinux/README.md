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
4196288       0x4007C0        CRC32 polynomial table, little endian
4204756       0x4028D4        xz compressed data
4255492       0x40EF04        Unix path: /lib/firmware/updates/5.6.3
4299352       0x419A58        Unix path: /sys/firmware/devicetree/base
4302981       0x41A885        Unix path: /sys/firmware/fdt': CRC check failed
4319173       0x41E7C5        Neighborly text, "neighbor table overflow!tics"
4319557       0x41E945        Neighborly text, "neighbor get requestrequest"
4319607       0x41E977        Neighborly text, "neighbor get requestget request"
4319661       0x41E9AD        Neighborly text, "neighbor get request request"
4319712       0x41E9E0        Neighborly text, "neighbor get requestet request"
4319765       0x41EA15        Neighborly text, "neighbor get requestNeighbour entry not found"
4319807       0x41EA3F        Neighborly text, "neighbor get requestified"
4319989       0x41EAF5        Neighborly text, "neighbor dump requestp request"
4320040       0x41EB28        Neighborly text, "neighbor dump requestump request"
4320093       0x41EB5D        Neighborly text, "neighbor dump request"
4320135       0x41EB87        Neighborly text, "neighbor dump requesttable dump request"
4320189       0x41EBBD        Neighborly text, "neighbor table dump requestghbor table dump request"
4320249       0x41EBF9        Neighborly text, "neighbor table dump requeste dump request"
4320299       0x41EC2B        Neighborly text, "neighbor table dump requestyer address given"
4320380       0x41EC7C        Neighborly text, "Neighbor entry is now dead"
4395928       0x431398        Neighborly text, "NeighborSolicitsp6InMsgs"
4395948       0x4313AC        Neighborly text, "NeighborAdvertisementsrs"
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
-rw-r--r-- 1 root root 10047 2026-06-08 09:59:28.367145208 +0100 4a7080.dtb
-rw-r--r-- 1 root root   492 2026-06-08 09:59:28.339144569 +0100 4aa434.cpio
```

