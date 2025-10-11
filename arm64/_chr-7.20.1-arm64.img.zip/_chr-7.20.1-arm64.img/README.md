### chr-7.20.1-arm64.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector; partition 1 : ID=0x83, active, start-CHS (0x0,0,1), end-CHS (0x3fe,241,62), startsector 2048, 67584 sectors; partition 2 : ID=0x83, start-CHS (0x3fe,241,62), end-CHS (0x3fe,241,62), startsector 69632, 188416 sectors
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
 1      1049kB  35.7MB  34.6MB  primary  fat32        boot
 2      35.7MB  132MB   96.5MB  primary  ext4
```
#### Partition IDs (`blkid`):
```
/dev/nbd0p1: UUID="92E0-7CB7" BLOCK_SIZE="512" TYPE="vfat"
/dev/nbd0p2: UUID="008f703c-2a25-4445-9076-6991b4000e34" BLOCK_SIZE="4096" TYPE="ext4"
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
/dev/nbd0p1 *     2048  69631   67584  33M 83 Linux
/dev/nbd0p2      69632 258047  188416  92M 83 Linux
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
Disk identifier (GUID): 0C2C8BC0-E5F7-43B1-8418-DA8DABC76480
Partition table holds up to 128 entries
Main partition table begins at sector 2 and ends at sector 33
First usable sector is 34, last usable sector is 262110
Partitions will be aligned on 2048-sector boundaries
Total free space is 6077 sectors (3.0 MiB)

Number  Start (sector)    End (sector)  Size       Code  Name
   1            2048           69631   33.0 MiB    EF00  RouterOS-Boot
   2           69632          258047   92.0 MiB    8300  RouterOS
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 29
-rw-r--r-- 1 root root 17920 2025-10-11 13:53:30.687686181 +0100 gpt.bin
-rw-r--r-- 1 root root   512 2025-10-11 13:53:30.671686278 +0100 mbr.bin
drwxr-xr-x 3 root root   512 1970-01-01 01:00:00.000000000 +0100 part1
drwxr-xr-x 6 root root  4096 2025-10-10 11:00:13.000000000 +0100 part2

/part1:
total 1
drwxr-xr-x 3 root root 512 2025-10-10 11:00:14.000000000 +0100 EFI

/part1/EFI:
total 1
drwxr-xr-x 2 root root 512 2025-10-10 11:00:14.000000000 +0100 BOOT

/part1/EFI/BOOT:
total 11023
-rwxr-xr-x 1 root root 11286808 2025-10-10 11:00:14.000000000 +0100 BOOTAA64.EFI

/part2:
total 28
drwxr-xr-x 2 root root  4096 2025-10-10 11:00:13.000000000 +0100 boot
drwx------ 2 root root 16384 2025-10-10 11:00:13.000000000 +0100 lost+found
drwxr-xr-x 2 root root  4096 2025-10-10 11:00:13.000000000 +0100 rw
drwxr-xr-x 3 root root  4096 2025-10-10 11:00:13.000000000 +0100 var

/part2/boot:
total 0

/part2/lost+found:
total 0

/part2/rw:
total 0

/part2/var:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 11:00:13.000000000 +0100 pdb

/part2/var/pdb:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 11:00:13.000000000 +0100 system

/part2/var/pdb/system:
total 12832
-rw-r--r-- 1 root root 13192436 2025-10-10 11:00:13.000000000 +0100 image
```

