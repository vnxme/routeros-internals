### rose-storage.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 3576666 bytes, 100 inodes, blocksize: 262144 bytes, created: Tue Oct 14 13:49:34 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:14.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-14 14:49:14.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-14 14:49:32.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-10-14 14:49:16.000000000 +0100 nova

/bin:
total 6416
-rwxr-xr-x 1 root root 1171320 2025-10-14 14:43:23.000000000 +0100 btrfs
lrwxrwxrwx 1 root root       5 2025-10-14 14:43:23.000000000 +0100 btrfs-image -> btrfs
lrwxrwxrwx 1 root root       5 2025-10-14 14:43:23.000000000 +0100 btrfstune -> btrfs
-rwxr-xr-x 1 root root 1079128 2025-10-14 14:37:54.000000000 +0100 fio
-rwxr-xr-x 1 root root  668308 2025-10-14 14:45:50.000000000 +0100 mdadm
lrwxrwxrwx 1 root root       5 2025-10-14 14:43:23.000000000 +0100 mkfs.btrfs -> btrfs
-rwxr-xr-x 1 root root  506128 2025-10-14 14:45:50.000000000 +0100 nvme
-rwxr-xr-x 1 root root  560796 2025-10-14 14:49:14.000000000 +0100 rsync
-rwxr-xr-x 1 root root 1459856 2025-10-14 14:47:34.000000000 +0100 sedutil-cli
-rwxr-xr-x 1 root root  808624 2025-10-14 14:44:38.000000000 +0100 smartctl
-rwxr-xr-x 1 root root  299436 2025-10-14 14:45:35.000000000 +0100 switchtec

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:49:14.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:14.000000000 +0100 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root  34 2025-10-14 14:49:14.000000000 +0100 storage-cdcd5c9a3a47.jg.gz
-rwxr-xr-x 1 root root 108 2025-10-14 14:49:14.000000000 +0100 storage.info
lrwxrwxrwx 1 root root  26 2025-10-14 14:49:14.000000000 +0100 storage.jg.gz -> storage-cdcd5c9a3a47.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:49:32.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:49:32.000000000 +0100 5.6.3-64

/lib/modules/5.6.3-64:
total 8
drwxr-xr-x 7 root root 4096 2025-10-14 14:49:32.000000000 +0100 kernel
-rw-r--r-- 1 root root  925 2025-10-14 14:49:25.000000000 +0100 modules.dep.storage

/lib/modules/5.6.3-64/kernel:
total 20
drwxr-xr-x 3 root root 4096 2025-10-14 14:49:32.000000000 +0100 crypto
drwxr-xr-x 7 root root 4096 2025-10-14 14:49:32.000000000 +0100 drivers
drwxr-xr-x 8 root root 4096 2025-10-14 14:49:32.000000000 +0100 fs
drwxr-xr-x 4 root root 4096 2025-10-14 14:49:32.000000000 +0100 lib
drwxr-xr-x 3 root root 4096 2025-10-14 14:49:32.000000000 +0100 net

/lib/modules/5.6.3-64/kernel/crypto:
total 32
drwxr-xr-x 2 root root  4096 2025-10-14 14:49:32.000000000 +0100 async_tx
-rw-r--r-- 1 root root 10832 2025-10-14 14:34:36.000000000 +0100 essiv.ko
-rw-r--r-- 1 root root 14384 2025-10-14 14:34:36.000000000 +0100 xor.ko

/lib/modules/5.6.3-64/kernel/crypto/async_tx:
total 24
-rw-r--r-- 1 root root 3144 2025-10-14 14:34:36.000000000 +0100 async_memcpy.ko
-rw-r--r-- 1 root root 6056 2025-10-14 14:34:36.000000000 +0100 async_pq.ko
-rw-r--r-- 1 root root 3960 2025-10-14 14:34:36.000000000 +0100 async_raid6_recov.ko
-rw-r--r-- 1 root root 3896 2025-10-14 14:34:36.000000000 +0100 async_tx.ko
-rw-r--r-- 1 root root 3952 2025-10-14 14:34:36.000000000 +0100 async_xor.ko

