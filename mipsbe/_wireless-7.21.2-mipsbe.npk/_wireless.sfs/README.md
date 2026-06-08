### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 1421194 bytes, 62 inodes, blocksize: 262144 bytes, created: Thu Jan 29 11:06:15 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 10:52:05.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2026-01-29 10:49:47.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-29 10:56:29.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:52:05.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:52:05.000000000 +0000 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19325 2026-01-29 10:52:05.000000000 +0000 wlan6-4927b5085f84.jg.gz
-rwxr-xr-x 1 root root   104 2026-01-29 10:52:05.000000000 +0000 wlan6.info
lrwxrwxrwx 1 root root    24 2026-01-29 10:52:05.000000000 +0000 wlan6.jg.gz -> wlan6-4927b5085f84.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:04.000000000 +0000 firmware
drwxr-xr-x 3 root root 4096 2026-01-29 10:49:47.000000000 +0000 modules

/lib/firmware:
total 840
-rw-r--r-- 1 root root 216338 2026-01-29 10:57:04.000000000 +0000 QCA9984-fw.bin
-rwxr-xr-x 1 root root   9023 2025-11-14 09:52:02.000000000 +0000 QCA9984-otp.bin
-rwxr-xr-x 1 root root  12064 2025-11-14 09:52:02.000000000 +0000 boardData_QCA9984_001.bin
-rw-r--r-- 1 root root   3516 2026-01-29 10:53:52.000000000 +0000 wil6210-cube.brd
-rw-r--r-- 1 root root   1148 2026-01-29 10:53:52.000000000 +0000 wil6210-cube.msg
-rw-r--r-- 1 root root   3516 2026-01-29 10:53:52.000000000 +0000 wil6210-lhg-span2.8.brd
-rw-r--r-- 1 root root   1100 2026-01-29 10:53:52.000000000 +0000 wil6210-lhg-span2.8.msg
-rw-r--r-- 1 root root   3516 2026-01-29 10:53:52.000000000 +0000 wil6210-nray.brd
-rw-r--r-- 1 root root   1059 2026-01-29 10:53:52.000000000 +0000 wil6210-nray.msg
-rw-r--r-- 1 root root   3516 2026-01-29 10:53:52.000000000 +0000 wil6210-wap60g-60deg.brd
-rw-r--r-- 1 root root   1292 2026-01-29 10:53:52.000000000 +0000 wil6210-wap60g-60deg.msg
-rw-r--r-- 1 root root   3516 2026-01-29 10:53:52.000000000 +0000 wil6210-wap60g-omni.brd
-rw-r--r-- 1 root root   6668 2026-01-29 10:53:52.000000000 +0000 wil6210-wap60g-sa-dir.brd
-rw-r--r-- 1 root root   6668 2026-01-29 10:53:52.000000000 +0000 wil6210-wap60g-sa-omni.brd
-rw-r--r-- 1 root root 561268 2026-01-29 10:53:52.000000000 +0000 wil6210.fw

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-01-29 11:05:23.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 10:49:47.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2026-01-29 11:04:46.000000000 +0000 misc
-rw-r--r-- 1 root root  351 2026-01-29 11:05:31.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:56:41.000000000 +0000 net

/lib/modules/5.6.3/drivers/net:
total 1344
-rw-r--r-- 1 root root  41184 2026-01-29 10:50:45.000000000 +0000 a5211.ko
-rw-r--r-- 1 root root   4500 2026-01-29 10:50:45.000000000 +0000 a5211_pci.ko
-rw-r--r-- 1 root root 143252 2026-01-29 10:51:14.000000000 +0000 a5212.ko
-rw-r--r-- 1 root root   7556 2026-01-29 10:51:14.000000000 +0000 a5212_pci.ko
-rw-r--r-- 1 root root 221616 2026-01-29 10:51:42.000000000 +0000 a5416.ko
-rw-r--r-- 1 root root   9952 2026-01-29 10:51:42.000000000 +0000 a5416_pci.ko
-rw-r--r-- 1 root root 344168 2026-01-29 10:52:47.000000000 +0000 a9300.ko
-rw-r--r-- 1 root root   6932 2026-01-29 10:52:47.000000000 +0000 a9300_ahb.ko
-rw-r--r-- 1 root root  10084 2026-01-29 10:52:47.000000000 +0000 a9300_pci.ko
-rw-r--r-- 1 root root 204072 2026-01-29 10:55:08.000000000 +0000 ar9888_pci.ko
-rw-r--r-- 1 root root 166240 2026-01-29 10:54:48.000000000 +0000 ath.ko
-rw-r--r-- 1 root root  92036 2026-01-29 10:56:40.000000000 +0000 qca9984_pci.ko
-rw-r--r-- 1 root root  94580 2026-01-29 10:53:51.000000000 +0000 wil6210.ko

/lib/modules/5.6.3/misc:
total 464
-rw-r--r-- 1 root root  42740 2026-01-29 10:53:10.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root   1984 2026-01-29 10:53:10.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root   2068 2026-01-29 10:53:02.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root 418428 2026-01-29 11:04:44.000000000 +0000 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:05.000000000 +0000 bin
drwxr-xr-x 5 root root 4096 2026-01-29 11:06:15.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-29 10:48:55.000000000 +0000 lib

/nova/bin:
total 912
-rwxr-xr-x 1 root root 932008 2026-01-29 11:00:05.000000000 +0000 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2026-01-29 10:48:38.000000000 +0000 net-remote
drwxr-xr-x 2 root root  4096 2026-01-29 10:48:38.000000000 +0000 pciinfo
drwxr-xr-x 2 root root  4096 2026-01-29 10:48:38.000000000 +0000 radius
-rw-r--r-- 1 root root 14683 2026-01-14 12:35:26.000000000 +0000 wirelessmfg
-rw-r--r-- 1 root root 72923 2026-01-14 12:35:26.000000000 +0000 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2026-01-29 10:48:38.000000000 +0000 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3898 2026-01-29 10:48:38.000000000 +0000 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2026-01-29 10:48:38.000000000 +0000 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:48:55.000000000 +0000 console

/nova/lib/console:
total 324
-rwxr-xr-x 1 root root 330822 2026-01-29 10:48:55.000000000 +0000 1107296256.mem
```

