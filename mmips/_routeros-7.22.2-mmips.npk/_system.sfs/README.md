### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 8882914 bytes, 754 inodes, blocksize: 262144 bytes, created: Wed Apr 22 08:29:12 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:11.000000000 +0100 bin
drwxr-xr-x 9 root root 4096 2026-04-22 09:29:10.000000000 +0100 bndl
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 boot
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:11.000000000 +0100 dev
lrwxrwxrwx 1 root root   11 2026-04-22 09:29:11.000000000 +0100 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:11.000000000 +0100 etc
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:11.000000000 +0100 flash
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:11.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:11.000000000 +0100 nova
lrwxrwxrwx 1 root root    9 2026-04-22 09:29:11.000000000 +0100 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:11.000000000 +0100 proc
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:11.000000000 +0100 ram
lrwxrwxrwx 1 root root    9 2026-04-22 09:29:11.000000000 +0100 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 sbin
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:11.000000000 +0100 sys
lrwxrwxrwx 1 root root    7 2026-04-22 09:29:11.000000000 +0100 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:11.000000000 +0100 var

/bin:
total 288
lrwxrwxrwx 1 root root     21 2026-04-22 09:29:11.000000000 +0100 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root  18624 2026-04-22 09:06:28.000000000 +0100 catlog
lrwxrwxrwx 1 root root     15 2026-04-22 09:29:11.000000000 +0100 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root     15 2026-04-22 09:29:11.000000000 +0100 login -> /nova/bin/login
-rwxr-xr-x 1 root root  28220 2026-04-22 09:23:43.000000000 +0100 mkexfatfs
-rwxr-xr-x 1 root root   7544 2026-04-22 09:06:28.000000000 +0100 pakp
lrwxrwxrwx 1 root root     21 2026-04-22 09:29:11.000000000 +0100 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root     15 2026-04-22 09:29:11.000000000 +0100 shell -> /nova/bin/login
-rwxr-xr-x 1 root root 234824 2026-04-22 09:24:04.000000000 +0100 sshfs

/bndl:
total 28
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 advanced-tools
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:10.000000000 +0100 dhcp
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:10.000000000 +0100 hotspot
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 ipv6
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:10.000000000 +0100 ppp
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:10.000000000 +0100 security
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:10.000000000 +0100 wifi

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 webfig

/bndl/advanced-tools/home/web/webfig:
total 16
-rw-r--r-- 1 root root 11079 2026-04-22 09:24:38.000000000 +0100 advtool-d0ca499b5124.jg.gz
-rwxr-xr-x 1 root root   108 2026-04-22 09:24:38.000000000 +0100 advtool.info
lrwxrwxrwx 1 root root    26 2026-04-22 09:24:38.000000000 +0100 advtool.jg.gz -> advtool-d0ca499b5124.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib

/bndl/advanced-tools/nova/bin:
total 204
-rwxr-xr-x 1 root root 31872 2026-04-22 09:24:21.000000000 +0100 ddns
-rwxr-xr-x 1 root root 16108 2026-04-22 09:24:14.000000000 +0100 fping
-rwxr-xr-x 1 root root 18072 2026-04-22 09:24:19.000000000 +0100 macscan
-rwxr-xr-x 1 root root 68468 2026-04-22 09:25:17.000000000 +0100 netwatch
-rwxr-xr-x 1 root root 16604 2026-04-22 09:24:14.000000000 +0100 pspeed
-rwxr-xr-x 1 root root 35036 2026-04-22 09:24:32.000000000 +0100 scanner
-rwxr-xr-x 1 root root 12104 2026-04-22 09:24:37.000000000 +0100 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 console

/bndl/advanced-tools/nova/lib/console:
total 28
-rwxr-xr-x 1 root root 26479 2026-04-22 09:24:12.000000000 +0100 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 home
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 webfig

/bndl/dhcp/home/web/webfig:
total 32
-rw-r--r-- 1 root root 27518 2026-04-22 09:24:29.000000000 +0100 dhcp-6032962dfb91.jg.gz
-rwxr-xr-x 1 root root   102 2026-04-22 09:24:29.000000000 +0100 dhcp.info
lrwxrwxrwx 1 root root    23 2026-04-22 09:24:29.000000000 +0100 dhcp.jg.gz -> dhcp-6032962dfb91.jg.gz

/bndl/dhcp/lib:
total 28
-rwxr-xr-x 1 root root 26188 2026-04-22 09:24:16.000000000 +0100 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib

/bndl/dhcp/nova/bin:
total 340
-rwxr-xr-x 1 root root 344156 2026-04-22 09:25:23.000000000 +0100 dhcp
lrwxrwxrwx 1 root root      4 2026-04-22 09:25:26.000000000 +0100 dhcpclient -> dhcp

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 console

/bndl/dhcp/nova/lib/console:
total 120
-rwxr-xr-x 1 root root 121904 2026-04-22 09:24:20.000000000 +0100 1128267776.mem

/bndl/hotspot:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:10.000000000 +0100 nova

/bndl/hotspot/home:
total 4
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 web

/bndl/hotspot/home/web:
total 8
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:10.000000000 +0100 hotspot
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 webfig

/bndl/hotspot/home/web/hotspot:
total 68
-rw-r--r-- 1 root root 1094 2026-04-21 14:58:49.000000000 +0100 alogin.html
-rw-r--r-- 1 root root  311 2026-04-21 14:58:49.000000000 +0100 api.json
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 css
-rw-r--r-- 1 root root  640 2026-04-21 14:58:49.000000000 +0100 error.html
-rw-r--r-- 1 root root 4033 2026-04-21 14:58:49.000000000 +0100 errors.txt
-rw-r--r-- 1 root root  903 2026-04-21 14:58:49.000000000 +0100 favicon.ico
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 img
-rw-r--r-- 1 root root 4423 2026-04-21 14:58:49.000000000 +0100 login.html
-rw-r--r-- 1 root root 1459 2026-04-21 14:58:49.000000000 +0100 logout.html
-rw-r--r-- 1 root root 7218 2026-04-21 14:58:49.000000000 +0100 md5.js
-rw-r--r-- 1 root root 1204 2026-04-21 14:58:49.000000000 +0100 radvert.html
-rw-r--r-- 1 root root  330 2026-04-21 14:58:49.000000000 +0100 redirect.html
-rw-r--r-- 1 root root  877 2026-04-21 14:58:49.000000000 +0100 rlogin.html
-rw-r--r-- 1 root root 2855 2026-04-21 14:58:49.000000000 +0100 status.html
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 xml

/bndl/hotspot/home/web/hotspot/css:
total 4
-rw-r--r-- 1 root root 4053 2026-04-21 14:58:49.000000000 +0100 style.css

/bndl/hotspot/home/web/hotspot/img:
total 8
-rw-r--r-- 1 root root 644 2026-04-21 14:58:49.000000000 +0100 password.svg
-rw-r--r-- 1 root root 444 2026-04-21 14:58:49.000000000 +0100 user.svg

/bndl/hotspot/home/web/hotspot/xml:
total 32
-rw-r--r-- 1 root root 4251 2026-04-21 14:58:49.000000000 +0100 WISPAccessGatewayParam.xsd
-rw-r--r-- 1 root root  839 2026-04-21 14:58:49.000000000 +0100 alogin.html
-rw-r--r-- 1 root root  428 2026-04-21 14:58:49.000000000 +0100 error.html
-rw-r--r-- 1 root root  372 2026-04-21 14:58:49.000000000 +0100 flogout.html
-rw-r--r-- 1 root root  809 2026-04-21 14:58:49.000000000 +0100 login.html
-rw-r--r-- 1 root root  370 2026-04-21 14:58:49.000000000 +0100 logout.html
-rw-r--r-- 1 root root  545 2026-04-21 14:58:49.000000000 +0100 rlogin.html

/bndl/hotspot/home/web/webfig:
total 28
-rw-r--r-- 1 root root 20500 2026-04-22 09:25:00.000000000 +0100 hotspot-e8977e9485b6.jg.gz
-rwxr-xr-x 1 root root   108 2026-04-22 09:25:00.000000000 +0100 hotspot.info
lrwxrwxrwx 1 root root    26 2026-04-22 09:25:00.000000000 +0100 hotspot.jg.gz -> hotspot-e8977e9485b6.jg.gz

/bndl/hotspot/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 modules

/bndl/hotspot/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 5.6.3

/bndl/hotspot/lib/modules/5.6.3:
total 4
-rw-r--r-- 1 root root    0 2026-04-22 09:25:45.000000000 +0100 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 net

/bndl/hotspot/lib/modules/5.6.3/net:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 ipv4

/bndl/hotspot/lib/modules/5.6.3/net/ipv4:
total 44
-rw-r--r-- 1 root root 43900 2026-04-22 09:25:11.000000000 +0100 unicl.ko

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib

