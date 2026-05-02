### kernel
#### Identification (`file <*>`):
```
ELF 64-bit LSB executable, Tilera TILE-Gx, version 1 (SYSV), statically linked, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 64-bit LSB executable, version 1 (SYSV)
723285        0xB0955         bzip2 compressed data, block size = 900k
4055477       0x3DE1B5        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 308
-rw-r--r-- 1 root root 329728 2026-05-02 20:32:18.076583352 +0100 3de1b5.cpio
```

