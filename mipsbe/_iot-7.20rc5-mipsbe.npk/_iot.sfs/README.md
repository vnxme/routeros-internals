### iot.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 730638 bytes, 43 inodes, blocksize: 262144 bytes, created: Fri Sep 26 09:37:54 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 2 root root 4096 2025-09-26 10:32:43.000000000 +0100 distros
drwxr-xr-x 2 root root 4096 2025-09-26 10:37:54.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-09-26 10:32:43.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-09-26 10:31:23.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-09-26 10:31:37.000000000 +0100 nova

/distros:
total 340
-rwxr-xr-x 1 root root 120649 2025-09-26 09:43:54.000000000 +0100 lora_gw_2g4.dist
-rwxr-xr-x 1 root root 106554 2025-09-26 09:43:54.000000000 +0100 lora_r11lr89.dist
-rwxr-xr-x 1 root root 110806 2025-09-26 09:43:54.000000000 +0100 lora_r11lr89G.dist

/etc:
total 128
-rw-r--r-- 1 root root 129724 2025-09-26 09:43:54.000000000 +0100 rb-hci_app_rb924_1.8.3.bin

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-09-26 10:32:43.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-09-26 10:32:43.000000000 +0100 webfig

/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4642 2025-09-26 10:32:43.000000000 +0100 iot-dcbaed267673.jg.gz
-rwxr-xr-x 1 root root  100 2025-09-26 10:32:43.000000000 +0100 iot.info
lrwxrwxrwx 1 root root   22 2025-09-26 10:32:43.000000000 +0100 iot.jg.gz -> iot-dcbaed267673.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-09-26 10:31:23.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-09-26 10:37:44.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 4 root root 4096 2025-09-26 10:31:26.000000000 +0100 drivers
drwxr-xr-x 5 root root 4096 2025-09-26 10:37:36.000000000 +0100 kernel
-rw-r--r-- 1 root root   59 2025-09-26 10:37:48.000000000 +0100 modules.dep.iot

/lib/modules/5.6.3/drivers:
total 8
drwxr-xr-x 2 root root 4096 2025-09-26 10:31:26.000000000 +0100 bluetooth
drwxr-xr-x 2 root root 4096 2025-09-26 10:31:28.000000000 +0100 modbus

/lib/modules/5.6.3/drivers/bluetooth:
total 24
-rw-r--r-- 1 root root 20584 2025-09-26 10:31:26.000000000 +0100 nrf52.ko

/lib/modules/5.6.3/drivers/modbus:
total 8
-rw-r--r-- 1 root root 5812 2025-09-26 10:31:28.000000000 +0100 rb924_modbus.ko

/lib/modules/5.6.3/kernel:
total 12
drwxr-xr-x 2 root root 4096 2025-09-26 10:37:36.000000000 +0100 crypto
drwxr-xr-x 2 root root 4096 2025-09-26 10:37:36.000000000 +0100 lib
drwxr-xr-x 3 root root 4096 2025-09-26 10:37:36.000000000 +0100 net

/lib/modules/5.6.3/kernel/crypto:
total 28
-rw-r--r-- 1 root root 18372 2025-09-26 10:26:54.000000000 +0100 ecc.ko
-rw-r--r-- 1 root root  4388 2025-09-26 10:26:54.000000000 +0100 ecdh_generic.ko

/lib/modules/5.6.3/kernel/lib:
total 4
-rw-r--r-- 1 root root 2640 2025-09-26 10:27:00.000000000 +0100 crc16.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 2 root root 4096 2025-09-26 10:37:36.000000000 +0100 bluetooth

/lib/modules/5.6.3/kernel/net/bluetooth:
total 324
-rw-r--r-- 1 root root 329360 2025-09-26 10:27:01.000000000 +0100 bluetooth.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-09-26 10:37:08.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-09-26 10:31:37.000000000 +0100 lib

/nova/bin:
total 860
-rwxr-xr-x 1 root root 143284 2025-09-26 10:32:25.000000000 +0100 bluetooth
-rwxr-xr-x 1 root root  31808 2025-09-26 10:37:08.000000000 +0100 gpio
-rwxr-xr-x 1 root root 376864 2025-09-26 10:36:31.000000000 +0100 lora
-rwxr-xr-x 1 root root  12472 2025-09-26 10:36:31.000000000 +0100 lora-updater
-rwxr-xr-x 1 root root 216396 2025-09-26 10:36:31.000000000 +0100 lora-worker
-rwxr-xr-x 1 root root  32616 2025-09-26 10:33:04.000000000 +0100 modbus
-rwxr-xr-x 1 root root  55248 2025-09-26 10:33:39.000000000 +0100 mqtt

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-09-26 10:31:37.000000000 +0100 console

/nova/lib/console:
total 112
-rwxr-xr-x 1 root root 110691 2025-09-26 10:31:37.000000000 +0100 1270874112.mem
```

