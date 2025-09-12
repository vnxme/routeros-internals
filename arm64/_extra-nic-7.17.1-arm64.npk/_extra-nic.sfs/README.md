### extra-nic.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 2256656 bytes, 67 inodes, blocksize: 524288 bytes, created: Thu Jan 30 11:21:00 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4
drwxr-xr-x 4 root root 4096 2025-01-30 11:20:58.000000000 +0000 lib

/lib:
total 8
drwxr-xr-x 6 root root 4096 2025-01-30 11:20:58.000000000 +0000 firmware
drwxr-xr-x 3 root root 4096 2025-01-30 11:15:14.000000000 +0000 modules

/lib/firmware:
total 16
drwxr-xr-x 2 root root 4096 2025-01-30 11:20:58.000000000 +0000 bnx2
drwxr-xr-x 2 root root 4096 2025-01-30 11:20:58.000000000 +0000 bnx2x
drwxr-xr-x 3 root root 4096 2025-01-30 11:20:58.000000000 +0000 intel
drwxr-xr-x 2 root root 4096 2025-01-30 11:20:58.000000000 +0000 rtl_nic

/lib/firmware/bnx2:
total 120
-rw-r--r-- 1 root root 103904 2025-01-30 10:28:59.000000000 +0000 bnx2-mips-09-6.2.1b.fw
-rw-r--r-- 1 root root   6104 2025-01-30 10:28:59.000000000 +0000 bnx2-rv2p-09-6.0.17.fw
-rw-r--r-- 1 root root   6616 2025-01-30 10:28:59.000000000 +0000 bnx2-rv2p-09ax-6.0.17.fw

/lib/firmware/bnx2x:
total 660
-rw-r--r-- 1 root root 170168 2025-01-30 10:28:59.000000000 +0000 bnx2x-e1-7.13.15.0.fw
-rw-r--r-- 1 root root 178608 2025-01-30 10:28:59.000000000 +0000 bnx2x-e1h-7.13.15.0.fw
-rw-r--r-- 1 root root 323360 2025-01-30 10:28:59.000000000 +0000 bnx2x-e2-7.13.15.0.fw

/lib/firmware/intel:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:20:58.000000000 +0000 ice

/lib/firmware/intel/ice:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:20:58.000000000 +0000 ddp

/lib/firmware/intel/ice/ddp:
total 624
-rw-r--r-- 1 root root 635256 2025-01-30 10:28:59.000000000 +0000 ice.pkg

/lib/firmware/rtl_nic:
total 4
-rw-r--r-- 1 root root 976 2025-01-30 10:28:59.000000000 +0000 rtl8168h-2.fw

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-01-30 11:20:55.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-01-30 11:15:14.000000000 +0000 drivers
drwxr-xr-x 3 root root 4096 2025-01-30 11:20:50.000000000 +0000 kernel
-rw-r--r-- 1 root root  150 2025-01-30 11:20:58.000000000 +0000 modules.dep.extra-nic

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:20:46.000000000 +0000 net

/lib/modules/5.6.3/drivers/net:
total 2372
-rw-r--r-- 1 root root  549208 2025-01-30 11:15:48.000000000 +0000 i40e.ko
-rw-r--r-- 1 root root  218648 2025-01-30 11:16:28.000000000 +0000 iavf.ko
-rw-r--r-- 1 root root 1245416 2025-01-30 11:20:46.000000000 +0000 ice.ko
-rw-r--r-- 1 root root  262784 2025-01-30 11:17:24.000000000 +0000 igb.ko
-rw-r--r-- 1 root root  125768 2025-01-30 11:17:09.000000000 +0000 igc.ko
-rw-r--r-- 1 root root    9912 2025-01-30 11:20:45.000000000 +0000 intel_auxiliary.ko

/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 4 root root 4096 2025-01-30 11:20:50.000000000 +0000 drivers

/lib/modules/5.6.3/kernel/drivers:
total 8
drwxr-xr-x 4 root root 4096 2025-01-30 11:20:51.000000000 +0000 net
drwxr-xr-x 2 root root 4096 2025-01-30 11:20:50.000000000 +0000 ssb

