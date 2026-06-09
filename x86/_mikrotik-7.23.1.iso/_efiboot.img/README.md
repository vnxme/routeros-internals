### efiboot.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector, code offset 0x3c+2, OEM-ID "mkfs.fat", sectors/cluster 4, reserved sectors 4, root entries 512, Media descriptor 0xf8, sectors/FAT 64, sectors/track 32, heads 4, sectors 65536 (volumes > 32 MB), serial number 0x58e07b6d, label: "ROUTEROS   ", FAT (16 bit)
```
#### Block device info (`blockdev --report <*>`):
```
RO    RA   SSZ   BSZ        StartSec            Size   Device
rw   512   512  4096               0        33554432   /dev/nbd0
```
#### Partition info (`parted <*> print`):
```
Model: Unknown (unknown)
Disk /dev/nbd0: 33.6MB
Sector size (logical/physical): 512B/512B
Partition Table: loop
Disk Flags: 

Number  Start  End     Size    File system  Flags
 1      0.00B  33.6MB  33.6MB  fat16
```
#### Partition IDs (`blkid`):
```
/dev/nbd0: SEC_TYPE="msdos" LABEL_FATBOOT="ROUTEROS" LABEL="ROUTEROS" UUID="58E0-7B6D" BLOCK_SIZE="512" TYPE="vfat"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 3 root root 16384 1970-01-01 01:00:00.000000000 +0100 loop
-rw-r--r-- 1 root root   512 2026-06-09 10:31:50.664089022 +0100 mbr.bin

/loop:
total 3934
drwxr-xr-x 3 root root    2048 2026-06-04 05:56:46.000000000 +0100 EFI
-rwxr-xr-x 1 root root 4024544 2026-06-04 05:56:50.000000000 +0100 linux.x86_64

/loop/EFI:
total 2
drwxr-xr-x 2 root root 2048 2026-06-04 05:56:46.000000000 +0100 BOOT

/loop/EFI/BOOT:
total 274
-rwxr-xr-x 1 root root 278328 2026-06-04 05:56:46.000000000 +0100 BOOTX64.EFI
-rwxr-xr-x 1 root root    221 2026-06-04 05:56:46.000000000 +0100 refind.conf
```

