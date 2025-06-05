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
3326008       0x32C038        xz compressed data
```
#### Listing (`ls -AlR <*>`):
```
/:
total 10344
-rw-r--r-- 1 runner docker 11368808 2025-06-05 12:57:07.232805870 +0100 13038.vmlinux
-rw-r--r-- 1 runner docker   178176 2025-06-05 12:57:08.012740388 +0100 32c038.cpio
```

