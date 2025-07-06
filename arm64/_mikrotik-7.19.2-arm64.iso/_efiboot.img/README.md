### efiboot.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector, code offset 0x58+2, OEM-ID "mkfs.fat", Media descriptor 0xf8, sectors/track 32, heads 64, sectors 69632 (volumes > 32 MB), FAT (32 bit), sectors/FAT 536, serial number 0x42b02e43, label: "ROUTEROS   "
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
/dev/nbd0: LABEL_FATBOOT="ROUTEROS" LABEL="ROUTEROS" UUID="42B0-2E43" BLOCK_SIZE="512" TYPE="vfat"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 5
drwxr-xr-x 3 root root 512 1970-01-01 01:00:00.000000000 +0100 loop
-rw-r--r-- 1 root root 512 2025-07-06 09:57:02.379130082 +0100 mbr.bin

/loop:
total 1
drwxr-xr-x 3 root root 512 2025-06-20 10:04:42.000000000 +0100 EFI

/loop/EFI:
total 1
drwxr-xr-x 2 root root 512 2025-06-20 10:04:42.000000000 +0100 BOOT

/loop/EFI/BOOT:
total 11030
-rwxr-xr-x 1 root root 11294644 2025-06-20 10:04:42.000000000 +0100 BOOTAA64.EFI
```

