### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 1462030 bytes, 46 inodes, blocksize: 262144 bytes, created: Tue Mar 11 13:04:41 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-03-11 12:48:03.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-03-11 12:55:00.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-03-11 12:52:14.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 12:48:04.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 12:48:04.000000000 +0000 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19262 2025-03-11 12:48:03.000000000 +0000 wlan6-0bc9c1d5a532.jg.gz
-rwxr-xr-x 1 root root   104 2025-03-11 12:48:03.000000000 +0000 wlan6.info
lrwxrwxrwx 1 root root    24 2025-03-11 12:48:04.000000000 +0000 wlan6.jg.gz -> wlan6-0bc9c1d5a532.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 12:55:00.000000000 +0000 firmware
drwxr-xr-x 3 root root 4096 2025-03-11 12:49:31.000000000 +0000 modules

/lib/firmware:
total 212
-rw-r--r-- 1 root root 216338 2025-03-11 12:55:00.000000000 +0000 QCA9984-fw.bin

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-03-11 13:04:21.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-03-11 12:49:31.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2025-03-11 13:04:10.000000000 +0000 misc
-rw-r--r-- 1 root root  283 2025-03-11 13:04:22.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 12:55:15.000000000 +0000 net

/lib/modules/5.6.3/drivers/net:
total 1828
-rw-r--r-- 1 root root  63256 2025-03-11 12:50:28.000000000 +0000 a5211.ko
-rw-r--r-- 1 root root   7096 2025-03-11 12:50:25.000000000 +0000 a5211_pci.ko
-rw-r--r-- 1 root root 219112 2025-03-11 12:51:29.000000000 +0000 a5212.ko
-rw-r--r-- 1 root root   7944 2025-03-11 12:51:29.000000000 +0000 a5212_pci.ko
-rw-r--r-- 1 root root 309312 2025-03-11 12:51:28.000000000 +0000 a5416.ko
-rw-r--r-- 1 root root  14640 2025-03-11 12:51:28.000000000 +0000 a5416_pci.ko
-rw-r--r-- 1 root root 450664 2025-03-11 12:52:26.000000000 +0000 a9300.ko
-rw-r--r-- 1 root root  15072 2025-03-11 12:52:26.000000000 +0000 a9300_pci.ko
-rw-r--r-- 1 root root 272776 2025-03-11 12:52:57.000000000 +0000 ar9888_pci.ko
-rw-r--r-- 1 root root 318760 2025-03-11 12:55:15.000000000 +0000 ath.ko
-rw-r--r-- 1 root root 174096 2025-03-11 12:53:05.000000000 +0000 qca9984_pci.ko

/lib/modules/5.6.3/misc:
total 932
-rw-r--r-- 1 root root  92544 2025-03-11 12:52:55.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root   2600 2025-03-11 12:52:55.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root   2664 2025-03-11 12:52:48.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root 851272 2025-03-11 13:04:10.000000000 +0000 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-03-11 12:59:49.000000000 +0000 bin
drwxr-xr-x 5 root root 4096 2025-03-11 13:04:40.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-03-11 12:48:08.000000000 +0000 lib

/nova/bin:
total 1608
-rwxr-xr-x 1 root root 1643732 2025-03-11 12:59:49.000000000 +0000 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2025-03-11 12:47:39.000000000 +0000 net-remote
drwxr-xr-x 2 root root  4096 2025-03-11 12:47:39.000000000 +0000 pciinfo
drwxr-xr-x 2 root root  4096 2025-03-11 12:47:39.000000000 +0000 radius
-rw-r--r-- 1 root root 14588 2025-03-11 11:58:52.000000000 +0000 wirelessmfg
-rw-r--r-- 1 root root 72923 2025-03-11 11:58:52.000000000 +0000 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2025-03-11 12:47:38.000000000 +0000 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3685 2025-03-11 12:47:39.000000000 +0000 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-03-11 12:47:39.000000000 +0000 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 12:48:08.000000000 +0000 console

/nova/lib/console:
total 336
-rwxr-xr-x 1 root root 342517 2025-03-11 12:48:08.000000000 +0000 1107296256.mem
```

