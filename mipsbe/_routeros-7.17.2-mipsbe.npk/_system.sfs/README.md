### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 9312862 bytes, 766 inodes, blocksize: 262144 bytes, created: Thu Feb  6 10:07:25 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:17.000000000 +0000 bin
drwxr-xr-x 9 root root 4096 2025-02-06 10:07:17.000000000 +0000 bndl
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 boot
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:17.000000000 +0000 dev
lrwxrwxrwx 1 root root   11 2025-02-06 10:07:17.000000000 +0000 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:17.000000000 +0000 etc
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:17.000000000 +0000 flash
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:17.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-06 10:07:17.000000000 +0000 nova
lrwxrwxrwx 1 root root    9 2025-02-06 10:07:17.000000000 +0000 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:17.000000000 +0000 proc
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:17.000000000 +0000 ram
lrwxrwxrwx 1 root root    9 2025-02-06 10:07:17.000000000 +0000 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 sbin
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:17.000000000 +0000 sys
lrwxrwxrwx 1 root root    7 2025-02-06 10:07:17.000000000 +0000 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2025-02-06 10:07:17.000000000 +0000 var

/bin:
total 292
lrwxrwxrwx 1 root root     21 2025-02-06 10:07:17.000000000 +0000 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root  18080 2025-02-06 09:16:52.000000000 +0000 catlog
lrwxrwxrwx 1 root root     15 2025-02-06 10:07:17.000000000 +0000 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root     15 2025-02-06 10:07:17.000000000 +0000 login -> /nova/bin/login
-rwxr-xr-x 1 root root  28732 2025-02-06 09:54:13.000000000 +0000 mkexfatfs
-rwxr-xr-x 1 root root   7272 2025-02-06 09:16:52.000000000 +0000 pakp
lrwxrwxrwx 1 root root     21 2025-02-06 10:07:17.000000000 +0000 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root     15 2025-02-06 10:07:17.000000000 +0000 shell -> /nova/bin/login
-rwxr-xr-x 1 root root 233864 2025-02-06 09:55:00.000000000 +0000 sshfs

/bndl:
total 28
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:16.000000000 +0000 advanced-tools
drwxr-xr-x 5 root root 4096 2025-02-06 10:07:16.000000000 +0000 dhcp
drwxr-xr-x 5 root root 4096 2025-02-06 10:07:16.000000000 +0000 hotspot
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:16.000000000 +0000 ipv6
drwxr-xr-x 5 root root 4096 2025-02-06 10:07:16.000000000 +0000 ppp
drwxr-xr-x 5 root root 4096 2025-02-06 10:07:16.000000000 +0000 security
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:17.000000000 +0000 wifi

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:16.000000000 +0000 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 webfig

/bndl/advanced-tools/home/web/webfig:
total 8
-rw-r--r-- 1 root root 2360 2025-02-06 09:56:02.000000000 +0000 advtool-b6a18e54d46e.jg.gz
-rwxr-xr-x 1 root root  107 2025-02-06 09:56:02.000000000 +0000 advtool.info
lrwxrwxrwx 1 root root   26 2025-02-06 09:56:02.000000000 +0000 advtool.jg.gz -> advtool-b6a18e54d46e.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 lib

/bndl/advanced-tools/nova/bin:
total 200
-rwxr-xr-x 1 root root 30672 2025-02-06 09:55:41.000000000 +0000 ddns
-rwxr-xr-x 1 root root 14572 2025-02-06 09:55:19.000000000 +0000 fping
-rwxr-xr-x 1 root root 17096 2025-02-06 09:55:49.000000000 +0000 macscan
-rwxr-xr-x 1 root root 67732 2025-02-06 09:57:21.000000000 +0000 netwatch
-rwxr-xr-x 1 root root 16060 2025-02-06 09:55:27.000000000 +0000 pspeed
-rwxr-xr-x 1 root root 33804 2025-02-06 09:56:06.000000000 +0000 scanner
-rwxr-xr-x 1 root root 11512 2025-02-06 09:56:13.000000000 +0000 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 console

/bndl/advanced-tools/nova/lib/console:
total 24
-rwxr-xr-x 1 root root 24113 2025-02-06 09:55:42.000000000 +0000 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 home
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:16.000000000 +0000 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 webfig

/bndl/dhcp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4200 2025-02-06 09:56:29.000000000 +0000 dhcp-5540fe7f653a.jg.gz
-rwxr-xr-x 1 root root  101 2025-02-06 09:56:29.000000000 +0000 dhcp.info
lrwxrwxrwx 1 root root   23 2025-02-06 09:56:30.000000000 +0000 dhcp.jg.gz -> dhcp-5540fe7f653a.jg.gz

/bndl/dhcp/lib:
total 112
-rwxr-xr-x 1 root root 110916 2025-02-06 09:55:54.000000000 +0000 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 lib

/bndl/dhcp/nova/bin:
total 308
-rwxr-xr-x 1 root root 215872 2025-02-06 09:58:48.000000000 +0000 dhcp
-rwxr-xr-x 1 root root  96748 2025-02-06 09:57:27.000000000 +0000 dhcpclient

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 console

/bndl/dhcp/nova/lib/console:
total 104
-rwxr-xr-x 1 root root 103057 2025-02-06 09:56:14.000000000 +0000 1128267776.mem

/bndl/hotspot:
total 12
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-06 10:07:16.000000000 +0000 nova

/bndl/hotspot/home:
total 4
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:16.000000000 +0000 web

/bndl/hotspot/home/web:
total 8
drwxr-xr-x 5 root root 4096 2025-02-06 10:07:16.000000000 +0000 hotspot
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 webfig

/bndl/hotspot/home/web/hotspot:
total 68
-rw-r--r-- 1 root root 1094 2025-02-06 09:09:24.000000000 +0000 alogin.html
-rw-r--r-- 1 root root  311 2025-02-06 09:09:24.000000000 +0000 api.json
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 css
-rw-r--r-- 1 root root  640 2025-02-06 09:09:24.000000000 +0000 error.html
-rw-r--r-- 1 root root 3719 2025-02-06 09:09:24.000000000 +0000 errors.txt
-rw-r--r-- 1 root root  903 2025-02-06 09:09:24.000000000 +0000 favicon.ico
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 img
-rw-r--r-- 1 root root 4423 2025-02-06 09:09:24.000000000 +0000 login.html
-rw-r--r-- 1 root root 1459 2025-02-06 09:09:24.000000000 +0000 logout.html
-rw-r--r-- 1 root root 7218 2025-02-06 09:09:24.000000000 +0000 md5.js
-rw-r--r-- 1 root root 1204 2025-02-06 09:09:24.000000000 +0000 radvert.html
-rw-r--r-- 1 root root  330 2025-02-06 09:09:24.000000000 +0000 redirect.html
-rw-r--r-- 1 root root  877 2025-02-06 09:09:24.000000000 +0000 rlogin.html
-rw-r--r-- 1 root root 2855 2025-02-06 09:09:24.000000000 +0000 status.html
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 xml

/bndl/hotspot/home/web/hotspot/css:
total 4
-rw-r--r-- 1 root root 4053 2025-02-06 09:09:24.000000000 +0000 style.css

/bndl/hotspot/home/web/hotspot/img:
total 8
-rw-r--r-- 1 root root 644 2025-02-06 09:09:24.000000000 +0000 password.svg
-rw-r--r-- 1 root root 444 2025-02-06 09:09:24.000000000 +0000 user.svg

/bndl/hotspot/home/web/hotspot/xml:
total 32
-rw-r--r-- 1 root root 4251 2025-02-06 09:09:24.000000000 +0000 WISPAccessGatewayParam.xsd
-rw-r--r-- 1 root root  839 2025-02-06 09:09:24.000000000 +0000 alogin.html
-rw-r--r-- 1 root root  428 2025-02-06 09:09:24.000000000 +0000 error.html
-rw-r--r-- 1 root root  372 2025-02-06 09:09:24.000000000 +0000 flogout.html
-rw-r--r-- 1 root root  809 2025-02-06 09:09:24.000000000 +0000 login.html
-rw-r--r-- 1 root root  370 2025-02-06 09:09:24.000000000 +0000 logout.html
-rw-r--r-- 1 root root  545 2025-02-06 09:09:24.000000000 +0000 rlogin.html

/bndl/hotspot/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4216 2025-02-06 09:56:20.000000000 +0000 hotspot-f1e2e1d4af99.jg.gz
-rwxr-xr-x 1 root root  107 2025-02-06 09:56:20.000000000 +0000 hotspot.info
lrwxrwxrwx 1 root root   26 2025-02-06 09:56:20.000000000 +0000 hotspot.jg.gz -> hotspot-f1e2e1d4af99.jg.gz

/bndl/hotspot/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 modules

/bndl/hotspot/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 5.6.3

/bndl/hotspot/lib/modules/5.6.3:
total 8
-rw-r--r-- 1 root root   13 2025-02-06 09:57:56.000000000 +0000 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 net

/bndl/hotspot/lib/modules/5.6.3/net:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 ipv4

/bndl/hotspot/lib/modules/5.6.3/net/ipv4:
total 44
-rw-r--r-- 1 root root 43352 2025-02-06 09:57:11.000000000 +0000 unicl.ko

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 lib

/bndl/hotspot/nova/bin:
total 252
-rwxr-xr-x 1 root root 256848 2025-02-06 09:57:10.000000000 +0000 hotspot

