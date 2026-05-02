### 4b2a41.cpio
#### Identification (`file <*>`):
```
ASCII cpio archive (SVR4 with no CRC)
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 296
-rw-r--r-- 1 root root      4 2026-04-22 09:33:22.000000000 +0100 TYPE
drwxrwxrwx 2 root root   4096 2026-05-02 20:33:28.184647118 +0100 dev
drwxr-xr-x 2 root root   4096 2026-04-22 09:33:09.000000000 +0100 etc
-rwxr-xr-x 1 root root 268136 2026-04-22 09:33:12.000000000 +0100 init
drwxr-xr-x 3 root root   4096 2026-05-02 20:33:28.185647118 +0100 lib
drwxr-xr-x 2 root root   4096 2026-04-22 09:33:09.000000000 +0100 mnt
drwxr-xr-x 2 root root   4096 2026-04-22 09:33:09.000000000 +0100 proc
lrwxrwxrwx 1 root root      7 2026-04-22 09:33:09.000000000 +0100 rw -> /mnt/rw
drwxr-xr-x 2 root root   4096 2026-05-02 20:33:28.190647122 +0100 sbin
drwxr-xr-x 2 root root   4096 2026-04-22 09:33:09.000000000 +0100 tmp

/dev:
total 0
crw-rw-rw- 1 root root  5,   1 1970-01-01 01:00:00.000000000 +0100 console
crw-rw-rw- 1 root root 10, 248 1970-01-01 01:00:00.000000000 +0100 flash
crw-rw-rw- 1 root root  1,   1 1970-01-01 01:00:00.000000000 +0100 mem
crw-rw-rw- 1 root root 90,   0 1970-01-01 01:00:00.000000000 +0100 mtd0
crw-rw-rw- 1 root root 90,   2 1970-01-01 01:00:00.000000000 +0100 mtd1
brw-rw-rw- 1 root root 31,   0 1970-01-01 01:00:00.000000000 +0100 mtdblock0
brw-rw-rw- 1 root root 31,   1 1970-01-01 01:00:00.000000000 +0100 mtdblock1
crw-rw-rw- 1 root root  1,   3 1970-01-01 01:00:00.000000000 +0100 null
crw-rw-rw- 1 root root  4,  64 1970-01-01 01:00:00.000000000 +0100 ttyS0
crw-rw-rw- 1 root root  4,  65 1970-01-01 01:00:00.000000000 +0100 ttyS1
crw-rw-rw- 1 root root  1,   9 1970-01-01 01:00:00.000000000 +0100 urandom
crw-rw-rw- 1 root root  1,   5 1970-01-01 01:00:00.000000000 +0100 zero

/etc:
total 0

/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-05-02 20:33:28.185647118 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2026-05-02 20:33:28.188647121 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-05-02 20:33:28.188647121 +0100 drivers
drwxr-xr-x 5 root root 4096 2026-05-02 20:33:28.187647120 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-05-02 20:33:28.188647121 +0100 misc

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-05-02 20:33:28.190647122 +0100 net

/lib/modules/5.6.3/drivers/net:
total 476
-rw-r--r-- 1 root root  40696 2026-04-22 09:21:37.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root  38672 2026-04-22 09:21:38.000000000 +0100 mediatek_switch.ko
-rw-r--r-- 1 root root  10772 2026-04-22 09:23:03.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root 200732 2026-04-22 09:23:04.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root  91408 2026-04-22 09:21:35.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root  24840 2026-04-22 09:20:48.000000000 +0100 raether.ko
-rw-r--r-- 1 root root  61520 2026-04-22 09:21:40.000000000 +0100 switch.ko

/lib/modules/5.6.3/kernel:
total 12
drwxr-xr-x 3 root root 4096 2026-05-02 20:33:28.186647119 +0100 drivers
drwxr-xr-x 4 root root 4096 2026-05-02 20:33:28.186647119 +0100 lib
drwxr-xr-x 6 root root 4096 2026-05-02 20:33:28.188647121 +0100 net

/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 6 root root 4096 2026-05-02 20:33:28.187647120 +0100 net

/lib/modules/5.6.3/kernel/drivers/net:
total 80
drwxr-xr-x 3 root root  4096 2026-05-02 20:33:28.187647120 +0100 ethernet
-rw-r--r-- 1 root root 41704 2026-04-22 09:23:03.000000000 +0100 macsec.ko
drwxr-xr-x 2 root root  4096 2026-05-02 20:33:28.186647119 +0100 slip
drwxr-xr-x 2 root root  4096 2026-05-02 20:33:28.187647120 +0100 usb
-rw-r--r-- 1 root root 17072 2026-04-22 09:23:03.000000000 +0100 veth.ko
drwxr-xr-x 2 root root  4096 2026-05-02 20:33:28.186647119 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 4
drwxr-xr-x 2 root root 4096 2026-05-02 20:33:28.187647120 +0100 intel

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 40
-rw-r--r-- 1 root root 37232 2026-04-22 09:23:03.000000000 +0100 e100.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6276 2026-04-22 09:23:03.000000000 +0100 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 104
-rw-r--r-- 1 root root 19604 2026-04-22 09:23:03.000000000 +0100 ax88179_178a.ko
-rw-r--r-- 1 root root  9924 2026-04-22 09:23:03.000000000 +0100 ipheth.ko
-rw-r--r-- 1 root root 12832 2026-04-22 09:23:03.000000000 +0100 sierra_net.ko
-rw-r--r-- 1 root root 25512 2026-04-22 09:23:03.000000000 +0100 smsc95xx.ko
-rw-r--r-- 1 root root 27792 2026-04-22 09:23:03.000000000 +0100 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 72
-rw-r--r-- 1 root root 71928 2026-04-22 09:23:03.000000000 +0100 wireguard.ko

/lib/modules/5.6.3/kernel/lib:
total 12
-rw-r--r-- 1 root root 3428 2026-04-22 09:23:04.000000000 +0100 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2026-05-02 20:33:28.186647119 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2026-05-02 20:33:28.185647118 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18400 2026-04-22 09:23:04.000000000 +0100 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14972 2026-04-22 09:23:04.000000000 +0100 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 16
drwxr-xr-x 2 root root 4096 2026-05-02 20:33:28.188647121 +0100 802
drwxr-xr-x 2 root root 4096 2026-05-02 20:33:28.187647120 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-05-02 20:33:28.188647121 +0100 ipv6
drwxr-xr-x 2 root root 4096 2026-05-02 20:33:28.187647120 +0100 mpls

/lib/modules/5.6.3/kernel/net/802:
total 12
-rw-r--r-- 1 root root 10304 2026-04-22 09:23:04.000000000 +0100 mrp.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 20
-rw-r--r-- 1 root root 17220 2026-04-22 09:23:05.000000000 +0100 ip_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 24
-rw-r--r-- 1 root root  9008 2026-04-22 09:23:05.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root 11872 2026-04-22 09:23:05.000000000 +0100 esp6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 56
-rw-r--r-- 1 root root  5256 2026-04-22 09:23:05.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root 45152 2026-04-22 09:23:05.000000000 +0100 mpls_router.ko

/lib/modules/5.6.3/misc:
total 60
-rw-r--r-- 1 root root 48784 2026-04-22 09:21:05.000000000 +0100 flash.ko
-rw-r--r-- 1 root root  8796 2026-04-22 09:20:30.000000000 +0100 panics.ko

/mnt:
total 0

/proc:
total 0

/sbin:
total 28
-rwxr-xr-x 1 root root 25532 2026-04-22 09:33:12.000000000 +0100 nandfix

/tmp:
total 0
```

