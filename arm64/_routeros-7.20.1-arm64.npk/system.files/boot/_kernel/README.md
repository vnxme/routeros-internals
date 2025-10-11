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
3424312       0x344038        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 10492
-rw-r--r-- 1 root root 11796840 2025-10-11 13:54:34.189342587 +0100 13038.vmlinux
```