/bndl/hotspot/nova/bin:
total 260
-rwxr-xr-x 1 root root 265040 2026-04-22 09:25:36.000000000 +0100 hotspot

/bndl/hotspot/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 radius

/bndl/hotspot/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2026-04-22 09:24:33.000000000 +0100 hotspot.x3

/bndl/hotspot/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 console

/bndl/hotspot/nova/lib/console:
total 84
-rwxr-xr-x 1 root root 82642 2026-04-22 09:24:21.000000000 +0100 1132462080.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 webfig

/bndl/ipv6/home/web/webfig:
total 76
-rw-r--r-- 1 root root 70652 2026-04-22 09:24:25.000000000 +0100 ipv6-00932c693677.jg.gz
-rwxr-xr-x 1 root root   102 2026-04-22 09:24:25.000000000 +0100 ipv6.info
lrwxrwxrwx 1 root root    23 2026-04-22 09:24:25.000000000 +0100 ipv6.jg.gz -> ipv6-00932c693677.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib

/bndl/ipv6/nova/bin:
total 100
-rwxr-xr-x 1 root root 35504 2026-04-22 09:24:23.000000000 +0100 ippool6
-rwxr-xr-x 1 root root 64844 2026-04-22 09:24:34.000000000 +0100 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 route

/bndl/ipv6/nova/lib/console:
total 188
-rwxr-xr-x 1 root root 190556 2026-04-22 09:24:16.000000000 +0100 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2026-04-21 14:58:49.000000000 +0100 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:10.000000000 +0100 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 webfig

/bndl/ppp/home/web/webfig:
total 44
-rw-r--r-- 1 root root 39744 2026-04-22 09:25:08.000000000 +0100 ppp-3833e10a898f.jg.gz
-rwxr-xr-x 1 root root   100 2026-04-22 09:25:08.000000000 +0100 ppp.info
lrwxrwxrwx 1 root root    22 2026-04-22 09:25:09.000000000 +0100 ppp.jg.gz -> ppp-3833e10a898f.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:10.000000000 +0100 5.6.3

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2026-04-22 09:27:45.000000000 +0100 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 104
-rw-r--r-- 1 root root 11940 2026-04-22 09:23:03.000000000 +0100 ppp_async.ko
-rw-r--r-- 1 root root  6816 2026-04-22 09:23:03.000000000 +0100 ppp_deflate.ko
-rw-r--r-- 1 root root 34220 2026-04-22 09:23:03.000000000 +0100 ppp_generic.ko
-rw-r--r-- 1 root root  8684 2026-04-22 09:23:03.000000000 +0100 ppp_mppe.ko
-rw-r--r-- 1 root root 10100 2026-04-22 09:23:03.000000000 +0100 ppp_synctty.ko
-rw-r--r-- 1 root root 12972 2026-04-22 09:23:03.000000000 +0100 pppoe.ko
-rw-r--r-- 1 root root  4316 2026-04-22 09:23:03.000000000 +0100 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 96
-rw-r--r-- 1 root root 38008 2026-04-22 09:24:59.000000000 +0100 ovpn.ko
-rw-r--r-- 1 root root  6432 2026-04-22 09:25:03.000000000 +0100 pppoefp.ko
-rw-r--r-- 1 root root 48576 2026-04-22 09:24:53.000000000 +0100 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 64
-rw-r--r-- 1 root root 50268 2026-04-22 09:25:00.000000000 +0100 l2tp.ko
-rw-r--r-- 1 root root 10544 2026-04-22 09:24:36.000000000 +0100 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 etc
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib

/bndl/ppp/nova/bin:
total 640
-rwxr-xr-x 1 root root 653320 2026-04-22 09:27:31.000000000 +0100 ppp
lrwxrwxrwx 1 root root      3 2026-04-22 09:27:33.000000000 +0100 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2026-04-22 09:24:48.000000000 +0100 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2026-04-22 09:24:48.000000000 +0100 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 profiler

/bndl/ppp/nova/lib/console:
total 156
-rwxr-xr-x 1 root root 155669 2026-04-22 09:25:05.000000000 +0100 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 4
-rwxr-xr-x 1 root root 1972 2026-04-22 09:25:41.000000000 +0100 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:10.000000000 +0100 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 webfig

/bndl/security/home/web/webfig:
total 28
-rw-r--r-- 1 root root 22399 2026-04-22 09:25:49.000000000 +0100 secure-5cde24840667.jg.gz
-rwxr-xr-x 1 root root   106 2026-04-22 09:25:49.000000000 +0100 secure.info
lrwxrwxrwx 1 root root    25 2026-04-22 09:25:49.000000000 +0100 secure.jg.gz -> secure-5cde24840667.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 5.6.3

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 kernel
-rw-r--r-- 1 root root  106 2026-04-22 09:28:31.000000000 +0100 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 crypto
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:10.000000000 +0100 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 88
-rw-r--r-- 1 root root  8384 2026-04-22 09:23:02.000000000 +0100 blowfish_common.ko
-rw-r--r-- 1 root root  6116 2026-04-22 09:23:02.000000000 +0100 blowfish_generic.ko
-rw-r--r-- 1 root root 23668 2026-04-22 09:23:02.000000000 +0100 camellia_generic.ko
-rw-r--r-- 1 root root  8412 2026-04-22 09:23:02.000000000 +0100 chacha20poly1305.ko
-rw-r--r-- 1 root root  3864 2026-04-22 09:23:02.000000000 +0100 echainiv.ko
-rw-r--r-- 1 root root 15864 2026-04-22 09:23:02.000000000 +0100 twofish_common.ko
-rw-r--r-- 1 root root  9892 2026-04-22 09:23:02.000000000 +0100 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 key
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root  8968 2026-04-22 09:23:05.000000000 +0100 ah4.ko
-rw-r--r-- 1 root root 12536 2026-04-22 09:23:05.000000000 +0100 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 36
-rw-r--r-- 1 root root 34200 2026-04-22 09:23:05.000000000 +0100 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 28
-rw-r--r-- 1 root root 27120 2026-04-22 09:23:07.000000000 +0100 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib

/bndl/security/nova/bin:
total 792
-rwxr-xr-x 1 root root 569488 2026-04-22 09:28:15.000000000 +0100 ipsec
lrwxrwxrwx 1 root root      5 2026-04-22 09:28:15.000000000 +0100 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 234128 2026-04-22 09:26:50.000000000 +0100 ssh
lrwxrwxrwx 1 root root      3 2026-04-22 09:26:50.000000000 +0100 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2026-04-22 09:25:28.000000000 +0100 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2026-04-22 09:25:28.000000000 +0100 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 console

/bndl/security/nova/lib/console:
total 96
-rwxr-xr-x 1 root root 95288 2026-04-22 09:25:47.000000000 +0100 1077936128.mem

/bndl/wifi:
total 12
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:10.000000000 +0100 nova

/bndl/wifi/home:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 web

/bndl/wifi/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 webfig

/bndl/wifi/home/web/webfig:
total 76
-rw-r--r-- 1 root root 73506 2026-04-22 09:24:24.000000000 +0100 wave2-56df185b004a.jg.gz
-rwxr-xr-x 1 root root   104 2026-04-22 09:24:25.000000000 +0100 wave2.info
lrwxrwxrwx 1 root root    24 2026-04-22 09:24:25.000000000 +0100 wave2.jg.gz -> wave2-56df185b004a.jg.gz

/bndl/wifi/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 modules

/bndl/wifi/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 5.6.3

/bndl/wifi/lib/modules/5.6.3:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 misc
-rw-r--r-- 1 root root   23 2026-04-22 09:28:59.000000000 +0100 modules.dep.wifi

/bndl/wifi/lib/modules/5.6.3/misc:
total 40
-rw-r--r-- 1 root root 39368 2026-04-22 09:25:29.000000000 +0100 c2.ko

/bndl/wifi/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib

/bndl/wifi/nova/bin:
total 1196
-rwxr-xr-x 1 root root 1221580 2026-04-22 09:28:41.000000000 +0100 ww2

/bndl/wifi/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 radius

/bndl/wifi/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 183 2026-04-22 09:24:14.000000000 +0100 wifi.x3

/bndl/wifi/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2026-04-22 09:24:14.000000000 +0100 wifi.x3

/bndl/wifi/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 console

/bndl/wifi/nova/lib/console:
total 244
-rwxr-xr-x 1 root root 248786 2026-04-22 09:24:23.000000000 +0100 1275068416.mem

/boot:
total 0

/dev:
total 0

/etc:
total 184
-rw-r--r-- 1 root root 130743 2026-04-22 09:03:53.000000000 +0100 license
-rw-r--r-- 1 root root  54320 2026-04-22 09:06:49.000000000 +0100 mt7621L-7.22.2.fwf
lrwxrwxrwx 1 root root     24 2026-04-22 09:29:11.000000000 +0100 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2026-04-22 09:29:11.000000000 +0100 web

