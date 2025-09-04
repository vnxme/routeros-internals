### rose-storage.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 3559066 bytes, 100 inodes, blocksize: 262144 bytes, created: Thu Feb  6 10:11:53 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 16
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:32.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-06 10:11:32.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-06 10:11:51.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2025-02-06 10:11:35.000000000 +0000 nova

/bin:
total 6384
-rwxr-xr-x 1 root root 1171320 2025-02-06 10:03:46.000000000 +0000 btrfs
lrwxrwxrwx 1 root root       5 2025-02-06 10:03:46.000000000 +0000 btrfs-image -> btrfs
lrwxrwxrwx 1 root root       5 2025-02-06 10:03:46.000000000 +0000 btrfstune -> btrfs
-rwxr-xr-x 1 root root 1079128 2025-02-06 09:56:38.000000000 +0000 fio
-rwxr-xr-x 1 root root  668308 2025-02-06 10:05:58.000000000 +0000 mdadm
lrwxrwxrwx 1 root root       5 2025-02-06 10:03:46.000000000 +0000 mkfs.btrfs -> btrfs
-rwxr-xr-x 1 root root  506128 2025-02-06 10:05:58.000000000 +0000 nvme
-rwxr-xr-x 1 root root  527164 2025-02-06 10:11:32.000000000 +0000 rsync
-rwxr-xr-x 1 root root 1459856 2025-02-06 10:08:27.000000000 +0000 sedutil-cli
-rwxr-xr-x 1 root root  808624 2025-02-06 10:04:57.000000000 +0000 smartctl
-rwxr-xr-x 1 root root  299436 2025-02-06 10:05:52.000000000 +0000 switchtec

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:11:32.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:32.000000000 +0000 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root  34 2025-02-06 10:11:32.000000000 +0000 storage-cdcd5c9a3a47.jg.gz
-rwxr-xr-x 1 root root 105 2025-02-06 10:11:32.000000000 +0000 storage.info
lrwxrwxrwx 1 root root  26 2025-02-06 10:11:32.000000000 +0000 storage.jg.gz -> storage-cdcd5c9a3a47.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:11:51.000000000 +0000 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:11:51.000000000 +0000 5.6.3-64

/lib/modules/5.6.3-64:
total 8
drwxr-xr-x 7 root root 4096 2025-02-06 10:11:51.000000000 +0000 kernel
-rw-r--r-- 1 root root  925 2025-02-06 10:11:41.000000000 +0000 modules.dep.storage

/lib/modules/5.6.3-64/kernel:
total 20
drwxr-xr-x 3 root root 4096 2025-02-06 10:11:51.000000000 +0000 crypto
drwxr-xr-x 7 root root 4096 2025-02-06 10:11:51.000000000 +0000 drivers
drwxr-xr-x 8 root root 4096 2025-02-06 10:11:51.000000000 +0000 fs
drwxr-xr-x 4 root root 4096 2025-02-06 10:11:51.000000000 +0000 lib
drwxr-xr-x 3 root root 4096 2025-02-06 10:11:51.000000000 +0000 net

/lib/modules/5.6.3-64/kernel/crypto:
total 32
drwxr-xr-x 2 root root  4096 2025-02-06 10:11:51.000000000 +0000 async_tx
-rw-r--r-- 1 root root 10832 2025-02-06 09:53:13.000000000 +0000 essiv.ko
-rw-r--r-- 1 root root 14384 2025-02-06 09:53:13.000000000 +0000 xor.ko

/lib/modules/5.6.3-64/kernel/crypto/async_tx:
total 24
-rw-r--r-- 1 root root 3144 2025-02-06 09:53:13.000000000 +0000 async_memcpy.ko
-rw-r--r-- 1 root root 6056 2025-02-06 09:53:13.000000000 +0000 async_pq.ko
-rw-r--r-- 1 root root 3960 2025-02-06 09:53:13.000000000 +0000 async_raid6_recov.ko
-rw-r--r-- 1 root root 3896 2025-02-06 09:53:13.000000000 +0000 async_tx.ko
-rw-r--r-- 1 root root 3952 2025-02-06 09:53:13.000000000 +0000 async_xor.ko

