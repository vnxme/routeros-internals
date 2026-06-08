### rose-storage.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 4517580 bytes, 123 inodes, blocksize: 524288 bytes, created: Tue Jun  2 09:52:23 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:22.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-06-02 10:51:51.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2026-06-02 10:51:50.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2026-06-02 10:52:22.000000000 +0100 nova

/bin:
total 9080
-rwxr-xr-x 1 root root 1261568 2026-06-02 10:48:12.000000000 +0100 btrfs
lrwxrwxrwx 1 root root       5 2026-06-02 10:52:22.000000000 +0100 btrfs-image -> btrfs
lrwxrwxrwx 1 root root       5 2026-06-02 10:52:22.000000000 +0100 btrfstune -> btrfs
-rwxr-xr-x 1 root root  525668 2026-06-02 10:45:02.000000000 +0100 e2fsck
-rwxr-xr-x 1 root root 1208744 2026-06-02 10:46:25.000000000 +0100 fio
-rwxr-xr-x 1 root root  508272 2026-06-02 10:48:52.000000000 +0100 mdadm
lrwxrwxrwx 1 root root       5 2026-06-02 10:52:22.000000000 +0100 mkfs.btrfs -> btrfs
-rwxr-xr-x 1 root root  563468 2026-06-02 10:50:12.000000000 +0100 mkfs.xfs
-rwxr-xr-x 1 root root  567544 2026-06-02 10:48:47.000000000 +0100 nvme
-rwxr-xr-x 1 root root  462308 2026-06-02 10:51:07.000000000 +0100 rsync
-rwxr-xr-x 1 root root 1142496 2026-06-02 10:49:14.000000000 +0100 sedutil-cli
-rwxr-xr-x 1 root root  739256 2026-06-02 10:48:31.000000000 +0100 smartctl
-rwxr-xr-x 1 root root  344404 2026-06-02 10:48:43.000000000 +0100 switchtec
-rwxr-xr-x 1 root root   87736 2026-06-02 10:50:03.000000000 +0100 xfs_copy
-rwxr-xr-x 1 root root  543492 2026-06-02 10:50:13.000000000 +0100 xfs_db
-rwxr-xr-x 1 root root    9528 2026-06-02 10:50:03.000000000 +0100 xfs_estimate
-rwxr-xr-x 1 root root   34380 2026-06-02 10:50:08.000000000 +0100 xfs_fsr
-rwxr-xr-x 1 root root   30228 2026-06-02 10:50:08.000000000 +0100 xfs_growfs
-rwxr-xr-x 1 root root  158036 2026-06-02 10:50:14.000000000 +0100 xfs_io
-rwxr-xr-x 1 root root   67088 2026-06-02 10:50:12.000000000 +0100 xfs_logprint
-rwxr-xr-x 1 root root   21840 2026-06-02 10:50:11.000000000 +0100 xfs_mdrestore
-rwxr-xr-x 1 root root   67068 2026-06-02 10:50:12.000000000 +0100 xfs_quota
-rwxr-xr-x 1 root root  777164 2026-06-02 10:50:20.000000000 +0100 xfs_repair
-rwxr-xr-x 1 root root    9512 2026-06-02 10:50:11.000000000 +0100 xfs_rtcp
-rwxr-xr-x 1 root root   83588 2026-06-02 10:50:15.000000000 +0100 xfs_scrub
-rwxr-xr-x 1 root root   34288 2026-06-02 10:50:13.000000000 +0100 xfs_spaceman

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:51:51.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:22.000000000 +0100 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root  26 2026-06-02 10:51:51.000000000 +0100 storage-cdcd5c9a3a47.jg.gz
-rwxr-xr-x 1 root root 105 2026-06-02 10:51:51.000000000 +0100 storage.info
lrwxrwxrwx 1 root root  26 2026-06-02 10:52:22.000000000 +0100 storage.jg.gz -> storage-cdcd5c9a3a47.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:51:50.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:39.000000000 +0100 modules

/lib/firmware:
total 24
-rw-r--r-- 1 root root 21913 2026-06-02 10:51:50.000000000 +0100 switchtec.pmc

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:52:04.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 8 root root 4096 2026-06-02 10:45:39.000000000 +0100 kernel
-rw-r--r-- 1 root root  962 2026-06-02 10:52:08.000000000 +0100 modules.dep.storage

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:39.000000000 +0100 arch
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:39.000000000 +0100 crypto
drwxr-xr-x 7 root root 4096 2026-06-02 10:45:40.000000000 +0100 drivers
drwxr-xr-x 8 root root 4096 2026-06-02 10:45:40.000000000 +0100 fs
drwxr-xr-x 4 root root 4096 2026-06-02 10:45:40.000000000 +0100 lib
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:39.000000000 +0100 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:39.000000000 +0100 arm64