/home/web:
total 64
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 assets
-rwxr-xr-x 1 root root 19798 2026-04-22 09:05:52.000000000 +0100 bth-files.html
-rwxr-xr-x 1 root root   600 2026-01-08 09:06:12.000000000 +0000 favicon.png
-rwxr-xr-x 1 root root   689 2026-01-08 09:06:12.000000000 +0000 favicon.svg
-rwxr-xr-x 1 root root   708 2026-01-08 09:06:11.000000000 +0000 graph.css
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 help
-rwxr-xr-x 1 root root  1317 2026-01-08 09:06:12.000000000 +0000 index2.html
lrwxrwxrwx 1 root root    12 2026-04-22 09:24:09.000000000 +0100 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2026-01-08 09:06:12.000000000 +0000 logo.png
-rw-r--r-- 1 root root  2427 2026-04-21 14:58:49.000000000 +0100 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2026-01-08 09:06:12.000000000 +0000 robots.txt
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 webfig
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:11.000000000 +0100 winbox

/home/web/assets:
total 168
-rw-r--r-- 1 root root  19040 2026-04-21 14:58:49.000000000 +0100 400.woff2
-rw-r--r-- 1 root root  19156 2026-04-21 14:58:49.000000000 +0100 700.woff2
-rwxr-xr-x 1 root root   1050 2026-01-08 09:06:12.000000000 +0000 script-582e5506ba67.js
-rwxr-xr-x 1 root root 123217 2026-04-22 09:03:53.000000000 +0100 style-abdf294b3154.css

/home/web/help:
total 4
-rw-r--r-- 1 root root 118 2026-04-21 14:58:49.000000000 +0100 license.html

/home/web/webfig:
total 1496
-rwxr-xr-x 1 root root   9157 2026-04-22 09:05:28.000000000 +0100 curve255-541e54a862be.js
-rwxr-xr-x 1 root root     72 2026-04-22 09:07:21.000000000 +0100 icons.info
-rwxr-xr-x 1 root root  25219 2026-04-21 08:56:38.000000000 +0100 icons.png
-rwxr-xr-x 1 root root     55 2026-04-22 09:07:21.000000000 +0100 icons24.info
-rwxr-xr-x 1 root root  41114 2026-04-21 08:56:38.000000000 +0100 icons24.png
-rwxr-xr-x 1 root root     55 2026-04-22 09:07:22.000000000 +0100 icons32.info
-rwxr-xr-x 1 root root  56951 2026-04-21 08:56:38.000000000 +0100 icons32.png
-rwxr-xr-x 1 root root  23081 2026-04-22 09:05:28.000000000 +0100 index.html
lrwxrwxrwx 1 root root     13 2026-04-22 09:05:28.000000000 +0100 list -> /ram/gum.list
-rwxr-xr-x 1 root root 413184 2026-04-22 09:05:28.000000000 +0100 master-3f3dc5f50478.js
-rw-r--r-- 1 root root 931729 2026-04-22 09:07:24.000000000 +0100 roteros-fe44d58cb5ed.jg.gz
-rwxr-xr-x 1 root root    109 2026-04-22 09:07:24.000000000 +0100 roteros.info
lrwxrwxrwx 1 root root     26 2026-04-22 09:07:24.000000000 +0100 roteros.jg.gz -> roteros-fe44d58cb5ed.jg.gz

/home/web/winbox:
total 0

/lib:
total 1972
-rwxr-xr-x 1 root root 278968 2026-04-22 09:04:31.000000000 +0100 libc.so
-rwxr-xr-x 1 root root  89284 2026-04-22 09:06:57.000000000 +0100 libeap.so
-rwxr-xr-x 1 root root  21872 2026-04-22 09:05:33.000000000 +0100 libjson.so
-rwxr-xr-x 1 root root 188388 2026-04-22 09:06:11.000000000 +0100 librappsup.so
-rwxr-xr-x 1 root root 126632 2026-04-22 09:05:51.000000000 +0100 libubox.so
-rwxr-xr-x 1 root root  76508 2026-04-22 09:05:28.000000000 +0100 libuc++.so
-rwxr-xr-x 1 root root 290864 2026-04-22 09:06:15.000000000 +0100 libucrypto.so
-rwxr-xr-x 1 root root  27764 2026-04-22 09:05:49.000000000 +0100 libufiber.so
-rwxr-xr-x 1 root root  70680 2026-04-22 09:05:52.000000000 +0100 libuhttp.so
-rwxr-xr-x 1 root root 646604 2026-04-22 09:05:40.000000000 +0100 libumsg.so
-rwxr-xr-x 1 root root  37020 2026-04-22 09:06:23.000000000 +0100 liburadius.so
-rwxr-xr-x 1 root root  10576 2026-04-22 09:06:19.000000000 +0100 libuxml++.so
-rwxr-xr-x 1 root root  37284 2026-04-22 09:05:30.000000000 +0100 libwww.so
-rwxr-xr-x 1 root root  13804 2026-04-22 09:05:32.000000000 +0100 libxml.so
-rwxr-xr-x 1 root root  68024 2026-04-22 09:05:31.000000000 +0100 libz.so
drwxr-xr-x 3 root root   4096 2026-04-22 09:29:10.000000000 +0100 modules
lrwxrwxrwx 1 root root     27 2026-04-22 09:29:11.000000000 +0100 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2026-04-22 09:29:10.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 6 root root 4096 2026-04-22 09:29:10.000000000 +0100 drivers
drwxr-xr-x 8 root root 4096 2026-04-22 09:29:10.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 misc
-rw-r--r-- 1 root root 2647 2026-04-22 09:24:08.000000000 +0100 modules.dep.system
drwxr-xr-x 6 root root 4096 2026-04-22 09:29:10.000000000 +0100 net

/lib/modules/5.6.3/drivers:
total 16
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 char
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 crypto
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 mmc
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 net

/lib/modules/5.6.3/drivers/char:
total 20
-rw-r--r-- 1 root root 4924 2026-04-22 09:20:47.000000000 +0100 mt7621wdt.ko
-rw-r--r-- 1 root root 9160 2026-04-22 09:20:35.000000000 +0100 ticker.ko

/lib/modules/5.6.3/drivers/crypto:
total 24
-rw-r--r-- 1 root root 24188 2026-04-22 09:21:06.000000000 +0100 crypto_eip93.ko

/lib/modules/5.6.3/drivers/mmc:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 host

/lib/modules/5.6.3/drivers/mmc/host:
total 40
-rw-r--r-- 1 root root 37676 2026-04-22 09:20:49.000000000 +0100 mtk_sd.ko

/lib/modules/5.6.3/drivers/net:
total 576
-rw-r--r-- 1 root root  40696 2026-04-22 09:21:37.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root  11352 2026-04-22 09:20:39.000000000 +0100 imq.ko
-rw-r--r-- 1 root root  38672 2026-04-22 09:21:38.000000000 +0100 mediatek_switch.ko
-rw-r--r-- 1 root root  10772 2026-04-22 09:23:03.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root 200732 2026-04-22 09:23:04.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root  91408 2026-04-22 09:21:35.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root  24840 2026-04-22 09:20:48.000000000 +0100 raether.ko
-rw-r--r-- 1 root root  61520 2026-04-22 09:21:40.000000000 +0100 switch.ko
drwxr-xr-x 2 root root   4096 2026-04-22 09:29:10.000000000 +0100 usb
-rw-r--r-- 1 root root  23364 2026-04-22 09:20:35.000000000 +0100 via-velocity.ko
-rw-r--r-- 1 root root  60680 2026-04-22 09:22:49.000000000 +0100 vxlan2.ko

/lib/modules/5.6.3/drivers/net/usb:
total 180
-rw-r--r-- 1 root root  73616 2026-04-22 09:21:59.000000000 +0100 fp_usbnet.ko
-rw-r--r-- 1 root root 109460 2026-04-22 09:21:40.000000000 +0100 mbim.ko

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x  3 root root 4096 2026-04-22 09:29:10.000000000 +0100 arch
drwxr-xr-x  2 root root 4096 2026-04-22 09:29:10.000000000 +0100 crypto
drwxr-xr-x  9 root root 4096 2026-04-22 09:29:10.000000000 +0100 drivers
drwxr-xr-x 11 root root 4096 2026-04-22 09:29:10.000000000 +0100 fs
drwxr-xr-x  5 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib
drwxr-xr-x 12 root root 4096 2026-04-22 09:29:10.000000000 +0100 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 mips

/lib/modules/5.6.3/kernel/arch/mips:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 crypto
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 oprofile

/lib/modules/5.6.3/kernel/arch/mips/crypto:
total 16
-rw-r--r-- 1 root root 7860 2026-04-22 09:23:02.000000000 +0100 chacha-mips.ko
-rw-r--r-- 1 root root 5760 2026-04-22 09:23:02.000000000 +0100 poly1305-mips.ko

