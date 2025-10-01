### 9d0004.cpio
#### Identification (`file <*>`):
```
ASCII cpio archive (SVR4 with no CRC)
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 276
-rw-r--r-- 1 root root      6 2025-02-06 10:18:03.000000000 +0000 TYPE
drwxrwxrwx 2 root root   4096 2025-10-01 15:46:38.229665204 +0100 dev
drwxr-xr-x 2 root root   4096 2025-02-06 10:17:00.000000000 +0000 etc
-rwxr-xr-x 1 root root 247088 2025-02-06 10:17:06.000000000 +0000 init
drwxr-xr-x 3 root root   4096 2025-10-01 15:46:38.232665206 +0100 lib
drwxr-xr-x 2 root root   4096 2025-02-06 10:17:00.000000000 +0000 mnt
drwxr-xr-x 2 root root   4096 2025-02-06 10:17:00.000000000 +0000 proc
lrwxrwxrwx 1 root root      7 2025-02-06 10:17:00.000000000 +0000 rw -> /mnt/rw
drwxr-xr-x 2 root root   4096 2025-10-01 15:46:38.231665205 +0100 sbin
drwxr-xr-x 2 root root   4096 2025-02-06 10:17:00.000000000 +0000 tmp

/dev:
total 0
crw-rw-rw- 1 root root   5,   1 2011-02-15 11:27:24.000000000 +0000 console
crw-rw-rw- 1 root root  10, 248 2011-02-15 11:27:24.000000000 +0000 flash
crw-rw-rw- 1 root root   1,   1 2011-02-15 11:27:24.000000000 +0000 mem
crw-rw-rw- 1 root root  90,   0 2011-02-15 11:27:24.000000000 +0000 mtd0
crw-rw-rw- 1 root root  90,   2 2011-02-15 11:27:24.000000000 +0000 mtd1
brw-rw-rw- 1 root root  31,   0 2011-02-15 11:27:24.000000000 +0000 mtdblock0
brw-rw-rw- 1 root root  31,   1 2011-02-15 11:27:24.000000000 +0000 mtdblock1
crw-rw-rw- 1 root root   1,   3 2011-02-15 11:27:24.000000000 +0000 null
crw-rw-rw- 1 root root   4,  64 2011-02-15 11:27:24.000000000 +0000 ttyS0
crw-rw-rw- 1 root root   4,  65 2011-02-15 11:27:24.000000000 +0000 ttyS1
crw-r--r-- 1 root root 254,   0 2011-02-15 12:08:17.000000000 +0000 ubi0
crw-r--r-- 1 root root 253,   0 2011-02-15 12:08:22.000000000 +0000 ubi1
crw-rw-rw- 1 root root  10,  63 2011-02-15 11:28:01.000000000 +0000 ubi_ctrl
crw-rw-rw- 1 root root   1,   9 2011-02-15 11:27:24.000000000 +0000 urandom
crw-rw-rw- 1 root root   1,   5 2011-02-15 11:27:24.000000000 +0000 zero

/etc:
total 0

/lib:
total 248
-rwxr-xr-x 1 root root 247440 2025-02-06 10:17:10.000000000 +0000 libc.so
drwxr-xr-x 3 root root   4096 2025-10-01 15:46:38.232665206 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2025-10-01 15:46:38.233665207 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 2 root root 4096 2025-02-06 10:17:07.000000000 +0000 drivers
drwxr-xr-x 6 root root 4096 2025-10-01 15:46:38.233665207 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-01 15:46:38.236665209 +0100 misc

/lib/modules/5.6.3/drivers:
total 0

/lib/modules/5.6.3/kernel:
total 16
drwxr-xr-x 2 root root 4096 2025-02-06 10:17:07.000000000 +0000 crypto
drwxr-xr-x 7 root root 4096 2025-10-01 15:46:38.233665207 +0100 drivers
drwxr-xr-x 7 root root 4096 2025-10-01 15:46:38.233665207 +0100 fs
drwxr-xr-x 4 root root 4096 2025-10-01 15:46:38.233665207 +0100 lib

/lib/modules/5.6.3/kernel/crypto:
total 0

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x  3 root root 4096 2025-10-01 15:46:38.233665207 +0100 dma
drwxr-xr-x  3 root root 4096 2025-10-01 15:46:38.233665207 +0100 hid
drwxr-xr-x  3 root root 4096 2025-10-01 15:46:38.233665207 +0100 pci
drwxr-xr-x  2 root root 4096 2025-02-06 10:17:07.000000000 +0000 ssb
drwxr-xr-x 10 root root 4096 2025-10-01 15:46:38.233665207 +0100 usb

/lib/modules/5.6.3/kernel/drivers/dma:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:17:07.000000000 +0000 al

/lib/modules/5.6.3/kernel/drivers/dma/al:
total 0

/lib/modules/5.6.3/kernel/drivers/hid:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:17:07.000000000 +0000 usbhid

/lib/modules/5.6.3/kernel/drivers/hid/usbhid:
total 0

/lib/modules/5.6.3/kernel/drivers/pci:
total 4
drwxr-xr-x 3 root root 4096 2025-10-01 15:46:38.233665207 +0100 controller

/lib/modules/5.6.3/kernel/drivers/pci/controller:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:17:07.000000000 +0000 dwc

/lib/modules/5.6.3/kernel/drivers/pci/controller/dwc:
total 0

/lib/modules/5.6.3/kernel/drivers/ssb:
total 0

/lib/modules/5.6.3/kernel/drivers/usb:
total 32
drwxr-xr-x 2 root root 4096 2025-02-06 10:17:07.000000000 +0000 class
drwxr-xr-x 2 root root 4096 2025-10-01 15:46:38.233665207 +0100 common
drwxr-xr-x 2 root root 4096 2025-10-01 15:46:38.233665207 +0100 core
drwxr-xr-x 2 root root 4096 2025-02-06 10:17:07.000000000 +0000 dwc3
drwxr-xr-x 2 root root 4096 2025-10-01 15:46:38.235665208 +0100 host
drwxr-xr-x 2 root root 4096 2025-02-06 10:17:07.000000000 +0000 phy
drwxr-xr-x 2 root root 4096 2025-02-06 10:17:07.000000000 +0000 serial
drwxr-xr-x 2 root root 4096 2025-10-01 15:46:38.235665208 +0100 storage

/lib/modules/5.6.3/kernel/drivers/usb/class:
total 0

/lib/modules/5.6.3/kernel/drivers/usb/common:
total 12
-rw-r--r-- 1 root root 10688 2025-02-06 09:52:15.000000000 +0000 usb-common.ko

/lib/modules/5.6.3/kernel/drivers/usb/core:
total 284
-rw-r--r-- 1 root root 288688 2025-02-06 09:52:15.000000000 +0000 usbcore.ko

/lib/modules/5.6.3/kernel/drivers/usb/dwc3:
total 0

/lib/modules/5.6.3/kernel/drivers/usb/host:
total 160
-rw-r--r-- 1 root root 149664 2025-02-06 09:52:16.000000000 +0000 xhci-hcd.ko
-rw-r--r-- 1 root root  10296 2025-02-06 09:52:16.000000000 +0000 xhci-pci.ko

/lib/modules/5.6.3/kernel/drivers/usb/phy:
total 0

/lib/modules/5.6.3/kernel/drivers/usb/serial:
total 0

/lib/modules/5.6.3/kernel/drivers/usb/storage:
total 108
-rw-r--r-- 1 root root 107888 2025-02-06 09:52:16.000000000 +0000 usb-storage.ko

/lib/modules/5.6.3/kernel/fs:
total 20
drwxr-xr-x 2 root root 4096 2025-02-06 10:17:07.000000000 +0000 cifs
drwxr-xr-x 2 root root 4096 2025-02-06 10:17:07.000000000 +0000 exfat
drwxr-xr-x 2 root root 4096 2025-10-01 15:46:38.236665209 +0100 isofs
drwxr-xr-x 2 root root 4096 2025-02-06 10:17:07.000000000 +0000 ksmbd
drwxr-xr-x 2 root root 4096 2025-02-06 10:17:07.000000000 +0000 ntfs3

/lib/modules/5.6.3/kernel/fs/cifs:
total 0

/lib/modules/5.6.3/kernel/fs/exfat:
total 0

/lib/modules/5.6.3/kernel/fs/isofs:
total 44
-rw-r--r-- 1 root root 42200 2025-02-06 09:52:16.000000000 +0000 isofs.ko

/lib/modules/5.6.3/kernel/fs/ksmbd:
total 0

/lib/modules/5.6.3/kernel/fs/ntfs3:
total 0

/lib/modules/5.6.3/kernel/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:17:07.000000000 +0000 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-02-06 10:17:07.000000000 +0000 zlib_inflate

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 0

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 0

/lib/modules/5.6.3/misc:
total 132
-rw-r--r-- 1 root root  9504 2025-02-06 09:48:28.000000000 +0000 flash-uefi.ko
-rw-r--r-- 1 root root 82272 2025-02-06 09:48:29.000000000 +0000 flash.ko
-rw-r--r-- 1 root root 16344 2025-02-06 09:47:55.000000000 +0000 panics.ko
-rw-r--r-- 1 root root 17432 2025-02-06 09:52:50.000000000 +0000 prestera_pci.ko

/mnt:
total 0

/proc:
total 0

/sbin:
total 344
-rwxr-xr-x 1 root root 321132 2025-02-06 09:54:08.000000000 +0000 mke2fs
-rwxr-xr-x 1 root root  25584 2025-02-06 10:17:06.000000000 +0000 nandfix

/tmp:
total 0
```

