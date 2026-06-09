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
3604536       0x370038        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 11112
-rw-r--r-- 1 root root 12548136 2026-06-09 10:32:35.036132057 +0100 13038.vmlinux
```