/bndl/hotspot/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 radius

/bndl/hotspot/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-02-06 09:55:30.000000000 +0000 hotspot.x3

/bndl/hotspot/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 console

/bndl/hotspot/nova/lib/console:
total 80
-rwxr-xr-x 1 root root 80546 2025-02-06 09:55:39.000000000 +0000 1132462080.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:16.000000000 +0000 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 webfig

/bndl/ipv6/home/web/webfig:
total 12
-rw-r--r-- 1 root root 7441 2025-02-06 09:55:59.000000000 +0000 ipv6-b898739b568b.jg.gz
-rwxr-xr-x 1 root root  101 2025-02-06 09:55:59.000000000 +0000 ipv6.info
lrwxrwxrwx 1 root root   23 2025-02-06 09:55:59.000000000 +0000 ipv6.jg.gz -> ipv6-b898739b568b.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:16.000000000 +0000 lib

/bndl/ipv6/nova/bin:
total 84
-rwxr-xr-x 1 root root 28528 2025-02-06 09:56:13.000000000 +0000 ippool6
-rwxr-xr-x 1 root root 56172 2025-02-06 09:55:47.000000000 +0000 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 route

/bndl/ipv6/nova/lib/console:
total 176
-rwxr-xr-x 1 root root 178196 2025-02-06 09:55:52.000000000 +0000 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2025-02-06 09:09:24.000000000 +0000 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-06 10:07:16.000000000 +0000 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 webfig

/bndl/ppp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 6392 2025-02-06 09:57:32.000000000 +0000 ppp-0185abe62dd5.jg.gz
-rwxr-xr-x 1 root root   98 2025-02-06 09:57:32.000000000 +0000 ppp.info
lrwxrwxrwx 1 root root   22 2025-02-06 09:57:32.000000000 +0000 ppp.jg.gz -> ppp-0185abe62dd5.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2025-02-06 10:07:16.000000000 +0000 5.6.3

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 misc
-rw-r--r-- 1 root root  293 2025-02-06 10:03:42.000000000 +0000 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 104
-rw-r--r-- 1 root root 11412 2025-02-06 09:51:18.000000000 +0000 ppp_async.ko
-rw-r--r-- 1 root root  6784 2025-02-06 09:51:19.000000000 +0000 ppp_deflate.ko
-rw-r--r-- 1 root root 33548 2025-02-06 09:51:19.000000000 +0000 ppp_generic.ko
-rw-r--r-- 1 root root  8732 2025-02-06 09:51:19.000000000 +0000 ppp_mppe.ko
-rw-r--r-- 1 root root  9524 2025-02-06 09:51:19.000000000 +0000 ppp_synctty.ko
-rw-r--r-- 1 root root 12784 2025-02-06 09:51:19.000000000 +0000 pppoe.ko
-rw-r--r-- 1 root root  4284 2025-02-06 09:51:19.000000000 +0000 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 92
-rw-r--r-- 1 root root 36144 2025-02-06 09:57:20.000000000 +0000 ovpn.ko
-rw-r--r-- 1 root root  6204 2025-02-06 09:58:07.000000000 +0000 pppoefp.ko
-rw-r--r-- 1 root root 48436 2025-02-06 09:57:44.000000000 +0000 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 60
-rw-r--r-- 1 root root 46396 2025-02-06 09:56:17.000000000 +0000 l2tp.ko
-rw-r--r-- 1 root root 10280 2025-02-06 09:55:53.000000000 +0000 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:16.000000000 +0000 etc
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:16.000000000 +0000 lib

/bndl/ppp/nova/bin:
total 576
-rwxr-xr-x 1 root root 588232 2025-02-06 10:02:48.000000000 +0000 ppp
lrwxrwxrwx 1 root root      3 2025-02-06 10:03:12.000000000 +0000 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2025-02-06 09:56:00.000000000 +0000 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2025-02-06 09:56:00.000000000 +0000 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 profiler

/bndl/ppp/nova/lib/console:
total 140
-rwxr-xr-x 1 root root 142856 2025-02-06 09:57:16.000000000 +0000 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 4
-rwxr-xr-x 1 root root 1940 2025-02-06 09:59:10.000000000 +0000 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-06 10:07:16.000000000 +0000 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 webfig

/bndl/security/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4365 2025-02-06 09:59:26.000000000 +0000 secure-0a49065a769f.jg.gz
-rwxr-xr-x 1 root root  105 2025-02-06 09:59:26.000000000 +0000 secure.info
lrwxrwxrwx 1 root root   25 2025-02-06 09:59:26.000000000 +0000 secure.jg.gz -> secure-0a49065a769f.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 5.6.3

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:16.000000000 +0000 kernel
-rw-r--r-- 1 root root  106 2025-02-06 10:05:39.000000000 +0000 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 crypto
drwxr-xr-x 5 root root 4096 2025-02-06 10:07:16.000000000 +0000 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 88
-rw-r--r-- 1 root root  8352 2025-02-06 09:51:17.000000000 +0000 blowfish_common.ko
-rw-r--r-- 1 root root  6020 2025-02-06 09:51:17.000000000 +0000 blowfish_generic.ko
-rw-r--r-- 1 root root 23348 2025-02-06 09:51:17.000000000 +0000 camellia_generic.ko
-rw-r--r-- 1 root root  8412 2025-02-06 09:51:17.000000000 +0000 chacha20poly1305.ko
-rw-r--r-- 1 root root  3800 2025-02-06 09:51:17.000000000 +0000 echainiv.ko
-rw-r--r-- 1 root root 15832 2025-02-06 09:51:18.000000000 +0000 twofish_common.ko
-rw-r--r-- 1 root root  9988 2025-02-06 09:51:18.000000000 +0000 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 key
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root  8904 2025-02-06 09:51:25.000000000 +0000 ah4.ko
-rw-r--r-- 1 root root 13068 2025-02-06 09:51:25.000000000 +0000 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 36
-rw-r--r-- 1 root root 33816 2025-02-06 09:51:27.000000000 +0000 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 28
-rw-r--r-- 1 root root 26880 2025-02-06 09:51:30.000000000 +0000 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:16.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 lib

/bndl/security/nova/bin:
total 692
-rwxr-xr-x 1 root root 513744 2025-02-06 10:04:41.000000000 +0000 ipsec
lrwxrwxrwx 1 root root      5 2025-02-06 10:05:04.000000000 +0000 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 189244 2025-02-06 10:01:59.000000000 +0000 ssh
lrwxrwxrwx 1 root root      3 2025-02-06 10:01:59.000000000 +0000 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-02-06 09:59:05.000000000 +0000 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2025-02-06 09:59:05.000000000 +0000 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 console

/bndl/security/nova/lib/console:
total 84
-rwxr-xr-x 1 root root 83008 2025-02-06 09:59:33.000000000 +0000 1077936128.mem

/bndl/wifi:
total 8
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:17.000000000 +0000 home
drwxr-xr-x 5 root root 4096 2025-02-06 10:07:17.000000000 +0000 nova

/bndl/wifi/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:17.000000000 +0000 web

/bndl/wifi/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:17.000000000 +0000 webfig

/bndl/wifi/home/web/webfig:
total 16
-rw-r--r-- 1 root root 8793 2025-02-06 09:56:23.000000000 +0000 wave2-797c789e3769.jg.gz
-rwxr-xr-x 1 root root  103 2025-02-06 09:56:23.000000000 +0000 wave2.info
lrwxrwxrwx 1 root root   24 2025-02-06 09:56:24.000000000 +0000 wave2.jg.gz -> wave2-797c789e3769.jg.gz

/bndl/wifi/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:17.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:17.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:17.000000000 +0000 lib

/bndl/wifi/nova/bin:
total 1292
-rwxr-xr-x 1 root root 1319528 2025-02-06 10:05:02.000000000 +0000 ww2

/bndl/wifi/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:17.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:17.000000000 +0000 radius

/bndl/wifi/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 183 2025-02-06 09:55:49.000000000 +0000 wifi.x3

/bndl/wifi/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-02-06 09:55:49.000000000 +0000 wifi.x3

/bndl/wifi/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:17.000000000 +0000 console

/bndl/wifi/nova/lib/console:
total 180
-rwxr-xr-x 1 root root 182005 2025-02-06 09:56:17.000000000 +0000 1275068416.mem

/boot:
total 0

/dev:
total 0

