### 12d80.vmlinux
#### Identification (`file <*>`):
```
data
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
3555084       0x363F0C        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3726560       0x38DCE0        CRC32 polynomial table, little endian
3735028       0x38FDF4        xz compressed data
3785768       0x39C428        Unix path: /lib/firmware/updates/5.6.3
3828544       0x3A6B40        Unix path: /sys/firmware/devicetree/base
3832173       0x3A796D        Unix path: /sys/firmware/fdt': CRC check failed
3848553       0x3AB969        Neighborly text, "neighbor table overflow!ork address"
3848765       0x3ABA3D        Neighborly text, "neighbor get requestrequest"
3848815       0x3ABA6F        Neighborly text, "neighbor get requestget request"
3848869       0x3ABAA5        Neighborly text, "neighbor get request request"
3848920       0x3ABAD8        Neighborly text, "neighbor get requestet request"
3848973       0x3ABB0D        Neighborly text, "neighbor get requestNeighbour entry not found"
3849015       0x3ABB37        Neighborly text, "neighbor get requestified"
3849197       0x3ABBED        Neighborly text, "neighbor dump requestp request"
3849248       0x3ABC20        Neighborly text, "neighbor dump requestump request"
3849301       0x3ABC55        Neighborly text, "neighbor dump request"
3849343       0x3ABC7F        Neighborly text, "neighbor dump requesttable dump request"
3849397       0x3ABCB5        Neighborly text, "neighbor table dump requestghbor table dump request"
3849457       0x3ABCF1        Neighborly text, "neighbor table dump requeste dump request"
3849507       0x3ABD23        Neighborly text, "neighbor table dump requestyer address given"
3849588       0x3ABD74        Neighborly text, "Neighbor entry is now dead"
4048992       0x3DC860        AES Inverse S-Box
4049248       0x3DC960        AES S-Box
4194304       0x400000        ELF, 32-bit LSB MIPS64 shared object, MIPS, version 1 (SYSV)
4364672       0x429980        Flattened device tree, size: 10101 bytes, version: 17
4377916       0x42CD3C        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4378032       0x42CDB0        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4378156       0x42CE2C        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4378272       0x42CEA0        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
-rw-r--r-- 1 root root 10109 2025-10-01 15:46:34.489662332 +0100 429980.dtb
-rw-r--r-- 1 root root   492 2025-10-01 15:46:34.463662312 +0100 42cd3c.cpio
```

