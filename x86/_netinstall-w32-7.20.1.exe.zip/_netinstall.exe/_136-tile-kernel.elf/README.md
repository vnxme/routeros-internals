### 136-tile-kernel.elf
#### Identification (`file <*>`):
```
ELF 64-bit LSB executable, Tilera TILE-Gx, version 1 (SYSV), statically linked, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 64-bit LSB executable, version 1 (SYSV)
723277        0xB094D         bzip2 compressed data, block size = 900k
4048733       0x3DC75D        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 8544
-rw-r--r-- 1 root root 9166336 2025-10-11 13:55:39.048009858 +0100 3dc75d.cpio
```

