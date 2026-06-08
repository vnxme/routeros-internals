### rose-storage.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 5239106 bytes, 117 inodes, blocksize: 262144 bytes, created: Tue Jun  2 09:52:17 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
drwxr-xr-x 2 root root 4096 2026-06-02 10:51:49.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-06-02 10:51:51.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-06-02 10:52:16.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2026-06-02 10:51:52.000000000 +0100 nova

/bin:
total 9896
-rwxr-xr-x 1 root root 1171320 2026-06-02 10:48:17.000000000 +0100 btrfs
lrwxrwxrwx 1 root root       5 2026-06-02 10:48:17.000000000 +0100 btrfs-image -> btrfs
lrwxrwxrwx 1 root root       5 2026-06-02 10:48:17.000000000 +0100 btrfstune -> btrfs
-rwxr-xr-x 1 root root  570976 2026-06-02 10:26:54.000000000 +0100 e2fsck
-rwxr-xr-x 1 root root 1079128 2026-06-02 10:46:25.000000000 +0100 fio
-rwxr-xr-x 1 root root  668308 2026-06-02 10:48:50.000000000 +0100 mdadm
lrwxrwxrwx 1 root root       5 2026-06-02 10:48:17.000000000 +0100 mkfs.btrfs -> btrfs
-rwxr-xr-x 1 root root  608548 2026-06-02 10:50:00.000000000 +0100 mkfs.xfs
-rwxr-xr-x 1 root root  506128 2026-06-02 10:48:45.000000000 +0100 nvme
-rwxr-xr-x 1 root root  560796 2026-06-02 10:51:49.000000000 +0100 rsync
-rwxr-xr-x 1 root root 1459856 2026-06-02 10:49:30.000000000 +0100 sedutil-cli
-rwxr-xr-x 1 root root  808624 2026-06-02 10:48:33.000000000 +0100 smartctl
-rwxr-xr-x 1 root root  299436 2026-06-02 10:48:51.000000000 +0100 switchtec
-rwxr-xr-x 1 root root  112272 2026-06-02 10:49:53.000000000 +0100 xfs_copy
-rwxr-xr-x 1 root root  686832 2026-06-02 10:50:07.000000000 +0100 xfs_db
-rwxr-xr-x 1 root root   13524 2026-06-02 10:49:55.000000000 +0100 xfs_estimate
-rwxr-xr-x 1 root root   42460 2026-06-02 10:49:57.000000000 +0100 xfs_fsr
-rwxr-xr-x 1 root root   38320 2026-06-02 10:49:57.000000000 +0100 xfs_growfs
-rwxr-xr-x 1 root root  198956 2026-06-02 10:50:03.000000000 +0100 xfs_io
-rwxr-xr-x 1 root root   83376 2026-06-02 10:50:00.000000000 +0100 xfs_logprint
-rwxr-xr-x 1 root root   25932 2026-06-02 10:49:59.000000000 +0100 xfs_mdrestore
-rwxr-xr-x 1 root root   83344 2026-06-02 10:50:00.000000000 +0100 xfs_quota
-rwxr-xr-x 1 root root  891936 2026-06-02 10:50:09.000000000 +0100 xfs_repair
-rwxr-xr-x 1 root root   17596 2026-06-02 10:50:02.000000000 +0100 xfs_rtcp
-rwxr-xr-x 1 root root  112148 2026-06-02 10:50:08.000000000 +0100 xfs_scrub
-rwxr-xr-x 1 root root   42388 2026-06-02 10:50:05.000000000 +0100 xfs_spaceman

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
drwxr-xr-x 3 root root 4096 2026-06-02 10:52:16.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:52:16.000000000 +0100 5.6.3-64

/lib/modules/5.6.3-64:
total 8
drwxr-xr-x 7 root root 4096 2026-06-02 10:52:16.000000000 +0100 kernel
-rw-r--r-- 1 root root  939 2026-06-02 10:51:59.000000000 +0100 modules.dep.storage

/lib/modules/5.6.3-64/kernel:
total 20
drwxr-xr-x 3 root root 4096 2026-06-02 10:52:16.000000000 +0100 crypto
drwxr-xr-x 7 root root 4096 2026-06-02 10:52:16.000000000 +0100 drivers
drwxr-xr-x 9 root root 4096 2026-06-02 10:52:16.000000000 +0100 fs
drwxr-xr-x 4 root root 4096 2026-06-02 10:52:16.000000000 +0100 lib
drwxr-xr-x 3 root root 4096 2026-06-02 10:52:16.000000000 +0100 net