/etc:
total 888
-rw-r--r-- 1 root root  45816 2025-02-06 09:16:17.000000000 +0000 ar7100-7.17.2.fwf
-rw-r--r-- 1 root root  44180 2025-02-06 09:16:19.000000000 +0000 ar7240-7.17.2.fwf
-rw-r--r-- 1 root root  43356 2025-02-06 09:16:20.000000000 +0000 ar9330-7.17.2.fwf
-rw-r--r-- 1 root root  38224 2025-02-06 09:16:19.000000000 +0000 ar9330L-7.17.2.fwf
-rw-r--r-- 1 root root  45004 2025-02-06 09:16:20.000000000 +0000 ar9340-7.17.2.fwf
-rw-r--r-- 1 root root  39728 2025-02-06 09:16:22.000000000 +0000 ar9340L-7.17.2.fwf
-rw-r--r-- 1 root root  48748 2025-02-06 09:16:23.000000000 +0000 ar9344-7.17.2.fwf
-rw-r--r-- 1 root root  41744 2025-02-06 09:16:23.000000000 +0000 ar9344L-7.17.2.fwf
-rw-r--r-- 1 root root  12316 2025-02-06 09:09:53.000000000 +0000 fan_i2c.stm32
-rw-r--r-- 1 root root 130747 2025-02-06 09:09:53.000000000 +0000 license
-rw-r--r-- 1 root root  22536 2025-02-06 09:09:53.000000000 +0000 poe-pse-proxy.stm32
-rwxr-xr-x 1 root root   3952 2025-02-06 09:09:53.000000000 +0000 poeio.atflash
-rw-r--r-- 1 root root  12556 2025-02-06 09:09:53.000000000 +0000 pse-ch4-RB960.samd20
-rw-r--r-- 1 root root  12596 2025-02-06 09:09:53.000000000 +0000 pse-ch8-CRS112.samd20
-rw-r--r-- 1 root root  12548 2025-02-06 09:09:53.000000000 +0000 pse-ch8-CRS328.samd20
-rw-r--r-- 1 root root  46188 2025-02-06 09:16:24.000000000 +0000 qca8513-7.17.2.fwf
-rw-r--r-- 1 root root  41120 2025-02-06 09:16:24.000000000 +0000 qca8513L-7.17.2.fwf
-rw-r--r-- 1 root root  41072 2025-02-06 09:16:28.000000000 +0000 qca8719L-7.17.2.fwf
-rw-r--r-- 1 root root  40480 2025-02-06 09:16:27.000000000 +0000 qca9531-7.17.2.fwf
-rw-r--r-- 1 root root  43600 2025-02-06 09:16:05.000000000 +0000 qca9531L-7.17.2.fwf
-rw-r--r-- 1 root root  45104 2025-02-06 09:16:28.000000000 +0000 qca9550-7.17.2.fwf
-rw-r--r-- 1 root root  41344 2025-02-06 09:16:28.000000000 +0000 qca9550L-7.17.2.fwf
-rw-r--r-- 1 root root   4049 2025-02-06 09:09:53.000000000 +0000 stm8_hw_monitor.bin
lrwxrwxrwx 1 root root     24 2025-02-06 10:07:17.000000000 +0000 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2025-02-06 10:07:17.000000000 +0000 web

/home/web:
total 56
drwxr-xr-x 2 root root  4096 2025-02-06 10:07:16.000000000 +0000 assets
-rwxr-xr-x 1 root root 10295 2025-02-06 09:15:02.000000000 +0000 bth-files.html
-rwxr-xr-x 1 root root   600 2025-02-06 09:09:54.000000000 +0000 favicon.png
-rwxr-xr-x 1 root root   689 2025-02-06 09:09:54.000000000 +0000 favicon.svg
-rwxr-xr-x 1 root root   708 2025-02-06 09:09:52.000000000 +0000 graph.css
drwxr-xr-x 2 root root  4096 2025-02-06 10:07:16.000000000 +0000 help
-rwxr-xr-x 1 root root  1254 2025-02-06 09:09:54.000000000 +0000 index2.html
lrwxrwxrwx 1 root root    12 2025-02-06 09:55:10.000000000 +0000 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2025-02-06 09:09:54.000000000 +0000 logo.png
-rw-r--r-- 1 root root  2507 2025-02-06 09:09:53.000000000 +0000 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2025-02-06 09:09:54.000000000 +0000 robots.txt
drwxr-xr-x 2 root root  4096 2025-02-06 10:07:16.000000000 +0000 webfig
drwxr-xr-x 2 root root  4096 2025-02-06 10:07:17.000000000 +0000 winbox

/home/web/assets:
total 160
-rw-r--r-- 1 root root  19040 2025-02-06 09:09:53.000000000 +0000 400.woff2
-rw-r--r-- 1 root root  19156 2025-02-06 09:09:53.000000000 +0000 700.woff2
-rwxr-xr-x 1 root root    799 2025-02-06 09:09:54.000000000 +0000 script-bd71a1293274.js
-rwxr-xr-x 1 root root 117563 2025-02-06 09:09:54.000000000 +0000 style-692511ab2675.css

/home/web/help:
total 4
-rw-r--r-- 1 root root 118 2025-02-06 09:09:53.000000000 +0000 license.html

/home/web/webfig:
total 672
-rwxr-xr-x 1 root root   9157 2025-02-06 09:13:50.000000000 +0000 curve255-541e54a862be.js
-rwxr-xr-x 1 root root     72 2025-02-06 09:18:47.000000000 +0000 icons.info
-rwxr-xr-x 1 root root  23939 2025-02-06 09:09:51.000000000 +0000 icons.png
-rwxr-xr-x 1 root root     55 2025-02-06 09:18:47.000000000 +0000 icons24.info
-rwxr-xr-x 1 root root  39077 2025-02-06 09:09:51.000000000 +0000 icons24.png
-rwxr-xr-x 1 root root     55 2025-02-06 09:18:49.000000000 +0000 icons32.info
-rwxr-xr-x 1 root root  54187 2025-02-06 09:09:51.000000000 +0000 icons32.png
-rwxr-xr-x 1 root root  21902 2025-02-06 09:13:50.000000000 +0000 index.html
lrwxrwxrwx 1 root root     13 2025-02-06 09:13:51.000000000 +0000 list -> /ram/gum.list
-rwxr-xr-x 1 root root 406719 2025-02-06 09:13:50.000000000 +0000 master-e24161e0bd73.js
-rw-r--r-- 1 root root 102085 2025-02-06 09:18:52.000000000 +0000 roteros-d7ce214a2753.jg.gz
-rwxr-xr-x 1 root root    109 2025-02-06 09:18:52.000000000 +0000 roteros.info
lrwxrwxrwx 1 root root     26 2025-02-06 09:18:53.000000000 +0000 roteros.jg.gz -> roteros-d7ce214a2753.jg.gz

/home/web/winbox:
total 0

/lib:
total 1872
-rwxr-xr-x 1 root root 279128 2025-02-06 09:11:56.000000000 +0000 libc.so
-rwxr-xr-x 1 root root  89264 2025-02-06 09:17:23.000000000 +0000 libeap.so
-rwxr-xr-x 1 root root  21312 2025-02-06 09:13:58.000000000 +0000 libjson.so
-rwxr-xr-x 1 root root 169844 2025-02-06 09:15:45.000000000 +0000 librappsup.so
-rwxr-xr-x 1 root root 118800 2025-02-06 09:14:50.000000000 +0000 libubox.so
-rwxr-xr-x 1 root root  74572 2025-02-06 09:13:48.000000000 +0000 libuc++.so
-rwxr-xr-x 1 root root 286372 2025-02-06 09:15:47.000000000 +0000 libucrypto.so
-rwxr-xr-x 1 root root  27052 2025-02-06 09:14:41.000000000 +0000 libufiber.so
-rwxr-xr-x 1 root root  67644 2025-02-06 09:14:48.000000000 +0000 libuhttp.so
-rwxr-xr-x 1 root root 581956 2025-02-06 09:14:24.000000000 +0000 libumsg.so
-rwxr-xr-x 1 root root  33752 2025-02-06 09:16:39.000000000 +0000 liburadius.so
-rwxr-xr-x 1 root root   9776 2025-02-06 09:16:34.000000000 +0000 libuxml++.so
-rwxr-xr-x 1 root root  36744 2025-02-06 09:13:54.000000000 +0000 libwww.so
-rwxr-xr-x 1 root root  13176 2025-02-06 09:13:57.000000000 +0000 libxml.so
-rwxr-xr-x 1 root root  68088 2025-02-06 09:13:58.000000000 +0000 libz.so
drwxr-xr-x 3 root root   4096 2025-02-06 10:07:16.000000000 +0000 modules
lrwxrwxrwx 1 root root     27 2025-02-06 10:07:17.000000000 +0000 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2025-02-06 10:07:16.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:16.000000000 +0000 drivers
drwxr-xr-x 8 root root 4096 2025-02-06 10:07:16.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 misc
-rw-r--r-- 1 root root 3544 2025-02-06 09:55:06.000000000 +0000 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-02-06 10:07:16.000000000 +0000 net

/lib/modules/5.6.3/drivers:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 char
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 net

/lib/modules/5.6.3/drivers/char:
total 36
-rw-r--r-- 1 root root 4952 2025-02-06 09:47:44.000000000 +0000 ar7100wdt.ko
-rw-r--r-- 1 root root 5048 2025-02-06 09:47:42.000000000 +0000 music_dog.ko
-rw-r--r-- 1 root root 8924 2025-02-06 09:48:02.000000000 +0000 ticker.ko
-rw-r--r-- 1 root root 5428 2025-02-06 09:48:26.000000000 +0000 usbler.ko

