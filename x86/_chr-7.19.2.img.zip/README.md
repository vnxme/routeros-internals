### chr-7.19.2.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector; partition 1 : ID=0x83, active, start-CHS (0x0,0,35), end-CHS (0x3fe,241,62), startsector 34, 65536 sectors; partition 2 : ID=0x83, start-CHS (0x3fe,241,62), end-CHS (0x3fe,241,62), startsector 65570, 192478 sectors
```
#### Listing (`ls -AlR <*>`):
```
/:
total 12
-rw-r--r-- 1 runner docker  512 2025-06-21 20:46:42.298087654 +0100 mbr.bin
drwxr-xr-x 4 root   root   4096 2025-06-20 10:05:00.000000000 +0100 part1
drwxr-xr-x 9 root   root   4096 2025-06-20 10:05:00.000000000 +0100 part2

/part1:
total 84
drwxr-xr-x 3 root root  4096 2025-06-20 10:05:00.000000000 +0100 EFI
drwx------ 2 root root 16384 2025-06-20 10:04:57.000000000 +0100 lost+found
-rw-r--r-- 1 root root 57568 2025-06-20 10:05:00.000000000 +0100 map

/part1/EFI:
total 4
drwxr-xr-x 2 root root 4096 2025-06-20 10:05:00.000000000 +0100 BOOT

/part1/EFI/BOOT:
total 3588
-rwxr-xr-x 1 root root 3668192 2025-06-20 10:05:00.000000000 +0100 BOOTX64.EFI

/part2:
total 40
-rw------- 1 root root     0 2025-06-20 10:05:00.000000000 +0100 SHOW_LICENSE
-rw------- 1 root root     0 2025-06-20 10:05:00.000000000 +0100 UPGRADED
drwxr-xr-x 2 root root  4096 2025-06-20 10:05:00.000000000 +0100 bin
drwxr-xr-x 2 root root  4096 2025-06-20 10:04:57.000000000 +0100 boot
drw-r--r-- 2 root root  4096 2025-06-20 10:05:00.000000000 +0100 dev
drwx------ 2 root root 16384 2025-06-20 10:04:57.000000000 +0100 lost+found
drwxr-xr-x 3 root root  4096 2025-06-20 10:04:57.000000000 +0100 nova
drwxr-xr-x 2 root root  4096 2025-06-20 10:05:00.000000000 +0100 rw
drwxr-xr-x 3 root root  4096 2025-06-20 10:04:57.000000000 +0100 var

/part2/bin:
total 92
-rwxr-xr-x 1 root root 16972 2025-06-20 10:04:59.000000000 +0100 bash
-rwxr-xr-x 1 root root 66532 2025-06-20 10:04:59.000000000 +0100 milo

/part2/boot:
total 0

/part2/dev:
total 0
b????????? ? ? ? ?                                   ? bootdev
b????????? ? ? ? ?                                   ? bootpart

/part2/nova:
total 4
drwxr-xr-x 2 root root 4096 2025-06-20 10:04:57.000000000 +0100 etc

/part2/nova/etc:
total 4
-rw-r--r-- 1 root root 28 2025-06-20 10:04:57.000000000 +0100 serial

/part2/rw:
total 4
-rw------- 1 root root 0 2025-06-20 10:05:00.000000000 +0100 REBOOT
-rw-r--r-- 1 root root 2 2025-06-20 10:05:00.000000000 +0100 autorun.scr

/part2/var:
total 4
drwxr-xr-x 3 root root 4096 2025-06-20 10:05:00.000000000 +0100 pdb

/part2/var/pdb:
total 4
drwxr-xr-x 2 root root 4096 2025-06-20 10:05:00.000000000 +0100 system

/part2/var/pdb/system:
total 19072
-rw-r--r-- 1 root root 19501909 2025-06-20 10:05:00.000000000 +0100 image
```

