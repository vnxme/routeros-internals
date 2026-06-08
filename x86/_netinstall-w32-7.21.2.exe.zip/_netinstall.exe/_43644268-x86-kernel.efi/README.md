### 43644268-x86-kernel.efi
#### Identification (`file <*>`):
```
Linux kernel x86 boot executable bzImage, version 5.6.3-64 (gitlab-runner@cicd-a09.mt.lv) #1 SMP Thu Jan 29 10:09:44 UTC 2026, RO-rootFS, swap_dev 0X6, Normal VGA
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Microsoft executable, portable (PE)
14764         0x39AC          xz compressed data
6709856       0x666260        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 15996
-rw-r--r-- 1 root root 25733400 2026-06-08 15:57:39.834542227 +0100 39ac.vmlinux
```

