### 11ba5a0.cpio
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
360           0x168           ASCII cpio archive (SVR4 with no CRC), file name: "floppy", file name length: "0x00000007", file size: "0x00000000"
480           0x1E0           ASCII cpio archive (SVR4 with no CRC), file name: "init", file name length: "0x00000005", file size: "0x000264E8"
157500        0x2673C         ASCII cpio archive (SVR4 with no CRC), file name: "mnt", file name length: "0x00000004", file size: "0x00000000"
157616        0x267B0         ASCII cpio archive (SVR4 with no CRC), file name: "proc", file name length: "0x00000005", file size: "0x00000000"
157732        0x26824         ASCII cpio archive (SVR4 with no CRC), file name: "setup", file name length: "0x00000006", file size: "0x000355E8"
376448        0x5BE80         ASCII cpio archive (SVR4 with no CRC), file name: "tmp", file name length: "0x00000004", file size: "0x00000000"
376564        0x5BEF4         ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR <*>`):
```
/:
total 392
drwxrwxrwx 2 root root   4096 2025-06-11 20:37:00.790765045 +0100 dev
drwxr-xr-x 2 root root   4096 2025-05-23 15:40:56.000000000 +0100 floppy
-rwxr-xr-x 1 root root 156904 2025-05-23 15:40:56.000000000 +0100 init
drwxr-xr-x 2 root root   4096 2025-05-23 15:40:56.000000000 +0100 mnt
drwxr-xr-x 2 root root   4096 2025-05-23 15:40:56.000000000 +0100 proc
-rwxr-xr-x 1 root root 218600 2025-05-23 15:40:56.000000000 +0100 setup
drwxr-xr-x 2 root root   4096 2025-05-23 15:40:56.000000000 +0100 tmp

/dev:
total 0
crw-rw-rw- 1 root root 5, 1 2011-10-31 10:41:06.000000000 +0000 console
brw-rw-rw- 1 root root 1, 0 2011-10-31 10:41:06.000000000 +0000 ram0

/floppy:
total 0

/mnt:
total 0

/proc:
total 0

/tmp:
total 0
```

