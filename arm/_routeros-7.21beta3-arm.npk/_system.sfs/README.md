### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 9477638 bytes, 830 inodes, blocksize: 524288 bytes, created: Tue Oct 14 13:50:20 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 bin
drwxr-xr-x 9 root root 4096 2025-10-14 14:50:08.000000000 +0100 bndl
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 boot
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 dev
lrwxrwxrwx 1 root root   11 2025-10-14 14:50:08.000000000 +0100 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 etc
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 flash
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-14 14:50:08.000000000 +0100 nova
lrwxrwxrwx 1 root root    9 2025-10-14 14:50:08.000000000 +0100 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 proc
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 ram
lrwxrwxrwx 1 root root    9 2025-10-14 14:50:08.000000000 +0100 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 sbin
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 sys
lrwxrwxrwx 1 root root    7 2025-10-14 14:50:08.000000000 +0100 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2025-10-14 14:50:08.000000000 +0100 var

/bin:
total 228
lrwxrwxrwx 1 root root     21 2025-10-14 14:50:08.000000000 +0100 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root  13724 2025-10-14 13:57:54.000000000 +0100 catlog
lrwxrwxrwx 1 root root     15 2025-10-14 14:50:08.000000000 +0100 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root     15 2025-10-14 14:50:08.000000000 +0100 login -> /nova/bin/login
-rwxr-xr-x 1 root root  19552 2025-10-14 14:35:40.000000000 +0100 mkexfatfs
-rwxr-xr-x 1 root root   9416 2025-10-14 13:57:54.000000000 +0100 pakp
lrwxrwxrwx 1 root root     21 2025-10-14 14:50:08.000000000 +0100 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root     15 2025-10-14 14:50:08.000000000 +0100 shell -> /nova/bin/login
-rwxr-xr-x 1 root root 183480 2025-10-14 14:36:27.000000000 +0100 sshfs

/bndl:
total 28
drwxr-xr-x 4 root root 4096 2025-10-14 14:50:08.000000000 +0100 advanced-tools
drwxr-xr-x 5 root root 4096 2025-10-14 14:50:08.000000000 +0100 dhcp
drwxr-xr-x 5 root root 4096 2025-10-14 14:50:08.000000000 +0100 hotspot
drwxr-xr-x 4 root root 4096 2025-10-14 14:50:08.000000000 +0100 ipv6
drwxr-xr-x 5 root root 4096 2025-10-14 14:50:08.000000000 +0100 ppp
drwxr-xr-x 5 root root 4096 2025-10-14 14:50:08.000000000 +0100 security
drwxr-xr-x 5 root root 4096 2025-10-14 14:50:08.000000000 +0100 wifi

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-10-14 14:50:08.000000000 +0100 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 webfig

/bndl/advanced-tools/home/web/webfig:
total 8
-rw-r--r-- 1 root root 2407 2025-10-14 14:37:21.000000000 +0100 advtool-990a874d6308.jg.gz
-rwxr-xr-x 1 root root  109 2025-10-14 14:37:21.000000000 +0100 advtool.info
lrwxrwxrwx 1 root root   26 2025-10-14 14:37:21.000000000 +0100 advtool.jg.gz -> advtool-990a874d6308.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 lib

/bndl/advanced-tools/nova/bin:
total 208
-rwxr-xr-x 1 root root 30428 2025-10-14 14:37:04.000000000 +0100 ddns
-rwxr-xr-x 1 root root 13728 2025-10-14 14:36:43.000000000 +0100 fping
-rwxr-xr-x 1 root root 17984 2025-10-14 14:37:12.000000000 +0100 macscan
-rwxr-xr-x 1 root root 67548 2025-10-14 14:38:56.000000000 +0100 netwatch
-rwxr-xr-x 1 root root 17876 2025-10-14 14:36:50.000000000 +0100 pspeed
-rwxr-xr-x 1 root root 34552 2025-10-14 14:37:25.000000000 +0100 scanner
-rwxr-xr-x 1 root root 13740 2025-10-14 14:37:33.000000000 +0100 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 console

/bndl/advanced-tools/nova/lib/console:
total 28
-rwxr-xr-x 1 root root 26107 2025-10-14 14:37:08.000000000 +0100 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 home
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-10-14 14:50:08.000000000 +0100 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 webfig

/bndl/dhcp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4951 2025-10-14 14:37:48.000000000 +0100 dhcp-faef071d5e76.jg.gz
-rwxr-xr-x 1 root root  103 2025-10-14 14:37:48.000000000 +0100 dhcp.info
lrwxrwxrwx 1 root root   23 2025-10-14 14:37:49.000000000 +0100 dhcp.jg.gz -> dhcp-faef071d5e76.jg.gz

/bndl/dhcp/lib:
total 96
-rwxr-xr-x 1 root root 96560 2025-10-14 14:37:27.000000000 +0100 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 lib

/bndl/dhcp/nova/bin:
total 320
-rwxr-xr-x 1 root root 224004 2025-10-14 14:40:29.000000000 +0100 dhcp
-rwxr-xr-x 1 root root 100696 2025-10-14 14:40:26.000000000 +0100 dhcpclient

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 console

/bndl/dhcp/nova/lib/console:
total 120
-rwxr-xr-x 1 root root 120728 2025-10-14 14:37:33.000000000 +0100 1128267776.mem

/bndl/hotspot:
total 12
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-14 14:50:08.000000000 +0100 nova

/bndl/hotspot/home:
total 4
drwxr-xr-x 4 root root 4096 2025-10-14 14:50:08.000000000 +0100 web

/bndl/hotspot/home/web:
total 8
drwxr-xr-x 5 root root 4096 2025-10-14 14:50:08.000000000 +0100 hotspot
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 webfig

/bndl/hotspot/home/web/hotspot:
total 68
-rw-r--r-- 1 root root 1094 2025-10-14 13:49:10.000000000 +0100 alogin.html
-rw-r--r-- 1 root root  311 2025-10-14 13:49:10.000000000 +0100 api.json
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 css
-rw-r--r-- 1 root root  640 2025-10-14 13:49:10.000000000 +0100 error.html
-rw-r--r-- 1 root root 4038 2025-10-14 13:49:10.000000000 +0100 errors.txt
-rw-r--r-- 1 root root  903 2025-10-14 13:49:10.000000000 +0100 favicon.ico
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 img
-rw-r--r-- 1 root root 4423 2025-10-14 13:49:10.000000000 +0100 login.html
-rw-r--r-- 1 root root 1459 2025-10-14 13:49:10.000000000 +0100 logout.html
-rw-r--r-- 1 root root 7218 2025-10-14 13:49:10.000000000 +0100 md5.js
-rw-r--r-- 1 root root 1204 2025-10-14 13:49:10.000000000 +0100 radvert.html
-rw-r--r-- 1 root root  330 2025-10-14 13:49:10.000000000 +0100 redirect.html
-rw-r--r-- 1 root root  877 2025-10-14 13:49:10.000000000 +0100 rlogin.html
-rw-r--r-- 1 root root 2855 2025-10-14 13:49:10.000000000 +0100 status.html
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 xml

/bndl/hotspot/home/web/hotspot/css:
total 4
-rw-r--r-- 1 root root 4053 2025-10-14 13:49:10.000000000 +0100 style.css

/bndl/hotspot/home/web/hotspot/img:
total 8
-rw-r--r-- 1 root root 644 2025-10-14 13:49:10.000000000 +0100 password.svg
-rw-r--r-- 1 root root 444 2025-10-14 13:49:10.000000000 +0100 user.svg

/bndl/hotspot/home/web/hotspot/xml:
total 32
-rw-r--r-- 1 root root 4251 2025-10-14 13:49:10.000000000 +0100 WISPAccessGatewayParam.xsd
-rw-r--r-- 1 root root  839 2025-10-14 13:49:10.000000000 +0100 alogin.html
-rw-r--r-- 1 root root  428 2025-10-14 13:49:10.000000000 +0100 error.html
-rw-r--r-- 1 root root  372 2025-10-14 13:49:10.000000000 +0100 flogout.html
-rw-r--r-- 1 root root  809 2025-10-14 13:49:10.000000000 +0100 login.html
-rw-r--r-- 1 root root  370 2025-10-14 13:49:10.000000000 +0100 logout.html
-rw-r--r-- 1 root root  545 2025-10-14 13:49:10.000000000 +0100 rlogin.html

/bndl/hotspot/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4316 2025-10-14 14:41:03.000000000 +0100 hotspot-c9242ba2f199.jg.gz
-rwxr-xr-x 1 root root  110 2025-10-14 14:41:03.000000000 +0100 hotspot.info
lrwxrwxrwx 1 root root   26 2025-10-14 14:41:04.000000000 +0100 hotspot.jg.gz -> hotspot-c9242ba2f199.jg.gz

/bndl/hotspot/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 modules

/bndl/hotspot/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 5.6.3

/bndl/hotspot/lib/modules/5.6.3:
total 4
-rw-r--r-- 1 root root    0 2025-10-14 14:41:07.000000000 +0100 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 net

/bndl/hotspot/lib/modules/5.6.3/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 ipv4

/bndl/hotspot/lib/modules/5.6.3/net/ipv4:
total 40
-rw-r--r-- 1 root root 39520 2025-10-14 14:40:57.000000000 +0100 unicl.ko

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 lib

/bndl/hotspot/nova/bin:
total 236
-rwxr-xr-x 1 root root 240244 2025-10-14 14:39:19.000000000 +0100 hotspot

/bndl/hotspot/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 radius

/bndl/hotspot/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-10-14 14:40:58.000000000 +0100 hotspot.x3

/bndl/hotspot/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 console

/bndl/hotspot/nova/lib/console:
total 80
-rwxr-xr-x 1 root root 81814 2025-10-14 14:40:04.000000000 +0100 1132462080.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-10-14 14:50:08.000000000 +0100 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 webfig

/bndl/ipv6/home/web/webfig:
total 16
-rw-r--r-- 1 root root 8268 2025-10-14 14:37:38.000000000 +0100 ipv6-080b5aa9d2c0.jg.gz
-rwxr-xr-x 1 root root  104 2025-10-14 14:37:39.000000000 +0100 ipv6.info
lrwxrwxrwx 1 root root   23 2025-10-14 14:37:39.000000000 +0100 ipv6.jg.gz -> ipv6-080b5aa9d2c0.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-14 14:50:08.000000000 +0100 lib

