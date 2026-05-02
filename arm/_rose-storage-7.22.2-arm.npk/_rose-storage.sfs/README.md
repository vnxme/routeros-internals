### rose-storage.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 4142152 bytes, 120 inodes, blocksize: 524288 bytes, created: Wed Apr 22 08:30:43 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
drwxr-xr-x 2 root root 4096 2026-04-22 09:30:11.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-04-22 09:30:17.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:12.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2026-04-22 09:30:18.000000000 +0100 nova

/bin:
total 8564
-rwxr-xr-x 1 root root 1261568 2026-04-22 09:26:44.000000000 +0100 btrfs
lrwxrwxrwx 1 root root       5 2026-04-22 09:26:52.000000000 +0100 btrfs-image -> btrfs
lrwxrwxrwx 1 root root       5 2026-04-22 09:26:52.000000000 +0100 btrfstune -> btrfs
-rwxr-xr-x 1 root root 1208744 2026-04-22 09:24:53.000000000 +0100 fio
-rwxr-xr-x 1 root root  508272 2026-04-22 09:27:39.000000000 +0100 mdadm
lrwxrwxrwx 1 root root       5 2026-04-22 09:26:52.000000000 +0100 mkfs.btrfs -> btrfs
-rwxr-xr-x 1 root root  563468 2026-04-22 09:28:50.000000000 +0100 mkfs.xfs
-rwxr-xr-x 1 root root  567544 2026-04-22 09:27:36.000000000 +0100 nvme
-rwxr-xr-x 1 root root  462308 2026-04-22 09:30:11.000000000 +0100 rsync
-rwxr-xr-x 1 root root 1142496 2026-04-22 09:28:12.000000000 +0100 sedutil-cli
-rwxr-xr-x 1 root root  739256 2026-04-22 09:27:19.000000000 +0100 smartctl
-rwxr-xr-x 1 root root  344404 2026-04-22 09:27:36.000000000 +0100 switchtec
-rwxr-xr-x 1 root root   87736 2026-04-22 09:28:51.000000000 +0100 xfs_copy
-rwxr-xr-x 1 root root  543492 2026-04-22 09:29:03.000000000 +0100 xfs_db
-rwxr-xr-x 1 root root    9528 2026-04-22 09:28:48.000000000 +0100 xfs_estimate
-rwxr-xr-x 1 root root   34380 2026-04-22 09:28:52.000000000 +0100 xfs_fsr
-rwxr-xr-x 1 root root   30228 2026-04-22 09:28:49.000000000 +0100 xfs_growfs
-rwxr-xr-x 1 root root  158036 2026-04-22 09:28:59.000000000 +0100 xfs_io
-rwxr-xr-x 1 root root   67088 2026-04-22 09:28:50.000000000 +0100 xfs_logprint
-rwxr-xr-x 1 root root   21840 2026-04-22 09:28:50.000000000 +0100 xfs_mdrestore
-rwxr-xr-x 1 root root   67068 2026-04-22 09:28:51.000000000 +0100 xfs_quota
-rwxr-xr-x 1 root root  777164 2026-04-22 09:28:58.000000000 +0100 xfs_repair
-rwxr-xr-x 1 root root    9512 2026-04-22 09:28:50.000000000 +0100 xfs_rtcp
-rwxr-xr-x 1 root root   83588 2026-04-22 09:28:54.000000000 +0100 xfs_scrub
-rwxr-xr-x 1 root root   34288 2026-04-22 09:28:51.000000000 +0100 xfs_spaceman

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:30:17.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:30:17.000000000 +0100 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root  26 2026-04-22 09:30:17.000000000 +0100 storage-cdcd5c9a3a47.jg.gz
-rwxr-xr-x 1 root root 105 2026-04-22 09:30:17.000000000 +0100 storage.info
lrwxrwxrwx 1 root root  26 2026-04-22 09:30:17.000000000 +0100 storage.jg.gz -> storage-cdcd5c9a3a47.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:12.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:30:24.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 8 root root 4096 2026-04-22 09:24:13.000000000 +0100 kernel
-rw-r--r-- 1 root root 1002 2026-04-22 09:30:29.000000000 +0100 modules.dep.storage

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:12.000000000 +0100 arch
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:12.000000000 +0100 crypto
drwxr-xr-x 7 root root 4096 2026-04-22 09:24:13.000000000 +0100 drivers
drwxr-xr-x 9 root root 4096 2026-04-22 09:24:13.000000000 +0100 fs
drwxr-xr-x 4 root root 4096 2026-04-22 09:24:13.000000000 +0100 lib
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:12.000000000 +0100 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:12.000000000 +0100 arm

