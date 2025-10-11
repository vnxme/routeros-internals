### rose-storage.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 3207732 bytes, 106 inodes, blocksize: 524288 bytes, created: Fri Oct 10 09:48:21 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
drwxr-xr-x 2 root root 4096 2025-10-10 10:48:20.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-10 10:47:55.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-10-10 10:48:05.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-10-10 10:48:20.000000000 +0100 nova

/bin:
total 6104
-rwxr-xr-x 1 root root 1261568 2025-10-10 10:43:00.000000000 +0100 btrfs
lrwxrwxrwx 1 root root       5 2025-10-10 10:48:20.000000000 +0100 btrfs-image -> btrfs
lrwxrwxrwx 1 root root       5 2025-10-10 10:48:20.000000000 +0100 btrfstune -> btrfs
-rwxr-xr-x 1 root root 1208744 2025-10-10 10:37:30.000000000 +0100 fio
-rwxr-xr-x 1 root root  508272 2025-10-10 10:45:44.000000000 +0100 mdadm
lrwxrwxrwx 1 root root       5 2025-10-10 10:48:20.000000000 +0100 mkfs.btrfs -> btrfs
-rwxr-xr-x 1 root root  567544 2025-10-10 10:45:44.000000000 +0100 nvme
-rwxr-xr-x 1 root root  462308 2025-10-10 10:47:48.000000000 +0100 rsync
-rwxr-xr-x 1 root root 1142496 2025-10-10 10:46:35.000000000 +0100 sedutil-cli
-rwxr-xr-x 1 root root  739256 2025-10-10 10:44:54.000000000 +0100 smartctl
-rwxr-xr-x 1 root root  344404 2025-10-10 10:45:44.000000000 +0100 switchtec

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:47:55.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:48:20.000000000 +0100 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root  34 2025-10-10 10:47:55.000000000 +0100 storage-cdcd5c9a3a47.jg.gz
-rwxr-xr-x 1 root root 105 2025-10-10 10:47:55.000000000 +0100 storage.info
lrwxrwxrwx 1 root root  26 2025-10-10 10:48:20.000000000 +0100 storage.jg.gz -> storage-cdcd5c9a3a47.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:48:05.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2025-10-10 10:35:44.000000000 +0100 modules

/lib/firmware:
total 24
-rw-r--r-- 1 root root 21913 2025-10-10 10:48:05.000000000 +0100 switchtec.pmc

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:48:10.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 8 root root 4096 2025-10-10 10:35:46.000000000 +0100 kernel
-rw-r--r-- 1 root root  962 2025-10-10 10:48:12.000000000 +0100 modules.dep.storage

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x 3 root root 4096 2025-10-10 10:35:45.000000000 +0100 arch
drwxr-xr-x 3 root root 4096 2025-10-10 10:35:45.000000000 +0100 crypto
drwxr-xr-x 7 root root 4096 2025-10-10 10:35:46.000000000 +0100 drivers
drwxr-xr-x 7 root root 4096 2025-10-10 10:35:46.000000000 +0100 fs
drwxr-xr-x 4 root root 4096 2025-10-10 10:35:46.000000000 +0100 lib
drwxr-xr-x 3 root root 4096 2025-10-10 10:35:45.000000000 +0100 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:35:45.000000000 +0100 arm64

/lib/modules/5.6.3/kernel/arch/arm64:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:35:45.000000000 +0100 lib

/lib/modules/5.6.3/kernel/arch/arm64/lib:
total 8
-rw-r--r-- 1 root root 4408 2025-10-10 10:32:25.000000000 +0100 xor-neon.ko

/lib/modules/5.6.3/kernel/crypto:
total 32
drwxr-xr-x 2 root root  4096 2025-10-10 10:35:45.000000000 +0100 async_tx
-rw-r--r-- 1 root root 13880 2025-10-10 10:32:26.000000000 +0100 essiv.ko
-rw-r--r-- 1 root root 10360 2025-10-10 10:32:26.000000000 +0100 xor.ko

