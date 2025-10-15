### rose-storage.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 3051424 bytes, 104 inodes, blocksize: 524288 bytes, created: Tue Oct 14 13:49:36 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
drwxr-xr-x 2 root root 4096 2025-10-14 14:48:56.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-14 14:49:14.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-14 14:36:41.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-10-14 14:49:15.000000000 +0100 nova

/bin:
total 6104
-rwxr-xr-x 1 root root 1261568 2025-10-14 14:42:13.000000000 +0100 btrfs
lrwxrwxrwx 1 root root       5 2025-10-14 14:42:37.000000000 +0100 btrfs-image -> btrfs
lrwxrwxrwx 1 root root       5 2025-10-14 14:42:37.000000000 +0100 btrfstune -> btrfs
-rwxr-xr-x 1 root root 1208744 2025-10-14 14:37:54.000000000 +0100 fio
-rwxr-xr-x 1 root root  508272 2025-10-14 14:45:50.000000000 +0100 mdadm
lrwxrwxrwx 1 root root       5 2025-10-14 14:42:37.000000000 +0100 mkfs.btrfs -> btrfs
-rwxr-xr-x 1 root root  567544 2025-10-14 14:45:50.000000000 +0100 nvme
-rwxr-xr-x 1 root root  462308 2025-10-14 14:48:56.000000000 +0100 rsync
-rwxr-xr-x 1 root root 1142496 2025-10-14 14:47:36.000000000 +0100 sedutil-cli
-rwxr-xr-x 1 root root  739256 2025-10-14 14:44:38.000000000 +0100 smartctl
-rwxr-xr-x 1 root root  344404 2025-10-14 14:45:40.000000000 +0100 switchtec

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
drwxr-xr-x 3 root root 4096 2025-10-14 14:36:41.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:49:25.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 8 root root 4096 2025-10-14 14:36:42.000000000 +0100 kernel
-rw-r--r-- 1 root root  988 2025-10-14 14:49:27.000000000 +0100 modules.dep.storage

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x 3 root root 4096 2025-10-14 14:36:42.000000000 +0100 arch
drwxr-xr-x 3 root root 4096 2025-10-14 14:36:42.000000000 +0100 crypto
drwxr-xr-x 7 root root 4096 2025-10-14 14:36:43.000000000 +0100 drivers
drwxr-xr-x 8 root root 4096 2025-10-14 14:36:43.000000000 +0100 fs
drwxr-xr-x 4 root root 4096 2025-10-14 14:36:43.000000000 +0100 lib
drwxr-xr-x 3 root root 4096 2025-10-14 14:36:42.000000000 +0100 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:36:42.000000000 +0100 arm

/lib/modules/5.6.3/kernel/arch/arm:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:36:42.000000000 +0100 lib

/lib/modules/5.6.3/kernel/arch/arm/lib:
total 4
-rw-r--r-- 1 root root 3788 2025-10-14 14:32:18.000000000 +0100 xor-neon.ko

/lib/modules/5.6.3/kernel/crypto:
total 28
drwxr-xr-x 2 root root  4096 2025-10-14 14:36:41.000000000 +0100 async_tx
-rw-r--r-- 1 root root 10016 2025-10-14 14:32:18.000000000 +0100 essiv.ko
-rw-r--r-- 1 root root  8840 2025-10-14 14:32:18.000000000 +0100 xor.ko

/lib/modules/5.6.3/kernel/crypto/async_tx:
total 36
-rw-r--r-- 1 root root 4112 2025-10-14 14:32:18.000000000 +0100 async_memcpy.ko
-rw-r--r-- 1 root root 7828 2025-10-14 14:32:18.000000000 +0100 async_pq.ko
-rw-r--r-- 1 root root 3424 2025-10-14 14:32:18.000000000 +0100 async_raid6_recov.ko
-rw-r--r-- 1 root root 4596 2025-10-14 14:32:18.000000000 +0100 async_tx.ko
-rw-r--r-- 1 root root 6108 2025-10-14 14:32:18.000000000 +0100 async_xor.ko

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2025-10-14 14:36:43.000000000 +0100 block
drwxr-xr-x 2 root root 4096 2025-10-14 14:36:42.000000000 +0100 md
drwxr-xr-x 4 root root 4096 2025-10-14 14:36:41.000000000 +0100 nvme
drwxr-xr-x 2 root root 4096 2025-10-14 14:36:42.000000000 +0100 scsi
drwxr-xr-x 3 root root 4096 2025-10-14 14:36:42.000000000 +0100 target

