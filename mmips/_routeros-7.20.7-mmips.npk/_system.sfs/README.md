### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 8710309 bytes, 756 inodes, blocksize: 262144 bytes, created: Thu Jan  8 10:41:46 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 bin
drwxr-xr-x 9 root root 4096 2026-01-08 10:41:38.000000000 +0000 bndl
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 boot
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 dev
lrwxrwxrwx 1 root root   11 2026-01-08 10:41:38.000000000 +0000 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 etc
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 flash
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-08 10:41:38.000000000 +0000 nova
lrwxrwxrwx 1 root root    9 2026-01-08 10:41:38.000000000 +0000 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 proc
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 ram
lrwxrwxrwx 1 root root    9 2026-01-08 10:41:38.000000000 +0000 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 sbin
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 sys
lrwxrwxrwx 1 root root    7 2026-01-08 10:41:38.000000000 +0000 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2026-01-08 10:41:38.000000000 +0000 var

/bin:
total 288
lrwxrwxrwx 1 root root     21 2026-01-08 10:41:38.000000000 +0000 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root  18080 2026-01-08 09:48:23.000000000 +0000 catlog
lrwxrwxrwx 1 root root     15 2026-01-08 10:41:38.000000000 +0000 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root     15 2026-01-08 10:41:38.000000000 +0000 login -> /nova/bin/login
-rwxr-xr-x 1 root root  28188 2026-01-08 10:25:33.000000000 +0000 mkexfatfs
-rwxr-xr-x 1 root root   7512 2026-01-08 09:48:23.000000000 +0000 pakp
lrwxrwxrwx 1 root root     21 2026-01-08 10:41:38.000000000 +0000 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root     15 2026-01-08 10:41:38.000000000 +0000 shell -> /nova/bin/login
-rwxr-xr-x 1 root root 234824 2026-01-08 10:26:23.000000000 +0000 sshfs

/bndl:
total 28
drwxr-xr-x 4 root root 4096 2026-01-08 10:41:38.000000000 +0000 advanced-tools
drwxr-xr-x 5 root root 4096 2026-01-08 10:41:38.000000000 +0000 dhcp
drwxr-xr-x 5 root root 4096 2026-01-08 10:41:38.000000000 +0000 hotspot
drwxr-xr-x 4 root root 4096 2026-01-08 10:41:38.000000000 +0000 ipv6
drwxr-xr-x 5 root root 4096 2026-01-08 10:41:38.000000000 +0000 ppp
drwxr-xr-x 5 root root 4096 2026-01-08 10:41:38.000000000 +0000 security
drwxr-xr-x 5 root root 4096 2026-01-08 10:41:38.000000000 +0000 wifi

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2026-01-08 10:41:38.000000000 +0000 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 webfig

/bndl/advanced-tools/home/web/webfig:
total 8
-rw-r--r-- 1 root root 2370 2026-01-08 10:27:39.000000000 +0000 advtool-c647bc50a096.jg.gz
-rwxr-xr-x 1 root root  107 2026-01-08 10:27:39.000000000 +0000 advtool.info
lrwxrwxrwx 1 root root   26 2026-01-08 10:27:40.000000000 +0000 advtool.jg.gz -> advtool-c647bc50a096.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 lib

/bndl/advanced-tools/nova/bin:
total 204
-rwxr-xr-x 1 root root 31808 2026-01-08 10:27:01.000000000 +0000 ddns
-rwxr-xr-x 1 root root 14972 2026-01-08 10:26:38.000000000 +0000 fping
-rwxr-xr-x 1 root root 18072 2026-01-08 10:27:19.000000000 +0000 macscan
-rwxr-xr-x 1 root root 68660 2026-01-08 10:29:10.000000000 +0000 netwatch
-rwxr-xr-x 1 root root 16508 2026-01-08 10:26:44.000000000 +0000 pspeed
-rwxr-xr-x 1 root root 35004 2026-01-08 10:27:28.000000000 +0000 scanner
-rwxr-xr-x 1 root root 12008 2026-01-08 10:27:48.000000000 +0000 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 console

/bndl/advanced-tools/nova/lib/console:
total 28
-rwxr-xr-x 1 root root 27225 2026-01-08 10:27:12.000000000 +0000 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 home
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2026-01-08 10:41:38.000000000 +0000 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 webfig

/bndl/dhcp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4740 2026-01-08 10:27:35.000000000 +0000 dhcp-aed65be3c144.jg.gz
-rwxr-xr-x 1 root root  100 2026-01-08 10:27:35.000000000 +0000 dhcp.info
lrwxrwxrwx 1 root root   23 2026-01-08 10:27:35.000000000 +0000 dhcp.jg.gz -> dhcp-aed65be3c144.jg.gz

/bndl/dhcp/lib:
total 112
-rwxr-xr-x 1 root root 111704 2026-01-08 10:27:19.000000000 +0000 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 lib

/bndl/dhcp/nova/bin:
total 340
-rwxr-xr-x 1 root root 240572 2026-01-08 10:30:25.000000000 +0000 dhcp
-rwxr-xr-x 1 root root 105292 2026-01-08 10:30:06.000000000 +0000 dhcpclient

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 console

/bndl/dhcp/nova/lib/console:
total 116
-rwxr-xr-x 1 root root 118532 2026-01-08 10:27:36.000000000 +0000 1128267776.mem

/bndl/hotspot:
total 12
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-08 10:41:38.000000000 +0000 nova

/bndl/hotspot/home:
total 4
drwxr-xr-x 4 root root 4096 2026-01-08 10:41:38.000000000 +0000 web

/bndl/hotspot/home/web:
total 8
drwxr-xr-x 5 root root 4096 2026-01-08 10:41:38.000000000 +0000 hotspot
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 webfig

/bndl/hotspot/home/web/hotspot:
total 68
-rw-r--r-- 1 root root 1094 2025-12-04 12:00:20.000000000 +0000 alogin.html
-rw-r--r-- 1 root root  311 2025-12-04 12:00:20.000000000 +0000 api.json
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 css
-rw-r--r-- 1 root root  640 2025-12-04 12:00:20.000000000 +0000 error.html
-rw-r--r-- 1 root root 3719 2026-01-06 15:15:41.000000000 +0000 errors.txt
-rw-r--r-- 1 root root  903 2025-12-04 12:00:20.000000000 +0000 favicon.ico
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 img
-rw-r--r-- 1 root root 4423 2025-12-04 12:00:20.000000000 +0000 login.html
-rw-r--r-- 1 root root 1459 2025-12-04 12:00:20.000000000 +0000 logout.html
-rw-r--r-- 1 root root 7218 2025-12-04 12:00:20.000000000 +0000 md5.js
-rw-r--r-- 1 root root 1204 2025-12-04 12:00:20.000000000 +0000 radvert.html
-rw-r--r-- 1 root root  330 2025-12-04 12:00:20.000000000 +0000 redirect.html
-rw-r--r-- 1 root root  877 2025-12-04 12:00:20.000000000 +0000 rlogin.html
-rw-r--r-- 1 root root 2855 2025-12-04 12:00:20.000000000 +0000 status.html
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 xml

/bndl/hotspot/home/web/hotspot/css:
total 4
-rw-r--r-- 1 root root 4053 2025-12-04 12:00:20.000000000 +0000 style.css

/bndl/hotspot/home/web/hotspot/img:
total 8
-rw-r--r-- 1 root root 644 2025-12-04 12:00:20.000000000 +0000 password.svg
-rw-r--r-- 1 root root 444 2025-12-04 12:00:20.000000000 +0000 user.svg

/bndl/hotspot/home/web/hotspot/xml:
total 32
-rw-r--r-- 1 root root 4251 2025-12-04 12:00:20.000000000 +0000 WISPAccessGatewayParam.xsd
-rw-r--r-- 1 root root  839 2025-12-04 12:00:20.000000000 +0000 alogin.html
-rw-r--r-- 1 root root  428 2025-12-04 12:00:20.000000000 +0000 error.html
-rw-r--r-- 1 root root  372 2025-12-04 12:00:20.000000000 +0000 flogout.html
-rw-r--r-- 1 root root  809 2025-12-04 12:00:20.000000000 +0000 login.html
-rw-r--r-- 1 root root  370 2025-12-04 12:00:20.000000000 +0000 logout.html
-rw-r--r-- 1 root root  545 2025-12-04 12:00:20.000000000 +0000 rlogin.html

/bndl/hotspot/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4302 2026-01-08 10:30:19.000000000 +0000 hotspot-68f663b0b1d5.jg.gz
-rwxr-xr-x 1 root root  107 2026-01-08 10:30:19.000000000 +0000 hotspot.info
lrwxrwxrwx 1 root root   26 2026-01-08 10:30:19.000000000 +0000 hotspot.jg.gz -> hotspot-68f663b0b1d5.jg.gz

/bndl/hotspot/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 modules

/bndl/hotspot/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 5.6.3

/bndl/hotspot/lib/modules/5.6.3:
total 4
-rw-r--r-- 1 root root    0 2026-01-08 10:31:14.000000000 +0000 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 net

/bndl/hotspot/lib/modules/5.6.3/net:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 ipv4

/bndl/hotspot/lib/modules/5.6.3/net/ipv4:
total 44
-rw-r--r-- 1 root root 43956 2026-01-08 10:30:58.000000000 +0000 unicl.ko

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 lib