/lib/modules/5.6.3/kernel/arch/arm:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:12.000000000 +0100 lib

/lib/modules/5.6.3/kernel/arch/arm/lib:
total 4
-rw-r--r-- 1 root root 3788 2026-04-22 09:23:03.000000000 +0100 xor-neon.ko

/lib/modules/5.6.3/kernel/crypto:
total 28
drwxr-xr-x 2 root root  4096 2026-04-22 09:24:12.000000000 +0100 async_tx
-rw-r--r-- 1 root root 10016 2026-04-22 09:23:04.000000000 +0100 essiv.ko
-rw-r--r-- 1 root root  8840 2026-04-22 09:23:04.000000000 +0100 xor.ko

/lib/modules/5.6.3/kernel/crypto/async_tx:
total 36
-rw-r--r-- 1 root root 4112 2026-04-22 09:23:03.000000000 +0100 async_memcpy.ko
-rw-r--r-- 1 root root 7828 2026-04-22 09:23:03.000000000 +0100 async_pq.ko
-rw-r--r-- 1 root root 3424 2026-04-22 09:23:03.000000000 +0100 async_raid6_recov.ko
-rw-r--r-- 1 root root 4596 2026-04-22 09:23:03.000000000 +0100 async_tx.ko
-rw-r--r-- 1 root root 6108 2026-04-22 09:23:03.000000000 +0100 async_xor.ko

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:13.000000000 +0100 block
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:12.000000000 +0100 md
drwxr-xr-x 4 root root 4096 2026-04-22 09:24:12.000000000 +0100 nvme
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:13.000000000 +0100 scsi
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:13.000000000 +0100 target

/lib/modules/5.6.3/kernel/drivers/block:
total 12
-rw-r--r-- 1 root root 10036 2026-04-22 09:23:04.000000000 +0100 brd.ko

/lib/modules/5.6.3/kernel/drivers/md:
total 600
-rw-r--r-- 1 root root  23020 2026-04-22 09:23:04.000000000 +0100 dm-bufio.ko
-rw-r--r-- 1 root root  34300 2026-04-22 09:23:04.000000000 +0100 dm-crypt.ko
-rw-r--r-- 1 root root  51596 2026-04-22 09:23:04.000000000 +0100 dm-integrity.ko
-rw-r--r-- 1 root root 111664 2026-04-22 09:23:04.000000000 +0100 dm-mod.ko
-rw-r--r-- 1 root root   6492 2026-04-22 09:23:04.000000000 +0100 faulty.ko
-rw-r--r-- 1 root root   7272 2026-04-22 09:23:04.000000000 +0100 linear.ko
-rw-r--r-- 1 root root 133724 2026-04-22 09:23:04.000000000 +0100 md-mod.ko
-rw-r--r-- 1 root root  12584 2026-04-22 09:23:04.000000000 +0100 raid0.ko
-rw-r--r-- 1 root root  35564 2026-04-22 09:23:04.000000000 +0100 raid1.ko
-rw-r--r-- 1 root root  49396 2026-04-22 09:23:04.000000000 +0100 raid10.ko
-rw-r--r-- 1 root root 123536 2026-04-22 09:23:04.000000000 +0100 raid456.ko

/lib/modules/5.6.3/kernel/drivers/nvme:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:12.000000000 +0100 host
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:12.000000000 +0100 target

/lib/modules/5.6.3/kernel/drivers/nvme/host:
total 48
-rw-r--r-- 1 root root 18568 2026-04-22 09:23:05.000000000 +0100 nvme-fabrics.ko
-rw-r--r-- 1 root root 27480 2026-04-22 09:23:05.000000000 +0100 nvme-tcp.ko

/lib/modules/5.6.3/kernel/drivers/nvme/target:
total 96
-rw-r--r-- 1 root root 18176 2026-04-22 09:23:05.000000000 +0100 nvmet-tcp.ko
-rw-r--r-- 1 root root 75032 2026-04-22 09:23:05.000000000 +0100 nvmet.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 164
-rw-r--r-- 1 root root 16280 2026-04-22 09:23:05.000000000 +0100 iscsi_tcp.ko
-rw-r--r-- 1 root root 45064 2026-04-22 09:23:05.000000000 +0100 libiscsi.ko
-rw-r--r-- 1 root root 17804 2026-04-22 09:23:05.000000000 +0100 libiscsi_tcp.ko
-rw-r--r-- 1 root root 77848 2026-04-22 09:23:05.000000000 +0100 scsi_transport_iscsi.ko

