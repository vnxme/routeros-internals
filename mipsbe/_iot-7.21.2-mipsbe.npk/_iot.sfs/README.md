### iot.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 728102 bytes, 43 inodes, blocksize: 262144 bytes, created: Thu Jan 29 10:52:03 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 2 root root 4096 2026-01-29 10:47:23.000000000 +0000 distros
drwxr-xr-x 2 root root 4096 2026-01-29 10:52:03.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-29 10:47:22.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-29 10:46:56.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2026-01-29 10:46:54.000000000 +0000 nova

/distros:
total 328
-rwxr-xr-x 1 root root 120649 2026-01-14 12:34:42.000000000 +0000 lora_gw_2g4.dist
-rwxr-xr-x 1 root root 106554 2026-01-14 12:34:42.000000000 +0000 lora_r11lr89.dist
-rwxr-xr-x 1 root root 102135 2026-01-14 12:34:42.000000000 +0000 lora_r11lr89G.dist

/etc:
total 128
-rw-r--r-- 1 root root 129724 2026-01-14 12:34:42.000000000 +0000 rb-hci_app_rb924_1.8.3.bin

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:47:22.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:47:23.000000000 +0000 webfig

/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4687 2026-01-29 10:47:22.000000000 +0000 iot-381b54ae262b.jg.gz
-rwxr-xr-x 1 root root   98 2026-01-29 10:47:22.000000000 +0000 iot.info
lrwxrwxrwx 1 root root   22 2026-01-29 10:47:23.000000000 +0000 iot.jg.gz -> iot-381b54ae262b.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:46:56.000000000 +0000 modules

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-01-29 10:51:53.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 4 root root 4096 2026-01-29 10:47:03.000000000 +0000 drivers
drwxr-xr-x 5 root root 4096 2026-01-29 10:51:46.000000000 +0000 kernel
-rw-r--r-- 1 root root   59 2026-01-29 10:51:57.000000000 +0000 modules.dep.iot

/lib/modules/5.6.3/drivers:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:47:00.000000000 +0000 bluetooth
drwxr-xr-x 2 root root 4096 2026-01-29 10:47:05.000000000 +0000 modbus

/lib/modules/5.6.3/drivers/bluetooth:
total 24
-rw-r--r-- 1 root root 20584 2026-01-29 10:47:00.000000000 +0000 nrf52.ko

/lib/modules/5.6.3/drivers/modbus:
total 8
-rw-r--r-- 1 root root 6800 2026-01-29 10:47:05.000000000 +0000 rb924_modbus.ko

/lib/modules/5.6.3/kernel:
total 12
drwxr-xr-x 2 root root 4096 2026-01-29 10:51:46.000000000 +0000 crypto
drwxr-xr-x 2 root root 4096 2026-01-29 10:51:46.000000000 +0000 lib
drwxr-xr-x 3 root root 4096 2026-01-29 10:51:46.000000000 +0000 net

/lib/modules/5.6.3/kernel/crypto:
total 28
-rw-r--r-- 1 root root 18372 2026-01-29 10:40:03.000000000 +0000 ecc.ko
-rw-r--r-- 1 root root  4388 2026-01-29 10:40:03.000000000 +0000 ecdh_generic.ko

/lib/modules/5.6.3/kernel/lib:
total 4
-rw-r--r-- 1 root root 2640 2026-01-29 10:40:10.000000000 +0000 crc16.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:51:46.000000000 +0000 bluetooth

/lib/modules/5.6.3/kernel/net/bluetooth:
total 324
-rw-r--r-- 1 root root 329336 2026-01-29 10:40:11.000000000 +0000 bluetooth.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:51:08.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2026-01-29 10:46:54.000000000 +0000 lib

/nova/bin:
total 868
-rwxr-xr-x 1 root root 151456 2026-01-29 10:46:36.000000000 +0000 bluetooth
-rwxr-xr-x 1 root root  31936 2026-01-29 10:49:20.000000000 +0000 gpio
-rwxr-xr-x 1 root root 372768 2026-01-29 10:51:08.000000000 +0000 lora
-rwxr-xr-x 1 root root  12408 2026-01-29 10:51:08.000000000 +0000 lora-updater
-rwxr-xr-x 1 root root 216396 2026-01-29 10:51:08.000000000 +0000 lora-worker
-rwxr-xr-x 1 root root  33064 2026-01-29 10:47:43.000000000 +0000 modbus
-rwxr-xr-x 1 root root  55248 2026-01-29 10:48:20.000000000 +0000 mqtt

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:46:54.000000000 +0000 console

/nova/lib/console:
total 108
-rwxr-xr-x 1 root root 107468 2026-01-29 10:46:54.000000000 +0000 1270874112.mem
```

