### switch-marvell.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 9177428 bytes, 41 inodes, blocksize: 524288 bytes, created: Thu Jan  8 10:49:09 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 8
drwxr-xr-x 4 root root 4096 2026-01-08 10:49:04.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2026-01-08 10:49:04.000000000 +0000 nova

/lib:
total 33736
drwxr-xr-x 4 root root     4096 2026-01-08 10:49:04.000000000 +0000 firmware
-rwxr-xr-x 1 root root 34316860 2026-01-08 10:47:43.000000000 +0000 libcpss.so
-rwxr-xr-x 1 root root   163044 2026-01-08 10:47:42.000000000 +0000 libhelper.so
-rwxr-xr-x 1 root root    51116 2026-01-08 10:48:51.000000000 +0000 libroscpss.so
drwxr-xr-x 3 root root     4096 2026-01-08 10:48:46.000000000 +0000 modules

/lib/firmware:
total 176
drwxr-xr-x 2 root root   4096 2026-01-08 10:49:04.000000000 +0000 AC5P
drwxr-xr-x 2 root root   4096 2026-01-08 10:49:04.000000000 +0000 AC5X
-rwxr-xr-x 1 root root    100 2025-12-04 12:00:22.000000000 +0000 ac5pDummyFw.fw
-rwxr-xr-x 1 root root    100 2025-12-04 12:00:22.000000000 +0000 ac5xDummyFw.fw
-rwxr-xr-x 1 root root  12196 2025-12-04 12:00:22.000000000 +0000 genericPha0Fw.fw
-rwxr-xr-x 1 root root 151404 2026-01-06 15:15:41.000000000 +0000 mvHwsServiceCpuCm3IronmanFw.fw

/lib/firmware/AC5P:
total 500
-rw-r--r-- 1 root root   4624 2025-12-04 12:00:22.000000000 +0000 COMPHYC112GX4CMNAC5P.1.2.3.0.srds
-rw-r--r-- 1 root root   9232 2025-12-04 12:00:22.000000000 +0000 COMPHYC112GX4LANE156AC5P.1.2.3.0.srds
-rw-r--r-- 1 root root   9232 2025-12-04 12:00:22.000000000 +0000 COMPHYC112GX4LANE25AC5P.1.2.3.0.srds
-rw-r--r-- 1 root root 294928 2025-12-04 12:00:22.000000000 +0000 COMPHYC112GX4MAINAC5P.1.2.3.0.srds
-rw-r--r-- 1 root root   4623 2025-12-04 12:00:22.000000000 +0000 COMPHYC28GP4X1CMN156AC5P.1.2.3.0.srds
-rw-r--r-- 1 root root   4624 2025-12-04 12:00:22.000000000 +0000 COMPHYC28GP4X1CMN25AC5P.1.2.3.0.srds
-rw-r--r-- 1 root root   9232 2025-12-04 12:00:22.000000000 +0000 COMPHYC28GP4X1LANEAC5P.1.2.3.0.srds
-rw-r--r-- 1 root root 147472 2025-12-04 12:00:22.000000000 +0000 COMPHYC28GP4X1MAINAC5P.1.2.3.0.srds

/lib/firmware/AC5X:
total 352
-rw-r--r-- 1 root root   4623 2025-12-04 12:00:22.000000000 +0000 COMPHYC28GP4X1CMN156AC5X.1.2.3.0.srds
-rw-r--r-- 1 root root   4624 2025-12-04 12:00:22.000000000 +0000 COMPHYC28GP4X1CMN25AC5X.1.2.3.0.srds
-rw-r--r-- 1 root root   9232 2025-12-04 12:00:22.000000000 +0000 COMPHYC28GP4X1LANEAC5X.1.2.3.0.srds
-rw-r--r-- 1 root root 147472 2025-12-04 12:00:22.000000000 +0000 COMPHYC28GP4X1MAINAC5X.1.2.3.0.srds
-rw-r--r-- 1 root root   4623 2025-12-04 12:00:22.000000000 +0000 COMPHYC28GP4X4CMN156AC5X.1.2.3.0.srds
-rw-r--r-- 1 root root   4624 2025-12-04 12:00:22.000000000 +0000 COMPHYC28GP4X4CMN25AC5X.1.2.3.0.srds
-rw-r--r-- 1 root root   9232 2025-12-04 12:00:22.000000000 +0000 COMPHYC28GP4X4LANEAC5X.1.2.3.0.srds
-rw-r--r-- 1 root root 147472 2025-12-04 12:00:22.000000000 +0000 COMPHYC28GP4X4MAINAC5X.1.2.3.0.srds

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:48:59.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 3 root root 4096 2026-01-08 10:48:46.000000000 +0000 drivers
-rw-r--r-- 1 root root   44 2026-01-08 10:49:03.000000000 +0000 modules.dep.switch-marvell

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:48:53.000000000 +0000 net

/lib/modules/5.6.3/drivers/net:
total 84
-rw-r--r-- 1 root root 27376 2026-01-08 10:48:52.000000000 +0000 dummy_switch.ko
-rw-r--r-- 1 root root 55400 2026-01-08 10:48:53.000000000 +0000 mvcpss.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:49:04.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2026-01-08 10:49:04.000000000 +0000 lib

/nova/bin:
total 436
-rwxr-xr-x 1 root root 444352 2026-01-08 10:48:59.000000000 +0000 cpss

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:49:04.000000000 +0000 console

/nova/lib/console:
total 40
-rwxr-xr-x 1 root root 39928 2026-01-08 10:48:48.000000000 +0000 1317011456.mem
```

