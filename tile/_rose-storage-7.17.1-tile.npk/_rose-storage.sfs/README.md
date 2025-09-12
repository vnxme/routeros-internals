### rose-storage.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 4454738 bytes, 98 inodes, blocksize: 262144 bytes, created: Thu Jan 30 11:31:29 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
drwxr-xr-x 2 root root 4096 2025-01-30 11:28:52.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-01-30 11:30:56.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:49.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2025-01-30 11:31:02.000000000 +0000 nova

/bin:
total 10836
-rwxr-xr-x 1 root root 2236112 2025-01-30 11:21:54.000000000 +0000 btrfs
lrwxrwxrwx 1 root root       5 2025-01-30 11:22:37.000000000 +0000 btrfs-image -> btrfs
lrwxrwxrwx 1 root root       5 2025-01-30 11:22:37.000000000 +0000 btrfstune -> btrfs
-rwxr-xr-x 1 root root  811316 2025-01-30 11:25:06.000000000 +0000 mdadm
lrwxrwxrwx 1 root root       5 2025-01-30 11:22:37.000000000 +0000 mkfs.btrfs -> btrfs
-rwxr-xr-x 1 root root 1317052 2025-01-30 11:25:06.000000000 +0000 nvme
-rwxr-xr-x 1 root root  731796 2025-01-30 11:28:52.000000000 +0000 rsync
-rwxr-xr-x 1 root root 3023760 2025-01-30 11:26:25.000000000 +0000 sedutil-cli
-rwxr-xr-x 1 root root 2036996 2025-01-30 11:23:50.000000000 +0000 smartctl
-rwxr-xr-x 1 root root  921804 2025-01-30 11:25:06.000000000 +0000 switchtec

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
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:49.000000000 +0000 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:31:14.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 7 root root 4096 2025-01-30 11:14:49.000000000 +0000 kernel
-rw-r--r-- 1 root root  928 2025-01-30 11:31:16.000000000 +0000 modules.dep.storage

/lib/modules/5.6.3/kernel:
total 20
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:49.000000000 +0000 crypto
drwxr-xr-x 7 root root 4096 2025-01-30 11:14:50.000000000 +0000 drivers
drwxr-xr-x 8 root root 4096 2025-01-30 11:14:50.000000000 +0000 fs
drwxr-xr-x 4 root root 4096 2025-01-30 11:14:50.000000000 +0000 lib
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:49.000000000 +0000 net

/lib/modules/5.6.3/kernel/crypto:
total 40
drwxr-xr-x 2 root root  4096 2025-01-30 11:14:49.000000000 +0000 async_tx
-rw-r--r-- 1 root root 17184 2025-01-30 11:12:22.000000000 +0000 essiv.ko
-rw-r--r-- 1 root root 15912 2025-01-30 11:12:22.000000000 +0000 xor.ko

/lib/modules/5.6.3/kernel/crypto/async_tx:
total 40
-rw-r--r-- 1 root root 3392 2025-01-30 11:12:22.000000000 +0000 async_memcpy.ko
-rw-r--r-- 1 root root 9232 2025-01-30 11:12:22.000000000 +0000 async_pq.ko
-rw-r--r-- 1 root root 5312 2025-01-30 11:12:22.000000000 +0000 async_raid6_recov.ko
-rw-r--r-- 1 root root 5368 2025-01-30 11:12:22.000000000 +0000 async_tx.ko
-rw-r--r-- 1 root root 5704 2025-01-30 11:12:22.000000000 +0000 async_xor.ko

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:50.000000000 +0000 block
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:49.000000000 +0000 md
drwxr-xr-x 4 root root 4096 2025-01-30 11:14:49.000000000 +0000 nvme
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:50.000000000 +0000 scsi
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:50.000000000 +0000 target

/lib/modules/5.6.3/kernel/drivers/block:
total 20
-rw-r--r-- 1 root root 17688 2025-01-30 11:12:23.000000000 +0000 brd.ko

/lib/modules/5.6.3/kernel/drivers/md:
total 1152
-rw-r--r-- 1 root root  54008 2025-01-30 11:12:23.000000000 +0000 dm-bufio.ko
-rw-r--r-- 1 root root  67392 2025-01-30 11:12:23.000000000 +0000 dm-crypt.ko
-rw-r--r-- 1 root root 101776 2025-01-30 11:12:23.000000000 +0000 dm-integrity.ko
-rw-r--r-- 1 root root 226000 2025-01-30 11:12:23.000000000 +0000 dm-mod.ko
-rw-r--r-- 1 root root   9432 2025-01-30 11:12:23.000000000 +0000 faulty.ko
-rw-r--r-- 1 root root  11056 2025-01-30 11:12:23.000000000 +0000 linear.ko
-rw-r--r-- 1 root root 269040 2025-01-30 11:12:23.000000000 +0000 md-mod.ko
-rw-r--r-- 1 root root  22088 2025-01-30 11:12:23.000000000 +0000 raid0.ko
-rw-r--r-- 1 root root  65448 2025-01-30 11:12:23.000000000 +0000 raid1.ko
-rw-r--r-- 1 root root  87216 2025-01-30 11:12:23.000000000 +0000 raid10.ko
-rw-r--r-- 1 root root 243568 2025-01-30 11:12:23.000000000 +0000 raid456.ko

/lib/modules/5.6.3/kernel/drivers/nvme:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:49.000000000 +0000 host
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:49.000000000 +0000 target