/lib/modules/5.6.3/kernel/arch/arm64:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:39.000000000 +0100 lib

/lib/modules/5.6.3/kernel/arch/arm64/lib:
total 8
-rw-r--r-- 1 root root 4408 2026-06-02 10:44:36.000000000 +0100 xor-neon.ko

/lib/modules/5.6.3/kernel/crypto:
total 32
drwxr-xr-x 2 root root  4096 2026-06-02 10:45:39.000000000 +0100 async_tx
-rw-r--r-- 1 root root 13880 2026-06-02 10:44:36.000000000 +0100 essiv.ko
-rw-r--r-- 1 root root 10360 2026-06-02 10:44:36.000000000 +0100 xor.ko

/lib/modules/5.6.3/kernel/crypto/async_tx:
total 52
-rw-r--r-- 1 root root  5616 2026-06-02 10:44:36.000000000 +0100 async_memcpy.ko
-rw-r--r-- 1 root root 10040 2026-06-02 10:44:36.000000000 +0100 async_pq.ko
-rw-r--r-- 1 root root 10688 2026-06-02 10:44:36.000000000 +0100 async_raid6_recov.ko
-rw-r--r-- 1 root root  8064 2026-06-02 10:44:36.000000000 +0100 async_tx.ko
-rw-r--r-- 1 root root  8208 2026-06-02 10:44:36.000000000 +0100 async_xor.ko

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:40.000000000 +0100 block
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:39.000000000 +0100 md
drwxr-xr-x 4 root root 4096 2026-06-02 10:45:39.000000000 +0100 nvme
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:40.000000000 +0100 scsi
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:40.000000000 +0100 target

/lib/modules/5.6.3/kernel/drivers/block:
total 16
-rw-r--r-- 1 root root 13976 2026-06-02 10:44:36.000000000 +0100 brd.ko

/lib/modules/5.6.3/kernel/drivers/md:
total 816
-rw-r--r-- 1 root root  33880 2026-06-02 10:44:36.000000000 +0100 dm-bufio.ko
-rw-r--r-- 1 root root  50448 2026-06-02 10:44:36.000000000 +0100 dm-crypt.ko
-rw-r--r-- 1 root root  66880 2026-06-02 10:44:36.000000000 +0100 dm-integrity.ko
-rw-r--r-- 1 root root 168312 2026-06-02 10:44:36.000000000 +0100 dm-mod.ko
-rw-r--r-- 1 root root   9056 2026-06-02 10:44:36.000000000 +0100 faulty.ko
-rw-r--r-- 1 root root  10248 2026-06-02 10:44:36.000000000 +0100 linear.ko
-rw-r--r-- 1 root root 189976 2026-06-02 10:44:36.000000000 +0100 md-mod.ko
-rw-r--r-- 1 root root  16584 2026-06-02 10:44:36.000000000 +0100 raid0.ko
-rw-r--r-- 1 root root  46584 2026-06-02 10:44:36.000000000 +0100 raid1.ko
-rw-r--r-- 1 root root  58288 2026-06-02 10:44:36.000000000 +0100 raid10.ko
-rw-r--r-- 1 root root 152176 2026-06-02 10:44:36.000000000 +0100 raid456.ko

/lib/modules/5.6.3/kernel/drivers/nvme:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:39.000000000 +0100 host
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:39.000000000 +0100 target

/lib/modules/5.6.3/kernel/drivers/nvme/host:
total 72
-rw-r--r-- 1 root root 29576 2026-06-02 10:44:37.000000000 +0100 nvme-fabrics.ko
-rw-r--r-- 1 root root 39448 2026-06-02 10:44:37.000000000 +0100 nvme-tcp.ko

/lib/modules/5.6.3/kernel/drivers/nvme/target:
total 144
-rw-r--r-- 1 root root  26352 2026-06-02 10:44:37.000000000 +0100 nvmet-tcp.ko
-rw-r--r-- 1 root root 114752 2026-06-02 10:44:37.000000000 +0100 nvmet.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 252
-rw-r--r-- 1 root root  24880 2026-06-02 10:44:37.000000000 +0100 iscsi_tcp.ko
-rw-r--r-- 1 root root  69504 2026-06-02 10:44:37.000000000 +0100 libiscsi.ko
-rw-r--r-- 1 root root  29568 2026-06-02 10:44:37.000000000 +0100 libiscsi_tcp.ko
drwxr-xr-x 2 root root   4096 2026-06-02 10:45:40.000000000 +0100 mpt3sas
-rw-r--r-- 1 root root 121616 2026-06-02 10:44:37.000000000 +0100 scsi_transport_iscsi.ko

