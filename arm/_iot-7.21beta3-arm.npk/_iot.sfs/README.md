### iot.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 752368 bytes, 48 inodes, blocksize: 524288 bytes, created: Tue Oct 14 13:43:42 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 2 root root 4096 2025-10-14 14:39:05.000000000 +0100 distros
drwxr-xr-x 2 root root 4096 2025-10-14 14:43:42.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-14 14:39:05.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-10-14 14:43:42.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-10-14 14:36:50.000000000 +0100 nova

/distros:
total 328
-rwxr-xr-x 1 root root 120649 2025-10-14 13:49:10.000000000 +0100 lora_gw_2g4.dist
-rwxr-xr-x 1 root root 106554 2025-10-14 13:49:10.000000000 +0100 lora_r11lr89.dist
-rwxr-xr-x 1 root root 102135 2025-10-14 13:49:10.000000000 +0100 lora_r11lr89G.dist

/etc:
total 128
-rw-r--r-- 1 root root 129448 2025-10-14 13:49:10.000000000 +0100 rb-hci_app_ec25_1.8.7.bin

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:39:05.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:39:05.000000000 +0100 webfig

/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4687 2025-10-14 14:39:05.000000000 +0100 iot-381b54ae262b.jg.gz
-rwxr-xr-x 1 root root  101 2025-10-14 14:39:05.000000000 +0100 iot.info
lrwxrwxrwx 1 root root   22 2025-10-14 14:39:05.000000000 +0100 iot.jg.gz -> iot-381b54ae262b.jg.gz

/lib:
total 8
drwxr-xr-x 3 root root 4096 2025-10-14 14:43:42.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2025-10-14 14:38:45.000000000 +0100 modules

/lib/firmware:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:43:42.000000000 +0100 IPQ5018

/lib/firmware/IPQ5018:
total 44
-rw-r--r-- 1 root root   148 2025-10-14 13:49:10.000000000 +0100 bt_fw_patch.b00
-rw-r--r-- 1 root root   136 2025-10-14 13:49:10.000000000 +0100 bt_fw_patch.b01
-rw-r--r-- 1 root root 27688 2025-10-14 13:49:10.000000000 +0100 bt_fw_patch.b02
-rw-r--r-- 1 root root   284 2025-10-14 13:49:10.000000000 +0100 bt_fw_patch.mdt
-rw-r--r-- 1 root root  2927 2025-10-14 13:49:10.000000000 +0100 mpnv10.bin

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-10-14 14:43:30.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-10-14 14:38:45.000000000 +0100 drivers
drwxr-xr-x 4 root root 4096 2025-10-14 14:43:30.000000000 +0100 kernel
-rw-r--r-- 1 root root  106 2025-10-14 14:43:33.000000000 +0100 modules.dep.iot

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:38:54.000000000 +0100 bluetooth

/lib/modules/5.6.3/drivers/bluetooth:
total 48
-rw-r--r-- 1 root root 20360 2025-10-14 14:38:54.000000000 +0100 bt_interface.ko
-rw-r--r-- 1 root root  7424 2025-10-14 14:38:53.000000000 +0100 bt_rproc.ko
-rw-r--r-- 1 root root 16404 2025-10-14 14:38:47.000000000 +0100 nrf52_uart.ko

/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:43:30.000000000 +0100 crypto
drwxr-xr-x 3 root root 4096 2025-10-14 14:43:30.000000000 +0100 net

/lib/modules/5.6.3/kernel/crypto:
total 24
-rw-r--r-- 1 root root 15824 2025-10-14 14:32:18.000000000 +0100 ecc.ko
-rw-r--r-- 1 root root  4784 2025-10-14 14:32:18.000000000 +0100 ecdh_generic.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:43:30.000000000 +0100 bluetooth

/lib/modules/5.6.3/kernel/net/bluetooth:
total 300
-rw-r--r-- 1 root root 306636 2025-10-14 14:32:25.000000000 +0100 bluetooth.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:43:25.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-14 14:36:50.000000000 +0100 lib

/nova/bin:
total 828
-rwxr-xr-x 1 root root 145500 2025-10-14 14:38:39.000000000 +0100 bluetooth
-rwxr-xr-x 1 root root  30444 2025-10-14 14:40:55.000000000 +0100 gpio
-rwxr-xr-x 1 root root 352004 2025-10-14 14:43:25.000000000 +0100 lora
-rwxr-xr-x 1 root root  13616 2025-10-14 14:43:25.000000000 +0100 lora-updater
-rwxr-xr-x 1 root root 207920 2025-10-14 14:43:25.000000000 +0100 lora-worker
-rwxr-xr-x 1 root root  34568 2025-10-14 14:39:26.000000000 +0100 modbus
-rwxr-xr-x 1 root root  50952 2025-10-14 14:39:40.000000000 +0100 mqtt

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:36:50.000000000 +0100 console

/nova/lib/console:
total 108
-rwxr-xr-x 1 root root 107328 2025-10-14 14:36:50.000000000 +0100 1270874112.mem
```

