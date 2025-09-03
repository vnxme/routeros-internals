### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 2777902 bytes, 166 inodes, blocksize: 262144 bytes, created: Thu Jan 30 11:35:01 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-01-30 11:21:49.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-01-30 11:26:11.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-01-30 11:27:58.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:21:49.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:21:49.000000000 +0000 webfig

/home/web/webfig:
total 24
-rw-r--r-- 1 root root 19262 2025-01-30 11:21:48.000000000 +0000 wlan6-0bc9c1d5a532.jg.gz
-rwxr-xr-x 1 root root   104 2025-01-30 11:21:49.000000000 +0000 wlan6.info
lrwxrwxrwx 1 root root    24 2025-01-30 11:21:49.000000000 +0000 wlan6.jg.gz -> wlan6-0bc9c1d5a532.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:11.000000000 +0000 firmware
drwxr-xr-x 6 root root 4096 2025-01-30 11:35:01.000000000 +0000 modules

/lib/firmware:
total 212
-rw-r--r-- 1 root root 216338 2025-01-30 11:26:11.000000000 +0000 QCA9984-fw.bin

/lib/modules:
total 16
drwxr-xr-x 4 root root 4096 2025-01-30 11:34:43.000000000 +0000 5.6.3
drwxr-xr-x 4 root root 4096 2025-01-30 11:35:01.000000000 +0000 5.6.3-440
drwxr-xr-x 4 root root 4096 2025-01-30 11:35:01.000000000 +0000 5.6.3-e500
drwxr-xr-x 4 root root 4096 2025-01-30 11:35:01.000000000 +0000 5.6.3-smp

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-01-30 11:21:04.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2025-01-30 11:34:16.000000000 +0000 misc
-rw-r--r-- 1 root root  283 2025-01-30 11:34:45.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:03.000000000 +0000 net

/lib/modules/5.6.3/drivers/net:
total 1276
-rw-r--r-- 1 root root  41192 2025-01-30 11:22:19.000000000 +0000 a5211.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:22:19.000000000 +0000 a5211.ko.plt
-rw-r--r-- 1 root root   4688 2025-01-30 11:22:18.000000000 +0000 a5211_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:22:18.000000000 +0000 a5211_pci.ko.plt
-rw-r--r-- 1 root root 144848 2025-01-30 11:21:57.000000000 +0000 a5212.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:21:57.000000000 +0000 a5212.ko.plt
-rw-r--r-- 1 root root   5256 2025-01-30 11:21:56.000000000 +0000 a5212_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:21:56.000000000 +0000 a5212_pci.ko.plt
-rw-r--r-- 1 root root 222632 2025-01-30 11:22:00.000000000 +0000 a5416.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:21:59.000000000 +0000 a5416.ko.plt
-rw-r--r-- 1 root root   9120 2025-01-30 11:21:58.000000000 +0000 a5416_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:21:58.000000000 +0000 a5416_pci.ko.plt
-rw-r--r-- 1 root root 343252 2025-01-30 11:24:53.000000000 +0000 a9300.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:53.000000000 +0000 a9300.ko.plt
-rw-r--r-- 1 root root   9320 2025-01-30 11:24:52.000000000 +0000 a9300_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:51.000000000 +0000 a9300_pci.ko.plt
-rw-r--r-- 1 root root 212348 2025-01-30 11:24:37.000000000 +0000 ar9888_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:37.000000000 +0000 ar9888_pci.ko.plt
-rw-r--r-- 1 root root 185988 2025-01-30 11:26:03.000000000 +0000 ath.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:26:03.000000000 +0000 ath.ko.plt
-rw-r--r-- 1 root root 102028 2025-01-30 11:24:09.000000000 +0000 qca9984_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:09.000000000 +0000 qca9984_pci.ko.plt

/lib/modules/5.6.3/misc:
total 520
-rw-r--r-- 1 root root  49572 2025-01-30 11:24:31.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:31.000000000 +0000 capsman.ko.plt
-rw-r--r-- 1 root root   1768 2025-01-30 11:24:29.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:29.000000000 +0000 capsmanglue.ko.plt
-rw-r--r-- 1 root root   2064 2025-01-30 11:24:29.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:29.000000000 +0000 ipv6stub.ko.plt
-rw-r--r-- 1 root root 468864 2025-01-30 11:34:16.000000000 +0000 wlan.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:34:16.000000000 +0000 wlan.ko.plt

/lib/modules/5.6.3-440:
total 12
drwxr-xr-x 3 root root 4096 2025-01-30 11:35:01.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2025-01-30 11:35:01.000000000 +0000 misc
-rw-r--r-- 1 root root  283 2025-01-30 11:34:46.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3-440/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:35:01.000000000 +0000 net

