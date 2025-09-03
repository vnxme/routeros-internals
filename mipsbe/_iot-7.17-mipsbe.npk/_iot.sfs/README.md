### iot.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 569450 bytes, 42 inodes, blocksize: 262144 bytes, created: Thu Jan 16 09:11:37 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 2 root root 4096 2025-01-16 09:07:38.000000000 +0000 distros
drwxr-xr-x 2 root root 4096 2025-01-16 09:11:37.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-01-16 09:07:27.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-01-16 09:07:03.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2025-01-16 09:07:16.000000000 +0000 nova

/distros:
total 228
-rwxr-xr-x 1 root root 120649 2025-01-16 08:18:26.000000000 +0000 lora_gw_2g4.dist
-rwxr-xr-x 1 root root 106554 2025-01-16 08:18:26.000000000 +0000 pcie_lora_gw.dist

/etc:
total 128
-rw-r--r-- 1 root root 129724 2025-01-16 08:18:26.000000000 +0000 rb-hci_app_rb924_1.8.3.bin

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-01-16 09:07:27.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-01-16 09:07:27.000000000 +0000 webfig

/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4532 2025-01-16 09:07:27.000000000 +0000 iot-4b17ae94ad5a.jg.gz
-rwxr-xr-x 1 root root   97 2025-01-16 09:07:27.000000000 +0000 iot.info
lrwxrwxrwx 1 root root   22 2025-01-16 09:07:27.000000000 +0000 iot.jg.gz -> iot-4b17ae94ad5a.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-01-16 09:07:03.000000000 +0000 modules

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-01-16 09:11:29.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 4 root root 4096 2025-01-16 09:07:09.000000000 +0000 drivers
drwxr-xr-x 5 root root 4096 2025-01-16 09:11:24.000000000 +0000 kernel
-rw-r--r-- 1 root root   59 2025-01-16 09:11:31.000000000 +0000 modules.dep.iot

/lib/modules/5.6.3/drivers:
total 8
drwxr-xr-x 2 root root 4096 2025-01-16 09:07:07.000000000 +0000 bluetooth
drwxr-xr-x 2 root root 4096 2025-01-16 09:07:11.000000000 +0000 modbus

/lib/modules/5.6.3/drivers/bluetooth:
total 24
-rw-r--r-- 1 root root 20584 2025-01-16 09:07:06.000000000 +0000 nrf52.ko

/lib/modules/5.6.3/drivers/modbus:
total 8
-rw-r--r-- 1 root root 5812 2025-01-16 09:07:11.000000000 +0000 rb924_modbus.ko

/lib/modules/5.6.3/kernel:
total 12
drwxr-xr-x 2 root root 4096 2025-01-16 09:11:24.000000000 +0000 crypto
drwxr-xr-x 2 root root 4096 2025-01-16 09:11:24.000000000 +0000 lib
drwxr-xr-x 3 root root 4096 2025-01-16 09:11:24.000000000 +0000 net

/lib/modules/5.6.3/kernel/crypto:
total 28
-rw-r--r-- 1 root root 18372 2025-01-16 08:59:47.000000000 +0000 ecc.ko
-rw-r--r-- 1 root root  4388 2025-01-16 08:59:47.000000000 +0000 ecdh_generic.ko

/lib/modules/5.6.3/kernel/lib:
total 4
-rw-r--r-- 1 root root 2640 2025-01-16 08:59:52.000000000 +0000 crc16.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 2 root root 4096 2025-01-16 09:11:24.000000000 +0000 bluetooth

/lib/modules/5.6.3/kernel/net/bluetooth:
total 324
-rw-r--r-- 1 root root 329360 2025-01-16 08:59:53.000000000 +0000 bluetooth.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-01-16 09:10:47.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-01-16 09:06:47.000000000 +0000 lib

/nova/bin:
total 604
-rwxr-xr-x 1 root root 139236 2025-01-16 09:07:57.000000000 +0000 bluetooth
-rwxr-xr-x 1 root root  30624 2025-01-16 09:08:27.000000000 +0000 gpio
-rwxr-xr-x 1 root root 256452 2025-01-16 09:10:47.000000000 +0000 lora
-rwxr-xr-x 1 root root  11784 2025-01-16 09:10:47.000000000 +0000 lora-updater
-rwxr-xr-x 1 root root  87788 2025-01-16 09:10:47.000000000 +0000 lora-worker
-rwxr-xr-x 1 root root  31352 2025-01-16 09:07:54.000000000 +0000 modbus
-rwxr-xr-x 1 root root  51840 2025-01-16 09:08:19.000000000 +0000 mqtt

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-01-16 09:06:47.000000000 +0000 console

/nova/lib/console:
total 100
-rwxr-xr-x 1 root root 101995 2025-01-16 09:06:47.000000000 +0000 1270874112.mem
```

