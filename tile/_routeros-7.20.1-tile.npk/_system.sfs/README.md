### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 12133616 bytes, 731 inodes, blocksize: 262144 bytes, created: Fri Oct 10 09:52:24 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 bin
drwxr-xr-x 9 root root 4096 2025-10-10 10:52:10.000000000 +0100 bndl
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 boot
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 dev
lrwxrwxrwx 1 root root   11 2025-10-10 10:52:10.000000000 +0100 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 etc
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 flash
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 lib
lrwxrwxrwx 1 root root    4 2025-10-10 10:52:10.000000000 +0100 lib32 -> /lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:10.000000000 +0100 nova
lrwxrwxrwx 1 root root    9 2025-10-10 10:52:10.000000000 +0100 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 proc
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 ram
lrwxrwxrwx 1 root root    9 2025-10-10 10:52:10.000000000 +0100 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 sbin
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 sys
lrwxrwxrwx 1 root root    7 2025-10-10 10:52:10.000000000 +0100 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:10.000000000 +0100 var

/bin:
total 532
lrwxrwxrwx 1 root root     21 2025-10-10 10:52:10.000000000 +0100 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root  66896 2025-10-10 09:57:36.000000000 +0100 catlog
lrwxrwxrwx 1 root root     15 2025-10-10 10:52:10.000000000 +0100 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root     15 2025-10-10 10:52:10.000000000 +0100 login -> /nova/bin/login
-rwxr-xr-x 1 root root  72684 2025-10-10 10:34:38.000000000 +0100 mkexfatfs
-rwxr-xr-x 1 root root  66640 2025-10-10 09:57:36.000000000 +0100 pakp
lrwxrwxrwx 1 root root     21 2025-10-10 10:52:10.000000000 +0100 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root     15 2025-10-10 10:52:10.000000000 +0100 shell -> /nova/bin/login
-rwxr-xr-x 1 root root 330868 2025-10-10 10:35:22.000000000 +0100 sshfs

/bndl:
total 28
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:10.000000000 +0100 advanced-tools
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:10.000000000 +0100 dhcp
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:10.000000000 +0100 hotspot
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:10.000000000 +0100 ipv6
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:10.000000000 +0100 ppp
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:10.000000000 +0100 security
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:10.000000000 +0100 wifi

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:10.000000000 +0100 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 webfig

/bndl/advanced-tools/home/web/webfig:
total 8
-rw-r--r-- 1 root root 2370 2025-10-10 10:36:55.000000000 +0100 advtool-c647bc50a096.jg.gz
-rwxr-xr-x 1 root root  107 2025-10-10 10:36:55.000000000 +0100 advtool.info
lrwxrwxrwx 1 root root   26 2025-10-10 10:36:55.000000000 +0100 advtool.jg.gz -> advtool-c647bc50a096.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 lib

/bndl/advanced-tools/nova/bin:
total 540
-rwxr-xr-x 1 root root  67172 2025-10-10 10:36:03.000000000 +0100 ddns
-rwxr-xr-x 1 root root  66800 2025-10-10 10:35:42.000000000 +0100 fping
-rwxr-xr-x 1 root root  66964 2025-10-10 10:36:23.000000000 +0100 macscan
-rwxr-xr-x 1 root root 132960 2025-10-10 10:38:31.000000000 +0100 netwatch
-rwxr-xr-x 1 root root  66852 2025-10-10 10:35:48.000000000 +0100 pspeed
-rwxr-xr-x 1 root root  67212 2025-10-10 10:36:43.000000000 +0100 scanner
-rwxr-xr-x 1 root root  66812 2025-10-10 10:37:04.000000000 +0100 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 console

/bndl/advanced-tools/nova/lib/console:
total 28
-rwxr-xr-x 1 root root 27225 2025-10-10 10:36:15.000000000 +0100 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 home
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:10.000000000 +0100 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 webfig

/bndl/dhcp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4740 2025-10-10 10:36:59.000000000 +0100 dhcp-aed65be3c144.jg.gz
-rwxr-xr-x 1 root root  100 2025-10-10 10:36:59.000000000 +0100 dhcp.info
lrwxrwxrwx 1 root root   23 2025-10-10 10:37:00.000000000 +0100 dhcp.jg.gz -> dhcp-aed65be3c144.jg.gz

/bndl/dhcp/lib:
total 196
-rwxr-xr-x 1 root root 198592 2025-10-10 10:36:27.000000000 +0100 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 lib

/bndl/dhcp/nova/bin:
total 648
-rwxr-xr-x 1 root root 461448 2025-10-10 10:39:56.000000000 +0100 dhcp
-rwxr-xr-x 1 root root 198876 2025-10-10 10:38:05.000000000 +0100 dhcpclient

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 console

/bndl/dhcp/nova/lib/console:
total 116
-rwxr-xr-x 1 root root 118532 2025-10-10 10:36:44.000000000 +0100 1128267776.mem

/bndl/hotspot:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:10.000000000 +0100 nova

/bndl/hotspot/home:
total 4
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:10.000000000 +0100 web

/bndl/hotspot/home/web:
total 8
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:10.000000000 +0100 hotspot
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 webfig

/bndl/hotspot/home/web/hotspot:
total 68
-rw-r--r-- 1 root root 1094 2025-10-10 09:48:07.000000000 +0100 alogin.html
-rw-r--r-- 1 root root  311 2025-10-10 09:48:07.000000000 +0100 api.json
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 css
-rw-r--r-- 1 root root  640 2025-10-10 09:48:07.000000000 +0100 error.html
-rw-r--r-- 1 root root 3719 2025-10-10 09:48:07.000000000 +0100 errors.txt
-rw-r--r-- 1 root root  903 2025-10-10 09:48:07.000000000 +0100 favicon.ico
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 img
-rw-r--r-- 1 root root 4423 2025-10-10 09:48:07.000000000 +0100 login.html
-rw-r--r-- 1 root root 1459 2025-10-10 09:48:07.000000000 +0100 logout.html
-rw-r--r-- 1 root root 7218 2025-10-10 09:48:07.000000000 +0100 md5.js
-rw-r--r-- 1 root root 1204 2025-10-10 09:48:07.000000000 +0100 radvert.html
-rw-r--r-- 1 root root  330 2025-10-10 09:48:07.000000000 +0100 redirect.html
-rw-r--r-- 1 root root  877 2025-10-10 09:48:07.000000000 +0100 rlogin.html
-rw-r--r-- 1 root root 2855 2025-10-10 09:48:07.000000000 +0100 status.html
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 xml

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
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 modules

/bndl/hotspot/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 5.6.3

/bndl/hotspot/lib/modules/5.6.3:
total 4
-rw-r--r-- 1 root root    0 2025-10-10 10:40:19.000000000 +0100 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 net

/bndl/hotspot/lib/modules/5.6.3/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 ipv4

/bndl/hotspot/lib/modules/5.6.3/net/ipv4:
total 84
-rw-r--r-- 1 root root 83912 2025-10-10 10:40:03.000000000 +0100 unicl.ko

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 lib

/bndl/hotspot/nova/bin:
total 452
-rwxr-xr-x 1 root root 461284 2025-10-10 10:38:15.000000000 +0100 hotspot

/bndl/hotspot/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 radius

/bndl/hotspot/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-10-10 10:39:11.000000000 +0100 hotspot.x3

/bndl/hotspot/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 console

/bndl/hotspot/nova/lib/console:
total 84
-rwxr-xr-x 1 root root 84886 2025-10-10 10:38:49.000000000 +0100 1132462080.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:10.000000000 +0100 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 webfig

