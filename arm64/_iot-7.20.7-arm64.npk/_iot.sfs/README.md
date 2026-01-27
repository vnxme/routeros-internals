### iot.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 720728 bytes, 39 inodes, blocksize: 524288 bytes, created: Thu Jan  8 10:34:27 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 2 root root 4096 2026-01-08 10:28:59.000000000 +0000 distros
drwxr-xr-x 2 root root 4096 2026-01-08 10:34:27.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-08 10:28:59.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-08 10:28:38.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2026-01-08 10:34:27.000000000 +0000 nova

/distros:
total 328
-rwxr-xr-x 1 root root 120649 2025-11-25 05:49:20.000000000 +0000 lora_gw_2g4.dist
-rwxr-xr-x 1 root root 106554 2025-11-25 05:49:20.000000000 +0000 lora_r11lr89.dist
-rwxr-xr-x 1 root root 102135 2025-12-03 07:17:20.000000000 +0000 lora_r11lr89G.dist

/etc:
total 124
-rw-r--r-- 1 root root 122940 2025-12-04 12:00:20.000000000 +0000 rb-hci_app_cap_ax_1.8.3.bin

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:28:59.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:34:27.000000000 +0000 webfig

/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4642 2026-01-08 10:28:59.000000000 +0000 iot-dcbaed267673.jg.gz
-rwxr-xr-x 1 root root   99 2026-01-08 10:28:59.000000000 +0000 iot.info
lrwxrwxrwx 1 root root   22 2026-01-08 10:34:27.000000000 +0000 iot.jg.gz -> iot-dcbaed267673.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:28:38.000000000 +0000 modules

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-01-08 10:34:16.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-01-08 10:28:38.000000000 +0000 drivers
drwxr-xr-x 4 root root 4096 2026-01-08 10:34:12.000000000 +0000 kernel
-rw-r--r-- 1 root root   54 2026-01-08 10:34:20.000000000 +0000 modules.dep.iot

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:28:44.000000000 +0000 bluetooth

/lib/modules/5.6.3/drivers/bluetooth:
total 32
-rw-r--r-- 1 root root 29928 2026-01-08 10:28:44.000000000 +0000 nrf52.ko

/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:34:12.000000000 +0000 crypto
drwxr-xr-x 3 root root 4096 2026-01-08 10:34:12.000000000 +0000 net

/lib/modules/5.6.3/kernel/crypto:
total 28
-rw-r--r-- 1 root root 19592 2026-01-08 10:23:50.000000000 +0000 ecc.ko
-rw-r--r-- 1 root root  6936 2026-01-08 10:23:50.000000000 +0000 ecdh_generic.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:34:12.000000000 +0000 bluetooth

/lib/modules/5.6.3/kernel/net/bluetooth:
total 412
-rw-r--r-- 1 root root 421336 2026-01-08 10:23:59.000000000 +0000 bluetooth.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:34:27.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2026-01-08 10:34:27.000000000 +0000 lib

/nova/bin:
total 820
-rwxr-xr-x 1 root root 137252 2026-01-08 10:28:08.000000000 +0000 bluetooth
-rwxr-xr-x 1 root root  30444 2026-01-08 10:29:52.000000000 +0000 gpio
-rwxr-xr-x 1 root root 352004 2026-01-08 10:30:57.000000000 +0000 lora
-rwxr-xr-x 1 root root  13616 2026-01-08 10:31:00.000000000 +0000 lora-updater
-rwxr-xr-x 1 root root 207920 2026-01-08 10:32:56.000000000 +0000 lora-worker
-rwxr-xr-x 1 root root  34568 2026-01-08 10:29:18.000000000 +0000 modbus
-rwxr-xr-x 1 root root  50952 2026-01-08 10:29:48.000000000 +0000 mqtt

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:34:27.000000000 +0000 console

/nova/lib/console:
total 112
-rwxr-xr-x 1 root root 110663 2026-01-08 10:28:38.000000000 +0000 1270874112.mem
```

