### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 9383165 bytes, 789 inodes, blocksize: 262144 bytes, created: Thu Jan 30 11:26:37 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 bin
drwxr-xr-x 9 root root 4096 2025-01-30 11:26:23.000000000 +0000 bndl
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 boot
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 dev
lrwxrwxrwx 1 root root   11 2025-01-30 11:26:23.000000000 +0000 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 etc
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 flash
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:23.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-01-30 11:26:23.000000000 +0000 nova
lrwxrwxrwx 1 root root    9 2025-01-30 11:26:23.000000000 +0000 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 proc
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 ram
lrwxrwxrwx 1 root root    9 2025-01-30 11:26:23.000000000 +0000 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 sbin
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 sys
lrwxrwxrwx 1 root root    7 2025-01-30 11:26:23.000000000 +0000 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2025-01-30 11:26:23.000000000 +0000 var

/bin:
total 228
lrwxrwxrwx 1 root root     21 2025-01-30 11:26:23.000000000 +0000 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root  13724 2025-01-30 10:36:27.000000000 +0000 catlog
lrwxrwxrwx 1 root root     15 2025-01-30 11:26:23.000000000 +0000 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root     15 2025-01-30 11:26:23.000000000 +0000 login -> /nova/bin/login
-rwxr-xr-x 1 root root  19552 2025-01-30 11:13:33.000000000 +0000 mkexfatfs
-rwxr-xr-x 1 root root   9412 2025-01-30 10:36:24.000000000 +0000 pakp
lrwxrwxrwx 1 root root     21 2025-01-30 11:26:23.000000000 +0000 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root     15 2025-01-30 11:26:23.000000000 +0000 shell -> /nova/bin/login
-rwxr-xr-x 1 root root 183480 2025-01-30 11:14:20.000000000 +0000 sshfs

/bndl:
total 28
drwxr-xr-x 4 root root 4096 2025-01-30 11:26:22.000000000 +0000 advanced-tools
drwxr-xr-x 5 root root 4096 2025-01-30 11:26:22.000000000 +0000 dhcp
drwxr-xr-x 5 root root 4096 2025-01-30 11:26:22.000000000 +0000 hotspot
drwxr-xr-x 4 root root 4096 2025-01-30 11:26:23.000000000 +0000 ipv6
drwxr-xr-x 5 root root 4096 2025-01-30 11:26:22.000000000 +0000 ppp
drwxr-xr-x 5 root root 4096 2025-01-30 11:26:22.000000000 +0000 security
drwxr-xr-x 4 root root 4096 2025-01-30 11:26:23.000000000 +0000 wifi

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-01-30 11:26:22.000000000 +0000 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 webfig

/bndl/advanced-tools/home/web/webfig:
total 8
-rw-r--r-- 1 root root 2360 2025-01-30 11:15:15.000000000 +0000 advtool-b6a18e54d46e.jg.gz
-rwxr-xr-x 1 root root  107 2025-01-30 11:15:16.000000000 +0000 advtool.info
lrwxrwxrwx 1 root root   26 2025-01-30 11:15:16.000000000 +0000 advtool.jg.gz -> advtool-b6a18e54d46e.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 lib

/bndl/advanced-tools/nova/bin:
total 204
-rwxr-xr-x 1 root root 30412 2025-01-30 11:15:01.000000000 +0000 ddns
-rwxr-xr-x 1 root root 13724 2025-01-30 11:14:41.000000000 +0000 fping
-rwxr-xr-x 1 root root 17980 2025-01-30 11:15:08.000000000 +0000 macscan
-rwxr-xr-x 1 root root 63436 2025-01-30 11:16:18.000000000 +0000 netwatch
-rwxr-xr-x 1 root root 17868 2025-01-30 11:14:47.000000000 +0000 pspeed
-rwxr-xr-x 1 root root 34536 2025-01-30 11:15:16.000000000 +0000 scanner
-rwxr-xr-x 1 root root 13732 2025-01-30 11:15:12.000000000 +0000 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 console

/bndl/advanced-tools/nova/lib/console:
total 24
-rwxr-xr-x 1 root root 24113 2025-01-30 11:15:00.000000000 +0000 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 home
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2025-01-30 11:26:22.000000000 +0000 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 webfig

/bndl/dhcp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4200 2025-01-30 11:15:46.000000000 +0000 dhcp-5540fe7f653a.jg.gz
-rwxr-xr-x 1 root root  101 2025-01-30 11:15:46.000000000 +0000 dhcp.info
lrwxrwxrwx 1 root root   23 2025-01-30 11:15:47.000000000 +0000 dhcp.jg.gz -> dhcp-5540fe7f653a.jg.gz

/bndl/dhcp/lib:
total 96
-rwxr-xr-x 1 root root 96572 2025-01-30 11:15:19.000000000 +0000 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 lib

/bndl/dhcp/nova/bin:
total 292
-rwxr-xr-x 1 root root 203448 2025-01-30 11:17:49.000000000 +0000 dhcp
-rwxr-xr-x 1 root root  92464 2025-01-30 11:17:28.000000000 +0000 dhcpclient

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 console

/bndl/dhcp/nova/lib/console:
total 104
-rwxr-xr-x 1 root root 103057 2025-01-30 11:15:33.000000000 +0000 1128267776.mem

/bndl/hotspot:
total 12
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-01-30 11:26:22.000000000 +0000 nova

/bndl/hotspot/home:
total 4
drwxr-xr-x 4 root root 4096 2025-01-30 11:26:22.000000000 +0000 web

/bndl/hotspot/home/web:
total 8
drwxr-xr-x 5 root root 4096 2025-01-30 11:26:22.000000000 +0000 hotspot
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 webfig

/bndl/hotspot/home/web/hotspot:
total 68
-rw-r--r-- 1 root root 1094 2025-01-30 10:29:00.000000000 +0000 alogin.html
-rw-r--r-- 1 root root  311 2025-01-30 10:29:00.000000000 +0000 api.json
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 css
-rw-r--r-- 1 root root  640 2025-01-30 10:29:00.000000000 +0000 error.html
-rw-r--r-- 1 root root 3719 2025-01-30 10:29:00.000000000 +0000 errors.txt
-rw-r--r-- 1 root root  903 2025-01-30 10:29:00.000000000 +0000 favicon.ico
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 img
-rw-r--r-- 1 root root 4423 2025-01-30 10:29:00.000000000 +0000 login.html
-rw-r--r-- 1 root root 1459 2025-01-30 10:29:00.000000000 +0000 logout.html
-rw-r--r-- 1 root root 7218 2025-01-30 10:29:00.000000000 +0000 md5.js
-rw-r--r-- 1 root root 1204 2025-01-30 10:29:00.000000000 +0000 radvert.html
-rw-r--r-- 1 root root  330 2025-01-30 10:29:00.000000000 +0000 redirect.html
-rw-r--r-- 1 root root  877 2025-01-30 10:29:00.000000000 +0000 rlogin.html
-rw-r--r-- 1 root root 2855 2025-01-30 10:29:00.000000000 +0000 status.html
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 xml

/bndl/hotspot/home/web/hotspot/css:
total 4
-rw-r--r-- 1 root root 4053 2025-01-30 10:29:00.000000000 +0000 style.css

/bndl/hotspot/home/web/hotspot/img:
total 8
-rw-r--r-- 1 root root 644 2025-01-30 10:29:00.000000000 +0000 password.svg
-rw-r--r-- 1 root root 444 2025-01-30 10:29:00.000000000 +0000 user.svg

/bndl/hotspot/home/web/hotspot/xml:
total 32
-rw-r--r-- 1 root root 4251 2025-01-30 10:29:00.000000000 +0000 WISPAccessGatewayParam.xsd
-rw-r--r-- 1 root root  839 2025-01-30 10:29:00.000000000 +0000 alogin.html
-rw-r--r-- 1 root root  428 2025-01-30 10:29:00.000000000 +0000 error.html
-rw-r--r-- 1 root root  372 2025-01-30 10:29:00.000000000 +0000 flogout.html
-rw-r--r-- 1 root root  809 2025-01-30 10:29:00.000000000 +0000 login.html
-rw-r--r-- 1 root root  370 2025-01-30 10:29:00.000000000 +0000 logout.html
-rw-r--r-- 1 root root  545 2025-01-30 10:29:00.000000000 +0000 rlogin.html

/bndl/hotspot/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4216 2025-01-30 11:16:04.000000000 +0000 hotspot-f1e2e1d4af99.jg.gz
-rwxr-xr-x 1 root root  107 2025-01-30 11:16:04.000000000 +0000 hotspot.info
lrwxrwxrwx 1 root root   26 2025-01-30 11:16:05.000000000 +0000 hotspot.jg.gz -> hotspot-f1e2e1d4af99.jg.gz

/bndl/hotspot/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 modules

/bndl/hotspot/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 5.6.3

/bndl/hotspot/lib/modules/5.6.3:
total 8
-rw-r--r-- 1 root root   13 2025-01-30 11:16:59.000000000 +0000 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 net

/bndl/hotspot/lib/modules/5.6.3/net:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 ipv4

/bndl/hotspot/lib/modules/5.6.3/net/ipv4:
total 40
-rw-r--r-- 1 root root 39616 2025-01-30 11:16:12.000000000 +0000 unicl.ko

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 lib

/bndl/hotspot/nova/bin:
total 232
-rwxr-xr-x 1 root root 236124 2025-01-30 11:16:52.000000000 +0000 hotspot

/bndl/hotspot/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 radius

/bndl/hotspot/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-01-30 11:15:59.000000000 +0000 hotspot.x3

/bndl/hotspot/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 console

/bndl/hotspot/nova/lib/console:
total 80
-rwxr-xr-x 1 root root 80546 2025-01-30 11:15:58.000000000 +0000 1132462080.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:23.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-01-30 11:26:23.000000000 +0000 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:23.000000000 +0000 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 webfig

