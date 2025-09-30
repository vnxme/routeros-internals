### iot.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 556944 bytes, 38 inodes, blocksize: 524288 bytes, created: Tue Mar 11 12:50:21 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 20
drwxr-xr-x 2 root root 4096 2025-03-11 12:46:45.000000000 +0000 distros
drwxr-xr-x 2 root root 4096 2025-03-11 12:50:21.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-03-11 12:46:45.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-03-11 12:46:24.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2025-03-11 12:50:21.000000000 +0000 nova

/distros:
total 228
-rwxr-xr-x 1 root root 120649 2025-03-11 11:58:04.000000000 +0000 lora_gw_2g4.dist
-rwxr-xr-x 1 root root 106554 2025-03-11 11:58:04.000000000 +0000 pcie_lora_gw.dist

/etc:
total 124
-rw-r--r-- 1 root root 122940 2025-03-11 11:58:04.000000000 +0000 rb-hci_app_cap_ax_1.8.3.bin

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 12:46:45.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 12:50:21.000000000 +0000 webfig

/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4532 2025-03-11 12:46:45.000000000 +0000 iot-4b17ae94ad5a.jg.gz
-rwxr-xr-x 1 root root   99 2025-03-11 12:46:45.000000000 +0000 iot.info
lrwxrwxrwx 1 root root   22 2025-03-11 12:50:21.000000000 +0000 iot.jg.gz -> iot-4b17ae94ad5a.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 12:46:24.000000000 +0000 modules

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-03-11 12:50:10.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-03-11 12:46:24.000000000 +0000 drivers
drwxr-xr-x 4 root root 4096 2025-03-11 12:50:06.000000000 +0000 kernel
-rw-r--r-- 1 root root   54 2025-03-11 12:50:14.000000000 +0000 modules.dep.iot

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 12:46:30.000000000 +0000 bluetooth

/lib/modules/5.6.3/drivers/bluetooth:
total 32
-rw-r--r-- 1 root root 29928 2025-03-11 12:46:30.000000000 +0000 nrf52.ko

/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 12:50:06.000000000 +0000 crypto
drwxr-xr-x 3 root root 4096 2025-03-11 12:50:06.000000000 +0000 net

/lib/modules/5.6.3/kernel/crypto:
total 28
-rw-r--r-- 1 root root 19592 2025-03-11 12:41:15.000000000 +0000 ecc.ko
-rw-r--r-- 1 root root  6936 2025-03-11 12:41:15.000000000 +0000 ecdh_generic.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 12:50:06.000000000 +0000 bluetooth

/lib/modules/5.6.3/kernel/net/bluetooth:
total 412
-rw-r--r-- 1 root root 421336 2025-03-11 12:41:23.000000000 +0000 bluetooth.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 12:50:21.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-03-11 12:50:21.000000000 +0000 lib

/nova/bin:
total 592
-rwxr-xr-x 1 root root 137236 2025-03-11 12:46:11.000000000 +0000 bluetooth
-rwxr-xr-x 1 root root  30424 2025-03-11 12:47:12.000000000 +0000 gpio
-rwxr-xr-x 1 root root 235752 2025-03-11 12:49:14.000000000 +0000 lora
-rwxr-xr-x 1 root root  13612 2025-03-11 12:47:54.000000000 +0000 lora-updater
-rwxr-xr-x 1 root root  87516 2025-03-11 12:47:47.000000000 +0000 lora-worker
-rwxr-xr-x 1 root root  34552 2025-03-11 12:47:03.000000000 +0000 modbus
-rwxr-xr-x 1 root root  50928 2025-03-11 12:47:27.000000000 +0000 mqtt

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 12:50:21.000000000 +0000 console

/nova/lib/console:
total 104
-rwxr-xr-x 1 root root 104447 2025-03-11 12:46:28.000000000 +0000 1270874112.mem
```

