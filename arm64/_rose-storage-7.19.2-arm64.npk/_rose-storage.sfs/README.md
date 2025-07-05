### rose-storage.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 3205964 bytes, 106 inodes, blocksize: 524288 bytes, created: Fri Jun 20 08:59:32 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
drwxr-xr-x 2 root root 4096 2025-06-20 09:59:28.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-06-20 09:58:43.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-06-20 09:58:43.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-06-20 09:59:28.000000000 +0100 nova

/bin:
total 6096
-rwxr-xr-x 1 root root 1253376 2025-06-20 09:48:36.000000000 +0100 btrfs
lrwxrwxrwx 1 root root       5 2025-06-20 09:59:28.000000000 +0100 btrfs-image -> btrfs
lrwxrwxrwx 1 root root       5 2025-06-20 09:59:28.000000000 +0100 btrfstune -> btrfs
-rwxr-xr-x 1 root root 1208744 2025-06-20 09:43:05.000000000 +0100 fio
-rwxr-xr-x 1 root root  508272 2025-06-20 09:52:08.000000000 +0100 mdadm
lrwxrwxrwx 1 root root       5 2025-06-20 09:59:28.000000000 +0100 mkfs.btrfs -> btrfs
-rwxr-xr-x 1 root root  567544 2025-06-20 09:52:08.000000000 +0100 nvme
-rwxr-xr-x 1 root root  462308 2025-06-20 09:58:36.000000000 +0100 rsync
-rwxr-xr-x 1 root root 1142496 2025-06-20 09:55:08.000000000 +0100 sedutil-cli
-rwxr-xr-x 1 root root  739256 2025-06-20 09:50:58.000000000 +0100 smartctl
-rwxr-xr-x 1 root root  344404 2025-06-20 09:52:05.000000000 +0100 switchtec

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-06-20 09:58:43.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-06-20 09:59:28.000000000 +0100 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root  34 2025-06-20 09:58:43.000000000 +0100 storage-cdcd5c9a3a47.jg.gz
-rwxr-xr-x 1 root root 105 2025-06-20 09:58:43.000000000 +0100 storage.info
lrwxrwxrwx 1 root root  26 2025-06-20 09:59:28.000000000 +0100 storage.jg.gz -> storage-cdcd5c9a3a47.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-06-20 09:58:43.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2025-06-20 09:40:33.000000000 +0100 modules

/lib/firmware:
total 24
-rw-r--r-- 1 root root 21913 2025-06-20 09:58:43.000000000 +0100 switchtec.pmc

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-06-20 09:59:05.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 8 root root 4096 2025-06-20 09:40:33.000000000 +0100 kernel
-rw-r--r-- 1 root root  962 2025-06-20 09:59:12.000000000 +0100 modules.dep.storage

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x 3 root root 4096 2025-06-20 09:40:33.000000000 +0100 arch
drwxr-xr-x 3 root root 4096 2025-06-20 09:40:33.000000000 +0100 crypto
drwxr-xr-x 7 root root 4096 2025-06-20 09:40:34.000000000 +0100 drivers
drwxr-xr-x 7 root root 4096 2025-06-20 09:40:34.000000000 +0100 fs
drwxr-xr-x 4 root root 4096 2025-06-20 09:40:34.000000000 +0100 lib
drwxr-xr-x 3 root root 4096 2025-06-20 09:40:33.000000000 +0100 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2025-06-20 09:40:33.000000000 +0100 arm64

/lib/modules/5.6.3/kernel/arch/arm64:
total 4
drwxr-xr-x 2 root root 4096 2025-06-20 09:40:33.000000000 +0100 lib

/lib/modules/5.6.3/kernel/arch/arm64/lib:
total 8
-rw-r--r-- 1 root root 4408 2025-06-20 09:37:52.000000000 +0100 xor-neon.ko

/lib/modules/5.6.3/kernel/crypto:
total 32
drwxr-xr-x 2 root root  4096 2025-06-20 09:40:33.000000000 +0100 async_tx
-rw-r--r-- 1 root root 13880 2025-06-20 09:37:52.000000000 +0100 essiv.ko
-rw-r--r-- 1 root root 10360 2025-06-20 09:37:53.000000000 +0100 xor.ko