/bndl/hotspot/nova/bin:
total 256
-rwxr-xr-x 1 root root 260928 2026-01-08 10:29:16.000000000 +0000 hotspot

/bndl/hotspot/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 radius

/bndl/hotspot/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2026-01-08 10:29:33.000000000 +0000 hotspot.x3

/bndl/hotspot/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 console

/bndl/hotspot/nova/lib/console:
total 84
-rwxr-xr-x 1 root root 84886 2026-01-08 10:29:29.000000000 +0000 1132462080.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2026-01-08 10:41:38.000000000 +0000 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 webfig

/bndl/ipv6/home/web/webfig:
total 12
-rw-r--r-- 1 root root 8069 2026-01-08 10:27:38.000000000 +0000 ipv6-51ca41a24a71.jg.gz
-rwxr-xr-x 1 root root  101 2026-01-08 10:27:39.000000000 +0000 ipv6.info
lrwxrwxrwx 1 root root   23 2026-01-08 10:27:39.000000000 +0000 ipv6.jg.gz -> ipv6-51ca41a24a71.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2026-01-08 10:41:38.000000000 +0000 lib

/bndl/ipv6/nova/bin:
total 92
-rwxr-xr-x 1 root root 30576 2026-01-08 10:27:53.000000000 +0000 ippool6
-rwxr-xr-x 1 root root 59500 2026-01-08 10:27:11.000000000 +0000 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 route

/bndl/ipv6/nova/lib/console:
total 192
-rwxr-xr-x 1 root root 193792 2026-01-08 10:27:21.000000000 +0000 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2025-12-04 12:00:20.000000000 +0000 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-08 10:41:38.000000000 +0000 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 webfig

/bndl/ppp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 6632 2026-01-08 10:30:01.000000000 +0000 ppp-0e7aacafe7ee.jg.gz
-rwxr-xr-x 1 root root   99 2026-01-08 10:30:01.000000000 +0000 ppp.info
lrwxrwxrwx 1 root root   22 2026-01-08 10:30:02.000000000 +0000 ppp.jg.gz -> ppp-0e7aacafe7ee.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2026-01-08 10:41:38.000000000 +0000 5.6.3

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 misc
-rw-r--r-- 1 root root  278 2026-01-08 10:35:53.000000000 +0000 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 104
-rw-r--r-- 1 root root 11940 2026-01-08 10:23:28.000000000 +0000 ppp_async.ko
-rw-r--r-- 1 root root  6816 2026-01-08 10:23:28.000000000 +0000 ppp_deflate.ko
-rw-r--r-- 1 root root 34156 2026-01-08 10:23:28.000000000 +0000 ppp_generic.ko
-rw-r--r-- 1 root root  8684 2026-01-08 10:23:28.000000000 +0000 ppp_mppe.ko
-rw-r--r-- 1 root root 10100 2026-01-08 10:23:28.000000000 +0000 ppp_synctty.ko
-rw-r--r-- 1 root root 12972 2026-01-08 10:23:28.000000000 +0000 pppoe.ko
-rw-r--r-- 1 root root  4316 2026-01-08 10:23:28.000000000 +0000 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 96
-rw-r--r-- 1 root root 37976 2026-01-08 10:29:23.000000000 +0000 ovpn.ko
-rw-r--r-- 1 root root  6432 2026-01-08 10:29:03.000000000 +0000 pppoefp.ko
-rw-r--r-- 1 root root 48544 2026-01-08 10:29:29.000000000 +0000 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 64
-rw-r--r-- 1 root root 50132 2026-01-08 10:28:18.000000000 +0000 l2tp.ko
-rw-r--r-- 1 root root 10544 2026-01-08 10:27:17.000000000 +0000 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2026-01-08 10:41:38.000000000 +0000 etc
drwxr-xr-x 4 root root 4096 2026-01-08 10:41:38.000000000 +0000 lib

/bndl/ppp/nova/bin:
total 636
-rwxr-xr-x 1 root root 647624 2026-01-08 10:35:10.000000000 +0000 ppp
lrwxrwxrwx 1 root root      3 2026-01-08 10:35:10.000000000 +0000 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2026-01-08 10:27:02.000000000 +0000 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2026-01-08 10:27:02.000000000 +0000 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 profiler

/bndl/ppp/nova/lib/console:
total 160
-rwxr-xr-x 1 root root 160410 2026-01-08 10:29:46.000000000 +0000 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 4
-rwxr-xr-x 1 root root 1940 2026-01-08 10:31:11.000000000 +0000 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-08 10:41:38.000000000 +0000 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 webfig

/bndl/security/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4451 2026-01-08 10:35:27.000000000 +0000 secure-6d95ab448081.jg.gz
-rwxr-xr-x 1 root root  105 2026-01-08 10:35:27.000000000 +0000 secure.info
lrwxrwxrwx 1 root root   25 2026-01-08 10:35:28.000000000 +0000 secure.jg.gz -> secure-6d95ab448081.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 5.6.3

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2026-01-08 10:41:38.000000000 +0000 kernel
-rw-r--r-- 1 root root  106 2026-01-08 10:39:39.000000000 +0000 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 crypto
drwxr-xr-x 5 root root 4096 2026-01-08 10:41:38.000000000 +0000 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 88
-rw-r--r-- 1 root root  8384 2026-01-08 10:23:26.000000000 +0000 blowfish_common.ko
-rw-r--r-- 1 root root  6116 2026-01-08 10:23:26.000000000 +0000 blowfish_generic.ko
-rw-r--r-- 1 root root 23668 2026-01-08 10:23:26.000000000 +0000 camellia_generic.ko
-rw-r--r-- 1 root root  8412 2026-01-08 10:23:26.000000000 +0000 chacha20poly1305.ko
-rw-r--r-- 1 root root  3864 2026-01-08 10:23:26.000000000 +0000 echainiv.ko
-rw-r--r-- 1 root root 15864 2026-01-08 10:23:27.000000000 +0000 twofish_common.ko
-rw-r--r-- 1 root root  9892 2026-01-08 10:23:27.000000000 +0000 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 key
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root  8968 2026-01-08 10:23:34.000000000 +0000 ah4.ko
-rw-r--r-- 1 root root 12536 2026-01-08 10:23:34.000000000 +0000 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 36
-rw-r--r-- 1 root root 34200 2026-01-08 10:23:35.000000000 +0000 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 28
-rw-r--r-- 1 root root 27120 2026-01-08 10:23:39.000000000 +0000 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2026-01-08 10:41:38.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 lib

/bndl/security/nova/bin:
total 760
-rwxr-xr-x 1 root root 548016 2026-01-08 10:39:07.000000000 +0000 ipsec
lrwxrwxrwx 1 root root      5 2026-01-08 10:39:07.000000000 +0000 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 228416 2026-01-08 10:37:27.000000000 +0000 ssh
lrwxrwxrwx 1 root root      3 2026-01-08 10:37:27.000000000 +0000 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2026-01-08 10:34:37.000000000 +0000 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2026-01-08 10:34:37.000000000 +0000 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 console

/bndl/security/nova/lib/console:
total 92
-rwxr-xr-x 1 root root 92892 2026-01-08 10:35:35.000000000 +0000 1077936128.mem

/bndl/wifi:
total 12
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-08 10:41:38.000000000 +0000 nova

/bndl/wifi/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 web

/bndl/wifi/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 webfig

/bndl/wifi/home/web/webfig:
total 16
-rw-r--r-- 1 root root 9293 2026-01-08 10:27:42.000000000 +0000 wave2-a7151b20f7df.jg.gz
-rwxr-xr-x 1 root root  103 2026-01-08 10:27:43.000000000 +0000 wave2.info
lrwxrwxrwx 1 root root   24 2026-01-08 10:27:43.000000000 +0000 wave2.jg.gz -> wave2-a7151b20f7df.jg.gz

/bndl/wifi/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 modules

/bndl/wifi/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 5.6.3

/bndl/wifi/lib/modules/5.6.3:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 misc
-rw-r--r-- 1 root root   23 2026-01-08 10:39:00.000000000 +0000 modules.dep.wifi

/bndl/wifi/lib/modules/5.6.3/misc:
total 36
-rw-r--r-- 1 root root 36800 2026-01-08 10:29:43.000000000 +0000 c2.ko

/bndl/wifi/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2026-01-08 10:41:38.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 lib

/bndl/wifi/nova/bin:
total 1064
-rwxr-xr-x 1 root root 1086012 2026-01-08 10:38:42.000000000 +0000 ww2

/bndl/wifi/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 radius

/bndl/wifi/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 183 2026-01-08 10:26:37.000000000 +0000 wifi.x3

/bndl/wifi/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2026-01-08 10:26:37.000000000 +0000 wifi.x3

/bndl/wifi/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 console

/bndl/wifi/nova/lib/console:
total 216
-rwxr-xr-x 1 root root 220780 2026-01-08 10:27:36.000000000 +0000 1275068416.mem

/boot:
total 0

/dev:
total 0

