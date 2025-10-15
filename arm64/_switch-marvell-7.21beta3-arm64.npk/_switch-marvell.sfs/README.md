### switch-marvell.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 9206228 bytes, 41 inodes, blocksize: 524288 bytes, created: Tue Oct 14 14:00:21 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 8
drwxr-xr-x 4 root root 4096 2025-10-14 15:00:13.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-10-14 15:00:13.000000000 +0100 nova

/lib:
total 33784
drwxr-xr-x 4 root root     4096 2025-10-14 15:00:13.000000000 +0100 firmware
-rwxr-xr-x 1 root root 34345532 2025-10-14 14:58:59.000000000 +0100 libcpss.so
-rwxr-xr-x 1 root root   163044 2025-10-14 14:58:58.000000000 +0100 libhelper.so
-rwxr-xr-x 1 root root    71760 2025-10-14 15:00:04.000000000 +0100 libroscpss.so
drwxr-xr-x 3 root root     4096 2025-10-14 14:59:57.000000000 +0100 modules

/lib/firmware:
total 176
drwxr-xr-x 2 root root   4096 2025-10-14 15:00:13.000000000 +0100 AC5P
drwxr-xr-x 2 root root   4096 2025-10-14 15:00:13.000000000 +0100 AC5X
-rwxr-xr-x 1 root root    100 2025-10-14 13:49:24.000000000 +0100 ac5pDummyFw.fw
-rwxr-xr-x 1 root root    100 2025-10-14 13:49:24.000000000 +0100 ac5xDummyFw.fw
-rwxr-xr-x 1 root root  12196 2025-10-14 13:49:24.000000000 +0100 genericPha0Fw.fw
-rwxr-xr-x 1 root root 151444 2025-10-14 13:49:24.000000000 +0100 mvHwsServiceCpuCm3IronmanFw.fw

/lib/firmware/AC5P:
total 500
-rw-r--r-- 1 root root   4624 2025-10-14 13:49:24.000000000 +0100 COMPHYC112GX4CMNAC5P.1.2.3.0.srds
-rw-r--r-- 1 root root   9232 2025-10-14 13:49:24.000000000 +0100 COMPHYC112GX4LANE156AC5P.1.2.3.0.srds
-rw-r--r-- 1 root root   9232 2025-10-14 13:49:24.000000000 +0100 COMPHYC112GX4LANE25AC5P.1.2.3.0.srds
-rw-r--r-- 1 root root 294928 2025-10-14 13:49:24.000000000 +0100 COMPHYC112GX4MAINAC5P.1.2.3.0.srds
-rw-r--r-- 1 root root   4623 2025-10-14 13:49:24.000000000 +0100 COMPHYC28GP4X1CMN156AC5P.1.2.3.0.srds
-rw-r--r-- 1 root root   4624 2025-10-14 13:49:24.000000000 +0100 COMPHYC28GP4X1CMN25AC5P.1.2.3.0.srds
-rw-r--r-- 1 root root   9232 2025-10-14 13:49:24.000000000 +0100 COMPHYC28GP4X1LANEAC5P.1.2.3.0.srds
-rw-r--r-- 1 root root 147472 2025-10-14 13:49:24.000000000 +0100 COMPHYC28GP4X1MAINAC5P.1.2.3.0.srds

/lib/firmware/AC5X:
total 352
-rw-r--r-- 1 root root   4623 2025-10-14 13:49:24.000000000 +0100 COMPHYC28GP4X1CMN156AC5X.1.2.3.0.srds
-rw-r--r-- 1 root root   4624 2025-10-14 13:49:24.000000000 +0100 COMPHYC28GP4X1CMN25AC5X.1.2.3.0.srds
-rw-r--r-- 1 root root   9232 2025-10-14 13:49:24.000000000 +0100 COMPHYC28GP4X1LANEAC5X.1.2.3.0.srds
-rw-r--r-- 1 root root 147472 2025-10-14 13:49:24.000000000 +0100 COMPHYC28GP4X1MAINAC5X.1.2.3.0.srds
-rw-r--r-- 1 root root   4623 2025-10-14 13:49:24.000000000 +0100 COMPHYC28GP4X4CMN156AC5X.1.2.3.0.srds
-rw-r--r-- 1 root root   4624 2025-10-14 13:49:24.000000000 +0100 COMPHYC28GP4X4CMN25AC5X.1.2.3.0.srds
-rw-r--r-- 1 root root   9232 2025-10-14 13:49:24.000000000 +0100 COMPHYC28GP4X4LANEAC5X.1.2.3.0.srds
-rw-r--r-- 1 root root 147472 2025-10-14 13:49:24.000000000 +0100 COMPHYC28GP4X4MAINAC5X.1.2.3.0.srds

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 15:00:09.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 3 root root 4096 2025-10-14 14:59:57.000000000 +0100 drivers
-rw-r--r-- 1 root root   44 2025-10-14 15:00:13.000000000 +0100 modules.dep.switch-marvell

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 15:00:01.000000000 +0100 net

/lib/modules/5.6.3/drivers/net:
total 84
-rw-r--r-- 1 root root 25272 2025-10-14 15:00:01.000000000 +0100 dummy_switch.ko
-rw-r--r-- 1 root root 54440 2025-10-14 15:00:01.000000000 +0100 mvcpss.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 15:00:13.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-14 15:00:13.000000000 +0100 lib

/nova/bin:
total 468
-rwxr-xr-x 1 root root 476996 2025-10-14 15:00:09.000000000 +0100 cpss

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 15:00:13.000000000 +0100 console

/nova/lib/console:
total 40
-rwxr-xr-x 1 root root 38368 2025-10-14 14:59:59.000000000 +0100 1317011456.mem
```

