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
85767         0x14F07         Qualcomm device tree container, version: 82817220, DTB entries: 1047691247
1609840       0x189070        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4104
-rw-r--r-- 1 root root 4395768 2025-10-10 21:54:51.063987040 +0100 13070.vmlinux
```