/lib/modules/5.6.3/kernel/crypto/async_tx:
total 52
-rw-r--r-- 1 root root  5616 2025-10-10 10:32:26.000000000 +0100 async_memcpy.ko
-rw-r--r-- 1 root root 10040 2025-10-10 10:32:26.000000000 +0100 async_pq.ko
-rw-r--r-- 1 root root 10688 2025-10-10 10:32:26.000000000 +0100 async_raid6_recov.ko
-rw-r--r-- 1 root root  8064 2025-10-10 10:32:26.000000000 +0100 async_tx.ko
-rw-r--r-- 1 root root  8208 2025-10-10 10:32:26.000000000 +0100 async_xor.ko

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2025-10-10 10:35:46.000000000 +0100 block
drwxr-xr-x 2 root root 4096 2025-10-10 10:35:45.000000000 +0100 md
drwxr-xr-x 4 root root 4096 2025-10-10 10:35:44.000000000 +0100 nvme
drwxr-xr-x 3 root root 4096 2025-10-10 10:35:46.000000000 +0100 scsi
drwxr-xr-x 3 root root 4096 2025-10-10 10:35:46.000000000 +0100 target

/lib/modules/5.6.3/kernel/drivers/block:
total 16
-rw-r--r-- 1 root root 13984 2025-10-10 10:32:26.000000000 +0100 brd.ko

/lib/modules/5.6.3/kernel/drivers/md:
total 812
-rw-r--r-- 1 root root  33880 2025-10-10 10:32:27.000000000 +0100 dm-bufio.ko
-rw-r--r-- 1 root root  50520 2025-10-10 10:32:27.000000000 +0100 dm-crypt.ko
-rw-r--r-- 1 root root  66888 2025-10-10 10:32:27.000000000 +0100 dm-integrity.ko
-rw-r--r-- 1 root root 167816 2025-10-10 10:32:27.000000000 +0100 dm-mod.ko
-rw-r--r-- 1 root root   9056 2025-10-10 10:32:27.000000000 +0100 faulty.ko
-rw-r--r-- 1 root root  10248 2025-10-10 10:32:27.000000000 +0100 linear.ko
-rw-r--r-- 1 root root 190088 2025-10-10 10:32:27.000000000 +0100 md-mod.ko
-rw-r--r-- 1 root root  16584 2025-10-10 10:32:27.000000000 +0100 raid0.ko
-rw-r--r-- 1 root root  46592 2025-10-10 10:32:27.000000000 +0100 raid1.ko
-rw-r--r-- 1 root root  58288 2025-10-10 10:32:27.000000000 +0100 raid10.ko
-rw-r--r-- 1 root root 151648 2025-10-10 10:32:27.000000000 +0100 raid456.ko

/lib/modules/5.6.3/kernel/drivers/nvme:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:35:44.000000000 +0100 host
drwxr-xr-x 2 root root 4096 2025-10-10 10:35:44.000000000 +0100 target

/lib/modules/5.6.3/kernel/drivers/nvme/host:
total 72
-rw-r--r-- 1 root root 29576 2025-10-10 10:32:30.000000000 +0100 nvme-fabrics.ko
-rw-r--r-- 1 root root 39448 2025-10-10 10:32:30.000000000 +0100 nvme-tcp.ko

/lib/modules/5.6.3/kernel/drivers/nvme/target:
total 144
-rw-r--r-- 1 root root  26352 2025-10-10 10:32:30.000000000 +0100 nvmet-tcp.ko
-rw-r--r-- 1 root root 114752 2025-10-10 10:32:30.000000000 +0100 nvmet.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 252
-rw-r--r-- 1 root root  24880 2025-10-10 10:32:30.000000000 +0100 iscsi_tcp.ko
-rw-r--r-- 1 root root  69504 2025-10-10 10:32:30.000000000 +0100 libiscsi.ko
-rw-r--r-- 1 root root  29568 2025-10-10 10:32:30.000000000 +0100 libiscsi_tcp.ko
drwxr-xr-x 2 root root   4096 2025-10-10 10:35:46.000000000 +0100 mpt3sas
-rw-r--r-- 1 root root 120800 2025-10-10 10:32:30.000000000 +0100 scsi_transport_iscsi.ko

/lib/modules/5.6.3/kernel/drivers/scsi/mpt3sas:
total 372
-rw-r--r-- 1 root root 377224 2025-10-10 10:32:30.000000000 +0100 mpt3sas.ko

/lib/modules/5.6.3/kernel/drivers/target:
total 356
drwxr-xr-x 2 root root   4096 2025-10-10 10:35:46.000000000 +0100 iscsi
-rw-r--r-- 1 root root  18760 2025-10-10 10:32:31.000000000 +0100 target_core_iblock.ko
-rw-r--r-- 1 root root 335976 2025-10-10 10:32:31.000000000 +0100 target_core_mod.ko