/bndl/ipv6/home/web/webfig:
total 12
-rw-r--r-- 1 root root 7441 2025-01-30 11:14:59.000000000 +0000 ipv6-b898739b568b.jg.gz
-rwxr-xr-x 1 root root  101 2025-01-30 11:14:59.000000000 +0000 ipv6.info
lrwxrwxrwx 1 root root   23 2025-01-30 11:14:59.000000000 +0000 ipv6.jg.gz -> ipv6-b898739b568b.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-01-30 11:26:23.000000000 +0000 lib

/bndl/ipv6/nova/bin:
total 88
-rwxr-xr-x 1 root root 30356 2025-01-30 11:15:12.000000000 +0000 ippool6
-rwxr-xr-x 1 root root 55132 2025-01-30 11:15:11.000000000 +0000 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 route

/bndl/ipv6/nova/lib/console:
total 176
-rwxr-xr-x 1 root root 178196 2025-01-30 11:15:01.000000000 +0000 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2025-01-30 10:29:00.000000000 +0000 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-01-30 11:26:22.000000000 +0000 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 webfig

/bndl/ppp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 6392 2025-01-30 11:16:43.000000000 +0000 ppp-0185abe62dd5.jg.gz
-rwxr-xr-x 1 root root   98 2025-01-30 11:16:43.000000000 +0000 ppp.info
lrwxrwxrwx 1 root root   22 2025-01-30 11:16:43.000000000 +0000 ppp.jg.gz -> ppp-0185abe62dd5.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2025-01-30 11:26:22.000000000 +0000 5.6.3

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 misc
-rw-r--r-- 1 root root  293 2025-01-30 11:22:32.000000000 +0000 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 104
-rw-r--r-- 1 root root 12496 2025-01-30 11:10:55.000000000 +0000 ppp_async.ko
-rw-r--r-- 1 root root  7444 2025-01-30 11:10:55.000000000 +0000 ppp_deflate.ko
-rw-r--r-- 1 root root 32424 2025-01-30 11:10:55.000000000 +0000 ppp_generic.ko
-rw-r--r-- 1 root root  9100 2025-01-30 11:10:55.000000000 +0000 ppp_mppe.ko
-rw-r--r-- 1 root root 10676 2025-01-30 11:10:55.000000000 +0000 ppp_synctty.ko
-rw-r--r-- 1 root root 13448 2025-01-30 11:10:55.000000000 +0000 pppoe.ko
-rw-r--r-- 1 root root  4936 2025-01-30 11:10:55.000000000 +0000 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 92
-rw-r--r-- 1 root root 33968 2025-01-30 11:16:23.000000000 +0000 ovpn.ko
-rw-r--r-- 1 root root  6828 2025-01-30 11:15:47.000000000 +0000 pppoefp.ko
-rw-r--r-- 1 root root 46844 2025-01-30 11:16:18.000000000 +0000 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 56
-rw-r--r-- 1 root root 41900 2025-01-30 11:16:18.000000000 +0000 l2tp.ko
-rw-r--r-- 1 root root 10844 2025-01-30 11:15:17.000000000 +0000 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-01-30 11:26:22.000000000 +0000 etc
drwxr-xr-x 4 root root 4096 2025-01-30 11:26:22.000000000 +0000 lib

/bndl/ppp/nova/bin:
total 528
-rwxr-xr-x 1 root root 540672 2025-01-30 11:22:01.000000000 +0000 ppp
lrwxrwxrwx 1 root root      3 2025-01-30 11:22:01.000000000 +0000 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2025-01-30 11:16:13.000000000 +0000 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2025-01-30 11:16:13.000000000 +0000 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 profiler

/bndl/ppp/nova/lib/console:
total 140
-rwxr-xr-x 1 root root 142856 2025-01-30 11:16:29.000000000 +0000 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 8
-rwxr-xr-x 1 root root 5048 2025-01-30 11:17:52.000000000 +0000 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-01-30 11:26:22.000000000 +0000 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 webfig

/bndl/security/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4365 2025-01-30 11:21:11.000000000 +0000 secure-0a49065a769f.jg.gz
-rwxr-xr-x 1 root root  105 2025-01-30 11:21:11.000000000 +0000 secure.info
lrwxrwxrwx 1 root root   25 2025-01-30 11:21:11.000000000 +0000 secure.jg.gz -> secure-0a49065a769f.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 5.6.3

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2025-01-30 11:26:22.000000000 +0000 kernel
-rw-r--r-- 1 root root  106 2025-01-30 11:25:44.000000000 +0000 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 crypto
drwxr-xr-x 5 root root 4096 2025-01-30 11:26:22.000000000 +0000 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 92
-rw-r--r-- 1 root root  8216 2025-01-30 11:10:53.000000000 +0000 blowfish_common.ko
-rw-r--r-- 1 root root  5920 2025-01-30 11:10:53.000000000 +0000 blowfish_generic.ko
-rw-r--r-- 1 root root 20980 2025-01-30 11:10:53.000000000 +0000 camellia_generic.ko
-rw-r--r-- 1 root root  9972 2025-01-30 11:10:53.000000000 +0000 chacha20poly1305.ko
-rw-r--r-- 1 root root  4492 2025-01-30 11:10:54.000000000 +0000 echainiv.ko
-rw-r--r-- 1 root root 14524 2025-01-30 11:10:54.000000000 +0000 twofish_common.ko
-rw-r--r-- 1 root root  8808 2025-01-30 11:10:54.000000000 +0000 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 key
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root  9544 2025-01-30 11:11:00.000000000 +0000 ah4.ko
-rw-r--r-- 1 root root 12332 2025-01-30 11:11:00.000000000 +0000 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 32
-rw-r--r-- 1 root root 32704 2025-01-30 11:11:01.000000000 +0000 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 28
-rw-r--r-- 1 root root 26828 2025-01-30 11:11:03.000000000 +0000 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-01-30 11:26:22.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 lib

/bndl/security/nova/bin:
total 636
-rwxr-xr-x 1 root root 471612 2025-01-30 11:25:19.000000000 +0000 ipsec
lrwxrwxrwx 1 root root      5 2025-01-30 11:25:19.000000000 +0000 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 175580 2025-01-30 11:22:15.000000000 +0000 ssh
lrwxrwxrwx 1 root root      3 2025-01-30 11:22:21.000000000 +0000 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-01-30 11:19:22.000000000 +0000 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2025-01-30 11:19:22.000000000 +0000 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 console

/bndl/security/nova/lib/console:
total 84
-rwxr-xr-x 1 root root 83008 2025-01-30 11:20:15.000000000 +0000 1077936128.mem

/bndl/wifi:
total 8
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:23.000000000 +0000 home
drwxr-xr-x 5 root root 4096 2025-01-30 11:26:23.000000000 +0000 nova

/bndl/wifi/home:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:23.000000000 +0000 web

/bndl/wifi/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 webfig

/bndl/wifi/home/web/webfig:
total 16
-rw-r--r-- 1 root root 8793 2025-01-30 11:15:21.000000000 +0000 wave2-797c789e3769.jg.gz
-rwxr-xr-x 1 root root  103 2025-01-30 11:15:21.000000000 +0000 wave2.info
lrwxrwxrwx 1 root root   24 2025-01-30 11:15:22.000000000 +0000 wave2.jg.gz -> wave2-797c789e3769.jg.gz

/bndl/wifi/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-01-30 11:26:23.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:23.000000000 +0000 lib

/bndl/wifi/nova/bin:
total 1096
-rwxr-xr-x 1 root root 1121076 2025-01-30 11:25:10.000000000 +0000 ww2

/bndl/wifi/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 radius

/bndl/wifi/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 183 2025-01-30 11:14:45.000000000 +0000 wifi.x3

/bndl/wifi/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-01-30 11:14:45.000000000 +0000 wifi.x3

/bndl/wifi/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 console

/bndl/wifi/nova/lib/console:
total 180
-rwxr-xr-x 1 root root 182005 2025-01-30 11:15:28.000000000 +0000 1275068416.mem

/boot:
total 0

/dev:
total 0

/etc:
total 508
-rw-r--r-- 1 root root  48572 2025-01-30 10:35:25.000000000 +0000 al2-7.17.1.fwf
-rw-r--r-- 1 root root  39836 2025-01-30 10:35:27.000000000 +0000 dx3230L-7.17.1.fwf
-rw-r--r-- 1 root root  28788 2025-01-30 10:35:41.000000000 +0000 en7562-7.17.1.fwf
-rw-r--r-- 1 root root  12316 2025-01-30 10:29:24.000000000 +0000 fan_i2c.stm32
-rw-r--r-- 1 root root  35792 2025-01-30 10:35:25.000000000 +0000 ipq4000-7.17.1.fwf
-rw-r--r-- 1 root root  31632 2025-01-30 10:35:26.000000000 +0000 ipq4000L-7.17.1.fwf
-rw-r--r-- 1 root root  36840 2025-01-30 10:35:31.000000000 +0000 ipq5000-7.17.1.fwf
-rw-r--r-- 1 root root  34388 2025-01-30 10:35:26.000000000 +0000 ipq8060-7.17.1.fwf
-rw-r--r-- 1 root root 130747 2025-01-30 10:29:24.000000000 +0000 license
-rw-r--r-- 1 root root  38956 2025-01-30 10:35:40.000000000 +0000 mdm9607-7.17.1.fwf
-rw-r--r-- 1 root root  26408 2025-01-30 10:29:24.000000000 +0000 pse-8bt.stm32
-rw-r--r-- 1 root root  12596 2025-01-30 10:29:24.000000000 +0000 pse-ch8-CRS112.samd20
-rw-r--r-- 1 root root  12548 2025-01-30 10:29:24.000000000 +0000 pse-ch8-CRS328.samd20
-rw-r--r-- 1 root root   4049 2025-01-30 10:29:24.000000000 +0000 stm8_hw_monitor.bin
lrwxrwxrwx 1 root root     24 2025-01-30 11:26:23.000000000 +0000 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2025-01-30 11:26:23.000000000 +0000 web

