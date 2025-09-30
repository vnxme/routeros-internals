### efiboot.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector, code offset 0x58+2, OEM-ID "mkfs.fat", Media descriptor 0xf8, sectors/track 32, heads 64, sectors 69632 (volumes > 32 MB), FAT (32 bit), sectors/FAT 536, serial number 0xe91dc099, label: "ROUTEROS   "
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
/dev/nbd0: LABEL_FATBOOT="ROUTEROS" LABEL="ROUTEROS" UUID="E91D-C099" BLOCK_SIZE="512" TYPE="vfat"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 5
drwxr-xr-x 3 root root 512 1970-01-01 01:00:00.000000000 +0100 loop
-rw-r--r-- 1 root root 512 2025-09-30 12:03:06.150010173 +0100 mbr.bin

/loop:
total 3451
drwxr-xr-x 3 root root     512 2025-02-28 12:39:44.000000000 +0000 EFI
-rwxr-xr-x 1 root root 3533024 2025-02-28 12:39:44.000000000 +0000 linux.x86_64

/loop/EFI:
total 1
drwxr-xr-x 2 root root 512 2025-02-28 12:39:44.000000000 +0000 BOOT

/loop/EFI/BOOT:
total 203
-rwxr-xr-x 1 root root 207168 2025-02-28 12:39:44.000000000 +0000 BOOTX64.EFI
-rwxr-xr-x 1 root root    230 2025-02-28 12:39:44.000000000 +0000 refind.conf
```

