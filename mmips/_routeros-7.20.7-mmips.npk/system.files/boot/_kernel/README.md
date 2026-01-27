### kernel
#### Identification (`file <*>`):
```
ELF 32-bit LSB executable, MIPS, MIPS32 rel2 version 1 (SYSV), statically linked, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
77056         0x12D00         xz compressed data
77184         0x12D80         xz compressed data
1715584       0x1A2D80        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4752
-rw-r--r-- 1 root root 5036032 2026-01-27 11:36:36.271656761 +0000 12d80.vmlinux
```

