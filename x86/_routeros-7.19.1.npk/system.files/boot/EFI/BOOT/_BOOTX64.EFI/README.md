### BOOTX64.EFI
#### Identification (`file <*>`):
```
Linux kernel x86 boot executable bzImage, version 5.6.3-64 (agent@cicd-a09.mt.lv) #1 SMP Fri May 23 14:42:01 UTC 2025, RO-rootFS, swap_dev 0X3, Normal VGA
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Microsoft executable, portable (PE)
14764         0x39AC          xz compressed data
3533072       0x35E910        xz compressed data
```
#### Listing (`ls -AlR <*>`):
```
/:
total 23052
-rw-r--r-- 1 runner docker 23603480 2025-06-05 12:56:58.961907397 +0100 0.vmlinux
```

