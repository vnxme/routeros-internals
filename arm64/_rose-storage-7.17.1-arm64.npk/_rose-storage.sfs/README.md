### rose-storage.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 3195208 bytes, 104 inodes, blocksize: 524288 bytes, created: Thu Jan 30 11:31:24 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
drwxr-xr-x 2 root root 4096 2025-01-30 11:31:22.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-01-30 11:30:56.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:47.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2025-01-30 11:31:22.000000000 +0000 nova

/bin:
total 6068
-rwxr-xr-x 1 root root 1253376 2025-01-30 11:21:06.000000000 +0000 btrfs
lrwxrwxrwx 1 root root       5 2025-01-30 11:31:22.000000000 +0000 btrfs-image -> btrfs
lrwxrwxrwx 1 root root       5 2025-01-30 11:31:22.000000000 +0000 btrfstune -> btrfs
-rwxr-xr-x 1 root root 1208744 2025-01-30 11:16:14.000000000 +0000 fio
-rwxr-xr-x 1 root root  508272 2025-01-30 11:25:06.000000000 +0000 mdadm
lrwxrwxrwx 1 root root       5 2025-01-30 11:31:22.000000000 +0000 mkfs.btrfs -> btrfs
-rwxr-xr-x 1 root root  567544 2025-01-30 11:25:06.000000000 +0000 nvme
-rwxr-xr-x 1 root root  432904 2025-01-30 11:29:08.000000000 +0000 rsync
-rwxr-xr-x 1 root root 1142496 2025-01-30 11:26:04.000000000 +0000 sedutil-cli
-rwxr-xr-x 1 root root  739256 2025-01-30 11:23:50.000000000 +0000 smartctl
-rwxr-xr-x 1 root root  344404 2025-01-30 11:24:55.000000000 +0000 switchtec

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:30:56.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:31:22.000000000 +0000 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root  34 2025-01-30 11:30:56.000000000 +0000 storage-cdcd5c9a3a47.jg.gz
-rwxr-xr-x 1 root root 105 2025-01-30 11:30:56.000000000 +0000 storage.info
lrwxrwxrwx 1 root root  26 2025-01-30 11:31:22.000000000 +0000 storage.jg.gz -> storage-cdcd5c9a3a47.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:47.000000000 +0000 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:31:11.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 8 root root 4096 2025-01-30 11:14:48.000000000 +0000 kernel
-rw-r--r-- 1 root root  962 2025-01-30 11:31:14.000000000 +0000 modules.dep.storage

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:48.000000000 +0000 arch
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:47.000000000 +0000 crypto
drwxr-xr-x 7 root root 4096 2025-01-30 11:14:49.000000000 +0000 drivers
drwxr-xr-x 7 root root 4096 2025-01-30 11:14:49.000000000 +0000 fs
drwxr-xr-x 4 root root 4096 2025-01-30 11:14:48.000000000 +0000 lib
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:48.000000000 +0000 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:48.000000000 +0000 arm64

/lib/modules/5.6.3/kernel/arch/arm64:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:48.000000000 +0000 lib

/lib/modules/5.6.3/kernel/arch/arm64/lib:
total 8
-rw-r--r-- 1 root root 4408 2025-01-30 11:11:29.000000000 +0000 xor-neon.ko

/lib/modules/5.6.3/kernel/crypto:
total 32
drwxr-xr-x 2 root root  4096 2025-01-30 11:14:47.000000000 +0000 async_tx
-rw-r--r-- 1 root root 13880 2025-01-30 11:11:29.000000000 +0000 essiv.ko
-rw-r--r-- 1 root root 10360 2025-01-30 11:11:30.000000000 +0000 xor.ko

