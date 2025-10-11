### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 8701285 bytes, 756 inodes, blocksize: 262144 bytes, created: Fri Oct 10 09:52:38 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 bin
drwxr-xr-x 9 root root 4096 2025-10-10 10:52:30.000000000 +0100 bndl
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 boot
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 dev
lrwxrwxrwx 1 root root   11 2025-10-10 10:52:30.000000000 +0100 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 etc
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 flash
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:30.000000000 +0100 nova
lrwxrwxrwx 1 root root    9 2025-10-10 10:52:30.000000000 +0100 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 proc
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 ram
lrwxrwxrwx 1 root root    9 2025-10-10 10:52:30.000000000 +0100 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 sbin
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 sys
lrwxrwxrwx 1 root root    7 2025-10-10 10:52:30.000000000 +0100 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:30.000000000 +0100 var

/bin:
total 288
lrwxrwxrwx 1 root root     21 2025-10-10 10:52:30.000000000 +0100 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root  18080 2025-10-10 09:57:36.000000000 +0100 catlog
lrwxrwxrwx 1 root root     15 2025-10-10 10:52:30.000000000 +0100 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root     15 2025-10-10 10:52:30.000000000 +0100 login -> /nova/bin/login
-rwxr-xr-x 1 root root  28188 2025-10-10 10:34:38.000000000 +0100 mkexfatfs
-rwxr-xr-x 1 root root   7512 2025-10-10 09:57:36.000000000 +0100 pakp
lrwxrwxrwx 1 root root     21 2025-10-10 10:52:30.000000000 +0100 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root     15 2025-10-10 10:52:30.000000000 +0100 shell -> /nova/bin/login
-rwxr-xr-x 1 root root 234824 2025-10-10 10:35:27.000000000 +0100 sshfs

/bndl:
total 28
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:30.000000000 +0100 advanced-tools
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:30.000000000 +0100 dhcp
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:30.000000000 +0100 hotspot
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:30.000000000 +0100 ipv6
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:30.000000000 +0100 ppp
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:30.000000000 +0100 security
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:30.000000000 +0100 wifi

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:30.000000000 +0100 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 webfig

/bndl/advanced-tools/home/web/webfig:
total 8
-rw-r--r-- 1 root root 2370 2025-10-10 10:36:55.000000000 +0100 advtool-c647bc50a096.jg.gz
-rwxr-xr-x 1 root root  107 2025-10-10 10:36:55.000000000 +0100 advtool.info
lrwxrwxrwx 1 root root   26 2025-10-10 10:36:56.000000000 +0100 advtool.jg.gz -> advtool-c647bc50a096.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 lib

/bndl/advanced-tools/nova/bin:
total 204
-rwxr-xr-x 1 root root 31808 2025-10-10 10:36:03.000000000 +0100 ddns
-rwxr-xr-x 1 root root 14972 2025-10-10 10:35:42.000000000 +0100 fping
-rwxr-xr-x 1 root root 18072 2025-10-10 10:36:23.000000000 +0100 macscan
-rwxr-xr-x 1 root root 68660 2025-10-10 10:38:31.000000000 +0100 netwatch
-rwxr-xr-x 1 root root 16508 2025-10-10 10:35:48.000000000 +0100 pspeed
-rwxr-xr-x 1 root root 35004 2025-10-10 10:36:43.000000000 +0100 scanner
-rwxr-xr-x 1 root root 12008 2025-10-10 10:37:04.000000000 +0100 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 console

/bndl/advanced-tools/nova/lib/console:
total 28
-rwxr-xr-x 1 root root 27225 2025-10-10 10:36:15.000000000 +0100 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 home
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:30.000000000 +0100 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 webfig

/bndl/dhcp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4740 2025-10-10 10:36:59.000000000 +0100 dhcp-aed65be3c144.jg.gz
-rwxr-xr-x 1 root root  100 2025-10-10 10:36:59.000000000 +0100 dhcp.info
lrwxrwxrwx 1 root root   23 2025-10-10 10:37:00.000000000 +0100 dhcp.jg.gz -> dhcp-aed65be3c144.jg.gz

/bndl/dhcp/lib:
total 112
-rwxr-xr-x 1 root root 111704 2025-10-10 10:36:27.000000000 +0100 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 lib

/bndl/dhcp/nova/bin:
total 340
-rwxr-xr-x 1 root root 240572 2025-10-10 10:39:56.000000000 +0100 dhcp
-rwxr-xr-x 1 root root 105004 2025-10-10 10:38:05.000000000 +0100 dhcpclient

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 console

/bndl/dhcp/nova/lib/console:
total 116
-rwxr-xr-x 1 root root 118532 2025-10-10 10:36:44.000000000 +0100 1128267776.mem

/bndl/hotspot:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:30.000000000 +0100 nova

/bndl/hotspot/home:
total 4
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:30.000000000 +0100 web

/bndl/hotspot/home/web:
total 8
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:30.000000000 +0100 hotspot
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 webfig

/bndl/hotspot/home/web/hotspot:
total 68
-rw-r--r-- 1 root root 1094 2025-10-10 09:48:07.000000000 +0100 alogin.html
-rw-r--r-- 1 root root  311 2025-10-10 09:48:07.000000000 +0100 api.json
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 css
-rw-r--r-- 1 root root  640 2025-10-10 09:48:07.000000000 +0100 error.html
-rw-r--r-- 1 root root 3719 2025-10-10 09:48:07.000000000 +0100 errors.txt
-rw-r--r-- 1 root root  903 2025-10-10 09:48:07.000000000 +0100 favicon.ico
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 img
-rw-r--r-- 1 root root 4423 2025-10-10 09:48:07.000000000 +0100 login.html
-rw-r--r-- 1 root root 1459 2025-10-10 09:48:07.000000000 +0100 logout.html
-rw-r--r-- 1 root root 7218 2025-10-10 09:48:07.000000000 +0100 md5.js
-rw-r--r-- 1 root root 1204 2025-10-10 09:48:07.000000000 +0100 radvert.html
-rw-r--r-- 1 root root  330 2025-10-10 09:48:07.000000000 +0100 redirect.html
-rw-r--r-- 1 root root  877 2025-10-10 09:48:07.000000000 +0100 rlogin.html
-rw-r--r-- 1 root root 2855 2025-10-10 09:48:07.000000000 +0100 status.html
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 xml

/bndl/hotspot/home/web/hotspot/css:
total 4
-rw-r--r-- 1 root root 4053 2025-10-10 09:48:07.000000000 +0100 style.css

/bndl/hotspot/home/web/hotspot/img:
total 8
-rw-r--r-- 1 root root 644 2025-10-10 09:48:07.000000000 +0100 password.svg
-rw-r--r-- 1 root root 444 2025-10-10 09:48:07.000000000 +0100 user.svg

/bndl/hotspot/home/web/hotspot/xml:
total 32
-rw-r--r-- 1 root root 4251 2025-10-10 09:48:07.000000000 +0100 WISPAccessGatewayParam.xsd
-rw-r--r-- 1 root root  839 2025-10-10 09:48:07.000000000 +0100 alogin.html
-rw-r--r-- 1 root root  428 2025-10-10 09:48:07.000000000 +0100 error.html
-rw-r--r-- 1 root root  372 2025-10-10 09:48:07.000000000 +0100 flogout.html
-rw-r--r-- 1 root root  809 2025-10-10 09:48:07.000000000 +0100 login.html
-rw-r--r-- 1 root root  370 2025-10-10 09:48:07.000000000 +0100 logout.html
-rw-r--r-- 1 root root  545 2025-10-10 09:48:07.000000000 +0100 rlogin.html

/bndl/hotspot/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4302 2025-10-10 10:40:09.000000000 +0100 hotspot-68f663b0b1d5.jg.gz
-rwxr-xr-x 1 root root  107 2025-10-10 10:40:09.000000000 +0100 hotspot.info
lrwxrwxrwx 1 root root   26 2025-10-10 10:40:09.000000000 +0100 hotspot.jg.gz -> hotspot-68f663b0b1d5.jg.gz

/bndl/hotspot/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 modules

/bndl/hotspot/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 5.6.3

/bndl/hotspot/lib/modules/5.6.3:
total 4
-rw-r--r-- 1 root root    0 2025-10-10 10:40:26.000000000 +0100 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 net

/bndl/hotspot/lib/modules/5.6.3/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 ipv4

/bndl/hotspot/lib/modules/5.6.3/net/ipv4:
total 44
-rw-r--r-- 1 root root 43956 2025-10-10 10:40:03.000000000 +0100 unicl.ko

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 lib

/bndl/hotspot/nova/bin:
total 256
-rwxr-xr-x 1 root root 260928 2025-10-10 10:38:15.000000000 +0100 hotspot

/bndl/hotspot/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 radius

/bndl/hotspot/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-10-10 10:39:11.000000000 +0100 hotspot.x3

/bndl/hotspot/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 console

