### kernel
#### Identification (`file <*>`):
```
ELF 32-bit LSB executable, ARM, EABI5 version 1 (SYSV), statically linked, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit LSB executable, ARM, version 1 (SYSV)
77292         0x12DEC         xz compressed data
77324         0x12E0C         xz compressed data
2301151       0x231CDF        MySQL ISAM index file Version 2
2481676       0x25DE0C        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 7340
-rw-r--r-- 1 root root 9945280 2025-09-30 15:47:22.764056881 +0100 12e0c.vmlinux
```

