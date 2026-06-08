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
2585381       0x277325        Certificate in DER format (x509 v3), header length: 4, sequence length: 4656
2868676       0x2BC5C4        SHA256 hash constants, little endian
2919425       0x2C8C01        Certificate in DER format (x509 v3), header length: 4, sequence length: 5376
3359602       0x334372        bix header, header size: 64 bytes, header CRC: 0x53E31600, created: 1970-01-20 17:18:56, image size: 1491272448 bytes, Data Address: 0x1A0430, Entry Point: 0xA0E11422, data CRC: 0xB3E50200, compression type: none, image name: ""
4254953       0x40ECE9        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
4255645       0x40EF9D        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
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
7758686       0x76635E        xz compressed data
7941334       0x792CD6        Unix path: /lib/firmware/updates/5.6.3
7998355       0x7A0B93        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
8016055       0x7A50B7        Unix path: /sys/firmware/devicetree/base
8018292       0x7A5974        Unix path: /sys/firmware/fdt': CRC check failed
8058283       0x7AF5AB        Neighborly text, "neighbor table overflow!ics"
8086684       0x7B649C        Neighborly text, "NeighborSolicitss"
8086701       0x7B64AD        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
9407552       0x8F8C40        Flattened device tree, size: 5823 bytes, version: 17
9413376       0x8FA300        Flattened device tree, size: 7049 bytes, version: 17
9420448       0x8FBEA0        Flattened device tree, size: 14494 bytes, version: 17
9434944       0x8FF740        Flattened device tree, size: 14653 bytes, version: 17
9449600       0x903080        Flattened device tree, size: 13632 bytes, version: 17
9463232       0x9065C0        Flattened device tree, size: 13064 bytes, version: 17
9476320       0x9098E0        Flattened device tree, size: 13720 bytes, version: 17
9490048       0x90CE80        Flattened device tree, size: 14008 bytes, version: 17
9504064       0x910540        Flattened device tree, size: 13948 bytes, version: 17
9518016       0x913BC0        Flattened device tree, size: 13841 bytes, version: 17
9531872       0x9171E0        Flattened device tree, size: 13751 bytes, version: 17
9545632       0x91A7A0        Flattened device tree, size: 13644 bytes, version: 17
9559296       0x91DD00        Flattened device tree, size: 14440 bytes, version: 17
9573760       0x921580        Flattened device tree, size: 14504 bytes, version: 17
9588288       0x924E40        Flattened device tree, size: 14376 bytes, version: 17
9602688       0x928680        Flattened device tree, size: 14300 bytes, version: 17
9616992       0x92BE60        Flattened device tree, size: 14481 bytes, version: 17
9631488       0x92F700        Flattened device tree, size: 14301 bytes, version: 17
9645792       0x932EE0        Flattened device tree, size: 14059 bytes, version: 17
9659872       0x9365E0        Flattened device tree, size: 14051 bytes, version: 17
9673952       0x939CE0        Flattened device tree, size: 14063 bytes, version: 17
9688032       0x93D3E0        Flattened device tree, size: 14059 bytes, version: 17
9702112       0x940AE0        Flattened device tree, size: 13139 bytes, version: 17
9715264       0x943E40        Flattened device tree, size: 53247 bytes, version: 17
9768512       0x950E40        Flattened device tree, size: 55621 bytes, version: 17
9824160       0x95E7A0        Flattened device tree, size: 7966 bytes, version: 17
9838324       0x961EF4        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9838440       0x961F68        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9838564       0x961FE4        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9838680       0x962058        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
10206208      0x9BBC00        AES S-Box
10206464      0x9BBD00        AES Inverse S-Box
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 476
-rw-r--r-- 1 root root  5831 2026-06-08 15:58:57.387970003 +0100 8f8c40.dtb
-rw-r--r-- 1 root root  7057 2026-06-08 15:58:57.405970052 +0100 8fa300.dtb
-rw-r--r-- 1 root root 14502 2026-06-08 15:58:57.435970134 +0100 8fbea0.dtb
-rw-r--r-- 1 root root 14661 2026-06-08 15:58:57.464970213 +0100 8ff740.dtb
-rw-r--r-- 1 root root 13640 2026-06-08 15:58:57.492970289 +0100 903080.dtb
-rw-r--r-- 1 root root 13072 2026-06-08 15:58:57.520970365 +0100 9065c0.dtb
-rw-r--r-- 1 root root 13728 2026-06-08 15:58:57.548970441 +0100 9098e0.dtb
-rw-r--r-- 1 root root 14016 2026-06-08 15:58:57.576970518 +0100 90ce80.dtb
-rw-r--r-- 1 root root 13956 2026-06-08 15:58:57.605970597 +0100 910540.dtb
-rw-r--r-- 1 root root 13849 2026-06-08 15:58:57.633970673 +0100 913bc0.dtb
-rw-r--r-- 1 root root 13759 2026-06-08 15:58:57.661970749 +0100 9171e0.dtb
-rw-r--r-- 1 root root 13652 2026-06-08 15:58:57.689970825 +0100 91a7a0.dtb
-rw-r--r-- 1 root root 14448 2026-06-08 15:58:57.719970907 +0100 91dd00.dtb
-rw-r--r-- 1 root root 14512 2026-06-08 15:58:57.748970986 +0100 921580.dtb
-rw-r--r-- 1 root root 14384 2026-06-08 15:58:57.777971065 +0100 924e40.dtb
-rw-r--r-- 1 root root 14308 2026-06-08 15:58:57.806971144 +0100 928680.dtb
-rw-r--r-- 1 root root 14489 2026-06-08 15:58:57.836971226 +0100 92be60.dtb
-rw-r--r-- 1 root root 14309 2026-06-08 15:58:57.864971302 +0100 92f700.dtb
-rw-r--r-- 1 root root 14067 2026-06-08 15:58:57.893971381 +0100 932ee0.dtb
-rw-r--r-- 1 root root 14059 2026-06-08 15:58:57.921971457 +0100 9365e0.dtb
-rw-r--r-- 1 root root 14071 2026-06-08 15:58:57.950971536 +0100 939ce0.dtb
-rw-r--r-- 1 root root 14067 2026-06-08 15:58:57.978971613 +0100 93d3e0.dtb
-rw-r--r-- 1 root root 13147 2026-06-08 15:58:58.005971686 +0100 940ae0.dtb
-rw-r--r-- 1 root root 53255 2026-06-08 15:58:58.092971923 +0100 943e40.dtb
-rw-r--r-- 1 root root 55629 2026-06-08 15:58:58.183972171 +0100 950e40.dtb
-rw-r--r-- 1 root root  7974 2026-06-08 15:58:58.203972226 +0100 95e7a0.dtb
-rw-r--r-- 1 root root   492 2026-06-08 15:58:57.352969907 +0100 961ef4.cpio
```

