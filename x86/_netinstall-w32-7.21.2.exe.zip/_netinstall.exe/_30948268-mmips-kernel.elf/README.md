### 30948268-mmips-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit LSB executable, MIPS, MIPS32 rel2 version 1 (SYSV), statically linked, BuildID[sha1]=357c889c4c95ce299c88bf5dbe8c1d6873b762f0, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit LSB MIPS64 executable, MIPS, version 1 (SYSV)
1689962       0x19C96A        PGP RSA encrypted session key - keyid: 801000 C2 RSA Encrypt-Only 1024b
4005676       0x3D1F2C        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
4178880       0x3FC3C0        CRC32 polynomial table, little endian
4187348       0x3FE4D4        xz compressed data
4238084       0x40AB04        Unix path: /lib/firmware/updates/5.6.3
4281004       0x4152AC        Unix path: /sys/firmware/devicetree/base
4284633       0x4160D9        Unix path: /sys/firmware/fdt': CRC check failed
4300853       0x41A035        Neighborly text, "neighbor table overflow!tics"
4301237       0x41A1B5        Neighborly text, "neighbor get requestrequest"
4301287       0x41A1E7        Neighborly text, "neighbor get requestget request"
4301341       0x41A21D        Neighborly text, "neighbor get request request"
4301392       0x41A250        Neighborly text, "neighbor get requestet request"
4301445       0x41A285        Neighborly text, "neighbor get requestNeighbour entry not found"
4301487       0x41A2AF        Neighborly text, "neighbor get requestified"
4301669       0x41A365        Neighborly text, "neighbor dump requestp request"
4301720       0x41A398        Neighborly text, "neighbor dump requestump request"
4301773       0x41A3CD        Neighborly text, "neighbor dump request"
4301815       0x41A3F7        Neighborly text, "neighbor dump requesttable dump request"
4301869       0x41A42D        Neighborly text, "neighbor table dump requestghbor table dump request"
4301929       0x41A469        Neighborly text, "neighbor table dump requeste dump request"
4301979       0x41A49B        Neighborly text, "neighbor table dump requestyer address given"
4302060       0x41A4EC        Neighborly text, "Neighbor entry is now dead"
4377704       0x42CC68        Neighborly text, "NeighborSolicitsp6InMsgs"
4377724       0x42CC7C        Neighborly text, "NeighborAdvertisementsrs"
4520032       0x44F860        AES Inverse S-Box
4520288       0x44F960        AES S-Box
4681728       0x477000        ELF, 32-bit LSB MIPS64 shared object, MIPS, version 1 (SYSV)
4857792       0x4A1FC0        Flattened device tree, size: 10039 bytes, version: 17
4871016       0x4A5368        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4871132       0x4A53DC        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4871256       0x4A5458        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4871372       0x4A54CC        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4901441       0x4ACA41        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 1228
-rw-r--r-- 1 root root   10047 2026-06-08 15:58:08.732843278 +0100 4a1fc0.dtb
-rw-r--r-- 1 root root     492 2026-06-08 15:58:08.706843205 +0100 4a5368.cpio
-rw-r--r-- 1 root root 1249280 2026-06-08 15:58:09.357845036 +0100 4aca41.cpio
```

