### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 14622524 bytes, 2537 inodes, blocksize: 262144 bytes, created: Fri Oct 10 09:52:55 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 bin
drwxr-xr-x 9 root root 4096 2025-10-10 10:52:41.000000000 +0100 bndl
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 boot
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 dev
lrwxrwxrwx 1 root root   11 2025-10-10 10:52:41.000000000 +0100 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 etc
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 flash
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 nova
lrwxrwxrwx 1 root root    9 2025-10-10 10:52:41.000000000 +0100 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 proc
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 ram
lrwxrwxrwx 1 root root    9 2025-10-10 10:52:41.000000000 +0100 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 sbin
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 sys
lrwxrwxrwx 1 root root    7 2025-10-10 10:52:41.000000000 +0100 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 var

/bin:
total 468
lrwxrwxrwx 1 root root     21 2025-10-10 10:52:41.000000000 +0100 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root  66860 2025-10-10 09:57:36.000000000 +0100 catlog
lrwxrwxrwx 1 root root     15 2025-10-10 10:52:41.000000000 +0100 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root     15 2025-10-10 10:52:41.000000000 +0100 login -> /nova/bin/login
-rwxr-xr-x 1 root root  72684 2025-10-10 10:34:38.000000000 +0100 mkexfatfs
-rwxr-xr-x 1 root root  66656 2025-10-10 09:57:36.000000000 +0100 pakp
lrwxrwxrwx 1 root root     21 2025-10-10 10:52:41.000000000 +0100 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root     15 2025-10-10 10:52:41.000000000 +0100 shell -> /nova/bin/login
-rwxr-xr-x 1 root root 264808 2025-10-10 10:35:19.000000000 +0100 sshfs

/bndl:
total 28
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:41.000000000 +0100 advanced-tools
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 dhcp
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 hotspot
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:41.000000000 +0100 ipv6
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 ppp
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 security
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 wifi

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:41.000000000 +0100 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 webfig

/bndl/advanced-tools/home/web/webfig:
total 8
-rw-r--r-- 1 root root 2370 2025-10-10 10:36:55.000000000 +0100 advtool-c647bc50a096.jg.gz
-rwxr-xr-x 1 root root  107 2025-10-10 10:36:55.000000000 +0100 advtool.info
lrwxrwxrwx 1 root root   26 2025-10-10 10:36:56.000000000 +0100 advtool.jg.gz -> advtool-c647bc50a096.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 lib

/bndl/advanced-tools/nova/bin:
total 540
-rwxr-xr-x 1 root root  67188 2025-10-10 10:36:03.000000000 +0100 ddns
-rwxr-xr-x 1 root root  66816 2025-10-10 10:35:42.000000000 +0100 fping
-rwxr-xr-x 1 root root  66980 2025-10-10 10:36:23.000000000 +0100 macscan
-rwxr-xr-x 1 root root 133020 2025-10-10 10:38:31.000000000 +0100 netwatch
-rwxr-xr-x 1 root root  66868 2025-10-10 10:35:48.000000000 +0100 pspeed
-rwxr-xr-x 1 root root  67216 2025-10-10 10:36:43.000000000 +0100 scanner
-rwxr-xr-x 1 root root  66832 2025-10-10 10:37:04.000000000 +0100 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 console

/bndl/advanced-tools/nova/lib/console:
total 28
-rwxr-xr-x 1 root root 27225 2025-10-10 10:36:15.000000000 +0100 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 home
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:41.000000000 +0100 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 webfig

/bndl/dhcp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4740 2025-10-10 10:36:59.000000000 +0100 dhcp-aed65be3c144.jg.gz
-rwxr-xr-x 1 root root  100 2025-10-10 10:36:59.000000000 +0100 dhcp.info
lrwxrwxrwx 1 root root   23 2025-10-10 10:37:00.000000000 +0100 dhcp.jg.gz -> dhcp-aed65be3c144.jg.gz

/bndl/dhcp/lib:
total 132
-rwxr-xr-x 1 root root 133208 2025-10-10 10:36:27.000000000 +0100 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 lib

/bndl/dhcp/nova/bin:
total 456
-rwxr-xr-x 1 root root 330428 2025-10-10 10:39:56.000000000 +0100 dhcp
-rwxr-xr-x 1 root root 133404 2025-10-10 10:38:05.000000000 +0100 dhcpclient

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 console

/bndl/dhcp/nova/lib/console:
total 116
-rwxr-xr-x 1 root root 118532 2025-10-10 10:36:44.000000000 +0100 1128267776.mem

/bndl/hotspot:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 nova

/bndl/hotspot/home:
total 4
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:41.000000000 +0100 web

/bndl/hotspot/home/web:
total 8
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 hotspot
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 webfig

/bndl/hotspot/home/web/hotspot:
total 68
-rw-r--r-- 1 root root 1094 2025-10-10 09:48:07.000000000 +0100 alogin.html
-rw-r--r-- 1 root root  311 2025-10-10 09:48:07.000000000 +0100 api.json
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 css
-rw-r--r-- 1 root root  640 2025-10-10 09:48:07.000000000 +0100 error.html
-rw-r--r-- 1 root root 3719 2025-10-10 09:48:07.000000000 +0100 errors.txt
-rw-r--r-- 1 root root  903 2025-10-10 09:48:07.000000000 +0100 favicon.ico
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 img
-rw-r--r-- 1 root root 4423 2025-10-10 09:48:07.000000000 +0100 login.html
-rw-r--r-- 1 root root 1459 2025-10-10 09:48:07.000000000 +0100 logout.html
-rw-r--r-- 1 root root 7218 2025-10-10 09:48:07.000000000 +0100 md5.js
-rw-r--r-- 1 root root 1204 2025-10-10 09:48:07.000000000 +0100 radvert.html
-rw-r--r-- 1 root root  330 2025-10-10 09:48:07.000000000 +0100 redirect.html
-rw-r--r-- 1 root root  877 2025-10-10 09:48:07.000000000 +0100 rlogin.html
-rw-r--r-- 1 root root 2855 2025-10-10 09:48:07.000000000 +0100 status.html
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 xml

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
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:41.000000000 +0100 modules

/bndl/hotspot/lib/modules:
total 16
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 5.6.3
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 5.6.3-440
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 5.6.3-e500
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 5.6.3-smp

/bndl/hotspot/lib/modules/5.6.3:
total 4
-rw-r--r-- 1 root root    0 2025-10-10 10:40:29.000000000 +0100 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 net

/bndl/hotspot/lib/modules/5.6.3/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 ipv4

/bndl/hotspot/lib/modules/5.6.3/net/ipv4:
total 48
-rw-r--r-- 1 root root 46840 2025-10-10 10:40:04.000000000 +0100 unicl.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:40:04.000000000 +0100 unicl.ko.plt

/bndl/hotspot/lib/modules/5.6.3-440:
total 4
-rw-r--r-- 1 root root    0 2025-10-10 10:40:31.000000000 +0100 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 net

/bndl/hotspot/lib/modules/5.6.3-440/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 ipv4

/bndl/hotspot/lib/modules/5.6.3-440/net/ipv4:
total 48
-rw-r--r-- 1 root root 46840 2025-10-10 10:40:04.000000000 +0100 unicl.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:40:04.000000000 +0100 unicl.ko.plt

/bndl/hotspot/lib/modules/5.6.3-e500:
total 4
-rw-r--r-- 1 root root    0 2025-10-10 10:40:33.000000000 +0100 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 net

/bndl/hotspot/lib/modules/5.6.3-e500/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 ipv4

/bndl/hotspot/lib/modules/5.6.3-e500/net/ipv4:
total 48
-rw-r--r-- 1 root root 46840 2025-10-10 10:40:04.000000000 +0100 unicl.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:40:04.000000000 +0100 unicl.ko.plt

/bndl/hotspot/lib/modules/5.6.3-smp:
total 4
-rw-r--r-- 1 root root    0 2025-10-10 10:40:35.000000000 +0100 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 net

/bndl/hotspot/lib/modules/5.6.3-smp/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 ipv4

/bndl/hotspot/lib/modules/5.6.3-smp/net/ipv4:
total 48
-rw-r--r-- 1 root root 47084 2025-10-10 10:40:04.000000000 +0100 unicl.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:40:04.000000000 +0100 unicl.ko.plt

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 lib

/bndl/hotspot/nova/bin:
total 324
-rwxr-xr-x 1 root root 330324 2025-10-10 10:38:15.000000000 +0100 hotspot

/bndl/hotspot/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 radius

/bndl/hotspot/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-10-10 10:39:11.000000000 +0100 hotspot.x3

/bndl/hotspot/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 console

/bndl/hotspot/nova/lib/console:
total 84
-rwxr-xr-x 1 root root 84886 2025-10-10 10:38:49.000000000 +0100 1132462080.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:41.000000000 +0100 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 webfig

/bndl/ipv6/home/web/webfig:
total 12
-rw-r--r-- 1 root root 8069 2025-10-10 10:36:50.000000000 +0100 ipv6-51ca41a24a71.jg.gz
-rwxr-xr-x 1 root root  101 2025-10-10 10:36:50.000000000 +0100 ipv6.info
lrwxrwxrwx 1 root root   23 2025-10-10 10:36:50.000000000 +0100 ipv6.jg.gz -> ipv6-51ca41a24a71.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:41.000000000 +0100 lib

/bndl/ipv6/nova/bin:
total 136
-rwxr-xr-x 1 root root 67132 2025-10-10 10:37:04.000000000 +0100 ippool6
-rwxr-xr-x 1 root root 67328 2025-10-10 10:36:15.000000000 +0100 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 route

/bndl/ipv6/nova/lib/console:
total 192
-rwxr-xr-x 1 root root 193792 2025-10-10 10:36:31.000000000 +0100 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2025-10-10 09:48:07.000000000 +0100 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 webfig

/bndl/ppp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 6632 2025-10-10 10:36:50.000000000 +0100 ppp-0e7aacafe7ee.jg.gz
-rwxr-xr-x 1 root root   99 2025-10-10 10:36:50.000000000 +0100 ppp.info
lrwxrwxrwx 1 root root   22 2025-10-10 10:36:50.000000000 +0100 ppp.jg.gz -> ppp-0e7aacafe7ee.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:41.000000000 +0100 modules

/bndl/ppp/lib/modules:
total 16
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 5.6.3
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 5.6.3-440
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 5.6.3-e500
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 5.6.3-smp

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2025-10-10 10:46:34.000000000 +0100 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 112
-rw-r--r-- 1 root root 12804 2025-10-10 10:46:16.000000000 +0100 ppp_async.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:16.000000000 +0100 ppp_async.ko.plt
-rw-r--r-- 1 root root  7788 2025-10-10 10:46:16.000000000 +0100 ppp_deflate.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:16.000000000 +0100 ppp_deflate.ko.plt
-rw-r--r-- 1 root root 37848 2025-10-10 10:46:16.000000000 +0100 ppp_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:16.000000000 +0100 ppp_generic.ko.plt
-rw-r--r-- 1 root root  9428 2025-10-10 10:46:16.000000000 +0100 ppp_mppe.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:16.000000000 +0100 ppp_mppe.ko.plt
-rw-r--r-- 1 root root 10920 2025-10-10 10:46:16.000000000 +0100 ppp_synctty.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:16.000000000 +0100 ppp_synctty.ko.plt
-rw-r--r-- 1 root root 14036 2025-10-10 10:46:16.000000000 +0100 pppoe.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:16.000000000 +0100 pppoe.ko.plt
-rw-r--r-- 1 root root  4648 2025-10-10 10:46:16.000000000 +0100 pppox.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:16.000000000 +0100 pppox.ko.plt

/bndl/ppp/lib/modules/5.6.3/misc:
total 100
-rw-r--r-- 1 root root 38352 2025-10-10 10:38:31.000000000 +0100 ovpn.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:38:31.000000000 +0100 ovpn.ko.plt
-rw-r--r-- 1 root root  6292 2025-10-10 10:39:45.000000000 +0100 pppoefp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:39:45.000000000 +0100 pppoefp.ko.plt
-rw-r--r-- 1 root root 49272 2025-10-10 10:39:21.000000000 +0100 sstp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:39:21.000000000 +0100 sstp.ko.plt

/bndl/ppp/lib/modules/5.6.3/net:
total 64
-rw-r--r-- 1 root root 51512 2025-10-10 10:37:22.000000000 +0100 l2tp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:37:22.000000000 +0100 l2tp.ko.plt
-rw-r--r-- 1 root root 11172 2025-10-10 10:36:21.000000000 +0100 pptp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:36:21.000000000 +0100 pptp.ko.plt

/bndl/ppp/lib/modules/5.6.3-440:
total 16
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2025-10-10 10:46:36.000000000 +0100 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3-440/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 drivers

/bndl/ppp/lib/modules/5.6.3-440/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3-440/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 ppp

/bndl/ppp/lib/modules/5.6.3-440/kernel/drivers/net/ppp:
total 112
-rw-r--r-- 1 root root 12772 2025-10-10 10:46:17.000000000 +0100 ppp_async.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 ppp_async.ko.plt
-rw-r--r-- 1 root root  7812 2025-10-10 10:46:17.000000000 +0100 ppp_deflate.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 ppp_deflate.ko.plt
-rw-r--r-- 1 root root 37848 2025-10-10 10:46:16.000000000 +0100 ppp_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:16.000000000 +0100 ppp_generic.ko.plt
-rw-r--r-- 1 root root  9428 2025-10-10 10:46:17.000000000 +0100 ppp_mppe.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 ppp_mppe.ko.plt
-rw-r--r-- 1 root root 10888 2025-10-10 10:46:17.000000000 +0100 ppp_synctty.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 ppp_synctty.ko.plt
-rw-r--r-- 1 root root 14036 2025-10-10 10:46:17.000000000 +0100 pppoe.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 pppoe.ko.plt
-rw-r--r-- 1 root root  4648 2025-10-10 10:46:17.000000000 +0100 pppox.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 pppox.ko.plt

/bndl/ppp/lib/modules/5.6.3-440/misc:
total 100
-rw-r--r-- 1 root root 38352 2025-10-10 10:38:31.000000000 +0100 ovpn.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:38:31.000000000 +0100 ovpn.ko.plt
-rw-r--r-- 1 root root  6324 2025-10-10 10:39:45.000000000 +0100 pppoefp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:39:45.000000000 +0100 pppoefp.ko.plt
-rw-r--r-- 1 root root 49304 2025-10-10 10:39:21.000000000 +0100 sstp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:39:21.000000000 +0100 sstp.ko.plt

/bndl/ppp/lib/modules/5.6.3-440/net:
total 64
-rw-r--r-- 1 root root 51536 2025-10-10 10:37:22.000000000 +0100 l2tp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:37:22.000000000 +0100 l2tp.ko.plt
-rw-r--r-- 1 root root 11172 2025-10-10 10:36:21.000000000 +0100 pptp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:36:21.000000000 +0100 pptp.ko.plt

/bndl/ppp/lib/modules/5.6.3-e500:
total 16
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2025-10-10 10:46:37.000000000 +0100 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3-e500/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 drivers

/bndl/ppp/lib/modules/5.6.3-e500/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3-e500/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 ppp

/bndl/ppp/lib/modules/5.6.3-e500/kernel/drivers/net/ppp:
total 112
-rw-r--r-- 1 root root 12992 2025-10-10 10:46:17.000000000 +0100 ppp_async.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 ppp_async.ko.plt
-rw-r--r-- 1 root root  7820 2025-10-10 10:46:17.000000000 +0100 ppp_deflate.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 ppp_deflate.ko.plt
-rw-r--r-- 1 root root 38192 2025-10-10 10:46:17.000000000 +0100 ppp_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 ppp_generic.ko.plt
-rw-r--r-- 1 root root  9428 2025-10-10 10:46:17.000000000 +0100 ppp_mppe.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 ppp_mppe.ko.plt
-rw-r--r-- 1 root root 11108 2025-10-10 10:46:17.000000000 +0100 ppp_synctty.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 ppp_synctty.ko.plt
-rw-r--r-- 1 root root 14200 2025-10-10 10:46:17.000000000 +0100 pppoe.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 pppoe.ko.plt
-rw-r--r-- 1 root root  4648 2025-10-10 10:46:17.000000000 +0100 pppox.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 pppox.ko.plt

/bndl/ppp/lib/modules/5.6.3-e500/misc:
total 100
-rw-r--r-- 1 root root 38352 2025-10-10 10:38:31.000000000 +0100 ovpn.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:38:31.000000000 +0100 ovpn.ko.plt
-rw-r--r-- 1 root root  6324 2025-10-10 10:39:45.000000000 +0100 pppoefp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:39:45.000000000 +0100 pppoefp.ko.plt
-rw-r--r-- 1 root root 49304 2025-10-10 10:39:21.000000000 +0100 sstp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:39:21.000000000 +0100 sstp.ko.plt

/bndl/ppp/lib/modules/5.6.3-e500/net:
total 64
-rw-r--r-- 1 root root 51544 2025-10-10 10:37:22.000000000 +0100 l2tp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:37:22.000000000 +0100 l2tp.ko.plt
-rw-r--r-- 1 root root 11172 2025-10-10 10:36:21.000000000 +0100 pptp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:36:21.000000000 +0100 pptp.ko.plt

/bndl/ppp/lib/modules/5.6.3-smp:
total 16
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2025-10-10 10:46:39.000000000 +0100 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3-smp/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 drivers

/bndl/ppp/lib/modules/5.6.3-smp/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3-smp/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 ppp

/bndl/ppp/lib/modules/5.6.3-smp/kernel/drivers/net/ppp:
total 112
-rw-r--r-- 1 root root 13696 2025-10-10 10:46:17.000000000 +0100 ppp_async.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 ppp_async.ko.plt
-rw-r--r-- 1 root root  7852 2025-10-10 10:46:17.000000000 +0100 ppp_deflate.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 ppp_deflate.ko.plt
-rw-r--r-- 1 root root 38664 2025-10-10 10:46:17.000000000 +0100 ppp_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 ppp_generic.ko.plt
-rw-r--r-- 1 root root  9256 2025-10-10 10:46:17.000000000 +0100 ppp_mppe.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 ppp_mppe.ko.plt
-rw-r--r-- 1 root root 11864 2025-10-10 10:46:17.000000000 +0100 ppp_synctty.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 ppp_synctty.ko.plt
-rw-r--r-- 1 root root 14560 2025-10-10 10:46:17.000000000 +0100 pppoe.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 pppoe.ko.plt
-rw-r--r-- 1 root root  4680 2025-10-10 10:46:17.000000000 +0100 pppox.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:46:17.000000000 +0100 pppox.ko.plt

/bndl/ppp/lib/modules/5.6.3-smp/misc:
total 100
-rw-r--r-- 1 root root 39632 2025-10-10 10:38:31.000000000 +0100 ovpn.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:38:31.000000000 +0100 ovpn.ko.plt
-rw-r--r-- 1 root root  6500 2025-10-10 10:39:45.000000000 +0100 pppoefp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:39:45.000000000 +0100 pppoefp.ko.plt
-rw-r--r-- 1 root root 49224 2025-10-10 10:39:21.000000000 +0100 sstp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:39:21.000000000 +0100 sstp.ko.plt

/bndl/ppp/lib/modules/5.6.3-smp/net:
total 64
-rw-r--r-- 1 root root 51868 2025-10-10 10:37:22.000000000 +0100 l2tp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:37:22.000000000 +0100 l2tp.ko.plt
-rw-r--r-- 1 root root 11328 2025-10-10 10:36:21.000000000 +0100 pptp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:36:21.000000000 +0100 pptp.ko.plt

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:41.000000000 +0100 etc
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:41.000000000 +0100 lib

/bndl/ppp/nova/bin:
total 776
-rwxr-xr-x 1 root root 790608 2025-10-10 10:45:50.000000000 +0100 ppp
lrwxrwxrwx 1 root root      3 2025-10-10 10:45:50.000000000 +0100 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2025-10-10 10:36:11.000000000 +0100 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2025-10-10 10:36:11.000000000 +0100 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 profiler

/bndl/ppp/nova/lib/console:
total 160
-rwxr-xr-x 1 root root 160419 2025-10-10 10:36:33.000000000 +0100 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 68
-rwxr-xr-x 1 root root 67400 2025-10-10 10:41:01.000000000 +0100 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 webfig

/bndl/security/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4451 2025-10-10 10:43:07.000000000 +0100 secure-6d95ab448081.jg.gz
-rwxr-xr-x 1 root root  105 2025-10-10 10:43:07.000000000 +0100 secure.info
lrwxrwxrwx 1 root root   25 2025-10-10 10:43:07.000000000 +0100 secure.jg.gz -> secure-6d95ab448081.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:41.000000000 +0100 modules

/bndl/security/lib/modules:
total 16
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 5.6.3
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 5.6.3-440
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 5.6.3-e500
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 5.6.3-smp

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:41.000000000 +0100 kernel
-rw-r--r-- 1 root root  162 2025-10-10 10:48:05.000000000 +0100 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 crypto
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 96
-rw-r--r-- 1 root root  7884 2025-10-10 10:47:48.000000000 +0100 blowfish_common.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:48.000000000 +0100 blowfish_common.ko.plt
-rw-r--r-- 1 root root  5016 2025-10-10 10:47:48.000000000 +0100 blowfish_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:48.000000000 +0100 blowfish_generic.ko.plt
-rw-r--r-- 1 root root 20828 2025-10-10 10:47:48.000000000 +0100 camellia_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:48.000000000 +0100 camellia_generic.ko.plt
-rw-r--r-- 1 root root 10496 2025-10-10 10:47:48.000000000 +0100 chacha20poly1305.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:48.000000000 +0100 chacha20poly1305.ko.plt
-rw-r--r-- 1 root root  5012 2025-10-10 10:47:49.000000000 +0100 chacha_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 chacha_generic.ko.plt
-rw-r--r-- 1 root root  4024 2025-10-10 10:47:48.000000000 +0100 echainiv.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:48.000000000 +0100 echainiv.ko.plt
-rw-r--r-- 1 root root  3972 2025-10-10 10:47:49.000000000 +0100 poly1305_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 poly1305_generic.ko.plt
-rw-r--r-- 1 root root 13964 2025-10-10 10:47:48.000000000 +0100 twofish_common.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:48.000000000 +0100 twofish_common.ko.plt
-rw-r--r-- 1 root root  8216 2025-10-10 10:47:48.000000000 +0100 twofish_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:48.000000000 +0100 twofish_generic.ko.plt

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 key
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root 10204 2025-10-10 10:47:48.000000000 +0100 ah4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:48.000000000 +0100 ah4.ko.plt
-rw-r--r-- 1 root root 13588 2025-10-10 10:47:48.000000000 +0100 esp4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:48.000000000 +0100 esp4.ko.plt

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 36
-rw-r--r-- 1 root root 35904 2025-10-10 10:47:48.000000000 +0100 af_key.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:48.000000000 +0100 af_key.ko.plt

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 32
-rw-r--r-- 1 root root 30496 2025-10-10 10:47:48.000000000 +0100 xfrm_user.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:48.000000000 +0100 xfrm_user.ko.plt

/bndl/security/lib/modules/5.6.3-440:
total 8
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:41.000000000 +0100 kernel
-rw-r--r-- 1 root root  106 2025-10-10 10:48:06.000000000 +0100 modules.dep.security

/bndl/security/lib/modules/5.6.3-440/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 crypto
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 net