/bndl/ipv6/home/web/webfig:
total 12
-rw-r--r-- 1 root root 8069 2025-10-10 10:36:50.000000000 +0100 ipv6-51ca41a24a71.jg.gz
-rwxr-xr-x 1 root root  101 2025-10-10 10:36:50.000000000 +0100 ipv6.info
lrwxrwxrwx 1 root root   23 2025-10-10 10:36:50.000000000 +0100 ipv6.jg.gz -> ipv6-51ca41a24a71.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:10.000000000 +0100 lib

/bndl/ipv6/nova/bin:
total 200
-rwxr-xr-x 1 root root  67120 2025-10-10 10:37:04.000000000 +0100 ippool6
-rwxr-xr-x 1 root root 132852 2025-10-10 10:36:15.000000000 +0100 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 route

/bndl/ipv6/nova/lib/console:
total 192
-rwxr-xr-x 1 root root 193792 2025-10-10 10:36:31.000000000 +0100 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2025-10-10 09:48:07.000000000 +0100 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:10.000000000 +0100 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 webfig

/bndl/ppp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 6632 2025-10-10 10:36:50.000000000 +0100 ppp-0e7aacafe7ee.jg.gz
-rwxr-xr-x 1 root root   99 2025-10-10 10:36:50.000000000 +0100 ppp.info
lrwxrwxrwx 1 root root   22 2025-10-10 10:36:50.000000000 +0100 ppp.jg.gz -> ppp-0e7aacafe7ee.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:10.000000000 +0100 5.6.3

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2025-10-10 10:46:27.000000000 +0100 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 164
-rw-r--r-- 1 root root 19856 2025-10-10 10:32:57.000000000 +0100 ppp_async.ko
-rw-r--r-- 1 root root 11824 2025-10-10 10:32:57.000000000 +0100 ppp_deflate.ko
-rw-r--r-- 1 root root 62576 2025-10-10 10:32:57.000000000 +0100 ppp_generic.ko
-rw-r--r-- 1 root root 13744 2025-10-10 10:32:57.000000000 +0100 ppp_mppe.ko
-rw-r--r-- 1 root root 16496 2025-10-10 10:32:57.000000000 +0100 ppp_synctty.ko
-rw-r--r-- 1 root root 23592 2025-10-10 10:32:57.000000000 +0100 pppoe.ko
-rw-r--r-- 1 root root  7080 2025-10-10 10:32:57.000000000 +0100 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 156
-rw-r--r-- 1 root root 66480 2025-10-10 10:38:30.000000000 +0100 ovpn.ko
-rw-r--r-- 1 root root 11592 2025-10-10 10:39:44.000000000 +0100 pppoefp.ko
-rw-r--r-- 1 root root 74192 2025-10-10 10:39:20.000000000 +0100 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 112
-rw-r--r-- 1 root root 92312 2025-10-10 10:37:21.000000000 +0100 l2tp.ko
-rw-r--r-- 1 root root 17632 2025-10-10 10:36:20.000000000 +0100 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:10.000000000 +0100 etc
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:10.000000000 +0100 lib

/bndl/ppp/nova/bin:
total 1092
-rwxr-xr-x 1 root root 1118188 2025-10-10 10:45:49.000000000 +0100 ppp
lrwxrwxrwx 1 root root       3 2025-10-10 10:45:50.000000000 +0100 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2025-10-10 10:36:11.000000000 +0100 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2025-10-10 10:36:11.000000000 +0100 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 profiler

/bndl/ppp/nova/lib/console:
total 160
-rwxr-xr-x 1 root root 160419 2025-10-10 10:36:33.000000000 +0100 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 68
-rwxr-xr-x 1 root root 66628 2025-10-10 10:41:01.000000000 +0100 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:10.000000000 +0100 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 webfig

/bndl/security/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4451 2025-10-10 10:43:07.000000000 +0100 secure-6d95ab448081.jg.gz
-rwxr-xr-x 1 root root  105 2025-10-10 10:43:07.000000000 +0100 secure.info
lrwxrwxrwx 1 root root   25 2025-10-10 10:43:07.000000000 +0100 secure.jg.gz -> secure-6d95ab448081.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 5.6.3

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:10.000000000 +0100 kernel
-rw-r--r-- 1 root root  162 2025-10-10 10:47:59.000000000 +0100 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 crypto
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:10.000000000 +0100 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 128
-rw-r--r-- 1 root root  9808 2025-10-10 10:32:55.000000000 +0100 blowfish_common.ko
-rw-r--r-- 1 root root  7528 2025-10-10 10:32:55.000000000 +0100 blowfish_generic.ko
-rw-r--r-- 1 root root 30112 2025-10-10 10:32:55.000000000 +0100 camellia_generic.ko
-rw-r--r-- 1 root root 15384 2025-10-10 10:32:55.000000000 +0100 chacha20poly1305.ko
-rw-r--r-- 1 root root  7208 2025-10-10 10:32:55.000000000 +0100 chacha_generic.ko
-rw-r--r-- 1 root root  6080 2025-10-10 10:32:56.000000000 +0100 echainiv.ko
-rw-r--r-- 1 root root  5352 2025-10-10 10:32:56.000000000 +0100 poly1305_generic.ko
-rw-r--r-- 1 root root 23504 2025-10-10 10:32:56.000000000 +0100 twofish_common.ko
-rw-r--r-- 1 root root 11432 2025-10-10 10:32:56.000000000 +0100 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 key
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 44
-rw-r--r-- 1 root root 18264 2025-10-10 10:33:01.000000000 +0100 ah4.ko
-rw-r--r-- 1 root root 23968 2025-10-10 10:33:01.000000000 +0100 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 68
-rw-r--r-- 1 root root 66232 2025-10-10 10:33:01.000000000 +0100 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 52
-rw-r--r-- 1 root root 49312 2025-10-10 10:33:03.000000000 +0100 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:10.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 lib

/bndl/security/nova/bin:
total 1296
-rwxr-xr-x 1 root root 926276 2025-10-10 10:47:27.000000000 +0100 ipsec
lrwxrwxrwx 1 root root      5 2025-10-10 10:47:32.000000000 +0100 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 396928 2025-10-10 10:43:23.000000000 +0100 ssh
lrwxrwxrwx 1 root root      3 2025-10-10 10:43:26.000000000 +0100 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-10-10 10:40:42.000000000 +0100 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2025-10-10 10:40:42.000000000 +0100 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 console

/bndl/security/nova/lib/console:
total 92
-rwxr-xr-x 1 root root 92892 2025-10-10 10:43:15.000000000 +0100 1077936128.mem

/bndl/wifi:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:10.000000000 +0100 nova

/bndl/wifi/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 web

/bndl/wifi/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 webfig

/bndl/wifi/home/web/webfig:
total 16
-rw-r--r-- 1 root root 9293 2025-10-10 10:36:50.000000000 +0100 wave2-a7151b20f7df.jg.gz
-rwxr-xr-x 1 root root  103 2025-10-10 10:36:50.000000000 +0100 wave2.info
lrwxrwxrwx 1 root root   24 2025-10-10 10:36:50.000000000 +0100 wave2.jg.gz -> wave2-a7151b20f7df.jg.gz

/bndl/wifi/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 modules

/bndl/wifi/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 5.6.3

/bndl/wifi/lib/modules/5.6.3:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 misc
-rw-r--r-- 1 root root   23 2025-10-10 10:47:34.000000000 +0100 modules.dep.wifi

/bndl/wifi/lib/modules/5.6.3/misc:
total 76
-rw-r--r-- 1 root root 77256 2025-10-10 10:38:53.000000000 +0100 c2.ko

