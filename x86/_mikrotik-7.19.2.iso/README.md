### mikrotik-7.19.2.iso
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
Volume size is: 32683
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
total 61385
-r--r--r-- 1 root root   130747 2025-06-20 10:04:43.000000000 +0100 LICENSE.txt
-r--r--r-- 1 root root    24721 2025-06-20 09:40:49.000000000 +0100 calea-7.19.2.npk
-r--r--r-- 1 root root   155793 2025-06-20 09:43:37.000000000 +0100 container-7.19.2.npk
-r--r--r-- 1 root root       48 2025-06-20 10:04:43.000000000 +0100 defpacks
-r--r--r-- 1 root root  1429649 2025-06-20 10:03:35.000000000 +0100 dude-7.19.2.npk
-r--r--r-- 1 root root 35651584 2025-06-20 10:04:43.000000000 +0100 efiboot.img
-r--r--r-- 1 root root    20625 2025-06-20 09:40:52.000000000 +0100 gps-7.19.2.npk
-r--r--r-- 1 root root   561297 2025-06-20 09:47:05.000000000 +0100 iot-7.19.2.npk
dr-xr-xr-x 1 root root     2048 2025-06-20 10:04:43.000000000 +0100 isolinux
-r--r--r-- 1 root root     8337 2025-06-20 09:40:25.000000000 +0100 lora-7.19.2.npk
-r--r--r-- 1 root root  3580049 2025-06-20 09:59:22.000000000 +0100 rose-storage-7.19.2.npk
-r--r--r-- 1 root root 19501909 2025-06-20 10:04:43.000000000 +0100 routeros-7.19.2.npk
-r--r--r-- 1 root root   155793 2025-06-20 09:44:29.000000000 +0100 tr069-client-7.19.2.npk
-r--r--r-- 1 root root    37009 2025-06-20 09:41:58.000000000 +0100 ups-7.19.2.npk
-r--r--r-- 1 root root   417937 2025-06-20 09:48:35.000000000 +0100 user-manager-7.19.2.npk
-r--r--r-- 1 root root  1175697 2025-06-20 10:00:35.000000000 +0100 wireless-7.19.2.npk

/isolinux:
total 3595
-r--r--r-- 1 root root    2048 2025-06-20 10:04:43.000000000 +0100 boot.cat
-r--r--r-- 1 root root    9652 2025-06-20 08:53:59.000000000 +0100 isolinux.bin
-r-xr-xr-x 1 root root      97 2025-06-20 08:53:59.000000000 +0100 isolinux.cfg
-r--r--r-- 1 root root 3668192 2025-06-20 10:04:43.000000000 +0100 linux
```

#### Notes:
- Some NPK files are replaced with symlinks to save space, if their SHA256 hashes match those of NPK files downloaded separately.