/etc:
total 184
-rw-r--r-- 1 root root 130743 2025-12-04 12:00:27.000000000 +0000 license
-rw-r--r-- 1 root root  54768 2026-01-08 09:45:32.000000000 +0000 mt7621L-7.20.7.fwf
lrwxrwxrwx 1 root root     24 2026-01-08 10:41:38.000000000 +0000 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2026-01-08 10:41:38.000000000 +0000 web

/home/web:
total 64
drwxr-xr-x 2 root root  4096 2026-01-08 10:41:38.000000000 +0000 assets
-rwxr-xr-x 1 root root 19357 2026-01-08 09:44:31.000000000 +0000 bth-files.html
-rwxr-xr-x 1 root root   600 2025-11-25 05:49:41.000000000 +0000 favicon.png
-rwxr-xr-x 1 root root   689 2025-11-25 05:49:41.000000000 +0000 favicon.svg
-rwxr-xr-x 1 root root   708 2025-11-25 05:49:41.000000000 +0000 graph.css
drwxr-xr-x 2 root root  4096 2026-01-08 10:41:38.000000000 +0000 help
-rwxr-xr-x 1 root root  1254 2026-01-06 15:15:43.000000000 +0000 index2.html
lrwxrwxrwx 1 root root    12 2026-01-08 10:26:32.000000000 +0000 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2025-11-25 05:49:41.000000000 +0000 logo.png
-rw-r--r-- 1 root root  2507 2026-01-06 15:15:43.000000000 +0000 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2025-11-25 05:49:41.000000000 +0000 robots.txt
drwxr-xr-x 2 root root  4096 2026-01-08 10:41:38.000000000 +0000 webfig
drwxr-xr-x 2 root root  4096 2026-01-08 10:41:38.000000000 +0000 winbox

/home/web/assets:
total 168
-rw-r--r-- 1 root root  19040 2025-12-04 12:00:27.000000000 +0000 400.woff2
-rw-r--r-- 1 root root  19156 2025-12-04 12:00:27.000000000 +0000 700.woff2
-rwxr-xr-x 1 root root    939 2026-01-06 15:15:43.000000000 +0000 script-ae01587e2c4c.js
-rwxr-xr-x 1 root root 123976 2026-01-06 15:15:43.000000000 +0000 style-ae67df160dad.css

/home/web/help:
total 4
-rw-r--r-- 1 root root 118 2025-12-04 12:00:27.000000000 +0000 license.html

/home/web/webfig:
total 672
-rwxr-xr-x 1 root root   9157 2026-01-08 09:43:19.000000000 +0000 curve255-541e54a862be.js
-rwxr-xr-x 1 root root     72 2026-01-08 09:48:39.000000000 +0000 icons.info
-rwxr-xr-x 1 root root  24790 2025-11-25 05:49:40.000000000 +0000 icons.png
-rwxr-xr-x 1 root root     55 2026-01-08 09:48:39.000000000 +0000 icons24.info
-rwxr-xr-x 1 root root  40423 2025-11-25 05:49:40.000000000 +0000 icons24.png
-rwxr-xr-x 1 root root     54 2026-01-08 09:48:39.000000000 +0000 icons32.info
-rwxr-xr-x 1 root root  55936 2025-11-25 05:49:40.000000000 +0000 icons32.png
-rwxr-xr-x 1 root root  22450 2026-01-08 09:43:19.000000000 +0000 index.html
lrwxrwxrwx 1 root root     13 2026-01-08 09:43:19.000000000 +0000 list -> /ram/gum.list
-rwxr-xr-x 1 root root 395131 2026-01-08 09:43:19.000000000 +0000 master-61ed6e5ae60d.js
-rw-r--r-- 1 root root 109458 2026-01-08 09:48:41.000000000 +0000 roteros-f712676ed80b.jg.gz
-rwxr-xr-x 1 root root    108 2026-01-08 09:48:42.000000000 +0000 roteros.info
lrwxrwxrwx 1 root root     26 2026-01-08 09:48:42.000000000 +0000 roteros.jg.gz -> roteros-f712676ed80b.jg.gz

/home/web/winbox:
total 0

/lib:
total 1944
-rwxr-xr-x 1 root root 279272 2026-01-08 09:41:29.000000000 +0000 libc.so
-rwxr-xr-x 1 root root  89280 2026-01-08 09:47:32.000000000 +0000 libeap.so
-rwxr-xr-x 1 root root  21840 2026-01-08 09:43:27.000000000 +0000 libjson.so
-rwxr-xr-x 1 root root 180160 2026-01-08 09:45:50.000000000 +0000 librappsup.so
-rwxr-xr-x 1 root root 122656 2026-01-08 09:44:25.000000000 +0000 libubox.so
-rwxr-xr-x 1 root root  76508 2026-01-08 09:43:18.000000000 +0000 libuc++.so
-rwxr-xr-x 1 root root 282476 2026-01-08 09:46:21.000000000 +0000 libucrypto.so
-rwxr-xr-x 1 root root  27668 2026-01-08 09:44:14.000000000 +0000 libufiber.so
-rwxr-xr-x 1 root root  70140 2026-01-08 09:44:19.000000000 +0000 libuhttp.so
-rwxr-xr-x 1 root root 639208 2026-01-08 09:43:56.000000000 +0000 libumsg.so
-rwxr-xr-x 1 root root  37020 2026-01-08 09:46:40.000000000 +0000 liburadius.so
-rwxr-xr-x 1 root root  10544 2026-01-08 09:46:31.000000000 +0000 libuxml++.so
-rwxr-xr-x 1 root root  37432 2026-01-08 09:43:23.000000000 +0000 libwww.so
-rwxr-xr-x 1 root root  13772 2026-01-08 09:43:27.000000000 +0000 libxml.so
-rwxr-xr-x 1 root root  67992 2026-01-08 09:43:27.000000000 +0000 libz.so
drwxr-xr-x 3 root root   4096 2026-01-08 10:41:37.000000000 +0000 modules
lrwxrwxrwx 1 root root     27 2026-01-08 10:41:38.000000000 +0000 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2026-01-08 10:41:38.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 6 root root 4096 2026-01-08 10:41:37.000000000 +0000 drivers
drwxr-xr-x 8 root root 4096 2026-01-08 10:41:38.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:37.000000000 +0000 misc
-rw-r--r-- 1 root root 2613 2026-01-08 10:26:29.000000000 +0000 modules.dep.system
drwxr-xr-x 6 root root 4096 2026-01-08 10:41:37.000000000 +0000 net

/lib/modules/5.6.3/drivers:
total 16
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:37.000000000 +0000 char
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:37.000000000 +0000 crypto
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:37.000000000 +0000 mmc
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:37.000000000 +0000 net

/lib/modules/5.6.3/drivers/char:
total 20
-rw-r--r-- 1 root root 4924 2026-01-08 10:22:25.000000000 +0000 mt7621wdt.ko
-rw-r--r-- 1 root root 9160 2026-01-08 10:19:09.000000000 +0000 ticker.ko

/lib/modules/5.6.3/drivers/crypto:
total 24
-rw-r--r-- 1 root root 24108 2026-01-08 10:22:55.000000000 +0000 crypto_eip93.ko

/lib/modules/5.6.3/drivers/mmc:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:37.000000000 +0000 host

/lib/modules/5.6.3/drivers/mmc/host:
total 40
-rw-r--r-- 1 root root 37676 2026-01-08 10:22:27.000000000 +0000 mtk_sd.ko

/lib/modules/5.6.3/drivers/net:
total 560
-rw-r--r-- 1 root root  40548 2026-01-08 10:20:48.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root  11352 2026-01-08 10:19:56.000000000 +0000 imq.ko
-rw-r--r-- 1 root root  38168 2026-01-08 10:20:48.000000000 +0000 mediatek_switch.ko
-rw-r--r-- 1 root root  10772 2026-01-08 10:23:46.000000000 +0000 mpls_fp.ko
-rw-r--r-- 1 root root 192556 2026-01-08 10:23:49.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root  88276 2026-01-08 10:20:21.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root  24840 2026-01-08 10:22:16.000000000 +0000 raether.ko
-rw-r--r-- 1 root root  59908 2026-01-08 10:20:51.000000000 +0000 switch.ko
drwxr-xr-x 2 root root   4096 2026-01-08 10:41:37.000000000 +0000 usb
-rw-r--r-- 1 root root  23332 2026-01-08 10:19:09.000000000 +0000 via-velocity.ko
-rw-r--r-- 1 root root  60680 2026-01-08 10:24:20.000000000 +0000 vxlan2.ko

/lib/modules/5.6.3/drivers/net/usb:
total 180
-rw-r--r-- 1 root root  69692 2026-01-08 10:23:52.000000000 +0000 fp_usbnet.ko
-rw-r--r-- 1 root root 109356 2026-01-08 10:23:28.000000000 +0000 mbim.ko

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x  3 root root 4096 2026-01-08 10:41:38.000000000 +0000 arch
drwxr-xr-x  2 root root 4096 2026-01-08 10:41:38.000000000 +0000 crypto
drwxr-xr-x  9 root root 4096 2026-01-08 10:41:38.000000000 +0000 drivers
drwxr-xr-x 11 root root 4096 2026-01-08 10:41:38.000000000 +0000 fs
drwxr-xr-x  5 root root 4096 2026-01-08 10:41:38.000000000 +0000 lib
drwxr-xr-x 12 root root 4096 2026-01-08 10:41:38.000000000 +0000 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 4 root root 4096 2026-01-08 10:41:38.000000000 +0000 mips

