### iot.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 779602 bytes, 43 inodes, blocksize: 262144 bytes, created: Wed Apr 22 08:27:08 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 2 root root 4096 2026-04-22 09:25:01.000000000 +0100 distros
drwxr-xr-x 2 root root 4096 2026-04-22 09:27:08.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-04-22 09:25:05.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:43.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2026-04-22 09:24:39.000000000 +0100 nova

/distros:
total 328
-rwxr-xr-x 1 root root 120649 2026-01-08 09:06:02.000000000 +0000 lora_gw_2g4.dist
-rwxr-xr-x 1 root root 106554 2026-01-08 09:06:02.000000000 +0000 lora_r11lr89.dist
-rwxr-xr-x 1 root root 102135 2026-01-08 09:06:02.000000000 +0000 lora_r11lr89G.dist

/etc:
total 208
-rw-r--r-- 1 root root 212412 2026-04-21 12:11:31.000000000 +0100 rb-hci_app_rb924_2.0.0.bin

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:25:05.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:25:05.000000000 +0100 webfig

/home/web/webfig:
total 28
-rw-r--r-- 1 root root 22747 2026-04-22 09:25:05.000000000 +0100 iot-98e252bd25a3.jg.gz
-rwxr-xr-x 1 root root    99 2026-04-22 09:25:05.000000000 +0100 iot.info
lrwxrwxrwx 1 root root    22 2026-04-22 09:25:05.000000000 +0100 iot.jg.gz -> iot-98e252bd25a3.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:43.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-04-22 09:27:00.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 4 root root 4096 2026-04-22 09:24:46.000000000 +0100 drivers
drwxr-xr-x 5 root root 4096 2026-04-22 09:26:56.000000000 +0100 kernel
-rw-r--r-- 1 root root   59 2026-04-22 09:27:02.000000000 +0100 modules.dep.iot

/lib/modules/5.6.3/drivers:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:45.000000000 +0100 bluetooth
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:48.000000000 +0100 modbus

/lib/modules/5.6.3/drivers/bluetooth:
total 24
-rw-r--r-- 1 root root 20584 2026-04-22 09:24:45.000000000 +0100 nrf52.ko

/lib/modules/5.6.3/drivers/modbus:
total 8
-rw-r--r-- 1 root root 6800 2026-04-22 09:24:47.000000000 +0100 rb924_modbus.ko

/lib/modules/5.6.3/kernel:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:26:56.000000000 +0100 crypto
drwxr-xr-x 2 root root 4096 2026-04-22 09:26:56.000000000 +0100 lib
drwxr-xr-x 3 root root 4096 2026-04-22 09:26:56.000000000 +0100 net

/lib/modules/5.6.3/kernel/crypto:
total 28
-rw-r--r-- 1 root root 18372 2026-04-22 09:22:59.000000000 +0100 ecc.ko
-rw-r--r-- 1 root root  4388 2026-04-22 09:22:59.000000000 +0100 ecdh_generic.ko

/lib/modules/5.6.3/kernel/lib:
total 4
-rw-r--r-- 1 root root 2640 2026-04-22 09:23:02.000000000 +0100 crc16.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:26:56.000000000 +0100 bluetooth

/lib/modules/5.6.3/kernel/net/bluetooth:
total 324
-rw-r--r-- 1 root root 329532 2026-04-22 09:23:02.000000000 +0100 bluetooth.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:26:52.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-04-22 09:24:14.000000000 +0100 lib

/nova/bin:
total 884
-rwxr-xr-x 1 root root 158016 2026-04-22 09:25:12.000000000 +0100 bluetooth
-rwxr-xr-x 1 root root  32064 2026-04-22 09:25:19.000000000 +0100 gpio
-rwxr-xr-x 1 root root 376368 2026-04-22 09:26:52.000000000 +0100 lora
-rwxr-xr-x 1 root root  12440 2026-04-22 09:26:52.000000000 +0100 lora-updater
-rwxr-xr-x 1 root root 221452 2026-04-22 09:26:52.000000000 +0100 lora-worker
-rwxr-xr-x 1 root root  34776 2026-04-22 09:25:22.000000000 +0100 modbus
-rwxr-xr-x 1 root root  55248 2026-04-22 09:25:34.000000000 +0100 mqtt

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:24:14.000000000 +0100 console

/nova/lib/console:
total 108
-rwxr-xr-x 1 root root 109536 2026-04-22 09:24:14.000000000 +0100 1270874112.mem
```

