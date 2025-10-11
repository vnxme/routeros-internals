### chr-7.20.1-arm64.img
#### Identification (`file <*>`):
```
DOS/MBR boot sector; partition 1 : ID=0x83, active, start-CHS (0x0,0,35), end-CHS (0x4,20,50), startsector 34, 65536 sectors; partition 2 : ID=0x83, start-CHS (0x4,20,51), end-CHS (0x10,80,31), startsector 65570, 196541 sectors
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
 1      17.4kB  33.6MB  33.6MB  primary  fat16        boot
 2      33.6MB  134MB   101MB   primary  ext4
```
#### Partition IDs (`blkid`):
```
/dev/nbd0p1: SEC_TYPE="msdos" LABEL_FATBOOT="Boot" LABEL="Boot" UUID="887C-00A3" BLOCK_SIZE="512" TYPE="vfat"
/dev/nbd0p2: LABEL="RouterOS" UUID="4024418d-2767-43e2-b61c-5edb3e79b5f8" BLOCK_SIZE="4096" TYPE="ext4"
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
/dev/nbd0p2      65570 262110  196541  96M 83 Linux
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
Disk identifier (GUID): 937AB320-FC9E-4B77-9C9E-4BE32A60F007
Partition table holds up to 128 entries
Main partition table begins at sector 2 and ends at sector 33
First usable sector is 34, last usable sector is 262110
Partitions will be aligned on 2-sector boundaries
Total free space is 0 sectors (0 bytes)

Number  Start (sector)    End (sector)  Size       Code  Name
   1              34           65569   32.0 MiB    8300  RouterOS Boot
   2           65570          262110   96.0 MiB    8300  RouterOS
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 44
-rw-r--r-- 1 root root 17920 2025-10-11 13:56:49.717475270 +0100 gpt.bin
-rw-r--r-- 1 root root   512 2025-10-11 13:56:49.703475337 +0100 mbr.bin
drwxr-xr-x 3 root root 16384 1970-01-01 01:00:00.000000000 +0100 part1
drwxr-xr-x 6 root root  4096 2025-10-11 02:53:12.144716924 +0100 part2

/part1:
total 2
drwxr-xr-x 3 root root 2048 2025-10-11 02:53:12.000000000 +0100 EFI

/part1/EFI:
total 2
drwxr-xr-x 2 root root 2048 2025-10-11 02:53:12.000000000 +0100 BOOT

/part1/EFI/BOOT:
total 11024
-rwxr-xr-x 1 root root 11286808 2025-10-11 02:53:12.000000000 +0100 BOOTAA64.EFI

/part2:
total 28
drwxr-xr-x 2 root root  4096 2025-10-11 02:53:12.144716924 +0100 boot
drwx------ 2 root root 16384 2025-10-11 02:53:11.000000000 +0100 lost+found
drwxr-xr-x 2 root root  4096 2025-10-11 02:53:12.144716924 +0100 rw
drwxr-xr-x 3 root root  4096 2025-10-11 02:53:12.144716924 +0100 var

/part2/boot:
total 0

/part2/lost+found:
total 0

/part2/rw:
total 0

/part2/var:
total 4
drwxr-xr-x 4 root root 4096 2025-10-11 02:53:12.144716924 +0100 pdb

/part2/var/pdb:
total 8
drwxr-xr-x 2 root root 4096 2025-10-11 02:53:12.152716924 +0100 option
drwxr-xr-x 2 root root 4096 2025-10-11 02:53:12.161716924 +0100 system

/part2/var/pdb/option:
total 1668
-rw-r--r-- 1 root root 1704081 2025-10-11 02:53:12.153716924 +0100 image

/part2/var/pdb/system:
total 13540
-r--r--r-- 1 root root 13861193 2025-10-11 02:53:12.171716924 +0100 image
```

