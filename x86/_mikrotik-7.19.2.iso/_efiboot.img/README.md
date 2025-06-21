### efiboot.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector, code offset 0x58+2, OEM-ID "mkfs.fat", Media descriptor 0xf8, sectors/track 32, heads 64, sectors 69632 (volumes > 32 MB), FAT (32 bit), sectors/FAT 536, serial number 0x42b36fa8, label: "ROUTEROS   "
```
#### Listing (`ls -AlR <*>`):
```
/:
total 5
drwxr-xr-x 3 root   root   512 1970-01-01 01:00:00.000000000 +0100 loop
-rw-r--r-- 1 runner docker 512 2025-06-21 20:46:43.956132078 +0100 mbr.bin

/loop:
total 3583
drwxr-xr-x 3 root root     512 2025-06-20 10:04:42.000000000 +0100 EFI
-rwxr-xr-x 1 root root 3668192 2025-06-20 10:04:42.000000000 +0100 linux.x86_64

/loop/EFI:
total 1
drwxr-xr-x 2 root root 512 2025-06-20 10:04:42.000000000 +0100 BOOT

/loop/EFI/BOOT:
total 203
-rwxr-xr-x 1 root root 207168 2025-06-20 10:04:42.000000000 +0100 BOOTX64.EFI
-rwxr-xr-x 1 root root    230 2025-06-20 10:04:42.000000000 +0100 refind.conf
```