/bndl/wifi/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:10.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 lib

/bndl/wifi/nova/bin:
total 1800
-rwxr-xr-x 1 root root 1843192 2025-10-10 10:47:15.000000000 +0100 ww2

/bndl/wifi/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 radius

/bndl/wifi/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 183 2025-10-10 10:36:12.000000000 +0100 wifi.x3

/bndl/wifi/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-10-10 10:36:12.000000000 +0100 wifi.x3

/bndl/wifi/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 console

/bndl/wifi/nova/lib/console:
total 216
-rwxr-xr-x 1 root root 220780 2025-10-10 10:36:43.000000000 +0100 1275068416.mem

/boot:
total 104
-rw-r--r-- 1 root root 104056 2025-10-10 10:02:56.000000000 +0100 initrd.rgz

/dev:
total 0

/etc:
total 260
-rw-r--r-- 1 root root 130743 2025-10-10 09:48:31.000000000 +0100 license
-rw-r--r-- 1 root root   4049 2025-10-10 09:48:31.000000000 +0100 stm8_hw_monitor.bin
lrwxrwxrwx 1 root root     24 2025-10-10 10:52:10.000000000 +0100 termcap -> /pckg/option/etc/termcap
-rw-r--r-- 1 root root 129392 2025-10-10 09:54:50.000000000 +0100 tilegx-7.20.1.fwf

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:10.000000000 +0100 web

/home/web:
total 64
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:10.000000000 +0100 assets
-rwxr-xr-x 1 root root 19357 2025-10-10 09:53:54.000000000 +0100 bth-files.html
-rwxr-xr-x 1 root root   600 2025-10-10 09:48:31.000000000 +0100 favicon.png
-rwxr-xr-x 1 root root   689 2025-10-10 09:48:31.000000000 +0100 favicon.svg
-rwxr-xr-x 1 root root   708 2025-10-10 09:48:29.000000000 +0100 graph.css
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:10.000000000 +0100 help
-rwxr-xr-x 1 root root  1254 2025-10-10 09:48:31.000000000 +0100 index2.html
lrwxrwxrwx 1 root root    12 2025-10-10 10:35:35.000000000 +0100 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2025-10-10 09:48:31.000000000 +0100 logo.png
-rw-r--r-- 1 root root  2507 2025-10-10 09:48:31.000000000 +0100 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2025-10-10 09:48:31.000000000 +0100 robots.txt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:10.000000000 +0100 webfig
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:10.000000000 +0100 winbox

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
total 3332
-rwxr-xr-x 1 root root 460148 2025-10-10 09:50:38.000000000 +0100 libc.so
-rwxr-xr-x 1 root root 132976 2025-10-10 09:56:49.000000000 +0100 libeap.so
-rwxr-xr-x 1 root root  66732 2025-10-10 09:52:38.000000000 +0100 libjson.so
-rwxr-xr-x 1 root root 330080 2025-10-10 09:55:04.000000000 +0100 librappsup.so
-rwxr-xr-x 1 root root 198632 2025-10-10 09:53:36.000000000 +0100 libubox.so
-rwxr-xr-x 1 root root 132804 2025-10-10 09:52:29.000000000 +0100 libuc++.so
-rwxr-xr-x 1 root root 461600 2025-10-10 09:55:37.000000000 +0100 libucrypto.so
-rwxr-xr-x 1 root root  66940 2025-10-10 09:53:30.000000000 +0100 libufiber.so
-rwxr-xr-x 1 root root 132804 2025-10-10 09:53:34.000000000 +0100 libuhttp.so
-rwxr-xr-x 1 root root 987728 2025-10-10 09:53:10.000000000 +0100 libumsg.so
-rwxr-xr-x 1 root root  69452 2025-10-10 09:55:50.000000000 +0100 liburadius.so
-rwxr-xr-x 1 root root  66684 2025-10-10 09:55:43.000000000 +0100 libuxml++.so
-rwxr-xr-x 1 root root  67200 2025-10-10 09:52:35.000000000 +0100 libwww.so
-rwxr-xr-x 1 root root  66680 2025-10-10 09:52:38.000000000 +0100 libxml.so
-rwxr-xr-x 1 root root 132376 2025-10-10 09:52:38.000000000 +0100 libz.so
drwxr-xr-x 3 root root   4096 2025-10-10 10:52:10.000000000 +0100 modules
lrwxrwxrwx 1 root root     27 2025-10-10 10:52:10.000000000 +0100 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:10.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:10.000000000 +0100 drivers
drwxr-xr-x 8 root root 4096 2025-10-10 10:52:10.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 misc
-rw-r--r-- 1 root root 2393 2025-10-10 10:35:30.000000000 +0100 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:10.000000000 +0100 net

/lib/modules/5.6.3/drivers:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 char
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 crypto
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 net

/lib/modules/5.6.3/drivers/char:
total 16
-rw-r--r-- 1 root root 14536 2025-10-10 10:28:14.000000000 +0100 ticker.ko

/lib/modules/5.6.3/drivers/crypto:
total 48
-rw-r--r-- 1 root root 48376 2025-10-10 10:32:20.000000000 +0100 tilegx_crypton.ko

/lib/modules/5.6.3/drivers/net:
total 1136
-rw-r--r-- 1 root root  62456 2025-10-10 10:30:34.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root  66224 2025-10-10 10:31:22.000000000 +0100 atl1c.ko
-rw-r--r-- 1 root root  14952 2025-10-10 10:31:39.000000000 +0100 imq.ko
-rw-r--r-- 1 root root  20408 2025-10-10 10:33:25.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root 370400 2025-10-10 10:33:25.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root  51464 2025-10-10 10:29:23.000000000 +0100 phy_amcc_qt2025.ko
-rw-r--r-- 1 root root 150208 2025-10-10 10:29:25.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root  15416 2025-10-10 10:29:23.000000000 +0100 phy_ti_tlk10232.ko
-rw-r--r-- 1 root root 109568 2025-10-10 10:30:39.000000000 +0100 switch.ko
-rw-r--r-- 1 root root 138328 2025-10-10 10:31:18.000000000 +0100 tilegx.ko
drwxr-xr-x 2 root root   4096 2025-10-10 10:52:10.000000000 +0100 usb
-rw-r--r-- 1 root root  36648 2025-10-10 10:28:14.000000000 +0100 via-velocity.ko
-rw-r--r-- 1 root root 105000 2025-10-10 10:33:19.000000000 +0100 vxlan2.ko

/lib/modules/5.6.3/drivers/net/usb:
total 300
-rw-r--r-- 1 root root 119712 2025-10-10 10:33:05.000000000 +0100 fp_usbnet.ko
-rw-r--r-- 1 root root 181680 2025-10-10 10:32:55.000000000 +0100 mbim.ko

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-10-10 10:52:10.000000000 +0100 arch
drwxr-xr-x  2 root root 4096 2025-10-10 10:52:10.000000000 +0100 crypto
drwxr-xr-x  7 root root 4096 2025-10-10 10:52:10.000000000 +0100 drivers
drwxr-xr-x  4 root root 4096 2025-10-10 10:52:10.000000000 +0100 fs
drwxr-xr-x  5 root root 4096 2025-10-10 10:52:10.000000000 +0100 lib
drwxr-xr-x 12 root root 4096 2025-10-10 10:52:10.000000000 +0100 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 tile

/lib/modules/5.6.3/kernel/arch/tile:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 oprofile

