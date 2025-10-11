### BOOTX64.EFI
#### Identification (`file <*>`):
```
Linux kernel x86 boot executable bzImage, version 5.6.3-64 (agent@cicd-a09.mt.lv) #1 SMP Fri Oct 10 09:03:35 UTC 2025, RO-rootFS, swap_dev 0X3, Normal VGA
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Microsoft executable, portable (PE)
14764         0x39AC          xz compressed data
3713680       0x38AA90        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 13544
-rw-r--r-- 1 root root 25729304 2025-10-11 13:54:09.397466429 +0100 39ac.vmlinux
```

