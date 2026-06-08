### extra-nic.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 2441712 bytes, 73 inodes, blocksize: 524288 bytes, created: Thu Jan 29 10:53:34 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4
drwxr-xr-x 4 root root 4096 2026-01-29 10:53:32.000000000 +0000 lib

/lib:
total 8
drwxr-xr-x 6 root root 4096 2026-01-29 10:53:32.000000000 +0000 firmware
drwxr-xr-x 3 root root 4096 2026-01-29 10:45:31.000000000 +0000 modules

/lib/firmware:
total 16
drwxr-xr-x 2 root root 4096 2026-01-29 10:53:32.000000000 +0000 bnx2
drwxr-xr-x 2 root root 4096 2026-01-29 10:53:32.000000000 +0000 bnx2x
drwxr-xr-x 3 root root 4096 2026-01-29 10:53:32.000000000 +0000 intel
drwxr-xr-x 2 root root 4096 2026-01-29 10:53:32.000000000 +0000 rtl_nic

/lib/firmware/bnx2:
total 120
-rw-r--r-- 1 root root 103904 2026-01-14 12:34:41.000000000 +0000 bnx2-mips-09-6.2.1b.fw
-rw-r--r-- 1 root root   6104 2026-01-14 12:34:41.000000000 +0000 bnx2-rv2p-09-6.0.17.fw
-rw-r--r-- 1 root root   6616 2026-01-14 12:34:41.000000000 +0000 bnx2-rv2p-09ax-6.0.17.fw

/lib/firmware/bnx2x:
total 660
-rw-r--r-- 1 root root 170168 2026-01-14 12:34:41.000000000 +0000 bnx2x-e1-7.13.15.0.fw
-rw-r--r-- 1 root root 178608 2026-01-14 12:34:41.000000000 +0000 bnx2x-e1h-7.13.15.0.fw
-rw-r--r-- 1 root root 323360 2026-01-14 12:34:41.000000000 +0000 bnx2x-e2-7.13.15.0.fw

/lib/firmware/intel:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:53:32.000000000 +0000 ice

/lib/firmware/intel/ice:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:53:32.000000000 +0000 ddp

/lib/firmware/intel/ice/ddp:
total 720
-rw-r--r-- 1 root root 733736 2026-01-14 12:34:41.000000000 +0000 ice.pkg

/lib/firmware/rtl_nic:
total 8
-rw-r--r-- 1 root root 3328 2026-01-14 12:34:41.000000000 +0000 rtl8125b-2.fw
-rw-r--r-- 1 root root  976 2026-01-14 12:34:41.000000000 +0000 rtl8168h-2.fw

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-01-29 10:53:28.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 10:45:31.000000000 +0000 drivers
drwxr-xr-x 3 root root 4096 2026-01-29 10:53:22.000000000 +0000 kernel
-rw-r--r-- 1 root root  150 2026-01-29 10:53:32.000000000 +0000 modules.dep.extra-nic

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:53:19.000000000 +0000 net

/lib/modules/5.6.3/drivers/net:
total 2844
-rw-r--r-- 1 root root  558296 2026-01-29 10:46:20.000000000 +0000 i40e.ko
-rw-r--r-- 1 root root  218872 2026-01-29 10:46:49.000000000 +0000 iavf.ko
-rw-r--r-- 1 root root 1252368 2026-01-29 10:53:19.000000000 +0000 ice.ko
-rw-r--r-- 1 root root  263120 2026-01-29 10:47:22.000000000 +0000 igb.ko
-rw-r--r-- 1 root root  125952 2026-01-29 10:48:23.000000000 +0000 igc.ko
-rw-r--r-- 1 root root    9912 2026-01-29 10:53:18.000000000 +0000 intel_auxiliary.ko
-rw-r--r-- 1 root root  396024 2026-01-29 10:47:43.000000000 +0000 ixgbe.ko
-rw-r--r-- 1 root root   72984 2026-01-29 10:47:03.000000000 +0000 ixgbevf.ko

/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 4 root root 4096 2026-01-29 10:53:22.000000000 +0000 drivers

/lib/modules/5.6.3/kernel/drivers:
total 8
drwxr-xr-x 4 root root 4096 2026-01-29 10:53:23.000000000 +0000 net
drwxr-xr-x 2 root root 4096 2026-01-29 10:53:22.000000000 +0000 ssb