/bndl/hotspot/nova/lib/console:
total 84
-rwxr-xr-x 1 root root 84886 2025-10-10 10:38:49.000000000 +0100 1132462080.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:30.000000000 +0100 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 webfig

/bndl/ipv6/home/web/webfig:
total 12
-rw-r--r-- 1 root root 8069 2025-10-10 10:36:50.000000000 +0100 ipv6-51ca41a24a71.jg.gz
-rwxr-xr-x 1 root root  101 2025-10-10 10:36:50.000000000 +0100 ipv6.info
lrwxrwxrwx 1 root root   23 2025-10-10 10:36:50.000000000 +0100 ipv6.jg.gz -> ipv6-51ca41a24a71.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:30.000000000 +0100 lib

/bndl/ipv6/nova/bin:
total 92
-rwxr-xr-x 1 root root 30576 2025-10-10 10:37:04.000000000 +0100 ippool6
-rwxr-xr-x 1 root root 59500 2025-10-10 10:36:15.000000000 +0100 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 route

/bndl/ipv6/nova/lib/console:
total 192
-rwxr-xr-x 1 root root 193792 2025-10-10 10:36:31.000000000 +0100 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2025-10-10 09:48:07.000000000 +0100 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:30.000000000 +0100 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 webfig

/bndl/ppp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 6632 2025-10-10 10:36:50.000000000 +0100 ppp-0e7aacafe7ee.jg.gz
-rwxr-xr-x 1 root root   99 2025-10-10 10:36:50.000000000 +0100 ppp.info
lrwxrwxrwx 1 root root   22 2025-10-10 10:36:50.000000000 +0100 ppp.jg.gz -> ppp-0e7aacafe7ee.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:30.000000000 +0100 5.6.3

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2025-10-10 10:46:32.000000000 +0100 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 104
-rw-r--r-- 1 root root 11940 2025-10-10 10:31:48.000000000 +0100 ppp_async.ko
-rw-r--r-- 1 root root  6816 2025-10-10 10:31:48.000000000 +0100 ppp_deflate.ko
-rw-r--r-- 1 root root 34156 2025-10-10 10:31:48.000000000 +0100 ppp_generic.ko
-rw-r--r-- 1 root root  8684 2025-10-10 10:31:48.000000000 +0100 ppp_mppe.ko
-rw-r--r-- 1 root root 10100 2025-10-10 10:31:48.000000000 +0100 ppp_synctty.ko
-rw-r--r-- 1 root root 12972 2025-10-10 10:31:48.000000000 +0100 pppoe.ko
-rw-r--r-- 1 root root  4316 2025-10-10 10:31:48.000000000 +0100 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 96
-rw-r--r-- 1 root root 37864 2025-10-10 10:38:30.000000000 +0100 ovpn.ko
-rw-r--r-- 1 root root  6432 2025-10-10 10:39:44.000000000 +0100 pppoefp.ko
-rw-r--r-- 1 root root 48544 2025-10-10 10:39:20.000000000 +0100 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 64
-rw-r--r-- 1 root root 50100 2025-10-10 10:37:22.000000000 +0100 l2tp.ko
-rw-r--r-- 1 root root 10544 2025-10-10 10:36:20.000000000 +0100 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:30.000000000 +0100 etc
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:30.000000000 +0100 lib

/bndl/ppp/nova/bin:
total 632
-rwxr-xr-x 1 root root 644632 2025-10-10 10:45:50.000000000 +0100 ppp
lrwxrwxrwx 1 root root      3 2025-10-10 10:45:50.000000000 +0100 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2025-10-10 10:36:11.000000000 +0100 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2025-10-10 10:36:11.000000000 +0100 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 profiler

/bndl/ppp/nova/lib/console:
total 160
-rwxr-xr-x 1 root root 160419 2025-10-10 10:36:33.000000000 +0100 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 4
-rwxr-xr-x 1 root root 1940 2025-10-10 10:41:01.000000000 +0100 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:30.000000000 +0100 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 webfig

/bndl/security/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4451 2025-10-10 10:43:07.000000000 +0100 secure-6d95ab448081.jg.gz
-rwxr-xr-x 1 root root  105 2025-10-10 10:43:07.000000000 +0100 secure.info
lrwxrwxrwx 1 root root   25 2025-10-10 10:43:07.000000000 +0100 secure.jg.gz -> secure-6d95ab448081.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 5.6.3

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:30.000000000 +0100 kernel
-rw-r--r-- 1 root root  106 2025-10-10 10:48:03.000000000 +0100 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 crypto
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:30.000000000 +0100 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 88
-rw-r--r-- 1 root root  8384 2025-10-10 10:31:46.000000000 +0100 blowfish_common.ko
-rw-r--r-- 1 root root  6116 2025-10-10 10:31:46.000000000 +0100 blowfish_generic.ko
-rw-r--r-- 1 root root 23668 2025-10-10 10:31:46.000000000 +0100 camellia_generic.ko
-rw-r--r-- 1 root root  8412 2025-10-10 10:31:46.000000000 +0100 chacha20poly1305.ko
-rw-r--r-- 1 root root  3864 2025-10-10 10:31:47.000000000 +0100 echainiv.ko
-rw-r--r-- 1 root root 15864 2025-10-10 10:31:47.000000000 +0100 twofish_common.ko
-rw-r--r-- 1 root root  9892 2025-10-10 10:31:47.000000000 +0100 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 key
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root  8968 2025-10-10 10:31:53.000000000 +0100 ah4.ko
-rw-r--r-- 1 root root 12536 2025-10-10 10:31:53.000000000 +0100 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 36
-rw-r--r-- 1 root root 34200 2025-10-10 10:31:55.000000000 +0100 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 28
-rw-r--r-- 1 root root 27120 2025-10-10 10:31:58.000000000 +0100 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:30.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 lib

/bndl/security/nova/bin:
total 760
-rwxr-xr-x 1 root root 547984 2025-10-10 10:47:15.000000000 +0100 ipsec
lrwxrwxrwx 1 root root      5 2025-10-10 10:47:29.000000000 +0100 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 228288 2025-10-10 10:43:25.000000000 +0100 ssh
lrwxrwxrwx 1 root root      3 2025-10-10 10:43:26.000000000 +0100 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-10-10 10:40:42.000000000 +0100 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2025-10-10 10:40:42.000000000 +0100 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 console

/bndl/security/nova/lib/console:
total 92
-rwxr-xr-x 1 root root 92892 2025-10-10 10:43:15.000000000 +0100 1077936128.mem

/bndl/wifi:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:30.000000000 +0100 nova

/bndl/wifi/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 web

/bndl/wifi/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 webfig

/bndl/wifi/home/web/webfig:
total 16
-rw-r--r-- 1 root root 9293 2025-10-10 10:36:50.000000000 +0100 wave2-a7151b20f7df.jg.gz
-rwxr-xr-x 1 root root  103 2025-10-10 10:36:50.000000000 +0100 wave2.info
lrwxrwxrwx 1 root root   24 2025-10-10 10:36:50.000000000 +0100 wave2.jg.gz -> wave2-a7151b20f7df.jg.gz

/bndl/wifi/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 modules

/bndl/wifi/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 5.6.3

/bndl/wifi/lib/modules/5.6.3:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 misc
-rw-r--r-- 1 root root   23 2025-10-10 10:47:39.000000000 +0100 modules.dep.wifi

/bndl/wifi/lib/modules/5.6.3/misc:
total 36
-rw-r--r-- 1 root root 36768 2025-10-10 10:38:53.000000000 +0100 c2.ko

/bndl/wifi/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:30.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 lib

/bndl/wifi/nova/bin:
total 1064
-rwxr-xr-x 1 root root 1086012 2025-10-10 10:47:26.000000000 +0100 ww2

/bndl/wifi/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 radius

/bndl/wifi/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 183 2025-10-10 10:36:12.000000000 +0100 wifi.x3

/bndl/wifi/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-10-10 10:36:12.000000000 +0100 wifi.x3

/bndl/wifi/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 console

/bndl/wifi/nova/lib/console:
total 216
-rwxr-xr-x 1 root root 220780 2025-10-10 10:36:43.000000000 +0100 1275068416.mem

/boot:
total 0

/dev:
total 0

/etc:
total 184
-rw-r--r-- 1 root root 130743 2025-10-10 09:48:31.000000000 +0100 license
-rw-r--r-- 1 root root  54752 2025-10-10 09:54:44.000000000 +0100 mt7621L-7.20.1.fwf
lrwxrwxrwx 1 root root     24 2025-10-10 10:52:30.000000000 +0100 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:30.000000000 +0100 web

