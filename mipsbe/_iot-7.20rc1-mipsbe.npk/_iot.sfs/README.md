### iot.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 730334 bytes, 43 inodes, blocksize: 262144 bytes, created: Thu Aug 28 14:36:21 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 2 root root 4096 2025-08-28 15:31:22.000000000 +0100 distros
drwxr-xr-x 2 root root 4096 2025-08-28 15:36:21.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-08-28 15:31:21.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-08-28 15:31:06.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-08-28 15:31:22.000000000 +0100 nova

/distros:
total 340
-rwxr-xr-x 1 root root 120649 2025-08-28 14:41:40.000000000 +0100 lora_gw_2g4.dist
-rwxr-xr-x 1 root root 106554 2025-08-28 14:41:40.000000000 +0100 lora_r11lr89.dist
-rwxr-xr-x 1 root root 110806 2025-08-28 14:41:40.000000000 +0100 lora_r11lr89G.dist

/etc:
total 128
-rw-r--r-- 1 root root 129724 2025-08-28 14:41:40.000000000 +0100 rb-hci_app_rb924_1.8.3.bin

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-08-28 15:31:21.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-08-28 15:31:21.000000000 +0100 webfig

/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4587 2025-08-28 15:31:21.000000000 +0100 iot-358f58857167.jg.gz
-rwxr-xr-x 1 root root   99 2025-08-28 15:31:21.000000000 +0100 iot.info
lrwxrwxrwx 1 root root   22 2025-08-28 15:31:21.000000000 +0100 iot.jg.gz -> iot-358f58857167.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-08-28 15:31:06.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-08-28 15:36:12.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 4 root root 4096 2025-08-28 15:31:12.000000000 +0100 drivers
drwxr-xr-x 5 root root 4096 2025-08-28 15:36:05.000000000 +0100 kernel
-rw-r--r-- 1 root root   59 2025-08-28 15:36:15.000000000 +0100 modules.dep.iot

/lib/modules/5.6.3/drivers:
total 8
drwxr-xr-x 2 root root 4096 2025-08-28 15:31:09.000000000 +0100 bluetooth
drwxr-xr-x 2 root root 4096 2025-08-28 15:31:13.000000000 +0100 modbus

/lib/modules/5.6.3/drivers/bluetooth:
total 24
-rw-r--r-- 1 root root 20584 2025-08-28 15:31:09.000000000 +0100 nrf52.ko

/lib/modules/5.6.3/drivers/modbus:
total 8
-rw-r--r-- 1 root root 5812 2025-08-28 15:31:13.000000000 +0100 rb924_modbus.ko

/lib/modules/5.6.3/kernel:
total 12
drwxr-xr-x 2 root root 4096 2025-08-28 15:36:05.000000000 +0100 crypto
drwxr-xr-x 2 root root 4096 2025-08-28 15:36:05.000000000 +0100 lib
drwxr-xr-x 3 root root 4096 2025-08-28 15:36:05.000000000 +0100 net

/lib/modules/5.6.3/kernel/crypto:
total 28
-rw-r--r-- 1 root root 18372 2025-08-28 15:25:21.000000000 +0100 ecc.ko
-rw-r--r-- 1 root root  4388 2025-08-28 15:25:21.000000000 +0100 ecdh_generic.ko

/lib/modules/5.6.3/kernel/lib:
total 4
-rw-r--r-- 1 root root 2640 2025-08-28 15:25:28.000000000 +0100 crc16.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 2 root root 4096 2025-08-28 15:36:05.000000000 +0100 bluetooth

/lib/modules/5.6.3/kernel/net/bluetooth:
total 324
-rw-r--r-- 1 root root 329360 2025-08-28 15:25:29.000000000 +0100 bluetooth.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-08-28 15:35:12.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-08-28 15:31:22.000000000 +0100 lib

/nova/bin:
total 856
-rwxr-xr-x 1 root root 143284 2025-08-28 15:30:51.000000000 +0100 bluetooth
-rwxr-xr-x 1 root root  31808 2025-08-28 15:33:43.000000000 +0100 gpio
-rwxr-xr-x 1 root root 372928 2025-08-28 15:35:12.000000000 +0100 lora
-rwxr-xr-x 1 root root  12472 2025-08-28 15:35:12.000000000 +0100 lora-updater
-rwxr-xr-x 1 root root 216396 2025-08-28 15:35:12.000000000 +0100 lora-worker
-rwxr-xr-x 1 root root  32616 2025-08-28 15:31:42.000000000 +0100 modbus
-rwxr-xr-x 1 root root  55232 2025-08-28 15:31:57.000000000 +0100 mqtt

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-08-28 15:31:22.000000000 +0100 console

/nova/lib/console:
total 108
-rwxr-xr-x 1 root root 109991 2025-08-28 15:31:22.000000000 +0100 1270874112.mem
```

