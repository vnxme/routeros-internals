### kernel
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV), statically linked, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV)
77800         0x12FE8         xz compressed data
77936         0x13070         xz compressed data
1374454       0x14F8F6        MySQL ISAM compressed data file Version 1
1609840       0x189070        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4104
-rw-r--r-- 1 root root 4395760 2025-09-15 12:16:57.900304719 +0100 13070.vmlinux
```

