### iot.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 965794 bytes, 42 inodes, blocksize: 262144 bytes, created: Thu Jun  4 04:56:03 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:55.000000000 +0100 distros
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:22.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:49.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:41.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2026-06-02 10:48:22.000000000 +0100 nova

/distros:
total 328
-rwxr-xr-x 1 root root 120649 2026-01-08 09:06:02.000000000 +0000 lora_gw_2g4.dist
-rwxr-xr-x 1 root root 106554 2026-01-08 09:06:02.000000000 +0000 lora_r11lr89.dist
-rwxr-xr-x 1 root root 102135 2026-01-08 09:06:02.000000000 +0000 lora_r11lr89G.dist

/etc:
total 400
-rw-r--r-- 1 root root 122940 2026-04-21 12:11:31.000000000 +0100 rb-hci_app_cap_ax_1.8.3.bin
-rw-r--r-- 1 root root 278659 2026-05-07 11:05:10.000000000 +0100 rb-hci_app_hapm_1.0.1.bin

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:49.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:22.000000000 +0100 webfig

/home/web/webfig:
total 32
-rw-r--r-- 1 root root 27645 2026-06-02 10:45:48.000000000 +0100 iot-3d12f2c00cc7.jg.gz
-rwxr-xr-x 1 root root   100 2026-06-02 10:45:49.000000000 +0100 iot.info
lrwxrwxrwx 1 root root    22 2026-06-02 10:48:22.000000000 +0100 iot.jg.gz -> iot-3d12f2c00cc7.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:41.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-06-02 10:48:16.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-06-02 10:45:41.000000000 +0100 drivers
drwxr-xr-x 4 root root 4096 2026-06-02 10:48:12.000000000 +0100 kernel
-rw-r--r-- 1 root root   83 2026-06-02 10:48:18.000000000 +0100 modules.dep.iot

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:45:48.000000000 +0100 bluetooth

/lib/modules/5.6.3/drivers/bluetooth:
total 48
-rw-r--r-- 1 root root 29928 2026-06-02 10:45:44.000000000 +0100 nrf52.ko
-rw-r--r-- 1 root root 16264 2026-06-02 10:45:48.000000000 +0100 nrf52_usb.ko

/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:12.000000000 +0100 crypto
drwxr-xr-x 3 root root 4096 2026-06-02 10:48:12.000000000 +0100 net

/lib/modules/5.6.3/kernel/crypto:
total 28
-rw-r--r-- 1 root root 19592 2026-06-02 10:44:36.000000000 +0100 ecc.ko
-rw-r--r-- 1 root root  6936 2026-06-02 10:44:36.000000000 +0100 ecdh_generic.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:12.000000000 +0100 bluetooth

/lib/modules/5.6.3/kernel/net/bluetooth:
total 412
-rw-r--r-- 1 root root 421480 2026-06-02 10:44:38.000000000 +0100 bluetooth.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:22.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-06-02 10:48:22.000000000 +0100 lib

/nova/bin:
total 924
-rwxr-xr-x 1 root root 153712 2026-06-02 10:46:35.000000000 +0100 bluetooth
-rwxr-xr-x 1 root root  30444 2026-06-02 10:46:12.000000000 +0100 gpio
-rwxr-xr-x 1 root root 357100 2026-06-02 10:47:49.000000000 +0100 lora
-rwxr-xr-x 1 root root  13616 2026-06-02 10:47:49.000000000 +0100 lora-updater
-rwxr-xr-x 1 root root 213040 2026-06-02 10:47:49.000000000 +0100 lora-worker
-rwxr-xr-x 1 root root  34576 2026-06-02 10:46:06.000000000 +0100 modbus
-rwxr-xr-x 1 root root  55068 2026-06-02 10:46:26.000000000 +0100 mqtt
-rwxr-xr-x 1 root root  67480 2026-06-02 10:47:01.000000000 +0100 wiliot

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:48:22.000000000 +0100 console

/nova/lib/console:
total 116
-rwxr-xr-x 1 root root 118421 2026-06-02 10:45:44.000000000 +0100 1270874112.mem
```