/lib/modules/5.6.3/kernel/arch/mips:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 crypto
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 oprofile

/lib/modules/5.6.3/kernel/arch/mips/crypto:
total 16
-rw-r--r-- 1 root root 7860 2026-01-08 10:23:26.000000000 +0000 chacha-mips.ko
-rw-r--r-- 1 root root 5760 2026-01-08 10:23:26.000000000 +0000 poly1305-mips.ko

/lib/modules/5.6.3/kernel/arch/mips/oprofile:
total 40
-rw-r--r-- 1 root root 38436 2026-01-08 10:23:26.000000000 +0000 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 56
-rw-r--r-- 1 root root  3100 2026-01-08 10:23:26.000000000 +0000 arc4.ko
-rw-r--r-- 1 root root 12340 2026-01-08 10:23:26.000000000 +0000 ccm.ko
-rw-r--r-- 1 root root  5048 2026-01-08 10:23:26.000000000 +0000 cmac.ko
-rw-r--r-- 1 root root  3852 2026-01-08 10:23:26.000000000 +0000 des_generic.ko
-rw-r--r-- 1 root root  5024 2026-01-08 10:23:26.000000000 +0000 md4.ko
-rw-r--r-- 1 root root  4056 2026-01-08 10:23:27.000000000 +0000 sha1_generic.ko
-rw-r--r-- 1 root root 10096 2026-01-08 10:23:27.000000000 +0000 sha512_generic.ko

/lib/modules/5.6.3/kernel/drivers:
total 28
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 ata
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 hid
drwxr-xr-x 4 root root 4096 2026-01-08 10:41:38.000000000 +0000 mmc
drwxr-xr-x 7 root root 4096 2026-01-08 10:41:38.000000000 +0000 net
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 nvme
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 scsi
drwxr-xr-x 8 root root 4096 2026-01-08 10:41:38.000000000 +0000 usb

/lib/modules/5.6.3/kernel/drivers/ata:
total 260
-rw-r--r-- 1 root root  33616 2026-01-08 10:23:27.000000000 +0000 ahci.ko
-rw-r--r-- 1 root root  32380 2026-01-08 10:23:27.000000000 +0000 libahci.ko
-rw-r--r-- 1 root root 194096 2026-01-08 10:23:27.000000000 +0000 libata.ko

/lib/modules/5.6.3/kernel/drivers/hid:
total 72
-rw-r--r-- 1 root root 72648 2026-01-08 10:23:27.000000000 +0000 hid.ko

/lib/modules/5.6.3/kernel/drivers/mmc:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 core
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 host

/lib/modules/5.6.3/kernel/drivers/mmc/core:
total 140
-rw-r--r-- 1 root root  35200 2026-01-08 10:23:27.000000000 +0000 mmc_block.ko
-rw-r--r-- 1 root root 104196 2026-01-08 10:23:27.000000000 +0000 mmc_core.ko

/lib/modules/5.6.3/kernel/drivers/mmc/host:
total 20
-rw-r--r-- 1 root root 13880 2026-01-08 10:23:27.000000000 +0000 mmc_spi.ko
-rw-r--r-- 1 root root  2800 2026-01-08 10:23:27.000000000 +0000 of_mmc_spi.ko

/lib/modules/5.6.3/kernel/drivers/net:
total 120
drwxr-xr-x 2 root root  4096 2026-01-08 10:41:38.000000000 +0000 bonding
drwxr-xr-x 3 root root  4096 2026-01-08 10:41:38.000000000 +0000 ethernet
-rw-r--r-- 1 root root 38288 2026-01-08 10:23:28.000000000 +0000 macsec.ko
-rw-r--r-- 1 root root 20168 2026-01-08 10:23:28.000000000 +0000 macvlan.ko
drwxr-xr-x 2 root root  4096 2026-01-08 10:41:38.000000000 +0000 slip
drwxr-xr-x 2 root root  4096 2026-01-08 10:41:38.000000000 +0000 usb
-rw-r--r-- 1 root root 17072 2026-01-08 10:23:29.000000000 +0000 veth.ko
-rw-r--r-- 1 root root 19540 2026-01-08 10:23:29.000000000 +0000 vrf.ko
drwxr-xr-x 2 root root  4096 2026-01-08 10:41:38.000000000 +0000 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 132
-rw-r--r-- 1 root root 132288 2026-01-08 10:23:27.000000000 +0000 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 intel

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 40
-rw-r--r-- 1 root root 37232 2026-01-08 10:23:28.000000000 +0000 e100.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6276 2026-01-08 10:23:28.000000000 +0000 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 132
-rw-r--r-- 1 root root 19604 2026-01-08 10:23:28.000000000 +0000 ax88179_178a.ko
-rw-r--r-- 1 root root 40780 2026-01-08 10:23:28.000000000 +0000 hso.ko
-rw-r--r-- 1 root root 12832 2026-01-08 10:23:29.000000000 +0000 sierra_net.ko
-rw-r--r-- 1 root root 25512 2026-01-08 10:23:29.000000000 +0000 smsc95xx.ko
-rw-r--r-- 1 root root 27792 2026-01-08 10:23:29.000000000 +0000 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 80
-rw-r--r-- 1 root root 81660 2026-01-08 10:23:29.000000000 +0000 wireguard.ko

/lib/modules/5.6.3/kernel/drivers/nvme:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 host

/lib/modules/5.6.3/kernel/drivers/nvme/host:
total 100
-rw-r--r-- 1 root root 64028 2026-01-08 10:23:29.000000000 +0000 nvme-core.ko
-rw-r--r-- 1 root root 34784 2026-01-08 10:23:29.000000000 +0000 nvme.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 160
-rw-r--r-- 1 root root 118524 2026-01-08 10:23:29.000000000 +0000 scsi_mod.ko
-rw-r--r-- 1 root root  41076 2026-01-08 10:23:29.000000000 +0000 sd_mod.ko

/lib/modules/5.6.3/kernel/drivers/usb:
total 24
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 class
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 common
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 core
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 host
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 serial
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 storage

/lib/modules/5.6.3/kernel/drivers/usb/class:
total 28
-rw-r--r-- 1 root root 27940 2026-01-08 10:23:29.000000000 +0000 cdc-acm.ko

/lib/modules/5.6.3/kernel/drivers/usb/common:
total 8
-rw-r--r-- 1 root root 6280 2026-01-08 10:23:29.000000000 +0000 usb-common.ko

/lib/modules/5.6.3/kernel/drivers/usb/core:
total 180
-rw-r--r-- 1 root root 184116 2026-01-08 10:23:29.000000000 +0000 usbcore.ko

/lib/modules/5.6.3/kernel/drivers/usb/host:
total 132
-rw-r--r-- 1 root root 118832 2026-01-08 10:23:30.000000000 +0000 xhci-hcd.ko
-rw-r--r-- 1 root root   9536 2026-01-08 10:23:30.000000000 +0000 xhci-mtk.ko

/lib/modules/5.6.3/kernel/drivers/usb/serial:
total 316
-rw-r--r-- 1 root root   8664 2026-01-08 10:23:30.000000000 +0000 ch341.ko
-rw-r--r-- 1 root root  24292 2026-01-08 10:23:30.000000000 +0000 cp210x.ko
-rw-r--r-- 1 root root  77940 2026-01-08 10:23:30.000000000 +0000 ftdi_sio.ko
-rw-r--r-- 1 root root   5412 2026-01-08 10:23:30.000000000 +0000 ipw.ko
-rw-r--r-- 1 root root 101244 2026-01-08 10:23:30.000000000 +0000 option.ko
-rw-r--r-- 1 root root  15748 2026-01-08 10:23:30.000000000 +0000 pl2303.ko
-rw-r--r-- 1 root root  14232 2026-01-08 10:23:31.000000000 +0000 qcserial.ko
-rw-r--r-- 1 root root  14044 2026-01-08 10:23:31.000000000 +0000 sierra.ko
-rw-r--r-- 1 root root   8516 2026-01-08 10:23:31.000000000 +0000 usb_wwan.ko
-rw-r--r-- 1 root root  29724 2026-01-08 10:23:31.000000000 +0000 usbserial.ko

/lib/modules/5.6.3/kernel/drivers/usb/storage:
total 76
-rw-r--r-- 1 root root 74624 2026-01-08 10:23:31.000000000 +0000 usb-storage.ko

/lib/modules/5.6.3/kernel/fs:
total 44
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 cifs
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 exfat
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 ext4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 fat
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 fuse
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 jbd2
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 ksmbd
-rw-r--r-- 1 root root 7280 2026-01-08 10:23:32.000000000 +0000 mbcache.ko
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 nls
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 ntfs3

/lib/modules/5.6.3/kernel/fs/cifs:
total 492
-rw-r--r-- 1 root root 501560 2026-01-08 10:23:31.000000000 +0000 cifs.ko

/lib/modules/5.6.3/kernel/fs/exfat:
total 80
-rw-r--r-- 1 root root 78496 2026-01-08 10:23:31.000000000 +0000 exfat.ko

/lib/modules/5.6.3/kernel/fs/ext4:
total 456
-rw-r--r-- 1 root root 463556 2026-01-08 10:23:31.000000000 +0000 ext4.ko

