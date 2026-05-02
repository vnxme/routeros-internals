### wireless.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 2785782 bytes, 158 inodes, blocksize: 262144 bytes, created: Wed Apr 22 08:31:10 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:33.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2026-04-22 09:27:02.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-04-22 09:28:15.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:33.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:33.000000000 +0100 webfig

/home/web/webfig:
total 128
-rw-r--r-- 1 root root 124389 2026-04-22 09:24:33.000000000 +0100 wlan6-9770341673db.jg.gz
-rwxr-xr-x 1 root root    105 2026-04-22 09:24:33.000000000 +0100 wlan6.info
lrwxrwxrwx 1 root root     24 2026-04-22 09:24:33.000000000 +0100 wlan6.jg.gz -> wlan6-9770341673db.jg.gz

/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:27:02.000000000 +0100 firmware
drwxr-xr-x 6 root root 4096 2026-04-22 09:31:10.000000000 +0100 modules

/lib/firmware:
total 212
-rw-r--r-- 1 root root 216338 2026-04-22 09:27:02.000000000 +0100 QCA9984-fw.bin

/lib/modules:
total 16
drwxr-xr-x 4 root root 4096 2026-04-22 09:30:48.000000000 +0100 5.6.3
drwxr-xr-x 4 root root 4096 2026-04-22 09:31:10.000000000 +0100 5.6.3-440
drwxr-xr-x 4 root root 4096 2026-04-22 09:31:10.000000000 +0100 5.6.3-e500
drwxr-xr-x 4 root root 4096 2026-04-22 09:31:10.000000000 +0100 5.6.3-smp

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:25:55.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2026-04-22 09:30:18.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2026-04-22 09:30:52.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:27:55.000000000 +0100 net

/lib/modules/5.6.3/drivers/net:
total 1276
-rw-r--r-- 1 root root  41224 2026-04-22 09:26:12.000000000 +0100 a5211.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:12.000000000 +0100 a5211.ko.plt
-rw-r--r-- 1 root root   4688 2026-04-22 09:26:12.000000000 +0100 a5211_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:12.000000000 +0100 a5211_pci.ko.plt
-rw-r--r-- 1 root root 144880 2026-04-22 09:26:39.000000000 +0100 a5212.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:39.000000000 +0100 a5212.ko.plt
-rw-r--r-- 1 root root   5256 2026-04-22 09:26:38.000000000 +0100 a5212_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:38.000000000 +0100 a5212_pci.ko.plt
-rw-r--r-- 1 root root 222664 2026-04-22 09:26:38.000000000 +0100 a5416.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:38.000000000 +0100 a5416.ko.plt
-rw-r--r-- 1 root root   9120 2026-04-22 09:26:37.000000000 +0100 a5416_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:37.000000000 +0100 a5416_pci.ko.plt
-rw-r--r-- 1 root root 343316 2026-04-22 09:26:57.000000000 +0100 a9300.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:57.000000000 +0100 a9300.ko.plt
-rw-r--r-- 1 root root   9320 2026-04-22 09:26:57.000000000 +0100 a9300_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:57.000000000 +0100 a9300_pci.ko.plt
-rw-r--r-- 1 root root 212412 2026-04-22 09:26:59.000000000 +0100 ar9888_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:59.000000000 +0100 ar9888_pci.ko.plt
-rw-r--r-- 1 root root 186160 2026-04-22 09:27:55.000000000 +0100 ath.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:27:55.000000000 +0100 ath.ko.plt
-rw-r--r-- 1 root root 102124 2026-04-22 09:26:56.000000000 +0100 qca9984_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:56.000000000 +0100 qca9984_pci.ko.plt

/lib/modules/5.6.3/misc:
total 516
-rw-r--r-- 1 root root  49732 2026-04-22 09:27:08.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:27:08.000000000 +0100 capsman.ko.plt
-rw-r--r-- 1 root root   1768 2026-04-22 09:27:07.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:27:07.000000000 +0100 capsmanglue.ko.plt
-rw-r--r-- 1 root root 468896 2026-04-22 09:30:18.000000000 +0100 wlan.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:30:18.000000000 +0100 wlan.ko.plt

/lib/modules/5.6.3-440:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:31:10.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2026-04-22 09:31:10.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2026-04-22 09:30:55.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3-440/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:31:10.000000000 +0100 net

