### rose-storage.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 3100536 bytes, 104 inodes, blocksize: 262144 bytes, created: Thu Jan 30 11:31:21 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
drwxr-xr-x 2 root root 4096 2025-01-30 11:29:07.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-01-30 11:30:56.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:45.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2025-01-30 11:31:02.000000000 +0000 nova

/bin:
total 6068
-rwxr-xr-x 1 root root 1253376 2025-01-30 11:20:16.000000000 +0000 btrfs
lrwxrwxrwx 1 root root       5 2025-01-30 11:21:15.000000000 +0000 btrfs-image -> btrfs
lrwxrwxrwx 1 root root       5 2025-01-30 11:21:15.000000000 +0000 btrfstune -> btrfs
-rwxr-xr-x 1 root root 1208744 2025-01-30 11:16:17.000000000 +0000 fio
-rwxr-xr-x 1 root root  508272 2025-01-30 11:25:06.000000000 +0000 mdadm
lrwxrwxrwx 1 root root       5 2025-01-30 11:21:15.000000000 +0000 mkfs.btrfs -> btrfs
-rwxr-xr-x 1 root root  567544 2025-01-30 11:25:06.000000000 +0000 nvme
-rwxr-xr-x 1 root root  432904 2025-01-30 11:29:07.000000000 +0000 rsync
-rwxr-xr-x 1 root root 1142496 2025-01-30 11:26:00.000000000 +0000 sedutil-cli
-rwxr-xr-x 1 root root  739256 2025-01-30 11:23:50.000000000 +0000 smartctl
-rwxr-xr-x 1 root root  344404 2025-01-30 11:24:55.000000000 +0000 switchtec

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:30:56.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:30:56.000000000 +0000 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root  34 2025-01-30 11:30:56.000000000 +0000 storage-cdcd5c9a3a47.jg.gz
-rwxr-xr-x 1 root root 105 2025-01-30 11:30:56.000000000 +0000 storage.info
lrwxrwxrwx 1 root root  26 2025-01-30 11:30:56.000000000 +0000 storage.jg.gz -> storage-cdcd5c9a3a47.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:45.000000000 +0000 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:31:09.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 8 root root 4096 2025-01-30 11:14:46.000000000 +0000 kernel
-rw-r--r-- 1 root root  988 2025-01-30 11:31:11.000000000 +0000 modules.dep.storage

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:46.000000000 +0000 arch
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:46.000000000 +0000 crypto
drwxr-xr-x 7 root root 4096 2025-01-30 11:14:47.000000000 +0000 drivers
drwxr-xr-x 8 root root 4096 2025-01-30 11:14:47.000000000 +0000 fs
drwxr-xr-x 4 root root 4096 2025-01-30 11:14:47.000000000 +0000 lib
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:46.000000000 +0000 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:46.000000000 +0000 arm

/lib/modules/5.6.3/kernel/arch/arm:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:46.000000000 +0000 lib

/lib/modules/5.6.3/kernel/arch/arm/lib:
total 4
-rw-r--r-- 1 root root 3788 2025-01-30 11:10:53.000000000 +0000 xor-neon.ko

/lib/modules/5.6.3/kernel/crypto:
total 28
drwxr-xr-x 2 root root  4096 2025-01-30 11:14:45.000000000 +0000 async_tx
-rw-r--r-- 1 root root 10016 2025-01-30 11:10:54.000000000 +0000 essiv.ko
-rw-r--r-- 1 root root  8840 2025-01-30 11:10:54.000000000 +0000 xor.ko