/bndl/ipv6/nova/bin:
total 96
-rwxr-xr-x 1 root root 30380 2025-10-14 14:37:52.000000000 +0100 ippool6
-rwxr-xr-x 1 root root 63404 2025-10-14 14:37:19.000000000 +0100 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 route

/bndl/ipv6/nova/lib/console:
total 188
-rwxr-xr-x 1 root root 188508 2025-10-14 14:37:27.000000000 +0100 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2025-10-14 13:49:10.000000000 +0100 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-14 14:50:08.000000000 +0100 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 webfig

/bndl/ppp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 6646 2025-10-14 14:41:01.000000000 +0100 ppp-3833e10a898f.jg.gz
-rwxr-xr-x 1 root root  102 2025-10-14 14:41:01.000000000 +0100 ppp.info
lrwxrwxrwx 1 root root   22 2025-10-14 14:41:01.000000000 +0100 ppp.jg.gz -> ppp-3833e10a898f.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2025-10-14 14:50:08.000000000 +0100 5.6.3

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2025-10-14 14:46:48.000000000 +0100 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 104
-rw-r--r-- 1 root root 12496 2025-10-14 14:32:20.000000000 +0100 ppp_async.ko
-rw-r--r-- 1 root root  7444 2025-10-14 14:32:20.000000000 +0100 ppp_deflate.ko
-rw-r--r-- 1 root root 32432 2025-10-14 14:32:20.000000000 +0100 ppp_generic.ko
-rw-r--r-- 1 root root  9100 2025-10-14 14:32:20.000000000 +0100 ppp_mppe.ko
-rw-r--r-- 1 root root 10676 2025-10-14 14:32:20.000000000 +0100 ppp_synctty.ko
-rw-r--r-- 1 root root 13448 2025-10-14 14:32:20.000000000 +0100 pppoe.ko
-rw-r--r-- 1 root root  4936 2025-10-14 14:32:20.000000000 +0100 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 92
-rw-r--r-- 1 root root 34136 2025-10-14 14:39:19.000000000 +0100 ovpn.ko
-rw-r--r-- 1 root root  6828 2025-10-14 14:40:37.000000000 +0100 pppoefp.ko
-rw-r--r-- 1 root root 46844 2025-10-14 14:40:13.000000000 +0100 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 56
-rw-r--r-- 1 root root 44208 2025-10-14 14:38:18.000000000 +0100 l2tp.ko
-rw-r--r-- 1 root root 10844 2025-10-14 14:37:20.000000000 +0100 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-14 14:50:08.000000000 +0100 etc
drwxr-xr-x 4 root root 4096 2025-10-14 14:50:08.000000000 +0100 lib

/bndl/ppp/nova/bin:
total 584
-rwxr-xr-x 1 root root 594008 2025-10-14 14:46:34.000000000 +0100 ppp
lrwxrwxrwx 1 root root      3 2025-10-14 14:46:38.000000000 +0100 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2025-10-14 14:40:38.000000000 +0100 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2025-10-14 14:40:38.000000000 +0100 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 profiler

/bndl/ppp/nova/lib/console:
total 152
-rwxr-xr-x 1 root root 154965 2025-10-14 14:40:46.000000000 +0100 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 8
-rwxr-xr-x 1 root root 5048 2025-10-14 14:42:13.000000000 +0100 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-14 14:50:08.000000000 +0100 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 webfig

/bndl/security/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4502 2025-10-14 14:44:52.000000000 +0100 secure-b9984ff4934e.jg.gz
-rwxr-xr-x 1 root root  107 2025-10-14 14:44:52.000000000 +0100 secure.info
lrwxrwxrwx 1 root root   25 2025-10-14 14:44:53.000000000 +0100 secure.jg.gz -> secure-b9984ff4934e.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 5.6.3

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2025-10-14 14:50:08.000000000 +0100 kernel
-rw-r--r-- 1 root root  106 2025-10-14 14:49:23.000000000 +0100 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 crypto
drwxr-xr-x 5 root root 4096 2025-10-14 14:50:08.000000000 +0100 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 92
-rw-r--r-- 1 root root  8216 2025-10-14 14:32:18.000000000 +0100 blowfish_common.ko
-rw-r--r-- 1 root root  5920 2025-10-14 14:32:18.000000000 +0100 blowfish_generic.ko
-rw-r--r-- 1 root root 20980 2025-10-14 14:32:18.000000000 +0100 camellia_generic.ko
-rw-r--r-- 1 root root  9972 2025-10-14 14:32:18.000000000 +0100 chacha20poly1305.ko
-rw-r--r-- 1 root root  4492 2025-10-14 14:32:18.000000000 +0100 echainiv.ko
-rw-r--r-- 1 root root 14524 2025-10-14 14:32:18.000000000 +0100 twofish_common.ko
-rw-r--r-- 1 root root  8808 2025-10-14 14:32:18.000000000 +0100 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 key
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root  9544 2025-10-14 14:32:25.000000000 +0100 ah4.ko
-rw-r--r-- 1 root root 12332 2025-10-14 14:32:25.000000000 +0100 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 32
-rw-r--r-- 1 root root 32704 2025-10-14 14:32:26.000000000 +0100 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 28
-rw-r--r-- 1 root root 26828 2025-10-14 14:32:28.000000000 +0100 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-14 14:50:08.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 lib

/bndl/security/nova/bin:
total 716
-rwxr-xr-x 1 root root 520100 2025-10-14 14:48:42.000000000 +0100 ipsec
lrwxrwxrwx 1 root root      5 2025-10-14 14:49:03.000000000 +0100 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 212736 2025-10-14 14:46:59.000000000 +0100 ssh
lrwxrwxrwx 1 root root      3 2025-10-14 14:46:59.000000000 +0100 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-10-14 14:43:40.000000000 +0100 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2025-10-14 14:43:40.000000000 +0100 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 console

/bndl/security/nova/lib/console:
total 96
-rwxr-xr-x 1 root root 94392 2025-10-14 14:44:48.000000000 +0100 1077936128.mem

/bndl/wifi:
total 12
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-14 14:50:08.000000000 +0100 nova

/bndl/wifi/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 web

/bndl/wifi/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 webfig

/bndl/wifi/home/web/webfig:
total 16
-rw-r--r-- 1 root root 9630 2025-10-14 14:37:34.000000000 +0100 wave2-b12d20571c98.jg.gz
-rwxr-xr-x 1 root root  106 2025-10-14 14:37:34.000000000 +0100 wave2.info
lrwxrwxrwx 1 root root   24 2025-10-14 14:37:34.000000000 +0100 wave2.jg.gz -> wave2-b12d20571c98.jg.gz

/bndl/wifi/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 modules

/bndl/wifi/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 5.6.3

/bndl/wifi/lib/modules/5.6.3:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 misc
-rw-r--r-- 1 root root   23 2025-10-14 14:49:07.000000000 +0100 modules.dep.wifi

/bndl/wifi/lib/modules/5.6.3/misc:
total 36
-rw-r--r-- 1 root root 36780 2025-10-14 14:39:37.000000000 +0100 c2.ko

/bndl/wifi/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-14 14:50:08.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 lib

/bndl/wifi/nova/bin:
total 1004
-rwxr-xr-x 1 root root 1024236 2025-10-14 14:48:40.000000000 +0100 ww2

/bndl/wifi/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 radius

/bndl/wifi/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 183 2025-10-14 14:36:55.000000000 +0100 wifi.x3

/bndl/wifi/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-10-14 14:36:55.000000000 +0100 wifi.x3

/bndl/wifi/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 console

/bndl/wifi/nova/lib/console:
total 212
-rwxr-xr-x 1 root root 215569 2025-10-14 14:37:27.000000000 +0100 1275068416.mem

/boot:
total 0

/dev:
total 0

/etc:
total 652
-rw-r--r-- 1 root root  48532 2025-10-14 13:55:22.000000000 +0100 al2-7.21beta3.fwf
-rw-r--r-- 1 root root  27668 2025-10-14 13:55:22.000000000 +0100 an7563-7.21beta3.fwf
-rw-r--r-- 1 root root  39740 2025-10-14 13:55:25.000000000 +0100 dx3230L-7.21beta3.fwf
-rw-r--r-- 1 root root  29276 2025-10-14 13:55:25.000000000 +0100 en7562-7.21beta3.fwf
-rw-r--r-- 1 root root  12536 2025-10-14 13:49:34.000000000 +0100 fan_i2c.stm32
-rw-r--r-- 1 root root  35772 2025-10-14 13:55:23.000000000 +0100 ipq4000-7.21beta3.fwf
-rw-r--r-- 1 root root  31708 2025-10-14 13:55:23.000000000 +0100 ipq4000L-7.21beta3.fwf
-rw-r--r-- 1 root root  37028 2025-10-14 13:55:26.000000000 +0100 ipq5000-7.21beta3.fwf
-rw-r--r-- 1 root root  34320 2025-10-14 13:55:21.000000000 +0100 ipq8060-7.21beta3.fwf
-rw-r--r-- 1 root root 130743 2025-10-14 13:49:34.000000000 +0100 license
-rw-r--r-- 1 root root  40696 2025-10-14 13:55:24.000000000 +0100 mdm9607-7.21beta3.fwf
-rwxr-xr-x 1 root root  86908 2025-10-14 13:49:33.000000000 +0100 oui.bin
-rw-r--r-- 1 root root  33976 2025-10-14 13:49:34.000000000 +0100 pse-8bt.stm32
-rw-r--r-- 1 root root  14084 2025-10-14 13:49:34.000000000 +0100 pse-ch4-SUOUT_PSUCTRL.samd20
-rw-r--r-- 1 root root  13836 2025-10-14 13:49:34.000000000 +0100 pse-ch8-CRS112.samd20
-rw-r--r-- 1 root root  13812 2025-10-14 13:49:34.000000000 +0100 pse-ch8-CRS328.samd20
-rw-r--r-- 1 root root   4049 2025-10-14 13:49:34.000000000 +0100 stm8_hw_monitor.bin
lrwxrwxrwx 1 root root     24 2025-10-14 14:50:08.000000000 +0100 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2025-10-14 14:50:08.000000000 +0100 web

