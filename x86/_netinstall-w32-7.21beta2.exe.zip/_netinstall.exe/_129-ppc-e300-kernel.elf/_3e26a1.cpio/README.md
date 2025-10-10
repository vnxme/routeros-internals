### 3e26a1.cpio
#### Identification (`file <*>`):
```
ASCII cpio archive (SVR4 with no CRC)
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 356
-rw-r--r-- 1 root root      4 2025-10-06 15:17:33.000000000 +0100 TYPE
drwxrwxrwx 2 root root   4096 2025-10-10 21:56:05.858860524 +0100 dev
drwxr-xr-x 2 root root   4096 2025-10-06 15:17:01.000000000 +0100 etc
-rwxr-xr-x 1 root root 329040 2025-10-06 15:17:06.000000000 +0100 init
drwxr-xr-x 3 root root   4096 2025-10-10 21:56:05.859860536 +0100 lib
drwxr-xr-x 2 root root   4096 2025-10-06 15:17:01.000000000 +0100 mnt
drwxr-xr-x 2 root root   4096 2025-10-06 15:17:01.000000000 +0100 proc
lrwxrwxrwx 1 root root      7 2025-10-06 15:17:01.000000000 +0100 rw -> /mnt/rw
drwxr-xr-x 2 root root   4096 2025-10-10 21:56:05.886860855 +0100 sbin
drwxr-xr-x 2 root root   4096 2025-10-06 15:17:01.000000000 +0100 tmp

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
total 4
drwxr-xr-x 6 root root 4096 2025-10-10 21:56:05.881860796 +0100 modules

/lib/modules:
total 16
drwxr-xr-x 5 root root 4096 2025-10-10 21:56:05.863860583 +0100 5.6.3
drwxr-xr-x 5 root root 4096 2025-10-10 21:56:05.883860820 +0100 5.6.3-440
drwxr-xr-x 5 root root 4096 2025-10-10 21:56:05.874860713 +0100 5.6.3-e500
drwxr-xr-x 5 root root 4096 2025-10-10 21:56:05.869860654 +0100 5.6.3-smp

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 21:56:05.863860583 +0100 drivers
drwxr-xr-x 5 root root 4096 2025-10-10 21:56:05.862860571 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.863860583 +0100 misc

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.866860618 +0100 net

/lib/modules/5.6.3/drivers/net:
total 580
-rw-r--r-- 1 root root  39748 2025-10-06 15:17:09.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:09.000000000 +0100 ath8327.ko.plt
-rw-r--r-- 1 root root  25472 2025-10-06 15:17:09.000000000 +0100 aths16.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:09.000000000 +0100 aths16.ko.plt
-rw-r--r-- 1 root root  38592 2025-10-06 15:17:09.000000000 +0100 atl1c.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:09.000000000 +0100 atl1c.ko.plt
-rw-r--r-- 1 root root  10452 2025-10-06 15:17:09.000000000 +0100 fsl_pq_mdio.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:09.000000000 +0100 fsl_pq_mdio.ko.plt
-rw-r--r-- 1 root root  28080 2025-10-06 15:17:09.000000000 +0100 gianfar.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:09.000000000 +0100 gianfar.ko.plt
-rw-r--r-- 1 root root  11084 2025-10-06 15:17:08.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:08.000000000 +0100 mpls_fp.ko.plt
-rw-r--r-- 1 root root 190512 2025-10-06 15:17:08.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:08.000000000 +0100 packet_hook.ko.plt
-rw-r--r-- 1 root root  69888 2025-10-06 15:17:08.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:08.000000000 +0100 phy_helper.ko.plt
-rw-r--r-- 1 root root  25108 2025-10-06 15:17:09.000000000 +0100 rb616.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:09.000000000 +0100 rb616.ko.plt
-rw-r--r-- 1 root root  67400 2025-10-06 15:17:09.000000000 +0100 switch.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:09.000000000 +0100 switch.ko.plt
-rw-r--r-- 1 root root  39204 2025-10-06 15:17:09.000000000 +0100 ucc_geth.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:09.000000000 +0100 ucc_geth.ko.plt
-rw-r--r-- 1 root root  22036 2025-10-06 15:17:09.000000000 +0100 via-velocity.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:09.000000000 +0100 via-velocity.ko.plt

/lib/modules/5.6.3/kernel:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 21:56:05.860860548 +0100 drivers
drwxr-xr-x 4 root root 4096 2025-10-10 21:56:05.860860548 +0100 lib
drwxr-xr-x 6 root root 4096 2025-10-10 21:56:05.862860571 +0100 net

/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 5 root root 4096 2025-10-10 21:56:05.862860571 +0100 net

/lib/modules/5.6.3/kernel/drivers/net:
total 100
drwxr-xr-x 4 root root  4096 2025-10-10 21:56:05.861860559 +0100 ethernet
-rw-r--r-- 1 root root 41940 2025-10-06 15:17:07.000000000 +0100 macsec.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:07.000000000 +0100 macsec.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 21:56:05.860860548 +0100 slip
-rw-r--r-- 1 root root 17768 2025-10-06 15:17:07.000000000 +0100 veth.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:07.000000000 +0100 veth.ko.plt
-rw-r--r-- 1 root root 20760 2025-10-06 15:17:07.000000000 +0100 vrf.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:07.000000000 +0100 vrf.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 21:56:05.861860559 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.861860559 +0100 intel
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.861860559 +0100 via

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 40
-rw-r--r-- 1 root root 40676 2025-10-06 15:17:07.000000000 +0100 e100.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:07.000000000 +0100 e100.ko.plt

/lib/modules/5.6.3/kernel/drivers/net/ethernet/via:
total 32
-rw-r--r-- 1 root root 31940 2025-10-06 15:17:07.000000000 +0100 via-rhine.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:07.000000000 +0100 via-rhine.ko.plt

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6076 2025-10-06 15:17:07.000000000 +0100 slhc.ko
-rw-r--r-- 1 root root    0 2025-10-06 15:17:07.000000000 +0100 slhc.ko.plt

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 100
-rw-r--r-- 1 root root 100864 2025-10-06 15:17:07.000000000 +0100 wireguard.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:07.000000000 +0100 wireguard.ko.plt

/lib/modules/5.6.3/kernel/lib:
total 12
-rw-r--r-- 1 root root 3352 2025-10-06 15:17:07.000000000 +0100 crc-ccitt.ko
-rw-r--r-- 1 root root    0 2025-10-06 15:17:07.000000000 +0100 crc-ccitt.ko.plt
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.860860548 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.860860548 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19924 2025-10-06 15:17:07.000000000 +0100 zlib_deflate.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:07.000000000 +0100 zlib_deflate.ko.plt

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 15436 2025-10-06 15:17:07.000000000 +0100 zlib_inflate.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:07.000000000 +0100 zlib_inflate.ko.plt

/lib/modules/5.6.3/kernel/net:
total 16
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.862860571 +0100 802
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.862860571 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.862860571 +0100 ipv6
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.862860571 +0100 mpls

/lib/modules/5.6.3/kernel/net/802:
total 12
-rw-r--r-- 1 root root 11536 2025-10-06 15:17:07.000000000 +0100 mrp.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:07.000000000 +0100 mrp.ko.plt

/lib/modules/5.6.3/kernel/net/ipv4:
total 20
-rw-r--r-- 1 root root 18852 2025-10-06 15:17:07.000000000 +0100 ip_tunnel.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:07.000000000 +0100 ip_tunnel.ko.plt

/lib/modules/5.6.3/kernel/net/ipv6:
total 28
-rw-r--r-- 1 root root 10112 2025-10-06 15:17:07.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:07.000000000 +0100 ah6.ko.plt
-rw-r--r-- 1 root root 13288 2025-10-06 15:17:07.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:07.000000000 +0100 esp6.ko.plt

/lib/modules/5.6.3/kernel/net/mpls:
total 56
-rw-r--r-- 1 root root  5616 2025-10-06 15:17:07.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:07.000000000 +0100 mpls_iptunnel.ko.plt
-rw-r--r-- 1 root root 48176 2025-10-06 15:17:07.000000000 +0100 mpls_router.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:07.000000000 +0100 mpls_router.ko.plt

/lib/modules/5.6.3/misc:
total 64
-rw-r--r-- 1 root root 49176 2025-10-06 15:17:08.000000000 +0100 flash.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:08.000000000 +0100 flash.ko.plt
-rw-r--r-- 1 root root  9076 2025-10-06 15:17:07.000000000 +0100 panics.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:07.000000000 +0100 panics.ko.plt

/lib/modules/5.6.3-440:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 21:56:05.883860820 +0100 drivers
drwxr-xr-x 5 root root 4096 2025-10-10 21:56:05.882860808 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.883860820 +0100 misc

/lib/modules/5.6.3-440/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.885860843 +0100 net

/lib/modules/5.6.3-440/drivers/net:
total 504
-rw-r--r-- 1 root root  39748 2025-10-06 15:17:14.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:14.000000000 +0100 ath8327.ko.plt
-rw-r--r-- 1 root root  25472 2025-10-06 15:17:14.000000000 +0100 aths16.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:14.000000000 +0100 aths16.ko.plt
-rw-r--r-- 1 root root  38432 2025-10-06 15:17:14.000000000 +0100 atl1c.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:14.000000000 +0100 atl1c.ko.plt
-rw-r--r-- 1 root root  67548 2025-10-06 15:17:14.000000000 +0100 ibm_newemac.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:14.000000000 +0100 ibm_newemac.ko.plt
-rw-r--r-- 1 root root 190208 2025-10-06 15:17:14.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:14.000000000 +0100 packet_hook.ko.plt
-rw-r--r-- 1 root root  69888 2025-10-06 15:17:14.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:14.000000000 +0100 phy_helper.ko.plt
-rw-r--r-- 1 root root  67304 2025-10-06 15:17:14.000000000 +0100 switch.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:14.000000000 +0100 switch.ko.plt

/lib/modules/5.6.3-440/kernel:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 21:56:05.882860808 +0100 drivers
drwxr-xr-x 4 root root 4096 2025-10-10 21:56:05.882860808 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 21:56:05.883860820 +0100 net

/lib/modules/5.6.3-440/kernel/drivers:
total 4
drwxr-xr-x 4 root root 4096 2025-10-10 21:56:05.882860808 +0100 net

/lib/modules/5.6.3-440/kernel/drivers/net:
total 32
drwxr-xr-x 2 root root  4096 2025-10-10 21:56:05.882860808 +0100 slip
-rw-r--r-- 1 root root 20764 2025-10-06 15:17:14.000000000 +0100 vrf.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:14.000000000 +0100 vrf.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 21:56:05.882860808 +0100 wireguard

/lib/modules/5.6.3-440/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6076 2025-10-06 15:17:14.000000000 +0100 slhc.ko
-rw-r--r-- 1 root root    0 2025-10-06 15:17:14.000000000 +0100 slhc.ko.plt

/lib/modules/5.6.3-440/kernel/drivers/net/wireguard:
total 100
-rw-r--r-- 1 root root 100832 2025-10-06 15:17:14.000000000 +0100 wireguard.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:14.000000000 +0100 wireguard.ko.plt

/lib/modules/5.6.3-440/kernel/lib:
total 12
-rw-r--r-- 1 root root 3352 2025-10-06 15:17:14.000000000 +0100 crc-ccitt.ko
-rw-r--r-- 1 root root    0 2025-10-06 15:17:14.000000000 +0100 crc-ccitt.ko.plt
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.882860808 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.881860796 +0100 zlib_inflate

/lib/modules/5.6.3-440/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19924 2025-10-06 15:17:14.000000000 +0100 zlib_deflate.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:14.000000000 +0100 zlib_deflate.ko.plt

/lib/modules/5.6.3-440/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 15436 2025-10-06 15:17:14.000000000 +0100 zlib_inflate.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:14.000000000 +0100 zlib_inflate.ko.plt

/lib/modules/5.6.3-440/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.883860820 +0100 802
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.883860820 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.883860820 +0100 ipv6

/lib/modules/5.6.3-440/kernel/net/802:
total 12
-rw-r--r-- 1 root root 11568 2025-10-06 15:17:14.000000000 +0100 mrp.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:14.000000000 +0100 mrp.ko.plt

/lib/modules/5.6.3-440/kernel/net/ipv4:
total 20
-rw-r--r-- 1 root root 18884 2025-10-06 15:17:14.000000000 +0100 ip_tunnel.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:14.000000000 +0100 ip_tunnel.ko.plt

/lib/modules/5.6.3-440/kernel/net/ipv6:
total 28
-rw-r--r-- 1 root root 10112 2025-10-06 15:17:14.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:14.000000000 +0100 ah6.ko.plt
-rw-r--r-- 1 root root 13288 2025-10-06 15:17:14.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:14.000000000 +0100 esp6.ko.plt

/lib/modules/5.6.3-440/misc:
total 64
-rw-r--r-- 1 root root 49208 2025-10-06 15:17:14.000000000 +0100 flash.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:14.000000000 +0100 flash.ko.plt
-rw-r--r-- 1 root root  9140 2025-10-06 15:17:14.000000000 +0100 panics.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:14.000000000 +0100 panics.ko.plt

/lib/modules/5.6.3-e500:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 21:56:05.874860713 +0100 drivers
drwxr-xr-x 5 root root 4096 2025-10-10 21:56:05.873860701 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.874860713 +0100 misc

/lib/modules/5.6.3-e500/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.881860796 +0100 net

/lib/modules/5.6.3-e500/drivers/net:
total 1836
-rw-r--r-- 1 root root   39748 2025-10-06 15:17:12.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root       0 2025-10-06 15:17:12.000000000 +0100 ath8327.ko.plt
-rw-r--r-- 1 root root   25472 2025-10-06 15:17:12.000000000 +0100 aths16.ko
-rw-r--r-- 1 root root       0 2025-10-06 15:17:12.000000000 +0100 aths16.ko.plt
-rw-r--r-- 1 root root   38796 2025-10-06 15:17:13.000000000 +0100 atl1c.ko
-rw-r--r-- 1 root root       0 2025-10-06 15:17:13.000000000 +0100 atl1c.ko.plt
-rw-r--r-- 1 root root 1392496 2025-10-06 15:17:13.000000000 +0100 dpa.ko
-rw-r--r-- 1 root root       0 2025-10-06 15:17:13.000000000 +0100 dpa.ko.plt
-rw-r--r-- 1 root root   28196 2025-10-06 15:17:12.000000000 +0100 gianfar.ko
-rw-r--r-- 1 root root       0 2025-10-06 15:17:12.000000000 +0100 gianfar.ko.plt
-rw-r--r-- 1 root root   11084 2025-10-06 15:17:12.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root       0 2025-10-06 15:17:12.000000000 +0100 mpls_fp.ko.plt
-rw-r--r-- 1 root root  190208 2025-10-06 15:17:12.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root       0 2025-10-06 15:17:12.000000000 +0100 packet_hook.ko.plt
-rw-r--r-- 1 root root   69968 2025-10-06 15:17:12.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root       0 2025-10-06 15:17:12.000000000 +0100 phy_helper.ko.plt
-rw-r--r-- 1 root root   67304 2025-10-06 15:17:12.000000000 +0100 switch.ko
-rw-r--r-- 1 root root       0 2025-10-06 15:17:12.000000000 +0100 switch.ko.plt

/lib/modules/5.6.3-e500/kernel:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 21:56:05.871860678 +0100 drivers
drwxr-xr-x 4 root root 4096 2025-10-10 21:56:05.871860678 +0100 lib
drwxr-xr-x 7 root root 4096 2025-10-10 21:56:05.873860701 +0100 net

/lib/modules/5.6.3-e500/kernel/drivers:
total 4
drwxr-xr-x 4 root root 4096 2025-10-10 21:56:05.872860690 +0100 net

/lib/modules/5.6.3-e500/kernel/drivers/net:
total 156
-rw-r--r-- 1 root root 41712 2025-10-06 15:17:12.000000000 +0100 macsec.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:12.000000000 +0100 macsec.ko.plt
-rw-r--r-- 1 root root 13172 2025-10-06 15:17:12.000000000 +0100 net_failover.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:12.000000000 +0100 net_failover.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 21:56:05.871860678 +0100 slip
-rw-r--r-- 1 root root 17832 2025-10-06 15:17:12.000000000 +0100 veth.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:12.000000000 +0100 veth.ko.plt
-rw-r--r-- 1 root root 41392 2025-10-06 15:17:12.000000000 +0100 virtio_net.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:12.000000000 +0100 virtio_net.ko.plt
-rw-r--r-- 1 root root 20796 2025-10-06 15:17:12.000000000 +0100 vrf.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:12.000000000 +0100 vrf.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 21:56:05.872860690 +0100 wireguard

/lib/modules/5.6.3-e500/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6076 2025-10-06 15:17:12.000000000 +0100 slhc.ko
-rw-r--r-- 1 root root    0 2025-10-06 15:17:12.000000000 +0100 slhc.ko.plt

/lib/modules/5.6.3-e500/kernel/drivers/net/wireguard:
total 100
-rw-r--r-- 1 root root 101152 2025-10-06 15:17:12.000000000 +0100 wireguard.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:12.000000000 +0100 wireguard.ko.plt

/lib/modules/5.6.3-e500/kernel/lib:
total 12
-rw-r--r-- 1 root root 3352 2025-10-06 15:17:12.000000000 +0100 crc-ccitt.ko
-rw-r--r-- 1 root root    0 2025-10-06 15:17:12.000000000 +0100 crc-ccitt.ko.plt
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.871860678 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.871860678 +0100 zlib_inflate

/lib/modules/5.6.3-e500/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19924 2025-10-06 15:17:12.000000000 +0100 zlib_deflate.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:12.000000000 +0100 zlib_deflate.ko.plt

/lib/modules/5.6.3-e500/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 15436 2025-10-06 15:17:12.000000000 +0100 zlib_inflate.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:12.000000000 +0100 zlib_inflate.ko.plt

/lib/modules/5.6.3-e500/kernel/net:
total 20
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.873860701 +0100 802
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.873860701 +0100 core
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.873860701 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.873860701 +0100 ipv6
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.873860701 +0100 mpls

/lib/modules/5.6.3-e500/kernel/net/802:
total 12
-rw-r--r-- 1 root root 11568 2025-10-06 15:17:12.000000000 +0100 mrp.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:12.000000000 +0100 mrp.ko.plt

/lib/modules/5.6.3-e500/kernel/net/core:
total 8
-rw-r--r-- 1 root root 7248 2025-10-06 15:17:12.000000000 +0100 failover.ko
-rw-r--r-- 1 root root    0 2025-10-06 15:17:12.000000000 +0100 failover.ko.plt

/lib/modules/5.6.3-e500/kernel/net/ipv4:
total 20
-rw-r--r-- 1 root root 18884 2025-10-06 15:17:12.000000000 +0100 ip_tunnel.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:12.000000000 +0100 ip_tunnel.ko.plt

/lib/modules/5.6.3-e500/kernel/net/ipv6:
total 28
-rw-r--r-- 1 root root 10112 2025-10-06 15:17:12.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:12.000000000 +0100 ah6.ko.plt
-rw-r--r-- 1 root root 13320 2025-10-06 15:17:12.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:12.000000000 +0100 esp6.ko.plt

/lib/modules/5.6.3-e500/kernel/net/mpls:
total 56
-rw-r--r-- 1 root root  5648 2025-10-06 15:17:12.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:12.000000000 +0100 mpls_iptunnel.ko.plt
-rw-r--r-- 1 root root 48360 2025-10-06 15:17:12.000000000 +0100 mpls_router.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:12.000000000 +0100 mpls_router.ko.plt

/lib/modules/5.6.3-e500/misc:
total 64
-rw-r--r-- 1 root root 50224 2025-10-06 15:17:12.000000000 +0100 flash.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:12.000000000 +0100 flash.ko.plt
-rw-r--r-- 1 root root  9140 2025-10-06 15:17:12.000000000 +0100 panics.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:12.000000000 +0100 panics.ko.plt

/lib/modules/5.6.3-smp:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 21:56:05.869860654 +0100 drivers
drwxr-xr-x 5 root root 4096 2025-10-10 21:56:05.867860631 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.869860654 +0100 misc

/lib/modules/5.6.3-smp/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.871860678 +0100 net

/lib/modules/5.6.3-smp/drivers/net:
total 432
-rw-r--r-- 1 root root  40076 2025-10-06 15:17:11.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:11.000000000 +0100 ath8327.ko.plt
-rw-r--r-- 1 root root  25624 2025-10-06 15:17:11.000000000 +0100 aths16.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:11.000000000 +0100 aths16.ko.plt
-rw-r--r-- 1 root root  12192 2025-10-06 15:17:10.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:10.000000000 +0100 mpls_fp.ko.plt
-rw-r--r-- 1 root root 212444 2025-10-06 15:17:11.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:10.000000000 +0100 packet_hook.ko.plt
-rw-r--r-- 1 root root  70092 2025-10-06 15:17:11.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:11.000000000 +0100 phy_helper.ko.plt
-rw-r--r-- 1 root root  69796 2025-10-06 15:17:11.000000000 +0100 switch.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:11.000000000 +0100 switch.ko.plt

/lib/modules/5.6.3-smp/kernel:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 21:56:05.866860618 +0100 drivers
drwxr-xr-x 4 root root 4096 2025-10-10 21:56:05.866860618 +0100 lib
drwxr-xr-x 7 root root 4096 2025-10-10 21:56:05.868860642 +0100 net

/lib/modules/5.6.3-smp/kernel/drivers:
total 4
drwxr-xr-x 4 root root 4096 2025-10-10 21:56:05.867860631 +0100 net

/lib/modules/5.6.3-smp/kernel/drivers/net:
total 160
-rw-r--r-- 1 root root 45736 2025-10-06 15:17:10.000000000 +0100 macsec.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:10.000000000 +0100 macsec.ko.plt
-rw-r--r-- 1 root root 13864 2025-10-06 15:17:10.000000000 +0100 net_failover.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:10.000000000 +0100 net_failover.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 21:56:05.866860618 +0100 slip
-rw-r--r-- 1 root root 19268 2025-10-06 15:17:10.000000000 +0100 veth.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:10.000000000 +0100 veth.ko.plt
-rw-r--r-- 1 root root 43428 2025-10-06 15:17:10.000000000 +0100 virtio_net.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:10.000000000 +0100 virtio_net.ko.plt
-rw-r--r-- 1 root root 22300 2025-10-06 15:17:10.000000000 +0100 vrf.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:10.000000000 +0100 vrf.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 21:56:05.867860631 +0100 wireguard

/lib/modules/5.6.3-smp/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6108 2025-10-06 15:17:10.000000000 +0100 slhc.ko
-rw-r--r-- 1 root root    0 2025-10-06 15:17:10.000000000 +0100 slhc.ko.plt

/lib/modules/5.6.3-smp/kernel/drivers/net/wireguard:
total 104
-rw-r--r-- 1 root root 104420 2025-10-06 15:17:10.000000000 +0100 wireguard.ko
-rw-r--r-- 1 root root      0 2025-10-06 15:17:10.000000000 +0100 wireguard.ko.plt

/lib/modules/5.6.3-smp/kernel/lib:
total 12
-rw-r--r-- 1 root root 3384 2025-10-06 15:17:10.000000000 +0100 crc-ccitt.ko
-rw-r--r-- 1 root root    0 2025-10-06 15:17:10.000000000 +0100 crc-ccitt.ko.plt
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.866860618 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.866860618 +0100 zlib_inflate

/lib/modules/5.6.3-smp/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19956 2025-10-06 15:17:10.000000000 +0100 zlib_deflate.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:10.000000000 +0100 zlib_deflate.ko.plt

/lib/modules/5.6.3-smp/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 15468 2025-10-06 15:17:10.000000000 +0100 zlib_inflate.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:10.000000000 +0100 zlib_inflate.ko.plt

/lib/modules/5.6.3-smp/kernel/net:
total 20
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.868860642 +0100 802
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.868860642 +0100 core
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.868860642 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.868860642 +0100 ipv6
drwxr-xr-x 2 root root 4096 2025-10-10 21:56:05.868860642 +0100 mpls

/lib/modules/5.6.3-smp/kernel/net/802:
total 12
-rw-r--r-- 1 root root 11964 2025-10-06 15:17:10.000000000 +0100 mrp.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:10.000000000 +0100 mrp.ko.plt

/lib/modules/5.6.3-smp/kernel/net/core:
total 8
-rw-r--r-- 1 root root 7936 2025-10-06 15:17:10.000000000 +0100 failover.ko
-rw-r--r-- 1 root root    0 2025-10-06 15:17:10.000000000 +0100 failover.ko.plt

/lib/modules/5.6.3-smp/kernel/net/ipv4:
total 20
-rw-r--r-- 1 root root 19492 2025-10-06 15:17:10.000000000 +0100 ip_tunnel.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:10.000000000 +0100 ip_tunnel.ko.plt

/lib/modules/5.6.3-smp/kernel/net/ipv6:
total 28
-rw-r--r-- 1 root root 10300 2025-10-06 15:17:10.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:10.000000000 +0100 ah6.ko.plt
-rw-r--r-- 1 root root 13560 2025-10-06 15:17:10.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:10.000000000 +0100 esp6.ko.plt

/lib/modules/5.6.3-smp/kernel/net/mpls:
total 60
-rw-r--r-- 1 root root  5828 2025-10-06 15:17:10.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:10.000000000 +0100 mpls_iptunnel.ko.plt
-rw-r--r-- 1 root root 50676 2025-10-06 15:17:10.000000000 +0100 mpls_router.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:10.000000000 +0100 mpls_router.ko.plt

/lib/modules/5.6.3-smp/misc:
total 64
-rw-r--r-- 1 root root 50808 2025-10-06 15:17:10.000000000 +0100 flash.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:10.000000000 +0100 flash.ko.plt
-rw-r--r-- 1 root root  9248 2025-10-06 15:17:10.000000000 +0100 panics.ko
-rw-r--r-- 1 root root     0 2025-10-06 15:17:10.000000000 +0100 panics.ko.plt

/mnt:
total 0

/proc:
total 0

/sbin:
total 68
-rwxr-xr-x 1 root root 66356 2025-10-06 15:17:06.000000000 +0100 nandfix

/tmp:
total 0
```