/lib/modules/5.6.3/kernel/drivers/block:
total 12
-rw-r--r-- 1 root root 10036 2025-10-14 14:32:19.000000000 +0100 brd.ko

/lib/modules/5.6.3/kernel/drivers/md:
total 600
-rw-r--r-- 1 root root  23020 2025-10-14 14:32:19.000000000 +0100 dm-bufio.ko
-rw-r--r-- 1 root root  34300 2025-10-14 14:32:19.000000000 +0100 dm-crypt.ko
-rw-r--r-- 1 root root  51596 2025-10-14 14:32:19.000000000 +0100 dm-integrity.ko
-rw-r--r-- 1 root root 111664 2025-10-14 14:32:19.000000000 +0100 dm-mod.ko
-rw-r--r-- 1 root root   6492 2025-10-14 14:32:19.000000000 +0100 faulty.ko
-rw-r--r-- 1 root root   7272 2025-10-14 14:32:19.000000000 +0100 linear.ko
-rw-r--r-- 1 root root 133724 2025-10-14 14:32:19.000000000 +0100 md-mod.ko
-rw-r--r-- 1 root root  12584 2025-10-14 14:32:19.000000000 +0100 raid0.ko
-rw-r--r-- 1 root root  35564 2025-10-14 14:32:19.000000000 +0100 raid1.ko
-rw-r--r-- 1 root root  49396 2025-10-14 14:32:19.000000000 +0100 raid10.ko
-rw-r--r-- 1 root root 123536 2025-10-14 14:32:19.000000000 +0100 raid456.ko

/lib/modules/5.6.3/kernel/drivers/nvme:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:36:41.000000000 +0100 host
drwxr-xr-x 2 root root 4096 2025-10-14 14:36:41.000000000 +0100 target

/lib/modules/5.6.3/kernel/drivers/nvme/host:
total 48
-rw-r--r-- 1 root root 18568 2025-10-14 14:32:21.000000000 +0100 nvme-fabrics.ko
-rw-r--r-- 1 root root 27480 2025-10-14 14:32:21.000000000 +0100 nvme-tcp.ko

/lib/modules/5.6.3/kernel/drivers/nvme/target:
total 96
-rw-r--r-- 1 root root 18176 2025-10-14 14:32:21.000000000 +0100 nvmet-tcp.ko
-rw-r--r-- 1 root root 75032 2025-10-14 14:32:21.000000000 +0100 nvmet.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 160
-rw-r--r-- 1 root root 16280 2025-10-14 14:32:21.000000000 +0100 iscsi_tcp.ko
-rw-r--r-- 1 root root 45064 2025-10-14 14:32:21.000000000 +0100 libiscsi.ko
-rw-r--r-- 1 root root 17804 2025-10-14 14:32:21.000000000 +0100 libiscsi_tcp.ko
-rw-r--r-- 1 root root 77348 2025-10-14 14:32:21.000000000 +0100 scsi_transport_iscsi.ko

/lib/modules/5.6.3/kernel/drivers/target:
total 244
drwxr-xr-x 2 root root   4096 2025-10-14 14:36:42.000000000 +0100 iscsi
-rw-r--r-- 1 root root  13812 2025-10-14 14:32:21.000000000 +0100 target_core_iblock.ko
-rw-r--r-- 1 root root 227932 2025-10-14 14:32:21.000000000 +0100 target_core_mod.ko

/lib/modules/5.6.3/kernel/drivers/target/iscsi:
total 212
-rw-r--r-- 1 root root 215056 2025-10-14 14:32:21.000000000 +0100 iscsi_target_mod.ko

