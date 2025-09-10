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
2604556       0x27BE0C        xz compressed data
2645010       0x285C12        gzip compressed data, has header CRC, has 30575 bytes of extra data, has comment, last modified: 2000-05-28 21:18:47
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 7764
-rw-r--r-- 1 root root 11013600 2025-09-10 20:25:47.089278130 +0100 12e0c.vmlinux
```

