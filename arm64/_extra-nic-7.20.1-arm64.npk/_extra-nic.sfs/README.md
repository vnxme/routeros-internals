### extra-nic.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 2495102 bytes, 73 inodes, blocksize: 262144 bytes, created: Sat Oct 11 01:52:25 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4
drwxr-xr-x 4 root root 4096 2025-10-10 10:45:08.000000000 +0100 lib

/lib:
total 8
drwxr-xr-x 6 root root 4096 2025-10-10 10:45:08.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2025-10-10 10:36:19.000000000 +0100 modules

/lib/firmware:
total 16
drwxr-xr-x 2 root root 4096 2025-10-10 10:45:08.000000000 +0100 bnx2
drwxr-xr-x 2 root root 4096 2025-10-10 10:45:08.000000000 +0100 bnx2x
drwxr-xr-x 3 root root 4096 2025-10-10 10:45:08.000000000 +0100 intel
drwxr-xr-x 2 root root 4096 2025-10-10 10:45:08.000000000 +0100 rtl_nic

/lib/firmware/bnx2:
total 120
-rw-r--r-- 1 root root 103904 2025-10-10 09:48:06.000000000 +0100 bnx2-mips-09-6.2.1b.fw
-rw-r--r-- 1 root root   6104 2025-10-10 09:48:06.000000000 +0100 bnx2-rv2p-09-6.0.17.fw
-rw-r--r-- 1 root root   6616 2025-10-10 09:48:06.000000000 +0100 bnx2-rv2p-09ax-6.0.17.fw

/lib/firmware/bnx2x:
total 660
-rw-r--r-- 1 root root 170168 2025-10-10 09:48:06.000000000 +0100 bnx2x-e1-7.13.15.0.fw
-rw-r--r-- 1 root root 178608 2025-10-10 09:48:06.000000000 +0100 bnx2x-e1h-7.13.15.0.fw
-rw-r--r-- 1 root root 323360 2025-10-10 09:48:06.000000000 +0100 bnx2x-e2-7.13.15.0.fw

/lib/firmware/intel:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:45:08.000000000 +0100 ice

/lib/firmware/intel/ice:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:45:08.000000000 +0100 ddp

/lib/firmware/intel/ice/ddp:
total 720
-rw-r--r-- 1 root root 733736 2025-10-10 09:48:06.000000000 +0100 ice.pkg

/lib/firmware/rtl_nic:
total 8
-rw-r--r-- 1 root root 3328 2025-10-10 09:48:06.000000000 +0100 rtl8125b-2.fw
-rw-r--r-- 1 root root  976 2025-10-10 09:48:06.000000000 +0100 rtl8168h-2.fw

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-10-10 10:45:05.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:36:19.000000000 +0100 drivers
drwxr-xr-x 3 root root 4096 2025-10-10 10:45:01.000000000 +0100 kernel
-rw-r--r-- 1 root root  150 2025-10-10 10:45:08.000000000 +0100 modules.dep.extra-nic

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:44:57.000000000 +0100 net

/lib/modules/5.6.3/drivers/net:
total 2840
-rw-r--r-- 1 root root  558072 2025-10-10 10:37:10.000000000 +0100 i40e.ko
-rw-r--r-- 1 root root  218872 2025-10-10 10:38:02.000000000 +0100 iavf.ko
-rw-r--r-- 1 root root 1245824 2025-10-10 10:44:57.000000000 +0100 ice.ko
-rw-r--r-- 1 root root  263120 2025-10-10 10:39:23.000000000 +0100 igb.ko
-rw-r--r-- 1 root root  125952 2025-10-10 10:40:32.000000000 +0100 igc.ko
-rw-r--r-- 1 root root    9912 2025-10-10 10:44:56.000000000 +0100 intel_auxiliary.ko
-rw-r--r-- 1 root root  396024 2025-10-10 10:40:34.000000000 +0100 ixgbe.ko
-rw-r--r-- 1 root root   72984 2025-10-10 10:39:54.000000000 +0100 ixgbevf.ko

/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 4 root root 4096 2025-10-10 10:45:01.000000000 +0100 drivers

/lib/modules/5.6.3/kernel/drivers:
total 8
drwxr-xr-x 4 root root 4096 2025-10-10 10:45:01.000000000 +0100 net
drwxr-xr-x 2 root root 4096 2025-10-10 10:45:01.000000000 +0100 ssb

