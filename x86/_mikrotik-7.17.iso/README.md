### mikrotik-7.17.iso
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
Volume size is: 32363
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
total 60761
-r--r--r-- 1 root root   130747 2025-01-16 09:26:52.000000000 +0000 LICENSE.txt
-r--r--r-- 1 root root    24721 2025-01-16 09:04:11.000000000 +0000 calea-7.17.npk
-r--r--r-- 1 root root   110737 2025-01-16 09:09:18.000000000 +0000 container-7.17.npk
-r--r--r-- 1 root root       48 2025-01-16 09:26:52.000000000 +0000 defpacks
-r--r--r-- 1 root root  1429649 2025-01-16 09:25:44.000000000 +0000 dude-7.17.npk
-r--r--r-- 1 root root 35651584 2025-01-16 09:26:52.000000000 +0000 efiboot.img
-r--r--r-- 1 root root    20625 2025-01-16 09:04:12.000000000 +0000 gps-7.17.npk
-r--r--r-- 1 root root   401553 2025-01-16 09:11:32.000000000 +0000 iot-7.17.npk
dr-xr-xr-x 1 root root     2048 2025-01-16 09:26:52.000000000 +0000 isolinux
-r--r--r-- 1 root root     8337 2025-01-16 09:03:59.000000000 +0000 lora-7.17.npk
-r--r--r-- 1 root root  3563665 2025-01-16 09:20:22.000000000 +0000 rose-storage-7.17.npk
-r--r--r-- 1 root root 19092309 2025-01-16 09:26:52.000000000 +0000 routeros-7.17.npk
-r--r--r-- 1 root root   155793 2025-01-16 09:08:57.000000000 +0000 tr069-client-7.17.npk
-r--r--r-- 1 root root    37009 2025-01-16 09:05:26.000000000 +0000 ups-7.17.npk
-r--r--r-- 1 root root   413841 2025-01-16 09:10:16.000000000 +0000 user-manager-7.17.npk
-r--r--r-- 1 root root  1171601 2025-01-16 09:24:05.000000000 +0000 wireless-7.17.npk

/isolinux:
total 3579
-r--r--r-- 1 root root    2048 2025-01-16 09:26:52.000000000 +0000 boot.cat
-r--r--r-- 1 root root    9652 2025-01-16 08:18:21.000000000 +0000 isolinux.bin
-r-xr-xr-x 1 root root      97 2025-01-16 08:18:21.000000000 +0000 isolinux.cfg
-r--r--r-- 1 root root 3651808 2025-01-16 09:26:52.000000000 +0000 linux
```

#### Notes:
- Some NPK files are replaced with symlinks to save space, if their SHA256 hashes match those of NPK files downloaded separately.