/lib/modules/5.6.3/drivers/net:
total 1468
-rw-r--r-- 1 root root  24744 2025-02-06 09:48:01.000000000 +0000 ag7100.ko
-rw-r--r-- 1 root root  40120 2025-02-06 09:48:06.000000000 +0000 ag7240.ko
-rw-r--r-- 1 root root  43920 2025-02-06 09:49:48.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root  27092 2025-02-06 09:49:48.000000000 +0000 aths16.ko
-rw-r--r-- 1 root root  10624 2025-02-06 09:49:49.000000000 +0000 icplus.ko
-rw-r--r-- 1 root root  10496 2025-02-06 09:49:03.000000000 +0000 imq.ko
-rw-r--r-- 1 root root   9972 2025-02-06 09:52:15.000000000 +0000 mpls_fp.ko
-rw-r--r-- 1 root root  19200 2025-02-06 09:48:05.000000000 +0000 music_gmac.ko
-rw-r--r-- 1 root root   9412 2025-02-06 09:48:05.000000000 +0000 music_support.ko
-rw-r--r-- 1 root root  55620 2025-02-06 09:49:49.000000000 +0000 music_switch.ko
-rw-r--r-- 1 root root 163512 2025-02-06 09:52:17.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root  41456 2025-02-06 09:49:04.000000000 +0000 phy_amcc_qt2025.ko
-rw-r--r-- 1 root root  85072 2025-02-06 09:49:08.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root 775252 2025-02-06 09:52:51.000000000 +0000 prestera_dx_mac.ko
-rw-r--r-- 1 root root   3528 2025-02-06 09:49:41.000000000 +0000 sram.ko
-rw-r--r-- 1 root root  66540 2025-02-06 09:49:52.000000000 +0000 switch.ko
drwxr-xr-x 2 root root   4096 2025-02-06 10:07:16.000000000 +0000 usb
-rw-r--r-- 1 root root  22768 2025-02-06 09:48:00.000000000 +0000 via-velocity.ko
-rw-r--r-- 1 root root  53964 2025-02-06 09:52:59.000000000 +0000 vxlan2.ko

/lib/modules/5.6.3/drivers/net/usb:
total 172
-rw-r--r-- 1 root root  67704 2025-02-06 09:52:18.000000000 +0000 fp_usbnet.ko
-rw-r--r-- 1 root root 106072 2025-02-06 09:51:55.000000000 +0000 mbim.ko

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-02-06 10:07:16.000000000 +0000 arch
drwxr-xr-x  2 root root 4096 2025-02-06 10:07:16.000000000 +0000 crypto
drwxr-xr-x  7 root root 4096 2025-02-06 10:07:16.000000000 +0000 drivers
drwxr-xr-x 12 root root 4096 2025-02-06 10:07:16.000000000 +0000 fs
drwxr-xr-x  5 root root 4096 2025-02-06 10:07:16.000000000 +0000 lib
drwxr-xr-x 13 root root 4096 2025-02-06 10:07:16.000000000 +0000 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:16.000000000 +0000 mips

/lib/modules/5.6.3/kernel/arch/mips:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 crypto
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 oprofile

/lib/modules/5.6.3/kernel/arch/mips/crypto:
total 16
-rw-r--r-- 1 root root 7964 2025-02-06 09:51:17.000000000 +0000 chacha-mips.ko
-rw-r--r-- 1 root root 5888 2025-02-06 09:51:17.000000000 +0000 poly1305-mips.ko

/lib/modules/5.6.3/kernel/arch/mips/oprofile:
total 36
-rw-r--r-- 1 root root 34056 2025-02-06 09:51:17.000000000 +0000 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 52
-rw-r--r-- 1 root root  3068 2025-02-06 09:51:17.000000000 +0000 arc4.ko
-rw-r--r-- 1 root root 12276 2025-02-06 09:51:17.000000000 +0000 ccm.ko
-rw-r--r-- 1 root root  4856 2025-02-06 09:51:17.000000000 +0000 cmac.ko
-rw-r--r-- 1 root root  3820 2025-02-06 09:51:17.000000000 +0000 des_generic.ko
-rw-r--r-- 1 root root  5120 2025-02-06 09:51:18.000000000 +0000 md4.ko
-rw-r--r-- 1 root root  3992 2025-02-06 09:51:18.000000000 +0000 sha1_generic.ko
-rw-r--r-- 1 root root 10000 2025-02-06 09:51:18.000000000 +0000 sha512_generic.ko

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 hid
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:16.000000000 +0000 mmc
drwxr-xr-x 7 root root 4096 2025-02-06 10:07:16.000000000 +0000 net
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 scsi
drwxr-xr-x 9 root root 4096 2025-02-06 10:07:16.000000000 +0000 usb

/lib/modules/5.6.3/kernel/drivers/hid:
total 72
-rw-r--r-- 1 root root 72320 2025-02-06 09:51:18.000000000 +0000 hid.ko

/lib/modules/5.6.3/kernel/drivers/mmc:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 core
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 host

/lib/modules/5.6.3/kernel/drivers/mmc/core:
total 140
-rw-r--r-- 1 root root  34844 2025-02-06 09:51:18.000000000 +0000 mmc_block.ko
-rw-r--r-- 1 root root 103932 2025-02-06 09:51:18.000000000 +0000 mmc_core.ko

/lib/modules/5.6.3/kernel/drivers/mmc/host:
total 20
-rw-r--r-- 1 root root 13784 2025-02-06 09:51:18.000000000 +0000 mmc_spi.ko
-rw-r--r-- 1 root root  2736 2025-02-06 09:51:18.000000000 +0000 of_mmc_spi.ko

/lib/modules/5.6.3/kernel/drivers/net:
total 112
drwxr-xr-x 2 root root  4096 2025-02-06 10:07:16.000000000 +0000 bonding
drwxr-xr-x 3 root root  4096 2025-02-06 10:07:16.000000000 +0000 ethernet
-rw-r--r-- 1 root root 33784 2025-02-06 09:51:18.000000000 +0000 macsec.ko
-rw-r--r-- 1 root root 19068 2025-02-06 09:51:18.000000000 +0000 macvlan.ko
drwxr-xr-x 2 root root  4096 2025-02-06 10:07:16.000000000 +0000 slip
drwxr-xr-x 2 root root  4096 2025-02-06 10:07:16.000000000 +0000 usb
-rw-r--r-- 1 root root 15932 2025-02-06 09:51:19.000000000 +0000 veth.ko
-rw-r--r-- 1 root root 18264 2025-02-06 09:51:19.000000000 +0000 vrf.ko
drwxr-xr-x 2 root root  4096 2025-02-06 10:07:16.000000000 +0000 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 128
-rw-r--r-- 1 root root 130880 2025-02-06 09:51:18.000000000 +0000 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 intel

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 40
-rw-r--r-- 1 root root 37256 2025-02-06 09:51:18.000000000 +0000 e100.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6052 2025-02-06 09:51:19.000000000 +0000 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 132
-rw-r--r-- 1 root root 19668 2025-02-06 09:51:19.000000000 +0000 ax88179_178a.ko
-rw-r--r-- 1 root root 40004 2025-02-06 09:51:19.000000000 +0000 hso.ko
-rw-r--r-- 1 root root 12764 2025-02-06 09:51:19.000000000 +0000 sierra_net.ko
-rw-r--r-- 1 root root 25460 2025-02-06 09:51:19.000000000 +0000 smsc95xx.ko
-rw-r--r-- 1 root root 26536 2025-02-06 09:51:19.000000000 +0000 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 80
-rw-r--r-- 1 root root 80192 2025-02-06 09:51:20.000000000 +0000 wireguard.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 156
-rw-r--r-- 1 root root 116840 2025-02-06 09:51:20.000000000 +0000 scsi_mod.ko
-rw-r--r-- 1 root root  40492 2025-02-06 09:51:20.000000000 +0000 sd_mod.ko

/lib/modules/5.6.3/kernel/drivers/usb:
total 28
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 class
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 common
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 core
drwxr-xr-x 4 root root 4096 2025-02-06 10:07:16.000000000 +0000 gadget
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 host
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 serial
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 storage

/lib/modules/5.6.3/kernel/drivers/usb/class:
total 28
-rw-r--r-- 1 root root 26976 2025-02-06 09:51:20.000000000 +0000 cdc-acm.ko

/lib/modules/5.6.3/kernel/drivers/usb/common:
total 8
-rw-r--r-- 1 root root 6248 2025-02-06 09:51:20.000000000 +0000 usb-common.ko

/lib/modules/5.6.3/kernel/drivers/usb/core:
total 180
-rw-r--r-- 1 root root 182032 2025-02-06 09:51:20.000000000 +0000 usbcore.ko

/lib/modules/5.6.3/kernel/drivers/usb/gadget:
total 52
drwxr-xr-x 2 root root  4096 2025-02-06 10:07:16.000000000 +0000 function
-rw-r--r-- 1 root root 42296 2025-02-06 09:51:20.000000000 +0000 libcomposite.ko
drwxr-xr-x 2 root root  4096 2025-02-06 10:07:16.000000000 +0000 udc

/lib/modules/5.6.3/kernel/drivers/usb/gadget/function:
total 84
-rw-r--r-- 1 root root 13580 2025-02-06 09:51:20.000000000 +0000 u_ether.ko
-rw-r--r-- 1 root root 12260 2025-02-06 09:51:20.000000000 +0000 u_serial.ko
-rw-r--r-- 1 root root 33600 2025-02-06 09:51:20.000000000 +0000 usb_f_mass_storage.ko
-rw-r--r-- 1 root root 18080 2025-02-06 09:51:20.000000000 +0000 usb_f_rndis.ko

/lib/modules/5.6.3/kernel/drivers/usb/gadget/udc:
total 16
-rw-r--r-- 1 root root 15980 2025-02-06 09:51:21.000000000 +0000 udc-core.ko

