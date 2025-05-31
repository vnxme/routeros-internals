### efiboot.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector, code offset 0x58+2, OEM-ID "mkfs.fat", Media descriptor 0xf8, sectors/track 32, heads 64, sectors 69632 (volumes > 32 MB), FAT (32 bit), sectors/FAT 536, serial number 0x5fab5693, label: "ROUTEROS   "
```
#### Listing (`ls -AlR <*>`):
```
/tmp/img/:
total 3583
drwxr-xr-x 3 root root     512 May 23 16:36 EFI
-rwxr-xr-x 1 root root 3668192 May 23 16:36 linux.x86_64

/tmp/img/EFI:
total 1
drwxr-xr-x 2 root root 512 May 23 16:36 BOOT

/tmp/img/EFI/BOOT:
total 203
-rwxr-xr-x 1 root root 207168 May 23 16:36 BOOTX64.EFI
-rwxr-xr-x 1 root root    230 May 23 16:36 refind.conf
```

