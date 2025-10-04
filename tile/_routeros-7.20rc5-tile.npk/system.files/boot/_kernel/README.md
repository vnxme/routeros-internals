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
723277        0xB094D         bzip2 compressed data, block size = 900k
4050013       0x3DCC5D        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 300
-rw-r--r-- 1 root root 329728 2025-10-04 13:53:35.890300520 +0100 3dcc5d.cpio
```

