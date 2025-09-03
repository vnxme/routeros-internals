### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 1170446 bytes, 46 inodes, blocksize: 262144 bytes, created: Thu Aug 28 14:48:48 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-08-28 15:35:31.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-08-28 15:48:47.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-08-28 15:34:57.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-08-28 15:35:31.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-08-28 15:35:31.000000000 +0100 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19292 2025-08-28 15:35:31.000000000 +0100 wlan6-227d441e0664.jg.gz
-rwxr-xr-x 1 root root   105 2025-08-28 15:35:31.000000000 +0100 wlan6.info
lrwxrwxrwx 1 root root    24 2025-08-28 15:35:31.000000000 +0100 wlan6.jg.gz -> wlan6-227d441e0664.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-08-28 15:39:15.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2025-08-28 15:48:47.000000000 +0100 modules

/lib/firmware:
total 212
-rw-r--r-- 1 root root 216338 2025-08-28 15:39:15.000000000 +0100 QCA9984-fw.bin

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-08-28 15:48:47.000000000 +0100 5.6.3-64

/lib/modules/5.6.3-64:
total 12
drwxr-xr-x 3 root root 4096 2025-08-28 15:48:47.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2025-08-28 15:48:47.000000000 +0100 misc
-rw-r--r-- 1 root root  250 2025-08-28 15:47:48.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3-64/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-08-28 15:48:47.000000000 +0100 net

/lib/modules/5.6.3-64/drivers/net:
total 1240
-rw-r--r-- 1 root root  40960 2025-08-28 15:34:14.000000000 +0100 a5211.ko
-rw-r--r-- 1 root root   5944 2025-08-28 15:34:10.000000000 +0100 a5211_pci.ko
-rw-r--r-- 1 root root 136752 2025-08-28 15:34:04.000000000 +0100 a5212.ko
-rw-r--r-- 1 root root   6592 2025-08-28 15:34:04.000000000 +0100 a5212_pci.ko
-rw-r--r-- 1 root root 209472 2025-08-28 15:35:16.000000000 +0100 a5416.ko
-rw-r--r-- 1 root root  11976 2025-08-28 15:35:11.000000000 +0100 a5416_pci.ko
-rw-r--r-- 1 root root 332920 2025-08-28 15:37:42.000000000 +0100 a9300.ko
-rw-r--r-- 1 root root  12424 2025-08-28 15:37:42.000000000 +0100 a9300_pci.ko
-rw-r--r-- 1 root root 214448 2025-08-28 15:37:59.000000000 +0100 ar9888_pci.ko
-rw-r--r-- 1 root root 172536 2025-08-28 15:38:18.000000000 +0100 ath.ko
-rw-r--r-- 1 root root 101944 2025-08-28 15:38:59.000000000 +0100 qca9984_pci.ko

/lib/modules/5.6.3-64/misc:
total 496
-rw-r--r-- 1 root root  48696 2025-08-28 15:37:26.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root   2976 2025-08-28 15:37:26.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root   2872 2025-08-28 15:37:20.000000000 +0100 ipv6stub.ko
-rw-r--r-- 1 root root 447192 2025-08-28 15:47:33.000000000 +0100 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-08-28 15:44:00.000000000 +0100 bin
drwxr-xr-x 5 root root 4096 2025-08-28 15:48:47.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-08-28 15:31:07.000000000 +0100 lib

/nova/bin:
total 808
-rwxr-xr-x 1 root root 824744 2025-08-28 15:44:00.000000000 +0100 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2025-08-28 15:30:30.000000000 +0100 net-remote
drwxr-xr-x 2 root root  4096 2025-08-28 15:30:30.000000000 +0100 pciinfo
drwxr-xr-x 2 root root  4096 2025-08-28 15:30:30.000000000 +0100 radius
-rw-r--r-- 1 root root 14683 2025-08-28 14:42:39.000000000 +0100 wirelessmfg
-rw-r--r-- 1 root root 72923 2025-08-28 14:42:39.000000000 +0100 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2025-08-28 15:30:29.000000000 +0100 wireless.x3

/nova/etc/pciinfo:
total 8
-rwxr-xr-x 1 root root 6520 2025-08-28 15:30:29.000000000 +0100 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-08-28 15:30:29.000000000 +0100 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-08-28 15:31:07.000000000 +0100 console

/nova/lib/console:
total 356
-rwxr-xr-x 1 root root 361533 2025-08-28 15:31:07.000000000 +0100 1107296256.mem
```

