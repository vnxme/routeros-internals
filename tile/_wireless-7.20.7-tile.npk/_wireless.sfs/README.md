### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 1467754 bytes, 46 inodes, blocksize: 262144 bytes, created: Thu Jan  8 10:45:52 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2026-01-08 10:34:03.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2026-01-08 10:35:50.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-08 10:37:11.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:34:03.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:34:03.000000000 +0000 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19292 2026-01-08 10:34:02.000000000 +0000 wlan6-227d441e0664.jg.gz
-rwxr-xr-x 1 root root   104 2026-01-08 10:34:03.000000000 +0000 wlan6.info
lrwxrwxrwx 1 root root    24 2026-01-08 10:34:03.000000000 +0000 wlan6.jg.gz -> wlan6-227d441e0664.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:35:50.000000000 +0000 firmware
drwxr-xr-x 3 root root 4096 2026-01-08 10:30:46.000000000 +0000 modules

/lib/firmware:
total 212
-rw-r--r-- 1 root root 216338 2026-01-08 10:35:50.000000000 +0000 QCA9984-fw.bin

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-01-08 10:45:20.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-01-08 10:30:46.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2026-01-08 10:44:58.000000000 +0000 misc
-rw-r--r-- 1 root root  268 2026-01-08 10:45:26.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:35:50.000000000 +0000 net

/lib/modules/5.6.3/drivers/net:
total 1828
-rw-r--r-- 1 root root  63256 2026-01-08 10:32:13.000000000 +0000 a5211.ko
-rw-r--r-- 1 root root   7096 2026-01-08 10:32:13.000000000 +0000 a5211_pci.ko
-rw-r--r-- 1 root root 219176 2026-01-08 10:32:27.000000000 +0000 a5212.ko
-rw-r--r-- 1 root root   7944 2026-01-08 10:32:23.000000000 +0000 a5212_pci.ko
-rw-r--r-- 1 root root 309376 2026-01-08 10:33:21.000000000 +0000 a5416.ko
-rw-r--r-- 1 root root  14640 2026-01-08 10:33:21.000000000 +0000 a5416_pci.ko
-rw-r--r-- 1 root root 450664 2026-01-08 10:34:23.000000000 +0000 a9300.ko
-rw-r--r-- 1 root root  15072 2026-01-08 10:34:23.000000000 +0000 a9300_pci.ko
-rw-r--r-- 1 root root 272840 2026-01-08 10:33:44.000000000 +0000 ar9888_pci.ko
-rw-r--r-- 1 root root 318760 2026-01-08 10:35:49.000000000 +0000 ath.ko
-rw-r--r-- 1 root root 174096 2026-01-08 10:33:41.000000000 +0000 qca9984_pci.ko

/lib/modules/5.6.3/misc:
total 932
-rw-r--r-- 1 root root  92672 2026-01-08 10:34:00.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root   2600 2026-01-08 10:33:59.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root   2664 2026-01-08 10:33:53.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root 851272 2026-01-08 10:44:57.000000000 +0000 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-08 10:44:19.000000000 +0000 bin
drwxr-xr-x 5 root root 4096 2026-01-08 10:45:51.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-08 10:28:15.000000000 +0000 lib

/nova/bin:
total 1608
-rwxr-xr-x 1 root root 1643748 2026-01-08 10:44:19.000000000 +0000 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2026-01-08 10:28:03.000000000 +0000 net-remote
drwxr-xr-x 2 root root  4096 2026-01-08 10:28:03.000000000 +0000 pciinfo
drwxr-xr-x 2 root root  4096 2026-01-08 10:28:03.000000000 +0000 radius
-rw-r--r-- 1 root root 14683 2025-12-04 12:00:27.000000000 +0000 wirelessmfg
-rw-r--r-- 1 root root 72923 2025-12-04 12:00:27.000000000 +0000 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2026-01-08 10:28:03.000000000 +0000 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3685 2026-01-08 10:28:03.000000000 +0000 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2026-01-08 10:28:03.000000000 +0000 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:28:15.000000000 +0000 console

/nova/lib/console:
total 356
-rwxr-xr-x 1 root root 361525 2026-01-08 10:28:15.000000000 +0000 1107296256.mem
```

