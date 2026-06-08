### 481d0d.cpio
#### Identification (`file <*>`):
```
ASCII cpio archive (SVR4 with no CRC)
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 292
-rw-r--r-- 1 root root      4 2026-01-29 11:10:29.000000000 +0000 TYPE
drwxrwxrwx 2 root root   4096 2026-06-08 15:58:58.940974188 +0100 dev
drwxr-xr-x 2 root root   4096 2026-01-29 11:10:01.000000000 +0000 etc
-rwxr-xr-x 1 root root 264520 2026-01-29 11:10:06.000000000 +0000 init
drwxr-xr-x 3 root root   4096 2026-06-08 15:58:58.941974190 +0100 lib
drwxr-xr-x 2 root root   4096 2026-01-29 11:10:01.000000000 +0000 mnt
drwxr-xr-x 2 root root   4096 2026-01-29 11:10:01.000000000 +0000 proc
lrwxrwxrwx 1 root root      7 2026-01-29 11:10:01.000000000 +0000 rw -> /mnt/rw
drwxr-xr-x 2 root root   4096 2026-06-08 15:58:58.947974206 +0100 sbin
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
drwxr-xr-x 3 root root 4096 2026-06-08 15:58:58.942974193 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2026-06-08 15:58:58.945974200 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-06-08 15:58:58.945974200 +0100 drivers
drwxr-xr-x 5 root root 4096 2026-06-08 15:58:58.943974195 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:58.945974200 +0100 misc

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:58.947974206 +0100 net

/lib/modules/5.6.3/drivers/net:
total 624
-rw-r--r-- 1 root root  24716 2026-01-29 10:36:31.000000000 +0000 ag7100.ko
-rw-r--r-- 1 root root  39800 2026-01-29 10:36:40.000000000 +0000 ag7240.ko
-rw-r--r-- 1 root root  44348 2026-01-29 10:38:59.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root  26912 2026-01-29 10:38:59.000000000 +0000 aths16.ko
-rw-r--r-- 1 root root  10432 2026-01-29 10:38:59.000000000 +0000 icplus.ko
-rw-r--r-- 1 root root  10132 2026-01-29 10:42:21.000000000 +0000 mpls_fp.ko
-rw-r--r-- 1 root root  19200 2026-01-29 10:37:15.000000000 +0000 music_gmac.ko
-rw-r--r-- 1 root root   9412 2026-01-29 10:37:14.000000000 +0000 music_support.ko
-rw-r--r-- 1 root root  55180 2026-01-29 10:38:59.000000000 +0000 music_switch.ko
-rw-r--r-- 1 root root 175664 2026-01-29 10:42:22.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root  41456 2026-01-29 10:37:41.000000000 +0000 phy_amcc_qt2025.ko
-rw-r--r-- 1 root root  91068 2026-01-29 10:37:45.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root   3528 2026-01-29 10:40:42.000000000 +0000 sram.ko
-rw-r--r-- 1 root root  58332 2026-01-29 10:39:02.000000000 +0000 switch.ko

/lib/modules/5.6.3/kernel:
total 12
drwxr-xr-x 3 root root 4096 2026-06-08 15:58:58.942974193 +0100 drivers
drwxr-xr-x 4 root root 4096 2026-06-08 15:58:58.942974193 +0100 lib
drwxr-xr-x 6 root root 4096 2026-06-08 15:58:58.944974198 +0100 net

/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 6 root root 4096 2026-06-08 15:58:58.943974195 +0100 net

/lib/modules/5.6.3/kernel/drivers/net:
total 92
drwxr-xr-x 3 root root  4096 2026-06-08 15:58:58.943974195 +0100 ethernet
-rw-r--r-- 1 root root 38216 2026-01-29 10:40:04.000000000 +0000 macsec.ko
drwxr-xr-x 2 root root  4096 2026-06-08 15:58:58.942974193 +0100 slip
drwxr-xr-x 2 root root  4096 2026-06-08 15:58:58.943974195 +0100 usb
-rw-r--r-- 1 root root 15932 2026-01-29 10:40:06.000000000 +0000 veth.ko
-rw-r--r-- 1 root root 18388 2026-01-29 10:40:06.000000000 +0000 vrf.ko
drwxr-xr-x 2 root root  4096 2026-06-08 15:58:58.942974193 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 4
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:58.943974195 +0100 intel

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 40
-rw-r--r-- 1 root root 37256 2026-01-29 10:40:04.000000000 +0000 e100.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6052 2026-01-29 10:40:05.000000000 +0000 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 92
-rw-r--r-- 1 root root 19668 2026-01-29 10:40:05.000000000 +0000 ax88179_178a.ko
-rw-r--r-- 1 root root 12764 2026-01-29 10:40:06.000000000 +0000 sierra_net.ko
-rw-r--r-- 1 root root 25460 2026-01-29 10:40:06.000000000 +0000 smsc95xx.ko
-rw-r--r-- 1 root root 26536 2026-01-29 10:40:06.000000000 +0000 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 80
-rw-r--r-- 1 root root 80368 2026-01-29 10:40:06.000000000 +0000 wireguard.ko

/lib/modules/5.6.3/kernel/lib:
total 12
-rw-r--r-- 1 root root 3364 2026-01-29 10:40:10.000000000 +0000 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:58.942974193 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:58.942974193 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18368 2026-01-29 10:40:11.000000000 +0000 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14908 2026-01-29 10:40:11.000000000 +0000 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 16
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:58.944974198 +0100 802
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:58.944974198 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:58.944974198 +0100 ipv6
drwxr-xr-x 2 root root 4096 2026-06-08 15:58:58.944974198 +0100 mpls

/lib/modules/5.6.3/kernel/net/802:
total 12
-rw-r--r-- 1 root root 10004 2026-01-29 10:40:11.000000000 +0000 mrp.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 20
-rw-r--r-- 1 root root 16692 2026-01-29 10:40:12.000000000 +0000 ip_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 28
-rw-r--r-- 1 root root  8944 2026-01-29 10:40:13.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root 12364 2026-01-29 10:40:13.000000000 +0000 esp6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 52
-rw-r--r-- 1 root root  5048 2026-01-29 10:40:14.000000000 +0000 mpls_iptunnel.ko
-rw-r--r-- 1 root root 42720 2026-01-29 10:40:14.000000000 +0000 mpls_router.ko

/lib/modules/5.6.3/misc:
total 108
-rw-r--r-- 1 root root 57584 2026-01-29 10:37:10.000000000 +0000 flash.ko
-rw-r--r-- 1 root root 14704 2026-01-29 10:39:58.000000000 +0000 lcd.ko
-rw-r--r-- 1 root root  8668 2026-01-29 10:36:17.000000000 +0000 panics.ko
-rw-r--r-- 1 root root 19324 2026-01-29 10:39:57.000000000 +0000 ts.ko

/mnt:
total 0

/proc:
total 0

/sbin:
total 28
-rwxr-xr-x 1 root root 24844 2026-01-29 11:10:06.000000000 +0000 nandfix

/tmp:
total 0
```

