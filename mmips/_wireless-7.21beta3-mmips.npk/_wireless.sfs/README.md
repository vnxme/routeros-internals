### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 1422762 bytes, 59 inodes, blocksize: 262144 bytes, created: Tue Oct 14 13:56:17 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-10-14 14:42:02.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-10-14 14:44:16.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-14 14:47:28.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:42:02.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:42:02.000000000 +0100 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19325 2025-10-14 14:42:02.000000000 +0100 wlan6-4927b5085f84.jg.gz
-rwxr-xr-x 1 root root   107 2025-10-14 14:42:02.000000000 +0100 wlan6.info
lrwxrwxrwx 1 root root    24 2025-10-14 14:42:02.000000000 +0100 wlan6.jg.gz -> wlan6-4927b5085f84.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:47:21.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2025-10-14 14:41:09.000000000 +0100 modules

/lib/firmware:
total 816
-rw-r--r-- 1 root root 216338 2025-10-14 14:47:21.000000000 +0100 QCA9984-fw.bin
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
drwxr-xr-x 4 root root 4096 2025-10-14 14:55:58.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-10-14 14:41:09.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2025-10-14 14:55:38.000000000 +0100 misc
-rw-r--r-- 1 root root  316 2025-10-14 14:56:00.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:46:51.000000000 +0100 net

/lib/modules/5.6.3/drivers/net:
total 1336
-rw-r--r-- 1 root root  41120 2025-10-14 14:44:50.000000000 +0100 a5211.ko
-rw-r--r-- 1 root root   4532 2025-10-14 14:44:50.000000000 +0100 a5211_pci.ko
-rw-r--r-- 1 root root 143568 2025-10-14 14:42:22.000000000 +0100 a5212.ko
-rw-r--r-- 1 root root   7588 2025-10-14 14:42:20.000000000 +0100 a5212_pci.ko
-rw-r--r-- 1 root root 221264 2025-10-14 14:43:18.000000000 +0100 a5416.ko
-rw-r--r-- 1 root root   9016 2025-10-14 14:43:18.000000000 +0100 a5416_pci.ko
-rw-r--r-- 1 root root 343432 2025-10-14 14:46:50.000000000 +0100 a9300.ko
-rw-r--r-- 1 root root  10212 2025-10-14 14:46:50.000000000 +0100 a9300_pci.ko
-rw-r--r-- 1 root root 203036 2025-10-14 14:46:20.000000000 +0100 ar9888_pci.ko
-rw-r--r-- 1 root root 166716 2025-10-14 14:45:10.000000000 +0100 ath.ko
-rw-r--r-- 1 root root  91868 2025-10-14 14:46:31.000000000 +0100 qca9984_pci.ko
-rw-r--r-- 1 root root  96924 2025-10-14 14:44:16.000000000 +0100 wil6210.ko

/lib/modules/5.6.3/misc:
total 468
-rw-r--r-- 1 root root  43804 2025-10-14 14:46:19.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root   2016 2025-10-14 14:46:19.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root   2100 2025-10-14 14:46:12.000000000 +0100 ipv6stub.ko
-rw-r--r-- 1 root root 422692 2025-10-14 14:55:38.000000000 +0100 wlan.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-14 14:53:13.000000000 +0100 bin
drwxr-xr-x 5 root root 4096 2025-10-14 14:56:17.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-14 14:37:39.000000000 +0100 lib

/nova/bin:
total 912
-rwxr-xr-x 1 root root 931496 2025-10-14 14:53:13.000000000 +0100 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2025-10-14 14:39:55.000000000 +0100 net-remote
drwxr-xr-x 2 root root  4096 2025-10-14 14:39:55.000000000 +0100 pciinfo
drwxr-xr-x 2 root root  4096 2025-10-14 14:39:55.000000000 +0100 radius
-rw-r--r-- 1 root root 14683 2025-10-14 13:49:58.000000000 +0100 wirelessmfg
-rw-r--r-- 1 root root 72923 2025-10-14 13:49:58.000000000 +0100 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2025-10-14 14:39:55.000000000 +0100 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3898 2025-10-14 14:39:55.000000000 +0100 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-10-14 14:39:55.000000000 +0100 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:37:39.000000000 +0100 console

/nova/lib/console:
total 324
-rwxr-xr-x 1 root root 330870 2025-10-14 14:37:39.000000000 +0100 1107296256.mem
```