/lib/modules/5.6.3/kernel/drivers/scsi/mpt3sas:
total 372
-rw-r--r-- 1 root root 377272 2026-06-02 10:44:37.000000000 +0100 mpt3sas.ko

/lib/modules/5.6.3/kernel/drivers/target:
total 356
drwxr-xr-x 2 root root   4096 2026-06-02 10:45:40.000000000 +0100 iscsi
-rw-r--r-- 1 root root  18760 2026-06-02 10:44:37.000000000 +0100 target_core_iblock.ko
-rw-r--r-- 1 root root 335976 2026-06-02 10:44:37.000000000 +0100 target_core_mod.ko

/lib/modules/5.6.3/kernel/drivers/target/iscsi:
total 316
-rw-r--r-- 1 root root 322760 2026-06-02 10:44:37.000000000 +0100 iscsi_target_mod.ko

/lib/modules/5.6.3/kernel/fs:
total 24
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:40.000000000 +0100 btrfs
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:39.000000000 +0100 lockd
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:40.000000000 +0100 nfs
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:39.000000000 +0100 nfs_common
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:40.000000000 +0100 nfsd
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:40.000000000 +0100 xfs

/lib/modules/5.6.3/kernel/fs/btrfs:
total 1264
-rw-r--r-- 1 root root 1292128 2026-06-02 10:44:38.000000000 +0100 btrfs.ko

/lib/modules/5.6.3/kernel/fs/lockd:
total 112
-rw-r--r-- 1 root root 113176 2026-06-02 10:44:38.000000000 +0100 lockd.ko

/lib/modules/5.6.3/kernel/fs/nfs:
total 736
-rw-r--r-- 1 root root 258048 2026-06-02 10:44:38.000000000 +0100 nfs.ko
-rw-r--r-- 1 root root  25824 2026-06-02 10:44:38.000000000 +0100 nfsv2.ko
-rw-r--r-- 1 root root  45664 2026-06-02 10:44:38.000000000 +0100 nfsv3.ko
-rw-r--r-- 1 root root 414856 2026-06-02 10:44:38.000000000 +0100 nfsv4.ko

/lib/modules/5.6.3/kernel/fs/nfs_common:
total 16
-rw-r--r-- 1 root root 8168 2026-06-02 10:44:38.000000000 +0100 grace.ko
-rw-r--r-- 1 root root 7056 2026-06-02 10:44:38.000000000 +0100 nfs_acl.ko

/lib/modules/5.6.3/kernel/fs/nfsd:
total 444
-rw-r--r-- 1 root root 452376 2026-06-02 10:44:38.000000000 +0100 nfsd.ko

/lib/modules/5.6.3/kernel/fs/xfs:
total 948
-rw-r--r-- 1 root root 967752 2026-06-02 10:44:38.000000000 +0100 xfs.ko

/lib/modules/5.6.3/kernel/lib:
total 16
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:39.000000000 +0100 raid6
-rw-r--r-- 1 root root 8112 2026-06-02 10:44:38.000000000 +0100 xxhash.ko
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:40.000000000 +0100 zstd

/lib/modules/5.6.3/kernel/lib/raid6:
total 104
-rw-r--r-- 1 root root 105768 2026-06-02 10:44:38.000000000 +0100 raid6_pq.ko

/lib/modules/5.6.3/kernel/lib/zstd:
total 236
-rw-r--r-- 1 root root 164496 2026-06-02 10:44:38.000000000 +0100 zstd_compress.ko
-rw-r--r-- 1 root root  71264 2026-06-02 10:44:38.000000000 +0100 zstd_decompress.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:39.000000000 +0100 sunrpc

/lib/modules/5.6.3/kernel/net/sunrpc:
total 344
drwxr-xr-x 2 root root   4096 2026-06-02 10:45:39.000000000 +0100 auth_gss
-rw-r--r-- 1 root root 347720 2026-06-02 10:44:41.000000000 +0100 sunrpc.ko

/lib/modules/5.6.3/kernel/net/sunrpc/auth_gss:
total 76
-rw-r--r-- 1 root root 77128 2026-06-02 10:44:41.000000000 +0100 auth_rpcgss.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:22.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-06-02 10:52:22.000000000 +0100 lib

/nova/bin:
total 48
-rwxr-xr-x 1 root root 46980 2026-06-02 10:51:53.000000000 +0100 filesync

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:22.000000000 +0100 console

/nova/lib/console:
total 16
-rwxr-xr-x 1 root root 14400 2026-06-02 10:51:52.000000000 +0100 1287651328.mem
```

