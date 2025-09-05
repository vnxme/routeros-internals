### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 1462530 bytes, 46 inodes, blocksize: 262144 bytes, created: Fri Feb 28 12:36:56 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-02-28 12:23:00.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-02-28 12:30:42.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-28 12:26:06.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:23:00.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:23:00.000000000 +0000 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19262 2025-02-28 12:23:00.000000000 +0000 wlan6-0bc9c1d5a532.jg.gz
-rwxr-xr-x 1 root root   104 2025-02-28 12:23:00.000000000 +0000 wlan6.info
lrwxrwxrwx 1 root root    24 2025-02-28 12:23:00.000000000 +0000 wlan6.jg.gz -> wlan6-0bc9c1d5a532.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:42.000000000 +0000 firmware
drwxr-xr-x 3 root root 4096 2025-02-28 12:22:36.000000000 +0000 modules

/lib/firmware:
total 212
-rw-r--r-- 1 root root 216338 2025-02-28 12:30:42.000000000 +0000 QCA9984-fw.bin

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-02-28 12:36:35.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-02-28 12:22:36.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2025-02-28 12:36:23.000000000 +0000 misc
-rw-r--r-- 1 root root  283 2025-02-28 12:36:37.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:27:05.000000000 +0000 net

/lib/modules/5.6.3/drivers/net:
total 1828
-rw-r--r-- 1 root root  63256 2025-02-28 12:23:47.000000000 +0000 a5211.ko
-rw-r--r-- 1 root root   7096 2025-02-28 12:23:47.000000000 +0000 a5211_pci.ko
-rw-r--r-- 1 root root 219112 2025-02-28 12:24:39.000000000 +0000 a5212.ko
-rw-r--r-- 1 root root   7944 2025-02-28 12:24:39.000000000 +0000 a5212_pci.ko
-rw-r--r-- 1 root root 309312 2025-02-28 12:24:39.000000000 +0000 a5416.ko
-rw-r--r-- 1 root root  14640 2025-02-28 12:24:39.000000000 +0000 a5416_pci.ko
-rw-r--r-- 1 root root 450664 2025-02-28 12:26:28.000000000 +0000 a9300.ko
-rw-r--r-- 1 root root  15072 2025-02-28 12:26:28.000000000 +0000 a9300_pci.ko
-rw-r--r-- 1 root root 272776 2025-02-28 12:26:00.000000000 +0000 ar9888_pci.ko
-rw-r--r-- 1 root root 318760 2025-02-28 12:27:05.000000000 +0000 ath.ko
-rw-r--r-- 1 root root 174096 2025-02-28 12:26:16.000000000 +0000 qca9984_pci.ko

/lib/modules/5.6.3/misc:
total 932
-rw-r--r-- 1 root root  92544 2025-02-28 12:26:07.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root   2600 2025-02-28 12:26:07.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root   2664 2025-02-28 12:26:01.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root 851272 2025-02-28 12:36:23.000000000 +0000 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-28 12:33:44.000000000 +0000 bin
drwxr-xr-x 5 root root 4096 2025-02-28 12:36:55.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-02-28 12:21:21.000000000 +0000 lib

/nova/bin:
total 1608
-rwxr-xr-x 1 root root 1643732 2025-02-28 12:33:44.000000000 +0000 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2025-02-28 12:21:32.000000000 +0000 net-remote
drwxr-xr-x 2 root root  4096 2025-02-28 12:21:32.000000000 +0000 pciinfo
drwxr-xr-x 2 root root  4096 2025-02-28 12:21:32.000000000 +0000 radius
-rw-r--r-- 1 root root 14588 2025-02-28 11:31:25.000000000 +0000 wirelessmfg
-rw-r--r-- 1 root root 72923 2025-02-28 11:31:25.000000000 +0000 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2025-02-28 12:21:31.000000000 +0000 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3685 2025-02-28 12:21:31.000000000 +0000 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-02-28 12:21:31.000000000 +0000 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:21:21.000000000 +0000 console

/nova/lib/console:
total 336
-rwxr-xr-x 1 root root 342517 2025-02-28 12:21:21.000000000 +0000 1107296256.mem
```