/lib/modules/5.6.3/kernel/drivers/target:
total 244
drwxr-xr-x 2 root root   4096 2026-04-22 09:24:13.000000000 +0100 iscsi
-rw-r--r-- 1 root root  13812 2026-04-22 09:23:05.000000000 +0100 target_core_iblock.ko
-rw-r--r-- 1 root root 227932 2026-04-22 09:23:05.000000000 +0100 target_core_mod.ko

/lib/modules/5.6.3/kernel/drivers/target/iscsi:
total 212
-rw-r--r-- 1 root root 215056 2026-04-22 09:23:05.000000000 +0100 iscsi_target_mod.ko

/lib/modules/5.6.3/kernel/fs:
total 28
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:13.000000000 +0100 btrfs
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:13.000000000 +0100 exportfs
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:13.000000000 +0100 lockd
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:13.000000000 +0100 nfs
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:13.000000000 +0100 nfs_common
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:13.000000000 +0100 nfsd
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:13.000000000 +0100 xfs

/lib/modules/5.6.3/kernel/fs/btrfs:
total 984
-rw-r--r-- 1 root root 1003716 2026-04-22 09:23:06.000000000 +0100 btrfs.ko

/lib/modules/5.6.3/kernel/fs/exportfs:
total 8
-rw-r--r-- 1 root root 5948 2026-04-22 09:23:06.000000000 +0100 exportfs.ko

/lib/modules/5.6.3/kernel/fs/lockd:
total 72
-rw-r--r-- 1 root root 72460 2026-04-22 09:23:06.000000000 +0100 lockd.ko

/lib/modules/5.6.3/kernel/fs/nfs:
total 496
-rw-r--r-- 1 root root 162728 2026-04-22 09:23:07.000000000 +0100 nfs.ko
-rw-r--r-- 1 root root  18616 2026-04-22 09:23:07.000000000 +0100 nfsv2.ko
-rw-r--r-- 1 root root  32052 2026-04-22 09:23:07.000000000 +0100 nfsv3.ko
-rw-r--r-- 1 root root 290104 2026-04-22 09:23:07.000000000 +0100 nfsv4.ko

/lib/modules/5.6.3/kernel/fs/nfs_common:
total 16
-rw-r--r-- 1 root root 5280 2026-04-22 09:23:07.000000000 +0100 grace.ko
-rw-r--r-- 1 root root 4956 2026-04-22 09:23:07.000000000 +0100 nfs_acl.ko

/lib/modules/5.6.3/kernel/fs/nfsd:
total 316
-rw-r--r-- 1 root root 321560 2026-04-22 09:23:07.000000000 +0100 nfsd.ko

/lib/modules/5.6.3/kernel/fs/xfs:
total 672
-rw-r--r-- 1 root root 684996 2026-04-22 09:23:07.000000000 +0100 xfs.ko

/lib/modules/5.6.3/kernel/lib:
total 20
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:12.000000000 +0100 raid6
-rw-r--r-- 1 root root 8292 2026-04-22 09:23:07.000000000 +0100 xxhash.ko
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:13.000000000 +0100 zstd

/lib/modules/5.6.3/kernel/lib/raid6:
total 100
-rw-r--r-- 1 root root 100852 2026-04-22 09:23:07.000000000 +0100 raid6_pq.ko

/lib/modules/5.6.3/kernel/lib/zstd:
total 200
-rw-r--r-- 1 root root 150680 2026-04-22 09:23:07.000000000 +0100 zstd_compress.ko
-rw-r--r-- 1 root root  51128 2026-04-22 09:23:07.000000000 +0100 zstd_decompress.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:12.000000000 +0100 sunrpc

/lib/modules/5.6.3/kernel/net/sunrpc:
total 216
drwxr-xr-x 2 root root   4096 2026-04-22 09:24:13.000000000 +0100 auth_gss
-rw-r--r-- 1 root root 216744 2026-04-22 09:23:09.000000000 +0100 sunrpc.ko

/lib/modules/5.6.3/kernel/net/sunrpc/auth_gss:
total 52
-rw-r--r-- 1 root root 51864 2026-04-22 09:23:09.000000000 +0100 auth_rpcgss.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:30:19.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-04-22 09:30:18.000000000 +0100 lib

/nova/bin:
total 48
-rwxr-xr-x 1 root root 46980 2026-04-22 09:30:19.000000000 +0100 filesync

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:30:18.000000000 +0100 console

/nova/lib/console:
total 16
-rwxr-xr-x 1 root root 14332 2026-04-22 09:30:18.000000000 +0100 1287651328.mem
```