/bndl/security/lib/modules/5.6.3-440/kernel/crypto:
total 84
-rw-r--r-- 1 root root  7884 2025-10-10 10:47:49.000000000 +0100 blowfish_common.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 blowfish_common.ko.plt
-rw-r--r-- 1 root root  5048 2025-10-10 10:47:49.000000000 +0100 blowfish_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 blowfish_generic.ko.plt
-rw-r--r-- 1 root root 20860 2025-10-10 10:47:49.000000000 +0100 camellia_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 camellia_generic.ko.plt
-rw-r--r-- 1 root root 10528 2025-10-10 10:47:49.000000000 +0100 chacha20poly1305.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 chacha20poly1305.ko.plt
-rw-r--r-- 1 root root  4024 2025-10-10 10:47:49.000000000 +0100 echainiv.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 echainiv.ko.plt
-rw-r--r-- 1 root root 13964 2025-10-10 10:47:49.000000000 +0100 twofish_common.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 twofish_common.ko.plt
-rw-r--r-- 1 root root  8216 2025-10-10 10:47:49.000000000 +0100 twofish_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 twofish_generic.ko.plt

/bndl/security/lib/modules/5.6.3-440/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 key
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 xfrm

/bndl/security/lib/modules/5.6.3-440/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root 10236 2025-10-10 10:47:49.000000000 +0100 ah4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 ah4.ko.plt
-rw-r--r-- 1 root root 13588 2025-10-10 10:47:49.000000000 +0100 esp4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 esp4.ko.plt

/bndl/security/lib/modules/5.6.3-440/kernel/net/key:
total 36
-rw-r--r-- 1 root root 35904 2025-10-10 10:47:49.000000000 +0100 af_key.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 af_key.ko.plt

/bndl/security/lib/modules/5.6.3-440/kernel/net/xfrm:
total 32
-rw-r--r-- 1 root root 30496 2025-10-10 10:47:49.000000000 +0100 xfrm_user.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 xfrm_user.ko.plt

/bndl/security/lib/modules/5.6.3-e500:
total 8
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:41.000000000 +0100 kernel
-rw-r--r-- 1 root root  162 2025-10-10 10:48:08.000000000 +0100 modules.dep.security

/bndl/security/lib/modules/5.6.3-e500/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 crypto
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 net

/bndl/security/lib/modules/5.6.3-e500/kernel/crypto:
total 96
-rw-r--r-- 1 root root  7884 2025-10-10 10:47:49.000000000 +0100 blowfish_common.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 blowfish_common.ko.plt
-rw-r--r-- 1 root root  5016 2025-10-10 10:47:49.000000000 +0100 blowfish_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 blowfish_generic.ko.plt
-rw-r--r-- 1 root root 20828 2025-10-10 10:47:49.000000000 +0100 camellia_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 camellia_generic.ko.plt
-rw-r--r-- 1 root root 10528 2025-10-10 10:47:49.000000000 +0100 chacha20poly1305.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 chacha20poly1305.ko.plt
-rw-r--r-- 1 root root  5044 2025-10-10 10:47:49.000000000 +0100 chacha_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 chacha_generic.ko.plt
-rw-r--r-- 1 root root  4024 2025-10-10 10:47:49.000000000 +0100 echainiv.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 echainiv.ko.plt
-rw-r--r-- 1 root root  3972 2025-10-10 10:47:49.000000000 +0100 poly1305_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 poly1305_generic.ko.plt
-rw-r--r-- 1 root root 13964 2025-10-10 10:47:49.000000000 +0100 twofish_common.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 twofish_common.ko.plt
-rw-r--r-- 1 root root  8216 2025-10-10 10:47:49.000000000 +0100 twofish_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 twofish_generic.ko.plt

/bndl/security/lib/modules/5.6.3-e500/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 key
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 xfrm

/bndl/security/lib/modules/5.6.3-e500/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root 10236 2025-10-10 10:47:49.000000000 +0100 ah4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 ah4.ko.plt
-rw-r--r-- 1 root root 13588 2025-10-10 10:47:49.000000000 +0100 esp4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 esp4.ko.plt

/bndl/security/lib/modules/5.6.3-e500/kernel/net/key:
total 36
-rw-r--r-- 1 root root 35904 2025-10-10 10:47:49.000000000 +0100 af_key.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 af_key.ko.plt

/bndl/security/lib/modules/5.6.3-e500/kernel/net/xfrm:
total 32
-rw-r--r-- 1 root root 30528 2025-10-10 10:47:49.000000000 +0100 xfrm_user.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:49.000000000 +0100 xfrm_user.ko.plt

/bndl/security/lib/modules/5.6.3-smp:
total 8
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:41.000000000 +0100 kernel
-rw-r--r-- 1 root root  162 2025-10-10 10:48:09.000000000 +0100 modules.dep.security

/bndl/security/lib/modules/5.6.3-smp/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 crypto
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 net

/bndl/security/lib/modules/5.6.3-smp/kernel/crypto:
total 96
-rw-r--r-- 1 root root  7916 2025-10-10 10:47:50.000000000 +0100 blowfish_common.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:50.000000000 +0100 blowfish_common.ko.plt
-rw-r--r-- 1 root root  5048 2025-10-10 10:47:50.000000000 +0100 blowfish_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:50.000000000 +0100 blowfish_generic.ko.plt
-rw-r--r-- 1 root root 20860 2025-10-10 10:47:50.000000000 +0100 camellia_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:50.000000000 +0100 camellia_generic.ko.plt
-rw-r--r-- 1 root root 10560 2025-10-10 10:47:50.000000000 +0100 chacha20poly1305.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:50.000000000 +0100 chacha20poly1305.ko.plt
-rw-r--r-- 1 root root  5076 2025-10-10 10:47:50.000000000 +0100 chacha_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:50.000000000 +0100 chacha_generic.ko.plt
-rw-r--r-- 1 root root  4056 2025-10-10 10:47:50.000000000 +0100 echainiv.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:50.000000000 +0100 echainiv.ko.plt
-rw-r--r-- 1 root root  4036 2025-10-10 10:47:50.000000000 +0100 poly1305_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:50.000000000 +0100 poly1305_generic.ko.plt
-rw-r--r-- 1 root root 13996 2025-10-10 10:47:50.000000000 +0100 twofish_common.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:50.000000000 +0100 twofish_common.ko.plt
-rw-r--r-- 1 root root  8248 2025-10-10 10:47:50.000000000 +0100 twofish_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:50.000000000 +0100 twofish_generic.ko.plt

/bndl/security/lib/modules/5.6.3-smp/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 key
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 xfrm

/bndl/security/lib/modules/5.6.3-smp/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root 10392 2025-10-10 10:47:50.000000000 +0100 ah4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:50.000000000 +0100 ah4.ko.plt
-rw-r--r-- 1 root root 13816 2025-10-10 10:47:50.000000000 +0100 esp4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:50.000000000 +0100 esp4.ko.plt

/bndl/security/lib/modules/5.6.3-smp/kernel/net/key:
total 36
-rw-r--r-- 1 root root 36600 2025-10-10 10:47:50.000000000 +0100 af_key.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:50.000000000 +0100 af_key.ko.plt

/bndl/security/lib/modules/5.6.3-smp/kernel/net/xfrm:
total 32
-rw-r--r-- 1 root root 30892 2025-10-10 10:47:50.000000000 +0100 xfrm_user.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:47:50.000000000 +0100 xfrm_user.ko.plt

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:41.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 lib

/bndl/security/nova/bin:
total 848
-rwxr-xr-x 1 root root 598656 2025-10-10 10:47:32.000000000 +0100 ipsec
lrwxrwxrwx 1 root root      5 2025-10-10 10:47:32.000000000 +0100 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 265984 2025-10-10 10:43:27.000000000 +0100 ssh
lrwxrwxrwx 1 root root      3 2025-10-10 10:43:27.000000000 +0100 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-10-10 10:40:42.000000000 +0100 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2025-10-10 10:40:42.000000000 +0100 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 console

/bndl/security/nova/lib/console:
total 92
-rwxr-xr-x 1 root root 92892 2025-10-10 10:43:15.000000000 +0100 1077936128.mem

/bndl/wifi:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:41.000000000 +0100 nova

/bndl/wifi/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 web

/bndl/wifi/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 webfig

/bndl/wifi/home/web/webfig:
total 16
-rw-r--r-- 1 root root 9293 2025-10-10 10:36:50.000000000 +0100 wave2-a7151b20f7df.jg.gz
-rwxr-xr-x 1 root root  103 2025-10-10 10:36:50.000000000 +0100 wave2.info
lrwxrwxrwx 1 root root   24 2025-10-10 10:36:50.000000000 +0100 wave2.jg.gz -> wave2-a7151b20f7df.jg.gz

/bndl/wifi/lib:
total 4
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:41.000000000 +0100 modules

/bndl/wifi/lib/modules:
total 16
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 5.6.3
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 5.6.3-440
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 5.6.3-e500
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 5.6.3-smp

/bndl/wifi/lib/modules/5.6.3:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 misc
-rw-r--r-- 1 root root   23 2025-10-10 10:47:40.000000000 +0100 modules.dep.wifi

/bndl/wifi/lib/modules/5.6.3/misc:
total 44
-rw-r--r-- 1 root root 42064 2025-10-10 10:38:53.000000000 +0100 c2.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:38:53.000000000 +0100 c2.ko.plt

/bndl/wifi/lib/modules/5.6.3-440:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 misc
-rw-r--r-- 1 root root   23 2025-10-10 10:47:41.000000000 +0100 modules.dep.wifi

/bndl/wifi/lib/modules/5.6.3-440/misc:
total 44
-rw-r--r-- 1 root root 42064 2025-10-10 10:38:53.000000000 +0100 c2.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:38:53.000000000 +0100 c2.ko.plt

/bndl/wifi/lib/modules/5.6.3-e500:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 misc
-rw-r--r-- 1 root root   23 2025-10-10 10:47:43.000000000 +0100 modules.dep.wifi

/bndl/wifi/lib/modules/5.6.3-e500/misc:
total 44
-rw-r--r-- 1 root root 42064 2025-10-10 10:38:53.000000000 +0100 c2.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:38:53.000000000 +0100 c2.ko.plt

/bndl/wifi/lib/modules/5.6.3-smp:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 misc
-rw-r--r-- 1 root root   23 2025-10-10 10:47:44.000000000 +0100 modules.dep.wifi

/bndl/wifi/lib/modules/5.6.3-smp/misc:
total 44
-rw-r--r-- 1 root root 42508 2025-10-10 10:38:53.000000000 +0100 c2.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:38:53.000000000 +0100 c2.ko.plt

/bndl/wifi/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:41.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:41.000000000 +0100 lib

/bndl/wifi/nova/bin:
total 1228
-rwxr-xr-x 1 root root 1253564 2025-10-10 10:47:26.000000000 +0100 ww2

/bndl/wifi/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 radius

/bndl/wifi/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 183 2025-10-10 10:36:12.000000000 +0100 wifi.x3

/bndl/wifi/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-10-10 10:36:12.000000000 +0100 wifi.x3

/bndl/wifi/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 console

/bndl/wifi/nova/lib/console:
total 216
-rwxr-xr-x 1 root root 220780 2025-10-10 10:36:43.000000000 +0100 1275068416.mem

/boot:
total 0

/dev:
total 0

/etc:
total 396
-rw-r--r-- 1 root root  36772 2025-10-10 09:54:47.000000000 +0100 amcc460-7.20.1.fwf
-rw-r--r-- 1 root root 130743 2025-10-10 09:48:31.000000000 +0100 license
-rw-r--r-- 1 root root  39268 2025-10-10 09:54:45.000000000 +0100 mpc8323-7.20.1.fwf
-rw-r--r-- 1 root root  41076 2025-10-10 09:54:46.000000000 +0100 mpc8343-7.20.1.fwf
-rw-r--r-- 1 root root  39956 2025-10-10 09:54:46.000000000 +0100 mpc8544-7.20.1.fwf
-rw-r--r-- 1 root root  34660 2025-10-10 09:54:45.000000000 +0100 mpc8548-7.20.1.fwf
-rw-r--r-- 1 root root  36564 2025-10-10 09:54:53.000000000 +0100 p1023-7.20.1.fwf
-rw-r--r-- 1 root root  35764 2025-10-10 09:54:58.000000000 +0100 p2020-7.20.1.fwf
lrwxrwxrwx 1 root root     24 2025-10-10 10:52:41.000000000 +0100 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:41.000000000 +0100 web

/home/web:
total 64
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 assets
-rwxr-xr-x 1 root root 19357 2025-10-10 09:53:54.000000000 +0100 bth-files.html
-rwxr-xr-x 1 root root   600 2025-10-10 09:48:31.000000000 +0100 favicon.png
-rwxr-xr-x 1 root root   689 2025-10-10 09:48:31.000000000 +0100 favicon.svg
-rwxr-xr-x 1 root root   708 2025-10-10 09:48:29.000000000 +0100 graph.css
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 help
-rwxr-xr-x 1 root root  1254 2025-10-10 09:48:31.000000000 +0100 index2.html
lrwxrwxrwx 1 root root    12 2025-10-10 10:35:36.000000000 +0100 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2025-10-10 09:48:31.000000000 +0100 logo.png
-rw-r--r-- 1 root root  2507 2025-10-10 09:48:31.000000000 +0100 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2025-10-10 09:48:31.000000000 +0100 robots.txt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 webfig
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:41.000000000 +0100 winbox

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
total 2692
-rwxr-xr-x 1 root root 329264 2025-10-10 09:50:38.000000000 +0100 libc.so
-rwxr-xr-x 1 root root 133028 2025-10-10 09:56:53.000000000 +0100 libeap.so
-rwxr-xr-x 1 root root  66796 2025-10-10 09:52:38.000000000 +0100 libjson.so
-rwxr-xr-x 1 root root 264648 2025-10-10 09:55:08.000000000 +0100 librappsup.so
-rwxr-xr-x 1 root root 133204 2025-10-10 09:53:38.000000000 +0100 libubox.so
-rwxr-xr-x 1 root root 132960 2025-10-10 09:52:30.000000000 +0100 libuc++.so
-rwxr-xr-x 1 root root 330680 2025-10-10 09:55:37.000000000 +0100 libucrypto.so
-rwxr-xr-x 1 root root  67048 2025-10-10 09:53:30.000000000 +0100 libufiber.so
-rwxr-xr-x 1 root root 132864 2025-10-10 09:53:36.000000000 +0100 libuhttp.so
-rwxr-xr-x 1 root root 725756 2025-10-10 09:53:11.000000000 +0100 libumsg.so
-rwxr-xr-x 1 root root  69512 2025-10-10 09:55:51.000000000 +0100 liburadius.so
-rwxr-xr-x 1 root root  66744 2025-10-10 09:55:43.000000000 +0100 libuxml++.so
-rwxr-xr-x 1 root root  67308 2025-10-10 09:52:35.000000000 +0100 libwww.so
-rwxr-xr-x 1 root root  66784 2025-10-10 09:52:38.000000000 +0100 libxml.so
-rwxr-xr-x 1 root root 132440 2025-10-10 09:52:40.000000000 +0100 libz.so
drwxr-xr-x 6 root root   4096 2025-10-10 10:52:40.000000000 +0100 modules
lrwxrwxrwx 1 root root     27 2025-10-10 10:52:41.000000000 +0100 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 16
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:40.000000000 +0100 5.6.3
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:40.000000000 +0100 5.6.3-440
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:40.000000000 +0100 5.6.3-e500
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:40.000000000 +0100 5.6.3-smp

/lib/modules/5.6.3:
total 20
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:40.000000000 +0100 drivers
drwxr-xr-x 8 root root 4096 2025-10-10 10:52:40.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 misc
-rw-r--r-- 1 root root 1963 2025-10-10 10:35:33.000000000 +0100 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:40.000000000 +0100 net

/lib/modules/5.6.3/drivers:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 char
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 net

/lib/modules/5.6.3/drivers/char:
total 12
-rw-r--r-- 1 root root 8820 2025-10-10 10:28:15.000000000 +0100 ticker.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:15.000000000 +0100 ticker.ko.plt

/lib/modules/5.6.3/drivers/net:
total 656
-rw-r--r-- 1 root root  39616 2025-10-10 10:30:40.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:30:40.000000000 +0100 ath8327.ko.plt
-rw-r--r-- 1 root root  25404 2025-10-10 10:30:40.000000000 +0100 aths16.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:30:40.000000000 +0100 aths16.ko.plt
-rw-r--r-- 1 root root  38592 2025-10-10 10:31:22.000000000 +0100 atl1c.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:31:22.000000000 +0100 atl1c.ko.plt
-rw-r--r-- 1 root root  10452 2025-10-10 10:29:53.000000000 +0100 fsl_pq_mdio.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:29:53.000000000 +0100 fsl_pq_mdio.ko.plt
-rw-r--r-- 1 root root  28080 2025-10-10 10:29:04.000000000 +0100 gianfar.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:29:04.000000000 +0100 gianfar.ko.plt
-rw-r--r-- 1 root root   9076 2025-10-10 10:31:40.000000000 +0100 imq.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:31:40.000000000 +0100 imq.ko.plt
-rw-r--r-- 1 root root  11084 2025-10-10 10:33:25.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:25.000000000 +0100 mpls_fp.ko.plt
-rw-r--r-- 1 root root 189592 2025-10-10 10:33:26.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:26.000000000 +0100 packet_hook.ko.plt
-rw-r--r-- 1 root root  67392 2025-10-10 10:29:30.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:29:30.000000000 +0100 phy_helper.ko.plt
-rw-r--r-- 1 root root  25108 2025-10-10 10:28:19.000000000 +0100 rb616.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:28:19.000000000 +0100 rb616.ko.plt
-rw-r--r-- 1 root root   3828 2025-10-10 10:31:36.000000000 +0100 sram.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:31:36.000000000 +0100 sram.ko.plt
-rw-r--r-- 1 root root  66864 2025-10-10 10:30:40.000000000 +0100 switch.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:30:40.000000000 +0100 switch.ko.plt
-rw-r--r-- 1 root root  39204 2025-10-10 10:29:56.000000000 +0100 ucc_geth.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:29:56.000000000 +0100 ucc_geth.ko.plt
-rw-r--r-- 1 root root  22068 2025-10-10 10:28:15.000000000 +0100 via-velocity.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:28:15.000000000 +0100 via-velocity.ko.plt
-rw-r--r-- 1 root root  62228 2025-10-10 10:33:20.000000000 +0100 vxlan2.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:20.000000000 +0100 vxlan2.ko.plt

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-10-10 10:52:40.000000000 +0100 arch
drwxr-xr-x  2 root root 4096 2025-10-10 10:52:40.000000000 +0100 crypto
drwxr-xr-x  7 root root 4096 2025-10-10 10:52:40.000000000 +0100 drivers
drwxr-xr-x 11 root root 4096 2025-10-10 10:52:40.000000000 +0100 fs
drwxr-xr-x  5 root root 4096 2025-10-10 10:52:40.000000000 +0100 lib
drwxr-xr-x 11 root root 4096 2025-10-10 10:52:40.000000000 +0100 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 powerpc

/lib/modules/5.6.3/kernel/arch/powerpc:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 oprofile

/lib/modules/5.6.3/kernel/arch/powerpc/oprofile:
total 40
-rw-r--r-- 1 root root 40608 2025-10-10 10:33:35.000000000 +0100 oprofile.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 oprofile.ko.plt

/lib/modules/5.6.3/kernel/crypto:
total 60
-rw-r--r-- 1 root root  3152 2025-10-10 10:33:35.000000000 +0100 arc4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 arc4.ko.plt
-rw-r--r-- 1 root root 14832 2025-10-10 10:33:35.000000000 +0100 ccm.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ccm.ko.plt
-rw-r--r-- 1 root root  5408 2025-10-10 10:33:35.000000000 +0100 cmac.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 cmac.ko.plt
-rw-r--r-- 1 root root  4088 2025-10-10 10:33:35.000000000 +0100 des_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 des_generic.ko.plt
-rw-r--r-- 1 root root  5420 2025-10-10 10:33:35.000000000 +0100 md4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 md4.ko.plt
-rw-r--r-- 1 root root  4200 2025-10-10 10:33:35.000000000 +0100 sha1_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 sha1_generic.ko.plt
-rw-r--r-- 1 root root  9208 2025-10-10 10:33:35.000000000 +0100 sha512_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 sha512_generic.ko.plt

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 ata
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:40.000000000 +0100 mmc
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:40.000000000 +0100 net
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 scsi
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 watchdog

/lib/modules/5.6.3/kernel/drivers/ata:
total 220
-rw-r--r-- 1 root root 211628 2025-10-10 10:33:34.000000000 +0100 libata.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:34.000000000 +0100 libata.ko.plt
-rw-r--r-- 1 root root  10504 2025-10-10 10:33:34.000000000 +0100 pata_rb_ppc.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:34.000000000 +0100 pata_rb_ppc.ko.plt

/lib/modules/5.6.3/kernel/drivers/mmc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 core
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 host

/lib/modules/5.6.3/kernel/drivers/mmc/core:
total 160
-rw-r--r-- 1 root root  38480 2025-10-10 10:33:34.000000000 +0100 mmc_block.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:34.000000000 +0100 mmc_block.ko.plt
-rw-r--r-- 1 root root 122172 2025-10-10 10:33:34.000000000 +0100 mmc_core.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:34.000000000 +0100 mmc_core.ko.plt

/lib/modules/5.6.3/kernel/drivers/mmc/host:
total 20
-rw-r--r-- 1 root root 14888 2025-10-10 10:33:34.000000000 +0100 mmc_spi.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 mmc_spi.ko.plt
-rw-r--r-- 1 root root  2900 2025-10-10 10:33:34.000000000 +0100 of_mmc_spi.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 of_mmc_spi.ko.plt

/lib/modules/5.6.3/kernel/drivers/net:
total 124
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 bonding
drwxr-xr-x 4 root root  4096 2025-10-10 10:52:40.000000000 +0100 ethernet
-rw-r--r-- 1 root root 37904 2025-10-10 10:33:36.000000000 +0100 macsec.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:36.000000000 +0100 macsec.ko.plt
-rw-r--r-- 1 root root 22108 2025-10-10 10:33:21.000000000 +0100 macvlan.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 macvlan.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 slip
-rw-r--r-- 1 root root 17768 2025-10-10 10:33:36.000000000 +0100 veth.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:36.000000000 +0100 veth.ko.plt
-rw-r--r-- 1 root root 20704 2025-10-10 10:33:36.000000000 +0100 vrf.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:36.000000000 +0100 vrf.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 144
-rw-r--r-- 1 root root 145084 2025-10-10 10:33:20.000000000 +0100 bonding.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:20.000000000 +0100 bonding.ko.plt

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 intel
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 via

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 40
-rw-r--r-- 1 root root 40676 2025-10-10 10:33:36.000000000 +0100 e100.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:36.000000000 +0100 e100.ko.plt

/lib/modules/5.6.3/kernel/drivers/net/ethernet/via:
total 32
-rw-r--r-- 1 root root 31940 2025-10-10 10:33:36.000000000 +0100 via-rhine.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:36.000000000 +0100 via-rhine.ko.plt

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6076 2025-10-10 10:33:36.000000000 +0100 slhc.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:36.000000000 +0100 slhc.ko.plt

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 100
-rw-r--r-- 1 root root 100660 2025-10-10 10:33:36.000000000 +0100 wireguard.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:36.000000000 +0100 wireguard.ko.plt

/lib/modules/5.6.3/kernel/drivers/scsi:
total 188
-rw-r--r-- 1 root root 143648 2025-10-10 10:33:34.000000000 +0100 scsi_mod.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:34.000000000 +0100 scsi_mod.ko.plt
-rw-r--r-- 1 root root  43756 2025-10-10 10:33:34.000000000 +0100 sd_mod.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:34.000000000 +0100 sd_mod.ko.plt

