### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 9640352 bytes, 799 inodes, blocksize: 262144 bytes, created: Wed Apr 22 08:29:12 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bin
drwxr-xr-x 9 root root 4096 2026-04-22 09:29:10.000000000 +0100 bndl
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 boot
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 dev
lrwxrwxrwx 1 root root   11 2026-04-22 09:29:10.000000000 +0100 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 etc
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 flash
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:10.000000000 +0100 nova
lrwxrwxrwx 1 root root    9 2026-04-22 09:29:10.000000000 +0100 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 proc
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 ram
lrwxrwxrwx 1 root root    9 2026-04-22 09:29:10.000000000 +0100 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 sbin
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 sys
lrwxrwxrwx 1 root root    7 2026-04-22 09:29:10.000000000 +0100 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:10.000000000 +0100 var

/bin:
total 292
lrwxrwxrwx 1 root root     21 2026-04-22 09:29:10.000000000 +0100 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root  18592 2026-04-22 09:06:26.000000000 +0100 catlog
lrwxrwxrwx 1 root root     15 2026-04-22 09:29:10.000000000 +0100 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root     15 2026-04-22 09:29:10.000000000 +0100 login -> /nova/bin/login
-rwxr-xr-x 1 root root  28764 2026-04-22 09:23:43.000000000 +0100 mkexfatfs
-rwxr-xr-x 1 root root   7544 2026-04-22 09:06:27.000000000 +0100 pakp
lrwxrwxrwx 1 root root     21 2026-04-22 09:29:10.000000000 +0100 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root     15 2026-04-22 09:29:10.000000000 +0100 shell -> /nova/bin/login
-rwxr-xr-x 1 root root 233896 2026-04-22 09:24:05.000000000 +0100 sshfs

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
-rwxr-xr-x 1 root root 31552 2026-04-22 09:24:16.000000000 +0100 ddns
-rwxr-xr-x 1 root root 16140 2026-04-22 09:24:14.000000000 +0100 fping
-rwxr-xr-x 1 root root 18072 2026-04-22 09:24:19.000000000 +0100 macscan
-rwxr-xr-x 1 root root 68340 2026-04-22 09:25:17.000000000 +0100 netwatch
-rwxr-xr-x 1 root root 16636 2026-04-22 09:24:14.000000000 +0100 pspeed
-rwxr-xr-x 1 root root 34812 2026-04-22 09:24:31.000000000 +0100 scanner
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
-rwxr-xr-x 1 root root 26188 2026-04-22 09:24:15.000000000 +0100 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib

/bndl/dhcp/nova/bin:
total 336
-rwxr-xr-x 1 root root 343148 2026-04-22 09:25:26.000000000 +0100 dhcp
lrwxrwxrwx 1 root root      4 2026-04-22 09:25:26.000000000 +0100 dhcpclient -> dhcp

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 console

/bndl/dhcp/nova/lib/console:
total 120
-rwxr-xr-x 1 root root 121904 2026-04-22 09:24:19.000000000 +0100 1128267776.mem

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
-rw-r--r-- 1 root root    0 2026-04-22 09:25:42.000000000 +0100 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 net

/bndl/hotspot/lib/modules/5.6.3/net:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 ipv4

/bndl/hotspot/lib/modules/5.6.3/net/ipv4:
total 44
-rw-r--r-- 1 root root 43424 2026-04-22 09:25:11.000000000 +0100 unicl.ko

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib

/bndl/hotspot/nova/bin:
total 256
-rwxr-xr-x 1 root root 261136 2026-04-22 09:25:25.000000000 +0100 hotspot

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
-rwxr-xr-x 1 root root 35408 2026-04-22 09:24:20.000000000 +0100 ippool6
-rwxr-xr-x 1 root root 64748 2026-04-22 09:24:34.000000000 +0100 radvd

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
-rw-r--r-- 1 root root  278 2026-04-22 09:27:43.000000000 +0100 modules.dep.ppp
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
-rw-r--r-- 1 root root 11412 2026-04-22 09:23:00.000000000 +0100 ppp_async.ko
-rw-r--r-- 1 root root  6784 2026-04-22 09:23:00.000000000 +0100 ppp_deflate.ko
-rw-r--r-- 1 root root 33612 2026-04-22 09:23:00.000000000 +0100 ppp_generic.ko
-rw-r--r-- 1 root root  8732 2026-04-22 09:23:00.000000000 +0100 ppp_mppe.ko
-rw-r--r-- 1 root root  9524 2026-04-22 09:23:00.000000000 +0100 ppp_synctty.ko
-rw-r--r-- 1 root root 12784 2026-04-22 09:23:00.000000000 +0100 pppoe.ko
-rw-r--r-- 1 root root  4284 2026-04-22 09:23:00.000000000 +0100 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 92
-rw-r--r-- 1 root root 36560 2026-04-22 09:24:59.000000000 +0100 ovpn.ko
-rw-r--r-- 1 root root  6204 2026-04-22 09:25:03.000000000 +0100 pppoefp.ko
-rw-r--r-- 1 root root 48468 2026-04-22 09:24:53.000000000 +0100 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 64
-rw-r--r-- 1 root root 49216 2026-04-22 09:25:00.000000000 +0100 l2tp.ko
-rw-r--r-- 1 root root 10280 2026-04-22 09:24:36.000000000 +0100 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 etc
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib

/bndl/ppp/nova/bin:
total 640
-rwxr-xr-x 1 root root 651704 2026-04-22 09:27:33.000000000 +0100 ppp
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
-rw-r--r-- 1 root root  106 2026-04-22 09:28:28.000000000 +0100 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 crypto
drwxr-xr-x 5 root root 4096 2026-04-22 09:29:10.000000000 +0100 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 88
-rw-r--r-- 1 root root  8352 2026-04-22 09:22:59.000000000 +0100 blowfish_common.ko
-rw-r--r-- 1 root root  6020 2026-04-22 09:22:59.000000000 +0100 blowfish_generic.ko
-rw-r--r-- 1 root root 23348 2026-04-22 09:22:59.000000000 +0100 camellia_generic.ko
-rw-r--r-- 1 root root  8412 2026-04-22 09:22:59.000000000 +0100 chacha20poly1305.ko
-rw-r--r-- 1 root root  3800 2026-04-22 09:22:59.000000000 +0100 echainiv.ko
-rw-r--r-- 1 root root 15832 2026-04-22 09:22:59.000000000 +0100 twofish_common.ko
-rw-r--r-- 1 root root  9988 2026-04-22 09:22:59.000000000 +0100 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 key
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root  8904 2026-04-22 09:23:03.000000000 +0100 ah4.ko
-rw-r--r-- 1 root root 13068 2026-04-22 09:23:03.000000000 +0100 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 36
-rw-r--r-- 1 root root 33816 2026-04-22 09:23:03.000000000 +0100 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 28
-rw-r--r-- 1 root root 26880 2026-04-22 09:23:04.000000000 +0100 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib

