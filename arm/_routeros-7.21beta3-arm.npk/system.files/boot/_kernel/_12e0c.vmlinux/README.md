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
2585077       0x2771F5        Certificate in DER format (x509 v3), header length: 4, sequence length: 4656
2868372       0x2BC494        SHA256 hash constants, little endian
2919121       0x2C8AD1        Certificate in DER format (x509 v3), header length: 4, sequence length: 5376
3359274       0x33422A        bix header, header size: 64 bytes, header CRC: 0x53E31600, created: 1970-01-20 17:18:56, image size: 1491272448 bytes, Data Address: 0x1A0430, Entry Point: 0xA0E11422, data CRC: 0xB3E50200, compression type: none, image name: ""
4254625       0x40EBA1        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
4255317       0x40EE55        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
7121040       0x6CA890        Base64 standard index table
7138816       0x6CEE00        CRC32 polynomial table, little endian
7564133       0x736B65        Neighborly text, "neighbor table dump requestor table dump request"
7564190       0x736B9E        Neighborly text, "neighbor table dump requestor table dump request"
7564247       0x736BD7        Neighborly text, "neighbor table dump requestquest"
7564294       0x736C06        Neighborly text, "neighbor dump requestp request"
7564345       0x736C39        Neighborly text, "neighbor dump request request"
7564395       0x736C6B        Neighborly text, "neighbor dump request"
7564565       0x736D15        Neighborly text, "neighbor dump requestaddress given"
7564587       0x736D2B        Neighborly text, "Neighbor entry is now dead"
7564895       0x736E5F        Neighborly text, "neighbor get requestrequest"
7564945       0x736E91        Neighborly text, "neighbor get requestequest"
7564994       0x736EC2        Neighborly text, "neighbor get requestget request"
7565048       0x736EF8        Neighborly text, "neighbor get requestquest"
7565096       0x736F28        Neighborly text, "neighbor get requestest"
7565142       0x736F56        Neighborly text, "neighbor get request specified"
7757366       0x765E36        xz compressed data
7940014       0x7927AE        Unix path: /lib/firmware/updates/5.6.3
7997035       0x7A066B        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
8014735       0x7A4B8F        Unix path: /sys/firmware/devicetree/base
8016972       0x7A544C        Unix path: /sys/firmware/fdt': CRC check failed
8056963       0x7AF083        Neighborly text, "neighbor table overflow!ics"
8085364       0x7B5F74        Neighborly text, "NeighborSolicitss"
8085381       0x7B5F85        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
9407552       0x8F8C40        Flattened device tree, size: 5823 bytes, version: 17
9413376       0x8FA300        Flattened device tree, size: 7049 bytes, version: 17
9420448       0x8FBEA0        Flattened device tree, size: 14494 bytes, version: 17
9434944       0x8FF740        Flattened device tree, size: 14611 bytes, version: 17
9449568       0x903060        Flattened device tree, size: 13590 bytes, version: 17
9463168       0x906580        Flattened device tree, size: 13022 bytes, version: 17
9476192       0x909860        Flattened device tree, size: 13678 bytes, version: 17
9489888       0x90CDE0        Flattened device tree, size: 13966 bytes, version: 17
9503872       0x910480        Flattened device tree, size: 13906 bytes, version: 17
9517792       0x913AE0        Flattened device tree, size: 13799 bytes, version: 17
9531616       0x9170E0        Flattened device tree, size: 13709 bytes, version: 17
9545344       0x91A680        Flattened device tree, size: 13602 bytes, version: 17
9558976       0x91DBC0        Flattened device tree, size: 14398 bytes, version: 17
9573376       0x921400        Flattened device tree, size: 14462 bytes, version: 17
9587840       0x924C80        Flattened device tree, size: 14334 bytes, version: 17
9602176       0x928480        Flattened device tree, size: 14258 bytes, version: 17
9616448       0x92BC40        Flattened device tree, size: 14439 bytes, version: 17
9630912       0x92F4C0        Flattened device tree, size: 14259 bytes, version: 17
9645184       0x932C80        Flattened device tree, size: 14017 bytes, version: 17
9659232       0x936360        Flattened device tree, size: 14009 bytes, version: 17
9673248       0x939A20        Flattened device tree, size: 14021 bytes, version: 17
9687296       0x93D100        Flattened device tree, size: 14017 bytes, version: 17
9701344       0x9407E0        Flattened device tree, size: 13097 bytes, version: 17
9714464       0x943B20        Flattened device tree, size: 53247 bytes, version: 17
9767712       0x950B20        Flattened device tree, size: 55621 bytes, version: 17
9823360       0x95E480        Flattened device tree, size: 7966 bytes, version: 17
9837524       0x961BD4        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9837640       0x961C48        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9837764       0x961CC4        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9837880       0x961D38        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
10206208      0x9BBC00        AES S-Box
10206464      0x9BBD00        AES Inverse S-Box
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 476
-rw-r--r-- 1 root root  5831 2025-10-15 15:56:25.410654002 +0100 8f8c40.dtb
-rw-r--r-- 1 root root  7057 2025-10-15 15:56:25.428653996 +0100 8fa300.dtb
-rw-r--r-- 1 root root 14502 2025-10-15 15:56:25.457653986 +0100 8fbea0.dtb
-rw-r--r-- 1 root root 14619 2025-10-15 15:56:25.486653976 +0100 8ff740.dtb
-rw-r--r-- 1 root root 13598 2025-10-15 15:56:25.513653966 +0100 903060.dtb
-rw-r--r-- 1 root root 13030 2025-10-15 15:56:25.540653957 +0100 906580.dtb
-rw-r--r-- 1 root root 13686 2025-10-15 15:56:25.567653947 +0100 909860.dtb
-rw-r--r-- 1 root root 13974 2025-10-15 15:56:25.595653938 +0100 90cde0.dtb
-rw-r--r-- 1 root root 13914 2025-10-15 15:56:25.623653928 +0100 910480.dtb
-rw-r--r-- 1 root root 13807 2025-10-15 15:56:25.651653918 +0100 913ae0.dtb
-rw-r--r-- 1 root root 13717 2025-10-15 15:56:25.678653909 +0100 9170e0.dtb
-rw-r--r-- 1 root root 13610 2025-10-15 15:56:25.706653899 +0100 91a680.dtb
-rw-r--r-- 1 root root 14406 2025-10-15 15:56:25.734653889 +0100 91dbc0.dtb
-rw-r--r-- 1 root root 14470 2025-10-15 15:56:25.763653879 +0100 921400.dtb
-rw-r--r-- 1 root root 14342 2025-10-15 15:56:25.791653869 +0100 924c80.dtb
-rw-r--r-- 1 root root 14266 2025-10-15 15:56:25.820653859 +0100 928480.dtb
-rw-r--r-- 1 root root 14447 2025-10-15 15:56:25.848653849 +0100 92bc40.dtb
-rw-r--r-- 1 root root 14267 2025-10-15 15:56:25.877653839 +0100 92f4c0.dtb
-rw-r--r-- 1 root root 14025 2025-10-15 15:56:25.905653829 +0100 932c80.dtb
-rw-r--r-- 1 root root 14017 2025-10-15 15:56:25.934653819 +0100 936360.dtb
-rw-r--r-- 1 root root 14029 2025-10-15 15:56:25.962653809 +0100 939a20.dtb
-rw-r--r-- 1 root root 14025 2025-10-15 15:56:25.990653800 +0100 93d100.dtb
-rw-r--r-- 1 root root 13105 2025-10-15 15:56:26.017653790 +0100 9407e0.dtb
-rw-r--r-- 1 root root 53255 2025-10-15 15:56:26.104653760 +0100 943b20.dtb
-rw-r--r-- 1 root root 55629 2025-10-15 15:56:26.195653728 +0100 950b20.dtb
-rw-r--r-- 1 root root  7974 2025-10-15 15:56:26.213653722 +0100 95e480.dtb
-rw-r--r-- 1 root root   492 2025-10-15 15:56:25.375654014 +0100 961bd4.cpio
```

