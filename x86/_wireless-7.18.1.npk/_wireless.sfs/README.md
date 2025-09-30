### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 1166950 bytes, 46 inodes, blocksize: 262144 bytes, created: Fri Feb 28 12:36:50 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-02-28 12:23:00.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-02-28 12:36:49.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-28 12:22:28.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:23:00.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:23:01.000000000 +0000 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19262 2025-02-28 12:23:00.000000000 +0000 wlan6-0bc9c1d5a532.jg.gz
-rwxr-xr-x 1 root root   104 2025-02-28 12:23:00.000000000 +0000 wlan6.info
lrwxrwxrwx 1 root root    24 2025-02-28 12:23:01.000000000 +0000 wlan6.jg.gz -> wlan6-0bc9c1d5a532.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-02-28 12:28:16.000000000 +0000 firmware
drwxr-xr-x 3 root root 4096 2025-02-28 12:36:49.000000000 +0000 modules

/lib/firmware:
total 212
-rw-r--r-- 1 root root 216338 2025-02-28 12:28:16.000000000 +0000 QCA9984-fw.bin

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-02-28 12:36:49.000000000 +0000 5.6.3-64

/lib/modules/5.6.3-64:
total 12
drwxr-xr-x 3 root root 4096 2025-02-28 12:36:49.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2025-02-28 12:36:49.000000000 +0000 misc
-rw-r--r-- 1 root root  265 2025-02-28 12:36:28.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3-64/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:36:49.000000000 +0000 net

/lib/modules/5.6.3-64/drivers/net:
total 1240
-rw-r--r-- 1 root root  40960 2025-02-28 12:23:50.000000000 +0000 a5211.ko
-rw-r--r-- 1 root root   5944 2025-02-28 12:23:46.000000000 +0000 a5211_pci.ko
-rw-r--r-- 1 root root 136752 2025-02-28 12:24:39.000000000 +0000 a5212.ko
-rw-r--r-- 1 root root   6592 2025-02-28 12:24:39.000000000 +0000 a5212_pci.ko
-rw-r--r-- 1 root root 209472 2025-02-28 12:24:39.000000000 +0000 a5416.ko
-rw-r--r-- 1 root root  11976 2025-02-28 12:24:39.000000000 +0000 a5416_pci.ko
-rw-r--r-- 1 root root 332920 2025-02-28 12:26:32.000000000 +0000 a9300.ko
-rw-r--r-- 1 root root  12424 2025-02-28 12:26:27.000000000 +0000 a9300_pci.ko
-rw-r--r-- 1 root root 214448 2025-02-28 12:26:00.000000000 +0000 ar9888_pci.ko
-rw-r--r-- 1 root root 172536 2025-02-28 12:27:04.000000000 +0000 ath.ko
-rw-r--r-- 1 root root 101944 2025-02-28 12:26:16.000000000 +0000 qca9984_pci.ko

/lib/modules/5.6.3-64/misc:
total 496
-rw-r--r-- 1 root root  48696 2025-02-28 12:26:06.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root   2976 2025-02-28 12:26:06.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root   2872 2025-02-28 12:26:00.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root 447192 2025-02-28 12:36:24.000000000 +0000 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-28 12:33:38.000000000 +0000 bin
drwxr-xr-x 5 root root 4096 2025-02-28 12:36:49.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-02-28 12:21:21.000000000 +0000 lib

/nova/bin:
total 808
-rwxr-xr-x 1 root root 824712 2025-02-28 12:33:38.000000000 +0000 wireless

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
total 8
-rwxr-xr-x 1 root root 6520 2025-02-28 12:21:31.000000000 +0000 wireless.x3

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