/lib/modules/5.6.3-440/drivers/net:
total 1280
-rw-r--r-- 1 root root  41340 2025-01-30 11:22:19.000000000 +0000 a5211.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:22:19.000000000 +0000 a5211.ko.plt
-rw-r--r-- 1 root root   4720 2025-01-30 11:22:18.000000000 +0000 a5211_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:22:18.000000000 +0000 a5211_pci.ko.plt
-rw-r--r-- 1 root root 144952 2025-01-30 11:21:57.000000000 +0000 a5212.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:21:57.000000000 +0000 a5212.ko.plt
-rw-r--r-- 1 root root   5288 2025-01-30 11:21:57.000000000 +0000 a5212_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:21:57.000000000 +0000 a5212_pci.ko.plt
-rw-r--r-- 1 root root 222796 2025-01-30 11:22:00.000000000 +0000 a5416.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:22:00.000000000 +0000 a5416.ko.plt
-rw-r--r-- 1 root root   9152 2025-01-30 11:21:58.000000000 +0000 a5416_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:21:58.000000000 +0000 a5416_pci.ko.plt
-rw-r--r-- 1 root root 343512 2025-01-30 11:24:53.000000000 +0000 a9300.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:53.000000000 +0000 a9300.ko.plt
-rw-r--r-- 1 root root   9416 2025-01-30 11:24:52.000000000 +0000 a9300_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:52.000000000 +0000 a9300_pci.ko.plt
-rw-r--r-- 1 root root 212672 2025-01-30 11:24:37.000000000 +0000 ar9888_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:37.000000000 +0000 ar9888_pci.ko.plt
-rw-r--r-- 1 root root 185988 2025-01-30 11:26:03.000000000 +0000 ath.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:26:03.000000000 +0000 ath.ko.plt
-rw-r--r-- 1 root root 102584 2025-01-30 11:24:09.000000000 +0000 qca9984_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:09.000000000 +0000 qca9984_pci.ko.plt

/lib/modules/5.6.3-440/misc:
total 520
-rw-r--r-- 1 root root  49604 2025-01-30 11:24:31.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:31.000000000 +0000 capsman.ko.plt
-rw-r--r-- 1 root root   1800 2025-01-30 11:24:29.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:29.000000000 +0000 capsmanglue.ko.plt
-rw-r--r-- 1 root root   2064 2025-01-30 11:24:29.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:29.000000000 +0000 ipv6stub.ko.plt
-rw-r--r-- 1 root root 468864 2025-01-30 11:34:16.000000000 +0000 wlan.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:34:16.000000000 +0000 wlan.ko.plt

/lib/modules/5.6.3-e500:
total 12
drwxr-xr-x 3 root root 4096 2025-01-30 11:35:01.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2025-01-30 11:35:01.000000000 +0000 misc
-rw-r--r-- 1 root root  283 2025-01-30 11:34:48.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3-e500/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:35:01.000000000 +0000 net

/lib/modules/5.6.3-e500/drivers/net:
total 1276
-rw-r--r-- 1 root root  41288 2025-01-30 11:22:19.000000000 +0000 a5211.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:22:19.000000000 +0000 a5211.ko.plt
-rw-r--r-- 1 root root   4720 2025-01-30 11:22:18.000000000 +0000 a5211_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:22:18.000000000 +0000 a5211_pci.ko.plt
-rw-r--r-- 1 root root 144888 2025-01-30 11:21:57.000000000 +0000 a5212.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:21:57.000000000 +0000 a5212.ko.plt
-rw-r--r-- 1 root root   5288 2025-01-30 11:21:56.000000000 +0000 a5212_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:21:56.000000000 +0000 a5212_pci.ko.plt
-rw-r--r-- 1 root root 222736 2025-01-30 11:22:00.000000000 +0000 a5416.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:22:00.000000000 +0000 a5416.ko.plt
-rw-r--r-- 1 root root   9152 2025-01-30 11:21:59.000000000 +0000 a5416_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:21:59.000000000 +0000 a5416_pci.ko.plt
-rw-r--r-- 1 root root 343356 2025-01-30 11:24:53.000000000 +0000 a9300.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:53.000000000 +0000 a9300.ko.plt
-rw-r--r-- 1 root root   9416 2025-01-30 11:24:52.000000000 +0000 a9300_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:52.000000000 +0000 a9300_pci.ko.plt
-rw-r--r-- 1 root root 212416 2025-01-30 11:24:37.000000000 +0000 ar9888_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:37.000000000 +0000 ar9888_pci.ko.plt
-rw-r--r-- 1 root root 185988 2025-01-30 11:26:03.000000000 +0000 ath.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:26:03.000000000 +0000 ath.ko.plt
-rw-r--r-- 1 root root 102224 2025-01-30 11:24:09.000000000 +0000 qca9984_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:09.000000000 +0000 qca9984_pci.ko.plt

