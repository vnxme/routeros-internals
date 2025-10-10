### 3dd1fd.cpio
#### Identification (`file <*>`):
```
ASCII cpio archive (SVR4 with no CRC)
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 484
-rw-r--r-- 1 root root      4 2025-10-06 15:17:09.000000000 +0100 TYPE
drwxrwxrwx 2 root root   4096 2025-10-10 21:56:06.280865515 +0100 dev
drwxr-xr-x 2 root root   4096 2025-10-06 15:17:01.000000000 +0100 etc
-rwxr-xr-x 1 root root 460080 2025-10-06 15:17:06.000000000 +0100 init
drwxr-xr-x 3 root root   4096 2025-10-10 21:56:06.282865539 +0100 lib
drwxr-xr-x 2 root root   4096 2025-10-06 15:17:01.000000000 +0100 mnt
drwxr-xr-x 2 root root   4096 2025-10-06 15:17:01.000000000 +0100 proc
lrwxrwxrwx 1 root root      7 2025-10-06 15:17:01.000000000 +0100 rw -> /mnt/rw
drwxr-xr-x 2 root root   4096 2025-10-10 21:56:06.291865646 +0100 sbin
drwxr-xr-x 2 root root   4096 2025-10-06 15:17:01.000000000 +0100 tmp

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
drwxr-xr-x 3 root root 4096 2025-10-10 21:56:06.282865539 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2025-10-10 21:56:06.287865598 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 21:56:06.287865598 +0100 drivers
drwxr-xr-x 5 root root 4096 2025-10-10 21:56:06.285865575 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.286865587 +0100 misc

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.290865634 +0100 net

/lib/modules/5.6.3/drivers/net:
total 992
-rw-r--r-- 1 root root  62680 2025-10-06 14:47:21.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root  66224 2025-10-06 14:46:51.000000000 +0100 atl1c.ko
-rw-r--r-- 1 root root  20408 2025-10-06 14:51:03.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root 384928 2025-10-06 14:51:04.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root  51464 2025-10-06 14:46:55.000000000 +0100 phy_amcc_qt2025.ko
-rw-r--r-- 1 root root 155456 2025-10-06 14:46:57.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root  15416 2025-10-06 14:46:55.000000000 +0100 phy_ti_tlk10232.ko
-rw-r--r-- 1 root root 109464 2025-10-06 14:47:27.000000000 +0100 switch.ko
-rw-r--r-- 1 root root 137952 2025-10-06 14:47:56.000000000 +0100 tilegx.ko

/lib/modules/5.6.3/kernel:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 21:56:06.282865539 +0100 drivers
drwxr-xr-x 4 root root 4096 2025-10-10 21:56:06.282865539 +0100 lib
drwxr-xr-x 6 root root 4096 2025-10-10 21:56:06.286865587 +0100 net

/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 6 root root 4096 2025-10-10 21:56:06.285865575 +0100 net

/lib/modules/5.6.3/kernel/drivers/net:
total 156
-rw-r--r-- 1 root root 70912 2025-10-06 14:51:09.000000000 +0100 macsec.ko
drwxr-xr-x 2 root root  4096 2025-10-10 21:56:06.283865551 +0100 phy
drwxr-xr-x 2 root root  4096 2025-10-10 21:56:06.282865539 +0100 slip
drwxr-xr-x 2 root root  4096 2025-10-10 21:56:06.284865563 +0100 usb
-rw-r--r-- 1 root root 29952 2025-10-06 14:51:10.000000000 +0100 veth.ko
-rw-r--r-- 1 root root 35336 2025-10-06 14:51:10.000000000 +0100 vrf.ko
drwxr-xr-x 2 root root  4096 2025-10-10 21:56:06.282865539 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/phy:
total 140
-rw-r--r-- 1 root root 140608 2025-10-06 14:51:10.000000000 +0100 libphy.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 12
-rw-r--r-- 1 root root 11408 2025-10-06 14:51:10.000000000 +0100 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 152
-rw-r--r-- 1 root root 31568 2025-10-06 14:51:10.000000000 +0100 ax88179_178a.ko
-rw-r--r-- 1 root root 22456 2025-10-06 14:51:10.000000000 +0100 sierra_net.ko
-rw-r--r-- 1 root root 43880 2025-10-06 14:51:10.000000000 +0100 smsc95xx.ko
-rw-r--r-- 1 root root 50920 2025-10-06 14:51:10.000000000 +0100 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 148
-rw-r--r-- 1 root root 149128 2025-10-06 14:51:10.000000000 +0100 wireguard.ko

/lib/modules/5.6.3/kernel/lib:
total 16
-rw-r--r-- 1 root root 4552 2025-10-06 14:51:10.000000000 +0100 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.282865539 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.282865539 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 36
-rw-r--r-- 1 root root 33832 2025-10-06 14:51:10.000000000 +0100 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 24
-rw-r--r-- 1 root root 23080 2025-10-06 14:51:10.000000000 +0100 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 16
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.285865575 +0100 802
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.285865575 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.286865587 +0100 ipv6
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:06.285865575 +0100 mpls

/lib/modules/5.6.3/kernel/net/802:
total 20
-rw-r--r-- 1 root root 17992 2025-10-06 14:51:11.000000000 +0100 mrp.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 32
-rw-r--r-- 1 root root 30552 2025-10-06 14:51:11.000000000 +0100 ip_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 44
-rw-r--r-- 1 root root 17288 2025-10-06 14:51:11.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root 22712 2025-10-06 14:51:11.000000000 +0100 esp6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 96
-rw-r--r-- 1 root root  8912 2025-10-06 14:51:11.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root 82016 2025-10-06 14:51:11.000000000 +0100 mpls_router.ko

/lib/modules/5.6.3/misc:
total 164
-rw-r--r-- 1 root root 86920 2025-10-06 14:46:19.000000000 +0100 flash.ko
-rw-r--r-- 1 root root 26472 2025-10-06 14:47:18.000000000 +0100 lcd.ko
-rw-r--r-- 1 root root  9440 2025-10-06 14:45:34.000000000 +0100 panics.ko
-rw-r--r-- 1 root root 35008 2025-10-06 14:47:18.000000000 +0100 ts.ko

/mnt:
total 0

/proc:
total 0

/sbin:
total 68
-rwxr-xr-x 1 root root 66184 2025-10-06 15:17:06.000000000 +0100 nandfix

/tmp:
total 0
```

