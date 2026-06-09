### extra-nic.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 2504042 bytes, 75 inodes, blocksize: 262144 bytes, created: Thu Jun  4 04:56:23 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4
drwxr-xr-x 4 root root 4096 2026-06-02 10:48:41.000000000 +0100 lib

/lib:
total 8
drwxr-xr-x 6 root root 4096 2026-06-02 10:48:41.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:47.000000000 +0100 modules

/lib/firmware:
total 16
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:41.000000000 +0100 bnx2
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:41.000000000 +0100 bnx2x
drwxr-xr-x 3 root root 4096 2026-06-02 10:48:41.000000000 +0100 intel
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:41.000000000 +0100 rtl_nic

/lib/firmware/bnx2:
total 120
-rw-r--r-- 1 root root 103904 2026-04-21 14:58:49.000000000 +0100 bnx2-mips-09-6.2.1b.fw
-rw-r--r-- 1 root root   6104 2026-04-21 14:58:49.000000000 +0100 bnx2-rv2p-09-6.0.17.fw
-rw-r--r-- 1 root root   6616 2026-04-21 14:58:49.000000000 +0100 bnx2-rv2p-09ax-6.0.17.fw

/lib/firmware/bnx2x:
total 660
-rw-r--r-- 1 root root 170168 2026-04-21 14:58:49.000000000 +0100 bnx2x-e1-7.13.15.0.fw
-rw-r--r-- 1 root root 178608 2026-04-21 14:58:49.000000000 +0100 bnx2x-e1h-7.13.15.0.fw
-rw-r--r-- 1 root root 323360 2026-04-21 14:58:49.000000000 +0100 bnx2x-e2-7.13.15.0.fw

/lib/firmware/intel:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:48:41.000000000 +0100 ice

/lib/firmware/intel/ice:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:41.000000000 +0100 ddp

/lib/firmware/intel/ice/ddp:
total 720
-rw-r--r-- 1 root root 733736 2026-04-21 14:58:49.000000000 +0100 ice.pkg

/lib/firmware/rtl_nic:
total 28
-rw-r--r-- 1 root root  3328 2026-04-21 14:58:49.000000000 +0100 rtl8125b-2.fw
-rw-r--r-- 1 root root 17168 2026-04-21 14:58:49.000000000 +0100 rtl8125d-1.fw
-rw-r--r-- 1 root root   976 2026-04-21 14:58:49.000000000 +0100 rtl8168h-2.fw

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-06-02 10:48:39.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:47.000000000 +0100 drivers
drwxr-xr-x 3 root root 4096 2026-06-02 10:48:36.000000000 +0100 kernel
-rw-r--r-- 1 root root  163 2026-06-02 10:48:41.000000000 +0100 modules.dep.extra-nic

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:48:35.000000000 +0100 net

/lib/modules/5.6.3/drivers/net:
total 2848
drwxr-xr-x 3 root root    4096 2026-06-02 10:46:53.000000000 +0100 ethernet
-rw-r--r-- 1 root root  558888 2026-06-02 10:46:29.000000000 +0100 i40e.ko
-rw-r--r-- 1 root root  219088 2026-06-02 10:45:57.000000000 +0100 iavf.ko
-rw-r--r-- 1 root root 1252784 2026-06-02 10:48:35.000000000 +0100 ice.ko
-rw-r--r-- 1 root root  263528 2026-06-02 10:46:19.000000000 +0100 igb.ko
-rw-r--r-- 1 root root  126264 2026-06-02 10:46:55.000000000 +0100 igc.ko
-rw-r--r-- 1 root root    9912 2026-06-02 10:48:34.000000000 +0100 intel_auxiliary.ko
-rw-r--r-- 1 root root  396672 2026-06-02 10:46:34.000000000 +0100 ixgbe.ko
-rw-r--r-- 1 root root   73256 2026-06-02 10:46:03.000000000 +0100 ixgbevf.ko

/lib/modules/5.6.3/drivers/net/ethernet:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:46:58.000000000 +0100 realtek

/lib/modules/5.6.3/drivers/net/ethernet/realtek:
total 280
-rw-r--r-- 1 root root 283064 2026-06-02 10:46:58.000000000 +0100 r8125.ko

/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 4 root root 4096 2026-06-02 10:48:36.000000000 +0100 drivers

/lib/modules/5.6.3/kernel/drivers:
total 8
drwxr-xr-x 4 root root 4096 2026-06-02 10:48:37.000000000 +0100 net
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:36.000000000 +0100 ssb

