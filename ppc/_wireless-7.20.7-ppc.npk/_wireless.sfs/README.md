### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 2782242 bytes, 166 inodes, blocksize: 262144 bytes, created: Thu Jan  8 10:45:58 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2026-01-08 10:34:03.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2026-01-08 10:35:49.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-08 10:40:33.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:34:03.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:34:03.000000000 +0000 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19292 2026-01-08 10:34:02.000000000 +0000 wlan6-227d441e0664.jg.gz
-rwxr-xr-x 1 root root   104 2026-01-08 10:34:03.000000000 +0000 wlan6.info
lrwxrwxrwx 1 root root    24 2026-01-08 10:34:03.000000000 +0000 wlan6.jg.gz -> wlan6-227d441e0664.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:35:49.000000000 +0000 firmware
drwxr-xr-x 6 root root 4096 2026-01-08 10:45:57.000000000 +0000 modules

/lib/firmware:
total 212
-rw-r--r-- 1 root root 216338 2026-01-08 10:35:49.000000000 +0000 QCA9984-fw.bin

/lib/modules:
total 16
drwxr-xr-x 4 root root 4096 2026-01-08 10:45:35.000000000 +0000 5.6.3
drwxr-xr-x 4 root root 4096 2026-01-08 10:45:57.000000000 +0000 5.6.3-440
drwxr-xr-x 4 root root 4096 2026-01-08 10:45:57.000000000 +0000 5.6.3-e500
drwxr-xr-x 4 root root 4096 2026-01-08 10:45:57.000000000 +0000 5.6.3-smp

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-01-08 10:31:30.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2026-01-08 10:44:58.000000000 +0000 misc
-rw-r--r-- 1 root root  268 2026-01-08 10:45:37.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:35:50.000000000 +0000 net

/lib/modules/5.6.3/drivers/net:
total 1276
-rw-r--r-- 1 root root  41192 2026-01-08 10:32:17.000000000 +0000 a5211.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:32:17.000000000 +0000 a5211.ko.plt
-rw-r--r-- 1 root root   4688 2026-01-08 10:32:16.000000000 +0000 a5211_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:32:16.000000000 +0000 a5211_pci.ko.plt
-rw-r--r-- 1 root root 144848 2026-01-08 10:32:27.000000000 +0000 a5212.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:32:27.000000000 +0000 a5212.ko.plt
-rw-r--r-- 1 root root   5256 2026-01-08 10:32:26.000000000 +0000 a5212_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:32:26.000000000 +0000 a5212_pci.ko.plt
-rw-r--r-- 1 root root 222632 2026-01-08 10:33:24.000000000 +0000 a5416.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:33:24.000000000 +0000 a5416.ko.plt
-rw-r--r-- 1 root root   9120 2026-01-08 10:33:24.000000000 +0000 a5416_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:33:24.000000000 +0000 a5416_pci.ko.plt
-rw-r--r-- 1 root root 343284 2026-01-08 10:34:28.000000000 +0000 a9300.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:28.000000000 +0000 a9300.ko.plt
-rw-r--r-- 1 root root   9320 2026-01-08 10:34:26.000000000 +0000 a9300_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:26.000000000 +0000 a9300_pci.ko.plt
-rw-r--r-- 1 root root 212348 2026-01-08 10:33:45.000000000 +0000 ar9888_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:33:45.000000000 +0000 ar9888_pci.ko.plt
-rw-r--r-- 1 root root 185988 2026-01-08 10:35:50.000000000 +0000 ath.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:35:50.000000000 +0000 ath.ko.plt
-rw-r--r-- 1 root root 102060 2026-01-08 10:33:42.000000000 +0000 qca9984_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:33:42.000000000 +0000 qca9984_pci.ko.plt

/lib/modules/5.6.3/misc:
total 520
-rw-r--r-- 1 root root  49636 2026-01-08 10:34:04.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:04.000000000 +0000 capsman.ko.plt
-rw-r--r-- 1 root root   1768 2026-01-08 10:34:02.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:02.000000000 +0000 capsmanglue.ko.plt
-rw-r--r-- 1 root root   2064 2026-01-08 10:34:02.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:02.000000000 +0000 ipv6stub.ko.plt
-rw-r--r-- 1 root root 468864 2026-01-08 10:44:58.000000000 +0000 wlan.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:44:58.000000000 +0000 wlan.ko.plt

/lib/modules/5.6.3-440:
total 12
drwxr-xr-x 3 root root 4096 2026-01-08 10:45:57.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2026-01-08 10:45:57.000000000 +0000 misc
-rw-r--r-- 1 root root  268 2026-01-08 10:45:39.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3-440/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:45:57.000000000 +0000 net