/lib/modules/5.6.3/kernel/drivers/net:
total 16
drwxr-xr-x 9 root root 4096 2026-01-29 10:53:23.000000000 +0000 ethernet
-rw-r--r-- 1 root root 7048 2026-01-29 10:42:15.000000000 +0000 mdio.ko
drwxr-xr-x 2 root root 4096 2026-01-29 10:53:23.000000000 +0000 phy

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 28
drwxr-xr-x 3 root root 4096 2026-01-29 10:53:23.000000000 +0000 amazon
drwxr-xr-x 3 root root 4096 2026-01-29 10:53:23.000000000 +0000 aquantia
drwxr-xr-x 4 root root 4096 2026-01-29 10:53:23.000000000 +0000 broadcom
drwxr-xr-x 4 root root 4096 2026-01-29 10:53:23.000000000 +0000 chelsio
drwxr-xr-x 4 root root 4096 2026-01-29 10:53:23.000000000 +0000 intel
drwxr-xr-x 4 root root 4096 2026-01-29 10:53:23.000000000 +0000 mellanox
drwxr-xr-x 2 root root 4096 2026-01-29 10:53:23.000000000 +0000 realtek

/lib/modules/5.6.3/kernel/drivers/net/ethernet/amazon:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:53:23.000000000 +0000 ena

/lib/modules/5.6.3/kernel/drivers/net/ethernet/amazon/ena:
total 108
-rw-r--r-- 1 root root 108712 2026-01-29 10:42:14.000000000 +0000 ena.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/aquantia:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:53:23.000000000 +0000 atlantic

/lib/modules/5.6.3/kernel/drivers/net/ethernet/aquantia/atlantic:
total 172
-rw-r--r-- 1 root root 174608 2026-01-29 10:42:14.000000000 +0000 atlantic.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/broadcom:
total 328
-rw-r--r-- 1 root root  43320 2026-01-29 10:42:14.000000000 +0000 b44.ko
-rw-r--r-- 1 root root 101256 2026-01-29 10:42:14.000000000 +0000 bnx2.ko
drwxr-xr-x 2 root root   4096 2026-01-29 10:53:23.000000000 +0000 bnx2x
drwxr-xr-x 2 root root   4096 2026-01-29 10:53:23.000000000 +0000 bnxt
-rw-r--r-- 1 root root 178488 2026-01-29 10:42:14.000000000 +0000 tg3.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/broadcom/bnx2x:
total 976
-rw-r--r-- 1 root root 998928 2026-01-29 10:42:14.000000000 +0000 bnx2x.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/broadcom/bnxt:
total 208
-rw-r--r-- 1 root root 210536 2026-01-29 10:42:14.000000000 +0000 bnxt_en.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/chelsio:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:53:23.000000000 +0000 cxgb3
drwxr-xr-x 2 root root 4096 2026-01-29 10:53:23.000000000 +0000 cxgb4

/lib/modules/5.6.3/kernel/drivers/net/ethernet/chelsio/cxgb3:
total 192
-rw-r--r-- 1 root root 192656 2026-01-29 10:42:14.000000000 +0000 cxgb3.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/chelsio/cxgb4:
total 412
-rw-r--r-- 1 root root 419016 2026-01-29 10:42:14.000000000 +0000 cxgb4.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:53:23.000000000 +0000 e1000e
drwxr-xr-x 2 root root 4096 2026-01-29 10:53:23.000000000 +0000 igbvf

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel/e1000e:
total 240
-rw-r--r-- 1 root root 244840 2026-01-29 10:42:14.000000000 +0000 e1000e.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel/igbvf:
total 56
-rw-r--r-- 1 root root 53336 2026-01-29 10:42:14.000000000 +0000 igbvf.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/mellanox:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:53:23.000000000 +0000 mlx4
drwxr-xr-x 3 root root 4096 2026-01-29 10:53:23.000000000 +0000 mlx5

/lib/modules/5.6.3/kernel/drivers/net/ethernet/mellanox/mlx4:
total 528
-rw-r--r-- 1 root root 375384 2026-01-29 10:42:14.000000000 +0000 mlx4_core.ko
-rw-r--r-- 1 root root 163776 2026-01-29 10:42:14.000000000 +0000 mlx4_en.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/mellanox/mlx5:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:53:23.000000000 +0000 core

/lib/modules/5.6.3/kernel/drivers/net/ethernet/mellanox/mlx5/core:
total 576
-rw-r--r-- 1 root root 588880 2026-01-29 10:42:15.000000000 +0000 mlx5_core.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/realtek:
total 104
-rw-r--r-- 1 root root 103144 2026-01-29 10:42:14.000000000 +0000 r8169.ko

/lib/modules/5.6.3/kernel/drivers/net/phy:
total 28
-rw-r--r-- 1 root root 27832 2026-01-29 10:42:15.000000000 +0000 realtek.ko

/lib/modules/5.6.3/kernel/drivers/ssb:
total 64
-rw-r--r-- 1 root root 62024 2026-01-29 10:42:17.000000000 +0000 ssb.ko
```

