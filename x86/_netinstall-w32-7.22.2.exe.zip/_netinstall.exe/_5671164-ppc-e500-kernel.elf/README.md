### 5671164-ppc-e500-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV), statically linked, BuildID[sha1]=c42d89585d9f5971fea0853ab577489f09e4c4bb, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV)
4014208       0x3D4080        CRC32 polynomial table, little endian
4022414       0x3D608E        xz compressed data
4060726       0x3DF636        Unix path: /lib/firmware/updates/5.6.3-e500
4080295       0x3E42A7        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C72-16-31, rev 0x2e3d8000, size 1
4080327       0x3E42C7        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C7A-16-20, rev 0x2e3d8000, size 2048
4080455       0x3E4347        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C9B-14-30, rev 0x2e3d8000, size 33
4128935       0x3F00A7        Unix path: /sys/firmware/devicetree/base
4131123       0x3F0933        Unix path: /sys/firmware/fdt': CRC check failed
4150481       0x3F54D1        Neighborly text, "neighbor table overflow!ics"
4150753       0x3F55E1        Neighborly text, "neighbor get requestNeighbour entry not found"
4150795       0x3F560B        Neighborly text, "neighbor get requestified"
4150977       0x3F56C1        Neighborly text, "neighbor dump requestp request"
4151028       0x3F56F4        Neighborly text, "neighbor dump requestump request"
4151081       0x3F5729        Neighborly text, "neighbor dump requestor neighbor dump request"
4151147       0x3F576B        Neighborly text, "neighbor dump requesttable dump request"
4151201       0x3F57A1        Neighborly text, "neighbor table dump requestghbor table dump request"
4151261       0x3F57DD        Neighborly text, "neighbor table dump requeste dump request"
4151311       0x3F580F        Neighborly text, "neighbor table dump requestyer address given"
4151392       0x3F5860        Neighborly text, "Neighbor entry is now deadalid network address"
4151533       0x3F58ED        Neighborly text, "neighbor get requestrequest"
4151583       0x3F591F        Neighborly text, "neighbor get requestget request"
4151637       0x3F5955        Neighborly text, "neighbor get request request"
4151688       0x3F5988        Neighborly text, "neighbor get request"
4224425       0x4075A9        Neighborly text, "NeighborSolicitss"
4224442       0x4075BA        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
4474548       0x4446B4        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4474664       0x444728        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4474788       0x4447A4        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4474904       0x444818        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4681728       0x477000        ELF, 32-bit MSB shared object, PowerPC or cisco 4500, version 1 (SYSV)
4694016       0x47A000        AES S-Box
4694272       0x47A100        AES Inverse S-Box
4729945       0x482C59        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 5144
-rw-r--r-- 1 root root     492 2026-05-02 20:32:49.811614330 +0100 4446b4.cpio
-rw-r--r-- 1 root root 5319680 2026-05-02 20:32:51.881615762 +0100 482c59.cpio
```

