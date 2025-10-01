### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 869200 bytes, 47 inodes, blocksize: 524288 bytes, created: Thu Jan 30 11:34:54 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-01-30 11:21:49.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-01-30 11:22:28.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-01-30 11:34:52.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:21:49.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:34:52.000000000 +0000 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19262 2025-01-30 11:21:48.000000000 +0000 wlan6-0bc9c1d5a532.jg.gz
-rwxr-xr-x 1 root root   104 2025-01-30 11:21:49.000000000 +0000 wlan6.info
lrwxrwxrwx 1 root root    24 2025-01-30 11:34:52.000000000 +0000 wlan6.jg.gz -> wlan6-0bc9c1d5a532.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:22:28.000000000 +0000 firmware
drwxr-xr-x 3 root root 4096 2025-01-30 11:22:09.000000000 +0000 modules

/lib/firmware:
total 604
-rw-r--r-- 1 root root   3516 2025-01-30 11:22:28.000000000 +0000 wil6210-cube.brd
-rw-r--r-- 1 root root   1148 2025-01-30 11:22:28.000000000 +0000 wil6210-cube.msg
-rw-r--r-- 1 root root   3516 2025-01-30 11:22:28.000000000 +0000 wil6210-lhg-span2.8.brd
-rw-r--r-- 1 root root   1100 2025-01-30 11:22:28.000000000 +0000 wil6210-lhg-span2.8.msg
-rw-r--r-- 1 root root   3516 2025-01-30 11:22:28.000000000 +0000 wil6210-nray.brd
-rw-r--r-- 1 root root   1059 2025-01-30 11:22:28.000000000 +0000 wil6210-nray.msg
-rw-r--r-- 1 root root   3516 2025-01-30 11:22:28.000000000 +0000 wil6210-wap60g-60deg.brd
-rw-r--r-- 1 root root   1292 2025-01-30 11:22:28.000000000 +0000 wil6210-wap60g-60deg.msg
-rw-r--r-- 1 root root   3516 2025-01-30 11:22:28.000000000 +0000 wil6210-wap60g-omni.brd
-rw-r--r-- 1 root root   6668 2025-01-30 11:22:28.000000000 +0000 wil6210-wap60g-sa-dir.brd
-rw-r--r-- 1 root root   6668 2025-01-30 11:22:28.000000000 +0000 wil6210-wap60g-sa-omni.brd
-rw-r--r-- 1 root root 561268 2025-01-30 11:22:28.000000000 +0000 wil6210.fw

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-01-30 11:34:25.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-01-30 11:22:09.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2025-01-30 11:34:16.000000000 +0000 misc
-rw-r--r-- 1 root root  100 2025-01-30 11:34:28.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:22:27.000000000 +0000 net

/lib/modules/5.6.3/drivers/net:
total 116
-rw-r--r-- 1 root root 117400 2025-01-30 11:22:27.000000000 +0000 wil6210.ko

/lib/modules/5.6.3/misc:
total 632
-rw-r--r-- 1 root root  64384 2025-01-30 11:24:26.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root   3200 2025-01-30 11:24:26.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root   3544 2025-01-30 11:24:19.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root 570848 2025-01-30 11:34:16.000000000 +0000 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-01-30 11:34:52.000000000 +0000 bin
drwxr-xr-x 5 root root 4096 2025-01-30 11:34:52.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-01-30 11:34:52.000000000 +0000 lib

/nova/bin:
total 828
-rwxr-xr-x 1 root root 845128 2025-01-30 11:30:18.000000000 +0000 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2025-01-30 11:18:47.000000000 +0000 net-remote
drwxr-xr-x 2 root root  4096 2025-01-30 11:18:47.000000000 +0000 pciinfo
drwxr-xr-x 2 root root  4096 2025-01-30 11:18:47.000000000 +0000 radius
-rw-r--r-- 1 root root 14588 2025-01-30 10:29:47.000000000 +0000 wirelessmfg
-rw-r--r-- 1 root root 72923 2025-01-30 10:29:47.000000000 +0000 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2025-01-30 11:18:47.000000000 +0000 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3825 2025-01-30 11:18:47.000000000 +0000 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-01-30 11:18:47.000000000 +0000 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:34:52.000000000 +0000 console

/nova/lib/console:
total 324
-rwxr-xr-x 1 root root 328361 2025-01-30 11:18:15.000000000 +0000 1107296256.mem
```

