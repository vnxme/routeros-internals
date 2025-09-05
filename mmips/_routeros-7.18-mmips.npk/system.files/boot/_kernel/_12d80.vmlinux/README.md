### 12d80.vmlinux
#### Identification (`file <*>`):
```
data
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
1685110       0x19B676        PGP RSA encrypted session key - keyid: 801000 5 RSA Encrypt-Only 1024b
3628812       0x375F0C        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3801792       0x3A02C0        CRC32 polynomial table, little endian
3810260       0x3A23D4        xz compressed data
3861000       0x3AEA08        Unix path: /lib/firmware/updates/5.6.3
3903824       0x3B9150        Unix path: /sys/firmware/devicetree/base
3907453       0x3B9F7D        Unix path: /sys/firmware/fdt': CRC check failed
3923849       0x3BDF89        Neighborly text, "neighbor table overflow!ork address"
3924061       0x3BE05D        Neighborly text, "neighbor get requestrequest"
3924111       0x3BE08F        Neighborly text, "neighbor get requestget request"
3924165       0x3BE0C5        Neighborly text, "neighbor get request request"
3924216       0x3BE0F8        Neighborly text, "neighbor get requestet request"
3924269       0x3BE12D        Neighborly text, "neighbor get requestNeighbour entry not found"
3924311       0x3BE157        Neighborly text, "neighbor get requestified"
3924493       0x3BE20D        Neighborly text, "neighbor dump requestp request"
3924544       0x3BE240        Neighborly text, "neighbor dump requestump request"
3924597       0x3BE275        Neighborly text, "neighbor dump request"
3924639       0x3BE29F        Neighborly text, "neighbor dump requesttable dump request"
3924693       0x3BE2D5        Neighborly text, "neighbor table dump requestghbor table dump request"
3924753       0x3BE311        Neighborly text, "neighbor table dump requeste dump request"
3924803       0x3BE343        Neighborly text, "neighbor table dump requestyer address given"
3924884       0x3BE394        Neighborly text, "Neighbor entry is now dead"
4122720       0x3EE860        AES Inverse S-Box
4122976       0x3EE960        AES S-Box
4268032       0x412000        ELF, 32-bit LSB MIPS64 shared object, MIPS, version 1 (SYSV)
4439008       0x43BBE0        Flattened device tree, size: 10101 bytes, version: 17
4452276       0x43EFB4        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4452392       0x43F028        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4452516       0x43F0A4        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4452632       0x43F118        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
-rw-r--r-- 1 root root 10109 2025-09-05 18:32:59.695430451 +0100 43bbe0.dtb
-rw-r--r-- 1 root root   492 2025-09-05 18:32:59.669430304 +0100 43efb4.cpio
```