/lib/modules/5.6.3/kernel/drivers/watchdog:
total 8
-rw-r--r-- 1 root root 7048 2025-10-10 10:33:34.000000000 +0100 mpc8xxx_wdt.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:34.000000000 +0100 mpc8xxx_wdt.ko.plt

/lib/modules/5.6.3/kernel/fs:
total 44
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 cifs
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 exfat
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 ext4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 fat
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 fuse
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 jbd2
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 ksmbd
-rw-r--r-- 1 root root 7496 2025-10-10 10:33:35.000000000 +0100 mbcache.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 mbcache.ko.plt
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 nls
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 ntfs3

/lib/modules/5.6.3/kernel/fs/cifs:
total 520
-rw-r--r-- 1 root root 530684 2025-10-10 10:33:35.000000000 +0100 cifs.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 cifs.ko.plt

/lib/modules/5.6.3/kernel/fs/exfat:
total 80
-rw-r--r-- 1 root root 81900 2025-10-10 10:33:35.000000000 +0100 exfat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 exfat.ko.plt

/lib/modules/5.6.3/kernel/fs/ext4:
total 468
-rw-r--r-- 1 root root 476688 2025-10-10 10:33:35.000000000 +0100 ext4.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 ext4.ko.plt

/lib/modules/5.6.3/kernel/fs/fat:
total 92
-rw-r--r-- 1 root root 76448 2025-10-10 10:33:35.000000000 +0100 fat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 fat.ko.plt
-rw-r--r-- 1 root root 14124 2025-10-10 10:33:35.000000000 +0100 vfat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 vfat.ko.plt

/lib/modules/5.6.3/kernel/fs/fuse:
total 116
-rw-r--r-- 1 root root 117840 2025-10-10 10:33:35.000000000 +0100 fuse.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 fuse.ko.plt

/lib/modules/5.6.3/kernel/fs/jbd2:
total 80
-rw-r--r-- 1 root root 78356 2025-10-10 10:33:35.000000000 +0100 jbd2.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 jbd2.ko.plt

/lib/modules/5.6.3/kernel/fs/ksmbd:
total 260
-rw-r--r-- 1 root root 266152 2025-10-10 10:33:35.000000000 +0100 ksmbd.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 ksmbd.ko.plt

/lib/modules/5.6.3/kernel/fs/nls:
total 28
-rw-r--r-- 1 root root 8180 2025-10-10 10:33:35.000000000 +0100 nls_base.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 nls_base.ko.plt
-rw-r--r-- 1 root root 6684 2025-10-10 10:33:35.000000000 +0100 nls_cp437.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 nls_cp437.ko.plt
-rw-r--r-- 1 root root 5076 2025-10-10 10:33:35.000000000 +0100 nls_iso8859-1.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 nls_iso8859-1.ko.plt
-rw-r--r-- 1 root root 2880 2025-10-10 10:33:35.000000000 +0100 nls_utf8.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 nls_utf8.ko.plt

/lib/modules/5.6.3/kernel/fs/ntfs3:
total 232
-rw-r--r-- 1 root root 235900 2025-10-10 10:33:35.000000000 +0100 ntfs3.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 ntfs3.ko.plt

/lib/modules/5.6.3/kernel/lib:
total 52
-rw-r--r-- 1 root root 4524 2025-10-10 10:33:35.000000000 +0100 asn1_decoder.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 asn1_decoder.ko.plt
-rw-r--r-- 1 root root 3352 2025-10-10 10:33:36.000000000 +0100 crc-ccitt.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:36.000000000 +0100 crc-ccitt.ko.plt
-rw-r--r-- 1 root root 2572 2025-10-10 10:33:34.000000000 +0100 crc-itu-t.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:34.000000000 +0100 crc-itu-t.ko.plt
-rw-r--r-- 1 root root 2564 2025-10-10 10:33:35.000000000 +0100 crc16.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 crc16.ko.plt
-rw-r--r-- 1 root root 2288 2025-10-10 10:33:34.000000000 +0100 crc7.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:34.000000000 +0100 crc7.ko.plt
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 crypto
-rw-r--r-- 1 root root 4436 2025-10-10 10:33:35.000000000 +0100 oid_registry.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 oid_registry.ko.plt
-rw-r--r-- 1 root root 3708 2025-10-10 10:33:34.000000000 +0100 ts_bm.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:34.000000000 +0100 ts_bm.ko.plt
-rw-r--r-- 1 root root 3572 2025-10-10 10:33:34.000000000 +0100 ts_kmp.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:34.000000000 +0100 ts_kmp.ko.plt
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 72
-rw-r--r-- 1 root root  2196 2025-10-10 10:33:35.000000000 +0100 libarc4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libarc4.ko.plt
-rw-r--r-- 1 root root  7216 2025-10-10 10:33:35.000000000 +0100 libblake2s-generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libblake2s-generic.ko.plt
-rw-r--r-- 1 root root  4092 2025-10-10 10:33:35.000000000 +0100 libblake2s.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libblake2s.ko.plt
-rw-r--r-- 1 root root  2252 2025-10-10 10:33:35.000000000 +0100 libchacha.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libchacha.ko.plt
-rw-r--r-- 1 root root  7612 2025-10-10 10:33:35.000000000 +0100 libchacha20poly1305.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libchacha20poly1305.ko.plt
-rw-r--r-- 1 root root 10812 2025-10-10 10:33:35.000000000 +0100 libcurve25519-generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libcurve25519-generic.ko.plt
-rw-r--r-- 1 root root  1916 2025-10-10 10:33:35.000000000 +0100 libcurve25519.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libcurve25519.ko.plt
-rw-r--r-- 1 root root 18356 2025-10-10 10:33:35.000000000 +0100 libdes.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libdes.ko.plt
-rw-r--r-- 1 root root  4900 2025-10-10 10:33:35.000000000 +0100 libpoly1305.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libpoly1305.ko.plt

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19924 2025-10-10 10:33:36.000000000 +0100 zlib_deflate.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:36.000000000 +0100 zlib_deflate.ko.plt

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 15436 2025-10-10 10:33:36.000000000 +0100 zlib_inflate.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:36.000000000 +0100 zlib_inflate.ko.plt

/lib/modules/5.6.3/kernel/net:
total 36
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 802
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 8021q
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 ipv4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 ipv6
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 mpls
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 sched
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 xfrm

/lib/modules/5.6.3/kernel/net/802:
total 12
-rw-r--r-- 1 root root 11536 2025-10-10 10:33:36.000000000 +0100 mrp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:36.000000000 +0100 mrp.ko.plt

/lib/modules/5.6.3/kernel/net/8021q:
total 28
-rw-r--r-- 1 root root 28236 2025-10-10 10:33:21.000000000 +0100 8021q.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 8021q.ko.plt

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 88
-rw-r--r-- 1 root root  2660 2025-10-10 10:33:34.000000000 +0100 ebt_802_3.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_802_3.ko.plt
-rw-r--r-- 1 root root  3652 2025-10-10 10:33:34.000000000 +0100 ebt_arp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_arp.ko.plt
-rw-r--r-- 1 root root  3264 2025-10-10 10:33:34.000000000 +0100 ebt_arpreply.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_arpreply.ko.plt
-rw-r--r-- 1 root root  3240 2025-10-10 10:33:34.000000000 +0100 ebt_dnat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_dnat.ko.plt
-rw-r--r-- 1 root root  3684 2025-10-10 10:33:34.000000000 +0100 ebt_ip.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_ip.ko.plt
-rw-r--r-- 1 root root  3856 2025-10-10 10:33:34.000000000 +0100 ebt_ip6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_ip6.ko.plt
-rw-r--r-- 1 root root  4960 2025-10-10 10:33:34.000000000 +0100 ebt_limit.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_limit.ko.plt
-rw-r--r-- 1 root root  2600 2025-10-10 10:33:34.000000000 +0100 ebt_mark.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_mark.ko.plt
-rw-r--r-- 1 root root  2532 2025-10-10 10:33:34.000000000 +0100 ebt_mark_m.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_mark_m.ko.plt
-rw-r--r-- 1 root root  2500 2025-10-10 10:33:34.000000000 +0100 ebt_pkttype.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_pkttype.ko.plt
-rw-r--r-- 1 root root  3144 2025-10-10 10:33:34.000000000 +0100 ebt_redirect.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_redirect.ko.plt
-rw-r--r-- 1 root root  3104 2025-10-10 10:33:34.000000000 +0100 ebt_snat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_snat.ko.plt
-rw-r--r-- 1 root root  4076 2025-10-10 10:33:34.000000000 +0100 ebt_stp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_stp.ko.plt
-rw-r--r-- 1 root root  3052 2025-10-10 10:33:34.000000000 +0100 ebt_vlan.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_vlan.ko.plt
-rw-r--r-- 1 root root  3236 2025-10-10 10:33:34.000000000 +0100 ebtable_filter.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebtable_filter.ko.plt
-rw-r--r-- 1 root root  3236 2025-10-10 10:33:34.000000000 +0100 ebtable_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebtable_nat.ko.plt
-rw-r--r-- 1 root root 17064 2025-10-10 10:33:34.000000000 +0100 ebtables.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebtables.ko.plt

/lib/modules/5.6.3/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 18852 2025-10-10 10:33:36.000000000 +0100 ip_tunnel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:36.000000000 +0100 ip_tunnel.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 netfilter
-rw-r--r-- 1 root root 16112 2025-10-10 10:33:21.000000000 +0100 udp_tunnel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 udp_tunnel.ko.plt

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 80
-rw-r--r-- 1 root root 16092 2025-10-10 10:33:34.000000000 +0100 ip_tables.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ip_tables.ko.plt
-rw-r--r-- 1 root root  3852 2025-10-10 10:33:34.000000000 +0100 ipt_REJECT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ipt_REJECT.ko.plt
-rw-r--r-- 1 root root  4164 2025-10-10 10:33:34.000000000 +0100 iptable_filter.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 iptable_filter.ko.plt
-rw-r--r-- 1 root root  4280 2025-10-10 10:33:34.000000000 +0100 iptable_mangle.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 iptable_mangle.ko.plt
-rw-r--r-- 1 root root  3824 2025-10-10 10:33:34.000000000 +0100 iptable_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 iptable_nat.ko.plt
-rw-r--r-- 1 root root  4436 2025-10-10 10:33:34.000000000 +0100 iptable_raw.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 iptable_raw.ko.plt
-rw-r--r-- 1 root root  3824 2025-10-10 10:33:34.000000000 +0100 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_defrag_ipv4.ko.plt
-rw-r--r-- 1 root root 10708 2025-10-10 10:33:34.000000000 +0100 nf_nat_h323.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_h323.ko.plt
-rw-r--r-- 1 root root  5160 2025-10-10 10:33:34.000000000 +0100 nf_nat_pptp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_pptp.ko.plt
-rw-r--r-- 1 root root  4568 2025-10-10 10:33:34.000000000 +0100 nf_reject_ipv4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_reject_ipv4.ko.plt

/lib/modules/5.6.3/kernel/net/ipv6:
total 36
-rw-r--r-- 1 root root 10112 2025-10-10 10:33:35.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ah6.ko.plt
-rw-r--r-- 1 root root 13288 2025-10-10 10:33:35.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 esp6.ko.plt
-rw-r--r-- 1 root root  3592 2025-10-10 10:33:21.000000000 +0100 ip6_udp_tunnel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 ip6_udp_tunnel.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 72
-rw-r--r-- 1 root root 16332 2025-10-10 10:33:34.000000000 +0100 ip6_tables.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ip6_tables.ko.plt
-rw-r--r-- 1 root root  4364 2025-10-10 10:33:35.000000000 +0100 ip6t_NPT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6t_NPT.ko.plt
-rw-r--r-- 1 root root  3888 2025-10-10 10:33:35.000000000 +0100 ip6t_REJECT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6t_REJECT.ko.plt
-rw-r--r-- 1 root root  2788 2025-10-10 10:33:35.000000000 +0100 ip6t_eui64.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6t_eui64.ko.plt
-rw-r--r-- 1 root root  3212 2025-10-10 10:33:35.000000000 +0100 ip6t_ipv6header.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6t_ipv6header.ko.plt
-rw-r--r-- 1 root root  4212 2025-10-10 10:33:35.000000000 +0100 ip6table_filter.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6table_filter.ko.plt
-rw-r--r-- 1 root root  4448 2025-10-10 10:33:35.000000000 +0100 ip6table_mangle.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6table_mangle.ko.plt
-rw-r--r-- 1 root root  3828 2025-10-10 10:33:35.000000000 +0100 ip6table_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6table_nat.ko.plt
-rw-r--r-- 1 root root  4440 2025-10-10 10:33:35.000000000 +0100 ip6table_raw.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6table_raw.ko.plt
-rw-r--r-- 1 root root  5200 2025-10-10 10:33:35.000000000 +0100 nf_reject_ipv6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 nf_reject_ipv6.ko.plt

/lib/modules/5.6.3/kernel/net/mpls:
total 56
-rw-r--r-- 1 root root  5616 2025-10-10 10:33:36.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:36.000000000 +0100 mpls_iptunnel.ko.plt
-rw-r--r-- 1 root root 48176 2025-10-10 10:33:36.000000000 +0100 mpls_router.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:36.000000000 +0100 mpls_router.ko.plt

/lib/modules/5.6.3/kernel/net/netfilter:
total 436
-rw-r--r-- 1 root root 10400 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_ftp.ko.plt
-rw-r--r-- 1 root root 42784 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_h323.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_h323.ko.plt
-rw-r--r-- 1 root root  8216 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_irc.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_irc.ko.plt
-rw-r--r-- 1 root root 32260 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_netlink.ko.plt
-rw-r--r-- 1 root root  8276 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_pptp.ko.plt
-rw-r--r-- 1 root root  8424 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_rtsp.ko.plt
-rw-r--r-- 1 root root 28204 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_sip.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_sip.ko.plt
-rw-r--r-- 1 root root  6904 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_tftp.ko.plt
-rw-r--r-- 1 root root 31224 2025-10-10 10:33:34.000000000 +0100 nf_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat.ko.plt
-rw-r--r-- 1 root root  4776 2025-10-10 10:33:34.000000000 +0100 nf_nat_ftp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_ftp.ko.plt
-rw-r--r-- 1 root root  4492 2025-10-10 10:33:34.000000000 +0100 nf_nat_irc.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_irc.ko.plt
-rw-r--r-- 1 root root  7864 2025-10-10 10:33:34.000000000 +0100 nf_nat_rtsp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_rtsp.ko.plt
-rw-r--r-- 1 root root 12232 2025-10-10 10:33:34.000000000 +0100 nf_nat_sip.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_sip.ko.plt
-rw-r--r-- 1 root root  3400 2025-10-10 10:33:34.000000000 +0100 nf_nat_tftp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_tftp.ko.plt
-rw-r--r-- 1 root root  9692 2025-10-10 10:33:34.000000000 +0100 nfnetlink.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nfnetlink.ko.plt
-rw-r--r-- 1 root root 27560 2025-10-10 10:33:34.000000000 +0100 x_tables.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 x_tables.ko.plt
-rw-r--r-- 1 root root  7360 2025-10-10 10:33:34.000000000 +0100 xt_CT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_CT.ko.plt
-rw-r--r-- 1 root root  4248 2025-10-10 10:33:34.000000000 +0100 xt_DSCP.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_DSCP.ko.plt
-rw-r--r-- 1 root root  3628 2025-10-10 10:33:34.000000000 +0100 xt_HL.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_HL.ko.plt
-rw-r--r-- 1 root root  3692 2025-10-10 10:33:34.000000000 +0100 xt_MASQUERADE.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_MASQUERADE.ko.plt
-rw-r--r-- 1 root root  3920 2025-10-10 10:33:34.000000000 +0100 xt_NETMAP.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_NETMAP.ko.plt
-rw-r--r-- 1 root root  3236 2025-10-10 10:33:34.000000000 +0100 xt_REDIRECT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_REDIRECT.ko.plt
-rw-r--r-- 1 root root  6516 2025-10-10 10:33:34.000000000 +0100 xt_TCPMSS.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_TCPMSS.ko.plt
-rw-r--r-- 1 root root  5332 2025-10-10 10:33:34.000000000 +0100 xt_addrtype.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_addrtype.ko.plt
-rw-r--r-- 1 root root  4372 2025-10-10 10:33:34.000000000 +0100 xt_connbytes.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_connbytes.ko.plt
-rw-r--r-- 1 root root  5056 2025-10-10 10:33:34.000000000 +0100 xt_connmark.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_connmark.ko.plt
-rw-r--r-- 1 root root  5292 2025-10-10 10:33:34.000000000 +0100 xt_conntrack.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_conntrack.ko.plt
-rw-r--r-- 1 root root  3124 2025-10-10 10:33:34.000000000 +0100 xt_dscp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_dscp.ko.plt
-rw-r--r-- 1 root root 18272 2025-10-10 10:33:34.000000000 +0100 xt_hashlimit.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_hashlimit.ko.plt
-rw-r--r-- 1 root root  3604 2025-10-10 10:33:34.000000000 +0100 xt_helper.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_helper.ko.plt
-rw-r--r-- 1 root root  2868 2025-10-10 10:33:34.000000000 +0100 xt_hl.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_hl.ko.plt
-rw-r--r-- 1 root root  2772 2025-10-10 10:33:34.000000000 +0100 xt_length.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_length.ko.plt
-rw-r--r-- 1 root root  2604 2025-10-10 10:33:34.000000000 +0100 xt_mac.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_mac.ko.plt
-rw-r--r-- 1 root root  3080 2025-10-10 10:33:34.000000000 +0100 xt_mark.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_mark.ko.plt
-rw-r--r-- 1 root root  3564 2025-10-10 10:33:34.000000000 +0100 xt_multiport.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_multiport.ko.plt
-rw-r--r-- 1 root root  5496 2025-10-10 10:33:34.000000000 +0100 xt_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_nat.ko.plt
-rw-r--r-- 1 root root  3992 2025-10-10 10:33:34.000000000 +0100 xt_physdev.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_physdev.ko.plt
-rw-r--r-- 1 root root  4676 2025-10-10 10:33:34.000000000 +0100 xt_policy.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_policy.ko.plt
-rw-r--r-- 1 root root  2508 2025-10-10 10:33:34.000000000 +0100 xt_realm.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_realm.ko.plt
-rw-r--r-- 1 root root  3220 2025-10-10 10:33:34.000000000 +0100 xt_statistic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_statistic.ko.plt
-rw-r--r-- 1 root root  3116 2025-10-10 10:33:34.000000000 +0100 xt_string.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_string.ko.plt
-rw-r--r-- 1 root root  3240 2025-10-10 10:33:34.000000000 +0100 xt_tcpmss.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_tcpmss.ko.plt
-rw-r--r-- 1 root root  4220 2025-10-10 10:33:34.000000000 +0100 xt_tcpudp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_tcpudp.ko.plt

/lib/modules/5.6.3/kernel/net/sched:
total 96
-rw-r--r-- 1 root root 28108 2025-10-10 10:33:21.000000000 +0100 sch_cake.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 sch_cake.ko.plt
-rw-r--r-- 1 root root  8348 2025-10-10 10:33:21.000000000 +0100 sch_codel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 sch_codel.ko.plt
-rw-r--r-- 1 root root 11332 2025-10-10 10:33:21.000000000 +0100 sch_fq_codel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 sch_fq_codel.ko.plt
-rw-r--r-- 1 root root 29064 2025-10-10 10:33:21.000000000 +0100 sch_htb.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 sch_htb.ko.plt
-rw-r--r-- 1 root root 10260 2025-10-10 10:33:21.000000000 +0100 sch_red.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 sch_red.ko.plt

/lib/modules/5.6.3/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 8080 2025-10-10 10:33:21.000000000 +0100 xfrm_algo.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:21.000000000 +0100 xfrm_algo.ko.plt

/lib/modules/5.6.3/misc:
total 228
-rw-r--r-- 1 root root 10712 2025-10-10 10:28:17.000000000 +0100 btest.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:17.000000000 +0100 btest.ko.plt
-rw-r--r-- 1 root root  1768 2025-10-10 10:33:02.000000000 +0100 c2glue.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:02.000000000 +0100 c2glue.ko.plt
-rw-r--r-- 1 root root  6388 2025-10-10 10:32:56.000000000 +0100 dot1x.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:32:56.000000000 +0100 dot1x.ko.plt
-rw-r--r-- 1 root root  8528 2025-10-10 10:28:05.000000000 +0100 fancon.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:05.000000000 +0100 fancon.ko.plt
-rw-r--r-- 1 root root 48392 2025-10-10 10:28:48.000000000 +0100 flash.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:48.000000000 +0100 flash.ko.plt
-rw-r--r-- 1 root root  5748 2025-10-10 10:31:46.000000000 +0100 jiffies.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:46.000000000 +0100 jiffies.ko.plt
-rw-r--r-- 1 root root  3076 2025-10-10 10:30:59.000000000 +0100 ledgroup.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:30:59.000000000 +0100 ledgroup.ko.plt
-rw-r--r-- 1 root root 10736 2025-10-10 10:28:13.000000000 +0100 logring.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:13.000000000 +0100 logring.ko.plt
-rw-r--r-- 1 root root 25336 2025-10-10 10:28:55.000000000 +0100 mesh.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:55.000000000 +0100 mesh.ko.plt
-rw-r--r-- 1 root root  8972 2025-10-10 10:28:10.000000000 +0100 panics.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:10.000000000 +0100 panics.ko.plt
-rw-r--r-- 1 root root  9176 2025-10-10 10:31:45.000000000 +0100 rb.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:45.000000000 +0100 rb.ko.plt
-rw-r--r-- 1 root root  5896 2025-10-10 10:31:55.000000000 +0100 romon.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:55.000000000 +0100 romon.ko.plt
-rw-r--r-- 1 root root  5728 2025-10-10 10:28:50.000000000 +0100 snif.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:50.000000000 +0100 snif.ko.plt
-rw-r--r-- 1 root root 26592 2025-10-10 10:31:57.000000000 +0100 traffic_gen.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:57.000000000 +0100 traffic_gen.ko.plt
-rw-r--r-- 1 root root  6724 2025-10-10 10:28:46.000000000 +0100 ulog.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:46.000000000 +0100 ulog.ko.plt
-rw-r--r-- 1 root root 14208 2025-10-10 10:28:12.000000000 +0100 voltage.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:12.000000000 +0100 voltage.ko.plt

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 sched

/lib/modules/5.6.3/net/bridge:
total 232
-rw-r--r-- 1 root root 204948 2025-10-10 10:32:18.000000000 +0100 bridge2.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:32:18.000000000 +0100 bridge2.ko.plt
-rw-r--r-- 1 root root  18268 2025-10-10 10:32:17.000000000 +0100 bridge2_netfilter.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:32:16.000000000 +0100 bridge2_netfilter.ko.plt
-rw-r--r-- 1 root root   2608 2025-10-10 10:28:50.000000000 +0100 ebt_snif.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:28:50.000000000 +0100 ebt_snif.ko.plt
-rw-r--r-- 1 root root   2840 2025-10-10 10:28:46.000000000 +0100 ebt_ulog.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:28:46.000000000 +0100 ebt_ulog.ko.plt

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 28
-rw-r--r-- 1 root root 3460 2025-10-10 10:28:16.000000000 +0100 ipt_SAME.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:16.000000000 +0100 ipt_SAME.ko.plt
-rw-r--r-- 1 root root 5888 2025-10-10 10:28:17.000000000 +0100 ipt_TARPIT.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:17.000000000 +0100 ipt_TARPIT.ko.plt
-rw-r--r-- 1 root root 4164 2025-10-10 10:28:16.000000000 +0100 ipt_psd.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:16.000000000 +0100 ipt_psd.ko.plt
-rw-r--r-- 1 root root 2692 2025-10-10 10:28:50.000000000 +0100 ipt_snif.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:50.000000000 +0100 ipt_snif.ko.plt
-rw-r--r-- 1 root root 3292 2025-10-10 10:28:46.000000000 +0100 ipt_ulog.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:46.000000000 +0100 ipt_ulog.ko.plt