/lib/modules/5.6.3/kernel/arch/tile/oprofile:
total 72
-rw-r--r-- 1 root root 71320 2025-10-10 10:32:55.000000000 +0100 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 56
-rw-r--r-- 1 root root  4368 2025-10-10 10:32:55.000000000 +0100 arc4.ko
-rw-r--r-- 1 root root 22888 2025-10-10 10:32:55.000000000 +0100 ccm.ko
-rw-r--r-- 1 root root  7648 2025-10-10 10:32:55.000000000 +0100 cmac.ko
-rw-r--r-- 1 root root  5560 2025-10-10 10:32:55.000000000 +0100 des_generic.ko
-rw-r--r-- 1 root root  7024 2025-10-10 10:32:56.000000000 +0100 md4.ko

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 ata
drwxr-xr-x 7 root root 4096 2025-10-10 10:52:10.000000000 +0100 net
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 scsi
drwxr-xr-x 8 root root 4096 2025-10-10 10:52:10.000000000 +0100 usb
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 watchdog

/lib/modules/5.6.3/kernel/drivers/ata:
total 540
-rw-r--r-- 1 root root  43872 2025-10-10 10:32:56.000000000 +0100 ahci.ko
-rw-r--r-- 1 root root  59208 2025-10-10 10:32:56.000000000 +0100 libahci.ko
-rw-r--r-- 1 root root 446448 2025-10-10 10:32:56.000000000 +0100 libata.ko

/lib/modules/5.6.3/kernel/drivers/net:
total 192
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:10.000000000 +0100 bonding
-rw-r--r-- 1 root root 64520 2025-10-10 10:32:57.000000000 +0100 macsec.ko
-rw-r--r-- 1 root root 37216 2025-10-10 10:32:57.000000000 +0100 macvlan.ko
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:10.000000000 +0100 phy
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:10.000000000 +0100 slip
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:10.000000000 +0100 usb
-rw-r--r-- 1 root root 29952 2025-10-10 10:32:57.000000000 +0100 veth.ko
-rw-r--r-- 1 root root 35128 2025-10-10 10:32:58.000000000 +0100 vrf.ko
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:10.000000000 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 232
-rw-r--r-- 1 root root 237248 2025-10-10 10:32:57.000000000 +0100 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/phy:
total 140
-rw-r--r-- 1 root root 140608 2025-10-10 10:32:57.000000000 +0100 libphy.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 12
-rw-r--r-- 1 root root 11408 2025-10-10 10:32:57.000000000 +0100 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 228
-rw-r--r-- 1 root root 31568 2025-10-10 10:32:57.000000000 +0100 ax88179_178a.ko
-rw-r--r-- 1 root root 74152 2025-10-10 10:32:57.000000000 +0100 hso.ko
-rw-r--r-- 1 root root 22456 2025-10-10 10:32:57.000000000 +0100 sierra_net.ko
-rw-r--r-- 1 root root 43880 2025-10-10 10:32:57.000000000 +0100 smsc95xx.ko
-rw-r--r-- 1 root root 50920 2025-10-10 10:32:57.000000000 +0100 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 148
-rw-r--r-- 1 root root 148784 2025-10-10 10:32:58.000000000 +0100 wireguard.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 316
-rw-r--r-- 1 root root 241408 2025-10-10 10:32:58.000000000 +0100 scsi_mod.ko
-rw-r--r-- 1 root root  78128 2025-10-10 10:32:58.000000000 +0100 sd_mod.ko

/lib/modules/5.6.3/kernel/drivers/usb:
total 24
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 class
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 common
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 core
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 host
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 serial
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 storage

/lib/modules/5.6.3/kernel/drivers/usb/class:
total 48
-rw-r--r-- 1 root root 45216 2025-10-10 10:32:58.000000000 +0100 cdc-acm.ko

/lib/modules/5.6.3/kernel/drivers/usb/common:
total 8
-rw-r--r-- 1 root root 7824 2025-10-10 10:32:58.000000000 +0100 usb-common.ko

/lib/modules/5.6.3/kernel/drivers/usb/core:
total 348
-rw-r--r-- 1 root root 352632 2025-10-10 10:32:58.000000000 +0100 usbcore.ko

/lib/modules/5.6.3/kernel/drivers/usb/host:
total 116
-rw-r--r-- 1 root root 79760 2025-10-10 10:32:58.000000000 +0100 ehci-hcd.ko
-rw-r--r-- 1 root root 36752 2025-10-10 10:32:58.000000000 +0100 ohci-hcd.ko

/lib/modules/5.6.3/kernel/drivers/usb/serial:
total 412
-rw-r--r-- 1 root root  14336 2025-10-10 10:32:58.000000000 +0100 ch341.ko
-rw-r--r-- 1 root root  33160 2025-10-10 10:32:58.000000000 +0100 cp210x.ko
-rw-r--r-- 1 root root  99624 2025-10-10 10:32:58.000000000 +0100 ftdi_sio.ko
-rw-r--r-- 1 root root   8032 2025-10-10 10:32:58.000000000 +0100 ipw.ko
-rw-r--r-- 1 root root 114560 2025-10-10 10:32:58.000000000 +0100 option.ko
-rw-r--r-- 1 root root  23784 2025-10-10 10:32:58.000000000 +0100 pl2303.ko
-rw-r--r-- 1 root root  18048 2025-10-10 10:32:58.000000000 +0100 qcserial.ko
-rw-r--r-- 1 root root  21816 2025-10-10 10:32:58.000000000 +0100 sierra.ko
-rw-r--r-- 1 root root  14656 2025-10-10 10:32:59.000000000 +0100 usb_wwan.ko
-rw-r--r-- 1 root root  56272 2025-10-10 10:32:59.000000000 +0100 usbserial.ko

/lib/modules/5.6.3/kernel/drivers/usb/storage:
total 124
-rw-r--r-- 1 root root 123680 2025-10-10 10:32:59.000000000 +0100 usb-storage.ko

/lib/modules/5.6.3/kernel/drivers/watchdog:
total 16
-rw-r--r-- 1 root root 14312 2025-10-10 10:32:59.000000000 +0100 tile_wdt.ko

/lib/modules/5.6.3/kernel/fs:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 cifs
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 ksmbd

/lib/modules/5.6.3/kernel/fs/cifs:
total 860
-rw-r--r-- 1 root root 877560 2025-10-10 10:32:59.000000000 +0100 cifs.ko

/lib/modules/5.6.3/kernel/fs/ksmbd:
total 468
-rw-r--r-- 1 root root 476280 2025-10-10 10:32:59.000000000 +0100 ksmbd.ko

/lib/modules/5.6.3/kernel/lib:
total 52
-rw-r--r-- 1 root root 7056 2025-10-10 10:32:59.000000000 +0100 asn1_decoder.ko
-rw-r--r-- 1 root root 4552 2025-10-10 10:32:59.000000000 +0100 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 crypto
-rw-r--r-- 1 root root 6704 2025-10-10 10:33:00.000000000 +0100 oid_registry.ko
-rw-r--r-- 1 root root 5560 2025-10-10 10:33:00.000000000 +0100 ts_bm.ko
-rw-r--r-- 1 root root 5416 2025-10-10 10:33:00.000000000 +0100 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 92
-rw-r--r-- 1 root root  3072 2025-10-10 10:32:59.000000000 +0100 libarc4.ko
-rw-r--r-- 1 root root 10680 2025-10-10 10:32:59.000000000 +0100 libblake2s-generic.ko
-rw-r--r-- 1 root root  5384 2025-10-10 10:32:59.000000000 +0100 libblake2s.ko
-rw-r--r-- 1 root root  3032 2025-10-10 10:32:59.000000000 +0100 libchacha.ko
-rw-r--r-- 1 root root 11656 2025-10-10 10:32:59.000000000 +0100 libchacha20poly1305.ko
-rw-r--r-- 1 root root  9632 2025-10-10 10:33:00.000000000 +0100 libcurve25519-generic.ko
-rw-r--r-- 1 root root  2568 2025-10-10 10:33:00.000000000 +0100 libcurve25519.ko
-rw-r--r-- 1 root root 25040 2025-10-10 10:33:00.000000000 +0100 libdes.ko
-rw-r--r-- 1 root root  6384 2025-10-10 10:33:00.000000000 +0100 libpoly1305.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 36
-rw-r--r-- 1 root root 33832 2025-10-10 10:33:00.000000000 +0100 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 24
-rw-r--r-- 1 root root 23080 2025-10-10 10:33:00.000000000 +0100 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 40
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 802
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 8021q
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 ipv4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 ipv6
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 mpls
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 rfkill
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 sched
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 xfrm

