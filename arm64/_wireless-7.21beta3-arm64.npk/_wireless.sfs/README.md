### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 875436 bytes, 47 inodes, blocksize: 524288 bytes, created: Tue Oct 14 13:56:12 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-10-14 14:42:02.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-10-14 14:44:16.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-14 14:56:11.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:42:02.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:56:11.000000000 +0100 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19325 2025-10-14 14:42:02.000000000 +0100 wlan6-4927b5085f84.jg.gz
-rwxr-xr-x 1 root root   107 2025-10-14 14:42:02.000000000 +0100 wlan6.info
lrwxrwxrwx 1 root root    24 2025-10-14 14:56:11.000000000 +0100 wlan6.jg.gz -> wlan6-4927b5085f84.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:44:16.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2025-10-14 14:42:29.000000000 +0100 modules

/lib/firmware:
total 604
-rw-r--r-- 1 root root   3516 2025-10-14 14:44:16.000000000 +0100 wil6210-cube.brd
-rw-r--r-- 1 root root   1148 2025-10-14 14:44:16.000000000 +0100 wil6210-cube.msg
-rw-r--r-- 1 root root   3516 2025-10-14 14:44:16.000000000 +0100 wil6210-lhg-span2.8.brd
-rw-r--r-- 1 root root   1100 2025-10-14 14:44:16.000000000 +0100 wil6210-lhg-span2.8.msg
-rw-r--r-- 1 root root   3516 2025-10-14 14:44:16.000000000 +0100 wil6210-nray.brd
-rw-r--r-- 1 root root   1059 2025-10-14 14:44:16.000000000 +0100 wil6210-nray.msg
-rw-r--r-- 1 root root   3516 2025-10-14 14:44:16.000000000 +0100 wil6210-wap60g-60deg.brd
-rw-r--r-- 1 root root   1292 2025-10-14 14:44:16.000000000 +0100 wil6210-wap60g-60deg.msg
-rw-r--r-- 1 root root   3516 2025-10-14 14:44:16.000000000 +0100 wil6210-wap60g-omni.brd
-rw-r--r-- 1 root root   6668 2025-10-14 14:44:16.000000000 +0100 wil6210-wap60g-sa-dir.brd
-rw-r--r-- 1 root root   6668 2025-10-14 14:44:16.000000000 +0100 wil6210-wap60g-sa-omni.brd
-rw-r--r-- 1 root root 561268 2025-10-14 14:44:16.000000000 +0100 wil6210.fw

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-10-14 14:55:47.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-10-14 14:43:54.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2025-10-14 14:55:38.000000000 +0100 misc
-rw-r--r-- 1 root root   95 2025-10-14 14:55:51.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:44:16.000000000 +0100 net

/lib/modules/5.6.3/drivers/net:
total 116
-rw-r--r-- 1 root root 117968 2025-10-14 14:44:16.000000000 +0100 wil6210.ko

/lib/modules/5.6.3/misc:
total 632
-rw-r--r-- 1 root root  64384 2025-10-14 14:46:16.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root   3200 2025-10-14 14:46:16.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root   3544 2025-10-14 14:46:10.000000000 +0100 ipv6stub.ko
-rw-r--r-- 1 root root 570912 2025-10-14 14:55:37.000000000 +0100 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-14 14:56:11.000000000 +0100 bin
drwxr-xr-x 5 root root 4096 2025-10-14 14:56:11.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-14 14:56:11.000000000 +0100 lib

/nova/bin:
total 836
-rwxr-xr-x 1 root root 853336 2025-10-14 14:49:54.000000000 +0100 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2025-10-14 14:39:55.000000000 +0100 net-remote
drwxr-xr-x 2 root root  4096 2025-10-14 14:39:55.000000000 +0100 pciinfo
drwxr-xr-x 2 root root  4096 2025-10-14 14:39:55.000000000 +0100 radius
-rw-r--r-- 1 root root 14683 2025-10-14 13:49:58.000000000 +0100 wirelessmfg
-rw-r--r-- 1 root root 72923 2025-10-14 13:49:58.000000000 +0100 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2025-10-14 14:39:54.000000000 +0100 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3825 2025-10-14 14:39:54.000000000 +0100 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-10-14 14:39:54.000000000 +0100 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:56:11.000000000 +0100 console

/nova/lib/console:
total 324
-rwxr-xr-x 1 root root 330870 2025-10-14 14:37:39.000000000 +0100 1107296256.mem
```

