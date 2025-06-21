### chr-7.19.2-arm64.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector; partition 1 : ID=0x83, active, start-CHS (0x0,0,1), end-CHS (0x3fe,241,62), startsector 2048, 67584 sectors; partition 2 : ID=0x83, start-CHS (0x3fe,241,62), end-CHS (0x3fe,241,62), startsector 69632, 188416 sectors
```
#### Listing (`ls -AlR <*>`):
```
/:
total 9
-rw-r--r-- 1 runner docker  512 2025-06-21 20:46:41.280042875 +0100 mbr.bin
drwxr-xr-x 3 root   root    512 1970-01-01 01:00:00.000000000 +0100 part1
drwxr-xr-x 6 root   root   4096 2025-06-20 10:04:50.000000000 +0100 part2

/part1:
total 1
drwxr-xr-x 3 root root 512 2025-06-20 10:04:50.000000000 +0100 EFI

/part1/EFI:
total 1
drwxr-xr-x 2 root root 512 2025-06-20 10:04:50.000000000 +0100 BOOT

/part1/EFI/BOOT:
total 10623
-rwxr-xr-x 1 root root 10877040 2025-06-20 10:04:50.000000000 +0100 BOOTAA64.EFI

/part2:
total 28
drwxr-xr-x 2 root root  4096 2025-06-20 10:04:50.000000000 +0100 boot
drwx------ 2 root root 16384 2025-06-20 10:04:50.000000000 +0100 lost+found
drwxr-xr-x 2 root root  4096 2025-06-20 10:04:50.000000000 +0100 rw
drwxr-xr-x 3 root root  4096 2025-06-20 10:04:50.000000000 +0100 var

/part2/boot:
total 0

/part2/rw:
total 0

/part2/var:
total 4
drwxr-xr-x 3 root root 4096 2025-06-20 10:04:50.000000000 +0100 pdb

/part2/var/pdb:
total 4
drwxr-xr-x 2 root root 4096 2025-06-20 10:04:50.000000000 +0100 system

/part2/var/pdb/system:
total 12608
-rw-r--r-- 1 root root 12962877 2025-06-20 10:04:50.000000000 +0100 image
```

