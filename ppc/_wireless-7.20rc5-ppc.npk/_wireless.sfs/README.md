### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 2781774 bytes, 166 inodes, blocksize: 262144 bytes, created: Fri Sep 26 09:51:59 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-09-26 10:38:33.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-09-26 10:39:39.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-09-26 10:41:24.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-09-26 10:38:33.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-09-26 10:38:33.000000000 +0100 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19292 2025-09-26 10:38:33.000000000 +0100 wlan6-227d441e0664.jg.gz
-rwxr-xr-x 1 root root   105 2025-09-26 10:38:33.000000000 +0100 wlan6.info
lrwxrwxrwx 1 root root    24 2025-09-26 10:38:33.000000000 +0100 wlan6.jg.gz -> wlan6-227d441e0664.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-09-26 10:39:39.000000000 +0100 firmware
drwxr-xr-x 6 root root 4096 2025-09-26 10:51:58.000000000 +0100 modules

/lib/firmware:
total 212
-rw-r--r-- 1 root root 216338 2025-09-26 10:39:39.000000000 +0100 QCA9984-fw.bin

/lib/modules:
total 16
drwxr-xr-x 4 root root 4096 2025-09-26 10:51:26.000000000 +0100 5.6.3
drwxr-xr-x 4 root root 4096 2025-09-26 10:51:58.000000000 +0100 5.6.3-440
drwxr-xr-x 4 root root 4096 2025-09-26 10:51:58.000000000 +0100 5.6.3-e500
drwxr-xr-x 4 root root 4096 2025-09-26 10:51:58.000000000 +0100 5.6.3-smp

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-09-26 10:35:44.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2025-09-26 10:50:39.000000000 +0100 misc
-rw-r--r-- 1 root root  268 2025-09-26 10:51:32.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-09-26 10:40:26.000000000 +0100 net

/lib/modules/5.6.3/drivers/net:
total 1276
-rw-r--r-- 1 root root  41192 2025-09-26 10:36:31.000000000 +0100 a5211.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:31.000000000 +0100 a5211.ko.plt
-rw-r--r-- 1 root root   4688 2025-09-26 10:36:30.000000000 +0100 a5211_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:30.000000000 +0100 a5211_pci.ko.plt
-rw-r--r-- 1 root root 144848 2025-09-26 10:36:38.000000000 +0100 a5212.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:38.000000000 +0100 a5212.ko.plt
-rw-r--r-- 1 root root   5256 2025-09-26 10:36:37.000000000 +0100 a5212_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:37.000000000 +0100 a5212_pci.ko.plt
-rw-r--r-- 1 root root 222600 2025-09-26 10:37:00.000000000 +0100 a5416.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:37:00.000000000 +0100 a5416.ko.plt
-rw-r--r-- 1 root root   9120 2025-09-26 10:36:59.000000000 +0100 a5416_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:59.000000000 +0100 a5416_pci.ko.plt
-rw-r--r-- 1 root root 343252 2025-09-26 10:38:32.000000000 +0100 a9300.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:32.000000000 +0100 a9300.ko.plt
-rw-r--r-- 1 root root   9320 2025-09-26 10:38:31.000000000 +0100 a9300_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:31.000000000 +0100 a9300_pci.ko.plt
-rw-r--r-- 1 root root 212316 2025-09-26 10:38:06.000000000 +0100 ar9888_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:05.000000000 +0100 ar9888_pci.ko.plt
-rw-r--r-- 1 root root 185988 2025-09-26 10:40:26.000000000 +0100 ath.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:40:26.000000000 +0100 ath.ko.plt
-rw-r--r-- 1 root root 102028 2025-09-26 10:39:00.000000000 +0100 qca9984_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:39:00.000000000 +0100 qca9984_pci.ko.plt

/lib/modules/5.6.3/misc:
total 520
-rw-r--r-- 1 root root  49572 2025-09-26 10:38:00.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:00.000000000 +0100 capsman.ko.plt
-rw-r--r-- 1 root root   1768 2025-09-26 10:37:58.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:37:58.000000000 +0100 capsmanglue.ko.plt
-rw-r--r-- 1 root root   2064 2025-09-26 10:37:58.000000000 +0100 ipv6stub.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:37:58.000000000 +0100 ipv6stub.ko.plt
-rw-r--r-- 1 root root 468864 2025-09-26 10:50:39.000000000 +0100 wlan.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:50:39.000000000 +0100 wlan.ko.plt

/lib/modules/5.6.3-440:
total 12
drwxr-xr-x 3 root root 4096 2025-09-26 10:51:58.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2025-09-26 10:51:58.000000000 +0100 misc
-rw-r--r-- 1 root root  268 2025-09-26 10:51:36.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3-440/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-09-26 10:51:58.000000000 +0100 net

