### install-image-7.17.1.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector, code offset 0x58+2, OEM-ID "SYSLINUX", sectors/cluster 4, FAT  1, root entries 128, Media descriptor 0xf8, sectors/FAT 256, sectors/track 32, heads 64, sectors 262144 (volumes > 32 MB), serial number 0x48275e84, unlabeled, FAT (16 bit)
```
#### Block device info (`blockdev --report <*>`):
```
RO    RA   SSZ   BSZ        StartSec            Size   Device
rw   512   512  4096               0       201326592   /dev/nbd0
```
#### Partition info (`parted <*> print`):
```
Model: Unknown (unknown)
Disk /dev/nbd0: 201MB
Sector size (logical/physical): 512B/512B
Partition Table: loop
Disk Flags: 

Number  Start  End    Size   File system  Flags
 1      0.00B  201MB  201MB  fat16
```
#### Partition IDs (`blkid`):
```
/dev/nbd0: SEC_TYPE="msdos" UUID="4827-5E84" BLOCK_SIZE="512" TYPE="vfat"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 8
drwxr-xr-x 3 root root 4096 1970-01-01 01:00:00.000000000 +0100 loop
-rw-r--r-- 1 root root  512 2025-10-01 15:45:01.154451673 +0100 mbr.bin

/loop:
total 28978
-rwxr-xr-x 1 root root 19018556 2025-01-30 11:37:40.000000000 +0000 1.npk
-rwxr-xr-x 1 root root   155793 2025-01-30 11:37:40.000000000 +0000 12.npk
-rwxr-xr-x 1 root root  3563665 2025-01-30 11:37:40.000000000 +0000 13.npk
-rwxr-xr-x 1 root root   401553 2025-01-30 11:37:40.000000000 +0000 16.npk
-rwxr-xr-x 1 root root   110737 2025-01-30 11:37:40.000000000 +0000 18.npk
-rwxr-xr-x 1 root root  1171601 2025-01-30 11:37:40.000000000 +0000 19.npk
-rwxr-xr-x 1 root root    37009 2025-01-30 11:37:40.000000000 +0000 2.npk
-rwxr-xr-x 1 root root    20625 2025-01-30 11:37:40.000000000 +0000 3.npk
-rwxr-xr-x 1 root root    24721 2025-01-30 11:37:40.000000000 +0000 4.npk
-rwxr-xr-x 1 root root     8337 2025-01-30 11:37:40.000000000 +0000 6.npk
-rwxr-xr-x 1 root root  1429649 2025-01-30 11:37:40.000000000 +0000 9.npk
-rwxr-xr-x 1 root root        2 2025-01-30 11:37:40.000000000 +0000 CHOOSE
drwxr-xr-x 3 root root     2048 2025-01-30 11:37:40.000000000 +0000 EFI
-rwxr-xr-x 1 root root        2 2025-01-30 11:37:40.000000000 +0000 autorun.scr
-r-xr-xr-x 1 root root   115180 2025-01-30 11:37:38.000000000 +0000 ldlinux.c32
-r-xr-xr-x 1 root root    67072 2025-01-30 11:37:38.000000000 +0000 ldlinux.sys
-rwxr-xr-x 1 root root  3516640 2025-01-30 11:37:40.000000000 +0000 linux
-rwxr-xr-x 1 root root       80 2025-01-30 11:37:40.000000000 +0000 syslinux.cfg

/loop/EFI:
total 2
drwxr-xr-x 2 root root 2048 2025-01-30 11:37:40.000000000 +0000 BOOT

/loop/EFI/BOOT:
total 206
-rwxr-xr-x 1 root root 207168 2025-01-30 11:37:40.000000000 +0000 BOOTX64.EFI
-rwxr-xr-x 1 root root    215 2025-01-30 11:37:40.000000000 +0000 refind.conf
```