/lib/modules/5.6.3/kernel/fs/fat:
total 88
-rw-r--r-- 1 root root 72124 2026-01-08 10:23:31.000000000 +0000 fat.ko
-rw-r--r-- 1 root root 12828 2026-01-08 10:23:31.000000000 +0000 vfat.ko

/lib/modules/5.6.3/kernel/fs/fuse:
total 108
-rw-r--r-- 1 root root 107940 2026-01-08 10:23:31.000000000 +0000 fuse.ko

/lib/modules/5.6.3/kernel/fs/jbd2:
total 76
-rw-r--r-- 1 root root 76080 2026-01-08 10:23:31.000000000 +0000 jbd2.ko

/lib/modules/5.6.3/kernel/fs/ksmbd:
total 248
-rw-r--r-- 1 root root 251576 2026-01-08 10:23:32.000000000 +0000 ksmbd.ko

/lib/modules/5.6.3/kernel/fs/nls:
total 28
-rw-r--r-- 1 root root 7760 2026-01-08 10:23:32.000000000 +0000 nls_base.ko
-rw-r--r-- 1 root root 6604 2026-01-08 10:23:32.000000000 +0000 nls_cp437.ko
-rw-r--r-- 1 root root 5020 2026-01-08 10:23:32.000000000 +0000 nls_iso8859-1.ko
-rw-r--r-- 1 root root 2740 2026-01-08 10:23:32.000000000 +0000 nls_utf8.ko

/lib/modules/5.6.3/kernel/fs/ntfs3:
total 212
-rw-r--r-- 1 root root 214996 2026-01-08 10:23:32.000000000 +0000 ntfs3.ko

/lib/modules/5.6.3/kernel/lib:
total 44
-rw-r--r-- 1 root root 4176 2026-01-08 10:23:32.000000000 +0000 asn1_decoder.ko
-rw-r--r-- 1 root root 3428 2026-01-08 10:23:32.000000000 +0000 crc-ccitt.ko
-rw-r--r-- 1 root root 2672 2026-01-08 10:23:32.000000000 +0000 crc16.ko
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 crypto
-rw-r--r-- 1 root root 4280 2026-01-08 10:23:32.000000000 +0000 oid_registry.ko
-rw-r--r-- 1 root root 3524 2026-01-08 10:23:33.000000000 +0000 ts_bm.ko
-rw-r--r-- 1 root root 3356 2026-01-08 10:23:33.000000000 +0000 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 zlib_deflate
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 64
-rw-r--r-- 1 root root  2336 2026-01-08 10:23:32.000000000 +0000 libarc4.ko
-rw-r--r-- 1 root root  7468 2026-01-08 10:23:32.000000000 +0000 libblake2s-generic.ko
-rw-r--r-- 1 root root  3700 2026-01-08 10:23:32.000000000 +0000 libblake2s.ko
-rw-r--r-- 1 root root  6912 2026-01-08 10:23:32.000000000 +0000 libchacha20poly1305.ko
-rw-r--r-- 1 root root 11612 2026-01-08 10:23:32.000000000 +0000 libcurve25519-generic.ko
-rw-r--r-- 1 root root  2024 2026-01-08 10:23:32.000000000 +0000 libcurve25519.ko
-rw-r--r-- 1 root root 20540 2026-01-08 10:23:32.000000000 +0000 libdes.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18400 2026-01-08 10:23:33.000000000 +0000 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14972 2026-01-08 10:23:33.000000000 +0000 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 40
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 802
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 8021q
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 ipv4
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 ipv6
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 mpls
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 rfkill
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 sched
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 xfrm

/lib/modules/5.6.3/kernel/net/802:
total 12
-rw-r--r-- 1 root root 10304 2026-01-08 10:23:33.000000000 +0000 mrp.ko

/lib/modules/5.6.3/kernel/net/8021q:
total 28
-rw-r--r-- 1 root root 26100 2026-01-08 10:23:33.000000000 +0000 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 88
-rw-r--r-- 1 root root  2672 2026-01-08 10:23:33.000000000 +0000 ebt_802_3.ko
-rw-r--r-- 1 root root  3604 2026-01-08 10:23:33.000000000 +0000 ebt_arp.ko
-rw-r--r-- 1 root root  3168 2026-01-08 10:23:33.000000000 +0000 ebt_arpreply.ko
-rw-r--r-- 1 root root  3228 2026-01-08 10:23:33.000000000 +0000 ebt_dnat.ko
-rw-r--r-- 1 root root  3612 2026-01-08 10:23:33.000000000 +0000 ebt_ip.ko
-rw-r--r-- 1 root root  3844 2026-01-08 10:23:33.000000000 +0000 ebt_ip6.ko
-rw-r--r-- 1 root root  4808 2026-01-08 10:23:33.000000000 +0000 ebt_limit.ko
-rw-r--r-- 1 root root  2612 2026-01-08 10:23:33.000000000 +0000 ebt_mark.ko
-rw-r--r-- 1 root root  2544 2026-01-08 10:23:33.000000000 +0000 ebt_mark_m.ko
-rw-r--r-- 1 root root  2512 2026-01-08 10:23:33.000000000 +0000 ebt_pkttype.ko
-rw-r--r-- 1 root root  3068 2026-01-08 10:23:33.000000000 +0000 ebt_redirect.ko
-rw-r--r-- 1 root root  3056 2026-01-08 10:23:33.000000000 +0000 ebt_snat.ko
-rw-r--r-- 1 root root  3932 2026-01-08 10:23:33.000000000 +0000 ebt_stp.ko
-rw-r--r-- 1 root root  3020 2026-01-08 10:23:34.000000000 +0000 ebt_vlan.ko
-rw-r--r-- 1 root root  3140 2026-01-08 10:23:34.000000000 +0000 ebtable_filter.ko
-rw-r--r-- 1 root root  3140 2026-01-08 10:23:34.000000000 +0000 ebtable_nat.ko
-rw-r--r-- 1 root root 17244 2026-01-08 10:23:34.000000000 +0000 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 17220 2026-01-08 10:23:34.000000000 +0000 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2026-01-08 10:41:38.000000000 +0000 netfilter
-rw-r--r-- 1 root root 14828 2026-01-08 10:23:34.000000000 +0000 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 76
-rw-r--r-- 1 root root 16404 2026-01-08 10:23:34.000000000 +0000 ip_tables.ko
-rw-r--r-- 1 root root  3736 2026-01-08 10:23:34.000000000 +0000 ipt_REJECT.ko
-rw-r--r-- 1 root root  3788 2026-01-08 10:23:34.000000000 +0000 iptable_filter.ko
-rw-r--r-- 1 root root  3884 2026-01-08 10:23:34.000000000 +0000 iptable_mangle.ko
-rw-r--r-- 1 root root  3552 2026-01-08 10:23:34.000000000 +0000 iptable_nat.ko
-rw-r--r-- 1 root root  4120 2026-01-08 10:23:34.000000000 +0000 iptable_raw.ko
-rw-r--r-- 1 root root  3468 2026-01-08 10:23:34.000000000 +0000 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root  9412 2026-01-08 10:23:34.000000000 +0000 nf_nat_h323.ko
-rw-r--r-- 1 root root  5020 2026-01-08 10:23:34.000000000 +0000 nf_nat_pptp.ko
-rw-r--r-- 1 root root  4396 2026-01-08 10:23:34.000000000 +0000 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 32
-rw-r--r-- 1 root root  9008 2026-01-08 10:23:35.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root 11872 2026-01-08 10:23:35.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root  3760 2026-01-08 10:23:35.000000000 +0000 ip6_udp_tunnel.ko
drwxr-xr-x 2 root root  4096 2026-01-08 10:41:38.000000000 +0000 netfilter

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 68
-rw-r--r-- 1 root root 16700 2026-01-08 10:23:35.000000000 +0000 ip6_tables.ko
-rw-r--r-- 1 root root  3984 2026-01-08 10:23:35.000000000 +0000 ip6t_NPT.ko
-rw-r--r-- 1 root root  3776 2026-01-08 10:23:35.000000000 +0000 ip6t_REJECT.ko
-rw-r--r-- 1 root root  2916 2026-01-08 10:23:35.000000000 +0000 ip6t_eui64.ko
-rw-r--r-- 1 root root  3180 2026-01-08 10:23:35.000000000 +0000 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  3792 2026-01-08 10:23:35.000000000 +0000 ip6table_filter.ko
-rw-r--r-- 1 root root  4120 2026-01-08 10:23:35.000000000 +0000 ip6table_mangle.ko
-rw-r--r-- 1 root root  3556 2026-01-08 10:23:35.000000000 +0000 ip6table_nat.ko
-rw-r--r-- 1 root root  4124 2026-01-08 10:23:35.000000000 +0000 ip6table_raw.ko
-rw-r--r-- 1 root root  5200 2026-01-08 10:23:35.000000000 +0000 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 56
-rw-r--r-- 1 root root  5256 2026-01-08 10:23:36.000000000 +0000 mpls_iptunnel.ko
-rw-r--r-- 1 root root 45152 2026-01-08 10:23:36.000000000 +0000 mpls_router.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 412
-rw-r--r-- 1 root root 10028 2026-01-08 10:23:36.000000000 +0000 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root 40396 2026-01-08 10:23:36.000000000 +0000 nf_conntrack_h323.ko
-rw-r--r-- 1 root root  8164 2026-01-08 10:23:36.000000000 +0000 nf_conntrack_irc.ko
-rw-r--r-- 1 root root 30052 2026-01-08 10:23:36.000000000 +0000 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root  7648 2026-01-08 10:23:36.000000000 +0000 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root  8160 2026-01-08 10:23:36.000000000 +0000 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root 26864 2026-01-08 10:23:36.000000000 +0000 nf_conntrack_sip.ko
-rw-r--r-- 1 root root  6860 2026-01-08 10:23:36.000000000 +0000 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root 29304 2026-01-08 10:23:36.000000000 +0000 nf_nat.ko
-rw-r--r-- 1 root root  4492 2026-01-08 10:23:36.000000000 +0000 nf_nat_ftp.ko
-rw-r--r-- 1 root root  4168 2026-01-08 10:23:36.000000000 +0000 nf_nat_irc.ko
-rw-r--r-- 1 root root  7576 2026-01-08 10:23:36.000000000 +0000 nf_nat_rtsp.ko
-rw-r--r-- 1 root root 11960 2026-01-08 10:23:37.000000000 +0000 nf_nat_sip.ko
-rw-r--r-- 1 root root  3060 2026-01-08 10:23:37.000000000 +0000 nf_nat_tftp.ko
-rw-r--r-- 1 root root  8716 2026-01-08 10:23:37.000000000 +0000 nfnetlink.ko
-rw-r--r-- 1 root root 25300 2026-01-08 10:23:37.000000000 +0000 x_tables.ko
-rw-r--r-- 1 root root  6700 2026-01-08 10:23:37.000000000 +0000 xt_CT.ko
-rw-r--r-- 1 root root  3980 2026-01-08 10:23:37.000000000 +0000 xt_DSCP.ko
-rw-r--r-- 1 root root  3468 2026-01-08 10:23:37.000000000 +0000 xt_HL.ko
-rw-r--r-- 1 root root  3412 2026-01-08 10:23:37.000000000 +0000 xt_MASQUERADE.ko
-rw-r--r-- 1 root root  3800 2026-01-08 10:23:37.000000000 +0000 xt_NETMAP.ko
-rw-r--r-- 1 root root  3132 2026-01-08 10:23:37.000000000 +0000 xt_REDIRECT.ko
-rw-r--r-- 1 root root  6208 2026-01-08 10:23:37.000000000 +0000 xt_TCPMSS.ko
-rw-r--r-- 1 root root  5172 2026-01-08 10:23:37.000000000 +0000 xt_addrtype.ko
-rw-r--r-- 1 root root  4276 2026-01-08 10:23:37.000000000 +0000 xt_connbytes.ko
-rw-r--r-- 1 root root  4512 2026-01-08 10:23:38.000000000 +0000 xt_connmark.ko
-rw-r--r-- 1 root root  5012 2026-01-08 10:23:38.000000000 +0000 xt_conntrack.ko
-rw-r--r-- 1 root root  3052 2026-01-08 10:23:38.000000000 +0000 xt_dscp.ko
-rw-r--r-- 1 root root 16820 2026-01-08 10:23:38.000000000 +0000 xt_hashlimit.ko
-rw-r--r-- 1 root root  3436 2026-01-08 10:23:38.000000000 +0000 xt_helper.ko
-rw-r--r-- 1 root root  2844 2026-01-08 10:23:38.000000000 +0000 xt_hl.ko
-rw-r--r-- 1 root root  2780 2026-01-08 10:23:38.000000000 +0000 xt_length.ko
-rw-r--r-- 1 root root  2664 2026-01-08 10:23:38.000000000 +0000 xt_mac.ko
-rw-r--r-- 1 root root  2944 2026-01-08 10:23:38.000000000 +0000 xt_mark.ko
-rw-r--r-- 1 root root  3448 2026-01-08 10:23:38.000000000 +0000 xt_multiport.ko
-rw-r--r-- 1 root root  5096 2026-01-08 10:23:38.000000000 +0000 xt_nat.ko
-rw-r--r-- 1 root root  3980 2026-01-08 10:23:38.000000000 +0000 xt_physdev.ko
-rw-r--r-- 1 root root  4488 2026-01-08 10:23:38.000000000 +0000 xt_policy.ko
-rw-r--r-- 1 root root  2536 2026-01-08 10:23:38.000000000 +0000 xt_realm.ko
-rw-r--r-- 1 root root  3080 2026-01-08 10:23:38.000000000 +0000 xt_statistic.ko
-rw-r--r-- 1 root root  2952 2026-01-08 10:23:38.000000000 +0000 xt_string.ko
-rw-r--r-- 1 root root  3144 2026-01-08 10:23:38.000000000 +0000 xt_tcpmss.ko
-rw-r--r-- 1 root root  4032 2026-01-08 10:23:39.000000000 +0000 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/rfkill:
total 16
-rw-r--r-- 1 root root 15268 2026-01-08 10:23:39.000000000 +0000 rfkill.ko

