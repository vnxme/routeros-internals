### 43781908-x86-kernel.efi
#### Identification (`file <*>`):
```
Linux kernel x86 boot executable bzImage, version 5.6.3-64 (gitlab-runner@cicd-a13.mt.lv) #1 SMP Tue Jun 2 09:30:36 UTC 2026, RO-rootFS, swap_dev 0X6, Normal VGA
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Microsoft executable, portable (PE)
14764         0x39AC          xz compressed data
6897792       0x694080        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16212
-rw-r--r-- 1 root root 25839896 2026-06-08 09:57:13.893053211 +0100 39ac.vmlinux
```