/lib/modules/5.6.3/net/netfilter:
total 60
-rw-r--r-- 1 root root  2008 2025-10-10 10:29:52.000000000 +0100 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:52.000000000 +0100 nf_conntrack_ipv4.ko.plt
-rw-r--r-- 1 root root  2008 2025-10-10 10:29:52.000000000 +0100 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:52.000000000 +0100 nf_conntrack_ipv6.ko.plt
-rw-r--r-- 1 root root 11200 2025-10-10 10:29:52.000000000 +0100 xt_ein.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:52.000000000 +0100 xt_ein.ko.plt
-rw-r--r-- 1 root root 13128 2025-10-10 10:28:23.000000000 +0100 xt_layer7.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:23.000000000 +0100 xt_layer7.ko.plt
-rw-r--r-- 1 root root 18448 2025-10-10 10:29:52.000000000 +0100 xt_misc.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:52.000000000 +0100 xt_misc.ko.plt
-rw-r--r-- 1 root root  3520 2025-10-10 10:28:36.000000000 +0100 xt_tls.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:36.000000000 +0100 xt_tls.ko.plt

/lib/modules/5.6.3/net/sched:
total 84
-rw-r--r-- 1 root root  5612 2025-10-10 10:28:37.000000000 +0100 cls_fw.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:37.000000000 +0100 cls_fw.ko.plt
-rw-r--r-- 1 root root 12432 2025-10-10 10:28:37.000000000 +0100 cls_linear.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:37.000000000 +0100 cls_linear.ko.plt
-rw-r--r-- 1 root root 12296 2025-10-10 10:28:57.000000000 +0100 proto_agr.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:57.000000000 +0100 proto_agr.ko.plt
-rw-r--r-- 1 root root 19196 2025-10-10 10:28:58.000000000 +0100 sch_agr.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:58.000000000 +0100 sch_agr.ko.plt
-rw-r--r-- 1 root root 11088 2025-10-10 10:28:21.000000000 +0100 sch_pcq.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:21.000000000 +0100 sch_pcq.ko.plt
-rw-r--r-- 1 root root  9116 2025-10-10 10:31:52.000000000 +0100 sch_sfq.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:52.000000000 +0100 sch_sfq.ko.plt

/lib/modules/5.6.3-440:
total 20
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:40.000000000 +0100 drivers
drwxr-xr-x 8 root root 4096 2025-10-10 10:52:40.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 misc
-rw-r--r-- 1 root root 1773 2025-10-10 10:35:34.000000000 +0100 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:40.000000000 +0100 net

/lib/modules/5.6.3-440/drivers:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 char
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 net

/lib/modules/5.6.3-440/drivers/char:
total 12
-rw-r--r-- 1 root root 8820 2025-10-10 10:28:15.000000000 +0100 ticker.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:15.000000000 +0100 ticker.ko.plt

/lib/modules/5.6.3-440/drivers/net:
total 600
-rw-r--r-- 1 root root  39616 2025-10-10 10:30:40.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:30:40.000000000 +0100 ath8327.ko.plt
-rw-r--r-- 1 root root  25404 2025-10-10 10:30:40.000000000 +0100 aths16.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:30:40.000000000 +0100 aths16.ko.plt
-rw-r--r-- 1 root root  38432 2025-10-10 10:31:23.000000000 +0100 atl1c.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:31:23.000000000 +0100 atl1c.ko.plt
-rw-r--r-- 1 root root  67548 2025-10-10 10:30:46.000000000 +0100 ibm_newemac.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:30:46.000000000 +0100 ibm_newemac.ko.plt
-rw-r--r-- 1 root root   9044 2025-10-10 10:31:40.000000000 +0100 imq.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:31:40.000000000 +0100 imq.ko.plt
-rw-r--r-- 1 root root 189288 2025-10-10 10:33:26.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:26.000000000 +0100 packet_hook.ko.plt
-rw-r--r-- 1 root root  67392 2025-10-10 10:29:30.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:29:30.000000000 +0100 phy_helper.ko.plt
-rw-r--r-- 1 root root  66672 2025-10-10 10:30:40.000000000 +0100 switch.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:30:40.000000000 +0100 switch.ko.plt
-rw-r--r-- 1 root root  22244 2025-10-10 10:28:15.000000000 +0100 via-velocity.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:28:15.000000000 +0100 via-velocity.ko.plt
-rw-r--r-- 1 root root  62228 2025-10-10 10:33:20.000000000 +0100 vxlan2.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:20.000000000 +0100 vxlan2.ko.plt

/lib/modules/5.6.3-440/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-10-10 10:52:40.000000000 +0100 arch
drwxr-xr-x  2 root root 4096 2025-10-10 10:52:40.000000000 +0100 crypto
drwxr-xr-x  3 root root 4096 2025-10-10 10:52:40.000000000 +0100 drivers
drwxr-xr-x 11 root root 4096 2025-10-10 10:52:40.000000000 +0100 fs
drwxr-xr-x  5 root root 4096 2025-10-10 10:52:40.000000000 +0100 lib
drwxr-xr-x 10 root root 4096 2025-10-10 10:52:40.000000000 +0100 net

/lib/modules/5.6.3-440/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 powerpc

/lib/modules/5.6.3-440/kernel/arch/powerpc:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 oprofile

/lib/modules/5.6.3-440/kernel/arch/powerpc/oprofile:
total 36
-rw-r--r-- 1 root root 32896 2025-10-10 10:33:35.000000000 +0100 oprofile.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 oprofile.ko.plt

/lib/modules/5.6.3-440/kernel/crypto:
total 64
-rw-r--r-- 1 root root  3184 2025-10-10 10:33:35.000000000 +0100 arc4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 arc4.ko.plt
-rw-r--r-- 1 root root 14864 2025-10-10 10:33:35.000000000 +0100 ccm.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ccm.ko.plt
-rw-r--r-- 1 root root  5408 2025-10-10 10:33:35.000000000 +0100 cmac.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 cmac.ko.plt
-rw-r--r-- 1 root root  4120 2025-10-10 10:33:35.000000000 +0100 des_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 des_generic.ko.plt
-rw-r--r-- 1 root root  5484 2025-10-10 10:33:35.000000000 +0100 md4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 md4.ko.plt
-rw-r--r-- 1 root root  4264 2025-10-10 10:33:35.000000000 +0100 sha1_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 sha1_generic.ko.plt
-rw-r--r-- 1 root root  9304 2025-10-10 10:33:35.000000000 +0100 sha512_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 sha512_generic.ko.plt

/lib/modules/5.6.3-440/kernel/drivers:
total 4
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:40.000000000 +0100 net

/lib/modules/5.6.3-440/kernel/drivers/net:
total 60
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 bonding
-rw-r--r-- 1 root root 22132 2025-10-10 10:33:21.000000000 +0100 macvlan.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 macvlan.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 slip
-rw-r--r-- 1 root root 20740 2025-10-10 10:29:51.000000000 +0100 vrf.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:51.000000000 +0100 vrf.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 wireguard

/lib/modules/5.6.3-440/kernel/drivers/net/bonding:
total 144
-rw-r--r-- 1 root root 145084 2025-10-10 10:33:21.000000000 +0100 bonding.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:21.000000000 +0100 bonding.ko.plt

/lib/modules/5.6.3-440/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6076 2025-10-10 10:29:48.000000000 +0100 slhc.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:29:48.000000000 +0100 slhc.ko.plt

/lib/modules/5.6.3-440/kernel/drivers/net/wireguard:
total 100
-rw-r--r-- 1 root root 100660 2025-10-10 10:29:55.000000000 +0100 wireguard.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:29:55.000000000 +0100 wireguard.ko.plt

/lib/modules/5.6.3-440/kernel/fs:
total 44
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 cifs
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 exfat
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 ext4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 fat
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 fuse
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 jbd2
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 ksmbd
-rw-r--r-- 1 root root 7496 2025-10-10 10:33:35.000000000 +0100 mbcache.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 mbcache.ko.plt
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 nls
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 ntfs3

/lib/modules/5.6.3-440/kernel/fs/cifs:
total 520
-rw-r--r-- 1 root root 530876 2025-10-10 10:33:35.000000000 +0100 cifs.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 cifs.ko.plt

/lib/modules/5.6.3-440/kernel/fs/exfat:
total 80
-rw-r--r-- 1 root root 81900 2025-10-10 10:33:35.000000000 +0100 exfat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 exfat.ko.plt

/lib/modules/5.6.3-440/kernel/fs/ext4:
total 468
-rw-r--r-- 1 root root 477032 2025-10-10 10:33:35.000000000 +0100 ext4.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 ext4.ko.plt

/lib/modules/5.6.3-440/kernel/fs/fat:
total 92
-rw-r--r-- 1 root root 76448 2025-10-10 10:33:35.000000000 +0100 fat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 fat.ko.plt
-rw-r--r-- 1 root root 14124 2025-10-10 10:33:35.000000000 +0100 vfat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 vfat.ko.plt

/lib/modules/5.6.3-440/kernel/fs/fuse:
total 116
-rw-r--r-- 1 root root 117936 2025-10-10 10:33:35.000000000 +0100 fuse.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 fuse.ko.plt

/lib/modules/5.6.3-440/kernel/fs/jbd2:
total 80
-rw-r--r-- 1 root root 78488 2025-10-10 10:33:35.000000000 +0100 jbd2.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 jbd2.ko.plt

/lib/modules/5.6.3-440/kernel/fs/ksmbd:
total 264
-rw-r--r-- 1 root root 266276 2025-10-10 10:33:35.000000000 +0100 ksmbd.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 ksmbd.ko.plt

/lib/modules/5.6.3-440/kernel/fs/nls:
total 28
-rw-r--r-- 1 root root 8180 2025-10-10 10:33:35.000000000 +0100 nls_base.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 nls_base.ko.plt
-rw-r--r-- 1 root root 6684 2025-10-10 10:33:35.000000000 +0100 nls_cp437.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 nls_cp437.ko.plt
-rw-r--r-- 1 root root 5076 2025-10-10 10:33:35.000000000 +0100 nls_iso8859-1.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 nls_iso8859-1.ko.plt
-rw-r--r-- 1 root root 2880 2025-10-10 10:33:35.000000000 +0100 nls_utf8.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 nls_utf8.ko.plt

/lib/modules/5.6.3-440/kernel/fs/ntfs3:
total 232
-rw-r--r-- 1 root root 236060 2025-10-10 10:33:35.000000000 +0100 ntfs3.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 ntfs3.ko.plt

/lib/modules/5.6.3-440/kernel/lib:
total 44
-rw-r--r-- 1 root root 4524 2025-10-10 10:33:35.000000000 +0100 asn1_decoder.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 asn1_decoder.ko.plt
-rw-r--r-- 1 root root 3352 2025-10-10 10:29:48.000000000 +0100 crc-ccitt.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:29:48.000000000 +0100 crc-ccitt.ko.plt
-rw-r--r-- 1 root root 2564 2025-10-10 10:33:35.000000000 +0100 crc16.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 crc16.ko.plt
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 crypto
-rw-r--r-- 1 root root 4436 2025-10-10 10:33:35.000000000 +0100 oid_registry.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 oid_registry.ko.plt
-rw-r--r-- 1 root root 3708 2025-10-10 10:33:34.000000000 +0100 ts_bm.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:34.000000000 +0100 ts_bm.ko.plt
-rw-r--r-- 1 root root 3572 2025-10-10 10:33:34.000000000 +0100 ts_kmp.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:34.000000000 +0100 ts_kmp.ko.plt
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 zlib_inflate

/lib/modules/5.6.3-440/kernel/lib/crypto:
total 72
-rw-r--r-- 1 root root  2196 2025-10-10 10:33:35.000000000 +0100 libarc4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libarc4.ko.plt
-rw-r--r-- 1 root root  7216 2025-10-10 10:33:35.000000000 +0100 libblake2s-generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libblake2s-generic.ko.plt
-rw-r--r-- 1 root root  4092 2025-10-10 10:33:35.000000000 +0100 libblake2s.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libblake2s.ko.plt
-rw-r--r-- 1 root root  2252 2025-10-10 10:33:35.000000000 +0100 libchacha.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libchacha.ko.plt
-rw-r--r-- 1 root root  7740 2025-10-10 10:33:35.000000000 +0100 libchacha20poly1305.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libchacha20poly1305.ko.plt
-rw-r--r-- 1 root root 10812 2025-10-10 10:33:35.000000000 +0100 libcurve25519-generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libcurve25519-generic.ko.plt
-rw-r--r-- 1 root root  1916 2025-10-10 10:33:35.000000000 +0100 libcurve25519.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libcurve25519.ko.plt
-rw-r--r-- 1 root root 18356 2025-10-10 10:33:35.000000000 +0100 libdes.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libdes.ko.plt
-rw-r--r-- 1 root root  4900 2025-10-10 10:33:35.000000000 +0100 libpoly1305.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libpoly1305.ko.plt

/lib/modules/5.6.3-440/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19924 2025-10-10 10:29:55.000000000 +0100 zlib_deflate.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:55.000000000 +0100 zlib_deflate.ko.plt

/lib/modules/5.6.3-440/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 15436 2025-10-10 10:29:55.000000000 +0100 zlib_inflate.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:55.000000000 +0100 zlib_inflate.ko.plt

/lib/modules/5.6.3-440/kernel/net:
total 32
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 802
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 8021q
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 ipv4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 ipv6
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 sched
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 xfrm

/lib/modules/5.6.3-440/kernel/net/802:
total 12
-rw-r--r-- 1 root root 11568 2025-10-10 10:29:57.000000000 +0100 mrp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:57.000000000 +0100 mrp.ko.plt

/lib/modules/5.6.3-440/kernel/net/8021q:
total 28
-rw-r--r-- 1 root root 28204 2025-10-10 10:33:21.000000000 +0100 8021q.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 8021q.ko.plt

/lib/modules/5.6.3-440/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 netfilter

/lib/modules/5.6.3-440/kernel/net/bridge/netfilter:
total 88
-rw-r--r-- 1 root root  2660 2025-10-10 10:33:34.000000000 +0100 ebt_802_3.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_802_3.ko.plt
-rw-r--r-- 1 root root  3652 2025-10-10 10:33:34.000000000 +0100 ebt_arp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_arp.ko.plt
-rw-r--r-- 1 root root  3264 2025-10-10 10:33:34.000000000 +0100 ebt_arpreply.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_arpreply.ko.plt
-rw-r--r-- 1 root root  3272 2025-10-10 10:33:34.000000000 +0100 ebt_dnat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_dnat.ko.plt
-rw-r--r-- 1 root root  3684 2025-10-10 10:33:34.000000000 +0100 ebt_ip.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_ip.ko.plt
-rw-r--r-- 1 root root  3856 2025-10-10 10:33:34.000000000 +0100 ebt_ip6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_ip6.ko.plt
-rw-r--r-- 1 root root  4960 2025-10-10 10:33:34.000000000 +0100 ebt_limit.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_limit.ko.plt
-rw-r--r-- 1 root root  2600 2025-10-10 10:33:34.000000000 +0100 ebt_mark.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_mark.ko.plt
-rw-r--r-- 1 root root  2532 2025-10-10 10:33:34.000000000 +0100 ebt_mark_m.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_mark_m.ko.plt
-rw-r--r-- 1 root root  2500 2025-10-10 10:33:34.000000000 +0100 ebt_pkttype.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_pkttype.ko.plt
-rw-r--r-- 1 root root  3144 2025-10-10 10:33:34.000000000 +0100 ebt_redirect.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_redirect.ko.plt
-rw-r--r-- 1 root root  3104 2025-10-10 10:33:34.000000000 +0100 ebt_snat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_snat.ko.plt
-rw-r--r-- 1 root root  4076 2025-10-10 10:33:34.000000000 +0100 ebt_stp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_stp.ko.plt
-rw-r--r-- 1 root root  3052 2025-10-10 10:33:34.000000000 +0100 ebt_vlan.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_vlan.ko.plt
-rw-r--r-- 1 root root  3236 2025-10-10 10:33:34.000000000 +0100 ebtable_filter.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebtable_filter.ko.plt
-rw-r--r-- 1 root root  3236 2025-10-10 10:33:34.000000000 +0100 ebtable_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebtable_nat.ko.plt
-rw-r--r-- 1 root root 17064 2025-10-10 10:33:34.000000000 +0100 ebtables.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebtables.ko.plt

/lib/modules/5.6.3-440/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 18884 2025-10-10 10:29:55.000000000 +0100 ip_tunnel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:55.000000000 +0100 ip_tunnel.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 netfilter
-rw-r--r-- 1 root root 16112 2025-10-10 10:33:21.000000000 +0100 udp_tunnel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 udp_tunnel.ko.plt

/lib/modules/5.6.3-440/kernel/net/ipv4/netfilter:
total 80
-rw-r--r-- 1 root root 16092 2025-10-10 10:33:34.000000000 +0100 ip_tables.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ip_tables.ko.plt
-rw-r--r-- 1 root root  3852 2025-10-10 10:33:34.000000000 +0100 ipt_REJECT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ipt_REJECT.ko.plt
-rw-r--r-- 1 root root  4164 2025-10-10 10:33:34.000000000 +0100 iptable_filter.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 iptable_filter.ko.plt
-rw-r--r-- 1 root root  4280 2025-10-10 10:33:34.000000000 +0100 iptable_mangle.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 iptable_mangle.ko.plt
-rw-r--r-- 1 root root  3824 2025-10-10 10:33:34.000000000 +0100 iptable_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 iptable_nat.ko.plt
-rw-r--r-- 1 root root  4436 2025-10-10 10:33:34.000000000 +0100 iptable_raw.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 iptable_raw.ko.plt
-rw-r--r-- 1 root root  3824 2025-10-10 10:33:34.000000000 +0100 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_defrag_ipv4.ko.plt
-rw-r--r-- 1 root root 10708 2025-10-10 10:33:34.000000000 +0100 nf_nat_h323.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_h323.ko.plt
-rw-r--r-- 1 root root  5160 2025-10-10 10:33:34.000000000 +0100 nf_nat_pptp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_pptp.ko.plt
-rw-r--r-- 1 root root  4568 2025-10-10 10:33:34.000000000 +0100 nf_reject_ipv4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_reject_ipv4.ko.plt

/lib/modules/5.6.3-440/kernel/net/ipv6:
total 36
-rw-r--r-- 1 root root 10112 2025-10-10 10:33:35.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ah6.ko.plt
-rw-r--r-- 1 root root 13288 2025-10-10 10:33:35.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 esp6.ko.plt
-rw-r--r-- 1 root root  3592 2025-10-10 10:33:21.000000000 +0100 ip6_udp_tunnel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 ip6_udp_tunnel.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 netfilter

/lib/modules/5.6.3-440/kernel/net/ipv6/netfilter:
total 72
-rw-r--r-- 1 root root 16332 2025-10-10 10:33:34.000000000 +0100 ip6_tables.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ip6_tables.ko.plt
-rw-r--r-- 1 root root  4364 2025-10-10 10:33:35.000000000 +0100 ip6t_NPT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6t_NPT.ko.plt
-rw-r--r-- 1 root root  3888 2025-10-10 10:33:35.000000000 +0100 ip6t_REJECT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6t_REJECT.ko.plt
-rw-r--r-- 1 root root  2788 2025-10-10 10:33:35.000000000 +0100 ip6t_eui64.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6t_eui64.ko.plt
-rw-r--r-- 1 root root  3212 2025-10-10 10:33:35.000000000 +0100 ip6t_ipv6header.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6t_ipv6header.ko.plt
-rw-r--r-- 1 root root  4212 2025-10-10 10:33:35.000000000 +0100 ip6table_filter.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6table_filter.ko.plt
-rw-r--r-- 1 root root  4448 2025-10-10 10:33:35.000000000 +0100 ip6table_mangle.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6table_mangle.ko.plt
-rw-r--r-- 1 root root  3828 2025-10-10 10:33:35.000000000 +0100 ip6table_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6table_nat.ko.plt
-rw-r--r-- 1 root root  4472 2025-10-10 10:33:35.000000000 +0100 ip6table_raw.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6table_raw.ko.plt
-rw-r--r-- 1 root root  5200 2025-10-10 10:33:35.000000000 +0100 nf_reject_ipv6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 nf_reject_ipv6.ko.plt

