### 12e0c.vmlinux
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
2554137       0x26F919        Certificate in DER format (x509 v3), header length: 4, sequence length: 4656
2827776       0x2B2600        SHA256 hash constants, little endian
2878493       0x2BEC1D        Certificate in DER format (x509 v3), header length: 4, sequence length: 5376
3316274       0x329A32        bix header, header size: 64 bytes, header CRC: 0x53E31600, created: 1970-01-20 17:18:56, image size: 1491272448 bytes, Data Address: 0x1A0430, Entry Point: 0xA0E11422, data CRC: 0xB3E50200, compression type: none, image name: ""
4210801       0x404071        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
4211493       0x404325        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
7120940       0x6CA82C        Base64 standard index table
7138688       0x6CED80        CRC32 polynomial table, little endian
7562469       0x7364E5        Neighborly text, "neighbor table dump requestor table dump request"
7562526       0x73651E        Neighborly text, "neighbor table dump requestor table dump request"
7562583       0x736557        Neighborly text, "neighbor table dump requestquest"
7562630       0x736586        Neighborly text, "neighbor dump requestp request"
7562681       0x7365B9        Neighborly text, "neighbor dump request request"
7562731       0x7365EB        Neighborly text, "neighbor dump request"
7562885       0x736685        Neighborly text, "neighbor dump requestaddress given"
7562907       0x73669B        Neighborly text, "Neighbor entry is now dead"
7563215       0x7367CF        Neighborly text, "neighbor get requestrequest"
7563265       0x736801        Neighborly text, "neighbor get requestequest"
7563314       0x736832        Neighborly text, "neighbor get requestget request"
7563368       0x736868        Neighborly text, "neighbor get requestquest"
7563416       0x736898        Neighborly text, "neighbor get requestest"
7563462       0x7368C6        Neighborly text, "neighbor get request specified"
7754352       0x765270        xz compressed data
7936573       0x791A3D        Unix path: /lib/firmware/updates/5.6.3
7993243       0x79F79B        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
8010920       0x7A3CA8        Unix path: /sys/firmware/devicetree/base
8013157       0x7A4565        Unix path: /sys/firmware/fdt': CRC check failed
8053103       0x7AE16F        Neighborly text, "neighbor table overflow!ics"
8081011       0x7B4E73        Neighborly text, "NeighborSolicitss"
8081028       0x7B4E84        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
9403072       0x8F7AC0        Flattened device tree, size: 5823 bytes, version: 17
9408896       0x8F9180        Flattened device tree, size: 7047 bytes, version: 17
9415968       0x8FAD20        Flattened device tree, size: 14492 bytes, version: 17
9430464       0x8FE5C0        Flattened device tree, size: 14609 bytes, version: 17
9445088       0x901EE0        Flattened device tree, size: 13590 bytes, version: 17
9458688       0x905400        Flattened device tree, size: 13022 bytes, version: 17
9471712       0x9086E0        Flattened device tree, size: 13678 bytes, version: 17
9485408       0x90BC60        Flattened device tree, size: 13954 bytes, version: 17
9499392       0x90F300        Flattened device tree, size: 13906 bytes, version: 17
9513312       0x912960        Flattened device tree, size: 13797 bytes, version: 17
9527136       0x915F60        Flattened device tree, size: 13709 bytes, version: 17
9540864       0x919500        Flattened device tree, size: 13602 bytes, version: 17
9554496       0x91CA40        Flattened device tree, size: 14398 bytes, version: 17
9568896       0x920280        Flattened device tree, size: 14462 bytes, version: 17
9583360       0x923B00        Flattened device tree, size: 14334 bytes, version: 17
9597696       0x927300        Flattened device tree, size: 14258 bytes, version: 17
9611968       0x92AAC0        Flattened device tree, size: 14437 bytes, version: 17
9626432       0x92E340        Flattened device tree, size: 14257 bytes, version: 17
9640704       0x931B00        Flattened device tree, size: 14015 bytes, version: 17
9654720       0x9351C0        Flattened device tree, size: 14007 bytes, version: 17
9668736       0x938880        Flattened device tree, size: 14019 bytes, version: 17
9682784       0x93BF60        Flattened device tree, size: 14015 bytes, version: 17
9696800       0x93F620        Flattened device tree, size: 13097 bytes, version: 17
9709920       0x942960        Flattened device tree, size: 53247 bytes, version: 17
9763168       0x94F960        Flattened device tree, size: 7966 bytes, version: 17
9777308       0x95309C        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9777424       0x953110        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9777548       0x95318C        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9777664       0x953200        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
10206208      0x9BBC00        AES S-Box
10206464      0x9BBD00        AES Inverse S-Box
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 420
-rw-r--r-- 1 root root  5831 2025-09-03 12:24:48.553440495 +0100 8f7ac0.dtb
-rw-r--r-- 1 root root  7055 2025-09-03 12:24:48.570440569 +0100 8f9180.dtb
-rw-r--r-- 1 root root 14500 2025-09-03 12:24:48.599440696 +0100 8fad20.dtb
-rw-r--r-- 1 root root 14617 2025-09-03 12:24:48.628440822 +0100 8fe5c0.dtb
-rw-r--r-- 1 root root 13598 2025-09-03 12:24:48.656440944 +0100 901ee0.dtb
-rw-r--r-- 1 root root 13030 2025-09-03 12:24:48.682441058 +0100 905400.dtb
-rw-r--r-- 1 root root 13686 2025-09-03 12:24:48.710441180 +0100 9086e0.dtb
-rw-r--r-- 1 root root 13962 2025-09-03 12:24:48.738441302 +0100 90bc60.dtb
-rw-r--r-- 1 root root 13914 2025-09-03 12:24:48.766441424 +0100 90f300.dtb
-rw-r--r-- 1 root root 13805 2025-09-03 12:24:48.793441542 +0100 912960.dtb
-rw-r--r-- 1 root root 13717 2025-09-03 12:24:48.821441664 +0100 915f60.dtb
-rw-r--r-- 1 root root 13610 2025-09-03 12:24:48.848441782 +0100 919500.dtb
-rw-r--r-- 1 root root 14406 2025-09-03 12:24:48.877441908 +0100 91ca40.dtb
-rw-r--r-- 1 root root 14470 2025-09-03 12:24:48.905442030 +0100 920280.dtb
-rw-r--r-- 1 root root 14342 2025-09-03 12:24:48.934442157 +0100 923b00.dtb
-rw-r--r-- 1 root root 14266 2025-09-03 12:24:48.963442283 +0100 927300.dtb
-rw-r--r-- 1 root root 14445 2025-09-03 12:24:48.991442405 +0100 92aac0.dtb
-rw-r--r-- 1 root root 14265 2025-09-03 12:24:49.020442532 +0100 92e340.dtb
-rw-r--r-- 1 root root 14023 2025-09-03 12:24:49.048442654 +0100 931b00.dtb
-rw-r--r-- 1 root root 14015 2025-09-03 12:24:49.076442776 +0100 9351c0.dtb
-rw-r--r-- 1 root root 14027 2025-09-03 12:24:49.104442898 +0100 938880.dtb
-rw-r--r-- 1 root root 14023 2025-09-03 12:24:49.133443025 +0100 93bf60.dtb
-rw-r--r-- 1 root root 13105 2025-09-03 12:24:49.159443138 +0100 93f620.dtb
-rw-r--r-- 1 root root 53255 2025-09-03 12:24:49.246443518 +0100 942960.dtb
-rw-r--r-- 1 root root  7974 2025-09-03 12:24:49.266443605 +0100 94f960.dtb
-rw-r--r-- 1 root root   492 2025-09-03 12:24:48.517440338 +0100 95309c.cpio
```