/lib/modules/5.6.3-64/kernel/crypto:
total 32
drwxr-xr-x 2 root root  4096 2026-06-02 10:52:16.000000000 +0100 async_tx
-rw-r--r-- 1 root root 10832 2026-06-02 10:44:42.000000000 +0100 essiv.ko
-rw-r--r-- 1 root root 14384 2026-06-02 10:44:42.000000000 +0100 xor.ko

/lib/modules/5.6.3-64/kernel/crypto/async_tx:
total 24
-rw-r--r-- 1 root root 3144 2026-06-02 10:44:42.000000000 +0100 async_memcpy.ko
-rw-r--r-- 1 root root 6056 2026-06-02 10:44:42.000000000 +0100 async_pq.ko
-rw-r--r-- 1 root root 3960 2026-06-02 10:44:42.000000000 +0100 async_raid6_recov.ko
-rw-r--r-- 1 root root 3896 2026-06-02 10:44:42.000000000 +0100 async_tx.ko
-rw-r--r-- 1 root root 3952 2026-06-02 10:44:42.000000000 +0100 async_xor.ko

/lib/modules/5.6.3-64/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:16.000000000 +0100 block
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:16.000000000 +0100 md
drwxr-xr-x 4 root root 4096 2026-06-02 10:52:16.000000000 +0100 nvme
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:16.000000000 +0100 scsi
drwxr-xr-x 3 root root 4096 2026-06-02 10:52:16.000000000 +0100 target

/lib/modules/5.6.3-64/kernel/drivers/block:
total 12
-rw-r--r-- 1 root root 11520 2026-06-02 10:44:42.000000000 +0100 brd.ko

/lib/modules/5.6.3-64/kernel/drivers/md:
total 672
-rw-r--r-- 1 root root  31568 2026-06-02 10:44:42.000000000 +0100 dm-bufio.ko
-rw-r--r-- 1 root root  38568 2026-06-02 10:44:42.000000000 +0100 dm-crypt.ko
-rw-r--r-- 1 root root  54488 2026-06-02 10:44:42.000000000 +0100 dm-integrity.ko
-rw-r--r-- 1 root root 132032 2026-06-02 10:44:42.000000000 +0100 dm-mod.ko
-rw-r--r-- 1 root root   7048 2026-06-02 10:44:42.000000000 +0100 faulty.ko
-rw-r--r-- 1 root root   8088 2026-06-02 10:44:42.000000000 +0100 linear.ko
-rw-r--r-- 1 root root 157672 2026-06-02 10:44:42.000000000 +0100 md-mod.ko
-rw-r--r-- 1 root root  13296 2026-06-02 10:44:42.000000000 +0100 raid0.ko
-rw-r--r-- 1 root root  39240 2026-06-02 10:44:42.000000000 +0100 raid1.ko
-rw-r--r-- 1 root root  49928 2026-06-02 10:44:42.000000000 +0100 raid10.ko
-rw-r--r-- 1 root root 134112 2026-06-02 10:44:42.000000000 +0100 raid456.ko

/lib/modules/5.6.3-64/kernel/drivers/nvme:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:16.000000000 +0100 host
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:16.000000000 +0100 target

/lib/modules/5.6.3-64/kernel/drivers/nvme/host:
total 60
-rw-r--r-- 1 root root 25232 2026-06-02 10:44:42.000000000 +0100 nvme-fabrics.ko
-rw-r--r-- 1 root root 32400 2026-06-02 10:44:42.000000000 +0100 nvme-tcp.ko

/lib/modules/5.6.3-64/kernel/drivers/nvme/target:
total 116
-rw-r--r-- 1 root root 21856 2026-06-02 10:44:42.000000000 +0100 nvmet-tcp.ko
-rw-r--r-- 1 root root 90280 2026-06-02 10:44:42.000000000 +0100 nvmet.ko

/lib/modules/5.6.3-64/kernel/drivers/scsi:
total 220
-rw-r--r-- 1 root root  20104 2026-06-02 10:44:42.000000000 +0100 iscsi_tcp.ko
-rw-r--r-- 1 root root  69232 2026-06-02 10:44:42.000000000 +0100 libiscsi.ko
-rw-r--r-- 1 root root  26192 2026-06-02 10:44:42.000000000 +0100 libiscsi_tcp.ko
-rw-r--r-- 1 root root 103544 2026-06-02 10:44:42.000000000 +0100 scsi_transport_iscsi.ko

