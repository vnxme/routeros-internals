### efiboot.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector, code offset 0x58+2, OEM-ID "mkfs.fat", Media descriptor 0xf8, sectors/track 32, heads 64, sectors 69632 (volumes > 32 MB), FAT (32 bit), sectors/FAT 536, serial number 0x4809560d, label: "ROUTEROS   "
```
#### Block device info (`blockdev --report <*>`):
```
RO    RA   SSZ   BSZ        StartSec            Size   Device
rw   512   512  4096               0        35651584   /dev/nbd0
```
#### Partition info (`parted <*> print`):
```
Model: Unknown (unknown)
Disk /dev/nbd0: 35.7MB
Sector size (logical/physical): 512B/512B
Partition Table: loop
Disk Flags: 

Number  Start  End     Size    File system  Flags
 1      0.00B  35.7MB  35.7MB  fat32
```
#### Partition IDs (`blkid`):
```
/dev/nbd0: LABEL_FATBOOT="ROUTEROS" LABEL="ROUTEROS" UUID="4809-560D" BLOCK_SIZE="512" TYPE="vfat"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 5
drwxr-xr-x 3 root root 512 1970-01-01 01:00:00.000000000 +0100 loop
-rw-r--r-- 1 root root 512 2025-10-01 15:45:02.455451968 +0100 mbr.bin

/loop:
total 1
drwxr-xr-x 3 root root 512 2025-01-30 11:37:36.000000000 +0000 EFI

/loop/EFI:
total 1
drwxr-xr-x 2 root root 512 2025-01-30 11:37:36.000000000 +0000 BOOT

/loop/EFI/BOOT:
total 10538
-rwxr-xr-x 1 root root 10790860 2025-01-30 11:37:36.000000000 +0000 BOOTAA64.EFI
```

