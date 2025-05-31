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
/tmp/cpio/:
total 180
drwxrwxrwx 2 runner docker   4096 Oct 31  2011 dev
-rwxr-xr-x 1 runner docker 177360 May 23 15:40 init

/tmp/cpio/dev:
total 0
```