/lib/modules/5.6.3-440/drivers/net:
total 1280
-rw-r--r-- 1 root root  41340 2025-09-26 10:36:31.000000000 +0100 a5211.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:31.000000000 +0100 a5211.ko.plt
-rw-r--r-- 1 root root   4720 2025-09-26 10:36:30.000000000 +0100 a5211_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:30.000000000 +0100 a5211_pci.ko.plt
-rw-r--r-- 1 root root 144952 2025-09-26 10:36:38.000000000 +0100 a5212.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:38.000000000 +0100 a5212.ko.plt
-rw-r--r-- 1 root root   5288 2025-09-26 10:36:37.000000000 +0100 a5212_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:37.000000000 +0100 a5212_pci.ko.plt
-rw-r--r-- 1 root root 222796 2025-09-26 10:37:00.000000000 +0100 a5416.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:37:00.000000000 +0100 a5416.ko.plt
-rw-r--r-- 1 root root   9152 2025-09-26 10:36:59.000000000 +0100 a5416_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:59.000000000 +0100 a5416_pci.ko.plt
-rw-r--r-- 1 root root 343512 2025-09-26 10:38:32.000000000 +0100 a9300.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:32.000000000 +0100 a9300.ko.plt
-rw-r--r-- 1 root root   9416 2025-09-26 10:38:31.000000000 +0100 a9300_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:31.000000000 +0100 a9300_pci.ko.plt
-rw-r--r-- 1 root root 212672 2025-09-26 10:38:06.000000000 +0100 ar9888_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:06.000000000 +0100 ar9888_pci.ko.plt
-rw-r--r-- 1 root root 185988 2025-09-26 10:40:26.000000000 +0100 ath.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:40:26.000000000 +0100 ath.ko.plt
-rw-r--r-- 1 root root 102584 2025-09-26 10:39:00.000000000 +0100 qca9984_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:39:00.000000000 +0100 qca9984_pci.ko.plt

/lib/modules/5.6.3-440/misc:
total 520
-rw-r--r-- 1 root root  49572 2025-09-26 10:38:01.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:00.000000000 +0100 capsman.ko.plt
-rw-r--r-- 1 root root   1800 2025-09-26 10:37:59.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:37:59.000000000 +0100 capsmanglue.ko.plt
-rw-r--r-- 1 root root   2064 2025-09-26 10:37:58.000000000 +0100 ipv6stub.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:37:58.000000000 +0100 ipv6stub.ko.plt
-rw-r--r-- 1 root root 468832 2025-09-26 10:50:39.000000000 +0100 wlan.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:50:39.000000000 +0100 wlan.ko.plt

/lib/modules/5.6.3-e500:
total 12
drwxr-xr-x 3 root root 4096 2025-09-26 10:51:58.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2025-09-26 10:51:58.000000000 +0100 misc
-rw-r--r-- 1 root root  268 2025-09-26 10:51:41.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3-e500/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-09-26 10:51:58.000000000 +0100 net

/lib/modules/5.6.3-e500/drivers/net:
total 1276
-rw-r--r-- 1 root root  41288 2025-09-26 10:36:31.000000000 +0100 a5211.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:31.000000000 +0100 a5211.ko.plt
-rw-r--r-- 1 root root   4720 2025-09-26 10:36:31.000000000 +0100 a5211_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:31.000000000 +0100 a5211_pci.ko.plt
-rw-r--r-- 1 root root 144888 2025-09-26 10:36:38.000000000 +0100 a5212.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:38.000000000 +0100 a5212.ko.plt
-rw-r--r-- 1 root root   5288 2025-09-26 10:36:37.000000000 +0100 a5212_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:37.000000000 +0100 a5212_pci.ko.plt
-rw-r--r-- 1 root root 222704 2025-09-26 10:37:01.000000000 +0100 a5416.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:37:01.000000000 +0100 a5416.ko.plt
-rw-r--r-- 1 root root   9152 2025-09-26 10:37:01.000000000 +0100 a5416_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:37:01.000000000 +0100 a5416_pci.ko.plt
-rw-r--r-- 1 root root 343356 2025-09-26 10:38:32.000000000 +0100 a9300.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:32.000000000 +0100 a9300.ko.plt
-rw-r--r-- 1 root root   9416 2025-09-26 10:38:32.000000000 +0100 a9300_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:32.000000000 +0100 a9300_pci.ko.plt
-rw-r--r-- 1 root root 212384 2025-09-26 10:38:06.000000000 +0100 ar9888_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:06.000000000 +0100 ar9888_pci.ko.plt
-rw-r--r-- 1 root root 185988 2025-09-26 10:40:26.000000000 +0100 ath.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:40:26.000000000 +0100 ath.ko.plt
-rw-r--r-- 1 root root 102224 2025-09-26 10:39:00.000000000 +0100 qca9984_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:39:00.000000000 +0100 qca9984_pci.ko.plt