/bndl/security/nova/bin:
total 792
-rwxr-xr-x 1 root root 569488 2026-04-22 09:28:04.000000000 +0100 ipsec
lrwxrwxrwx 1 root root      5 2026-04-22 09:28:15.000000000 +0100 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 234192 2026-04-22 09:26:50.000000000 +0100 ssh
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
-rw-r--r-- 1 root root   23 2026-04-22 09:28:57.000000000 +0100 modules.dep.wifi

/bndl/wifi/lib/modules/5.6.3/misc:
total 40
-rw-r--r-- 1 root root 38608 2026-04-22 09:25:29.000000000 +0100 c2.ko

/bndl/wifi/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib

/bndl/wifi/nova/bin:
total 1196
-rwxr-xr-x 1 root root 1221596 2026-04-22 09:28:39.000000000 +0100 ww2

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
total 880
-rw-r--r-- 1 root root  45368 2026-04-22 09:07:12.000000000 +0100 ar7100-7.22.2.fwf
-rw-r--r-- 1 root root  43808 2026-04-22 09:07:15.000000000 +0100 ar7240-7.22.2.fwf
-rw-r--r-- 1 root root  42980 2026-04-22 09:07:15.000000000 +0100 ar9330-7.22.2.fwf
-rw-r--r-- 1 root root  37824 2026-04-22 09:07:15.000000000 +0100 ar9330L-7.22.2.fwf
-rw-r--r-- 1 root root  44600 2026-04-22 09:07:16.000000000 +0100 ar9340-7.22.2.fwf
-rw-r--r-- 1 root root  39280 2026-04-22 09:07:15.000000000 +0100 ar9340L-7.22.2.fwf
-rw-r--r-- 1 root root  48340 2026-04-22 09:07:15.000000000 +0100 ar9344-7.22.2.fwf
-rw-r--r-- 1 root root  41296 2026-04-22 09:07:16.000000000 +0100 ar9344L-7.22.2.fwf
-rw-r--r-- 1 root root  12536 2026-04-17 18:00:48.000000000 +0100 fan_i2c.stm32
-rw-r--r-- 1 root root 130743 2026-04-22 09:03:53.000000000 +0100 license
-rw-r--r-- 1 root root  29500 2026-04-21 16:18:32.000000000 +0100 poe-pse-proxy.stm32
-rwxr-xr-x 1 root root   3952 2026-04-17 18:00:48.000000000 +0100 poeio.atflash
-rw-r--r-- 1 root root  15044 2026-04-21 16:18:32.000000000 +0100 pse-ch4-RB960.samd20
-rw-r--r-- 1 root root  14812 2026-04-21 16:18:32.000000000 +0100 pse-ch8-CRS112.samd20
-rw-r--r-- 1 root root  14796 2026-04-21 16:18:32.000000000 +0100 pse-ch8-CRS328.samd20
-rw-r--r-- 1 root root  45764 2026-04-22 09:07:17.000000000 +0100 qca8513-7.22.2.fwf
-rw-r--r-- 1 root root  40656 2026-04-22 09:07:15.000000000 +0100 qca8513L-7.22.2.fwf
-rw-r--r-- 1 root root  40608 2026-04-22 09:07:16.000000000 +0100 qca8719L-7.22.2.fwf
-rw-r--r-- 1 root root  40048 2026-04-22 09:07:16.000000000 +0100 qca9531-7.22.2.fwf
-rw-r--r-- 1 root root  43712 2026-04-22 09:06:51.000000000 +0100 qca9531L-7.22.2.fwf
-rw-r--r-- 1 root root  44704 2026-04-22 09:07:18.000000000 +0100 qca9550-7.22.2.fwf
-rw-r--r-- 1 root root  40912 2026-04-22 09:07:16.000000000 +0100 qca9550L-7.22.2.fwf
-rw-r--r-- 1 root root   4049 2026-04-17 18:00:48.000000000 +0100 stm8_hw_monitor.bin
lrwxrwxrwx 1 root root     24 2026-04-22 09:29:10.000000000 +0100 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2026-04-22 09:29:10.000000000 +0100 web

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
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 winbox

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
-rwxr-xr-x 1 root root 278808 2026-04-22 09:04:30.000000000 +0100 libc.so
-rwxr-xr-x 1 root root  89264 2026-04-22 09:06:50.000000000 +0100 libeap.so
-rwxr-xr-x 1 root root  21872 2026-04-22 09:05:33.000000000 +0100 libjson.so
-rwxr-xr-x 1 root root 186596 2026-04-22 09:06:11.000000000 +0100 librappsup.so
-rwxr-xr-x 1 root root 126632 2026-04-22 09:05:51.000000000 +0100 libubox.so
-rwxr-xr-x 1 root root  76508 2026-04-22 09:05:28.000000000 +0100 libuc++.so
-rwxr-xr-x 1 root root 290864 2026-04-22 09:06:15.000000000 +0100 libucrypto.so
-rwxr-xr-x 1 root root  27764 2026-04-22 09:05:49.000000000 +0100 libufiber.so
-rwxr-xr-x 1 root root  70680 2026-04-22 09:05:51.000000000 +0100 libuhttp.so
-rwxr-xr-x 1 root root 646636 2026-04-22 09:05:40.000000000 +0100 libumsg.so
-rwxr-xr-x 1 root root  37020 2026-04-22 09:06:22.000000000 +0100 liburadius.so
-rwxr-xr-x 1 root root  10576 2026-04-22 09:06:19.000000000 +0100 libuxml++.so
-rwxr-xr-x 1 root root  37284 2026-04-22 09:05:30.000000000 +0100 libwww.so
-rwxr-xr-x 1 root root  13804 2026-04-22 09:05:32.000000000 +0100 libxml.so
-rwxr-xr-x 1 root root  68120 2026-04-22 09:05:31.000000000 +0100 libz.so
drwxr-xr-x 3 root root   4096 2026-04-22 09:29:10.000000000 +0100 modules
lrwxrwxrwx 1 root root     27 2026-04-22 09:29:10.000000000 +0100 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2026-04-22 09:29:10.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 drivers
drwxr-xr-x 8 root root 4096 2026-04-22 09:29:10.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 misc
-rw-r--r-- 1 root root 3101 2026-04-22 09:24:07.000000000 +0100 modules.dep.system
drwxr-xr-x 6 root root 4096 2026-04-22 09:29:10.000000000 +0100 net

/lib/modules/5.6.3/drivers:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 char
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 net

/lib/modules/5.6.3/drivers/char:
total 36
-rw-r--r-- 1 root root 4952 2026-04-22 09:20:20.000000000 +0100 ar7100wdt.ko
-rw-r--r-- 1 root root 5048 2026-04-22 09:20:19.000000000 +0100 music_dog.ko
-rw-r--r-- 1 root root 8956 2026-04-22 09:20:35.000000000 +0100 ticker.ko
-rw-r--r-- 1 root root 5428 2026-04-22 09:20:19.000000000 +0100 usbler.ko

