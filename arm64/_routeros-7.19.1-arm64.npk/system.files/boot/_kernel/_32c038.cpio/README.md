### 32c038.cpio
#### Identification (`file <*>`):
```
ASCII cpio archive (SVR4 with no CRC)
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
116           0x74            ASCII cpio archive (SVR4 with no CRC), file name: "dev/ram0", file name length: "0x00000009", file size: "0x00000000"
236           0xEC            ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
360           0x168           ASCII cpio archive (SVR4 with no CRC), file name: "init", file name length: "0x00000005", file size: "0x0002B4D0"
177836        0x2B6AC         ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR <*>`):
```
/:
total 180
drwxrwxrwx 2 root root   4096 2025-06-05 12:57:24.486906356 +0100 dev
-rwxr-xr-x 1 root root 177360 2025-05-23 15:40:47.000000000 +0100 init

/dev:
total 0
crw-rw-rw- 1 root root 5, 1 2011-10-31 10:41:06.000000000 +0000 console
brw-rw-rw- 1 root root 1, 0 2011-10-31 10:41:06.000000000 +0000 ram0
```