/home/web:
total 56
drwxr-xr-x 2 root root  4096 2025-01-30 11:26:22.000000000 +0000 assets
-rwxr-xr-x 1 root root 10295 2025-01-30 10:34:27.000000000 +0000 bth-files.html
-rwxr-xr-x 1 root root   600 2025-01-30 10:29:24.000000000 +0000 favicon.png
-rwxr-xr-x 1 root root   689 2025-01-30 10:29:24.000000000 +0000 favicon.svg
-rwxr-xr-x 1 root root   708 2025-01-30 10:29:22.000000000 +0000 graph.css
drwxr-xr-x 2 root root  4096 2025-01-30 11:26:22.000000000 +0000 help
-rwxr-xr-x 1 root root  1254 2025-01-30 10:29:24.000000000 +0000 index2.html
lrwxrwxrwx 1 root root    12 2025-01-30 11:14:30.000000000 +0000 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2025-01-30 10:29:24.000000000 +0000 logo.png
-rw-r--r-- 1 root root  2507 2025-01-30 10:29:24.000000000 +0000 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2025-01-30 10:29:24.000000000 +0000 robots.txt
drwxr-xr-x 2 root root  4096 2025-01-30 11:26:22.000000000 +0000 webfig
drwxr-xr-x 2 root root  4096 2025-01-30 11:26:23.000000000 +0000 winbox

/home/web/assets:
total 160
-rw-r--r-- 1 root root  19040 2025-01-30 10:29:24.000000000 +0000 400.woff2
-rw-r--r-- 1 root root  19156 2025-01-30 10:29:24.000000000 +0000 700.woff2
-rwxr-xr-x 1 root root    799 2025-01-30 10:29:24.000000000 +0000 script-bd71a1293274.js
-rwxr-xr-x 1 root root 117563 2025-01-30 10:29:24.000000000 +0000 style-692511ab2675.css

/home/web/help:
total 4
-rw-r--r-- 1 root root 118 2025-01-30 10:29:24.000000000 +0000 license.html

/home/web/webfig:
total 672
-rwxr-xr-x 1 root root   9157 2025-01-30 10:33:11.000000000 +0000 curve255-541e54a862be.js
-rwxr-xr-x 1 root root     72 2025-01-30 10:38:18.000000000 +0000 icons.info
-rwxr-xr-x 1 root root  23939 2025-01-30 10:29:22.000000000 +0000 icons.png
-rwxr-xr-x 1 root root     55 2025-01-30 10:38:19.000000000 +0000 icons24.info
-rwxr-xr-x 1 root root  39077 2025-01-30 10:29:22.000000000 +0000 icons24.png
-rwxr-xr-x 1 root root     55 2025-01-30 10:38:19.000000000 +0000 icons32.info
-rwxr-xr-x 1 root root  54187 2025-01-30 10:29:22.000000000 +0000 icons32.png
-rwxr-xr-x 1 root root  21902 2025-01-30 10:33:11.000000000 +0000 index.html
lrwxrwxrwx 1 root root     13 2025-01-30 10:33:11.000000000 +0000 list -> /ram/gum.list
-rwxr-xr-x 1 root root 406719 2025-01-30 10:33:11.000000000 +0000 master-e24161e0bd73.js
-rw-r--r-- 1 root root 102085 2025-01-30 10:38:20.000000000 +0000 roteros-d7ce214a2753.jg.gz
-rwxr-xr-x 1 root root    109 2025-01-30 10:38:20.000000000 +0000 roteros.info
lrwxrwxrwx 1 root root     26 2025-01-30 10:38:21.000000000 +0000 roteros.jg.gz -> roteros-d7ce214a2753.jg.gz

/home/web/winbox:
total 0

/lib:
total 1636
-rwxr-xr-x 1 root root 247440 2025-01-30 10:31:23.000000000 +0000 libc.so
-rwxr-xr-x 1 root root  71836 2025-01-30 10:36:41.000000000 +0000 libeap.so
-rwxr-xr-x 1 root root  17740 2025-01-30 10:33:19.000000000 +0000 libjson.so
-rwxr-xr-x 1 root root 141872 2025-01-30 10:35:06.000000000 +0000 librappsup.so
-rwxr-xr-x 1 root root 100532 2025-01-30 10:34:11.000000000 +0000 libubox.so
-rwxr-xr-x 1 root root  67508 2025-01-30 10:33:10.000000000 +0000 libuc++.so
-rwxr-xr-x 1 root root 236696 2025-01-30 10:35:42.000000000 +0000 libucrypto.so
-rwxr-xr-x 1 root root  26148 2025-01-30 10:34:03.000000000 +0000 libufiber.so
-rwxr-xr-x 1 root root  55168 2025-01-30 10:34:09.000000000 +0000 libuhttp.so
-rwxr-xr-x 1 root root 517468 2025-01-30 10:33:53.000000000 +0000 libumsg.so
-rwxr-xr-x 1 root root  32692 2025-01-30 10:35:54.000000000 +0000 liburadius.so
-rwxr-xr-x 1 root root   9496 2025-01-30 10:35:48.000000000 +0000 libuxml++.so
-rwxr-xr-x 1 root root  34608 2025-01-30 10:33:14.000000000 +0000 libwww.so
-rwxr-xr-x 1 root root  13536 2025-01-30 10:33:18.000000000 +0000 libxml.so
-rwxr-xr-x 1 root root  67056 2025-01-30 10:33:19.000000000 +0000 libz.so
drwxr-xr-x 3 root root   4096 2025-01-30 11:26:22.000000000 +0000 modules
lrwxrwxrwx 1 root root     27 2025-01-30 11:26:23.000000000 +0000 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2025-01-30 11:26:22.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 5 root root 4096 2025-01-30 11:26:22.000000000 +0000 drivers
drwxr-xr-x 8 root root 4096 2025-01-30 11:26:22.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 misc
-rw-r--r-- 1 root root 3983 2025-01-30 11:14:23.000000000 +0000 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-01-30 11:26:22.000000000 +0000 net

/lib/modules/5.6.3/drivers:
total 12
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 char
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 crypto
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 net

/lib/modules/5.6.3/drivers/char:
total 52
-rw-r--r-- 1 root root  3820 2025-01-30 11:12:02.000000000 +0000 al_cause.ko
-rw-r--r-- 1 root root  5792 2025-01-30 11:12:01.000000000 +0000 ecnt_wdt.ko
-rw-r--r-- 1 root root 10632 2025-01-30 11:11:49.000000000 +0000 ipqhwmon.ko
-rw-r--r-- 1 root root  6740 2025-01-30 11:11:39.000000000 +0000 ipqwdt.ko
-rw-r--r-- 1 root root  7116 2025-01-30 11:11:53.000000000 +0000 orion_wdt.ko
-rw-r--r-- 1 root root  8536 2025-01-30 11:07:19.000000000 +0000 ticker.ko

/lib/modules/5.6.3/drivers/crypto:
total 116
-rw-r--r-- 1 root root 85492 2025-01-30 11:11:39.000000000 +0000 al_crypto.ko
-rw-r--r-- 1 root root 31520 2025-01-30 11:11:32.000000000 +0000 qca_crypto.ko

/lib/modules/5.6.3/drivers/net:
total 1824
-rw-r--r-- 1 root root  77116 2025-01-30 11:11:21.000000000 +0000 al.ko
-rw-r--r-- 1 root root  38908 2025-01-30 11:09:01.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root  37708 2025-01-30 11:08:07.000000000 +0000 atl1c.ko
-rw-r--r-- 1 root root  15888 2025-01-30 11:11:37.000000000 +0000 dakota_eth.ko
-rw-r--r-- 1 root root  28160 2025-01-30 11:12:04.000000000 +0000 ecnt_eth.ko
-rw-r--r-- 1 root root   8464 2025-01-30 11:09:34.000000000 +0000 imq.ko
-rw-r--r-- 1 root root  39248 2025-01-30 11:09:01.000000000 +0000 marvell_amethyst.ko
-rw-r--r-- 1 root root  33968 2025-01-30 11:09:01.000000000 +0000 mediatek_switch.ko
-rw-r--r-- 1 root root  10284 2025-01-30 11:12:22.000000000 +0000 mpls_fp.ko
-rw-r--r-- 1 root root 164380 2025-01-30 11:12:23.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root  88940 2025-01-30 11:08:36.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root 691368 2025-01-30 11:12:21.000000000 +0000 prestera_dx_mac.ko
-rw-r--r-- 1 root root  49260 2025-01-30 11:11:19.000000000 +0000 qca_nss_gmac.ko
-rw-r--r-- 1 root root  42320 2025-01-30 11:11:35.000000000 +0000 qca_rmnet.ko
-rw-r--r-- 1 root root  34480 2025-01-30 11:11:40.000000000 +0000 qcom_emac.ko
-rw-r--r-- 1 root root 150264 2025-01-30 11:11:49.000000000 +0000 quectel_mhi.ko
-rw-r--r-- 1 root root 132916 2025-01-30 11:11:55.000000000 +0000 quectel_sprd.ko
-rw-r--r-- 1 root root  19924 2025-01-30 11:09:01.000000000 +0000 rtl8367.ko
-rw-r--r-- 1 root root   2688 2025-01-30 11:11:35.000000000 +0000 smem.ko
-rw-r--r-- 1 root root   3840 2025-01-30 11:10:13.000000000 +0000 sram.ko
-rw-r--r-- 1 root root  75012 2025-01-30 11:09:07.000000000 +0000 switch.ko
drwxr-xr-x 2 root root   4096 2025-01-30 11:26:22.000000000 +0000 usb
-rw-r--r-- 1 root root  21504 2025-01-30 11:07:18.000000000 +0000 via-velocity.ko
-rw-r--r-- 1 root root  52452 2025-01-30 11:12:20.000000000 +0000 vxlan2.ko