/lib/modules/5.6.3/drivers/net:
total 1496
-rw-r--r-- 1 root root  24748 2026-04-22 09:20:21.000000000 +0100 ag7100.ko
-rw-r--r-- 1 root root  39800 2026-04-22 09:20:25.000000000 +0100 ag7240.ko
-rw-r--r-- 1 root root  44348 2026-04-22 09:21:36.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root  26944 2026-04-22 09:21:36.000000000 +0100 aths16.ko
-rw-r--r-- 1 root root  10464 2026-04-22 09:21:36.000000000 +0100 icplus.ko
-rw-r--r-- 1 root root  10680 2026-04-22 09:20:39.000000000 +0100 imq.ko
-rw-r--r-- 1 root root  10132 2026-04-22 09:23:03.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root  19232 2026-04-22 09:20:21.000000000 +0100 music_gmac.ko
-rw-r--r-- 1 root root   9412 2026-04-22 09:20:20.000000000 +0100 music_support.ko
-rw-r--r-- 1 root root  55180 2026-04-22 09:21:36.000000000 +0100 music_switch.ko
-rw-r--r-- 1 root root 175728 2026-04-22 09:23:04.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root  41456 2026-04-22 09:21:30.000000000 +0100 phy_amcc_qt2025.ko
-rw-r--r-- 1 root root  91372 2026-04-22 09:21:33.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root 786860 2026-04-22 09:22:48.000000000 +0100 prestera_dx_mac.ko
-rw-r--r-- 1 root root   3528 2026-04-22 09:20:32.000000000 +0100 sram.ko
-rw-r--r-- 1 root root  59104 2026-04-22 09:21:40.000000000 +0100 switch.ko
drwxr-xr-x 2 root root   4096 2026-04-22 09:29:10.000000000 +0100 usb
-rw-r--r-- 1 root root  22800 2026-04-22 09:20:35.000000000 +0100 via-velocity.ko
-rw-r--r-- 1 root root  58632 2026-04-22 09:22:49.000000000 +0100 vxlan2.ko

/lib/modules/5.6.3/drivers/net/usb:
total 180
-rw-r--r-- 1 root root  71348 2026-04-22 09:21:59.000000000 +0100 fp_usbnet.ko
-rw-r--r-- 1 root root 106596 2026-04-22 09:21:40.000000000 +0100 mbim.ko

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x  3 root root 4096 2026-04-22 09:29:10.000000000 +0100 arch
drwxr-xr-x  2 root root 4096 2026-04-22 09:29:10.000000000 +0100 crypto
drwxr-xr-x  7 root root 4096 2026-04-22 09:29:10.000000000 +0100 drivers
drwxr-xr-x 12 root root 4096 2026-04-22 09:29:10.000000000 +0100 fs
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
-rw-r--r-- 1 root root 7964 2026-04-22 09:22:58.000000000 +0100 chacha-mips.ko
-rw-r--r-- 1 root root 5888 2026-04-22 09:22:58.000000000 +0100 poly1305-mips.ko

/lib/modules/5.6.3/kernel/arch/mips/oprofile:
total 36
-rw-r--r-- 1 root root 34056 2026-04-22 09:22:58.000000000 +0100 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 36
-rw-r--r-- 1 root root  3068 2026-04-22 09:22:59.000000000 +0100 arc4.ko
-rw-r--r-- 1 root root 12276 2026-04-22 09:22:59.000000000 +0100 ccm.ko
-rw-r--r-- 1 root root  4856 2026-04-22 09:22:59.000000000 +0100 cmac.ko
-rw-r--r-- 1 root root  3820 2026-04-22 09:22:59.000000000 +0100 des_generic.ko
-rw-r--r-- 1 root root  5120 2026-04-22 09:22:59.000000000 +0100 md4.ko

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 hid
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 mmc
drwxr-xr-x 7 root root 4096 2026-04-22 09:29:10.000000000 +0100 net
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 scsi
drwxr-xr-x 9 root root 4096 2026-04-22 09:29:10.000000000 +0100 usb

/lib/modules/5.6.3/kernel/drivers/hid:
total 72
-rw-r--r-- 1 root root 72320 2026-04-22 09:22:59.000000000 +0100 hid.ko

/lib/modules/5.6.3/kernel/drivers/mmc:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 core
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 host

/lib/modules/5.6.3/kernel/drivers/mmc/core:
total 140
-rw-r--r-- 1 root root  34844 2026-04-22 09:22:59.000000000 +0100 mmc_block.ko
-rw-r--r-- 1 root root 103932 2026-04-22 09:22:59.000000000 +0100 mmc_core.ko

/lib/modules/5.6.3/kernel/drivers/mmc/host:
total 20
-rw-r--r-- 1 root root 13784 2026-04-22 09:22:59.000000000 +0100 mmc_spi.ko
-rw-r--r-- 1 root root  2736 2026-04-22 09:22:59.000000000 +0100 of_mmc_spi.ko

/lib/modules/5.6.3/kernel/drivers/net:
total 96
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 bonding
drwxr-xr-x 3 root root  4096 2026-04-22 09:29:10.000000000 +0100 ethernet
-rw-r--r-- 1 root root 38248 2026-04-22 09:22:59.000000000 +0100 macsec.ko
-rw-r--r-- 1 root root 19192 2026-04-22 09:22:59.000000000 +0100 macvlan.ko
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 slip
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 usb
-rw-r--r-- 1 root root 15932 2026-04-22 09:23:00.000000000 +0100 veth.ko
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 132
-rw-r--r-- 1 root root 132148 2026-04-22 09:22:59.000000000 +0100 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 intel

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 40
-rw-r--r-- 1 root root 37256 2026-04-22 09:22:59.000000000 +0100 e100.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6052 2026-04-22 09:23:00.000000000 +0100 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 144
-rw-r--r-- 1 root root 19668 2026-04-22 09:23:00.000000000 +0100 ax88179_178a.ko
-rw-r--r-- 1 root root 40004 2026-04-22 09:23:00.000000000 +0100 hso.ko
-rw-r--r-- 1 root root  9892 2026-04-22 09:23:00.000000000 +0100 ipheth.ko
-rw-r--r-- 1 root root 12764 2026-04-22 09:23:00.000000000 +0100 sierra_net.ko
-rw-r--r-- 1 root root 25460 2026-04-22 09:23:00.000000000 +0100 smsc95xx.ko
-rw-r--r-- 1 root root 26536 2026-04-22 09:23:00.000000000 +0100 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 72
-rw-r--r-- 1 root root 69756 2026-04-22 09:23:00.000000000 +0100 wireguard.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 156
-rw-r--r-- 1 root root 116840 2026-04-22 09:23:00.000000000 +0100 scsi_mod.ko
-rw-r--r-- 1 root root  40492 2026-04-22 09:23:00.000000000 +0100 sd_mod.ko

/lib/modules/5.6.3/kernel/drivers/usb:
total 28
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 class
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 common
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 core
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:10.000000000 +0100 gadget
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 host
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 serial
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 storage

/lib/modules/5.6.3/kernel/drivers/usb/class:
total 28
-rw-r--r-- 1 root root 27584 2026-04-22 09:23:00.000000000 +0100 cdc-acm.ko

/lib/modules/5.6.3/kernel/drivers/usb/common:
total 8
-rw-r--r-- 1 root root 6248 2026-04-22 09:23:00.000000000 +0100 usb-common.ko

/lib/modules/5.6.3/kernel/drivers/usb/core:
total 180
-rw-r--r-- 1 root root 182420 2026-04-22 09:23:00.000000000 +0100 usbcore.ko

