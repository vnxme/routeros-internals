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
9434752       0x8FF680        Flattened device tree, size: 14611 bytes, version: 17
9449376       0x902FA0        Flattened device tree, size: 13590 bytes, version: 17
9462976       0x9064C0        Flattened device tree, size: 13022 bytes, version: 17
9476000       0x9097A0        Flattened device tree, size: 13678 bytes, version: 17
9489696       0x90CD20        Flattened device tree, size: 13966 bytes, version: 17
9503680       0x9103C0        Flattened device tree, size: 13906 bytes, version: 17
9517600       0x913A20        Flattened device tree, size: 13799 bytes, version: 17
9531424       0x917020        Flattened device tree, size: 13709 bytes, version: 17
9545152       0x91A5C0        Flattened device tree, size: 13602 bytes, version: 17
9558784       0x91DB00        Flattened device tree, size: 14398 bytes, version: 17
9573184       0x921340        Flattened device tree, size: 14462 bytes, version: 17
9587648       0x924BC0        Flattened device tree, size: 14334 bytes, version: 17
9601984       0x9283C0        Flattened device tree, size: 14258 bytes, version: 17
9616256       0x92BB80        Flattened device tree, size: 14439 bytes, version: 17
9630720       0x92F400        Flattened device tree, size: 14259 bytes, version: 17
9644992       0x932BC0        Flattened device tree, size: 14017 bytes, version: 17
9659040       0x9362A0        Flattened device tree, size: 14009 bytes, version: 17
9673056       0x939960        Flattened device tree, size: 14021 bytes, version: 17
9687104       0x93D040        Flattened device tree, size: 14017 bytes, version: 17
9701152       0x940720        Flattened device tree, size: 13097 bytes, version: 17
9714272       0x943A60        Flattened device tree, size: 53247 bytes, version: 17
9767520       0x950A60        Flattened device tree, size: 55621 bytes, version: 17
9823168       0x95E3C0        Flattened device tree, size: 7966 bytes, version: 17
9837332       0x961B14        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
9837448       0x961B88        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
9837572       0x961C04        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
9837688       0x961C78        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
10206208      0x9BBC00        AES S-Box
10206464      0x9BBD00        AES Inverse S-Box
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 476
-rw-r--r-- 1 root root  5831 2025-10-11 13:56:20.845847890 +0100 8f8b80.dtb
-rw-r--r-- 1 root root  7057 2025-10-11 13:56:20.863847806 +0100 8fa240.dtb
-rw-r--r-- 1 root root 14502 2025-10-11 13:56:20.891847676 +0100 8fbde0.dtb
-rw-r--r-- 1 root root 14619 2025-10-11 13:56:20.920847541 +0100 8ff680.dtb
-rw-r--r-- 1 root root 13598 2025-10-11 13:56:20.948847411 +0100 902fa0.dtb
-rw-r--r-- 1 root root 13030 2025-10-11 13:56:20.974847291 +0100 9064c0.dtb
-rw-r--r-- 1 root root 13686 2025-10-11 13:56:21.002847160 +0100 9097a0.dtb
-rw-r--r-- 1 root root 13974 2025-10-11 13:56:21.030847030 +0100 90cd20.dtb
-rw-r--r-- 1 root root 13914 2025-10-11 13:56:21.058846900 +0100 9103c0.dtb
-rw-r--r-- 1 root root 13807 2025-10-11 13:56:21.085846775 +0100 913a20.dtb
-rw-r--r-- 1 root root 13717 2025-10-11 13:56:21.113846645 +0100 917020.dtb
-rw-r--r-- 1 root root 13610 2025-10-11 13:56:21.140846520 +0100 91a5c0.dtb
-rw-r--r-- 1 root root 14406 2025-10-11 13:56:21.169846385 +0100 91db00.dtb
-rw-r--r-- 1 root root 14470 2025-10-11 13:56:21.198846250 +0100 921340.dtb
-rw-r--r-- 1 root root 14342 2025-10-11 13:56:21.226846120 +0100 924bc0.dtb
-rw-r--r-- 1 root root 14266 2025-10-11 13:56:21.255845986 +0100 9283c0.dtb
-rw-r--r-- 1 root root 14447 2025-10-11 13:56:21.283845856 +0100 92bb80.dtb
-rw-r--r-- 1 root root 14267 2025-10-11 13:56:21.312845721 +0100 92f400.dtb
-rw-r--r-- 1 root root 14025 2025-10-11 13:56:21.340845591 +0100 932bc0.dtb
-rw-r--r-- 1 root root 14017 2025-10-11 13:56:21.369845456 +0100 9362a0.dtb
-rw-r--r-- 1 root root 14029 2025-10-11 13:56:21.397845326 +0100 939960.dtb
-rw-r--r-- 1 root root 14025 2025-10-11 13:56:21.425845196 +0100 93d040.dtb
-rw-r--r-- 1 root root 13105 2025-10-11 13:56:21.452845071 +0100 940720.dtb
-rw-r--r-- 1 root root 53255 2025-10-11 13:56:21.538844671 +0100 943a60.dtb
-rw-r--r-- 1 root root 55629 2025-10-11 13:56:21.627844258 +0100 950a60.dtb
-rw-r--r-- 1 root root  7974 2025-10-11 13:56:21.646844170 +0100 95e3c0.dtb
-rw-r--r-- 1 root root   492 2025-10-11 13:56:20.809848057 +0100 961b14.cpio
```