/lib/modules/5.6.3/kernel/drivers/nvme/host:
total 88
-rw-r--r-- 1 root root 33840 2025-01-30 11:12:23.000000000 +0000 nvme-fabrics.ko
-rw-r--r-- 1 root root 51680 2025-01-30 11:12:23.000000000 +0000 nvme-tcp.ko

/lib/modules/5.6.3/kernel/drivers/nvme/target:
total 180
-rw-r--r-- 1 root root  33632 2025-01-30 11:12:23.000000000 +0000 nvmet-tcp.ko
-rw-r--r-- 1 root root 146864 2025-01-30 11:12:23.000000000 +0000 nvmet.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 328
-rw-r--r-- 1 root root  29488 2025-01-30 11:12:23.000000000 +0000 iscsi_tcp.ko
-rw-r--r-- 1 root root  96760 2025-01-30 11:12:23.000000000 +0000 libiscsi.ko
-rw-r--r-- 1 root root  36856 2025-01-30 11:12:23.000000000 +0000 libiscsi_tcp.ko
-rw-r--r-- 1 root root 167840 2025-01-30 11:12:23.000000000 +0000 scsi_transport_iscsi.ko

/lib/modules/5.6.3/kernel/drivers/target:
total 464
drwxr-xr-x 2 root root   4096 2025-01-30 11:14:50.000000000 +0000 iscsi
-rw-r--r-- 1 root root  22032 2025-01-30 11:12:23.000000000 +0000 target_core_iblock.ko
-rw-r--r-- 1 root root 445976 2025-01-30 11:12:23.000000000 +0000 target_core_mod.ko

/lib/modules/5.6.3/kernel/drivers/target/iscsi:
total 424
-rw-r--r-- 1 root root 432360 2025-01-30 11:12:23.000000000 +0000 iscsi_target_mod.ko

/lib/modules/5.6.3/kernel/fs:
total 24
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:50.000000000 +0000 btrfs
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:49.000000000 +0000 exportfs
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:49.000000000 +0000 lockd
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:50.000000000 +0000 nfs
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:49.000000000 +0000 nfs_common
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:50.000000000 +0000 nfsd

/lib/modules/5.6.3/kernel/fs/btrfs:
total 1956
-rw-r--r-- 1 root root 2000976 2025-01-30 11:12:24.000000000 +0000 btrfs.ko

/lib/modules/5.6.3/kernel/fs/exportfs:
total 12
-rw-r--r-- 1 root root 9560 2025-01-30 11:12:24.000000000 +0000 exportfs.ko

/lib/modules/5.6.3/kernel/fs/lockd:
total 140
-rw-r--r-- 1 root root 142696 2025-01-30 11:12:24.000000000 +0000 lockd.ko

/lib/modules/5.6.3/kernel/fs/nfs:
total 904
-rw-r--r-- 1 root root 318168 2025-01-30 11:12:24.000000000 +0000 nfs.ko
-rw-r--r-- 1 root root  31000 2025-01-30 11:12:24.000000000 +0000 nfsv2.ko
-rw-r--r-- 1 root root  57496 2025-01-30 11:12:24.000000000 +0000 nfsv3.ko
-rw-r--r-- 1 root root 511984 2025-01-30 11:12:24.000000000 +0000 nfsv4.ko

/lib/modules/5.6.3/kernel/fs/nfs_common:
total 16
-rw-r--r-- 1 root root 7280 2025-01-30 11:12:24.000000000 +0000 grace.ko
-rw-r--r-- 1 root root 6888 2025-01-30 11:12:24.000000000 +0000 nfs_acl.ko

/lib/modules/5.6.3/kernel/fs/nfsd:
total 608
-rw-r--r-- 1 root root 620280 2025-01-30 11:12:24.000000000 +0000 nfsd.ko

/lib/modules/5.6.3/kernel/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:49.000000000 +0000 raid6
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:50.000000000 +0000 zstd

/lib/modules/5.6.3/kernel/lib/raid6:
total 156
-rw-r--r-- 1 root root 159576 2025-01-30 11:12:24.000000000 +0000 raid6_pq.ko

/lib/modules/5.6.3/kernel/lib/zstd:
total 400
-rw-r--r-- 1 root root 284744 2025-01-30 11:12:24.000000000 +0000 zstd_compress.ko
-rw-r--r-- 1 root root 119256 2025-01-30 11:12:24.000000000 +0000 zstd_decompress.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:49.000000000 +0000 sunrpc

/lib/modules/5.6.3/kernel/net/sunrpc:
total 436
drwxr-xr-x 2 root root   4096 2025-01-30 11:14:49.000000000 +0000 auth_gss
-rw-r--r-- 1 root root 438880 2025-01-30 11:12:26.000000000 +0000 sunrpc.ko

/lib/modules/5.6.3/kernel/net/sunrpc/auth_gss:
total 100
-rw-r--r-- 1 root root 98744 2025-01-30 11:12:26.000000000 +0000 auth_rpcgss.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:31:05.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-01-30 11:31:02.000000000 +0000 lib

/nova/bin:
total 132
-rwxr-xr-x 1 root root 132852 2025-01-30 11:31:05.000000000 +0000 filesync

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:31:02.000000000 +0000 console

/nova/lib/console:
total 12
-rwxr-xr-x 1 root root 12041 2025-01-30 11:31:02.000000000 +0000 1287651328.mem
```