/lib/modules/5.6.3/kernel/drivers/usb/gadget:
total 52
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 function
-rw-r--r-- 1 root root 42296 2026-04-22 09:23:01.000000000 +0100 libcomposite.ko
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 udc

/lib/modules/5.6.3/kernel/drivers/usb/gadget/function:
total 84
-rw-r--r-- 1 root root 13580 2026-04-22 09:23:00.000000000 +0100 u_ether.ko
-rw-r--r-- 1 root root 12260 2026-04-22 09:23:00.000000000 +0100 u_serial.ko
-rw-r--r-- 1 root root 33600 2026-04-22 09:23:01.000000000 +0100 usb_f_mass_storage.ko
-rw-r--r-- 1 root root 18080 2026-04-22 09:23:01.000000000 +0100 usb_f_rndis.ko

/lib/modules/5.6.3/kernel/drivers/usb/gadget/udc:
total 16
-rw-r--r-- 1 root root 15980 2026-04-22 09:23:01.000000000 +0100 udc-core.ko

/lib/modules/5.6.3/kernel/drivers/usb/host:
total 72
-rw-r--r-- 1 root root 48292 2026-04-22 09:23:01.000000000 +0100 ehci-hcd.ko
-rw-r--r-- 1 root root 23732 2026-04-22 09:23:01.000000000 +0100 ohci-hcd.ko

/lib/modules/5.6.3/kernel/drivers/usb/serial:
total 312
-rw-r--r-- 1 root root   8420 2026-04-22 09:23:01.000000000 +0100 ch341.ko
-rw-r--r-- 1 root root  24324 2026-04-22 09:23:01.000000000 +0100 cp210x.ko
-rw-r--r-- 1 root root  77824 2026-04-22 09:23:01.000000000 +0100 ftdi_sio.ko
-rw-r--r-- 1 root root   5380 2026-04-22 09:23:01.000000000 +0100 ipw.ko
-rw-r--r-- 1 root root 101180 2026-04-22 09:23:01.000000000 +0100 option.ko
-rw-r--r-- 1 root root  15508 2026-04-22 09:23:01.000000000 +0100 pl2303.ko
-rw-r--r-- 1 root root  14168 2026-04-22 09:23:01.000000000 +0100 qcserial.ko
-rw-r--r-- 1 root root  13752 2026-04-22 09:23:01.000000000 +0100 sierra.ko
-rw-r--r-- 1 root root   8284 2026-04-22 09:23:01.000000000 +0100 usb_wwan.ko
-rw-r--r-- 1 root root  28960 2026-04-22 09:23:01.000000000 +0100 usbserial.ko

/lib/modules/5.6.3/kernel/drivers/usb/storage:
total 76
-rw-r--r-- 1 root root 74400 2026-04-22 09:23:01.000000000 +0100 usb-storage.ko

/lib/modules/5.6.3/kernel/fs:
total 48
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 cifs
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 configfs
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 exfat
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 ext4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 fat
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 fuse
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 jbd2
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 ksmbd
-rw-r--r-- 1 root root 6552 2026-04-22 09:23:02.000000000 +0100 mbcache.ko
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 nls
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 ntfs3

/lib/modules/5.6.3/kernel/fs/cifs:
total 484
-rw-r--r-- 1 root root 495144 2026-04-22 09:23:02.000000000 +0100 cifs.ko

/lib/modules/5.6.3/kernel/fs/configfs:
total 32
-rw-r--r-- 1 root root 30544 2026-04-22 09:23:02.000000000 +0100 configfs.ko

/lib/modules/5.6.3/kernel/fs/exfat:
total 76
-rw-r--r-- 1 root root 76836 2026-04-22 09:23:02.000000000 +0100 exfat.ko

/lib/modules/5.6.3/kernel/fs/ext4:
total 448
-rw-r--r-- 1 root root 458620 2026-04-22 09:23:02.000000000 +0100 ext4.ko

/lib/modules/5.6.3/kernel/fs/fat:
total 88
-rw-r--r-- 1 root root 70796 2026-04-22 09:23:02.000000000 +0100 fat.ko
-rw-r--r-- 1 root root 12756 2026-04-22 09:23:02.000000000 +0100 vfat.ko

/lib/modules/5.6.3/kernel/fs/fuse:
total 104
-rw-r--r-- 1 root root 102976 2026-04-22 09:23:02.000000000 +0100 fuse.ko

/lib/modules/5.6.3/kernel/fs/jbd2:
total 68
-rw-r--r-- 1 root root 68924 2026-04-22 09:23:02.000000000 +0100 jbd2.ko

/lib/modules/5.6.3/kernel/fs/ksmbd:
total 248
-rw-r--r-- 1 root root 252048 2026-04-22 09:23:02.000000000 +0100 ksmbd.ko

/lib/modules/5.6.3/kernel/fs/nls:
total 28
-rw-r--r-- 1 root root 7348 2026-04-22 09:23:02.000000000 +0100 nls_base.ko
-rw-r--r-- 1 root root 6572 2026-04-22 09:23:02.000000000 +0100 nls_cp437.ko
-rw-r--r-- 1 root root 4988 2026-04-22 09:23:02.000000000 +0100 nls_iso8859-1.ko
-rw-r--r-- 1 root root 2708 2026-04-22 09:23:02.000000000 +0100 nls_utf8.ko

/lib/modules/5.6.3/kernel/fs/ntfs3:
total 220
-rw-r--r-- 1 root root 222744 2026-04-22 09:23:02.000000000 +0100 ntfs3.ko

/lib/modules/5.6.3/kernel/lib:
total 44
-rw-r--r-- 1 root root 4144 2026-04-22 09:23:02.000000000 +0100 asn1_decoder.ko
-rw-r--r-- 1 root root 3364 2026-04-22 09:23:02.000000000 +0100 crc-ccitt.ko
-rw-r--r-- 1 root root 2640 2026-04-22 09:23:02.000000000 +0100 crc16.ko
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 crypto
-rw-r--r-- 1 root root 4248 2026-04-22 09:23:02.000000000 +0100 oid_registry.ko
-rw-r--r-- 1 root root 3492 2026-04-22 09:23:02.000000000 +0100 ts_bm.ko
-rw-r--r-- 1 root root 3324 2026-04-22 09:23:02.000000000 +0100 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 64
-rw-r--r-- 1 root root  2304 2026-04-22 09:23:02.000000000 +0100 libarc4.ko
-rw-r--r-- 1 root root  7468 2026-04-22 09:23:02.000000000 +0100 libblake2s-generic.ko
-rw-r--r-- 1 root root  3676 2026-04-22 09:23:02.000000000 +0100 libblake2s.ko
-rw-r--r-- 1 root root  7040 2026-04-22 09:23:02.000000000 +0100 libchacha20poly1305.ko
-rw-r--r-- 1 root root 11708 2026-04-22 09:23:02.000000000 +0100 libcurve25519-generic.ko
-rw-r--r-- 1 root root  1992 2026-04-22 09:23:02.000000000 +0100 libcurve25519.ko
-rw-r--r-- 1 root root 20668 2026-04-22 09:23:02.000000000 +0100 libdes.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18368 2026-04-22 09:23:02.000000000 +0100 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14908 2026-04-22 09:23:02.000000000 +0100 zlib_inflate.ko

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
-rw-r--r-- 1 root root 10004 2026-04-22 09:23:02.000000000 +0100 mrp.ko

