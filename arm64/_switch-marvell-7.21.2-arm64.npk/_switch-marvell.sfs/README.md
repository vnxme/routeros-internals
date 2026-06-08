### switch-marvell.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 9206652 bytes, 41 inodes, blocksize: 524288 bytes, created: Thu Jan 29 11:08:54 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 8
drwxr-xr-x 4 root root 4096 2026-01-29 11:08:42.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2026-01-29 11:08:42.000000000 +0000 nova

/lib:
total 33784
drwxr-xr-x 4 root root     4096 2026-01-29 11:08:42.000000000 +0000 firmware
-rwxr-xr-x 1 root root 34345532 2026-01-29 11:06:53.000000000 +0000 libcpss.so
-rwxr-xr-x 1 root root   163044 2026-01-29 11:06:52.000000000 +0000 libhelper.so
-rwxr-xr-x 1 root root    71772 2026-01-29 11:08:26.000000000 +0000 libroscpss.so
drwxr-xr-x 3 root root     4096 2026-01-29 11:08:17.000000000 +0000 modules

/lib/firmware:
total 176
drwxr-xr-x 2 root root   4096 2026-01-29 11:08:42.000000000 +0000 AC5P
drwxr-xr-x 2 root root   4096 2026-01-29 11:08:42.000000000 +0000 AC5X
-rwxr-xr-x 1 root root    100 2026-01-14 12:34:56.000000000 +0000 ac5pDummyFw.fw
-rwxr-xr-x 1 root root    100 2026-01-14 12:34:56.000000000 +0000 ac5xDummyFw.fw
-rwxr-xr-x 1 root root  12196 2026-01-14 12:34:56.000000000 +0000 genericPha0Fw.fw
-rwxr-xr-x 1 root root 151444 2026-01-29 09:54:39.000000000 +0000 mvHwsServiceCpuCm3IronmanFw.fw

/lib/firmware/AC5P:
total 500
-rw-r--r-- 1 root root   4624 2026-01-14 12:34:56.000000000 +0000 COMPHYC112GX4CMNAC5P.1.2.3.0.srds
-rw-r--r-- 1 root root   9232 2026-01-14 12:34:56.000000000 +0000 COMPHYC112GX4LANE156AC5P.1.2.3.0.srds
-rw-r--r-- 1 root root   9232 2026-01-14 12:34:56.000000000 +0000 COMPHYC112GX4LANE25AC5P.1.2.3.0.srds
-rw-r--r-- 1 root root 294928 2026-01-14 12:34:56.000000000 +0000 COMPHYC112GX4MAINAC5P.1.2.3.0.srds
-rw-r--r-- 1 root root   4623 2026-01-14 12:34:56.000000000 +0000 COMPHYC28GP4X1CMN156AC5P.1.2.3.0.srds
-rw-r--r-- 1 root root   4624 2026-01-14 12:34:56.000000000 +0000 COMPHYC28GP4X1CMN25AC5P.1.2.3.0.srds
-rw-r--r-- 1 root root   9232 2026-01-14 12:34:56.000000000 +0000 COMPHYC28GP4X1LANEAC5P.1.2.3.0.srds
-rw-r--r-- 1 root root 147472 2026-01-14 12:34:56.000000000 +0000 COMPHYC28GP4X1MAINAC5P.1.2.3.0.srds

/lib/firmware/AC5X:
total 352
-rw-r--r-- 1 root root   4623 2026-01-14 12:34:56.000000000 +0000 COMPHYC28GP4X1CMN156AC5X.1.2.3.0.srds
-rw-r--r-- 1 root root   4624 2026-01-14 12:34:56.000000000 +0000 COMPHYC28GP4X1CMN25AC5X.1.2.3.0.srds
-rw-r--r-- 1 root root   9232 2026-01-14 12:34:56.000000000 +0000 COMPHYC28GP4X1LANEAC5X.1.2.3.0.srds
-rw-r--r-- 1 root root 147472 2026-01-14 12:34:56.000000000 +0000 COMPHYC28GP4X1MAINAC5X.1.2.3.0.srds
-rw-r--r-- 1 root root   4623 2026-01-14 12:34:56.000000000 +0000 COMPHYC28GP4X4CMN156AC5X.1.2.3.0.srds
-rw-r--r-- 1 root root   4624 2026-01-14 12:34:56.000000000 +0000 COMPHYC28GP4X4CMN25AC5X.1.2.3.0.srds
-rw-r--r-- 1 root root   9232 2026-01-14 12:34:56.000000000 +0000 COMPHYC28GP4X4LANEAC5X.1.2.3.0.srds
-rw-r--r-- 1 root root 147472 2026-01-14 12:34:56.000000000 +0000 COMPHYC28GP4X4MAINAC5X.1.2.3.0.srds

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:08:33.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 3 root root 4096 2026-01-29 11:08:17.000000000 +0000 drivers
-rw-r--r-- 1 root root   44 2026-01-29 11:08:42.000000000 +0000 modules.dep.switch-marvell

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:08:25.000000000 +0000 net

/lib/modules/5.6.3/drivers/net:
total 84
-rw-r--r-- 1 root root 25272 2026-01-29 11:08:24.000000000 +0000 dummy_switch.ko
-rw-r--r-- 1 root root 54440 2026-01-29 11:08:25.000000000 +0000 mvcpss.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 11:08:42.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2026-01-29 11:08:42.000000000 +0000 lib

/nova/bin:
total 468
-rwxr-xr-x 1 root root 477008 2026-01-29 11:08:33.000000000 +0000 cpss

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:08:42.000000000 +0000 console

/nova/lib/console:
total 40
-rwxr-xr-x 1 root root 38320 2026-01-29 11:08:21.000000000 +0000 1317011456.mem
```

