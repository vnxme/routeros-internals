### 43638052-x86-kernel.efi
#### Identification (`file <*>`):
```
Linux kernel x86 boot executable bzImage, version 5.6.3-64 (gitlab-runner@cicd-a13.mt.lv) #1 SMP Wed Apr 22 08:09:31 UTC 2026, RO-rootFS, swap_dev 0X6, Normal VGA
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Microsoft executable, portable (PE)
14764         0x39AC          xz compressed data
6892672       0x692C80        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16188
-rw-r--r-- 1 root root 25856280 2026-05-02 20:31:41.056578784 +0100 39ac.vmlinux
```