/home/web:
total 64
drwxr-xr-x 2 root root  4096 2025-10-14 14:50:08.000000000 +0100 assets
-rwxr-xr-x 1 root root 19798 2025-10-14 13:54:26.000000000 +0100 bth-files.html
-rwxr-xr-x 1 root root   600 2025-10-14 13:49:35.000000000 +0100 favicon.png
-rwxr-xr-x 1 root root   689 2025-10-14 13:49:35.000000000 +0100 favicon.svg
-rwxr-xr-x 1 root root   708 2025-10-14 13:49:33.000000000 +0100 graph.css
drwxr-xr-x 2 root root  4096 2025-10-14 14:50:08.000000000 +0100 help
-rwxr-xr-x 1 root root  1317 2025-10-14 13:49:35.000000000 +0100 index2.html
lrwxrwxrwx 1 root root    12 2025-10-14 14:36:37.000000000 +0100 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2025-10-14 13:49:35.000000000 +0100 logo.png
-rw-r--r-- 1 root root  2427 2025-10-14 13:49:34.000000000 +0100 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2025-10-14 13:49:35.000000000 +0100 robots.txt
drwxr-xr-x 2 root root  4096 2025-10-14 14:50:08.000000000 +0100 webfig
drwxr-xr-x 2 root root  4096 2025-10-14 14:50:08.000000000 +0100 winbox

/home/web/assets:
total 168
-rw-r--r-- 1 root root  19040 2025-10-14 13:49:34.000000000 +0100 400.woff2
-rw-r--r-- 1 root root  19156 2025-10-14 13:49:34.000000000 +0100 700.woff2
-rwxr-xr-x 1 root root   1050 2025-10-14 13:49:35.000000000 +0100 script-582e5506ba67.js
-rwxr-xr-x 1 root root 123976 2025-10-14 13:49:35.000000000 +0100 style-ae67df160dad.css

/home/web/help:
total 4
-rw-r--r-- 1 root root 118 2025-10-14 13:49:34.000000000 +0100 license.html

/home/web/webfig:
total 680
-rwxr-xr-x 1 root root   9157 2025-10-14 13:53:10.000000000 +0100 curve255-541e54a862be.js
-rwxr-xr-x 1 root root     75 2025-10-14 13:58:47.000000000 +0100 icons.info
-rwxr-xr-x 1 root root  24790 2025-10-14 13:49:32.000000000 +0100 icons.png
-rwxr-xr-x 1 root root     55 2025-10-14 13:58:47.000000000 +0100 icons24.info
-rwxr-xr-x 1 root root  40423 2025-10-14 13:49:32.000000000 +0100 icons24.png
-rwxr-xr-x 1 root root     54 2025-10-14 13:58:47.000000000 +0100 icons32.info
-rwxr-xr-x 1 root root  55936 2025-10-14 13:49:32.000000000 +0100 icons32.png
-rwxr-xr-x 1 root root  22671 2025-10-14 13:53:10.000000000 +0100 index.html
lrwxrwxrwx 1 root root     13 2025-10-14 13:53:10.000000000 +0100 list -> /ram/gum.list
-rwxr-xr-x 1 root root 404275 2025-10-14 13:53:10.000000000 +0100 master-3be2f4ce2a96.js
-rw-r--r-- 1 root root 109302 2025-10-14 13:58:48.000000000 +0100 roteros-5a89dcb55bc4.jg.gz
-rwxr-xr-x 1 root root    112 2025-10-14 13:58:48.000000000 +0100 roteros.info
lrwxrwxrwx 1 root root     26 2025-10-14 13:58:49.000000000 +0100 roteros.jg.gz -> roteros-5a89dcb55bc4.jg.gz

/home/web/winbox:
total 0

/lib:
total 1692
-rwxr-xr-x 1 root root 247440 2025-10-14 13:51:22.000000000 +0100 libc.so
-rwxr-xr-x 1 root root  71836 2025-10-14 13:57:21.000000000 +0100 libeap.so
-rwxr-xr-x 1 root root  21836 2025-10-14 13:53:18.000000000 +0100 libjson.so
-rwxr-xr-x 1 root root 154232 2025-10-14 13:55:47.000000000 +0100 librappsup.so
-rwxr-xr-x 1 root root 104624 2025-10-14 13:54:14.000000000 +0100 libubox.so
-rwxr-xr-x 1 root root  67508 2025-10-14 13:53:09.000000000 +0100 libuc++.so
-rwxr-xr-x 1 root root 224428 2025-10-14 13:56:18.000000000 +0100 libucrypto.so
-rwxr-xr-x 1 root root  26140 2025-10-14 13:54:07.000000000 +0100 libufiber.so
-rwxr-xr-x 1 root root  55180 2025-10-14 13:54:13.000000000 +0100 libuhttp.so
-rwxr-xr-x 1 root root 566820 2025-10-14 13:53:55.000000000 +0100 libumsg.so
-rwxr-xr-x 1 root root  32696 2025-10-14 13:56:33.000000000 +0100 liburadius.so
-rwxr-xr-x 1 root root   9496 2025-10-14 13:56:24.000000000 +0100 libuxml++.so
-rwxr-xr-x 1 root root  34612 2025-10-14 13:53:13.000000000 +0100 libwww.so
-rwxr-xr-x 1 root root  13536 2025-10-14 13:53:17.000000000 +0100 libxml.so
-rwxr-xr-x 1 root root  67056 2025-10-14 13:53:17.000000000 +0100 libz.so
drwxr-xr-x 3 root root   4096 2025-10-14 14:50:08.000000000 +0100 modules
lrwxrwxrwx 1 root root     27 2025-10-14 14:50:08.000000000 +0100 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2025-10-14 14:50:08.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 5 root root 4096 2025-10-14 14:50:08.000000000 +0100 drivers
drwxr-xr-x 8 root root 4096 2025-10-14 14:50:08.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 misc
-rw-r--r-- 1 root root 3494 2025-10-14 14:36:30.000000000 +0100 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-10-14 14:50:08.000000000 +0100 net

/lib/modules/5.6.3/drivers:
total 12
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 char
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 crypto
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 net

/lib/modules/5.6.3/drivers/char:
total 56
-rw-r--r-- 1 root root  3820 2025-10-14 14:33:53.000000000 +0100 al_cause.ko
-rw-r--r-- 1 root root  5888 2025-10-14 14:33:57.000000000 +0100 ecnt_wdt.ko
-rw-r--r-- 1 root root 12372 2025-10-14 14:33:42.000000000 +0100 ipqhwmon.ko
-rw-r--r-- 1 root root  6740 2025-10-14 14:33:35.000000000 +0100 ipqwdt.ko
-rw-r--r-- 1 root root  7116 2025-10-14 14:33:49.000000000 +0100 orion_wdt.ko
-rw-r--r-- 1 root root  8536 2025-10-14 14:29:01.000000000 +0100 ticker.ko

/lib/modules/5.6.3/drivers/crypto:
total 144
-rw-r--r-- 1 root root 85492 2025-10-14 14:33:20.000000000 +0100 al_crypto.ko
-rw-r--r-- 1 root root 24696 2025-10-14 14:33:17.000000000 +0100 crypto_eip93.ko
-rw-r--r-- 1 root root 31520 2025-10-14 14:33:16.000000000 +0100 qca_crypto.ko

/lib/modules/5.6.3/drivers/net:
total 1724
-rw-r--r-- 1 root root  78248 2025-10-14 14:33:08.000000000 +0100 al.ko
-rw-r--r-- 1 root root  39304 2025-10-14 14:30:39.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root  38220 2025-10-14 14:29:39.000000000 +0100 atl1c.ko
-rw-r--r-- 1 root root  15888 2025-10-14 14:33:33.000000000 +0100 dakota_eth.ko
-rw-r--r-- 1 root root  28796 2025-10-14 14:33:59.000000000 +0100 ecnt_eth.ko
-rw-r--r-- 1 root root   8504 2025-10-14 14:32:26.000000000 +0100 imq.ko
-rw-r--r-- 1 root root  39972 2025-10-14 14:30:39.000000000 +0100 marvell_amethyst.ko
-rw-r--r-- 1 root root  35044 2025-10-14 14:30:39.000000000 +0100 mediatek_switch.ko
-rw-r--r-- 1 root root  10476 2025-10-14 14:34:24.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root 179820 2025-10-14 14:34:25.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root  97388 2025-10-14 14:30:22.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root 692784 2025-10-14 14:34:23.000000000 +0100 prestera_dx_mac.ko
-rw-r--r-- 1 root root  49440 2025-10-14 14:33:09.000000000 +0100 qca_nss_gmac.ko
-rw-r--r-- 1 root root  42684 2025-10-14 14:33:21.000000000 +0100 qca_rmnet.ko
-rw-r--r-- 1 root root  34776 2025-10-14 14:33:30.000000000 +0100 qcom_emac.ko
-rw-r--r-- 1 root root 147920 2025-10-14 14:33:44.000000000 +0100 quectel_mhi.ko
-rw-r--r-- 1 root root  19940 2025-10-14 14:30:39.000000000 +0100 rtl8367.ko
-rw-r--r-- 1 root root   2688 2025-10-14 14:33:21.000000000 +0100 smem.ko
-rw-r--r-- 1 root root   3840 2025-10-14 14:32:39.000000000 +0100 sram.ko
-rw-r--r-- 1 root root  69700 2025-10-14 14:30:44.000000000 +0100 switch.ko
drwxr-xr-x 2 root root   4096 2025-10-14 14:50:08.000000000 +0100 usb
-rw-r--r-- 1 root root  21504 2025-10-14 14:29:01.000000000 +0100 via-velocity.ko
-rw-r--r-- 1 root root  56820 2025-10-14 14:34:24.000000000 +0100 vxlan2.ko

/lib/modules/5.6.3/drivers/net/usb:
total 172
-rw-r--r-- 1 root root  69412 2025-10-14 14:33:58.000000000 +0100 fp_usbnet.ko
-rw-r--r-- 1 root root 104920 2025-10-14 14:33:41.000000000 +0100 mbim.ko

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-10-14 14:50:08.000000000 +0100 arch
drwxr-xr-x  2 root root 4096 2025-10-14 14:50:08.000000000 +0100 crypto
drwxr-xr-x 12 root root 4096 2025-10-14 14:50:08.000000000 +0100 drivers
drwxr-xr-x 10 root root 4096 2025-10-14 14:50:08.000000000 +0100 fs
drwxr-xr-x  5 root root 4096 2025-10-14 14:50:08.000000000 +0100 lib
drwxr-xr-x 13 root root 4096 2025-10-14 14:50:08.000000000 +0100 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 4 root root 4096 2025-10-14 14:50:08.000000000 +0100 arm