/lib/modules/5.6.3-440/drivers/net:
total 1280
-rw-r--r-- 1 root root  41372 2026-04-22 09:26:12.000000000 +0100 a5211.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:12.000000000 +0100 a5211.ko.plt
-rw-r--r-- 1 root root   4720 2026-04-22 09:26:11.000000000 +0100 a5211_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:11.000000000 +0100 a5211_pci.ko.plt
-rw-r--r-- 1 root root 145016 2026-04-22 09:26:39.000000000 +0100 a5212.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:39.000000000 +0100 a5212.ko.plt
-rw-r--r-- 1 root root   5288 2026-04-22 09:26:38.000000000 +0100 a5212_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:38.000000000 +0100 a5212_pci.ko.plt
-rw-r--r-- 1 root root 222828 2026-04-22 09:26:37.000000000 +0100 a5416.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:37.000000000 +0100 a5416.ko.plt
-rw-r--r-- 1 root root   9152 2026-04-22 09:26:37.000000000 +0100 a5416_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:37.000000000 +0100 a5416_pci.ko.plt
-rw-r--r-- 1 root root 343544 2026-04-22 09:26:57.000000000 +0100 a9300.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:57.000000000 +0100 a9300.ko.plt
-rw-r--r-- 1 root root   9416 2026-04-22 09:26:57.000000000 +0100 a9300_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:57.000000000 +0100 a9300_pci.ko.plt
-rw-r--r-- 1 root root 212768 2026-04-22 09:26:59.000000000 +0100 ar9888_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:59.000000000 +0100 ar9888_pci.ko.plt
-rw-r--r-- 1 root root 186128 2026-04-22 09:27:55.000000000 +0100 ath.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:27:55.000000000 +0100 ath.ko.plt
-rw-r--r-- 1 root root 102680 2026-04-22 09:26:56.000000000 +0100 qca9984_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:56.000000000 +0100 qca9984_pci.ko.plt

/lib/modules/5.6.3-440/misc:
total 516
-rw-r--r-- 1 root root  49732 2026-04-22 09:27:08.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:27:08.000000000 +0100 capsman.ko.plt
-rw-r--r-- 1 root root   1800 2026-04-22 09:27:08.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:27:08.000000000 +0100 capsmanglue.ko.plt
-rw-r--r-- 1 root root 468864 2026-04-22 09:30:18.000000000 +0100 wlan.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:30:18.000000000 +0100 wlan.ko.plt

/lib/modules/5.6.3-e500:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:31:10.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2026-04-22 09:31:10.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2026-04-22 09:30:57.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3-e500/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:31:10.000000000 +0100 net

/lib/modules/5.6.3-e500/drivers/net:
total 1276
-rw-r--r-- 1 root root  41320 2026-04-22 09:26:12.000000000 +0100 a5211.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:12.000000000 +0100 a5211.ko.plt
-rw-r--r-- 1 root root   4720 2026-04-22 09:26:12.000000000 +0100 a5211_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:12.000000000 +0100 a5211_pci.ko.plt
-rw-r--r-- 1 root root 144920 2026-04-22 09:26:39.000000000 +0100 a5212.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:39.000000000 +0100 a5212.ko.plt
-rw-r--r-- 1 root root   5288 2026-04-22 09:26:39.000000000 +0100 a5212_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:39.000000000 +0100 a5212_pci.ko.plt
-rw-r--r-- 1 root root 222768 2026-04-22 09:26:38.000000000 +0100 a5416.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:38.000000000 +0100 a5416.ko.plt
-rw-r--r-- 1 root root   9152 2026-04-22 09:26:38.000000000 +0100 a5416_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:37.000000000 +0100 a5416_pci.ko.plt
-rw-r--r-- 1 root root 343388 2026-04-22 09:26:57.000000000 +0100 a9300.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:57.000000000 +0100 a9300.ko.plt
-rw-r--r-- 1 root root   9416 2026-04-22 09:26:57.000000000 +0100 a9300_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:57.000000000 +0100 a9300_pci.ko.plt
-rw-r--r-- 1 root root 212480 2026-04-22 09:26:59.000000000 +0100 ar9888_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:59.000000000 +0100 ar9888_pci.ko.plt
-rw-r--r-- 1 root root 186128 2026-04-22 09:27:55.000000000 +0100 ath.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:27:55.000000000 +0100 ath.ko.plt
-rw-r--r-- 1 root root 102352 2026-04-22 09:26:56.000000000 +0100 qca9984_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:56.000000000 +0100 qca9984_pci.ko.plt