/lib/modules/5.6.3-e500/misc:
total 520
-rw-r--r-- 1 root root  49604 2025-01-30 11:24:31.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:31.000000000 +0000 capsman.ko.plt
-rw-r--r-- 1 root root   1800 2025-01-30 11:24:30.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:30.000000000 +0000 capsmanglue.ko.plt
-rw-r--r-- 1 root root   2064 2025-01-30 11:24:30.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:30.000000000 +0000 ipv6stub.ko.plt
-rw-r--r-- 1 root root 468864 2025-01-30 11:34:16.000000000 +0000 wlan.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:34:16.000000000 +0000 wlan.ko.plt

/lib/modules/5.6.3-smp:
total 12
drwxr-xr-x 3 root root 4096 2025-01-30 11:35:01.000000000 +0000 drivers
drwxr-xr-x 2 root root 4096 2025-01-30 11:35:01.000000000 +0000 misc
-rw-r--r-- 1 root root  283 2025-01-30 11:34:49.000000000 +0000 modules.dep.wireless

/lib/modules/5.6.3-smp/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:35:01.000000000 +0000 net

/lib/modules/5.6.3-smp/drivers/net:
total 1288
-rw-r--r-- 1 root root  41320 2025-01-30 11:22:19.000000000 +0000 a5211.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:22:19.000000000 +0000 a5211.ko.plt
-rw-r--r-- 1 root root   4752 2025-01-30 11:22:19.000000000 +0000 a5211_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:22:19.000000000 +0000 a5211_pci.ko.plt
-rw-r--r-- 1 root root 145664 2025-01-30 11:21:57.000000000 +0000 a5212.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:21:57.000000000 +0000 a5212.ko.plt
-rw-r--r-- 1 root root   5320 2025-01-30 11:21:57.000000000 +0000 a5212_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:21:57.000000000 +0000 a5212_pci.ko.plt
-rw-r--r-- 1 root root 223508 2025-01-30 11:22:00.000000000 +0000 a5416.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:22:00.000000000 +0000 a5416.ko.plt
-rw-r--r-- 1 root root   9376 2025-01-30 11:21:59.000000000 +0000 a5416_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:21:59.000000000 +0000 a5416_pci.ko.plt
-rw-r--r-- 1 root root 344408 2025-01-30 11:24:53.000000000 +0000 a9300.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:53.000000000 +0000 a9300.ko.plt
-rw-r--r-- 1 root root   9608 2025-01-30 11:24:53.000000000 +0000 a9300_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:53.000000000 +0000 a9300_pci.ko.plt
-rw-r--r-- 1 root root 213728 2025-01-30 11:24:37.000000000 +0000 ar9888_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:37.000000000 +0000 ar9888_pci.ko.plt
-rw-r--r-- 1 root root 187356 2025-01-30 11:26:03.000000000 +0000 ath.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:26:03.000000000 +0000 ath.ko.plt
-rw-r--r-- 1 root root 103408 2025-01-30 11:24:09.000000000 +0000 qca9984_pci.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:09.000000000 +0000 qca9984_pci.ko.plt

/lib/modules/5.6.3-smp/misc:
total 524
-rw-r--r-- 1 root root  50452 2025-01-30 11:24:31.000000000 +0000 capsman.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:31.000000000 +0000 capsman.ko.plt
-rw-r--r-- 1 root root   1832 2025-01-30 11:24:30.000000000 +0000 capsmanglue.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:30.000000000 +0000 capsmanglue.ko.plt
-rw-r--r-- 1 root root   2096 2025-01-30 11:24:30.000000000 +0000 ipv6stub.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:24:30.000000000 +0000 ipv6stub.ko.plt
-rw-r--r-- 1 root root 472664 2025-01-30 11:34:16.000000000 +0000 wlan.ko
-rw-r--r-- 1 root root      0 2025-01-30 11:34:16.000000000 +0000 wlan.ko.plt

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-01-30 11:30:57.000000000 +0000 bin
drwxr-xr-x 5 root root 4096 2025-01-30 11:35:01.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-01-30 11:18:15.000000000 +0000 lib

/nova/bin:
total 1032
-rwxr-xr-x 1 root root 1054024 2025-01-30 11:30:57.000000000 +0000 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2025-01-30 11:18:48.000000000 +0000 net-remote
drwxr-xr-x 2 root root  4096 2025-01-30 11:18:48.000000000 +0000 pciinfo
drwxr-xr-x 2 root root  4096 2025-01-30 11:18:48.000000000 +0000 radius
-rw-r--r-- 1 root root 14588 2025-01-30 10:29:47.000000000 +0000 wirelessmfg
-rw-r--r-- 1 root root 72923 2025-01-30 10:29:47.000000000 +0000 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2025-01-30 11:18:48.000000000 +0000 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3685 2025-01-30 11:18:48.000000000 +0000 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-01-30 11:18:48.000000000 +0000 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:18:15.000000000 +0000 console

/nova/lib/console:
total 324
-rwxr-xr-x 1 root root 328361 2025-01-30 11:18:15.000000000 +0000 1107296256.mem
```

