### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 9499114 bytes, 794 inodes, blocksize: 524288 bytes, created: Fri Sep 12 10:04:40 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:15.000000000 +0100 bin
drwxr-xr-x 9 root root 4096 2025-09-12 11:04:14.000000000 +0100 bndl
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 boot
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:15.000000000 +0100 dev
lrwxrwxrwx 1 root root   11 2025-09-12 11:04:15.000000000 +0100 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:15.000000000 +0100 etc
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:15.000000000 +0100 flash
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-09-12 11:04:15.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-09-12 11:04:15.000000000 +0100 nova
lrwxrwxrwx 1 root root    9 2025-09-12 11:04:15.000000000 +0100 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:15.000000000 +0100 proc
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:15.000000000 +0100 ram
lrwxrwxrwx 1 root root    9 2025-09-12 11:04:15.000000000 +0100 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 sbin
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:15.000000000 +0100 sys
lrwxrwxrwx 1 root root    7 2025-09-12 11:04:15.000000000 +0100 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2025-09-12 11:04:15.000000000 +0100 var

/bin:
total 228
lrwxrwxrwx 1 root root     21 2025-09-12 11:04:15.000000000 +0100 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root  13724 2025-09-12 10:09:17.000000000 +0100 catlog
lrwxrwxrwx 1 root root     15 2025-09-12 11:04:15.000000000 +0100 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root     15 2025-09-12 11:04:15.000000000 +0100 login -> /nova/bin/login
-rwxr-xr-x 1 root root  19552 2025-09-12 10:47:03.000000000 +0100 mkexfatfs
-rwxr-xr-x 1 root root   9416 2025-09-12 10:09:17.000000000 +0100 pakp
lrwxrwxrwx 1 root root     21 2025-09-12 11:04:15.000000000 +0100 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root     15 2025-09-12 11:04:15.000000000 +0100 shell -> /nova/bin/login
-rwxr-xr-x 1 root root 183480 2025-09-12 10:47:50.000000000 +0100 sshfs

/bndl:
total 28
drwxr-xr-x 4 root root 4096 2025-09-12 11:04:14.000000000 +0100 advanced-tools
drwxr-xr-x 5 root root 4096 2025-09-12 11:04:14.000000000 +0100 dhcp
drwxr-xr-x 5 root root 4096 2025-09-12 11:04:14.000000000 +0100 hotspot
drwxr-xr-x 4 root root 4096 2025-09-12 11:04:14.000000000 +0100 ipv6
drwxr-xr-x 5 root root 4096 2025-09-12 11:04:14.000000000 +0100 ppp
drwxr-xr-x 5 root root 4096 2025-09-12 11:04:14.000000000 +0100 security
drwxr-xr-x 5 root root 4096 2025-09-12 11:04:14.000000000 +0100 wifi

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-09-12 11:04:14.000000000 +0100 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 webfig

/bndl/advanced-tools/home/web/webfig:
total 8
-rw-r--r-- 1 root root 2360 2025-09-12 10:48:50.000000000 +0100 advtool-b6a18e54d46e.jg.gz
-rwxr-xr-x 1 root root  107 2025-09-12 10:48:50.000000000 +0100 advtool.info
lrwxrwxrwx 1 root root   26 2025-09-12 10:50:20.000000000 +0100 advtool.jg.gz -> advtool-b6a18e54d46e.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 lib

/bndl/advanced-tools/nova/bin:
total 208
-rwxr-xr-x 1 root root 30416 2025-09-12 10:48:23.000000000 +0100 ddns
-rwxr-xr-x 1 root root 13716 2025-09-12 10:48:05.000000000 +0100 fping
-rwxr-xr-x 1 root root 17972 2025-09-12 10:48:41.000000000 +0100 macscan
-rwxr-xr-x 1 root root 67536 2025-09-12 10:50:20.000000000 +0100 netwatch
-rwxr-xr-x 1 root root 17864 2025-09-12 10:48:07.000000000 +0100 pspeed
-rwxr-xr-x 1 root root 34540 2025-09-12 10:48:54.000000000 +0100 scanner
-rwxr-xr-x 1 root root 13728 2025-09-12 10:49:02.000000000 +0100 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 console

/bndl/advanced-tools/nova/lib/console:
total 28
-rwxr-xr-x 1 root root 25305 2025-09-12 10:48:34.000000000 +0100 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 home
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-09-12 11:04:14.000000000 +0100 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 webfig

/bndl/dhcp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4531 2025-09-12 10:49:05.000000000 +0100 dhcp-03d3c0715695.jg.gz
-rwxr-xr-x 1 root root  101 2025-09-12 10:49:05.000000000 +0100 dhcp.info
lrwxrwxrwx 1 root root   23 2025-09-12 10:51:44.000000000 +0100 dhcp.jg.gz -> dhcp-03d3c0715695.jg.gz

/bndl/dhcp/lib:
total 96
-rwxr-xr-x 1 root root 96572 2025-09-12 10:48:38.000000000 +0100 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 lib

/bndl/dhcp/nova/bin:
total 312
-rwxr-xr-x 1 root root 215740 2025-09-12 10:51:06.000000000 +0100 dhcp
-rwxr-xr-x 1 root root 100672 2025-09-12 10:51:44.000000000 +0100 dhcpclient

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 console

/bndl/dhcp/nova/lib/console:
total 112
-rwxr-xr-x 1 root root 112156 2025-09-12 10:49:05.000000000 +0100 1128267776.mem

/bndl/hotspot:
total 12
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-09-12 11:04:14.000000000 +0100 nova

/bndl/hotspot/home:
total 4
drwxr-xr-x 4 root root 4096 2025-09-12 11:04:14.000000000 +0100 web

/bndl/hotspot/home/web:
total 8
drwxr-xr-x 5 root root 4096 2025-09-12 11:04:14.000000000 +0100 hotspot
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 webfig

/bndl/hotspot/home/web/hotspot:
total 68
-rw-r--r-- 1 root root 1094 2025-09-12 10:01:33.000000000 +0100 alogin.html
-rw-r--r-- 1 root root  311 2025-09-12 10:01:33.000000000 +0100 api.json
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 css
-rw-r--r-- 1 root root  640 2025-09-12 10:01:33.000000000 +0100 error.html
-rw-r--r-- 1 root root 3719 2025-09-12 10:01:33.000000000 +0100 errors.txt
-rw-r--r-- 1 root root  903 2025-09-12 10:01:33.000000000 +0100 favicon.ico
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 img
-rw-r--r-- 1 root root 4423 2025-09-12 10:01:33.000000000 +0100 login.html
-rw-r--r-- 1 root root 1459 2025-09-12 10:01:33.000000000 +0100 logout.html
-rw-r--r-- 1 root root 7218 2025-09-12 10:01:33.000000000 +0100 md5.js
-rw-r--r-- 1 root root 1204 2025-09-12 10:01:33.000000000 +0100 radvert.html
-rw-r--r-- 1 root root  330 2025-09-12 10:01:33.000000000 +0100 redirect.html
-rw-r--r-- 1 root root  877 2025-09-12 10:01:33.000000000 +0100 rlogin.html
-rw-r--r-- 1 root root 2855 2025-09-12 10:01:33.000000000 +0100 status.html
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 xml

/bndl/hotspot/home/web/hotspot/css:
total 4
-rw-r--r-- 1 root root 4053 2025-09-12 10:01:33.000000000 +0100 style.css

/bndl/hotspot/home/web/hotspot/img:
total 8
-rw-r--r-- 1 root root 644 2025-09-12 10:01:33.000000000 +0100 password.svg
-rw-r--r-- 1 root root 444 2025-09-12 10:01:33.000000000 +0100 user.svg

/bndl/hotspot/home/web/hotspot/xml:
total 32
-rw-r--r-- 1 root root 4251 2025-09-12 10:01:33.000000000 +0100 WISPAccessGatewayParam.xsd
-rw-r--r-- 1 root root  839 2025-09-12 10:01:33.000000000 +0100 alogin.html
-rw-r--r-- 1 root root  428 2025-09-12 10:01:33.000000000 +0100 error.html
-rw-r--r-- 1 root root  372 2025-09-12 10:01:33.000000000 +0100 flogout.html
-rw-r--r-- 1 root root  809 2025-09-12 10:01:33.000000000 +0100 login.html
-rw-r--r-- 1 root root  370 2025-09-12 10:01:33.000000000 +0100 logout.html
-rw-r--r-- 1 root root  545 2025-09-12 10:01:33.000000000 +0100 rlogin.html

/bndl/hotspot/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4216 2025-09-12 10:50:41.000000000 +0100 hotspot-f1e2e1d4af99.jg.gz
-rwxr-xr-x 1 root root  107 2025-09-12 10:50:41.000000000 +0100 hotspot.info
lrwxrwxrwx 1 root root   26 2025-09-12 10:51:07.000000000 +0100 hotspot.jg.gz -> hotspot-f1e2e1d4af99.jg.gz

/bndl/hotspot/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 modules

/bndl/hotspot/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 5.6.3

/bndl/hotspot/lib/modules/5.6.3:
total 4
-rw-r--r-- 1 root root    0 2025-09-12 10:50:48.000000000 +0100 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 net

/bndl/hotspot/lib/modules/5.6.3/net:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 ipv4

/bndl/hotspot/lib/modules/5.6.3/net/ipv4:
total 64
-rw-r--r-- 1 root root 62088 2025-09-12 10:50:24.000000000 +0100 unicl.ko

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 lib

/bndl/hotspot/nova/bin:
total 232
-rwxr-xr-x 1 root root 236120 2025-09-12 10:50:17.000000000 +0100 hotspot

/bndl/hotspot/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 radius

/bndl/hotspot/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-09-12 10:50:23.000000000 +0100 hotspot.x3

/bndl/hotspot/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 console

/bndl/hotspot/nova/lib/console:
total 84
-rwxr-xr-x 1 root root 82402 2025-09-12 10:50:14.000000000 +0100 1132462080.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-09-12 11:04:14.000000000 +0100 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 webfig

