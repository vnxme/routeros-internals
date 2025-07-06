### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 1465602 bytes, 46 inodes, blocksize: 262144 bytes, created: Fri Jun 20 09:00:44 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-06-20 09:47:03.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-06-20 09:49:41.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-06-20 09:50:17.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-06-20 09:47:03.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-06-20 09:47:03.000000000 +0100 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19291 2025-06-20 09:47:03.000000000 +0100 wlan6-0aa378aa80dc.jg.gz
-rwxr-xr-x 1 root root   104 2025-06-20 09:47:03.000000000 +0100 wlan6.info
lrwxrwxrwx 1 root root    24 2025-06-20 09:47:03.000000000 +0100 wlan6.jg.gz -> wlan6-0aa378aa80dc.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-06-20 09:49:41.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2025-06-20 09:44:39.000000000 +0100 modules

/lib/firmware:
total 212
-rw-r--r-- 1 root root 216338 2025-06-20 09:49:41.000000000 +0100 QCA9984-fw.bin

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-06-20 09:59:48.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-06-20 09:44:39.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2025-06-20 09:59:26.000000000 +0100 misc
-rw-r--r-- 1 root root  268 2025-06-20 09:59:54.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-06-20 09:49:49.000000000 +0100 net

/lib/modules/5.6.3/drivers/net:
total 1828
-rw-r--r-- 1 root root  63256 2025-06-20 09:45:29.000000000 +0100 a5211.ko
-rw-r--r-- 1 root root   7096 2025-06-20 09:45:29.000000000 +0100 a5211_pci.ko
-rw-r--r-- 1 root root 219112 2025-06-20 09:46:27.000000000 +0100 a5212.ko
-rw-r--r-- 1 root root   7944 2025-06-20 09:46:24.000000000 +0100 a5212_pci.ko
-rw-r--r-- 1 root root 309312 2025-06-20 09:46:32.000000000 +0100 a5416.ko
-rw-r--r-- 1 root root  14640 2025-06-20 09:46:29.000000000 +0100 a5416_pci.ko
-rw-r--r-- 1 root root 450664 2025-06-20 09:47:22.000000000 +0100 a9300.ko
-rw-r--r-- 1 root root  15072 2025-06-20 09:47:22.000000000 +0100 a9300_pci.ko
-rw-r--r-- 1 root root 272776 2025-06-20 09:47:09.000000000 +0100 ar9888_pci.ko
-rw-r--r-- 1 root root 318760 2025-06-20 09:49:48.000000000 +0100 ath.ko
-rw-r--r-- 1 root root 174096 2025-06-20 09:47:01.000000000 +0100 qca9984_pci.ko

/lib/modules/5.6.3/misc:
total 932
-rw-r--r-- 1 root root  92544 2025-06-20 09:47:16.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root   2600 2025-06-20 09:47:16.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root   2664 2025-06-20 09:47:09.000000000 +0100 ipv6stub.ko
-rw-r--r-- 1 root root 851272 2025-06-20 09:59:24.000000000 +0100 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-06-20 09:58:20.000000000 +0100 bin
drwxr-xr-x 5 root root 4096 2025-06-20 10:00:43.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-06-20 09:44:28.000000000 +0100 lib

/nova/bin:
total 1608
-rwxr-xr-x 1 root root 1643740 2025-06-20 09:58:20.000000000 +0100 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2025-06-20 09:44:29.000000000 +0100 net-remote
drwxr-xr-x 2 root root  4096 2025-06-20 09:44:29.000000000 +0100 pciinfo
drwxr-xr-x 2 root root  4096 2025-06-20 09:44:29.000000000 +0100 radius
-rw-r--r-- 1 root root 14683 2025-06-20 08:54:50.000000000 +0100 wirelessmfg
-rw-r--r-- 1 root root 72923 2025-06-20 08:54:50.000000000 +0100 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2025-06-20 09:44:29.000000000 +0100 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3685 2025-06-20 09:44:29.000000000 +0100 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-06-20 09:44:29.000000000 +0100 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-06-20 09:44:28.000000000 +0100 console

/nova/lib/console:
total 348
-rwxr-xr-x 1 root root 352501 2025-06-20 09:44:28.000000000 +0100 1107296256.mem
```

