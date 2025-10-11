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
2625036       0x280E0C        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 7820
-rw-r--r-- 1 root root 11020960 2025-10-11 13:54:27.638366841 +0100 12e0c.vmlinux
```

