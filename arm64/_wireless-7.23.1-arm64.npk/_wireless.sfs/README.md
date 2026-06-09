### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 920386 bytes, 46 inodes, blocksize: 262144 bytes, created: Thu Jun  4 04:56:24 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2026-06-02 10:47:07.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2026-06-02 10:47:38.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-06-02 10:52:41.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:47:07.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:41.000000000 +0100 webfig

/home/web/webfig:
total 128
-rw-r--r-- 1 root root 123893 2026-06-02 10:47:07.000000000 +0100 wlan6-322cf672eb63.jg.gz
-rwxr-xr-x 1 root root    105 2026-06-02 10:47:07.000000000 +0100 wlan6.info
lrwxrwxrwx 1 root root     24 2026-06-02 10:52:41.000000000 +0100 wlan6.jg.gz -> wlan6-322cf672eb63.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:47:38.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2026-06-02 10:47:24.000000000 +0100 modules

/lib/firmware:
total 604
-rw-r--r-- 1 root root   3516 2026-06-02 10:47:38.000000000 +0100 wil6210-cube.brd
-rw-r--r-- 1 root root   1148 2026-06-02 10:47:38.000000000 +0100 wil6210-cube.msg
-rw-r--r-- 1 root root   3516 2026-06-02 10:47:38.000000000 +0100 wil6210-lhg-span2.8.brd
-rw-r--r-- 1 root root   1100 2026-06-02 10:47:38.000000000 +0100 wil6210-lhg-span2.8.msg
-rw-r--r-- 1 root root   3516 2026-06-02 10:47:38.000000000 +0100 wil6210-nray.brd
-rw-r--r-- 1 root root   1059 2026-06-02 10:47:38.000000000 +0100 wil6210-nray.msg
-rw-r--r-- 1 root root   3516 2026-06-02 10:47:38.000000000 +0100 wil6210-wap60g-60deg.brd
-rw-r--r-- 1 root root   1292 2026-06-02 10:47:38.000000000 +0100 wil6210-wap60g-60deg.msg
-rw-r--r-- 1 root root   3516 2026-06-02 10:47:38.000000000 +0100 wil6210-wap60g-omni.brd
-rw-r--r-- 1 root root   6668 2026-06-02 10:47:38.000000000 +0100 wil6210-wap60g-sa-dir.brd
-rw-r--r-- 1 root root   6668 2026-06-02 10:47:38.000000000 +0100 wil6210-wap60g-sa-omni.brd
-rw-r--r-- 1 root root 561268 2026-06-02 10:47:38.000000000 +0100 wil6210.fw

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-06-02 10:52:03.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-06-02 10:47:24.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2026-06-02 10:51:53.000000000 +0100 misc
-rw-r--r-- 1 root root   95 2026-06-02 10:52:07.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:47:37.000000000 +0100 net

/lib/modules/5.6.3/drivers/net:
total 116
-rw-r--r-- 1 root root 118080 2026-06-02 10:47:37.000000000 +0100 wil6210.ko

/lib/modules/5.6.3/misc:
total 628
-rw-r--r-- 1 root root  64384 2026-06-02 10:48:27.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root   3200 2026-06-02 10:48:27.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root 571088 2026-06-02 10:51:53.000000000 +0100 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:41.000000000 +0100 bin
drwxr-xr-x 5 root root 4096 2026-06-02 10:52:41.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-06-02 10:52:41.000000000 +0100 lib

/nova/bin:
total 844
-rwxr-xr-x 1 root root 861552 2026-06-02 10:50:52.000000000 +0100 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2026-06-02 10:46:39.000000000 +0100 net-remote
drwxr-xr-x 2 root root  4096 2026-06-02 10:46:39.000000000 +0100 pciinfo
drwxr-xr-x 2 root root  4096 2026-06-02 10:46:39.000000000 +0100 radius
-rw-r--r-- 1 root root 14687 2026-05-26 11:47:44.000000000 +0100 wirelessmfg
-rw-r--r-- 1 root root 72923 2026-04-21 14:58:49.000000000 +0100 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2026-06-02 10:46:38.000000000 +0100 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3495 2026-06-02 10:46:38.000000000 +0100 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2026-06-02 10:46:38.000000000 +0100 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:52:41.000000000 +0100 console

/nova/lib/console:
total 312
-rwxr-xr-x 1 root root 316755 2026-06-02 10:45:53.000000000 +0100 1107296256.mem
```