/lib/modules/5.6.3/kernel/crypto/async_tx:
total 52
-rw-r--r-- 1 root root  5616 2025-06-20 09:37:52.000000000 +0100 async_memcpy.ko
-rw-r--r-- 1 root root 10040 2025-06-20 09:37:52.000000000 +0100 async_pq.ko
-rw-r--r-- 1 root root 10688 2025-06-20 09:37:52.000000000 +0100 async_raid6_recov.ko
-rw-r--r-- 1 root root  8064 2025-06-20 09:37:52.000000000 +0100 async_tx.ko
-rw-r--r-- 1 root root  8208 2025-06-20 09:37:52.000000000 +0100 async_xor.ko

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2025-06-20 09:40:34.000000000 +0100 block
drwxr-xr-x 2 root root 4096 2025-06-20 09:40:33.000000000 +0100 md
drwxr-xr-x 4 root root 4096 2025-06-20 09:40:33.000000000 +0100 nvme
drwxr-xr-x 3 root root 4096 2025-06-20 09:40:34.000000000 +0100 scsi
drwxr-xr-x 3 root root 4096 2025-06-20 09:40:34.000000000 +0100 target

/lib/modules/5.6.3/kernel/drivers/block:
total 16
-rw-r--r-- 1 root root 13984 2025-06-20 09:37:53.000000000 +0100 brd.ko

/lib/modules/5.6.3/kernel/drivers/md:
total 808
-rw-r--r-- 1 root root  33808 2025-06-20 09:37:53.000000000 +0100 dm-bufio.ko
-rw-r--r-- 1 root root  50296 2025-06-20 09:37:53.000000000 +0100 dm-crypt.ko
-rw-r--r-- 1 root root  66816 2025-06-20 09:37:53.000000000 +0100 dm-integrity.ko
-rw-r--r-- 1 root root 167568 2025-06-20 09:37:53.000000000 +0100 dm-mod.ko
-rw-r--r-- 1 root root   8960 2025-06-20 09:37:53.000000000 +0100 faulty.ko
-rw-r--r-- 1 root root  10176 2025-06-20 09:37:53.000000000 +0100 linear.ko
-rw-r--r-- 1 root root 189976 2025-06-20 09:37:53.000000000 +0100 md-mod.ko
-rw-r--r-- 1 root root  16448 2025-06-20 09:37:53.000000000 +0100 raid0.ko
-rw-r--r-- 1 root root  46336 2025-06-20 09:37:53.000000000 +0100 raid1.ko
-rw-r--r-- 1 root root  57744 2025-06-20 09:37:53.000000000 +0100 raid10.ko
-rw-r--r-- 1 root root 151208 2025-06-20 09:37:54.000000000 +0100 raid456.ko

/lib/modules/5.6.3/kernel/drivers/nvme:
total 8
drwxr-xr-x 2 root root 4096 2025-06-20 09:40:33.000000000 +0100 host
drwxr-xr-x 2 root root 4096 2025-06-20 09:40:33.000000000 +0100 target

/lib/modules/5.6.3/kernel/drivers/nvme/host:
total 72
-rw-r--r-- 1 root root 29576 2025-06-20 09:37:56.000000000 +0100 nvme-fabrics.ko
-rw-r--r-- 1 root root 39448 2025-06-20 09:37:56.000000000 +0100 nvme-tcp.ko

/lib/modules/5.6.3/kernel/drivers/nvme/target:
total 140
-rw-r--r-- 1 root root  26352 2025-06-20 09:37:56.000000000 +0100 nvmet-tcp.ko
-rw-r--r-- 1 root root 114632 2025-06-20 09:37:56.000000000 +0100 nvmet.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 252
-rw-r--r-- 1 root root  24880 2025-06-20 09:37:56.000000000 +0100 iscsi_tcp.ko
-rw-r--r-- 1 root root  69504 2025-06-20 09:37:56.000000000 +0100 libiscsi.ko
-rw-r--r-- 1 root root  29568 2025-06-20 09:37:56.000000000 +0100 libiscsi_tcp.ko
drwxr-xr-x 2 root root   4096 2025-06-20 09:40:34.000000000 +0100 mpt3sas
-rw-r--r-- 1 root root 120800 2025-06-20 09:37:56.000000000 +0100 scsi_transport_iscsi.ko

/lib/modules/5.6.3/kernel/drivers/scsi/mpt3sas:
total 372
-rw-r--r-- 1 root root 377224 2025-06-20 09:37:56.000000000 +0100 mpt3sas.ko