/bndl/ipv6/home/web/webfig:
total 12
-rw-r--r-- 1 root root 8166 2025-09-12 10:48:57.000000000 +0100 ipv6-444ed033e3eb.jg.gz
-rwxr-xr-x 1 root root  101 2025-09-12 10:48:57.000000000 +0100 ipv6.info
lrwxrwxrwx 1 root root   23 2025-09-12 10:49:12.000000000 +0100 ipv6.jg.gz -> ipv6-444ed033e3eb.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-09-12 11:04:14.000000000 +0100 lib

/bndl/ipv6/nova/bin:
total 92
-rwxr-xr-x 1 root root 30360 2025-09-12 10:49:12.000000000 +0100 ippool6
-rwxr-xr-x 1 root root 59232 2025-09-12 10:48:33.000000000 +0100 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 route

/bndl/ipv6/nova/lib/console:
total 184
-rwxr-xr-x 1 root root 187824 2025-09-12 10:48:45.000000000 +0100 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2025-09-12 10:01:33.000000000 +0100 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-09-12 11:04:14.000000000 +0100 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 webfig

/bndl/ppp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 6458 2025-09-12 10:51:37.000000000 +0100 ppp-38fb56894a32.jg.gz
-rwxr-xr-x 1 root root   99 2025-09-12 10:51:37.000000000 +0100 ppp.info
lrwxrwxrwx 1 root root   22 2025-09-12 10:58:24.000000000 +0100 ppp.jg.gz -> ppp-38fb56894a32.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2025-09-12 11:04:14.000000000 +0100 5.6.3

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2025-09-12 10:58:10.000000000 +0100 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 148
-rw-r--r-- 1 root root 19456 2025-09-12 10:45:16.000000000 +0100 ppp_async.ko
-rw-r--r-- 1 root root 10112 2025-09-12 10:45:16.000000000 +0100 ppp_deflate.ko
-rw-r--r-- 1 root root 49488 2025-09-12 10:45:16.000000000 +0100 ppp_generic.ko
-rw-r--r-- 1 root root 11880 2025-09-12 10:45:16.000000000 +0100 ppp_mppe.ko
-rw-r--r-- 1 root root 17816 2025-09-12 10:45:16.000000000 +0100 ppp_synctty.ko
-rw-r--r-- 1 root root 20408 2025-09-12 10:45:16.000000000 +0100 pppoe.ko
-rw-r--r-- 1 root root  8272 2025-09-12 10:45:16.000000000 +0100 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 124
-rw-r--r-- 1 root root 52408 2025-09-12 10:50:46.000000000 +0100 ovpn.ko
-rw-r--r-- 1 root root  9880 2025-09-12 10:51:08.000000000 +0100 pppoefp.ko
-rw-r--r-- 1 root root 59736 2025-09-12 10:50:45.000000000 +0100 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 88
-rw-r--r-- 1 root root 67464 2025-09-12 10:49:45.000000000 +0100 l2tp.ko
-rw-r--r-- 1 root root 17064 2025-09-12 10:48:42.000000000 +0100 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-09-12 11:04:14.000000000 +0100 etc
drwxr-xr-x 4 root root 4096 2025-09-12 11:04:14.000000000 +0100 lib

/bndl/ppp/nova/bin:
total 540
-rwxr-xr-x 1 root root 548876 2025-09-12 10:57:40.000000000 +0100 ppp
lrwxrwxrwx 1 root root      3 2025-09-12 10:57:40.000000000 +0100 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2025-09-12 10:48:11.000000000 +0100 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2025-09-12 10:48:11.000000000 +0100 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 profiler

/bndl/ppp/nova/lib/console:
total 152
-rwxr-xr-x 1 root root 154784 2025-09-12 10:51:23.000000000 +0100 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 8
-rwxr-xr-x 1 root root 5304 2025-09-12 10:52:47.000000000 +0100 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-09-12 11:04:14.000000000 +0100 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 webfig

/bndl/security/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4365 2025-09-12 10:56:25.000000000 +0100 secure-0a49065a769f.jg.gz
-rwxr-xr-x 1 root root  105 2025-09-12 10:56:25.000000000 +0100 secure.info
lrwxrwxrwx 1 root root   25 2025-09-12 11:04:05.000000000 +0100 secure.jg.gz -> secure-0a49065a769f.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 5.6.3

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2025-09-12 11:04:14.000000000 +0100 kernel
-rw-r--r-- 1 root root  106 2025-09-12 11:03:12.000000000 +0100 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 crypto
drwxr-xr-x 5 root root 4096 2025-09-12 11:04:14.000000000 +0100 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 96
-rw-r--r-- 1 root root  9264 2025-09-12 10:45:13.000000000 +0100 blowfish_common.ko
-rw-r--r-- 1 root root  6848 2025-09-12 10:45:13.000000000 +0100 blowfish_generic.ko
-rw-r--r-- 1 root root 20600 2025-09-12 10:45:14.000000000 +0100 camellia_generic.ko
-rw-r--r-- 1 root root 13232 2025-09-12 10:45:14.000000000 +0100 chacha20poly1305.ko
-rw-r--r-- 1 root root  5688 2025-09-12 10:45:14.000000000 +0100 echainiv.ko
-rw-r--r-- 1 root root 15400 2025-09-12 10:45:14.000000000 +0100 twofish_common.ko
-rw-r--r-- 1 root root  9384 2025-09-12 10:45:14.000000000 +0100 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 key
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 36
-rw-r--r-- 1 root root 13152 2025-09-12 10:45:23.000000000 +0100 ah4.ko
-rw-r--r-- 1 root root 18864 2025-09-12 10:45:23.000000000 +0100 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 44
-rw-r--r-- 1 root root 41768 2025-09-12 10:45:24.000000000 +0100 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 36
-rw-r--r-- 1 root root 35040 2025-09-12 10:45:26.000000000 +0100 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-09-12 11:04:14.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 lib

/bndl/security/nova/bin:
total 664
-rwxr-xr-x 1 root root 496300 2025-09-12 11:01:31.000000000 +0100 ipsec
lrwxrwxrwx 1 root root      5 2025-09-12 11:01:32.000000000 +0100 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 179672 2025-09-12 10:57:40.000000000 +0100 ssh
lrwxrwxrwx 1 root root      3 2025-09-12 10:58:18.000000000 +0100 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-09-12 10:55:49.000000000 +0100 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2025-09-12 10:55:49.000000000 +0100 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 console

/bndl/security/nova/lib/console:
total 88
-rwxr-xr-x 1 root root 89848 2025-09-12 10:56:11.000000000 +0100 1077936128.mem

/bndl/wifi:
total 12
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-09-12 11:04:14.000000000 +0100 nova

/bndl/wifi/home:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 web

/bndl/wifi/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 webfig

/bndl/wifi/home/web/webfig:
total 16
-rw-r--r-- 1 root root 9158 2025-09-12 10:48:22.000000000 +0100 wave2-c41a6c2ce92c.jg.gz
-rwxr-xr-x 1 root root  103 2025-09-12 10:48:22.000000000 +0100 wave2.info
lrwxrwxrwx 1 root root   24 2025-09-12 11:00:47.000000000 +0100 wave2.jg.gz -> wave2-c41a6c2ce92c.jg.gz

/bndl/wifi/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 modules

/bndl/wifi/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 5.6.3

/bndl/wifi/lib/modules/5.6.3:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 misc
-rw-r--r-- 1 root root   23 2025-09-12 11:00:35.000000000 +0100 modules.dep.wifi

/bndl/wifi/lib/modules/5.6.3/misc:
total 56
-rw-r--r-- 1 root root 55696 2025-09-12 10:50:22.000000000 +0100 c2.ko

/bndl/wifi/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-09-12 11:04:14.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 lib

/bndl/wifi/nova/bin:
total 1232
-rwxr-xr-x 1 root root 1257516 2025-09-12 10:58:34.000000000 +0100 ww2

/bndl/wifi/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 radius

/bndl/wifi/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 183 2025-09-12 10:48:03.000000000 +0100 wifi.x3

/bndl/wifi/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-09-12 10:48:03.000000000 +0100 wifi.x3

/bndl/wifi/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 console

/bndl/wifi/nova/lib/console:
total 212
-rwxr-xr-x 1 root root 214064 2025-09-12 10:48:32.000000000 +0100 1275068416.mem

/boot:
total 0

/dev:
total 0

/etc:
total 692
-rw-r--r-- 1 root root  40340 2025-09-12 10:08:21.000000000 +0100 70x0-7.19.6.fwf
-rw-r--r-- 1 root root  31200 2025-09-12 10:10:32.000000000 +0100 a3700-7.19.6.fwf
-rw-r--r-- 1 root root  57048 2025-09-12 10:08:21.000000000 +0100 al64-7.19.6.fwf
-rw-r--r-- 1 root root  61816 2025-09-12 10:08:19.000000000 +0100 al64B-7.19.6.fwf
-rw-r--r-- 1 root root  53108 2025-09-12 10:08:23.000000000 +0100 al64v3-7.19.6.fwf
-rw-r--r-- 1 root root  49976 2025-09-12 10:08:35.000000000 +0100 dx2528-7.19.6.fwf
-rw-r--r-- 1 root root  12316 2025-09-12 10:02:04.000000000 +0100 fan_i2c.stm32
-rw-r--r-- 1 root root  38992 2025-09-12 10:08:36.000000000 +0100 ipq5300-7.19.6.fwf
-rw-r--r-- 1 root root  37256 2025-09-12 10:08:31.000000000 +0100 ipq6000-7.19.6.fwf
-rw-r--r-- 1 root root  39640 2025-09-12 10:08:33.000000000 +0100 ipq807x-7.19.6.fwf
-rw-r--r-- 1 root root  49204 2025-09-12 10:08:36.000000000 +0100 ipq9574-7.19.6.fwf
-rw-r--r-- 1 root root 130743 2025-09-12 10:02:04.000000000 +0100 license
-rw-r--r-- 1 root root  26440 2025-09-12 10:02:04.000000000 +0100 poe-pse-proxy.stm32
-rw-r--r-- 1 root root  13444 2025-09-12 10:02:04.000000000 +0100 pse-ch4-SUOUT_PSUCTRL.samd20
-rw-r--r-- 1 root root  13476 2025-09-12 10:02:04.000000000 +0100 pse-ch8-CRS328.samd20
-rw-r--r-- 1 root root  13604 2025-09-12 10:02:04.000000000 +0100 pse-ch8-RB5009.samd20
-rw-r--r-- 1 root root   4049 2025-09-12 10:02:04.000000000 +0100 stm8_hw_monitor.bin
lrwxrwxrwx 1 root root     24 2025-09-12 11:04:15.000000000 +0100 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2025-09-12 11:04:15.000000000 +0100 web

