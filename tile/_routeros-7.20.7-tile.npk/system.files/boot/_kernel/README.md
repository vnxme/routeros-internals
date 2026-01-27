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
4049261       0x3DC96D        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 300
-rw-r--r-- 1 root root 329728 2026-01-27 11:36:45.204581089 +0000 3dc96d.cpio
```

