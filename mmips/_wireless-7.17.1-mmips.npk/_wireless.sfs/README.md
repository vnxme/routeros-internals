### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 1418486 bytes, 59 inodes, blocksize: 262144 bytes, created: Thu Jan 30 11:34:59 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-01-30 11:21:49.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-01-30 11:22:28.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-01-30 11:25:27.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:21:49.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:21:49.000000000 +0000 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19262 2025-01-30 11:21:48.000000000 +0000 wlan6-0bc9c1d5a532.jg.gz
-rwxr-xr-x 1 root root   104 2025-01-30 11:21:49.000000000 +0000 wlan6.info
lrwxrwxrwx 1 root root    24 2025-01-30 11:21:49.000000000 +0000 wlan6.jg.gz -> wlan6-0bc9c1d5a532.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:25:58.000000000 +0000 firmware
drwxr-xr-x 3 root root 4096 2025-01-30 11:20:40.000000000 +0000 modules

/lib/firmware:
total 816
-rw-r--r-- 1 root root 216338 2025-01-30 11:25:58.000000000 +0000 QCA9984-fw.bin
-rw-r--r-- 1 root root   3516 2025-01-30 11:22:28.000000000 +0000 wil6210-cube.brd
-rw-r--r-- 1 root root   1148 2025-01-30 11:22:28.000000000 +0000 wil6210-cube.msg
-rw-r--r-- 1 root root   3516 2025-01-30 11:22:28.000000000 +0000 wil6210-lhg-span2.8.brd
-rw-r--r-- 1 root root   1100 2025-01-30 11:22:28.000000000 +0000 wil6210-lhg-span2.8.msg
-rw-r--r-- 1 root root   3516 2025-01-30 11:22:28.000000000 +0000 wil6210-nray.brd
-rw-r--r-- 1 root root   1059 2025-01-30 11:22:28.000000000 +0000 wil6210-nray.msg
-rw-r--r-- 1 root root   3516 2025-01-30 11:22:28.000000000 +0000 wil6210-wap60g-60deg.brd
-rw-r--r-- 1 root root   1292 2025-01-30 11:22:28.000000000 +0000 wil6210-wap60g-60deg.msg
-rw-r--r-- 1 root root   3516 2025-01-30 11:22:28.000000000 +0000 wil6210-wap60g-omni.brd
-rw-r--r-- 1 root root   6668 2025-01-30 11:22:28.000000000 +0000 wil6210-wap60g-sa-dir.brd
-rw-r--r-- 1 root root   6668 2025-01-30 11:22:28.000000000 +0000 wil6210-wap60g-sa-omni.brd
-rw-r--r-- 1 root root 561268 2025-01-30 11:22:28.000000000 +0000 wil6210.fw

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-01-30 11:34:41.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-01-30 11:20:40.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2025-01-30 11:34:16.000000000 +0000 misc
-rw-r--r-- 1 root root  321 2025-01-30 11:34:43.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:03.000000000 +0000 net

/lib/modules/5.6.3/drivers/net:
total 1336
-rw-r--r-- 1 root root  41120 2025-01-30 11:22:17.000000000 +0000 a5211.ko
-rw-r--r-- 1 root root   4532 2025-01-30 11:22:17.000000000 +0000 a5211_pci.ko
-rw-r--r-- 1 root root 143600 2025-01-30 11:21:57.000000000 +0000 a5212.ko
-rw-r--r-- 1 root root   7588 2025-01-30 11:21:55.000000000 +0000 a5212_pci.ko
-rw-r--r-- 1 root root 221264 2025-01-30 11:21:59.000000000 +0000 a5416.ko
-rw-r--r-- 1 root root   9016 2025-01-30 11:21:57.000000000 +0000 a5416_pci.ko
-rw-r--r-- 1 root root 343464 2025-01-30 11:24:51.000000000 +0000 a9300.ko
-rw-r--r-- 1 root root  10212 2025-01-30 11:24:51.000000000 +0000 a9300_pci.ko
-rw-r--r-- 1 root root 203036 2025-01-30 11:24:37.000000000 +0000 ar9888_pci.ko
-rw-r--r-- 1 root root 166548 2025-01-30 11:26:02.000000000 +0000 ath.ko
-rw-r--r-- 1 root root  91876 2025-01-30 11:24:09.000000000 +0000 qca9984_pci.ko
-rw-r--r-- 1 root root  96532 2025-01-30 11:22:27.000000000 +0000 wil6210.ko

/lib/modules/5.6.3/misc:
total 468
-rw-r--r-- 1 root root  43804 2025-01-30 11:24:29.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root   2016 2025-01-30 11:24:28.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root   2100 2025-01-30 11:24:22.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root 422692 2025-01-30 11:34:16.000000000 +0000 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-01-30 11:30:57.000000000 +0000 bin
drwxr-xr-x 5 root root 4096 2025-01-30 11:34:59.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-01-30 11:18:15.000000000 +0000 lib

/nova/bin:
total 900
-rwxr-xr-x 1 root root 920024 2025-01-30 11:30:57.000000000 +0000 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2025-01-30 11:18:48.000000000 +0000 net-remote
drwxr-xr-x 2 root root  4096 2025-01-30 11:18:48.000000000 +0000 pciinfo
drwxr-xr-x 2 root root  4096 2025-01-30 11:18:48.000000000 +0000 radius
-rw-r--r-- 1 root root 14588 2025-01-30 10:29:47.000000000 +0000 wirelessmfg
-rw-r--r-- 1 root root 72923 2025-01-30 10:29:47.000000000 +0000 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2025-01-30 11:18:48.000000000 +0000 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 4006 2025-01-30 11:18:48.000000000 +0000 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-01-30 11:18:48.000000000 +0000 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:18:15.000000000 +0000 console

/nova/lib/console:
total 324
-rwxr-xr-x 1 root root 328361 2025-01-30 11:18:15.000000000 +0000 1107296256.mem
```