/lib/modules/5.6.3/kernel/arch/arm:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 crypto
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 oprofile

/lib/modules/5.6.3/kernel/arch/arm/crypto:
total 52
-rw-r--r-- 1 root root 22040 2025-10-14 14:32:18.000000000 +0100 chacha-neon.ko
-rw-r--r-- 1 root root 13884 2025-10-14 14:32:18.000000000 +0100 curve25519-neon.ko
-rw-r--r-- 1 root root 10184 2025-10-14 14:32:18.000000000 +0100 poly1305-arm.ko

/lib/modules/5.6.3/kernel/arch/arm/oprofile:
total 36
-rw-r--r-- 1 root root 33388 2025-10-14 14:32:18.000000000 +0100 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 44
-rw-r--r-- 1 root root  3920 2025-10-14 14:32:18.000000000 +0100 arc4.ko
-rw-r--r-- 1 root root 13072 2025-10-14 14:32:18.000000000 +0100 ccm.ko
-rw-r--r-- 1 root root  5600 2025-10-14 14:32:18.000000000 +0100 cmac.ko
-rw-r--r-- 1 root root  4776 2025-10-14 14:32:18.000000000 +0100 des_generic.ko
-rw-r--r-- 1 root root  5876 2025-10-14 14:32:18.000000000 +0100 md4.ko

/lib/modules/5.6.3/kernel/drivers:
total 40
drwxr-xr-x  2 root root 4096 2025-10-14 14:50:08.000000000 +0100 ata
drwxr-xr-x  3 root root 4096 2025-10-14 14:50:08.000000000 +0100 crypto
drwxr-xr-x  2 root root 4096 2025-10-14 14:50:08.000000000 +0100 hid
drwxr-xr-x  2 root root 4096 2025-10-14 14:50:08.000000000 +0100 hwmon
drwxr-xr-x  4 root root 4096 2025-10-14 14:50:08.000000000 +0100 mmc
drwxr-xr-x  6 root root 4096 2025-10-14 14:50:08.000000000 +0100 net
drwxr-xr-x  3 root root 4096 2025-10-14 14:50:08.000000000 +0100 pci
drwxr-xr-x  3 root root 4096 2025-10-14 14:50:08.000000000 +0100 phy
drwxr-xr-x  2 root root 4096 2025-10-14 14:50:08.000000000 +0100 scsi
drwxr-xr-x 13 root root 4096 2025-10-14 14:50:08.000000000 +0100 usb

/lib/modules/5.6.3/kernel/drivers/ata:
total 244
-rw-r--r-- 1 root root  33704 2025-10-14 14:32:18.000000000 +0100 ahci.ko
-rw-r--r-- 1 root root  30952 2025-10-14 14:32:18.000000000 +0100 libahci.ko
-rw-r--r-- 1 root root 179180 2025-10-14 14:32:19.000000000 +0100 libata.ko

/lib/modules/5.6.3/kernel/drivers/crypto:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 qce

/lib/modules/5.6.3/kernel/drivers/crypto/qce:
total 32
-rw-r--r-- 1 root root 31620 2025-10-14 14:32:19.000000000 +0100 qcrypto.ko

/lib/modules/5.6.3/kernel/drivers/hid:
total 68
-rw-r--r-- 1 root root 67824 2025-10-14 14:32:19.000000000 +0100 hid.ko

/lib/modules/5.6.3/kernel/drivers/hwmon:
total 16
-rw-r--r-- 1 root root 15736 2025-10-14 14:32:19.000000000 +0100 lm75.ko

/lib/modules/5.6.3/kernel/drivers/mmc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 core
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 host

/lib/modules/5.6.3/kernel/drivers/mmc/core:
total 140
-rw-r--r-- 1 root root  33752 2025-10-14 14:32:19.000000000 +0100 mmc_block.ko
-rw-r--r-- 1 root root 105592 2025-10-14 14:32:19.000000000 +0100 mmc_core.ko

/lib/modules/5.6.3/kernel/drivers/mmc/host:
total 104
-rw-r--r-- 1 root root 13972 2025-10-14 14:32:19.000000000 +0100 cqhci.ko
-rw-r--r-- 1 root root 13640 2025-10-14 14:32:19.000000000 +0100 mmc_spi.ko
-rw-r--r-- 1 root root  3104 2025-10-14 14:32:19.000000000 +0100 of_mmc_spi.ko
-rw-r--r-- 1 root root 19948 2025-10-14 14:32:19.000000000 +0100 sdhci-msm.ko
-rw-r--r-- 1 root root  6364 2025-10-14 14:32:19.000000000 +0100 sdhci-pltfm.ko
-rw-r--r-- 1 root root 40856 2025-10-14 14:32:20.000000000 +0100 sdhci.ko

/lib/modules/5.6.3/kernel/drivers/net:
total 160
drwxr-xr-x 2 root root  4096 2025-10-14 14:50:08.000000000 +0100 bonding
-rw-r--r-- 1 root root 38380 2025-10-14 14:32:20.000000000 +0100 macsec.ko
-rw-r--r-- 1 root root 20500 2025-10-14 14:32:20.000000000 +0100 macvlan.ko
drwxr-xr-x 2 root root  4096 2025-10-14 14:50:08.000000000 +0100 slip
-rw-r--r-- 1 root root 39716 2025-10-14 14:32:20.000000000 +0100 tun.ko
drwxr-xr-x 2 root root  4096 2025-10-14 14:50:08.000000000 +0100 usb
-rw-r--r-- 1 root root 17468 2025-10-14 14:32:20.000000000 +0100 veth.ko
-rw-r--r-- 1 root root 19280 2025-10-14 14:32:20.000000000 +0100 vrf.ko
drwxr-xr-x 2 root root  4096 2025-10-14 14:50:08.000000000 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 124
-rw-r--r-- 1 root root 124596 2025-10-14 14:32:20.000000000 +0100 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 5796 2025-10-14 14:32:20.000000000 +0100 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 184
-rw-r--r-- 1 root root 19232 2025-10-14 14:32:20.000000000 +0100 ax88179_178a.ko
-rw-r--r-- 1 root root 37140 2025-10-14 14:32:20.000000000 +0100 hso.ko
-rw-r--r-- 1 root root 55828 2025-10-14 14:32:20.000000000 +0100 r8152.ko
-rw-r--r-- 1 root root 12856 2025-10-14 14:32:20.000000000 +0100 sierra_net.ko
-rw-r--r-- 1 root root 24260 2025-10-14 14:32:20.000000000 +0100 smsc95xx.ko
-rw-r--r-- 1 root root 26972 2025-10-14 14:32:20.000000000 +0100 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 80
-rw-r--r-- 1 root root 81096 2025-10-14 14:32:20.000000000 +0100 wireguard.ko

/lib/modules/5.6.3/kernel/drivers/pci:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 controller

/lib/modules/5.6.3/kernel/drivers/pci/controller:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 dwc

/lib/modules/5.6.3/kernel/drivers/pci/controller/dwc:
total 40
-rw-r--r-- 1 root root 38984 2025-10-14 14:32:21.000000000 +0100 pcie-qcom.ko

/lib/modules/5.6.3/kernel/drivers/phy:
total 12
-rw-r--r-- 1 root root 7500 2025-10-14 14:32:21.000000000 +0100 phy-qcom-dwc3.ko
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 qualcomm

/lib/modules/5.6.3/kernel/drivers/phy/qualcomm:
total 8
-rw-r--r-- 1 root root 6472 2025-10-14 14:32:21.000000000 +0100 phy-qcom-usb-hs.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 156
-rw-r--r-- 1 root root 117576 2025-10-14 14:32:21.000000000 +0100 scsi_mod.ko
-rw-r--r-- 1 root root  39080 2025-10-14 14:32:21.000000000 +0100 sd_mod.ko

/lib/modules/5.6.3/kernel/drivers/usb:
total 44
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 chipidea
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 class
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 common
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 core
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 dwc3
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 host
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 mu3_phy
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 mu3h
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 phy
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 serial
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 storage

/lib/modules/5.6.3/kernel/drivers/usb/chipidea:
total 32
-rw-r--r-- 1 root root 20840 2025-10-14 14:32:21.000000000 +0100 ci_hdrc.ko
-rw-r--r-- 1 root root  7064 2025-10-14 14:32:21.000000000 +0100 ci_hdrc_msm.ko

/lib/modules/5.6.3/kernel/drivers/usb/class:
total 28
-rw-r--r-- 1 root root 28132 2025-10-14 14:32:21.000000000 +0100 cdc-acm.ko

/lib/modules/5.6.3/kernel/drivers/usb/common:
total 16
-rw-r--r-- 1 root root 6620 2025-10-14 14:32:21.000000000 +0100 ulpi.ko
-rw-r--r-- 1 root root 7020 2025-10-14 14:32:21.000000000 +0100 usb-common.ko

/lib/modules/5.6.3/kernel/drivers/usb/core:
total 176
-rw-r--r-- 1 root root 176924 2025-10-14 14:32:21.000000000 +0100 usbcore.ko

/lib/modules/5.6.3/kernel/drivers/usb/dwc3:
total 44
-rw-r--r-- 1 root root  9192 2025-10-14 14:32:21.000000000 +0100 dwc3-of-simple.ko
-rw-r--r-- 1 root root 12104 2025-10-14 14:32:21.000000000 +0100 dwc3-qcom.ko
-rw-r--r-- 1 root root 19612 2025-10-14 14:32:21.000000000 +0100 dwc3.ko

/lib/modules/5.6.3/kernel/drivers/usb/host:
total 164
-rw-r--r-- 1 root root  39780 2025-10-14 14:32:22.000000000 +0100 ehci-hcd.ko
-rw-r--r-- 1 root root   7592 2025-10-14 14:32:22.000000000 +0100 ehci-orion.ko
-rw-r--r-- 1 root root 102536 2025-10-14 14:32:22.000000000 +0100 xhci-hcd.ko
-rw-r--r-- 1 root root  11576 2025-10-14 14:32:22.000000000 +0100 xhci-plat-hcd.ko

/lib/modules/5.6.3/kernel/drivers/usb/mu3_phy:
total 8
-rw-r--r-- 1 root root 6052 2025-10-14 14:32:22.000000000 +0100 mtk-phy.ko

