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
2869252       0x2BC804        SHA256 hash constants, little endian
2920145       0x2C8ED1        Certificate in DER format (x509 v3), header length: 4, sequence length: 5376
3326778       0x32C33A        bix header, header size: 64 bytes, header CRC: 0x53E31600, created: 1970-01-20 17:18:56, image size: 1491272448 bytes, Data Address: 0x1A0430, Entry Point: 0xA0E11422, data CRC: 0xB3E50200, compression type: none, image name: ""
4222129       0x406CB1        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
4222821       0x406F65        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
7121040       0x6CA890        Base64 standard index table
7138816       0x6CEE00        CRC32 polynomial table, little endian
7563365       0x736865        Neighborly text, "neighbor table dump requestor table dump request"
7563422       0x73689E        Neighborly text, "neighbor table dump requestor table dump request"
7563479       0x7368D7        Neighborly text, "neighbor table dump requestquest"
7563526       0x736906        Neighborly text, "neighbor dump requestp request"
7563577       0x736939        Neighborly text, "neighbor dump request request"
7563627       0x73696B        Neighborly text, "neighbor dump request"
7563797       0x736A15        Neighborly text, "neighbor dump requestaddress given"
7563819       0x736A2B        Neighborly text, "Neighbor entry is now dead"
7564127       0x736B5F        Neighborly text, "neighbor get requestrequest"
7564177       0x736B91        Neighborly text, "neighbor get requestequest"
7564226       0x736BC2        Neighborly text, "neighbor get requestget request"
7564280       0x736BF8        Neighborly text, "neighbor get requestquest"
7564328       0x736C28        Neighborly text, "neighbor get requestest"
7564374       0x736C56        Neighborly text, "neighbor get request specified"
7757930       0x76606A        xz compressed data
7935819       0x79174B        Unix path: /lib/firmware/updates/5.6.3
7993015       0x79F6B7        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
8010737       0x7A3BF1        Unix path: /sys/firmware/devicetree/base
8012974       0x7A44AE        Unix path: /sys/firmware/fdt': CRC check failed
8052971       0x7AE0EB        Neighborly text, "neighbor table overflow!ics"
8081299       0x7B4F93        Neighborly text, "NeighborSolicitss"
8081316       0x7B4FA4        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
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
9838332       0x961EFC        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9838448       0x961F70        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9838572       0x961FEC        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9838688       0x962060        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
10206208      0x9BBC00        AES S-Box
10206464      0x9BBD00        AES Inverse S-Box
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 476
-rw-r--r-- 1 root root  5831 2026-05-02 20:33:14.773636159 +0100 8f8c40.dtb
-rw-r--r-- 1 root root  7057 2026-05-02 20:33:14.790636173 +0100 8fa300.dtb
-rw-r--r-- 1 root root 14502 2026-05-02 20:33:14.819636197 +0100 8fbea0.dtb
-rw-r--r-- 1 root root 14661 2026-05-02 20:33:14.848636221 +0100 8ff740.dtb
-rw-r--r-- 1 root root 13640 2026-05-02 20:33:14.876636244 +0100 903080.dtb
-rw-r--r-- 1 root root 13072 2026-05-02 20:33:14.902636265 +0100 9065c0.dtb
-rw-r--r-- 1 root root 13728 2026-05-02 20:33:14.930636289 +0100 9098e0.dtb
-rw-r--r-- 1 root root 14016 2026-05-02 20:33:14.958636312 +0100 90ce80.dtb
-rw-r--r-- 1 root root 13956 2026-05-02 20:33:14.986636335 +0100 910540.dtb
-rw-r--r-- 1 root root 13849 2026-05-02 20:33:15.014636358 +0100 913bc0.dtb
-rw-r--r-- 1 root root 13759 2026-05-02 20:33:15.041636380 +0100 9171e0.dtb
-rw-r--r-- 1 root root 13652 2026-05-02 20:33:15.069636403 +0100 91a7a0.dtb
-rw-r--r-- 1 root root 14448 2026-05-02 20:33:15.098636427 +0100 91dd00.dtb
-rw-r--r-- 1 root root 14512 2026-05-02 20:33:15.127636451 +0100 921580.dtb
-rw-r--r-- 1 root root 14384 2026-05-02 20:33:15.155636474 +0100 924e40.dtb
-rw-r--r-- 1 root root 14308 2026-05-02 20:33:15.184636498 +0100 928680.dtb
-rw-r--r-- 1 root root 14489 2026-05-02 20:33:15.213636522 +0100 92be60.dtb
-rw-r--r-- 1 root root 14309 2026-05-02 20:33:15.241636545 +0100 92f700.dtb
-rw-r--r-- 1 root root 14067 2026-05-02 20:33:15.270636569 +0100 932ee0.dtb
-rw-r--r-- 1 root root 14059 2026-05-02 20:33:15.298636592 +0100 9365e0.dtb
-rw-r--r-- 1 root root 14071 2026-05-02 20:33:15.326636615 +0100 939ce0.dtb
-rw-r--r-- 1 root root 14067 2026-05-02 20:33:15.355636639 +0100 93d3e0.dtb
-rw-r--r-- 1 root root 13147 2026-05-02 20:33:15.381636660 +0100 940ae0.dtb
-rw-r--r-- 1 root root 53255 2026-05-02 20:33:15.469636733 +0100 943e40.dtb
-rw-r--r-- 1 root root 55629 2026-05-02 20:33:15.560636808 +0100 950e40.dtb
-rw-r--r-- 1 root root  7974 2026-05-02 20:33:15.580636824 +0100 95e7a0.dtb
-rw-r--r-- 1 root root   492 2026-05-02 20:33:14.738636130 +0100 961efc.cpio
```

