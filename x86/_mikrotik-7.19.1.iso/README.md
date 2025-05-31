### mikrotik-7.19.1.iso
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
Volume size is: 32679
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
#### Listing (`ls -AlR <*>`):
```
/tmp/iso/:
total 61377
-r--r--r-- 1 root root   130747 May 23 16:36 LICENSE.txt
-r--r--r-- 1 root root    24721 May 23 16:12 calea-7.19.1.npk
-r--r--r-- 1 root root   155793 May 23 16:16 container-7.19.1.npk
-r--r--r-- 1 root root       48 May 23 16:36 defpacks
-r--r--r-- 1 root root  1429649 May 23 16:35 dude-7.19.1.npk
-r--r--r-- 1 root root 35651584 May 23 16:36 efiboot.img
-r--r--r-- 1 root root    20625 May 23 16:12 gps-7.19.1.npk
-r--r--r-- 1 root root   557201 May 23 16:19 iot-7.19.1.npk
dr-xr-xr-x 1 root root     2048 May 23 16:36 isolinux
-r--r--r-- 1 root root     8337 May 23 16:12 lora-7.19.1.npk
-r--r--r-- 1 root root  3580049 May 23 16:27 rose-storage-7.19.1.npk
-r--r--r-- 1 root root 19497813 May 23 16:36 routeros-7.19.1.npk
-r--r--r-- 1 root root   155793 May 23 16:17 tr069-client-7.19.1.npk
-r--r--r-- 1 root root    37009 May 23 16:14 ups-7.19.1.npk
-r--r--r-- 1 root root   417937 May 23 16:20 user-manager-7.19.1.npk
-r--r--r-- 1 root root  1175697 May 23 16:32 wireless-7.19.1.npk

/tmp/iso/isolinux:
total 3595
-r--r--r-- 1 root root    2048 May 23 16:36 boot.cat
-r--r--r-- 1 root root    9652 May 23 15:26 isolinux.bin
-r-xr-xr-x 1 root root      97 May 23 15:26 isolinux.cfg
-r--r--r-- 1 root root 3668192 May 23 16:36 linux
```
#### Notes:
- Some NPK files are replaced with symlinks to save space, if their SHA256 hashes match those of NPK files downloaded separately.