/lib/modules/5.6.3/kernel/drivers/net:
total 16
drwxr-xr-x 9 root root 4096 2025-10-10 10:45:01.000000000 +0100 ethernet
-rw-r--r-- 1 root root 7048 2025-10-10 10:32:28.000000000 +0100 mdio.ko
drwxr-xr-x 2 root root 4096 2025-10-10 10:45:01.000000000 +0100 phy

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 28
drwxr-xr-x 3 root root 4096 2025-10-10 10:45:01.000000000 +0100 amazon
drwxr-xr-x 3 root root 4096 2025-10-10 10:45:01.000000000 +0100 aquantia
drwxr-xr-x 4 root root 4096 2025-10-10 10:45:01.000000000 +0100 broadcom
drwxr-xr-x 4 root root 4096 2025-10-10 10:45:01.000000000 +0100 chelsio
drwxr-xr-x 4 root root 4096 2025-10-10 10:45:01.000000000 +0100 intel
drwxr-xr-x 4 root root 4096 2025-10-10 10:45:01.000000000 +0100 mellanox
drwxr-xr-x 2 root root 4096 2025-10-10 10:45:01.000000000 +0100 realtek

/lib/modules/5.6.3/kernel/drivers/net/ethernet/amazon:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:45:01.000000000 +0100 ena

/lib/modules/5.6.3/kernel/drivers/net/ethernet/amazon/ena:
total 108
-rw-r--r-- 1 root root 108056 2025-10-10 10:32:27.000000000 +0100 ena.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/aquantia:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:45:01.000000000 +0100 atlantic

/lib/modules/5.6.3/kernel/drivers/net/ethernet/aquantia/atlantic:
total 172
-rw-r--r-- 1 root root 174608 2025-10-10 10:32:27.000000000 +0100 atlantic.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/broadcom:
total 328
-rw-r--r-- 1 root root  43320 2025-10-10 10:32:27.000000000 +0100 b44.ko
-rw-r--r-- 1 root root 101192 2025-10-10 10:32:27.000000000 +0100 bnx2.ko
drwxr-xr-x 2 root root   4096 2025-10-10 10:45:01.000000000 +0100 bnx2x
drwxr-xr-x 2 root root   4096 2025-10-10 10:45:01.000000000 +0100 bnxt
-rw-r--r-- 1 root root 178472 2025-10-10 10:32:27.000000000 +0100 tg3.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/broadcom/bnx2x:
total 976
-rw-r--r-- 1 root root 998928 2025-10-10 10:32:27.000000000 +0100 bnx2x.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/broadcom/bnxt:
total 204
-rw-r--r-- 1 root root 204832 2025-10-10 10:32:27.000000000 +0100 bnxt_en.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/chelsio:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:45:01.000000000 +0100 cxgb3
drwxr-xr-x 2 root root 4096 2025-10-10 10:45:01.000000000 +0100 cxgb4

/lib/modules/5.6.3/kernel/drivers/net/ethernet/chelsio/cxgb3:
total 192
-rw-r--r-- 1 root root 192656 2025-10-10 10:32:28.000000000 +0100 cxgb3.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/chelsio/cxgb4:
total 412
-rw-r--r-- 1 root root 419016 2025-10-10 10:32:28.000000000 +0100 cxgb4.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:45:01.000000000 +0100 e1000e
drwxr-xr-x 2 root root 4096 2025-10-10 10:45:01.000000000 +0100 igbvf

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel/e1000e:
total 240
-rw-r--r-- 1 root root 244840 2025-10-10 10:32:28.000000000 +0100 e1000e.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel/igbvf:
total 56
-rw-r--r-- 1 root root 53272 2025-10-10 10:32:28.000000000 +0100 igbvf.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/mellanox:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:45:01.000000000 +0100 mlx4
drwxr-xr-x 3 root root 4096 2025-10-10 10:45:01.000000000 +0100 mlx5

/lib/modules/5.6.3/kernel/drivers/net/ethernet/mellanox/mlx4:
total 528
-rw-r--r-- 1 root root 374384 2025-10-10 10:32:28.000000000 +0100 mlx4_core.ko
-rw-r--r-- 1 root root 160440 2025-10-10 10:32:28.000000000 +0100 mlx4_en.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/mellanox/mlx5:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:45:01.000000000 +0100 core

/lib/modules/5.6.3/kernel/drivers/net/ethernet/mellanox/mlx5/core:
total 568
-rw-r--r-- 1 root root 578912 2025-10-10 10:32:28.000000000 +0100 mlx5_core.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet/realtek:
total 104
-rw-r--r-- 1 root root 103144 2025-10-10 10:32:28.000000000 +0100 r8169.ko

/lib/modules/5.6.3/kernel/drivers/net/phy:
total 28
-rw-r--r-- 1 root root 27832 2025-10-10 10:32:28.000000000 +0100 realtek.ko

/lib/modules/5.6.3/kernel/drivers/ssb:
total 64
-rw-r--r-- 1 root root 62024 2025-10-10 10:32:30.000000000 +0100 ssb.ko
```

