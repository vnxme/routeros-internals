### iot.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 799062 bytes, 44 inodes, blocksize: 262144 bytes, created: Tue Jun  2 09:48:25 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:55.000000000 +0100 distros
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:25.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:49.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:42.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2026-06-02 10:45:56.000000000 +0100 nova

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
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:49.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:49.000000000 +0100 webfig

/home/web/webfig:
total 32
-rw-r--r-- 1 root root 27645 2026-06-02 10:45:48.000000000 +0100 iot-3d12f2c00cc7.jg.gz
-rwxr-xr-x 1 root root   100 2026-06-02 10:45:49.000000000 +0100 iot.info
lrwxrwxrwx 1 root root    22 2026-06-02 10:45:49.000000000 +0100 iot.jg.gz -> iot-3d12f2c00cc7.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:42.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-06-02 10:48:18.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 4 root root 4096 2026-06-02 10:45:46.000000000 +0100 drivers
drwxr-xr-x 5 root root 4096 2026-06-02 10:48:13.000000000 +0100 kernel
-rw-r--r-- 1 root root   59 2026-06-02 10:48:20.000000000 +0100 modules.dep.iot

/lib/modules/5.6.3/drivers:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:44.000000000 +0100 bluetooth
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:47.000000000 +0100 modbus

/lib/modules/5.6.3/drivers/bluetooth:
total 24
-rw-r--r-- 1 root root 20584 2026-06-02 10:45:44.000000000 +0100 nrf52.ko

/lib/modules/5.6.3/drivers/modbus:
total 8
-rw-r--r-- 1 root root 6800 2026-06-02 10:45:47.000000000 +0100 rb924_modbus.ko

/lib/modules/5.6.3/kernel:
total 12
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:13.000000000 +0100 crypto
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:13.000000000 +0100 lib
drwxr-xr-x 3 root root 4096 2026-06-02 10:48:13.000000000 +0100 net

/lib/modules/5.6.3/kernel/crypto:
total 28
-rw-r--r-- 1 root root 18372 2026-06-02 10:44:21.000000000 +0100 ecc.ko
-rw-r--r-- 1 root root  4388 2026-06-02 10:44:21.000000000 +0100 ecdh_generic.ko

/lib/modules/5.6.3/kernel/lib:
total 4
-rw-r--r-- 1 root root 2640 2026-06-02 10:44:24.000000000 +0100 crc16.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:13.000000000 +0100 bluetooth

/lib/modules/5.6.3/kernel/net/bluetooth:
total 324
-rw-r--r-- 1 root root 329532 2026-06-02 10:44:25.000000000 +0100 bluetooth.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:47:54.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:44.000000000 +0100 lib

/nova/bin:
total 956
-rwxr-xr-x 1 root root 158656 2026-06-02 10:46:47.000000000 +0100 bluetooth
-rwxr-xr-x 1 root root  32064 2026-06-02 10:46:12.000000000 +0100 gpio
-rwxr-xr-x 1 root root 378928 2026-06-02 10:47:50.000000000 +0100 lora
-rwxr-xr-x 1 root root  12440 2026-06-02 10:47:54.000000000 +0100 lora-updater
-rwxr-xr-x 1 root root 221484 2026-06-02 10:47:50.000000000 +0100 lora-worker
-rwxr-xr-x 1 root root  34776 2026-06-02 10:46:03.000000000 +0100 modbus
-rwxr-xr-x 1 root root  56064 2026-06-02 10:46:26.000000000 +0100 mqtt
-rwxr-xr-x 1 root root  67936 2026-06-02 10:47:01.000000000 +0100 wiliot

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:44.000000000 +0100 console

/nova/lib/console:
total 116
-rwxr-xr-x 1 root root 118421 2026-06-02 10:45:44.000000000 +0100 1270874112.mem
```