/lib/modules/5.6.3/drivers/net/usb:
total 168
-rw-r--r-- 1 root root  65016 2025-01-30 11:12:08.000000000 +0000 fp_usbnet.ko
-rw-r--r-- 1 root root 104376 2025-01-30 11:11:57.000000000 +0000 mbim.ko

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-01-30 11:26:22.000000000 +0000 arch
drwxr-xr-x  2 root root 4096 2025-01-30 11:26:22.000000000 +0000 crypto
drwxr-xr-x 11 root root 4096 2025-01-30 11:26:22.000000000 +0000 drivers
drwxr-xr-x 10 root root 4096 2025-01-30 11:26:22.000000000 +0000 fs
drwxr-xr-x  5 root root 4096 2025-01-30 11:26:22.000000000 +0000 lib
drwxr-xr-x 14 root root 4096 2025-01-30 11:26:22.000000000 +0000 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 4 root root 4096 2025-01-30 11:26:22.000000000 +0000 arm

/lib/modules/5.6.3/kernel/arch/arm:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 crypto
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 oprofile

/lib/modules/5.6.3/kernel/arch/arm/crypto:
total 52
-rw-r--r-- 1 root root 22040 2025-01-30 11:10:53.000000000 +0000 chacha-neon.ko
-rw-r--r-- 1 root root 13884 2025-01-30 11:10:53.000000000 +0000 curve25519-neon.ko
-rw-r--r-- 1 root root 10184 2025-01-30 11:10:53.000000000 +0000 poly1305-arm.ko

/lib/modules/5.6.3/kernel/arch/arm/oprofile:
total 36
-rw-r--r-- 1 root root 33388 2025-01-30 11:10:53.000000000 +0000 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 44
-rw-r--r-- 1 root root  3920 2025-01-30 11:10:53.000000000 +0000 arc4.ko
-rw-r--r-- 1 root root 13072 2025-01-30 11:10:53.000000000 +0000 ccm.ko
-rw-r--r-- 1 root root  5600 2025-01-30 11:10:53.000000000 +0000 cmac.ko
-rw-r--r-- 1 root root  4776 2025-01-30 11:10:53.000000000 +0000 des_generic.ko
-rw-r--r-- 1 root root  5876 2025-01-30 11:10:54.000000000 +0000 md4.ko

/lib/modules/5.6.3/kernel/drivers:
total 36
drwxr-xr-x  2 root root 4096 2025-01-30 11:26:22.000000000 +0000 ata
drwxr-xr-x  3 root root 4096 2025-01-30 11:26:22.000000000 +0000 crypto
drwxr-xr-x  2 root root 4096 2025-01-30 11:26:22.000000000 +0000 hid
drwxr-xr-x  4 root root 4096 2025-01-30 11:26:22.000000000 +0000 mmc
drwxr-xr-x  6 root root 4096 2025-01-30 11:26:22.000000000 +0000 net
drwxr-xr-x  3 root root 4096 2025-01-30 11:26:22.000000000 +0000 pci
drwxr-xr-x  3 root root 4096 2025-01-30 11:26:22.000000000 +0000 phy
drwxr-xr-x  2 root root 4096 2025-01-30 11:26:22.000000000 +0000 scsi
drwxr-xr-x 13 root root 4096 2025-01-30 11:26:22.000000000 +0000 usb

/lib/modules/5.6.3/kernel/drivers/ata:
total 244
-rw-r--r-- 1 root root  33320 2025-01-30 11:10:54.000000000 +0000 ahci.ko
-rw-r--r-- 1 root root  30488 2025-01-30 11:10:54.000000000 +0000 libahci.ko
-rw-r--r-- 1 root root 179100 2025-01-30 11:10:54.000000000 +0000 libata.ko

/lib/modules/5.6.3/kernel/drivers/crypto:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 qce

/lib/modules/5.6.3/kernel/drivers/crypto/qce:
total 32
-rw-r--r-- 1 root root 31620 2025-01-30 11:10:54.000000000 +0000 qcrypto.ko

/lib/modules/5.6.3/kernel/drivers/hid:
total 68
-rw-r--r-- 1 root root 67824 2025-01-30 11:10:54.000000000 +0000 hid.ko

/lib/modules/5.6.3/kernel/drivers/mmc:
total 8
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 core
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 host

/lib/modules/5.6.3/kernel/drivers/mmc/core:
total 140
-rw-r--r-- 1 root root  33752 2025-01-30 11:10:54.000000000 +0000 mmc_block.ko
-rw-r--r-- 1 root root 105592 2025-01-30 11:10:54.000000000 +0000 mmc_core.ko

/lib/modules/5.6.3/kernel/drivers/mmc/host:
total 104
-rw-r--r-- 1 root root 13972 2025-01-30 11:10:55.000000000 +0000 cqhci.ko
-rw-r--r-- 1 root root 13640 2025-01-30 11:10:55.000000000 +0000 mmc_spi.ko
-rw-r--r-- 1 root root  3104 2025-01-30 11:10:55.000000000 +0000 of_mmc_spi.ko
-rw-r--r-- 1 root root 19948 2025-01-30 11:10:55.000000000 +0000 sdhci-msm.ko
-rw-r--r-- 1 root root  6364 2025-01-30 11:10:55.000000000 +0000 sdhci-pltfm.ko
-rw-r--r-- 1 root root 40856 2025-01-30 11:10:55.000000000 +0000 sdhci.ko

/lib/modules/5.6.3/kernel/drivers/net:
total 152
drwxr-xr-x 2 root root  4096 2025-01-30 11:26:22.000000000 +0000 bonding
-rw-r--r-- 1 root root 35560 2025-01-30 11:10:55.000000000 +0000 macsec.ko
-rw-r--r-- 1 root root 20476 2025-01-30 11:10:55.000000000 +0000 macvlan.ko
drwxr-xr-x 2 root root  4096 2025-01-30 11:26:22.000000000 +0000 slip
-rw-r--r-- 1 root root 39716 2025-01-30 11:10:55.000000000 +0000 tun.ko
drwxr-xr-x 2 root root  4096 2025-01-30 11:26:22.000000000 +0000 usb
-rw-r--r-- 1 root root 17468 2025-01-30 11:10:55.000000000 +0000 veth.ko
-rw-r--r-- 1 root root 19272 2025-01-30 11:10:55.000000000 +0000 vrf.ko
drwxr-xr-x 2 root root  4096 2025-01-30 11:26:22.000000000 +0000 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 124
-rw-r--r-- 1 root root 123376 2025-01-30 11:10:55.000000000 +0000 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 5796 2025-01-30 11:10:55.000000000 +0000 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 184
-rw-r--r-- 1 root root 19232 2025-01-30 11:10:55.000000000 +0000 ax88179_178a.ko
-rw-r--r-- 1 root root 37140 2025-01-30 11:10:55.000000000 +0000 hso.ko
-rw-r--r-- 1 root root 55828 2025-01-30 11:10:55.000000000 +0000 r8152.ko
-rw-r--r-- 1 root root 12856 2025-01-30 11:10:55.000000000 +0000 sierra_net.ko
-rw-r--r-- 1 root root 24260 2025-01-30 11:10:55.000000000 +0000 smsc95xx.ko
-rw-r--r-- 1 root root 26972 2025-01-30 11:10:55.000000000 +0000 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 80
-rw-r--r-- 1 root root 80960 2025-01-30 11:10:55.000000000 +0000 wireguard.ko

/lib/modules/5.6.3/kernel/drivers/pci:
total 4
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 controller

/lib/modules/5.6.3/kernel/drivers/pci/controller:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 dwc

/lib/modules/5.6.3/kernel/drivers/pci/controller/dwc:
total 36
-rw-r--r-- 1 root root 35628 2025-01-30 11:10:56.000000000 +0000 pcie-qcom.ko

/lib/modules/5.6.3/kernel/drivers/phy:
total 12
-rw-r--r-- 1 root root 7500 2025-01-30 11:10:56.000000000 +0000 phy-qcom-dwc3.ko
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 qualcomm

/lib/modules/5.6.3/kernel/drivers/phy/qualcomm:
total 8
-rw-r--r-- 1 root root 6472 2025-01-30 11:10:56.000000000 +0000 phy-qcom-usb-hs.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 156
-rw-r--r-- 1 root root 117576 2025-01-30 11:10:56.000000000 +0000 scsi_mod.ko
-rw-r--r-- 1 root root  39080 2025-01-30 11:10:56.000000000 +0000 sd_mod.ko

/lib/modules/5.6.3/kernel/drivers/usb:
total 44
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 chipidea
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 class
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 common
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 core
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 dwc3
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 host
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 mu3_phy
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 mu3h
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 phy
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 serial
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 storage

/lib/modules/5.6.3/kernel/drivers/usb/chipidea:
total 32
-rw-r--r-- 1 root root 20840 2025-01-30 11:10:56.000000000 +0000 ci_hdrc.ko
-rw-r--r-- 1 root root  7064 2025-01-30 11:10:56.000000000 +0000 ci_hdrc_msm.ko

/lib/modules/5.6.3/kernel/drivers/usb/class:
total 28
-rw-r--r-- 1 root root 27632 2025-01-30 11:10:56.000000000 +0000 cdc-acm.ko

