### 3dccf5.cpio
#### Identification (`file <*>`):
```
ASCII cpio archive (SVR4 with no CRC)
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 484
-rw-r--r-- 1 root root      4 2026-01-29 11:10:08.000000000 +0000 TYPE
drwxrwxrwx 2 root root   4096 2026-06-08 15:59:16.315791403 +0100 dev
drwxr-xr-x 2 root root   4096 2026-01-29 11:10:01.000000000 +0000 etc
-rwxr-xr-x 1 root root 460080 2026-01-29 11:10:05.000000000 +0000 init
drwxr-xr-x 3 root root   4096 2026-06-08 15:59:16.316791405 +0100 lib
drwxr-xr-x 2 root root   4096 2026-01-29 11:10:01.000000000 +0000 mnt
drwxr-xr-x 2 root root   4096 2026-01-29 11:10:01.000000000 +0000 proc
lrwxrwxrwx 1 root root      7 2026-01-29 11:10:01.000000000 +0000 rw -> /mnt/rw
drwxr-xr-x 2 root root   4096 2026-06-08 15:59:16.320791415 +0100 sbin
drwxr-xr-x 2 root root   4096 2026-01-29 11:10:01.000000000 +0000 tmp

/dev:
total 0
crw-rw-rw- 1 root root   5,   1 2011-12-20 09:56:33.000000000 +0000 console
crw-rw-rw- 1 root root  10, 248 2011-12-20 09:56:33.000000000 +0000 flash
crw-rw-rw- 1 root root   1,   1 2011-12-20 09:56:33.000000000 +0000 mem
crw-rw-rw- 1 root root  90,   0 2011-12-20 09:56:33.000000000 +0000 mtd0
crw-rw-rw- 1 root root  90,   2 2011-12-20 09:56:33.000000000 +0000 mtd1
brw-rw-rw- 1 root root  31,   0 2011-12-20 09:56:33.000000000 +0000 mtdblock0
brw-rw-rw- 1 root root  31,   1 2011-12-20 09:56:33.000000000 +0000 mtdblock1
crw-rw-rw- 1 root root   1,   3 2011-12-20 09:56:33.000000000 +0000 null
crw-rw-rw- 1 root root   4,  64 2011-12-20 09:56:33.000000000 +0000 ttyS0
crw-rw-rw- 1 root root   4,  65 2011-12-20 09:56:33.000000000 +0000 ttyS1
crw-r--r-- 1 root root 248,   0 2011-12-20 09:58:25.000000000 +0000 ubi0
crw-r--r-- 1 root root 247,   0 2011-12-20 09:58:37.000000000 +0000 ubi1
crw-rw-rw- 1 root root  10,  63 2011-12-20 09:56:33.000000000 +0000 ubi_ctrl
crw-rw-rw- 1 root root   1,   9 2011-12-20 09:56:33.000000000 +0000 urandom
crw-rw-rw- 1 root root   1,   5 2011-12-20 09:56:33.000000000 +0000 zero

/etc:
total 0

/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-06-08 15:59:16.316791405 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2026-06-08 15:59:16.318791410 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-06-08 15:59:16.318791410 +0100 drivers
drwxr-xr-x 5 root root 4096 2026-06-08 15:59:16.317791408 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.318791410 +0100 misc

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.320791415 +0100 net

/lib/modules/5.6.3/drivers/net:
total 996
-rw-r--r-- 1 root root  62744 2026-01-29 10:38:58.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root  66288 2026-01-29 10:38:03.000000000 +0000 atl1c.ko
-rw-r--r-- 1 root root  20408 2026-01-29 10:42:20.000000000 +0000 mpls_fp.ko
-rw-r--r-- 1 root root 386800 2026-01-29 10:42:20.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root  51464 2026-01-29 10:37:41.000000000 +0000 phy_amcc_qt2025.ko
-rw-r--r-- 1 root root 155472 2026-01-29 10:37:44.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root  15416 2026-01-29 10:37:41.000000000 +0000 phy_ti_tlk10232.ko
-rw-r--r-- 1 root root 109464 2026-01-29 10:39:02.000000000 +0000 switch.ko
-rw-r--r-- 1 root root 137952 2026-01-29 10:39:49.000000000 +0000 tilegx.ko

/lib/modules/5.6.3/kernel:
total 12
drwxr-xr-x 3 root root 4096 2026-06-08 15:59:16.316791405 +0100 drivers
drwxr-xr-x 4 root root 4096 2026-06-08 15:59:16.316791405 +0100 lib
drwxr-xr-x 6 root root 4096 2026-06-08 15:59:16.317791408 +0100 net

/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 6 root root 4096 2026-06-08 15:59:16.317791408 +0100 net

/lib/modules/5.6.3/kernel/drivers/net:
total 156
-rw-r--r-- 1 root root 70912 2026-01-29 10:41:39.000000000 +0000 macsec.ko
drwxr-xr-x 2 root root  4096 2026-06-08 15:59:16.316791405 +0100 phy
drwxr-xr-x 2 root root  4096 2026-06-08 15:59:16.316791405 +0100 slip
drwxr-xr-x 2 root root  4096 2026-06-08 15:59:16.317791408 +0100 usb
-rw-r--r-- 1 root root 29952 2026-01-29 10:41:40.000000000 +0000 veth.ko
-rw-r--r-- 1 root root 35336 2026-01-29 10:41:40.000000000 +0000 vrf.ko
drwxr-xr-x 2 root root  4096 2026-06-08 15:59:16.316791405 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/phy:
total 140
-rw-r--r-- 1 root root 140608 2026-01-29 10:41:39.000000000 +0000 libphy.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 12
-rw-r--r-- 1 root root 11408 2026-01-29 10:41:40.000000000 +0000 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 152
-rw-r--r-- 1 root root 31568 2026-01-29 10:41:40.000000000 +0000 ax88179_178a.ko
-rw-r--r-- 1 root root 22456 2026-01-29 10:41:40.000000000 +0000 sierra_net.ko
-rw-r--r-- 1 root root 43880 2026-01-29 10:41:40.000000000 +0000 smsc95xx.ko
-rw-r--r-- 1 root root 50920 2026-01-29 10:41:40.000000000 +0000 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 148
-rw-r--r-- 1 root root 149392 2026-01-29 10:41:40.000000000 +0000 wireguard.ko

/lib/modules/5.6.3/kernel/lib:
total 16
-rw-r--r-- 1 root root 4552 2026-01-29 10:41:42.000000000 +0000 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.316791405 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.316791405 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 36
-rw-r--r-- 1 root root 33832 2026-01-29 10:41:43.000000000 +0000 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 24
-rw-r--r-- 1 root root 23080 2026-01-29 10:41:43.000000000 +0000 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 16
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.317791408 +0100 802
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.317791408 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.318791410 +0100 ipv6
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.317791408 +0100 mpls

/lib/modules/5.6.3/kernel/net/802:
total 20
-rw-r--r-- 1 root root 17992 2026-01-29 10:41:43.000000000 +0000 mrp.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 32
-rw-r--r-- 1 root root 30552 2026-01-29 10:41:43.000000000 +0000 ip_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 44
-rw-r--r-- 1 root root 17288 2026-01-29 10:41:44.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root 22712 2026-01-29 10:41:44.000000000 +0000 esp6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 96
-rw-r--r-- 1 root root  8912 2026-01-29 10:41:44.000000000 +0000 mpls_iptunnel.ko
-rw-r--r-- 1 root root 82016 2026-01-29 10:41:44.000000000 +0000 mpls_router.ko

/lib/modules/5.6.3/misc:
total 164
-rw-r--r-- 1 root root 86920 2026-01-29 10:37:10.000000000 +0000 flash.ko
-rw-r--r-- 1 root root 26536 2026-01-29 10:39:58.000000000 +0000 lcd.ko
-rw-r--r-- 1 root root  9440 2026-01-29 10:36:17.000000000 +0000 panics.ko
-rw-r--r-- 1 root root 35008 2026-01-29 10:39:56.000000000 +0000 ts.ko

/mnt:
total 0

/proc:
total 0

/sbin:
total 68
-rwxr-xr-x 1 root root 66184 2026-01-29 11:10:05.000000000 +0000 nandfix

/tmp:
total 0
```