/lib/modules/5.6.3-440/drivers/net:
total 1280
-rw-r--r-- 1 root root  41372 2026-01-08 10:32:17.000000000 +0000 a5211.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:32:17.000000000 +0000 a5211.ko.plt
-rw-r--r-- 1 root root   4720 2026-01-08 10:32:16.000000000 +0000 a5211_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:32:16.000000000 +0000 a5211_pci.ko.plt
-rw-r--r-- 1 root root 144984 2026-01-08 10:32:27.000000000 +0000 a5212.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:32:27.000000000 +0000 a5212.ko.plt
-rw-r--r-- 1 root root   5288 2026-01-08 10:32:26.000000000 +0000 a5212_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:32:26.000000000 +0000 a5212_pci.ko.plt
-rw-r--r-- 1 root root 222796 2026-01-08 10:33:24.000000000 +0000 a5416.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:33:24.000000000 +0000 a5416.ko.plt
-rw-r--r-- 1 root root   9152 2026-01-08 10:33:23.000000000 +0000 a5416_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:33:23.000000000 +0000 a5416_pci.ko.plt
-rw-r--r-- 1 root root 343544 2026-01-08 10:34:28.000000000 +0000 a9300.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:28.000000000 +0000 a9300.ko.plt
-rw-r--r-- 1 root root   9416 2026-01-08 10:34:27.000000000 +0000 a9300_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:27.000000000 +0000 a9300_pci.ko.plt
-rw-r--r-- 1 root root 212704 2026-01-08 10:33:45.000000000 +0000 ar9888_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:33:45.000000000 +0000 ar9888_pci.ko.plt
-rw-r--r-- 1 root root 185988 2026-01-08 10:35:50.000000000 +0000 ath.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:35:50.000000000 +0000 ath.ko.plt
-rw-r--r-- 1 root root 102616 2026-01-08 10:33:42.000000000 +0000 qca9984_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:33:42.000000000 +0000 qca9984_pci.ko.plt

/lib/modules/5.6.3-440/misc:
total 520
-rw-r--r-- 1 root root  49636 2026-01-08 10:34:04.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:04.000000000 +0000 capsman.ko.plt
-rw-r--r-- 1 root root   1800 2026-01-08 10:34:03.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:03.000000000 +0000 capsmanglue.ko.plt
-rw-r--r-- 1 root root   2064 2026-01-08 10:34:03.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:03.000000000 +0000 ipv6stub.ko.plt
-rw-r--r-- 1 root root 468864 2026-01-08 10:44:59.000000000 +0000 wlan.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:44:58.000000000 +0000 wlan.ko.plt

/lib/modules/5.6.3-e500:
total 12
drwxr-xr-x 3 root root 4096 2026-01-08 10:45:57.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2026-01-08 10:45:57.000000000 +0000 misc
-rw-r--r-- 1 root root  268 2026-01-08 10:45:41.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3-e500/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:45:57.000000000 +0000 net

/lib/modules/5.6.3-e500/drivers/net:
total 1276
-rw-r--r-- 1 root root  41320 2026-01-08 10:32:17.000000000 +0000 a5211.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:32:17.000000000 +0000 a5211.ko.plt
-rw-r--r-- 1 root root   4720 2026-01-08 10:32:17.000000000 +0000 a5211_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:32:17.000000000 +0000 a5211_pci.ko.plt
-rw-r--r-- 1 root root 144888 2026-01-08 10:32:27.000000000 +0000 a5212.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:32:27.000000000 +0000 a5212.ko.plt
-rw-r--r-- 1 root root   5288 2026-01-08 10:32:27.000000000 +0000 a5212_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:32:26.000000000 +0000 a5212_pci.ko.plt
-rw-r--r-- 1 root root 222736 2026-01-08 10:33:24.000000000 +0000 a5416.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:33:24.000000000 +0000 a5416.ko.plt
-rw-r--r-- 1 root root   9152 2026-01-08 10:33:23.000000000 +0000 a5416_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:33:23.000000000 +0000 a5416_pci.ko.plt
-rw-r--r-- 1 root root 343356 2026-01-08 10:34:29.000000000 +0000 a9300.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:29.000000000 +0000 a9300.ko.plt
-rw-r--r-- 1 root root   9416 2026-01-08 10:34:27.000000000 +0000 a9300_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:27.000000000 +0000 a9300_pci.ko.plt
-rw-r--r-- 1 root root 212416 2026-01-08 10:33:45.000000000 +0000 ar9888_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:33:45.000000000 +0000 ar9888_pci.ko.plt
-rw-r--r-- 1 root root 185988 2026-01-08 10:35:50.000000000 +0000 ath.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:35:50.000000000 +0000 ath.ko.plt
-rw-r--r-- 1 root root 102256 2026-01-08 10:33:42.000000000 +0000 qca9984_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:33:42.000000000 +0000 qca9984_pci.ko.plt