/home/web:
total 64
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:30.000000000 +0100 assets
-rwxr-xr-x 1 root root 19357 2025-10-10 09:53:54.000000000 +0100 bth-files.html
-rwxr-xr-x 1 root root   600 2025-10-10 09:48:31.000000000 +0100 favicon.png
-rwxr-xr-x 1 root root   689 2025-10-10 09:48:31.000000000 +0100 favicon.svg
-rwxr-xr-x 1 root root   708 2025-10-10 09:48:29.000000000 +0100 graph.css
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:30.000000000 +0100 help
-rwxr-xr-x 1 root root  1254 2025-10-10 09:48:31.000000000 +0100 index2.html
lrwxrwxrwx 1 root root    12 2025-10-10 10:35:35.000000000 +0100 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2025-10-10 09:48:31.000000000 +0100 logo.png
-rw-r--r-- 1 root root  2507 2025-10-10 09:48:31.000000000 +0100 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2025-10-10 09:48:31.000000000 +0100 robots.txt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:30.000000000 +0100 webfig
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:30.000000000 +0100 winbox

/home/web/assets:
total 168
-rw-r--r-- 1 root root  19040 2025-10-10 09:48:31.000000000 +0100 400.woff2
-rw-r--r-- 1 root root  19156 2025-10-10 09:48:31.000000000 +0100 700.woff2
-rwxr-xr-x 1 root root    939 2025-10-10 09:48:31.000000000 +0100 script-ae01587e2c4c.js
-rwxr-xr-x 1 root root 123976 2025-10-10 09:48:31.000000000 +0100 style-ae67df160dad.css

/home/web/help:
total 4
-rw-r--r-- 1 root root 118 2025-10-10 09:48:31.000000000 +0100 license.html

/home/web/webfig:
total 672
-rwxr-xr-x 1 root root   9157 2025-10-10 09:52:31.000000000 +0100 curve255-541e54a862be.js
-rwxr-xr-x 1 root root     72 2025-10-10 09:58:21.000000000 +0100 icons.info
-rwxr-xr-x 1 root root  24790 2025-10-10 09:48:29.000000000 +0100 icons.png
-rwxr-xr-x 1 root root     55 2025-10-10 09:58:21.000000000 +0100 icons24.info
-rwxr-xr-x 1 root root  40423 2025-10-10 09:48:29.000000000 +0100 icons24.png
-rwxr-xr-x 1 root root     54 2025-10-10 09:58:21.000000000 +0100 icons32.info
-rwxr-xr-x 1 root root  55936 2025-10-10 09:48:29.000000000 +0100 icons32.png
-rwxr-xr-x 1 root root  22450 2025-10-10 09:52:31.000000000 +0100 index.html
lrwxrwxrwx 1 root root     13 2025-10-10 09:52:31.000000000 +0100 list -> /ram/gum.list
-rwxr-xr-x 1 root root 395060 2025-10-10 09:52:31.000000000 +0100 master-429d683579fc.js
-rw-r--r-- 1 root root 109610 2025-10-10 09:58:24.000000000 +0100 roteros-fd4ba6cabf5b.jg.gz
-rwxr-xr-x 1 root root    109 2025-10-10 09:58:24.000000000 +0100 roteros.info
lrwxrwxrwx 1 root root     26 2025-10-10 09:58:25.000000000 +0100 roteros.jg.gz -> roteros-fd4ba6cabf5b.jg.gz

/home/web/winbox:
total 0

/lib:
total 1944
-rwxr-xr-x 1 root root 279272 2025-10-10 09:50:38.000000000 +0100 libc.so
-rwxr-xr-x 1 root root  89280 2025-10-10 09:56:50.000000000 +0100 libeap.so
-rwxr-xr-x 1 root root  21840 2025-10-10 09:52:38.000000000 +0100 libjson.so
-rwxr-xr-x 1 root root 180160 2025-10-10 09:55:04.000000000 +0100 librappsup.so
-rwxr-xr-x 1 root root 122656 2025-10-10 09:53:37.000000000 +0100 libubox.so
-rwxr-xr-x 1 root root  76508 2025-10-10 09:52:29.000000000 +0100 libuc++.so
-rwxr-xr-x 1 root root 282476 2025-10-10 09:55:33.000000000 +0100 libucrypto.so
-rwxr-xr-x 1 root root  27668 2025-10-10 09:53:30.000000000 +0100 libufiber.so
-rwxr-xr-x 1 root root  70140 2025-10-10 09:53:35.000000000 +0100 libuhttp.so
-rwxr-xr-x 1 root root 639032 2025-10-10 09:53:07.000000000 +0100 libumsg.so
-rwxr-xr-x 1 root root  37020 2025-10-10 09:55:50.000000000 +0100 liburadius.so
-rwxr-xr-x 1 root root  10544 2025-10-10 09:55:43.000000000 +0100 libuxml++.so
-rwxr-xr-x 1 root root  37432 2025-10-10 09:52:34.000000000 +0100 libwww.so
-rwxr-xr-x 1 root root  13772 2025-10-10 09:52:38.000000000 +0100 libxml.so
-rwxr-xr-x 1 root root  67992 2025-10-10 09:52:40.000000000 +0100 libz.so
drwxr-xr-x 3 root root   4096 2025-10-10 10:52:30.000000000 +0100 modules
lrwxrwxrwx 1 root root     27 2025-10-10 10:52:30.000000000 +0100 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:30.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:30.000000000 +0100 drivers
drwxr-xr-x 8 root root 4096 2025-10-10 10:52:30.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 misc
-rw-r--r-- 1 root root 2613 2025-10-10 10:35:32.000000000 +0100 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:30.000000000 +0100 net

/lib/modules/5.6.3/drivers:
total 16
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 char
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 crypto
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 mmc
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 net

/lib/modules/5.6.3/drivers/char:
total 20
-rw-r--r-- 1 root root 4924 2025-10-10 10:31:50.000000000 +0100 mt7621wdt.ko
-rw-r--r-- 1 root root 9160 2025-10-10 10:28:14.000000000 +0100 ticker.ko

/lib/modules/5.6.3/drivers/crypto:
total 24
-rw-r--r-- 1 root root 24108 2025-10-10 10:32:25.000000000 +0100 crypto_eip93.ko

/lib/modules/5.6.3/drivers/mmc:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 host

/lib/modules/5.6.3/drivers/mmc/host:
total 40
-rw-r--r-- 1 root root 37676 2025-10-10 10:31:57.000000000 +0100 mtk_sd.ko

/lib/modules/5.6.3/drivers/net:
total 560
-rw-r--r-- 1 root root  40548 2025-10-10 10:30:37.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root  11352 2025-10-10 10:31:39.000000000 +0100 imq.ko
-rw-r--r-- 1 root root  38168 2025-10-10 10:30:37.000000000 +0100 mediatek_switch.ko
-rw-r--r-- 1 root root  10772 2025-10-10 10:33:25.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root 192556 2025-10-10 10:33:26.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root  87964 2025-10-10 10:29:29.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root  24840 2025-10-10 10:31:42.000000000 +0100 raether.ko
-rw-r--r-- 1 root root  60404 2025-10-10 10:30:40.000000000 +0100 switch.ko
drwxr-xr-x 2 root root   4096 2025-10-10 10:52:30.000000000 +0100 usb
-rw-r--r-- 1 root root  23332 2025-10-10 10:28:15.000000000 +0100 via-velocity.ko
-rw-r--r-- 1 root root  60680 2025-10-10 10:33:19.000000000 +0100 vxlan2.ko

/lib/modules/5.6.3/drivers/net/usb:
total 180
-rw-r--r-- 1 root root  69692 2025-10-10 10:33:06.000000000 +0100 fp_usbnet.ko
-rw-r--r-- 1 root root 109356 2025-10-10 10:32:55.000000000 +0100 mbim.ko

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-10-10 10:52:30.000000000 +0100 arch
drwxr-xr-x  2 root root 4096 2025-10-10 10:52:30.000000000 +0100 crypto
drwxr-xr-x  9 root root 4096 2025-10-10 10:52:30.000000000 +0100 drivers
drwxr-xr-x 11 root root 4096 2025-10-10 10:52:30.000000000 +0100 fs
drwxr-xr-x  5 root root 4096 2025-10-10 10:52:30.000000000 +0100 lib
drwxr-xr-x 12 root root 4096 2025-10-10 10:52:30.000000000 +0100 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:30.000000000 +0100 mips

/lib/modules/5.6.3/kernel/arch/mips:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 crypto
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 oprofile

/lib/modules/5.6.3/kernel/arch/mips/crypto:
total 16
-rw-r--r-- 1 root root 7860 2025-10-10 10:31:46.000000000 +0100 chacha-mips.ko
-rw-r--r-- 1 root root 5760 2025-10-10 10:31:46.000000000 +0100 poly1305-mips.ko

