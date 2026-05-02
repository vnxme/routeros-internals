### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 873452 bytes, 46 inodes, blocksize: 524288 bytes, created: Wed Apr 22 08:31:03 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:33.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2026-04-22 09:26:13.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-04-22 09:31:03.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:33.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:31:03.000000000 +0100 webfig

/home/web/webfig:
total 128
-rw-r--r-- 1 root root 124389 2026-04-22 09:24:33.000000000 +0100 wlan6-9770341673db.jg.gz
-rwxr-xr-x 1 root root    105 2026-04-22 09:24:33.000000000 +0100 wlan6.info
lrwxrwxrwx 1 root root     24 2026-04-22 09:31:03.000000000 +0100 wlan6.jg.gz -> wlan6-9770341673db.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:26:13.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2026-04-22 09:25:59.000000000 +0100 modules

/lib/firmware:
total 604
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
drwxr-xr-x 4 root root 4096 2026-04-22 09:30:28.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:25:59.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2026-04-22 09:30:19.000000000 +0100 misc
-rw-r--r-- 1 root root   95 2026-04-22 09:30:31.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:26:13.000000000 +0100 net

/lib/modules/5.6.3/drivers/net:
total 116
-rw-r--r-- 1 root root 118080 2026-04-22 09:26:12.000000000 +0100 wil6210.ko

/lib/modules/5.6.3/misc:
total 628
-rw-r--r-- 1 root root  64384 2026-04-22 09:27:08.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root   3200 2026-04-22 09:27:05.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root 571088 2026-04-22 09:30:19.000000000 +0100 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:31:03.000000000 +0100 bin
drwxr-xr-x 5 root root 4096 2026-04-22 09:31:03.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-04-22 09:31:03.000000000 +0100 lib

/nova/bin:
total 844
-rwxr-xr-x 1 root root 861552 2026-04-22 09:28:47.000000000 +0100 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2026-04-22 09:24:18.000000000 +0100 net-remote
drwxr-xr-x 2 root root  4096 2026-04-22 09:24:18.000000000 +0100 pciinfo
drwxr-xr-x 2 root root  4096 2026-04-22 09:24:18.000000000 +0100 radius
-rw-r--r-- 1 root root 14687 2026-04-21 16:18:32.000000000 +0100 wirelessmfg
-rw-r--r-- 1 root root 72923 2026-04-21 14:58:49.000000000 +0100 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2026-04-22 09:24:17.000000000 +0100 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3495 2026-04-22 09:24:17.000000000 +0100 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2026-04-22 09:24:17.000000000 +0100 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:31:03.000000000 +0100 console

/nova/lib/console:
total 324
-rwxr-xr-x 1 root root 331774 2026-04-22 09:24:23.000000000 +0100 1107296256.mem
```

