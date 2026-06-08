### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 1465554 bytes, 46 inodes, blocksize: 262144 bytes, created: Thu Jan 29 11:06:14 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 10:52:05.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2026-01-29 10:57:44.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-29 10:55:05.000000000 +0000 nova

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
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:44.000000000 +0000 firmware
drwxr-xr-x 3 root root 4096 2026-01-29 10:49:36.000000000 +0000 modules

/lib/firmware:
total 212
-rw-r--r-- 1 root root 216338 2026-01-29 10:57:44.000000000 +0000 QCA9984-fw.bin

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-01-29 11:05:15.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 10:49:36.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2026-01-29 11:04:46.000000000 +0000 misc
-rw-r--r-- 1 root root  278 2026-01-29 11:05:23.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:56:41.000000000 +0000 net

/lib/modules/5.6.3/drivers/net:
total 1828
-rw-r--r-- 1 root root  63256 2026-01-29 10:50:44.000000000 +0000 a5211.ko
-rw-r--r-- 1 root root   7096 2026-01-29 10:50:44.000000000 +0000 a5211_pci.ko
-rw-r--r-- 1 root root 219176 2026-01-29 10:51:13.000000000 +0000 a5212.ko
-rw-r--r-- 1 root root   7944 2026-01-29 10:51:13.000000000 +0000 a5212_pci.ko
-rw-r--r-- 1 root root 309376 2026-01-29 10:51:41.000000000 +0000 a5416.ko
-rw-r--r-- 1 root root  14640 2026-01-29 10:51:41.000000000 +0000 a5416_pci.ko
-rw-r--r-- 1 root root 450664 2026-01-29 10:52:46.000000000 +0000 a9300.ko
-rw-r--r-- 1 root root  15072 2026-01-29 10:52:46.000000000 +0000 a9300_pci.ko
-rw-r--r-- 1 root root 272840 2026-01-29 10:55:08.000000000 +0000 ar9888_pci.ko
-rw-r--r-- 1 root root 319144 2026-01-29 10:54:48.000000000 +0000 ath.ko
-rw-r--r-- 1 root root 174160 2026-01-29 10:56:40.000000000 +0000 qca9984_pci.ko

/lib/modules/5.6.3/misc:
total 932
-rw-r--r-- 1 root root  92672 2026-01-29 10:53:09.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root   2600 2026-01-29 10:53:08.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root   2664 2026-01-29 10:53:01.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root 851272 2026-01-29 11:04:43.000000000 +0000 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:45.000000000 +0000 bin
drwxr-xr-x 5 root root 4096 2026-01-29 11:06:13.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-29 10:48:55.000000000 +0000 lib

/nova/bin:
total 1608
-rwxr-xr-x 1 root root 1643756 2026-01-29 11:00:45.000000000 +0000 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2026-01-29 10:48:38.000000000 +0000 net-remote
drwxr-xr-x 2 root root  4096 2026-01-29 10:48:38.000000000 +0000 pciinfo
drwxr-xr-x 2 root root  4096 2026-01-29 10:48:38.000000000 +0000 radius
-rw-r--r-- 1 root root 14683 2026-01-14 12:35:26.000000000 +0000 wirelessmfg
-rw-r--r-- 1 root root 72923 2026-01-14 12:35:26.000000000 +0000 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2026-01-29 10:48:38.000000000 +0000 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3685 2026-01-29 10:48:38.000000000 +0000 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2026-01-29 10:48:38.000000000 +0000 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:48:55.000000000 +0000 console

/nova/lib/console:
total 324
-rwxr-xr-x 1 root root 330822 2026-01-29 10:48:55.000000000 +0000 1107296256.mem
```