/lib/modules/5.6.3/kernel/arch/mips/oprofile:
total 40
-rw-r--r-- 1 root root 38436 2025-10-10 10:31:46.000000000 +0100 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 56
-rw-r--r-- 1 root root  3100 2025-10-10 10:31:46.000000000 +0100 arc4.ko
-rw-r--r-- 1 root root 12340 2025-10-10 10:31:46.000000000 +0100 ccm.ko
-rw-r--r-- 1 root root  5048 2025-10-10 10:31:47.000000000 +0100 cmac.ko
-rw-r--r-- 1 root root  3852 2025-10-10 10:31:47.000000000 +0100 des_generic.ko
-rw-r--r-- 1 root root  5024 2025-10-10 10:31:47.000000000 +0100 md4.ko
-rw-r--r-- 1 root root  4056 2025-10-10 10:31:47.000000000 +0100 sha1_generic.ko
-rw-r--r-- 1 root root 10096 2025-10-10 10:31:47.000000000 +0100 sha512_generic.ko

/lib/modules/5.6.3/kernel/drivers:
total 28
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 ata
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 hid
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:30.000000000 +0100 mmc
drwxr-xr-x 7 root root 4096 2025-10-10 10:52:30.000000000 +0100 net
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 nvme
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 scsi
drwxr-xr-x 8 root root 4096 2025-10-10 10:52:30.000000000 +0100 usb

/lib/modules/5.6.3/kernel/drivers/ata:
total 260
-rw-r--r-- 1 root root  33616 2025-10-10 10:31:47.000000000 +0100 ahci.ko
-rw-r--r-- 1 root root  32380 2025-10-10 10:31:47.000000000 +0100 libahci.ko
-rw-r--r-- 1 root root 194096 2025-10-10 10:31:47.000000000 +0100 libata.ko

/lib/modules/5.6.3/kernel/drivers/hid:
total 72
-rw-r--r-- 1 root root 72648 2025-10-10 10:31:47.000000000 +0100 hid.ko

/lib/modules/5.6.3/kernel/drivers/mmc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 core
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 host

/lib/modules/5.6.3/kernel/drivers/mmc/core:
total 140
-rw-r--r-- 1 root root  35200 2025-10-10 10:31:47.000000000 +0100 mmc_block.ko
-rw-r--r-- 1 root root 104196 2025-10-10 10:31:47.000000000 +0100 mmc_core.ko

/lib/modules/5.6.3/kernel/drivers/mmc/host:
total 20
-rw-r--r-- 1 root root 13880 2025-10-10 10:31:47.000000000 +0100 mmc_spi.ko
-rw-r--r-- 1 root root  2800 2025-10-10 10:31:47.000000000 +0100 of_mmc_spi.ko

/lib/modules/5.6.3/kernel/drivers/net:
total 120
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:30.000000000 +0100 bonding
drwxr-xr-x 3 root root  4096 2025-10-10 10:52:30.000000000 +0100 ethernet
-rw-r--r-- 1 root root 38288 2025-10-10 10:31:48.000000000 +0100 macsec.ko
-rw-r--r-- 1 root root 20168 2025-10-10 10:31:48.000000000 +0100 macvlan.ko
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:30.000000000 +0100 slip
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:30.000000000 +0100 usb
-rw-r--r-- 1 root root 17072 2025-10-10 10:31:49.000000000 +0100 veth.ko
-rw-r--r-- 1 root root 19540 2025-10-10 10:31:49.000000000 +0100 vrf.ko
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:30.000000000 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 132
-rw-r--r-- 1 root root 132288 2025-10-10 10:31:48.000000000 +0100 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 intel

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 40
-rw-r--r-- 1 root root 37232 2025-10-10 10:31:48.000000000 +0100 e100.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6276 2025-10-10 10:31:48.000000000 +0100 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 132
-rw-r--r-- 1 root root 19604 2025-10-10 10:31:48.000000000 +0100 ax88179_178a.ko
-rw-r--r-- 1 root root 40780 2025-10-10 10:31:49.000000000 +0100 hso.ko
-rw-r--r-- 1 root root 12832 2025-10-10 10:31:49.000000000 +0100 sierra_net.ko
-rw-r--r-- 1 root root 25512 2025-10-10 10:31:49.000000000 +0100 smsc95xx.ko
-rw-r--r-- 1 root root 27792 2025-10-10 10:31:49.000000000 +0100 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 80
-rw-r--r-- 1 root root 81660 2025-10-10 10:31:49.000000000 +0100 wireguard.ko

/lib/modules/5.6.3/kernel/drivers/nvme:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 host

/lib/modules/5.6.3/kernel/drivers/nvme/host:
total 100
-rw-r--r-- 1 root root 64028 2025-10-10 10:31:49.000000000 +0100 nvme-core.ko
-rw-r--r-- 1 root root 34784 2025-10-10 10:31:49.000000000 +0100 nvme.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 160
-rw-r--r-- 1 root root 118524 2025-10-10 10:31:49.000000000 +0100 scsi_mod.ko
-rw-r--r-- 1 root root  41076 2025-10-10 10:31:49.000000000 +0100 sd_mod.ko

/lib/modules/5.6.3/kernel/drivers/usb:
total 24
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 class
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 common
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 core
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 host
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 serial
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 storage

/lib/modules/5.6.3/kernel/drivers/usb/class:
total 28
-rw-r--r-- 1 root root 27940 2025-10-10 10:31:49.000000000 +0100 cdc-acm.ko

/lib/modules/5.6.3/kernel/drivers/usb/common:
total 8
-rw-r--r-- 1 root root 6280 2025-10-10 10:31:50.000000000 +0100 usb-common.ko

/lib/modules/5.6.3/kernel/drivers/usb/core:
total 180
-rw-r--r-- 1 root root 184116 2025-10-10 10:31:50.000000000 +0100 usbcore.ko

/lib/modules/5.6.3/kernel/drivers/usb/host:
total 132
-rw-r--r-- 1 root root 118832 2025-10-10 10:31:50.000000000 +0100 xhci-hcd.ko
-rw-r--r-- 1 root root   9536 2025-10-10 10:31:50.000000000 +0100 xhci-mtk.ko

/lib/modules/5.6.3/kernel/drivers/usb/serial:
total 316
-rw-r--r-- 1 root root   8664 2025-10-10 10:31:50.000000000 +0100 ch341.ko
-rw-r--r-- 1 root root  24292 2025-10-10 10:31:50.000000000 +0100 cp210x.ko
-rw-r--r-- 1 root root  77940 2025-10-10 10:31:50.000000000 +0100 ftdi_sio.ko
-rw-r--r-- 1 root root   5412 2025-10-10 10:31:50.000000000 +0100 ipw.ko
-rw-r--r-- 1 root root 101244 2025-10-10 10:31:50.000000000 +0100 option.ko
-rw-r--r-- 1 root root  15748 2025-10-10 10:31:51.000000000 +0100 pl2303.ko
-rw-r--r-- 1 root root  14232 2025-10-10 10:31:51.000000000 +0100 qcserial.ko
-rw-r--r-- 1 root root  14044 2025-10-10 10:31:51.000000000 +0100 sierra.ko
-rw-r--r-- 1 root root   8516 2025-10-10 10:31:51.000000000 +0100 usb_wwan.ko
-rw-r--r-- 1 root root  29724 2025-10-10 10:31:51.000000000 +0100 usbserial.ko

/lib/modules/5.6.3/kernel/drivers/usb/storage:
total 76
-rw-r--r-- 1 root root 74624 2025-10-10 10:31:51.000000000 +0100 usb-storage.ko

/lib/modules/5.6.3/kernel/fs:
total 44
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 cifs
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 exfat
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 ext4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 fat
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 fuse
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 jbd2
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 ksmbd
-rw-r--r-- 1 root root 7280 2025-10-10 10:31:52.000000000 +0100 mbcache.ko
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 nls
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 ntfs3

/lib/modules/5.6.3/kernel/fs/cifs:
total 492
-rw-r--r-- 1 root root 501560 2025-10-10 10:31:51.000000000 +0100 cifs.ko

/lib/modules/5.6.3/kernel/fs/exfat:
total 80
-rw-r--r-- 1 root root 78496 2025-10-10 10:31:51.000000000 +0100 exfat.ko

/lib/modules/5.6.3/kernel/fs/ext4:
total 456
-rw-r--r-- 1 root root 463556 2025-10-10 10:31:51.000000000 +0100 ext4.ko

/lib/modules/5.6.3/kernel/fs/fat:
total 88
-rw-r--r-- 1 root root 72124 2025-10-10 10:31:51.000000000 +0100 fat.ko
-rw-r--r-- 1 root root 12828 2025-10-10 10:31:51.000000000 +0100 vfat.ko

/lib/modules/5.6.3/kernel/fs/fuse:
total 108
-rw-r--r-- 1 root root 107940 2025-10-10 10:31:51.000000000 +0100 fuse.ko

/lib/modules/5.6.3/kernel/fs/jbd2:
total 76
-rw-r--r-- 1 root root 76080 2025-10-10 10:31:51.000000000 +0100 jbd2.ko

/lib/modules/5.6.3/kernel/fs/ksmbd:
total 248
-rw-r--r-- 1 root root 251576 2025-10-10 10:31:52.000000000 +0100 ksmbd.ko

