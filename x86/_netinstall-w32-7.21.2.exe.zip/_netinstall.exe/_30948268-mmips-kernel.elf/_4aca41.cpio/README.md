### 4aca41.cpio
#### Identification (`file <*>`):
```
ASCII cpio archive (SVR4 with no CRC)
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 292
-rw-r--r-- 1 root root      4 2026-01-29 11:10:28.000000000 +0000 TYPE
drwxrwxrwx 2 root root   4096 2026-06-08 15:58:59.552975778 +0100 dev
drwxr-xr-x 2 root root   4096 2026-01-29 11:10:01.000000000 +0000 etc
-rwxr-xr-x 1 root root 263688 2026-01-29 11:10:06.000000000 +0000 init
drwxr-xr-x 3 root root   4096 2026-06-08 15:58:59.553975780 +0100 lib
drwxr-xr-x 2 root root   4096 2026-01-29 11:10:01.000000000 +0000 mnt
drwxr-xr-x 2 root root   4096 2026-01-29 11:10:01.000000000 +0000 proc
lrwxrwxrwx 1 root root      7 2026-01-29 11:10:01.000000000 +0000 rw -> /mnt/rw
drwxr-xr-x 2 root root   4096 2026-06-08 15:58:59.558975793 +0100 sbin
drwxr-xr-x 2 root root   4096 2026-01-29 11:10:01.000000000 +0000 tmp

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
drwxr-xr-x 3 root root 4096 2026-06-08 15:58:59.553975780 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2026-06-08 15:58:59.556975788 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-06-08 15:58:59.556975788 +0100 drivers
drwxr-xr-x 5 root root 4096 2026-06-08 15:58:59.555975785 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:59.556975788 +0100 misc

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:59.558975793 +0100 net

/lib/modules/5.6.3/drivers/net:
total 468
-rw-r--r-- 1 root root  40696 2026-01-29 10:39:00.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root  38672 2026-01-29 10:39:00.000000000 +0000 mediatek_switch.ko
-rw-r--r-- 1 root root  10772 2026-01-29 10:42:21.000000000 +0000 mpls_fp.ko
-rw-r--r-- 1 root root 200668 2026-01-29 10:42:22.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root  91104 2026-01-29 10:37:48.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root  24840 2026-01-29 10:40:59.000000000 +0000 raether.ko
-rw-r--r-- 1 root root  60664 2026-01-29 10:39:03.000000000 +0000 switch.ko

/lib/modules/5.6.3/kernel:
total 12
drwxr-xr-x 3 root root 4096 2026-06-08 15:58:59.554975783 +0100 drivers
drwxr-xr-x 4 root root 4096 2026-06-08 15:58:59.554975783 +0100 lib
drwxr-xr-x 6 root root 4096 2026-06-08 15:58:59.556975788 +0100 net

/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 6 root root 4096 2026-06-08 15:58:59.555975785 +0100 net

/lib/modules/5.6.3/kernel/drivers/net:
total 100
drwxr-xr-x 3 root root  4096 2026-06-08 15:58:59.555975785 +0100 ethernet
-rw-r--r-- 1 root root 41672 2026-01-29 10:40:30.000000000 +0000 macsec.ko
drwxr-xr-x 2 root root  4096 2026-06-08 15:58:59.554975783 +0100 slip
drwxr-xr-x 2 root root  4096 2026-06-08 15:58:59.555975785 +0100 usb
-rw-r--r-- 1 root root 17072 2026-01-29 10:40:31.000000000 +0000 veth.ko
-rw-r--r-- 1 root root 19632 2026-01-29 10:40:31.000000000 +0000 vrf.ko
drwxr-xr-x 2 root root  4096 2026-06-08 15:58:59.554975783 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 4
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:59.555975785 +0100 intel

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 40
-rw-r--r-- 1 root root 37232 2026-01-29 10:40:30.000000000 +0000 e100.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6276 2026-01-29 10:40:30.000000000 +0000 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 92
-rw-r--r-- 1 root root 19604 2026-01-29 10:40:30.000000000 +0000 ax88179_178a.ko
-rw-r--r-- 1 root root 12832 2026-01-29 10:40:31.000000000 +0000 sierra_net.ko
-rw-r--r-- 1 root root 25512 2026-01-29 10:40:31.000000000 +0000 smsc95xx.ko
-rw-r--r-- 1 root root 27792 2026-01-29 10:40:31.000000000 +0000 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 84
-rw-r--r-- 1 root root 82004 2026-01-29 10:40:31.000000000 +0000 wireguard.ko

/lib/modules/5.6.3/kernel/lib:
total 12
-rw-r--r-- 1 root root 3428 2026-01-29 10:40:34.000000000 +0000 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:59.554975783 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:59.553975780 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18400 2026-01-29 10:40:35.000000000 +0000 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14972 2026-01-29 10:40:35.000000000 +0000 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 16
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:59.556975788 +0100 802
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:59.555975785 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:59.556975788 +0100 ipv6
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:59.555975785 +0100 mpls

/lib/modules/5.6.3/kernel/net/802:
total 12
-rw-r--r-- 1 root root 10304 2026-01-29 10:40:35.000000000 +0000 mrp.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 20
-rw-r--r-- 1 root root 17220 2026-01-29 10:40:36.000000000 +0000 ip_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 24
-rw-r--r-- 1 root root  9008 2026-01-29 10:40:37.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root 11872 2026-01-29 10:40:37.000000000 +0000 esp6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 56
-rw-r--r-- 1 root root  5256 2026-01-29 10:40:38.000000000 +0000 mpls_iptunnel.ko
-rw-r--r-- 1 root root 45152 2026-01-29 10:40:38.000000000 +0000 mpls_router.ko

/lib/modules/5.6.3/misc:
total 60
-rw-r--r-- 1 root root 48752 2026-01-29 10:37:10.000000000 +0000 flash.ko
-rw-r--r-- 1 root root  8764 2026-01-29 10:36:17.000000000 +0000 panics.ko

/mnt:
total 0

/proc:
total 0

/sbin:
total 28
-rwxr-xr-x 1 root root 24892 2026-01-29 11:10:06.000000000 +0000 nandfix

/tmp:
total 0
```

