### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 1420102 bytes, 58 inodes, blocksize: 262144 bytes, created: Wed Apr 22 08:31:08 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:33.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2026-04-22 09:26:13.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-04-22 09:27:33.000000000 +0100 nova

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
drwxr-xr-x 2 root root 4096 2026-04-22 09:27:00.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2026-04-22 09:25:49.000000000 +0100 modules

/lib/firmware:
total 816
-rw-r--r-- 1 root root 216338 2026-04-22 09:27:00.000000000 +0100 QCA9984-fw.bin
-rw-r--r-- 1 root root   3516 2026-04-22 09:26:13.000000000 +0100 wil6210-cube.brd
-rw-r--r-- 1 root root   1148 2026-04-22 09:26:13.000000000 +0100 wil6210-cube.msg
-rw-r--r-- 1 root root   3516 2026-04-22 09:26:13.000000000 +0100 wil6210-lhg-span2.8.brd
-rw-r--r-- 1 root root   1100 2026-04-22 09:26:13.000000000 +0100 wil6210-lhg-span2.8.msg
-rw-r--r-- 1 root root   3516 2026-04-22 09:26:13.000000000 +0100 wil6210-nray.brd
-rw-r--r-- 1 root root   1059 2026-04-22 09:26:13.000000000 +0100 wil6210-nray.msg
-rw-r--r-- 1 root root   3516 2026-04-22 09:26:13.000000000 +0100 wil6210-wap60g-60deg.brd
-rw-r--r-- 1 root root   1292 2026-04-22 09:26:13.000000000 +0100 wil6210-wap60g-60deg.msg
-rw-r--r-- 1 root root   3516 2026-04-22 09:26:13.000000000 +0100 wil6210-wap60g-omni.brd
-rw-r--r-- 1 root root   6668 2026-04-22 09:26:13.000000000 +0100 wil6210-wap60g-sa-dir.brd
-rw-r--r-- 1 root root   6668 2026-04-22 09:26:13.000000000 +0100 wil6210-wap60g-sa-omni.brd
-rw-r--r-- 1 root root 561268 2026-04-22 09:26:13.000000000 +0100 wil6210.fw

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-04-22 09:30:44.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:25:49.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2026-04-22 09:30:19.000000000 +0100 misc
-rw-r--r-- 1 root root  316 2026-04-22 09:30:47.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:27:55.000000000 +0100 net

/lib/modules/5.6.3/drivers/net:
total 1336
-rw-r--r-- 1 root root  41152 2026-04-22 09:26:11.000000000 +0100 a5211.ko
-rw-r--r-- 1 root root   4532 2026-04-22 09:26:11.000000000 +0100 a5211_pci.ko
-rw-r--r-- 1 root root 143632 2026-04-22 09:26:39.000000000 +0100 a5212.ko
-rw-r--r-- 1 root root   7588 2026-04-22 09:26:38.000000000 +0100 a5212_pci.ko
-rw-r--r-- 1 root root 221328 2026-04-22 09:26:37.000000000 +0100 a5416.ko
-rw-r--r-- 1 root root   9016 2026-04-22 09:26:36.000000000 +0100 a5416_pci.ko
-rw-r--r-- 1 root root 343496 2026-04-22 09:26:57.000000000 +0100 a9300.ko
-rw-r--r-- 1 root root  10212 2026-04-22 09:26:56.000000000 +0100 a9300_pci.ko
-rw-r--r-- 1 root root 203100 2026-04-22 09:26:59.000000000 +0100 ar9888_pci.ko
-rw-r--r-- 1 root root 166748 2026-04-22 09:27:55.000000000 +0100 ath.ko
-rw-r--r-- 1 root root  91964 2026-04-22 09:26:56.000000000 +0100 qca9984_pci.ko
-rw-r--r-- 1 root root  97068 2026-04-22 09:26:13.000000000 +0100 wil6210.ko

/lib/modules/5.6.3/misc:
total 464
-rw-r--r-- 1 root root  43900 2026-04-22 09:27:08.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root   2016 2026-04-22 09:27:07.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root 422724 2026-04-22 09:30:19.000000000 +0100 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:28:50.000000000 +0100 bin
drwxr-xr-x 5 root root 4096 2026-04-22 09:31:08.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:24.000000000 +0100 lib

/nova/bin:
total 920
-rwxr-xr-x 1 root root 939704 2026-04-22 09:28:50.000000000 +0100 wireless

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
-rwxr-xr-x 1 root root 3577 2026-04-22 09:24:18.000000000 +0100 wireless.x3

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

