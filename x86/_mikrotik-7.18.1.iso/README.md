### mikrotik-7.18.1.iso
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
Volume size is: 32399
El Torito VD version 1 found, boot catalog is in sector 33
NO Joliet present
Rock Ridge signatures version 1 found
Eltorito validation header:
    Hid 1
    Arch 0 (x86)
    ID ''
    Key 55 AA
    Eltorito defaultboot header:
        Bootid 88 (bootable)
        Boot media 0 (No Emulation Boot)
        Load segment 0
        Sys type 0
        Nsect 4
        Bootoff 22 34
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 60949
-r--r--r-- 1 root root   130747 2025-02-28 12:39:45.000000000 +0000 LICENSE.txt
-r--r--r-- 1 root root    24721 2025-02-28 12:16:58.000000000 +0000 calea-7.18.1.npk
-r--r--r-- 1 root root   155793 2025-02-28 12:20:40.000000000 +0000 container-7.18.1.npk
-r--r--r-- 1 root root       48 2025-02-28 12:39:45.000000000 +0000 defpacks
-r--r--r-- 1 root root  1429649 2025-02-28 12:38:36.000000000 +0000 dude-7.18.1.npk
-r--r--r-- 1 root root 35651584 2025-02-28 12:39:45.000000000 +0000 efiboot.img
-r--r--r-- 1 root root    20625 2025-02-28 12:16:53.000000000 +0000 gps-7.18.1.npk
-r--r--r-- 1 root root   401553 2025-02-28 12:22:59.000000000 +0000 iot-7.18.1.npk
dr-xr-xr-x 1 root root     2048 2025-02-28 12:39:45.000000000 +0000 isolinux
-r--r--r-- 1 root root     8337 2025-02-28 12:16:46.000000000 +0000 lora-7.18.1.npk
-r--r--r-- 1 root root  3580049 2025-02-28 12:33:47.000000000 +0000 rose-storage-7.18.1.npk
-r--r--r-- 1 root root 19223361 2025-02-28 12:39:45.000000000 +0000 routeros-7.18.1.npk
-r--r--r-- 1 root root   155793 2025-02-28 12:21:15.000000000 +0000 tr069-client-7.18.1.npk
-r--r--r-- 1 root root    37009 2025-02-28 12:18:01.000000000 +0000 ups-7.18.1.npk
-r--r--r-- 1 root root   413841 2025-02-28 12:23:52.000000000 +0000 user-manager-7.18.1.npk
-r--r--r-- 1 root root  1171601 2025-02-28 12:36:51.000000000 +0000 wireless-7.18.1.npk

/isolinux:
total 3463
-r--r--r-- 1 root root    2048 2025-02-28 12:39:45.000000000 +0000 boot.cat
-r--r--r-- 1 root root    9652 2025-02-28 11:30:23.000000000 +0000 isolinux.bin
-r-xr-xr-x 1 root root      97 2025-02-28 11:30:23.000000000 +0000 isolinux.cfg
-r--r--r-- 1 root root 3533024 2025-02-28 12:39:45.000000000 +0000 linux
```

#### Notes:
- Some NPK files are replaced with symlinks to save space, if their SHA256 hashes match those of NPK files downloaded separately.

