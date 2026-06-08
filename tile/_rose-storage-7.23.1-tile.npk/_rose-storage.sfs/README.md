### rose-storage.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 5082946 bytes, 101 inodes, blocksize: 262144 bytes, created: Tue Jun  2 09:52:26 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
drwxr-xr-x 2 root root 4096 2026-06-02 10:51:04.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-06-02 10:51:51.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:40.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2026-06-02 10:51:52.000000000 +0100 nova

/bin:
total 11752
-rwxr-xr-x 1 root root 2236112 2026-06-02 10:48:05.000000000 +0100 btrfs
lrwxrwxrwx 1 root root       5 2026-06-02 10:48:07.000000000 +0100 btrfs-image -> btrfs
lrwxrwxrwx 1 root root       5 2026-06-02 10:48:07.000000000 +0100 btrfstune -> btrfs
-rwxr-xr-x 1 root root  869612 2026-06-02 10:44:59.000000000 +0100 e2fsck
-rwxr-xr-x 1 root root  811316 2026-06-02 10:48:50.000000000 +0100 mdadm
lrwxrwxrwx 1 root root       5 2026-06-02 10:48:07.000000000 +0100 mkfs.btrfs -> btrfs
-rwxr-xr-x 1 root root 1317052 2026-06-02 10:48:49.000000000 +0100 nvme
-rwxr-xr-x 1 root root  798064 2026-06-02 10:51:04.000000000 +0100 rsync
-rwxr-xr-x 1 root root 3023760 2026-06-02 10:49:24.000000000 +0100 sedutil-cli
-rwxr-xr-x 1 root root 2036996 2026-06-02 10:48:35.000000000 +0100 smartctl
-rwxr-xr-x 1 root root  921804 2026-06-02 10:48:44.000000000 +0100 switchtec

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:51:51.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:51:51.000000000 +0100 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root  26 2026-06-02 10:51:51.000000000 +0100 storage-cdcd5c9a3a47.jg.gz
-rwxr-xr-x 1 root root 105 2026-06-02 10:51:51.000000000 +0100 storage.info
lrwxrwxrwx 1 root root  26 2026-06-02 10:51:51.000000000 +0100 storage.jg.gz -> storage-cdcd5c9a3a47.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:40.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:52:08.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 7 root root 4096 2026-06-02 10:45:40.000000000 +0100 kernel
-rw-r--r-- 1 root root  942 2026-06-02 10:52:15.000000000 +0100 modules.dep.storage

/lib/modules/5.6.3/kernel:
total 20
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:40.000000000 +0100 crypto
drwxr-xr-x 7 root root 4096 2026-06-02 10:45:41.000000000 +0100 drivers
drwxr-xr-x 9 root root 4096 2026-06-02 10:45:41.000000000 +0100 fs
drwxr-xr-x 4 root root 4096 2026-06-02 10:45:41.000000000 +0100 lib
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:40.000000000 +0100 net

/lib/modules/5.6.3/kernel/crypto:
total 40
drwxr-xr-x 2 root root  4096 2026-06-02 10:45:40.000000000 +0100 async_tx
-rw-r--r-- 1 root root 17184 2026-06-02 10:44:21.000000000 +0100 essiv.ko
-rw-r--r-- 1 root root 15912 2026-06-02 10:44:22.000000000 +0100 xor.ko

/lib/modules/5.6.3/kernel/crypto/async_tx:
total 40
-rw-r--r-- 1 root root 3392 2026-06-02 10:44:21.000000000 +0100 async_memcpy.ko
-rw-r--r-- 1 root root 9232 2026-06-02 10:44:21.000000000 +0100 async_pq.ko
-rw-r--r-- 1 root root 5312 2026-06-02 10:44:21.000000000 +0100 async_raid6_recov.ko
-rw-r--r-- 1 root root 5368 2026-06-02 10:44:21.000000000 +0100 async_tx.ko
-rw-r--r-- 1 root root 5704 2026-06-02 10:44:21.000000000 +0100 async_xor.ko

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:41.000000000 +0100 block
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:40.000000000 +0100 md
drwxr-xr-x 4 root root 4096 2026-06-02 10:45:40.000000000 +0100 nvme
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:41.000000000 +0100 scsi
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:41.000000000 +0100 target

/lib/modules/5.6.3/kernel/drivers/block:
total 20
-rw-r--r-- 1 root root 17688 2026-06-02 10:44:22.000000000 +0100 brd.ko

/lib/modules/5.6.3/kernel/drivers/md:
total 1152
-rw-r--r-- 1 root root  54008 2026-06-02 10:44:22.000000000 +0100 dm-bufio.ko
-rw-r--r-- 1 root root  67392 2026-06-02 10:44:22.000000000 +0100 dm-crypt.ko
-rw-r--r-- 1 root root 101776 2026-06-02 10:44:22.000000000 +0100 dm-integrity.ko
-rw-r--r-- 1 root root 226000 2026-06-02 10:44:22.000000000 +0100 dm-mod.ko
-rw-r--r-- 1 root root   9432 2026-06-02 10:44:22.000000000 +0100 faulty.ko
-rw-r--r-- 1 root root  11056 2026-06-02 10:44:22.000000000 +0100 linear.ko
-rw-r--r-- 1 root root 269040 2026-06-02 10:44:22.000000000 +0100 md-mod.ko
-rw-r--r-- 1 root root  22088 2026-06-02 10:44:22.000000000 +0100 raid0.ko
-rw-r--r-- 1 root root  65448 2026-06-02 10:44:22.000000000 +0100 raid1.ko
-rw-r--r-- 1 root root  87216 2026-06-02 10:44:22.000000000 +0100 raid10.ko
-rw-r--r-- 1 root root 243568 2026-06-02 10:44:22.000000000 +0100 raid456.ko