/lib/modules/5.6.3/kernel/net/sched:
total 88
-rw-r--r-- 1 root root 28564 2026-01-08 10:23:39.000000000 +0000 sch_cake.ko
-rw-r--r-- 1 root root  7508 2026-01-08 10:23:39.000000000 +0000 sch_codel.ko
-rw-r--r-- 1 root root 10116 2026-01-08 10:23:39.000000000 +0000 sch_fq_codel.ko
-rw-r--r-- 1 root root 25096 2026-01-08 10:23:39.000000000 +0000 sch_htb.ko
-rw-r--r-- 1 root root  9324 2026-01-08 10:23:39.000000000 +0000 sch_red.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 7076 2026-01-08 10:23:39.000000000 +0000 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 228
-rw-r--r-- 1 root root 10532 2026-01-08 10:19:09.000000000 +0000 btest.ko
-rw-r--r-- 1 root root  2016 2026-01-08 10:24:14.000000000 +0000 c2glue.ko
-rw-r--r-- 1 root root  6580 2026-01-08 10:23:53.000000000 +0000 dot1x.ko
-rw-r--r-- 1 root root 48148 2026-01-08 10:19:42.000000000 +0000 flash.ko
-rw-r--r-- 1 root root  5536 2026-01-08 10:20:56.000000000 +0000 jiffies.ko
-rw-r--r-- 1 root root  3064 2026-01-08 10:19:31.000000000 +0000 ledgroup.ko
-rw-r--r-- 1 root root 11360 2026-01-08 10:19:04.000000000 +0000 logring.ko
-rw-r--r-- 1 root root 22980 2026-01-08 10:19:39.000000000 +0000 mesh.ko
-rw-r--r-- 1 root root  8660 2026-01-08 10:19:03.000000000 +0000 panics.ko
-rw-r--r-- 1 root root 15108 2026-01-08 10:19:07.000000000 +0000 poe_simple.ko
-rw-r--r-- 1 root root  6952 2026-01-08 10:19:52.000000000 +0000 rb.ko
-rw-r--r-- 1 root root  5972 2026-01-08 10:20:36.000000000 +0000 romon.ko
-rw-r--r-- 1 root root  5404 2026-01-08 10:19:45.000000000 +0000 snif.ko
-rw-r--r-- 1 root root 27220 2026-01-08 10:19:54.000000000 +0000 traffic_gen.ko
-rw-r--r-- 1 root root 19724 2026-01-08 10:19:47.000000000 +0000 ts.ko
-rw-r--r-- 1 root root  6552 2026-01-08 10:19:44.000000000 +0000 ulog.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:37.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:37.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:37.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:37.000000000 +0000 sched

/lib/modules/5.6.3/net/bridge:
total 200
-rw-r--r-- 1 root root 174216 2026-01-08 10:23:42.000000000 +0000 bridge2.ko
-rw-r--r-- 1 root root  17596 2026-01-08 10:23:39.000000000 +0000 bridge2_netfilter.ko
-rw-r--r-- 1 root root   2496 2026-01-08 10:19:43.000000000 +0000 ebt_snif.ko
-rw-r--r-- 1 root root   2728 2026-01-08 10:19:44.000000000 +0000 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:37.000000000 +0000 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 28
-rw-r--r-- 1 root root 3356 2026-01-08 10:19:09.000000000 +0000 ipt_SAME.ko
-rw-r--r-- 1 root root 6252 2026-01-08 10:19:10.000000000 +0000 ipt_TARPIT.ko
-rw-r--r-- 1 root root 4364 2026-01-08 10:19:10.000000000 +0000 ipt_psd.ko
-rw-r--r-- 1 root root 2596 2026-01-08 10:19:43.000000000 +0000 ipt_snif.ko
-rw-r--r-- 1 root root 3072 2026-01-08 10:19:41.000000000 +0000 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 60
-rw-r--r-- 1 root root  2060 2026-01-08 10:20:25.000000000 +0000 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  2060 2026-01-08 10:20:25.000000000 +0000 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 10796 2026-01-08 10:20:31.000000000 +0000 xt_ein.ko
-rw-r--r-- 1 root root 12392 2026-01-08 10:19:17.000000000 +0000 xt_layer7.ko
-rw-r--r-- 1 root root 16772 2026-01-08 10:20:30.000000000 +0000 xt_misc.ko
-rw-r--r-- 1 root root  3684 2026-01-08 10:19:19.000000000 +0000 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 80
-rw-r--r-- 1 root root  5244 2026-01-08 10:19:29.000000000 +0000 cls_fw.ko
-rw-r--r-- 1 root root 11788 2026-01-08 10:19:32.000000000 +0000 cls_linear.ko
-rw-r--r-- 1 root root 12836 2026-01-08 10:19:51.000000000 +0000 proto_agr.ko
-rw-r--r-- 1 root root 18652 2026-01-08 10:19:51.000000000 +0000 sch_agr.ko
-rw-r--r-- 1 root root 10712 2026-01-08 10:19:13.000000000 +0000 sch_pcq.ko
-rw-r--r-- 1 root root  8208 2026-01-08 10:21:01.000000000 +0000 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2026-01-08 10:41:38.000000000 +0000 bin
drwxr-xr-x 12 root root 4096 2026-01-08 10:41:38.000000000 +0000 etc
drwxr-xr-x  5 root root 4096 2026-01-08 10:41:38.000000000 +0000 lib
lrwxrwxrwx  1 root root    8 2026-01-08 10:41:38.000000000 +0000 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2026-01-08 10:41:38.000000000 +0000 store -> /rw/store