/lib/modules/5.6.3-440/kernel/net/netfilter:
total 432
-rw-r--r-- 1 root root 10400 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_ftp.ko.plt
-rw-r--r-- 1 root root 42784 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_h323.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_h323.ko.plt
-rw-r--r-- 1 root root  8216 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_irc.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_irc.ko.plt
-rw-r--r-- 1 root root 28504 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_netlink.ko.plt
-rw-r--r-- 1 root root  8308 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_pptp.ko.plt
-rw-r--r-- 1 root root  8456 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_rtsp.ko.plt
-rw-r--r-- 1 root root 28204 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_sip.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_sip.ko.plt
-rw-r--r-- 1 root root  6904 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_tftp.ko.plt
-rw-r--r-- 1 root root 31224 2025-10-10 10:33:34.000000000 +0100 nf_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat.ko.plt
-rw-r--r-- 1 root root  4776 2025-10-10 10:33:34.000000000 +0100 nf_nat_ftp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_ftp.ko.plt
-rw-r--r-- 1 root root  4492 2025-10-10 10:33:34.000000000 +0100 nf_nat_irc.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_irc.ko.plt
-rw-r--r-- 1 root root  7896 2025-10-10 10:33:34.000000000 +0100 nf_nat_rtsp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_rtsp.ko.plt
-rw-r--r-- 1 root root 12264 2025-10-10 10:33:34.000000000 +0100 nf_nat_sip.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_sip.ko.plt
-rw-r--r-- 1 root root  3400 2025-10-10 10:33:34.000000000 +0100 nf_nat_tftp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_tftp.ko.plt
-rw-r--r-- 1 root root  9488 2025-10-10 10:33:34.000000000 +0100 nfnetlink.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nfnetlink.ko.plt
-rw-r--r-- 1 root root 27592 2025-10-10 10:33:34.000000000 +0100 x_tables.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 x_tables.ko.plt
-rw-r--r-- 1 root root  6684 2025-10-10 10:33:34.000000000 +0100 xt_CT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_CT.ko.plt
-rw-r--r-- 1 root root  4248 2025-10-10 10:33:34.000000000 +0100 xt_DSCP.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_DSCP.ko.plt
-rw-r--r-- 1 root root  3628 2025-10-10 10:33:34.000000000 +0100 xt_HL.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_HL.ko.plt
-rw-r--r-- 1 root root  3692 2025-10-10 10:33:34.000000000 +0100 xt_MASQUERADE.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_MASQUERADE.ko.plt
-rw-r--r-- 1 root root  3952 2025-10-10 10:33:34.000000000 +0100 xt_NETMAP.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_NETMAP.ko.plt
-rw-r--r-- 1 root root  3236 2025-10-10 10:33:34.000000000 +0100 xt_REDIRECT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_REDIRECT.ko.plt
-rw-r--r-- 1 root root  6516 2025-10-10 10:33:34.000000000 +0100 xt_TCPMSS.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_TCPMSS.ko.plt
-rw-r--r-- 1 root root  5332 2025-10-10 10:33:34.000000000 +0100 xt_addrtype.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_addrtype.ko.plt
-rw-r--r-- 1 root root  4372 2025-10-10 10:33:34.000000000 +0100 xt_connbytes.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_connbytes.ko.plt
-rw-r--r-- 1 root root  4872 2025-10-10 10:33:34.000000000 +0100 xt_connmark.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_connmark.ko.plt
-rw-r--r-- 1 root root  5292 2025-10-10 10:33:34.000000000 +0100 xt_conntrack.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_conntrack.ko.plt
-rw-r--r-- 1 root root  3156 2025-10-10 10:33:34.000000000 +0100 xt_dscp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_dscp.ko.plt
-rw-r--r-- 1 root root 18272 2025-10-10 10:33:34.000000000 +0100 xt_hashlimit.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_hashlimit.ko.plt
-rw-r--r-- 1 root root  3604 2025-10-10 10:33:34.000000000 +0100 xt_helper.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_helper.ko.plt
-rw-r--r-- 1 root root  2868 2025-10-10 10:33:34.000000000 +0100 xt_hl.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_hl.ko.plt
-rw-r--r-- 1 root root  2772 2025-10-10 10:33:34.000000000 +0100 xt_length.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_length.ko.plt
-rw-r--r-- 1 root root  2604 2025-10-10 10:33:34.000000000 +0100 xt_mac.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_mac.ko.plt
-rw-r--r-- 1 root root  3080 2025-10-10 10:33:34.000000000 +0100 xt_mark.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_mark.ko.plt
-rw-r--r-- 1 root root  3596 2025-10-10 10:33:34.000000000 +0100 xt_multiport.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_multiport.ko.plt
-rw-r--r-- 1 root root  5496 2025-10-10 10:33:34.000000000 +0100 xt_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_nat.ko.plt
-rw-r--r-- 1 root root  3992 2025-10-10 10:33:34.000000000 +0100 xt_physdev.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_physdev.ko.plt
-rw-r--r-- 1 root root  4676 2025-10-10 10:33:34.000000000 +0100 xt_policy.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_policy.ko.plt
-rw-r--r-- 1 root root  2508 2025-10-10 10:33:34.000000000 +0100 xt_realm.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_realm.ko.plt
-rw-r--r-- 1 root root  3220 2025-10-10 10:33:34.000000000 +0100 xt_statistic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_statistic.ko.plt
-rw-r--r-- 1 root root  3116 2025-10-10 10:33:34.000000000 +0100 xt_string.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_string.ko.plt
-rw-r--r-- 1 root root  3240 2025-10-10 10:33:34.000000000 +0100 xt_tcpmss.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_tcpmss.ko.plt
-rw-r--r-- 1 root root  4220 2025-10-10 10:33:34.000000000 +0100 xt_tcpudp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_tcpudp.ko.plt

/lib/modules/5.6.3-440/kernel/net/sched:
total 96
-rw-r--r-- 1 root root 28108 2025-10-10 10:33:21.000000000 +0100 sch_cake.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 sch_cake.ko.plt
-rw-r--r-- 1 root root  8348 2025-10-10 10:33:21.000000000 +0100 sch_codel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 sch_codel.ko.plt
-rw-r--r-- 1 root root 11332 2025-10-10 10:33:21.000000000 +0100 sch_fq_codel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 sch_fq_codel.ko.plt
-rw-r--r-- 1 root root 29064 2025-10-10 10:33:21.000000000 +0100 sch_htb.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 sch_htb.ko.plt
-rw-r--r-- 1 root root 10260 2025-10-10 10:33:21.000000000 +0100 sch_red.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 sch_red.ko.plt

/lib/modules/5.6.3-440/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 8080 2025-10-10 10:33:21.000000000 +0100 xfrm_algo.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:21.000000000 +0100 xfrm_algo.ko.plt

/lib/modules/5.6.3-440/misc:
total 216
-rw-r--r-- 1 root root 10712 2025-10-10 10:28:17.000000000 +0100 btest.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:17.000000000 +0100 btest.ko.plt
-rw-r--r-- 1 root root  1768 2025-10-10 10:33:02.000000000 +0100 c2glue.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:02.000000000 +0100 c2glue.ko.plt
-rw-r--r-- 1 root root  6388 2025-10-10 10:32:56.000000000 +0100 dot1x.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:32:56.000000000 +0100 dot1x.ko.plt
-rw-r--r-- 1 root root 48392 2025-10-10 10:28:48.000000000 +0100 flash.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:48.000000000 +0100 flash.ko.plt
-rw-r--r-- 1 root root  5780 2025-10-10 10:31:46.000000000 +0100 jiffies.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:46.000000000 +0100 jiffies.ko.plt
-rw-r--r-- 1 root root  3108 2025-10-10 10:30:59.000000000 +0100 ledgroup.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:30:59.000000000 +0100 ledgroup.ko.plt
-rw-r--r-- 1 root root 10736 2025-10-10 10:28:13.000000000 +0100 logring.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:13.000000000 +0100 logring.ko.plt
-rw-r--r-- 1 root root 25336 2025-10-10 10:28:55.000000000 +0100 mesh.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:55.000000000 +0100 mesh.ko.plt
-rw-r--r-- 1 root root  9004 2025-10-10 10:28:10.000000000 +0100 panics.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:10.000000000 +0100 panics.ko.plt
-rw-r--r-- 1 root root  9220 2025-10-10 10:31:45.000000000 +0100 rb.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:45.000000000 +0100 rb.ko.plt
-rw-r--r-- 1 root root  5896 2025-10-10 10:31:55.000000000 +0100 romon.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:55.000000000 +0100 romon.ko.plt
-rw-r--r-- 1 root root  5728 2025-10-10 10:28:50.000000000 +0100 snif.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:50.000000000 +0100 snif.ko.plt
-rw-r--r-- 1 root root 26624 2025-10-10 10:31:57.000000000 +0100 traffic_gen.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:57.000000000 +0100 traffic_gen.ko.plt
-rw-r--r-- 1 root root  6724 2025-10-10 10:28:46.000000000 +0100 ulog.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:46.000000000 +0100 ulog.ko.plt
-rw-r--r-- 1 root root 12872 2025-10-10 10:28:12.000000000 +0100 voltage.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:12.000000000 +0100 voltage.ko.plt

/lib/modules/5.6.3-440/net:
total 16
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 sched

/lib/modules/5.6.3-440/net/bridge:
total 232
-rw-r--r-- 1 root root 204808 2025-10-10 10:32:19.000000000 +0100 bridge2.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:32:19.000000000 +0100 bridge2.ko.plt
-rw-r--r-- 1 root root  18268 2025-10-10 10:32:17.000000000 +0100 bridge2_netfilter.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:32:17.000000000 +0100 bridge2_netfilter.ko.plt
-rw-r--r-- 1 root root   2608 2025-10-10 10:28:50.000000000 +0100 ebt_snif.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:28:50.000000000 +0100 ebt_snif.ko.plt
-rw-r--r-- 1 root root   2840 2025-10-10 10:28:46.000000000 +0100 ebt_ulog.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:28:46.000000000 +0100 ebt_ulog.ko.plt

/lib/modules/5.6.3-440/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 netfilter

/lib/modules/5.6.3-440/net/ipv4/netfilter:
total 28
-rw-r--r-- 1 root root 3460 2025-10-10 10:28:16.000000000 +0100 ipt_SAME.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:16.000000000 +0100 ipt_SAME.ko.plt
-rw-r--r-- 1 root root 5888 2025-10-10 10:28:17.000000000 +0100 ipt_TARPIT.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:17.000000000 +0100 ipt_TARPIT.ko.plt
-rw-r--r-- 1 root root 4164 2025-10-10 10:28:16.000000000 +0100 ipt_psd.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:16.000000000 +0100 ipt_psd.ko.plt
-rw-r--r-- 1 root root 2692 2025-10-10 10:28:50.000000000 +0100 ipt_snif.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:50.000000000 +0100 ipt_snif.ko.plt
-rw-r--r-- 1 root root 3292 2025-10-10 10:28:46.000000000 +0100 ipt_ulog.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:46.000000000 +0100 ipt_ulog.ko.plt

/lib/modules/5.6.3-440/net/netfilter:
total 60
-rw-r--r-- 1 root root  2008 2025-10-10 10:29:52.000000000 +0100 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:52.000000000 +0100 nf_conntrack_ipv4.ko.plt
-rw-r--r-- 1 root root  2008 2025-10-10 10:29:52.000000000 +0100 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:52.000000000 +0100 nf_conntrack_ipv6.ko.plt
-rw-r--r-- 1 root root 11200 2025-10-10 10:29:52.000000000 +0100 xt_ein.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:52.000000000 +0100 xt_ein.ko.plt
-rw-r--r-- 1 root root 13128 2025-10-10 10:28:23.000000000 +0100 xt_layer7.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:23.000000000 +0100 xt_layer7.ko.plt
-rw-r--r-- 1 root root 18448 2025-10-10 10:29:52.000000000 +0100 xt_misc.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:52.000000000 +0100 xt_misc.ko.plt
-rw-r--r-- 1 root root  3520 2025-10-10 10:28:36.000000000 +0100 xt_tls.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:36.000000000 +0100 xt_tls.ko.plt

/lib/modules/5.6.3-440/net/sched:
total 84
-rw-r--r-- 1 root root  5612 2025-10-10 10:28:37.000000000 +0100 cls_fw.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:37.000000000 +0100 cls_fw.ko.plt
-rw-r--r-- 1 root root 12432 2025-10-10 10:28:37.000000000 +0100 cls_linear.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:37.000000000 +0100 cls_linear.ko.plt
-rw-r--r-- 1 root root 12328 2025-10-10 10:28:57.000000000 +0100 proto_agr.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:57.000000000 +0100 proto_agr.ko.plt
-rw-r--r-- 1 root root 19228 2025-10-10 10:28:58.000000000 +0100 sch_agr.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:58.000000000 +0100 sch_agr.ko.plt
-rw-r--r-- 1 root root 11088 2025-10-10 10:28:21.000000000 +0100 sch_pcq.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:21.000000000 +0100 sch_pcq.ko.plt
-rw-r--r-- 1 root root  9116 2025-10-10 10:31:53.000000000 +0100 sch_sfq.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:53.000000000 +0100 sch_sfq.ko.plt

/lib/modules/5.6.3-e500:
total 20
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:40.000000000 +0100 drivers
drwxr-xr-x 8 root root 4096 2025-10-10 10:52:40.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 misc
-rw-r--r-- 1 root root 1990 2025-10-10 10:35:34.000000000 +0100 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:40.000000000 +0100 net

/lib/modules/5.6.3-e500/drivers:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 char
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 net

/lib/modules/5.6.3-e500/drivers/char:
total 12
-rw-r--r-- 1 root root 8940 2025-10-10 10:28:15.000000000 +0100 ticker.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:15.000000000 +0100 ticker.ko.plt

/lib/modules/5.6.3-e500/drivers/net:
total 1948
-rw-r--r-- 1 root root   39616 2025-10-10 10:30:41.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:30:41.000000000 +0100 ath8327.ko.plt
-rw-r--r-- 1 root root   25404 2025-10-10 10:30:41.000000000 +0100 aths16.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:30:41.000000000 +0100 aths16.ko.plt
-rw-r--r-- 1 root root   38796 2025-10-10 10:31:23.000000000 +0100 atl1c.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:31:23.000000000 +0100 atl1c.ko.plt
-rw-r--r-- 1 root root 1392544 2025-10-10 10:31:19.000000000 +0100 dpa.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:31:19.000000000 +0100 dpa.ko.plt
-rw-r--r-- 1 root root   10452 2025-10-10 10:29:53.000000000 +0100 fsl_pq_mdio.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:29:53.000000000 +0100 fsl_pq_mdio.ko.plt
-rw-r--r-- 1 root root   28196 2025-10-10 10:29:04.000000000 +0100 gianfar.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:29:04.000000000 +0100 gianfar.ko.plt
-rw-r--r-- 1 root root    9044 2025-10-10 10:31:40.000000000 +0100 imq.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:31:40.000000000 +0100 imq.ko.plt
-rw-r--r-- 1 root root   11084 2025-10-10 10:33:25.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:33:25.000000000 +0100 mpls_fp.ko.plt
-rw-r--r-- 1 root root  189288 2025-10-10 10:33:26.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:33:26.000000000 +0100 packet_hook.ko.plt
-rw-r--r-- 1 root root   67472 2025-10-10 10:29:30.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:29:30.000000000 +0100 phy_helper.ko.plt
-rw-r--r-- 1 root root    3828 2025-10-10 10:31:36.000000000 +0100 sram.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:31:36.000000000 +0100 sram.ko.plt
-rw-r--r-- 1 root root   66672 2025-10-10 10:30:41.000000000 +0100 switch.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:30:41.000000000 +0100 switch.ko.plt
-rw-r--r-- 1 root root   22164 2025-10-10 10:28:15.000000000 +0100 via-velocity.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:28:15.000000000 +0100 via-velocity.ko.plt
-rw-r--r-- 1 root root   62228 2025-10-10 10:33:20.000000000 +0100 vxlan2.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:33:20.000000000 +0100 vxlan2.ko.plt

/lib/modules/5.6.3-e500/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-10-10 10:52:40.000000000 +0100 arch
drwxr-xr-x  2 root root 4096 2025-10-10 10:52:40.000000000 +0100 crypto
drwxr-xr-x  5 root root 4096 2025-10-10 10:52:40.000000000 +0100 drivers
drwxr-xr-x 11 root root 4096 2025-10-10 10:52:40.000000000 +0100 fs
drwxr-xr-x  5 root root 4096 2025-10-10 10:52:40.000000000 +0100 lib
drwxr-xr-x 12 root root 4096 2025-10-10 10:52:40.000000000 +0100 net

/lib/modules/5.6.3-e500/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 powerpc

/lib/modules/5.6.3-e500/kernel/arch/powerpc:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 oprofile

/lib/modules/5.6.3-e500/kernel/arch/powerpc/oprofile:
total 40
-rw-r--r-- 1 root root 38500 2025-10-10 10:33:35.000000000 +0100 oprofile.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 oprofile.ko.plt

/lib/modules/5.6.3-e500/kernel/crypto:
total 60
-rw-r--r-- 1 root root  3152 2025-10-10 10:33:35.000000000 +0100 arc4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 arc4.ko.plt
-rw-r--r-- 1 root root 14864 2025-10-10 10:33:35.000000000 +0100 ccm.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ccm.ko.plt
-rw-r--r-- 1 root root  5408 2025-10-10 10:33:35.000000000 +0100 cmac.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 cmac.ko.plt
-rw-r--r-- 1 root root  4088 2025-10-10 10:33:35.000000000 +0100 des_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 des_generic.ko.plt
-rw-r--r-- 1 root root  5420 2025-10-10 10:33:35.000000000 +0100 md4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 md4.ko.plt
-rw-r--r-- 1 root root  4232 2025-10-10 10:33:35.000000000 +0100 sha1_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 sha1_generic.ko.plt
-rw-r--r-- 1 root root  9208 2025-10-10 10:33:35.000000000 +0100 sha512_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 sha512_generic.ko.plt

/lib/modules/5.6.3-e500/kernel/drivers:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 crypto
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:40.000000000 +0100 mmc
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:40.000000000 +0100 net

/lib/modules/5.6.3-e500/kernel/drivers/crypto:
total 52
-rw-r--r-- 1 root root 49632 2025-10-10 10:33:35.000000000 +0100 talitos.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 talitos.ko.plt

/lib/modules/5.6.3-e500/kernel/drivers/mmc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 core
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 host

/lib/modules/5.6.3-e500/kernel/drivers/mmc/core:
total 160
-rw-r--r-- 1 root root  38448 2025-10-10 10:33:34.000000000 +0100 mmc_block.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:34.000000000 +0100 mmc_block.ko.plt
-rw-r--r-- 1 root root 122340 2025-10-10 10:33:34.000000000 +0100 mmc_core.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:34.000000000 +0100 mmc_core.ko.plt

/lib/modules/5.6.3-e500/kernel/drivers/mmc/host:
total 20
-rw-r--r-- 1 root root 15392 2025-10-10 10:33:34.000000000 +0100 mmc_spi.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 mmc_spi.ko.plt
-rw-r--r-- 1 root root  2900 2025-10-10 10:33:34.000000000 +0100 of_mmc_spi.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 of_mmc_spi.ko.plt

/lib/modules/5.6.3-e500/kernel/drivers/net:
total 180
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 bonding
-rw-r--r-- 1 root root 37632 2025-10-10 10:31:53.000000000 +0100 macsec.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:53.000000000 +0100 macsec.ko.plt
-rw-r--r-- 1 root root 22608 2025-10-10 10:33:22.000000000 +0100 macvlan.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:22.000000000 +0100 macvlan.ko.plt
-rw-r--r-- 1 root root 13172 2025-10-10 10:30:56.000000000 +0100 net_failover.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:30:56.000000000 +0100 net_failover.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 slip
-rw-r--r-- 1 root root 17832 2025-10-10 10:31:57.000000000 +0100 veth.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:57.000000000 +0100 veth.ko.plt
-rw-r--r-- 1 root root 41392 2025-10-10 10:31:37.000000000 +0100 virtio_net.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:37.000000000 +0100 virtio_net.ko.plt
-rw-r--r-- 1 root root 20772 2025-10-10 10:30:19.000000000 +0100 vrf.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:30:19.000000000 +0100 vrf.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 wireguard

/lib/modules/5.6.3-e500/kernel/drivers/net/bonding:
total 144
-rw-r--r-- 1 root root 145116 2025-10-10 10:33:21.000000000 +0100 bonding.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:21.000000000 +0100 bonding.ko.plt

/lib/modules/5.6.3-e500/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6076 2025-10-10 10:30:19.000000000 +0100 slhc.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:30:19.000000000 +0100 slhc.ko.plt

/lib/modules/5.6.3-e500/kernel/drivers/net/wireguard:
total 100
-rw-r--r-- 1 root root 100948 2025-10-10 10:30:31.000000000 +0100 wireguard.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:30:31.000000000 +0100 wireguard.ko.plt

/lib/modules/5.6.3-e500/kernel/fs:
total 44
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 cifs
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 exfat
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 ext4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 fat
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 fuse
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 jbd2
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 ksmbd
-rw-r--r-- 1 root root 7496 2025-10-10 10:33:35.000000000 +0100 mbcache.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 mbcache.ko.plt
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 nls
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 ntfs3

/lib/modules/5.6.3-e500/kernel/fs/cifs:
total 520
-rw-r--r-- 1 root root 531116 2025-10-10 10:33:35.000000000 +0100 cifs.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 cifs.ko.plt

/lib/modules/5.6.3-e500/kernel/fs/exfat:
total 84
-rw-r--r-- 1 root root 81932 2025-10-10 10:33:35.000000000 +0100 exfat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 exfat.ko.plt

/lib/modules/5.6.3-e500/kernel/fs/ext4:
total 468
-rw-r--r-- 1 root root 477208 2025-10-10 10:33:35.000000000 +0100 ext4.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 ext4.ko.plt

/lib/modules/5.6.3-e500/kernel/fs/fat:
total 92
-rw-r--r-- 1 root root 76728 2025-10-10 10:33:35.000000000 +0100 fat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 fat.ko.plt
-rw-r--r-- 1 root root 14124 2025-10-10 10:33:35.000000000 +0100 vfat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 vfat.ko.plt

/lib/modules/5.6.3-e500/kernel/fs/fuse:
total 116
-rw-r--r-- 1 root root 118184 2025-10-10 10:33:35.000000000 +0100 fuse.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 fuse.ko.plt

/lib/modules/5.6.3-e500/kernel/fs/jbd2:
total 80
-rw-r--r-- 1 root root 78452 2025-10-10 10:33:35.000000000 +0100 jbd2.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 jbd2.ko.plt

/lib/modules/5.6.3-e500/kernel/fs/ksmbd:
total 264
-rw-r--r-- 1 root root 266280 2025-10-10 10:33:35.000000000 +0100 ksmbd.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 ksmbd.ko.plt

/lib/modules/5.6.3-e500/kernel/fs/nls:
total 28
-rw-r--r-- 1 root root 8180 2025-10-10 10:33:35.000000000 +0100 nls_base.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 nls_base.ko.plt
-rw-r--r-- 1 root root 6684 2025-10-10 10:33:35.000000000 +0100 nls_cp437.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 nls_cp437.ko.plt
-rw-r--r-- 1 root root 5076 2025-10-10 10:33:35.000000000 +0100 nls_iso8859-1.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 nls_iso8859-1.ko.plt
-rw-r--r-- 1 root root 2880 2025-10-10 10:33:35.000000000 +0100 nls_utf8.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 nls_utf8.ko.plt

/lib/modules/5.6.3-e500/kernel/fs/ntfs3:
total 232
-rw-r--r-- 1 root root 236220 2025-10-10 10:33:35.000000000 +0100 ntfs3.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 ntfs3.ko.plt

/lib/modules/5.6.3-e500/kernel/lib:
total 48
-rw-r--r-- 1 root root 4524 2025-10-10 10:33:35.000000000 +0100 asn1_decoder.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 asn1_decoder.ko.plt
-rw-r--r-- 1 root root 3352 2025-10-10 10:30:19.000000000 +0100 crc-ccitt.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:30:19.000000000 +0100 crc-ccitt.ko.plt
-rw-r--r-- 1 root root 2604 2025-10-10 10:33:34.000000000 +0100 crc-itu-t.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:34.000000000 +0100 crc-itu-t.ko.plt
-rw-r--r-- 1 root root 2288 2025-10-10 10:33:34.000000000 +0100 crc7.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:34.000000000 +0100 crc7.ko.plt
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 crypto
-rw-r--r-- 1 root root 4436 2025-10-10 10:33:35.000000000 +0100 oid_registry.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 oid_registry.ko.plt
-rw-r--r-- 1 root root 3708 2025-10-10 10:33:34.000000000 +0100 ts_bm.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:34.000000000 +0100 ts_bm.ko.plt
-rw-r--r-- 1 root root 3572 2025-10-10 10:33:34.000000000 +0100 ts_kmp.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:34.000000000 +0100 ts_kmp.ko.plt
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 zlib_inflate

/lib/modules/5.6.3-e500/kernel/lib/crypto:
total 72
-rw-r--r-- 1 root root  2196 2025-10-10 10:33:35.000000000 +0100 libarc4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libarc4.ko.plt
-rw-r--r-- 1 root root  7216 2025-10-10 10:33:35.000000000 +0100 libblake2s-generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libblake2s-generic.ko.plt
-rw-r--r-- 1 root root  4092 2025-10-10 10:33:35.000000000 +0100 libblake2s.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libblake2s.ko.plt
-rw-r--r-- 1 root root  2252 2025-10-10 10:33:35.000000000 +0100 libchacha.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libchacha.ko.plt
-rw-r--r-- 1 root root  7740 2025-10-10 10:33:35.000000000 +0100 libchacha20poly1305.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libchacha20poly1305.ko.plt
-rw-r--r-- 1 root root 10812 2025-10-10 10:33:35.000000000 +0100 libcurve25519-generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libcurve25519-generic.ko.plt
-rw-r--r-- 1 root root  1916 2025-10-10 10:33:35.000000000 +0100 libcurve25519.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libcurve25519.ko.plt
-rw-r--r-- 1 root root 18356 2025-10-10 10:33:35.000000000 +0100 libdes.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libdes.ko.plt
-rw-r--r-- 1 root root  4900 2025-10-10 10:33:35.000000000 +0100 libpoly1305.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libpoly1305.ko.plt

