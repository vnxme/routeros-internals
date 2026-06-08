### install-image-7.21.2.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector, code offset 0x58+2, OEM-ID "SYSLINUX", sectors/cluster 4, reserved sectors 4, root entries 512, Media descriptor 0xf8, sectors/FAT 256, sectors/track 32, heads 8, sectors 262144 (volumes > 32 MB), serial number 0xb5f4ecfc, label: "Install    ", FAT (16 bit)
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
/dev/nbd0: SEC_TYPE="msdos" LABEL_FATBOOT="Install" LABEL="Install" UUID="B5F4-ECFC" BLOCK_SIZE="512" TYPE="vfat"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 3 root root 16384 1970-01-01 01:00:00.000000000 +0100 loop
-rw-r--r-- 1 root root   512 2026-06-08 15:56:49.731630433 +0100 mbr.bin

/loop:
total 49930
-rwxr-xr-x 1 root root    24721 2026-01-30 02:45:52.000000000 +0000 1.npk
-rwxr-xr-x 1 root root 19961205 2026-01-30 02:45:52.000000000 +0000 10.npk
-rwxr-xr-x 1 root root   159889 2026-01-30 02:45:52.000000000 +0000 11.npk
-rwxr-xr-x 1 root root    37009 2026-01-30 02:45:52.000000000 +0000 12.npk
-rwxr-xr-x 1 root root   417937 2026-01-30 02:45:52.000000000 +0000 13.npk
-rwxr-xr-x 1 root root  1163409 2026-01-30 02:45:52.000000000 +0000 14.npk
-rwxr-xr-x 1 root root   704657 2026-01-30 02:45:52.000000000 +0000 2.npk
-rwxr-xr-x 1 root root  1413265 2026-01-30 02:45:52.000000000 +0000 3.npk
-rwxr-xr-x 1 root root    24721 2026-01-30 02:45:52.000000000 +0000 4.npk
-rwxr-xr-x 1 root root   561297 2026-01-30 02:45:52.000000000 +0000 5.npk
-rwxr-xr-x 1 root root    82065 2026-01-30 02:45:52.000000000 +0000 6.npk
-rwxr-xr-x 1 root root  1941649 2026-01-30 02:45:52.000000000 +0000 7.npk
-rwxr-xr-x 1 root root 16994449 2026-01-30 02:45:52.000000000 +0000 8.npk
-rwxr-xr-x 1 root root  3555473 2026-01-30 02:45:52.000000000 +0000 9.npk
-rwxr-xr-x 1 root root        0 2026-01-30 02:45:52.000000000 +0000 CHOOSE
drwxr-xr-x 3 root root     2048 2026-01-30 02:45:50.000000000 +0000 EFI
-rwxr-xr-x 1 root root        0 2026-01-30 02:45:52.000000000 +0000 autorun.scr
-rwxr-xr-x 1 root root   119368 2026-01-30 02:45:50.000000000 +0000 ldlinux.c32
-r-xr-xr-x 1 root root    59904 2026-01-30 02:45:50.000000000 +0000 ldlinux.sys
-rwxr-xr-x 1 root root  3872992 2026-01-30 02:45:52.000000000 +0000 linux
-rwxr-xr-x 1 root root       79 2026-01-30 02:45:52.000000000 +0000 syslinux.cfg

/loop/EFI:
total 2
drwxr-xr-x 2 root root 2048 2026-01-30 02:45:50.000000000 +0000 BOOT

/loop/EFI/BOOT:
total 274
-rwxr-xr-x 1 root root 278328 2026-01-30 02:45:50.000000000 +0000 BOOTX64.EFI
-rwxr-xr-x 1 root root    206 2026-01-30 02:45:50.000000000 +0000 refind.conf
```

