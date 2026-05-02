### install-image-7.22.2.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector, code offset 0x58+2, OEM-ID "SYSLINUX", sectors/cluster 4, FAT  1, root entries 128, Media descriptor 0xf8, sectors/FAT 256, sectors/track 32, heads 64, sectors 262144 (volumes > 32 MB), serial number 0x7e4aafdc, unlabeled, FAT (16 bit)
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
/dev/nbd0: SEC_TYPE="msdos" UUID="7E4A-AFDC" BLOCK_SIZE="512" TYPE="vfat"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 8
drwxr-xr-x 3 root root 4096 1970-01-01 01:00:00.000000000 +0100 loop
-rw-r--r-- 1 root root  512 2026-05-02 20:30:53.323549652 +0100 mbr.bin

/loop:
total 33530
-rwxr-xr-x 1 root root 20706188 2026-04-22 09:33:40.000000000 +0100 1.npk
-rwxr-xr-x 1 root root  4993169 2026-04-22 09:33:40.000000000 +0100 10.npk
-rwxr-xr-x 1 root root   569489 2026-04-22 09:33:40.000000000 +0100 12.npk
-rwxr-xr-x 1 root root   893073 2026-04-22 09:33:40.000000000 +0100 14.npk
-rwxr-xr-x 1 root root  1179793 2026-04-22 09:33:40.000000000 +0100 15.npk
-rwxr-xr-x 1 root root    82065 2026-04-22 09:33:40.000000000 +0100 17.npk
-rwxr-xr-x 1 root root    37009 2026-04-22 09:33:40.000000000 +0100 2.npk
-rwxr-xr-x 1 root root    24721 2026-04-22 09:33:40.000000000 +0100 3.npk
-rwxr-xr-x 1 root root    24721 2026-04-22 09:33:40.000000000 +0100 4.npk
-rwxr-xr-x 1 root root  1425553 2026-04-22 09:33:40.000000000 +0100 8.npk
-rwxr-xr-x 1 root root   163985 2026-04-22 09:33:40.000000000 +0100 9.npk
-rwxr-xr-x 1 root root        2 2026-04-22 09:33:40.000000000 +0100 CHOOSE
drwxr-xr-x 3 root root     2048 2026-04-22 09:33:40.000000000 +0100 EFI
-rwxr-xr-x 1 root root        2 2026-04-22 09:33:40.000000000 +0100 autorun.scr
-r-xr-xr-x 1 root root   115180 2026-04-22 09:33:40.000000000 +0100 ldlinux.c32
-r-xr-xr-x 1 root root    67072 2026-04-22 09:33:40.000000000 +0100 ldlinux.sys
-rwxr-xr-x 1 root root  4020448 2026-04-22 09:33:40.000000000 +0100 linux
-rwxr-xr-x 1 root root       80 2026-04-22 09:33:40.000000000 +0100 syslinux.cfg

/loop/EFI:
total 2
drwxr-xr-x 2 root root 2048 2026-04-22 09:33:40.000000000 +0100 BOOT

/loop/EFI/BOOT:
total 206
-rwxr-xr-x 1 root root 207168 2026-04-22 09:33:40.000000000 +0100 BOOTX64.EFI
-rwxr-xr-x 1 root root    215 2026-04-22 09:33:40.000000000 +0100 refind.conf
```