/lib/modules/5.6.3/kernel/drivers/net:
total 16
drwxr-xr-x 9 root root 4096 2026-06-02 10:48:37.000000000 +0100 ethernet
-rw-r--r-- 1 root root 7048 2026-06-02 10:44:37.000000000 +0100 mdio.ko
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:37.000000000 +0100 phy

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 28
drwxr-xr-x 3 root root 4096 2026-06-02 10:48:37.000000000 +0100 amazon
drwxr-xr-x 3 root root 4096 2026-06-02 10:48:37.000000000 +0100 aquantia
drwxr-xr-x 3 root root 4096 2026-06-02 10:48:36.000000000 +0100 broadcom
drwxr-xr-x 4 root root 4096 2026-06-02 10:48:36.000000000 +0100 chelsio
drwxr-xr-x 4 root root 4096 2026-06-02 10:48:37.000000000 +0100 intel
drwxr-xr-x 4 root root 4096 2026-06-02 10:48:37.000000000 +0100 mellanox
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:37.000000000 +0100 realtek

/lib/modules/5.6.3/kernel/drivers/net/ethernet/amazon:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:37.000000000 +0100 ena

/lib/modules/5.6.3/kernel/drivers/net/ethernet/amazon/ena:
total 108
-rw-r--r-- 1 root root 109248 2026-06-02 10:44:37.000000000 +0100 ena.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/aquantia:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:37.000000000 +0100 atlantic

/lib/modules/5.6.3/kernel/drivers/net/ethernet/aquantia/atlantic:
total 172
-rw-r--r-- 1 root root 174760 2026-06-02 10:44:37.000000000 +0100 atlantic.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/broadcom:
total 324
-rw-r--r-- 1 root root  43320 2026-06-02 10:44:37.000000000 +0100 b44.ko
-rw-r--r-- 1 root root 101184 2026-06-02 10:44:37.000000000 +0100 bnx2.ko
drwxr-xr-x 2 root root   4096 2026-06-02 10:48:36.000000000 +0100 bnx2x
-rw-r--r-- 1 root root 178488 2026-06-02 10:44:37.000000000 +0100 tg3.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/broadcom/bnx2x:
total 976
-rw-r--r-- 1 root root 998928 2026-06-02 10:44:37.000000000 +0100 bnx2x.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/chelsio:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:36.000000000 +0100 cxgb3
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:36.000000000 +0100 cxgb4

/lib/modules/5.6.3/kernel/drivers/net/ethernet/chelsio/cxgb3:
total 192
-rw-r--r-- 1 root root 192656 2026-06-02 10:44:37.000000000 +0100 cxgb3.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/chelsio/cxgb4:
total 412
-rw-r--r-- 1 root root 419448 2026-06-02 10:44:37.000000000 +0100 cxgb4.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:37.000000000 +0100 e1000e
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:37.000000000 +0100 igbvf

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel/e1000e:
total 240
-rw-r--r-- 1 root root 244776 2026-06-02 10:44:37.000000000 +0100 e1000e.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel/igbvf:
total 56
-rw-r--r-- 1 root root 53272 2026-06-02 10:44:37.000000000 +0100 igbvf.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/mellanox:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:37.000000000 +0100 mlx4
drwxr-xr-x 3 root root 4096 2026-06-02 10:48:37.000000000 +0100 mlx5

/lib/modules/5.6.3/kernel/drivers/net/ethernet/mellanox/mlx4:
total 532
-rw-r--r-- 1 root root 375632 2026-06-02 10:44:37.000000000 +0100 mlx4_core.ko
-rw-r--r-- 1 root root 164800 2026-06-02 10:44:37.000000000 +0100 mlx4_en.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/mellanox/mlx5:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:37.000000000 +0100 core

/lib/modules/5.6.3/kernel/drivers/net/ethernet/mellanox/mlx5/core:
total 580
-rw-r--r-- 1 root root 590240 2026-06-02 10:44:37.000000000 +0100 mlx5_core.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/realtek:
total 104
-rw-r--r-- 1 root root 103944 2026-06-02 10:44:37.000000000 +0100 r8169.ko

/lib/modules/5.6.3/kernel/drivers/net/phy:
total 28
-rw-r--r-- 1 root root 27832 2026-06-02 10:44:37.000000000 +0100 realtek.ko

/lib/modules/5.6.3/kernel/drivers/ssb:
total 64
-rw-r--r-- 1 root root 62024 2026-06-02 10:44:37.000000000 +0100 ssb.ko
```