/lib/modules/5.6.3/kernel/crypto/async_tx:
total 36
-rw-r--r-- 1 root root 4112 2025-01-30 11:10:53.000000000 +0000 async_memcpy.ko
-rw-r--r-- 1 root root 7828 2025-01-30 11:10:53.000000000 +0000 async_pq.ko
-rw-r--r-- 1 root root 3424 2025-01-30 11:10:53.000000000 +0000 async_raid6_recov.ko
-rw-r--r-- 1 root root 4596 2025-01-30 11:10:53.000000000 +0000 async_tx.ko
-rw-r--r-- 1 root root 6108 2025-01-30 11:10:53.000000000 +0000 async_xor.ko

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:47.000000000 +0000 block
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:46.000000000 +0000 md
drwxr-xr-x 4 root root 4096 2025-01-30 11:14:45.000000000 +0000 nvme
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:47.000000000 +0000 scsi
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:46.000000000 +0000 target

/lib/modules/5.6.3/kernel/drivers/block:
total 12
-rw-r--r-- 1 root root 10036 2025-01-30 11:10:54.000000000 +0000 brd.ko

/lib/modules/5.6.3/kernel/drivers/md:
total 596
-rw-r--r-- 1 root root  22980 2025-01-30 11:10:54.000000000 +0000 dm-bufio.ko
-rw-r--r-- 1 root root  34188 2025-01-30 11:10:54.000000000 +0000 dm-crypt.ko
-rw-r--r-- 1 root root  51552 2025-01-30 11:10:54.000000000 +0000 dm-integrity.ko
-rw-r--r-- 1 root root 111460 2025-01-30 11:10:54.000000000 +0000 dm-mod.ko
-rw-r--r-- 1 root root   6440 2025-01-30 11:10:54.000000000 +0000 faulty.ko
-rw-r--r-- 1 root root   7228 2025-01-30 11:10:54.000000000 +0000 linear.ko
-rw-r--r-- 1 root root 133600 2025-01-30 11:10:54.000000000 +0000 md-mod.ko
-rw-r--r-- 1 root root  12488 2025-01-30 11:10:54.000000000 +0000 raid0.ko
-rw-r--r-- 1 root root  35416 2025-01-30 11:10:54.000000000 +0000 raid1.ko
-rw-r--r-- 1 root root  49132 2025-01-30 11:10:54.000000000 +0000 raid10.ko
-rw-r--r-- 1 root root 123260 2025-01-30 11:10:54.000000000 +0000 raid456.ko

/lib/modules/5.6.3/kernel/drivers/nvme:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:45.000000000 +0000 host
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:45.000000000 +0000 target

/lib/modules/5.6.3/kernel/drivers/nvme/host:
total 48
-rw-r--r-- 1 root root 18568 2025-01-30 11:10:56.000000000 +0000 nvme-fabrics.ko
-rw-r--r-- 1 root root 27480 2025-01-30 11:10:56.000000000 +0000 nvme-tcp.ko

/lib/modules/5.6.3/kernel/drivers/nvme/target:
total 96
-rw-r--r-- 1 root root 18176 2025-01-30 11:10:56.000000000 +0000 nvmet-tcp.ko
-rw-r--r-- 1 root root 74972 2025-01-30 11:10:56.000000000 +0000 nvmet.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 160
-rw-r--r-- 1 root root 16280 2025-01-30 11:10:56.000000000 +0000 iscsi_tcp.ko
-rw-r--r-- 1 root root 45064 2025-01-30 11:10:56.000000000 +0000 libiscsi.ko
-rw-r--r-- 1 root root 17804 2025-01-30 11:10:56.000000000 +0000 libiscsi_tcp.ko
-rw-r--r-- 1 root root 77348 2025-01-30 11:10:56.000000000 +0000 scsi_transport_iscsi.ko

/lib/modules/5.6.3/kernel/drivers/target:
total 244
drwxr-xr-x 2 root root   4096 2025-01-30 11:14:46.000000000 +0000 iscsi
-rw-r--r-- 1 root root  13696 2025-01-30 11:10:56.000000000 +0000 target_core_iblock.ko
-rw-r--r-- 1 root root 227932 2025-01-30 11:10:56.000000000 +0000 target_core_mod.ko

