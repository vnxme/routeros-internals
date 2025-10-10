### iot.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 728444 bytes, 39 inodes, blocksize: 524288 bytes, created: Mon Oct  6 14:00:11 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 2 root root 4096 2025-10-06 14:55:40.000000000 +0100 distros
drwxr-xr-x 2 root root 4096 2025-10-06 15:00:11.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-06 14:55:33.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-06 14:55:23.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-10-06 15:00:11.000000000 +0100 nova

/distros:
total 328
-rwxr-xr-x 1 root root 120649 2025-10-06 14:06:01.000000000 +0100 lora_gw_2g4.dist
-rwxr-xr-x 1 root root 106554 2025-10-06 14:06:01.000000000 +0100 lora_r11lr89.dist
-rwxr-xr-x 1 root root 102135 2025-10-06 14:06:01.000000000 +0100 lora_r11lr89G.dist

/etc:
total 124
-rw-r--r-- 1 root root 122940 2025-10-06 14:06:01.000000000 +0100 rb-hci_app_cap_ax_1.8.3.bin

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-06 14:55:33.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-06 15:00:11.000000000 +0100 webfig

/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4687 2025-10-06 14:55:32.000000000 +0100 iot-381b54ae262b.jg.gz
-rwxr-xr-x 1 root root  101 2025-10-06 14:55:32.000000000 +0100 iot.info
lrwxrwxrwx 1 root root   22 2025-10-06 15:00:11.000000000 +0100 iot.jg.gz -> iot-381b54ae262b.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-06 14:55:23.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-10-06 15:00:03.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-10-06 14:55:23.000000000 +0100 drivers
drwxr-xr-x 4 root root 4096 2025-10-06 14:59:59.000000000 +0100 kernel
-rw-r--r-- 1 root root   54 2025-10-06 15:00:05.000000000 +0100 modules.dep.iot

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-10-06 14:55:29.000000000 +0100 bluetooth

/lib/modules/5.6.3/drivers/bluetooth:
total 32
-rw-r--r-- 1 root root 29928 2025-10-06 14:55:29.000000000 +0100 nrf52.ko

/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-10-06 14:59:59.000000000 +0100 crypto
drwxr-xr-x 3 root root 4096 2025-10-06 14:59:59.000000000 +0100 net

/lib/modules/5.6.3/kernel/crypto:
total 28
-rw-r--r-- 1 root root 19592 2025-10-06 14:51:02.000000000 +0100 ecc.ko
-rw-r--r-- 1 root root  6936 2025-10-06 14:51:02.000000000 +0100 ecdh_generic.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-06 14:59:59.000000000 +0100 bluetooth

/lib/modules/5.6.3/kernel/net/bluetooth:
total 412
-rw-r--r-- 1 root root 421336 2025-10-06 14:51:08.000000000 +0100 bluetooth.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-06 15:00:11.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-06 15:00:11.000000000 +0100 lib

/nova/bin:
total 828
-rwxr-xr-x 1 root root 145500 2025-10-06 14:55:04.000000000 +0100 bluetooth
-rwxr-xr-x 1 root root  30444 2025-10-06 14:56:19.000000000 +0100 gpio
-rwxr-xr-x 1 root root 352004 2025-10-06 14:57:17.000000000 +0100 lora
-rwxr-xr-x 1 root root  13616 2025-10-06 14:57:17.000000000 +0100 lora-updater
-rwxr-xr-x 1 root root 207920 2025-10-06 14:57:17.000000000 +0100 lora-worker
-rwxr-xr-x 1 root root  34568 2025-10-06 14:55:57.000000000 +0100 modbus
-rwxr-xr-x 1 root root  50952 2025-10-06 14:56:33.000000000 +0100 mqtt

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-06 15:00:11.000000000 +0100 console

/nova/lib/console:
total 108
-rwxr-xr-x 1 root root 107328 2025-10-06 14:54:14.000000000 +0100 1270874112.mem
```

