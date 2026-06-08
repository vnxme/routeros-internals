### 12d80.vmlinux
#### Identification (`file <*>`):
```
data
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
1685866       0x19B96A        PGP RSA encrypted session key - keyid: 801000 C2 RSA Encrypt-Only 1024b
4001580       0x3D0F2C        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
4174784       0x3FB3C0        CRC32 polynomial table, little endian
4183252       0x3FD4D4        xz compressed data
4233988       0x409B04        Unix path: /lib/firmware/updates/5.6.3
4276908       0x4142AC        Unix path: /sys/firmware/devicetree/base
4280537       0x4150D9        Unix path: /sys/firmware/fdt': CRC check failed
4296757       0x419035        Neighborly text, "neighbor table overflow!tics"
4297141       0x4191B5        Neighborly text, "neighbor get requestrequest"
4297191       0x4191E7        Neighborly text, "neighbor get requestget request"
4297245       0x41921D        Neighborly text, "neighbor get request request"
4297296       0x419250        Neighborly text, "neighbor get requestet request"
4297349       0x419285        Neighborly text, "neighbor get requestNeighbour entry not found"
4297391       0x4192AF        Neighborly text, "neighbor get requestified"
4297573       0x419365        Neighborly text, "neighbor dump requestp request"
4297624       0x419398        Neighborly text, "neighbor dump requestump request"
4297677       0x4193CD        Neighborly text, "neighbor dump request"
4297719       0x4193F7        Neighborly text, "neighbor dump requesttable dump request"
4297773       0x41942D        Neighborly text, "neighbor table dump requestghbor table dump request"
4297833       0x419469        Neighborly text, "neighbor table dump requeste dump request"
4297883       0x41949B        Neighborly text, "neighbor table dump requestyer address given"
4297964       0x4194EC        Neighborly text, "Neighbor entry is now dead"
4373608       0x42BC68        Neighborly text, "NeighborSolicitsp6InMsgs"
4373628       0x42BC7C        Neighborly text, "NeighborAdvertisementsrs"
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
-rw-r--r-- 1 root root 10047 2026-06-08 15:59:10.835777393 +0100 4a0fc0.dtb
-rw-r--r-- 1 root root   492 2026-06-08 15:59:10.819777352 +0100 4a4368.cpio
```

