### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 877416 bytes, 47 inodes, blocksize: 524288 bytes, created: Thu Sep 11 06:24:48 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-09-11 07:09:20.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-09-11 07:13:16.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-09-11 07:24:47.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-09-11 07:09:20.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-09-11 07:24:47.000000000 +0100 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19292 2025-09-11 07:09:19.000000000 +0100 wlan6-227d441e0664.jg.gz
-rwxr-xr-x 1 root root   105 2025-09-11 07:09:19.000000000 +0100 wlan6.info
lrwxrwxrwx 1 root root    24 2025-09-11 07:24:47.000000000 +0100 wlan6.jg.gz -> wlan6-227d441e0664.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-09-11 07:13:16.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2025-09-11 07:11:09.000000000 +0100 modules

/lib/firmware:
total 604
-rw-r--r-- 1 root root   3516 2025-09-11 07:13:16.000000000 +0100 wil6210-cube.brd
-rw-r--r-- 1 root root   1148 2025-09-11 07:13:16.000000000 +0100 wil6210-cube.msg
-rw-r--r-- 1 root root   3516 2025-09-11 07:13:16.000000000 +0100 wil6210-lhg-span2.8.brd
-rw-r--r-- 1 root root   1100 2025-09-11 07:13:16.000000000 +0100 wil6210-lhg-span2.8.msg
-rw-r--r-- 1 root root   3516 2025-09-11 07:13:16.000000000 +0100 wil6210-nray.brd
-rw-r--r-- 1 root root   1059 2025-09-11 07:13:16.000000000 +0100 wil6210-nray.msg
-rw-r--r-- 1 root root   3516 2025-09-11 07:13:16.000000000 +0100 wil6210-wap60g-60deg.brd
-rw-r--r-- 1 root root   1292 2025-09-11 07:13:16.000000000 +0100 wil6210-wap60g-60deg.msg
-rw-r--r-- 1 root root   3516 2025-09-11 07:13:16.000000000 +0100 wil6210-wap60g-omni.brd
-rw-r--r-- 1 root root   6668 2025-09-11 07:13:16.000000000 +0100 wil6210-wap60g-sa-dir.brd
-rw-r--r-- 1 root root   6668 2025-09-11 07:13:16.000000000 +0100 wil6210-wap60g-sa-omni.brd
-rw-r--r-- 1 root root 561268 2025-09-11 07:13:16.000000000 +0100 wil6210.fw

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-09-11 07:23:50.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-09-11 07:12:56.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2025-09-11 07:23:35.000000000 +0100 misc
-rw-r--r-- 1 root root   85 2025-09-11 07:23:56.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-09-11 07:13:15.000000000 +0100 net

/lib/modules/5.6.3/drivers/net:
total 116
-rw-r--r-- 1 root root 117840 2025-09-11 07:13:15.000000000 +0100 wil6210.ko

/lib/modules/5.6.3/misc:
total 632
-rw-r--r-- 1 root root  64384 2025-09-11 07:14:50.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root   3200 2025-09-11 07:14:50.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root   3544 2025-09-11 07:14:43.000000000 +0100 ipv6stub.ko
-rw-r--r-- 1 root root 570848 2025-09-11 07:23:34.000000000 +0100 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-09-11 07:24:47.000000000 +0100 bin
drwxr-xr-x 5 root root 4096 2025-09-11 07:24:47.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-09-11 07:24:47.000000000 +0100 lib

/nova/bin:
total 836
-rwxr-xr-x 1 root root 853336 2025-09-11 07:20:47.000000000 +0100 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2025-09-11 07:07:44.000000000 +0100 net-remote
drwxr-xr-x 2 root root  4096 2025-09-11 07:07:44.000000000 +0100 pciinfo
drwxr-xr-x 2 root root  4096 2025-09-11 07:07:44.000000000 +0100 radius
-rw-r--r-- 1 root root 14683 2025-09-11 06:17:26.000000000 +0100 wirelessmfg
-rw-r--r-- 1 root root 72923 2025-09-11 06:17:26.000000000 +0100 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2025-09-11 07:07:43.000000000 +0100 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3825 2025-09-11 07:07:43.000000000 +0100 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-09-11 07:07:43.000000000 +0100 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-09-11 07:24:47.000000000 +0100 console

/nova/lib/console:
total 356
-rwxr-xr-x 1 root root 361533 2025-09-11 07:07:23.000000000 +0100 1107296256.mem
```