/lib/modules/5.6.3-64/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:51.000000000 +0000 block
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:51.000000000 +0000 md
drwxr-xr-x 4 root root 4096 2025-02-06 10:11:51.000000000 +0000 nvme
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:51.000000000 +0000 scsi
drwxr-xr-x 3 root root 4096 2025-02-06 10:11:51.000000000 +0000 target

/lib/modules/5.6.3-64/kernel/drivers/block:
total 12
-rw-r--r-- 1 root root 11520 2025-02-06 09:53:13.000000000 +0000 brd.ko

/lib/modules/5.6.3-64/kernel/drivers/md:
total 672
-rw-r--r-- 1 root root  31504 2025-02-06 09:53:13.000000000 +0000 dm-bufio.ko
-rw-r--r-- 1 root root  38480 2025-02-06 09:53:13.000000000 +0000 dm-crypt.ko
-rw-r--r-- 1 root root  54424 2025-02-06 09:53:13.000000000 +0000 dm-integrity.ko
-rw-r--r-- 1 root root 131168 2025-02-06 09:53:13.000000000 +0000 dm-mod.ko
-rw-r--r-- 1 root root   6896 2025-02-06 09:53:13.000000000 +0000 faulty.ko
-rw-r--r-- 1 root root   8024 2025-02-06 09:53:13.000000000 +0000 linear.ko
-rw-r--r-- 1 root root 157560 2025-02-06 09:53:13.000000000 +0000 md-mod.ko
-rw-r--r-- 1 root root  13088 2025-02-06 09:53:13.000000000 +0000 raid0.ko
-rw-r--r-- 1 root root  38928 2025-02-06 09:53:13.000000000 +0000 raid1.ko
-rw-r--r-- 1 root root  49320 2025-02-06 09:53:13.000000000 +0000 raid10.ko
-rw-r--r-- 1 root root 133200 2025-02-06 09:53:13.000000000 +0000 raid456.ko

/lib/modules/5.6.3-64/kernel/drivers/nvme:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:51.000000000 +0000 host
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:51.000000000 +0000 target

/lib/modules/5.6.3-64/kernel/drivers/nvme/host:
total 60
-rw-r--r-- 1 root root 25232 2025-02-06 09:53:13.000000000 +0000 nvme-fabrics.ko
-rw-r--r-- 1 root root 32400 2025-02-06 09:53:13.000000000 +0000 nvme-tcp.ko

/lib/modules/5.6.3-64/kernel/drivers/nvme/target:
total 112
-rw-r--r-- 1 root root 21856 2025-02-06 09:53:13.000000000 +0000 nvmet-tcp.ko
-rw-r--r-- 1 root root 90104 2025-02-06 09:53:13.000000000 +0000 nvmet.ko

/lib/modules/5.6.3-64/kernel/drivers/scsi:
total 220
-rw-r--r-- 1 root root  20104 2025-02-06 09:53:13.000000000 +0000 iscsi_tcp.ko
-rw-r--r-- 1 root root  69232 2025-02-06 09:53:13.000000000 +0000 libiscsi.ko
-rw-r--r-- 1 root root  26192 2025-02-06 09:53:13.000000000 +0000 libiscsi_tcp.ko
-rw-r--r-- 1 root root 103008 2025-02-06 09:53:13.000000000 +0000 scsi_transport_iscsi.ko

/lib/modules/5.6.3-64/kernel/drivers/target:
total 292
drwxr-xr-x 2 root root   4096 2025-02-06 10:11:51.000000000 +0000 iscsi
-rw-r--r-- 1 root root  14600 2025-02-06 09:53:13.000000000 +0000 target_core_iblock.ko
-rw-r--r-- 1 root root 277808 2025-02-06 09:53:13.000000000 +0000 target_core_mod.ko

