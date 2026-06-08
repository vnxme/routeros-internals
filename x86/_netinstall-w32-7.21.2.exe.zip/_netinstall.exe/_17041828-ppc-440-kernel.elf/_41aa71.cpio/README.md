### 41aa71.cpio
#### Identification (`file <*>`):
```
ASCII cpio archive (SVR4 with no CRC)
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 356
-rw-r--r-- 1 root root      4 2026-01-29 11:10:34.000000000 +0000 TYPE
drwxrwxrwx 2 root root   4096 2026-06-08 15:59:16.179791054 +0100 dev
drwxr-xr-x 2 root root   4096 2026-01-29 11:10:01.000000000 +0000 etc
-rwxr-xr-x 1 root root 329040 2026-01-29 11:10:06.000000000 +0000 init
drwxr-xr-x 3 root root   4096 2026-06-08 15:59:16.180791057 +0100 lib
drwxr-xr-x 2 root root   4096 2026-01-29 11:10:01.000000000 +0000 mnt
drwxr-xr-x 2 root root   4096 2026-01-29 11:10:01.000000000 +0000 proc
lrwxrwxrwx 1 root root      7 2026-01-29 11:10:01.000000000 +0000 rw -> /mnt/rw
drwxr-xr-x 2 root root   4096 2026-06-08 15:59:16.193791090 +0100 sbin
drwxr-xr-x 2 root root   4096 2026-01-29 11:10:01.000000000 +0000 tmp

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
drwxr-xr-x 6 root root 4096 2026-06-08 15:59:16.190791082 +0100 modules

/lib/modules:
total 16
drwxr-xr-x 5 root root 4096 2026-06-08 15:59:16.181791059 +0100 5.6.3
drwxr-xr-x 5 root root 4096 2026-06-08 15:59:16.191791085 +0100 5.6.3-440
drwxr-xr-x 5 root root 4096 2026-06-08 15:59:16.187791075 +0100 5.6.3-e500
drwxr-xr-x 5 root root 4096 2026-06-08 15:59:16.184791067 +0100 5.6.3-smp

/lib/modules/5.6.3:
total 12
drwxr-xr-x 3 root root 4096 2026-06-08 15:59:16.181791059 +0100 drivers
drwxr-xr-x 5 root root 4096 2026-06-08 15:59:16.181791059 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.181791059 +0100 misc

/lib/modules/5.6.3/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.183791064 +0100 net

/lib/modules/5.6.3/drivers/net:
total 580
-rw-r--r-- 1 root root  39780 2026-01-29 11:10:09.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:09.000000000 +0000 ath8327.ko.plt
-rw-r--r-- 1 root root  25472 2026-01-29 11:10:09.000000000 +0000 aths16.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:09.000000000 +0000 aths16.ko.plt
-rw-r--r-- 1 root root  38592 2026-01-29 11:10:09.000000000 +0000 atl1c.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:09.000000000 +0000 atl1c.ko.plt
-rw-r--r-- 1 root root  10452 2026-01-29 11:10:09.000000000 +0000 fsl_pq_mdio.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:09.000000000 +0000 fsl_pq_mdio.ko.plt
-rw-r--r-- 1 root root  28080 2026-01-29 11:10:09.000000000 +0000 gianfar.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:09.000000000 +0000 gianfar.ko.plt
-rw-r--r-- 1 root root  11084 2026-01-29 11:10:08.000000000 +0000 mpls_fp.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:08.000000000 +0000 mpls_fp.ko.plt
-rw-r--r-- 1 root root 191312 2026-01-29 11:10:08.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:08.000000000 +0000 packet_hook.ko.plt
-rw-r--r-- 1 root root  69888 2026-01-29 11:10:08.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:08.000000000 +0000 phy_helper.ko.plt
-rw-r--r-- 1 root root  25140 2026-01-29 11:10:09.000000000 +0000 rb616.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:09.000000000 +0000 rb616.ko.plt
-rw-r--r-- 1 root root  67432 2026-01-29 11:10:09.000000000 +0000 switch.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:09.000000000 +0000 switch.ko.plt
-rw-r--r-- 1 root root  39204 2026-01-29 11:10:09.000000000 +0000 ucc_geth.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:09.000000000 +0000 ucc_geth.ko.plt
-rw-r--r-- 1 root root  22068 2026-01-29 11:10:09.000000000 +0000 via-velocity.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:09.000000000 +0000 via-velocity.ko.plt

/lib/modules/5.6.3/kernel:
total 12
drwxr-xr-x 3 root root 4096 2026-06-08 15:59:16.180791057 +0100 drivers
drwxr-xr-x 4 root root 4096 2026-06-08 15:59:16.180791057 +0100 lib
drwxr-xr-x 6 root root 4096 2026-06-08 15:59:16.181791059 +0100 net

/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 5 root root 4096 2026-06-08 15:59:16.181791059 +0100 net

/lib/modules/5.6.3/kernel/drivers/net:
total 100
drwxr-xr-x 4 root root  4096 2026-06-08 15:59:16.180791057 +0100 ethernet
-rw-r--r-- 1 root root 41940 2026-01-29 11:10:07.000000000 +0000 macsec.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:07.000000000 +0000 macsec.ko.plt
drwxr-xr-x 2 root root  4096 2026-06-08 15:59:16.180791057 +0100 slip
-rw-r--r-- 1 root root 17768 2026-01-29 11:10:07.000000000 +0000 veth.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:07.000000000 +0000 veth.ko.plt
-rw-r--r-- 1 root root 20760 2026-01-29 11:10:07.000000000 +0000 vrf.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:07.000000000 +0000 vrf.ko.plt
drwxr-xr-x 2 root root  4096 2026-06-08 15:59:16.180791057 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 8
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.181791059 +0100 intel
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.180791057 +0100 via

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 40
-rw-r--r-- 1 root root 40676 2026-01-29 11:10:07.000000000 +0000 e100.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:07.000000000 +0000 e100.ko.plt

/lib/modules/5.6.3/kernel/drivers/net/ethernet/via:
total 32
-rw-r--r-- 1 root root 31940 2026-01-29 11:10:07.000000000 +0000 via-rhine.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:07.000000000 +0000 via-rhine.ko.plt

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6076 2026-01-29 11:10:07.000000000 +0000 slhc.ko
-rw-r--r-- 1 root root    0 2026-01-29 11:10:07.000000000 +0000 slhc.ko.plt

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 100
-rw-r--r-- 1 root root 100896 2026-01-29 11:10:07.000000000 +0000 wireguard.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:07.000000000 +0000 wireguard.ko.plt

/lib/modules/5.6.3/kernel/lib:
total 12
-rw-r--r-- 1 root root 3352 2026-01-29 11:10:07.000000000 +0000 crc-ccitt.ko
-rw-r--r-- 1 root root    0 2026-01-29 11:10:07.000000000 +0000 crc-ccitt.ko.plt
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.180791057 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.180791057 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19924 2026-01-29 11:10:07.000000000 +0000 zlib_deflate.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:07.000000000 +0000 zlib_deflate.ko.plt

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 15436 2026-01-29 11:10:07.000000000 +0000 zlib_inflate.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:07.000000000 +0000 zlib_inflate.ko.plt

/lib/modules/5.6.3/kernel/net:
total 16
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.181791059 +0100 802
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.181791059 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.181791059 +0100 ipv6
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.181791059 +0100 mpls

/lib/modules/5.6.3/kernel/net/802:
total 12
-rw-r--r-- 1 root root 11536 2026-01-29 11:10:07.000000000 +0000 mrp.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:07.000000000 +0000 mrp.ko.plt

/lib/modules/5.6.3/kernel/net/ipv4:
total 20
-rw-r--r-- 1 root root 18852 2026-01-29 11:10:07.000000000 +0000 ip_tunnel.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:07.000000000 +0000 ip_tunnel.ko.plt

/lib/modules/5.6.3/kernel/net/ipv6:
total 28
-rw-r--r-- 1 root root 10112 2026-01-29 11:10:07.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:07.000000000 +0000 ah6.ko.plt
-rw-r--r-- 1 root root 13288 2026-01-29 11:10:07.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:07.000000000 +0000 esp6.ko.plt

/lib/modules/5.6.3/kernel/net/mpls:
total 56
-rw-r--r-- 1 root root  5616 2026-01-29 11:10:07.000000000 +0000 mpls_iptunnel.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:07.000000000 +0000 mpls_iptunnel.ko.plt
-rw-r--r-- 1 root root 48176 2026-01-29 11:10:07.000000000 +0000 mpls_router.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:07.000000000 +0000 mpls_router.ko.plt

/lib/modules/5.6.3/misc:
total 64
-rw-r--r-- 1 root root 49208 2026-01-29 11:10:07.000000000 +0000 flash.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:07.000000000 +0000 flash.ko.plt
-rw-r--r-- 1 root root  9076 2026-01-29 11:10:07.000000000 +0000 panics.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:07.000000000 +0000 panics.ko.plt

/lib/modules/5.6.3-440:
total 12
drwxr-xr-x 3 root root 4096 2026-06-08 15:59:16.191791085 +0100 drivers
drwxr-xr-x 5 root root 4096 2026-06-08 15:59:16.191791085 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.191791085 +0100 misc

/lib/modules/5.6.3-440/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.192791087 +0100 net

/lib/modules/5.6.3-440/drivers/net:
total 504
-rw-r--r-- 1 root root  39780 2026-01-29 11:10:14.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:14.000000000 +0000 ath8327.ko.plt
-rw-r--r-- 1 root root  25472 2026-01-29 11:10:14.000000000 +0000 aths16.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:14.000000000 +0000 aths16.ko.plt
-rw-r--r-- 1 root root  38432 2026-01-29 11:10:15.000000000 +0000 atl1c.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:15.000000000 +0000 atl1c.ko.plt
-rw-r--r-- 1 root root  67580 2026-01-29 11:10:14.000000000 +0000 ibm_newemac.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:14.000000000 +0000 ibm_newemac.ko.plt
-rw-r--r-- 1 root root 191072 2026-01-29 11:10:14.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:14.000000000 +0000 packet_hook.ko.plt
-rw-r--r-- 1 root root  69888 2026-01-29 11:10:14.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:14.000000000 +0000 phy_helper.ko.plt
-rw-r--r-- 1 root root  67336 2026-01-29 11:10:14.000000000 +0000 switch.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:14.000000000 +0000 switch.ko.plt

/lib/modules/5.6.3-440/kernel:
total 12
drwxr-xr-x 3 root root 4096 2026-06-08 15:59:16.191791085 +0100 drivers
drwxr-xr-x 4 root root 4096 2026-06-08 15:59:16.191791085 +0100 lib
drwxr-xr-x 5 root root 4096 2026-06-08 15:59:16.191791085 +0100 net

/lib/modules/5.6.3-440/kernel/drivers:
total 4
drwxr-xr-x 4 root root 4096 2026-06-08 15:59:16.191791085 +0100 net

/lib/modules/5.6.3-440/kernel/drivers/net:
total 32
drwxr-xr-x 2 root root  4096 2026-06-08 15:59:16.191791085 +0100 slip
-rw-r--r-- 1 root root 20764 2026-01-29 11:10:14.000000000 +0000 vrf.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:14.000000000 +0000 vrf.ko.plt
drwxr-xr-x 2 root root  4096 2026-06-08 15:59:16.191791085 +0100 wireguard

/lib/modules/5.6.3-440/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6076 2026-01-29 11:10:14.000000000 +0000 slhc.ko
-rw-r--r-- 1 root root    0 2026-01-29 11:10:14.000000000 +0000 slhc.ko.plt

/lib/modules/5.6.3-440/kernel/drivers/net/wireguard:
total 100
-rw-r--r-- 1 root root 100864 2026-01-29 11:10:14.000000000 +0000 wireguard.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:14.000000000 +0000 wireguard.ko.plt

/lib/modules/5.6.3-440/kernel/lib:
total 12
-rw-r--r-- 1 root root 3352 2026-01-29 11:10:14.000000000 +0000 crc-ccitt.ko
-rw-r--r-- 1 root root    0 2026-01-29 11:10:14.000000000 +0000 crc-ccitt.ko.plt
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.191791085 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.191791085 +0100 zlib_inflate

/lib/modules/5.6.3-440/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19924 2026-01-29 11:10:14.000000000 +0000 zlib_deflate.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:14.000000000 +0000 zlib_deflate.ko.plt

/lib/modules/5.6.3-440/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 15436 2026-01-29 11:10:14.000000000 +0000 zlib_inflate.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:14.000000000 +0000 zlib_inflate.ko.plt

/lib/modules/5.6.3-440/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.191791085 +0100 802
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.191791085 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.191791085 +0100 ipv6

/lib/modules/5.6.3-440/kernel/net/802:
total 12
-rw-r--r-- 1 root root 11568 2026-01-29 11:10:14.000000000 +0000 mrp.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:14.000000000 +0000 mrp.ko.plt

/lib/modules/5.6.3-440/kernel/net/ipv4:
total 20
-rw-r--r-- 1 root root 18884 2026-01-29 11:10:14.000000000 +0000 ip_tunnel.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:14.000000000 +0000 ip_tunnel.ko.plt

/lib/modules/5.6.3-440/kernel/net/ipv6:
total 28
-rw-r--r-- 1 root root 10112 2026-01-29 11:10:14.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:14.000000000 +0000 ah6.ko.plt
-rw-r--r-- 1 root root 13288 2026-01-29 11:10:14.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:14.000000000 +0000 esp6.ko.plt

/lib/modules/5.6.3-440/misc:
total 64
-rw-r--r-- 1 root root 49208 2026-01-29 11:10:14.000000000 +0000 flash.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:14.000000000 +0000 flash.ko.plt
-rw-r--r-- 1 root root  9140 2026-01-29 11:10:14.000000000 +0000 panics.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:14.000000000 +0000 panics.ko.plt

/lib/modules/5.6.3-e500:
total 12
drwxr-xr-x 3 root root 4096 2026-06-08 15:59:16.187791075 +0100 drivers
drwxr-xr-x 5 root root 4096 2026-06-08 15:59:16.186791072 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.187791075 +0100 misc

/lib/modules/5.6.3-e500/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.190791082 +0100 net

/lib/modules/5.6.3-e500/drivers/net:
total 1836
-rw-r--r-- 1 root root   39780 2026-01-29 11:10:12.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root       0 2026-01-29 11:10:12.000000000 +0000 ath8327.ko.plt
-rw-r--r-- 1 root root   25472 2026-01-29 11:10:12.000000000 +0000 aths16.ko
-rw-r--r-- 1 root root       0 2026-01-29 11:10:12.000000000 +0000 aths16.ko.plt
-rw-r--r-- 1 root root   38796 2026-01-29 11:10:13.000000000 +0000 atl1c.ko
-rw-r--r-- 1 root root       0 2026-01-29 11:10:13.000000000 +0000 atl1c.ko.plt
-rw-r--r-- 1 root root 1392496 2026-01-29 11:10:13.000000000 +0000 dpa.ko
-rw-r--r-- 1 root root       0 2026-01-29 11:10:13.000000000 +0000 dpa.ko.plt
-rw-r--r-- 1 root root   28196 2026-01-29 11:10:12.000000000 +0000 gianfar.ko
-rw-r--r-- 1 root root       0 2026-01-29 11:10:12.000000000 +0000 gianfar.ko.plt
-rw-r--r-- 1 root root   11084 2026-01-29 11:10:12.000000000 +0000 mpls_fp.ko
-rw-r--r-- 1 root root       0 2026-01-29 11:10:12.000000000 +0000 mpls_fp.ko.plt
-rw-r--r-- 1 root root  191072 2026-01-29 11:10:12.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root       0 2026-01-29 11:10:12.000000000 +0000 packet_hook.ko.plt
-rw-r--r-- 1 root root   70000 2026-01-29 11:10:12.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root       0 2026-01-29 11:10:12.000000000 +0000 phy_helper.ko.plt
-rw-r--r-- 1 root root   67336 2026-01-29 11:10:12.000000000 +0000 switch.ko
-rw-r--r-- 1 root root       0 2026-01-29 11:10:12.000000000 +0000 switch.ko.plt

/lib/modules/5.6.3-e500/kernel:
total 12
drwxr-xr-x 3 root root 4096 2026-06-08 15:59:16.185791070 +0100 drivers
drwxr-xr-x 4 root root 4096 2026-06-08 15:59:16.185791070 +0100 lib
drwxr-xr-x 7 root root 4096 2026-06-08 15:59:16.186791072 +0100 net

/lib/modules/5.6.3-e500/kernel/drivers:
total 4
drwxr-xr-x 4 root root 4096 2026-06-08 15:59:16.186791072 +0100 net

/lib/modules/5.6.3-e500/kernel/drivers/net:
total 156
-rw-r--r-- 1 root root 41712 2026-01-29 11:10:12.000000000 +0000 macsec.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:12.000000000 +0000 macsec.ko.plt
-rw-r--r-- 1 root root 13172 2026-01-29 11:10:12.000000000 +0000 net_failover.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:12.000000000 +0000 net_failover.ko.plt
drwxr-xr-x 2 root root  4096 2026-06-08 15:59:16.185791070 +0100 slip
-rw-r--r-- 1 root root 17832 2026-01-29 11:10:12.000000000 +0000 veth.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:12.000000000 +0000 veth.ko.plt
-rw-r--r-- 1 root root 41392 2026-01-29 11:10:12.000000000 +0000 virtio_net.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:12.000000000 +0000 virtio_net.ko.plt
-rw-r--r-- 1 root root 20796 2026-01-29 11:10:12.000000000 +0000 vrf.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:12.000000000 +0000 vrf.ko.plt
drwxr-xr-x 2 root root  4096 2026-06-08 15:59:16.186791072 +0100 wireguard

/lib/modules/5.6.3-e500/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6076 2026-01-29 11:10:12.000000000 +0000 slhc.ko
-rw-r--r-- 1 root root    0 2026-01-29 11:10:12.000000000 +0000 slhc.ko.plt

/lib/modules/5.6.3-e500/kernel/drivers/net/wireguard:
total 100
-rw-r--r-- 1 root root 101152 2026-01-29 11:10:12.000000000 +0000 wireguard.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:12.000000000 +0000 wireguard.ko.plt

/lib/modules/5.6.3-e500/kernel/lib:
total 12
-rw-r--r-- 1 root root 3352 2026-01-29 11:10:12.000000000 +0000 crc-ccitt.ko
-rw-r--r-- 1 root root    0 2026-01-29 11:10:12.000000000 +0000 crc-ccitt.ko.plt
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.185791070 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.185791070 +0100 zlib_inflate

/lib/modules/5.6.3-e500/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19924 2026-01-29 11:10:12.000000000 +0000 zlib_deflate.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:12.000000000 +0000 zlib_deflate.ko.plt

/lib/modules/5.6.3-e500/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 15436 2026-01-29 11:10:12.000000000 +0000 zlib_inflate.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:12.000000000 +0000 zlib_inflate.ko.plt

/lib/modules/5.6.3-e500/kernel/net:
total 20
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.186791072 +0100 802
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.186791072 +0100 core
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.186791072 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.187791075 +0100 ipv6
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.186791072 +0100 mpls

/lib/modules/5.6.3-e500/kernel/net/802:
total 12
-rw-r--r-- 1 root root 11568 2026-01-29 11:10:12.000000000 +0000 mrp.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:12.000000000 +0000 mrp.ko.plt

/lib/modules/5.6.3-e500/kernel/net/core:
total 8
-rw-r--r-- 1 root root 7248 2026-01-29 11:10:12.000000000 +0000 failover.ko
-rw-r--r-- 1 root root    0 2026-01-29 11:10:12.000000000 +0000 failover.ko.plt

/lib/modules/5.6.3-e500/kernel/net/ipv4:
total 20
-rw-r--r-- 1 root root 18884 2026-01-29 11:10:12.000000000 +0000 ip_tunnel.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:12.000000000 +0000 ip_tunnel.ko.plt

/lib/modules/5.6.3-e500/kernel/net/ipv6:
total 28
-rw-r--r-- 1 root root 10112 2026-01-29 11:10:12.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:12.000000000 +0000 ah6.ko.plt
-rw-r--r-- 1 root root 13320 2026-01-29 11:10:12.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:12.000000000 +0000 esp6.ko.plt

/lib/modules/5.6.3-e500/kernel/net/mpls:
total 56
-rw-r--r-- 1 root root  5648 2026-01-29 11:10:12.000000000 +0000 mpls_iptunnel.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:12.000000000 +0000 mpls_iptunnel.ko.plt
-rw-r--r-- 1 root root 48360 2026-01-29 11:10:12.000000000 +0000 mpls_router.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:12.000000000 +0000 mpls_router.ko.plt

/lib/modules/5.6.3-e500/misc:
total 64
-rw-r--r-- 1 root root 50224 2026-01-29 11:10:12.000000000 +0000 flash.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:12.000000000 +0000 flash.ko.plt
-rw-r--r-- 1 root root  9140 2026-01-29 11:10:12.000000000 +0000 panics.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:12.000000000 +0000 panics.ko.plt

/lib/modules/5.6.3-smp:
total 12
drwxr-xr-x 3 root root 4096 2026-06-08 15:59:16.184791067 +0100 drivers
drwxr-xr-x 5 root root 4096 2026-06-08 15:59:16.184791067 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.184791067 +0100 misc

/lib/modules/5.6.3-smp/drivers:
total 4
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.185791070 +0100 net

/lib/modules/5.6.3-smp/drivers/net:
total 436
-rw-r--r-- 1 root root  40108 2026-01-29 11:10:11.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:11.000000000 +0000 ath8327.ko.plt
-rw-r--r-- 1 root root  25656 2026-01-29 11:10:11.000000000 +0000 aths16.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:11.000000000 +0000 aths16.ko.plt
-rw-r--r-- 1 root root  12192 2026-01-29 11:10:10.000000000 +0000 mpls_fp.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:10.000000000 +0000 mpls_fp.ko.plt
-rw-r--r-- 1 root root 213244 2026-01-29 11:10:10.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:10.000000000 +0000 packet_hook.ko.plt
-rw-r--r-- 1 root root  70124 2026-01-29 11:10:10.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:10.000000000 +0000 phy_helper.ko.plt
-rw-r--r-- 1 root root  69828 2026-01-29 11:10:11.000000000 +0000 switch.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:11.000000000 +0000 switch.ko.plt

/lib/modules/5.6.3-smp/kernel:
total 12
drwxr-xr-x 3 root root 4096 2026-06-08 15:59:16.183791064 +0100 drivers
drwxr-xr-x 4 root root 4096 2026-06-08 15:59:16.183791064 +0100 lib
drwxr-xr-x 7 root root 4096 2026-06-08 15:59:16.184791067 +0100 net

/lib/modules/5.6.3-smp/kernel/drivers:
total 4
drwxr-xr-x 4 root root 4096 2026-06-08 15:59:16.184791067 +0100 net

/lib/modules/5.6.3-smp/kernel/drivers/net:
total 160
-rw-r--r-- 1 root root 45736 2026-01-29 11:10:10.000000000 +0000 macsec.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:10.000000000 +0000 macsec.ko.plt
-rw-r--r-- 1 root root 13864 2026-01-29 11:10:10.000000000 +0000 net_failover.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:10.000000000 +0000 net_failover.ko.plt
drwxr-xr-x 2 root root  4096 2026-06-08 15:59:16.183791064 +0100 slip
-rw-r--r-- 1 root root 19268 2026-01-29 11:10:10.000000000 +0000 veth.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:10.000000000 +0000 veth.ko.plt
-rw-r--r-- 1 root root 43428 2026-01-29 11:10:10.000000000 +0000 virtio_net.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:10.000000000 +0000 virtio_net.ko.plt
-rw-r--r-- 1 root root 22300 2026-01-29 11:10:10.000000000 +0000 vrf.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:10.000000000 +0000 vrf.ko.plt
drwxr-xr-x 2 root root  4096 2026-06-08 15:59:16.183791064 +0100 wireguard

/lib/modules/5.6.3-smp/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6108 2026-01-29 11:10:10.000000000 +0000 slhc.ko
-rw-r--r-- 1 root root    0 2026-01-29 11:10:10.000000000 +0000 slhc.ko.plt

/lib/modules/5.6.3-smp/kernel/drivers/net/wireguard:
total 104
-rw-r--r-- 1 root root 104644 2026-01-29 11:10:10.000000000 +0000 wireguard.ko
-rw-r--r-- 1 root root      0 2026-01-29 11:10:10.000000000 +0000 wireguard.ko.plt

/lib/modules/5.6.3-smp/kernel/lib:
total 12
-rw-r--r-- 1 root root 3384 2026-01-29 11:10:10.000000000 +0000 crc-ccitt.ko
-rw-r--r-- 1 root root    0 2026-01-29 11:10:10.000000000 +0000 crc-ccitt.ko.plt
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.183791064 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.183791064 +0100 zlib_inflate

/lib/modules/5.6.3-smp/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19956 2026-01-29 11:10:10.000000000 +0000 zlib_deflate.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:10.000000000 +0000 zlib_deflate.ko.plt

/lib/modules/5.6.3-smp/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 15468 2026-01-29 11:10:10.000000000 +0000 zlib_inflate.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:10.000000000 +0000 zlib_inflate.ko.plt

/lib/modules/5.6.3-smp/kernel/net:
total 20
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.184791067 +0100 802
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.184791067 +0100 core
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.184791067 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.184791067 +0100 ipv6
drwxr-xr-x 2 root root 4096 2026-06-08 15:59:16.184791067 +0100 mpls

/lib/modules/5.6.3-smp/kernel/net/802:
total 12
-rw-r--r-- 1 root root 11964 2026-01-29 11:10:10.000000000 +0000 mrp.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:10.000000000 +0000 mrp.ko.plt

/lib/modules/5.6.3-smp/kernel/net/core:
total 8
-rw-r--r-- 1 root root 7936 2026-01-29 11:10:10.000000000 +0000 failover.ko
-rw-r--r-- 1 root root    0 2026-01-29 11:10:10.000000000 +0000 failover.ko.plt

/lib/modules/5.6.3-smp/kernel/net/ipv4:
total 20
-rw-r--r-- 1 root root 19492 2026-01-29 11:10:10.000000000 +0000 ip_tunnel.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:10.000000000 +0000 ip_tunnel.ko.plt

/lib/modules/5.6.3-smp/kernel/net/ipv6:
total 28
-rw-r--r-- 1 root root 10300 2026-01-29 11:10:10.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:10.000000000 +0000 ah6.ko.plt
-rw-r--r-- 1 root root 13560 2026-01-29 11:10:10.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:10.000000000 +0000 esp6.ko.plt

/lib/modules/5.6.3-smp/kernel/net/mpls:
total 60
-rw-r--r-- 1 root root  5828 2026-01-29 11:10:10.000000000 +0000 mpls_iptunnel.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:10.000000000 +0000 mpls_iptunnel.ko.plt
-rw-r--r-- 1 root root 50676 2026-01-29 11:10:10.000000000 +0000 mpls_router.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:10.000000000 +0000 mpls_router.ko.plt

/lib/modules/5.6.3-smp/misc:
total 64
-rw-r--r-- 1 root root 50808 2026-01-29 11:10:10.000000000 +0000 flash.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:10.000000000 +0000 flash.ko.plt
-rw-r--r-- 1 root root  9280 2026-01-29 11:10:10.000000000 +0000 panics.ko
-rw-r--r-- 1 root root     0 2026-01-29 11:10:10.000000000 +0000 panics.ko.plt

/mnt:
total 0

/proc:
total 0

/sbin:
total 68
-rwxr-xr-x 1 root root 66356 2026-01-29 11:10:06.000000000 +0000 nandfix

/tmp:
total 0
```

