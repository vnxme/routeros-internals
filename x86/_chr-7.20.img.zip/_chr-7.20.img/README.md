### chr-7.20.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector; partition 1 : ID=0x83, active, start-CHS (0x0,0,35), end-CHS (0x3fe,241,62), startsector 34, 65536 sectors; partition 2 : ID=0x83, start-CHS (0x3fe,241,62), end-CHS (0x3fe,241,62), startsector 65570, 192478 sectors
```
#### Block device info (`blockdev --report <*>`):
```
RO    RA   SSZ   BSZ        StartSec            Size   Device
rw   512   512  4096               0       134217728   /dev/nbd0
```
#### Partition info (`parted <*> print`):
```
Model: Unknown (unknown)
Disk /dev/nbd0: 134MB
Sector size (logical/physical): 512B/512B
Partition Table: msdos
Disk Flags: 

Number  Start   End     Size    Type     File system  Flags
 1      17.4kB  33.6MB  33.6MB  primary  ext2         boot
 2      33.6MB  132MB   98.5MB  primary  ext3
```
#### Partition IDs (`blkid`):
```
/dev/nbd0p1: LABEL="RouterOS Boot" UUID="e788cce7-d29f-4924-962d-872f99584d5a" BLOCK_SIZE="4096" TYPE="ext2"
/dev/nbd0p2: LABEL="RouterOS" UUID="496a35fa-92c3-4330-bc9a-f16983e999ec" SEC_TYPE="ext2" BLOCK_SIZE="4096" TYPE="ext3"
```
#### MBR info (`fdisk -l <*>`):
```
Disk /dev/nbd0: 128 MiB, 134217728 bytes, 262144 sectors
Units: sectors of 1 * 512 = 512 bytes
Sector size (logical/physical): 512 bytes / 512 bytes
I/O size (minimum/optimal): 512 bytes / 131072 bytes
Disklabel type: dos
Disk identifier: 0x00000000

Device      Boot Start    End Sectors Size Id Type
/dev/nbd0p1 *       34  65569   65536  32M 83 Linux
/dev/nbd0p2      65570 258047  192478  94M 83 Linux
```
#### GPT info (`gdisk -l <*>`):
```
GPT fdisk (gdisk) version 1.0.10

Partition table scan:
  MBR: MBR only
  BSD: not present
  APM: not present
  GPT: present

Found valid MBR and GPT. Which do you want to use?
 1 - MBR
 2 - GPT
 3 - Create blank GPT

Your answer: Using GPT and creating fresh protective MBR.
Disk /dev/nbd0: 262144 sectors, 128.0 MiB
Sector size (logical/physical): 512/512 bytes
Disk identifier (GUID): 36CBBB1A-CF72-0641-B992-F3B8283EF196
Partition table holds up to 128 entries
Main partition table begins at sector 2 and ends at sector 33
First usable sector is 34, last usable sector is 258047
Partitions will be aligned on 2-sector boundaries
Total free space is 0 sectors (0 bytes)

Number  Start (sector)    End (sector)  Size       Code  Name
   1              34           65569   32.0 MiB    EF00  RouterOS Boot
   2           65570          258047   94.0 MiB    8300  RouterOS
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 32
-rw-r--r-- 1 root root 17920 2025-10-04 13:59:34.900898255 +0100 gpt.bin
-rw-r--r-- 1 root root   512 2025-10-04 13:59:34.883898352 +0100 mbr.bin
drwxr-xr-x 4 root root  4096 2025-09-29 11:44:33.000000000 +0100 part1
drwxr-xr-x 9 root root  4096 2025-09-29 11:44:33.000000000 +0100 part2

/part1:
total 84
drwxr-xr-x 3 root root  4096 2025-09-29 11:44:33.000000000 +0100 EFI
drwx------ 2 root root 16384 2025-09-29 11:44:30.000000000 +0100 lost+found
-rw-r--r-- 1 root root 59116 2025-09-29 11:44:33.000000000 +0100 map

/part1/EFI:
total 4
drwxr-xr-x 2 root root 4096 2025-09-29 11:44:33.000000000 +0100 BOOT

/part1/EFI/BOOT:
total 3764
-rwxr-xr-x 1 root root 3848416 2025-09-29 11:44:33.000000000 +0100 BOOTX64.EFI

/part1/lost+found:
total 0

/part2:
total 40
-rw------- 1 root root     0 2025-09-29 11:44:33.000000000 +0100 SHOW_LICENSE
-rw------- 1 root root     0 2025-09-29 11:44:33.000000000 +0100 UPGRADED
drwxr-xr-x 2 root root  4096 2025-09-29 11:44:33.000000000 +0100 bin
drwxr-xr-x 2 root root  4096 2025-09-29 11:44:30.000000000 +0100 boot
drw-r--r-- 2 root root  4096 2025-09-29 11:44:33.000000000 +0100 dev
drwx------ 2 root root 16384 2025-09-29 11:44:30.000000000 +0100 lost+found
drwxr-xr-x 3 root root  4096 2025-09-29 11:44:30.000000000 +0100 nova
drwxr-xr-x 2 root root  4096 2025-09-29 11:44:33.000000000 +0100 rw
drwxr-xr-x 3 root root  4096 2025-09-29 11:44:30.000000000 +0100 var

/part2/bin:
total 92
-rwxr-xr-x 1 root root 16972 2025-09-29 11:44:32.000000000 +0100 bash
-rwxr-xr-x 1 root root 66532 2025-09-29 11:44:32.000000000 +0100 milo

/part2/boot:
total 0

/part2/dev:
total 0
brw-r--r-- 1 root root 8, 0 2025-09-29 11:44:33.000000000 +0100 bootdev
brw-r--r-- 1 root root 8, 1 2025-09-29 11:44:33.000000000 +0100 bootpart

/part2/lost+found:
total 0

/part2/nova:
total 4
drwxr-xr-x 2 root root 4096 2025-09-29 11:44:30.000000000 +0100 etc

/part2/nova/etc:
total 4
-rw-r--r-- 1 root root 28 2025-09-29 11:44:30.000000000 +0100 serial

/part2/rw:
total 4
-rw------- 1 root root 0 2025-09-29 11:44:33.000000000 +0100 REBOOT
-rw-r--r-- 1 root root 2 2025-09-29 11:44:33.000000000 +0100 autorun.scr

/part2/var:
total 4
drwxr-xr-x 3 root root 4096 2025-09-29 11:44:33.000000000 +0100 pdb

/part2/var/pdb:
total 4
drwxr-xr-x 2 root root 4096 2025-09-29 11:44:33.000000000 +0100 system

/part2/var/pdb/system:
total 19588
-rw-r--r-- 1 root root 20030323 2025-09-29 11:44:33.000000000 +0100 image
```