/lib/modules/5.6.3/kernel/net/8021q:
total 28
-rw-r--r-- 1 root root 25368 2026-04-22 09:23:02.000000000 +0100 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 88
-rw-r--r-- 1 root root  2640 2026-04-22 09:23:02.000000000 +0100 ebt_802_3.ko
-rw-r--r-- 1 root root  3572 2026-04-22 09:23:02.000000000 +0100 ebt_arp.ko
-rw-r--r-- 1 root root  3168 2026-04-22 09:23:02.000000000 +0100 ebt_arpreply.ko
-rw-r--r-- 1 root root  3164 2026-04-22 09:23:02.000000000 +0100 ebt_dnat.ko
-rw-r--r-- 1 root root  3548 2026-04-22 09:23:02.000000000 +0100 ebt_ip.ko
-rw-r--r-- 1 root root  3780 2026-04-22 09:23:02.000000000 +0100 ebt_ip6.ko
-rw-r--r-- 1 root root  4696 2026-04-22 09:23:02.000000000 +0100 ebt_limit.ko
-rw-r--r-- 1 root root  2580 2026-04-22 09:23:03.000000000 +0100 ebt_mark.ko
-rw-r--r-- 1 root root  2512 2026-04-22 09:23:03.000000000 +0100 ebt_mark_m.ko
-rw-r--r-- 1 root root  2448 2026-04-22 09:23:03.000000000 +0100 ebt_pkttype.ko
-rw-r--r-- 1 root root  3036 2026-04-22 09:23:03.000000000 +0100 ebt_redirect.ko
-rw-r--r-- 1 root root  3024 2026-04-22 09:23:03.000000000 +0100 ebt_snat.ko
-rw-r--r-- 1 root root  3804 2026-04-22 09:23:03.000000000 +0100 ebt_stp.ko
-rw-r--r-- 1 root root  2956 2026-04-22 09:23:03.000000000 +0100 ebt_vlan.ko
-rw-r--r-- 1 root root  3108 2026-04-22 09:23:03.000000000 +0100 ebtable_filter.ko
-rw-r--r-- 1 root root  3108 2026-04-22 09:23:03.000000000 +0100 ebtable_nat.ko
-rw-r--r-- 1 root root 16480 2026-04-22 09:23:03.000000000 +0100 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 16692 2026-04-22 09:23:03.000000000 +0100 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 netfilter
-rw-r--r-- 1 root root 14636 2026-04-22 09:23:03.000000000 +0100 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 68
-rw-r--r-- 1 root root 15492 2026-04-22 09:23:03.000000000 +0100 ip_tables.ko
-rw-r--r-- 1 root root  3672 2026-04-22 09:23:03.000000000 +0100 ipt_REJECT.ko
-rw-r--r-- 1 root root  3756 2026-04-22 09:23:03.000000000 +0100 iptable_filter.ko
-rw-r--r-- 1 root root  3852 2026-04-22 09:23:03.000000000 +0100 iptable_mangle.ko
-rw-r--r-- 1 root root  3520 2026-04-22 09:23:03.000000000 +0100 iptable_nat.ko
-rw-r--r-- 1 root root  4088 2026-04-22 09:23:03.000000000 +0100 iptable_raw.ko
-rw-r--r-- 1 root root  3436 2026-04-22 09:23:03.000000000 +0100 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root  9284 2026-04-22 09:23:03.000000000 +0100 nf_nat_h323.ko
-rw-r--r-- 1 root root  4956 2026-04-22 09:23:03.000000000 +0100 nf_nat_pptp.ko
-rw-r--r-- 1 root root  4364 2026-04-22 09:23:03.000000000 +0100 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 36
-rw-r--r-- 1 root root  8944 2026-04-22 09:23:03.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root 12364 2026-04-22 09:23:03.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root  3552 2026-04-22 09:23:03.000000000 +0100 ip6_udp_tunnel.ko
drwxr-xr-x 2 root root  4096 2026-04-22 09:29:10.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 56
-rw-r--r-- 1 root root 15792 2026-04-22 09:23:03.000000000 +0100 ip6_tables.ko
-rw-r--r-- 1 root root  3920 2026-04-22 09:23:03.000000000 +0100 ip6t_NPT.ko
-rw-r--r-- 1 root root  3744 2026-04-22 09:23:03.000000000 +0100 ip6t_REJECT.ko
-rw-r--r-- 1 root root  2884 2026-04-22 09:23:03.000000000 +0100 ip6t_eui64.ko
-rw-r--r-- 1 root root  3148 2026-04-22 09:23:03.000000000 +0100 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  3760 2026-04-22 09:23:03.000000000 +0100 ip6table_filter.ko
-rw-r--r-- 1 root root  4088 2026-04-22 09:23:03.000000000 +0100 ip6table_mangle.ko
-rw-r--r-- 1 root root  3524 2026-04-22 09:23:03.000000000 +0100 ip6table_nat.ko
-rw-r--r-- 1 root root  4092 2026-04-22 09:23:03.000000000 +0100 ip6table_raw.ko
-rw-r--r-- 1 root root  5136 2026-04-22 09:23:03.000000000 +0100 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 52
-rw-r--r-- 1 root root  5048 2026-04-22 09:23:03.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root 42720 2026-04-22 09:23:03.000000000 +0100 mpls_router.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 404
-rw-r--r-- 1 root root  9884 2026-04-22 09:23:03.000000000 +0100 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root 40468 2026-04-22 09:23:03.000000000 +0100 nf_conntrack_h323.ko
-rw-r--r-- 1 root root  8108 2026-04-22 09:23:03.000000000 +0100 nf_conntrack_irc.ko
-rw-r--r-- 1 root root 29032 2026-04-22 09:23:03.000000000 +0100 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root  7520 2026-04-22 09:23:03.000000000 +0100 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root  8084 2026-04-22 09:23:04.000000000 +0100 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root 26700 2026-04-22 09:23:04.000000000 +0100 nf_conntrack_sip.ko
-rw-r--r-- 1 root root  6796 2026-04-22 09:23:04.000000000 +0100 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root 28916 2026-04-22 09:23:04.000000000 +0100 nf_nat.ko
-rw-r--r-- 1 root root  4460 2026-04-22 09:23:04.000000000 +0100 nf_nat_ftp.ko
-rw-r--r-- 1 root root  4104 2026-04-22 09:23:04.000000000 +0100 nf_nat_irc.ko
-rw-r--r-- 1 root root  7544 2026-04-22 09:23:04.000000000 +0100 nf_nat_rtsp.ko
-rw-r--r-- 1 root root 11772 2026-04-22 09:23:04.000000000 +0100 nf_nat_sip.ko
-rw-r--r-- 1 root root  3028 2026-04-22 09:23:04.000000000 +0100 nf_nat_tftp.ko
-rw-r--r-- 1 root root  8604 2026-04-22 09:23:04.000000000 +0100 nfnetlink.ko
-rw-r--r-- 1 root root 24264 2026-04-22 09:23:04.000000000 +0100 x_tables.ko
-rw-r--r-- 1 root root  6636 2026-04-22 09:23:04.000000000 +0100 xt_CT.ko
-rw-r--r-- 1 root root  3964 2026-04-22 09:23:04.000000000 +0100 xt_DSCP.ko
-rw-r--r-- 1 root root  3404 2026-04-22 09:23:04.000000000 +0100 xt_HL.ko
-rw-r--r-- 1 root root  3380 2026-04-22 09:23:04.000000000 +0100 xt_MASQUERADE.ko
-rw-r--r-- 1 root root  3768 2026-04-22 09:23:04.000000000 +0100 xt_NETMAP.ko
-rw-r--r-- 1 root root  3100 2026-04-22 09:23:04.000000000 +0100 xt_REDIRECT.ko
-rw-r--r-- 1 root root  6144 2026-04-22 09:23:04.000000000 +0100 xt_TCPMSS.ko
-rw-r--r-- 1 root root  5140 2026-04-22 09:23:04.000000000 +0100 xt_addrtype.ko
-rw-r--r-- 1 root root  4212 2026-04-22 09:23:04.000000000 +0100 xt_connbytes.ko
-rw-r--r-- 1 root root  4448 2026-04-22 09:23:04.000000000 +0100 xt_connmark.ko
-rw-r--r-- 1 root root  4948 2026-04-22 09:23:04.000000000 +0100 xt_conntrack.ko
-rw-r--r-- 1 root root  2988 2026-04-22 09:23:04.000000000 +0100 xt_dscp.ko
-rw-r--r-- 1 root root 16184 2026-04-22 09:23:04.000000000 +0100 xt_hashlimit.ko
-rw-r--r-- 1 root root  3404 2026-04-22 09:23:04.000000000 +0100 xt_helper.ko
-rw-r--r-- 1 root root  2812 2026-04-22 09:23:04.000000000 +0100 xt_hl.ko
-rw-r--r-- 1 root root  2748 2026-04-22 09:23:04.000000000 +0100 xt_length.ko
-rw-r--r-- 1 root root  2600 2026-04-22 09:23:04.000000000 +0100 xt_mac.ko
-rw-r--r-- 1 root root  3092 2026-04-22 09:23:04.000000000 +0100 xt_mark.ko
-rw-r--r-- 1 root root  3384 2026-04-22 09:23:04.000000000 +0100 xt_multiport.ko
-rw-r--r-- 1 root root  5064 2026-04-22 09:23:04.000000000 +0100 xt_nat.ko
-rw-r--r-- 1 root root  3948 2026-04-22 09:23:04.000000000 +0100 xt_physdev.ko
-rw-r--r-- 1 root root  4456 2026-04-22 09:23:04.000000000 +0100 xt_policy.ko
-rw-r--r-- 1 root root  2504 2026-04-22 09:23:04.000000000 +0100 xt_realm.ko
-rw-r--r-- 1 root root  3048 2026-04-22 09:23:04.000000000 +0100 xt_statistic.ko
-rw-r--r-- 1 root root  2920 2026-04-22 09:23:04.000000000 +0100 xt_string.ko
-rw-r--r-- 1 root root  3112 2026-04-22 09:23:04.000000000 +0100 xt_tcpmss.ko
-rw-r--r-- 1 root root  3968 2026-04-22 09:23:04.000000000 +0100 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/rfkill:
total 16
-rw-r--r-- 1 root root 15084 2026-04-22 09:23:04.000000000 +0100 rfkill.ko

