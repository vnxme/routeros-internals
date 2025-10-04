### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 1467574 bytes, 46 inodes, blocksize: 262144 bytes, created: Mon Sep 29 10:40:03 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-09-29 11:28:23.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-09-29 11:29:34.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-09-29 11:31:24.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-09-29 11:28:23.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-09-29 11:28:23.000000000 +0100 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19292 2025-09-29 11:28:23.000000000 +0100 wlan6-227d441e0664.jg.gz
-rwxr-xr-x 1 root root   102 2025-09-29 11:28:23.000000000 +0100 wlan6.info
lrwxrwxrwx 1 root root    24 2025-09-29 11:28:23.000000000 +0100 wlan6.jg.gz -> wlan6-227d441e0664.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-09-29 11:29:34.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2025-09-29 11:24:49.000000000 +0100 modules

/lib/firmware:
total 212
-rw-r--r-- 1 root root 216338 2025-09-29 11:29:34.000000000 +0100 QCA9984-fw.bin

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-09-29 11:39:17.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-09-29 11:24:49.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2025-09-29 11:39:07.000000000 +0100 misc
-rw-r--r-- 1 root root  268 2025-09-29 11:39:19.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-09-29 11:29:35.000000000 +0100 net

/lib/modules/5.6.3/drivers/net:
total 1828
-rw-r--r-- 1 root root  63256 2025-09-29 11:26:02.000000000 +0100 a5211.ko
-rw-r--r-- 1 root root   7096 2025-09-29 11:26:02.000000000 +0100 a5211_pci.ko
-rw-r--r-- 1 root root 219112 2025-09-29 11:26:46.000000000 +0100 a5212.ko
-rw-r--r-- 1 root root   7944 2025-09-29 11:26:46.000000000 +0100 a5212_pci.ko
-rw-r--r-- 1 root root 309312 2025-09-29 11:26:39.000000000 +0100 a5416.ko
-rw-r--r-- 1 root root  14640 2025-09-29 11:26:39.000000000 +0100 a5416_pci.ko
-rw-r--r-- 1 root root 450664 2025-09-29 11:28:47.000000000 +0100 a9300.ko
-rw-r--r-- 1 root root  15072 2025-09-29 11:28:42.000000000 +0100 a9300_pci.ko
-rw-r--r-- 1 root root 272776 2025-09-29 11:28:35.000000000 +0100 ar9888_pci.ko
-rw-r--r-- 1 root root 318760 2025-09-29 11:29:34.000000000 +0100 ath.ko
-rw-r--r-- 1 root root 174096 2025-09-29 11:28:56.000000000 +0100 qca9984_pci.ko

/lib/modules/5.6.3/misc:
total 932
-rw-r--r-- 1 root root  92608 2025-09-29 11:28:17.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root   2600 2025-09-29 11:28:17.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root   2664 2025-09-29 11:28:11.000000000 +0100 ipv6stub.ko
-rw-r--r-- 1 root root 851272 2025-09-29 11:39:06.000000000 +0100 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-09-29 11:39:04.000000000 +0100 bin
drwxr-xr-x 5 root root 4096 2025-09-29 11:40:02.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-09-29 11:22:06.000000000 +0100 lib

/nova/bin:
total 1608
-rwxr-xr-x 1 root root 1643748 2025-09-29 11:39:04.000000000 +0100 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2025-09-29 11:22:46.000000000 +0100 net-remote
drwxr-xr-x 2 root root  4096 2025-09-29 11:22:46.000000000 +0100 pciinfo
drwxr-xr-x 2 root root  4096 2025-09-29 11:22:46.000000000 +0100 radius
-rw-r--r-- 1 root root 14683 2025-09-29 10:33:49.000000000 +0100 wirelessmfg
-rw-r--r-- 1 root root 72923 2025-09-29 10:33:49.000000000 +0100 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2025-09-29 11:22:46.000000000 +0100 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3685 2025-09-29 11:22:46.000000000 +0100 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-09-29 11:22:46.000000000 +0100 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-09-29 11:22:06.000000000 +0100 console

/nova/lib/console:
total 356
-rwxr-xr-x 1 root root 361533 2025-09-29 11:22:06.000000000 +0100 1107296256.mem
```