/lib/modules/5.6.3/kernel/fs/nls:
total 28
-rw-r--r-- 1 root root 7760 2025-10-10 10:31:52.000000000 +0100 nls_base.ko
-rw-r--r-- 1 root root 6604 2025-10-10 10:31:52.000000000 +0100 nls_cp437.ko
-rw-r--r-- 1 root root 5020 2025-10-10 10:31:52.000000000 +0100 nls_iso8859-1.ko
-rw-r--r-- 1 root root 2740 2025-10-10 10:31:52.000000000 +0100 nls_utf8.ko

/lib/modules/5.6.3/kernel/fs/ntfs3:
total 212
-rw-r--r-- 1 root root 214996 2025-10-10 10:31:52.000000000 +0100 ntfs3.ko

/lib/modules/5.6.3/kernel/lib:
total 44
-rw-r--r-- 1 root root 4176 2025-10-10 10:31:52.000000000 +0100 asn1_decoder.ko
-rw-r--r-- 1 root root 3428 2025-10-10 10:31:52.000000000 +0100 crc-ccitt.ko
-rw-r--r-- 1 root root 2672 2025-10-10 10:31:52.000000000 +0100 crc16.ko
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 crypto
-rw-r--r-- 1 root root 4280 2025-10-10 10:31:52.000000000 +0100 oid_registry.ko
-rw-r--r-- 1 root root 3524 2025-10-10 10:31:52.000000000 +0100 ts_bm.ko
-rw-r--r-- 1 root root 3356 2025-10-10 10:31:52.000000000 +0100 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 64
-rw-r--r-- 1 root root  2336 2025-10-10 10:31:52.000000000 +0100 libarc4.ko
-rw-r--r-- 1 root root  7468 2025-10-10 10:31:52.000000000 +0100 libblake2s-generic.ko
-rw-r--r-- 1 root root  3700 2025-10-10 10:31:52.000000000 +0100 libblake2s.ko
-rw-r--r-- 1 root root  6912 2025-10-10 10:31:52.000000000 +0100 libchacha20poly1305.ko
-rw-r--r-- 1 root root 11612 2025-10-10 10:31:52.000000000 +0100 libcurve25519-generic.ko
-rw-r--r-- 1 root root  2024 2025-10-10 10:31:52.000000000 +0100 libcurve25519.ko
-rw-r--r-- 1 root root 20540 2025-10-10 10:31:52.000000000 +0100 libdes.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18400 2025-10-10 10:31:52.000000000 +0100 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14972 2025-10-10 10:31:52.000000000 +0100 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 40
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 802
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 8021q
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 ipv4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 ipv6
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 mpls
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 rfkill
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 sched
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 xfrm

/lib/modules/5.6.3/kernel/net/802:
total 12
-rw-r--r-- 1 root root 10304 2025-10-10 10:31:52.000000000 +0100 mrp.ko

/lib/modules/5.6.3/kernel/net/8021q:
total 28
-rw-r--r-- 1 root root 26100 2025-10-10 10:31:53.000000000 +0100 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 88
-rw-r--r-- 1 root root  2672 2025-10-10 10:31:53.000000000 +0100 ebt_802_3.ko
-rw-r--r-- 1 root root  3604 2025-10-10 10:31:53.000000000 +0100 ebt_arp.ko
-rw-r--r-- 1 root root  3168 2025-10-10 10:31:53.000000000 +0100 ebt_arpreply.ko
-rw-r--r-- 1 root root  3228 2025-10-10 10:31:53.000000000 +0100 ebt_dnat.ko
-rw-r--r-- 1 root root  3612 2025-10-10 10:31:53.000000000 +0100 ebt_ip.ko
-rw-r--r-- 1 root root  3844 2025-10-10 10:31:53.000000000 +0100 ebt_ip6.ko
-rw-r--r-- 1 root root  4808 2025-10-10 10:31:53.000000000 +0100 ebt_limit.ko
-rw-r--r-- 1 root root  2612 2025-10-10 10:31:53.000000000 +0100 ebt_mark.ko
-rw-r--r-- 1 root root  2544 2025-10-10 10:31:53.000000000 +0100 ebt_mark_m.ko
-rw-r--r-- 1 root root  2512 2025-10-10 10:31:53.000000000 +0100 ebt_pkttype.ko
-rw-r--r-- 1 root root  3068 2025-10-10 10:31:53.000000000 +0100 ebt_redirect.ko
-rw-r--r-- 1 root root  3056 2025-10-10 10:31:53.000000000 +0100 ebt_snat.ko
-rw-r--r-- 1 root root  3932 2025-10-10 10:31:53.000000000 +0100 ebt_stp.ko
-rw-r--r-- 1 root root  3020 2025-10-10 10:31:53.000000000 +0100 ebt_vlan.ko
-rw-r--r-- 1 root root  3140 2025-10-10 10:31:53.000000000 +0100 ebtable_filter.ko
-rw-r--r-- 1 root root  3140 2025-10-10 10:31:53.000000000 +0100 ebtable_nat.ko
-rw-r--r-- 1 root root 17244 2025-10-10 10:31:53.000000000 +0100 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 17220 2025-10-10 10:31:54.000000000 +0100 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:30.000000000 +0100 netfilter
-rw-r--r-- 1 root root 14828 2025-10-10 10:31:54.000000000 +0100 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 76
-rw-r--r-- 1 root root 16404 2025-10-10 10:31:54.000000000 +0100 ip_tables.ko
-rw-r--r-- 1 root root  3736 2025-10-10 10:31:54.000000000 +0100 ipt_REJECT.ko
-rw-r--r-- 1 root root  3788 2025-10-10 10:31:54.000000000 +0100 iptable_filter.ko
-rw-r--r-- 1 root root  3884 2025-10-10 10:31:54.000000000 +0100 iptable_mangle.ko
-rw-r--r-- 1 root root  3552 2025-10-10 10:31:54.000000000 +0100 iptable_nat.ko
-rw-r--r-- 1 root root  4120 2025-10-10 10:31:54.000000000 +0100 iptable_raw.ko
-rw-r--r-- 1 root root  3468 2025-10-10 10:31:54.000000000 +0100 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root  9412 2025-10-10 10:31:54.000000000 +0100 nf_nat_h323.ko
-rw-r--r-- 1 root root  5020 2025-10-10 10:31:54.000000000 +0100 nf_nat_pptp.ko
-rw-r--r-- 1 root root  4396 2025-10-10 10:31:54.000000000 +0100 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 32
-rw-r--r-- 1 root root  9008 2025-10-10 10:31:54.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root 11872 2025-10-10 10:31:54.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root  3760 2025-10-10 10:31:54.000000000 +0100 ip6_udp_tunnel.ko
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:30.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 68
-rw-r--r-- 1 root root 16700 2025-10-10 10:31:54.000000000 +0100 ip6_tables.ko
-rw-r--r-- 1 root root  3984 2025-10-10 10:31:54.000000000 +0100 ip6t_NPT.ko
-rw-r--r-- 1 root root  3776 2025-10-10 10:31:54.000000000 +0100 ip6t_REJECT.ko
-rw-r--r-- 1 root root  2916 2025-10-10 10:31:55.000000000 +0100 ip6t_eui64.ko
-rw-r--r-- 1 root root  3180 2025-10-10 10:31:55.000000000 +0100 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  3792 2025-10-10 10:31:55.000000000 +0100 ip6table_filter.ko
-rw-r--r-- 1 root root  4120 2025-10-10 10:31:55.000000000 +0100 ip6table_mangle.ko
-rw-r--r-- 1 root root  3556 2025-10-10 10:31:55.000000000 +0100 ip6table_nat.ko
-rw-r--r-- 1 root root  4124 2025-10-10 10:31:55.000000000 +0100 ip6table_raw.ko
-rw-r--r-- 1 root root  5200 2025-10-10 10:31:55.000000000 +0100 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 56
-rw-r--r-- 1 root root  5256 2025-10-10 10:31:55.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root 45152 2025-10-10 10:31:55.000000000 +0100 mpls_router.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 412
-rw-r--r-- 1 root root 10028 2025-10-10 10:31:55.000000000 +0100 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root 40396 2025-10-10 10:31:55.000000000 +0100 nf_conntrack_h323.ko
-rw-r--r-- 1 root root  8164 2025-10-10 10:31:55.000000000 +0100 nf_conntrack_irc.ko
-rw-r--r-- 1 root root 30052 2025-10-10 10:31:55.000000000 +0100 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root  7648 2025-10-10 10:31:55.000000000 +0100 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root  8160 2025-10-10 10:31:55.000000000 +0100 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root 26864 2025-10-10 10:31:56.000000000 +0100 nf_conntrack_sip.ko
-rw-r--r-- 1 root root  6860 2025-10-10 10:31:56.000000000 +0100 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root 29304 2025-10-10 10:31:56.000000000 +0100 nf_nat.ko
-rw-r--r-- 1 root root  4492 2025-10-10 10:31:56.000000000 +0100 nf_nat_ftp.ko
-rw-r--r-- 1 root root  4168 2025-10-10 10:31:56.000000000 +0100 nf_nat_irc.ko
-rw-r--r-- 1 root root  7576 2025-10-10 10:31:56.000000000 +0100 nf_nat_rtsp.ko
-rw-r--r-- 1 root root 11960 2025-10-10 10:31:56.000000000 +0100 nf_nat_sip.ko
-rw-r--r-- 1 root root  3060 2025-10-10 10:31:56.000000000 +0100 nf_nat_tftp.ko
-rw-r--r-- 1 root root  8716 2025-10-10 10:31:56.000000000 +0100 nfnetlink.ko
-rw-r--r-- 1 root root 25300 2025-10-10 10:31:56.000000000 +0100 x_tables.ko
-rw-r--r-- 1 root root  6700 2025-10-10 10:31:56.000000000 +0100 xt_CT.ko
-rw-r--r-- 1 root root  3980 2025-10-10 10:31:56.000000000 +0100 xt_DSCP.ko
-rw-r--r-- 1 root root  3468 2025-10-10 10:31:56.000000000 +0100 xt_HL.ko
-rw-r--r-- 1 root root  3412 2025-10-10 10:31:56.000000000 +0100 xt_MASQUERADE.ko
-rw-r--r-- 1 root root  3800 2025-10-10 10:31:56.000000000 +0100 xt_NETMAP.ko
-rw-r--r-- 1 root root  3132 2025-10-10 10:31:56.000000000 +0100 xt_REDIRECT.ko
-rw-r--r-- 1 root root  6208 2025-10-10 10:31:56.000000000 +0100 xt_TCPMSS.ko
-rw-r--r-- 1 root root  5172 2025-10-10 10:31:56.000000000 +0100 xt_addrtype.ko
-rw-r--r-- 1 root root  4276 2025-10-10 10:31:56.000000000 +0100 xt_connbytes.ko
-rw-r--r-- 1 root root  4512 2025-10-10 10:31:56.000000000 +0100 xt_connmark.ko
-rw-r--r-- 1 root root  5012 2025-10-10 10:31:56.000000000 +0100 xt_conntrack.ko
-rw-r--r-- 1 root root  3052 2025-10-10 10:31:56.000000000 +0100 xt_dscp.ko
-rw-r--r-- 1 root root 16820 2025-10-10 10:31:57.000000000 +0100 xt_hashlimit.ko
-rw-r--r-- 1 root root  3436 2025-10-10 10:31:57.000000000 +0100 xt_helper.ko
-rw-r--r-- 1 root root  2844 2025-10-10 10:31:57.000000000 +0100 xt_hl.ko
-rw-r--r-- 1 root root  2780 2025-10-10 10:31:57.000000000 +0100 xt_length.ko
-rw-r--r-- 1 root root  2664 2025-10-10 10:31:57.000000000 +0100 xt_mac.ko
-rw-r--r-- 1 root root  2944 2025-10-10 10:31:57.000000000 +0100 xt_mark.ko
-rw-r--r-- 1 root root  3448 2025-10-10 10:31:57.000000000 +0100 xt_multiport.ko
-rw-r--r-- 1 root root  5096 2025-10-10 10:31:57.000000000 +0100 xt_nat.ko
-rw-r--r-- 1 root root  3980 2025-10-10 10:31:57.000000000 +0100 xt_physdev.ko
-rw-r--r-- 1 root root  4488 2025-10-10 10:31:57.000000000 +0100 xt_policy.ko
-rw-r--r-- 1 root root  2536 2025-10-10 10:31:57.000000000 +0100 xt_realm.ko
-rw-r--r-- 1 root root  3080 2025-10-10 10:31:57.000000000 +0100 xt_statistic.ko
-rw-r--r-- 1 root root  2952 2025-10-10 10:31:57.000000000 +0100 xt_string.ko
-rw-r--r-- 1 root root  3144 2025-10-10 10:31:57.000000000 +0100 xt_tcpmss.ko
-rw-r--r-- 1 root root  4032 2025-10-10 10:31:57.000000000 +0100 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/rfkill:
total 16
-rw-r--r-- 1 root root 15268 2025-10-10 10:31:57.000000000 +0100 rfkill.ko

