### BOOTX64.EFI
#### Identification (`file <*>`):
```
Linux kernel x86 boot executable bzImage, version 5.6.3-64 (agent@cicd-a09.mt.lv) #1 SMP Mon Oct 6 13:20:53 UTC 2025, RO-rootFS, swap_dev 0X3, Normal VGA
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Microsoft executable, portable (PE)
14764         0x39AC          xz compressed data
3735440       0x38FF90        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 13544
-rw-r--r-- 1 root root 25729304 2025-10-10 21:54:06.521512648 +0100 39ac.vmlinux
```