/lib/modules/5.6.3/kernel/arch/mips/oprofile:
total 40
-rw-r--r-- 1 root root 38436 2026-04-22 09:23:02.000000000 +0100 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 40
-rw-r--r-- 1 root root  3100 2026-04-22 09:23:02.000000000 +0100 arc4.ko
-rw-r--r-- 1 root root 12340 2026-04-22 09:23:02.000000000 +0100 ccm.ko
-rw-r--r-- 1 root root  5048 2026-04-22 09:23:02.000000000 +0100 cmac.ko
-rw-r--r-- 1 root root  3852 2026-04-22 09:23:02.000000000 +0100 des_generic.ko
-rw-r--r-- 1 root root  5024 2026-04-22 09:23:02.000000000 +0100 md4.ko

/lib/modules/5.6.3/kernel/drivers:
total 28
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 ata
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 hid
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 mmc
drwxr-xr-x 7 root root 4096 2026-04-22 09:29:10.000000000 +0100 net
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 nvme
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 scsi
drwxr-xr-x 8 root root 4096 2026-04-22 09:29:10.000000000 +0100 usb

/lib/modules/5.6.3/kernel/drivers/ata:
total 264
-rw-r--r-- 1 root root  33616 2026-04-22 09:23:02.000000000 +0100 ahci.ko
-rw-r--r-- 1 root root  32900 2026-04-22 09:23:02.000000000 +0100 libahci.ko
-rw-r--r-- 1 root root 194096 2026-04-22 09:23:02.000000000 +0100 libata.ko

/lib/modules/5.6.3/kernel/drivers/hid:
total 72
-rw-r--r-- 1 root root 72648 2026-04-22 09:23:02.000000000 +0100 hid.ko

/lib/modules/5.6.3/kernel/drivers/mmc:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 core
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 host

/lib/modules/5.6.3/kernel/drivers/mmc/core:
total 140
-rw-r--r-- 1 root root  35200 2026-04-22 09:23:03.000000000 +0100 mmc_block.ko
-rw-r--r-- 1 root root 104196 2026-04-22 09:23:03.000000000 +0100 mmc_core.ko

/lib/modules/5.6.3/kernel/drivers/mmc/host:
total 20
-rw-r--r-- 1 root root 13880 2026-04-22 09:23:03.000000000 +0100 mmc_spi.ko
-rw-r--r-- 1 root root  2800 2026-04-22 09:23:03.000000000 +0100 of_mmc_spi.ko

/lib/modules/5.6.3/kernel/drivers/net:
total 104
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 bonding
drwxr-xr-x 3 root root  4096 2026-04-22 09:29:10.000000000 +0100 ethernet
-rw-r--r-- 1 root root 41704 2026-04-22 09:23:03.000000000 +0100 macsec.ko
-rw-r--r-- 1 root root 20292 2026-04-22 09:23:03.000000000 +0100 macvlan.ko
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 slip
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 usb
-rw-r--r-- 1 root root 17072 2026-04-22 09:23:03.000000000 +0100 veth.ko
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 132
-rw-r--r-- 1 root root 132828 2026-04-22 09:23:03.000000000 +0100 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 intel

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 40
-rw-r--r-- 1 root root 37232 2026-04-22 09:23:03.000000000 +0100 e100.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6276 2026-04-22 09:23:03.000000000 +0100 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 144
-rw-r--r-- 1 root root 19604 2026-04-22 09:23:03.000000000 +0100 ax88179_178a.ko
-rw-r--r-- 1 root root 40780 2026-04-22 09:23:03.000000000 +0100 hso.ko
-rw-r--r-- 1 root root  9924 2026-04-22 09:23:03.000000000 +0100 ipheth.ko
-rw-r--r-- 1 root root 12832 2026-04-22 09:23:03.000000000 +0100 sierra_net.ko
-rw-r--r-- 1 root root 25512 2026-04-22 09:23:03.000000000 +0100 smsc95xx.ko
-rw-r--r-- 1 root root 27792 2026-04-22 09:23:03.000000000 +0100 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 72
-rw-r--r-- 1 root root 71928 2026-04-22 09:23:03.000000000 +0100 wireguard.ko

/lib/modules/5.6.3/kernel/drivers/nvme:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 host

/lib/modules/5.6.3/kernel/drivers/nvme/host:
total 100
-rw-r--r-- 1 root root 64028 2026-04-22 09:23:03.000000000 +0100 nvme-core.ko
-rw-r--r-- 1 root root 34784 2026-04-22 09:23:03.000000000 +0100 nvme.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 160
-rw-r--r-- 1 root root 118524 2026-04-22 09:23:03.000000000 +0100 scsi_mod.ko
-rw-r--r-- 1 root root  41076 2026-04-22 09:23:03.000000000 +0100 sd_mod.ko

/lib/modules/5.6.3/kernel/drivers/usb:
total 24
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 class
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 common
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 core
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 host
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 serial
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 storage

/lib/modules/5.6.3/kernel/drivers/usb/class:
total 28
-rw-r--r-- 1 root root 27940 2026-04-22 09:23:03.000000000 +0100 cdc-acm.ko

/lib/modules/5.6.3/kernel/drivers/usb/common:
total 8
-rw-r--r-- 1 root root 6280 2026-04-22 09:23:03.000000000 +0100 usb-common.ko

/lib/modules/5.6.3/kernel/drivers/usb/core:
total 184
-rw-r--r-- 1 root root 184488 2026-04-22 09:23:03.000000000 +0100 usbcore.ko

/lib/modules/5.6.3/kernel/drivers/usb/host:
total 132
-rw-r--r-- 1 root root 118832 2026-04-22 09:23:04.000000000 +0100 xhci-hcd.ko
-rw-r--r-- 1 root root   9536 2026-04-22 09:23:04.000000000 +0100 xhci-mtk.ko

/lib/modules/5.6.3/kernel/drivers/usb/serial:
total 316
-rw-r--r-- 1 root root   8664 2026-04-22 09:23:04.000000000 +0100 ch341.ko
-rw-r--r-- 1 root root  24292 2026-04-22 09:23:04.000000000 +0100 cp210x.ko
-rw-r--r-- 1 root root  77940 2026-04-22 09:23:04.000000000 +0100 ftdi_sio.ko
-rw-r--r-- 1 root root   5412 2026-04-22 09:23:04.000000000 +0100 ipw.ko
-rw-r--r-- 1 root root 101244 2026-04-22 09:23:04.000000000 +0100 option.ko
-rw-r--r-- 1 root root  15748 2026-04-22 09:23:04.000000000 +0100 pl2303.ko
-rw-r--r-- 1 root root  14232 2026-04-22 09:23:04.000000000 +0100 qcserial.ko
-rw-r--r-- 1 root root  14044 2026-04-22 09:23:04.000000000 +0100 sierra.ko
-rw-r--r-- 1 root root   8516 2026-04-22 09:23:04.000000000 +0100 usb_wwan.ko
-rw-r--r-- 1 root root  29724 2026-04-22 09:23:04.000000000 +0100 usbserial.ko

/lib/modules/5.6.3/kernel/drivers/usb/storage:
total 76
-rw-r--r-- 1 root root 74624 2026-04-22 09:23:04.000000000 +0100 usb-storage.ko

/lib/modules/5.6.3/kernel/fs:
total 44
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 cifs
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 exfat
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 ext4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 fat
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 fuse
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 jbd2
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 ksmbd
-rw-r--r-- 1 root root 7280 2026-04-22 09:23:04.000000000 +0100 mbcache.ko
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 nls
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 ntfs3

/lib/modules/5.6.3/kernel/fs/cifs:
total 492
-rw-r--r-- 1 root root 501560 2026-04-22 09:23:04.000000000 +0100 cifs.ko

/lib/modules/5.6.3/kernel/fs/exfat:
total 80
-rw-r--r-- 1 root root 78496 2026-04-22 09:23:04.000000000 +0100 exfat.ko

/lib/modules/5.6.3/kernel/fs/ext4:
total 456
-rw-r--r-- 1 root root 463556 2026-04-22 09:23:04.000000000 +0100 ext4.ko

/lib/modules/5.6.3/kernel/fs/fat:
total 88
-rw-r--r-- 1 root root 72124 2026-04-22 09:23:04.000000000 +0100 fat.ko
-rw-r--r-- 1 root root 12828 2026-04-22 09:23:04.000000000 +0100 vfat.ko

/lib/modules/5.6.3/kernel/fs/fuse:
total 108
-rw-r--r-- 1 root root 107940 2026-04-22 09:23:04.000000000 +0100 fuse.ko

/lib/modules/5.6.3/kernel/fs/jbd2:
total 76
-rw-r--r-- 1 root root 76080 2026-04-22 09:23:04.000000000 +0100 jbd2.ko

/lib/modules/5.6.3/kernel/fs/ksmbd:
total 248
-rw-r--r-- 1 root root 252080 2026-04-22 09:23:04.000000000 +0100 ksmbd.ko