/home/web:
total 64
drwxr-xr-x 2 root root  4096 2025-09-12 11:04:14.000000000 +0100 assets
-rwxr-xr-x 1 root root 19357 2025-09-12 10:07:09.000000000 +0100 bth-files.html
-rwxr-xr-x 1 root root   600 2025-09-12 10:02:04.000000000 +0100 favicon.png
-rwxr-xr-x 1 root root   689 2025-09-12 10:02:04.000000000 +0100 favicon.svg
-rwxr-xr-x 1 root root   708 2025-09-12 10:02:02.000000000 +0100 graph.css
drwxr-xr-x 2 root root  4096 2025-09-12 11:04:14.000000000 +0100 help
-rwxr-xr-x 1 root root  1254 2025-09-12 10:02:04.000000000 +0100 index2.html
lrwxrwxrwx 1 root root    12 2025-09-12 10:47:59.000000000 +0100 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2025-09-12 10:02:04.000000000 +0100 logo.png
-rw-r--r-- 1 root root  2507 2025-09-12 10:02:04.000000000 +0100 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2025-09-12 10:02:04.000000000 +0100 robots.txt
drwxr-xr-x 2 root root  4096 2025-09-12 11:04:14.000000000 +0100 webfig
drwxr-xr-x 2 root root  4096 2025-09-12 11:04:15.000000000 +0100 winbox

/home/web/assets:
total 168
-rw-r--r-- 1 root root  19040 2025-09-12 10:02:04.000000000 +0100 400.woff2
-rw-r--r-- 1 root root  19156 2025-09-12 10:02:04.000000000 +0100 700.woff2
-rwxr-xr-x 1 root root    799 2025-09-12 10:02:04.000000000 +0100 script-bd71a1293274.js
-rwxr-xr-x 1 root root 123976 2025-09-12 10:02:04.000000000 +0100 style-ae67df160dad.css

/home/web/help:
total 4
-rw-r--r-- 1 root root 118 2025-09-12 10:02:04.000000000 +0100 license.html

/home/web/webfig:
total 688
-rwxr-xr-x 1 root root   9157 2025-09-12 10:05:58.000000000 +0100 curve255-541e54a862be.js
-rwxr-xr-x 1 root root     70 2025-09-12 10:10:59.000000000 +0100 icons.info
-rwxr-xr-x 1 root root  24341 2025-09-12 10:02:01.000000000 +0100 icons.png
-rwxr-xr-x 1 root root     55 2025-09-12 10:10:59.000000000 +0100 icons24.info
-rwxr-xr-x 1 root root  39797 2025-09-12 10:02:01.000000000 +0100 icons24.png
-rwxr-xr-x 1 root root     55 2025-09-12 10:10:59.000000000 +0100 icons32.info
-rwxr-xr-x 1 root root  55094 2025-09-12 10:02:01.000000000 +0100 icons32.png
-rwxr-xr-x 1 root root  21911 2025-09-12 10:05:58.000000000 +0100 index.html
lrwxrwxrwx 1 root root     13 2025-09-12 10:05:59.000000000 +0100 list -> /ram/gum.list
-rwxr-xr-x 1 root root 413986 2025-09-12 10:05:58.000000000 +0100 master-ef1b23f04037.js
-rw-r--r-- 1 root root 108927 2025-09-12 10:11:01.000000000 +0100 roteros-01a66be2126a.jg.gz
-rwxr-xr-x 1 root root    109 2025-09-12 10:11:01.000000000 +0100 roteros.info
lrwxrwxrwx 1 root root     26 2025-09-12 10:47:59.000000000 +0100 roteros.jg.gz -> roteros-01a66be2126a.jg.gz

/home/web/winbox:
total 0

/lib:
total 1676
drwxr-xr-x 3 root root   4096 2025-09-12 11:04:14.000000000 +0100 firmware
-rwxr-xr-x 1 root root 247440 2025-09-12 10:04:09.000000000 +0100 libc.so
-rwxr-xr-x 1 root root  71836 2025-09-12 10:09:50.000000000 +0100 libeap.so
-rwxr-xr-x 1 root root  21836 2025-09-12 10:06:06.000000000 +0100 libjson.so
-rwxr-xr-x 1 root root 145960 2025-09-12 10:07:57.000000000 +0100 librappsup.so
-rwxr-xr-x 1 root root 100532 2025-09-12 10:07:00.000000000 +0100 libubox.so
-rwxr-xr-x 1 root root  67508 2025-09-12 10:05:57.000000000 +0100 libuc++.so
-rwxr-xr-x 1 root root 220392 2025-09-12 10:08:40.000000000 +0100 libucrypto.so
-rwxr-xr-x 1 root root  26140 2025-09-12 10:06:54.000000000 +0100 libufiber.so
-rwxr-xr-x 1 root root  59280 2025-09-12 10:06:59.000000000 +0100 libuhttp.so
-rwxr-xr-x 1 root root 558600 2025-09-12 10:06:42.000000000 +0100 libumsg.so
-rwxr-xr-x 1 root root  32696 2025-09-12 10:09:06.000000000 +0100 liburadius.so
-rwxr-xr-x 1 root root   9496 2025-09-12 10:08:56.000000000 +0100 libuxml++.so
-rwxr-xr-x 1 root root  34608 2025-09-12 10:06:02.000000000 +0100 libwww.so
-rwxr-xr-x 1 root root  13536 2025-09-12 10:06:06.000000000 +0100 libxml.so
-rwxr-xr-x 1 root root  67056 2025-09-12 10:06:05.000000000 +0100 libz.so
drwxr-xr-x 3 root root   4096 2025-09-12 11:04:14.000000000 +0100 modules
lrwxrwxrwx 1 root root     27 2025-09-12 11:04:15.000000000 +0100 valgrind -> /pckg/valgrind/lib/valgrind

/lib/firmware:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 inside-secure

/lib/firmware/inside-secure:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 eip197_minifw

/lib/firmware/inside-secure/eip197_minifw:
total 8
-rw-r--r-- 1 root root 100 2025-09-12 10:02:04.000000000 +0100 ifpp.bin
-rw-r--r-- 1 root root 108 2025-09-12 10:02:04.000000000 +0100 ipue.bin

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2025-09-12 11:04:14.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 6 root root 4096 2025-09-12 11:04:14.000000000 +0100 drivers
drwxr-xr-x 8 root root 4096 2025-09-12 11:04:14.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 misc
-rw-r--r-- 1 root root 3027 2025-09-12 10:47:54.000000000 +0100 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-09-12 11:04:14.000000000 +0100 net

/lib/modules/5.6.3/drivers:
total 16
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 char
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 crypto
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 misc
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 net

/lib/modules/5.6.3/drivers/char:
total 64
-rw-r--r-- 1 root root 11744 2025-09-12 10:44:21.000000000 +0100 ac5_gwd.ko
-rw-r--r-- 1 root root  5160 2025-09-12 10:44:22.000000000 +0100 al_cause.ko
-rw-r--r-- 1 root root  9272 2025-09-12 10:44:21.000000000 +0100 armada3700_wdt.ko
-rw-r--r-- 1 root root 12920 2025-09-12 10:44:17.000000000 +0100 ipqhwmon.ko
-rw-r--r-- 1 root root 14080 2025-09-12 10:40:43.000000000 +0100 ticker.ko

/lib/modules/5.6.3/drivers/crypto:
total 116
-rw-r--r-- 1 root root 117504 2025-09-12 10:43:04.000000000 +0100 al_crypto.ko

/lib/modules/5.6.3/drivers/misc:
total 12
-rw-r--r-- 1 root root 11984 2025-09-12 10:44:19.000000000 +0100 al3hwmon.ko

/lib/modules/5.6.3/drivers/net:
total 3144
-rw-r--r-- 1 root root  115080 2025-09-12 10:42:54.000000000 +0100 al.ko
-rw-r--r-- 1 root root  242680 2025-09-12 10:44:33.000000000 +0100 alder_eth.ko
-rw-r--r-- 1 root root   48664 2025-09-12 10:42:31.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root   57616 2025-09-12 10:41:16.000000000 +0100 atl1c.ko
-rw-r--r-- 1 root root  130256 2025-09-12 10:44:11.000000000 +0100 hk_eth.ko
-rw-r--r-- 1 root root   13656 2025-09-12 10:42:03.000000000 +0100 imq.ko
-rw-r--r-- 1 root root   56912 2025-09-12 10:42:31.000000000 +0100 marvell_amethyst.ko
-rw-r--r-- 1 root root   15632 2025-09-12 10:45:45.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root   45104 2025-09-12 10:44:05.000000000 +0100 mvneta.ko
-rw-r--r-- 1 root root   99672 2025-09-12 10:44:21.000000000 +0100 mvpp2.ko
-rw-r--r-- 1 root root  268760 2025-09-12 10:45:47.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root  218560 2025-09-12 10:41:56.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root 1002616 2025-09-12 10:45:17.000000000 +0100 prestera_dx_mac.ko
-rw-r--r-- 1 root root   74632 2025-09-12 10:42:50.000000000 +0100 qca_nss_gmac.ko
-rw-r--r-- 1 root root  234584 2025-09-12 10:43:49.000000000 +0100 quectel_mhi.ko
-rw-r--r-- 1 root root  227672 2025-09-12 10:44:14.000000000 +0100 quectel_sprd.ko
-rw-r--r-- 1 root root    5512 2025-09-12 10:42:01.000000000 +0100 sram.ko
-rw-r--r-- 1 root root  100704 2025-09-12 10:42:36.000000000 +0100 switch.ko
drwxr-xr-x 2 root root    4096 2025-09-12 11:04:14.000000000 +0100 usb
-rw-r--r-- 1 root root   31592 2025-09-12 10:40:45.000000000 +0100 via-velocity.ko
-rw-r--r-- 1 root root   49872 2025-09-12 10:44:28.000000000 +0100 virtio_net.ko
-rw-r--r-- 1 root root   60704 2025-09-12 10:44:32.000000000 +0100 vmxnet3.ko
-rw-r--r-- 1 root root   68824 2025-09-12 10:45:03.000000000 +0100 vxlan2.ko

