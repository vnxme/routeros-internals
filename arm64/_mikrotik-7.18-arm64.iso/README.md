### mikrotik-7.18-arm64.iso
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
Volume size is: 34006
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
total 67619
-r--r--r-- 1 root root   130747 2025-02-24 09:55:28.000000000 +0000 LICENSE.txt
-r--r--r-- 1 root root     2048 2025-02-24 09:55:28.000000000 +0000 boot.catalog
-r--r--r-- 1 root root    20625 2025-02-24 09:32:40.000000000 +0000 calea-7.18-arm64.npk
-r--r--r-- 1 root root   110737 2025-02-24 09:37:21.000000000 +0000 container-7.18-arm64.npk
-r--r--r-- 1 root root       48 2025-02-24 09:55:28.000000000 +0000 defpacks
-r--r--r-- 1 root root  1253521 2025-02-24 09:54:22.000000000 +0000 dude-7.18-arm64.npk
-r--r--r-- 1 root root 35651584 2025-02-24 09:55:28.000000000 +0000 efiboot.img
-r--r--r-- 1 root root  2277521 2025-02-24 09:37:58.000000000 +0000 extra-nic-7.18-arm64.npk
-r--r--r-- 1 root root    24721 2025-02-24 09:32:42.000000000 +0000 gps-7.18-arm64.npk
-r--r--r-- 1 root root   561297 2025-02-24 09:38:59.000000000 +0000 iot-7.18-arm64.npk
-r--r--r-- 1 root root   151697 2025-02-24 09:32:31.000000000 +0000 iot-bt-extra-7.18-arm64.npk
-r--r--r-- 1 root root     8337 2025-02-24 09:32:19.000000000 +0000 lora-7.18-arm64.npk
-r--r--r-- 1 root root       76 2025-02-24 09:55:27.000000000 +0000 netinstall.filelist
-r--r--r-- 1 root root  3211409 2025-02-24 09:49:04.000000000 +0000 rose-storage-7.18-arm64.npk
-r--r--r-- 1 root root 12892633 2025-02-24 09:55:28.000000000 +0000 routeros-7.18-arm64.npk
-r--r--r-- 1 root root     1654 2025-02-24 09:55:27.000000000 +0000 setup.modulelist
-r--r--r-- 1 root root   118929 2025-02-24 09:36:50.000000000 +0000 tr069-client-7.18-arm64.npk
-r--r--r-- 1 root root    32913 2025-02-24 09:33:58.000000000 +0000 ups-7.18-arm64.npk
-r--r--r-- 1 root root   340113 2025-02-24 09:38:40.000000000 +0000 user-manager-7.18-arm64.npk
-r--r--r-- 1 root root 10711185 2025-02-24 09:49:30.000000000 +0000 wifi-qcom-7.18-arm64.npk
-r--r--r-- 1 root root   876689 2025-02-24 09:52:38.000000000 +0000 wireless-7.18-arm64.npk
-r--r--r-- 1 root root   856209 2025-02-24 09:37:23.000000000 +0000 zerotier-7.18-arm64.npk
```

#### Notes:
- Some NPK files are replaced with symlinks to save space, if their SHA256 hashes match those of NPK files downloaded separately.