/lib/modules/5.6.3-e500/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19924 2025-10-10 10:30:56.000000000 +0100 zlib_deflate.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:30:56.000000000 +0100 zlib_deflate.ko.plt

/lib/modules/5.6.3-e500/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 15436 2025-10-10 10:30:35.000000000 +0100 zlib_inflate.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:30:35.000000000 +0100 zlib_inflate.ko.plt

/lib/modules/5.6.3-e500/kernel/net:
total 40
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 802
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 8021q
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 bridge
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 core
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 ipv4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 ipv6
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 mpls
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 sched
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 xfrm

/lib/modules/5.6.3-e500/kernel/net/802:
total 12
-rw-r--r-- 1 root root 11568 2025-10-10 10:31:58.000000000 +0100 mrp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:58.000000000 +0100 mrp.ko.plt

/lib/modules/5.6.3-e500/kernel/net/8021q:
total 28
-rw-r--r-- 1 root root 28204 2025-10-10 10:33:21.000000000 +0100 8021q.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 8021q.ko.plt

/lib/modules/5.6.3-e500/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 netfilter

/lib/modules/5.6.3-e500/kernel/net/bridge/netfilter:
total 88
-rw-r--r-- 1 root root  2660 2025-10-10 10:33:34.000000000 +0100 ebt_802_3.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_802_3.ko.plt
-rw-r--r-- 1 root root  3652 2025-10-10 10:33:34.000000000 +0100 ebt_arp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_arp.ko.plt
-rw-r--r-- 1 root root  3264 2025-10-10 10:33:34.000000000 +0100 ebt_arpreply.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_arpreply.ko.plt
-rw-r--r-- 1 root root  3272 2025-10-10 10:33:34.000000000 +0100 ebt_dnat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_dnat.ko.plt
-rw-r--r-- 1 root root  3684 2025-10-10 10:33:34.000000000 +0100 ebt_ip.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_ip.ko.plt
-rw-r--r-- 1 root root  3856 2025-10-10 10:33:34.000000000 +0100 ebt_ip6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_ip6.ko.plt
-rw-r--r-- 1 root root  4992 2025-10-10 10:33:34.000000000 +0100 ebt_limit.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_limit.ko.plt
-rw-r--r-- 1 root root  2600 2025-10-10 10:33:34.000000000 +0100 ebt_mark.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_mark.ko.plt
-rw-r--r-- 1 root root  2532 2025-10-10 10:33:34.000000000 +0100 ebt_mark_m.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_mark_m.ko.plt
-rw-r--r-- 1 root root  2500 2025-10-10 10:33:34.000000000 +0100 ebt_pkttype.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_pkttype.ko.plt
-rw-r--r-- 1 root root  3144 2025-10-10 10:33:34.000000000 +0100 ebt_redirect.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_redirect.ko.plt
-rw-r--r-- 1 root root  3104 2025-10-10 10:33:34.000000000 +0100 ebt_snat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_snat.ko.plt
-rw-r--r-- 1 root root  4076 2025-10-10 10:33:34.000000000 +0100 ebt_stp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_stp.ko.plt
-rw-r--r-- 1 root root  3052 2025-10-10 10:33:34.000000000 +0100 ebt_vlan.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_vlan.ko.plt
-rw-r--r-- 1 root root  3236 2025-10-10 10:33:34.000000000 +0100 ebtable_filter.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebtable_filter.ko.plt
-rw-r--r-- 1 root root  3236 2025-10-10 10:33:34.000000000 +0100 ebtable_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebtable_nat.ko.plt
-rw-r--r-- 1 root root 17064 2025-10-10 10:33:34.000000000 +0100 ebtables.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebtables.ko.plt

/lib/modules/5.6.3-e500/kernel/net/core:
total 8
-rw-r--r-- 1 root root 7248 2025-10-10 10:30:56.000000000 +0100 failover.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:30:56.000000000 +0100 failover.ko.plt

/lib/modules/5.6.3-e500/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 18884 2025-10-10 10:30:32.000000000 +0100 ip_tunnel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:30:32.000000000 +0100 ip_tunnel.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 netfilter
-rw-r--r-- 1 root root 16112 2025-10-10 10:33:22.000000000 +0100 udp_tunnel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:22.000000000 +0100 udp_tunnel.ko.plt

/lib/modules/5.6.3-e500/kernel/net/ipv4/netfilter:
total 80
-rw-r--r-- 1 root root 16092 2025-10-10 10:33:34.000000000 +0100 ip_tables.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ip_tables.ko.plt
-rw-r--r-- 1 root root  3852 2025-10-10 10:33:34.000000000 +0100 ipt_REJECT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ipt_REJECT.ko.plt
-rw-r--r-- 1 root root  4196 2025-10-10 10:33:34.000000000 +0100 iptable_filter.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 iptable_filter.ko.plt
-rw-r--r-- 1 root root  4280 2025-10-10 10:33:34.000000000 +0100 iptable_mangle.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 iptable_mangle.ko.plt
-rw-r--r-- 1 root root  3824 2025-10-10 10:33:34.000000000 +0100 iptable_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 iptable_nat.ko.plt
-rw-r--r-- 1 root root  4468 2025-10-10 10:33:34.000000000 +0100 iptable_raw.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 iptable_raw.ko.plt
-rw-r--r-- 1 root root  3824 2025-10-10 10:33:34.000000000 +0100 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_defrag_ipv4.ko.plt
-rw-r--r-- 1 root root 10708 2025-10-10 10:33:34.000000000 +0100 nf_nat_h323.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_h323.ko.plt
-rw-r--r-- 1 root root  5160 2025-10-10 10:33:34.000000000 +0100 nf_nat_pptp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_pptp.ko.plt
-rw-r--r-- 1 root root  4568 2025-10-10 10:33:34.000000000 +0100 nf_reject_ipv4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_reject_ipv4.ko.plt

/lib/modules/5.6.3-e500/kernel/net/ipv6:
total 36
-rw-r--r-- 1 root root 10112 2025-10-10 10:33:35.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ah6.ko.plt
-rw-r--r-- 1 root root 13320 2025-10-10 10:33:35.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 esp6.ko.plt
-rw-r--r-- 1 root root  3592 2025-10-10 10:33:22.000000000 +0100 ip6_udp_tunnel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:22.000000000 +0100 ip6_udp_tunnel.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 netfilter

/lib/modules/5.6.3-e500/kernel/net/ipv6/netfilter:
total 72
-rw-r--r-- 1 root root 16332 2025-10-10 10:33:34.000000000 +0100 ip6_tables.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ip6_tables.ko.plt
-rw-r--r-- 1 root root  4364 2025-10-10 10:33:35.000000000 +0100 ip6t_NPT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6t_NPT.ko.plt
-rw-r--r-- 1 root root  3888 2025-10-10 10:33:35.000000000 +0100 ip6t_REJECT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6t_REJECT.ko.plt
-rw-r--r-- 1 root root  2788 2025-10-10 10:33:35.000000000 +0100 ip6t_eui64.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6t_eui64.ko.plt
-rw-r--r-- 1 root root  3212 2025-10-10 10:33:35.000000000 +0100 ip6t_ipv6header.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6t_ipv6header.ko.plt
-rw-r--r-- 1 root root  4212 2025-10-10 10:33:35.000000000 +0100 ip6table_filter.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6table_filter.ko.plt
-rw-r--r-- 1 root root  4480 2025-10-10 10:33:35.000000000 +0100 ip6table_mangle.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6table_mangle.ko.plt
-rw-r--r-- 1 root root  3828 2025-10-10 10:33:35.000000000 +0100 ip6table_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6table_nat.ko.plt
-rw-r--r-- 1 root root  4472 2025-10-10 10:33:35.000000000 +0100 ip6table_raw.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6table_raw.ko.plt
-rw-r--r-- 1 root root  5200 2025-10-10 10:33:35.000000000 +0100 nf_reject_ipv6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 nf_reject_ipv6.ko.plt

/lib/modules/5.6.3-e500/kernel/net/mpls:
total 56
-rw-r--r-- 1 root root  5648 2025-10-10 10:31:45.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:45.000000000 +0100 mpls_iptunnel.ko.plt
-rw-r--r-- 1 root root 48360 2025-10-10 10:31:45.000000000 +0100 mpls_router.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:45.000000000 +0100 mpls_router.ko.plt

/lib/modules/5.6.3-e500/kernel/net/netfilter:
total 432
-rw-r--r-- 1 root root 10432 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_ftp.ko.plt
-rw-r--r-- 1 root root 42784 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_h323.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_h323.ko.plt
-rw-r--r-- 1 root root  8216 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_irc.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_irc.ko.plt
-rw-r--r-- 1 root root 28536 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_netlink.ko.plt
-rw-r--r-- 1 root root  8308 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_pptp.ko.plt
-rw-r--r-- 1 root root  8456 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_rtsp.ko.plt
-rw-r--r-- 1 root root 28204 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_sip.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_sip.ko.plt
-rw-r--r-- 1 root root  6904 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_tftp.ko.plt
-rw-r--r-- 1 root root 31256 2025-10-10 10:33:34.000000000 +0100 nf_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat.ko.plt
-rw-r--r-- 1 root root  4776 2025-10-10 10:33:34.000000000 +0100 nf_nat_ftp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_ftp.ko.plt
-rw-r--r-- 1 root root  4492 2025-10-10 10:33:34.000000000 +0100 nf_nat_irc.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_irc.ko.plt
-rw-r--r-- 1 root root  7896 2025-10-10 10:33:34.000000000 +0100 nf_nat_rtsp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_rtsp.ko.plt
-rw-r--r-- 1 root root 12264 2025-10-10 10:33:34.000000000 +0100 nf_nat_sip.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_sip.ko.plt
-rw-r--r-- 1 root root  3400 2025-10-10 10:33:34.000000000 +0100 nf_nat_tftp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_tftp.ko.plt
-rw-r--r-- 1 root root  9488 2025-10-10 10:33:34.000000000 +0100 nfnetlink.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nfnetlink.ko.plt
-rw-r--r-- 1 root root 27592 2025-10-10 10:33:34.000000000 +0100 x_tables.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 x_tables.ko.plt
-rw-r--r-- 1 root root  6684 2025-10-10 10:33:34.000000000 +0100 xt_CT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_CT.ko.plt
-rw-r--r-- 1 root root  4248 2025-10-10 10:33:34.000000000 +0100 xt_DSCP.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_DSCP.ko.plt
-rw-r--r-- 1 root root  3628 2025-10-10 10:33:34.000000000 +0100 xt_HL.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_HL.ko.plt
-rw-r--r-- 1 root root  3692 2025-10-10 10:33:34.000000000 +0100 xt_MASQUERADE.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_MASQUERADE.ko.plt
-rw-r--r-- 1 root root  3952 2025-10-10 10:33:34.000000000 +0100 xt_NETMAP.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_NETMAP.ko.plt
-rw-r--r-- 1 root root  3236 2025-10-10 10:33:34.000000000 +0100 xt_REDIRECT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_REDIRECT.ko.plt
-rw-r--r-- 1 root root  6516 2025-10-10 10:33:34.000000000 +0100 xt_TCPMSS.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_TCPMSS.ko.plt
-rw-r--r-- 1 root root  5332 2025-10-10 10:33:34.000000000 +0100 xt_addrtype.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_addrtype.ko.plt
-rw-r--r-- 1 root root  4404 2025-10-10 10:33:34.000000000 +0100 xt_connbytes.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_connbytes.ko.plt
-rw-r--r-- 1 root root  4872 2025-10-10 10:33:34.000000000 +0100 xt_connmark.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_connmark.ko.plt
-rw-r--r-- 1 root root  5292 2025-10-10 10:33:34.000000000 +0100 xt_conntrack.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_conntrack.ko.plt
-rw-r--r-- 1 root root  3156 2025-10-10 10:33:34.000000000 +0100 xt_dscp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_dscp.ko.plt
-rw-r--r-- 1 root root 18272 2025-10-10 10:33:34.000000000 +0100 xt_hashlimit.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_hashlimit.ko.plt
-rw-r--r-- 1 root root  3604 2025-10-10 10:33:34.000000000 +0100 xt_helper.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_helper.ko.plt
-rw-r--r-- 1 root root  2868 2025-10-10 10:33:34.000000000 +0100 xt_hl.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_hl.ko.plt
-rw-r--r-- 1 root root  2772 2025-10-10 10:33:34.000000000 +0100 xt_length.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_length.ko.plt
-rw-r--r-- 1 root root  2604 2025-10-10 10:33:34.000000000 +0100 xt_mac.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_mac.ko.plt
-rw-r--r-- 1 root root  3080 2025-10-10 10:33:34.000000000 +0100 xt_mark.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_mark.ko.plt
-rw-r--r-- 1 root root  3596 2025-10-10 10:33:34.000000000 +0100 xt_multiport.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_multiport.ko.plt
-rw-r--r-- 1 root root  5496 2025-10-10 10:33:34.000000000 +0100 xt_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_nat.ko.plt
-rw-r--r-- 1 root root  3992 2025-10-10 10:33:34.000000000 +0100 xt_physdev.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_physdev.ko.plt
-rw-r--r-- 1 root root  4676 2025-10-10 10:33:34.000000000 +0100 xt_policy.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_policy.ko.plt
-rw-r--r-- 1 root root  2508 2025-10-10 10:33:34.000000000 +0100 xt_realm.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_realm.ko.plt
-rw-r--r-- 1 root root  3220 2025-10-10 10:33:34.000000000 +0100 xt_statistic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_statistic.ko.plt
-rw-r--r-- 1 root root  3116 2025-10-10 10:33:34.000000000 +0100 xt_string.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_string.ko.plt
-rw-r--r-- 1 root root  3240 2025-10-10 10:33:34.000000000 +0100 xt_tcpmss.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_tcpmss.ko.plt
-rw-r--r-- 1 root root  4220 2025-10-10 10:33:34.000000000 +0100 xt_tcpudp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_tcpudp.ko.plt

/lib/modules/5.6.3-e500/kernel/net/sched:
total 96
-rw-r--r-- 1 root root 28108 2025-10-10 10:33:22.000000000 +0100 sch_cake.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:22.000000000 +0100 sch_cake.ko.plt
-rw-r--r-- 1 root root  8348 2025-10-10 10:33:22.000000000 +0100 sch_codel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:22.000000000 +0100 sch_codel.ko.plt
-rw-r--r-- 1 root root 11364 2025-10-10 10:33:22.000000000 +0100 sch_fq_codel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:22.000000000 +0100 sch_fq_codel.ko.plt
-rw-r--r-- 1 root root 28904 2025-10-10 10:33:21.000000000 +0100 sch_htb.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:21.000000000 +0100 sch_htb.ko.plt
-rw-r--r-- 1 root root 10260 2025-10-10 10:33:22.000000000 +0100 sch_red.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:22.000000000 +0100 sch_red.ko.plt

/lib/modules/5.6.3-e500/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 8080 2025-10-10 10:33:22.000000000 +0100 xfrm_algo.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:22.000000000 +0100 xfrm_algo.ko.plt

/lib/modules/5.6.3-e500/misc:
total 232
-rw-r--r-- 1 root root 10712 2025-10-10 10:28:17.000000000 +0100 btest.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:17.000000000 +0100 btest.ko.plt
-rw-r--r-- 1 root root  1768 2025-10-10 10:33:02.000000000 +0100 c2glue.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:02.000000000 +0100 c2glue.ko.plt
-rw-r--r-- 1 root root  6388 2025-10-10 10:32:56.000000000 +0100 dot1x.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:32:56.000000000 +0100 dot1x.ko.plt
-rw-r--r-- 1 root root  8612 2025-10-10 10:28:05.000000000 +0100 fancon.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:05.000000000 +0100 fancon.ko.plt
-rw-r--r-- 1 root root 49404 2025-10-10 10:28:48.000000000 +0100 flash.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:48.000000000 +0100 flash.ko.plt
-rw-r--r-- 1 root root  5780 2025-10-10 10:31:46.000000000 +0100 jiffies.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:46.000000000 +0100 jiffies.ko.plt
-rw-r--r-- 1 root root  3108 2025-10-10 10:30:59.000000000 +0100 ledgroup.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:30:59.000000000 +0100 ledgroup.ko.plt
-rw-r--r-- 1 root root 10736 2025-10-10 10:28:13.000000000 +0100 logring.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:13.000000000 +0100 logring.ko.plt
-rw-r--r-- 1 root root 25336 2025-10-10 10:28:55.000000000 +0100 mesh.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:55.000000000 +0100 mesh.ko.plt
-rw-r--r-- 1 root root  9004 2025-10-10 10:28:10.000000000 +0100 panics.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:10.000000000 +0100 panics.ko.plt
-rw-r--r-- 1 root root  9272 2025-10-10 10:31:46.000000000 +0100 rb.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:46.000000000 +0100 rb.ko.plt
-rw-r--r-- 1 root root  5896 2025-10-10 10:31:55.000000000 +0100 romon.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:55.000000000 +0100 romon.ko.plt
-rw-r--r-- 1 root root  5728 2025-10-10 10:28:50.000000000 +0100 snif.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:50.000000000 +0100 snif.ko.plt
-rw-r--r-- 1 root root 26624 2025-10-10 10:31:57.000000000 +0100 traffic_gen.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:57.000000000 +0100 traffic_gen.ko.plt
-rw-r--r-- 1 root root  6724 2025-10-10 10:28:46.000000000 +0100 ulog.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:46.000000000 +0100 ulog.ko.plt
-rw-r--r-- 1 root root 14252 2025-10-10 10:28:12.000000000 +0100 voltage.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:12.000000000 +0100 voltage.ko.plt

/lib/modules/5.6.3-e500/net:
total 16
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 sched

/lib/modules/5.6.3-e500/net/bridge:
total 232
-rw-r--r-- 1 root root 204808 2025-10-10 10:32:19.000000000 +0100 bridge2.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:32:19.000000000 +0100 bridge2.ko.plt
-rw-r--r-- 1 root root  18268 2025-10-10 10:32:19.000000000 +0100 bridge2_netfilter.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:32:19.000000000 +0100 bridge2_netfilter.ko.plt
-rw-r--r-- 1 root root   2608 2025-10-10 10:28:50.000000000 +0100 ebt_snif.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:28:50.000000000 +0100 ebt_snif.ko.plt
-rw-r--r-- 1 root root   2840 2025-10-10 10:28:46.000000000 +0100 ebt_ulog.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:28:46.000000000 +0100 ebt_ulog.ko.plt

/lib/modules/5.6.3-e500/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 netfilter

/lib/modules/5.6.3-e500/net/ipv4/netfilter:
total 28
-rw-r--r-- 1 root root 3460 2025-10-10 10:28:16.000000000 +0100 ipt_SAME.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:16.000000000 +0100 ipt_SAME.ko.plt
-rw-r--r-- 1 root root 5888 2025-10-10 10:28:17.000000000 +0100 ipt_TARPIT.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:17.000000000 +0100 ipt_TARPIT.ko.plt
-rw-r--r-- 1 root root 4164 2025-10-10 10:28:16.000000000 +0100 ipt_psd.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:16.000000000 +0100 ipt_psd.ko.plt
-rw-r--r-- 1 root root 2692 2025-10-10 10:28:50.000000000 +0100 ipt_snif.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:50.000000000 +0100 ipt_snif.ko.plt
-rw-r--r-- 1 root root 3292 2025-10-10 10:28:46.000000000 +0100 ipt_ulog.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:46.000000000 +0100 ipt_ulog.ko.plt

/lib/modules/5.6.3-e500/net/netfilter:
total 60
-rw-r--r-- 1 root root  2008 2025-10-10 10:29:53.000000000 +0100 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:53.000000000 +0100 nf_conntrack_ipv4.ko.plt
-rw-r--r-- 1 root root  2008 2025-10-10 10:29:53.000000000 +0100 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:53.000000000 +0100 nf_conntrack_ipv6.ko.plt
-rw-r--r-- 1 root root 11200 2025-10-10 10:29:53.000000000 +0100 xt_ein.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:53.000000000 +0100 xt_ein.ko.plt
-rw-r--r-- 1 root root 13128 2025-10-10 10:28:23.000000000 +0100 xt_layer7.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:23.000000000 +0100 xt_layer7.ko.plt
-rw-r--r-- 1 root root 18448 2025-10-10 10:29:53.000000000 +0100 xt_misc.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:53.000000000 +0100 xt_misc.ko.plt
-rw-r--r-- 1 root root  3520 2025-10-10 10:28:36.000000000 +0100 xt_tls.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:36.000000000 +0100 xt_tls.ko.plt

/lib/modules/5.6.3-e500/net/sched:
total 84
-rw-r--r-- 1 root root  5612 2025-10-10 10:28:38.000000000 +0100 cls_fw.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:38.000000000 +0100 cls_fw.ko.plt
-rw-r--r-- 1 root root 12432 2025-10-10 10:28:38.000000000 +0100 cls_linear.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:38.000000000 +0100 cls_linear.ko.plt
-rw-r--r-- 1 root root 12328 2025-10-10 10:28:58.000000000 +0100 proto_agr.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:58.000000000 +0100 proto_agr.ko.plt
-rw-r--r-- 1 root root 19228 2025-10-10 10:28:59.000000000 +0100 sch_agr.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:59.000000000 +0100 sch_agr.ko.plt
-rw-r--r-- 1 root root 11088 2025-10-10 10:28:21.000000000 +0100 sch_pcq.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:21.000000000 +0100 sch_pcq.ko.plt
-rw-r--r-- 1 root root  9116 2025-10-10 10:31:53.000000000 +0100 sch_sfq.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:53.000000000 +0100 sch_sfq.ko.plt

/lib/modules/5.6.3-smp:
total 20
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:40.000000000 +0100 drivers
drwxr-xr-x 8 root root 4096 2025-10-10 10:52:40.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 misc
-rw-r--r-- 1 root root 2139 2025-10-10 10:35:35.000000000 +0100 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:40.000000000 +0100 net

/lib/modules/5.6.3-smp/drivers:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 char
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 net

/lib/modules/5.6.3-smp/drivers/char:
total 12
-rw-r--r-- 1 root root 9056 2025-10-10 10:28:15.000000000 +0100 ticker.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:15.000000000 +0100 ticker.ko.plt