/lib/modules/5.6.3/kernel/drivers/usb/common:
total 16
-rw-r--r-- 1 root root 6620 2025-01-30 11:10:56.000000000 +0000 ulpi.ko
-rw-r--r-- 1 root root 7020 2025-01-30 11:10:56.000000000 +0000 usb-common.ko

/lib/modules/5.6.3/kernel/drivers/usb/core:
total 176
-rw-r--r-- 1 root root 176484 2025-01-30 11:10:57.000000000 +0000 usbcore.ko

/lib/modules/5.6.3/kernel/drivers/usb/dwc3:
total 44
-rw-r--r-- 1 root root  8916 2025-01-30 11:10:57.000000000 +0000 dwc3-of-simple.ko
-rw-r--r-- 1 root root 12104 2025-01-30 11:10:57.000000000 +0000 dwc3-qcom.ko
-rw-r--r-- 1 root root 19612 2025-01-30 11:10:57.000000000 +0000 dwc3.ko

/lib/modules/5.6.3/kernel/drivers/usb/host:
total 160
-rw-r--r-- 1 root root  39780 2025-01-30 11:10:57.000000000 +0000 ehci-hcd.ko
-rw-r--r-- 1 root root   7592 2025-01-30 11:10:57.000000000 +0000 ehci-orion.ko
-rw-r--r-- 1 root root 102144 2025-01-30 11:10:57.000000000 +0000 xhci-hcd.ko
-rw-r--r-- 1 root root  11576 2025-01-30 11:10:57.000000000 +0000 xhci-plat-hcd.ko

/lib/modules/5.6.3/kernel/drivers/usb/mu3_phy:
total 8
-rw-r--r-- 1 root root 6052 2025-01-30 11:10:57.000000000 +0000 mtk-phy.ko

/lib/modules/5.6.3/kernel/drivers/usb/mu3h:
total 116
-rw-r--r-- 1 root root 105656 2025-01-30 11:10:57.000000000 +0000 mu3h-xhci-hcd.ko
-rw-r--r-- 1 root root   8808 2025-01-30 11:10:57.000000000 +0000 mu3h-xhci-plat-hcd.ko

/lib/modules/5.6.3/kernel/drivers/usb/phy:
total 56
-rw-r--r-- 1 root root 11352 2025-01-30 11:10:57.000000000 +0000 phy-msm-qusb.ko
-rw-r--r-- 1 root root 15760 2025-01-30 11:10:57.000000000 +0000 phy-msm-ssusb-qmp.ko
-rw-r--r-- 1 root root  6644 2025-01-30 11:10:57.000000000 +0000 phy-qca-baldur.ko
-rw-r--r-- 1 root root  6320 2025-01-30 11:10:57.000000000 +0000 phy-qca-m31.ko
-rw-r--r-- 1 root root 11192 2025-01-30 11:10:57.000000000 +0000 phy-qca-uniphy.ko

/lib/modules/5.6.3/kernel/drivers/usb/serial:
total 320
-rw-r--r-- 1 root root   9136 2025-01-30 11:10:57.000000000 +0000 ch341.ko
-rw-r--r-- 1 root root  24832 2025-01-30 11:10:57.000000000 +0000 cp210x.ko
-rw-r--r-- 1 root root  78228 2025-01-30 11:10:57.000000000 +0000 ftdi_sio.ko
-rw-r--r-- 1 root root   6032 2025-01-30 11:10:57.000000000 +0000 ipw.ko
-rw-r--r-- 1 root root 102004 2025-01-30 11:10:57.000000000 +0000 option.ko
-rw-r--r-- 1 root root  16236 2025-01-30 11:10:57.000000000 +0000 pl2303.ko
-rw-r--r-- 1 root root  14780 2025-01-30 11:10:57.000000000 +0000 qcserial.ko
-rw-r--r-- 1 root root  14828 2025-01-30 11:10:57.000000000 +0000 sierra.ko
-rw-r--r-- 1 root root   8564 2025-01-30 11:10:57.000000000 +0000 usb_wwan.ko
-rw-r--r-- 1 root root  29816 2025-01-30 11:10:57.000000000 +0000 usbserial.ko

/lib/modules/5.6.3/kernel/drivers/usb/storage:
total 72
-rw-r--r-- 1 root root 72756 2025-01-30 11:10:57.000000000 +0000 usb-storage.ko

/lib/modules/5.6.3/kernel/fs:
total 40
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 cifs
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 exfat
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 ext4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 fat
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 jbd2
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 ksmbd
-rw-r--r-- 1 root root 8144 2025-01-30 11:10:58.000000000 +0000 mbcache.ko
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 nls
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 ntfs3

/lib/modules/5.6.3/kernel/fs/cifs:
total 456
-rw-r--r-- 1 root root 463572 2025-01-30 11:10:58.000000000 +0000 cifs.ko

/lib/modules/5.6.3/kernel/fs/exfat:
total 72
-rw-r--r-- 1 root root 72696 2025-01-30 11:10:58.000000000 +0000 exfat.ko

/lib/modules/5.6.3/kernel/fs/ext4:
total 400
-rw-r--r-- 1 root root 407760 2025-01-30 11:10:58.000000000 +0000 ext4.ko

/lib/modules/5.6.3/kernel/fs/fat:
total 84
-rw-r--r-- 1 root root 67176 2025-01-30 11:10:58.000000000 +0000 fat.ko
-rw-r--r-- 1 root root 13304 2025-01-30 11:10:58.000000000 +0000 vfat.ko

/lib/modules/5.6.3/kernel/fs/jbd2:
total 72
-rw-r--r-- 1 root root 71080 2025-01-30 11:10:58.000000000 +0000 jbd2.ko

/lib/modules/5.6.3/kernel/fs/ksmbd:
total 220
-rw-r--r-- 1 root root 222892 2025-01-30 11:10:58.000000000 +0000 ksmbd.ko

/lib/modules/5.6.3/kernel/fs/nls:
total 32
-rw-r--r-- 1 root root 8424 2025-01-30 11:10:59.000000000 +0000 nls_base.ko
-rw-r--r-- 1 root root 7420 2025-01-30 11:10:59.000000000 +0000 nls_cp437.ko
-rw-r--r-- 1 root root 5836 2025-01-30 11:10:59.000000000 +0000 nls_iso8859-1.ko
-rw-r--r-- 1 root root 3516 2025-01-30 11:10:59.000000000 +0000 nls_utf8.ko

/lib/modules/5.6.3/kernel/fs/ntfs3:
total 196
-rw-r--r-- 1 root root 197904 2025-01-30 11:10:59.000000000 +0000 ntfs3.ko

/lib/modules/5.6.3/kernel/lib:
total 44
-rw-r--r-- 1 root root 4204 2025-01-30 11:10:59.000000000 +0000 asn1_decoder.ko
-rw-r--r-- 1 root root 3740 2025-01-30 11:10:59.000000000 +0000 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 crypto
-rw-r--r-- 1 root root 4464 2025-01-30 11:10:59.000000000 +0000 oid_registry.ko
-rw-r--r-- 1 root root 4236 2025-01-30 11:10:59.000000000 +0000 ts_bm.ko
-rw-r--r-- 1 root root 4096 2025-01-30 11:10:59.000000000 +0000 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 64
-rw-r--r-- 1 root root  2536 2025-01-30 11:10:59.000000000 +0000 libarc4.ko
-rw-r--r-- 1 root root  7172 2025-01-30 11:10:59.000000000 +0000 libblake2s-generic.ko
-rw-r--r-- 1 root root  4340 2025-01-30 11:10:59.000000000 +0000 libblake2s.ko
-rw-r--r-- 1 root root  7348 2025-01-30 11:10:59.000000000 +0000 libchacha20poly1305.ko
-rw-r--r-- 1 root root  9632 2025-01-30 11:10:59.000000000 +0000 libcurve25519-generic.ko
-rw-r--r-- 1 root root  2508 2025-01-30 11:10:59.000000000 +0000 libcurve25519.ko
-rw-r--r-- 1 root root 17708 2025-01-30 11:10:59.000000000 +0000 libdes.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18088 2025-01-30 11:10:59.000000000 +0000 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14516 2025-01-30 11:10:59.000000000 +0000 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 48
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 802
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 8021q
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 ipv4
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 ipv6
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 mpls
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 qrtr
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 rfkill
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 sched
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 unix
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 xfrm

/lib/modules/5.6.3/kernel/net/802:
total 12
-rw-r--r-- 1 root root 10196 2025-01-30 11:10:59.000000000 +0000 mrp.ko

