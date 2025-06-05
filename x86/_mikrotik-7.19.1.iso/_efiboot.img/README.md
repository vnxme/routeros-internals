### efiboot.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector, code offset 0x58+2, OEM-ID "mkfs.fat", Media descriptor 0xf8, sectors/track 32, heads 64, sectors 69632 (volumes > 32 MB), FAT (32 bit), sectors/FAT 536, serial number 0x5fab5693, label: "ROUTEROS   "
```
#### Listing (`ls -AlR <*>`):
```
/:
total 3583
drwxr-xr-x 3 root root     512 2025-05-23 16:36:26.000000000 +0100 EFI
-rwxr-xr-x 1 root root 3668192 2025-05-23 16:36:26.000000000 +0100 linux.x86_64

/EFI:
total 1
drwxr-xr-x 2 root root 512 2025-05-23 16:36:26.000000000 +0100 BOOT

/EFI/BOOT:
total 203
-rwxr-xr-x 1 root root 207168 2025-05-23 16:36:26.000000000 +0100 BOOTX64.EFI
-rwxr-xr-x 1 root root    230 2025-05-23 16:36:26.000000000 +0100 refind.conf
```

#### Replacements (`ln -sfr <*> <*>`):
```
x86/_mikrotik-7.19.1.iso/_efiboot.img/linux.x86_64 x86/_routeros-7.19.1.npk/system.files/boot/EFI/BOOT/BOOTX64.EFI
```