/lib/modules/5.6.3-smp/drivers/net:
total 1972
-rw-r--r-- 1 root root   39976 2025-10-10 10:30:41.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:30:41.000000000 +0100 ath8327.ko.plt
-rw-r--r-- 1 root root   25556 2025-10-10 10:30:41.000000000 +0100 aths16.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:30:41.000000000 +0100 aths16.ko.plt
-rw-r--r-- 1 root root   41096 2025-10-10 10:31:23.000000000 +0100 atl1c.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:31:23.000000000 +0100 atl1c.ko.plt
-rw-r--r-- 1 root root 1396624 2025-10-10 10:31:19.000000000 +0100 dpa.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:31:19.000000000 +0100 dpa.ko.plt
-rw-r--r-- 1 root root    9844 2025-10-10 10:29:53.000000000 +0100 fsl_pq_mdio.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:29:53.000000000 +0100 fsl_pq_mdio.ko.plt
-rw-r--r-- 1 root root   29484 2025-10-10 10:29:04.000000000 +0100 gianfar.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:29:04.000000000 +0100 gianfar.ko.plt
-rw-r--r-- 1 root root    9540 2025-10-10 10:31:40.000000000 +0100 imq.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:31:40.000000000 +0100 imq.ko.plt
-rw-r--r-- 1 root root   12192 2025-10-10 10:33:26.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:33:26.000000000 +0100 mpls_fp.ko.plt
-rw-r--r-- 1 root root  204432 2025-10-10 10:33:26.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:33:26.000000000 +0100 packet_hook.ko.plt
-rw-r--r-- 1 root root   67600 2025-10-10 10:29:30.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:29:30.000000000 +0100 phy_helper.ko.plt
-rw-r--r-- 1 root root    3860 2025-10-10 10:31:36.000000000 +0100 sram.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:31:36.000000000 +0100 sram.ko.plt
-rw-r--r-- 1 root root   69200 2025-10-10 10:30:41.000000000 +0100 switch.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:30:41.000000000 +0100 switch.ko.plt
-rw-r--r-- 1 root root   22760 2025-10-10 10:28:15.000000000 +0100 via-velocity.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:28:15.000000000 +0100 via-velocity.ko.plt
-rw-r--r-- 1 root root   63872 2025-10-10 10:33:20.000000000 +0100 vxlan2.ko
-rw-r--r-- 1 root root       0 2025-10-10 10:33:20.000000000 +0100 vxlan2.ko.plt

/lib/modules/5.6.3-smp/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-10-10 10:52:40.000000000 +0100 arch
drwxr-xr-x  2 root root 4096 2025-10-10 10:52:40.000000000 +0100 crypto
drwxr-xr-x  5 root root 4096 2025-10-10 10:52:40.000000000 +0100 drivers
drwxr-xr-x 11 root root 4096 2025-10-10 10:52:40.000000000 +0100 fs
drwxr-xr-x  6 root root 4096 2025-10-10 10:52:40.000000000 +0100 lib
drwxr-xr-x 12 root root 4096 2025-10-10 10:52:40.000000000 +0100 net

/lib/modules/5.6.3-smp/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 powerpc

/lib/modules/5.6.3-smp/kernel/arch/powerpc:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 oprofile

/lib/modules/5.6.3-smp/kernel/arch/powerpc/oprofile:
total 44
-rw-r--r-- 1 root root 41800 2025-10-10 10:33:35.000000000 +0100 oprofile.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 oprofile.ko.plt

/lib/modules/5.6.3-smp/kernel/crypto:
total 80
-rw-r--r-- 1 root root  3184 2025-10-10 10:33:35.000000000 +0100 arc4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 arc4.ko.plt
-rw-r--r-- 1 root root 14896 2025-10-10 10:33:35.000000000 +0100 ccm.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ccm.ko.plt
-rw-r--r-- 1 root root  5440 2025-10-10 10:33:35.000000000 +0100 cmac.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 cmac.ko.plt
-rw-r--r-- 1 root root  4120 2025-10-10 10:33:35.000000000 +0100 des_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 des_generic.ko.plt
-rw-r--r-- 1 root root  5452 2025-10-10 10:33:35.000000000 +0100 md4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 md4.ko.plt
-rw-r--r-- 1 root root 15132 2025-10-10 10:33:35.000000000 +0100 rsa_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 rsa_generic.ko.plt
-rw-r--r-- 1 root root  4264 2025-10-10 10:33:35.000000000 +0100 sha1_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 sha1_generic.ko.plt
-rw-r--r-- 1 root root  9240 2025-10-10 10:33:35.000000000 +0100 sha512_generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 sha512_generic.ko.plt

/lib/modules/5.6.3-smp/kernel/drivers:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 crypto
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:40.000000000 +0100 mmc
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:40.000000000 +0100 net

/lib/modules/5.6.3-smp/kernel/drivers/crypto:
total 56
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 caam
-rw-r--r-- 1 root root 50368 2025-10-10 10:33:35.000000000 +0100 talitos.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 talitos.ko.plt

/lib/modules/5.6.3-smp/kernel/drivers/crypto/caam:
total 176
-rw-r--r-- 1 root root  11600 2025-10-10 10:33:35.000000000 +0100 caam.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 caam.ko.plt
-rw-r--r-- 1 root root 121476 2025-10-10 10:33:35.000000000 +0100 caam_jr.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 caam_jr.ko.plt
-rw-r--r-- 1 root root  16584 2025-10-10 10:33:35.000000000 +0100 caamalg_desc.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 caamalg_desc.ko.plt
-rw-r--r-- 1 root root   4772 2025-10-10 10:33:35.000000000 +0100 caamhash_desc.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 caamhash_desc.ko.plt
-rw-r--r-- 1 root root  13924 2025-10-10 10:33:35.000000000 +0100 error.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 error.ko.plt

/lib/modules/5.6.3-smp/kernel/drivers/mmc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 core
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 host

/lib/modules/5.6.3-smp/kernel/drivers/mmc/core:
total 160
-rw-r--r-- 1 root root  39184 2025-10-10 10:33:34.000000000 +0100 mmc_block.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:34.000000000 +0100 mmc_block.ko.plt
-rw-r--r-- 1 root root 122872 2025-10-10 10:33:34.000000000 +0100 mmc_core.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:34.000000000 +0100 mmc_core.ko.plt

/lib/modules/5.6.3-smp/kernel/drivers/mmc/host:
total 20
-rw-r--r-- 1 root root 15456 2025-10-10 10:33:34.000000000 +0100 mmc_spi.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 mmc_spi.ko.plt
-rw-r--r-- 1 root root  2932 2025-10-10 10:33:34.000000000 +0100 of_mmc_spi.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 of_mmc_spi.ko.plt

/lib/modules/5.6.3-smp/kernel/drivers/net:
total 184
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 bonding
-rw-r--r-- 1 root root 42296 2025-10-10 10:32:54.000000000 +0100 macsec.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:32:54.000000000 +0100 macsec.ko.plt
-rw-r--r-- 1 root root 23736 2025-10-10 10:33:22.000000000 +0100 macvlan.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:22.000000000 +0100 macvlan.ko.plt
-rw-r--r-- 1 root root 13864 2025-10-10 10:32:52.000000000 +0100 net_failover.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:32:52.000000000 +0100 net_failover.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 slip
-rw-r--r-- 1 root root 19268 2025-10-10 10:32:54.000000000 +0100 veth.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:32:54.000000000 +0100 veth.ko.plt
-rw-r--r-- 1 root root 43428 2025-10-10 10:32:53.000000000 +0100 virtio_net.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:32:53.000000000 +0100 virtio_net.ko.plt
-rw-r--r-- 1 root root 22244 2025-10-10 10:32:30.000000000 +0100 vrf.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:32:30.000000000 +0100 vrf.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 wireguard

/lib/modules/5.6.3-smp/kernel/drivers/net/bonding:
total 144
-rw-r--r-- 1 root root 145744 2025-10-10 10:33:22.000000000 +0100 bonding.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:22.000000000 +0100 bonding.ko.plt

/lib/modules/5.6.3-smp/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6108 2025-10-10 10:32:01.000000000 +0100 slhc.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:32:01.000000000 +0100 slhc.ko.plt

/lib/modules/5.6.3-smp/kernel/drivers/net/wireguard:
total 104
-rw-r--r-- 1 root root 104248 2025-10-10 10:32:30.000000000 +0100 wireguard.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:32:30.000000000 +0100 wireguard.ko.plt

/lib/modules/5.6.3-smp/kernel/fs:
total 48
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 cifs
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 exfat
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 ext4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 fat
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 fuse
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 jbd2
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 ksmbd
-rw-r--r-- 1 root root 8448 2025-10-10 10:33:35.000000000 +0100 mbcache.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 mbcache.ko.plt
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 nls
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 ntfs3

/lib/modules/5.6.3-smp/kernel/fs/cifs:
total 532
-rw-r--r-- 1 root root 542252 2025-10-10 10:33:35.000000000 +0100 cifs.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 cifs.ko.plt

/lib/modules/5.6.3-smp/kernel/fs/exfat:
total 84
-rw-r--r-- 1 root root 83892 2025-10-10 10:33:35.000000000 +0100 exfat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 exfat.ko.plt

/lib/modules/5.6.3-smp/kernel/fs/ext4:
total 480
-rw-r--r-- 1 root root 490136 2025-10-10 10:33:35.000000000 +0100 ext4.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 ext4.ko.plt

/lib/modules/5.6.3-smp/kernel/fs/fat:
total 96
-rw-r--r-- 1 root root 78648 2025-10-10 10:33:35.000000000 +0100 fat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 fat.ko.plt
-rw-r--r-- 1 root root 14344 2025-10-10 10:33:35.000000000 +0100 vfat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 vfat.ko.plt

/lib/modules/5.6.3-smp/kernel/fs/fuse:
total 124
-rw-r--r-- 1 root root 123112 2025-10-10 10:33:35.000000000 +0100 fuse.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 fuse.ko.plt

/lib/modules/5.6.3-smp/kernel/fs/jbd2:
total 84
-rw-r--r-- 1 root root 85248 2025-10-10 10:33:35.000000000 +0100 jbd2.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 jbd2.ko.plt

/lib/modules/5.6.3-smp/kernel/fs/ksmbd:
total 268
-rw-r--r-- 1 root root 271720 2025-10-10 10:33:35.000000000 +0100 ksmbd.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 ksmbd.ko.plt

/lib/modules/5.6.3-smp/kernel/fs/nls:
total 32
-rw-r--r-- 1 root root 8764 2025-10-10 10:33:35.000000000 +0100 nls_base.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 nls_base.ko.plt
-rw-r--r-- 1 root root 6716 2025-10-10 10:33:35.000000000 +0100 nls_cp437.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 nls_cp437.ko.plt
-rw-r--r-- 1 root root 5108 2025-10-10 10:33:35.000000000 +0100 nls_iso8859-1.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 nls_iso8859-1.ko.plt
-rw-r--r-- 1 root root 2912 2025-10-10 10:33:35.000000000 +0100 nls_utf8.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 nls_utf8.ko.plt

/lib/modules/5.6.3-smp/kernel/fs/ntfs3:
total 232
-rw-r--r-- 1 root root 237192 2025-10-10 10:33:35.000000000 +0100 ntfs3.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:33:35.000000000 +0100 ntfs3.ko.plt

/lib/modules/5.6.3-smp/kernel/lib:
total 52
-rw-r--r-- 1 root root 4556 2025-10-10 10:33:35.000000000 +0100 asn1_decoder.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 asn1_decoder.ko.plt
-rw-r--r-- 1 root root 3384 2025-10-10 10:32:01.000000000 +0100 crc-ccitt.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:32:01.000000000 +0100 crc-ccitt.ko.plt
-rw-r--r-- 1 root root 2636 2025-10-10 10:33:34.000000000 +0100 crc-itu-t.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:34.000000000 +0100 crc-itu-t.ko.plt
-rw-r--r-- 1 root root 2352 2025-10-10 10:33:34.000000000 +0100 crc7.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:34.000000000 +0100 crc7.ko.plt
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 crypto
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 mpi
-rw-r--r-- 1 root root 4468 2025-10-10 10:33:35.000000000 +0100 oid_registry.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:35.000000000 +0100 oid_registry.ko.plt
-rw-r--r-- 1 root root 3740 2025-10-10 10:33:34.000000000 +0100 ts_bm.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:34.000000000 +0100 ts_bm.ko.plt
-rw-r--r-- 1 root root 3604 2025-10-10 10:33:34.000000000 +0100 ts_kmp.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:34.000000000 +0100 ts_kmp.ko.plt
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 zlib_inflate

/lib/modules/5.6.3-smp/kernel/lib/crypto:
total 76
-rw-r--r-- 1 root root  2228 2025-10-10 10:33:35.000000000 +0100 libarc4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libarc4.ko.plt
-rw-r--r-- 1 root root  7248 2025-10-10 10:33:35.000000000 +0100 libblake2s-generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libblake2s-generic.ko.plt
-rw-r--r-- 1 root root  4124 2025-10-10 10:33:35.000000000 +0100 libblake2s.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libblake2s.ko.plt
-rw-r--r-- 1 root root  2284 2025-10-10 10:33:35.000000000 +0100 libchacha.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libchacha.ko.plt
-rw-r--r-- 1 root root  7772 2025-10-10 10:33:35.000000000 +0100 libchacha20poly1305.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libchacha20poly1305.ko.plt
-rw-r--r-- 1 root root 10844 2025-10-10 10:33:35.000000000 +0100 libcurve25519-generic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libcurve25519-generic.ko.plt
-rw-r--r-- 1 root root  1948 2025-10-10 10:33:35.000000000 +0100 libcurve25519.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libcurve25519.ko.plt
-rw-r--r-- 1 root root 18388 2025-10-10 10:33:35.000000000 +0100 libdes.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libdes.ko.plt
-rw-r--r-- 1 root root  4932 2025-10-10 10:33:35.000000000 +0100 libpoly1305.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 libpoly1305.ko.plt

/lib/modules/5.6.3-smp/kernel/lib/mpi:
total 20
-rw-r--r-- 1 root root 19536 2025-10-10 10:33:35.000000000 +0100 mpi.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 mpi.ko.plt

/lib/modules/5.6.3-smp/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19956 2025-10-10 10:32:52.000000000 +0100 zlib_deflate.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:32:52.000000000 +0100 zlib_deflate.ko.plt

/lib/modules/5.6.3-smp/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 15468 2025-10-10 10:32:48.000000000 +0100 zlib_inflate.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:32:48.000000000 +0100 zlib_inflate.ko.plt

/lib/modules/5.6.3-smp/kernel/net:
total 40
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 802
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 8021q
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 bridge
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 core
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 ipv4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 ipv6
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 mpls
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 sched
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 xfrm

/lib/modules/5.6.3-smp/kernel/net/802:
total 12
-rw-r--r-- 1 root root 11964 2025-10-10 10:32:55.000000000 +0100 mrp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:32:55.000000000 +0100 mrp.ko.plt

/lib/modules/5.6.3-smp/kernel/net/8021q:
total 32
-rw-r--r-- 1 root root 29184 2025-10-10 10:33:22.000000000 +0100 8021q.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:22.000000000 +0100 8021q.ko.plt

/lib/modules/5.6.3-smp/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 netfilter

/lib/modules/5.6.3-smp/kernel/net/bridge/netfilter:
total 92
-rw-r--r-- 1 root root  2692 2025-10-10 10:33:34.000000000 +0100 ebt_802_3.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_802_3.ko.plt
-rw-r--r-- 1 root root  3684 2025-10-10 10:33:34.000000000 +0100 ebt_arp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_arp.ko.plt
-rw-r--r-- 1 root root  3296 2025-10-10 10:33:34.000000000 +0100 ebt_arpreply.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_arpreply.ko.plt
-rw-r--r-- 1 root root  3304 2025-10-10 10:33:34.000000000 +0100 ebt_dnat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_dnat.ko.plt
-rw-r--r-- 1 root root  3716 2025-10-10 10:33:34.000000000 +0100 ebt_ip.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_ip.ko.plt
-rw-r--r-- 1 root root  3888 2025-10-10 10:33:34.000000000 +0100 ebt_ip6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_ip6.ko.plt
-rw-r--r-- 1 root root  5088 2025-10-10 10:33:34.000000000 +0100 ebt_limit.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_limit.ko.plt
-rw-r--r-- 1 root root  2632 2025-10-10 10:33:34.000000000 +0100 ebt_mark.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_mark.ko.plt
-rw-r--r-- 1 root root  2564 2025-10-10 10:33:34.000000000 +0100 ebt_mark_m.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_mark_m.ko.plt
-rw-r--r-- 1 root root  2564 2025-10-10 10:33:34.000000000 +0100 ebt_pkttype.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_pkttype.ko.plt
-rw-r--r-- 1 root root  3176 2025-10-10 10:33:34.000000000 +0100 ebt_redirect.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_redirect.ko.plt
-rw-r--r-- 1 root root  3136 2025-10-10 10:33:34.000000000 +0100 ebt_snat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_snat.ko.plt
-rw-r--r-- 1 root root  4140 2025-10-10 10:33:34.000000000 +0100 ebt_stp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_stp.ko.plt
-rw-r--r-- 1 root root  3084 2025-10-10 10:33:34.000000000 +0100 ebt_vlan.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebt_vlan.ko.plt
-rw-r--r-- 1 root root  3268 2025-10-10 10:33:34.000000000 +0100 ebtable_filter.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebtable_filter.ko.plt
-rw-r--r-- 1 root root  3268 2025-10-10 10:33:34.000000000 +0100 ebtable_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebtable_nat.ko.plt
-rw-r--r-- 1 root root 17800 2025-10-10 10:33:34.000000000 +0100 ebtables.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ebtables.ko.plt

/lib/modules/5.6.3-smp/kernel/net/core:
total 8
-rw-r--r-- 1 root root 7936 2025-10-10 10:32:52.000000000 +0100 failover.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:32:52.000000000 +0100 failover.ko.plt

/lib/modules/5.6.3-smp/kernel/net/ipv4:
total 44
-rw-r--r-- 1 root root 19492 2025-10-10 10:32:46.000000000 +0100 ip_tunnel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:32:46.000000000 +0100 ip_tunnel.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 netfilter
-rw-r--r-- 1 root root 16400 2025-10-10 10:33:22.000000000 +0100 udp_tunnel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:22.000000000 +0100 udp_tunnel.ko.plt

/lib/modules/5.6.3-smp/kernel/net/ipv4/netfilter:
total 84
-rw-r--r-- 1 root root 17160 2025-10-10 10:33:34.000000000 +0100 ip_tables.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ip_tables.ko.plt
-rw-r--r-- 1 root root  3884 2025-10-10 10:33:34.000000000 +0100 ipt_REJECT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ipt_REJECT.ko.plt
-rw-r--r-- 1 root root  4228 2025-10-10 10:33:34.000000000 +0100 iptable_filter.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 iptable_filter.ko.plt
-rw-r--r-- 1 root root  4344 2025-10-10 10:33:34.000000000 +0100 iptable_mangle.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 iptable_mangle.ko.plt
-rw-r--r-- 1 root root  3856 2025-10-10 10:33:34.000000000 +0100 iptable_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 iptable_nat.ko.plt
-rw-r--r-- 1 root root  4500 2025-10-10 10:33:34.000000000 +0100 iptable_raw.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 iptable_raw.ko.plt
-rw-r--r-- 1 root root  3856 2025-10-10 10:33:34.000000000 +0100 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_defrag_ipv4.ko.plt
-rw-r--r-- 1 root root 10740 2025-10-10 10:33:34.000000000 +0100 nf_nat_h323.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_h323.ko.plt
-rw-r--r-- 1 root root  5224 2025-10-10 10:33:34.000000000 +0100 nf_nat_pptp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_pptp.ko.plt
-rw-r--r-- 1 root root  4600 2025-10-10 10:33:34.000000000 +0100 nf_reject_ipv4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_reject_ipv4.ko.plt

/lib/modules/5.6.3-smp/kernel/net/ipv6:
total 36
-rw-r--r-- 1 root root 10300 2025-10-10 10:33:35.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ah6.ko.plt
-rw-r--r-- 1 root root 13560 2025-10-10 10:33:35.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 esp6.ko.plt
-rw-r--r-- 1 root root  3748 2025-10-10 10:33:22.000000000 +0100 ip6_udp_tunnel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:22.000000000 +0100 ip6_udp_tunnel.ko.plt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:40.000000000 +0100 netfilter

/lib/modules/5.6.3-smp/kernel/net/ipv6/netfilter:
total 76
-rw-r--r-- 1 root root 17368 2025-10-10 10:33:34.000000000 +0100 ip6_tables.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 ip6_tables.ko.plt
-rw-r--r-- 1 root root  4428 2025-10-10 10:33:35.000000000 +0100 ip6t_NPT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6t_NPT.ko.plt
-rw-r--r-- 1 root root  3952 2025-10-10 10:33:35.000000000 +0100 ip6t_REJECT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6t_REJECT.ko.plt
-rw-r--r-- 1 root root  2820 2025-10-10 10:33:35.000000000 +0100 ip6t_eui64.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6t_eui64.ko.plt
-rw-r--r-- 1 root root  3244 2025-10-10 10:33:35.000000000 +0100 ip6t_ipv6header.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6t_ipv6header.ko.plt
-rw-r--r-- 1 root root  4244 2025-10-10 10:33:35.000000000 +0100 ip6table_filter.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6table_filter.ko.plt
-rw-r--r-- 1 root root  4512 2025-10-10 10:33:35.000000000 +0100 ip6table_mangle.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6table_mangle.ko.plt
-rw-r--r-- 1 root root  3860 2025-10-10 10:33:35.000000000 +0100 ip6table_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6table_nat.ko.plt
-rw-r--r-- 1 root root  4504 2025-10-10 10:33:35.000000000 +0100 ip6table_raw.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 ip6table_raw.ko.plt
-rw-r--r-- 1 root root  5232 2025-10-10 10:33:35.000000000 +0100 nf_reject_ipv6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:35.000000000 +0100 nf_reject_ipv6.ko.plt

/lib/modules/5.6.3-smp/kernel/net/mpls:
total 60
-rw-r--r-- 1 root root  5828 2025-10-10 10:32:53.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:32:53.000000000 +0100 mpls_iptunnel.ko.plt
-rw-r--r-- 1 root root 50676 2025-10-10 10:32:53.000000000 +0100 mpls_router.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:32:53.000000000 +0100 mpls_router.ko.plt