/lib/modules/5.6.3/kernel/drivers/target/iscsi:
total 316
-rw-r--r-- 1 root root 323256 2025-10-10 10:32:31.000000000 +0100 iscsi_target_mod.ko

/lib/modules/5.6.3/kernel/fs:
total 20
drwxr-xr-x 2 root root 4096 2025-10-10 10:35:46.000000000 +0100 btrfs
drwxr-xr-x 2 root root 4096 2025-10-10 10:35:46.000000000 +0100 lockd
drwxr-xr-x 2 root root 4096 2025-10-10 10:35:46.000000000 +0100 nfs
drwxr-xr-x 2 root root 4096 2025-10-10 10:35:46.000000000 +0100 nfs_common
drwxr-xr-x 2 root root 4096 2025-10-10 10:35:46.000000000 +0100 nfsd

/lib/modules/5.6.3/kernel/fs/btrfs:
total 1264
-rw-r--r-- 1 root root 1291072 2025-10-10 10:32:32.000000000 +0100 btrfs.ko

/lib/modules/5.6.3/kernel/fs/lockd:
total 112
-rw-r--r-- 1 root root 113176 2025-10-10 10:32:33.000000000 +0100 lockd.ko

/lib/modules/5.6.3/kernel/fs/nfs:
total 712
-rw-r--r-- 1 root root 255168 2025-10-10 10:32:33.000000000 +0100 nfs.ko
-rw-r--r-- 1 root root  25824 2025-10-10 10:32:33.000000000 +0100 nfsv2.ko
-rw-r--r-- 1 root root  45672 2025-10-10 10:32:33.000000000 +0100 nfsv3.ko
-rw-r--r-- 1 root root 389384 2025-10-10 10:32:33.000000000 +0100 nfsv4.ko

/lib/modules/5.6.3/kernel/fs/nfs_common:
total 16
-rw-r--r-- 1 root root 8168 2025-10-10 10:32:33.000000000 +0100 grace.ko
-rw-r--r-- 1 root root 7056 2025-10-10 10:32:33.000000000 +0100 nfs_acl.ko

/lib/modules/5.6.3/kernel/fs/nfsd:
total 436
-rw-r--r-- 1 root root 443992 2025-10-10 10:32:33.000000000 +0100 nfsd.ko

/lib/modules/5.6.3/kernel/lib:
total 16
drwxr-xr-x 2 root root 4096 2025-10-10 10:35:45.000000000 +0100 raid6
-rw-r--r-- 1 root root 8112 2025-10-10 10:32:34.000000000 +0100 xxhash.ko
drwxr-xr-x 2 root root 4096 2025-10-10 10:35:46.000000000 +0100 zstd

/lib/modules/5.6.3/kernel/lib/raid6:
total 104
-rw-r--r-- 1 root root 105768 2025-10-10 10:32:34.000000000 +0100 raid6_pq.ko

/lib/modules/5.6.3/kernel/lib/zstd:
total 236
-rw-r--r-- 1 root root 164496 2025-10-10 10:32:34.000000000 +0100 zstd_compress.ko
-rw-r--r-- 1 root root  71264 2025-10-10 10:32:34.000000000 +0100 zstd_decompress.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:35:45.000000000 +0100 sunrpc

/lib/modules/5.6.3/kernel/net/sunrpc:
total 344
drwxr-xr-x 2 root root   4096 2025-10-10 10:35:46.000000000 +0100 auth_gss
-rw-r--r-- 1 root root 346488 2025-10-10 10:32:39.000000000 +0100 sunrpc.ko

/lib/modules/5.6.3/kernel/net/sunrpc/auth_gss:
total 76
-rw-r--r-- 1 root root 77136 2025-10-10 10:32:38.000000000 +0100 auth_rpcgss.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:48:20.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-10 10:48:20.000000000 +0100 lib

/nova/bin:
total 48
-rwxr-xr-x 1 root root 46980 2025-10-10 10:48:04.000000000 +0100 filesync

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:48:20.000000000 +0100 console

/nova/lib/console:
total 16
-rwxr-xr-x 1 root root 13911 2025-10-10 10:47:55.000000000 +0100 1287651328.mem
```