/lib/modules/5.6.3/kernel/drivers/usb/mu3h:
total 116
-rw-r--r-- 1 root root 105656 2025-10-14 14:32:22.000000000 +0100 mu3h-xhci-hcd.ko
-rw-r--r-- 1 root root   8808 2025-10-14 14:32:22.000000000 +0100 mu3h-xhci-plat-hcd.ko

/lib/modules/5.6.3/kernel/drivers/usb/phy:
total 56
-rw-r--r-- 1 root root 11352 2025-10-14 14:32:22.000000000 +0100 phy-msm-qusb.ko
-rw-r--r-- 1 root root 15760 2025-10-14 14:32:22.000000000 +0100 phy-msm-ssusb-qmp.ko
-rw-r--r-- 1 root root  6644 2025-10-14 14:32:22.000000000 +0100 phy-qca-baldur.ko
-rw-r--r-- 1 root root  7060 2025-10-14 14:32:22.000000000 +0100 phy-qca-m31.ko
-rw-r--r-- 1 root root 11704 2025-10-14 14:32:22.000000000 +0100 phy-qca-uniphy.ko

/lib/modules/5.6.3/kernel/drivers/usb/serial:
total 320
-rw-r--r-- 1 root root   9136 2025-10-14 14:32:22.000000000 +0100 ch341.ko
-rw-r--r-- 1 root root  24832 2025-10-14 14:32:22.000000000 +0100 cp210x.ko
-rw-r--r-- 1 root root  78228 2025-10-14 14:32:22.000000000 +0100 ftdi_sio.ko
-rw-r--r-- 1 root root   6032 2025-10-14 14:32:22.000000000 +0100 ipw.ko
-rw-r--r-- 1 root root 102004 2025-10-14 14:32:22.000000000 +0100 option.ko
-rw-r--r-- 1 root root  16236 2025-10-14 14:32:22.000000000 +0100 pl2303.ko
-rw-r--r-- 1 root root  14780 2025-10-14 14:32:22.000000000 +0100 qcserial.ko
-rw-r--r-- 1 root root  14828 2025-10-14 14:32:22.000000000 +0100 sierra.ko
-rw-r--r-- 1 root root   8564 2025-10-14 14:32:22.000000000 +0100 usb_wwan.ko
-rw-r--r-- 1 root root  29816 2025-10-14 14:32:22.000000000 +0100 usbserial.ko

/lib/modules/5.6.3/kernel/drivers/usb/storage:
total 72
-rw-r--r-- 1 root root 72756 2025-10-14 14:32:22.000000000 +0100 usb-storage.ko

/lib/modules/5.6.3/kernel/fs:
total 40
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 cifs
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 exfat
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 ext4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 fat
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 jbd2
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 ksmbd
-rw-r--r-- 1 root root 8144 2025-10-14 14:32:23.000000000 +0100 mbcache.ko
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 nls
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 ntfs3

/lib/modules/5.6.3/kernel/fs/cifs:
total 456
-rw-r--r-- 1 root root 463572 2025-10-14 14:32:23.000000000 +0100 cifs.ko

/lib/modules/5.6.3/kernel/fs/exfat:
total 72
-rw-r--r-- 1 root root 72696 2025-10-14 14:32:23.000000000 +0100 exfat.ko

/lib/modules/5.6.3/kernel/fs/ext4:
total 400
-rw-r--r-- 1 root root 407976 2025-10-14 14:32:23.000000000 +0100 ext4.ko

/lib/modules/5.6.3/kernel/fs/fat:
total 84
-rw-r--r-- 1 root root 67176 2025-10-14 14:32:23.000000000 +0100 fat.ko
-rw-r--r-- 1 root root 13304 2025-10-14 14:32:23.000000000 +0100 vfat.ko

/lib/modules/5.6.3/kernel/fs/jbd2:
total 72
-rw-r--r-- 1 root root 71080 2025-10-14 14:32:23.000000000 +0100 jbd2.ko

/lib/modules/5.6.3/kernel/fs/ksmbd:
total 220
-rw-r--r-- 1 root root 223884 2025-10-14 14:32:23.000000000 +0100 ksmbd.ko

/lib/modules/5.6.3/kernel/fs/nls:
total 32
-rw-r--r-- 1 root root 8424 2025-10-14 14:32:24.000000000 +0100 nls_base.ko
-rw-r--r-- 1 root root 7420 2025-10-14 14:32:24.000000000 +0100 nls_cp437.ko
-rw-r--r-- 1 root root 5836 2025-10-14 14:32:24.000000000 +0100 nls_iso8859-1.ko
-rw-r--r-- 1 root root 3516 2025-10-14 14:32:24.000000000 +0100 nls_utf8.ko

/lib/modules/5.6.3/kernel/fs/ntfs3:
total 196
-rw-r--r-- 1 root root 197956 2025-10-14 14:32:24.000000000 +0100 ntfs3.ko

/lib/modules/5.6.3/kernel/lib:
total 44
-rw-r--r-- 1 root root 4204 2025-10-14 14:32:24.000000000 +0100 asn1_decoder.ko
-rw-r--r-- 1 root root 3740 2025-10-14 14:32:24.000000000 +0100 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 crypto
-rw-r--r-- 1 root root 4464 2025-10-14 14:32:24.000000000 +0100 oid_registry.ko
-rw-r--r-- 1 root root 4236 2025-10-14 14:32:24.000000000 +0100 ts_bm.ko
-rw-r--r-- 1 root root 4096 2025-10-14 14:32:24.000000000 +0100 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 64
-rw-r--r-- 1 root root  2536 2025-10-14 14:32:24.000000000 +0100 libarc4.ko
-rw-r--r-- 1 root root  7172 2025-10-14 14:32:24.000000000 +0100 libblake2s-generic.ko
-rw-r--r-- 1 root root  4340 2025-10-14 14:32:24.000000000 +0100 libblake2s.ko
-rw-r--r-- 1 root root  7348 2025-10-14 14:32:24.000000000 +0100 libchacha20poly1305.ko
-rw-r--r-- 1 root root  9632 2025-10-14 14:32:24.000000000 +0100 libcurve25519-generic.ko
-rw-r--r-- 1 root root  2508 2025-10-14 14:32:24.000000000 +0100 libcurve25519.ko
-rw-r--r-- 1 root root 17708 2025-10-14 14:32:24.000000000 +0100 libdes.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18088 2025-10-14 14:32:24.000000000 +0100 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14516 2025-10-14 14:32:24.000000000 +0100 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 44
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 802
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 8021q
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 ipv4
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 ipv6
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 mpls
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 qrtr
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 rfkill
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 sched
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 xfrm

/lib/modules/5.6.3/kernel/net/802:
total 12
-rw-r--r-- 1 root root 10196 2025-10-14 14:32:24.000000000 +0100 mrp.ko