/lib/modules/5.6.3/kernel/net/8021q:
total 28
-rw-r--r-- 1 root root 26028 2025-01-30 11:10:59.000000000 +0000 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 104
-rw-r--r-- 1 root root  3448 2025-01-30 11:11:00.000000000 +0000 ebt_802_3.ko
-rw-r--r-- 1 root root  4180 2025-01-30 11:11:00.000000000 +0000 ebt_arp.ko
-rw-r--r-- 1 root root  3872 2025-01-30 11:11:00.000000000 +0000 ebt_arpreply.ko
-rw-r--r-- 1 root root  3844 2025-01-30 11:11:00.000000000 +0000 ebt_dnat.ko
-rw-r--r-- 1 root root  4308 2025-01-30 11:11:00.000000000 +0000 ebt_ip.ko
-rw-r--r-- 1 root root  4476 2025-01-30 11:11:00.000000000 +0000 ebt_ip6.ko
-rw-r--r-- 1 root root  4344 2025-01-30 11:11:00.000000000 +0000 ebt_limit.ko
-rw-r--r-- 1 root root  3384 2025-01-30 11:11:00.000000000 +0000 ebt_mark.ko
-rw-r--r-- 1 root root  3316 2025-01-30 11:11:00.000000000 +0000 ebt_mark_m.ko
-rw-r--r-- 1 root root  3324 2025-01-30 11:11:00.000000000 +0000 ebt_pkttype.ko
-rw-r--r-- 1 root root  3788 2025-01-30 11:11:00.000000000 +0000 ebt_redirect.ko
-rw-r--r-- 1 root root  3780 2025-01-30 11:11:00.000000000 +0000 ebt_snat.ko
-rw-r--r-- 1 root root  4732 2025-01-30 11:11:00.000000000 +0000 ebt_stp.ko
-rw-r--r-- 1 root root  3728 2025-01-30 11:11:00.000000000 +0000 ebt_vlan.ko
-rw-r--r-- 1 root root  4052 2025-01-30 11:11:00.000000000 +0000 ebtable_filter.ko
-rw-r--r-- 1 root root  4044 2025-01-30 11:11:00.000000000 +0000 ebtable_nat.ko
-rw-r--r-- 1 root root 16536 2025-01-30 11:11:00.000000000 +0000 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 17208 2025-01-30 11:11:00.000000000 +0000 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2025-01-30 11:26:22.000000000 +0000 netfilter
-rw-r--r-- 1 root root 14276 2025-01-30 11:11:00.000000000 +0000 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 96
-rw-r--r-- 1 root root 17340 2025-01-30 11:11:00.000000000 +0000 ip_tables.ko
-rw-r--r-- 1 root root  4656 2025-01-30 11:11:00.000000000 +0000 ipt_REJECT.ko
-rw-r--r-- 1 root root  4752 2025-01-30 11:11:00.000000000 +0000 iptable_filter.ko
-rw-r--r-- 1 root root  4728 2025-01-30 11:11:00.000000000 +0000 iptable_mangle.ko
-rw-r--r-- 1 root root  4440 2025-01-30 11:11:00.000000000 +0000 iptable_nat.ko
-rw-r--r-- 1 root root  4920 2025-01-30 11:11:00.000000000 +0000 iptable_raw.ko
-rw-r--r-- 1 root root  4284 2025-01-30 11:11:00.000000000 +0000 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root 10036 2025-01-30 11:11:00.000000000 +0000 nf_nat_h323.ko
-rw-r--r-- 1 root root  5644 2025-01-30 11:11:00.000000000 +0000 nf_nat_pptp.ko
-rw-r--r-- 1 root root  4388 2025-01-30 11:11:00.000000000 +0000 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 448
-rw-r--r-- 1 root root   9656 2025-01-30 11:11:00.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root  11676 2025-01-30 11:11:00.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root   3788 2025-01-30 11:11:00.000000000 +0000 ip6_udp_tunnel.ko
-rw-r--r-- 1 root root 415104 2025-01-30 11:11:01.000000000 +0000 ipv6.ko
drwxr-xr-x 2 root root   4096 2025-01-30 11:26:22.000000000 +0000 netfilter
-rw-r--r-- 1 root root   5652 2025-01-30 11:11:01.000000000 +0000 tunnel6.ko

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 100
-rw-r--r-- 1 root root 17828 2025-01-30 11:11:00.000000000 +0000 ip6_tables.ko
-rw-r--r-- 1 root root  4568 2025-01-30 11:11:01.000000000 +0000 ip6t_NPT.ko
-rw-r--r-- 1 root root  4660 2025-01-30 11:11:01.000000000 +0000 ip6t_REJECT.ko
-rw-r--r-- 1 root root  3532 2025-01-30 11:11:01.000000000 +0000 ip6t_eui64.ko
-rw-r--r-- 1 root root  4224 2025-01-30 11:11:01.000000000 +0000 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  4792 2025-01-30 11:11:01.000000000 +0000 ip6table_filter.ko
-rw-r--r-- 1 root root  4928 2025-01-30 11:11:01.000000000 +0000 ip6table_mangle.ko
-rw-r--r-- 1 root root  4448 2025-01-30 11:11:01.000000000 +0000 ip6table_nat.ko
-rw-r--r-- 1 root root  4928 2025-01-30 11:11:01.000000000 +0000 ip6table_raw.ko
-rw-r--r-- 1 root root 11608 2025-01-30 11:11:01.000000000 +0000 nf_defrag_ipv6.ko
-rw-r--r-- 1 root root  5108 2025-01-30 11:11:01.000000000 +0000 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 52
-rw-r--r-- 1 root root  5892 2025-01-30 11:11:01.000000000 +0000 mpls_iptunnel.ko
-rw-r--r-- 1 root root 43200 2025-01-30 11:11:01.000000000 +0000 mpls_router.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 588
-rw-r--r-- 1 root root 116808 2025-01-30 11:11:01.000000000 +0000 nf_conntrack.ko
-rw-r--r-- 1 root root  10636 2025-01-30 11:11:01.000000000 +0000 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root  41300 2025-01-30 11:11:01.000000000 +0000 nf_conntrack_h323.ko
-rw-r--r-- 1 root root   8796 2025-01-30 11:11:01.000000000 +0000 nf_conntrack_irc.ko
-rw-r--r-- 1 root root  35584 2025-01-30 11:11:01.000000000 +0000 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root   9780 2025-01-30 11:11:01.000000000 +0000 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root   8708 2025-01-30 11:11:01.000000000 +0000 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root  28292 2025-01-30 11:11:01.000000000 +0000 nf_conntrack_sip.ko
-rw-r--r-- 1 root root   7508 2025-01-30 11:11:01.000000000 +0000 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root  31152 2025-01-30 11:11:01.000000000 +0000 nf_nat.ko
-rw-r--r-- 1 root root   5396 2025-01-30 11:11:01.000000000 +0000 nf_nat_ftp.ko
-rw-r--r-- 1 root root   5104 2025-01-30 11:11:01.000000000 +0000 nf_nat_irc.ko
-rw-r--r-- 1 root root   8612 2025-01-30 11:11:01.000000000 +0000 nf_nat_rtsp.ko
-rw-r--r-- 1 root root  12880 2025-01-30 11:11:01.000000000 +0000 nf_nat_sip.ko
-rw-r--r-- 1 root root   3784 2025-01-30 11:11:01.000000000 +0000 nf_nat_tftp.ko
-rw-r--r-- 1 root root   9872 2025-01-30 11:11:01.000000000 +0000 nfnetlink.ko
-rw-r--r-- 1 root root  25852 2025-01-30 11:11:01.000000000 +0000 x_tables.ko
-rw-r--r-- 1 root root   7964 2025-01-30 11:11:02.000000000 +0000 xt_CT.ko
-rw-r--r-- 1 root root   4736 2025-01-30 11:11:02.000000000 +0000 xt_DSCP.ko
-rw-r--r-- 1 root root   4244 2025-01-30 11:11:02.000000000 +0000 xt_HL.ko
-rw-r--r-- 1 root root   4372 2025-01-30 11:11:02.000000000 +0000 xt_MASQUERADE.ko
-rw-r--r-- 1 root root   4296 2025-01-30 11:11:02.000000000 +0000 xt_NETMAP.ko
-rw-r--r-- 1 root root   4076 2025-01-30 11:11:02.000000000 +0000 xt_REDIRECT.ko
-rw-r--r-- 1 root root   6908 2025-01-30 11:11:02.000000000 +0000 xt_TCPMSS.ko
-rw-r--r-- 1 root root   5824 2025-01-30 11:11:02.000000000 +0000 xt_addrtype.ko
-rw-r--r-- 1 root root   4876 2025-01-30 11:11:02.000000000 +0000 xt_connbytes.ko
-rw-r--r-- 1 root root   5472 2025-01-30 11:11:02.000000000 +0000 xt_connmark.ko
-rw-r--r-- 1 root root   5900 2025-01-30 11:11:02.000000000 +0000 xt_conntrack.ko
-rw-r--r-- 1 root root   3940 2025-01-30 11:11:02.000000000 +0000 xt_dscp.ko
-rw-r--r-- 1 root root  18016 2025-01-30 11:11:02.000000000 +0000 xt_hashlimit.ko
-rw-r--r-- 1 root root   4276 2025-01-30 11:11:02.000000000 +0000 xt_helper.ko
-rw-r--r-- 1 root root   3808 2025-01-30 11:11:02.000000000 +0000 xt_hl.ko
-rw-r--r-- 1 root root   3568 2025-01-30 11:11:02.000000000 +0000 xt_length.ko
-rw-r--r-- 1 root root   3320 2025-01-30 11:11:02.000000000 +0000 xt_mac.ko
-rw-r--r-- 1 root root   3712 2025-01-30 11:11:02.000000000 +0000 xt_mark.ko
-rw-r--r-- 1 root root   4308 2025-01-30 11:11:02.000000000 +0000 xt_multiport.ko
-rw-r--r-- 1 root root   6080 2025-01-30 11:11:02.000000000 +0000 xt_nat.ko
-rw-r--r-- 1 root root   4788 2025-01-30 11:11:02.000000000 +0000 xt_physdev.ko
-rw-r--r-- 1 root root   5420 2025-01-30 11:11:02.000000000 +0000 xt_policy.ko
-rw-r--r-- 1 root root   3256 2025-01-30 11:11:02.000000000 +0000 xt_realm.ko
-rw-r--r-- 1 root root   4032 2025-01-30 11:11:02.000000000 +0000 xt_statistic.ko
-rw-r--r-- 1 root root   3724 2025-01-30 11:11:02.000000000 +0000 xt_string.ko
-rw-r--r-- 1 root root   3824 2025-01-30 11:11:02.000000000 +0000 xt_tcpmss.ko
-rw-r--r-- 1 root root   4752 2025-01-30 11:11:02.000000000 +0000 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/qrtr:
total 8
-rw-r--r-- 1 root root 4516 2025-01-30 11:11:02.000000000 +0000 qrtr-smd.ko

/lib/modules/5.6.3/kernel/net/rfkill:
total 16
-rw-r--r-- 1 root root 16292 2025-01-30 11:11:02.000000000 +0000 rfkill.ko