/lib/modules/5.6.3/kernel/drivers/nvme:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:40.000000000 +0100 host
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:40.000000000 +0100 target

/lib/modules/5.6.3/kernel/drivers/nvme/host:
total 88
-rw-r--r-- 1 root root 33840 2026-06-02 10:44:23.000000000 +0100 nvme-fabrics.ko
-rw-r--r-- 1 root root 51680 2026-06-02 10:44:23.000000000 +0100 nvme-tcp.ko

/lib/modules/5.6.3/kernel/drivers/nvme/target:
total 180
-rw-r--r-- 1 root root  33632 2026-06-02 10:44:23.000000000 +0100 nvmet-tcp.ko
-rw-r--r-- 1 root root 146864 2026-06-02 10:44:23.000000000 +0100 nvmet.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 332
-rw-r--r-- 1 root root  29488 2026-06-02 10:44:23.000000000 +0100 iscsi_tcp.ko
-rw-r--r-- 1 root root  96760 2026-06-02 10:44:23.000000000 +0100 libiscsi.ko
-rw-r--r-- 1 root root  36856 2026-06-02 10:44:23.000000000 +0100 libiscsi_tcp.ko
-rw-r--r-- 1 root root 168744 2026-06-02 10:44:23.000000000 +0100 scsi_transport_iscsi.ko

/lib/modules/5.6.3/kernel/drivers/target:
total 464
drwxr-xr-x 2 root root   4096 2026-06-02 10:45:41.000000000 +0100 iscsi
-rw-r--r-- 1 root root  22032 2026-06-02 10:44:23.000000000 +0100 target_core_iblock.ko
-rw-r--r-- 1 root root 445976 2026-06-02 10:44:23.000000000 +0100 target_core_mod.ko

/lib/modules/5.6.3/kernel/drivers/target/iscsi:
total 424
-rw-r--r-- 1 root root 431632 2026-06-02 10:44:23.000000000 +0100 iscsi_target_mod.ko

/lib/modules/5.6.3/kernel/fs:
total 28
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:41.000000000 +0100 btrfs
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:41.000000000 +0100 exportfs
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:40.000000000 +0100 lockd
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:41.000000000 +0100 nfs
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:40.000000000 +0100 nfs_common
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:41.000000000 +0100 nfsd
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:41.000000000 +0100 xfs

/lib/modules/5.6.3/kernel/fs/btrfs:
total 1964
-rw-r--r-- 1 root root 2007560 2026-06-02 10:44:24.000000000 +0100 btrfs.ko

/lib/modules/5.6.3/kernel/fs/exportfs:
total 12
-rw-r--r-- 1 root root 9560 2026-06-02 10:44:24.000000000 +0100 exportfs.ko

/lib/modules/5.6.3/kernel/fs/lockd:
total 140
-rw-r--r-- 1 root root 142696 2026-06-02 10:44:24.000000000 +0100 lockd.ko

/lib/modules/5.6.3/kernel/fs/nfs:
total 940
-rw-r--r-- 1 root root 321768 2026-06-02 10:44:24.000000000 +0100 nfs.ko
-rw-r--r-- 1 root root  31000 2026-06-02 10:44:24.000000000 +0100 nfsv2.ko
-rw-r--r-- 1 root root  57496 2026-06-02 10:44:24.000000000 +0100 nfsv3.ko
-rw-r--r-- 1 root root 542472 2026-06-02 10:44:24.000000000 +0100 nfsv4.ko

/lib/modules/5.6.3/kernel/fs/nfs_common:
total 16
-rw-r--r-- 1 root root 7280 2026-06-02 10:44:24.000000000 +0100 grace.ko
-rw-r--r-- 1 root root 6888 2026-06-02 10:44:24.000000000 +0100 nfs_acl.ko

/lib/modules/5.6.3/kernel/fs/nfsd:
total 616
-rw-r--r-- 1 root root 630136 2026-06-02 10:44:24.000000000 +0100 nfsd.ko

/lib/modules/5.6.3/kernel/fs/xfs:
total 1312
-rw-r--r-- 1 root root 1343464 2026-06-02 10:44:24.000000000 +0100 xfs.ko

/lib/modules/5.6.3/kernel/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:40.000000000 +0100 raid6
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:41.000000000 +0100 zstd

/lib/modules/5.6.3/kernel/lib/raid6:
total 156
-rw-r--r-- 1 root root 159576 2026-06-02 10:44:24.000000000 +0100 raid6_pq.ko

/lib/modules/5.6.3/kernel/lib/zstd:
total 400
-rw-r--r-- 1 root root 284744 2026-06-02 10:44:24.000000000 +0100 zstd_compress.ko
-rw-r--r-- 1 root root 119256 2026-06-02 10:44:24.000000000 +0100 zstd_decompress.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:40.000000000 +0100 sunrpc

/lib/modules/5.6.3/kernel/net/sunrpc:
total 436
drwxr-xr-x 2 root root   4096 2026-06-02 10:45:40.000000000 +0100 auth_gss
-rw-r--r-- 1 root root 438880 2026-06-02 10:44:27.000000000 +0100 sunrpc.ko

/lib/modules/5.6.3/kernel/net/sunrpc/auth_gss:
total 100
-rw-r--r-- 1 root root 98744 2026-06-02 10:44:27.000000000 +0100 auth_rpcgss.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:51:52.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-06-02 10:51:52.000000000 +0100 lib

/nova/bin:
total 132
-rwxr-xr-x 1 root root 132872 2026-06-02 10:51:52.000000000 +0100 filesync

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:51:52.000000000 +0100 console

/nova/lib/console:
total 16
-rwxr-xr-x 1 root root 14400 2026-06-02 10:51:52.000000000 +0100 1287651328.mem
```

