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
6072364       0x5CA82C        Base64 standard index table
6090112       0x5CED80        CRC32 polynomial table, little endian
6513911       0x6364F7        Neighborly text, "neighbor table dump requestor table dump request"
6513968       0x636530        Neighborly text, "neighbor table dump requestor table dump request"
6514025       0x636569        Neighborly text, "neighbor table dump requestquest"
6514072       0x636598        Neighborly text, "neighbor dump requestp request"
6514123       0x6365CB        Neighborly text, "neighbor dump request request"
6514325       0x636695        Neighborly text, "neighbor dump request"
6514599       0x6367A7        Neighborly text, "neighbor get requestrequest"
6514649       0x6367D9        Neighborly text, "neighbor get requestequest"
6514698       0x63680A        Neighborly text, "neighbor get requestget request"
6514752       0x636840        Neighborly text, "neighbor get requestquest"
6514800       0x636870        Neighborly text, "neighbor get requestest"
6514846       0x63689E        Neighborly text, "neighbor get request specified"
6514998       0x636936        Neighborly text, "Neighbor entry is now deadaddress not specified"
6692672       0x661F40        xz compressed data
6874896       0x68E710        Unix path: /lib/firmware/updates/5.6.3
6931566       0x69C46E        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
6949243       0x6A097B        Unix path: /sys/firmware/devicetree/base
6951480       0x6A1238        Unix path: /sys/firmware/fdt': CRC check failed
6991603       0x6AAEF3        Neighborly text, "neighbor table overflow!it"
8269670       0x7E2F66        bix header, header size: 64 bytes, header CRC: 0xF000000, created: 1977-12-22 18:04:12, image size: 16777740 bytes, Data Address: 0x309A, Entry Point: 0x8EFFE415, data CRC: 0x6080EA15, image name: ""
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
8724616       0x852088        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
8724732       0x8520FC        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
8724856       0x852178        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
8724972       0x8521EC        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
9157632       0x8BBC00        AES S-Box
9157888       0x8BBD00        AES Inverse S-Box
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 420
-rw-r--r-- 1 root root  5831 2025-10-01 15:46:26.901656610 +0100 7f6ac0.dtb
-rw-r--r-- 1 root root  7055 2025-10-01 15:46:26.919656624 +0100 7f8180.dtb
-rw-r--r-- 1 root root 14500 2025-10-01 15:46:26.948656645 +0100 7f9d20.dtb
-rw-r--r-- 1 root root 14617 2025-10-01 15:46:26.977656666 +0100 7fd5c0.dtb
-rw-r--r-- 1 root root 13598 2025-10-01 15:46:27.004656686 +0100 800ee0.dtb
-rw-r--r-- 1 root root 13030 2025-10-01 15:46:27.031656706 +0100 804400.dtb
-rw-r--r-- 1 root root 13686 2025-10-01 15:46:27.058656725 +0100 8076e0.dtb
-rw-r--r-- 1 root root 13962 2025-10-01 15:46:27.086656746 +0100 80ac60.dtb
-rw-r--r-- 1 root root 13914 2025-10-01 15:46:27.115656767 +0100 80e300.dtb
-rw-r--r-- 1 root root 13805 2025-10-01 15:46:27.142656787 +0100 811960.dtb
-rw-r--r-- 1 root root 13717 2025-10-01 15:46:27.170656807 +0100 814f60.dtb
-rw-r--r-- 1 root root 13610 2025-10-01 15:46:27.198656828 +0100 818500.dtb
-rw-r--r-- 1 root root 14406 2025-10-01 15:46:27.226656848 +0100 81ba40.dtb
-rw-r--r-- 1 root root 14470 2025-10-01 15:46:27.255656870 +0100 81f280.dtb
-rw-r--r-- 1 root root 14342 2025-10-01 15:46:27.284656891 +0100 822b00.dtb
-rw-r--r-- 1 root root 14266 2025-10-01 15:46:27.312656911 +0100 826300.dtb
-rw-r--r-- 1 root root 14445 2025-10-01 15:46:27.341656932 +0100 829ac0.dtb
-rw-r--r-- 1 root root 14265 2025-10-01 15:46:27.370656954 +0100 82d340.dtb
-rw-r--r-- 1 root root 14023 2025-10-01 15:46:27.398656974 +0100 830b00.dtb
-rw-r--r-- 1 root root 14015 2025-10-01 15:46:27.427656995 +0100 8341c0.dtb
-rw-r--r-- 1 root root 14027 2025-10-01 15:46:27.455657016 +0100 837880.dtb
-rw-r--r-- 1 root root 14023 2025-10-01 15:46:27.483657036 +0100 83af60.dtb
-rw-r--r-- 1 root root 13105 2025-10-01 15:46:27.510657056 +0100 83e620.dtb
-rw-r--r-- 1 root root 53255 2025-10-01 15:46:27.597657120 +0100 841960.dtb
-rw-r--r-- 1 root root  7974 2025-10-01 15:46:27.616657134 +0100 84e960.dtb
-rw-r--r-- 1 root root   492 2025-10-01 15:46:26.866656585 +0100 852088.cpio
```