/nova/bin:
total 11340
-rwxr-xr-x 1 root root   24264 2026-01-08 09:44:10.000000000 +0000 agent
-rwxr-xr-x 1 root root   13064 2026-01-08 09:44:12.000000000 +0000 arpd
-rwxr-xr-x 1 root root   18208 2026-01-08 09:46:33.000000000 +0000 backup
-rwxr-xr-x 1 root root  281228 2026-01-08 09:49:18.000000000 +0000 bridge2
-rwxr-xr-x 1 root root   76576 2026-01-08 09:46:55.000000000 +0000 btest
-rwxr-xr-x 1 root root   59800 2026-01-08 09:44:54.000000000 +0000 bth
-rwxr-xr-x 1 root root 1024500 2026-01-08 09:48:27.000000000 +0000 cerm
lrwxrwxrwx 1 root root       4 2026-01-08 09:48:27.000000000 +0000 cerm-worker -> cerm
-rwxr-xr-x 1 root root  174600 2026-01-08 09:48:00.000000000 +0000 cloud
-rwxr-xr-x 1 root root  100304 2026-01-08 09:46:21.000000000 +0000 crossfig
-rwxr-xr-x 1 root root   66332 2026-01-08 09:47:43.000000000 +0000 detnet
-rwxr-xr-x 1 root root   84324 2026-01-08 09:44:59.000000000 +0000 discover
-rwxr-xr-x 1 root root  347084 2026-01-08 09:48:04.000000000 +0000 diskd
-rwxr-xr-x 1 root root  110428 2026-01-08 09:49:12.000000000 +0000 dot1x
-rwxr-xr-x 1 root root   40480 2026-01-08 09:46:40.000000000 +0000 email
-rwxr-xr-x 1 root root  150108 2026-01-08 09:48:44.000000000 +0000 fileman
-rwxr-xr-x 1 root root   34916 2026-01-08 09:44:13.000000000 +0000 ftpd
-rwxr-xr-x 1 root root  157536 2026-01-08 09:45:12.000000000 +0000 graphing
-rwxr-xr-x 1 root root    4440 2026-01-08 09:48:43.000000000 +0000 havecardbus
-rwxr-xr-x 1 root root   64928 2026-01-08 09:46:19.000000000 +0000 igmpproxy
-rwxr-xr-x 1 root root   83984 2026-01-08 09:48:19.000000000 +0000 installer
-rwxr-xr-x 1 root root   30544 2026-01-08 09:48:45.000000000 +0000 ippool
-rwxr-xr-x 1 root root   55392 2026-01-08 09:46:46.000000000 +0000 keyman
-rwxr-xr-x 1 root root   48192 2026-01-08 09:44:55.000000000 +0000 kidcontrol
-rwxr-xr-x 1 root root  248212 2026-01-08 09:45:19.000000000 +0000 lcdstat
-rwxr-xr-x 1 root root   76220 2026-01-08 09:47:13.000000000 +0000 led
-rwxr-xr-x 1 root root  121712 2026-01-08 09:48:22.000000000 +0000 letsencrypt
-rwxr-xr-x 1 root root   85180 2026-01-08 09:48:15.000000000 +0000 loader
-rwxr-xr-x 1 root root   88416 2026-01-08 09:44:23.000000000 +0000 log
-rwxr-xr-x 1 root root  170864 2026-01-08 09:50:25.000000000 +0000 login
-rwxr-xr-x 1 root root   56476 2026-01-08 09:44:17.000000000 +0000 logmaker
-rwxr-xr-x 1 root root   22908 2026-01-08 09:44:12.000000000 +0000 macping
-rwxr-xr-x 1 root root   37864 2026-01-08 09:46:43.000000000 +0000 mactel
-rwxr-xr-x 1 root root   23448 2026-01-08 09:44:12.000000000 +0000 mepty
-rwxr-xr-x 1 root root   86252 2026-01-08 09:45:06.000000000 +0000 mesh
-rwxr-xr-x 1 root root   68968 2026-01-08 09:50:29.000000000 +0000 mode
lrwxrwxrwx 1 root root       7 2026-01-08 09:48:43.000000000 +0000 modprobed -> moduler
-rwxr-xr-x 1 root root  117564 2026-01-08 09:48:43.000000000 +0000 moduler
-rwxr-xr-x 1 root root   80680 2026-01-08 09:49:18.000000000 +0000 mproxy
-rwxr-xr-x 1 root root   61460 2026-01-08 09:46:56.000000000 +0000 mtget
-rwxr-xr-x 1 root root   49360 2026-01-08 09:44:45.000000000 +0000 natpmp
-rwxr-xr-x 1 root root 1694452 2026-01-08 09:52:39.000000000 +0000 net
-rwxr-xr-x 1 root root   71904 2026-01-08 09:47:43.000000000 +0000 ntp
-rwxr-xr-x 1 root root    6152 2026-01-08 09:44:08.000000000 +0000 panicsl
-rwxr-xr-x 1 root root  800456 2026-01-08 09:50:48.000000000 +0000 parser
-rwxr-xr-x 1 root root   40804 2026-01-08 09:44:17.000000000 +0000 ping
-rwxr-xr-x 1 root root   49612 2026-01-08 09:48:19.000000000 +0000 portman
-rwxr-xr-x 1 root root   34776 2026-01-08 10:24:39.000000000 +0000 profiler
-rwxr-xr-x 1 root root   93080 2026-01-08 09:48:22.000000000 +0000 ptp
-rwxr-xr-x 1 root root  153996 2026-01-08 09:44:24.000000000 +0000 quickset
-rwxr-xr-x 1 root root   57316 2026-01-08 09:48:34.000000000 +0000 radius
-rwxr-xr-x 1 root root  164700 2026-01-08 09:48:03.000000000 +0000 resolver
-rwxr-xr-x 1 root root   10224 2026-01-08 09:48:00.000000000 +0000 resolver_ctl
-rwxr-xr-x 1 root root   96716 2026-01-08 09:47:41.000000000 +0000 romon
-rwxr-xr-x 1 root root 1872588 2026-01-08 09:53:38.000000000 +0000 route
-rwxr-xr-x 1 root root   16664 2026-01-08 09:47:28.000000000 +0000 rtrace
-rwxr-xr-x 1 root root   43460 2026-01-08 09:48:41.000000000 +0000 sermgr
-rwxr-xr-x 1 root root   36144 2026-01-08 09:44:44.000000000 +0000 sertcp
-rwxr-xr-x 1 root root   72844 2026-01-08 09:44:48.000000000 +0000 sniffer
-rwxr-xr-x 1 root root  211880 2026-01-08 09:49:37.000000000 +0000 snmp
-rwxr-xr-x 1 root root   67748 2026-01-08 09:45:00.000000000 +0000 socks
-rwxr-xr-x 1 root root   37192 2026-01-08 09:44:48.000000000 +0000 socksify
-rwxr-xr-x 1 root root  129344 2026-01-08 09:48:35.000000000 +0000 ssld
-rwxr-xr-x 1 root root   30492 2026-01-08 09:46:44.000000000 +0000 sstore
-rwxr-xr-x 1 root root  306832 2026-01-08 09:50:37.000000000 +0000 sys2
-rwxr-xr-x 1 root root   20936 2026-01-08 09:44:14.000000000 +0000 telnet
-rwxr-xr-x 1 root root   30672 2026-01-08 09:44:18.000000000 +0000 telser
-rwxr-xr-x 1 root root   37732 2026-01-08 09:44:46.000000000 +0000 tftpd
-rwxr-xr-x 1 root root   29284 2026-01-08 09:44:13.000000000 +0000 traceroute
-rwxr-xr-x 1 root root  110160 2026-01-08 09:44:55.000000000 +0000 trafficgen
-rwxr-xr-x 1 root root   23384 2026-01-08 09:44:29.000000000 +0000 trafflow
-rwxr-xr-x 1 root root   24384 2026-01-08 09:44:11.000000000 +0000 undo
-rwxr-xr-x 1 root root  150476 2026-01-08 09:45:10.000000000 +0000 upnp
-rwxr-xr-x 1 root root   84464 2026-01-08 09:48:33.000000000 +0000 user
-rwxr-xr-x 1 root root  100620 2026-01-08 09:47:13.000000000 +0000 vrrp
-rwxr-xr-x 1 root root   30720 2026-01-08 09:44:38.000000000 +0000 watchdog
-rwxr-xr-x 1 root root  154528 2026-01-08 09:47:44.000000000 +0000 wproxy
-rwxr-xr-x 1 root root  130196 2026-01-08 09:49:18.000000000 +0000 www