/lib/modules/5.6.3/kernel/net/sched:
total 84
-rw-r--r-- 1 root root 28280 2026-04-22 09:23:04.000000000 +0100 sch_cake.ko
-rw-r--r-- 1 root root  7420 2026-04-22 09:23:04.000000000 +0100 sch_codel.ko
-rw-r--r-- 1 root root 10028 2026-04-22 09:23:04.000000000 +0100 sch_fq_codel.ko
-rw-r--r-- 1 root root 24044 2026-04-22 09:23:04.000000000 +0100 sch_htb.ko
-rw-r--r-- 1 root root  8816 2026-04-22 09:23:04.000000000 +0100 sch_red.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 7012 2026-04-22 09:23:04.000000000 +0100 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 472
-rw-r--r-- 1 root root 11440 2026-04-22 09:22:50.000000000 +0100 appmark.ko
-rw-r--r-- 1 root root 10468 2026-04-22 09:20:36.000000000 +0100 btest.ko
-rw-r--r-- 1 root root  1980 2026-04-22 09:22:41.000000000 +0100 c2glue.ko
-rw-r--r-- 1 root root  6316 2026-04-22 09:21:56.000000000 +0100 dot1x.ko
-rw-r--r-- 1 root root 35464 2026-04-22 09:21:43.000000000 +0100 fan_i2c.ko
-rw-r--r-- 1 root root  6332 2026-04-22 09:20:23.000000000 +0100 fancon.ko
-rw-r--r-- 1 root root 57584 2026-04-22 09:21:05.000000000 +0100 flash.ko
-rw-r--r-- 1 root root  5352 2026-04-22 09:20:49.000000000 +0100 jiffies.ko
-rw-r--r-- 1 root root 14704 2026-04-22 09:20:35.000000000 +0100 lcd.ko
-rw-r--r-- 1 root root  3000 2026-04-22 09:20:27.000000000 +0100 ledgroup.ko
-rw-r--r-- 1 root root 11124 2026-04-22 09:20:31.000000000 +0100 logring.ko
-rw-r--r-- 1 root root 28528 2026-04-22 09:20:35.000000000 +0100 lte_gct_eth.ko
-rw-r--r-- 1 root root 12964 2026-04-22 09:20:35.000000000 +0100 lte_gct_tty.ko
-rw-r--r-- 1 root root 22056 2026-04-22 09:21:13.000000000 +0100 mesh.ko
-rw-r--r-- 1 root root  8668 2026-04-22 09:20:30.000000000 +0100 panics.ko
-rw-r--r-- 1 root root  7348 2026-04-22 09:20:39.000000000 +0100 poe_in.ko
-rw-r--r-- 1 root root 15172 2026-04-22 09:20:40.000000000 +0100 poe_simple.ko
-rw-r--r-- 1 root root 39748 2026-04-22 09:20:39.000000000 +0100 poe_v4.ko
-rw-r--r-- 1 root root  8080 2026-04-22 09:20:40.000000000 +0100 poeupdate.ko
-rw-r--r-- 1 root root 16320 2026-04-22 09:22:47.000000000 +0100 prestera_pci.ko
-rw-r--r-- 1 root root  7796 2026-04-22 09:20:39.000000000 +0100 rb.ko
-rw-r--r-- 1 root root  5720 2026-04-22 09:20:55.000000000 +0100 romon.ko
-rw-r--r-- 1 root root  5308 2026-04-22 09:21:11.000000000 +0100 snif.ko
-rw-r--r-- 1 root root 27916 2026-04-22 09:21:40.000000000 +0100 stm8_fan.ko
-rw-r--r-- 1 root root 24964 2026-04-22 09:20:48.000000000 +0100 traffic_gen.ko
-rw-r--r-- 1 root root 19324 2026-04-22 09:20:36.000000000 +0100 ts.ko
-rw-r--r-- 1 root root  6636 2026-04-22 09:21:10.000000000 +0100 ulog.ko
-rw-r--r-- 1 root root 15576 2026-04-22 09:20:29.000000000 +0100 voltage.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:10.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 sched

