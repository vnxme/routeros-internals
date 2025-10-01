### chr-7.17.1.img
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
/dev/nbd0p1: LABEL="RouterOS Boot" UUID="01db85a1-116e-42ae-8046-76bc94b528f0" BLOCK_SIZE="4096" TYPE="ext2"
/dev/nbd0p2: LABEL="RouterOS" UUID="3524298e-7c72-48cf-bb82-525cdd64fbdc" SEC_TYPE="ext2" BLOCK_SIZE="4096" TYPE="ext3"
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

Warning! Secondary partition table overlaps the last partition by
1 blocks!
Try reducing the partition table size by 4 entries.
(Use the 's' item on the experts' menu.)
Disk /dev/nbd0: 262144 sectors, 128.0 MiB
Sector size (logical/physical): 512/512 bytes
Disk identifier (GUID): 95A61182-FDA6-624D-8B49-49599AE77187
Partition table holds up to 128 entries
Main partition table begins at sector 2 and ends at sector 33
First usable sector is 34, last usable sector is 258047
Partitions will be aligned on 2-sector boundaries
Total free space is 0 sectors (0 bytes)

Number  Start (sector)    End (sector)  Size       Code  Name
   1              34           65570   32.0 MiB    EF00  RouterOS Boot
   2           65570          258048   94.0 MiB    8300  RouterOS
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 32
-rw-r--r-- 1 root root 17920 2025-10-01 15:44:59.253451234 +0100 gpt.bin
-rw-r--r-- 1 root root   512 2025-10-01 15:44:59.238451231 +0100 mbr.bin
drwxr-xr-x 4 root root  4096 2025-01-30 11:37:54.000000000 +0000 part1
drwxr-xr-x 9 root root  4096 2025-01-30 11:37:54.000000000 +0000 part2

/part1:
total 80
drwxr-xr-x 3 root root  4096 2025-01-30 11:37:54.000000000 +0000 EFI
drwx------ 2 root root 16384 2025-01-30 11:37:51.000000000 +0000 lost+found
-rw-r--r-- 1 root root 56536 2025-01-30 11:37:54.000000000 +0000 map

/part1/EFI:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:37:54.000000000 +0000 BOOT

/part1/EFI/BOOT:
total 3440
-rwxr-xr-x 1 root root 3516640 2025-01-30 11:37:54.000000000 +0000 BOOTX64.EFI

/part1/lost+found:
total 0

/part2:
total 40
-rw------- 1 root root     0 2025-01-30 11:37:54.000000000 +0000 SHOW_LICENSE
-rw------- 1 root root     0 2025-01-30 11:37:54.000000000 +0000 UPGRADED
drwxr-xr-x 2 root root  4096 2025-01-30 11:37:54.000000000 +0000 bin
drwxr-xr-x 2 root root  4096 2025-01-30 11:37:51.000000000 +0000 boot
drw-r--r-- 2 root root  4096 2025-01-30 11:37:54.000000000 +0000 dev
drwx------ 2 root root 16384 2025-01-30 11:37:51.000000000 +0000 lost+found
drwxr-xr-x 3 root root  4096 2025-01-30 11:37:51.000000000 +0000 nova
drwxr-xr-x 2 root root  4096 2025-01-30 11:37:54.000000000 +0000 rw
drwxr-xr-x 3 root root  4096 2025-01-30 11:37:51.000000000 +0000 var

/part2/bin:
total 92
-rwxr-xr-x 1 root root 16972 2025-01-30 11:37:53.000000000 +0000 bash
-rwxr-xr-x 1 root root 66532 2025-01-30 11:37:53.000000000 +0000 milo

/part2/boot:
total 0

/part2/dev:
total 0
brw-r--r-- 1 root root 8, 0 2025-01-30 11:37:54.000000000 +0000 bootdev
brw-r--r-- 1 root root 8, 1 2025-01-30 11:37:54.000000000 +0000 bootpart

/part2/lost+found:
total 0

/part2/nova:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:37:51.000000000 +0000 etc

/part2/nova/etc:
total 4
-rw-r--r-- 1 root root 28 2025-01-30 11:37:51.000000000 +0000 serial

/part2/rw:
total 4
-rw------- 1 root root 0 2025-01-30 11:37:54.000000000 +0000 REBOOT
-rw-r--r-- 1 root root 2 2025-01-30 11:37:54.000000000 +0000 autorun.scr

/part2/var:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:37:54.000000000 +0000 pdb

/part2/var/pdb:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:37:54.000000000 +0000 system

/part2/var/pdb/system:
total 18600
-rw-r--r-- 1 root root 19018556 2025-01-30 11:37:54.000000000 +0000 image
```

