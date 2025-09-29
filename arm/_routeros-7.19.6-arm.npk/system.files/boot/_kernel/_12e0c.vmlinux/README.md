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
2554125       0x26F90D        Certificate in DER format (x509 v3), header length: 4, sequence length: 4656
2827768       0x2B25F8        SHA256 hash constants, little endian
2878517       0x2BEC35        Certificate in DER format (x509 v3), header length: 4, sequence length: 5376
3317002       0x329D0A        bix header, header size: 64 bytes, header CRC: 0x53E31600, created: 1970-01-20 17:18:56, image size: 1491272448 bytes, Data Address: 0x1A0430, Entry Point: 0xA0E11422, data CRC: 0xB3E50200, compression type: none, image name: ""
4211565       0x40436D        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
4212257       0x404621        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
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
total 476
-rw-r--r-- 1 root root  5831 2025-09-29 14:40:12.341572785 +0100 8f7ac0.dtb
-rw-r--r-- 1 root root  7057 2025-09-29 14:40:12.359572949 +0100 8f9180.dtb
-rw-r--r-- 1 root root 14502 2025-09-29 14:40:12.388573213 +0100 8fad20.dtb
-rw-r--r-- 1 root root 14619 2025-09-29 14:40:12.418573487 +0100 8fe5c0.dtb
-rw-r--r-- 1 root root 13598 2025-09-29 14:40:12.445573733 +0100 901ee0.dtb
-rw-r--r-- 1 root root 13030 2025-09-29 14:40:12.472573979 +0100 905400.dtb
-rw-r--r-- 1 root root 13686 2025-09-29 14:40:12.500574234 +0100 9086e0.dtb
-rw-r--r-- 1 root root 13974 2025-09-29 14:40:12.529574498 +0100 90bc60.dtb
-rw-r--r-- 1 root root 13914 2025-09-29 14:40:12.557574753 +0100 90f300.dtb
-rw-r--r-- 1 root root 13807 2025-09-29 14:40:12.585575008 +0100 912960.dtb
-rw-r--r-- 1 root root 13717 2025-09-29 14:40:12.613575263 +0100 915f60.dtb
-rw-r--r-- 1 root root 13610 2025-09-29 14:40:12.640575509 +0100 919500.dtb
-rw-r--r-- 1 root root 14406 2025-09-29 14:40:12.669575773 +0100 91ca40.dtb
-rw-r--r-- 1 root root 14470 2025-09-29 14:40:12.698576038 +0100 920280.dtb
-rw-r--r-- 1 root root 14342 2025-09-29 14:40:12.727576302 +0100 923b00.dtb
-rw-r--r-- 1 root root 14266 2025-09-29 14:40:12.756576566 +0100 927300.dtb
-rw-r--r-- 1 root root 14447 2025-09-29 14:40:12.785576830 +0100 92aac0.dtb
-rw-r--r-- 1 root root 14267 2025-09-29 14:40:12.814577095 +0100 92e340.dtb
-rw-r--r-- 1 root root 14025 2025-09-29 14:40:12.842577350 +0100 931b00.dtb
-rw-r--r-- 1 root root 14017 2025-09-29 14:40:12.871577614 +0100 9351e0.dtb
-rw-r--r-- 1 root root 14029 2025-09-29 14:40:12.899577869 +0100 9388a0.dtb
-rw-r--r-- 1 root root 14025 2025-09-29 14:40:12.927578124 +0100 93bf80.dtb
-rw-r--r-- 1 root root 13105 2025-09-29 14:40:12.954578370 +0100 93f660.dtb
-rw-r--r-- 1 root root 53255 2025-09-29 14:40:13.042579172 +0100 9429a0.dtb
-rw-r--r-- 1 root root 55629 2025-09-29 14:40:13.134580010 +0100 94f9a0.dtb
-rw-r--r-- 1 root root  7974 2025-09-29 14:40:13.154580192 +0100 95d300.dtb
-rw-r--r-- 1 root root   492 2025-09-29 14:40:12.306572466 +0100 960a48.cpio
```