/lib/modules/5.6.3/net/bridge:
total 248
-rw-r--r-- 1 root root 222876 2026-04-22 09:23:07.000000000 +0100 bridge2.ko
-rw-r--r-- 1 root root  17088 2026-04-22 09:23:06.000000000 +0100 bridge2_netfilter.ko
-rw-r--r-- 1 root root   2464 2026-04-22 09:21:07.000000000 +0100 ebt_snif.ko
-rw-r--r-- 1 root root   2696 2026-04-22 09:21:07.000000000 +0100 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 24
-rw-r--r-- 1 root root 3324 2026-04-22 09:20:37.000000000 +0100 ipt_SAME.ko
-rw-r--r-- 1 root root 6140 2026-04-22 09:20:37.000000000 +0100 ipt_TARPIT.ko
-rw-r--r-- 1 root root 4060 2026-04-22 09:20:37.000000000 +0100 ipt_psd.ko
-rw-r--r-- 1 root root 2564 2026-04-22 09:21:07.000000000 +0100 ipt_snif.ko
-rw-r--r-- 1 root root 3040 2026-04-22 09:21:07.000000000 +0100 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 60
-rw-r--r-- 1 root root  2028 2026-04-22 09:21:27.000000000 +0100 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  2028 2026-04-22 09:21:27.000000000 +0100 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 10464 2026-04-22 09:21:34.000000000 +0100 xt_ein.ko
-rw-r--r-- 1 root root 12424 2026-04-22 09:20:40.000000000 +0100 xt_layer7.ko
-rw-r--r-- 1 root root 16556 2026-04-22 09:21:34.000000000 +0100 xt_misc.ko
-rw-r--r-- 1 root root  3960 2026-04-22 09:20:37.000000000 +0100 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 76
-rw-r--r-- 1 root root  5188 2026-04-22 09:20:53.000000000 +0100 cls_fw.ko
-rw-r--r-- 1 root root 11520 2026-04-22 09:20:57.000000000 +0100 cls_linear.ko
-rw-r--r-- 1 root root 12596 2026-04-22 09:21:00.000000000 +0100 proto_agr.ko
-rw-r--r-- 1 root root 18524 2026-04-22 09:21:00.000000000 +0100 sch_agr.ko
-rw-r--r-- 1 root root 10312 2026-04-22 09:20:39.000000000 +0100 sch_pcq.ko
-rw-r--r-- 1 root root  8032 2026-04-22 09:20:53.000000000 +0100 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2026-04-22 09:29:10.000000000 +0100 bin
drwxr-xr-x 12 root root 4096 2026-04-22 09:29:10.000000000 +0100 etc
drwxr-xr-x  5 root root 4096 2026-04-22 09:29:10.000000000 +0100 lib
lrwxrwxrwx  1 root root    8 2026-04-22 09:29:10.000000000 +0100 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2026-04-22 09:29:10.000000000 +0100 store -> /rw/store