/lib/modules/5.6.3/kernel/net/802:
total 20
-rw-r--r-- 1 root root 17992 2025-10-10 10:33:00.000000000 +0100 mrp.ko

/lib/modules/5.6.3/kernel/net/8021q:
total 52
-rw-r--r-- 1 root root 50040 2025-10-10 10:33:00.000000000 +0100 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 164
-rw-r--r-- 1 root root  3888 2025-10-10 10:33:00.000000000 +0100 ebt_802_3.ko
-rw-r--r-- 1 root root  5376 2025-10-10 10:33:00.000000000 +0100 ebt_arp.ko
-rw-r--r-- 1 root root  4728 2025-10-10 10:33:00.000000000 +0100 ebt_arpreply.ko
-rw-r--r-- 1 root root  4808 2025-10-10 10:33:00.000000000 +0100 ebt_dnat.ko
-rw-r--r-- 1 root root  5632 2025-10-10 10:33:00.000000000 +0100 ebt_ip.ko
-rw-r--r-- 1 root root  6080 2025-10-10 10:33:00.000000000 +0100 ebt_ip6.ko
-rw-r--r-- 1 root root  7136 2025-10-10 10:33:00.000000000 +0100 ebt_limit.ko
-rw-r--r-- 1 root root  4744 2025-10-10 10:33:00.000000000 +0100 ebt_mark.ko
-rw-r--r-- 1 root root  5064 2025-10-10 10:33:00.000000000 +0100 ebt_mark_m.ko
-rw-r--r-- 1 root root  3568 2025-10-10 10:33:00.000000000 +0100 ebt_pkttype.ko
-rw-r--r-- 1 root root  4552 2025-10-10 10:33:00.000000000 +0100 ebt_redirect.ko
-rw-r--r-- 1 root root  4544 2025-10-10 10:33:00.000000000 +0100 ebt_snat.ko
-rw-r--r-- 1 root root  6264 2025-10-10 10:33:00.000000000 +0100 ebt_stp.ko
-rw-r--r-- 1 root root  4480 2025-10-10 10:33:00.000000000 +0100 ebt_vlan.ko
-rw-r--r-- 1 root root  4920 2025-10-10 10:33:01.000000000 +0100 ebtable_filter.ko
-rw-r--r-- 1 root root  4920 2025-10-10 10:33:01.000000000 +0100 ebtable_nat.ko
-rw-r--r-- 1 root root 44120 2025-10-10 10:33:01.000000000 +0100 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 64
-rw-r--r-- 1 root root 30552 2025-10-10 10:33:01.000000000 +0100 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:10.000000000 +0100 netfilter
-rw-r--r-- 1 root root 27280 2025-10-10 10:33:01.000000000 +0100 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 128
-rw-r--r-- 1 root root 38216 2025-10-10 10:33:01.000000000 +0100 ip_tables.ko
-rw-r--r-- 1 root root  6144 2025-10-10 10:33:01.000000000 +0100 ipt_REJECT.ko
-rw-r--r-- 1 root root  6272 2025-10-10 10:33:01.000000000 +0100 iptable_filter.ko
-rw-r--r-- 1 root root  6464 2025-10-10 10:33:01.000000000 +0100 iptable_mangle.ko
-rw-r--r-- 1 root root  5792 2025-10-10 10:33:01.000000000 +0100 iptable_nat.ko
-rw-r--r-- 1 root root  6720 2025-10-10 10:33:01.000000000 +0100 iptable_raw.ko
-rw-r--r-- 1 root root  5960 2025-10-10 10:33:01.000000000 +0100 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root 19784 2025-10-10 10:33:01.000000000 +0100 nf_nat_h323.ko
-rw-r--r-- 1 root root 10016 2025-10-10 10:33:01.000000000 +0100 nf_nat_pptp.ko
-rw-r--r-- 1 root root  7464 2025-10-10 10:33:01.000000000 +0100 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 56
-rw-r--r-- 1 root root 17288 2025-10-10 10:33:01.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root 22712 2025-10-10 10:33:01.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root  5224 2025-10-10 10:33:01.000000000 +0100 ip6_udp_tunnel.ko
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:10.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 112
-rw-r--r-- 1 root root 38984 2025-10-10 10:33:01.000000000 +0100 ip6_tables.ko
-rw-r--r-- 1 root root  6104 2025-10-10 10:33:01.000000000 +0100 ip6t_NPT.ko
-rw-r--r-- 1 root root  6208 2025-10-10 10:33:01.000000000 +0100 ip6t_REJECT.ko
-rw-r--r-- 1 root root  4000 2025-10-10 10:33:01.000000000 +0100 ip6t_eui64.ko
-rw-r--r-- 1 root root  4608 2025-10-10 10:33:01.000000000 +0100 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  6280 2025-10-10 10:33:01.000000000 +0100 ip6table_filter.ko
-rw-r--r-- 1 root root  6920 2025-10-10 10:33:01.000000000 +0100 ip6table_mangle.ko
-rw-r--r-- 1 root root  5792 2025-10-10 10:33:01.000000000 +0100 ip6table_nat.ko
-rw-r--r-- 1 root root  6728 2025-10-10 10:33:01.000000000 +0100 ip6table_raw.ko
-rw-r--r-- 1 root root  8408 2025-10-10 10:33:01.000000000 +0100 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 96
-rw-r--r-- 1 root root  8912 2025-10-10 10:33:01.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root 82016 2025-10-10 10:33:01.000000000 +0100 mpls_router.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 704
-rw-r--r-- 1 root root 16000 2025-10-10 10:33:02.000000000 +0100 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root 69936 2025-10-10 10:33:02.000000000 +0100 nf_conntrack_h323.ko
-rw-r--r-- 1 root root 12952 2025-10-10 10:33:02.000000000 +0100 nf_conntrack_irc.ko
-rw-r--r-- 1 root root 60560 2025-10-10 10:33:02.000000000 +0100 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root 15880 2025-10-10 10:33:02.000000000 +0100 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root 14448 2025-10-10 10:33:02.000000000 +0100 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root 46760 2025-10-10 10:33:02.000000000 +0100 nf_conntrack_sip.ko
-rw-r--r-- 1 root root 10112 2025-10-10 10:33:02.000000000 +0100 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root 59112 2025-10-10 10:33:02.000000000 +0100 nf_nat.ko
-rw-r--r-- 1 root root  7288 2025-10-10 10:33:02.000000000 +0100 nf_nat_ftp.ko
-rw-r--r-- 1 root root  6672 2025-10-10 10:33:02.000000000 +0100 nf_nat_irc.ko
-rw-r--r-- 1 root root 14760 2025-10-10 10:33:02.000000000 +0100 nf_nat_rtsp.ko
-rw-r--r-- 1 root root 22528 2025-10-10 10:33:02.000000000 +0100 nf_nat_sip.ko
-rw-r--r-- 1 root root  5096 2025-10-10 10:33:02.000000000 +0100 nf_nat_tftp.ko
-rw-r--r-- 1 root root 16704 2025-10-10 10:33:02.000000000 +0100 nfnetlink.ko
-rw-r--r-- 1 root root 58656 2025-10-10 10:33:02.000000000 +0100 x_tables.ko
-rw-r--r-- 1 root root 11112 2025-10-10 10:33:02.000000000 +0100 xt_CT.ko
-rw-r--r-- 1 root root  6472 2025-10-10 10:33:02.000000000 +0100 xt_DSCP.ko
-rw-r--r-- 1 root root  5176 2025-10-10 10:33:02.000000000 +0100 xt_HL.ko
-rw-r--r-- 1 root root  5248 2025-10-10 10:33:02.000000000 +0100 xt_MASQUERADE.ko
-rw-r--r-- 1 root root  5808 2025-10-10 10:33:02.000000000 +0100 xt_NETMAP.ko
-rw-r--r-- 1 root root  4848 2025-10-10 10:33:02.000000000 +0100 xt_REDIRECT.ko
-rw-r--r-- 1 root root 10488 2025-10-10 10:33:02.000000000 +0100 xt_TCPMSS.ko
-rw-r--r-- 1 root root  8136 2025-10-10 10:33:02.000000000 +0100 xt_addrtype.ko
-rw-r--r-- 1 root root  5912 2025-10-10 10:33:02.000000000 +0100 xt_connbytes.ko
-rw-r--r-- 1 root root  7272 2025-10-10 10:33:02.000000000 +0100 xt_connmark.ko
-rw-r--r-- 1 root root  8360 2025-10-10 10:33:02.000000000 +0100 xt_conntrack.ko
-rw-r--r-- 1 root root  4576 2025-10-10 10:33:02.000000000 +0100 xt_dscp.ko
-rw-r--r-- 1 root root 32704 2025-10-10 10:33:02.000000000 +0100 xt_hashlimit.ko
-rw-r--r-- 1 root root  5168 2025-10-10 10:33:02.000000000 +0100 xt_helper.ko
-rw-r--r-- 1 root root  4304 2025-10-10 10:33:02.000000000 +0100 xt_hl.ko
-rw-r--r-- 1 root root  4048 2025-10-10 10:33:02.000000000 +0100 xt_length.ko
-rw-r--r-- 1 root root  3736 2025-10-10 10:33:03.000000000 +0100 xt_mac.ko
-rw-r--r-- 1 root root  4344 2025-10-10 10:33:03.000000000 +0100 xt_mark.ko
-rw-r--r-- 1 root root  5072 2025-10-10 10:33:03.000000000 +0100 xt_multiport.ko
-rw-r--r-- 1 root root  8704 2025-10-10 10:33:03.000000000 +0100 xt_nat.ko
-rw-r--r-- 1 root root  5816 2025-10-10 10:33:03.000000000 +0100 xt_physdev.ko
-rw-r--r-- 1 root root  7568 2025-10-10 10:33:03.000000000 +0100 xt_policy.ko
-rw-r--r-- 1 root root  3544 2025-10-10 10:33:03.000000000 +0100 xt_realm.ko
-rw-r--r-- 1 root root  4608 2025-10-10 10:33:03.000000000 +0100 xt_statistic.ko
-rw-r--r-- 1 root root  4384 2025-10-10 10:33:03.000000000 +0100 xt_string.ko
-rw-r--r-- 1 root root  4664 2025-10-10 10:33:03.000000000 +0100 xt_tcpmss.ko
-rw-r--r-- 1 root root  6496 2025-10-10 10:33:03.000000000 +0100 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/rfkill:
total 36
-rw-r--r-- 1 root root 34136 2025-10-10 10:33:03.000000000 +0100 rfkill.ko

