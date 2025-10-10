### 481d0d.cpio
#### Identification (`file <*>`):
```
ASCII cpio archive (SVR4 with no CRC)
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 292
-rw-r--r-- 1 root root      4 2025-10-06 15:17:28.000000000 +0100 TYPE
drwxrwxrwx 2 root root   4096 2025-10-10 21:56:06.142863883 +0100 dev
drwxr-xr-x 2 root root   4096 2025-10-06 15:17:01.000000000 +0100 etc
-rwxr-xr-x 1 root root 264520 2025-10-06 15:17:06.000000000 +0100 init
drwxr-xr-x 3 root root   4096 2025-10-10 21:56:06.143863895 +0100 lib
drwxr-xr-x 2 root root   4096 2025-10-06 15:17:01.000000000 +0100 mnt
drwxr-xr-x 2 root root   4096 2025-10-06 15:17:01.000000000 +0100 proc
lrwxrwxrwx 1 root root      7 2025-10-06 15:17:01.000000000 +0100 rw -> /mnt/rw
drwxr-xr-x 2 root root   4096 2025-10-10 21:56:06.149863966 +0100 sbin
drwxr-xr-x 2 root root   4096 2025-10-06 15:17:01.000000000 +0100 tmp

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
drwxr-xr-x 3 root root 4096 2025-10-10 21:56:06.143863895 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2025-10-10 21:56:06.147863942 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 21:56:06.147863942 +0100 drivers
drwxr-xr-x 5 root root 4096 2025-10-10 21:56:06.145863919 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.147863942 +0100 misc

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.149863966 +0100 net

/lib/modules/5.6.3/drivers/net:
total 624
-rw-r--r-- 1 root root  24716 2025-10-06 14:45:39.000000000 +0100 ag7100.ko
-rw-r--r-- 1 root root  39352 2025-10-06 14:45:47.000000000 +0100 ag7240.ko
-rw-r--r-- 1 root root  44268 2025-10-06 14:47:21.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root  26912 2025-10-06 14:47:22.000000000 +0100 aths16.ko
-rw-r--r-- 1 root root  10432 2025-10-06 14:47:22.000000000 +0100 icplus.ko
-rw-r--r-- 1 root root  10132 2025-10-06 14:51:03.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root  19200 2025-10-06 14:45:54.000000000 +0100 music_gmac.ko
-rw-r--r-- 1 root root   9412 2025-10-06 14:45:51.000000000 +0100 music_support.ko
-rw-r--r-- 1 root root  55180 2025-10-06 14:47:22.000000000 +0100 music_switch.ko
-rw-r--r-- 1 root root 174740 2025-10-06 14:51:04.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root  41456 2025-10-06 14:46:55.000000000 +0100 phy_amcc_qt2025.ko
-rw-r--r-- 1 root root  91020 2025-10-06 14:46:58.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root   3528 2025-10-06 14:49:12.000000000 +0100 sram.ko
-rw-r--r-- 1 root root  58332 2025-10-06 14:47:27.000000000 +0100 switch.ko

/lib/modules/5.6.3/kernel:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 21:56:06.144863907 +0100 drivers
drwxr-xr-x 4 root root 4096 2025-10-10 21:56:06.144863907 +0100 lib
drwxr-xr-x 6 root root 4096 2025-10-10 21:56:06.146863931 +0100 net

/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 6 root root 4096 2025-10-10 21:56:06.145863919 +0100 net

/lib/modules/5.6.3/kernel/drivers/net:
total 92
drwxr-xr-x 3 root root  4096 2025-10-10 21:56:06.145863919 +0100 ethernet
-rw-r--r-- 1 root root 38216 2025-10-06 14:49:14.000000000 +0100 macsec.ko
drwxr-xr-x 2 root root  4096 2025-10-10 21:56:06.144863907 +0100 slip
drwxr-xr-x 2 root root  4096 2025-10-10 21:56:06.145863919 +0100 usb
-rw-r--r-- 1 root root 15932 2025-10-06 14:49:15.000000000 +0100 veth.ko
-rw-r--r-- 1 root root 18388 2025-10-06 14:49:15.000000000 +0100 vrf.ko
drwxr-xr-x 2 root root  4096 2025-10-10 21:56:06.144863907 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.145863919 +0100 intel

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 40
-rw-r--r-- 1 root root 37256 2025-10-06 14:49:14.000000000 +0100 e100.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6052 2025-10-06 14:49:15.000000000 +0100 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 92
-rw-r--r-- 1 root root 19668 2025-10-06 14:49:15.000000000 +0100 ax88179_178a.ko
-rw-r--r-- 1 root root 12764 2025-10-06 14:49:15.000000000 +0100 sierra_net.ko
-rw-r--r-- 1 root root 25460 2025-10-06 14:49:15.000000000 +0100 smsc95xx.ko
-rw-r--r-- 1 root root 26536 2025-10-06 14:49:15.000000000 +0100 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 80
-rw-r--r-- 1 root root 80336 2025-10-06 14:49:15.000000000 +0100 wireguard.ko

/lib/modules/5.6.3/kernel/lib:
total 12
-rw-r--r-- 1 root root 3364 2025-10-06 14:49:19.000000000 +0100 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.144863907 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.144863907 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18368 2025-10-06 14:49:19.000000000 +0100 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14908 2025-10-06 14:49:19.000000000 +0100 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 16
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.146863931 +0100 802
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.145863919 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.146863931 +0100 ipv6
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.146863931 +0100 mpls

/lib/modules/5.6.3/kernel/net/802:
total 12
-rw-r--r-- 1 root root 10004 2025-10-06 14:49:19.000000000 +0100 mrp.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 20
-rw-r--r-- 1 root root 16692 2025-10-06 14:49:21.000000000 +0100 ip_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 28
-rw-r--r-- 1 root root  8944 2025-10-06 14:49:21.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root 12364 2025-10-06 14:49:21.000000000 +0100 esp6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 52
-rw-r--r-- 1 root root  5048 2025-10-06 14:49:22.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root 42720 2025-10-06 14:49:22.000000000 +0100 mpls_router.ko

/lib/modules/5.6.3/misc:
total 108
-rw-r--r-- 1 root root 57584 2025-10-06 14:46:19.000000000 +0100 flash.ko
-rw-r--r-- 1 root root 14672 2025-10-06 14:47:19.000000000 +0100 lcd.ko
-rw-r--r-- 1 root root  8636 2025-10-06 14:45:34.000000000 +0100 panics.ko
-rw-r--r-- 1 root root 19324 2025-10-06 14:47:19.000000000 +0100 ts.ko

/mnt:
total 0

/proc:
total 0

/sbin:
total 28
-rwxr-xr-x 1 root root 24844 2025-10-06 15:17:06.000000000 +0100 nandfix

/tmp:
total 0
```