/lib/modules/5.6.3/drivers/net/usb:
total 240
-rw-r--r-- 1 root root  97928 2025-09-12 10:44:07.000000000 +0100 fp_usbnet.ko
-rw-r--r-- 1 root root 146696 2025-09-12 10:43:42.000000000 +0100 mbim.ko

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-09-12 11:04:14.000000000 +0100 arch
drwxr-xr-x  2 root root 4096 2025-09-12 11:04:14.000000000 +0100 crypto
drwxr-xr-x  9 root root 4096 2025-09-12 11:04:14.000000000 +0100 drivers
drwxr-xr-x  7 root root 4096 2025-09-12 11:04:14.000000000 +0100 fs
drwxr-xr-x  5 root root 4096 2025-09-12 11:04:14.000000000 +0100 lib
drwxr-xr-x 12 root root 4096 2025-09-12 11:04:14.000000000 +0100 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 4 root root 4096 2025-09-12 11:04:14.000000000 +0100 arm64

/lib/modules/5.6.3/kernel/arch/arm64:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 crypto
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 oprofile

/lib/modules/5.6.3/kernel/arch/arm64/crypto:
total 32
-rw-r--r-- 1 root root 14744 2025-09-12 10:45:13.000000000 +0100 chacha-neon.ko
-rw-r--r-- 1 root root 12528 2025-09-12 10:45:13.000000000 +0100 poly1305-neon.ko

/lib/modules/5.6.3/kernel/arch/arm64/oprofile:
total 60
-rw-r--r-- 1 root root 59744 2025-09-12 10:45:13.000000000 +0100 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 52
-rw-r--r-- 1 root root  5072 2025-09-12 10:45:13.000000000 +0100 arc4.ko
-rw-r--r-- 1 root root 18016 2025-09-12 10:45:14.000000000 +0100 ccm.ko
-rw-r--r-- 1 root root  7552 2025-09-12 10:45:14.000000000 +0100 cmac.ko
-rw-r--r-- 1 root root  6096 2025-09-12 10:45:14.000000000 +0100 des_generic.ko
-rw-r--r-- 1 root root  6960 2025-09-12 10:45:14.000000000 +0100 md4.ko

/lib/modules/5.6.3/kernel/drivers:
total 28
drwxr-xr-x  4 root root 4096 2025-09-12 11:04:14.000000000 +0100 crypto
drwxr-xr-x  3 root root 4096 2025-09-12 11:04:14.000000000 +0100 dma
drwxr-xr-x  3 root root 4096 2025-09-12 11:04:14.000000000 +0100 hid
drwxr-xr-x  6 root root 4096 2025-09-12 11:04:14.000000000 +0100 net
drwxr-xr-x  3 root root 4096 2025-09-12 11:04:14.000000000 +0100 pci
drwxr-xr-x  2 root root 4096 2025-09-12 11:04:14.000000000 +0100 phy
drwxr-xr-x 10 root root 4096 2025-09-12 11:04:14.000000000 +0100 usb

/lib/modules/5.6.3/kernel/drivers/crypto:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 inside-secure
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 qce

/lib/modules/5.6.3/kernel/drivers/crypto/inside-secure:
total 160
-rw-r--r-- 1 root root 162328 2025-09-12 10:45:14.000000000 +0100 crypto_safexcel.ko

/lib/modules/5.6.3/kernel/drivers/crypto/qce:
total 48
-rw-r--r-- 1 root root 45664 2025-09-12 10:45:14.000000000 +0100 qcrypto.ko

/lib/modules/5.6.3/kernel/drivers/dma:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 al

/lib/modules/5.6.3/kernel/drivers/dma/al:
total 52
-rw-r--r-- 1 root root 49320 2025-09-12 10:45:14.000000000 +0100 al_dma_drv.ko

/lib/modules/5.6.3/kernel/drivers/hid:
total 100
-rw-r--r-- 1 root root  5520 2025-09-12 10:45:14.000000000 +0100 hid-generic.ko
-rw-r--r-- 1 root root 86168 2025-09-12 10:45:14.000000000 +0100 hid.ko
drwxr-xr-x 2 root root  4096 2025-09-12 11:04:14.000000000 +0100 usbhid

/lib/modules/5.6.3/kernel/drivers/hid/usbhid:
total 44
-rw-r--r-- 1 root root 44752 2025-09-12 10:45:14.000000000 +0100 usbhid.ko

/lib/modules/5.6.3/kernel/drivers/net:
total 200
drwxr-xr-x 2 root root  4096 2025-09-12 11:04:14.000000000 +0100 bonding
-rw-r--r-- 1 root root 47176 2025-09-12 10:45:16.000000000 +0100 macsec.ko
-rw-r--r-- 1 root root 27440 2025-09-12 10:45:16.000000000 +0100 macvlan.ko
drwxr-xr-x 2 root root  4096 2025-09-12 11:04:14.000000000 +0100 slip
-rw-r--r-- 1 root root 54736 2025-09-12 10:45:17.000000000 +0100 tun.ko
drwxr-xr-x 2 root root  4096 2025-09-12 11:04:14.000000000 +0100 usb
-rw-r--r-- 1 root root 23200 2025-09-12 10:45:17.000000000 +0100 veth.ko
-rw-r--r-- 1 root root 26352 2025-09-12 10:45:17.000000000 +0100 vrf.ko
drwxr-xr-x 2 root root  4096 2025-09-12 11:04:14.000000000 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 176
-rw-r--r-- 1 root root 177016 2025-09-12 10:45:15.000000000 +0100 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 7600 2025-09-12 10:45:17.000000000 +0100 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 260
-rw-r--r-- 1 root root 25952 2025-09-12 10:45:17.000000000 +0100 ax88179_178a.ko
-rw-r--r-- 1 root root 56184 2025-09-12 10:45:17.000000000 +0100 hso.ko
-rw-r--r-- 1 root root 75760 2025-09-12 10:45:17.000000000 +0100 r8152.ko
-rw-r--r-- 1 root root 19144 2025-09-12 10:45:17.000000000 +0100 sierra_net.ko
-rw-r--r-- 1 root root 35032 2025-09-12 10:45:17.000000000 +0100 smsc95xx.ko
-rw-r--r-- 1 root root 42696 2025-09-12 10:45:17.000000000 +0100 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 124
-rw-r--r-- 1 root root 126656 2025-09-12 10:45:17.000000000 +0100 wireguard.ko

/lib/modules/5.6.3/kernel/drivers/pci:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 controller

/lib/modules/5.6.3/kernel/drivers/pci/controller:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 dwc

/lib/modules/5.6.3/kernel/drivers/pci/controller/dwc:
total 56
-rw-r--r-- 1 root root 56704 2025-09-12 10:45:17.000000000 +0100 pcie-qcom.ko

/lib/modules/5.6.3/kernel/drivers/phy:
total 12
-rw-r--r-- 1 root root 10552 2025-09-12 10:45:17.000000000 +0100 phy-qcom-dwc3.ko

/lib/modules/5.6.3/kernel/drivers/usb:
total 32
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 class
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 common
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 core
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 dwc3
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 host
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 phy
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 serial
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 storage

/lib/modules/5.6.3/kernel/drivers/usb/class:
total 40
-rw-r--r-- 1 root root 38256 2025-09-12 10:45:18.000000000 +0100 cdc-acm.ko

/lib/modules/5.6.3/kernel/drivers/usb/common:
total 12
-rw-r--r-- 1 root root 10688 2025-09-12 10:45:18.000000000 +0100 usb-common.ko

/lib/modules/5.6.3/kernel/drivers/usb/core:
total 284
-rw-r--r-- 1 root root 288688 2025-09-12 10:45:18.000000000 +0100 usbcore.ko

/lib/modules/5.6.3/kernel/drivers/usb/dwc3:
total 64
-rw-r--r-- 1 root root 12208 2025-09-12 10:45:19.000000000 +0100 dwc3-of-simple.ko
-rw-r--r-- 1 root root 17608 2025-09-12 10:45:19.000000000 +0100 dwc3-qcom.ko
-rw-r--r-- 1 root root 28912 2025-09-12 10:45:19.000000000 +0100 dwc3.ko

/lib/modules/5.6.3/kernel/drivers/usb/host:
total 240
-rw-r--r-- 1 root root  50224 2025-09-12 10:45:19.000000000 +0100 ehci-hcd.ko
-rw-r--r-- 1 root root  11064 2025-09-12 10:45:19.000000000 +0100 ehci-orion.ko
-rw-r--r-- 1 root root 149664 2025-09-12 10:45:19.000000000 +0100 xhci-hcd.ko
-rw-r--r-- 1 root root  10296 2025-09-12 10:45:19.000000000 +0100 xhci-pci.ko
-rw-r--r-- 1 root root  16112 2025-09-12 10:45:19.000000000 +0100 xhci-plat-hcd.ko