/lib/modules/5.6.3/kernel/net/sched:
total 144
-rw-r--r-- 1 root root 45512 2025-10-10 10:33:03.000000000 +0100 sch_cake.ko
-rw-r--r-- 1 root root 13256 2025-10-10 10:33:03.000000000 +0100 sch_codel.ko
-rw-r--r-- 1 root root 18008 2025-10-10 10:33:03.000000000 +0100 sch_fq_codel.ko
-rw-r--r-- 1 root root 44184 2025-10-10 10:33:03.000000000 +0100 sch_htb.ko
-rw-r--r-- 1 root root 15800 2025-10-10 10:33:03.000000000 +0100 sch_red.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 16
-rw-r--r-- 1 root root 13432 2025-10-10 10:33:03.000000000 +0100 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 528
-rw-r--r-- 1 root root 17272 2025-10-10 10:28:16.000000000 +0100 btest.ko
-rw-r--r-- 1 root root  2600 2025-10-10 10:33:01.000000000 +0100 c2glue.ko
-rw-r--r-- 1 root root 11152 2025-10-10 10:32:55.000000000 +0100 dot1x.ko
-rw-r--r-- 1 root root 61312 2025-10-10 10:32:35.000000000 +0100 fan_i2c.ko
-rw-r--r-- 1 root root 14480 2025-10-10 10:28:05.000000000 +0100 fancon.ko
-rw-r--r-- 1 root root 86520 2025-10-10 10:28:47.000000000 +0100 flash.ko
-rw-r--r-- 1 root root  9056 2025-10-10 10:31:45.000000000 +0100 jiffies.ko
-rw-r--r-- 1 root root 26472 2025-10-10 10:31:35.000000000 +0100 lcd.ko
-rw-r--r-- 1 root root  4400 2025-10-10 10:30:58.000000000 +0100 ledgroup.ko
-rw-r--r-- 1 root root 20952 2025-10-10 10:28:12.000000000 +0100 logring.ko
-rw-r--r-- 1 root root 39696 2025-10-10 10:28:54.000000000 +0100 mesh.ko
-rw-r--r-- 1 root root  9440 2025-10-10 10:28:09.000000000 +0100 panics.ko
-rw-r--r-- 1 root root 11000 2025-10-10 10:31:45.000000000 +0100 rb.ko
-rw-r--r-- 1 root root  9440 2025-10-10 10:31:55.000000000 +0100 romon.ko
-rw-r--r-- 1 root root 17024 2025-10-10 10:31:33.000000000 +0100 simcard.ko
-rw-r--r-- 1 root root  9272 2025-10-10 10:28:49.000000000 +0100 snif.ko
-rw-r--r-- 1 root root 50728 2025-10-10 10:32:32.000000000 +0100 stm8_fan.ko
-rw-r--r-- 1 root root 47104 2025-10-10 10:31:55.000000000 +0100 traffic_gen.ko
-rw-r--r-- 1 root root 35008 2025-10-10 10:31:35.000000000 +0100 ts.ko
-rw-r--r-- 1 root root 11176 2025-10-10 10:28:45.000000000 +0100 ulog.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 sched