/lib/modules/5.6.3/kernel/crypto/async_tx:
total 52
-rw-r--r-- 1 root root  5616 2025-01-30 11:11:29.000000000 +0000 async_memcpy.ko
-rw-r--r-- 1 root root 10040 2025-01-30 11:11:29.000000000 +0000 async_pq.ko
-rw-r--r-- 1 root root 10688 2025-01-30 11:11:29.000000000 +0000 async_raid6_recov.ko
-rw-r--r-- 1 root root  8064 2025-01-30 11:11:29.000000000 +0000 async_tx.ko
-rw-r--r-- 1 root root  8208 2025-01-30 11:11:29.000000000 +0000 async_xor.ko

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:49.000000000 +0000 block
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:48.000000000 +0000 md
drwxr-xr-x 4 root root 4096 2025-01-30 11:14:47.000000000 +0000 nvme
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:48.000000000 +0000 scsi
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:48.000000000 +0000 target

/lib/modules/5.6.3/kernel/drivers/block:
total 16
-rw-r--r-- 1 root root 13984 2025-01-30 11:11:30.000000000 +0000 brd.ko

/lib/modules/5.6.3/kernel/drivers/md:
total 808
-rw-r--r-- 1 root root  33808 2025-01-30 11:11:30.000000000 +0000 dm-bufio.ko
-rw-r--r-- 1 root root  50296 2025-01-30 11:11:30.000000000 +0000 dm-crypt.ko
-rw-r--r-- 1 root root  66816 2025-01-30 11:11:30.000000000 +0000 dm-integrity.ko
-rw-r--r-- 1 root root 167568 2025-01-30 11:11:30.000000000 +0000 dm-mod.ko
-rw-r--r-- 1 root root   8960 2025-01-30 11:11:31.000000000 +0000 faulty.ko
-rw-r--r-- 1 root root  10176 2025-01-30 11:11:31.000000000 +0000 linear.ko
-rw-r--r-- 1 root root 189976 2025-01-30 11:11:31.000000000 +0000 md-mod.ko
-rw-r--r-- 1 root root  16448 2025-01-30 11:11:31.000000000 +0000 raid0.ko
-rw-r--r-- 1 root root  46336 2025-01-30 11:11:31.000000000 +0000 raid1.ko
-rw-r--r-- 1 root root  57744 2025-01-30 11:11:31.000000000 +0000 raid10.ko
-rw-r--r-- 1 root root 151208 2025-01-30 11:11:31.000000000 +0000 raid456.ko

/lib/modules/5.6.3/kernel/drivers/nvme:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:47.000000000 +0000 host
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:47.000000000 +0000 target

/lib/modules/5.6.3/kernel/drivers/nvme/host:
total 72
-rw-r--r-- 1 root root 29576 2025-01-30 11:11:33.000000000 +0000 nvme-fabrics.ko
-rw-r--r-- 1 root root 39448 2025-01-30 11:11:34.000000000 +0000 nvme-tcp.ko

/lib/modules/5.6.3/kernel/drivers/nvme/target:
total 140
-rw-r--r-- 1 root root  26352 2025-01-30 11:11:34.000000000 +0000 nvmet-tcp.ko
-rw-r--r-- 1 root root 114632 2025-01-30 11:11:34.000000000 +0000 nvmet.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 252
-rw-r--r-- 1 root root  24880 2025-01-30 11:11:34.000000000 +0000 iscsi_tcp.ko
-rw-r--r-- 1 root root  69504 2025-01-30 11:11:34.000000000 +0000 libiscsi.ko
-rw-r--r-- 1 root root  29568 2025-01-30 11:11:34.000000000 +0000 libiscsi_tcp.ko
drwxr-xr-x 2 root root   4096 2025-01-30 11:14:48.000000000 +0000 mpt3sas
-rw-r--r-- 1 root root 120800 2025-01-30 11:11:34.000000000 +0000 scsi_transport_iscsi.ko

/lib/modules/5.6.3/kernel/drivers/scsi/mpt3sas:
total 372
-rw-r--r-- 1 root root 377000 2025-01-30 11:11:34.000000000 +0000 mpt3sas.ko