/lib/modules/5.6.3/kernel/fs/nls:
total 28
-rw-r--r-- 1 root root 7760 2026-04-22 09:23:04.000000000 +0100 nls_base.ko
-rw-r--r-- 1 root root 6604 2026-04-22 09:23:04.000000000 +0100 nls_cp437.ko
-rw-r--r-- 1 root root 5020 2026-04-22 09:23:04.000000000 +0100 nls_iso8859-1.ko
-rw-r--r-- 1 root root 2740 2026-04-22 09:23:04.000000000 +0100 nls_utf8.ko

/lib/modules/5.6.3/kernel/fs/ntfs3:
total 212
-rw-r--r-- 1 root root 214996 2026-04-22 09:23:04.000000000 +0100 ntfs3.ko

/lib/modules/5.6.3/kernel/lib:
total 44
-rw-r--r-- 1 root root 4176 2026-04-22 09:23:04.000000000 +0100 asn1_decoder.ko
-rw-r--r-- 1 root root 3428 2026-04-22 09:23:04.000000000 +0100 crc-ccitt.ko
-rw-r--r-- 1 root root 2672 2026-04-22 09:23:04.000000000 +0100 crc16.ko
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 crypto
-rw-r--r-- 1 root root 4280 2026-04-22 09:23:04.000000000 +0100 oid_registry.ko
-rw-r--r-- 1 root root 3524 2026-04-22 09:23:04.000000000 +0100 ts_bm.ko
-rw-r--r-- 1 root root 3356 2026-04-22 09:23:04.000000000 +0100 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 64
-rw-r--r-- 1 root root  2336 2026-04-22 09:23:04.000000000 +0100 libarc4.ko
-rw-r--r-- 1 root root  7468 2026-04-22 09:23:04.000000000 +0100 libblake2s-generic.ko
-rw-r--r-- 1 root root  3644 2026-04-22 09:23:04.000000000 +0100 libblake2s.ko
-rw-r--r-- 1 root root  6912 2026-04-22 09:23:04.000000000 +0100 libchacha20poly1305.ko
-rw-r--r-- 1 root root 11612 2026-04-22 09:23:04.000000000 +0100 libcurve25519-generic.ko
-rw-r--r-- 1 root root  2024 2026-04-22 09:23:04.000000000 +0100 libcurve25519.ko
-rw-r--r-- 1 root root 20540 2026-04-22 09:23:04.000000000 +0100 libdes.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18400 2026-04-22 09:23:04.000000000 +0100 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14972 2026-04-22 09:23:04.000000000 +0100 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 40
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 802
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 8021q
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 ipv4
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 ipv6
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 mpls
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 rfkill
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 sched
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 xfrm

/lib/modules/5.6.3/kernel/net/802:
total 12
-rw-r--r-- 1 root root 10304 2026-04-22 09:23:04.000000000 +0100 mrp.ko

/lib/modules/5.6.3/kernel/net/8021q:
total 28
-rw-r--r-- 1 root root 26284 2026-04-22 09:23:04.000000000 +0100 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 88
-rw-r--r-- 1 root root  2672 2026-04-22 09:23:04.000000000 +0100 ebt_802_3.ko
-rw-r--r-- 1 root root  3604 2026-04-22 09:23:04.000000000 +0100 ebt_arp.ko
-rw-r--r-- 1 root root  3168 2026-04-22 09:23:04.000000000 +0100 ebt_arpreply.ko
-rw-r--r-- 1 root root  3228 2026-04-22 09:23:04.000000000 +0100 ebt_dnat.ko
-rw-r--r-- 1 root root  3612 2026-04-22 09:23:04.000000000 +0100 ebt_ip.ko
-rw-r--r-- 1 root root  3844 2026-04-22 09:23:04.000000000 +0100 ebt_ip6.ko
-rw-r--r-- 1 root root  4808 2026-04-22 09:23:04.000000000 +0100 ebt_limit.ko
-rw-r--r-- 1 root root  2612 2026-04-22 09:23:04.000000000 +0100 ebt_mark.ko
-rw-r--r-- 1 root root  2544 2026-04-22 09:23:04.000000000 +0100 ebt_mark_m.ko
-rw-r--r-- 1 root root  2512 2026-04-22 09:23:04.000000000 +0100 ebt_pkttype.ko
-rw-r--r-- 1 root root  3068 2026-04-22 09:23:04.000000000 +0100 ebt_redirect.ko
-rw-r--r-- 1 root root  3056 2026-04-22 09:23:04.000000000 +0100 ebt_snat.ko
-rw-r--r-- 1 root root  3932 2026-04-22 09:23:04.000000000 +0100 ebt_stp.ko
-rw-r--r-- 1 root root  3020 2026-04-22 09:23:05.000000000 +0100 ebt_vlan.ko
-rw-r--r-- 1 root root  3140 2026-04-22 09:23:05.000000000 +0100 ebtable_filter.ko
-rw-r--r-- 1 root root  3140 2026-04-22 09:23:05.000000000 +0100 ebtable_nat.ko
-rw-r--r-- 1 root root 17244 2026-04-22 09:23:05.000000000 +0100 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 17220 2026-04-22 09:23:05.000000000 +0100 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 netfilter
-rw-r--r-- 1 root root 14828 2026-04-22 09:23:05.000000000 +0100 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 76
-rw-r--r-- 1 root root 16404 2026-04-22 09:23:05.000000000 +0100 ip_tables.ko
-rw-r--r-- 1 root root  3736 2026-04-22 09:23:05.000000000 +0100 ipt_REJECT.ko
-rw-r--r-- 1 root root  3788 2026-04-22 09:23:05.000000000 +0100 iptable_filter.ko
-rw-r--r-- 1 root root  3884 2026-04-22 09:23:05.000000000 +0100 iptable_mangle.ko
-rw-r--r-- 1 root root  3552 2026-04-22 09:23:05.000000000 +0100 iptable_nat.ko
-rw-r--r-- 1 root root  4120 2026-04-22 09:23:05.000000000 +0100 iptable_raw.ko
-rw-r--r-- 1 root root  3468 2026-04-22 09:23:05.000000000 +0100 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root  9412 2026-04-22 09:23:05.000000000 +0100 nf_nat_h323.ko
-rw-r--r-- 1 root root  5020 2026-04-22 09:23:05.000000000 +0100 nf_nat_pptp.ko
-rw-r--r-- 1 root root  4396 2026-04-22 09:23:05.000000000 +0100 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 32
-rw-r--r-- 1 root root  9008 2026-04-22 09:23:05.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root 11872 2026-04-22 09:23:05.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root  3760 2026-04-22 09:23:05.000000000 +0100 ip6_udp_tunnel.ko
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 68
-rw-r--r-- 1 root root 16700 2026-04-22 09:23:05.000000000 +0100 ip6_tables.ko
-rw-r--r-- 1 root root  3984 2026-04-22 09:23:05.000000000 +0100 ip6t_NPT.ko
-rw-r--r-- 1 root root  3776 2026-04-22 09:23:05.000000000 +0100 ip6t_REJECT.ko
-rw-r--r-- 1 root root  2916 2026-04-22 09:23:05.000000000 +0100 ip6t_eui64.ko
-rw-r--r-- 1 root root  3180 2026-04-22 09:23:05.000000000 +0100 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  3792 2026-04-22 09:23:05.000000000 +0100 ip6table_filter.ko
-rw-r--r-- 1 root root  4120 2026-04-22 09:23:05.000000000 +0100 ip6table_mangle.ko
-rw-r--r-- 1 root root  3556 2026-04-22 09:23:05.000000000 +0100 ip6table_nat.ko
-rw-r--r-- 1 root root  4124 2026-04-22 09:23:05.000000000 +0100 ip6table_raw.ko
-rw-r--r-- 1 root root  5200 2026-04-22 09:23:05.000000000 +0100 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 56
-rw-r--r-- 1 root root  5256 2026-04-22 09:23:05.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root 45152 2026-04-22 09:23:05.000000000 +0100 mpls_router.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 412
-rw-r--r-- 1 root root 10028 2026-04-22 09:23:05.000000000 +0100 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root 40396 2026-04-22 09:23:06.000000000 +0100 nf_conntrack_h323.ko
-rw-r--r-- 1 root root  8164 2026-04-22 09:23:06.000000000 +0100 nf_conntrack_irc.ko
-rw-r--r-- 1 root root 30212 2026-04-22 09:23:06.000000000 +0100 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root  7648 2026-04-22 09:23:06.000000000 +0100 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root  8160 2026-04-22 09:23:06.000000000 +0100 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root 26864 2026-04-22 09:23:06.000000000 +0100 nf_conntrack_sip.ko
-rw-r--r-- 1 root root  6860 2026-04-22 09:23:06.000000000 +0100 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root 29304 2026-04-22 09:23:06.000000000 +0100 nf_nat.ko
-rw-r--r-- 1 root root  4492 2026-04-22 09:23:06.000000000 +0100 nf_nat_ftp.ko
-rw-r--r-- 1 root root  4168 2026-04-22 09:23:06.000000000 +0100 nf_nat_irc.ko
-rw-r--r-- 1 root root  7576 2026-04-22 09:23:06.000000000 +0100 nf_nat_rtsp.ko
-rw-r--r-- 1 root root 11960 2026-04-22 09:23:06.000000000 +0100 nf_nat_sip.ko
-rw-r--r-- 1 root root  3060 2026-04-22 09:23:06.000000000 +0100 nf_nat_tftp.ko
-rw-r--r-- 1 root root  8716 2026-04-22 09:23:06.000000000 +0100 nfnetlink.ko
-rw-r--r-- 1 root root 25300 2026-04-22 09:23:06.000000000 +0100 x_tables.ko
-rw-r--r-- 1 root root  6700 2026-04-22 09:23:06.000000000 +0100 xt_CT.ko
-rw-r--r-- 1 root root  3980 2026-04-22 09:23:06.000000000 +0100 xt_DSCP.ko
-rw-r--r-- 1 root root  3468 2026-04-22 09:23:06.000000000 +0100 xt_HL.ko
-rw-r--r-- 1 root root  3412 2026-04-22 09:23:06.000000000 +0100 xt_MASQUERADE.ko
-rw-r--r-- 1 root root  3800 2026-04-22 09:23:06.000000000 +0100 xt_NETMAP.ko
-rw-r--r-- 1 root root  3132 2026-04-22 09:23:06.000000000 +0100 xt_REDIRECT.ko
-rw-r--r-- 1 root root  6208 2026-04-22 09:23:06.000000000 +0100 xt_TCPMSS.ko
-rw-r--r-- 1 root root  5172 2026-04-22 09:23:06.000000000 +0100 xt_addrtype.ko
-rw-r--r-- 1 root root  4276 2026-04-22 09:23:06.000000000 +0100 xt_connbytes.ko
-rw-r--r-- 1 root root  4512 2026-04-22 09:23:06.000000000 +0100 xt_connmark.ko
-rw-r--r-- 1 root root  5012 2026-04-22 09:23:06.000000000 +0100 xt_conntrack.ko
-rw-r--r-- 1 root root  3052 2026-04-22 09:23:06.000000000 +0100 xt_dscp.ko
-rw-r--r-- 1 root root 16820 2026-04-22 09:23:06.000000000 +0100 xt_hashlimit.ko
-rw-r--r-- 1 root root  3436 2026-04-22 09:23:06.000000000 +0100 xt_helper.ko
-rw-r--r-- 1 root root  2844 2026-04-22 09:23:06.000000000 +0100 xt_hl.ko
-rw-r--r-- 1 root root  2780 2026-04-22 09:23:06.000000000 +0100 xt_length.ko
-rw-r--r-- 1 root root  2664 2026-04-22 09:23:06.000000000 +0100 xt_mac.ko
-rw-r--r-- 1 root root  3124 2026-04-22 09:23:06.000000000 +0100 xt_mark.ko
-rw-r--r-- 1 root root  3448 2026-04-22 09:23:06.000000000 +0100 xt_multiport.ko
-rw-r--r-- 1 root root  5096 2026-04-22 09:23:06.000000000 +0100 xt_nat.ko
-rw-r--r-- 1 root root  3980 2026-04-22 09:23:07.000000000 +0100 xt_physdev.ko
-rw-r--r-- 1 root root  4488 2026-04-22 09:23:07.000000000 +0100 xt_policy.ko
-rw-r--r-- 1 root root  2536 2026-04-22 09:23:07.000000000 +0100 xt_realm.ko
-rw-r--r-- 1 root root  3080 2026-04-22 09:23:07.000000000 +0100 xt_statistic.ko
-rw-r--r-- 1 root root  2952 2026-04-22 09:23:07.000000000 +0100 xt_string.ko
-rw-r--r-- 1 root root  3144 2026-04-22 09:23:07.000000000 +0100 xt_tcpmss.ko
-rw-r--r-- 1 root root  4032 2026-04-22 09:23:07.000000000 +0100 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/rfkill:
total 16
-rw-r--r-- 1 root root 15268 2026-04-22 09:23:07.000000000 +0100 rfkill.ko