/lib/modules/5.6.3/kernel/drivers/net:
total 16
drwxr-xr-x 8 root root 4096 2025-01-30 11:20:51.000000000 +0000 ethernet
-rw-r--r-- 1 root root 7048 2025-01-30 11:11:32.000000000 +0000 mdio.ko
drwxr-xr-x 2 root root 4096 2025-01-30 11:20:51.000000000 +0000 phy

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 24
drwxr-xr-x 3 root root 4096 2025-01-30 11:20:51.000000000 +0000 amazon
drwxr-xr-x 4 root root 4096 2025-01-30 11:20:51.000000000 +0000 broadcom
drwxr-xr-x 4 root root 4096 2025-01-30 11:20:51.000000000 +0000 chelsio
drwxr-xr-x 4 root root 4096 2025-01-30 11:20:51.000000000 +0000 intel
drwxr-xr-x 4 root root 4096 2025-01-30 11:20:51.000000000 +0000 mellanox
drwxr-xr-x 2 root root 4096 2025-01-30 11:20:51.000000000 +0000 realtek

/lib/modules/5.6.3/kernel/drivers/net/ethernet/amazon:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:20:51.000000000 +0000 ena

/lib/modules/5.6.3/kernel/drivers/net/ethernet/amazon/ena:
total 108
-rw-r--r-- 1 root root 108056 2025-01-30 11:11:31.000000000 +0000 ena.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/broadcom:
total 328
-rw-r--r-- 1 root root  43320 2025-01-30 11:11:31.000000000 +0000 b44.ko
-rw-r--r-- 1 root root 101008 2025-01-30 11:11:31.000000000 +0000 bnx2.ko
drwxr-xr-x 2 root root   4096 2025-01-30 11:20:51.000000000 +0000 bnx2x
drwxr-xr-x 2 root root   4096 2025-01-30 11:20:51.000000000 +0000 bnxt
-rw-r--r-- 1 root root 178472 2025-01-30 11:11:31.000000000 +0000 tg3.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/broadcom/bnx2x:
total 976
-rw-r--r-- 1 root root 998680 2025-01-30 11:11:31.000000000 +0000 bnx2x.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/broadcom/bnxt:
total 200
-rw-r--r-- 1 root root 204672 2025-01-30 11:11:31.000000000 +0000 bnxt_en.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/chelsio:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:20:51.000000000 +0000 cxgb3
drwxr-xr-x 2 root root 4096 2025-01-30 11:20:51.000000000 +0000 cxgb4

/lib/modules/5.6.3/kernel/drivers/net/ethernet/chelsio/cxgb3:
total 192
-rw-r--r-- 1 root root 192656 2025-01-30 11:11:31.000000000 +0000 cxgb3.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/chelsio/cxgb4:
total 412
-rw-r--r-- 1 root root 418768 2025-01-30 11:11:31.000000000 +0000 cxgb4.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:20:51.000000000 +0000 e1000e
drwxr-xr-x 2 root root 4096 2025-01-30 11:20:51.000000000 +0000 igbvf

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel/e1000e:
total 240
-rw-r--r-- 1 root root 244696 2025-01-30 11:11:31.000000000 +0000 e1000e.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel/igbvf:
total 56
-rw-r--r-- 1 root root 53272 2025-01-30 11:11:32.000000000 +0000 igbvf.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/mellanox:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:20:51.000000000 +0000 mlx4
drwxr-xr-x 3 root root 4096 2025-01-30 11:20:51.000000000 +0000 mlx5

/lib/modules/5.6.3/kernel/drivers/net/ethernet/mellanox/mlx4:
total 528
-rw-r--r-- 1 root root 374296 2025-01-30 11:11:32.000000000 +0000 mlx4_core.ko
-rw-r--r-- 1 root root 160416 2025-01-30 11:11:32.000000000 +0000 mlx4_en.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/mellanox/mlx5:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:20:51.000000000 +0000 core

/lib/modules/5.6.3/kernel/drivers/net/ethernet/mellanox/mlx5/core:
total 568
-rw-r--r-- 1 root root 578912 2025-01-30 11:11:32.000000000 +0000 mlx5_core.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/realtek:
total 100
-rw-r--r-- 1 root root 101968 2025-01-30 11:11:32.000000000 +0000 r8169.ko

/lib/modules/5.6.3/kernel/drivers/net/phy:
total 28
-rw-r--r-- 1 root root 27832 2025-01-30 11:11:32.000000000 +0000 realtek.ko

/lib/modules/5.6.3/kernel/drivers/ssb:
total 64
-rw-r--r-- 1 root root 62024 2025-01-30 11:11:34.000000000 +0000 ssb.ko
```

