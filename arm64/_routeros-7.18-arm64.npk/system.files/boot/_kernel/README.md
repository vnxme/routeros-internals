### kernel
#### Identification (`file <*>`):
```
ELF 64-bit LSB executable, ARM aarch64, version 1 (SYSV), statically linked, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 64-bit LSB executable, version 1 (SYSV)
77824         0x13000         xz compressed data
77880         0x13038         xz compressed data
3203128       0x30E038        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 9768
-rw-r--r-- 1 root root 11007272 2025-09-05 15:50:33.369157711 +0100 13038.vmlinux
```