/lib/modules/5.6.3/kernel/net/sched:
total 84
-rw-r--r-- 1 root root 26996 2025-01-30 11:11:02.000000000 +0000 sch_cake.ko
-rw-r--r-- 1 root root  8128 2025-01-30 11:11:02.000000000 +0000 sch_codel.ko
-rw-r--r-- 1 root root 10912 2025-01-30 11:11:02.000000000 +0000 sch_fq_codel.ko
-rw-r--r-- 1 root root 24156 2025-01-30 11:11:02.000000000 +0000 sch_htb.ko
-rw-r--r-- 1 root root 10236 2025-01-30 11:11:02.000000000 +0000 sch_red.ko

/lib/modules/5.6.3/kernel/net/unix:
total 32
-rw-r--r-- 1 root root 32708 2025-01-30 11:11:03.000000000 +0000 unix.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 7688 2025-01-30 11:11:03.000000000 +0000 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 360
-rw-r--r-- 1 root root 10056 2025-01-30 11:12:02.000000000 +0000 airoha_thermal.ko
-rw-r--r-- 1 root root  5260 2025-01-30 11:11:49.000000000 +0000 al_cpufreq.ko
-rw-r--r-- 1 root root  6172 2025-01-30 11:11:09.000000000 +0000 alpine_sd.ko
-rw-r--r-- 1 root root 10580 2025-01-30 11:07:21.000000000 +0000 btest.ko
-rw-r--r-- 1 root root  6712 2025-01-30 11:11:53.000000000 +0000 dot1x.ko
-rw-r--r-- 1 root root 31108 2025-01-30 11:11:38.000000000 +0000 fan_i2c.ko
-rw-r--r-- 1 root root 50004 2025-01-30 11:07:49.000000000 +0000 flash.ko
-rw-r--r-- 1 root root  5372 2025-01-30 11:10:48.000000000 +0000 jiffies.ko
-rw-r--r-- 1 root root 14528 2025-01-30 11:09:06.000000000 +0000 lcd.ko
-rw-r--r-- 1 root root  3588 2025-01-30 11:07:46.000000000 +0000 ledgroup.ko
-rw-r--r-- 1 root root 10064 2025-01-30 11:07:14.000000000 +0000 logring.ko
-rw-r--r-- 1 root root 22384 2025-01-30 11:08:03.000000000 +0000 mesh.ko
-rw-r--r-- 1 root root 10052 2025-01-30 11:07:12.000000000 +0000 panics.ko
-rw-r--r-- 1 root root 11244 2025-01-30 11:07:16.000000000 +0000 poe_simple.ko
-rw-r--r-- 1 root root 31288 2025-01-30 11:07:13.000000000 +0000 poe_v4.ko
-rw-r--r-- 1 root root  7544 2025-01-30 11:10:14.000000000 +0000 rb.ko
-rw-r--r-- 1 root root  6348 2025-01-30 11:10:57.000000000 +0000 romon.ko
-rw-r--r-- 1 root root  6148 2025-01-30 11:07:51.000000000 +0000 snif.ko
-rw-r--r-- 1 root root 25352 2025-01-30 11:11:37.000000000 +0000 stm8_fan.ko
-rw-r--r-- 1 root root 25764 2025-01-30 11:09:20.000000000 +0000 traffic_gen.ko
-rw-r--r-- 1 root root 18156 2025-01-30 11:09:06.000000000 +0000 ts.ko
-rw-r--r-- 1 root root  6784 2025-01-30 11:07:51.000000000 +0000 ulog.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-01-30 11:26:22.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 sched

/lib/modules/5.6.3/net/bridge:
total 184
-rw-r--r-- 1 root root 159436 2025-01-30 11:11:29.000000000 +0000 bridge2.ko
-rw-r--r-- 1 root root  17108 2025-01-30 11:11:29.000000000 +0000 bridge2_netfilter.ko
-rw-r--r-- 1 root root   3256 2025-01-30 11:07:46.000000000 +0000 ebt_snif.ko
-rw-r--r-- 1 root root   3440 2025-01-30 11:07:46.000000000 +0000 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 28
-rw-r--r-- 1 root root 4072 2025-01-30 11:07:17.000000000 +0000 ipt_SAME.ko
-rw-r--r-- 1 root root 6552 2025-01-30 11:07:20.000000000 +0000 ipt_TARPIT.ko
-rw-r--r-- 1 root root 5016 2025-01-30 11:07:19.000000000 +0000 ipt_psd.ko
-rw-r--r-- 1 root root 3352 2025-01-30 11:07:46.000000000 +0000 ipt_snif.ko
-rw-r--r-- 1 root root 3832 2025-01-30 11:07:46.000000000 +0000 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 60
-rw-r--r-- 1 root root  2564 2025-01-30 11:08:29.000000000 +0000 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  2564 2025-01-30 11:08:29.000000000 +0000 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 10400 2025-01-30 11:08:38.000000000 +0000 xt_ein.ko
-rw-r--r-- 1 root root 11640 2025-01-30 11:07:25.000000000 +0000 xt_layer7.ko
-rw-r--r-- 1 root root 17236 2025-01-30 11:08:38.000000000 +0000 xt_misc.ko
-rw-r--r-- 1 root root  4104 2025-01-30 11:07:22.000000000 +0000 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 76
-rw-r--r-- 1 root root  5580 2025-01-30 11:07:35.000000000 +0000 cls_fw.ko
-rw-r--r-- 1 root root 11032 2025-01-30 11:07:40.000000000 +0000 cls_linear.ko
-rw-r--r-- 1 root root 11588 2025-01-30 11:07:55.000000000 +0000 proto_agr.ko
-rw-r--r-- 1 root root 17064 2025-01-30 11:07:55.000000000 +0000 sch_agr.ko
-rw-r--r-- 1 root root 10848 2025-01-30 11:07:21.000000000 +0000 sch_pcq.ko
-rw-r--r-- 1 root root  9204 2025-01-30 11:11:00.000000000 +0000 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2025-01-30 11:26:22.000000000 +0000 bin
drwxr-xr-x 11 root root 4096 2025-01-30 11:26:22.000000000 +0000 etc
drwxr-xr-x  5 root root 4096 2025-01-30 11:26:22.000000000 +0000 lib
lrwxrwxrwx  1 root root    8 2025-01-30 11:26:23.000000000 +0000 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2025-01-30 11:26:23.000000000 +0000 store -> /rw/store