/lib/modules/5.6.3/kernel/drivers/usb/phy:
total 72
-rw-r--r-- 1 root root 17568 2025-09-12 10:45:19.000000000 +0100 phy-msm-qusb.ko
-rw-r--r-- 1 root root 21864 2025-09-12 10:45:19.000000000 +0100 phy-msm-ssusb-qmp.ko
-rw-r--r-- 1 root root  9312 2025-09-12 10:45:19.000000000 +0100 phy-qca-m31.ko
-rw-r--r-- 1 root root 16168 2025-09-12 10:45:19.000000000 +0100 phy-qca-uniphy.ko

/lib/modules/5.6.3/kernel/drivers/usb/serial:
total 400
-rw-r--r-- 1 root root  13760 2025-09-12 10:45:20.000000000 +0100 ch341.ko
-rw-r--r-- 1 root root  30640 2025-09-12 10:45:20.000000000 +0100 cp210x.ko
-rw-r--r-- 1 root root  93968 2025-09-12 10:45:20.000000000 +0100 ftdi_sio.ko
-rw-r--r-- 1 root root   8224 2025-09-12 10:45:20.000000000 +0100 ipw.ko
-rw-r--r-- 1 root root 114744 2025-09-12 10:45:20.000000000 +0100 option.ko
-rw-r--r-- 1 root root  22000 2025-09-12 10:45:20.000000000 +0100 pl2303.ko
-rw-r--r-- 1 root root  17864 2025-09-12 10:45:20.000000000 +0100 qcserial.ko
-rw-r--r-- 1 root root  20528 2025-09-12 10:45:20.000000000 +0100 sierra.ko
-rw-r--r-- 1 root root  15024 2025-09-12 10:45:20.000000000 +0100 usb_wwan.ko
-rw-r--r-- 1 root root  47280 2025-09-12 10:45:20.000000000 +0100 usbserial.ko

/lib/modules/5.6.3/kernel/drivers/usb/storage:
total 108
-rw-r--r-- 1 root root 107888 2025-09-12 10:45:20.000000000 +0100 usb-storage.ko

/lib/modules/5.6.3/kernel/fs:
total 20
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 cifs
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 exfat
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 isofs
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 ksmbd
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 ntfs3

/lib/modules/5.6.3/kernel/fs/cifs:
total 640
-rw-r--r-- 1 root root 652880 2025-09-12 10:45:20.000000000 +0100 cifs.ko

/lib/modules/5.6.3/kernel/fs/exfat:
total 100
-rw-r--r-- 1 root root 99000 2025-09-12 10:45:20.000000000 +0100 exfat.ko

/lib/modules/5.6.3/kernel/fs/isofs:
total 44
-rw-r--r-- 1 root root 42200 2025-09-12 10:45:20.000000000 +0100 isofs.ko

/lib/modules/5.6.3/kernel/fs/ksmbd:
total 324
-rw-r--r-- 1 root root 328536 2025-09-12 10:45:20.000000000 +0100 ksmbd.ko

/lib/modules/5.6.3/kernel/fs/ntfs3:
total 248
-rw-r--r-- 1 root root 253464 2025-09-12 10:45:21.000000000 +0100 ntfs3.ko

/lib/modules/5.6.3/kernel/lib:
total 52
-rw-r--r-- 1 root root 5296 2025-09-12 10:45:21.000000000 +0100 asn1_decoder.ko
-rw-r--r-- 1 root root 4952 2025-09-12 10:45:21.000000000 +0100 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 crypto
-rw-r--r-- 1 root root 6096 2025-09-12 10:45:22.000000000 +0100 oid_registry.ko
-rw-r--r-- 1 root root 5472 2025-09-12 10:45:22.000000000 +0100 ts_bm.ko
-rw-r--r-- 1 root root 5272 2025-09-12 10:45:22.000000000 +0100 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 92
-rw-r--r-- 1 root root  3616 2025-09-12 10:45:21.000000000 +0100 libarc4.ko
-rw-r--r-- 1 root root  8336 2025-09-12 10:45:21.000000000 +0100 libblake2s-generic.ko
-rw-r--r-- 1 root root  5920 2025-09-12 10:45:21.000000000 +0100 libblake2s.ko
-rw-r--r-- 1 root root  3616 2025-09-12 10:45:21.000000000 +0100 libchacha.ko
-rw-r--r-- 1 root root 10784 2025-09-12 10:45:21.000000000 +0100 libchacha20poly1305.ko
-rw-r--r-- 1 root root 27368 2025-09-12 10:45:22.000000000 +0100 libcurve25519-generic.ko
-rw-r--r-- 1 root root  3152 2025-09-12 10:45:22.000000000 +0100 libcurve25519.ko
-rw-r--r-- 1 root root 19968 2025-09-12 10:45:22.000000000 +0100 libdes.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 24
-rw-r--r-- 1 root root 21776 2025-09-12 10:45:22.000000000 +0100 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 20
-rw-r--r-- 1 root root 17320 2025-09-12 10:45:22.000000000 +0100 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 40
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 802
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 8021q
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 ipv4
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 ipv6
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 mpls
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 rfkill
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 sched
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 xfrm

/lib/modules/5.6.3/kernel/net/802:
total 16
-rw-r--r-- 1 root root 15624 2025-09-12 10:45:22.000000000 +0100 mrp.ko