/lib/modules/5.6.3-64/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:32.000000000 +0100 block
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:32.000000000 +0100 md
drwxr-xr-x 4 root root 4096 2025-10-14 14:49:32.000000000 +0100 nvme
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:32.000000000 +0100 scsi
drwxr-xr-x 3 root root 4096 2025-10-14 14:49:32.000000000 +0100 target

/lib/modules/5.6.3-64/kernel/drivers/block:
total 12
-rw-r--r-- 1 root root 11520 2025-10-14 14:34:36.000000000 +0100 brd.ko

/lib/modules/5.6.3-64/kernel/drivers/md:
total 672
-rw-r--r-- 1 root root  31568 2025-10-14 14:34:36.000000000 +0100 dm-bufio.ko
-rw-r--r-- 1 root root  38576 2025-10-14 14:34:36.000000000 +0100 dm-crypt.ko
-rw-r--r-- 1 root root  54488 2025-10-14 14:34:36.000000000 +0100 dm-integrity.ko
-rw-r--r-- 1 root root 131392 2025-10-14 14:34:36.000000000 +0100 dm-mod.ko
-rw-r--r-- 1 root root   7048 2025-10-14 14:34:36.000000000 +0100 faulty.ko
-rw-r--r-- 1 root root   8088 2025-10-14 14:34:36.000000000 +0100 linear.ko
-rw-r--r-- 1 root root 157736 2025-10-14 14:34:36.000000000 +0100 md-mod.ko
-rw-r--r-- 1 root root  13296 2025-10-14 14:34:36.000000000 +0100 raid0.ko
-rw-r--r-- 1 root root  39240 2025-10-14 14:34:36.000000000 +0100 raid1.ko
-rw-r--r-- 1 root root  49928 2025-10-14 14:34:36.000000000 +0100 raid10.ko
-rw-r--r-- 1 root root 133704 2025-10-14 14:34:36.000000000 +0100 raid456.ko

/lib/modules/5.6.3-64/kernel/drivers/nvme:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:32.000000000 +0100 host
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:32.000000000 +0100 target

/lib/modules/5.6.3-64/kernel/drivers/nvme/host:
total 60
-rw-r--r-- 1 root root 25232 2025-10-14 14:34:37.000000000 +0100 nvme-fabrics.ko
-rw-r--r-- 1 root root 32400 2025-10-14 14:34:37.000000000 +0100 nvme-tcp.ko

/lib/modules/5.6.3-64/kernel/drivers/nvme/target:
total 116
-rw-r--r-- 1 root root 21856 2025-10-14 14:34:37.000000000 +0100 nvmet-tcp.ko
-rw-r--r-- 1 root root 90280 2025-10-14 14:34:37.000000000 +0100 nvmet.ko

/lib/modules/5.6.3-64/kernel/drivers/scsi:
total 220
-rw-r--r-- 1 root root  20104 2025-10-14 14:34:37.000000000 +0100 iscsi_tcp.ko
-rw-r--r-- 1 root root  69232 2025-10-14 14:34:37.000000000 +0100 libiscsi.ko
-rw-r--r-- 1 root root  26192 2025-10-14 14:34:37.000000000 +0100 libiscsi_tcp.ko
-rw-r--r-- 1 root root 103008 2025-10-14 14:34:37.000000000 +0100 scsi_transport_iscsi.ko

/lib/modules/5.6.3-64/kernel/drivers/target:
total 292
drwxr-xr-x 2 root root   4096 2025-10-14 14:49:32.000000000 +0100 iscsi
-rw-r--r-- 1 root root  14688 2025-10-14 14:34:37.000000000 +0100 target_core_iblock.ko
-rw-r--r-- 1 root root 277808 2025-10-14 14:34:37.000000000 +0100 target_core_mod.ko