/lib/modules/5.6.3/kernel/net/8021q:
total 28
-rw-r--r-- 1 root root 26164 2025-10-14 14:32:25.000000000 +0100 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 104
-rw-r--r-- 1 root root  3448 2025-10-14 14:32:25.000000000 +0100 ebt_802_3.ko
-rw-r--r-- 1 root root  4180 2025-10-14 14:32:25.000000000 +0100 ebt_arp.ko
-rw-r--r-- 1 root root  3872 2025-10-14 14:32:25.000000000 +0100 ebt_arpreply.ko
-rw-r--r-- 1 root root  3844 2025-10-14 14:32:25.000000000 +0100 ebt_dnat.ko
-rw-r--r-- 1 root root  4308 2025-10-14 14:32:25.000000000 +0100 ebt_ip.ko
-rw-r--r-- 1 root root  4476 2025-10-14 14:32:25.000000000 +0100 ebt_ip6.ko
-rw-r--r-- 1 root root  5444 2025-10-14 14:32:25.000000000 +0100 ebt_limit.ko
-rw-r--r-- 1 root root  3384 2025-10-14 14:32:25.000000000 +0100 ebt_mark.ko
-rw-r--r-- 1 root root  3316 2025-10-14 14:32:25.000000000 +0100 ebt_mark_m.ko
-rw-r--r-- 1 root root  3324 2025-10-14 14:32:25.000000000 +0100 ebt_pkttype.ko
-rw-r--r-- 1 root root  3788 2025-10-14 14:32:25.000000000 +0100 ebt_redirect.ko
-rw-r--r-- 1 root root  3780 2025-10-14 14:32:25.000000000 +0100 ebt_snat.ko
-rw-r--r-- 1 root root  4732 2025-10-14 14:32:25.000000000 +0100 ebt_stp.ko
-rw-r--r-- 1 root root  3728 2025-10-14 14:32:25.000000000 +0100 ebt_vlan.ko
-rw-r--r-- 1 root root  4052 2025-10-14 14:32:25.000000000 +0100 ebtable_filter.ko
-rw-r--r-- 1 root root  4044 2025-10-14 14:32:25.000000000 +0100 ebtable_nat.ko
-rw-r--r-- 1 root root 16600 2025-10-14 14:32:25.000000000 +0100 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 17208 2025-10-14 14:32:25.000000000 +0100 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2025-10-14 14:50:08.000000000 +0100 netfilter
-rw-r--r-- 1 root root 14276 2025-10-14 14:32:26.000000000 +0100 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 96
-rw-r--r-- 1 root root 17348 2025-10-14 14:32:25.000000000 +0100 ip_tables.ko
-rw-r--r-- 1 root root  4656 2025-10-14 14:32:25.000000000 +0100 ipt_REJECT.ko
-rw-r--r-- 1 root root  4752 2025-10-14 14:32:25.000000000 +0100 iptable_filter.ko
-rw-r--r-- 1 root root  4728 2025-10-14 14:32:25.000000000 +0100 iptable_mangle.ko
-rw-r--r-- 1 root root  4440 2025-10-14 14:32:25.000000000 +0100 iptable_nat.ko
-rw-r--r-- 1 root root  4920 2025-10-14 14:32:25.000000000 +0100 iptable_raw.ko
-rw-r--r-- 1 root root  4284 2025-10-14 14:32:25.000000000 +0100 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root 10036 2025-10-14 14:32:25.000000000 +0100 nf_nat_h323.ko
-rw-r--r-- 1 root root  5644 2025-10-14 14:32:25.000000000 +0100 nf_nat_pptp.ko
-rw-r--r-- 1 root root  4388 2025-10-14 14:32:26.000000000 +0100 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 32
-rw-r--r-- 1 root root  9656 2025-10-14 14:32:26.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root 11676 2025-10-14 14:32:26.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root  3788 2025-10-14 14:32:26.000000000 +0100 ip6_udp_tunnel.ko
drwxr-xr-x 2 root root  4096 2025-10-14 14:50:08.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 88
-rw-r--r-- 1 root root 17644 2025-10-14 14:32:26.000000000 +0100 ip6_tables.ko
-rw-r--r-- 1 root root  4568 2025-10-14 14:32:26.000000000 +0100 ip6t_NPT.ko
-rw-r--r-- 1 root root  4660 2025-10-14 14:32:26.000000000 +0100 ip6t_REJECT.ko
-rw-r--r-- 1 root root  3532 2025-10-14 14:32:26.000000000 +0100 ip6t_eui64.ko
-rw-r--r-- 1 root root  4224 2025-10-14 14:32:26.000000000 +0100 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  4792 2025-10-14 14:32:26.000000000 +0100 ip6table_filter.ko
-rw-r--r-- 1 root root  4928 2025-10-14 14:32:26.000000000 +0100 ip6table_mangle.ko
-rw-r--r-- 1 root root  4448 2025-10-14 14:32:26.000000000 +0100 ip6table_nat.ko
-rw-r--r-- 1 root root  4928 2025-10-14 14:32:26.000000000 +0100 ip6table_raw.ko
-rw-r--r-- 1 root root  5108 2025-10-14 14:32:26.000000000 +0100 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 52
-rw-r--r-- 1 root root  5892 2025-10-14 14:32:26.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root 43376 2025-10-14 14:32:26.000000000 +0100 mpls_router.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 472
-rw-r--r-- 1 root root 10692 2025-10-14 14:32:26.000000000 +0100 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root 41208 2025-10-14 14:32:26.000000000 +0100 nf_conntrack_h323.ko
-rw-r--r-- 1 root root  8796 2025-10-14 14:32:26.000000000 +0100 nf_conntrack_irc.ko
-rw-r--r-- 1 root root 35648 2025-10-14 14:32:27.000000000 +0100 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root  9668 2025-10-14 14:32:27.000000000 +0100 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root  8716 2025-10-14 14:32:27.000000000 +0100 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root 28452 2025-10-14 14:32:27.000000000 +0100 nf_conntrack_sip.ko
-rw-r--r-- 1 root root  7572 2025-10-14 14:32:27.000000000 +0100 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root 31116 2025-10-14 14:32:27.000000000 +0100 nf_nat.ko
-rw-r--r-- 1 root root  5396 2025-10-14 14:32:27.000000000 +0100 nf_nat_ftp.ko
-rw-r--r-- 1 root root  5104 2025-10-14 14:32:27.000000000 +0100 nf_nat_irc.ko
-rw-r--r-- 1 root root  8612 2025-10-14 14:32:27.000000000 +0100 nf_nat_rtsp.ko
-rw-r--r-- 1 root root 12816 2025-10-14 14:32:27.000000000 +0100 nf_nat_sip.ko
-rw-r--r-- 1 root root  3784 2025-10-14 14:32:27.000000000 +0100 nf_nat_tftp.ko
-rw-r--r-- 1 root root  9872 2025-10-14 14:32:27.000000000 +0100 nfnetlink.ko
-rw-r--r-- 1 root root 25852 2025-10-14 14:32:27.000000000 +0100 x_tables.ko
-rw-r--r-- 1 root root  7964 2025-10-14 14:32:27.000000000 +0100 xt_CT.ko
-rw-r--r-- 1 root root  4736 2025-10-14 14:32:27.000000000 +0100 xt_DSCP.ko
-rw-r--r-- 1 root root  4244 2025-10-14 14:32:27.000000000 +0100 xt_HL.ko
-rw-r--r-- 1 root root  4372 2025-10-14 14:32:27.000000000 +0100 xt_MASQUERADE.ko
-rw-r--r-- 1 root root  4296 2025-10-14 14:32:27.000000000 +0100 xt_NETMAP.ko
-rw-r--r-- 1 root root  4076 2025-10-14 14:32:27.000000000 +0100 xt_REDIRECT.ko
-rw-r--r-- 1 root root  6908 2025-10-14 14:32:27.000000000 +0100 xt_TCPMSS.ko
-rw-r--r-- 1 root root  5856 2025-10-14 14:32:27.000000000 +0100 xt_addrtype.ko
-rw-r--r-- 1 root root  4876 2025-10-14 14:32:27.000000000 +0100 xt_connbytes.ko
-rw-r--r-- 1 root root  5472 2025-10-14 14:32:27.000000000 +0100 xt_connmark.ko
-rw-r--r-- 1 root root  5900 2025-10-14 14:32:27.000000000 +0100 xt_conntrack.ko
-rw-r--r-- 1 root root  3940 2025-10-14 14:32:27.000000000 +0100 xt_dscp.ko
-rw-r--r-- 1 root root 18016 2025-10-14 14:32:27.000000000 +0100 xt_hashlimit.ko
-rw-r--r-- 1 root root  4276 2025-10-14 14:32:27.000000000 +0100 xt_helper.ko
-rw-r--r-- 1 root root  3808 2025-10-14 14:32:27.000000000 +0100 xt_hl.ko
-rw-r--r-- 1 root root  3568 2025-10-14 14:32:27.000000000 +0100 xt_length.ko
-rw-r--r-- 1 root root  3320 2025-10-14 14:32:27.000000000 +0100 xt_mac.ko
-rw-r--r-- 1 root root  3712 2025-10-14 14:32:27.000000000 +0100 xt_mark.ko
-rw-r--r-- 1 root root  4308 2025-10-14 14:32:27.000000000 +0100 xt_multiport.ko
-rw-r--r-- 1 root root  6080 2025-10-14 14:32:27.000000000 +0100 xt_nat.ko
-rw-r--r-- 1 root root  4788 2025-10-14 14:32:27.000000000 +0100 xt_physdev.ko
-rw-r--r-- 1 root root  5420 2025-10-14 14:32:27.000000000 +0100 xt_policy.ko
-rw-r--r-- 1 root root  3256 2025-10-14 14:32:27.000000000 +0100 xt_realm.ko
-rw-r--r-- 1 root root  4032 2025-10-14 14:32:27.000000000 +0100 xt_statistic.ko
-rw-r--r-- 1 root root  3724 2025-10-14 14:32:27.000000000 +0100 xt_string.ko
-rw-r--r-- 1 root root  3824 2025-10-14 14:32:27.000000000 +0100 xt_tcpmss.ko
-rw-r--r-- 1 root root  4752 2025-10-14 14:32:27.000000000 +0100 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/qrtr:
total 8
-rw-r--r-- 1 root root 4516 2025-10-14 14:32:27.000000000 +0100 qrtr-smd.ko

/lib/modules/5.6.3/kernel/net/rfkill:
total 16
-rw-r--r-- 1 root root 16292 2025-10-14 14:32:28.000000000 +0100 rfkill.ko

/lib/modules/5.6.3/kernel/net/sched:
total 84
-rw-r--r-- 1 root root 26996 2025-10-14 14:32:28.000000000 +0100 sch_cake.ko
-rw-r--r-- 1 root root  8128 2025-10-14 14:32:28.000000000 +0100 sch_codel.ko
-rw-r--r-- 1 root root 10912 2025-10-14 14:32:28.000000000 +0100 sch_fq_codel.ko
-rw-r--r-- 1 root root 24156 2025-10-14 14:32:28.000000000 +0100 sch_htb.ko
-rw-r--r-- 1 root root 10236 2025-10-14 14:32:28.000000000 +0100 sch_red.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 7688 2025-10-14 14:32:28.000000000 +0100 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 384
-rw-r--r-- 1 root root 11816 2025-10-14 14:33:58.000000000 +0100 airoha_thermal.ko
-rw-r--r-- 1 root root  5260 2025-10-14 14:33:45.000000000 +0100 al_cpufreq.ko
-rw-r--r-- 1 root root  6172 2025-10-14 14:33:02.000000000 +0100 alpine_sd.ko
-rw-r--r-- 1 root root 10232 2025-10-14 14:34:17.000000000 +0100 appmark.ko
-rw-r--r-- 1 root root 10580 2025-10-14 14:29:04.000000000 +0100 btest.ko
-rw-r--r-- 1 root root  2016 2025-10-14 14:34:06.000000000 +0100 c2glue.ko
-rw-r--r-- 1 root root  6712 2025-10-14 14:33:49.000000000 +0100 dot1x.ko
-rw-r--r-- 1 root root 31188 2025-10-14 14:33:38.000000000 +0100 fan_i2c.ko
-rw-r--r-- 1 root root 54072 2025-10-14 14:29:45.000000000 +0100 flash.ko
-rw-r--r-- 1 root root  6132 2025-10-14 14:32:51.000000000 +0100 jiffies.ko
-rw-r--r-- 1 root root 14528 2025-10-14 14:31:13.000000000 +0100 lcd.ko
-rw-r--r-- 1 root root  3588 2025-10-14 14:29:29.000000000 +0100 ledgroup.ko
-rw-r--r-- 1 root root 10064 2025-10-14 14:28:56.000000000 +0100 logring.ko
-rw-r--r-- 1 root root 22384 2025-10-14 14:29:52.000000000 +0100 mesh.ko
-rw-r--r-- 1 root root 10148 2025-10-14 14:28:54.000000000 +0100 panics.ko
-rw-r--r-- 1 root root 13800 2025-10-14 14:28:59.000000000 +0100 poe_simple.ko
-rw-r--r-- 1 root root 31200 2025-10-14 14:28:56.000000000 +0100 poe_v4.ko
-rw-r--r-- 1 root root  7756 2025-10-14 14:32:48.000000000 +0100 rb.ko
-rw-r--r-- 1 root root  6348 2025-10-14 14:32:54.000000000 +0100 romon.ko
-rw-r--r-- 1 root root  6148 2025-10-14 14:29:37.000000000 +0100 snif.ko
-rw-r--r-- 1 root root 25352 2025-10-14 14:33:28.000000000 +0100 stm8_fan.ko
-rw-r--r-- 1 root root 25828 2025-10-14 14:31:25.000000000 +0100 traffic_gen.ko
-rw-r--r-- 1 root root 18220 2025-10-14 14:31:13.000000000 +0100 ts.ko
-rw-r--r-- 1 root root  6784 2025-10-14 14:29:37.000000000 +0100 ulog.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 sched