/lib/modules/5.6.3/kernel/net/sched:
total 88
-rw-r--r-- 1 root root 28564 2025-10-10 10:31:57.000000000 +0100 sch_cake.ko
-rw-r--r-- 1 root root  7508 2025-10-10 10:31:57.000000000 +0100 sch_codel.ko
-rw-r--r-- 1 root root 10116 2025-10-10 10:31:57.000000000 +0100 sch_fq_codel.ko
-rw-r--r-- 1 root root 25096 2025-10-10 10:31:57.000000000 +0100 sch_htb.ko
-rw-r--r-- 1 root root  9324 2025-10-10 10:31:57.000000000 +0100 sch_red.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 7076 2025-10-10 10:31:58.000000000 +0100 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 228
-rw-r--r-- 1 root root 10532 2025-10-10 10:28:16.000000000 +0100 btest.ko
-rw-r--r-- 1 root root  2016 2025-10-10 10:33:02.000000000 +0100 c2glue.ko
-rw-r--r-- 1 root root  6580 2025-10-10 10:32:55.000000000 +0100 dot1x.ko
-rw-r--r-- 1 root root 48116 2025-10-10 10:28:48.000000000 +0100 flash.ko
-rw-r--r-- 1 root root  5536 2025-10-10 10:31:45.000000000 +0100 jiffies.ko
-rw-r--r-- 1 root root  3064 2025-10-10 10:30:58.000000000 +0100 ledgroup.ko
-rw-r--r-- 1 root root 11360 2025-10-10 10:28:12.000000000 +0100 logring.ko
-rw-r--r-- 1 root root 22980 2025-10-10 10:28:54.000000000 +0100 mesh.ko
-rw-r--r-- 1 root root  8628 2025-10-10 10:28:09.000000000 +0100 panics.ko
-rw-r--r-- 1 root root 15108 2025-10-10 10:28:14.000000000 +0100 poe_simple.ko
-rw-r--r-- 1 root root  6952 2025-10-10 10:31:45.000000000 +0100 rb.ko
-rw-r--r-- 1 root root  5940 2025-10-10 10:31:55.000000000 +0100 romon.ko
-rw-r--r-- 1 root root  5404 2025-10-10 10:28:50.000000000 +0100 snif.ko
-rw-r--r-- 1 root root 27220 2025-10-10 10:31:57.000000000 +0100 traffic_gen.ko
-rw-r--r-- 1 root root 19724 2025-10-10 10:31:37.000000000 +0100 ts.ko
-rw-r--r-- 1 root root  6552 2025-10-10 10:28:46.000000000 +0100 ulog.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 sched

/lib/modules/5.6.3/net/bridge:
total 200
-rw-r--r-- 1 root root 173328 2025-10-10 10:32:16.000000000 +0100 bridge2.ko
-rw-r--r-- 1 root root  17596 2025-10-10 10:32:16.000000000 +0100 bridge2_netfilter.ko
-rw-r--r-- 1 root root   2496 2025-10-10 10:28:48.000000000 +0100 ebt_snif.ko
-rw-r--r-- 1 root root   2728 2025-10-10 10:28:43.000000000 +0100 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 28
-rw-r--r-- 1 root root 3356 2025-10-10 10:28:15.000000000 +0100 ipt_SAME.ko
-rw-r--r-- 1 root root 6252 2025-10-10 10:28:17.000000000 +0100 ipt_TARPIT.ko
-rw-r--r-- 1 root root 4364 2025-10-10 10:28:15.000000000 +0100 ipt_psd.ko
-rw-r--r-- 1 root root 2596 2025-10-10 10:28:47.000000000 +0100 ipt_snif.ko
-rw-r--r-- 1 root root 3072 2025-10-10 10:28:43.000000000 +0100 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 60
-rw-r--r-- 1 root root  2060 2025-10-10 10:29:47.000000000 +0100 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  2060 2025-10-10 10:29:47.000000000 +0100 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 10796 2025-10-10 10:29:52.000000000 +0100 xt_ein.ko
-rw-r--r-- 1 root root 12392 2025-10-10 10:28:22.000000000 +0100 xt_layer7.ko
-rw-r--r-- 1 root root 16772 2025-10-10 10:29:51.000000000 +0100 xt_misc.ko
-rw-r--r-- 1 root root  3684 2025-10-10 10:28:36.000000000 +0100 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 76
-rw-r--r-- 1 root root  5212 2025-10-10 10:28:35.000000000 +0100 cls_fw.ko
-rw-r--r-- 1 root root 11756 2025-10-10 10:28:37.000000000 +0100 cls_linear.ko
-rw-r--r-- 1 root root 12836 2025-10-10 10:28:56.000000000 +0100 proto_agr.ko
-rw-r--r-- 1 root root 18652 2025-10-10 10:28:58.000000000 +0100 sch_agr.ko
-rw-r--r-- 1 root root 10712 2025-10-10 10:28:20.000000000 +0100 sch_pcq.ko
-rw-r--r-- 1 root root  8176 2025-10-10 10:31:52.000000000 +0100 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2025-10-10 10:52:30.000000000 +0100 bin
drwxr-xr-x 12 root root 4096 2025-10-10 10:52:30.000000000 +0100 etc
drwxr-xr-x  5 root root 4096 2025-10-10 10:52:30.000000000 +0100 lib
lrwxrwxrwx  1 root root    8 2025-10-10 10:52:30.000000000 +0100 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2025-10-10 10:52:30.000000000 +0100 store -> /rw/store

