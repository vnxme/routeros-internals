### 58525052-x86-kernel.efi
#### Identification (`file <*>`):
```
Linux kernel x86 boot executable bzImage, version 5.6.3-64 (gitlab-runner@cicd-a09.mt.lv) #1 SMP Thu Jan 8 09:54:53 UTC 2026, RO-rootFS, swap_dev 0X6, Normal VGA
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Microsoft executable, portable (PE)
14764         0x39AC          xz compressed data
6933760       0x69CD00        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16240
-rw-r--r-- 1 root root 25729304 2026-01-27 11:36:03.808935467 +0000 39ac.vmlinux
```