/lib/modules/5.6.3/kernel/drivers/usb/host:
total 72
-rw-r--r-- 1 root root 48356 2025-02-06 09:51:21.000000000 +0000 ehci-hcd.ko
-rw-r--r-- 1 root root 23732 2025-02-06 09:51:21.000000000 +0000 ohci-hcd.ko

/lib/modules/5.6.3/kernel/drivers/usb/serial:
total 312
-rw-r--r-- 1 root root   8420 2025-02-06 09:51:21.000000000 +0000 ch341.ko
-rw-r--r-- 1 root root  24324 2025-02-06 09:51:21.000000000 +0000 cp210x.ko
-rw-r--r-- 1 root root  77824 2025-02-06 09:51:21.000000000 +0000 ftdi_sio.ko
-rw-r--r-- 1 root root   5380 2025-02-06 09:51:21.000000000 +0000 ipw.ko
-rw-r--r-- 1 root root 101180 2025-02-06 09:51:21.000000000 +0000 option.ko
-rw-r--r-- 1 root root  15508 2025-02-06 09:51:21.000000000 +0000 pl2303.ko
-rw-r--r-- 1 root root  14168 2025-02-06 09:51:21.000000000 +0000 qcserial.ko
-rw-r--r-- 1 root root  13752 2025-02-06 09:51:21.000000000 +0000 sierra.ko
-rw-r--r-- 1 root root   8284 2025-02-06 09:51:21.000000000 +0000 usb_wwan.ko
-rw-r--r-- 1 root root  28960 2025-02-06 09:51:21.000000000 +0000 usbserial.ko

/lib/modules/5.6.3/kernel/drivers/usb/storage:
total 76
-rw-r--r-- 1 root root 74400 2025-02-06 09:51:21.000000000 +0000 usb-storage.ko

/lib/modules/5.6.3/kernel/fs:
total 48
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 cifs
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 configfs
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 exfat
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 ext4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 fat
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 fuse
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 jbd2
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 ksmbd
-rw-r--r-- 1 root root 6552 2025-02-06 09:51:22.000000000 +0000 mbcache.ko
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 nls
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 ntfs3

/lib/modules/5.6.3/kernel/fs/cifs:
total 484
-rw-r--r-- 1 root root 495112 2025-02-06 09:51:22.000000000 +0000 cifs.ko

/lib/modules/5.6.3/kernel/fs/configfs:
total 32
-rw-r--r-- 1 root root 30544 2025-02-06 09:51:22.000000000 +0000 configfs.ko

/lib/modules/5.6.3/kernel/fs/exfat:
total 76
-rw-r--r-- 1 root root 76836 2025-02-06 09:51:22.000000000 +0000 exfat.ko

/lib/modules/5.6.3/kernel/fs/ext4:
total 448
-rw-r--r-- 1 root root 458620 2025-02-06 09:51:22.000000000 +0000 ext4.ko

/lib/modules/5.6.3/kernel/fs/fat:
total 88
-rw-r--r-- 1 root root 70796 2025-02-06 09:51:22.000000000 +0000 fat.ko
-rw-r--r-- 1 root root 12756 2025-02-06 09:51:22.000000000 +0000 vfat.ko

/lib/modules/5.6.3/kernel/fs/fuse:
total 104
-rw-r--r-- 1 root root 102976 2025-02-06 09:51:22.000000000 +0000 fuse.ko

/lib/modules/5.6.3/kernel/fs/jbd2:
total 68
-rw-r--r-- 1 root root 68924 2025-02-06 09:51:22.000000000 +0000 jbd2.ko

/lib/modules/5.6.3/kernel/fs/ksmbd:
total 248
-rw-r--r-- 1 root root 250892 2025-02-06 09:51:22.000000000 +0000 ksmbd.ko

/lib/modules/5.6.3/kernel/fs/nls:
total 28
-rw-r--r-- 1 root root 7348 2025-02-06 09:51:23.000000000 +0000 nls_base.ko
-rw-r--r-- 1 root root 6572 2025-02-06 09:51:23.000000000 +0000 nls_cp437.ko
-rw-r--r-- 1 root root 4988 2025-02-06 09:51:23.000000000 +0000 nls_iso8859-1.ko
-rw-r--r-- 1 root root 2708 2025-02-06 09:51:23.000000000 +0000 nls_utf8.ko

/lib/modules/5.6.3/kernel/fs/ntfs3:
total 220
-rw-r--r-- 1 root root 222744 2025-02-06 09:51:23.000000000 +0000 ntfs3.ko

/lib/modules/5.6.3/kernel/lib:
total 44
-rw-r--r-- 1 root root 4144 2025-02-06 09:51:23.000000000 +0000 asn1_decoder.ko
-rw-r--r-- 1 root root 3364 2025-02-06 09:51:23.000000000 +0000 crc-ccitt.ko
-rw-r--r-- 1 root root 2640 2025-02-06 09:51:23.000000000 +0000 crc16.ko
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 crypto
-rw-r--r-- 1 root root 4248 2025-02-06 09:51:24.000000000 +0000 oid_registry.ko
-rw-r--r-- 1 root root 3492 2025-02-06 09:51:24.000000000 +0000 ts_bm.ko
-rw-r--r-- 1 root root 3324 2025-02-06 09:51:24.000000000 +0000 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 64
-rw-r--r-- 1 root root  2304 2025-02-06 09:51:23.000000000 +0000 libarc4.ko
-rw-r--r-- 1 root root  7468 2025-02-06 09:51:23.000000000 +0000 libblake2s-generic.ko
-rw-r--r-- 1 root root  3732 2025-02-06 09:51:23.000000000 +0000 libblake2s.ko
-rw-r--r-- 1 root root  7040 2025-02-06 09:51:23.000000000 +0000 libchacha20poly1305.ko
-rw-r--r-- 1 root root 11708 2025-02-06 09:51:23.000000000 +0000 libcurve25519-generic.ko
-rw-r--r-- 1 root root  1992 2025-02-06 09:51:23.000000000 +0000 libcurve25519.ko
-rw-r--r-- 1 root root 20668 2025-02-06 09:51:23.000000000 +0000 libdes.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18368 2025-02-06 09:51:24.000000000 +0000 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14908 2025-02-06 09:51:24.000000000 +0000 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 44
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 802
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 8021q
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 ipv4
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 ipv6
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 mpls
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 rfkill
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 sched
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 unix
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 xfrm

/lib/modules/5.6.3/kernel/net/802:
total 12
-rw-r--r-- 1 root root 10004 2025-02-06 09:51:24.000000000 +0000 mrp.ko