/lib/modules/5.6.3/kernel/net/8021q:
total 40
-rw-r--r-- 1 root root 37824 2025-09-12 10:45:22.000000000 +0100 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 164
-rw-r--r-- 1 root root  4336 2025-09-12 10:45:22.000000000 +0100 ebt_802_3.ko
-rw-r--r-- 1 root root  5208 2025-09-12 10:45:22.000000000 +0100 ebt_arp.ko
-rw-r--r-- 1 root root  4944 2025-09-12 10:45:22.000000000 +0100 ebt_arpreply.ko
-rw-r--r-- 1 root root  5024 2025-09-12 10:45:22.000000000 +0100 ebt_dnat.ko
-rw-r--r-- 1 root root  5208 2025-09-12 10:45:22.000000000 +0100 ebt_ip.ko
-rw-r--r-- 1 root root  5336 2025-09-12 10:45:22.000000000 +0100 ebt_ip6.ko
-rw-r--r-- 1 root root  6656 2025-09-12 10:45:22.000000000 +0100 ebt_limit.ko
-rw-r--r-- 1 root root  5776 2025-09-12 10:45:22.000000000 +0100 ebt_mark.ko
-rw-r--r-- 1 root root  6256 2025-09-12 10:45:22.000000000 +0100 ebt_mark_m.ko
-rw-r--r-- 1 root root  4208 2025-09-12 10:45:22.000000000 +0100 ebt_pkttype.ko
-rw-r--r-- 1 root root  4896 2025-09-12 10:45:22.000000000 +0100 ebt_redirect.ko
-rw-r--r-- 1 root root  4808 2025-09-12 10:45:22.000000000 +0100 ebt_snat.ko
-rw-r--r-- 1 root root  5728 2025-09-12 10:45:22.000000000 +0100 ebt_stp.ko
-rw-r--r-- 1 root root  4672 2025-09-12 10:45:22.000000000 +0100 ebt_vlan.ko
-rw-r--r-- 1 root root  5472 2025-09-12 10:45:22.000000000 +0100 ebtable_filter.ko
-rw-r--r-- 1 root root  5472 2025-09-12 10:45:22.000000000 +0100 ebtable_nat.ko
-rw-r--r-- 1 root root 33928 2025-09-12 10:45:22.000000000 +0100 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 56
-rw-r--r-- 1 root root 25744 2025-09-12 10:45:23.000000000 +0100 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2025-09-12 11:04:14.000000000 +0100 netfilter
-rw-r--r-- 1 root root 20656 2025-09-12 10:45:23.000000000 +0100 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 116
-rw-r--r-- 1 root root 34296 2025-09-12 10:45:23.000000000 +0100 ip_tables.ko
-rw-r--r-- 1 root root  5952 2025-09-12 10:45:23.000000000 +0100 ipt_REJECT.ko
-rw-r--r-- 1 root root  6496 2025-09-12 10:45:23.000000000 +0100 iptable_filter.ko
-rw-r--r-- 1 root root  6504 2025-09-12 10:45:23.000000000 +0100 iptable_mangle.ko
-rw-r--r-- 1 root root  5992 2025-09-12 10:45:23.000000000 +0100 iptable_nat.ko
-rw-r--r-- 1 root root  6792 2025-09-12 10:45:23.000000000 +0100 iptable_raw.ko
-rw-r--r-- 1 root root  5696 2025-09-12 10:45:23.000000000 +0100 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root 14424 2025-09-12 10:45:23.000000000 +0100 nf_nat_h323.ko
-rw-r--r-- 1 root root  6720 2025-09-12 10:45:23.000000000 +0100 nf_nat_pptp.ko
-rw-r--r-- 1 root root  6272 2025-09-12 10:45:23.000000000 +0100 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 48
-rw-r--r-- 1 root root 13248 2025-09-12 10:45:23.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root 18520 2025-09-12 10:45:23.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root  5352 2025-09-12 10:45:23.000000000 +0100 ip6_udp_tunnel.ko
drwxr-xr-x 2 root root  4096 2025-09-12 11:04:14.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 108
-rw-r--r-- 1 root root 34720 2025-09-12 10:45:23.000000000 +0100 ip6_tables.ko
-rw-r--r-- 1 root root  5928 2025-09-12 10:45:23.000000000 +0100 ip6t_NPT.ko
-rw-r--r-- 1 root root  5904 2025-09-12 10:45:23.000000000 +0100 ip6t_REJECT.ko
-rw-r--r-- 1 root root  4288 2025-09-12 10:45:23.000000000 +0100 ip6t_eui64.ko
-rw-r--r-- 1 root root  4928 2025-09-12 10:45:23.000000000 +0100 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  6528 2025-09-12 10:45:23.000000000 +0100 ip6table_filter.ko
-rw-r--r-- 1 root root  6568 2025-09-12 10:45:23.000000000 +0100 ip6table_mangle.ko
-rw-r--r-- 1 root root  6000 2025-09-12 10:45:24.000000000 +0100 ip6table_nat.ko
-rw-r--r-- 1 root root  6800 2025-09-12 10:45:24.000000000 +0100 ip6table_raw.ko
-rw-r--r-- 1 root root  7032 2025-09-12 10:45:24.000000000 +0100 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 68
-rw-r--r-- 1 root root  7840 2025-09-12 10:45:24.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root 59440 2025-09-12 10:45:24.000000000 +0100 mpls_router.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 652
-rw-r--r-- 1 root root 14712 2025-09-12 10:45:24.000000000 +0100 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root 60144 2025-09-12 10:45:24.000000000 +0100 nf_conntrack_h323.ko
-rw-r--r-- 1 root root 12328 2025-09-12 10:45:24.000000000 +0100 nf_conntrack_irc.ko
-rw-r--r-- 1 root root 55128 2025-09-12 10:45:24.000000000 +0100 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root 12184 2025-09-12 10:45:24.000000000 +0100 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root 12376 2025-09-12 10:45:24.000000000 +0100 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root 40144 2025-09-12 10:45:24.000000000 +0100 nf_conntrack_sip.ko
-rw-r--r-- 1 root root 10200 2025-09-12 10:45:24.000000000 +0100 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root 45632 2025-09-12 10:45:24.000000000 +0100 nf_nat.ko
-rw-r--r-- 1 root root  7288 2025-09-12 10:45:24.000000000 +0100 nf_nat_ftp.ko
-rw-r--r-- 1 root root  6872 2025-09-12 10:45:24.000000000 +0100 nf_nat_irc.ko
-rw-r--r-- 1 root root 11424 2025-09-12 10:45:25.000000000 +0100 nf_nat_rtsp.ko
-rw-r--r-- 1 root root 17528 2025-09-12 10:45:25.000000000 +0100 nf_nat_sip.ko
-rw-r--r-- 1 root root  5144 2025-09-12 10:45:25.000000000 +0100 nf_nat_tftp.ko
-rw-r--r-- 1 root root 14752 2025-09-12 10:45:25.000000000 +0100 nfnetlink.ko
-rw-r--r-- 1 root root 55688 2025-09-12 10:45:25.000000000 +0100 x_tables.ko
-rw-r--r-- 1 root root 11248 2025-09-12 10:45:25.000000000 +0100 xt_CT.ko
-rw-r--r-- 1 root root  6432 2025-09-12 10:45:25.000000000 +0100 xt_DSCP.ko
-rw-r--r-- 1 root root  5512 2025-09-12 10:45:25.000000000 +0100 xt_HL.ko
-rw-r--r-- 1 root root  5736 2025-09-12 10:45:25.000000000 +0100 xt_MASQUERADE.ko
-rw-r--r-- 1 root root  5800 2025-09-12 10:45:25.000000000 +0100 xt_NETMAP.ko
-rw-r--r-- 1 root root  5464 2025-09-12 10:45:25.000000000 +0100 xt_REDIRECT.ko
-rw-r--r-- 1 root root  9408 2025-09-12 10:45:25.000000000 +0100 xt_TCPMSS.ko
-rw-r--r-- 1 root root  7664 2025-09-12 10:45:25.000000000 +0100 xt_addrtype.ko
-rw-r--r-- 1 root root  5928 2025-09-12 10:45:25.000000000 +0100 xt_connbytes.ko
-rw-r--r-- 1 root root  7672 2025-09-12 10:45:25.000000000 +0100 xt_connmark.ko
-rw-r--r-- 1 root root  7608 2025-09-12 10:45:25.000000000 +0100 xt_conntrack.ko
-rw-r--r-- 1 root root  5072 2025-09-12 10:45:25.000000000 +0100 xt_dscp.ko
-rw-r--r-- 1 root root 27264 2025-09-12 10:45:25.000000000 +0100 xt_hashlimit.ko
-rw-r--r-- 1 root root  5648 2025-09-12 10:45:25.000000000 +0100 xt_helper.ko
-rw-r--r-- 1 root root  4624 2025-09-12 10:45:25.000000000 +0100 xt_hl.ko
-rw-r--r-- 1 root root  4560 2025-09-12 10:45:25.000000000 +0100 xt_length.ko
-rw-r--r-- 1 root root  4224 2025-09-12 10:45:25.000000000 +0100 xt_mac.ko
-rw-r--r-- 1 root root  4712 2025-09-12 10:45:25.000000000 +0100 xt_mark.ko
-rw-r--r-- 1 root root  5344 2025-09-12 10:45:25.000000000 +0100 xt_multiport.ko
-rw-r--r-- 1 root root  8216 2025-09-12 10:45:25.000000000 +0100 xt_nat.ko
-rw-r--r-- 1 root root  5864 2025-09-12 10:45:25.000000000 +0100 xt_physdev.ko
-rw-r--r-- 1 root root  6544 2025-09-12 10:45:25.000000000 +0100 xt_policy.ko
-rw-r--r-- 1 root root  4160 2025-09-12 10:45:25.000000000 +0100 xt_realm.ko
-rw-r--r-- 1 root root  5512 2025-09-12 10:45:25.000000000 +0100 xt_statistic.ko
-rw-r--r-- 1 root root  4856 2025-09-12 10:45:25.000000000 +0100 xt_string.ko
-rw-r--r-- 1 root root  4888 2025-09-12 10:45:25.000000000 +0100 xt_tcpmss.ko
-rw-r--r-- 1 root root  6408 2025-09-12 10:45:26.000000000 +0100 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/rfkill:
total 28
-rw-r--r-- 1 root root 26392 2025-09-12 10:45:26.000000000 +0100 rfkill.ko

/lib/modules/5.6.3/kernel/net/sched:
total 112
-rw-r--r-- 1 root root 29016 2025-09-12 10:45:26.000000000 +0100 sch_cake.ko
-rw-r--r-- 1 root root 10960 2025-09-12 10:45:26.000000000 +0100 sch_codel.ko
-rw-r--r-- 1 root root 14232 2025-09-12 10:45:26.000000000 +0100 sch_fq_codel.ko
-rw-r--r-- 1 root root 34760 2025-09-12 10:45:26.000000000 +0100 sch_htb.ko
-rw-r--r-- 1 root root 13648 2025-09-12 10:45:26.000000000 +0100 sch_red.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 16
-rw-r--r-- 1 root root 13544 2025-09-12 10:45:26.000000000 +0100 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 580
-rw-r--r-- 1 root root 59480 2025-09-12 10:42:46.000000000 +0100 al_pcie_ep.ko
-rw-r--r-- 1 root root 15088 2025-09-12 10:40:46.000000000 +0100 btest.ko
-rw-r--r-- 1 root root  3200 2025-09-12 10:44:34.000000000 +0100 c2glue.ko
-rw-r--r-- 1 root root 11008 2025-09-12 10:44:20.000000000 +0100 dot1x.ko
-rw-r--r-- 1 root root 51448 2025-09-12 10:43:49.000000000 +0100 fan_i2c.ko
-rw-r--r-- 1 root root  9504 2025-09-12 10:41:13.000000000 +0100 flash-uefi.ko
-rw-r--r-- 1 root root 82752 2025-09-12 10:41:15.000000000 +0100 flash.ko
-rw-r--r-- 1 root root  7888 2025-09-12 10:42:40.000000000 +0100 jiffies.ko
-rw-r--r-- 1 root root  4704 2025-09-12 10:41:04.000000000 +0100 ledgroup.ko
-rw-r--r-- 1 root root 16712 2025-09-12 10:40:40.000000000 +0100 logring.ko
-rw-r--r-- 1 root root 34352 2025-09-12 10:41:37.000000000 +0100 mesh.ko
-rw-r--r-- 1 root root 16344 2025-09-12 10:40:37.000000000 +0100 panics.ko
-rw-r--r-- 1 root root 16848 2025-09-12 10:40:42.000000000 +0100 poe_simple.ko
-rw-r--r-- 1 root root 47808 2025-09-12 10:40:40.000000000 +0100 poe_v4.ko
-rw-r--r-- 1 root root 17768 2025-09-12 10:45:17.000000000 +0100 prestera_pci.ko
-rw-r--r-- 1 root root 12984 2025-09-12 10:42:10.000000000 +0100 rb.ko
-rw-r--r-- 1 root root  9024 2025-09-12 10:42:48.000000000 +0100 romon.ko
-rw-r--r-- 1 root root  9160 2025-09-12 10:41:18.000000000 +0100 snif.ko
-rw-r--r-- 1 root root 41312 2025-09-12 10:43:43.000000000 +0100 stm8_fan.ko
-rw-r--r-- 1 root root 36352 2025-09-12 10:41:37.000000000 +0100 traffic_gen.ko
-rw-r--r-- 1 root root 29296 2025-09-12 10:41:43.000000000 +0100 ts.ko
-rw-r--r-- 1 root root  9984 2025-09-12 10:41:19.000000000 +0100 ulog.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 sched

