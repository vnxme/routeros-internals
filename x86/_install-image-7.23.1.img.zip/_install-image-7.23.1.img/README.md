### install-image-7.23.1.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector, code offset 0x58+2, OEM-ID "SYSLINUX", sectors/cluster 4, reserved sectors 4, root entries 512, Media descriptor 0xf8, sectors/FAT 256, sectors/track 32, heads 8, sectors 262144 (volumes > 32 MB), serial number 0x5c184c22, label: "Install    ", FAT (16 bit)
```
#### Block device info (`blockdev --report <*>`):
```
RO    RA   SSZ   BSZ        StartSec            Size   Device
rw   512   512  4096               0       134217728   /dev/nbd0
```
#### Partition info (`parted <*> print`):
```
Model: Unknown (unknown)
Disk /dev/nbd0: 134MB
Sector size (logical/physical): 512B/512B
Partition Table: loop
Disk Flags: 

Number  Start  End    Size   File system  Flags
 1      0.00B  134MB  134MB  fat16
```
#### Partition IDs (`blkid`):
```
/dev/nbd0: SEC_TYPE="msdos" LABEL_FATBOOT="Install" LABEL="Install" UUID="5C18-4C22" BLOCK_SIZE="512" TYPE="vfat"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 3 root root 16384 1970-01-01 01:00:00.000000000 +0100 loop
-rw-r--r-- 1 root root   512 2026-06-09 10:31:48.129029937 +0100 mbr.bin

/loop:
total 52568
-rwxr-xr-x 1 root root    24721 2026-06-04 05:57:38.000000000 +0100 1.npk
-rwxr-xr-x 1 root root 20428891 2026-06-04 05:57:38.000000000 +0100 10.npk
-rwxr-xr-x 1 root root   159889 2026-06-04 05:57:38.000000000 +0100 11.npk
-rwxr-xr-x 1 root root    37009 2026-06-04 05:57:38.000000000 +0100 12.npk
-rwxr-xr-x 1 root root   417937 2026-06-04 05:57:38.000000000 +0100 13.npk
-rwxr-xr-x 1 root root  1159313 2026-06-04 05:57:38.000000000 +0100 14.npk
-rwxr-xr-x 1 root root  1114257 2026-06-04 05:57:38.000000000 +0100 2.npk
-rwxr-xr-x 1 root root  1409169 2026-06-04 05:57:38.000000000 +0100 3.npk
-rwxr-xr-x 1 root root    24721 2026-06-04 05:57:38.000000000 +0100 4.npk
-rwxr-xr-x 1 root root   589969 2026-06-04 05:57:38.000000000 +0100 5.npk
-rwxr-xr-x 1 root root    82065 2026-06-04 05:57:38.000000000 +0100 6.npk
-rwxr-xr-x 1 root root  1941649 2026-06-04 05:57:38.000000000 +0100 7.npk
-rwxr-xr-x 1 root root 16994449 2026-06-04 05:57:38.000000000 +0100 8.npk
-rwxr-xr-x 1 root root  5206161 2026-06-04 05:57:38.000000000 +0100 9.npk
-rwxr-xr-x 1 root root        0 2026-06-04 05:57:38.000000000 +0100 CHOOSE
drwxr-xr-x 3 root root     2048 2026-06-04 05:57:36.000000000 +0100 EFI
-rwxr-xr-x 1 root root        0 2026-06-04 05:57:38.000000000 +0100 autorun.scr
-rwxr-xr-x 1 root root   119368 2026-06-04 05:57:36.000000000 +0100 ldlinux.c32
-r-xr-xr-x 1 root root    59904 2026-06-04 05:57:36.000000000 +0100 ldlinux.sys
-rwxr-xr-x 1 root root  4024544 2026-06-04 05:57:38.000000000 +0100 linux
-rwxr-xr-x 1 root root       79 2026-06-04 05:57:38.000000000 +0100 syslinux.cfg

/loop/EFI:
total 2
drwxr-xr-x 2 root root 2048 2026-06-04 05:57:36.000000000 +0100 BOOT

/loop/EFI/BOOT:
total 274
-rwxr-xr-x 1 root root 278328 2026-06-04 05:57:36.000000000 +0100 BOOTX64.EFI
-rwxr-xr-x 1 root root    206 2026-06-04 05:57:36.000000000 +0100 refind.conf
```

