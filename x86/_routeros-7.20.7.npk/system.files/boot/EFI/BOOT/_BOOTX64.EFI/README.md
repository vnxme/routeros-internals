### BOOTX64.EFI
#### Identification (`file <*>`):
```
Linux kernel x86 boot executable bzImage, version 5.6.3-64 (gitlab-runner@cicd-a09.mt.lv) #1 SMP Thu Jan 8 09:54:53 UTC 2026, RO-rootFS, swap_dev 0X3, Normal VGA
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Microsoft executable, portable (PE)
14764         0x39AC          xz compressed data
3713584       0x38AA30        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 13544
-rw-r--r-- 1 root root 25729304 2026-01-27 11:35:50.028051995 +0000 39ac.vmlinux
```