/lib/modules/5.6.3/net/bridge:
total 292
-rw-r--r-- 1 root root 256320 2025-09-12 10:44:55.000000000 +0100 bridge2.ko
-rw-r--r-- 1 root root  22808 2025-09-12 10:44:55.000000000 +0100 bridge2_netfilter.ko
-rw-r--r-- 1 root root   4224 2025-09-12 10:41:14.000000000 +0100 ebt_snif.ko
-rw-r--r-- 1 root root   4456 2025-09-12 10:41:15.000000000 +0100 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 44
-rw-r--r-- 1 root root 5216 2025-09-12 10:40:45.000000000 +0100 ipt_SAME.ko
-rw-r--r-- 1 root root 8600 2025-09-12 10:40:46.000000000 +0100 ipt_TARPIT.ko
-rw-r--r-- 1 root root 6496 2025-09-12 10:40:44.000000000 +0100 ipt_psd.ko
-rw-r--r-- 1 root root 4448 2025-09-12 10:41:14.000000000 +0100 ipt_snif.ko
-rw-r--r-- 1 root root 5032 2025-09-12 10:41:15.000000000 +0100 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 76
-rw-r--r-- 1 root root  3408 2025-09-12 10:42:01.000000000 +0100 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  3408 2025-09-12 10:42:01.000000000 +0100 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 15864 2025-09-12 10:42:09.000000000 +0100 xt_ein.ko
-rw-r--r-- 1 root root 15872 2025-09-12 10:40:52.000000000 +0100 xt_layer7.ko
-rw-r--r-- 1 root root 24896 2025-09-12 10:42:09.000000000 +0100 xt_misc.ko
-rw-r--r-- 1 root root  5112 2025-09-12 10:40:52.000000000 +0100 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 112
-rw-r--r-- 1 root root  7984 2025-09-12 10:41:02.000000000 +0100 cls_fw.ko
-rw-r--r-- 1 root root 16608 2025-09-12 10:41:05.000000000 +0100 cls_linear.ko
-rw-r--r-- 1 root root 15032 2025-09-12 10:41:26.000000000 +0100 proto_agr.ko
-rw-r--r-- 1 root root 24408 2025-09-12 10:41:31.000000000 +0100 sch_agr.ko
-rw-r--r-- 1 root root 13744 2025-09-12 10:40:48.000000000 +0100 sch_pcq.ko
-rw-r--r-- 1 root root  9592 2025-09-12 10:42:32.000000000 +0100 sch_rate.ko
-rw-r--r-- 1 root root 12392 2025-09-12 10:42:47.000000000 +0100 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2025-09-12 11:04:14.000000000 +0100 bin
drwxr-xr-x 12 root root 4096 2025-09-12 11:04:14.000000000 +0100 etc
drwxr-xr-x  5 root root 4096 2025-09-12 11:04:14.000000000 +0100 lib
lrwxrwxrwx  1 root root    8 2025-09-12 11:04:15.000000000 +0100 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2025-09-12 11:04:15.000000000 +0100 store -> /rw/store

/nova/bin:
total 10972
-rwxr-xr-x 1 root root   26184 2025-09-12 10:06:49.000000000 +0100 agent
-rwxr-xr-x 1 root root   13724 2025-09-12 10:06:49.000000000 +0100 arpd
-rwxr-xr-x 1 root root   18056 2025-09-12 10:09:10.000000000 +0100 backup
-rwxr-xr-x 1 root root  248264 2025-09-12 10:11:23.000000000 +0100 bridge2
-rwxr-xr-x 1 root root   67636 2025-09-12 10:09:22.000000000 +0100 btest
-rwxr-xr-x 1 root root   55180 2025-09-12 10:07:20.000000000 +0100 bth
-rwxr-xr-x 1 root root  771332 2025-09-12 10:10:42.000000000 +0100 cerm
lrwxrwxrwx 1 root root       4 2025-09-12 10:11:02.000000000 +0100 cerm-worker -> cerm
-rwxr-xr-x 1 root root  162088 2025-09-12 10:10:22.000000000 +0100 cloud
-rwxr-xr-x 1 root root   87804 2025-09-12 10:08:55.000000000 +0100 crossfig
-rwxr-xr-x 1 root root   63520 2025-09-12 10:10:08.000000000 +0100 detnet
-rwxr-xr-x 1 root root   79924 2025-09-12 10:07:28.000000000 +0100 discover
-rwxr-xr-x 1 root root  314104 2025-09-12 10:10:22.000000000 +0100 diskd
-rwxr-xr-x 1 root root  104636 2025-09-12 10:11:51.000000000 +0100 dot1x
-rwxr-xr-x 1 root root   43000 2025-09-12 10:09:09.000000000 +0100 email
-rwxr-xr-x 1 root root  154608 2025-09-12 10:09:45.000000000 +0100 figman
-rwxr-xr-x 1 root root  112960 2025-09-12 10:11:21.000000000 +0100 fileman
-rwxr-xr-x 1 root root   34484 2025-09-12 10:06:50.000000000 +0100 ftpd
-rwxr-xr-x 1 root root  149056 2025-09-12 10:07:44.000000000 +0100 graphing
-rwxr-xr-x 1 root root    5212 2025-09-12 10:10:53.000000000 +0100 havecardbus
-rwxr-xr-x 1 root root   63308 2025-09-12 10:08:41.000000000 +0100 igmpproxy
-rwxr-xr-x 1 root root  178168 2025-09-12 10:10:34.000000000 +0100 installer
-rwxr-xr-x 1 root root   30344 2025-09-12 10:10:46.000000000 +0100 ippool
-rwxr-xr-x 1 root root   59380 2025-09-12 10:09:26.000000000 +0100 keyman
-rwxr-xr-x 1 root root   46936 2025-09-12 10:07:28.000000000 +0100 kidcontrol
-rwxr-xr-x 1 root root  219328 2025-09-12 10:07:55.000000000 +0100 lcdstat
-rwxr-xr-x 1 root root   71820 2025-09-12 10:09:50.000000000 +0100 led
-rwxr-xr-x 1 root root  112624 2025-09-12 10:10:47.000000000 +0100 letsencrypt
-rwxr-xr-x 1 root root   84004 2025-09-12 10:09:27.000000000 +0100 loader
-rwxr-xr-x 1 root root   84120 2025-09-12 10:06:55.000000000 +0100 log
-rwxr-xr-x 1 root root  150136 2025-09-12 10:12:30.000000000 +0100 login
-rwxr-xr-x 1 root root   54920 2025-09-12 10:06:52.000000000 +0100 logmaker
-rwxr-xr-x 1 root root   22136 2025-09-12 10:06:50.000000000 +0100 macping
-rwxr-xr-x 1 root root   38764 2025-09-12 10:09:25.000000000 +0100 mactel
-rwxr-xr-x 1 root root   26360 2025-09-12 10:06:51.000000000 +0100 mepty
-rwxr-xr-x 1 root root   79712 2025-09-12 10:07:36.000000000 +0100 mesh
-rwxr-xr-x 1 root root   67252 2025-09-12 10:12:33.000000000 +0100 mode
lrwxrwxrwx 1 root root       7 2025-09-12 10:10:53.000000000 +0100 modprobed -> moduler
-rwxr-xr-x 1 root root   76056 2025-09-12 10:10:53.000000000 +0100 moduler
-rwxr-xr-x 1 root root   72192 2025-09-12 10:11:32.000000000 +0100 mproxy
-rwxr-xr-x 1 root root   59408 2025-09-12 10:09:24.000000000 +0100 mtget
-rwxr-xr-x 1 root root   46940 2025-09-12 10:07:27.000000000 +0100 natpmp
-rwxr-xr-x 1 root root 1657412 2025-09-12 10:14:35.000000000 +0100 net
-rwxr-xr-x 1 root root   71664 2025-09-12 10:10:12.000000000 +0100 ntp
-rwxr-xr-x 1 root root    9468 2025-09-12 10:06:45.000000000 +0100 panicsl
-rwxr-xr-x 1 root root  683944 2025-09-12 10:12:30.000000000 +0100 parser
-rwxr-xr-x 1 root root   34564 2025-09-12 10:07:16.000000000 +0100 partd
-rwxr-xr-x 1 root root   38636 2025-09-12 10:06:52.000000000 +0100 ping
-rwxr-xr-x 1 root root   51240 2025-09-12 10:09:16.000000000 +0100 portman
-rwxr-xr-x 1 root root   34600 2025-09-12 10:46:12.000000000 +0100 profiler
-rwxr-xr-x 1 root root   83904 2025-09-12 10:10:42.000000000 +0100 ptp
-rwxr-xr-x 1 root root  141472 2025-09-12 10:06:58.000000000 +0100 quickset
-rwxr-xr-x 1 root root   55288 2025-09-12 10:11:17.000000000 +0100 radius
-rwxr-xr-x 1 root root  154088 2025-09-12 10:10:23.000000000 +0100 resolver
-rwxr-xr-x 1 root root    9596 2025-09-12 10:09:27.000000000 +0100 resolver_ctl
-rwxr-xr-x 1 root root   92400 2025-09-12 10:10:03.000000000 +0100 romon
-rwxr-xr-x 1 root root 1605884 2025-09-12 10:15:49.000000000 +0100 route
-rwxr-xr-x 1 root root   17948 2025-09-12 10:10:15.000000000 +0100 rtrace
-rwxr-xr-x 1 root root   42996 2025-09-12 10:10:48.000000000 +0100 sermgr
-rwxr-xr-x 1 root root   34488 2025-09-12 10:07:19.000000000 +0100 sertcp
-rwxr-xr-x 1 root root   67460 2025-09-12 10:07:24.000000000 +0100 sniffer
-rwxr-xr-x 1 root root  199096 2025-09-12 10:11:54.000000000 +0100 snmp
-rwxr-xr-x 1 root root   63428 2025-09-12 10:07:32.000000000 +0100 socks
-rwxr-xr-x 1 root root  120996 2025-09-12 10:11:17.000000000 +0100 ssld
-rwxr-xr-x 1 root root   30352 2025-09-12 10:09:05.000000000 +0100 sstore
-rwxr-xr-x 1 root root  756824 2025-09-12 10:12:45.000000000 +0100 sys2
-rwxr-xr-x 1 root root   22020 2025-09-12 10:06:53.000000000 +0100 telnet
-rwxr-xr-x 1 root root   13552 2025-09-12 10:06:46.000000000 +0100 telser
-rwxr-xr-x 1 root root   38776 2025-09-12 10:07:22.000000000 +0100 tftpd
-rwxr-xr-x 1 root root   30396 2025-09-12 10:06:50.000000000 +0100 traceroute
-rwxr-xr-x 1 root root  104428 2025-09-12 10:07:27.000000000 +0100 trafficgen
-rwxr-xr-x 1 root root   26224 2025-09-12 10:07:07.000000000 +0100 trafflow
-rwxr-xr-x 1 root root   26212 2025-09-12 10:06:50.000000000 +0100 undo
-rwxr-xr-x 1 root root  141492 2025-09-12 10:07:35.000000000 +0100 upnp
-rwxr-xr-x 1 root root   80208 2025-09-12 10:11:11.000000000 +0100 user
-rwxr-xr-x 1 root root   88100 2025-09-12 10:09:50.000000000 +0100 vrrp
-rwxr-xr-x 1 root root   30512 2025-09-12 10:07:15.000000000 +0100 watchdog
-rwxr-xr-x 1 root root  142012 2025-09-12 10:10:10.000000000 +0100 wproxy
-rwxr-xr-x 1 root root  117316 2025-09-12 10:11:24.000000000 +0100 www