/lib/modules/5.6.3/net/bridge:
total 192
-rw-r--r-- 1 root root 164424 2025-10-14 14:33:50.000000000 +0100 bridge2.ko
-rw-r--r-- 1 root root  17108 2025-10-14 14:33:44.000000000 +0100 bridge2_netfilter.ko
-rw-r--r-- 1 root root   3256 2025-10-14 14:29:33.000000000 +0100 ebt_snif.ko
-rw-r--r-- 1 root root   3440 2025-10-14 14:29:32.000000000 +0100 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 28
-rw-r--r-- 1 root root 4072 2025-10-14 14:29:01.000000000 +0100 ipt_SAME.ko
-rw-r--r-- 1 root root 6552 2025-10-14 14:29:02.000000000 +0100 ipt_TARPIT.ko
-rw-r--r-- 1 root root 5016 2025-10-14 14:29:02.000000000 +0100 ipt_psd.ko
-rw-r--r-- 1 root root 3352 2025-10-14 14:29:33.000000000 +0100 ipt_snif.ko
-rw-r--r-- 1 root root 3832 2025-10-14 14:29:32.000000000 +0100 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 60
-rw-r--r-- 1 root root  2564 2025-10-14 14:30:18.000000000 +0100 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  2564 2025-10-14 14:30:18.000000000 +0100 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 10400 2025-10-14 14:30:26.000000000 +0100 xt_ein.ko
-rw-r--r-- 1 root root 11640 2025-10-14 14:29:09.000000000 +0100 xt_layer7.ko
-rw-r--r-- 1 root root 18080 2025-10-14 14:30:25.000000000 +0100 xt_misc.ko
-rw-r--r-- 1 root root  4104 2025-10-14 14:29:15.000000000 +0100 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 76
-rw-r--r-- 1 root root  5580 2025-10-14 14:29:19.000000000 +0100 cls_fw.ko
-rw-r--r-- 1 root root 11132 2025-10-14 14:29:24.000000000 +0100 cls_linear.ko
-rw-r--r-- 1 root root 11588 2025-10-14 14:29:48.000000000 +0100 proto_agr.ko
-rw-r--r-- 1 root root 17064 2025-10-14 14:29:48.000000000 +0100 sch_agr.ko
-rw-r--r-- 1 root root 10848 2025-10-14 14:29:05.000000000 +0100 sch_pcq.ko
-rw-r--r-- 1 root root  9204 2025-10-14 14:33:08.000000000 +0100 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2025-10-14 14:50:08.000000000 +0100 bin
drwxr-xr-x 12 root root 4096 2025-10-14 14:50:08.000000000 +0100 etc
drwxr-xr-x  5 root root 4096 2025-10-14 14:50:08.000000000 +0100 lib
lrwxrwxrwx  1 root root    8 2025-10-14 14:50:08.000000000 +0100 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2025-10-14 14:50:08.000000000 +0100 store -> /rw/store

/nova/bin:
total 11400
-rwxr-xr-x 1 root root   26196 2025-10-14 13:54:03.000000000 +0100 agent
-rwxr-xr-x 1 root root   38764 2025-10-14 13:54:47.000000000 +0100 apptraffic
-rwxr-xr-x 1 root root   13736 2025-10-14 13:54:02.000000000 +0100 arpd
-rwxr-xr-x 1 root root   18068 2025-10-14 13:56:26.000000000 +0100 backup
-rwxr-xr-x 1 root root  260544 2025-10-14 13:59:11.000000000 +0100 bridge2
-rwxr-xr-x 1 root root   75944 2025-10-14 13:56:49.000000000 +0100 btest
-rwxr-xr-x 1 root root   59304 2025-10-14 13:54:50.000000000 +0100 bth
-rwxr-xr-x 1 root root  771348 2025-10-14 13:58:21.000000000 +0100 cerm
lrwxrwxrwx 1 root root       4 2025-10-14 13:58:21.000000000 +0100 cerm-worker -> cerm
-rwxr-xr-x 1 root root  162100 2025-10-14 13:58:20.000000000 +0100 cloud
-rwxr-xr-x 1 root root   91904 2025-10-14 13:56:14.000000000 +0100 crossfig
-rwxr-xr-x 1 root root   67632 2025-10-14 13:57:11.000000000 +0100 detnet
-rwxr-xr-x 1 root root   84044 2025-10-14 13:54:50.000000000 +0100 discover
-rwxr-xr-x 1 root root  322332 2025-10-14 13:58:28.000000000 +0100 diskd
-rwxr-xr-x 1 root root  112860 2025-10-14 13:58:52.000000000 +0100 dot1x
-rwxr-xr-x 1 root root   43008 2025-10-14 13:56:30.000000000 +0100 email
-rwxr-xr-x 1 root root  335612 2025-10-14 13:58:30.000000000 +0100 figman
-rwxr-xr-x 1 root root  141716 2025-10-14 13:58:40.000000000 +0100 fileman
-rwxr-xr-x 1 root root   34492 2025-10-14 13:54:06.000000000 +0100 ftpd
-rwxr-xr-x 1 root root  149072 2025-10-14 13:55:06.000000000 +0100 graphing
-rwxr-xr-x 1 root root    5212 2025-10-14 13:58:28.000000000 +0100 havecardbus
-rwxr-xr-x 1 root root   63320 2025-10-14 13:56:11.000000000 +0100 igmpproxy
-rwxr-xr-x 1 root root   75644 2025-10-14 13:57:57.000000000 +0100 installer
-rwxr-xr-x 1 root root   30356 2025-10-14 13:58:30.000000000 +0100 ippool
-rwxr-xr-x 1 root root   51084 2025-10-14 13:56:38.000000000 +0100 keyman
-rwxr-xr-x 1 root root   46948 2025-10-14 13:54:42.000000000 +0100 kidcontrol
-rwxr-xr-x 1 root root  223440 2025-10-14 13:55:08.000000000 +0100 lcdstat
-rwxr-xr-x 1 root root   75944 2025-10-14 13:58:24.000000000 +0100 led
-rwxr-xr-x 1 root root  112640 2025-10-14 13:58:24.000000000 +0100 letsencrypt
-rwxr-xr-x 1 root root   79884 2025-10-14 13:57:56.000000000 +0100 loader
-rwxr-xr-x 1 root root   84140 2025-10-14 13:54:13.000000000 +0100 log
-rwxr-xr-x 1 root root  158352 2025-10-14 14:00:00.000000000 +0100 login
-rwxr-xr-x 1 root root   54916 2025-10-14 13:54:07.000000000 +0100 logmaker
-rwxr-xr-x 1 root root   22148 2025-10-14 13:54:05.000000000 +0100 macping
-rwxr-xr-x 1 root root   38776 2025-10-14 13:56:34.000000000 +0100 mactel
-rwxr-xr-x 1 root root   26372 2025-10-14 13:54:04.000000000 +0100 mepty
-rwxr-xr-x 1 root root   79724 2025-10-14 13:54:55.000000000 +0100 mesh
-rwxr-xr-x 1 root root   67264 2025-10-14 14:00:13.000000000 +0100 mode
lrwxrwxrwx 1 root root       7 2025-10-14 13:58:31.000000000 +0100 modprobed -> moduler
-rwxr-xr-x 1 root root  584212 2025-10-14 13:58:27.000000000 +0100 moduler
-rwxr-xr-x 1 root root   72212 2025-10-14 13:59:06.000000000 +0100 mproxy
-rwxr-xr-x 1 root root   59400 2025-10-14 13:56:44.000000000 +0100 mtget
-rwxr-xr-x 1 root root   46956 2025-10-14 13:54:46.000000000 +0100 natpmp
-rwxr-xr-x 1 root root 1649280 2025-10-14 14:02:13.000000000 +0100 net
-rwxr-xr-x 1 root root   71680 2025-10-14 13:57:14.000000000 +0100 ntp
-rwxr-xr-x 1 root root    5304 2025-10-14 13:54:00.000000000 +0100 panicsl
-rwxr-xr-x 1 root root  741392 2025-10-14 14:00:00.000000000 +0100 parser
-rwxr-xr-x 1 root root   34576 2025-10-14 13:54:26.000000000 +0100 partd
-rwxr-xr-x 1 root root   46908 2025-10-14 13:54:08.000000000 +0100 ping
-rwxr-xr-x 1 root root   51240 2025-10-14 13:57:47.000000000 +0100 portman
-rwxr-xr-x 1 root root   34612 2025-10-14 14:34:48.000000000 +0100 profiler
-rwxr-xr-x 1 root root   84040 2025-10-14 13:58:12.000000000 +0100 ptp
-rwxr-xr-x 1 root root  145580 2025-10-14 13:54:13.000000000 +0100 quickset
-rwxr-xr-x 1 root root   55300 2025-10-14 13:58:18.000000000 +0100 radius
-rwxr-xr-x 1 root root  158236 2025-10-14 13:58:18.000000000 +0100 resolver
-rwxr-xr-x 1 root root    9596 2025-10-14 13:58:18.000000000 +0100 resolver_ctl
-rwxr-xr-x 1 root root   92412 2025-10-14 13:57:23.000000000 +0100 romon
-rwxr-xr-x 1 root root 1663260 2025-10-14 14:03:17.000000000 +0100 route
-rwxr-xr-x 1 root root   17960 2025-10-14 13:57:17.000000000 +0100 rtrace
-rwxr-xr-x 1 root root   43020 2025-10-14 13:58:32.000000000 +0100 sermgr
-rwxr-xr-x 1 root root   34516 2025-10-14 13:54:31.000000000 +0100 sertcp
-rwxr-xr-x 1 root root   71596 2025-10-14 13:54:39.000000000 +0100 sniffer
-rwxr-xr-x 1 root root  199096 2025-10-14 13:59:26.000000000 +0100 snmp
-rwxr-xr-x 1 root root   63440 2025-10-14 13:54:51.000000000 +0100 socks
-rwxr-xr-x 1 root root   38528 2025-10-14 13:54:47.000000000 +0100 socksify
-rwxr-xr-x 1 root root  121008 2025-10-14 13:58:21.000000000 +0100 ssld
-rwxr-xr-x 1 root root   30364 2025-10-14 13:56:36.000000000 +0100 sstore
-rwxr-xr-x 1 root root  265308 2025-10-14 14:00:18.000000000 +0100 sys2
-rwxr-xr-x 1 root root   22020 2025-10-14 13:54:07.000000000 +0100 telnet
-rwxr-xr-x 1 root root   30484 2025-10-14 13:54:07.000000000 +0100 telser
-rwxr-xr-x 1 root root   38792 2025-10-14 13:54:39.000000000 +0100 tftpd
-rwxr-xr-x 1 root root   38644 2025-10-14 13:54:06.000000000 +0100 traceroute
-rwxr-xr-x 1 root root  108536 2025-10-14 13:54:47.000000000 +0100 trafficgen
-rwxr-xr-x 1 root root   26236 2025-10-14 13:54:21.000000000 +0100 trafflow
-rwxr-xr-x 1 root root   26188 2025-10-14 13:54:03.000000000 +0100 undo
-rwxr-xr-x 1 root root  141508 2025-10-14 13:54:58.000000000 +0100 upnp
-rwxr-xr-x 1 root root   84328 2025-10-14 13:58:18.000000000 +0100 user
-rwxr-xr-x 1 root root   92224 2025-10-14 13:57:18.000000000 +0100 vrrp
-rwxr-xr-x 1 root root   30520 2025-10-14 13:54:28.000000000 +0100 watchdog
-rwxr-xr-x 1 root root  142020 2025-10-14 13:57:36.000000000 +0100 wproxy
-rwxr-xr-x 1 root root  129668 2025-10-14 13:59:10.000000000 +0100 www

