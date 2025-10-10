### 143-x86-kernel.efi
#### Identification (`file <*>`):
```
Linux kernel x86 boot executable bzImage, version 5.6.3-64 (agent@cicd-a09.mt.lv) #1 SMP Mon Oct 6 13:20:53 UTC 2025, RO-rootFS, swap_dev 0X6, Normal VGA
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             Microsoft executable, portable (PE)
14764         0x39AC          xz compressed data
2709667       0x2958A3        MySQL MISAM index file Version 4
6706656       0x6655E0        xz compressed data
6842338       0x6867E2        LZMA compressed data, properties: 0x66, dictionary size: 0 bytes, uncompressed size: 2048 bytes
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16000
-rw-r--r-- 1 root root 25729304 2025-10-10 21:54:19.106663859 +0100 39ac.vmlinux
```