/lib/modules/5.6.3-e500/misc:
total 520
-rw-r--r-- 1 root root  49572 2025-09-26 10:38:01.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:01.000000000 +0100 capsman.ko.plt
-rw-r--r-- 1 root root   1800 2025-09-26 10:37:59.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:37:59.000000000 +0100 capsmanglue.ko.plt
-rw-r--r-- 1 root root   2064 2025-09-26 10:37:59.000000000 +0100 ipv6stub.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:37:59.000000000 +0100 ipv6stub.ko.plt
-rw-r--r-- 1 root root 468832 2025-09-26 10:50:39.000000000 +0100 wlan.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:50:39.000000000 +0100 wlan.ko.plt

/lib/modules/5.6.3-smp:
total 12
drwxr-xr-x 3 root root 4096 2025-09-26 10:51:58.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2025-09-26 10:51:58.000000000 +0100 misc
-rw-r--r-- 1 root root  268 2025-09-26 10:51:45.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3-smp/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-09-26 10:51:58.000000000 +0100 net

/lib/modules/5.6.3-smp/drivers/net:
total 1288
-rw-r--r-- 1 root root  41320 2025-09-26 10:36:31.000000000 +0100 a5211.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:31.000000000 +0100 a5211.ko.plt
-rw-r--r-- 1 root root   4752 2025-09-26 10:36:31.000000000 +0100 a5211_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:31.000000000 +0100 a5211_pci.ko.plt
-rw-r--r-- 1 root root 145664 2025-09-26 10:36:38.000000000 +0100 a5212.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:38.000000000 +0100 a5212.ko.plt
-rw-r--r-- 1 root root   5320 2025-09-26 10:36:38.000000000 +0100 a5212_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:36:38.000000000 +0100 a5212_pci.ko.plt
-rw-r--r-- 1 root root 223508 2025-09-26 10:37:01.000000000 +0100 a5416.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:37:01.000000000 +0100 a5416.ko.plt
-rw-r--r-- 1 root root   9376 2025-09-26 10:37:00.000000000 +0100 a5416_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:37:00.000000000 +0100 a5416_pci.ko.plt
-rw-r--r-- 1 root root 344408 2025-09-26 10:38:32.000000000 +0100 a9300.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:32.000000000 +0100 a9300.ko.plt
-rw-r--r-- 1 root root   9608 2025-09-26 10:38:32.000000000 +0100 a9300_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:32.000000000 +0100 a9300_pci.ko.plt
-rw-r--r-- 1 root root 213696 2025-09-26 10:38:06.000000000 +0100 ar9888_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:06.000000000 +0100 ar9888_pci.ko.plt
-rw-r--r-- 1 root root 187356 2025-09-26 10:40:26.000000000 +0100 ath.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:40:26.000000000 +0100 ath.ko.plt
-rw-r--r-- 1 root root 103408 2025-09-26 10:39:00.000000000 +0100 qca9984_pci.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:39:00.000000000 +0100 qca9984_pci.ko.plt

/lib/modules/5.6.3-smp/misc:
total 524
-rw-r--r-- 1 root root  50452 2025-09-26 10:38:01.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:01.000000000 +0100 capsman.ko.plt
-rw-r--r-- 1 root root   1832 2025-09-26 10:38:00.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:38:00.000000000 +0100 capsmanglue.ko.plt
-rw-r--r-- 1 root root   2096 2025-09-26 10:37:59.000000000 +0100 ipv6stub.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:37:59.000000000 +0100 ipv6stub.ko.plt
-rw-r--r-- 1 root root 472664 2025-09-26 10:50:40.000000000 +0100 wlan.ko
-rw-r--r-- 1 root root      0 2025-09-26 10:50:40.000000000 +0100 wlan.ko.plt

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-09-26 10:43:13.000000000 +0100 bin
drwxr-xr-x 5 root root 4096 2025-09-26 10:51:58.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-09-26 10:34:19.000000000 +0100 lib

/nova/bin:
total 1032
-rwxr-xr-x 1 root root 1054040 2025-09-26 10:43:13.000000000 +0100 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2025-09-26 10:33:48.000000000 +0100 net-remote
drwxr-xr-x 2 root root  4096 2025-09-26 10:33:48.000000000 +0100 pciinfo
drwxr-xr-x 2 root root  4096 2025-09-26 10:33:48.000000000 +0100 radius
-rw-r--r-- 1 root root 14683 2025-09-26 09:44:42.000000000 +0100 wirelessmfg
-rw-r--r-- 1 root root 72923 2025-09-26 09:44:42.000000000 +0100 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2025-09-26 10:33:47.000000000 +0100 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3685 2025-09-26 10:33:47.000000000 +0100 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-09-26 10:33:47.000000000 +0100 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-09-26 10:34:19.000000000 +0100 console

/nova/lib/console:
total 356
-rwxr-xr-x 1 root root 361533 2025-09-26 10:34:19.000000000 +0100 1107296256.mem
```