/lib/modules/5.6.3/kernel/net/sched:
total 88
-rw-r--r-- 1 root root 28564 2026-04-22 09:23:07.000000000 +0100 sch_cake.ko
-rw-r--r-- 1 root root  7508 2026-04-22 09:23:07.000000000 +0100 sch_codel.ko
-rw-r--r-- 1 root root 10116 2026-04-22 09:23:07.000000000 +0100 sch_fq_codel.ko
-rw-r--r-- 1 root root 25096 2026-04-22 09:23:07.000000000 +0100 sch_htb.ko
-rw-r--r-- 1 root root  9324 2026-04-22 09:23:07.000000000 +0100 sch_red.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 7076 2026-04-22 09:23:07.000000000 +0100 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 240
-rw-r--r-- 1 root root 11564 2026-04-22 09:22:50.000000000 +0100 appmark.ko
-rw-r--r-- 1 root root 10532 2026-04-22 09:20:36.000000000 +0100 btest.ko
-rw-r--r-- 1 root root  2012 2026-04-22 09:22:41.000000000 +0100 c2glue.ko
-rw-r--r-- 1 root root  6580 2026-04-22 09:21:56.000000000 +0100 dot1x.ko
-rw-r--r-- 1 root root 48784 2026-04-22 09:21:05.000000000 +0100 flash.ko
-rw-r--r-- 1 root root  5480 2026-04-22 09:20:49.000000000 +0100 jiffies.ko
-rw-r--r-- 1 root root  3064 2026-04-22 09:20:27.000000000 +0100 ledgroup.ko
-rw-r--r-- 1 root root 11392 2026-04-22 09:20:32.000000000 +0100 logring.ko
-rw-r--r-- 1 root root 22980 2026-04-22 09:21:13.000000000 +0100 mesh.ko
-rw-r--r-- 1 root root  8796 2026-04-22 09:20:30.000000000 +0100 panics.ko
-rw-r--r-- 1 root root 15224 2026-04-22 09:20:40.000000000 +0100 poe_simple.ko
-rw-r--r-- 1 root root  6952 2026-04-22 09:20:39.000000000 +0100 rb.ko
-rw-r--r-- 1 root root  6004 2026-04-22 09:20:55.000000000 +0100 romon.ko
-rw-r--r-- 1 root root  5404 2026-04-22 09:21:11.000000000 +0100 snif.ko
-rw-r--r-- 1 root root 27220 2026-04-22 09:20:48.000000000 +0100 traffic_gen.ko
-rw-r--r-- 1 root root 19724 2026-04-22 09:20:36.000000000 +0100 ts.ko
-rw-r--r-- 1 root root  6768 2026-04-22 09:21:10.000000000 +0100 ulog.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 sched

/lib/modules/5.6.3/net/bridge:
total 248
-rw-r--r-- 1 root root 225200 2026-04-22 09:23:07.000000000 +0100 bridge2.ko
-rw-r--r-- 1 root root  18228 2026-04-22 09:23:06.000000000 +0100 bridge2_netfilter.ko
-rw-r--r-- 1 root root   2496 2026-04-22 09:21:09.000000000 +0100 ebt_snif.ko
-rw-r--r-- 1 root root   2728 2026-04-22 09:21:08.000000000 +0100 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 28
-rw-r--r-- 1 root root 3420 2026-04-22 09:20:37.000000000 +0100 ipt_SAME.ko
-rw-r--r-- 1 root root 6252 2026-04-22 09:20:37.000000000 +0100 ipt_TARPIT.ko
-rw-r--r-- 1 root root 4364 2026-04-22 09:20:37.000000000 +0100 ipt_psd.ko
-rw-r--r-- 1 root root 2596 2026-04-22 09:21:09.000000000 +0100 ipt_snif.ko
-rw-r--r-- 1 root root 3072 2026-04-22 09:21:08.000000000 +0100 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 60
-rw-r--r-- 1 root root  2060 2026-04-22 09:21:30.000000000 +0100 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  2060 2026-04-22 09:21:30.000000000 +0100 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 10796 2026-04-22 09:21:35.000000000 +0100 xt_ein.ko
-rw-r--r-- 1 root root 12392 2026-04-22 09:20:41.000000000 +0100 xt_layer7.ko
-rw-r--r-- 1 root root 16780 2026-04-22 09:21:35.000000000 +0100 xt_misc.ko
-rw-r--r-- 1 root root  4088 2026-04-22 09:20:38.000000000 +0100 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 80
-rw-r--r-- 1 root root  5244 2026-04-22 09:20:57.000000000 +0100 cls_fw.ko
-rw-r--r-- 1 root root 11788 2026-04-22 09:20:57.000000000 +0100 cls_linear.ko
-rw-r--r-- 1 root root 12836 2026-04-22 09:21:03.000000000 +0100 proto_agr.ko
-rw-r--r-- 1 root root 18652 2026-04-22 09:21:03.000000000 +0100 sch_agr.ko
-rw-r--r-- 1 root root 10712 2026-04-22 09:20:39.000000000 +0100 sch_pcq.ko
-rw-r--r-- 1 root root  8240 2026-04-22 09:20:53.000000000 +0100 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bin
drwxr-xr-x 12 root root 4096 2026-04-22 09:29:10.000000000 +0100 etc
drwxr-xr-x  5 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib
lrwxrwxrwx  1 root root    8 2026-04-22 09:29:11.000000000 +0100 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2026-04-22 09:29:11.000000000 +0100 store -> /rw/store