/lib/modules/5.6.3/net/bridge:
total 340
-rw-r--r-- 1 root root 309920 2025-10-10 10:32:13.000000000 +0100 bridge2.ko
-rw-r--r-- 1 root root  28136 2025-10-10 10:32:13.000000000 +0100 bridge2_netfilter.ko
-rw-r--r-- 1 root root   3496 2025-10-10 10:28:46.000000000 +0100 ebt_snif.ko
-rw-r--r-- 1 root root   3960 2025-10-10 10:28:41.000000000 +0100 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 40
-rw-r--r-- 1 root root  4912 2025-10-10 10:28:15.000000000 +0100 ipt_SAME.ko
-rw-r--r-- 1 root root 10088 2025-10-10 10:28:17.000000000 +0100 ipt_TARPIT.ko
-rw-r--r-- 1 root root  6880 2025-10-10 10:28:15.000000000 +0100 ipt_psd.ko
-rw-r--r-- 1 root root  3656 2025-10-10 10:28:46.000000000 +0100 ipt_snif.ko
-rw-r--r-- 1 root root  4624 2025-10-10 10:28:41.000000000 +0100 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 88
-rw-r--r-- 1 root root  2736 2025-10-10 10:29:43.000000000 +0100 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  2736 2025-10-10 10:29:43.000000000 +0100 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 19160 2025-10-10 10:29:51.000000000 +0100 xt_ein.ko
-rw-r--r-- 1 root root 20088 2025-10-10 10:28:22.000000000 +0100 xt_layer7.ko
-rw-r--r-- 1 root root 31192 2025-10-10 10:29:51.000000000 +0100 xt_misc.ko
-rw-r--r-- 1 root root  5248 2025-10-10 10:28:36.000000000 +0100 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 132
-rw-r--r-- 1 root root  8504 2025-10-10 10:28:34.000000000 +0100 cls_fw.ko
-rw-r--r-- 1 root root 20904 2025-10-10 10:28:37.000000000 +0100 cls_linear.ko
-rw-r--r-- 1 root root 23456 2025-10-10 10:28:54.000000000 +0100 proto_agr.ko
-rw-r--r-- 1 root root 34176 2025-10-10 10:28:54.000000000 +0100 sch_agr.ko
-rw-r--r-- 1 root root 16848 2025-10-10 10:28:20.000000000 +0100 sch_pcq.ko
-rw-r--r-- 1 root root 13608 2025-10-10 10:31:52.000000000 +0100 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2025-10-10 10:52:10.000000000 +0100 bin
drwxr-xr-x 12 root root 4096 2025-10-10 10:52:10.000000000 +0100 etc
drwxr-xr-x  5 root root 4096 2025-10-10 10:52:10.000000000 +0100 lib
lrwxrwxrwx  1 root root    8 2025-10-10 10:52:10.000000000 +0100 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2025-10-10 10:52:10.000000000 +0100 store -> /rw/store

/nova/bin:
total 21720
-rwxr-xr-x 1 root root   66988 2025-10-10 09:53:24.000000000 +0100 agent
-rwxr-xr-x 1 root root   66812 2025-10-10 09:53:24.000000000 +0100 arpd
-rwxr-xr-x 1 root root   67104 2025-10-10 09:55:44.000000000 +0100 backup
-rwxr-xr-x 1 root root  526664 2025-10-10 09:58:36.000000000 +0100 bridge2
-rwxr-xr-x 1 root root  133060 2025-10-10 09:56:09.000000000 +0100 btest
-rwxr-xr-x 1 root root  132900 2025-10-10 09:54:15.000000000 +0100 bth
-rwxr-xr-x 1 root root 1381040 2025-10-10 09:57:44.000000000 +0100 cerm
lrwxrwxrwx 1 root root       4 2025-10-10 09:57:44.000000000 +0100 cerm-worker -> cerm
-rwxr-xr-x 1 root root  329912 2025-10-10 09:57:24.000000000 +0100 cloud
-rwxr-xr-x 1 root root  198272 2025-10-10 09:55:33.000000000 +0100 crossfig
-rwxr-xr-x 1 root root  133032 2025-10-10 09:56:31.000000000 +0100 detnet
-rwxr-xr-x 1 root root  198608 2025-10-10 09:54:11.000000000 +0100 discover
-rwxr-xr-x 1 root root  592512 2025-10-10 09:57:36.000000000 +0100 diskd
-rwxr-xr-x 1 root root  198736 2025-10-10 09:58:36.000000000 +0100 dot1x
-rwxr-xr-x 1 root root   67468 2025-10-10 09:55:52.000000000 +0100 email
-rwxr-xr-x 1 root root  527848 2025-10-10 09:57:35.000000000 +0100 figman
-rwxr-xr-x 1 root root  264460 2025-10-10 09:58:02.000000000 +0100 fileman
-rwxr-xr-x 1 root root   67136 2025-10-10 09:53:23.000000000 +0100 ftpd
-rwxr-xr-x 1 root root  284164 2025-10-10 09:54:25.000000000 +0100 graphing
-rwxr-xr-x 1 root root   66532 2025-10-10 09:56:56.000000000 +0100 havecardbus
-rwxr-xr-x 1 root root  132836 2025-10-10 09:55:29.000000000 +0100 igmpproxy
-rwxr-xr-x 1 root root  198392 2025-10-10 09:56:55.000000000 +0100 installer
-rwxr-xr-x 1 root root   67096 2025-10-10 09:57:29.000000000 +0100 ippool
-rwxr-xr-x 1 root root  132896 2025-10-10 09:56:01.000000000 +0100 keyman
-rwxr-xr-x 1 root root  132840 2025-10-10 09:54:12.000000000 +0100 kidcontrol
-rwxr-xr-x 1 root root  395352 2025-10-10 09:54:30.000000000 +0100 lcdstat
-rwxr-xr-x 1 root root  133144 2025-10-10 09:56:36.000000000 +0100 led
-rwxr-xr-x 1 root root  264072 2025-10-10 09:57:21.000000000 +0100 letsencrypt
-rwxr-xr-x 1 root root  133016 2025-10-10 09:56:46.000000000 +0100 loader
-rwxr-xr-x 1 root root  198700 2025-10-10 09:53:34.000000000 +0100 log
-rwxr-xr-x 1 root root  330260 2025-10-10 09:59:44.000000000 +0100 login
-rwxr-xr-x 1 root root  132620 2025-10-10 09:53:26.000000000 +0100 logmaker
-rwxr-xr-x 1 root root   67080 2025-10-10 09:53:25.000000000 +0100 macping
-rwxr-xr-x 1 root root   67276 2025-10-10 09:55:53.000000000 +0100 mactel
-rwxr-xr-x 1 root root   67160 2025-10-10 09:53:26.000000000 +0100 mepty
-rwxr-xr-x 1 root root  198332 2025-10-10 09:54:16.000000000 +0100 mesh
-rwxr-xr-x 1 root root  132592 2025-10-10 09:59:29.000000000 +0100 mode
lrwxrwxrwx 1 root root       7 2025-10-10 09:57:29.000000000 +0100 modprobed -> moduler
-rwxr-xr-x 1 root root  657768 2025-10-10 09:57:20.000000000 +0100 moduler
-rwxr-xr-x 1 root root  133536 2025-10-10 09:58:20.000000000 +0100 mproxy
-rwxr-xr-x 1 root root  133020 2025-10-10 09:55:58.000000000 +0100 mtget
-rwxr-xr-x 1 root root  132848 2025-10-10 09:54:15.000000000 +0100 natpmp
-rwxr-xr-x 1 root root 2889940 2025-10-10 10:01:31.000000000 +0100 net
-rwxr-xr-x 1 root root  133000 2025-10-10 09:56:35.000000000 +0100 ntp
-rwxr-xr-x 1 root root   66624 2025-10-10 09:53:21.000000000 +0100 panicsl
-rwxr-xr-x 1 root root 1380200 2025-10-10 09:59:44.000000000 +0100 parser
-rwxr-xr-x 1 root root   67172 2025-10-10 09:53:49.000000000 +0100 partd
-rwxr-xr-x 1 root root   67248 2025-10-10 09:53:27.000000000 +0100 ping
-rwxr-xr-x 1 root root  132968 2025-10-10 09:57:09.000000000 +0100 portman
-rwxr-xr-x 1 root root   67204 2025-10-10 10:33:50.000000000 +0100 profiler
-rwxr-xr-x 1 root root  198604 2025-10-10 09:57:20.000000000 +0100 ptp
-rwxr-xr-x 1 root root  264244 2025-10-10 09:53:30.000000000 +0100 quickset
-rwxr-xr-x 1 root root  133004 2025-10-10 09:57:39.000000000 +0100 radius
-rwxr-xr-x 1 root root  330104 2025-10-10 09:57:41.000000000 +0100 resolver
-rwxr-xr-x 1 root root   66816 2025-10-10 09:57:41.000000000 +0100 resolver_ctl
-rwxr-xr-x 1 root root  198784 2025-10-10 09:56:50.000000000 +0100 romon
-rwxr-xr-x 1 root root 3477736 2025-10-10 10:02:50.000000000 +0100 route
-rwxr-xr-x 1 root root   66940 2025-10-10 09:56:17.000000000 +0100 rtrace
-rwxr-xr-x 1 root root   67468 2025-10-10 09:57:11.000000000 +0100 sermgr
-rwxr-xr-x 1 root root   67228 2025-10-10 09:53:48.000000000 +0100 sertcp
-rwxr-xr-x 1 root root  132904 2025-10-10 09:53:59.000000000 +0100 sniffer
-rwxr-xr-x 1 root root  330044 2025-10-10 09:58:40.000000000 +0100 snmp
-rwxr-xr-x 1 root root  132948 2025-10-10 09:54:14.000000000 +0100 socks
-rwxr-xr-x 1 root root   67020 2025-10-10 09:54:10.000000000 +0100 socksify
-rwxr-xr-x 1 root root  264248 2025-10-10 09:58:08.000000000 +0100 ssld
-rwxr-xr-x 1 root root   67100 2025-10-10 09:55:55.000000000 +0100 sstore
-rwxr-xr-x 1 root root  396592 2025-10-10 09:59:36.000000000 +0100 sys2
-rwxr-xr-x 1 root root   66904 2025-10-10 09:53:25.000000000 +0100 telnet
-rwxr-xr-x 1 root root   67228 2025-10-10 09:53:27.000000000 +0100 telser
-rwxr-xr-x 1 root root   67340 2025-10-10 09:53:55.000000000 +0100 tftpd
-rwxr-xr-x 1 root root   67152 2025-10-10 09:53:25.000000000 +0100 traceroute
-rwxr-xr-x 1 root root  198472 2025-10-10 09:54:08.000000000 +0100 trafficgen
-rwxr-xr-x 1 root root   67028 2025-10-10 09:53:44.000000000 +0100 trafflow
-rwxr-xr-x 1 root root   67064 2025-10-10 09:53:24.000000000 +0100 undo
-rwxr-xr-x 1 root root  264256 2025-10-10 09:54:17.000000000 +0100 upnp
-rwxr-xr-x 1 root root  198892 2025-10-10 09:57:15.000000000 +0100 user
-rwxr-xr-x 1 root root  198600 2025-10-10 09:56:25.000000000 +0100 vrrp
-rwxr-xr-x 1 root root   67268 2025-10-10 09:53:59.000000000 +0100 watchdog
-rwxr-xr-x 1 root root  264776 2025-10-10 09:57:01.000000000 +0100 wproxy
-rwxr-xr-x 1 root root  264688 2025-10-10 09:58:19.000000000 +0100 www

