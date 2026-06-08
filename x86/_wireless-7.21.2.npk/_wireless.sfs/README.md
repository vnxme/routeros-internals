### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 1157430 bytes, 46 inodes, blocksize: 262144 bytes, created: Fri Jan 30 02:44:50 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 10:52:05.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2026-01-29 11:06:04.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-29 10:51:11.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:52:05.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:52:05.000000000 +0000 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19325 2026-01-29 10:52:05.000000000 +0000 wlan6-4927b5085f84.jg.gz
-rwxr-xr-x 1 root root   104 2026-01-29 10:52:05.000000000 +0000 wlan6.info
lrwxrwxrwx 1 root root    24 2026-01-29 10:52:05.000000000 +0000 wlan6.jg.gz -> wlan6-4927b5085f84.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:56:44.000000000 +0000 firmware
drwxr-xr-x 3 root root 4096 2026-01-29 11:06:04.000000000 +0000 modules

/lib/firmware:
total 212
-rw-r--r-- 1 root root 216338 2026-01-29 10:56:44.000000000 +0000 QCA9984-fw.bin

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-01-29 11:06:04.000000000 +0000 5.6.3-64

/lib/modules/5.6.3-64:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 11:06:04.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2026-01-29 11:06:04.000000000 +0000 misc
-rw-r--r-- 1 root root  260 2026-01-29 11:04:56.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3-64/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:06:04.000000000 +0000 net

/lib/modules/5.6.3-64/drivers/net:
total 1240
-rw-r--r-- 1 root root  40960 2026-01-29 10:50:44.000000000 +0000 a5211.ko
-rw-r--r-- 1 root root   5944 2026-01-29 10:50:44.000000000 +0000 a5211_pci.ko
-rw-r--r-- 1 root root 136752 2026-01-29 10:51:13.000000000 +0000 a5212.ko
-rw-r--r-- 1 root root   6592 2026-01-29 10:51:13.000000000 +0000 a5212_pci.ko
-rw-r--r-- 1 root root 209472 2026-01-29 10:51:40.000000000 +0000 a5416.ko
-rw-r--r-- 1 root root  11976 2026-01-29 10:51:40.000000000 +0000 a5416_pci.ko
-rw-r--r-- 1 root root 332920 2026-01-29 10:52:45.000000000 +0000 a9300.ko
-rw-r--r-- 1 root root  12424 2026-01-29 10:52:45.000000000 +0000 a9300_pci.ko
-rw-r--r-- 1 root root 214448 2026-01-29 10:55:08.000000000 +0000 ar9888_pci.ko
-rw-r--r-- 1 root root 172600 2026-01-29 10:54:47.000000000 +0000 ath.ko
-rw-r--r-- 1 root root 101944 2026-01-29 10:56:40.000000000 +0000 qca9984_pci.ko

/lib/modules/5.6.3-64/misc:
total 496
-rw-r--r-- 1 root root  48696 2026-01-29 10:53:06.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root   2976 2026-01-29 10:53:06.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root   2872 2026-01-29 10:52:59.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root 447192 2026-01-29 11:04:43.000000000 +0000 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:51.000000000 +0000 bin
drwxr-xr-x 5 root root 4096 2026-01-29 11:06:04.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-29 10:48:55.000000000 +0000 lib

/nova/bin:
total 808
-rwxr-xr-x 1 root root 824744 2026-01-29 11:00:51.000000000 +0000 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2026-01-29 10:48:38.000000000 +0000 net-remote
drwxr-xr-x 2 root root  4096 2026-01-29 10:48:38.000000000 +0000 pciinfo
drwxr-xr-x 2 root root  4096 2026-01-29 10:48:38.000000000 +0000 radius
-rw-r--r-- 1 root root 14683 2026-01-14 12:35:26.000000000 +0000 wirelessmfg
-rw-r--r-- 1 root root 72923 2026-01-14 12:35:26.000000000 +0000 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2026-01-29 10:48:37.000000000 +0000 wireless.x3

/nova/etc/pciinfo:
total 8
-rwxr-xr-x 1 root root 6520 2026-01-29 10:48:37.000000000 +0000 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2026-01-29 10:48:37.000000000 +0000 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:48:55.000000000 +0000 console

/nova/lib/console:
total 324
-rwxr-xr-x 1 root root 330822 2026-01-29 10:48:55.000000000 +0000 1107296256.mem
```

