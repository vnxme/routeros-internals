### chr-7.21.2-legacy-bios.img
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
 2      33.6MB  132MB   98.5MB  primary  ext4
```
#### Partition IDs (`blkid`):
```
/dev/nbd0p1: LABEL="RouterOS Boot" UUID="0570f96f-39d1-4bac-8bd2-22b281f67452" BLOCK_SIZE="4096" TYPE="ext2"
/dev/nbd0p2: LABEL="RouterOS" UUID="2bb898f2-3896-4f1b-bf6b-22156594e19d" BLOCK_SIZE="4096" TYPE="ext4"
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
Disk identifier (GUID): 26E9F85B-DAC4-3840-A87A-3E05E210B4F3
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
-rw-r--r-- 1 root root 17920 2026-06-08 15:56:46.039621994 +0100 gpt.bin
-rw-r--r-- 1 root root   512 2026-06-08 15:56:46.023621958 +0100 mbr.bin
drwxr-xr-x 4 root root  4096 2026-01-29 11:11:18.000000000 +0000 part1
drwxr-xr-x 6 root root  4096 2026-01-30 02:45:30.123837379 +0000 part2

/part1:
total 84
drwxr-xr-x 3 root root  4096 2026-01-29 11:11:18.000000000 +0000 EFI
drwx------ 2 root root 16384 2026-01-29 11:11:15.000000000 +0000 lost+found
-rw-r--r-- 1 root root 59392 2026-01-29 11:11:18.000000000 +0000 map

/part1/EFI:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:11:18.000000000 +0000 BOOT

/part1/EFI/BOOT:
total 3788
-rwxr-xr-x 1 root root 3872992 2026-01-29 11:11:18.000000000 +0000 BOOTX64.EFI

/part1/lost+found:
total 0

/part2:
total 28
drwxr-xr-x 2 root root  4096 2026-01-30 02:45:30.123837379 +0000 boot
drwx------ 2 root root 16384 2026-01-30 02:45:30.000000000 +0000 lost+found
drwxr-xr-x 3 root root  4096 2026-01-30 02:45:30.123837379 +0000 rw
drwxr-xr-x 3 root root  4096 2026-01-30 02:45:30.123837379 +0000 var

/part2/boot:
total 0

/part2/lost+found:
total 0

/part2/rw:
total 4
drwxr-xr-x 2 root root 4096 2026-01-30 02:45:30.161837310 +0000 disk

/part2/rw/disk:
total 4
-rw-r--r-- 1 root root 128 2026-01-30 02:45:30.161837310 +0000 rc.local

/part2/var:
total 4
drwxr-xr-x 4 root root 4096 2026-01-30 02:45:30.123837379 +0000 pdb

/part2/var/pdb:
total 8
drwxr-xr-x 2 root root 4096 2026-01-30 02:45:30.130837367 +0000 option
drwxr-xr-x 2 root root 4096 2026-01-30 02:45:30.139837350 +0000 system

/part2/var/pdb/option:
total 1900
-rw-r--r-- 1 root root 1941649 2026-01-30 02:45:30.132837363 +0000 image

/part2/var/pdb/system:
total 19496
-r--r--r-- 1 root root 19961205 2026-01-30 02:45:30.153837325 +0000 image
```