/nova/bin:
total 12092
-rwxr-xr-x 1 root root   24328 2026-04-22 09:05:48.000000000 +0100 agent
-rwxr-xr-x 1 root root   41596 2026-04-22 09:06:01.000000000 +0100 apptraffic
-rwxr-xr-x 1 root root   13128 2026-04-22 09:05:47.000000000 +0100 arpd
-rwxr-xr-x 1 root root   18208 2026-04-22 09:06:20.000000000 +0100 backup
-rwxr-xr-x 1 root root  298812 2026-04-22 09:07:26.000000000 +0100 bridge2
-rwxr-xr-x 1 root root   82648 2026-04-22 09:06:34.000000000 +0100 btest
-rwxr-xr-x 1 root root   59752 2026-04-22 09:06:02.000000000 +0100 bth
-rwxr-xr-x 1 root root 1106952 2026-04-22 09:07:20.000000000 +0100 cerm
lrwxrwxrwx 1 root root       4 2026-04-22 09:07:25.000000000 +0100 cerm-worker -> cerm
-rwxr-xr-x 1 root root  176072 2026-04-22 09:06:57.000000000 +0100 cloud
-rwxr-xr-x 1 root root  100304 2026-04-22 09:06:17.000000000 +0100 crossfig
-rwxr-xr-x 1 root root   67800 2026-04-22 09:06:37.000000000 +0100 detnet
-rwxr-xr-x 1 root root   84900 2026-04-22 09:06:01.000000000 +0100 discover
-rwxr-xr-x 1 root root  355324 2026-04-22 09:07:00.000000000 +0100 diskd
-rwxr-xr-x 1 root root  149872 2026-04-22 09:07:29.000000000 +0100 dot1x
-rwxr-xr-x 1 root root   40748 2026-04-22 09:06:22.000000000 +0100 email
-rwxr-xr-x 1 root root  224612 2026-04-22 09:06:59.000000000 +0100 figman
-rwxr-xr-x 1 root root  154252 2026-04-22 09:07:01.000000000 +0100 fileman
-rwxr-xr-x 1 root root   35124 2026-04-22 09:05:48.000000000 +0100 ftpd
-rwxr-xr-x 1 root root  157520 2026-04-22 09:06:07.000000000 +0100 graphing
-rwxr-xr-x 1 root root   64800 2026-04-22 09:06:16.000000000 +0100 igmpproxy
-rwxr-xr-x 1 root root   84144 2026-04-22 09:06:31.000000000 +0100 installer
-rwxr-xr-x 1 root root   30800 2026-04-22 09:06:44.000000000 +0100 ippool
-rwxr-xr-x 1 root root   55292 2026-04-22 09:06:26.000000000 +0100 keyman
-rwxr-xr-x 1 root root   48256 2026-04-22 09:05:59.000000000 +0100 kidcontrol
-rwxr-xr-x 1 root root  248212 2026-04-22 09:06:10.000000000 +0100 lcdstat
-rwxr-xr-x 1 root root   86360 2026-04-22 09:06:42.000000000 +0100 led
-rwxr-xr-x 1 root root  129196 2026-04-22 09:06:58.000000000 +0100 letsencrypt
-rwxr-xr-x 1 root root   85340 2026-04-22 09:06:32.000000000 +0100 loader
-rwxr-xr-x 1 root root   90144 2026-04-22 09:05:51.000000000 +0100 log
-rwxr-xr-x 1 root root  175360 2026-04-22 09:07:40.000000000 +0100 login
-rwxr-xr-x 1 root root   55084 2026-04-22 09:05:50.000000000 +0100 logmaker
-rwxr-xr-x 1 root root   22940 2026-04-22 09:05:47.000000000 +0100 macping
-rwxr-xr-x 1 root root   38920 2026-04-22 09:06:24.000000000 +0100 mactel
-rwxr-xr-x 1 root root   23640 2026-04-22 09:05:47.000000000 +0100 mepty
-rwxr-xr-x 1 root root   85836 2026-04-22 09:06:04.000000000 +0100 mesh
-rwxr-xr-x 1 root root   71704 2026-04-22 09:07:40.000000000 +0100 mode
lrwxrwxrwx 1 root root       7 2026-04-22 09:06:55.000000000 +0100 modprobed -> moduler
-rwxr-xr-x 1 root root  150380 2026-04-22 09:06:55.000000000 +0100 moduler
-rwxr-xr-x 1 root root   80696 2026-04-22 09:07:03.000000000 +0100 mproxy
-rwxr-xr-x 1 root root   61972 2026-04-22 09:06:21.000000000 +0100 mtget
-rwxr-xr-x 1 root root   49536 2026-04-22 09:05:58.000000000 +0100 natpmp
-rwxr-xr-x 1 root root 1796932 2026-04-22 09:08:26.000000000 +0100 net
-rwxr-xr-x 1 root root   71904 2026-04-22 09:06:32.000000000 +0100 ntp
-rwxr-xr-x 1 root root    6184 2026-04-22 09:05:46.000000000 +0100 panicsl
-rwxr-xr-x 1 root root  865768 2026-04-22 09:08:09.000000000 +0100 parser
-rwxr-xr-x 1 root root   35912 2026-04-22 09:05:56.000000000 +0100 partd
-rwxr-xr-x 1 root root   47204 2026-04-22 09:05:49.000000000 +0100 ping
-rwxr-xr-x 1 root root    6552 2026-04-22 09:20:38.000000000 +0100 poeupdatefw
-rwxr-xr-x 1 root root   49096 2026-04-22 09:05:56.000000000 +0100 portman
-rwxr-xr-x 1 root root   34776 2026-04-22 09:23:21.000000000 +0100 profiler
-rwxr-xr-x 1 root root   92520 2026-04-22 09:06:40.000000000 +0100 ptp
-rwxr-xr-x 1 root root  154012 2026-04-22 09:05:51.000000000 +0100 quickset
-rwxr-xr-x 1 root root   57972 2026-04-22 09:06:36.000000000 +0100 radius
-rwxr-xr-x 1 root root  170680 2026-04-22 09:07:10.000000000 +0100 resolver
-rwxr-xr-x 1 root root   10024 2026-04-22 09:07:10.000000000 +0100 resolver_ctl
-rwxr-xr-x 1 root root   96716 2026-04-22 09:06:46.000000000 +0100 romon
-rwxr-xr-x 1 root root 1864396 2026-04-22 09:08:46.000000000 +0100 route
-rwxr-xr-x 1 root root   32508 2026-04-22 09:06:00.000000000 +0100 rproxy
-rwxr-xr-x 1 root root   16792 2026-04-22 09:06:33.000000000 +0100 rtrace
-rwxr-xr-x 1 root root   44676 2026-04-22 09:06:42.000000000 +0100 sermgr
-rwxr-xr-x 1 root root   35680 2026-04-22 09:05:58.000000000 +0100 sertcp
-rwxr-xr-x 1 root root   73180 2026-04-22 09:06:02.000000000 +0100 sniffer
-rwxr-xr-x 1 root root  212456 2026-04-22 09:07:22.000000000 +0100 snmp
-rwxr-xr-x 1 root root   66636 2026-04-22 09:06:04.000000000 +0100 socks
-rwxr-xr-x 1 root root   37496 2026-04-22 09:06:00.000000000 +0100 socksify
-rwxr-xr-x 1 root root  125200 2026-04-22 09:06:51.000000000 +0100 ssld
-rwxr-xr-x 1 root root   38816 2026-04-22 09:06:26.000000000 +0100 sstore
-rwxr-xr-x 1 root root  318208 2026-04-22 09:07:43.000000000 +0100 sys2
-rwxr-xr-x 1 root root   20936 2026-04-22 09:05:48.000000000 +0100 telnet
-rwxr-xr-x 1 root root   30832 2026-04-22 09:05:50.000000000 +0100 telser
-rwxr-xr-x 1 root root   37780 2026-04-22 09:05:59.000000000 +0100 tftpd
-rwxr-xr-x 1 root root   34636 2026-04-22 09:05:48.000000000 +0100 traceroute
-rwxr-xr-x 1 root root  112912 2026-04-22 09:06:01.000000000 +0100 trafficgen
-rwxr-xr-x 1 root root   23544 2026-04-22 09:05:54.000000000 +0100 trafflow
-rwxr-xr-x 1 root root   26664 2026-04-22 09:05:47.000000000 +0100 undo
-rwxr-xr-x 1 root root  150652 2026-04-22 09:06:05.000000000 +0100 upnp
-rwxr-xr-x 1 root root   85632 2026-04-22 09:06:44.000000000 +0100 user
-rwxr-xr-x 1 root root   99228 2026-04-22 09:06:42.000000000 +0100 vrrp
-rwxr-xr-x 1 root root   30816 2026-04-22 09:05:54.000000000 +0100 watchdog
-rwxr-xr-x 1 root root  151776 2026-04-22 09:06:56.000000000 +0100 wproxy
-rwxr-xr-x 1 root root  138164 2026-04-22 09:07:00.000000000 +0100 www

/nova/etc:
total 68
-rwxr-xr-x 1 root root 9044 2026-01-08 09:06:11.000000000 +0000 app_rules.json
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
-rwxr-xr-x 1 root root 1204 2026-04-22 09:05:29.000000000 +0100 system.x3

/nova/etc/pciinfo:
total 124
-rwxr-xr-x 1 root root 124950 2026-04-22 09:05:29.000000000 +0100 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 101 2026-04-22 09:05:29.000000000 +0100 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 1148 2026-04-22 09:05:29.000000000 +0100 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2026-04-22 09:05:29.000000000 +0100 system.x3

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
-rwxr-xr-x 1 root root 2230 2026-04-22 09:05:29.000000000 +0100 system.x3

/nova/etc/www:
total 4
-rwxr-xr-x 1 root root 2509 2026-04-22 09:05:29.000000000 +0100 system.x3

/nova/lib:
total 12
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 defconf
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 profiler

/nova/lib/console:
total 2288
-rwxr-xr-x 1 root root 2333940 2026-04-22 09:08:19.000000000 +0100 1073741824.mem
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
-rwxr-xr-x 1 root root 13920 2026-04-22 09:23:21.000000000 +0100 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 488
-rwxr-xr-x 1 root root 404168 2026-04-22 09:23:40.000000000 +0100 mke2fs
-rwxr-xr-x 1 root root  24876 2026-04-22 09:05:28.000000000 +0100 nandfix
-rwxr-xr-x 1 root root  65048 2026-04-22 09:06:26.000000000 +0100 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2026-04-22 09:29:10.000000000 +0100 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 deinstall
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 lock
lrwxrwxrwx 1 root root    8 2026-04-22 09:29:10.000000000 +0100 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2026-04-22 09:29:10.000000000 +0100 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:10.000000000 +0100 post
lrwxrwxrwx 1 root root    7 2026-04-22 09:29:10.000000000 +0100 run -> /rw/run
lrwxrwxrwx 1 root root    4 2026-04-22 09:29:10.000000000 +0100 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