/nova/bin:
total 11720
-rwxr-xr-x 1 root root   24360 2026-04-22 09:05:48.000000000 +0100 agent
-rwxr-xr-x 1 root root   13192 2026-04-22 09:05:47.000000000 +0100 arpd
-rwxr-xr-x 1 root root   18208 2026-04-22 09:06:20.000000000 +0100 backup
-rwxr-xr-x 1 root root  299612 2026-04-22 09:07:25.000000000 +0100 bridge2
-rwxr-xr-x 1 root root   82552 2026-04-22 09:06:34.000000000 +0100 btest
-rwxr-xr-x 1 root root   59784 2026-04-22 09:06:02.000000000 +0100 bth
-rwxr-xr-x 1 root root 1106728 2026-04-22 09:07:27.000000000 +0100 cerm
lrwxrwxrwx 1 root root       4 2026-04-22 09:07:27.000000000 +0100 cerm-worker -> cerm
-rwxr-xr-x 1 root root  176840 2026-04-22 09:06:57.000000000 +0100 cloud
-rwxr-xr-x 1 root root  100304 2026-04-22 09:06:17.000000000 +0100 crossfig
-rwxr-xr-x 1 root root   67928 2026-04-22 09:06:37.000000000 +0100 detnet
-rwxr-xr-x 1 root root   85284 2026-04-22 09:06:01.000000000 +0100 discover
-rwxr-xr-x 1 root root  355324 2026-04-22 09:07:00.000000000 +0100 diskd
-rwxr-xr-x 1 root root  121184 2026-04-22 09:07:30.000000000 +0100 dot1x
-rwxr-xr-x 1 root root   40748 2026-04-22 09:06:22.000000000 +0100 email
-rwxr-xr-x 1 root root  154252 2026-04-22 09:07:01.000000000 +0100 fileman
-rwxr-xr-x 1 root root   35156 2026-04-22 09:05:48.000000000 +0100 ftpd
-rwxr-xr-x 1 root root  157520 2026-04-22 09:06:08.000000000 +0100 graphing
-rwxr-xr-x 1 root root   65152 2026-04-22 09:06:17.000000000 +0100 igmpproxy
-rwxr-xr-x 1 root root   83984 2026-04-22 09:06:36.000000000 +0100 installer
-rwxr-xr-x 1 root root   30544 2026-04-22 09:06:44.000000000 +0100 ippool
-rwxr-xr-x 1 root root   55292 2026-04-22 09:06:27.000000000 +0100 keyman
-rwxr-xr-x 1 root root   48288 2026-04-22 09:05:59.000000000 +0100 kidcontrol
-rwxr-xr-x 1 root root  248212 2026-04-22 09:06:10.000000000 +0100 lcdstat
-rwxr-xr-x 1 root root   86360 2026-04-22 09:06:42.000000000 +0100 led
-rwxr-xr-x 1 root root  129196 2026-04-22 09:06:58.000000000 +0100 letsencrypt
-rwxr-xr-x 1 root root   85468 2026-04-22 09:06:32.000000000 +0100 loader
-rwxr-xr-x 1 root root   90368 2026-04-22 09:05:51.000000000 +0100 log
-rwxr-xr-x 1 root root  175392 2026-04-22 09:07:41.000000000 +0100 login
-rwxr-xr-x 1 root root   55084 2026-04-22 09:05:50.000000000 +0100 logmaker
-rwxr-xr-x 1 root root   23004 2026-04-22 09:05:47.000000000 +0100 macping
-rwxr-xr-x 1 root root   38920 2026-04-22 09:06:24.000000000 +0100 mactel
-rwxr-xr-x 1 root root   23640 2026-04-22 09:05:47.000000000 +0100 mepty
-rwxr-xr-x 1 root root   86284 2026-04-22 09:06:05.000000000 +0100 mesh
-rwxr-xr-x 1 root root   71896 2026-04-22 09:07:42.000000000 +0100 mode
lrwxrwxrwx 1 root root       7 2026-04-22 09:06:55.000000000 +0100 modprobed -> moduler
-rwxr-xr-x 1 root root  150380 2026-04-22 09:06:55.000000000 +0100 moduler
-rwxr-xr-x 1 root root   80696 2026-04-22 09:07:04.000000000 +0100 mproxy
-rwxr-xr-x 1 root root   62004 2026-04-22 09:06:21.000000000 +0100 mtget
-rwxr-xr-x 1 root root   49600 2026-04-22 09:05:58.000000000 +0100 natpmp
-rwxr-xr-x 1 root root 1745124 2026-04-22 09:08:26.000000000 +0100 net
-rwxr-xr-x 1 root root   72016 2026-04-22 09:06:32.000000000 +0100 ntp
-rwxr-xr-x 1 root root    6184 2026-04-22 09:05:46.000000000 +0100 panicsl
-rwxr-xr-x 1 root root  866344 2026-04-22 09:08:17.000000000 +0100 parser
-rwxr-xr-x 1 root root   47204 2026-04-22 09:05:49.000000000 +0100 ping
-rwxr-xr-x 1 root root   49096 2026-04-22 09:05:56.000000000 +0100 portman
-rwxr-xr-x 1 root root   34776 2026-04-22 09:23:21.000000000 +0100 profiler
-rwxr-xr-x 1 root root   92984 2026-04-22 09:06:40.000000000 +0100 ptp
-rwxr-xr-x 1 root root  154012 2026-04-22 09:05:52.000000000 +0100 quickset
-rwxr-xr-x 1 root root   58036 2026-04-22 09:06:36.000000000 +0100 radius
-rwxr-xr-x 1 root root  170680 2026-04-22 09:07:19.000000000 +0100 resolver
-rwxr-xr-x 1 root root   10024 2026-04-22 09:07:10.000000000 +0100 resolver_ctl
-rwxr-xr-x 1 root root   96716 2026-04-22 09:06:46.000000000 +0100 romon
-rwxr-xr-x 1 root root 1865324 2026-04-22 09:08:50.000000000 +0100 route
-rwxr-xr-x 1 root root   32508 2026-04-22 09:06:00.000000000 +0100 rproxy
-rwxr-xr-x 1 root root   16792 2026-04-22 09:06:33.000000000 +0100 rtrace
-rwxr-xr-x 1 root root   45092 2026-04-22 09:06:42.000000000 +0100 sermgr
-rwxr-xr-x 1 root root   35744 2026-04-22 09:05:58.000000000 +0100 sertcp
-rwxr-xr-x 1 root root   73308 2026-04-22 09:06:02.000000000 +0100 sniffer
-rwxr-xr-x 1 root root  212712 2026-04-22 09:07:22.000000000 +0100 snmp
-rwxr-xr-x 1 root root   67628 2026-04-22 09:06:04.000000000 +0100 socks
-rwxr-xr-x 1 root root   37528 2026-04-22 09:06:00.000000000 +0100 socksify
-rwxr-xr-x 1 root root  125712 2026-04-22 09:06:51.000000000 +0100 ssld
-rwxr-xr-x 1 root root   38816 2026-04-22 09:06:26.000000000 +0100 sstore
-rwxr-xr-x 1 root root  311840 2026-04-22 09:07:45.000000000 +0100 sys2
-rwxr-xr-x 1 root root   20968 2026-04-22 09:05:48.000000000 +0100 telnet
-rwxr-xr-x 1 root root   30832 2026-04-22 09:05:50.000000000 +0100 telser
-rwxr-xr-x 1 root root   38996 2026-04-22 09:05:59.000000000 +0100 tftpd
-rwxr-xr-x 1 root root   34636 2026-04-22 09:05:48.000000000 +0100 traceroute
-rwxr-xr-x 1 root root  112880 2026-04-22 09:06:01.000000000 +0100 trafficgen
-rwxr-xr-x 1 root root   23544 2026-04-22 09:05:54.000000000 +0100 trafflow
-rwxr-xr-x 1 root root   26664 2026-04-22 09:05:47.000000000 +0100 undo
-rwxr-xr-x 1 root root  150716 2026-04-22 09:06:05.000000000 +0100 upnp
-rwxr-xr-x 1 root root   85632 2026-04-22 09:06:44.000000000 +0100 user
-rwxr-xr-x 1 root root  100620 2026-04-22 09:06:42.000000000 +0100 vrrp
-rwxr-xr-x 1 root root   30816 2026-04-22 09:05:54.000000000 +0100 watchdog
-rwxr-xr-x 1 root root  154528 2026-04-22 09:06:58.000000000 +0100 wproxy
-rwxr-xr-x 1 root root  138532 2026-04-22 09:07:05.000000000 +0100 www