/lib/modules/5.6.3/kernel/fs:
total 24
drwxr-xr-x 2 root root 4096 2025-10-14 14:36:43.000000000 +0100 btrfs
drwxr-xr-x 2 root root 4096 2025-10-14 14:36:42.000000000 +0100 exportfs
drwxr-xr-x 2 root root 4096 2025-10-14 14:36:42.000000000 +0100 lockd
drwxr-xr-x 2 root root 4096 2025-10-14 14:36:42.000000000 +0100 nfs
drwxr-xr-x 2 root root 4096 2025-10-14 14:36:42.000000000 +0100 nfs_common
drwxr-xr-x 2 root root 4096 2025-10-14 14:36:42.000000000 +0100 nfsd

/lib/modules/5.6.3/kernel/fs/btrfs:
total 984
-rw-r--r-- 1 root root 1003716 2025-10-14 14:32:23.000000000 +0100 btrfs.ko

/lib/modules/5.6.3/kernel/fs/exportfs:
total 8
-rw-r--r-- 1 root root 5948 2025-10-14 14:32:23.000000000 +0100 exportfs.ko

/lib/modules/5.6.3/kernel/fs/lockd:
total 72
-rw-r--r-- 1 root root 72460 2025-10-14 14:32:23.000000000 +0100 lockd.ko

/lib/modules/5.6.3/kernel/fs/nfs:
total 484
-rw-r--r-- 1 root root 162436 2025-10-14 14:32:23.000000000 +0100 nfs.ko
-rw-r--r-- 1 root root  18616 2025-10-14 14:32:23.000000000 +0100 nfsv2.ko
-rw-r--r-- 1 root root  32052 2025-10-14 14:32:23.000000000 +0100 nfsv3.ko
-rw-r--r-- 1 root root 275192 2025-10-14 14:32:24.000000000 +0100 nfsv4.ko

/lib/modules/5.6.3/kernel/fs/nfs_common:
total 16
-rw-r--r-- 1 root root 5280 2025-10-14 14:32:24.000000000 +0100 grace.ko
-rw-r--r-- 1 root root 4956 2025-10-14 14:32:24.000000000 +0100 nfs_acl.ko

/lib/modules/5.6.3/kernel/fs/nfsd:
total 312
-rw-r--r-- 1 root root 316068 2025-10-14 14:32:24.000000000 +0100 nfsd.ko

/lib/modules/5.6.3/kernel/lib:
total 20
drwxr-xr-x 2 root root 4096 2025-10-14 14:36:41.000000000 +0100 raid6
-rw-r--r-- 1 root root 8292 2025-10-14 14:32:24.000000000 +0100 xxhash.ko
drwxr-xr-x 2 root root 4096 2025-10-14 14:36:43.000000000 +0100 zstd

/lib/modules/5.6.3/kernel/lib/raid6:
total 100
-rw-r--r-- 1 root root 100852 2025-10-14 14:32:24.000000000 +0100 raid6_pq.ko

/lib/modules/5.6.3/kernel/lib/zstd:
total 200
-rw-r--r-- 1 root root 150680 2025-10-14 14:32:24.000000000 +0100 zstd_compress.ko
-rw-r--r-- 1 root root  51128 2025-10-14 14:32:24.000000000 +0100 zstd_decompress.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:36:42.000000000 +0100 sunrpc

/lib/modules/5.6.3/kernel/net/sunrpc:
total 216
drwxr-xr-x 2 root root   4096 2025-10-14 14:36:42.000000000 +0100 auth_gss
-rw-r--r-- 1 root root 216744 2025-10-14 14:32:28.000000000 +0100 sunrpc.ko

/lib/modules/5.6.3/kernel/net/sunrpc/auth_gss:
total 52
-rw-r--r-- 1 root root 51864 2025-10-14 14:32:28.000000000 +0100 auth_rpcgss.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:21.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-14 14:49:15.000000000 +0100 lib

/nova/bin:
total 48
-rwxr-xr-x 1 root root 46980 2025-10-14 14:49:21.000000000 +0100 filesync

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:49:15.000000000 +0100 console

/nova/lib/console:
total 16
-rwxr-xr-x 1 root root 13992 2025-10-14 14:49:15.000000000 +0100 1287651328.mem
```

