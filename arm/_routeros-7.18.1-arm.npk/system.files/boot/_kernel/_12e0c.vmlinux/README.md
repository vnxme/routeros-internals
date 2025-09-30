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
3316882       0x329C92        bix header, header size: 64 bytes, header CRC: 0x53E31600, created: 1970-01-20 17:18:56, image size: 1491272448 bytes, Data Address: 0x1A0430, Entry Point: 0xA0E11422, data CRC: 0xB3E50200, compression type: none, image name: ""
4211429       0x4042E5        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
4212121       0x404599        Certificate in DER format (x509 v3), header length: 4, sequence length: 1284
6072364       0x5CA82C        Base64 standard index table
6090112       0x5CED80        CRC32 polynomial table, little endian
6514231       0x636637        Neighborly text, "neighbor table dump requestor table dump request"
6514288       0x636670        Neighborly text, "neighbor table dump requestor table dump request"
6514345       0x6366A9        Neighborly text, "neighbor table dump requestquest"
6514392       0x6366D8        Neighborly text, "neighbor dump requestp request"
6514443       0x63670B        Neighborly text, "neighbor dump request request"
6514645       0x6367D5        Neighborly text, "neighbor dump request"
6514919       0x6368E7        Neighborly text, "neighbor get requestrequest"
6514969       0x636919        Neighborly text, "neighbor get requestequest"
6515018       0x63694A        Neighborly text, "neighbor get requestget request"
6515072       0x636980        Neighborly text, "neighbor get requestquest"
6515120       0x6369B0        Neighborly text, "neighbor get requestest"
6515166       0x6369DE        Neighborly text, "neighbor get request specified"
6515318       0x636A76        Neighborly text, "Neighbor entry is now deadaddress not specified"
6693056       0x6620C0        xz compressed data
6875330       0x68E8C2        Unix path: /lib/firmware/updates/5.6.3
6932068       0x69C664        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
6949727       0x6A0B5F        Unix path: /sys/firmware/devicetree/base
6951964       0x6A141C        Unix path: /sys/firmware/fdt': CRC check failed
6992087       0x6AB0D7        Neighborly text, "neighbor table overflow!it"
8270006       0x7E30B6        bix header, header size: 64 bytes, header CRC: 0xF000000, created: 1977-12-22 18:04:12, image size: 16777740 bytes, Data Address: 0xE098, Entry Point: 0x8EFFF815, data CRC: 0x6080FE15, image name: ""
8350400       0x7F6AC0        Flattened device tree, size: 5823 bytes, version: 17
8356224       0x7F8180        Flattened device tree, size: 7047 bytes, version: 17
8363296       0x7F9D20        Flattened device tree, size: 14492 bytes, version: 17
8377792       0x7FD5C0        Flattened device tree, size: 14609 bytes, version: 17
8392416       0x800EE0        Flattened device tree, size: 13590 bytes, version: 17
8406016       0x804400        Flattened device tree, size: 13022 bytes, version: 17
8419040       0x8076E0        Flattened device tree, size: 13678 bytes, version: 17
8432736       0x80AC60        Flattened device tree, size: 13954 bytes, version: 17
8446720       0x80E300        Flattened device tree, size: 13906 bytes, version: 17
8460640       0x811960        Flattened device tree, size: 13797 bytes, version: 17
8474464       0x814F60        Flattened device tree, size: 13709 bytes, version: 17
8488192       0x818500        Flattened device tree, size: 13602 bytes, version: 17
8501824       0x81BA40        Flattened device tree, size: 14398 bytes, version: 17
8516224       0x81F280        Flattened device tree, size: 14462 bytes, version: 17
8530688       0x822B00        Flattened device tree, size: 14334 bytes, version: 17
8545024       0x826300        Flattened device tree, size: 14258 bytes, version: 17
8559296       0x829AC0        Flattened device tree, size: 14437 bytes, version: 17
8573760       0x82D340        Flattened device tree, size: 14257 bytes, version: 17
8588032       0x830B00        Flattened device tree, size: 14015 bytes, version: 17
8602048       0x8341C0        Flattened device tree, size: 14007 bytes, version: 17
8616064       0x837880        Flattened device tree, size: 14019 bytes, version: 17
8630112       0x83AF60        Flattened device tree, size: 14015 bytes, version: 17
8644128       0x83E620        Flattened device tree, size: 13097 bytes, version: 17
8657248       0x841960        Flattened device tree, size: 53247 bytes, version: 17
8710496       0x84E960        Flattened device tree, size: 7966 bytes, version: 17
8724628       0x852094        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
8724744       0x852108        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
8724868       0x852184        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
8724984       0x8521F8        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
9157632       0x8BBC00        AES S-Box
9157888       0x8BBD00        AES Inverse S-Box
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 420
-rw-r--r-- 1 root root  5831 2025-09-30 12:04:19.461754519 +0100 7f6ac0.dtb
-rw-r--r-- 1 root root  7055 2025-09-30 12:04:19.479754706 +0100 7f8180.dtb
-rw-r--r-- 1 root root 14500 2025-09-30 12:04:19.507754999 +0100 7f9d20.dtb
-rw-r--r-- 1 root root 14617 2025-09-30 12:04:19.536755301 +0100 7fd5c0.dtb
-rw-r--r-- 1 root root 13598 2025-09-30 12:04:19.564755593 +0100 800ee0.dtb
-rw-r--r-- 1 root root 13030 2025-09-30 12:04:19.591755875 +0100 804400.dtb
-rw-r--r-- 1 root root 13686 2025-09-30 12:04:19.618756154 +0100 8076e0.dtb
-rw-r--r-- 1 root root 13962 2025-09-30 12:04:19.646756444 +0100 80ac60.dtb
-rw-r--r-- 1 root root 13914 2025-09-30 12:04:19.674756734 +0100 80e300.dtb
-rw-r--r-- 1 root root 13805 2025-09-30 12:04:19.702757024 +0100 811960.dtb
-rw-r--r-- 1 root root 13717 2025-09-30 12:04:19.730757314 +0100 814f60.dtb
-rw-r--r-- 1 root root 13610 2025-09-30 12:04:19.757757593 +0100 818500.dtb
-rw-r--r-- 1 root root 14406 2025-09-30 12:04:19.786757893 +0100 81ba40.dtb
-rw-r--r-- 1 root root 14470 2025-09-30 12:04:19.814758183 +0100 81f280.dtb
-rw-r--r-- 1 root root 14342 2025-09-30 12:04:19.843758483 +0100 822b00.dtb
-rw-r--r-- 1 root root 14266 2025-09-30 12:04:19.871758773 +0100 826300.dtb
-rw-r--r-- 1 root root 14445 2025-09-30 12:04:19.900759073 +0100 829ac0.dtb
-rw-r--r-- 1 root root 14265 2025-09-30 12:04:19.928759363 +0100 82d340.dtb
-rw-r--r-- 1 root root 14023 2025-09-30 12:04:19.957759663 +0100 830b00.dtb
-rw-r--r-- 1 root root 14015 2025-09-30 12:04:19.985759953 +0100 8341c0.dtb
-rw-r--r-- 1 root root 14027 2025-09-30 12:04:20.013760243 +0100 837880.dtb
-rw-r--r-- 1 root root 14023 2025-09-30 12:04:20.041760533 +0100 83af60.dtb
-rw-r--r-- 1 root root 13105 2025-09-30 12:04:20.068760812 +0100 83e620.dtb
-rw-r--r-- 1 root root 53255 2025-09-30 12:04:20.155761713 +0100 841960.dtb
-rw-r--r-- 1 root root  7974 2025-09-30 12:04:20.175761920 +0100 84e960.dtb
-rw-r--r-- 1 root root   492 2025-09-30 12:04:19.427754164 +0100 852094.cpio
```

