### iot.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 752152 bytes, 48 inodes, blocksize: 524288 bytes, created: Thu Jan 29 10:51:58 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 2 root root 4096 2026-01-29 10:47:23.000000000 +0000 distros
drwxr-xr-x 2 root root 4096 2026-01-29 10:51:58.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-29 10:47:23.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2026-01-29 10:51:58.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2026-01-29 10:46:53.000000000 +0000 nova

/distros:
total 328
-rwxr-xr-x 1 root root 120649 2026-01-14 12:34:42.000000000 +0000 lora_gw_2g4.dist
-rwxr-xr-x 1 root root 106554 2026-01-14 12:34:42.000000000 +0000 lora_r11lr89.dist
-rwxr-xr-x 1 root root 102135 2026-01-14 12:34:42.000000000 +0000 lora_r11lr89G.dist

/etc:
total 128
-rw-r--r-- 1 root root 129448 2026-01-14 12:34:42.000000000 +0000 rb-hci_app_ec25_1.8.7.bin

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:47:23.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:47:23.000000000 +0000 webfig

/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4687 2026-01-29 10:47:22.000000000 +0000 iot-381b54ae262b.jg.gz
-rwxr-xr-x 1 root root   98 2026-01-29 10:47:22.000000000 +0000 iot.info
lrwxrwxrwx 1 root root   22 2026-01-29 10:47:23.000000000 +0000 iot.jg.gz -> iot-381b54ae262b.jg.gz

/lib:
total 8
drwxr-xr-x 3 root root 4096 2026-01-29 10:51:58.000000000 +0000 firmware
drwxr-xr-x 3 root root 4096 2026-01-29 10:47:00.000000000 +0000 modules

/lib/firmware:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:51:58.000000000 +0000 IPQ5018

/lib/firmware/IPQ5018:
total 44
-rw-r--r-- 1 root root   148 2026-01-14 12:34:42.000000000 +0000 bt_fw_patch.b00
-rw-r--r-- 1 root root   136 2026-01-14 12:34:42.000000000 +0000 bt_fw_patch.b01
-rw-r--r-- 1 root root 27688 2026-01-14 12:34:42.000000000 +0000 bt_fw_patch.b02
-rw-r--r-- 1 root root   284 2026-01-14 12:34:42.000000000 +0000 bt_fw_patch.mdt
-rw-r--r-- 1 root root  2927 2026-01-14 12:34:42.000000000 +0000 mpnv10.bin

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-01-29 10:51:46.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 10:47:00.000000000 +0000 drivers
drwxr-xr-x 4 root root 4096 2026-01-29 10:51:46.000000000 +0000 kernel
-rw-r--r-- 1 root root  106 2026-01-29 10:51:50.000000000 +0000 modules.dep.iot

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:47:11.000000000 +0000 bluetooth

/lib/modules/5.6.3/drivers/bluetooth:
total 48
-rw-r--r-- 1 root root 20360 2026-01-29 10:47:11.000000000 +0000 bt_interface.ko
-rw-r--r-- 1 root root  7424 2026-01-29 10:47:11.000000000 +0000 bt_rproc.ko
-rw-r--r-- 1 root root 16404 2026-01-29 10:47:03.000000000 +0000 nrf52_uart.ko

/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:51:46.000000000 +0000 crypto
drwxr-xr-x 3 root root 4096 2026-01-29 10:51:46.000000000 +0000 net

/lib/modules/5.6.3/kernel/crypto:
total 24
-rw-r--r-- 1 root root 15824 2026-01-29 10:39:59.000000000 +0000 ecc.ko
-rw-r--r-- 1 root root  4784 2026-01-29 10:39:59.000000000 +0000 ecdh_generic.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:51:46.000000000 +0000 bluetooth

/lib/modules/5.6.3/kernel/net/bluetooth:
total 300
-rw-r--r-- 1 root root 306636 2026-01-29 10:40:07.000000000 +0000 bluetooth.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:51:41.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2026-01-29 10:46:53.000000000 +0000 lib

/nova/bin:
total 828
-rwxr-xr-x 1 root root 145500 2026-01-29 10:46:46.000000000 +0000 bluetooth
-rwxr-xr-x 1 root root  30444 2026-01-29 10:49:20.000000000 +0000 gpio
-rwxr-xr-x 1 root root 352004 2026-01-29 10:51:40.000000000 +0000 lora
-rwxr-xr-x 1 root root  13616 2026-01-29 10:51:41.000000000 +0000 lora-updater
-rwxr-xr-x 1 root root 207920 2026-01-29 10:51:40.000000000 +0000 lora-worker
-rwxr-xr-x 1 root root  34576 2026-01-29 10:47:43.000000000 +0000 modbus
-rwxr-xr-x 1 root root  50952 2026-01-29 10:48:20.000000000 +0000 mqtt

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:46:53.000000000 +0000 console

/nova/lib/console:
total 108
-rwxr-xr-x 1 root root 107468 2026-01-29 10:46:53.000000000 +0000 1270874112.mem
```