/nova/etc:
total 56
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:10.000000000 +0100 ca
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 leds
-rwxr-xr-x 1 root root 1279 2025-10-10 09:48:29.000000000 +0100 lognames
-rwxr-xr-x 1 root root   10 2025-10-10 09:48:29.000000000 +0100 logo
-rwxr-xr-x 1 root root    1 2025-10-10 09:48:29.000000000 +0100 manual-url
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 pciinfo
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 services
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 system_names
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 upnp
-rwxr-xr-x 1 root root   26 2025-10-10 09:48:29.000000000 +0100 url
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 user
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 www

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
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 gsma

/nova/etc/ca/gsma:
total 8
-rwxr-xr-x 1 root root 589 2025-10-10 09:48:29.000000000 +0100 gsma_digicert.der
-rwxr-xr-x 1 root root 507 2025-10-10 09:48:29.000000000 +0100 gsma_sealsq.der

/nova/etc/leds:
total 124
-rwxr-xr-x 1 root root 123807 2025-10-10 09:52:34.000000000 +0100 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2025-10-10 09:52:34.000000000 +0100 system.x3

/nova/etc/pciinfo:
total 216
-rwxr-xr-x 1 root root 217734 2025-10-10 09:52:34.000000000 +0100 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 101 2025-10-10 09:52:34.000000000 +0100 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 992 2025-10-10 09:52:34.000000000 +0100 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2025-10-10 09:52:34.000000000 +0100 system.x3

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
-rwxr-xr-x 1 root root 2230 2025-10-10 09:52:34.000000000 +0100 system.x3

/nova/etc/www:
total 4
-rwxr-xr-x 1 root root 2458 2025-10-10 09:52:34.000000000 +0100 system.x3

/nova/lib:
total 24
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 defconf
-rw-r--r-- 1 root root 4521 2025-10-10 09:48:29.000000000 +0100 javasign.raw
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 profiler
-rwxr-xr-x 1 root root 4085 2025-10-10 09:48:30.000000000 +0100 xmlnames2

/nova/lib/console:
total 2376
-rwxr-xr-x 1 root root 2421198 2025-10-10 10:00:37.000000000 +0100 1073741824.mem
-rwxr-xr-x 1 root root     510 2025-10-10 09:48:29.000000000 +0100 logo.txt
-rwxr-xr-x 1 root root      18 2025-10-10 09:48:29.000000000 +0100 sublogo.txt

/nova/lib/defconf:
total 100
-rwxr-xr-x 1 root root   567 2025-10-10 09:48:29.000000000 +0100 defconf
-rwxr-xr-x 1 root root  4995 2025-10-10 09:48:29.000000000 +0100 defconf-caps
-rwxr-xr-x 1 root root  3700 2025-10-10 09:48:29.000000000 +0100 defconf-wps-sync
-rwxr-xr-x 1 root root 85713 2025-10-10 09:48:29.000000000 +0100 get-custom-defconf

/nova/lib/profiler:
total 80
-rwxr-xr-x 1 root root 78632 2025-10-10 10:33:49.000000000 +0100 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 720
-rwxr-xr-x 1 root root 529908 2025-10-10 10:34:21.000000000 +0100 mke2fs
-rwxr-xr-x 1 root root  66184 2025-10-10 09:52:32.000000000 +0100 nandfix
-rwxr-xr-x 1 root root 132908 2025-10-10 09:55:55.000000000 +0100 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2025-10-10 10:52:10.000000000 +0100 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 deinstall
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 lock
lrwxrwxrwx 1 root root    8 2025-10-10 10:52:10.000000000 +0100 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2025-10-10 10:52:10.000000000 +0100 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:10.000000000 +0100 post
lrwxrwxrwx 1 root root    7 2025-10-10 10:52:10.000000000 +0100 run -> /rw/run
lrwxrwxrwx 1 root root    4 2025-10-10 10:52:10.000000000 +0100 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