/lib/modules/5.6.3/kernel/net/8021q:
total 28
-rw-r--r-- 1 root root 25264 2025-02-06 09:51:24.000000000 +0000 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 84
-rw-r--r-- 1 root root  2640 2025-02-06 09:51:24.000000000 +0000 ebt_802_3.ko
-rw-r--r-- 1 root root  3572 2025-02-06 09:51:24.000000000 +0000 ebt_arp.ko
-rw-r--r-- 1 root root  3168 2025-02-06 09:51:24.000000000 +0000 ebt_arpreply.ko
-rw-r--r-- 1 root root  3164 2025-02-06 09:51:24.000000000 +0000 ebt_dnat.ko
-rw-r--r-- 1 root root  3548 2025-02-06 09:51:24.000000000 +0000 ebt_ip.ko
-rw-r--r-- 1 root root  3780 2025-02-06 09:51:24.000000000 +0000 ebt_ip6.ko
-rw-r--r-- 1 root root  3428 2025-02-06 09:51:24.000000000 +0000 ebt_limit.ko
-rw-r--r-- 1 root root  2580 2025-02-06 09:51:24.000000000 +0000 ebt_mark.ko
-rw-r--r-- 1 root root  2512 2025-02-06 09:51:24.000000000 +0000 ebt_mark_m.ko
-rw-r--r-- 1 root root  2448 2025-02-06 09:51:24.000000000 +0000 ebt_pkttype.ko
-rw-r--r-- 1 root root  3036 2025-02-06 09:51:25.000000000 +0000 ebt_redirect.ko
-rw-r--r-- 1 root root  3024 2025-02-06 09:51:25.000000000 +0000 ebt_snat.ko
-rw-r--r-- 1 root root  3804 2025-02-06 09:51:25.000000000 +0000 ebt_stp.ko
-rw-r--r-- 1 root root  2956 2025-02-06 09:51:25.000000000 +0000 ebt_vlan.ko
-rw-r--r-- 1 root root  3108 2025-02-06 09:51:25.000000000 +0000 ebtable_filter.ko
-rw-r--r-- 1 root root  3108 2025-02-06 09:51:25.000000000 +0000 ebtable_nat.ko
-rw-r--r-- 1 root root 16480 2025-02-06 09:51:25.000000000 +0000 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 16692 2025-02-06 09:51:25.000000000 +0000 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2025-02-06 10:07:16.000000000 +0000 netfilter
-rw-r--r-- 1 root root 14636 2025-02-06 09:51:26.000000000 +0000 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 68
-rw-r--r-- 1 root root 15492 2025-02-06 09:51:25.000000000 +0000 ip_tables.ko
-rw-r--r-- 1 root root  3672 2025-02-06 09:51:25.000000000 +0000 ipt_REJECT.ko
-rw-r--r-- 1 root root  3756 2025-02-06 09:51:25.000000000 +0000 iptable_filter.ko
-rw-r--r-- 1 root root  3852 2025-02-06 09:51:25.000000000 +0000 iptable_mangle.ko
-rw-r--r-- 1 root root  3520 2025-02-06 09:51:25.000000000 +0000 iptable_nat.ko
-rw-r--r-- 1 root root  4088 2025-02-06 09:51:25.000000000 +0000 iptable_raw.ko
-rw-r--r-- 1 root root  3436 2025-02-06 09:51:25.000000000 +0000 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root  9284 2025-02-06 09:51:26.000000000 +0000 nf_nat_h323.ko
-rw-r--r-- 1 root root  4988 2025-02-06 09:51:26.000000000 +0000 nf_nat_pptp.ko
-rw-r--r-- 1 root root  4364 2025-02-06 09:51:26.000000000 +0000 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 460
-rw-r--r-- 1 root root   8944 2025-02-06 09:51:26.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root  12364 2025-02-06 09:51:26.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root   3552 2025-02-06 09:51:26.000000000 +0000 ip6_udp_tunnel.ko
-rw-r--r-- 1 root root 424776 2025-02-06 09:51:26.000000000 +0000 ipv6.ko
drwxr-xr-x 2 root root   4096 2025-02-06 10:07:16.000000000 +0000 netfilter
-rw-r--r-- 1 root root   4920 2025-02-06 09:51:27.000000000 +0000 tunnel6.ko

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 68
-rw-r--r-- 1 root root 15940 2025-02-06 09:51:26.000000000 +0000 ip6_tables.ko
-rw-r--r-- 1 root root  3920 2025-02-06 09:51:26.000000000 +0000 ip6t_NPT.ko
-rw-r--r-- 1 root root  3744 2025-02-06 09:51:26.000000000 +0000 ip6t_REJECT.ko
-rw-r--r-- 1 root root  2884 2025-02-06 09:51:26.000000000 +0000 ip6t_eui64.ko
-rw-r--r-- 1 root root  3148 2025-02-06 09:51:26.000000000 +0000 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  3760 2025-02-06 09:51:26.000000000 +0000 ip6table_filter.ko
-rw-r--r-- 1 root root  4088 2025-02-06 09:51:26.000000000 +0000 ip6table_mangle.ko
-rw-r--r-- 1 root root  3524 2025-02-06 09:51:27.000000000 +0000 ip6table_nat.ko
-rw-r--r-- 1 root root  4092 2025-02-06 09:51:27.000000000 +0000 ip6table_raw.ko
-rw-r--r-- 1 root root  9532 2025-02-06 09:51:27.000000000 +0000 nf_defrag_ipv6.ko
-rw-r--r-- 1 root root  5136 2025-02-06 09:51:27.000000000 +0000 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 52
-rw-r--r-- 1 root root  5048 2025-02-06 09:51:27.000000000 +0000 mpls_iptunnel.ko
-rw-r--r-- 1 root root 42528 2025-02-06 09:51:27.000000000 +0000 mpls_router.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 500
-rw-r--r-- 1 root root 97328 2025-02-06 09:51:27.000000000 +0000 nf_conntrack.ko
-rw-r--r-- 1 root root  9796 2025-02-06 09:51:27.000000000 +0000 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root 40504 2025-02-06 09:51:27.000000000 +0000 nf_conntrack_h323.ko
-rw-r--r-- 1 root root  8076 2025-02-06 09:51:27.000000000 +0000 nf_conntrack_irc.ko
-rw-r--r-- 1 root root 28872 2025-02-06 09:51:27.000000000 +0000 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root  7520 2025-02-06 09:51:27.000000000 +0000 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root  8084 2025-02-06 09:51:27.000000000 +0000 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root 26612 2025-02-06 09:51:27.000000000 +0000 nf_conntrack_sip.ko
-rw-r--r-- 1 root root  6732 2025-02-06 09:51:27.000000000 +0000 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root 28828 2025-02-06 09:51:27.000000000 +0000 nf_nat.ko
-rw-r--r-- 1 root root  4460 2025-02-06 09:51:28.000000000 +0000 nf_nat_ftp.ko
-rw-r--r-- 1 root root  4104 2025-02-06 09:51:28.000000000 +0000 nf_nat_irc.ko
-rw-r--r-- 1 root root  7576 2025-02-06 09:51:28.000000000 +0000 nf_nat_rtsp.ko
-rw-r--r-- 1 root root 11772 2025-02-06 09:51:28.000000000 +0000 nf_nat_sip.ko
-rw-r--r-- 1 root root  3028 2025-02-06 09:51:28.000000000 +0000 nf_nat_tftp.ko
-rw-r--r-- 1 root root  8604 2025-02-06 09:51:28.000000000 +0000 nfnetlink.ko
-rw-r--r-- 1 root root 24264 2025-02-06 09:51:28.000000000 +0000 x_tables.ko
-rw-r--r-- 1 root root  6668 2025-02-06 09:51:28.000000000 +0000 xt_CT.ko
-rw-r--r-- 1 root root  3964 2025-02-06 09:51:28.000000000 +0000 xt_DSCP.ko
-rw-r--r-- 1 root root  3404 2025-02-06 09:51:28.000000000 +0000 xt_HL.ko
-rw-r--r-- 1 root root  3412 2025-02-06 09:51:28.000000000 +0000 xt_MASQUERADE.ko
-rw-r--r-- 1 root root  3768 2025-02-06 09:51:28.000000000 +0000 xt_NETMAP.ko
-rw-r--r-- 1 root root  3100 2025-02-06 09:51:28.000000000 +0000 xt_REDIRECT.ko
-rw-r--r-- 1 root root  6144 2025-02-06 09:51:28.000000000 +0000 xt_TCPMSS.ko
-rw-r--r-- 1 root root  5148 2025-02-06 09:51:28.000000000 +0000 xt_addrtype.ko
-rw-r--r-- 1 root root  4244 2025-02-06 09:51:28.000000000 +0000 xt_connbytes.ko
-rw-r--r-- 1 root root  4448 2025-02-06 09:51:28.000000000 +0000 xt_connmark.ko
-rw-r--r-- 1 root root  4948 2025-02-06 09:51:28.000000000 +0000 xt_conntrack.ko
-rw-r--r-- 1 root root  2988 2025-02-06 09:51:29.000000000 +0000 xt_dscp.ko
-rw-r--r-- 1 root root 16184 2025-02-06 09:51:29.000000000 +0000 xt_hashlimit.ko
-rw-r--r-- 1 root root  3436 2025-02-06 09:51:29.000000000 +0000 xt_helper.ko
-rw-r--r-- 1 root root  2812 2025-02-06 09:51:29.000000000 +0000 xt_hl.ko
-rw-r--r-- 1 root root  2748 2025-02-06 09:51:29.000000000 +0000 xt_length.ko
-rw-r--r-- 1 root root  2600 2025-02-06 09:51:29.000000000 +0000 xt_mac.ko
-rw-r--r-- 1 root root  2912 2025-02-06 09:51:29.000000000 +0000 xt_mark.ko
-rw-r--r-- 1 root root  3384 2025-02-06 09:51:29.000000000 +0000 xt_multiport.ko
-rw-r--r-- 1 root root  5096 2025-02-06 09:51:29.000000000 +0000 xt_nat.ko
-rw-r--r-- 1 root root  3948 2025-02-06 09:51:29.000000000 +0000 xt_physdev.ko
-rw-r--r-- 1 root root  4456 2025-02-06 09:51:29.000000000 +0000 xt_policy.ko
-rw-r--r-- 1 root root  2504 2025-02-06 09:51:29.000000000 +0000 xt_realm.ko
-rw-r--r-- 1 root root  3048 2025-02-06 09:51:29.000000000 +0000 xt_statistic.ko
-rw-r--r-- 1 root root  2920 2025-02-06 09:51:29.000000000 +0000 xt_string.ko
-rw-r--r-- 1 root root  3112 2025-02-06 09:51:29.000000000 +0000 xt_tcpmss.ko
-rw-r--r-- 1 root root  3968 2025-02-06 09:51:29.000000000 +0000 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/rfkill:
total 16
-rw-r--r-- 1 root root 15084 2025-02-06 09:51:29.000000000 +0000 rfkill.ko

/lib/modules/5.6.3/kernel/net/sched:
total 84
-rw-r--r-- 1 root root 28280 2025-02-06 09:51:29.000000000 +0000 sch_cake.ko
-rw-r--r-- 1 root root  7420 2025-02-06 09:51:29.000000000 +0000 sch_codel.ko
-rw-r--r-- 1 root root 10028 2025-02-06 09:51:29.000000000 +0000 sch_fq_codel.ko
-rw-r--r-- 1 root root 24044 2025-02-06 09:51:30.000000000 +0000 sch_htb.ko
-rw-r--r-- 1 root root  8816 2025-02-06 09:51:30.000000000 +0000 sch_red.ko