/lib/modules/5.6.3-e500/misc:
total 520
-rw-r--r-- 1 root root  49636 2026-01-08 10:34:04.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:04.000000000 +0000 capsman.ko.plt
-rw-r--r-- 1 root root   1800 2026-01-08 10:34:03.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:03.000000000 +0000 capsmanglue.ko.plt
-rw-r--r-- 1 root root   2064 2026-01-08 10:34:03.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:03.000000000 +0000 ipv6stub.ko.plt
-rw-r--r-- 1 root root 468864 2026-01-08 10:44:59.000000000 +0000 wlan.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:44:59.000000000 +0000 wlan.ko.plt

/lib/modules/5.6.3-smp:
total 12
drwxr-xr-x 3 root root 4096 2026-01-08 10:45:57.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2026-01-08 10:45:57.000000000 +0000 misc
-rw-r--r-- 1 root root  268 2026-01-08 10:45:43.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3-smp/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:45:57.000000000 +0000 net

/lib/modules/5.6.3-smp/drivers/net:
total 1288
-rw-r--r-- 1 root root  41352 2026-01-08 10:32:17.000000000 +0000 a5211.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:32:17.000000000 +0000 a5211.ko.plt
-rw-r--r-- 1 root root   4752 2026-01-08 10:32:17.000000000 +0000 a5211_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:32:17.000000000 +0000 a5211_pci.ko.plt
-rw-r--r-- 1 root root 145696 2026-01-08 10:32:27.000000000 +0000 a5212.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:32:27.000000000 +0000 a5212.ko.plt
-rw-r--r-- 1 root root   5320 2026-01-08 10:32:27.000000000 +0000 a5212_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:32:27.000000000 +0000 a5212_pci.ko.plt
-rw-r--r-- 1 root root 223540 2026-01-08 10:33:24.000000000 +0000 a5416.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:33:24.000000000 +0000 a5416.ko.plt
-rw-r--r-- 1 root root   9376 2026-01-08 10:33:24.000000000 +0000 a5416_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:33:24.000000000 +0000 a5416_pci.ko.plt
-rw-r--r-- 1 root root 344408 2026-01-08 10:34:29.000000000 +0000 a9300.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:29.000000000 +0000 a9300.ko.plt
-rw-r--r-- 1 root root   9608 2026-01-08 10:34:28.000000000 +0000 a9300_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:28.000000000 +0000 a9300_pci.ko.plt
-rw-r--r-- 1 root root 213728 2026-01-08 10:33:45.000000000 +0000 ar9888_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:33:45.000000000 +0000 ar9888_pci.ko.plt
-rw-r--r-- 1 root root 187356 2026-01-08 10:35:50.000000000 +0000 ath.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:35:50.000000000 +0000 ath.ko.plt
-rw-r--r-- 1 root root 103440 2026-01-08 10:33:42.000000000 +0000 qca9984_pci.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:33:42.000000000 +0000 qca9984_pci.ko.plt

/lib/modules/5.6.3-smp/misc:
total 524
-rw-r--r-- 1 root root  50516 2026-01-08 10:34:04.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:04.000000000 +0000 capsman.ko.plt
-rw-r--r-- 1 root root   1832 2026-01-08 10:34:04.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:04.000000000 +0000 capsmanglue.ko.plt
-rw-r--r-- 1 root root   2096 2026-01-08 10:34:03.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:34:03.000000000 +0000 ipv6stub.ko.plt
-rw-r--r-- 1 root root 472664 2026-01-08 10:44:59.000000000 +0000 wlan.ko
-rw-r--r-- 1 root root      0 2026-01-08 10:44:59.000000000 +0000 wlan.ko.plt

/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-08 10:44:18.000000000 +0000 bin
drwxr-xr-x 5 root root 4096 2026-01-08 10:45:57.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-08 10:28:15.000000000 +0000 lib

/nova/bin:
total 1032
-rwxr-xr-x 1 root root 1054040 2026-01-08 10:44:18.000000000 +0000 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2026-01-08 10:28:03.000000000 +0000 net-remote
drwxr-xr-x 2 root root  4096 2026-01-08 10:28:03.000000000 +0000 pciinfo
drwxr-xr-x 2 root root  4096 2026-01-08 10:28:03.000000000 +0000 radius
-rw-r--r-- 1 root root 14683 2025-12-04 12:00:27.000000000 +0000 wirelessmfg
-rw-r--r-- 1 root root 72923 2025-12-04 12:00:27.000000000 +0000 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2026-01-08 10:28:03.000000000 +0000 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3685 2026-01-08 10:28:03.000000000 +0000 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2026-01-08 10:28:03.000000000 +0000 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:28:15.000000000 +0000 console

/nova/lib/console:
total 356
-rwxr-xr-x 1 root root 361525 2026-01-08 10:28:15.000000000 +0000 1107296256.mem
```