/lib/modules/5.6.3-smp/kernel/net/netfilter:
total 444
-rw-r--r-- 1 root root 10392 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_ftp.ko.plt
-rw-r--r-- 1 root root 42880 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_h323.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_h323.ko.plt
-rw-r--r-- 1 root root  8220 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_irc.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_irc.ko.plt
-rw-r--r-- 1 root root 29544 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_netlink.ko.plt
-rw-r--r-- 1 root root  8400 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_pptp.ko.plt
-rw-r--r-- 1 root root  8496 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_rtsp.ko.plt
-rw-r--r-- 1 root root 28332 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_sip.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_sip.ko.plt
-rw-r--r-- 1 root root  6936 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_conntrack_tftp.ko.plt
-rw-r--r-- 1 root root 31696 2025-10-10 10:33:34.000000000 +0100 nf_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat.ko.plt
-rw-r--r-- 1 root root  4808 2025-10-10 10:33:34.000000000 +0100 nf_nat_ftp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_ftp.ko.plt
-rw-r--r-- 1 root root  4524 2025-10-10 10:33:34.000000000 +0100 nf_nat_irc.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_irc.ko.plt
-rw-r--r-- 1 root root  8040 2025-10-10 10:33:34.000000000 +0100 nf_nat_rtsp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_rtsp.ko.plt
-rw-r--r-- 1 root root 12352 2025-10-10 10:33:34.000000000 +0100 nf_nat_sip.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_sip.ko.plt
-rw-r--r-- 1 root root  3432 2025-10-10 10:33:34.000000000 +0100 nf_nat_tftp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nf_nat_tftp.ko.plt
-rw-r--r-- 1 root root  9676 2025-10-10 10:33:34.000000000 +0100 nfnetlink.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 nfnetlink.ko.plt
-rw-r--r-- 1 root root 28940 2025-10-10 10:33:34.000000000 +0100 x_tables.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 x_tables.ko.plt
-rw-r--r-- 1 root root  6748 2025-10-10 10:33:34.000000000 +0100 xt_CT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_CT.ko.plt
-rw-r--r-- 1 root root  4280 2025-10-10 10:33:34.000000000 +0100 xt_DSCP.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_DSCP.ko.plt
-rw-r--r-- 1 root root  3660 2025-10-10 10:33:34.000000000 +0100 xt_HL.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_HL.ko.plt
-rw-r--r-- 1 root root  3724 2025-10-10 10:33:34.000000000 +0100 xt_MASQUERADE.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_MASQUERADE.ko.plt
-rw-r--r-- 1 root root  3984 2025-10-10 10:33:34.000000000 +0100 xt_NETMAP.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_NETMAP.ko.plt
-rw-r--r-- 1 root root  3268 2025-10-10 10:33:34.000000000 +0100 xt_REDIRECT.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_REDIRECT.ko.plt
-rw-r--r-- 1 root root  6580 2025-10-10 10:33:34.000000000 +0100 xt_TCPMSS.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_TCPMSS.ko.plt
-rw-r--r-- 1 root root  5364 2025-10-10 10:33:34.000000000 +0100 xt_addrtype.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_addrtype.ko.plt
-rw-r--r-- 1 root root  4436 2025-10-10 10:33:34.000000000 +0100 xt_connbytes.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_connbytes.ko.plt
-rw-r--r-- 1 root root  4904 2025-10-10 10:33:34.000000000 +0100 xt_connmark.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_connmark.ko.plt
-rw-r--r-- 1 root root  5324 2025-10-10 10:33:34.000000000 +0100 xt_conntrack.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_conntrack.ko.plt
-rw-r--r-- 1 root root  3188 2025-10-10 10:33:34.000000000 +0100 xt_dscp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_dscp.ko.plt
-rw-r--r-- 1 root root 18936 2025-10-10 10:33:34.000000000 +0100 xt_hashlimit.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_hashlimit.ko.plt
-rw-r--r-- 1 root root  3636 2025-10-10 10:33:34.000000000 +0100 xt_helper.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_helper.ko.plt
-rw-r--r-- 1 root root  2900 2025-10-10 10:33:34.000000000 +0100 xt_hl.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_hl.ko.plt
-rw-r--r-- 1 root root  2804 2025-10-10 10:33:34.000000000 +0100 xt_length.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_length.ko.plt
-rw-r--r-- 1 root root  2636 2025-10-10 10:33:34.000000000 +0100 xt_mac.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_mac.ko.plt
-rw-r--r-- 1 root root  3112 2025-10-10 10:33:34.000000000 +0100 xt_mark.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_mark.ko.plt
-rw-r--r-- 1 root root  3628 2025-10-10 10:33:34.000000000 +0100 xt_multiport.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_multiport.ko.plt
-rw-r--r-- 1 root root  5528 2025-10-10 10:33:34.000000000 +0100 xt_nat.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_nat.ko.plt
-rw-r--r-- 1 root root  4024 2025-10-10 10:33:34.000000000 +0100 xt_physdev.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_physdev.ko.plt
-rw-r--r-- 1 root root  4740 2025-10-10 10:33:34.000000000 +0100 xt_policy.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_policy.ko.plt
-rw-r--r-- 1 root root  2540 2025-10-10 10:33:34.000000000 +0100 xt_realm.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_realm.ko.plt
-rw-r--r-- 1 root root  3284 2025-10-10 10:33:34.000000000 +0100 xt_statistic.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_statistic.ko.plt
-rw-r--r-- 1 root root  3148 2025-10-10 10:33:34.000000000 +0100 xt_string.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_string.ko.plt
-rw-r--r-- 1 root root  3272 2025-10-10 10:33:34.000000000 +0100 xt_tcpmss.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_tcpmss.ko.plt
-rw-r--r-- 1 root root  4284 2025-10-10 10:33:34.000000000 +0100 xt_tcpudp.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:34.000000000 +0100 xt_tcpudp.ko.plt

/lib/modules/5.6.3-smp/kernel/net/sched:
total 96
-rw-r--r-- 1 root root 28132 2025-10-10 10:33:22.000000000 +0100 sch_cake.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:22.000000000 +0100 sch_cake.ko.plt
-rw-r--r-- 1 root root  8412 2025-10-10 10:33:22.000000000 +0100 sch_codel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:22.000000000 +0100 sch_codel.ko.plt
-rw-r--r-- 1 root root 11396 2025-10-10 10:33:22.000000000 +0100 sch_fq_codel.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:22.000000000 +0100 sch_fq_codel.ko.plt
-rw-r--r-- 1 root root 30516 2025-10-10 10:33:22.000000000 +0100 sch_htb.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:22.000000000 +0100 sch_htb.ko.plt
-rw-r--r-- 1 root root 10804 2025-10-10 10:33:22.000000000 +0100 sch_red.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:22.000000000 +0100 sch_red.ko.plt

/lib/modules/5.6.3-smp/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 8112 2025-10-10 10:33:22.000000000 +0100 xfrm_algo.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:33:22.000000000 +0100 xfrm_algo.ko.plt

/lib/modules/5.6.3-smp/misc:
total 236
-rw-r--r-- 1 root root 10844 2025-10-10 10:28:17.000000000 +0100 btest.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:17.000000000 +0100 btest.ko.plt
-rw-r--r-- 1 root root  1832 2025-10-10 10:33:02.000000000 +0100 c2glue.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:33:02.000000000 +0100 c2glue.ko.plt
-rw-r--r-- 1 root root  6680 2025-10-10 10:32:56.000000000 +0100 dot1x.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:32:56.000000000 +0100 dot1x.ko.plt
-rw-r--r-- 1 root root  8240 2025-10-10 10:28:05.000000000 +0100 fancon.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:05.000000000 +0100 fancon.ko.plt
-rw-r--r-- 1 root root 49992 2025-10-10 10:28:48.000000000 +0100 flash.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:48.000000000 +0100 flash.ko.plt
-rw-r--r-- 1 root root  5968 2025-10-10 10:31:46.000000000 +0100 jiffies.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:46.000000000 +0100 jiffies.ko.plt
-rw-r--r-- 1 root root  3140 2025-10-10 10:30:59.000000000 +0100 ledgroup.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:30:59.000000000 +0100 ledgroup.ko.plt
-rw-r--r-- 1 root root 11224 2025-10-10 10:28:13.000000000 +0100 logring.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:13.000000000 +0100 logring.ko.plt
-rw-r--r-- 1 root root 26172 2025-10-10 10:28:55.000000000 +0100 mesh.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:55.000000000 +0100 mesh.ko.plt
-rw-r--r-- 1 root root  9144 2025-10-10 10:28:10.000000000 +0100 panics.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:10.000000000 +0100 panics.ko.plt
-rw-r--r-- 1 root root  9304 2025-10-10 10:31:46.000000000 +0100 rb.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:46.000000000 +0100 rb.ko.plt
-rw-r--r-- 1 root root  6128 2025-10-10 10:31:55.000000000 +0100 romon.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:55.000000000 +0100 romon.ko.plt
-rw-r--r-- 1 root root  5904 2025-10-10 10:28:51.000000000 +0100 snif.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:51.000000000 +0100 snif.ko.plt
-rw-r--r-- 1 root root 28816 2025-10-10 10:31:57.000000000 +0100 traffic_gen.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:57.000000000 +0100 traffic_gen.ko.plt
-rw-r--r-- 1 root root  6772 2025-10-10 10:28:47.000000000 +0100 ulog.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:47.000000000 +0100 ulog.ko.plt
-rw-r--r-- 1 root root 14284 2025-10-10 10:28:12.000000000 +0100 voltage.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:12.000000000 +0100 voltage.ko.plt

/lib/modules/5.6.3-smp/net:
total 16
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 sched

/lib/modules/5.6.3-smp/net/bridge:
total 240
-rw-r--r-- 1 root root 215268 2025-10-10 10:32:19.000000000 +0100 bridge2.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:32:19.000000000 +0100 bridge2.ko.plt
-rw-r--r-- 1 root root  19252 2025-10-10 10:32:18.000000000 +0100 bridge2_netfilter.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:32:18.000000000 +0100 bridge2_netfilter.ko.plt
-rw-r--r-- 1 root root   2640 2025-10-10 10:28:51.000000000 +0100 ebt_snif.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:28:51.000000000 +0100 ebt_snif.ko.plt
-rw-r--r-- 1 root root   2872 2025-10-10 10:28:47.000000000 +0100 ebt_ulog.ko
-rw-r--r-- 1 root root      0 2025-10-10 10:28:46.000000000 +0100 ebt_ulog.ko.plt

/lib/modules/5.6.3-smp/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 netfilter

/lib/modules/5.6.3-smp/net/ipv4/netfilter:
total 28
-rw-r--r-- 1 root root 3492 2025-10-10 10:28:16.000000000 +0100 ipt_SAME.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:16.000000000 +0100 ipt_SAME.ko.plt
-rw-r--r-- 1 root root 6076 2025-10-10 10:28:18.000000000 +0100 ipt_TARPIT.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:17.000000000 +0100 ipt_TARPIT.ko.plt
-rw-r--r-- 1 root root 4544 2025-10-10 10:28:16.000000000 +0100 ipt_psd.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:16.000000000 +0100 ipt_psd.ko.plt
-rw-r--r-- 1 root root 2724 2025-10-10 10:28:50.000000000 +0100 ipt_snif.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:50.000000000 +0100 ipt_snif.ko.plt
-rw-r--r-- 1 root root 3324 2025-10-10 10:28:46.000000000 +0100 ipt_ulog.ko
-rw-r--r-- 1 root root    0 2025-10-10 10:28:46.000000000 +0100 ipt_ulog.ko.plt

/lib/modules/5.6.3-smp/net/netfilter:
total 60
-rw-r--r-- 1 root root  2040 2025-10-10 10:29:53.000000000 +0100 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:53.000000000 +0100 nf_conntrack_ipv4.ko.plt
-rw-r--r-- 1 root root  2040 2025-10-10 10:29:53.000000000 +0100 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:53.000000000 +0100 nf_conntrack_ipv6.ko.plt
-rw-r--r-- 1 root root 11364 2025-10-10 10:29:53.000000000 +0100 xt_ein.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:53.000000000 +0100 xt_ein.ko.plt
-rw-r--r-- 1 root root 13100 2025-10-10 10:28:23.000000000 +0100 xt_layer7.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:23.000000000 +0100 xt_layer7.ko.plt
-rw-r--r-- 1 root root 18692 2025-10-10 10:29:53.000000000 +0100 xt_misc.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:29:53.000000000 +0100 xt_misc.ko.plt
-rw-r--r-- 1 root root  3552 2025-10-10 10:28:36.000000000 +0100 xt_tls.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:36.000000000 +0100 xt_tls.ko.plt

/lib/modules/5.6.3-smp/net/sched:
total 84
-rw-r--r-- 1 root root  5772 2025-10-10 10:28:38.000000000 +0100 cls_fw.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:38.000000000 +0100 cls_fw.ko.plt
-rw-r--r-- 1 root root 12824 2025-10-10 10:28:38.000000000 +0100 cls_linear.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:38.000000000 +0100 cls_linear.ko.plt
-rw-r--r-- 1 root root 12528 2025-10-10 10:28:58.000000000 +0100 proto_agr.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:58.000000000 +0100 proto_agr.ko.plt
-rw-r--r-- 1 root root 19268 2025-10-10 10:28:59.000000000 +0100 sch_agr.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:59.000000000 +0100 sch_agr.ko.plt
-rw-r--r-- 1 root root 11540 2025-10-10 10:28:21.000000000 +0100 sch_pcq.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:28:21.000000000 +0100 sch_pcq.ko.plt
-rw-r--r-- 1 root root  9400 2025-10-10 10:31:53.000000000 +0100 sch_sfq.ko
-rw-r--r-- 1 root root     0 2025-10-10 10:31:53.000000000 +0100 sch_sfq.ko.plt

/nova:
total 12
drwxr-xr-x  2 root root 4096 2025-10-10 10:52:40.000000000 +0100 bin
drwxr-xr-x 12 root root 4096 2025-10-10 10:52:40.000000000 +0100 etc
drwxr-xr-x  5 root root 4096 2025-10-10 10:52:40.000000000 +0100 lib
lrwxrwxrwx  1 root root    8 2025-10-10 10:52:41.000000000 +0100 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2025-10-10 10:52:41.000000000 +0100 store -> /rw/store

/nova/bin:
total 16044
-rwxr-xr-x 1 root root   67004 2025-10-10 09:53:25.000000000 +0100 agent
-rwxr-xr-x 1 root root   66828 2025-10-10 09:53:24.000000000 +0100 arpd
-rwxr-xr-x 1 root root   67116 2025-10-10 09:55:44.000000000 +0100 backup
-rwxr-xr-x 1 root root  330116 2025-10-10 09:58:40.000000000 +0100 bridge2
-rwxr-xr-x 1 root root  133124 2025-10-10 09:56:09.000000000 +0100 btest
-rwxr-xr-x 1 root root  132916 2025-10-10 09:54:15.000000000 +0100 bth
-rwxr-xr-x 1 root root 1316436 2025-10-10 09:57:44.000000000 +0100 cerm
lrwxrwxrwx 1 root root       4 2025-10-10 09:57:44.000000000 +0100 cerm-worker -> cerm
-rwxr-xr-x 1 root root  198900 2025-10-10 09:57:24.000000000 +0100 cloud
-rwxr-xr-x 1 root root  132800 2025-10-10 09:55:33.000000000 +0100 crossfig
-rwxr-xr-x 1 root root  133048 2025-10-10 09:56:31.000000000 +0100 detnet
-rwxr-xr-x 1 root root  133132 2025-10-10 09:54:11.000000000 +0100 discover
-rwxr-xr-x 1 root root  396012 2025-10-10 09:57:36.000000000 +0100 diskd
-rwxr-xr-x 1 root root  133260 2025-10-10 09:58:39.000000000 +0100 dot1x
-rwxr-xr-x 1 root root   67480 2025-10-10 09:55:52.000000000 +0100 email
-rwxr-xr-x 1 root root  199036 2025-10-10 09:58:02.000000000 +0100 fileman
-rwxr-xr-x 1 root root   67148 2025-10-10 09:53:27.000000000 +0100 ftpd
-rwxr-xr-x 1 root root  218688 2025-10-10 09:54:28.000000000 +0100 graphing
-rwxr-xr-x 1 root root   66472 2025-10-10 09:57:11.000000000 +0100 havecardbus
-rwxr-xr-x 1 root root  132892 2025-10-10 09:55:30.000000000 +0100 igmpproxy
-rwxr-xr-x 1 root root  132868 2025-10-10 09:56:55.000000000 +0100 installer
-rwxr-xr-x 1 root root   67112 2025-10-10 09:57:29.000000000 +0100 ippool
-rwxr-xr-x 1 root root   67316 2025-10-10 09:56:01.000000000 +0100 keyman
-rwxr-xr-x 1 root root   67316 2025-10-10 09:54:14.000000000 +0100 kidcontrol
-rwxr-xr-x 1 root root  329924 2025-10-10 09:54:32.000000000 +0100 lcdstat
-rwxr-xr-x 1 root root  133160 2025-10-10 09:56:36.000000000 +0100 led
-rwxr-xr-x 1 root root  198552 2025-10-10 09:57:21.000000000 +0100 letsencrypt
-rwxr-xr-x 1 root root  133016 2025-10-10 09:56:46.000000000 +0100 loader
-rwxr-xr-x 1 root root  133224 2025-10-10 09:53:36.000000000 +0100 log
-rwxr-xr-x 1 root root  199252 2025-10-10 09:59:45.000000000 +0100 login
-rwxr-xr-x 1 root root   67100 2025-10-10 09:53:28.000000000 +0100 logmaker
-rwxr-xr-x 1 root root   67100 2025-10-10 09:53:25.000000000 +0100 macping
-rwxr-xr-x 1 root root   67292 2025-10-10 09:55:53.000000000 +0100 mactel
-rwxr-xr-x 1 root root   67176 2025-10-10 09:53:26.000000000 +0100 mepty
-rwxr-xr-x 1 root root  132860 2025-10-10 09:54:19.000000000 +0100 mesh
-rwxr-xr-x 1 root root  132604 2025-10-10 09:59:33.000000000 +0100 mode
lrwxrwxrwx 1 root root       7 2025-10-10 09:57:29.000000000 +0100 modprobed -> moduler
-rwxr-xr-x 1 root root  657824 2025-10-10 09:57:25.000000000 +0100 moduler
-rwxr-xr-x 1 root root  133540 2025-10-10 09:58:21.000000000 +0100 mproxy
-rwxr-xr-x 1 root root   67500 2025-10-10 09:55:58.000000000 +0100 mtget
-rwxr-xr-x 1 root root   67328 2025-10-10 09:54:16.000000000 +0100 natpmp
-rwxr-xr-x 1 root root 1972864 2025-10-10 10:01:35.000000000 +0100 net
-rwxr-xr-x 1 root root  133064 2025-10-10 09:56:35.000000000 +0100 ntp
-rwxr-xr-x 1 root root   66640 2025-10-10 09:53:21.000000000 +0100 panicsl
-rwxr-xr-x 1 root root  921636 2025-10-10 09:59:48.000000000 +0100 parser
-rwxr-xr-x 1 root root   67180 2025-10-10 09:53:49.000000000 +0100 partd
-rwxr-xr-x 1 root root   67260 2025-10-10 09:53:28.000000000 +0100 ping
-rwxr-xr-x 1 root root   67504 2025-10-10 09:57:09.000000000 +0100 portman
-rwxr-xr-x 1 root root   67228 2025-10-10 10:33:47.000000000 +0100 profiler
-rwxr-xr-x 1 root root  133228 2025-10-10 09:57:20.000000000 +0100 ptp
-rwxr-xr-x 1 root root  198772 2025-10-10 09:53:35.000000000 +0100 quickset
-rwxr-xr-x 1 root root   67484 2025-10-10 09:57:39.000000000 +0100 radius
-rwxr-xr-x 1 root root  199092 2025-10-10 09:57:41.000000000 +0100 resolver
-rwxr-xr-x 1 root root   66832 2025-10-10 09:57:35.000000000 +0100 resolver_ctl
-rwxr-xr-x 1 root root  133312 2025-10-10 09:56:50.000000000 +0100 romon
-rwxr-xr-x 1 root root 2298300 2025-10-10 10:02:52.000000000 +0100 route
-rwxr-xr-x 1 root root   66956 2025-10-10 09:56:17.000000000 +0100 rtrace
-rwxr-xr-x 1 root root   67484 2025-10-10 09:57:11.000000000 +0100 sermgr
-rwxr-xr-x 1 root root   67240 2025-10-10 09:53:48.000000000 +0100 sertcp
-rwxr-xr-x 1 root root  132920 2025-10-10 09:53:59.000000000 +0100 sniffer
-rwxr-xr-x 1 root root  264616 2025-10-10 09:58:40.000000000 +0100 snmp
-rwxr-xr-x 1 root root  132964 2025-10-10 09:54:14.000000000 +0100 socks
-rwxr-xr-x 1 root root   67036 2025-10-10 09:54:10.000000000 +0100 socksify
-rwxr-xr-x 1 root root  198728 2025-10-10 09:58:08.000000000 +0100 ssld
-rwxr-xr-x 1 root root   67112 2025-10-10 09:55:55.000000000 +0100 sstore
-rwxr-xr-x 1 root root  350560 2025-10-10 09:59:36.000000000 +0100 sys2
-rwxr-xr-x 1 root root   66872 2025-10-10 09:53:28.000000000 +0100 telnet
-rwxr-xr-x 1 root root   67240 2025-10-10 09:53:28.000000000 +0100 telser
-rwxr-xr-x 1 root root   67356 2025-10-10 09:53:55.000000000 +0100 tftpd
-rwxr-xr-x 1 root root   67208 2025-10-10 09:53:25.000000000 +0100 traceroute
-rwxr-xr-x 1 root root  133048 2025-10-10 09:54:10.000000000 +0100 trafficgen
-rwxr-xr-x 1 root root   67036 2025-10-10 09:53:44.000000000 +0100 trafflow
-rwxr-xr-x 1 root root   67076 2025-10-10 09:53:24.000000000 +0100 undo
-rwxr-xr-x 1 root root  198788 2025-10-10 09:54:19.000000000 +0100 upnp
-rwxr-xr-x 1 root root  133368 2025-10-10 09:57:15.000000000 +0100 user
-rwxr-xr-x 1 root root  133124 2025-10-10 09:56:25.000000000 +0100 vrrp
-rwxr-xr-x 1 root root   67276 2025-10-10 09:53:59.000000000 +0100 watchdog
-rwxr-xr-x 1 root root  199364 2025-10-10 09:57:01.000000000 +0100 wproxy
-rwxr-xr-x 1 root root  199252 2025-10-10 09:58:19.000000000 +0100 www

/nova/etc:
total 56
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:40.000000000 +0100 ca
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 leds
-rwxr-xr-x 1 root root 1279 2025-10-10 09:48:29.000000000 +0100 lognames
-rwxr-xr-x 1 root root   10 2025-10-10 09:48:29.000000000 +0100 logo
-rwxr-xr-x 1 root root    1 2025-10-10 09:48:29.000000000 +0100 manual-url
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 pciinfo
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 services
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 system_names
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 upnp
-rwxr-xr-x 1 root root   26 2025-10-10 09:48:29.000000000 +0100 url
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 user
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 www

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
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 gsma

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
total 212
-rwxr-xr-x 1 root root 213019 2025-10-10 09:52:35.000000000 +0100 system.x3

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
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 defconf
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:40.000000000 +0100 profiler
-rwxr-xr-x 1 root root 4085 2025-10-10 09:48:30.000000000 +0100 xmlnames2

/nova/lib/console:
total 2364
-rwxr-xr-x 1 root root 2410154 2025-10-10 10:00:36.000000000 +0100 1073741824.mem
-rwxr-xr-x 1 root root     510 2025-10-10 09:48:29.000000000 +0100 logo.txt
-rwxr-xr-x 1 root root      18 2025-10-10 09:48:29.000000000 +0100 sublogo.txt

/nova/lib/defconf:
total 100
-rwxr-xr-x 1 root root   567 2025-10-10 09:48:29.000000000 +0100 defconf
-rwxr-xr-x 1 root root  4995 2025-10-10 09:48:29.000000000 +0100 defconf-caps
-rwxr-xr-x 1 root root  3700 2025-10-10 09:48:29.000000000 +0100 defconf-wps-sync
-rwxr-xr-x 1 root root 85713 2025-10-10 09:48:29.000000000 +0100 get-custom-defconf

/nova/lib/profiler:
total 92
-rwxr-xr-x 1 root root 90744 2025-10-10 10:33:46.000000000 +0100 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 528
-rwxr-xr-x 1 root root 398964 2025-10-10 10:34:23.000000000 +0100 mke2fs
-rwxr-xr-x 1 root root  66356 2025-10-10 09:52:32.000000000 +0100 nandfix
-rwxr-xr-x 1 root root  67388 2025-10-10 09:55:55.000000000 +0100 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2025-10-10 10:52:41.000000000 +0100 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 deinstall
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 lock
lrwxrwxrwx 1 root root    8 2025-10-10 10:52:41.000000000 +0100 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2025-10-10 10:52:41.000000000 +0100 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:41.000000000 +0100 post
lrwxrwxrwx 1 root root    7 2025-10-10 10:52:41.000000000 +0100 run -> /rw/run
lrwxrwxrwx 1 root root    4 2025-10-10 10:52:41.000000000 +0100 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

