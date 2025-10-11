### install-image-7.20.1.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector, code offset 0x58+2, OEM-ID "SYSLINUX", sectors/cluster 4, reserved sectors 4, root entries 512, Media descriptor 0xf8, sectors/FAT 256, sectors/track 32, heads 8, sectors 262144 (volumes > 32 MB), serial number 0x8b0eb8a7, label: "Install    ", FAT (16 bit)
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
/dev/nbd0: SEC_TYPE="msdos" LABEL_FATBOOT="Install" LABEL="Install" UUID="8B0E-B8A7" BLOCK_SIZE="512" TYPE="vfat"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 3 root root 16384 1970-01-01 01:00:00.000000000 +0100 loop
-rw-r--r-- 1 root root   512 2025-10-11 13:56:55.344448437 +0100 mbr.bin

/loop:
total 56552
-rwxr-xr-x 1 root root    24721 2025-10-11 02:53:54.000000000 +0100 1.npk
-rwxr-xr-x 1 root root 19708551 2025-10-11 02:53:54.000000000 +0100 10.npk
-rwxr-xr-x 1 root root   159889 2025-10-11 02:53:54.000000000 +0100 11.npk
-rwxr-xr-x 1 root root    37009 2025-10-11 02:53:54.000000000 +0100 12.npk
-rwxr-xr-x 1 root root   413841 2025-10-11 02:53:54.000000000 +0100 13.npk
-rwxr-xr-x 1 root root  1167505 2025-10-11 02:53:54.000000000 +0100 14.npk
-rwxr-xr-x 1 root root   172177 2025-10-11 02:53:54.000000000 +0100 2.npk
-rwxr-xr-x 1 root root  1413265 2025-10-11 02:53:54.000000000 +0100 3.npk
-rwxr-xr-x 1 root root    24721 2025-10-11 02:53:54.000000000 +0100 4.npk
-rwxr-xr-x 1 root root   565393 2025-10-11 02:53:54.000000000 +0100 5.npk
-rwxr-xr-x 1 root root    82065 2025-10-11 02:53:54.000000000 +0100 6.npk
-rwxr-xr-x 1 root root  1941649 2025-10-11 02:53:54.000000000 +0100 7.npk
-rwxr-xr-x 1 root root 24580241 2025-10-11 02:53:54.000000000 +0100 8.npk
-rwxr-xr-x 1 root root  3555473 2025-10-11 02:53:54.000000000 +0100 9.npk
-rwxr-xr-x 1 root root        0 2025-10-11 02:53:54.000000000 +0100 CHOOSE
drwxr-xr-x 3 root root     2048 2025-10-11 02:53:52.000000000 +0100 EFI
-rwxr-xr-x 1 root root        0 2025-10-11 02:53:54.000000000 +0100 autorun.scr
-rwxr-xr-x 1 root root   119368 2025-10-11 02:53:52.000000000 +0100 ldlinux.c32
-r-xr-xr-x 1 root root    59904 2025-10-11 02:53:52.000000000 +0100 ldlinux.sys
-rwxr-xr-x 1 root root  3848416 2025-10-11 02:53:54.000000000 +0100 linux
-rwxr-xr-x 1 root root       79 2025-10-11 02:53:54.000000000 +0100 syslinux.cfg

/loop/EFI:
total 2
drwxr-xr-x 2 root root 2048 2025-10-11 02:53:52.000000000 +0100 BOOT

/loop/EFI/BOOT:
total 274
-rwxr-xr-x 1 root root 278328 2025-10-11 02:53:52.000000000 +0100 BOOTX64.EFI
-rwxr-xr-x 1 root root    206 2025-10-11 02:53:52.000000000 +0100 refind.conf
```