/nova/bin:
total 11328
-rwxr-xr-x 1 root root   24264 2025-10-10 09:53:25.000000000 +0100 agent
-rwxr-xr-x 1 root root   13064 2025-10-10 09:53:24.000000000 +0100 arpd
-rwxr-xr-x 1 root root   18208 2025-10-10 09:55:44.000000000 +0100 backup
-rwxr-xr-x 1 root root  277260 2025-10-10 09:58:40.000000000 +0100 bridge2
-rwxr-xr-x 1 root root   76576 2025-10-10 09:56:09.000000000 +0100 btest
-rwxr-xr-x 1 root root   59800 2025-10-10 09:54:15.000000000 +0100 bth
-rwxr-xr-x 1 root root 1024500 2025-10-10 09:57:44.000000000 +0100 cerm
lrwxrwxrwx 1 root root       4 2025-10-10 09:57:44.000000000 +0100 cerm-worker -> cerm
-rwxr-xr-x 1 root root  174600 2025-10-10 09:57:24.000000000 +0100 cloud
-rwxr-xr-x 1 root root   96272 2025-10-10 09:55:33.000000000 +0100 crossfig
-rwxr-xr-x 1 root root   66332 2025-10-10 09:56:31.000000000 +0100 detnet
-rwxr-xr-x 1 root root   84324 2025-10-10 09:54:11.000000000 +0100 discover
-rwxr-xr-x 1 root root  347084 2025-10-10 09:57:36.000000000 +0100 diskd
-rwxr-xr-x 1 root root  110428 2025-10-10 09:58:40.000000000 +0100 dot1x
-rwxr-xr-x 1 root root   40480 2025-10-10 09:55:52.000000000 +0100 email
-rwxr-xr-x 1 root root  150108 2025-10-10 09:58:02.000000000 +0100 fileman
-rwxr-xr-x 1 root root   34916 2025-10-10 09:53:27.000000000 +0100 ftpd
-rwxr-xr-x 1 root root  157536 2025-10-10 09:54:29.000000000 +0100 graphing
-rwxr-xr-x 1 root root    4440 2025-10-10 09:57:29.000000000 +0100 havecardbus
-rwxr-xr-x 1 root root   64928 2025-10-10 09:55:29.000000000 +0100 igmpproxy
-rwxr-xr-x 1 root root   83984 2025-10-10 09:56:55.000000000 +0100 installer
-rwxr-xr-x 1 root root   30544 2025-10-10 09:57:29.000000000 +0100 ippool
-rwxr-xr-x 1 root root   55392 2025-10-10 09:56:01.000000000 +0100 keyman
-rwxr-xr-x 1 root root   48192 2025-10-10 09:54:13.000000000 +0100 kidcontrol
-rwxr-xr-x 1 root root  248212 2025-10-10 09:54:32.000000000 +0100 lcdstat
-rwxr-xr-x 1 root root   76140 2025-10-10 09:56:36.000000000 +0100 led
-rwxr-xr-x 1 root root  121712 2025-10-10 09:57:21.000000000 +0100 letsencrypt
-rwxr-xr-x 1 root root   85180 2025-10-10 09:56:46.000000000 +0100 loader
-rwxr-xr-x 1 root root   88416 2025-10-10 09:53:36.000000000 +0100 log
-rwxr-xr-x 1 root root  170864 2025-10-10 09:59:45.000000000 +0100 login
-rwxr-xr-x 1 root root   56540 2025-10-10 09:53:28.000000000 +0100 logmaker
-rwxr-xr-x 1 root root   22908 2025-10-10 09:53:25.000000000 +0100 macping
-rwxr-xr-x 1 root root   37864 2025-10-10 09:55:53.000000000 +0100 mactel
-rwxr-xr-x 1 root root   23448 2025-10-10 09:53:26.000000000 +0100 mepty
-rwxr-xr-x 1 root root   86028 2025-10-10 09:54:19.000000000 +0100 mesh
-rwxr-xr-x 1 root root   68968 2025-10-10 09:59:32.000000000 +0100 mode
lrwxrwxrwx 1 root root       7 2025-10-10 09:57:29.000000000 +0100 modprobed -> moduler
-rwxr-xr-x 1 root root  117468 2025-10-10 09:57:29.000000000 +0100 moduler
-rwxr-xr-x 1 root root   80680 2025-10-10 09:58:21.000000000 +0100 mproxy
-rwxr-xr-x 1 root root   61460 2025-10-10 09:55:58.000000000 +0100 mtget
-rwxr-xr-x 1 root root   49360 2025-10-10 09:54:16.000000000 +0100 natpmp
-rwxr-xr-x 1 root root 1690356 2025-10-10 10:01:31.000000000 +0100 net
-rwxr-xr-x 1 root root   71904 2025-10-10 09:56:35.000000000 +0100 ntp
-rwxr-xr-x 1 root root    6152 2025-10-10 09:53:21.000000000 +0100 panicsl
-rwxr-xr-x 1 root root  799928 2025-10-10 09:59:52.000000000 +0100 parser
-rwxr-xr-x 1 root root   40804 2025-10-10 09:53:28.000000000 +0100 ping
-rwxr-xr-x 1 root root   49612 2025-10-10 09:57:09.000000000 +0100 portman
-rwxr-xr-x 1 root root   34776 2025-10-10 10:33:44.000000000 +0100 profiler
-rwxr-xr-x 1 root root   93080 2025-10-10 09:57:20.000000000 +0100 ptp
-rwxr-xr-x 1 root root  153996 2025-10-10 09:53:36.000000000 +0100 quickset
-rwxr-xr-x 1 root root   57316 2025-10-10 09:57:39.000000000 +0100 radius
-rwxr-xr-x 1 root root  164700 2025-10-10 09:57:41.000000000 +0100 resolver
-rwxr-xr-x 1 root root   10224 2025-10-10 09:57:34.000000000 +0100 resolver_ctl
-rwxr-xr-x 1 root root   96716 2025-10-10 09:56:50.000000000 +0100 romon
-rwxr-xr-x 1 root root 1872588 2025-10-10 10:02:44.000000000 +0100 route
-rwxr-xr-x 1 root root   16664 2025-10-10 09:56:17.000000000 +0100 rtrace
-rwxr-xr-x 1 root root   43268 2025-10-10 09:57:11.000000000 +0100 sermgr
-rwxr-xr-x 1 root root   36144 2025-10-10 09:53:48.000000000 +0100 sertcp
-rwxr-xr-x 1 root root   72844 2025-10-10 09:53:59.000000000 +0100 sniffer
-rwxr-xr-x 1 root root  211768 2025-10-10 09:58:40.000000000 +0100 snmp
-rwxr-xr-x 1 root root   67748 2025-10-10 09:54:14.000000000 +0100 socks
-rwxr-xr-x 1 root root   37240 2025-10-10 09:54:10.000000000 +0100 socksify
-rwxr-xr-x 1 root root  129344 2025-10-10 09:58:08.000000000 +0100 ssld
-rwxr-xr-x 1 root root   30492 2025-10-10 09:55:55.000000000 +0100 sstore
-rwxr-xr-x 1 root root  306608 2025-10-10 09:59:38.000000000 +0100 sys2
-rwxr-xr-x 1 root root   20936 2025-10-10 09:53:28.000000000 +0100 telnet
-rwxr-xr-x 1 root root   30672 2025-10-10 09:53:28.000000000 +0100 telser
-rwxr-xr-x 1 root root   37732 2025-10-10 09:53:55.000000000 +0100 tftpd
-rwxr-xr-x 1 root root   29284 2025-10-10 09:53:25.000000000 +0100 traceroute
-rwxr-xr-x 1 root root  110160 2025-10-10 09:54:10.000000000 +0100 trafficgen
-rwxr-xr-x 1 root root   23384 2025-10-10 09:53:44.000000000 +0100 trafflow
-rwxr-xr-x 1 root root   24384 2025-10-10 09:53:24.000000000 +0100 undo
-rwxr-xr-x 1 root root  150476 2025-10-10 09:54:19.000000000 +0100 upnp
-rwxr-xr-x 1 root root   84464 2025-10-10 09:57:15.000000000 +0100 user
-rwxr-xr-x 1 root root  100620 2025-10-10 09:56:25.000000000 +0100 vrrp
-rwxr-xr-x 1 root root   30720 2025-10-10 09:53:59.000000000 +0100 watchdog
-rwxr-xr-x 1 root root  154528 2025-10-10 09:57:01.000000000 +0100 wproxy
-rwxr-xr-x 1 root root  130772 2025-10-10 09:58:19.000000000 +0100 www

