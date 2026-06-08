### 222580-ppc-e300-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV), statically linked, BuildID[sha1]=7649e9d04ca51ae0a0c32e8ef7b043c206af8075, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV)
3476928       0x350DC0        CRC32 polynomial table, little endian
3485138       0x352DD2        xz compressed data
3532786       0x35E7F2        Unix path: /lib/firmware/updates/5.6.3
3559936       0x365200        Unix path: /sys/firmware/devicetree/base
3561877       0x365995        Unix path: /sys/firmware/fdt': CRC check failed
3575833       0x369019        Neighborly text, "neighbor table overflow!ics"
3576105       0x369129        Neighborly text, "neighbor get requestNeighbour entry not found"
3576147       0x369153        Neighborly text, "neighbor get requestified"
3576329       0x369209        Neighborly text, "neighbor dump requestp request"
3576380       0x36923C        Neighborly text, "neighbor dump requestump request"
3576433       0x369271        Neighborly text, "neighbor dump requestor neighbor dump request"
3576499       0x3692B3        Neighborly text, "neighbor dump requesttable dump request"
3576553       0x3692E9        Neighborly text, "neighbor table dump requestghbor table dump request"
3576613       0x369325        Neighborly text, "neighbor table dump requeste dump request"
3576663       0x369357        Neighborly text, "neighbor table dump requestyer address given"
3576744       0x3693A8        Neighborly text, "Neighbor entry is now deadalid network address"
3576885       0x369435        Neighborly text, "neighbor get requestrequest"
3576935       0x369467        Neighborly text, "neighbor get requestget request"
3576989       0x36949D        Neighborly text, "neighbor get request request"
3577040       0x3694D0        Neighborly text, "neighbor get request"
3650449       0x37B391        Neighborly text, "NeighborSolicitss"
3650466       0x37B3A2        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
3878128       0x3B2CF0        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
3878244       0x3B2D64        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
3878368       0x3B2DE0        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
3878484       0x3B2E54        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4034560       0x3D9000        ELF, 32-bit MSB shared object, PowerPC or cisco 4500, version 1 (SYSV)
4046848       0x3DC000        AES S-Box
4047104       0x3DC100        AES Inverse S-Box
4081353       0x3E46C9        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 5160
-rw-r--r-- 1 root root     492 2026-06-08 09:58:11.752408835 +0100 3b2cf0.cpio
-rw-r--r-- 1 root root 5327872 2026-06-08 09:58:14.073461634 +0100 3e46c9.cpio
```

