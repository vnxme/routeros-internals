### mikrotik-7.19.3-arm64.iso
#### Identification (`file <*>`):
```
ISO 9660 CD-ROM filesystem data 'MikroTik' (bootable)
```
#### Description (`isoinfo -d -i <*>`):
```
CD-ROM is in ISO 9660 format
System id: 
Volume id: MikroTik
Volume set id: 
Publisher id: WWW.MIKROTIK.COM
Data preparer id: MIKROTIK
Application id: MIKROTIK_ROUTER
Copyright File id: 
Abstract File id: 
Bibliographic File id: 
Volume set size is: 1
Volume set sequence number is: 1
Logical block size is: 2048
Volume size is: 34134
El Torito VD version 1 found, boot catalog is in sector 33
NO Joliet present
Rock Ridge signatures version 1 found
Eltorito validation header:
    Hid 1
    Arch 239 (Unknown Arch)
    ID ''
    Key 55 AA
    Eltorito defaultboot header:
        Bootid 88 (bootable)
        Boot media 0 (No Emulation Boot)
        Load segment 0
        Sys type 0
        Nsect 0
        Bootoff 22 34
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 67876
-r--r--r-- 1 root root   130747 2025-07-03 13:32:31.000000000 +0100 LICENSE.txt
-r--r--r-- 1 root root     2048 2025-07-03 13:32:31.000000000 +0100 boot.catalog
-r--r--r-- 1 root root    20625 2025-07-03 13:08:55.000000000 +0100 calea-7.19.3-arm64.npk
-r--r--r-- 1 root root   110737 2025-07-03 13:13:32.000000000 +0100 container-7.19.3-arm64.npk
-r--r--r-- 1 root root       48 2025-07-03 13:32:31.000000000 +0100 defpacks
-r--r--r-- 1 root root  1253521 2025-07-03 13:31:27.000000000 +0100 dude-7.19.3-arm64.npk
-r--r--r-- 1 root root 35651584 2025-07-03 13:32:31.000000000 +0100 efiboot.img
-r--r--r-- 1 root root  2277521 2025-07-03 13:15:52.000000000 +0100 extra-nic-7.19.3-arm64.npk
-r--r--r-- 1 root root    24721 2025-07-03 13:08:57.000000000 +0100 gps-7.19.3-arm64.npk
-r--r--r-- 1 root root   725137 2025-07-03 13:17:23.000000000 +0100 iot-7.19.3-arm64.npk
-r--r--r-- 1 root root   151697 2025-07-03 13:08:38.000000000 +0100 iot-bt-extra-7.19.3-arm64.npk
-r--r--r-- 1 root root     8337 2025-07-03 13:08:30.000000000 +0100 lora-7.19.3-arm64.npk
-r--r--r-- 1 root root       76 2025-07-03 13:32:31.000000000 +0100 netinstall.filelist
-r--r--r-- 1 root root  3211409 2025-07-03 13:25:25.000000000 +0100 rose-storage-7.19.3-arm64.npk
-r--r--r-- 1 root root 12966989 2025-07-03 13:32:31.000000000 +0100 routeros-7.19.3-arm64.npk
-r--r--r-- 1 root root     1691 2025-07-03 13:32:31.000000000 +0100 setup.modulelist
-r--r--r-- 1 root root   135313 2025-07-03 13:12:59.000000000 +0100 tr069-client-7.19.3-arm64.npk
-r--r--r-- 1 root root    32913 2025-07-03 13:10:04.000000000 +0100 ups-7.19.3-arm64.npk
-r--r--r-- 1 root root   344209 2025-07-03 13:17:43.000000000 +0100 user-manager-7.19.3-arm64.npk
-r--r--r-- 1 root root 10711185 2025-07-03 13:25:48.000000000 +0100 wifi-qcom-7.19.3-arm64.npk
-r--r--r-- 1 root root   880785 2025-07-03 13:29:25.000000000 +0100 wireless-7.19.3-arm64.npk
-r--r--r-- 1 root root   856209 2025-07-03 13:14:03.000000000 +0100 zerotier-7.19.3-arm64.npk
```

#### Notes:
- Some NPK files are replaced with symlinks to save space, if their SHA256 hashes match those of NPK files downloaded separately.

