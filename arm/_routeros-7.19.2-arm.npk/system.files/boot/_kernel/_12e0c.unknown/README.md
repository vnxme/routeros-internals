### 12e0c.unknown
#### Identification (`file <*>`):
```
data
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
858336        0xD18E0         SHA256 hash constants, little endian
883456        0xD7B00         SHA256 hash constants, little endian
2553997       0x26F88D        Certificate in DER format (x509 v3), header length: 4, sequence length: 4656
2827640       0x2B2578        SHA256 hash constants, little endian
2878389       0x2BEBB5        Certificate in DER format (x509 v3), header length: 4, sequence length: 5376
3316874       0x329C8A        bix header, header size: 64 bytes, header CRC: 0x53E31600, created: 1970-01-20 17:18:56, image size: 1491272448 bytes, Data Address: 0x1A0430, Entry Point: 0xA0E11422, data CRC: 0xB3E50200, compression type: none, image name: ""
4211437       0x4042ED        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
4212129       0x4045A1        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
7120940       0x6CA82C        Base64 standard index table
7138688       0x6CED80        CRC32 polynomial table, little endian
7562789       0x736625        Neighborly text, "neighbor table dump requestor table dump request"
7562846       0x73665E        Neighborly text, "neighbor table dump requestor table dump request"
7562903       0x736697        Neighborly text, "neighbor table dump requestquest"
7562950       0x7366C6        Neighborly text, "neighbor dump requestp request"
7563001       0x7366F9        Neighborly text, "neighbor dump request request"
7563051       0x73672B        Neighborly text, "neighbor dump request"
7563205       0x7367C5        Neighborly text, "neighbor dump requestaddress given"
7563227       0x7367DB        Neighborly text, "Neighbor entry is now dead"
7563535       0x73690F        Neighborly text, "neighbor get requestrequest"
7563585       0x736941        Neighborly text, "neighbor get requestequest"
7563634       0x736972        Neighborly text, "neighbor get requestget request"
7563688       0x7369A8        Neighborly text, "neighbor get requestquest"
7563736       0x7369D8        Neighborly text, "neighbor get requestest"
7563782       0x736A06        Neighborly text, "neighbor get request specified"
7754664       0x7653A8        xz compressed data
7936948       0x791BB4        Unix path: /lib/firmware/updates/5.6.3
7993688       0x79F958        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
8011347       0x7A3E53        Unix path: /sys/firmware/devicetree/base
8013584       0x7A4710        Unix path: /sys/firmware/fdt': CRC check failed
8053531       0x7AE31B        Neighborly text, "neighbor table overflow!ics"
8081667       0x7B5103        Neighborly text, "NeighborSolicitss"
8081684       0x7B5114        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
9403072       0x8F7AC0        Flattened device tree, size: 5823 bytes, version: 17
9408896       0x8F9180        Flattened device tree, size: 7049 bytes, version: 17
9415968       0x8FAD20        Flattened device tree, size: 14494 bytes, version: 17
9430464       0x8FE5C0        Flattened device tree, size: 14611 bytes, version: 17
9445088       0x901EE0        Flattened device tree, size: 13590 bytes, version: 17
9458688       0x905400        Flattened device tree, size: 13022 bytes, version: 17
9471712       0x9086E0        Flattened device tree, size: 13678 bytes, version: 17
9485408       0x90BC60        Flattened device tree, size: 13966 bytes, version: 17
9499392       0x90F300        Flattened device tree, size: 13906 bytes, version: 17
9513312       0x912960        Flattened device tree, size: 13799 bytes, version: 17
9527136       0x915F60        Flattened device tree, size: 13709 bytes, version: 17
9540864       0x919500        Flattened device tree, size: 13602 bytes, version: 17
9554496       0x91CA40        Flattened device tree, size: 14398 bytes, version: 17
9568896       0x920280        Flattened device tree, size: 14462 bytes, version: 17
9583360       0x923B00        Flattened device tree, size: 14334 bytes, version: 17
9597696       0x927300        Flattened device tree, size: 14258 bytes, version: 17
9611968       0x92AAC0        Flattened device tree, size: 14439 bytes, version: 17
9626432       0x92E340        Flattened device tree, size: 14259 bytes, version: 17
9640704       0x931B00        Flattened device tree, size: 14017 bytes, version: 17
9654752       0x9351E0        Flattened device tree, size: 14009 bytes, version: 17
9668768       0x9388A0        Flattened device tree, size: 14021 bytes, version: 17
9682816       0x93BF80        Flattened device tree, size: 14017 bytes, version: 17
9696864       0x93F660        Flattened device tree, size: 13097 bytes, version: 17
9709984       0x9429A0        Flattened device tree, size: 53247 bytes, version: 17
9763232       0x94F9A0        Flattened device tree, size: 55621 bytes, version: 17
9818880       0x95D300        Flattened device tree, size: 7966 bytes, version: 17
9833032       0x960A48        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9833148       0x960ABC        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9833272       0x960B38        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9833388       0x960BAC        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
10206208      0x9BBC00        AES S-Box
10206464      0x9BBD00        AES Inverse S-Box
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 560
-rw-r--r-- 1 root root  6937 2025-07-06 09:58:22.056060103 +0100 8f7ac0.RB1100AHx4.dts
-rw-r--r-- 1 root root  8608 2025-07-06 09:58:22.079060365 +0100 8f9180.RB4011.dts
-rw-r--r-- 1 root root 17818 2025-07-06 09:58:22.113060752 +0100 8fad20.RB3011.dts
-rw-r--r-- 1 root root 17337 2025-07-06 09:58:22.148061150 +0100 8fe5c0.450Gx4.dts
-rw-r--r-- 1 root root 16038 2025-07-06 09:58:22.181061525 +0100 901ee0.952G_5HacD2HnD.dts
-rw-r--r-- 1 root root 15291 2025-07-06 09:58:22.213061889 +0100 905400.LHG 60G.dts
-rw-r--r-- 1 root root 16117 2025-07-06 09:58:22.246062264 +0100 9086e0.LHG 5ac.dts
-rw-r--r-- 1 root root 16490 2025-07-06 09:58:22.279062640 +0100 90bc60.wAP 2GR ac.dts
-rw-r--r-- 1 root root 16434 2025-07-06 09:58:22.313063026 +0100 90f300.wAP R ac.dts
-rw-r--r-- 1 root root 16234 2025-07-06 09:58:22.346063402 +0100 912960.cAPG 5acD2nD.dts
-rw-r--r-- 1 root root 16150 2025-07-06 09:58:22.379063777 +0100 915f60.wAP PCIE.dts
-rw-r--r-- 1 root root 16040 2025-07-06 09:58:22.412064152 +0100 919500.PL002 5acD2nD.dts
-rw-r--r-- 1 root root 16961 2025-07-06 09:58:22.446064539 +0100 91ca40.LHGB 5HPacD2HPnD.dts
-rw-r--r-- 1 root root 17100 2025-07-06 09:58:22.481064937 +0100 920280.RBD23UGS-5HPacD2HnD.dts
-rw-r--r-- 1 root root 16877 2025-07-06 09:58:22.515065324 +0100 923b00.D53G_5HacD2HnD.dts
-rw-r--r-- 1 root root 16792 2025-07-06 09:58:22.549065711 +0100 927300.D53G_5HacD2HnD.dts
-rw-r--r-- 1 root root 16976 2025-07-06 09:58:22.583066097 +0100 92aac0.D53iGR_5HacD2HnD.dts
-rw-r--r-- 1 root root 16762 2025-07-06 09:58:22.617066484 +0100 92e340.D53iGR_5HacD2HnD.dts
-rw-r--r-- 1 root root 16500 2025-07-06 09:58:22.651066871 +0100 931b00.D24GiR.dts
-rw-r--r-- 1 root root 16482 2025-07-06 09:58:22.685067257 +0100 9351e0.D24GiR.dts
-rw-r--r-- 1 root root 16497 2025-07-06 09:58:22.718067633 +0100 9388a0.D24GiR.dts
-rw-r--r-- 1 root root 16500 2025-07-06 09:58:22.752068019 +0100 93bf80.D24GiR.dts
-rw-r--r-- 1 root root 15384 2025-07-06 09:58:22.784068383 +0100 93f660.LHG 5HnD60ad.dts
-rw-r--r-- 1 root root 63700 2025-07-06 09:58:22.877069441 +0100 9429a0.L41G.dts
-rw-r--r-- 1 root root 66622 2025-07-06 09:58:22.974070544 +0100 94f9a0.L00G.dts
-rw-r--r-- 1 root root  9547 2025-07-06 09:58:22.999070829 +0100 95d300.dts
-rw-r--r-- 1 root root   492 2025-07-06 09:58:22.019059683 +0100 960a48.cpio
```

