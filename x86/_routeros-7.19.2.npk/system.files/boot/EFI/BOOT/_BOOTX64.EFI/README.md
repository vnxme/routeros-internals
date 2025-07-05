### BOOTX64.EFI
#### Identification (`file <*>`):
```
Linux kernel x86 boot executable bzImage, version 5.6.3-64 (agent@cicd-a09.mt.lv) #1 SMP Fri Jun 20 08:09:17 UTC 2025, RO-rootFS, swap_dev 0X3, Normal VGA
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Microsoft executable, portable (PE)
14764         0x39AC          xz compressed data
3532912       0x35E870        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 11372
-rw-r--r-- 1 root root 23603480 2025-07-05 21:02:59.810935720 +0100 39ac.vmlinux
```