/nova/etc:
total 56
drwxr-xr-x 3 root root 4096 2025-09-12 11:04:14.000000000 +0100 ca
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 leds
-rwxr-xr-x 1 root root 1255 2025-09-12 10:02:02.000000000 +0100 lognames
-rwxr-xr-x 1 root root   10 2025-09-12 10:02:02.000000000 +0100 logo
-rwxr-xr-x 1 root root    1 2025-09-12 10:02:02.000000000 +0100 manual-url
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 pciinfo
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 services
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 system_names
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 upnp
-rwxr-xr-x 1 root root   26 2025-09-12 10:02:02.000000000 +0100 url
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 user
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 www

/nova/etc/ca:
total 100
-rwxr-xr-x 1 root root  955 2025-09-12 10:02:01.000000000 +0100 DigiCert_Assured_ID_Root_CA.der
-rwxr-xr-x 1 root root  922 2025-09-12 10:02:01.000000000 +0100 DigiCert_Assured_ID_Root_G2.der
-rwxr-xr-x 1 root root  586 2025-09-12 10:02:01.000000000 +0100 DigiCert_Assured_ID_Root_G3.der
-rwxr-xr-x 1 root root  947 2025-09-12 10:02:01.000000000 +0100 DigiCert_Global_Root_CA.der
-rwxr-xr-x 1 root root  914 2025-09-12 10:02:01.000000000 +0100 DigiCert_Global_Root_G2.der
-rwxr-xr-x 1 root root  579 2025-09-12 10:02:01.000000000 +0100 DigiCert_Global_Root_G3.der
-rwxr-xr-x 1 root root  969 2025-09-12 10:02:01.000000000 +0100 DigiCert_High_Assurance_EV_Root_CA.der
-rwxr-xr-x 1 root root  541 2025-09-12 10:02:01.000000000 +0100 DigiCert_TLS_ECC_P384_Root_G5.der
-rwxr-xr-x 1 root root 1386 2025-09-12 10:02:01.000000000 +0100 DigiCert_TLS_RSA4096_Root_G5.der
-rwxr-xr-x 1 root root 1428 2025-09-12 10:02:01.000000000 +0100 DigiCert_Trusted_Root_G4.der
-rwxr-xr-x 1 root root  546 2025-09-12 10:02:01.000000000 +0100 GlobalSign_ECC_Root_CA_-_R5.der
-rwxr-xr-x 1 root root  889 2025-09-12 10:02:01.000000000 +0100 GlobalSign_Root_CA.der
-rwxr-xr-x 1 root root  867 2025-09-12 10:02:01.000000000 +0100 GlobalSign_Root_CA_-_R3.der
-rwxr-xr-x 1 root root 1415 2025-09-12 10:02:01.000000000 +0100 GlobalSign_Root_CA_-_R6.der
-rwxr-xr-x 1 root root  527 2025-09-12 10:02:01.000000000 +0100 GlobalSign_Root_E46.der
-rwxr-xr-x 1 root root 1374 2025-09-12 10:02:01.000000000 +0100 GlobalSign_Root_R46.der
-rwxr-xr-x 1 root root 1028 2025-09-12 10:02:01.000000000 +0100 Go_Daddy_Class_2_CA.der
-rwxr-xr-x 1 root root  969 2025-09-12 10:02:01.000000000 +0100 Go_Daddy_Root_Certificate_Authority_-_G2.der
-rwxr-xr-x 1 root root 1391 2025-09-12 10:02:01.000000000 +0100 ISRG_Root_X1.der
-rwxr-xr-x 1 root root  543 2025-09-12 10:02:01.000000000 +0100 ISRG_Root_X2.der
-rwxr-xr-x 1 root root  574 2025-09-12 10:02:01.000000000 +0100 Sectigo_Public_Server_Authentication_Root_E46.der
-rwxr-xr-x 1 root root 1422 2025-09-12 10:02:01.000000000 +0100 Sectigo_Public_Server_Authentication_Root_R46.der
-rwxr-xr-x 1 root root  659 2025-09-12 10:02:01.000000000 +0100 USERTrustECCCertificationAuthority.der
-rwxr-xr-x 1 root root 1506 2025-09-12 10:02:01.000000000 +0100 USERTrustRSACertificationAuthority.der
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 gsma

/nova/etc/ca/gsma:
total 8
-rwxr-xr-x 1 root root 589 2025-09-12 10:02:01.000000000 +0100 gsma_digicert.der
-rwxr-xr-x 1 root root 507 2025-09-12 10:02:01.000000000 +0100 gsma_sealsq.der

/nova/etc/leds:
total 124
-rwxr-xr-x 1 root root 126811 2025-09-12 10:05:59.000000000 +0100 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2025-09-12 10:05:59.000000000 +0100 system.x3

/nova/etc/pciinfo:
total 216
-rwxr-xr-x 1 root root 218415 2025-09-12 10:05:59.000000000 +0100 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-09-12 10:05:59.000000000 +0100 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 992 2025-09-12 10:05:59.000000000 +0100 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2025-09-12 10:05:59.000000000 +0100 system.x3

/nova/etc/upnp:
total 64
-rwxr-xr-x 1 root root  3378 2025-09-12 10:02:04.000000000 +0100 connectionmanager.xml
-rwxr-xr-x 1 root root  5684 2025-09-12 10:02:04.000000000 +0100 contentdirectory.xml
-rwxr-xr-x 1 root root  8764 2025-09-12 10:02:04.000000000 +0100 logo120.png
-rwxr-xr-x 1 root root   930 2025-09-12 10:02:04.000000000 +0100 logo16.gif
-rwxr-xr-x 1 root root  1173 2025-09-12 10:02:04.000000000 +0100 logo32.gif
-rwxr-xr-x 1 root root  1504 2025-09-12 10:02:04.000000000 +0100 logo48.gif
-rwxr-xr-x 1 root root   735 2025-09-12 10:02:04.000000000 +0100 osinfo.xml
-rwxr-xr-x 1 root root  5928 2025-09-12 10:02:04.000000000 +0100 wancommonifcfg.xml
-rwxr-xr-x 1 root root 13444 2025-09-12 10:02:04.000000000 +0100 wanipconn.xml

/nova/etc/user:
total 4
-rwxr-xr-x 1 root root 2230 2025-09-12 10:05:59.000000000 +0100 system.x3

/nova/etc/www:
total 4
-rwxr-xr-x 1 root root 2458 2025-09-12 10:05:59.000000000 +0100 system.x3

/nova/lib:
total 16
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 defconf
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:14.000000000 +0100 profiler
-rwxr-xr-x 1 root root 4085 2025-09-12 10:02:02.000000000 +0100 xmlnames2

/nova/lib/console:
total 2248
-rwxr-xr-x 1 root root 2289796 2025-09-12 10:13:13.000000000 +0100 1073741824.mem
-rwxr-xr-x 1 root root     510 2025-09-12 10:02:01.000000000 +0100 logo.txt
-rwxr-xr-x 1 root root      18 2025-09-12 10:02:01.000000000 +0100 sublogo.txt

/nova/lib/defconf:
total 100
-rwxr-xr-x 1 root root   567 2025-09-12 10:02:01.000000000 +0100 defconf
-rwxr-xr-x 1 root root  4995 2025-09-12 10:02:01.000000000 +0100 defconf-caps
-rwxr-xr-x 1 root root  3700 2025-09-12 10:02:01.000000000 +0100 defconf-wps-sync
-rwxr-xr-x 1 root root 85713 2025-09-12 10:02:01.000000000 +0100 get-custom-defconf

/nova/lib/profiler:
total 28
-rwxr-xr-x 1 root root 27736 2025-09-12 10:46:11.000000000 +0100 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 632
-rwxr-xr-x 1 root root 173752 2025-09-12 10:06:30.000000000 +0100 kexec
-rwxr-xr-x 1 root root 321132 2025-09-12 10:46:53.000000000 +0100 mke2fs
-rwxr-xr-x 1 root root  25584 2025-09-12 10:05:59.000000000 +0100 nandfix
-rwxr-xr-x 1 root root  63472 2025-09-12 10:09:10.000000000 +0100 sysinit
-rwxr-xr-x 1 root root  50520 2025-09-12 10:06:30.000000000 +0100 vmcore-dmesg

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2025-09-12 11:04:15.000000000 +0100 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:15.000000000 +0100 deinstall
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:15.000000000 +0100 lock
lrwxrwxrwx 1 root root    8 2025-09-12 11:04:15.000000000 +0100 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2025-09-12 11:04:15.000000000 +0100 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2025-09-12 11:04:15.000000000 +0100 post
lrwxrwxrwx 1 root root    7 2025-09-12 11:04:15.000000000 +0100 run -> /rw/run
lrwxrwxrwx 1 root root    4 2025-09-12 11:04:15.000000000 +0100 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

