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
2585957       0x277565        Certificate in DER format (x509 v3), header length: 4, sequence length: 4656
2869060       0x2BC744        SHA256 hash constants, little endian
2919953       0x2C8E11        Certificate in DER format (x509 v3), header length: 4, sequence length: 5376
3326586       0x32C27A        bix header, header size: 64 bytes, header CRC: 0x53E31600, created: 1970-01-20 17:18:56, image size: 1491272448 bytes, Data Address: 0x1A0430, Entry Point: 0xA0E11422, data CRC: 0xB3E50200, compression type: none, image name: ""
4221993       0x406C29        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
4222685       0x406EDD        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
7121104       0x6CA8D0        Base64 standard index table
7138880       0x6CEE40        CRC32 polynomial table, little endian
7563429       0x7368A5        Neighborly text, "neighbor table dump requestor table dump request"
7563486       0x7368DE        Neighborly text, "neighbor table dump requestor table dump request"
7563543       0x736917        Neighborly text, "neighbor table dump requestquest"
7563590       0x736946        Neighborly text, "neighbor dump requestp request"
7563641       0x736979        Neighborly text, "neighbor dump request request"
7563691       0x7369AB        Neighborly text, "neighbor dump request"
7563861       0x736A55        Neighborly text, "neighbor dump requestaddress given"
7563883       0x736A6B        Neighborly text, "Neighbor entry is now dead"
7564191       0x736B9F        Neighborly text, "neighbor get requestrequest"
7564241       0x736BD1        Neighborly text, "neighbor get requestequest"
7564290       0x736C02        Neighborly text, "neighbor get requestget request"
7564344       0x736C38        Neighborly text, "neighbor get requestquest"
7564392       0x736C68        Neighborly text, "neighbor get requestest"
7564438       0x736C96        Neighborly text, "neighbor get request specified"
7758074       0x7660FA        xz compressed data
7935963       0x7917DB        Unix path: /lib/firmware/updates/5.6.3
7993159       0x79F747        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
8010894       0x7A3C8E        Unix path: /sys/firmware/devicetree/base
8013131       0x7A454B        Unix path: /sys/firmware/fdt': CRC check failed
8053131       0x7AE18B        Neighborly text, "neighbor table overflow!ics"
8081459       0x7B5033        Neighborly text, "NeighborSolicitss"
8081476       0x7B5044        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
9407552       0x8F8C40        Flattened device tree, size: 5854 bytes, version: 17
9413408       0x8FA320        Flattened device tree, size: 7049 bytes, version: 17
9420480       0x8FBEC0        Flattened device tree, size: 14494 bytes, version: 17
9434976       0x8FF760        Flattened device tree, size: 14653 bytes, version: 17
9449632       0x9030A0        Flattened device tree, size: 13632 bytes, version: 17
9463264       0x9065E0        Flattened device tree, size: 13064 bytes, version: 17
9476352       0x909900        Flattened device tree, size: 13720 bytes, version: 17
9490080       0x90CEA0        Flattened device tree, size: 14008 bytes, version: 17
9504096       0x910560        Flattened device tree, size: 13948 bytes, version: 17
9518048       0x913BE0        Flattened device tree, size: 13841 bytes, version: 17
9531904       0x917200        Flattened device tree, size: 13751 bytes, version: 17
9545664       0x91A7C0        Flattened device tree, size: 13644 bytes, version: 17
9559328       0x91DD20        Flattened device tree, size: 14440 bytes, version: 17
9573792       0x9215A0        Flattened device tree, size: 14504 bytes, version: 17
9588320       0x924E60        Flattened device tree, size: 14376 bytes, version: 17
9602720       0x9286A0        Flattened device tree, size: 14300 bytes, version: 17
9617024       0x92BE80        Flattened device tree, size: 14481 bytes, version: 17
9631520       0x92F720        Flattened device tree, size: 14301 bytes, version: 17
9645824       0x932F00        Flattened device tree, size: 14059 bytes, version: 17
9659904       0x936600        Flattened device tree, size: 14051 bytes, version: 17
9673984       0x939D00        Flattened device tree, size: 14063 bytes, version: 17
9688064       0x93D400        Flattened device tree, size: 14059 bytes, version: 17
9702144       0x940B00        Flattened device tree, size: 13139 bytes, version: 17
9715296       0x943E60        Flattened device tree, size: 53247 bytes, version: 17
9768544       0x950E60        Flattened device tree, size: 55621 bytes, version: 17
9824192       0x95E7C0        Flattened device tree, size: 7966 bytes, version: 17
9838364       0x961F1C        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9838480       0x961F90        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9838604       0x96200C        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9838720       0x962080        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
10206208      0x9BBC00        AES S-Box
10206464      0x9BBD00        AES Inverse S-Box
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 476
-rw-r--r-- 1 root root  5862 2026-06-09 10:34:08.121327653 +0100 8f8c40.dtb
-rw-r--r-- 1 root root  7057 2026-06-09 10:34:08.140328100 +0100 8fa320.dtb
-rw-r--r-- 1 root root 14502 2026-06-09 10:34:08.172328853 +0100 8fbec0.dtb
-rw-r--r-- 1 root root 14661 2026-06-09 10:34:08.204329606 +0100 8ff760.dtb
-rw-r--r-- 1 root root 13640 2026-06-09 10:34:08.234330312 +0100 9030a0.dtb
-rw-r--r-- 1 root root 13072 2026-06-09 10:34:08.264331018 +0100 9065e0.dtb
-rw-r--r-- 1 root root 13728 2026-06-09 10:34:08.294331724 +0100 909900.dtb
-rw-r--r-- 1 root root 14016 2026-06-09 10:34:08.325332453 +0100 90cea0.dtb
-rw-r--r-- 1 root root 13956 2026-06-09 10:34:08.356333182 +0100 910560.dtb
-rw-r--r-- 1 root root 13849 2026-06-09 10:34:08.386333888 +0100 913be0.dtb
-rw-r--r-- 1 root root 13759 2026-06-09 10:34:08.417334618 +0100 917200.dtb
-rw-r--r-- 1 root root 13652 2026-06-09 10:34:08.447335324 +0100 91a7c0.dtb
-rw-r--r-- 1 root root 14448 2026-06-09 10:34:08.479336077 +0100 91dd20.dtb
-rw-r--r-- 1 root root 14512 2026-06-09 10:34:08.511336829 +0100 9215a0.dtb
-rw-r--r-- 1 root root 14384 2026-06-09 10:34:08.543337582 +0100 924e60.dtb
-rw-r--r-- 1 root root 14308 2026-06-09 10:34:08.574338312 +0100 9286a0.dtb
-rw-r--r-- 1 root root 14489 2026-06-09 10:34:08.606339065 +0100 92be80.dtb
-rw-r--r-- 1 root root 14309 2026-06-09 10:34:08.637339794 +0100 92f720.dtb
-rw-r--r-- 1 root root 14067 2026-06-09 10:34:08.669340547 +0100 932f00.dtb
-rw-r--r-- 1 root root 14059 2026-06-09 10:34:08.700341277 +0100 936600.dtb
-rw-r--r-- 1 root root 14071 2026-06-09 10:34:08.731342006 +0100 939d00.dtb
-rw-r--r-- 1 root root 14067 2026-06-09 10:34:08.762342735 +0100 93d400.dtb
-rw-r--r-- 1 root root 13147 2026-06-09 10:34:08.792343441 +0100 940b00.dtb
-rw-r--r-- 1 root root 53255 2026-06-09 10:34:08.887345677 +0100 943e60.dtb
-rw-r--r-- 1 root root 55629 2026-06-09 10:34:08.987348030 +0100 950e60.dtb
-rw-r--r-- 1 root root  7974 2026-06-09 10:34:09.008348524 +0100 95e7c0.dtb
-rw-r--r-- 1 root root   492 2026-06-09 10:34:08.082326735 +0100 961f1c.cpio
```