/lib/modules/5.6.3-e500/misc:
total 516
-rw-r--r-- 1 root root  49732 2026-04-22 09:27:08.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:27:08.000000000 +0100 capsman.ko.plt
-rw-r--r-- 1 root root   1800 2026-04-22 09:27:08.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:27:08.000000000 +0100 capsmanglue.ko.plt
-rw-r--r-- 1 root root 468864 2026-04-22 09:30:18.000000000 +0100 wlan.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:30:18.000000000 +0100 wlan.ko.plt

/lib/modules/5.6.3-smp:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:31:10.000000000 +0100 drivers
drwxr-xr-x 2 root root 4096 2026-04-22 09:31:10.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2026-04-22 09:31:00.000000000 +0100 modules.dep.wireless

/lib/modules/5.6.3-smp/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:31:10.000000000 +0100 net

/lib/modules/5.6.3-smp/drivers/net:
total 1288
-rw-r--r-- 1 root root  41352 2026-04-22 09:26:12.000000000 +0100 a5211.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:12.000000000 +0100 a5211.ko.plt
-rw-r--r-- 1 root root   4752 2026-04-22 09:26:11.000000000 +0100 a5211_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:11.000000000 +0100 a5211_pci.ko.plt
-rw-r--r-- 1 root root 145728 2026-04-22 09:26:39.000000000 +0100 a5212.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:39.000000000 +0100 a5212.ko.plt
-rw-r--r-- 1 root root   5320 2026-04-22 09:26:39.000000000 +0100 a5212_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:39.000000000 +0100 a5212_pci.ko.plt
-rw-r--r-- 1 root root 223572 2026-04-22 09:26:38.000000000 +0100 a5416.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:38.000000000 +0100 a5416.ko.plt
-rw-r--r-- 1 root root   9376 2026-04-22 09:26:38.000000000 +0100 a5416_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:38.000000000 +0100 a5416_pci.ko.plt
-rw-r--r-- 1 root root 344440 2026-04-22 09:26:57.000000000 +0100 a9300.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:57.000000000 +0100 a9300.ko.plt
-rw-r--r-- 1 root root   9608 2026-04-22 09:26:57.000000000 +0100 a9300_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:57.000000000 +0100 a9300_pci.ko.plt
-rw-r--r-- 1 root root 213792 2026-04-22 09:26:59.000000000 +0100 ar9888_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:59.000000000 +0100 ar9888_pci.ko.plt
-rw-r--r-- 1 root root 187496 2026-04-22 09:27:55.000000000 +0100 ath.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:27:55.000000000 +0100 ath.ko.plt
-rw-r--r-- 1 root root 103504 2026-04-22 09:26:56.000000000 +0100 qca9984_pci.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:26:56.000000000 +0100 qca9984_pci.ko.plt

/lib/modules/5.6.3-smp/misc:
total 520
-rw-r--r-- 1 root root  50580 2026-04-22 09:27:09.000000000 +0100 capsman.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:27:09.000000000 +0100 capsman.ko.plt
-rw-r--r-- 1 root root   1832 2026-04-22 09:27:08.000000000 +0100 capsmanglue.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:27:08.000000000 +0100 capsmanglue.ko.plt
-rw-r--r-- 1 root root 472696 2026-04-22 09:30:19.000000000 +0100 wlan.ko
-rw-r--r-- 1 root root      0 2026-04-22 09:30:19.000000000 +0100 wlan.ko.plt

/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:28:44.000000000 +0100 bin
drwxr-xr-x 5 root root 4096 2026-04-22 09:31:10.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:24.000000000 +0100 lib

/nova/bin:
total 1032
-rwxr-xr-x 1 root root 1054060 2026-04-22 09:28:44.000000000 +0100 wireless

/nova/etc:
total 100
drwxr-xr-x 2 root root  4096 2026-04-22 09:24:18.000000000 +0100 net-remote
drwxr-xr-x 2 root root  4096 2026-04-22 09:24:18.000000000 +0100 pciinfo
drwxr-xr-x 2 root root  4096 2026-04-22 09:24:18.000000000 +0100 radius
-rw-r--r-- 1 root root 14687 2026-04-21 16:18:32.000000000 +0100 wirelessmfg
-rw-r--r-- 1 root root 72923 2026-04-21 14:58:49.000000000 +0100 wirelessrd

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 999 2026-04-22 09:24:18.000000000 +0100 wireless.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 3358 2026-04-22 09:24:18.000000000 +0100 wireless.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2026-04-22 09:24:18.000000000 +0100 wireless.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:24.000000000 +0100 console

/nova/lib/console:
total 324
-rwxr-xr-x 1 root root 331774 2026-04-22 09:24:24.000000000 +0100 1107296256.mem
```

