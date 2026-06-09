### BOOTX64.EFI
#### Identification (`file <*>`):
```
Linux kernel x86 boot executable bzImage, version 5.6.3-64 (gitlab-runner@cicd-a13.mt.lv) #1 SMP Tue Jun 2 09:30:36 UTC 2026, RO-rootFS, swap_dev 0X3, Normal VGA
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Microsoft executable, portable (PE)
14764         0x39AC          xz compressed data
3886128       0x3B4C30        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 13732
-rw-r--r-- 1 root root 25839896 2026-06-09 10:32:11.775579732 +0100 39ac.vmlinux
```

