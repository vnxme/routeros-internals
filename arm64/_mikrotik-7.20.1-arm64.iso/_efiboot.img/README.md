### efiboot.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector, code offset 0x58+2, OEM-ID "mkfs.fat", Media descriptor 0xf8, sectors/track 32, heads 64, sectors 69632 (volumes > 32 MB), FAT (32 bit), sectors/FAT 536, serial number 0x925c8ec3, label: "ROUTEROS   "
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
/dev/nbd0: LABEL_FATBOOT="ROUTEROS" LABEL="ROUTEROS" UUID="925C-8EC3" BLOCK_SIZE="512" TYPE="vfat"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 5
drwxr-xr-x 3 root root 512 1970-01-01 01:00:00.000000000 +0100 loop
-rw-r--r-- 1 root root 512 2025-10-11 13:53:35.807654746 +0100 mbr.bin

/loop:
total 1
drwxr-xr-x 3 root root 512 2025-10-10 11:00:04.000000000 +0100 EFI

/loop/EFI:
total 1
drwxr-xr-x 2 root root 512 2025-10-10 11:00:04.000000000 +0100 BOOT

/loop/EFI/BOOT:
total 12194
-rwxr-xr-x 1 root root 12486108 2025-10-10 11:00:04.000000000 +0100 BOOTAA64.EFI
```