/nova/etc:
total 56
drwxr-xr-x 3 root root 4096 2026-01-08 10:41:38.000000000 +0000 ca
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 leds
-rwxr-xr-x 1 root root 1286 2025-12-03 07:17:21.000000000 +0000 lognames
-rwxr-xr-x 1 root root   10 2025-11-14 09:51:57.000000000 +0000 logo
-rwxr-xr-x 1 root root    1 2025-11-14 09:51:57.000000000 +0000 manual-url
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 pciinfo
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 services
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 system_names
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 upnp
-rwxr-xr-x 1 root root   26 2025-11-25 05:49:41.000000000 +0000 url
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 user
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 www

/nova/etc/ca:
total 104
-rwxr-xr-x 1 root root  837 2025-11-25 05:49:40.000000000 +0000 AmazonRootCA1.der
-rwxr-xr-x 1 root root  955 2025-11-25 05:49:40.000000000 +0000 DigiCert_Assured_ID_Root_CA.der
-rwxr-xr-x 1 root root  922 2025-11-25 05:49:40.000000000 +0000 DigiCert_Assured_ID_Root_G2.der
-rwxr-xr-x 1 root root  586 2025-11-25 05:49:40.000000000 +0000 DigiCert_Assured_ID_Root_G3.der
-rwxr-xr-x 1 root root  947 2025-11-25 05:49:40.000000000 +0000 DigiCert_Global_Root_CA.der
-rwxr-xr-x 1 root root  914 2025-11-25 05:49:40.000000000 +0000 DigiCert_Global_Root_G2.der
-rwxr-xr-x 1 root root  579 2025-11-25 05:49:40.000000000 +0000 DigiCert_Global_Root_G3.der
-rwxr-xr-x 1 root root  969 2025-11-25 05:49:40.000000000 +0000 DigiCert_High_Assurance_EV_Root_CA.der
-rwxr-xr-x 1 root root  541 2025-11-25 05:49:40.000000000 +0000 DigiCert_TLS_ECC_P384_Root_G5.der
-rwxr-xr-x 1 root root 1386 2025-11-25 05:49:40.000000000 +0000 DigiCert_TLS_RSA4096_Root_G5.der
-rwxr-xr-x 1 root root 1428 2025-11-25 05:49:40.000000000 +0000 DigiCert_Trusted_Root_G4.der
-rwxr-xr-x 1 root root  546 2025-11-25 05:49:40.000000000 +0000 GlobalSign_ECC_Root_CA_-_R5.der
-rwxr-xr-x 1 root root  889 2025-11-25 05:49:40.000000000 +0000 GlobalSign_Root_CA.der
-rwxr-xr-x 1 root root  867 2025-11-25 05:49:40.000000000 +0000 GlobalSign_Root_CA_-_R3.der
-rwxr-xr-x 1 root root 1415 2025-11-25 05:49:40.000000000 +0000 GlobalSign_Root_CA_-_R6.der
-rwxr-xr-x 1 root root  527 2025-11-25 05:49:40.000000000 +0000 GlobalSign_Root_E46.der
-rwxr-xr-x 1 root root 1374 2025-11-25 05:49:40.000000000 +0000 GlobalSign_Root_R46.der
-rwxr-xr-x 1 root root 1028 2025-11-25 05:49:40.000000000 +0000 Go_Daddy_Class_2_CA.der
-rwxr-xr-x 1 root root  969 2025-11-25 05:49:40.000000000 +0000 Go_Daddy_Root_Certificate_Authority_-_G2.der
-rwxr-xr-x 1 root root 1391 2025-11-25 05:49:40.000000000 +0000 ISRG_Root_X1.der
-rwxr-xr-x 1 root root  543 2025-11-25 05:49:40.000000000 +0000 ISRG_Root_X2.der
-rwxr-xr-x 1 root root  574 2025-11-25 05:49:40.000000000 +0000 Sectigo_Public_Server_Authentication_Root_E46.der
-rwxr-xr-x 1 root root 1422 2025-11-25 05:49:40.000000000 +0000 Sectigo_Public_Server_Authentication_Root_R46.der
-rwxr-xr-x 1 root root  659 2025-11-25 05:49:40.000000000 +0000 USERTrustECCCertificationAuthority.der
-rwxr-xr-x 1 root root 1506 2025-11-25 05:49:40.000000000 +0000 USERTrustRSACertificationAuthority.der
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 gsma

/nova/etc/ca/gsma:
total 8
-rwxr-xr-x 1 root root 589 2025-11-25 05:49:40.000000000 +0000 gsma_digicert.der
-rwxr-xr-x 1 root root 507 2025-11-25 05:49:40.000000000 +0000 gsma_sealsq.der

/nova/etc/leds:
total 124
-rwxr-xr-x 1 root root 123898 2026-01-08 09:43:22.000000000 +0000 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2026-01-08 09:43:22.000000000 +0000 system.x3

/nova/etc/pciinfo:
total 160
-rwxr-xr-x 1 root root 162169 2026-01-08 09:43:22.000000000 +0000 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 101 2026-01-08 09:43:22.000000000 +0000 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 992 2026-01-08 09:43:22.000000000 +0000 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2026-01-08 09:43:22.000000000 +0000 system.x3

/nova/etc/upnp:
total 64
-rwxr-xr-x 1 root root  3378 2025-11-25 05:49:41.000000000 +0000 connectionmanager.xml
-rwxr-xr-x 1 root root  5684 2025-11-25 05:49:41.000000000 +0000 contentdirectory.xml
-rwxr-xr-x 1 root root  8764 2025-11-25 05:49:41.000000000 +0000 logo120.png
-rwxr-xr-x 1 root root   930 2025-11-14 09:51:59.000000000 +0000 logo16.gif
-rwxr-xr-x 1 root root  1173 2025-11-14 09:51:59.000000000 +0000 logo32.gif
-rwxr-xr-x 1 root root  1504 2025-11-14 09:51:59.000000000 +0000 logo48.gif
-rwxr-xr-x 1 root root   735 2025-11-14 09:51:59.000000000 +0000 osinfo.xml
-rwxr-xr-x 1 root root  5928 2025-11-14 09:51:59.000000000 +0000 wancommonifcfg.xml
-rwxr-xr-x 1 root root 13444 2025-11-14 09:51:59.000000000 +0000 wanipconn.xml

/nova/etc/user:
total 4
-rwxr-xr-x 1 root root 2230 2026-01-08 09:43:22.000000000 +0000 system.x3

/nova/etc/www:
total 4
-rwxr-xr-x 1 root root 2458 2026-01-08 09:43:22.000000000 +0000 system.x3

/nova/lib:
total 16
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 defconf
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 profiler
-rwxr-xr-x 1 root root 4074 2026-01-06 09:37:39.000000000 +0000 xmlnames2

/nova/lib/console:
total 2368
-rwxr-xr-x 1 root root 2416062 2026-01-08 09:51:21.000000000 +0000 1073741824.mem
-rwxr-xr-x 1 root root     510 2025-11-14 09:51:57.000000000 +0000 logo.txt
-rwxr-xr-x 1 root root      18 2025-11-25 05:49:40.000000000 +0000 sublogo.txt

/nova/lib/defconf:
total 100
-rwxr-xr-x 1 root root   567 2025-11-14 09:51:57.000000000 +0000 defconf
-rwxr-xr-x 1 root root  4995 2025-11-25 05:49:40.000000000 +0000 defconf-caps
-rwxr-xr-x 1 root root  3700 2025-11-25 05:49:40.000000000 +0000 defconf-wps-sync
-rwxr-xr-x 1 root root 85713 2026-01-06 15:15:42.000000000 +0000 get-custom-defconf

/nova/lib/profiler:
total 16
-rwxr-xr-x 1 root root 15668 2026-01-08 10:24:39.000000000 +0000 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 480
-rwxr-xr-x 1 root root 395976 2026-01-08 10:25:22.000000000 +0000 mke2fs
-rwxr-xr-x 1 root root  24892 2026-01-08 09:43:19.000000000 +0000 nandfix
-rwxr-xr-x 1 root root  63768 2026-01-08 09:46:45.000000000 +0000 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2026-01-08 10:41:38.000000000 +0000 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 deinstall
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 lock
lrwxrwxrwx 1 root root    8 2026-01-08 10:41:38.000000000 +0000 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2026-01-08 10:41:38.000000000 +0000 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2026-01-08 10:41:38.000000000 +0000 post
lrwxrwxrwx 1 root root    7 2026-01-08 10:41:38.000000000 +0000 run -> /rw/run
lrwxrwxrwx 1 root root    4 2026-01-08 10:41:38.000000000 +0000 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