/lib/modules/5.6.3/kernel/net/unix:
total 32
-rw-r--r-- 1 root root 30756 2025-02-06 09:51:30.000000000 +0000 unix.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 7012 2025-02-06 09:51:30.000000000 +0000 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 444
-rw-r--r-- 1 root root 10468 2025-02-06 09:48:04.000000000 +0000 btest.ko
-rw-r--r-- 1 root root  6316 2025-02-06 09:52:15.000000000 +0000 dot1x.ko
-rw-r--r-- 1 root root 35368 2025-02-06 09:52:04.000000000 +0000 fan_i2c.ko
-rw-r--r-- 1 root root  6332 2025-02-06 09:47:49.000000000 +0000 fancon.ko
-rw-r--r-- 1 root root 56544 2025-02-06 09:48:32.000000000 +0000 flash.ko
-rw-r--r-- 1 root root  4528 2025-02-06 09:50:24.000000000 +0000 jiffies.ko
-rw-r--r-- 1 root root 14672 2025-02-06 09:48:39.000000000 +0000 lcd.ko
-rw-r--r-- 1 root root  3000 2025-02-06 09:48:17.000000000 +0000 ledgroup.ko
-rw-r--r-- 1 root root 11092 2025-02-06 09:47:57.000000000 +0000 logring.ko
-rw-r--r-- 1 root root 28528 2025-02-06 09:50:10.000000000 +0000 lte_gct_eth.ko
-rw-r--r-- 1 root root 12964 2025-02-06 09:50:10.000000000 +0000 lte_gct_tty.ko
-rw-r--r-- 1 root root 22056 2025-02-06 09:48:40.000000000 +0000 mesh.ko
-rw-r--r-- 1 root root  8532 2025-02-06 09:47:55.000000000 +0000 panics.ko
-rw-r--r-- 1 root root 12432 2025-02-06 09:47:58.000000000 +0000 poe_simple.ko
-rw-r--r-- 1 root root 37712 2025-02-06 09:47:57.000000000 +0000 poe_v4.ko
-rw-r--r-- 1 root root  8016 2025-02-06 09:47:58.000000000 +0000 poeupdate.ko
-rw-r--r-- 1 root root 16096 2025-02-06 09:52:51.000000000 +0000 prestera_pci.ko
-rw-r--r-- 1 root root  7648 2025-02-06 09:49:52.000000000 +0000 rb.ko
-rw-r--r-- 1 root root  5688 2025-02-06 09:50:29.000000000 +0000 romon.ko
-rw-r--r-- 1 root root  5308 2025-02-06 09:48:35.000000000 +0000 snif.ko
-rw-r--r-- 1 root root 27916 2025-02-06 09:52:02.000000000 +0000 stm8_fan.ko
-rw-r--r-- 1 root root 24964 2025-02-06 09:48:51.000000000 +0000 traffic_gen.ko
-rw-r--r-- 1 root root 19076 2025-02-06 09:48:39.000000000 +0000 ts.ko
-rw-r--r-- 1 root root  6424 2025-02-06 09:48:36.000000000 +0000 ulog.ko
-rw-r--r-- 1 root root 15576 2025-02-06 09:47:57.000000000 +0000 voltage.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-02-06 10:07:16.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 sched

/lib/modules/5.6.3/net/bridge:
total 192
-rw-r--r-- 1 root root 164356 2025-02-06 09:52:07.000000000 +0000 bridge2.ko
-rw-r--r-- 1 root root  16456 2025-02-06 09:52:07.000000000 +0000 bridge2_netfilter.ko
-rw-r--r-- 1 root root   2464 2025-02-06 09:48:31.000000000 +0000 ebt_snif.ko
-rw-r--r-- 1 root root   2696 2025-02-06 09:48:33.000000000 +0000 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 24
-rw-r--r-- 1 root root 3260 2025-02-06 09:48:02.000000000 +0000 ipt_SAME.ko
-rw-r--r-- 1 root root 6108 2025-02-06 09:48:02.000000000 +0000 ipt_TARPIT.ko
-rw-r--r-- 1 root root 4060 2025-02-06 09:48:02.000000000 +0000 ipt_psd.ko
-rw-r--r-- 1 root root 2564 2025-02-06 09:48:31.000000000 +0000 ipt_snif.ko
-rw-r--r-- 1 root root 3040 2025-02-06 09:48:33.000000000 +0000 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 56
-rw-r--r-- 1 root root  2028 2025-02-06 09:49:15.000000000 +0000 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  2028 2025-02-06 09:49:15.000000000 +0000 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 10464 2025-02-06 09:49:21.000000000 +0000 xt_ein.ko
-rw-r--r-- 1 root root 12424 2025-02-06 09:48:07.000000000 +0000 xt_layer7.ko
-rw-r--r-- 1 root root 16096 2025-02-06 09:49:21.000000000 +0000 xt_misc.ko
-rw-r--r-- 1 root root  3588 2025-02-06 09:48:04.000000000 +0000 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 76
-rw-r--r-- 1 root root  5156 2025-02-06 09:48:20.000000000 +0000 cls_fw.ko
-rw-r--r-- 1 root root 11364 2025-02-06 09:48:23.000000000 +0000 cls_linear.ko
-rw-r--r-- 1 root root 12596 2025-02-06 09:48:43.000000000 +0000 proto_agr.ko
-rw-r--r-- 1 root root 18524 2025-02-06 09:48:46.000000000 +0000 sch_agr.ko
-rw-r--r-- 1 root root 10312 2025-02-06 09:48:05.000000000 +0000 sch_pcq.ko
-rw-r--r-- 1 root root  8000 2025-02-06 09:50:37.000000000 +0000 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2025-02-06 10:07:16.000000000 +0000 bin
drwxr-xr-x 11 root root 4096 2025-02-06 10:07:16.000000000 +0000 etc
drwxr-xr-x  5 root root 4096 2025-02-06 10:07:16.000000000 +0000 lib
lrwxrwxrwx  1 root root    8 2025-02-06 10:07:17.000000000 +0000 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2025-02-06 10:07:17.000000000 +0000 store -> /rw/store

