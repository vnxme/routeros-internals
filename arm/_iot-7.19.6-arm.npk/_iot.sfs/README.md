### iot.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 720528 bytes, 39 inodes, blocksize: 524288 bytes, created: Fri Sep 12 09:55:37 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 2 root root 4096 2025-09-12 10:50:20.000000000 +0100 distros
drwxr-xr-x 2 root root 4096 2025-09-12 10:55:37.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-09-12 10:49:35.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-09-12 10:49:27.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-09-12 10:49:41.000000000 +0100 nova

/distros:
total 328
-rwxr-xr-x 1 root root 120649 2025-09-12 10:01:33.000000000 +0100 lora_gw_2g4.dist
-rwxr-xr-x 1 root root 106554 2025-09-12 10:01:33.000000000 +0100 lora_r11lr89.dist
-rwxr-xr-x 1 root root 102135 2025-09-12 10:01:33.000000000 +0100 lora_r11lr89G.dist

/etc:
total 128
-rw-r--r-- 1 root root 129448 2025-09-12 10:01:33.000000000 +0100 rb-hci_app_ec25_1.8.7.bin

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
drwxr-xr-x 3 root root 4096 2025-09-12 10:49:27.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-09-12 10:55:27.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-09-12 10:49:27.000000000 +0100 drivers
drwxr-xr-x 4 root root 4096 2025-09-12 10:55:26.000000000 +0100 kernel
-rw-r--r-- 1 root root   59 2025-09-12 10:55:30.000000000 +0100 modules.dep.iot

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 10:49:30.000000000 +0100 bluetooth

/lib/modules/5.6.3/drivers/bluetooth:
total 20
-rw-r--r-- 1 root root 16404 2025-09-12 10:49:30.000000000 +0100 nrf52_uart.ko

/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 10:55:26.000000000 +0100 crypto
drwxr-xr-x 3 root root 4096 2025-09-12 10:55:26.000000000 +0100 net

/lib/modules/5.6.3/kernel/crypto:
total 24
-rw-r--r-- 1 root root 15824 2025-09-12 10:44:14.000000000 +0100 ecc.ko
-rw-r--r-- 1 root root  4784 2025-09-12 10:44:14.000000000 +0100 ecdh_generic.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 10:55:26.000000000 +0100 bluetooth

/lib/modules/5.6.3/kernel/net/bluetooth:
total 300
-rw-r--r-- 1 root root 306644 2025-09-12 10:44:21.000000000 +0100 bluetooth.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 10:55:03.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-09-12 10:49:41.000000000 +0100 lib

/nova/bin:
total 816
-rwxr-xr-x 1 root root 137240 2025-09-12 10:50:15.000000000 +0100 bluetooth
-rwxr-xr-x 1 root root  30428 2025-09-12 10:51:46.000000000 +0100 gpio
-rwxr-xr-x 1 root root 348148 2025-09-12 10:55:03.000000000 +0100 lora
-rwxr-xr-x 1 root root  13616 2025-09-12 10:55:03.000000000 +0100 lora-updater
-rwxr-xr-x 1 root root 208152 2025-09-12 10:55:03.000000000 +0100 lora-worker
-rwxr-xr-x 1 root root  34556 2025-09-12 10:50:36.000000000 +0100 modbus
-rwxr-xr-x 1 root root  50932 2025-09-12 10:51:07.000000000 +0100 mqtt

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 10:49:41.000000000 +0100 console

/nova/lib/console:
total 104
-rwxr-xr-x 1 root root 106403 2025-09-12 10:49:41.000000000 +0100 1270874112.mem
```