/nova/etc:
total 56
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 ca
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 leds
-rwxr-xr-x 1 root root 1286 2026-04-22 09:03:53.000000000 +0100 lognames
-rwxr-xr-x 1 root root   10 2026-01-08 09:06:11.000000000 +0000 logo
-rwxr-xr-x 1 root root    1 2026-01-08 09:06:11.000000000 +0000 manual-url
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 pciinfo
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 services
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 system_names
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 upnp
-rwxr-xr-x 1 root root   26 2026-01-08 09:06:11.000000000 +0000 url
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 user
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 www

/nova/etc/ca:
total 104
-rwxr-xr-x 1 root root  837 2026-01-08 09:06:11.000000000 +0000 AmazonRootCA1.der
-rwxr-xr-x 1 root root  955 2026-01-08 09:06:11.000000000 +0000 DigiCert_Assured_ID_Root_CA.der
-rwxr-xr-x 1 root root  922 2026-01-08 09:06:11.000000000 +0000 DigiCert_Assured_ID_Root_G2.der
-rwxr-xr-x 1 root root  586 2026-01-08 09:06:11.000000000 +0000 DigiCert_Assured_ID_Root_G3.der
-rwxr-xr-x 1 root root  947 2026-01-08 09:06:11.000000000 +0000 DigiCert_Global_Root_CA.der
-rwxr-xr-x 1 root root  914 2026-01-08 09:06:11.000000000 +0000 DigiCert_Global_Root_G2.der
-rwxr-xr-x 1 root root  579 2026-01-08 09:06:11.000000000 +0000 DigiCert_Global_Root_G3.der
-rwxr-xr-x 1 root root  969 2026-01-08 09:06:11.000000000 +0000 DigiCert_High_Assurance_EV_Root_CA.der
-rwxr-xr-x 1 root root  541 2026-01-08 09:06:11.000000000 +0000 DigiCert_TLS_ECC_P384_Root_G5.der
-rwxr-xr-x 1 root root 1386 2026-01-08 09:06:11.000000000 +0000 DigiCert_TLS_RSA4096_Root_G5.der
-rwxr-xr-x 1 root root 1428 2026-01-08 09:06:11.000000000 +0000 DigiCert_Trusted_Root_G4.der
-rwxr-xr-x 1 root root  546 2026-01-08 09:06:11.000000000 +0000 GlobalSign_ECC_Root_CA_-_R5.der
-rwxr-xr-x 1 root root  889 2026-01-08 09:06:11.000000000 +0000 GlobalSign_Root_CA.der
-rwxr-xr-x 1 root root  867 2026-01-08 09:06:11.000000000 +0000 GlobalSign_Root_CA_-_R3.der
-rwxr-xr-x 1 root root 1415 2026-01-08 09:06:11.000000000 +0000 GlobalSign_Root_CA_-_R6.der
-rwxr-xr-x 1 root root  527 2026-01-08 09:06:11.000000000 +0000 GlobalSign_Root_E46.der
-rwxr-xr-x 1 root root 1374 2026-01-08 09:06:11.000000000 +0000 GlobalSign_Root_R46.der
-rwxr-xr-x 1 root root 1028 2026-01-08 09:06:11.000000000 +0000 Go_Daddy_Class_2_CA.der
-rwxr-xr-x 1 root root  969 2026-01-08 09:06:11.000000000 +0000 Go_Daddy_Root_Certificate_Authority_-_G2.der
-rwxr-xr-x 1 root root 1391 2026-01-08 09:06:11.000000000 +0000 ISRG_Root_X1.der
-rwxr-xr-x 1 root root  543 2026-01-08 09:06:11.000000000 +0000 ISRG_Root_X2.der
-rwxr-xr-x 1 root root  574 2026-01-08 09:06:11.000000000 +0000 Sectigo_Public_Server_Authentication_Root_E46.der
-rwxr-xr-x 1 root root 1422 2026-01-08 09:06:11.000000000 +0000 Sectigo_Public_Server_Authentication_Root_R46.der
-rwxr-xr-x 1 root root  659 2026-01-08 09:06:11.000000000 +0000 USERTrustECCCertificationAuthority.der
-rwxr-xr-x 1 root root 1506 2026-01-08 09:06:11.000000000 +0000 USERTrustRSACertificationAuthority.der
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 gsma

/nova/etc/ca/gsma:
total 8
-rwxr-xr-x 1 root root 589 2026-01-08 09:06:11.000000000 +0000 gsma_digicert.der
-rwxr-xr-x 1 root root 507 2026-01-08 09:06:11.000000000 +0000 gsma_sealsq.der

/nova/etc/leds:
total 116
-rwxr-xr-x 1 root root 118780 2026-04-22 09:05:30.000000000 +0100 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2026-04-22 09:05:30.000000000 +0100 system.x3

/nova/etc/pciinfo:
total 124
-rwxr-xr-x 1 root root 124950 2026-04-22 09:05:30.000000000 +0100 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 101 2026-04-22 09:05:30.000000000 +0100 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 1148 2026-04-22 09:05:30.000000000 +0100 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2026-04-22 09:05:30.000000000 +0100 system.x3

/nova/etc/upnp:
total 64
-rwxr-xr-x 1 root root  3378 2026-01-08 09:06:12.000000000 +0000 connectionmanager.xml
-rwxr-xr-x 1 root root  5684 2026-01-08 09:06:12.000000000 +0000 contentdirectory.xml
-rwxr-xr-x 1 root root  8764 2026-01-08 09:06:12.000000000 +0000 logo120.png
-rwxr-xr-x 1 root root   930 2026-01-08 09:06:12.000000000 +0000 logo16.gif
-rwxr-xr-x 1 root root  1173 2026-01-08 09:06:12.000000000 +0000 logo32.gif
-rwxr-xr-x 1 root root  1504 2026-01-08 09:06:12.000000000 +0000 logo48.gif
-rwxr-xr-x 1 root root   735 2026-01-08 09:06:12.000000000 +0000 osinfo.xml
-rwxr-xr-x 1 root root  5928 2026-01-08 09:06:12.000000000 +0000 wancommonifcfg.xml
-rwxr-xr-x 1 root root 13444 2026-01-08 09:06:12.000000000 +0000 wanipconn.xml

/nova/etc/user:
total 4
-rwxr-xr-x 1 root root 2230 2026-04-22 09:05:30.000000000 +0100 system.x3

/nova/etc/www:
total 4
-rwxr-xr-x 1 root root 2509 2026-04-22 09:05:30.000000000 +0100 system.x3

/nova/lib:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 defconf
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 profiler

/nova/lib/console:
total 2280
-rwxr-xr-x 1 root root 2325944 2026-04-22 09:08:28.000000000 +0100 1073741824.mem
-rwxr-xr-x 1 root root     510 2026-01-08 09:06:11.000000000 +0000 logo.txt
-rwxr-xr-x 1 root root      18 2026-01-08 09:06:11.000000000 +0000 sublogo.txt

/nova/lib/defconf:
total 108
-rwxr-xr-x 1 root root   567 2026-01-08 09:06:11.000000000 +0000 defconf
-rwxr-xr-x 1 root root  4995 2026-01-08 09:06:11.000000000 +0000 defconf-caps
-rwxr-xr-x 1 root root  3700 2026-01-08 09:06:11.000000000 +0000 defconf-wps-sync
-rwxr-xr-x 1 root root 91442 2026-04-21 08:56:38.000000000 +0100 get-custom-defconf

/nova/lib/profiler:
total 16
-rwxr-xr-x 1 root root 13888 2026-04-22 09:23:21.000000000 +0100 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 480
-rwxr-xr-x 1 root root 395976 2026-04-22 09:23:39.000000000 +0100 mke2fs
-rwxr-xr-x 1 root root  25532 2026-04-22 09:05:28.000000000 +0100 nandfix
-rwxr-xr-x 1 root root  65048 2026-04-22 09:06:26.000000000 +0100 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2026-04-22 09:29:11.000000000 +0100 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:11.000000000 +0100 deinstall
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:11.000000000 +0100 lock
lrwxrwxrwx 1 root root    8 2026-04-22 09:29:11.000000000 +0100 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2026-04-22 09:29:11.000000000 +0100 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:11.000000000 +0100 post
lrwxrwxrwx 1 root root    7 2026-04-22 09:29:11.000000000 +0100 run -> /rw/run
lrwxrwxrwx 1 root root    4 2026-04-22 09:29:11.000000000 +0100 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

