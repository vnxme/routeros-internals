### install-image-7.19.6.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector, code offset 0x58+2, OEM-ID "SYSLINUX", sectors/cluster 4, FAT  1, root entries 128, Media descriptor 0xf8, sectors/FAT 256, sectors/track 32, heads 64, sectors 262144 (volumes > 32 MB), serial number 0x1e974699, unlabeled, FAT (16 bit)
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
/dev/nbd0: SEC_TYPE="msdos" UUID="1E97-4699" BLOCK_SIZE="512" TYPE="vfat"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 8
drwxr-xr-x 3 root root 4096 1970-01-01 01:00:00.000000000 +0100 loop
-rw-r--r-- 1 root root  512 2025-09-29 14:38:53.274829885 +0100 mbr.bin

/loop:
total 29822
-rwxr-xr-x 1 root root 19506005 2025-09-12 11:11:54.000000000 +0100 1.npk
-rwxr-xr-x 1 root root   155793 2025-09-12 11:11:54.000000000 +0100 10.npk
-rwxr-xr-x 1 root root  3580049 2025-09-12 11:11:54.000000000 +0100 11.npk
-rwxr-xr-x 1 root root   561297 2025-09-12 11:11:54.000000000 +0100 14.npk
-rwxr-xr-x 1 root root   155793 2025-09-12 11:11:54.000000000 +0100 16.npk
-rwxr-xr-x 1 root root  1175697 2025-09-12 11:11:54.000000000 +0100 17.npk
-rwxr-xr-x 1 root root    37009 2025-09-12 11:11:54.000000000 +0100 2.npk
-rwxr-xr-x 1 root root    20625 2025-09-12 11:11:54.000000000 +0100 3.npk
-rwxr-xr-x 1 root root    24721 2025-09-12 11:11:54.000000000 +0100 4.npk
-rwxr-xr-x 1 root root     8337 2025-09-12 11:11:54.000000000 +0100 6.npk
-rwxr-xr-x 1 root root  1429649 2025-09-12 11:11:54.000000000 +0100 9.npk
-rwxr-xr-x 1 root root        2 2025-09-12 11:11:54.000000000 +0100 CHOOSE
drwxr-xr-x 3 root root     2048 2025-09-12 11:11:54.000000000 +0100 EFI
-rwxr-xr-x 1 root root        2 2025-09-12 11:11:54.000000000 +0100 autorun.scr
-r-xr-xr-x 1 root root   115180 2025-09-12 11:11:52.000000000 +0100 ldlinux.c32
-r-xr-xr-x 1 root root    67072 2025-09-12 11:11:52.000000000 +0100 ldlinux.sys
-rwxr-xr-x 1 root root  3668192 2025-09-12 11:11:54.000000000 +0100 linux
-rwxr-xr-x 1 root root       80 2025-09-12 11:11:54.000000000 +0100 syslinux.cfg

/loop/EFI:
total 2
drwxr-xr-x 2 root root 2048 2025-09-12 11:11:54.000000000 +0100 BOOT

/loop/EFI/BOOT:
total 206
-rwxr-xr-x 1 root root 207168 2025-09-12 11:11:54.000000000 +0100 BOOTX64.EFI
-rwxr-xr-x 1 root root    215 2025-09-12 11:11:54.000000000 +0100 refind.conf
```

