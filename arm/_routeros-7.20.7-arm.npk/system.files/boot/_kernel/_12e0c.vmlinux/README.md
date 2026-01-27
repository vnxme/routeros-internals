### 12e0c.vmlinux
#### Identification (`file <*>`):
```
data
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
858464        0xD1960         SHA256 hash constants, little endian
883584        0xD7B80         SHA256 hash constants, little endian
2585225       0x277289        Certificate in DER format (x509 v3), header length: 4, sequence length: 4656
2868516       0x2BC524        SHA256 hash constants, little endian
2919265       0x2C8B61        Certificate in DER format (x509 v3), header length: 4, sequence length: 5376
3358546       0x333F52        bix header, header size: 64 bytes, header CRC: 0x53E31600, created: 1970-01-20 17:18:56, image size: 1491272448 bytes, Data Address: 0x1A0430, Entry Point: 0xA0E11422, data CRC: 0xB3E50200, compression type: none, image name: ""
4253897       0x40E8C9        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
4254589       0x40EB7D        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
7121040       0x6CA890        Base64 standard index table
7138816       0x6CEE00        CRC32 polynomial table, little endian
7563557       0x736925        Neighborly text, "neighbor table dump requestor table dump request"
7563614       0x73695E        Neighborly text, "neighbor table dump requestor table dump request"
7563671       0x736997        Neighborly text, "neighbor table dump requestquest"
7563718       0x7369C6        Neighborly text, "neighbor dump requestp request"
7563769       0x7369F9        Neighborly text, "neighbor dump request request"
7563819       0x736A2B        Neighborly text, "neighbor dump request"
7563989       0x736AD5        Neighborly text, "neighbor dump requestaddress given"
7564011       0x736AEB        Neighborly text, "Neighbor entry is now dead"
7564319       0x736C1F        Neighborly text, "neighbor get requestrequest"
7564369       0x736C51        Neighborly text, "neighbor get requestequest"
7564418       0x736C82        Neighborly text, "neighbor get requestget request"
7564472       0x736CB8        Neighborly text, "neighbor get requestquest"
7564520       0x736CE8        Neighborly text, "neighbor get requestest"
7564566       0x736D16        Neighborly text, "neighbor get request specified"
7756822       0x765C16        xz compressed data
7939414       0x792556        Unix path: /lib/firmware/updates/5.6.3
7996371       0x7A03D3        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
8014039       0x7A48D7        Unix path: /sys/firmware/devicetree/base
8016276       0x7A5194        Unix path: /sys/firmware/fdt': CRC check failed
8056267       0x7AEDCB        Neighborly text, "neighbor table overflow!ics"
8084423       0x7B5BC7        Neighborly text, "NeighborSolicitss"
8084440       0x7B5BD8        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
9407360       0x8F8B80        Flattened device tree, size: 5823 bytes, version: 17
9413184       0x8FA240        Flattened device tree, size: 7049 bytes, version: 17
9420256       0x8FBDE0        Flattened device tree, size: 14494 bytes, version: 17
9434752       0x8FF680        Flattened device tree, size: 14653 bytes, version: 17
9449408       0x902FC0        Flattened device tree, size: 13632 bytes, version: 17
9463040       0x906500        Flattened device tree, size: 13064 bytes, version: 17
9476128       0x909820        Flattened device tree, size: 13720 bytes, version: 17
9489856       0x90CDC0        Flattened device tree, size: 14008 bytes, version: 17
9503872       0x910480        Flattened device tree, size: 13948 bytes, version: 17
9517824       0x913B00        Flattened device tree, size: 13841 bytes, version: 17
9531680       0x917120        Flattened device tree, size: 13751 bytes, version: 17
9545440       0x91A6E0        Flattened device tree, size: 13644 bytes, version: 17
9559104       0x91DC40        Flattened device tree, size: 14440 bytes, version: 17
9573568       0x9214C0        Flattened device tree, size: 14504 bytes, version: 17
9588096       0x924D80        Flattened device tree, size: 14376 bytes, version: 17
9602496       0x9285C0        Flattened device tree, size: 14300 bytes, version: 17
9616800       0x92BDA0        Flattened device tree, size: 14481 bytes, version: 17
9631296       0x92F640        Flattened device tree, size: 14301 bytes, version: 17
9645600       0x932E20        Flattened device tree, size: 14059 bytes, version: 17
9659680       0x936520        Flattened device tree, size: 14051 bytes, version: 17
9673760       0x939C20        Flattened device tree, size: 14063 bytes, version: 17
9687840       0x93D320        Flattened device tree, size: 14059 bytes, version: 17
9701920       0x940A20        Flattened device tree, size: 13139 bytes, version: 17
9715072       0x943D80        Flattened device tree, size: 53247 bytes, version: 17
9768320       0x950D80        Flattened device tree, size: 55621 bytes, version: 17
9823968       0x95E6E0        Flattened device tree, size: 7966 bytes, version: 17
9838132       0x961E34        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9838248       0x961EA8        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9838372       0x961F24        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9838488       0x961F98        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
10206208      0x9BBC00        AES S-Box
10206464      0x9BBD00        AES Inverse S-Box
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 476
-rw-r--r-- 1 root root  5831 2026-01-27 11:38:22.422505388 +0000 8f8b80.dtb
-rw-r--r-- 1 root root  7057 2026-01-27 11:38:22.439505201 +0000 8fa240.dtb
-rw-r--r-- 1 root root 14502 2026-01-27 11:38:22.468504882 +0000 8fbde0.dtb
-rw-r--r-- 1 root root 14661 2026-01-27 11:38:22.497504564 +0000 8ff680.dtb
-rw-r--r-- 1 root root 13640 2026-01-27 11:38:22.526504245 +0000 902fc0.dtb
-rw-r--r-- 1 root root 13072 2026-01-27 11:38:22.552503959 +0000 906500.dtb
-rw-r--r-- 1 root root 13728 2026-01-27 11:38:22.580503651 +0000 909820.dtb
-rw-r--r-- 1 root root 14016 2026-01-27 11:38:22.609503332 +0000 90cdc0.dtb
-rw-r--r-- 1 root root 13956 2026-01-27 11:38:22.637503024 +0000 910480.dtb
-rw-r--r-- 1 root root 13849 2026-01-27 11:38:22.665502716 +0000 913b00.dtb
-rw-r--r-- 1 root root 13759 2026-01-27 11:38:22.692502419 +0000 917120.dtb
-rw-r--r-- 1 root root 13652 2026-01-27 11:38:22.720502112 +0000 91a6e0.dtb
-rw-r--r-- 1 root root 14448 2026-01-27 11:38:22.749501793 +0000 91dc40.dtb
-rw-r--r-- 1 root root 14512 2026-01-27 11:38:22.778501474 +0000 9214c0.dtb
-rw-r--r-- 1 root root 14384 2026-01-27 11:38:22.807501155 +0000 924d80.dtb
-rw-r--r-- 1 root root 14308 2026-01-27 11:38:22.837500825 +0000 9285c0.dtb
-rw-r--r-- 1 root root 14489 2026-01-27 11:38:22.866500506 +0000 92bda0.dtb
-rw-r--r-- 1 root root 14309 2026-01-27 11:38:22.894500198 +0000 92f640.dtb
-rw-r--r-- 1 root root 14067 2026-01-27 11:38:22.923499880 +0000 932e20.dtb
-rw-r--r-- 1 root root 14059 2026-01-27 11:38:22.951499572 +0000 936520.dtb
-rw-r--r-- 1 root root 14071 2026-01-27 11:38:22.979499264 +0000 939c20.dtb
-rw-r--r-- 1 root root 14067 2026-01-27 11:38:23.008498945 +0000 93d320.dtb
-rw-r--r-- 1 root root 13147 2026-01-27 11:38:23.035498648 +0000 940a20.dtb
-rw-r--r-- 1 root root 53255 2026-01-27 11:38:23.121497702 +0000 943d80.dtb
-rw-r--r-- 1 root root 55629 2026-01-27 11:38:23.212496702 +0000 950d80.dtb
-rw-r--r-- 1 root root  7974 2026-01-27 11:38:23.232496482 +0000 95e6e0.dtb
-rw-r--r-- 1 root root   492 2026-01-27 11:38:22.386505784 +0000 961e34.cpio
```