/lib/modules/5.6.3-64/kernel/drivers/target:
total 292
drwxr-xr-x 2 root root   4096 2026-06-02 10:52:16.000000000 +0100 iscsi
-rw-r--r-- 1 root root  14688 2026-06-02 10:44:42.000000000 +0100 target_core_iblock.ko
-rw-r--r-- 1 root root 277800 2026-06-02 10:44:42.000000000 +0100 target_core_mod.ko

/lib/modules/5.6.3-64/kernel/drivers/target/iscsi:
total 268
-rw-r--r-- 1 root root 271088 2026-06-02 10:44:42.000000000 +0100 iscsi_target_mod.ko

/lib/modules/5.6.3-64/kernel/fs:
total 28
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:16.000000000 +0100 btrfs
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:16.000000000 +0100 exportfs
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:16.000000000 +0100 lockd
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:16.000000000 +0100 nfs
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:16.000000000 +0100 nfs_common
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:16.000000000 +0100 nfsd
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:16.000000000 +0100 xfs

/lib/modules/5.6.3-64/kernel/fs/btrfs:
total 1048
-rw-r--r-- 1 root root 1069648 2026-06-02 10:44:42.000000000 +0100 btrfs.ko

/lib/modules/5.6.3-64/kernel/fs/exportfs:
total 8
-rw-r--r-- 1 root root 6984 2026-06-02 10:44:42.000000000 +0100 exportfs.ko

/lib/modules/5.6.3-64/kernel/fs/lockd:
total 84
-rw-r--r-- 1 root root 83960 2026-06-02 10:44:42.000000000 +0100 lockd.ko

/lib/modules/5.6.3-64/kernel/fs/nfs:
total 564
-rw-r--r-- 1 root root 198640 2026-06-02 10:44:42.000000000 +0100 nfs.ko
-rw-r--r-- 1 root root  18896 2026-06-02 10:44:42.000000000 +0100 nfsv2.ko
-rw-r--r-- 1 root root  33720 2026-06-02 10:44:42.000000000 +0100 nfsv3.ko
-rw-r--r-- 1 root root 317000 2026-06-02 10:44:42.000000000 +0100 nfsv4.ko

/lib/modules/5.6.3-64/kernel/fs/nfs_common:
total 16
-rw-r--r-- 1 root root 5992 2026-06-02 10:44:42.000000000 +0100 grace.ko
-rw-r--r-- 1 root root 5344 2026-06-02 10:44:42.000000000 +0100 nfs_acl.ko

/lib/modules/5.6.3-64/kernel/fs/nfsd:
total 336
-rw-r--r-- 1 root root 342960 2026-06-02 10:44:42.000000000 +0100 nfsd.ko

/lib/modules/5.6.3-64/kernel/fs/xfs:
total 704
-rw-r--r-- 1 root root 720408 2026-06-02 10:44:42.000000000 +0100 xfs.ko

/lib/modules/5.6.3-64/kernel/lib:
total 16
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:16.000000000 +0100 raid6
-rw-r--r-- 1 root root 7256 2026-06-02 10:44:42.000000000 +0100 xxhash.ko
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:16.000000000 +0100 zstd

/lib/modules/5.6.3-64/kernel/lib/raid6:
total 108
-rw-r--r-- 1 root root 110040 2026-06-02 10:44:42.000000000 +0100 raid6_pq.ko

/lib/modules/5.6.3-64/kernel/lib/zstd:
total 244
-rw-r--r-- 1 root root 171472 2026-06-02 10:44:42.000000000 +0100 zstd_compress.ko
-rw-r--r-- 1 root root  76920 2026-06-02 10:44:42.000000000 +0100 zstd_decompress.ko

/lib/modules/5.6.3-64/kernel/net:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:52:16.000000000 +0100 sunrpc

/lib/modules/5.6.3-64/kernel/net/sunrpc:
total 264
drwxr-xr-x 2 root root   4096 2026-06-02 10:52:16.000000000 +0100 auth_gss
-rw-r--r-- 1 root root 265328 2026-06-02 10:44:42.000000000 +0100 sunrpc.ko

/lib/modules/5.6.3-64/kernel/net/sunrpc/auth_gss:
total 60
-rw-r--r-- 1 root root 58536 2026-06-02 10:44:42.000000000 +0100 auth_rpcgss.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:51:53.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-06-02 10:51:52.000000000 +0100 lib

/nova/bin:
total 48
-rwxr-xr-x 1 root root 46872 2026-06-02 10:51:53.000000000 +0100 filesync

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:51:52.000000000 +0100 console

/nova/lib/console:
total 16
-rwxr-xr-x 1 root root 14400 2026-06-02 10:51:52.000000000 +0100 1287651328.mem
```