/lib/modules/5.6.3/kernel/drivers/target:
total 356
drwxr-xr-x 2 root root   4096 2025-06-20 09:40:34.000000000 +0100 iscsi
-rw-r--r-- 1 root root  18664 2025-06-20 09:37:57.000000000 +0100 target_core_iblock.ko
-rw-r--r-- 1 root root 335976 2025-06-20 09:37:57.000000000 +0100 target_core_mod.ko

/lib/modules/5.6.3/kernel/drivers/target/iscsi:
total 316
-rw-r--r-- 1 root root 323280 2025-06-20 09:37:57.000000000 +0100 iscsi_target_mod.ko

/lib/modules/5.6.3/kernel/fs:
total 20
drwxr-xr-x 2 root root 4096 2025-06-20 09:40:34.000000000 +0100 btrfs
drwxr-xr-x 2 root root 4096 2025-06-20 09:40:34.000000000 +0100 lockd
drwxr-xr-x 2 root root 4096 2025-06-20 09:40:34.000000000 +0100 nfs
drwxr-xr-x 2 root root 4096 2025-06-20 09:40:34.000000000 +0100 nfs_common
drwxr-xr-x 2 root root 4096 2025-06-20 09:40:34.000000000 +0100 nfsd

/lib/modules/5.6.3/kernel/fs/btrfs:
total 1260
-rw-r--r-- 1 root root 1289312 2025-06-20 09:37:58.000000000 +0100 btrfs.ko

/lib/modules/5.6.3/kernel/fs/lockd:
total 112
-rw-r--r-- 1 root root 113176 2025-06-20 09:37:59.000000000 +0100 lockd.ko

/lib/modules/5.6.3/kernel/fs/nfs:
total 712
-rw-r--r-- 1 root root 255144 2025-06-20 09:37:59.000000000 +0100 nfs.ko
-rw-r--r-- 1 root root  25824 2025-06-20 09:37:59.000000000 +0100 nfsv2.ko
-rw-r--r-- 1 root root  45672 2025-06-20 09:38:00.000000000 +0100 nfsv3.ko
-rw-r--r-- 1 root root 389384 2025-06-20 09:38:00.000000000 +0100 nfsv4.ko

/lib/modules/5.6.3/kernel/fs/nfs_common:
total 16
-rw-r--r-- 1 root root 8168 2025-06-20 09:38:00.000000000 +0100 grace.ko
-rw-r--r-- 1 root root 7056 2025-06-20 09:38:00.000000000 +0100 nfs_acl.ko

/lib/modules/5.6.3/kernel/fs/nfsd:
total 436
-rw-r--r-- 1 root root 443992 2025-06-20 09:38:00.000000000 +0100 nfsd.ko

/lib/modules/5.6.3/kernel/lib:
total 16
drwxr-xr-x 2 root root 4096 2025-06-20 09:40:33.000000000 +0100 raid6
-rw-r--r-- 1 root root 8112 2025-06-20 09:38:00.000000000 +0100 xxhash.ko
drwxr-xr-x 2 root root 4096 2025-06-20 09:40:34.000000000 +0100 zstd

/lib/modules/5.6.3/kernel/lib/raid6:
total 104
-rw-r--r-- 1 root root 105768 2025-06-20 09:38:00.000000000 +0100 raid6_pq.ko

/lib/modules/5.6.3/kernel/lib/zstd:
total 236
-rw-r--r-- 1 root root 164496 2025-06-20 09:38:00.000000000 +0100 zstd_compress.ko
-rw-r--r-- 1 root root  71264 2025-06-20 09:38:00.000000000 +0100 zstd_decompress.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 3 root root 4096 2025-06-20 09:40:33.000000000 +0100 sunrpc

/lib/modules/5.6.3/kernel/net/sunrpc:
total 344
drwxr-xr-x 2 root root   4096 2025-06-20 09:40:33.000000000 +0100 auth_gss
-rw-r--r-- 1 root root 346504 2025-06-20 09:38:04.000000000 +0100 sunrpc.ko

/lib/modules/5.6.3/kernel/net/sunrpc/auth_gss:
total 76
-rw-r--r-- 1 root root 77136 2025-06-20 09:38:04.000000000 +0100 auth_rpcgss.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-06-20 09:59:28.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-06-20 09:59:28.000000000 +0100 lib

/nova/bin:
total 44
-rwxr-xr-x 1 root root 42868 2025-06-20 09:58:50.000000000 +0100 filesync

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-06-20 09:59:28.000000000 +0100 console

/nova/lib/console:
total 16
-rwxr-xr-x 1 root root 12353 2025-06-20 09:58:44.000000000 +0100 1287651328.mem
```