/nova/etc:
total 56
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:30.000000000 +0100 ca
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 leds
-rwxr-xr-x 1 root root 1279 2025-10-10 09:48:29.000000000 +0100 lognames
-rwxr-xr-x 1 root root   10 2025-10-10 09:48:29.000000000 +0100 logo
-rwxr-xr-x 1 root root    1 2025-10-10 09:48:29.000000000 +0100 manual-url
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 pciinfo
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 services
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 system_names
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 upnp
-rwxr-xr-x 1 root root   26 2025-10-10 09:48:29.000000000 +0100 url
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 user
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 www

/nova/etc/ca:
total 104
-rwxr-xr-x 1 root root  837 2025-10-10 09:48:29.000000000 +0100 AmazonRootCA1.der
-rwxr-xr-x 1 root root  955 2025-10-10 09:48:29.000000000 +0100 DigiCert_Assured_ID_Root_CA.der
-rwxr-xr-x 1 root root  922 2025-10-10 09:48:29.000000000 +0100 DigiCert_Assured_ID_Root_G2.der
-rwxr-xr-x 1 root root  586 2025-10-10 09:48:29.000000000 +0100 DigiCert_Assured_ID_Root_G3.der
-rwxr-xr-x 1 root root  947 2025-10-10 09:48:29.000000000 +0100 DigiCert_Global_Root_CA.der
-rwxr-xr-x 1 root root  914 2025-10-10 09:48:29.000000000 +0100 DigiCert_Global_Root_G2.der
-rwxr-xr-x 1 root root  579 2025-10-10 09:48:29.000000000 +0100 DigiCert_Global_Root_G3.der
-rwxr-xr-x 1 root root  969 2025-10-10 09:48:29.000000000 +0100 DigiCert_High_Assurance_EV_Root_CA.der
-rwxr-xr-x 1 root root  541 2025-10-10 09:48:29.000000000 +0100 DigiCert_TLS_ECC_P384_Root_G5.der
-rwxr-xr-x 1 root root 1386 2025-10-10 09:48:29.000000000 +0100 DigiCert_TLS_RSA4096_Root_G5.der
-rwxr-xr-x 1 root root 1428 2025-10-10 09:48:29.000000000 +0100 DigiCert_Trusted_Root_G4.der
-rwxr-xr-x 1 root root  546 2025-10-10 09:48:29.000000000 +0100 GlobalSign_ECC_Root_CA_-_R5.der
-rwxr-xr-x 1 root root  889 2025-10-10 09:48:29.000000000 +0100 GlobalSign_Root_CA.der
-rwxr-xr-x 1 root root  867 2025-10-10 09:48:29.000000000 +0100 GlobalSign_Root_CA_-_R3.der
-rwxr-xr-x 1 root root 1415 2025-10-10 09:48:29.000000000 +0100 GlobalSign_Root_CA_-_R6.der
-rwxr-xr-x 1 root root  527 2025-10-10 09:48:29.000000000 +0100 GlobalSign_Root_E46.der
-rwxr-xr-x 1 root root 1374 2025-10-10 09:48:29.000000000 +0100 GlobalSign_Root_R46.der
-rwxr-xr-x 1 root root 1028 2025-10-10 09:48:29.000000000 +0100 Go_Daddy_Class_2_CA.der
-rwxr-xr-x 1 root root  969 2025-10-10 09:48:29.000000000 +0100 Go_Daddy_Root_Certificate_Authority_-_G2.der
-rwxr-xr-x 1 root root 1391 2025-10-10 09:48:29.000000000 +0100 ISRG_Root_X1.der
-rwxr-xr-x 1 root root  543 2025-10-10 09:48:29.000000000 +0100 ISRG_Root_X2.der
-rwxr-xr-x 1 root root  574 2025-10-10 09:48:29.000000000 +0100 Sectigo_Public_Server_Authentication_Root_E46.der
-rwxr-xr-x 1 root root 1422 2025-10-10 09:48:29.000000000 +0100 Sectigo_Public_Server_Authentication_Root_R46.der
-rwxr-xr-x 1 root root  659 2025-10-10 09:48:29.000000000 +0100 USERTrustECCCertificationAuthority.der
-rwxr-xr-x 1 root root 1506 2025-10-10 09:48:29.000000000 +0100 USERTrustRSACertificationAuthority.der
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 gsma

/nova/etc/ca/gsma:
total 8
-rwxr-xr-x 1 root root 589 2025-10-10 09:48:29.000000000 +0100 gsma_digicert.der
-rwxr-xr-x 1 root root 507 2025-10-10 09:48:29.000000000 +0100 gsma_sealsq.der

/nova/etc/leds:
total 124
-rwxr-xr-x 1 root root 123807 2025-10-10 09:52:35.000000000 +0100 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2025-10-10 09:52:35.000000000 +0100 system.x3

/nova/etc/pciinfo:
total 160
-rwxr-xr-x 1 root root 162169 2025-10-10 09:52:35.000000000 +0100 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 101 2025-10-10 09:52:35.000000000 +0100 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 992 2025-10-10 09:52:35.000000000 +0100 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2025-10-10 09:52:35.000000000 +0100 system.x3

/nova/etc/upnp:
total 64
-rwxr-xr-x 1 root root  3378 2025-10-10 09:48:31.000000000 +0100 connectionmanager.xml
-rwxr-xr-x 1 root root  5684 2025-10-10 09:48:31.000000000 +0100 contentdirectory.xml
-rwxr-xr-x 1 root root  8764 2025-10-10 09:48:31.000000000 +0100 logo120.png
-rwxr-xr-x 1 root root   930 2025-10-10 09:48:31.000000000 +0100 logo16.gif
-rwxr-xr-x 1 root root  1173 2025-10-10 09:48:31.000000000 +0100 logo32.gif
-rwxr-xr-x 1 root root  1504 2025-10-10 09:48:31.000000000 +0100 logo48.gif
-rwxr-xr-x 1 root root   735 2025-10-10 09:48:31.000000000 +0100 osinfo.xml
-rwxr-xr-x 1 root root  5928 2025-10-10 09:48:31.000000000 +0100 wancommonifcfg.xml
-rwxr-xr-x 1 root root 13444 2025-10-10 09:48:31.000000000 +0100 wanipconn.xml

/nova/etc/user:
total 4
-rwxr-xr-x 1 root root 2230 2025-10-10 09:52:35.000000000 +0100 system.x3

/nova/etc/www:
total 4
-rwxr-xr-x 1 root root 2458 2025-10-10 09:52:35.000000000 +0100 system.x3

/nova/lib:
total 16
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 defconf
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 profiler
-rwxr-xr-x 1 root root 4085 2025-10-10 09:48:30.000000000 +0100 xmlnames2

/nova/lib/console:
total 2368
-rwxr-xr-x 1 root root 2415510 2025-10-10 10:00:35.000000000 +0100 1073741824.mem
-rwxr-xr-x 1 root root     510 2025-10-10 09:48:29.000000000 +0100 logo.txt
-rwxr-xr-x 1 root root      18 2025-10-10 09:48:29.000000000 +0100 sublogo.txt

/nova/lib/defconf:
total 100
-rwxr-xr-x 1 root root   567 2025-10-10 09:48:29.000000000 +0100 defconf
-rwxr-xr-x 1 root root  4995 2025-10-10 09:48:29.000000000 +0100 defconf-caps
-rwxr-xr-x 1 root root  3700 2025-10-10 09:48:29.000000000 +0100 defconf-wps-sync
-rwxr-xr-x 1 root root 85713 2025-10-10 09:48:29.000000000 +0100 get-custom-defconf

/nova/lib/profiler:
total 16
-rwxr-xr-x 1 root root 15668 2025-10-10 10:33:43.000000000 +0100 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 480
-rwxr-xr-x 1 root root 395976 2025-10-10 10:34:33.000000000 +0100 mke2fs
-rwxr-xr-x 1 root root  24892 2025-10-10 09:52:32.000000000 +0100 nandfix
-rwxr-xr-x 1 root root  63624 2025-10-10 09:55:55.000000000 +0100 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2025-10-10 10:52:30.000000000 +0100 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 deinstall
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 lock
lrwxrwxrwx 1 root root    8 2025-10-10 10:52:30.000000000 +0100 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2025-10-10 10:52:30.000000000 +0100 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:30.000000000 +0100 post
lrwxrwxrwx 1 root root    7 2025-10-10 10:52:30.000000000 +0100 run -> /rw/run
lrwxrwxrwx 1 root root    4 2025-10-10 10:52:30.000000000 +0100 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

