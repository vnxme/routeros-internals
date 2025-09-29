### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 874352 bytes, 47 inodes, blocksize: 524288 bytes, created: Fri Sep 12 10:07:36 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-09-12 10:52:16.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-09-12 10:53:29.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-09-12 11:07:35.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 10:52:16.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:07:35.000000000 +0100 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19291 2025-09-12 10:52:16.000000000 +0100 wlan6-0aa378aa80dc.jg.gz
-rwxr-xr-x 1 root root   104 2025-09-12 10:52:16.000000000 +0100 wlan6.info
lrwxrwxrwx 1 root root    24 2025-09-12 11:07:35.000000000 +0100 wlan6.jg.gz -> wlan6-0aa378aa80dc.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 10:53:29.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2025-09-12 10:52:55.000000000 +0100 modules

/lib/firmware:
total 604
-rw-r--r-- 1 root root   3516 2025-09-12 10:53:29.000000000 +0100 wil6210-cube.brd
-rw-r--r-- 1 root root   1148 2025-09-12 10:53:29.000000000 +0100 wil6210-cube.msg
-rw-r--r-- 1 root root   3516 2025-09-12 10:53:29.000000000 +0100 wil6210-lhg-span2.8.brd
-rw-r--r-- 1 root root   1100 2025-09-12 10:53:29.000000000 +0100 wil6210-lhg-span2.8.msg
-rw-r--r-- 1 root root   3516 2025-09-12 10:53:29.000000000 +0100 wil6210-nray.brd
-rw-r--r-- 1 root root   1059 2025-09-12 10:53:29.000000000 +0100 wil6210-nray.msg
-rw-r--r-- 1 root root   3516 2025-09-12 10:53:29.000000000 +0100 wil6210-wap60g-60deg.brd
-rw-r--r-- 1 root root   1292 2025-09-12 10:53:29.000000000 +0100 wil6210-wap60g-60deg.msg
-rw-r--r-- 1 root root   3516 2025-09-12 10:53:29.000000000 +0100 wil6210-wap60g-omni.brd
-rw-r--r-- 1 root root   6668 2025-09-12 10:53:29.000000000 +0100 wil6210-wap60g-sa-dir.brd
-rw-r--r-- 1 root root   6668 2025-09-12 10:53:29.000000000 +0100 wil6210-wap60g-sa-omni.brd
-rw-r--r-- 1 root root 561268 2025-09-12 10:53:29.000000000 +0100 wil6210.fw

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-09-12 11:07:05.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-09-12 10:53:09.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2025-09-12 11:06:58.000000000 +0100 misc
-rw-r--r-- 1 root root   85 2025-09-12 11:07:08.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 10:53:29.000000000 +0100 net

/lib/modules/5.6.3/drivers/net:
total 116
-rw-r--r-- 1 root root 117840 2025-09-12 10:53:28.000000000 +0100 wil6210.ko

/lib/modules/5.6.3/misc:
total 632
-rw-r--r-- 1 root root  64384 2025-09-12 10:55:05.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root   3200 2025-09-12 10:55:05.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root   3544 2025-09-12 10:54:58.000000000 +0100 ipv6stub.ko
-rw-r--r-- 1 root root 570848 2025-09-12 11:06:56.000000000 +0100 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-09-12 11:07:35.000000000 +0100 bin
drwxr-xr-x 5 root root 4096 2025-09-12 11:07:35.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-09-12 11:07:35.000000000 +0100 lib

/nova/bin:
total 832
-rwxr-xr-x 1 root root 849232 2025-09-12 11:00:30.000000000 +0100 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2025-09-12 10:49:39.000000000 +0100 net-remote
drwxr-xr-x 2 root root  4096 2025-09-12 10:49:39.000000000 +0100 pciinfo
drwxr-xr-x 2 root root  4096 2025-09-12 10:49:39.000000000 +0100 radius
-rw-r--r-- 1 root root 14683 2025-09-12 10:02:38.000000000 +0100 wirelessmfg
-rw-r--r-- 1 root root 72923 2025-09-12 10:02:38.000000000 +0100 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2025-09-12 10:49:39.000000000 +0100 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3825 2025-09-12 10:49:39.000000000 +0100 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-09-12 10:49:39.000000000 +0100 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:07:35.000000000 +0100 console

/nova/lib/console:
total 348
-rwxr-xr-x 1 root root 352501 2025-09-12 10:50:14.000000000 +0100 1107296256.mem
```