/lib/modules/5.6.3/kernel/drivers/target:
total 356
drwxr-xr-x 2 root root   4096 2025-01-30 11:14:48.000000000 +0000 iscsi
-rw-r--r-- 1 root root  18664 2025-01-30 11:11:34.000000000 +0000 target_core_iblock.ko
-rw-r--r-- 1 root root 335976 2025-01-30 11:11:34.000000000 +0000 target_core_mod.ko

/lib/modules/5.6.3/kernel/drivers/target/iscsi:
total 316
-rw-r--r-- 1 root root 323280 2025-01-30 11:11:34.000000000 +0000 iscsi_target_mod.ko

/lib/modules/5.6.3/kernel/fs:
total 20
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:49.000000000 +0000 btrfs
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:48.000000000 +0000 lockd
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:48.000000000 +0000 nfs
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:48.000000000 +0000 nfs_common
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:48.000000000 +0000 nfsd

/lib/modules/5.6.3/kernel/fs/btrfs:
total 1260
-rw-r--r-- 1 root root 1288272 2025-01-30 11:11:35.000000000 +0000 btrfs.ko

/lib/modules/5.6.3/kernel/fs/lockd:
total 112
-rw-r--r-- 1 root root 113176 2025-01-30 11:11:36.000000000 +0000 lockd.ko

/lib/modules/5.6.3/kernel/fs/nfs:
total 712
-rw-r--r-- 1 root root 255144 2025-01-30 11:11:36.000000000 +0000 nfs.ko
-rw-r--r-- 1 root root  25824 2025-01-30 11:11:36.000000000 +0000 nfsv2.ko
-rw-r--r-- 1 root root  45672 2025-01-30 11:11:36.000000000 +0000 nfsv3.ko
-rw-r--r-- 1 root root 389384 2025-01-30 11:11:36.000000000 +0000 nfsv4.ko

/lib/modules/5.6.3/kernel/fs/nfs_common:
total 16
-rw-r--r-- 1 root root 8168 2025-01-30 11:11:36.000000000 +0000 grace.ko
-rw-r--r-- 1 root root 7056 2025-01-30 11:11:36.000000000 +0000 nfs_acl.ko

/lib/modules/5.6.3/kernel/fs/nfsd:
total 436
-rw-r--r-- 1 root root 443992 2025-01-30 11:11:37.000000000 +0000 nfsd.ko

/lib/modules/5.6.3/kernel/lib:
total 16
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:47.000000000 +0000 raid6
-rw-r--r-- 1 root root 8112 2025-01-30 11:11:37.000000000 +0000 xxhash.ko
drwxr-xr-x 2 root root 4096 2025-01-30 11:14:49.000000000 +0000 zstd

/lib/modules/5.6.3/kernel/lib/raid6:
total 104
-rw-r--r-- 1 root root 105768 2025-01-30 11:11:37.000000000 +0000 raid6_pq.ko

/lib/modules/5.6.3/kernel/lib/zstd:
total 236
-rw-r--r-- 1 root root 164496 2025-01-30 11:11:37.000000000 +0000 zstd_compress.ko
-rw-r--r-- 1 root root  71264 2025-01-30 11:11:37.000000000 +0000 zstd_decompress.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:14:48.000000000 +0000 sunrpc

/lib/modules/5.6.3/kernel/net/sunrpc:
total 344
drwxr-xr-x 2 root root   4096 2025-01-30 11:14:48.000000000 +0000 auth_gss
-rw-r--r-- 1 root root 346504 2025-01-30 11:11:42.000000000 +0000 sunrpc.ko

/lib/modules/5.6.3/kernel/net/sunrpc/auth_gss:
total 76
-rw-r--r-- 1 root root 77136 2025-01-30 11:11:41.000000000 +0000 auth_rpcgss.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:31:22.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-01-30 11:31:22.000000000 +0000 lib

/nova/bin:
total 44
-rwxr-xr-x 1 root root 42864 2025-01-30 11:31:04.000000000 +0000 filesync

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:31:22.000000000 +0000 console

/nova/lib/console:
total 12
-rwxr-xr-x 1 root root 12041 2025-01-30 11:31:02.000000000 +0000 1287651328.mem
```

