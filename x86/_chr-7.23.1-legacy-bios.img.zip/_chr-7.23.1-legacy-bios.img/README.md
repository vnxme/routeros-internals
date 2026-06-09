### chr-7.23.1-legacy-bios.img
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
/dev/nbd0p1: LABEL="RouterOS Boot" UUID="389ea908-59e6-449b-bcea-ca689306e721" BLOCK_SIZE="4096" TYPE="ext2"
/dev/nbd0p2: LABEL="RouterOS" UUID="f5019c2f-a0e1-49cd-83b0-b1d37732246c" BLOCK_SIZE="4096" TYPE="ext4"
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
Disk identifier (GUID): B3F83F42-0B7E-D744-B7D7-EB9370164704
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
-rw-r--r-- 1 root root 17920 2026-06-09 10:31:43.760759390 +0100 gpt.bin
-rw-r--r-- 1 root root   512 2026-06-09 10:31:43.742933117 +0100 mbr.bin
drwxr-xr-x 4 root root  4096 2026-06-02 10:55:32.000000000 +0100 part1
drwxr-xr-x 6 root root  4096 2026-06-04 05:57:13.968604368 +0100 part2

/part1:
total 84
drwxr-xr-x 3 root root  4096 2026-06-02 10:55:32.000000000 +0100 EFI
drwx------ 2 root root 16384 2026-06-02 10:55:31.000000000 +0100 lost+found
-rw-r--r-- 1 root root 60416 2026-06-02 10:55:32.000000000 +0100 map

/part1/EFI:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:55:32.000000000 +0100 BOOT

/part1/EFI/BOOT:
total 3936
-rwxr-xr-x 1 root root 4024544 2026-06-02 10:55:32.000000000 +0100 BOOTX64.EFI

/part1/lost+found:
total 0

/part2:
total 28
drwxr-xr-x 2 root root  4096 2026-06-04 05:57:13.968604368 +0100 boot
drwx------ 2 root root 16384 2026-06-04 05:57:13.000000000 +0100 lost+found
drwxr-xr-x 3 root root  4096 2026-06-04 05:57:13.968604368 +0100 rw
drwxr-xr-x 3 root root  4096 2026-06-04 05:57:13.968604368 +0100 var

/part2/boot:
total 0

/part2/lost+found:
total 0

/part2/rw:
total 4
drwxr-xr-x 2 root root 4096 2026-06-04 05:57:14.013605219 +0100 disk

/part2/rw/disk:
total 4
-rw-r--r-- 1 root root 128 2026-06-04 05:57:14.013605219 +0100 rc.local

/part2/var:
total 4
drwxr-xr-x 4 root root 4096 2026-06-04 05:57:13.968604368 +0100 pdb

/part2/var/pdb:
total 8
drwxr-xr-x 2 root root 4096 2026-06-04 05:57:13.977604538 +0100 option
drwxr-xr-x 2 root root 4096 2026-06-04 05:57:13.988604746 +0100 system

/part2/var/pdb/option:
total 1900
-rw-r--r-- 1 root root 1941649 2026-06-04 05:57:13.979604576 +0100 image

/part2/var/pdb/system:
total 19952
-r--r--r-- 1 root root 20428891 2026-06-04 05:57:14.003605030 +0100 image
```