/nova/bin:
total 10832
-rwxr-xr-x 1 root root   23544 2025-02-06 09:14:38.000000000 +0000 agent
-rwxr-xr-x 1 root root   12344 2025-02-06 09:14:39.000000000 +0000 arpd
-rwxr-xr-x 1 root root   17072 2025-02-06 09:16:42.000000000 +0000 backup
-rwxr-xr-x 1 root root  343132 2025-02-06 09:19:19.000000000 +0000 bridge2
-rwxr-xr-x 1 root root   72576 2025-02-06 09:16:57.000000000 +0000 btest
-rwxr-xr-x 1 root root   52952 2025-02-06 09:15:20.000000000 +0000 bth
-rwxr-xr-x 1 root root 1021812 2025-02-06 09:18:27.000000000 +0000 cerm
lrwxrwxrwx 1 root root       4 2025-02-06 09:18:27.000000000 +0000 cerm-worker -> cerm
-rwxr-xr-x 1 root root  170488 2025-02-06 09:18:16.000000000 +0000 cloud
-rwxr-xr-x 1 root root   89664 2025-02-06 09:16:28.000000000 +0000 crossfig
-rwxr-xr-x 1 root root   64780 2025-02-06 09:19:06.000000000 +0000 detnet
-rwxr-xr-x 1 root root   80180 2025-02-06 09:15:14.000000000 +0000 discover
-rwxr-xr-x 1 root root  281484 2025-02-06 09:18:08.000000000 +0000 diskd
-rwxr-xr-x 1 root root  109660 2025-02-06 09:19:27.000000000 +0000 dot1x
-rwxr-xr-x 1 root root   39040 2025-02-06 09:16:40.000000000 +0000 email
-rwxr-xr-x 1 root root   84304 2025-02-06 09:18:33.000000000 +0000 fileman
-rwxr-xr-x 1 root root   34692 2025-02-06 09:14:36.000000000 +0000 ftpd
-rwxr-xr-x 1 root root  154080 2025-02-06 09:15:31.000000000 +0000 graphing
-rwxr-xr-x 1 root root    4440 2025-02-06 09:17:48.000000000 +0000 havecardbus
-rwxr-xr-x 1 root root   63504 2025-02-06 09:16:23.000000000 +0000 igmpproxy
-rwxr-xr-x 1 root root   78256 2025-02-06 09:17:51.000000000 +0000 installer
-rwxr-xr-x 1 root root   28320 2025-02-06 09:18:16.000000000 +0000 ippool
-rwxr-xr-x 1 root root   55376 2025-02-06 09:17:00.000000000 +0000 keyman
-rwxr-xr-x 1 root root   47120 2025-02-06 09:15:23.000000000 +0000 kidcontrol
-rwxr-xr-x 1 root root  244132 2025-02-06 09:15:43.000000000 +0000 lcdstat
-rwxr-xr-x 1 root root   72316 2025-02-06 09:17:25.000000000 +0000 led
-rwxr-xr-x 1 root root  118288 2025-02-06 09:18:23.000000000 +0000 letsencrypt
-rwxr-xr-x 1 root root   84892 2025-02-06 09:17:07.000000000 +0000 loader
-rwxr-xr-x 1 root root   73088 2025-02-06 09:14:44.000000000 +0000 log
-rwxr-xr-x 1 root root  164016 2025-02-06 09:20:11.000000000 +0000 login
-rwxr-xr-x 1 root root   52652 2025-02-06 09:14:41.000000000 +0000 logmaker
-rwxr-xr-x 1 root root   22332 2025-02-06 09:14:36.000000000 +0000 macping
-rwxr-xr-x 1 root root   36312 2025-02-06 09:16:58.000000000 +0000 mactel
-rwxr-xr-x 1 root root   22616 2025-02-06 09:14:40.000000000 +0000 mepty
-rwxr-xr-x 1 root root   84540 2025-02-06 09:15:26.000000000 +0000 mesh
-rwxr-xr-x 1 root root   67432 2025-02-06 09:19:51.000000000 +0000 mode
lrwxrwxrwx 1 root root       7 2025-02-06 09:18:17.000000000 +0000 modprobed -> moduler
-rwxr-xr-x 1 root root   81036 2025-02-06 09:18:17.000000000 +0000 moduler
-rwxr-xr-x 1 root root   76568 2025-02-06 09:19:14.000000000 +0000 mproxy
-rwxr-xr-x 1 root root   59604 2025-02-06 09:16:53.000000000 +0000 mtget
-rwxr-xr-x 1 root root   48288 2025-02-06 09:15:13.000000000 +0000 natpmp
-rwxr-xr-x 1 root root 1686372 2025-02-06 09:21:58.000000000 +0000 net
-rwxr-xr-x 1 root root   69568 2025-02-06 09:17:24.000000000 +0000 ntp
-rwxr-xr-x 1 root root    6152 2025-02-06 09:14:37.000000000 +0000 panicsl
-rwxr-xr-x 1 root root  722840 2025-02-06 09:20:20.000000000 +0000 parser
-rwxr-xr-x 1 root root   34904 2025-02-06 09:15:01.000000000 +0000 partd
-rwxr-xr-x 1 root root   40100 2025-02-06 09:14:43.000000000 +0000 ping
-rwxr-xr-x 1 root root    6520 2025-02-06 09:47:56.000000000 +0000 poeupdatefw
-rwxr-xr-x 1 root root   47532 2025-02-06 09:17:55.000000000 +0000 portman
-rwxr-xr-x 1 root root   32728 2025-02-06 09:53:21.000000000 +0000 profiler
-rwxr-xr-x 1 root root   84152 2025-02-06 09:18:06.000000000 +0000 ptp
-rwxr-xr-x 1 root root  153980 2025-02-06 09:14:47.000000000 +0000 quickset
-rwxr-xr-x 1 root root   49840 2025-02-06 09:17:00.000000000 +0000 radius
-rwxr-xr-x 1 root root  160780 2025-02-06 09:18:10.000000000 +0000 resolver
-rwxr-xr-x 1 root root   10064 2025-02-06 09:17:54.000000000 +0000 resolver_ctl
-rwxr-xr-x 1 root root   93196 2025-02-06 09:17:39.000000000 +0000 romon
-rwxr-xr-x 1 root root 1757916 2025-02-06 09:23:12.000000000 +0000 route
-rwxr-xr-x 1 root root   16104 2025-02-06 09:17:26.000000000 +0000 rtrace
-rwxr-xr-x 1 root root   27284 2025-02-06 09:18:11.000000000 +0000 sermgr
-rwxr-xr-x 1 root root   32992 2025-02-06 09:15:02.000000000 +0000 sertcp
-rwxr-xr-x 1 root root   67596 2025-02-06 09:15:16.000000000 +0000 sniffer
-rwxr-xr-x 1 root root  211672 2025-02-06 09:19:21.000000000 +0000 snmp
-rwxr-xr-x 1 root root   65572 2025-02-06 09:15:25.000000000 +0000 socks
-rwxr-xr-x 1 root root  113344 2025-02-06 09:18:50.000000000 +0000 ssld
-rwxr-xr-x 1 root root   29020 2025-02-06 09:16:42.000000000 +0000 sstore
-rwxr-xr-x 1 root root  326800 2025-02-06 09:19:58.000000000 +0000 sys2
-rwxr-xr-x 1 root root   20552 2025-02-06 09:14:41.000000000 +0000 telnet
-rwxr-xr-x 1 root root   10008 2025-02-06 09:14:34.000000000 +0000 telser
-rwxr-xr-x 1 root root   36116 2025-02-06 09:15:08.000000000 +0000 tftpd
-rwxr-xr-x 1 root root   27252 2025-02-06 09:14:41.000000000 +0000 traceroute
-rwxr-xr-x 1 root root  106976 2025-02-06 09:15:18.000000000 +0000 trafficgen
-rwxr-xr-x 1 root root   22280 2025-02-06 09:14:56.000000000 +0000 trafflow
-rwxr-xr-x 1 root root   23376 2025-02-06 09:14:38.000000000 +0000 undo
-rwxr-xr-x 1 root root  146940 2025-02-06 09:15:25.000000000 +0000 upnp
-rwxr-xr-x 1 root root   80352 2025-02-06 09:18:15.000000000 +0000 user
-rwxr-xr-x 1 root root   92448 2025-02-06 09:17:30.000000000 +0000 vrrp
-rwxr-xr-x 1 root root   29424 2025-02-06 09:14:59.000000000 +0000 watchdog
-rwxr-xr-x 1 root root  150464 2025-02-06 09:18:01.000000000 +0000 wproxy
-rwxr-xr-x 1 root root  123492 2025-02-06 09:18:55.000000000 +0000 www

/nova/etc:
total 52
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 leds
-rwxr-xr-x 1 root root 1229 2025-02-06 09:09:52.000000000 +0000 lognames
-rwxr-xr-x 1 root root   10 2025-02-06 09:09:52.000000000 +0000 logo
-rwxr-xr-x 1 root root    1 2025-02-06 09:09:52.000000000 +0000 manual-url
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 pciinfo
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 services
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 system_names
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 upnp
-rwxr-xr-x 1 root root   26 2025-02-06 09:09:52.000000000 +0000 url
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 user
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 www

/nova/etc/leds:
total 128
-rwxr-xr-x 1 root root 126981 2025-02-06 09:13:54.000000000 +0000 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2025-02-06 09:13:53.000000000 +0000 system.x3

/nova/etc/pciinfo:
total 156
-rwxr-xr-x 1 root root 159470 2025-02-06 09:13:53.000000000 +0000 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-02-06 09:13:54.000000000 +0000 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 992 2025-02-06 09:13:53.000000000 +0000 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2025-02-06 09:13:53.000000000 +0000 system.x3

/nova/etc/upnp:
total 64
-rwxr-xr-x 1 root root  3378 2025-02-06 09:09:54.000000000 +0000 connectionmanager.xml
-rwxr-xr-x 1 root root  5684 2025-02-06 09:09:54.000000000 +0000 contentdirectory.xml
-rwxr-xr-x 1 root root  8764 2025-02-06 09:09:54.000000000 +0000 logo120.png
-rwxr-xr-x 1 root root   930 2025-02-06 09:09:54.000000000 +0000 logo16.gif
-rwxr-xr-x 1 root root  1173 2025-02-06 09:09:54.000000000 +0000 logo32.gif
-rwxr-xr-x 1 root root  1504 2025-02-06 09:09:54.000000000 +0000 logo48.gif
-rwxr-xr-x 1 root root   735 2025-02-06 09:09:54.000000000 +0000 osinfo.xml
-rwxr-xr-x 1 root root  5928 2025-02-06 09:09:54.000000000 +0000 wancommonifcfg.xml
-rwxr-xr-x 1 root root 13444 2025-02-06 09:09:54.000000000 +0000 wanipconn.xml

/nova/etc/user:
total 4
-rwxr-xr-x 1 root root 2230 2025-02-06 09:13:53.000000000 +0000 system.x3

/nova/etc/www:
total 4
-rwxr-xr-x 1 root root 2458 2025-02-06 09:13:53.000000000 +0000 system.x3

/nova/lib:
total 16
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 defconf
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:16.000000000 +0000 profiler
-rwxr-xr-x 1 root root 4085 2025-02-06 09:09:52.000000000 +0000 xmlnames2

/nova/lib/console:
total 2116
-rwxr-xr-x 1 root root 2155491 2025-02-06 09:20:49.000000000 +0000 1073741824.mem
-rwxr-xr-x 1 root root     510 2025-02-06 09:09:52.000000000 +0000 logo.txt
-rwxr-xr-x 1 root root      18 2025-02-06 09:09:52.000000000 +0000 sublogo.txt

/nova/lib/defconf:
total 100
-rwxr-xr-x 1 root root   567 2025-02-06 09:09:52.000000000 +0000 defconf
-rwxr-xr-x 1 root root  4995 2025-02-06 09:09:52.000000000 +0000 defconf-caps
-rwxr-xr-x 1 root root  3700 2025-02-06 09:09:52.000000000 +0000 defconf-wps-sync
-rwxr-xr-x 1 root root 85033 2025-02-06 09:09:52.000000000 +0000 get-custom-defconf

/nova/lib/profiler:
total 16
-rwxr-xr-x 1 root root 15204 2025-02-06 09:53:20.000000000 +0000 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 488
-rwxr-xr-x 1 root root 404168 2025-02-06 09:54:03.000000000 +0000 mke2fs
-rwxr-xr-x 1 root root  24844 2025-02-06 09:13:51.000000000 +0000 nandfix
-rwxr-xr-x 1 root root  63848 2025-02-06 09:16:45.000000000 +0000 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2025-02-06 10:07:17.000000000 +0000 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:17.000000000 +0000 deinstall
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:17.000000000 +0000 lock
lrwxrwxrwx 1 root root    8 2025-02-06 10:07:17.000000000 +0000 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2025-02-06 10:07:17.000000000 +0000 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2025-02-06 10:07:17.000000000 +0000 post
lrwxrwxrwx 1 root root    7 2025-02-06 10:07:17.000000000 +0000 run -> /rw/run
lrwxrwxrwx 1 root root    4 2025-02-06 10:07:17.000000000 +0000 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