/lib/modules/5.6.3-64/kernel/drivers/target/iscsi:
total 268
-rw-r--r-- 1 root root 271088 2025-10-14 14:34:37.000000000 +0100 iscsi_target_mod.ko

/lib/modules/5.6.3-64/kernel/fs:
total 24
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:32.000000000 +0100 btrfs
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:32.000000000 +0100 exportfs
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:32.000000000 +0100 lockd
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:32.000000000 +0100 nfs
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:32.000000000 +0100 nfs_common
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:32.000000000 +0100 nfsd

/lib/modules/5.6.3-64/kernel/fs/btrfs:
total 1044
-rw-r--r-- 1 root root 1068400 2025-10-14 14:34:37.000000000 +0100 btrfs.ko

/lib/modules/5.6.3-64/kernel/fs/exportfs:
total 8
-rw-r--r-- 1 root root 6984 2025-10-14 14:34:37.000000000 +0100 exportfs.ko

/lib/modules/5.6.3-64/kernel/fs/lockd:
total 84
-rw-r--r-- 1 root root 83960 2025-10-14 14:34:37.000000000 +0100 lockd.ko

/lib/modules/5.6.3-64/kernel/fs/nfs:
total 540
-rw-r--r-- 1 root root 195816 2025-10-14 14:34:37.000000000 +0100 nfs.ko
-rw-r--r-- 1 root root  18896 2025-10-14 14:34:37.000000000 +0100 nfsv2.ko
-rw-r--r-- 1 root root  33720 2025-10-14 14:34:37.000000000 +0100 nfsv3.ko
-rw-r--r-- 1 root root 297336 2025-10-14 14:34:37.000000000 +0100 nfsv4.ko

/lib/modules/5.6.3-64/kernel/fs/nfs_common:
total 16
-rw-r--r-- 1 root root 5992 2025-10-14 14:34:37.000000000 +0100 grace.ko
-rw-r--r-- 1 root root 5344 2025-10-14 14:34:37.000000000 +0100 nfs_acl.ko

/lib/modules/5.6.3-64/kernel/fs/nfsd:
total 332
-rw-r--r-- 1 root root 337008 2025-10-14 14:34:37.000000000 +0100 nfsd.ko

/lib/modules/5.6.3-64/kernel/lib:
total 16
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:32.000000000 +0100 raid6
-rw-r--r-- 1 root root 7256 2025-10-14 14:34:37.000000000 +0100 xxhash.ko
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:32.000000000 +0100 zstd

/lib/modules/5.6.3-64/kernel/lib/raid6:
total 108
-rw-r--r-- 1 root root 110040 2025-10-14 14:34:37.000000000 +0100 raid6_pq.ko

/lib/modules/5.6.3-64/kernel/lib/zstd:
total 244
-rw-r--r-- 1 root root 171472 2025-10-14 14:34:37.000000000 +0100 zstd_compress.ko
-rw-r--r-- 1 root root  76920 2025-10-14 14:34:37.000000000 +0100 zstd_decompress.ko

/lib/modules/5.6.3-64/kernel/net:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:49:32.000000000 +0100 sunrpc

/lib/modules/5.6.3-64/kernel/net/sunrpc:
total 264
drwxr-xr-x 2 root root   4096 2025-10-14 14:49:32.000000000 +0100 auth_gss
-rw-r--r-- 1 root root 264248 2025-10-14 14:34:37.000000000 +0100 sunrpc.ko

/lib/modules/5.6.3-64/kernel/net/sunrpc/auth_gss:
total 60
-rw-r--r-- 1 root root 58544 2025-10-14 14:34:37.000000000 +0100 auth_rpcgss.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:21.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-14 14:49:16.000000000 +0100 lib

/nova/bin:
total 48
-rwxr-xr-x 1 root root 46872 2025-10-14 14:49:21.000000000 +0100 filesync

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:16.000000000 +0100 console

/nova/lib/console:
total 16
-rwxr-xr-x 1 root root 13992 2025-10-14 14:49:16.000000000 +0100 1287651328.mem
```

