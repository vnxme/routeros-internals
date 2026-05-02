### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 1466494 bytes, 45 inodes, blocksize: 262144 bytes, created: Wed Apr 22 08:31:05 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:33.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2026-04-22 09:27:02.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-04-22 09:26:36.000000000 +0100 nova

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
drwxr-xr-x 2 root root 4096 2026-04-22 09:27:02.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2026-04-22 09:25:41.000000000 +0100 modules

/lib/firmware:
total 212
-rw-r--r-- 1 root root 216338 2026-04-22 09:27:02.000000000 +0100 QCA9984-fw.bin

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-04-22 09:30:31.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:25:41.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2026-04-22 09:30:18.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2026-04-22 09:30:33.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:27:55.000000000 +0100 net

/lib/modules/5.6.3/drivers/net:
total 1828
-rw-r--r-- 1 root root  63320 2026-04-22 09:26:09.000000000 +0100 a5211.ko
-rw-r--r-- 1 root root   7096 2026-04-22 09:26:09.000000000 +0100 a5211_pci.ko
-rw-r--r-- 1 root root 219176 2026-04-22 09:26:37.000000000 +0100 a5212.ko
-rw-r--r-- 1 root root   7944 2026-04-22 09:26:37.000000000 +0100 a5212_pci.ko
-rw-r--r-- 1 root root 309376 2026-04-22 09:26:37.000000000 +0100 a5416.ko
-rw-r--r-- 1 root root  14640 2026-04-22 09:26:36.000000000 +0100 a5416_pci.ko
-rw-r--r-- 1 root root 450664 2026-04-22 09:26:55.000000000 +0100 a9300.ko
-rw-r--r-- 1 root root  15072 2026-04-22 09:26:55.000000000 +0100 a9300_pci.ko
-rw-r--r-- 1 root root 272904 2026-04-22 09:26:59.000000000 +0100 ar9888_pci.ko
-rw-r--r-- 1 root root 319144 2026-04-22 09:27:55.000000000 +0100 ath.ko
-rw-r--r-- 1 root root 174224 2026-04-22 09:26:56.000000000 +0100 qca9984_pci.ko

/lib/modules/5.6.3/misc:
total 928
-rw-r--r-- 1 root root  92736 2026-04-22 09:27:06.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root   2600 2026-04-22 09:27:06.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root 851272 2026-04-22 09:30:18.000000000 +0100 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:28:47.000000000 +0100 bin
drwxr-xr-x 5 root root 4096 2026-04-22 09:31:05.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:24.000000000 +0100 lib

/nova/bin:
total 1608
-rwxr-xr-x 1 root root 1643772 2026-04-22 09:28:47.000000000 +0100 wireless

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
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:24.000000000 +0100 console

/nova/lib/console:
total 324
-rwxr-xr-x 1 root root 331774 2026-04-22 09:24:24.000000000 +0100 1107296256.mem
```