/nova/etc:
total 68
-rwxr-xr-x 1 root root 9044 2025-10-14 13:49:32.000000000 +0100 app_rules.json
drwxr-xr-x 3 root root 4096 2025-10-14 14:50:08.000000000 +0100 ca
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 leds
-rwxr-xr-x 1 root root 1279 2025-10-14 13:49:33.000000000 +0100 lognames
-rwxr-xr-x 1 root root   10 2025-10-14 13:49:33.000000000 +0100 logo
-rwxr-xr-x 1 root root    1 2025-10-14 13:49:33.000000000 +0100 manual-url
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 pciinfo
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 services
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 system_names
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 upnp
-rwxr-xr-x 1 root root   26 2025-10-14 13:49:33.000000000 +0100 url
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 user
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 www

/nova/etc/ca:
total 104
-rwxr-xr-x 1 root root  837 2025-10-14 13:49:32.000000000 +0100 AmazonRootCA1.der
-rwxr-xr-x 1 root root  955 2025-10-14 13:49:32.000000000 +0100 DigiCert_Assured_ID_Root_CA.der
-rwxr-xr-x 1 root root  922 2025-10-14 13:49:32.000000000 +0100 DigiCert_Assured_ID_Root_G2.der
-rwxr-xr-x 1 root root  586 2025-10-14 13:49:32.000000000 +0100 DigiCert_Assured_ID_Root_G3.der
-rwxr-xr-x 1 root root  947 2025-10-14 13:49:32.000000000 +0100 DigiCert_Global_Root_CA.der
-rwxr-xr-x 1 root root  914 2025-10-14 13:49:32.000000000 +0100 DigiCert_Global_Root_G2.der
-rwxr-xr-x 1 root root  579 2025-10-14 13:49:32.000000000 +0100 DigiCert_Global_Root_G3.der
-rwxr-xr-x 1 root root  969 2025-10-14 13:49:32.000000000 +0100 DigiCert_High_Assurance_EV_Root_CA.der
-rwxr-xr-x 1 root root  541 2025-10-14 13:49:32.000000000 +0100 DigiCert_TLS_ECC_P384_Root_G5.der
-rwxr-xr-x 1 root root 1386 2025-10-14 13:49:32.000000000 +0100 DigiCert_TLS_RSA4096_Root_G5.der
-rwxr-xr-x 1 root root 1428 2025-10-14 13:49:32.000000000 +0100 DigiCert_Trusted_Root_G4.der
-rwxr-xr-x 1 root root  546 2025-10-14 13:49:32.000000000 +0100 GlobalSign_ECC_Root_CA_-_R5.der
-rwxr-xr-x 1 root root  889 2025-10-14 13:49:32.000000000 +0100 GlobalSign_Root_CA.der
-rwxr-xr-x 1 root root  867 2025-10-14 13:49:32.000000000 +0100 GlobalSign_Root_CA_-_R3.der
-rwxr-xr-x 1 root root 1415 2025-10-14 13:49:32.000000000 +0100 GlobalSign_Root_CA_-_R6.der
-rwxr-xr-x 1 root root  527 2025-10-14 13:49:32.000000000 +0100 GlobalSign_Root_E46.der
-rwxr-xr-x 1 root root 1374 2025-10-14 13:49:32.000000000 +0100 GlobalSign_Root_R46.der
-rwxr-xr-x 1 root root 1028 2025-10-14 13:49:32.000000000 +0100 Go_Daddy_Class_2_CA.der
-rwxr-xr-x 1 root root  969 2025-10-14 13:49:32.000000000 +0100 Go_Daddy_Root_Certificate_Authority_-_G2.der
-rwxr-xr-x 1 root root 1391 2025-10-14 13:49:32.000000000 +0100 ISRG_Root_X1.der
-rwxr-xr-x 1 root root  543 2025-10-14 13:49:32.000000000 +0100 ISRG_Root_X2.der
-rwxr-xr-x 1 root root  574 2025-10-14 13:49:32.000000000 +0100 Sectigo_Public_Server_Authentication_Root_E46.der
-rwxr-xr-x 1 root root 1422 2025-10-14 13:49:32.000000000 +0100 Sectigo_Public_Server_Authentication_Root_R46.der
-rwxr-xr-x 1 root root  659 2025-10-14 13:49:32.000000000 +0100 USERTrustECCCertificationAuthority.der
-rwxr-xr-x 1 root root 1506 2025-10-14 13:49:32.000000000 +0100 USERTrustRSACertificationAuthority.der
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 gsma

/nova/etc/ca/gsma:
total 12
-rwxr-xr-x 1 root root 589 2025-10-14 13:49:32.000000000 +0100 gsma_digicert.der
-rwxr-xr-x 1 root root 507 2025-10-14 13:49:32.000000000 +0100 gsma_sealsq.der
-rwxr-xr-x 1 root root 596 2025-10-14 13:49:32.000000000 +0100 gsma_testcert.der

/nova/etc/leds:
total 124
-rwxr-xr-x 1 root root 123872 2025-10-14 13:53:13.000000000 +0100 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2025-10-14 13:53:13.000000000 +0100 system.x3

/nova/etc/pciinfo:
total 228
-rwxr-xr-x 1 root root 231212 2025-10-14 13:53:13.000000000 +0100 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 101 2025-10-14 13:53:13.000000000 +0100 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 992 2025-10-14 13:53:13.000000000 +0100 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2025-10-14 13:53:13.000000000 +0100 system.x3

/nova/etc/upnp:
total 64
-rwxr-xr-x 1 root root  3378 2025-10-14 13:49:35.000000000 +0100 connectionmanager.xml
-rwxr-xr-x 1 root root  5684 2025-10-14 13:49:35.000000000 +0100 contentdirectory.xml
-rwxr-xr-x 1 root root  8764 2025-10-14 13:49:35.000000000 +0100 logo120.png
-rwxr-xr-x 1 root root   930 2025-10-14 13:49:35.000000000 +0100 logo16.gif
-rwxr-xr-x 1 root root  1173 2025-10-14 13:49:35.000000000 +0100 logo32.gif
-rwxr-xr-x 1 root root  1504 2025-10-14 13:49:35.000000000 +0100 logo48.gif
-rwxr-xr-x 1 root root   735 2025-10-14 13:49:35.000000000 +0100 osinfo.xml
-rwxr-xr-x 1 root root  5928 2025-10-14 13:49:35.000000000 +0100 wancommonifcfg.xml
-rwxr-xr-x 1 root root 13444 2025-10-14 13:49:35.000000000 +0100 wanipconn.xml

/nova/etc/user:
total 4
-rwxr-xr-x 1 root root 2230 2025-10-14 13:53:13.000000000 +0100 system.x3

/nova/etc/www:
total 4
-rwxr-xr-x 1 root root 2509 2025-10-14 13:53:13.000000000 +0100 system.x3

/nova/lib:
total 16
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 defconf
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 profiler
-rwxr-xr-x 1 root root 4085 2025-10-14 13:49:33.000000000 +0100 xmlnames2

/nova/lib/console:
total 2324
-rwxr-xr-x 1 root root 2367938 2025-10-14 14:00:56.000000000 +0100 1073741824.mem
-rwxr-xr-x 1 root root     510 2025-10-14 13:49:32.000000000 +0100 logo.txt
-rwxr-xr-x 1 root root      18 2025-10-14 13:49:32.000000000 +0100 sublogo.txt

/nova/lib/defconf:
total 100
-rwxr-xr-x 1 root root   567 2025-10-14 13:49:32.000000000 +0100 defconf
-rwxr-xr-x 1 root root  4995 2025-10-14 13:49:32.000000000 +0100 defconf-caps
-rwxr-xr-x 1 root root  3700 2025-10-14 13:49:32.000000000 +0100 defconf-wps-sync
-rwxr-xr-x 1 root root 85072 2025-10-14 13:49:32.000000000 +0100 get-custom-defconf

/nova/lib/profiler:
total 16
-rwxr-xr-x 1 root root 14020 2025-10-14 14:34:48.000000000 +0100 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 408
-rwxr-xr-x 1 root root 321132 2025-10-14 14:35:35.000000000 +0100 mke2fs
-rwxr-xr-x 1 root root  25584 2025-10-14 13:53:10.000000000 +0100 nandfix
-rwxr-xr-x 1 root root  63452 2025-10-14 13:56:42.000000000 +0100 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2025-10-14 14:50:08.000000000 +0100 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 deinstall
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 lock
lrwxrwxrwx 1 root root    8 2025-10-14 14:50:08.000000000 +0100 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2025-10-14 14:50:08.000000000 +0100 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2025-10-14 14:50:08.000000000 +0100 post
lrwxrwxrwx 1 root root    7 2025-10-14 14:50:08.000000000 +0100 run -> /rw/run
lrwxrwxrwx 1 root root    4 2025-10-14 14:50:08.000000000 +0100 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