/nova/bin:
total 10444
-rwxr-xr-x 1 root root   26180 2025-01-30 10:34:02.000000000 +0000 agent
-rwxr-xr-x 1 root root   13720 2025-01-30 10:33:59.000000000 +0000 arpd
-rwxr-xr-x 1 root root   18052 2025-01-30 10:36:15.000000000 +0000 backup
-rwxr-xr-x 1 root root  314248 2025-01-30 10:38:45.000000000 +0000 bridge2
-rwxr-xr-x 1 root root   67604 2025-01-30 10:36:10.000000000 +0000 btest
-rwxr-xr-x 1 root root   55172 2025-01-30 10:34:41.000000000 +0000 bth
-rwxr-xr-x 1 root root  767236 2025-01-30 10:37:37.000000000 +0000 cerm
lrwxrwxrwx 1 root root       4 2025-01-30 10:37:46.000000000 +0000 cerm-worker -> cerm
-rwxr-xr-x 1 root root  157988 2025-01-30 10:37:30.000000000 +0000 cloud
-rwxr-xr-x 1 root root   87804 2025-01-30 10:35:59.000000000 +0000 crossfig
-rwxr-xr-x 1 root root   63508 2025-01-30 10:37:19.000000000 +0000 detnet
-rwxr-xr-x 1 root root   75812 2025-01-30 10:34:41.000000000 +0000 discover
-rwxr-xr-x 1 root root  256692 2025-01-30 10:37:57.000000000 +0000 diskd
-rwxr-xr-x 1 root root  104640 2025-01-30 10:38:13.000000000 +0000 dot1x
-rwxr-xr-x 1 root root   42996 2025-01-30 10:36:04.000000000 +0000 email
-rwxr-xr-x 1 root root   80072 2025-01-30 10:36:29.000000000 +0000 fileman
-rwxr-xr-x 1 root root   34480 2025-01-30 10:34:03.000000000 +0000 ftpd
-rwxr-xr-x 1 root root  144956 2025-01-30 10:34:56.000000000 +0000 graphing
-rwxr-xr-x 1 root root    5212 2025-01-30 10:37:46.000000000 +0000 havecardbus
-rwxr-xr-x 1 root root   59208 2025-01-30 10:35:48.000000000 +0000 igmpproxy
-rwxr-xr-x 1 root root   71540 2025-01-30 10:37:32.000000000 +0000 installer
-rwxr-xr-x 1 root root   30340 2025-01-30 10:37:58.000000000 +0000 ippool
-rwxr-xr-x 1 root root   51068 2025-01-30 10:36:22.000000000 +0000 keyman
-rwxr-xr-x 1 root root   46928 2025-01-30 10:34:36.000000000 +0000 kidcontrol
-rwxr-xr-x 1 root root  219324 2025-01-30 10:35:03.000000000 +0000 lcdstat
-rwxr-xr-x 1 root root   71812 2025-01-30 10:36:45.000000000 +0000 led
-rwxr-xr-x 1 root root  112616 2025-01-30 10:38:00.000000000 +0000 letsencrypt
-rwxr-xr-x 1 root root   79884 2025-01-30 10:36:17.000000000 +0000 loader
-rwxr-xr-x 1 root root   71764 2025-01-30 10:34:08.000000000 +0000 log
-rwxr-xr-x 1 root root  150128 2025-01-30 10:39:46.000000000 +0000 login
-rwxr-xr-x 1 root root   50824 2025-01-30 10:34:03.000000000 +0000 logmaker
-rwxr-xr-x 1 root root   22132 2025-01-30 10:34:01.000000000 +0000 macping
-rwxr-xr-x 1 root root   38756 2025-01-30 10:36:31.000000000 +0000 mactel
-rwxr-xr-x 1 root root   22256 2025-01-30 10:34:01.000000000 +0000 mepty
-rwxr-xr-x 1 root root   79708 2025-01-30 10:34:46.000000000 +0000 mesh
-rwxr-xr-x 1 root root   63132 2025-01-30 10:39:20.000000000 +0000 mode
lrwxrwxrwx 1 root root       7 2025-01-30 10:37:47.000000000 +0000 modprobed -> moduler
-rwxr-xr-x 1 root root   76144 2025-01-30 10:37:46.000000000 +0000 moduler
-rwxr-xr-x 1 root root   72184 2025-01-30 10:37:10.000000000 +0000 mproxy
-rwxr-xr-x 1 root root   59404 2025-01-30 10:36:19.000000000 +0000 mtget
-rwxr-xr-x 1 root root   46936 2025-01-30 10:34:31.000000000 +0000 natpmp
-rwxr-xr-x 1 root root 1583724 2025-01-30 10:41:35.000000000 +0000 net
-rwxr-xr-x 1 root root   71656 2025-01-30 10:37:28.000000000 +0000 ntp
-rwxr-xr-x 1 root root    5304 2025-01-30 10:33:57.000000000 +0000 panicsl
-rwxr-xr-x 1 root root  651144 2025-01-30 10:39:46.000000000 +0000 parser
-rwxr-xr-x 1 root root   34560 2025-01-30 10:34:29.000000000 +0000 partd
-rwxr-xr-x 1 root root   38636 2025-01-30 10:34:05.000000000 +0000 ping
-rwxr-xr-x 1 root root   47128 2025-01-30 10:36:14.000000000 +0000 portman
-rwxr-xr-x 1 root root   34596 2025-01-30 11:12:43.000000000 +0000 profiler
-rwxr-xr-x 1 root root   79756 2025-01-30 10:38:03.000000000 +0000 ptp
-rwxr-xr-x 1 root root  141472 2025-01-30 10:34:11.000000000 +0000 quickset
-rwxr-xr-x 1 root root   51124 2025-01-30 10:36:31.000000000 +0000 radius
-rwxr-xr-x 1 root root  154084 2025-01-30 10:37:26.000000000 +0000 resolver
-rwxr-xr-x 1 root root    9596 2025-01-30 10:36:59.000000000 +0000 resolver_ctl
-rwxr-xr-x 1 root root   88300 2025-01-30 10:37:45.000000000 +0000 romon
-rwxr-xr-x 1 root root 1589616 2025-01-30 10:42:33.000000000 +0000 route
-rwxr-xr-x 1 root root   17944 2025-01-30 10:37:08.000000000 +0000 rtrace
-rwxr-xr-x 1 root root   30504 2025-01-30 10:37:57.000000000 +0000 sermgr
-rwxr-xr-x 1 root root   34484 2025-01-30 10:34:24.000000000 +0000 sertcp
-rwxr-xr-x 1 root root   63364 2025-01-30 10:34:37.000000000 +0000 sniffer
-rwxr-xr-x 1 root root  194996 2025-01-30 10:38:47.000000000 +0000 snmp
-rwxr-xr-x 1 root root   63420 2025-01-30 10:34:48.000000000 +0000 socks
-rwxr-xr-x 1 root root  108636 2025-01-30 10:36:46.000000000 +0000 ssld
-rwxr-xr-x 1 root root   30352 2025-01-30 10:36:01.000000000 +0000 sstore
-rwxr-xr-x 1 root root  752692 2025-01-30 10:39:45.000000000 +0000 sys2
-rwxr-xr-x 1 root root   22020 2025-01-30 10:34:01.000000000 +0000 telnet
-rwxr-xr-x 1 root root   13552 2025-01-30 10:33:57.000000000 +0000 telser
-rwxr-xr-x 1 root root   34676 2025-01-30 10:34:34.000000000 +0000 tftpd
-rwxr-xr-x 1 root root   30388 2025-01-30 10:33:58.000000000 +0000 traceroute
-rwxr-xr-x 1 root root  104424 2025-01-30 10:34:34.000000000 +0000 trafficgen
-rwxr-xr-x 1 root root   22120 2025-01-30 10:34:16.000000000 +0000 trafflow
-rwxr-xr-x 1 root root   26208 2025-01-30 10:33:59.000000000 +0000 undo
-rwxr-xr-x 1 root root  137392 2025-01-30 10:34:48.000000000 +0000 upnp
-rwxr-xr-x 1 root root   76096 2025-01-30 10:37:54.000000000 +0000 user
-rwxr-xr-x 1 root root   88092 2025-01-30 10:37:06.000000000 +0000 vrrp
-rwxr-xr-x 1 root root   30504 2025-01-30 10:34:25.000000000 +0000 watchdog
-rwxr-xr-x 1 root root  142004 2025-01-30 10:37:36.000000000 +0000 wproxy
-rwxr-xr-x 1 root root  117312 2025-01-30 10:38:41.000000000 +0000 www

/nova/etc:
total 52
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 leds
-rwxr-xr-x 1 root root 1229 2025-01-30 10:29:22.000000000 +0000 lognames
-rwxr-xr-x 1 root root   10 2025-01-30 10:29:22.000000000 +0000 logo
-rwxr-xr-x 1 root root    1 2025-01-30 10:29:22.000000000 +0000 manual-url
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 pciinfo
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 services
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 system_names
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 upnp
-rwxr-xr-x 1 root root   26 2025-01-30 10:29:22.000000000 +0000 url
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 user
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 www

/nova/etc/leds:
total 128
-rwxr-xr-x 1 root root 126981 2025-01-30 10:33:14.000000000 +0000 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2025-01-30 10:33:14.000000000 +0000 system.x3

/nova/etc/pciinfo:
total 212
-rwxr-xr-x 1 root root 216581 2025-01-30 10:33:14.000000000 +0000 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-01-30 10:33:14.000000000 +0000 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 992 2025-01-30 10:33:14.000000000 +0000 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2025-01-30 10:33:14.000000000 +0000 system.x3

/nova/etc/upnp:
total 64
-rwxr-xr-x 1 root root  3378 2025-01-30 10:29:24.000000000 +0000 connectionmanager.xml
-rwxr-xr-x 1 root root  5684 2025-01-30 10:29:24.000000000 +0000 contentdirectory.xml
-rwxr-xr-x 1 root root  8764 2025-01-30 10:29:24.000000000 +0000 logo120.png
-rwxr-xr-x 1 root root   930 2025-01-30 10:29:24.000000000 +0000 logo16.gif
-rwxr-xr-x 1 root root  1173 2025-01-30 10:29:24.000000000 +0000 logo32.gif
-rwxr-xr-x 1 root root  1504 2025-01-30 10:29:24.000000000 +0000 logo48.gif
-rwxr-xr-x 1 root root   735 2025-01-30 10:29:24.000000000 +0000 osinfo.xml
-rwxr-xr-x 1 root root  5928 2025-01-30 10:29:24.000000000 +0000 wancommonifcfg.xml
-rwxr-xr-x 1 root root 13444 2025-01-30 10:29:24.000000000 +0000 wanipconn.xml

/nova/etc/user:
total 4
-rwxr-xr-x 1 root root 2230 2025-01-30 10:33:14.000000000 +0000 system.x3

/nova/etc/www:
total 4
-rwxr-xr-x 1 root root 2458 2025-01-30 10:33:14.000000000 +0000 system.x3

/nova/lib:
total 16
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 defconf
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:22.000000000 +0000 profiler
-rwxr-xr-x 1 root root 4085 2025-01-30 10:29:23.000000000 +0000 xmlnames2

/nova/lib/console:
total 2116
-rwxr-xr-x 1 root root 2155963 2025-01-30 10:40:30.000000000 +0000 1073741824.mem
-rwxr-xr-x 1 root root     510 2025-01-30 10:29:22.000000000 +0000 logo.txt
-rwxr-xr-x 1 root root      18 2025-01-30 10:29:22.000000000 +0000 sublogo.txt

/nova/lib/defconf:
total 100
-rwxr-xr-x 1 root root   567 2025-01-30 10:29:22.000000000 +0000 defconf
-rwxr-xr-x 1 root root  4995 2025-01-30 10:29:22.000000000 +0000 defconf-caps
-rwxr-xr-x 1 root root  3700 2025-01-30 10:29:22.000000000 +0000 defconf-wps-sync
-rwxr-xr-x 1 root root 85033 2025-01-30 10:29:22.000000000 +0000 get-custom-defconf

/nova/lib/profiler:
total 20
-rwxr-xr-x 1 root root 19656 2025-01-30 11:12:42.000000000 +0000 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 408
-rwxr-xr-x 1 root root 321132 2025-01-30 11:13:21.000000000 +0000 mke2fs
-rwxr-xr-x 1 root root  25584 2025-01-30 10:33:11.000000000 +0000 nandfix
-rwxr-xr-x 1 root root  63452 2025-01-30 10:36:04.000000000 +0000 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2025-01-30 11:26:23.000000000 +0000 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 deinstall
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 lock
lrwxrwxrwx 1 root root    8 2025-01-30 11:26:23.000000000 +0000 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2025-01-30 11:26:23.000000000 +0000 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2025-01-30 11:26:23.000000000 +0000 post
lrwxrwxrwx 1 root root    7 2025-01-30 11:26:23.000000000 +0000 run -> /rw/run
lrwxrwxrwx 1 root root    4 2025-01-30 11:26:23.000000000 +0000 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