/lib/modules/5.6.3-64/kernel/drivers/target/iscsi:
total 268
-rw-r--r-- 1 root root 271752 2025-02-06 09:53:13.000000000 +0000 iscsi_target_mod.ko

/lib/modules/5.6.3-64/kernel/fs:
total 24
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:51.000000000 +0000 btrfs
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:51.000000000 +0000 exportfs
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:51.000000000 +0000 lockd
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:51.000000000 +0000 nfs
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:51.000000000 +0000 nfs_common
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:51.000000000 +0000 nfsd

/lib/modules/5.6.3-64/kernel/fs/btrfs:
total 1044
-rw-r--r-- 1 root root 1066328 2025-02-06 09:53:13.000000000 +0000 btrfs.ko

/lib/modules/5.6.3-64/kernel/fs/exportfs:
total 8
-rw-r--r-- 1 root root 6984 2025-02-06 09:53:13.000000000 +0000 exportfs.ko

/lib/modules/5.6.3-64/kernel/fs/lockd:
total 84
-rw-r--r-- 1 root root 83960 2025-02-06 09:53:13.000000000 +0000 lockd.ko

/lib/modules/5.6.3-64/kernel/fs/nfs:
total 540
-rw-r--r-- 1 root root 195816 2025-02-06 09:53:13.000000000 +0000 nfs.ko
-rw-r--r-- 1 root root  18896 2025-02-06 09:53:13.000000000 +0000 nfsv2.ko
-rw-r--r-- 1 root root  33720 2025-02-06 09:53:13.000000000 +0000 nfsv3.ko
-rw-r--r-- 1 root root 297336 2025-02-06 09:53:13.000000000 +0000 nfsv4.ko

/lib/modules/5.6.3-64/kernel/fs/nfs_common:
total 16
-rw-r--r-- 1 root root 5992 2025-02-06 09:53:13.000000000 +0000 grace.ko
-rw-r--r-- 1 root root 5344 2025-02-06 09:53:13.000000000 +0000 nfs_acl.ko

/lib/modules/5.6.3-64/kernel/fs/nfsd:
total 332
-rw-r--r-- 1 root root 337008 2025-02-06 09:53:13.000000000 +0000 nfsd.ko

/lib/modules/5.6.3-64/kernel/lib:
total 16
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:51.000000000 +0000 raid6
-rw-r--r-- 1 root root 7256 2025-02-06 09:53:13.000000000 +0000 xxhash.ko
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:51.000000000 +0000 zstd

/lib/modules/5.6.3-64/kernel/lib/raid6:
total 108
-rw-r--r-- 1 root root 110040 2025-02-06 09:53:13.000000000 +0000 raid6_pq.ko

/lib/modules/5.6.3-64/kernel/lib/zstd:
total 244
-rw-r--r-- 1 root root 171472 2025-02-06 09:53:13.000000000 +0000 zstd_compress.ko
-rw-r--r-- 1 root root  76920 2025-02-06 09:53:13.000000000 +0000 zstd_decompress.ko

/lib/modules/5.6.3-64/kernel/net:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:11:51.000000000 +0000 sunrpc

/lib/modules/5.6.3-64/kernel/net/sunrpc:
total 264
drwxr-xr-x 2 root root   4096 2025-02-06 10:11:51.000000000 +0000 auth_gss
-rw-r--r-- 1 root root 264248 2025-02-06 09:53:13.000000000 +0000 sunrpc.ko

/lib/modules/5.6.3-64/kernel/net/sunrpc/auth_gss:
total 60
-rw-r--r-- 1 root root 58544 2025-02-06 09:53:13.000000000 +0000 auth_rpcgss.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:38.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-06 10:11:35.000000000 +0000 lib

/nova/bin:
total 44
-rwxr-xr-x 1 root root 42756 2025-02-06 10:11:38.000000000 +0000 filesync

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:35.000000000 +0000 console

/nova/lib/console:
total 12
-rwxr-xr-x 1 root root 12041 2025-02-06 10:11:35.000000000 +0000 1287651328.mem
```

