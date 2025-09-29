### iot.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 723290 bytes, 43 inodes, blocksize: 262144 bytes, created: Fri Sep 12 09:55:43 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 2 root root 4096 2025-09-12 10:50:20.000000000 +0100 distros
drwxr-xr-x 2 root root 4096 2025-09-12 10:55:42.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-09-12 10:49:35.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-09-12 10:49:24.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-09-12 10:49:41.000000000 +0100 nova

/distros:
total 328
-rwxr-xr-x 1 root root 120649 2025-09-12 10:01:33.000000000 +0100 lora_gw_2g4.dist
-rwxr-xr-x 1 root root 106554 2025-09-12 10:01:33.000000000 +0100 lora_r11lr89.dist
-rwxr-xr-x 1 root root 102135 2025-09-12 10:01:33.000000000 +0100 lora_r11lr89G.dist

/etc:
total 128
-rw-r--r-- 1 root root 129724 2025-09-12 10:01:33.000000000 +0100 rb-hci_app_rb924_1.8.3.bin

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 10:49:35.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 10:49:35.000000000 +0100 webfig

/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4609 2025-09-12 10:49:35.000000000 +0100 iot-a995abdceb47.jg.gz
-rwxr-xr-x 1 root root   99 2025-09-12 10:49:35.000000000 +0100 iot.info
lrwxrwxrwx 1 root root   22 2025-09-12 10:49:35.000000000 +0100 iot.jg.gz -> iot-a995abdceb47.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 10:49:24.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-09-12 10:55:33.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 4 root root 4096 2025-09-12 10:49:30.000000000 +0100 drivers
drwxr-xr-x 5 root root 4096 2025-09-12 10:55:27.000000000 +0100 kernel
-rw-r--r-- 1 root root   59 2025-09-12 10:55:36.000000000 +0100 modules.dep.iot

/lib/modules/5.6.3/drivers:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 10:49:27.000000000 +0100 bluetooth
drwxr-xr-x 2 root root 4096 2025-09-12 10:49:31.000000000 +0100 modbus

/lib/modules/5.6.3/drivers/bluetooth:
total 24
-rw-r--r-- 1 root root 20584 2025-09-12 10:49:27.000000000 +0100 nrf52.ko

/lib/modules/5.6.3/drivers/modbus:
total 8
-rw-r--r-- 1 root root 5812 2025-09-12 10:49:31.000000000 +0100 rb924_modbus.ko

/lib/modules/5.6.3/kernel:
total 12
drwxr-xr-x 2 root root 4096 2025-09-12 10:55:27.000000000 +0100 crypto
drwxr-xr-x 2 root root 4096 2025-09-12 10:55:27.000000000 +0100 lib
drwxr-xr-x 3 root root 4096 2025-09-12 10:55:27.000000000 +0100 net

/lib/modules/5.6.3/kernel/crypto:
total 28
-rw-r--r-- 1 root root 18372 2025-09-12 10:43:48.000000000 +0100 ecc.ko
-rw-r--r-- 1 root root  4388 2025-09-12 10:43:48.000000000 +0100 ecdh_generic.ko

/lib/modules/5.6.3/kernel/lib:
total 4
-rw-r--r-- 1 root root 2640 2025-09-12 10:43:54.000000000 +0100 crc16.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 10:55:27.000000000 +0100 bluetooth

/lib/modules/5.6.3/kernel/net/bluetooth:
total 324
-rw-r--r-- 1 root root 329360 2025-09-12 10:43:55.000000000 +0100 bluetooth.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 10:54:30.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-09-12 10:49:41.000000000 +0100 lib

/nova/bin:
total 848
-rwxr-xr-x 1 root root 142580 2025-09-12 10:50:09.000000000 +0100 bluetooth
-rwxr-xr-x 1 root root  30736 2025-09-12 10:51:46.000000000 +0100 gpio
-rwxr-xr-x 1 root root 371280 2025-09-12 10:54:30.000000000 +0100 lora
-rwxr-xr-x 1 root root  12376 2025-09-12 10:54:30.000000000 +0100 lora-updater
-rwxr-xr-x 1 root root 216620 2025-09-12 10:54:30.000000000 +0100 lora-worker
-rwxr-xr-x 1 root root  32136 2025-09-12 10:50:36.000000000 +0100 modbus
-rwxr-xr-x 1 root root  53072 2025-09-12 10:51:07.000000000 +0100 mqtt

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 10:49:41.000000000 +0100 console

/nova/lib/console:
total 104
-rwxr-xr-x 1 root root 106403 2025-09-12 10:49:41.000000000 +0100 1270874112.mem
```

