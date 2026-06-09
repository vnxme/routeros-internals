### 488d95.cpio
#### Identification (`file <*>`):
```
ASCII cpio archive (SVR4 with no CRC)
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 300
-rw-r--r-- 1 root root      4 2026-06-02 10:55:05.000000000 +0100 TYPE
drwxrwxrwx 2 root root   4096 2026-06-09 10:34:09.661363889 +0100 dev
drwxr-xr-x 2 root root   4096 2026-06-02 10:54:53.000000000 +0100 etc
-rwxr-xr-x 1 root root 271880 2026-06-02 10:54:56.000000000 +0100 init
drwxr-xr-x 3 root root   4096 2026-06-09 10:34:09.662363912 +0100 lib
drwxr-xr-x 2 root root   4096 2026-06-02 10:54:53.000000000 +0100 mnt
drwxr-xr-x 2 root root   4096 2026-06-02 10:54:53.000000000 +0100 proc
lrwxrwxrwx 1 root root      7 2026-06-02 10:54:53.000000000 +0100 rw -> /mnt/rw
drwxr-xr-x 2 root root   4096 2026-06-09 10:34:09.668364053 +0100 sbin
drwxr-xr-x 2 root root   4096 2026-06-02 10:54:53.000000000 +0100 tmp

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
drwxr-xr-x 3 root root 4096 2026-06-09 10:34:09.662363912 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2026-06-09 10:34:09.665363982 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-06-09 10:34:09.665363982 +0100 drivers
drwxr-xr-x 5 root root 4096 2026-06-09 10:34:09.664363959 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-06-09 10:34:09.665363982 +0100 misc

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-06-09 10:34:09.668364053 +0100 net

/lib/modules/5.6.3/drivers/net:
total 628
-rw-r--r-- 1 root root  24748 2026-06-02 10:41:45.000000000 +0100 ag7100.ko
-rw-r--r-- 1 root root  39800 2026-06-02 10:41:48.000000000 +0100 ag7240.ko
-rw-r--r-- 1 root root  45928 2026-06-02 10:43:09.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root  26944 2026-06-02 10:43:09.000000000 +0100 aths16.ko
-rw-r--r-- 1 root root  10432 2026-06-02 10:43:09.000000000 +0100 icplus.ko
-rw-r--r-- 1 root root  10132 2026-06-02 10:44:30.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root  19232 2026-06-02 10:41:45.000000000 +0100 music_gmac.ko
-rw-r--r-- 1 root root   9412 2026-06-02 10:41:44.000000000 +0100 music_support.ko
-rw-r--r-- 1 root root  55180 2026-06-02 10:43:09.000000000 +0100 music_switch.ko
-rw-r--r-- 1 root root 175752 2026-06-02 10:44:30.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root  41456 2026-06-02 10:42:59.000000000 +0100 phy_amcc_qt2025.ko
-rw-r--r-- 1 root root  91372 2026-06-02 10:43:02.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root   3528 2026-06-02 10:41:54.000000000 +0100 sram.ko
-rw-r--r-- 1 root root  59196 2026-06-02 10:43:12.000000000 +0100 switch.ko

/lib/modules/5.6.3/kernel:
total 12
drwxr-xr-x 3 root root 4096 2026-06-09 10:34:09.662363912 +0100 drivers
drwxr-xr-x 4 root root 4096 2026-06-09 10:34:09.662363912 +0100 lib
drwxr-xr-x 6 root root 4096 2026-06-09 10:34:09.665363982 +0100 net

/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 6 root root 4096 2026-06-09 10:34:09.664363959 +0100 net

/lib/modules/5.6.3/kernel/drivers/net:
total 72
drwxr-xr-x 3 root root  4096 2026-06-09 10:34:09.664363959 +0100 ethernet
-rw-r--r-- 1 root root 38248 2026-06-02 10:44:21.000000000 +0100 macsec.ko
drwxr-xr-x 2 root root  4096 2026-06-09 10:34:09.663363935 +0100 slip
drwxr-xr-x 2 root root  4096 2026-06-09 10:34:09.663363935 +0100 usb
-rw-r--r-- 1 root root 15932 2026-06-02 10:44:22.000000000 +0100 veth.ko
drwxr-xr-x 2 root root  4096 2026-06-09 10:34:09.663363935 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 4
drwxr-xr-x 2 root root 4096 2026-06-09 10:34:09.664363959 +0100 intel

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 40
-rw-r--r-- 1 root root 37256 2026-06-02 10:44:21.000000000 +0100 e100.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6052 2026-06-02 10:44:22.000000000 +0100 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 104
-rw-r--r-- 1 root root 20404 2026-06-02 10:44:22.000000000 +0100 ax88179_178a.ko
-rw-r--r-- 1 root root  9892 2026-06-02 10:44:22.000000000 +0100 ipheth.ko
-rw-r--r-- 1 root root 12764 2026-06-02 10:44:22.000000000 +0100 sierra_net.ko
-rw-r--r-- 1 root root 25460 2026-06-02 10:44:22.000000000 +0100 smsc95xx.ko
-rw-r--r-- 1 root root 26508 2026-06-02 10:44:22.000000000 +0100 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 72
-rw-r--r-- 1 root root 69756 2026-06-02 10:44:22.000000000 +0100 wireguard.ko

/lib/modules/5.6.3/kernel/lib:
total 12
-rw-r--r-- 1 root root 3364 2026-06-02 10:44:24.000000000 +0100 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2026-06-09 10:34:09.662363912 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2026-06-09 10:34:09.662363912 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18368 2026-06-02 10:44:25.000000000 +0100 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14908 2026-06-02 10:44:25.000000000 +0100 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 16
drwxr-xr-x 2 root root 4096 2026-06-09 10:34:09.664363959 +0100 802
drwxr-xr-x 2 root root 4096 2026-06-09 10:34:09.664363959 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-06-09 10:34:09.665363982 +0100 ipv6
drwxr-xr-x 2 root root 4096 2026-06-09 10:34:09.664363959 +0100 mpls

/lib/modules/5.6.3/kernel/net/802:
total 12
-rw-r--r-- 1 root root 10004 2026-06-02 10:44:25.000000000 +0100 mrp.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 20
-rw-r--r-- 1 root root 16692 2026-06-02 10:44:26.000000000 +0100 ip_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 28
-rw-r--r-- 1 root root  8944 2026-06-02 10:44:26.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root 12364 2026-06-02 10:44:26.000000000 +0100 esp6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 52
-rw-r--r-- 1 root root  5048 2026-06-02 10:44:27.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root 42720 2026-06-02 10:44:27.000000000 +0100 mpls_router.ko

/lib/modules/5.6.3/misc:
total 108
-rw-r--r-- 1 root root 57844 2026-06-02 10:42:31.000000000 +0100 flash.ko
-rw-r--r-- 1 root root 14704 2026-06-02 10:41:58.000000000 +0100 lcd.ko
-rw-r--r-- 1 root root  8668 2026-06-02 10:41:54.000000000 +0100 panics.ko
-rw-r--r-- 1 root root 19324 2026-06-02 10:41:58.000000000 +0100 ts.ko

/mnt:
total 0

/proc:
total 0

/sbin:
total 28
-rwxr-xr-x 1 root root 24876 2026-06-02 10:54:56.000000000 +0100 nandfix

/tmp:
total 0
```

