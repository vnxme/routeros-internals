### initramfs.cpio
#### Identification (`file <*>`):
```
ASCII cpio archive (SVR4 with no CRC)
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
116           0x74            ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
240           0xF0            ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
356           0x164           ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR <*>`):
```
/tmp/cpio/:
total 8
drwxr-xr-x 2 root root 4096 May 31 08:47 dev
drwx------ 2 root root 4096 May 23 15:40 root

/tmp/cpio/dev:
total 0
crw------- 1 root root 5, 1 May 23 15:40 console

/tmp/cpio/root:
total 0
```

