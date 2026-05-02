### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 1171990 bytes, 45 inodes, blocksize: 262144 bytes, created: Wed Apr 22 08:31:00 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:33.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2026-04-22 09:31:00.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-04-22 09:24:24.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:33.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:33.000000000 +0100 webfig

/home/web/webfig:
total 128
-rw-r--r-- 1 root root 124389 2026-04-22 09:24:33.000000000 +0100 wlan6-9770341673db.jg.gz
-rwxr-xr-x 1 root root    105 2026-04-22 09:24:33.000000000 +0100 wlan6.info
lrwxrwxrwx 1 root root     24 2026-04-22 09:24:33.000000000 +0100 wlan6.jg.gz -> wlan6-9770341673db.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:26:59.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2026-04-22 09:31:00.000000000 +0100 modules

/lib/firmware:
total 212
-rw-r--r-- 1 root root 216338 2026-04-22 09:26:59.000000000 +0100 QCA9984-fw.bin

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-04-22 09:31:00.000000000 +0100 5.6.3-64

/lib/modules/5.6.3-64:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:31:00.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2026-04-22 09:31:00.000000000 +0100 misc
-rw-r--r-- 1 root root  260 2026-04-22 09:30:23.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3-64/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:31:00.000000000 +0100 net

/lib/modules/5.6.3-64/drivers/net:
total 1240
-rw-r--r-- 1 root root  40960 2026-04-22 09:26:11.000000000 +0100 a5211.ko
-rw-r--r-- 1 root root   5944 2026-04-22 09:26:09.000000000 +0100 a5211_pci.ko
-rw-r--r-- 1 root root 136752 2026-04-22 09:26:37.000000000 +0100 a5212.ko
-rw-r--r-- 1 root root   6592 2026-04-22 09:26:37.000000000 +0100 a5212_pci.ko
-rw-r--r-- 1 root root 209472 2026-04-22 09:26:36.000000000 +0100 a5416.ko
-rw-r--r-- 1 root root  11976 2026-04-22 09:26:36.000000000 +0100 a5416_pci.ko
-rw-r--r-- 1 root root 332920 2026-04-22 09:26:54.000000000 +0100 a9300.ko
-rw-r--r-- 1 root root  12424 2026-04-22 09:26:54.000000000 +0100 a9300_pci.ko
-rw-r--r-- 1 root root 214448 2026-04-22 09:26:59.000000000 +0100 ar9888_pci.ko
-rw-r--r-- 1 root root 172600 2026-04-22 09:27:54.000000000 +0100 ath.ko
-rw-r--r-- 1 root root 101944 2026-04-22 09:26:56.000000000 +0100 qca9984_pci.ko

/lib/modules/5.6.3-64/misc:
total 492
-rw-r--r-- 1 root root  48696 2026-04-22 09:27:05.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root   2976 2026-04-22 09:27:05.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root 447320 2026-04-22 09:30:18.000000000 +0100 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:28:46.000000000 +0100 bin
drwxr-xr-x 5 root root 4096 2026-04-22 09:31:00.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:23.000000000 +0100 lib

/nova/bin:
total 816
-rwxr-xr-x 1 root root 832968 2026-04-22 09:28:46.000000000 +0100 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2026-04-22 09:24:18.000000000 +0100 net-remote
drwxr-xr-x 2 root root  4096 2026-04-22 09:24:18.000000000 +0100 pciinfo
drwxr-xr-x 2 root root  4096 2026-04-22 09:24:18.000000000 +0100 radius
-rw-r--r-- 1 root root 14687 2026-04-21 16:18:32.000000000 +0100 wirelessmfg
-rw-r--r-- 1 root root 72923 2026-04-21 14:58:49.000000000 +0100 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2026-04-22 09:24:18.000000000 +0100 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3358 2026-04-22 09:24:18.000000000 +0100 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2026-04-22 09:24:18.000000000 +0100 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:23.000000000 +0100 console

/nova/lib/console:
total 324
-rwxr-xr-x 1 root root 331774 2026-04-22 09:24:23.000000000 +0100 1107296256.mem
```