/lib/modules/5.6.3/kernel/drivers/target/iscsi:
total 212
-rw-r--r-- 1 root root 215428 2025-01-30 11:10:56.000000000 +0000 iscsi_target_mod.ko

/lib/modules/5.6.3/kernel/fs:
total 24
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:47.000000000 +0000 btrfs
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:46.000000000 +0000 exportfs
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:46.000000000 +0000 lockd
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:46.000000000 +0000 nfs
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:46.000000000 +0000 nfs_common
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:46.000000000 +0000 nfsd

/lib/modules/5.6.3/kernel/fs/btrfs:
total 980
-rw-r--r-- 1 root root 1002112 2025-01-30 11:10:58.000000000 +0000 btrfs.ko

/lib/modules/5.6.3/kernel/fs/exportfs:
total 8
-rw-r--r-- 1 root root 5948 2025-01-30 11:10:58.000000000 +0000 exportfs.ko

/lib/modules/5.6.3/kernel/fs/lockd:
total 72
-rw-r--r-- 1 root root 72460 2025-01-30 11:10:58.000000000 +0000 lockd.ko

/lib/modules/5.6.3/kernel/fs/nfs:
total 484
-rw-r--r-- 1 root root 162436 2025-01-30 11:10:58.000000000 +0000 nfs.ko
-rw-r--r-- 1 root root  18616 2025-01-30 11:10:58.000000000 +0000 nfsv2.ko
-rw-r--r-- 1 root root  32052 2025-01-30 11:10:58.000000000 +0000 nfsv3.ko
-rw-r--r-- 1 root root 275192 2025-01-30 11:10:59.000000000 +0000 nfsv4.ko

/lib/modules/5.6.3/kernel/fs/nfs_common:
total 16
-rw-r--r-- 1 root root 5280 2025-01-30 11:10:59.000000000 +0000 grace.ko
-rw-r--r-- 1 root root 4956 2025-01-30 11:10:59.000000000 +0000 nfs_acl.ko

/lib/modules/5.6.3/kernel/fs/nfsd:
total 312
-rw-r--r-- 1 root root 316068 2025-01-30 11:10:59.000000000 +0000 nfsd.ko

/lib/modules/5.6.3/kernel/lib:
total 20
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:45.000000000 +0000 raid6
-rw-r--r-- 1 root root 8292 2025-01-30 11:10:59.000000000 +0000 xxhash.ko
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:47.000000000 +0000 zstd

/lib/modules/5.6.3/kernel/lib/raid6:
total 100
-rw-r--r-- 1 root root 100852 2025-01-30 11:10:59.000000000 +0000 raid6_pq.ko

/lib/modules/5.6.3/kernel/lib/zstd:
total 200
-rw-r--r-- 1 root root 150680 2025-01-30 11:10:59.000000000 +0000 zstd_compress.ko
-rw-r--r-- 1 root root  51128 2025-01-30 11:10:59.000000000 +0000 zstd_decompress.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:46.000000000 +0000 sunrpc

/lib/modules/5.6.3/kernel/net/sunrpc:
total 216
drwxr-xr-x 2 root root   4096 2025-01-30 11:14:46.000000000 +0000 auth_gss
-rw-r--r-- 1 root root 216744 2025-01-30 11:11:03.000000000 +0000 sunrpc.ko

/lib/modules/5.6.3/kernel/net/sunrpc/auth_gss:
total 52
-rw-r--r-- 1 root root 51864 2025-01-30 11:11:02.000000000 +0000 auth_rpcgss.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:31:04.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-01-30 11:31:02.000000000 +0000 lib

/nova/bin:
total 44
-rwxr-xr-x 1 root root 42864 2025-01-30 11:31:04.000000000 +0000 filesync

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:31:02.000000000 +0000 console

/nova/lib/console:
total 12
-rwxr-xr-x 1 root root 12041 2025-01-30 11:31:02.000000000 +0000 1287651328.mem
```

