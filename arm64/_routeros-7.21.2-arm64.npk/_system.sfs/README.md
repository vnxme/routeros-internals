### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 9845782 bytes, 804 inodes, blocksize: 524288 bytes, created: Thu Jan 29 11:00:30 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:18.000000000 +0000 bin
drwxr-xr-x 9 root root 4096 2026-01-29 11:00:17.000000000 +0000 bndl
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 boot
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:18.000000000 +0000 dev
lrwxrwxrwx 1 root root   11 2026-01-29 11:00:18.000000000 +0000 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:18.000000000 +0000 etc
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:18.000000000 +0000 flash
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2026-01-29 11:00:18.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-29 11:00:18.000000000 +0000 nova
lrwxrwxrwx 1 root root    9 2026-01-29 11:00:18.000000000 +0000 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:18.000000000 +0000 proc
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:18.000000000 +0000 ram
lrwxrwxrwx 1 root root    9 2026-01-29 11:00:18.000000000 +0000 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 sbin
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:18.000000000 +0000 sys
lrwxrwxrwx 1 root root    7 2026-01-29 11:00:18.000000000 +0000 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2026-01-29 11:00:18.000000000 +0000 var

/bin:
total 228
lrwxrwxrwx 1 root root     21 2026-01-29 11:00:18.000000000 +0000 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root  13724 2026-01-29 10:02:56.000000000 +0000 catlog
lrwxrwxrwx 1 root root     15 2026-01-29 11:00:18.000000000 +0000 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root     15 2026-01-29 11:00:18.000000000 +0000 login -> /nova/bin/login
-rwxr-xr-x 1 root root  19552 2026-01-29 10:43:40.000000000 +0000 mkexfatfs
-rwxr-xr-x 1 root root   9416 2026-01-29 10:02:56.000000000 +0000 pakp
lrwxrwxrwx 1 root root     21 2026-01-29 11:00:18.000000000 +0000 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root     15 2026-01-29 11:00:18.000000000 +0000 shell -> /nova/bin/login
-rwxr-xr-x 1 root root 183480 2026-01-29 10:44:30.000000000 +0000 sshfs

/bndl:
total 28
drwxr-xr-x 4 root root 4096 2026-01-29 11:00:17.000000000 +0000 advanced-tools
drwxr-xr-x 5 root root 4096 2026-01-29 11:00:17.000000000 +0000 dhcp
drwxr-xr-x 5 root root 4096 2026-01-29 11:00:17.000000000 +0000 hotspot
drwxr-xr-x 4 root root 4096 2026-01-29 11:00:17.000000000 +0000 ipv6
drwxr-xr-x 5 root root 4096 2026-01-29 11:00:17.000000000 +0000 ppp
drwxr-xr-x 5 root root 4096 2026-01-29 11:00:17.000000000 +0000 security
drwxr-xr-x 5 root root 4096 2026-01-29 11:00:17.000000000 +0000 wifi

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2026-01-29 11:00:17.000000000 +0000 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 webfig

/bndl/advanced-tools/home/web/webfig:
total 8
-rw-r--r-- 1 root root 2407 2026-01-29 10:45:35.000000000 +0000 advtool-990a874d6308.jg.gz
-rwxr-xr-x 1 root root  106 2026-01-29 10:45:36.000000000 +0000 advtool.info
lrwxrwxrwx 1 root root   26 2026-01-29 10:47:10.000000000 +0000 advtool.jg.gz -> advtool-990a874d6308.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 lib

/bndl/advanced-tools/nova/bin:
total 208
-rwxr-xr-x 1 root root 30428 2026-01-29 10:45:09.000000000 +0000 ddns
-rwxr-xr-x 1 root root 13728 2026-01-29 10:44:45.000000000 +0000 fping
-rwxr-xr-x 1 root root 17984 2026-01-29 10:45:24.000000000 +0000 macscan
-rwxr-xr-x 1 root root 67548 2026-01-29 10:47:10.000000000 +0000 netwatch
-rwxr-xr-x 1 root root 17876 2026-01-29 10:44:53.000000000 +0000 pspeed
-rwxr-xr-x 1 root root 34552 2026-01-29 10:45:41.000000000 +0000 scanner
-rwxr-xr-x 1 root root 13740 2026-01-29 10:45:44.000000000 +0000 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 console

/bndl/advanced-tools/nova/lib/console:
total 28
-rwxr-xr-x 1 root root 26059 2026-01-29 10:45:14.000000000 +0000 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 home
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2026-01-29 11:00:17.000000000 +0000 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 webfig

/bndl/dhcp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4979 2026-01-29 10:45:59.000000000 +0000 dhcp-56fe4f79ab54.jg.gz
-rwxr-xr-x 1 root root  101 2026-01-29 10:45:59.000000000 +0000 dhcp.info
lrwxrwxrwx 1 root root   23 2026-01-29 10:48:59.000000000 +0000 dhcp.jg.gz -> dhcp-56fe4f79ab54.jg.gz

/bndl/dhcp/lib:
total 96
-rwxr-xr-x 1 root root 96560 2026-01-29 10:45:23.000000000 +0000 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 lib

/bndl/dhcp/nova/bin:
total 328
-rwxr-xr-x 1 root root 228104 2026-01-29 10:48:59.000000000 +0000 dhcp
-rwxr-xr-x 1 root root 104796 2026-01-29 10:47:19.000000000 +0000 dhcpclient

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 console

/bndl/dhcp/nova/lib/console:
total 120
-rwxr-xr-x 1 root root 120952 2026-01-29 10:45:41.000000000 +0000 1128267776.mem

/bndl/hotspot:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-29 11:00:17.000000000 +0000 nova

/bndl/hotspot/home:
total 4
drwxr-xr-x 4 root root 4096 2026-01-29 11:00:17.000000000 +0000 web

/bndl/hotspot/home/web:
total 8
drwxr-xr-x 5 root root 4096 2026-01-29 11:00:17.000000000 +0000 hotspot
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 webfig

/bndl/hotspot/home/web/hotspot:
total 68
-rw-r--r-- 1 root root 1094 2025-12-04 12:00:20.000000000 +0000 alogin.html
-rw-r--r-- 1 root root  311 2025-12-04 12:00:20.000000000 +0000 api.json
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 css
-rw-r--r-- 1 root root  640 2025-12-04 12:00:20.000000000 +0000 error.html
-rw-r--r-- 1 root root 4038 2026-01-14 12:34:42.000000000 +0000 errors.txt
-rw-r--r-- 1 root root  903 2025-12-04 12:00:20.000000000 +0000 favicon.ico
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 img
-rw-r--r-- 1 root root 4423 2025-12-04 12:00:20.000000000 +0000 login.html
-rw-r--r-- 1 root root 1459 2025-12-04 12:00:20.000000000 +0000 logout.html
-rw-r--r-- 1 root root 7218 2025-12-04 12:00:20.000000000 +0000 md5.js
-rw-r--r-- 1 root root 1204 2025-12-04 12:00:20.000000000 +0000 radvert.html
-rw-r--r-- 1 root root  330 2025-12-04 12:00:20.000000000 +0000 redirect.html
-rw-r--r-- 1 root root  877 2025-12-04 12:00:20.000000000 +0000 rlogin.html
-rw-r--r-- 1 root root 2855 2025-12-04 12:00:20.000000000 +0000 status.html
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 xml

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
-rw-r--r-- 1 root root 4316 2026-01-29 10:49:37.000000000 +0000 hotspot-c9242ba2f199.jg.gz
-rwxr-xr-x 1 root root  107 2026-01-29 10:49:37.000000000 +0000 hotspot.info
lrwxrwxrwx 1 root root   26 2026-01-29 10:50:08.000000000 +0000 hotspot.jg.gz -> hotspot-c9242ba2f199.jg.gz

/bndl/hotspot/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 modules

/bndl/hotspot/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 5.6.3

/bndl/hotspot/lib/modules/5.6.3:
total 4
-rw-r--r-- 1 root root    0 2026-01-29 10:49:44.000000000 +0000 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 net

/bndl/hotspot/lib/modules/5.6.3/net:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 ipv4

/bndl/hotspot/lib/modules/5.6.3/net/ipv4:
total 64
-rw-r--r-- 1 root root 61888 2026-01-29 10:49:31.000000000 +0000 unicl.ko

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 lib

/bndl/hotspot/nova/bin:
total 236
-rwxr-xr-x 1 root root 240244 2026-01-29 10:47:05.000000000 +0000 hotspot

/bndl/hotspot/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 radius

/bndl/hotspot/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2026-01-29 10:49:29.000000000 +0000 hotspot.x3

/bndl/hotspot/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 console

/bndl/hotspot/nova/lib/console:
total 80
-rwxr-xr-x 1 root root 81766 2026-01-29 10:48:22.000000000 +0000 1132462080.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2026-01-29 11:00:17.000000000 +0000 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 webfig

/bndl/ipv6/home/web/webfig:
total 16
-rw-r--r-- 1 root root 8293 2026-01-29 10:45:54.000000000 +0000 ipv6-fec458ac8beb.jg.gz
-rwxr-xr-x 1 root root  101 2026-01-29 10:45:54.000000000 +0000 ipv6.info
lrwxrwxrwx 1 root root   23 2026-01-29 10:46:11.000000000 +0000 ipv6.jg.gz -> ipv6-fec458ac8beb.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2026-01-29 11:00:17.000000000 +0000 lib

/bndl/ipv6/nova/bin:
total 96
-rwxr-xr-x 1 root root 30380 2026-01-29 10:46:10.000000000 +0000 ippool6
-rwxr-xr-x 1 root root 63400 2026-01-29 10:45:21.000000000 +0000 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 route

/bndl/ipv6/nova/lib/console:
total 188
-rwxr-xr-x 1 root root 188460 2026-01-29 10:45:39.000000000 +0000 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2025-12-04 12:00:20.000000000 +0000 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-29 11:00:17.000000000 +0000 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 webfig

/bndl/ppp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 6646 2026-01-29 10:46:33.000000000 +0000 ppp-3833e10a898f.jg.gz
-rwxr-xr-x 1 root root   99 2026-01-29 10:46:33.000000000 +0000 ppp.info
lrwxrwxrwx 1 root root   22 2026-01-29 10:54:46.000000000 +0000 ppp.jg.gz -> ppp-3833e10a898f.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2026-01-29 11:00:17.000000000 +0000 5.6.3

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 misc
-rw-r--r-- 1 root root  278 2026-01-29 10:54:31.000000000 +0000 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 148
-rw-r--r-- 1 root root 19456 2026-01-29 10:42:15.000000000 +0000 ppp_async.ko
-rw-r--r-- 1 root root 10112 2026-01-29 10:42:15.000000000 +0000 ppp_deflate.ko
-rw-r--r-- 1 root root 49512 2026-01-29 10:42:15.000000000 +0000 ppp_generic.ko
-rw-r--r-- 1 root root 11880 2026-01-29 10:42:15.000000000 +0000 ppp_mppe.ko
-rw-r--r-- 1 root root 17816 2026-01-29 10:42:15.000000000 +0000 ppp_synctty.ko
-rw-r--r-- 1 root root 20408 2026-01-29 10:42:15.000000000 +0000 pppoe.ko
-rw-r--r-- 1 root root  8272 2026-01-29 10:42:15.000000000 +0000 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 124
-rw-r--r-- 1 root root 52592 2026-01-29 10:47:10.000000000 +0000 ovpn.ko
-rw-r--r-- 1 root root  9880 2026-01-29 10:47:47.000000000 +0000 pppoefp.ko
-rw-r--r-- 1 root root 59736 2026-01-29 10:48:15.000000000 +0000 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 88
-rw-r--r-- 1 root root 67464 2026-01-29 10:46:01.000000000 +0000 l2tp.ko
-rw-r--r-- 1 root root 17064 2026-01-29 10:45:28.000000000 +0000 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2026-01-29 11:00:17.000000000 +0000 etc
drwxr-xr-x 4 root root 4096 2026-01-29 11:00:17.000000000 +0000 lib

/bndl/ppp/nova/bin:
total 588
-rwxr-xr-x 1 root root 598104 2026-01-29 10:53:13.000000000 +0000 ppp
lrwxrwxrwx 1 root root      3 2026-01-29 10:54:17.000000000 +0000 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2026-01-29 10:45:55.000000000 +0000 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2026-01-29 10:45:55.000000000 +0000 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 profiler

/bndl/ppp/nova/lib/console:
total 152
-rwxr-xr-x 1 root root 154909 2026-01-29 10:46:04.000000000 +0000 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 8
-rwxr-xr-x 1 root root 5304 2026-01-29 10:48:41.000000000 +0000 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-29 11:00:17.000000000 +0000 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 webfig

/bndl/security/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4502 2026-01-29 10:52:38.000000000 +0000 secure-b9984ff4934e.jg.gz
-rwxr-xr-x 1 root root  104 2026-01-29 10:52:38.000000000 +0000 secure.info
lrwxrwxrwx 1 root root   25 2026-01-29 10:57:08.000000000 +0000 secure.jg.gz -> secure-b9984ff4934e.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 5.6.3

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2026-01-29 11:00:17.000000000 +0000 kernel
-rw-r--r-- 1 root root  106 2026-01-29 10:56:53.000000000 +0000 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 crypto
drwxr-xr-x 5 root root 4096 2026-01-29 11:00:17.000000000 +0000 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 96
-rw-r--r-- 1 root root  9264 2026-01-29 10:42:12.000000000 +0000 blowfish_common.ko
-rw-r--r-- 1 root root  6848 2026-01-29 10:42:12.000000000 +0000 blowfish_generic.ko
-rw-r--r-- 1 root root 20600 2026-01-29 10:42:12.000000000 +0000 camellia_generic.ko
-rw-r--r-- 1 root root 13232 2026-01-29 10:42:12.000000000 +0000 chacha20poly1305.ko
-rw-r--r-- 1 root root  5688 2026-01-29 10:42:12.000000000 +0000 echainiv.ko
-rw-r--r-- 1 root root 15400 2026-01-29 10:42:12.000000000 +0000 twofish_common.ko
-rw-r--r-- 1 root root  9384 2026-01-29 10:42:12.000000000 +0000 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 key
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 36
-rw-r--r-- 1 root root 13152 2026-01-29 10:42:21.000000000 +0000 ah4.ko
-rw-r--r-- 1 root root 18864 2026-01-29 10:42:21.000000000 +0000 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 44
-rw-r--r-- 1 root root 41768 2026-01-29 10:42:22.000000000 +0000 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 36
-rw-r--r-- 1 root root 35040 2026-01-29 10:42:24.000000000 +0000 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2026-01-29 11:00:17.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 lib

/bndl/security/nova/bin:
total 716
-rwxr-xr-x 1 root root 520068 2026-01-29 10:56:38.000000000 +0000 ipsec
lrwxrwxrwx 1 root root      5 2026-01-29 10:56:38.000000000 +0000 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 212736 2026-01-29 10:53:06.000000000 +0000 ssh
lrwxrwxrwx 1 root root      3 2026-01-29 10:53:47.000000000 +0000 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2026-01-29 10:50:16.000000000 +0000 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2026-01-29 10:50:16.000000000 +0000 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 console

/bndl/security/nova/lib/console:
total 96
-rwxr-xr-x 1 root root 94476 2026-01-29 10:51:20.000000000 +0000 1077936128.mem

/bndl/wifi:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-29 11:00:17.000000000 +0000 nova

/bndl/wifi/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 web

/bndl/wifi/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 webfig

/bndl/wifi/home/web/webfig:
total 16
-rw-r--r-- 1 root root 9630 2026-01-29 10:45:41.000000000 +0000 wave2-b12d20571c98.jg.gz
-rwxr-xr-x 1 root root  103 2026-01-29 10:45:41.000000000 +0000 wave2.info
lrwxrwxrwx 1 root root   24 2026-01-29 11:00:05.000000000 +0000 wave2.jg.gz -> wave2-b12d20571c98.jg.gz

/bndl/wifi/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 modules

/bndl/wifi/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 5.6.3

/bndl/wifi/lib/modules/5.6.3:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 misc
-rw-r--r-- 1 root root   23 2026-01-29 10:59:42.000000000 +0000 modules.dep.wifi

/bndl/wifi/lib/modules/5.6.3/misc:
total 56
-rw-r--r-- 1 root root 56568 2026-01-29 10:47:52.000000000 +0000 c2.ko

/bndl/wifi/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2026-01-29 11:00:17.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 lib

/bndl/wifi/nova/bin:
total 1008
-rwxr-xr-x 1 root root 1028336 2026-01-29 10:58:23.000000000 +0000 ww2

/bndl/wifi/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 radius

/bndl/wifi/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 183 2026-01-29 10:45:19.000000000 +0000 wifi.x3

/bndl/wifi/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2026-01-29 10:45:19.000000000 +0000 wifi.x3

/bndl/wifi/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 console

/bndl/wifi/nova/lib/console:
total 212
-rwxr-xr-x 1 root root 216785 2026-01-29 10:45:34.000000000 +0000 1275068416.mem

/boot:
total 0

/dev:
total 0

/etc:
total 796
-rw-r--r-- 1 root root  40672 2026-01-29 10:00:27.000000000 +0000 70x0-7.21.2.fwf
-rw-r--r-- 1 root root  31320 2026-01-29 10:02:50.000000000 +0000 a3700-7.21.2.fwf
-rw-r--r-- 1 root root  57088 2026-01-29 10:00:31.000000000 +0000 al64-7.21.2.fwf
-rw-r--r-- 1 root root  61876 2026-01-29 10:00:31.000000000 +0000 al64B-7.21.2.fwf
-rw-r--r-- 1 root root  53160 2026-01-29 10:00:30.000000000 +0000 al64v3-7.21.2.fwf
-rw-r--r-- 1 root root  54108 2026-01-29 10:00:33.000000000 +0000 dx2528-7.21.2.fwf
-rw-r--r-- 1 root root  12536 2026-01-14 12:35:05.000000000 +0000 fan_i2c.stm32
-rw-r--r-- 1 root root  46256 2026-01-29 10:00:30.000000000 +0000 ipq5300-7.21.2.fwf
-rw-r--r-- 1 root root  37324 2026-01-29 10:00:29.000000000 +0000 ipq6000-7.21.2.fwf
-rw-r--r-- 1 root root  39724 2026-01-29 10:00:30.000000000 +0000 ipq807x-7.21.2.fwf
-rw-r--r-- 1 root root  49764 2026-01-29 10:00:32.000000000 +0000 ipq9574-7.21.2.fwf
-rw-r--r-- 1 root root 130743 2026-01-14 12:35:05.000000000 +0000 license
-rwxr-xr-x 1 root root  86908 2026-01-29 09:54:40.000000000 +0000 oui.bin
-rw-r--r-- 1 root root  29128 2026-01-29 09:54:40.000000000 +0000 poe-pse-proxy.stm32
-rw-r--r-- 1 root root  14140 2026-01-29 09:54:40.000000000 +0000 pse-ch4-SUOUT_PSUCTRL.samd20
-rw-r--r-- 1 root root  13796 2026-01-29 09:54:40.000000000 +0000 pse-ch8-CRS328.samd20
-rw-r--r-- 1 root root  14212 2026-01-29 09:54:40.000000000 +0000 pse-ch8-RB5009.samd20
-rw-r--r-- 1 root root   4049 2026-01-14 12:35:05.000000000 +0000 stm8_hw_monitor.bin
lrwxrwxrwx 1 root root     24 2026-01-29 11:00:18.000000000 +0000 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2026-01-29 11:00:18.000000000 +0000 web

/home/web:
total 64
drwxr-xr-x 2 root root  4096 2026-01-29 11:00:17.000000000 +0000 assets
-rwxr-xr-x 1 root root 19798 2026-01-29 09:59:26.000000000 +0000 bth-files.html
-rwxr-xr-x 1 root root   600 2026-01-14 12:35:05.000000000 +0000 favicon.png
-rwxr-xr-x 1 root root   689 2026-01-14 12:35:05.000000000 +0000 favicon.svg
-rwxr-xr-x 1 root root   708 2026-01-14 12:35:05.000000000 +0000 graph.css
drwxr-xr-x 2 root root  4096 2026-01-29 11:00:17.000000000 +0000 help
-rwxr-xr-x 1 root root  1317 2026-01-14 12:35:05.000000000 +0000 index2.html
lrwxrwxrwx 1 root root    12 2026-01-29 10:44:40.000000000 +0000 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2026-01-14 12:35:05.000000000 +0000 logo.png
-rw-r--r-- 1 root root  2427 2026-01-14 12:35:05.000000000 +0000 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2026-01-14 12:35:05.000000000 +0000 robots.txt
drwxr-xr-x 2 root root  4096 2026-01-29 11:00:17.000000000 +0000 webfig
drwxr-xr-x 2 root root  4096 2026-01-29 11:00:18.000000000 +0000 winbox

/home/web/assets:
total 168
-rw-r--r-- 1 root root  19040 2026-01-14 12:35:05.000000000 +0000 400.woff2
-rw-r--r-- 1 root root  19156 2026-01-14 12:35:05.000000000 +0000 700.woff2
-rwxr-xr-x 1 root root   1050 2026-01-14 12:35:05.000000000 +0000 script-582e5506ba67.js
-rwxr-xr-x 1 root root 126534 2026-01-29 09:54:40.000000000 +0000 style-8b9b478ed9bf.css

/home/web/help:
total 4
-rw-r--r-- 1 root root 118 2026-01-14 12:35:05.000000000 +0000 license.html

/home/web/webfig:
total 684
-rwxr-xr-x 1 root root   9157 2026-01-29 09:58:03.000000000 +0000 curve255-541e54a862be.js
-rwxr-xr-x 1 root root     72 2026-01-29 10:04:00.000000000 +0000 icons.info
-rwxr-xr-x 1 root root  24790 2026-01-29 09:54:40.000000000 +0000 icons.png
-rwxr-xr-x 1 root root     55 2026-01-29 10:04:02.000000000 +0000 icons24.info
-rwxr-xr-x 1 root root  40423 2026-01-29 09:54:40.000000000 +0000 icons24.png
-rwxr-xr-x 1 root root     54 2026-01-29 10:04:02.000000000 +0000 icons32.info
-rwxr-xr-x 1 root root  55936 2026-01-29 09:54:40.000000000 +0000 icons32.png
-rwxr-xr-x 1 root root  23044 2026-01-29 09:58:02.000000000 +0000 index.html
lrwxrwxrwx 1 root root     13 2026-01-29 09:58:03.000000000 +0000 list -> /ram/gum.list
-rwxr-xr-x 1 root root 406050 2026-01-29 09:58:03.000000000 +0000 master-d53cd8ec58cb.js
-rw-r--r-- 1 root root 109651 2026-01-29 10:04:05.000000000 +0000 roteros-7bf05b783f0b.jg.gz
-rwxr-xr-x 1 root root    108 2026-01-29 10:04:06.000000000 +0000 roteros.info
lrwxrwxrwx 1 root root     26 2026-01-29 10:44:40.000000000 +0000 roteros.jg.gz -> roteros-7bf05b783f0b.jg.gz

/home/web/winbox:
total 0

/lib:
total 1716
drwxr-xr-x 3 root root   4096 2026-01-29 11:00:17.000000000 +0000 firmware
-rwxr-xr-x 1 root root 247440 2026-01-29 09:56:07.000000000 +0000 libc.so
-rwxr-xr-x 1 root root  75932 2026-01-29 10:02:42.000000000 +0000 libeap.so
-rwxr-xr-x 1 root root  21836 2026-01-29 09:58:11.000000000 +0000 libjson.so
-rwxr-xr-x 1 root root 154232 2026-01-29 10:00:57.000000000 +0000 librappsup.so
-rwxr-xr-x 1 root root 104624 2026-01-29 09:59:12.000000000 +0000 libubox.so
-rwxr-xr-x 1 root root  67508 2026-01-29 09:58:01.000000000 +0000 libuc++.so
-rwxr-xr-x 1 root root 228704 2026-01-29 10:01:20.000000000 +0000 libucrypto.so
-rwxr-xr-x 1 root root  26140 2026-01-29 09:59:04.000000000 +0000 libufiber.so
-rwxr-xr-x 1 root root  55180 2026-01-29 09:59:10.000000000 +0000 libuhttp.so
-rwxr-xr-x 1 root root 579120 2026-01-29 09:58:51.000000000 +0000 libumsg.so
-rwxr-xr-x 1 root root  32696 2026-01-29 10:01:40.000000000 +0000 liburadius.so
-rwxr-xr-x 1 root root   9496 2026-01-29 10:01:28.000000000 +0000 libuxml++.so
-rwxr-xr-x 1 root root  34612 2026-01-29 09:58:06.000000000 +0000 libwww.so
-rwxr-xr-x 1 root root  13536 2026-01-29 09:58:10.000000000 +0000 libxml.so
-rwxr-xr-x 1 root root  67056 2026-01-29 09:58:11.000000000 +0000 libz.so
drwxr-xr-x 3 root root   4096 2026-01-29 11:00:17.000000000 +0000 modules
lrwxrwxrwx 1 root root     27 2026-01-29 11:00:18.000000000 +0000 valgrind -> /pckg/valgrind/lib/valgrind

/lib/firmware:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 inside-secure

/lib/firmware/inside-secure:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 eip197_minifw

/lib/firmware/inside-secure/eip197_minifw:
total 8
-rw-r--r-- 1 root root 100 2026-01-14 12:35:05.000000000 +0000 ifpp.bin
-rw-r--r-- 1 root root 108 2026-01-14 12:35:05.000000000 +0000 ipue.bin

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2026-01-29 11:00:17.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 6 root root 4096 2026-01-29 11:00:17.000000000 +0000 drivers
drwxr-xr-x 8 root root 4096 2026-01-29 11:00:17.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 misc
-rw-r--r-- 1 root root 3059 2026-01-29 10:44:34.000000000 +0000 modules.dep.system
drwxr-xr-x 6 root root 4096 2026-01-29 11:00:17.000000000 +0000 net

/lib/modules/5.6.3/drivers:
total 16
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 char
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 crypto
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 misc
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 net

/lib/modules/5.6.3/drivers/char:
total 64
-rw-r--r-- 1 root root 11744 2026-01-29 10:41:46.000000000 +0000 ac5_gwd.ko
-rw-r--r-- 1 root root  5160 2026-01-29 10:41:47.000000000 +0000 al_cause.ko
-rw-r--r-- 1 root root  9272 2026-01-29 10:41:44.000000000 +0000 armada3700_wdt.ko
-rw-r--r-- 1 root root 15080 2026-01-29 10:41:38.000000000 +0000 ipqhwmon.ko
-rw-r--r-- 1 root root 14080 2026-01-29 10:36:26.000000000 +0000 ticker.ko

/lib/modules/5.6.3/drivers/crypto:
total 116
-rw-r--r-- 1 root root 117504 2026-01-29 10:41:27.000000000 +0000 al_crypto.ko

/lib/modules/5.6.3/drivers/misc:
total 12
-rw-r--r-- 1 root root 11984 2026-01-29 10:41:36.000000000 +0000 al3hwmon.ko

/lib/modules/5.6.3/drivers/net:
total 3220
-rw-r--r-- 1 root root  115800 2026-01-29 10:41:20.000000000 +0000 al.ko
-rw-r--r-- 1 root root  345976 2026-01-29 10:42:00.000000000 +0000 alder_eth.ko
-rw-r--r-- 1 root root   51552 2026-01-29 10:38:57.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root   58448 2026-01-29 10:38:03.000000000 +0000 atl1c.ko
-rw-r--r-- 1 root root  130888 2026-01-29 10:41:42.000000000 +0000 hk_eth.ko
-rw-r--r-- 1 root root   13656 2026-01-29 10:40:33.000000000 +0000 imq.ko
-rw-r--r-- 1 root root   57376 2026-01-29 10:38:57.000000000 +0000 marvell_amethyst.ko
-rw-r--r-- 1 root root   15760 2026-01-29 10:42:20.000000000 +0000 mpls_fp.ko
-rw-r--r-- 1 root root   45232 2026-01-29 10:41:38.000000000 +0000 mvneta.ko
-rw-r--r-- 1 root root  100016 2026-01-29 10:41:41.000000000 +0000 mvpp2.ko
-rw-r--r-- 1 root root  283048 2026-01-29 10:42:22.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root  246728 2026-01-29 10:37:48.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root 1025176 2026-01-29 10:42:21.000000000 +0000 prestera_dx_mac.ko
-rw-r--r-- 1 root root   75024 2026-01-29 10:41:16.000000000 +0000 qca_nss_gmac.ko
-rw-r--r-- 1 root root  174896 2026-01-29 10:41:14.000000000 +0000 qca_nss_macsec.ko
-rw-r--r-- 1 root root  231240 2026-01-29 10:41:47.000000000 +0000 quectel_mhi.ko
-rw-r--r-- 1 root root    5512 2026-01-29 10:40:42.000000000 +0000 sram.ko
-rw-r--r-- 1 root root  105552 2026-01-29 10:39:02.000000000 +0000 switch.ko
drwxr-xr-x 2 root root    4096 2026-01-29 11:00:17.000000000 +0000 usb
-rw-r--r-- 1 root root   31592 2026-01-29 10:36:25.000000000 +0000 via-velocity.ko
-rw-r--r-- 1 root root   60704 2026-01-29 10:41:52.000000000 +0000 vmxnet3.ko
-rw-r--r-- 1 root root   71736 2026-01-29 10:42:15.000000000 +0000 vxlan2.ko

/lib/modules/5.6.3/drivers/net/usb:
total 252
-rw-r--r-- 1 root root 103720 2026-01-29 10:42:07.000000000 +0000 fp_usbnet.ko
-rw-r--r-- 1 root root 147600 2026-01-29 10:41:54.000000000 +0000 mbim.ko

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x  3 root root 4096 2026-01-29 11:00:17.000000000 +0000 arch
drwxr-xr-x  2 root root 4096 2026-01-29 11:00:17.000000000 +0000 crypto
drwxr-xr-x 10 root root 4096 2026-01-29 11:00:17.000000000 +0000 drivers
drwxr-xr-x  7 root root 4096 2026-01-29 11:00:17.000000000 +0000 fs
drwxr-xr-x  5 root root 4096 2026-01-29 11:00:17.000000000 +0000 lib
drwxr-xr-x 12 root root 4096 2026-01-29 11:00:17.000000000 +0000 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 4 root root 4096 2026-01-29 11:00:17.000000000 +0000 arm64

/lib/modules/5.6.3/kernel/arch/arm64:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 crypto
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 oprofile

/lib/modules/5.6.3/kernel/arch/arm64/crypto:
total 32
-rw-r--r-- 1 root root 14744 2026-01-29 10:42:12.000000000 +0000 chacha-neon.ko
-rw-r--r-- 1 root root 12528 2026-01-29 10:42:12.000000000 +0000 poly1305-neon.ko

/lib/modules/5.6.3/kernel/arch/arm64/oprofile:
total 60
-rw-r--r-- 1 root root 59744 2026-01-29 10:42:12.000000000 +0000 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 52
-rw-r--r-- 1 root root  5072 2026-01-29 10:42:12.000000000 +0000 arc4.ko
-rw-r--r-- 1 root root 18016 2026-01-29 10:42:12.000000000 +0000 ccm.ko
-rw-r--r-- 1 root root  7552 2026-01-29 10:42:12.000000000 +0000 cmac.ko
-rw-r--r-- 1 root root  6096 2026-01-29 10:42:12.000000000 +0000 des_generic.ko
-rw-r--r-- 1 root root  6960 2026-01-29 10:42:12.000000000 +0000 md4.ko

/lib/modules/5.6.3/kernel/drivers:
total 32
drwxr-xr-x  3 root root 4096 2026-01-29 11:00:17.000000000 +0000 crypto
drwxr-xr-x  3 root root 4096 2026-01-29 11:00:17.000000000 +0000 dma
drwxr-xr-x  3 root root 4096 2026-01-29 11:00:17.000000000 +0000 hid
drwxr-xr-x  3 root root 4096 2026-01-29 11:00:17.000000000 +0000 mmc
drwxr-xr-x  6 root root 4096 2026-01-29 11:00:17.000000000 +0000 net
drwxr-xr-x  3 root root 4096 2026-01-29 11:00:17.000000000 +0000 pci
drwxr-xr-x  2 root root 4096 2026-01-29 11:00:17.000000000 +0000 phy
drwxr-xr-x 10 root root 4096 2026-01-29 11:00:17.000000000 +0000 usb

/lib/modules/5.6.3/kernel/drivers/crypto:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 inside-secure

/lib/modules/5.6.3/kernel/drivers/crypto/inside-secure:
total 160
-rw-r--r-- 1 root root 162328 2026-01-29 10:42:13.000000000 +0000 crypto_safexcel.ko

/lib/modules/5.6.3/kernel/drivers/dma:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 al

/lib/modules/5.6.3/kernel/drivers/dma/al:
total 52
-rw-r--r-- 1 root root 49320 2026-01-29 10:42:13.000000000 +0000 al_dma_drv.ko

/lib/modules/5.6.3/kernel/drivers/hid:
total 100
-rw-r--r-- 1 root root  5520 2026-01-29 10:42:13.000000000 +0000 hid-generic.ko
-rw-r--r-- 1 root root 86168 2026-01-29 10:42:13.000000000 +0000 hid.ko
drwxr-xr-x 2 root root  4096 2026-01-29 11:00:17.000000000 +0000 usbhid

/lib/modules/5.6.3/kernel/drivers/hid/usbhid:
total 44
-rw-r--r-- 1 root root 44752 2026-01-29 10:42:13.000000000 +0000 usbhid.ko

/lib/modules/5.6.3/kernel/drivers/mmc:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 host

/lib/modules/5.6.3/kernel/drivers/mmc/host:
total 92
-rw-r--r-- 1 root root 10200 2026-01-29 10:42:13.000000000 +0000 sdhci-pltfm.ko
-rw-r--r-- 1 root root 22296 2026-01-29 10:42:13.000000000 +0000 sdhci-xenon-driver.ko
-rw-r--r-- 1 root root 57088 2026-01-29 10:42:14.000000000 +0000 sdhci.ko

/lib/modules/5.6.3/kernel/drivers/net:
total 256
drwxr-xr-x 2 root root  4096 2026-01-29 11:00:17.000000000 +0000 bonding
-rw-r--r-- 1 root root 50448 2026-01-29 10:42:14.000000000 +0000 macsec.ko
-rw-r--r-- 1 root root 27576 2026-01-29 10:42:15.000000000 +0000 macvlan.ko
drwxr-xr-x 2 root root  4096 2026-01-29 11:00:17.000000000 +0000 slip
-rw-r--r-- 1 root root 55280 2026-01-29 10:42:15.000000000 +0000 tun.ko
drwxr-xr-x 2 root root  4096 2026-01-29 11:00:17.000000000 +0000 usb
-rw-r--r-- 1 root root 23264 2026-01-29 10:42:15.000000000 +0000 veth.ko
-rw-r--r-- 1 root root 50112 2026-01-29 10:42:15.000000000 +0000 virtio_net.ko
-rw-r--r-- 1 root root 26464 2026-01-29 10:42:15.000000000 +0000 vrf.ko
drwxr-xr-x 2 root root  4096 2026-01-29 11:00:17.000000000 +0000 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 176
-rw-r--r-- 1 root root 177576 2026-01-29 10:42:14.000000000 +0000 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 7600 2026-01-29 10:42:15.000000000 +0000 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 260
-rw-r--r-- 1 root root 25952 2026-01-29 10:42:15.000000000 +0000 ax88179_178a.ko
-rw-r--r-- 1 root root 56184 2026-01-29 10:42:15.000000000 +0000 hso.ko
-rw-r--r-- 1 root root 75824 2026-01-29 10:42:15.000000000 +0000 r8152.ko
-rw-r--r-- 1 root root 19208 2026-01-29 10:42:15.000000000 +0000 sierra_net.ko
-rw-r--r-- 1 root root 35032 2026-01-29 10:42:15.000000000 +0000 smsc95xx.ko
-rw-r--r-- 1 root root 42760 2026-01-29 10:42:15.000000000 +0000 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 124
-rw-r--r-- 1 root root 126968 2026-01-29 10:42:15.000000000 +0000 wireguard.ko

/lib/modules/5.6.3/kernel/drivers/pci:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 controller

/lib/modules/5.6.3/kernel/drivers/pci/controller:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 dwc

/lib/modules/5.6.3/kernel/drivers/pci/controller/dwc:
total 64
-rw-r--r-- 1 root root 61984 2026-01-29 10:42:16.000000000 +0000 pcie-qcom.ko

/lib/modules/5.6.3/kernel/drivers/phy:
total 12
-rw-r--r-- 1 root root 10552 2026-01-29 10:42:16.000000000 +0000 phy-qcom-dwc3.ko

/lib/modules/5.6.3/kernel/drivers/usb:
total 32
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 class
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 common
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 core
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 dwc3
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 host
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 phy
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 serial
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 storage

/lib/modules/5.6.3/kernel/drivers/usb/class:
total 40
-rw-r--r-- 1 root root 38256 2026-01-29 10:42:17.000000000 +0000 cdc-acm.ko

/lib/modules/5.6.3/kernel/drivers/usb/common:
total 12
-rw-r--r-- 1 root root 10856 2026-01-29 10:42:17.000000000 +0000 usb-common.ko

/lib/modules/5.6.3/kernel/drivers/usb/core:
total 284
-rw-r--r-- 1 root root 289504 2026-01-29 10:42:17.000000000 +0000 usbcore.ko

/lib/modules/5.6.3/kernel/drivers/usb/dwc3:
total 68
-rw-r--r-- 1 root root 12952 2026-01-29 10:42:17.000000000 +0000 dwc3-of-simple.ko
-rw-r--r-- 1 root root 17720 2026-01-29 10:42:17.000000000 +0000 dwc3-qcom.ko
-rw-r--r-- 1 root root 28912 2026-01-29 10:42:17.000000000 +0000 dwc3.ko

/lib/modules/5.6.3/kernel/drivers/usb/host:
total 240
-rw-r--r-- 1 root root  50224 2026-01-29 10:42:18.000000000 +0000 ehci-hcd.ko
-rw-r--r-- 1 root root  11064 2026-01-29 10:42:18.000000000 +0000 ehci-orion.ko
-rw-r--r-- 1 root root 150072 2026-01-29 10:42:18.000000000 +0000 xhci-hcd.ko
-rw-r--r-- 1 root root  10296 2026-01-29 10:42:18.000000000 +0000 xhci-pci.ko
-rw-r--r-- 1 root root  16112 2026-01-29 10:42:18.000000000 +0000 xhci-plat-hcd.ko

/lib/modules/5.6.3/kernel/drivers/usb/phy:
total 72
-rw-r--r-- 1 root root 17568 2026-01-29 10:42:18.000000000 +0000 phy-msm-qusb.ko
-rw-r--r-- 1 root root 21864 2026-01-29 10:42:18.000000000 +0000 phy-msm-ssusb-qmp.ko
-rw-r--r-- 1 root root  9312 2026-01-29 10:42:18.000000000 +0000 phy-qca-m31.ko
-rw-r--r-- 1 root root 16296 2026-01-29 10:42:18.000000000 +0000 phy-qca-uniphy.ko

/lib/modules/5.6.3/kernel/drivers/usb/serial:
total 400
-rw-r--r-- 1 root root  13760 2026-01-29 10:42:18.000000000 +0000 ch341.ko
-rw-r--r-- 1 root root  30640 2026-01-29 10:42:18.000000000 +0000 cp210x.ko
-rw-r--r-- 1 root root  93968 2026-01-29 10:42:18.000000000 +0000 ftdi_sio.ko
-rw-r--r-- 1 root root   8224 2026-01-29 10:42:18.000000000 +0000 ipw.ko
-rw-r--r-- 1 root root 114744 2026-01-29 10:42:18.000000000 +0000 option.ko
-rw-r--r-- 1 root root  22000 2026-01-29 10:42:18.000000000 +0000 pl2303.ko
-rw-r--r-- 1 root root  17864 2026-01-29 10:42:18.000000000 +0000 qcserial.ko
-rw-r--r-- 1 root root  20528 2026-01-29 10:42:18.000000000 +0000 sierra.ko
-rw-r--r-- 1 root root  15024 2026-01-29 10:42:18.000000000 +0000 usb_wwan.ko
-rw-r--r-- 1 root root  47280 2026-01-29 10:42:18.000000000 +0000 usbserial.ko

/lib/modules/5.6.3/kernel/drivers/usb/storage:
total 108
-rw-r--r-- 1 root root 107888 2026-01-29 10:42:18.000000000 +0000 usb-storage.ko

/lib/modules/5.6.3/kernel/fs:
total 20
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 cifs
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 exfat
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 isofs
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 ksmbd
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 ntfs3

/lib/modules/5.6.3/kernel/fs/cifs:
total 640
-rw-r--r-- 1 root root 652904 2026-01-29 10:42:19.000000000 +0000 cifs.ko

/lib/modules/5.6.3/kernel/fs/exfat:
total 100
-rw-r--r-- 1 root root 99000 2026-01-29 10:42:19.000000000 +0000 exfat.ko

/lib/modules/5.6.3/kernel/fs/isofs:
total 44
-rw-r--r-- 1 root root 42200 2026-01-29 10:42:19.000000000 +0000 isofs.ko

/lib/modules/5.6.3/kernel/fs/ksmbd:
total 324
-rw-r--r-- 1 root root 328920 2026-01-29 10:42:19.000000000 +0000 ksmbd.ko

/lib/modules/5.6.3/kernel/fs/ntfs3:
total 248
-rw-r--r-- 1 root root 253560 2026-01-29 10:42:19.000000000 +0000 ntfs3.ko

/lib/modules/5.6.3/kernel/lib:
total 52
-rw-r--r-- 1 root root 5296 2026-01-29 10:42:19.000000000 +0000 asn1_decoder.ko
-rw-r--r-- 1 root root 4952 2026-01-29 10:42:19.000000000 +0000 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 crypto
-rw-r--r-- 1 root root 6096 2026-01-29 10:42:20.000000000 +0000 oid_registry.ko
-rw-r--r-- 1 root root 5472 2026-01-29 10:42:20.000000000 +0000 ts_bm.ko
-rw-r--r-- 1 root root 5272 2026-01-29 10:42:20.000000000 +0000 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 zlib_deflate
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 92
-rw-r--r-- 1 root root  3616 2026-01-29 10:42:20.000000000 +0000 libarc4.ko
-rw-r--r-- 1 root root  8336 2026-01-29 10:42:20.000000000 +0000 libblake2s-generic.ko
-rw-r--r-- 1 root root  5920 2026-01-29 10:42:20.000000000 +0000 libblake2s.ko
-rw-r--r-- 1 root root  3616 2026-01-29 10:42:20.000000000 +0000 libchacha.ko
-rw-r--r-- 1 root root 10784 2026-01-29 10:42:20.000000000 +0000 libchacha20poly1305.ko
-rw-r--r-- 1 root root 27368 2026-01-29 10:42:20.000000000 +0000 libcurve25519-generic.ko
-rw-r--r-- 1 root root  3152 2026-01-29 10:42:20.000000000 +0000 libcurve25519.ko
-rw-r--r-- 1 root root 19968 2026-01-29 10:42:20.000000000 +0000 libdes.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 24
-rw-r--r-- 1 root root 21776 2026-01-29 10:42:20.000000000 +0000 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 20
-rw-r--r-- 1 root root 17320 2026-01-29 10:42:20.000000000 +0000 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 40
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 802
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 8021q
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 ipv4
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 ipv6
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 mpls
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 rfkill
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 sched
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 xfrm

/lib/modules/5.6.3/kernel/net/802:
total 16
-rw-r--r-- 1 root root 15624 2026-01-29 10:42:20.000000000 +0000 mrp.ko

/lib/modules/5.6.3/kernel/net/8021q:
total 40
-rw-r--r-- 1 root root 37976 2026-01-29 10:42:20.000000000 +0000 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 164
-rw-r--r-- 1 root root  4336 2026-01-29 10:42:20.000000000 +0000 ebt_802_3.ko
-rw-r--r-- 1 root root  5208 2026-01-29 10:42:20.000000000 +0000 ebt_arp.ko
-rw-r--r-- 1 root root  4944 2026-01-29 10:42:20.000000000 +0000 ebt_arpreply.ko
-rw-r--r-- 1 root root  5024 2026-01-29 10:42:20.000000000 +0000 ebt_dnat.ko
-rw-r--r-- 1 root root  5208 2026-01-29 10:42:20.000000000 +0000 ebt_ip.ko
-rw-r--r-- 1 root root  5336 2026-01-29 10:42:20.000000000 +0000 ebt_ip6.ko
-rw-r--r-- 1 root root  7488 2026-01-29 10:42:20.000000000 +0000 ebt_limit.ko
-rw-r--r-- 1 root root  5776 2026-01-29 10:42:20.000000000 +0000 ebt_mark.ko
-rw-r--r-- 1 root root  6256 2026-01-29 10:42:20.000000000 +0000 ebt_mark_m.ko
-rw-r--r-- 1 root root  4208 2026-01-29 10:42:20.000000000 +0000 ebt_pkttype.ko
-rw-r--r-- 1 root root  4896 2026-01-29 10:42:20.000000000 +0000 ebt_redirect.ko
-rw-r--r-- 1 root root  4808 2026-01-29 10:42:20.000000000 +0000 ebt_snat.ko
-rw-r--r-- 1 root root  5728 2026-01-29 10:42:20.000000000 +0000 ebt_stp.ko
-rw-r--r-- 1 root root  4672 2026-01-29 10:42:20.000000000 +0000 ebt_vlan.ko
-rw-r--r-- 1 root root  5472 2026-01-29 10:42:20.000000000 +0000 ebtable_filter.ko
-rw-r--r-- 1 root root  5472 2026-01-29 10:42:20.000000000 +0000 ebtable_nat.ko
-rw-r--r-- 1 root root 33992 2026-01-29 10:42:20.000000000 +0000 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 56
-rw-r--r-- 1 root root 25744 2026-01-29 10:42:21.000000000 +0000 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2026-01-29 11:00:17.000000000 +0000 netfilter
-rw-r--r-- 1 root root 20656 2026-01-29 10:42:21.000000000 +0000 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 116
-rw-r--r-- 1 root root 34320 2026-01-29 10:42:21.000000000 +0000 ip_tables.ko
-rw-r--r-- 1 root root  5952 2026-01-29 10:42:21.000000000 +0000 ipt_REJECT.ko
-rw-r--r-- 1 root root  6496 2026-01-29 10:42:21.000000000 +0000 iptable_filter.ko
-rw-r--r-- 1 root root  6504 2026-01-29 10:42:21.000000000 +0000 iptable_mangle.ko
-rw-r--r-- 1 root root  5992 2026-01-29 10:42:21.000000000 +0000 iptable_nat.ko
-rw-r--r-- 1 root root  6792 2026-01-29 10:42:21.000000000 +0000 iptable_raw.ko
-rw-r--r-- 1 root root  6184 2026-01-29 10:42:21.000000000 +0000 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root 14424 2026-01-29 10:42:21.000000000 +0000 nf_nat_h323.ko
-rw-r--r-- 1 root root  6720 2026-01-29 10:42:21.000000000 +0000 nf_nat_pptp.ko
-rw-r--r-- 1 root root  6272 2026-01-29 10:42:21.000000000 +0000 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 48
-rw-r--r-- 1 root root 13248 2026-01-29 10:42:21.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root 18520 2026-01-29 10:42:21.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root  5352 2026-01-29 10:42:21.000000000 +0000 ip6_udp_tunnel.ko
drwxr-xr-x 2 root root  4096 2026-01-29 11:00:17.000000000 +0000 netfilter

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 108
-rw-r--r-- 1 root root 34472 2026-01-29 10:42:21.000000000 +0000 ip6_tables.ko
-rw-r--r-- 1 root root  5928 2026-01-29 10:42:21.000000000 +0000 ip6t_NPT.ko
-rw-r--r-- 1 root root  5904 2026-01-29 10:42:21.000000000 +0000 ip6t_REJECT.ko
-rw-r--r-- 1 root root  4288 2026-01-29 10:42:21.000000000 +0000 ip6t_eui64.ko
-rw-r--r-- 1 root root  4928 2026-01-29 10:42:22.000000000 +0000 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  6528 2026-01-29 10:42:22.000000000 +0000 ip6table_filter.ko
-rw-r--r-- 1 root root  6568 2026-01-29 10:42:22.000000000 +0000 ip6table_mangle.ko
-rw-r--r-- 1 root root  6000 2026-01-29 10:42:22.000000000 +0000 ip6table_nat.ko
-rw-r--r-- 1 root root  6800 2026-01-29 10:42:22.000000000 +0000 ip6table_raw.ko
-rw-r--r-- 1 root root  7032 2026-01-29 10:42:22.000000000 +0000 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 68
-rw-r--r-- 1 root root  7840 2026-01-29 10:42:22.000000000 +0000 mpls_iptunnel.ko
-rw-r--r-- 1 root root 59656 2026-01-29 10:42:22.000000000 +0000 mpls_router.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 652
-rw-r--r-- 1 root root 14712 2026-01-29 10:42:23.000000000 +0000 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root 60144 2026-01-29 10:42:23.000000000 +0000 nf_conntrack_h323.ko
-rw-r--r-- 1 root root 12328 2026-01-29 10:42:23.000000000 +0000 nf_conntrack_irc.ko
-rw-r--r-- 1 root root 56392 2026-01-29 10:42:23.000000000 +0000 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root 12184 2026-01-29 10:42:23.000000000 +0000 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root 12376 2026-01-29 10:42:23.000000000 +0000 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root 40144 2026-01-29 10:42:23.000000000 +0000 nf_conntrack_sip.ko
-rw-r--r-- 1 root root 10200 2026-01-29 10:42:23.000000000 +0000 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root 46800 2026-01-29 10:42:23.000000000 +0000 nf_nat.ko
-rw-r--r-- 1 root root  7288 2026-01-29 10:42:23.000000000 +0000 nf_nat_ftp.ko
-rw-r--r-- 1 root root  6872 2026-01-29 10:42:23.000000000 +0000 nf_nat_irc.ko
-rw-r--r-- 1 root root 11424 2026-01-29 10:42:23.000000000 +0000 nf_nat_rtsp.ko
-rw-r--r-- 1 root root 17528 2026-01-29 10:42:23.000000000 +0000 nf_nat_sip.ko
-rw-r--r-- 1 root root  5144 2026-01-29 10:42:23.000000000 +0000 nf_nat_tftp.ko
-rw-r--r-- 1 root root 15000 2026-01-29 10:42:23.000000000 +0000 nfnetlink.ko
-rw-r--r-- 1 root root 55688 2026-01-29 10:42:24.000000000 +0000 x_tables.ko
-rw-r--r-- 1 root root 11248 2026-01-29 10:42:24.000000000 +0000 xt_CT.ko
-rw-r--r-- 1 root root  6432 2026-01-29 10:42:24.000000000 +0000 xt_DSCP.ko
-rw-r--r-- 1 root root  5512 2026-01-29 10:42:24.000000000 +0000 xt_HL.ko
-rw-r--r-- 1 root root  5736 2026-01-29 10:42:24.000000000 +0000 xt_MASQUERADE.ko
-rw-r--r-- 1 root root  5800 2026-01-29 10:42:24.000000000 +0000 xt_NETMAP.ko
-rw-r--r-- 1 root root  5464 2026-01-29 10:42:24.000000000 +0000 xt_REDIRECT.ko
-rw-r--r-- 1 root root  9408 2026-01-29 10:42:24.000000000 +0000 xt_TCPMSS.ko
-rw-r--r-- 1 root root  7664 2026-01-29 10:42:24.000000000 +0000 xt_addrtype.ko
-rw-r--r-- 1 root root  5928 2026-01-29 10:42:24.000000000 +0000 xt_connbytes.ko
-rw-r--r-- 1 root root  7672 2026-01-29 10:42:24.000000000 +0000 xt_connmark.ko
-rw-r--r-- 1 root root  7608 2026-01-29 10:42:24.000000000 +0000 xt_conntrack.ko
-rw-r--r-- 1 root root  5072 2026-01-29 10:42:24.000000000 +0000 xt_dscp.ko
-rw-r--r-- 1 root root 27264 2026-01-29 10:42:24.000000000 +0000 xt_hashlimit.ko
-rw-r--r-- 1 root root  5648 2026-01-29 10:42:24.000000000 +0000 xt_helper.ko
-rw-r--r-- 1 root root  4624 2026-01-29 10:42:24.000000000 +0000 xt_hl.ko
-rw-r--r-- 1 root root  4560 2026-01-29 10:42:24.000000000 +0000 xt_length.ko
-rw-r--r-- 1 root root  4224 2026-01-29 10:42:24.000000000 +0000 xt_mac.ko
-rw-r--r-- 1 root root  4976 2026-01-29 10:42:24.000000000 +0000 xt_mark.ko
-rw-r--r-- 1 root root  5344 2026-01-29 10:42:24.000000000 +0000 xt_multiport.ko
-rw-r--r-- 1 root root  8216 2026-01-29 10:42:24.000000000 +0000 xt_nat.ko
-rw-r--r-- 1 root root  5864 2026-01-29 10:42:24.000000000 +0000 xt_physdev.ko
-rw-r--r-- 1 root root  6544 2026-01-29 10:42:24.000000000 +0000 xt_policy.ko
-rw-r--r-- 1 root root  4160 2026-01-29 10:42:24.000000000 +0000 xt_realm.ko
-rw-r--r-- 1 root root  5512 2026-01-29 10:42:24.000000000 +0000 xt_statistic.ko
-rw-r--r-- 1 root root  4856 2026-01-29 10:42:24.000000000 +0000 xt_string.ko
-rw-r--r-- 1 root root  4888 2026-01-29 10:42:24.000000000 +0000 xt_tcpmss.ko
-rw-r--r-- 1 root root  6408 2026-01-29 10:42:24.000000000 +0000 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/rfkill:
total 28
-rw-r--r-- 1 root root 26392 2026-01-29 10:42:24.000000000 +0000 rfkill.ko

/lib/modules/5.6.3/kernel/net/sched:
total 112
-rw-r--r-- 1 root root 29016 2026-01-29 10:42:24.000000000 +0000 sch_cake.ko
-rw-r--r-- 1 root root 10960 2026-01-29 10:42:24.000000000 +0000 sch_codel.ko
-rw-r--r-- 1 root root 14232 2026-01-29 10:42:24.000000000 +0000 sch_fq_codel.ko
-rw-r--r-- 1 root root 34760 2026-01-29 10:42:24.000000000 +0000 sch_htb.ko
-rw-r--r-- 1 root root 13648 2026-01-29 10:42:24.000000000 +0000 sch_red.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 16
-rw-r--r-- 1 root root 13544 2026-01-29 10:42:24.000000000 +0000 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 616
-rw-r--r-- 1 root root 10456 2026-01-29 10:41:40.000000000 +0000 al_ecc.ko
-rw-r--r-- 1 root root 59608 2026-01-29 10:41:19.000000000 +0000 al_pcie_ep.ko
-rw-r--r-- 1 root root 14512 2026-01-29 10:42:12.000000000 +0000 appmark.ko
-rw-r--r-- 1 root root 15088 2026-01-29 10:36:28.000000000 +0000 btest.ko
-rw-r--r-- 1 root root  3200 2026-01-29 10:41:59.000000000 +0000 c2glue.ko
-rw-r--r-- 1 root root 11008 2026-01-29 10:41:50.000000000 +0000 dot1x.ko
-rw-r--r-- 1 root root 51448 2026-01-29 10:41:36.000000000 +0000 fan_i2c.ko
-rw-r--r-- 1 root root  9504 2026-01-29 10:37:06.000000000 +0000 flash-uefi.ko
-rw-r--r-- 1 root root 85144 2026-01-29 10:37:10.000000000 +0000 flash.ko
-rw-r--r-- 1 root root  9208 2026-01-29 10:41:02.000000000 +0000 jiffies.ko
-rw-r--r-- 1 root root  4704 2026-01-29 10:37:28.000000000 +0000 ledgroup.ko
-rw-r--r-- 1 root root 16712 2026-01-29 10:36:21.000000000 +0000 logring.ko
-rw-r--r-- 1 root root 34352 2026-01-29 10:37:12.000000000 +0000 mesh.ko
-rw-r--r-- 1 root root 16552 2026-01-29 10:36:17.000000000 +0000 panics.ko
-rw-r--r-- 1 root root 19872 2026-01-29 10:36:24.000000000 +0000 poe_simple.ko
-rw-r--r-- 1 root root 47280 2026-01-29 10:36:20.000000000 +0000 poe_v4.ko
-rw-r--r-- 1 root root 18440 2026-01-29 10:42:20.000000000 +0000 prestera_pci.ko
-rw-r--r-- 1 root root 13344 2026-01-29 10:40:36.000000000 +0000 rb.ko
-rw-r--r-- 1 root root  9024 2026-01-29 10:41:11.000000000 +0000 romon.ko
-rw-r--r-- 1 root root  9160 2026-01-29 10:37:04.000000000 +0000 snif.ko
-rw-r--r-- 1 root root 41312 2026-01-29 10:41:36.000000000 +0000 stm8_fan.ko
-rw-r--r-- 1 root root 36480 2026-01-29 10:38:36.000000000 +0000 traffic_gen.ko
-rw-r--r-- 1 root root 29296 2026-01-29 10:39:58.000000000 +0000 ts.ko
-rw-r--r-- 1 root root  9984 2026-01-29 10:37:04.000000000 +0000 ulog.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 sched

/lib/modules/5.6.3/net/bridge:
total 300
-rw-r--r-- 1 root root 266120 2026-01-29 10:41:33.000000000 +0000 bridge2.ko
-rw-r--r-- 1 root root  23752 2026-01-29 10:41:29.000000000 +0000 bridge2_netfilter.ko
-rw-r--r-- 1 root root   4224 2026-01-29 10:37:00.000000000 +0000 ebt_snif.ko
-rw-r--r-- 1 root root   4456 2026-01-29 10:37:00.000000000 +0000 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 44
-rw-r--r-- 1 root root 5216 2026-01-29 10:36:25.000000000 +0000 ipt_SAME.ko
-rw-r--r-- 1 root root 8600 2026-01-29 10:36:27.000000000 +0000 ipt_TARPIT.ko
-rw-r--r-- 1 root root 6496 2026-01-29 10:36:26.000000000 +0000 ipt_psd.ko
-rw-r--r-- 1 root root 4448 2026-01-29 10:37:00.000000000 +0000 ipt_snif.ko
-rw-r--r-- 1 root root 5032 2026-01-29 10:37:00.000000000 +0000 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 76
-rw-r--r-- 1 root root  3408 2026-01-29 10:37:39.000000000 +0000 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  3408 2026-01-29 10:37:39.000000000 +0000 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 15864 2026-01-29 10:37:49.000000000 +0000 xt_ein.ko
-rw-r--r-- 1 root root 15872 2026-01-29 10:36:35.000000000 +0000 xt_layer7.ko
-rw-r--r-- 1 root root 25320 2026-01-29 10:37:49.000000000 +0000 xt_misc.ko
-rw-r--r-- 1 root root  5448 2026-01-29 10:36:43.000000000 +0000 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 112
-rw-r--r-- 1 root root  7984 2026-01-29 10:36:44.000000000 +0000 cls_fw.ko
-rw-r--r-- 1 root root 16608 2026-01-29 10:36:48.000000000 +0000 cls_linear.ko
-rw-r--r-- 1 root root 15032 2026-01-29 10:37:12.000000000 +0000 proto_agr.ko
-rw-r--r-- 1 root root 24408 2026-01-29 10:37:12.000000000 +0000 sch_agr.ko
-rw-r--r-- 1 root root 13744 2026-01-29 10:36:30.000000000 +0000 sch_pcq.ko
-rw-r--r-- 1 root root  9592 2026-01-29 10:40:55.000000000 +0000 sch_rate.ko
-rw-r--r-- 1 root root 12392 2026-01-29 10:41:16.000000000 +0000 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2026-01-29 11:00:17.000000000 +0000 bin
drwxr-xr-x 12 root root 4096 2026-01-29 11:00:17.000000000 +0000 etc
drwxr-xr-x  5 root root 4096 2026-01-29 11:00:17.000000000 +0000 lib
lrwxrwxrwx  1 root root    8 2026-01-29 11:00:18.000000000 +0000 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2026-01-29 11:00:18.000000000 +0000 store -> /rw/store

/nova/bin:
total 11632
-rwxr-xr-x 1 root root   26196 2026-01-29 09:59:02.000000000 +0000 agent
-rwxr-xr-x 1 root root   38688 2026-01-29 09:59:51.000000000 +0000 apptraffic
-rwxr-xr-x 1 root root   13736 2026-01-29 09:59:01.000000000 +0000 arpd
-rwxr-xr-x 1 root root   18068 2026-01-29 10:01:32.000000000 +0000 backup
-rwxr-xr-x 1 root root  272852 2026-01-29 10:04:27.000000000 +0000 bridge2
-rwxr-xr-x 1 root root   75944 2026-01-29 10:02:02.000000000 +0000 btest
-rwxr-xr-x 1 root root   59292 2026-01-29 09:59:45.000000000 +0000 bth
-rwxr-xr-x 1 root root  767232 2026-01-29 10:03:26.000000000 +0000 cerm
lrwxrwxrwx 1 root root       4 2026-01-29 10:03:41.000000000 +0000 cerm-worker -> cerm
-rwxr-xr-x 1 root root  162100 2026-01-29 10:03:07.000000000 +0000 cloud
-rwxr-xr-x 1 root root   96008 2026-01-29 10:01:19.000000000 +0000 crossfig
-rwxr-xr-x 1 root root   67640 2026-01-29 10:02:21.000000000 +0000 detnet
-rwxr-xr-x 1 root root   84044 2026-01-29 09:59:47.000000000 +0000 discover
-rwxr-xr-x 1 root root  322332 2026-01-29 10:03:00.000000000 +0000 diskd
-rwxr-xr-x 1 root root  112876 2026-01-29 10:04:12.000000000 +0000 dot1x
-rwxr-xr-x 1 root root   43008 2026-01-29 10:01:39.000000000 +0000 email
-rwxr-xr-x 1 root root  335612 2026-01-29 10:03:45.000000000 +0000 figman
-rwxr-xr-x 1 root root  141724 2026-01-29 10:03:50.000000000 +0000 fileman
-rwxr-xr-x 1 root root   34492 2026-01-29 09:59:00.000000000 +0000 ftpd
-rwxr-xr-x 1 root root  149060 2026-01-29 10:00:03.000000000 +0000 graphing
-rwxr-xr-x 1 root root    5212 2026-01-29 10:03:57.000000000 +0000 havecardbus
-rwxr-xr-x 1 root root   63320 2026-01-29 10:01:17.000000000 +0000 igmpproxy
-rwxr-xr-x 1 root root  182260 2026-01-29 10:02:55.000000000 +0000 installer
-rwxr-xr-x 1 root root   30352 2026-01-29 10:03:42.000000000 +0000 ippool
-rwxr-xr-x 1 root root   59388 2026-01-29 10:01:47.000000000 +0000 keyman
-rwxr-xr-x 1 root root   46948 2026-01-29 09:59:45.000000000 +0000 kidcontrol
-rwxr-xr-x 1 root root  223440 2026-01-29 10:00:11.000000000 +0000 lcdstat
-rwxr-xr-x 1 root root   75944 2026-01-29 10:03:43.000000000 +0000 led
-rwxr-xr-x 1 root root  112628 2026-01-29 10:03:15.000000000 +0000 letsencrypt
-rwxr-xr-x 1 root root   84004 2026-01-29 10:03:02.000000000 +0000 loader
-rwxr-xr-x 1 root root   88236 2026-01-29 09:59:09.000000000 +0000 log
-rwxr-xr-x 1 root root  158352 2026-01-29 10:05:08.000000000 +0000 login
-rwxr-xr-x 1 root root   54916 2026-01-29 09:59:07.000000000 +0000 logmaker
-rwxr-xr-x 1 root root   22148 2026-01-29 09:59:00.000000000 +0000 macping
-rwxr-xr-x 1 root root   38776 2026-01-29 10:01:39.000000000 +0000 mactel
-rwxr-xr-x 1 root root   26372 2026-01-29 09:59:01.000000000 +0000 mepty
-rwxr-xr-x 1 root root   79724 2026-01-29 09:59:54.000000000 +0000 mesh
-rwxr-xr-x 1 root root   71376 2026-01-29 10:05:07.000000000 +0000 mode
lrwxrwxrwx 1 root root       7 2026-01-29 10:04:00.000000000 +0000 modprobed -> moduler
-rwxr-xr-x 1 root root  645620 2026-01-29 10:03:57.000000000 +0000 moduler
-rwxr-xr-x 1 root root   72212 2026-01-29 10:04:30.000000000 +0000 mproxy
-rwxr-xr-x 1 root root   59400 2026-01-29 10:01:51.000000000 +0000 mtget
-rwxr-xr-x 1 root root   46956 2026-01-29 09:59:49.000000000 +0000 natpmp
-rwxr-xr-x 1 root root 1665688 2026-01-29 10:07:34.000000000 +0000 net
-rwxr-xr-x 1 root root   71680 2026-01-29 10:02:23.000000000 +0000 ntp
-rwxr-xr-x 1 root root    9468 2026-01-29 09:58:56.000000000 +0000 panicsl
-rwxr-xr-x 1 root root  745504 2026-01-29 10:05:08.000000000 +0000 parser
-rwxr-xr-x 1 root root   34576 2026-01-29 09:59:27.000000000 +0000 partd
-rwxr-xr-x 1 root root   46908 2026-01-29 09:59:04.000000000 +0000 ping
-rwxr-xr-x 1 root root   51240 2026-01-29 10:01:43.000000000 +0000 portman
-rwxr-xr-x 1 root root   34612 2026-01-29 10:42:49.000000000 +0000 profiler
-rwxr-xr-x 1 root root   88176 2026-01-29 10:03:24.000000000 +0000 ptp
-rwxr-xr-x 1 root root  145580 2026-01-29 09:59:10.000000000 +0000 quickset
-rwxr-xr-x 1 root root   55300 2026-01-29 10:03:20.000000000 +0000 radius
-rwxr-xr-x 1 root root  162332 2026-01-29 10:03:12.000000000 +0000 resolver
-rwxr-xr-x 1 root root    9596 2026-01-29 10:03:12.000000000 +0000 resolver_ctl
-rwxr-xr-x 1 root root   92412 2026-01-29 10:02:44.000000000 +0000 romon
-rwxr-xr-x 1 root root 1663260 2026-01-29 10:08:41.000000000 +0000 route
-rwxr-xr-x 1 root root   17960 2026-01-29 10:02:19.000000000 +0000 rtrace
-rwxr-xr-x 1 root root   43016 2026-01-29 10:03:43.000000000 +0000 sermgr
-rwxr-xr-x 1 root root   34516 2026-01-29 09:59:27.000000000 +0000 sertcp
-rwxr-xr-x 1 root root   71596 2026-01-29 09:59:41.000000000 +0000 sniffer
-rwxr-xr-x 1 root root  199096 2026-01-29 10:04:48.000000000 +0000 snmp
-rwxr-xr-x 1 root root   63440 2026-01-29 09:59:55.000000000 +0000 socks
-rwxr-xr-x 1 root root   38520 2026-01-29 09:59:45.000000000 +0000 socksify
-rwxr-xr-x 1 root root  120972 2026-01-29 10:03:40.000000000 +0000 ssld
-rwxr-xr-x 1 root root   30364 2026-01-29 10:01:44.000000000 +0000 sstore
-rwxr-xr-x 1 root root  269416 2026-01-29 10:05:07.000000000 +0000 sys2
-rwxr-xr-x 1 root root   22020 2026-01-29 09:59:02.000000000 +0000 telnet
-rwxr-xr-x 1 root root   30484 2026-01-29 09:59:04.000000000 +0000 telser
-rwxr-xr-x 1 root root   38792 2026-01-29 09:59:36.000000000 +0000 tftpd
-rwxr-xr-x 1 root root   38644 2026-01-29 09:59:00.000000000 +0000 traceroute
-rwxr-xr-x 1 root root  108536 2026-01-29 09:59:51.000000000 +0000 trafficgen
-rwxr-xr-x 1 root root   26236 2026-01-29 09:59:19.000000000 +0000 trafflow
-rwxr-xr-x 1 root root   26188 2026-01-29 09:59:01.000000000 +0000 undo
-rwxr-xr-x 1 root root  141508 2026-01-29 09:59:55.000000000 +0000 upnp
-rwxr-xr-x 1 root root   84328 2026-01-29 10:03:40.000000000 +0000 user
-rwxr-xr-x 1 root root   92224 2026-01-29 10:02:19.000000000 +0000 vrrp
-rwxr-xr-x 1 root root   30520 2026-01-29 09:59:26.000000000 +0000 watchdog
-rwxr-xr-x 1 root root  142020 2026-01-29 10:02:44.000000000 +0000 wproxy
-rwxr-xr-x 1 root root  129668 2026-01-29 10:04:14.000000000 +0000 www

/nova/etc:
total 68
-rwxr-xr-x 1 root root 9044 2026-01-14 12:35:04.000000000 +0000 app_rules.json
drwxr-xr-x 3 root root 4096 2026-01-29 11:00:17.000000000 +0000 ca
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 leds
-rwxr-xr-x 1 root root 1286 2026-01-14 12:35:05.000000000 +0000 lognames
-rwxr-xr-x 1 root root   10 2025-11-14 09:51:57.000000000 +0000 logo
-rwxr-xr-x 1 root root    1 2025-11-14 09:51:57.000000000 +0000 manual-url
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 pciinfo
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 services
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 system_names
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 upnp
-rwxr-xr-x 1 root root   26 2026-01-14 12:35:05.000000000 +0000 url
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 user
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 www

/nova/etc/ca:
total 104
-rwxr-xr-x 1 root root  837 2026-01-14 12:35:05.000000000 +0000 AmazonRootCA1.der
-rwxr-xr-x 1 root root  955 2026-01-14 12:35:05.000000000 +0000 DigiCert_Assured_ID_Root_CA.der
-rwxr-xr-x 1 root root  922 2026-01-14 12:35:05.000000000 +0000 DigiCert_Assured_ID_Root_G2.der
-rwxr-xr-x 1 root root  586 2026-01-14 12:35:05.000000000 +0000 DigiCert_Assured_ID_Root_G3.der
-rwxr-xr-x 1 root root  947 2026-01-14 12:35:05.000000000 +0000 DigiCert_Global_Root_CA.der
-rwxr-xr-x 1 root root  914 2026-01-14 12:35:05.000000000 +0000 DigiCert_Global_Root_G2.der
-rwxr-xr-x 1 root root  579 2026-01-14 12:35:05.000000000 +0000 DigiCert_Global_Root_G3.der
-rwxr-xr-x 1 root root  969 2026-01-14 12:35:05.000000000 +0000 DigiCert_High_Assurance_EV_Root_CA.der
-rwxr-xr-x 1 root root  541 2026-01-14 12:35:05.000000000 +0000 DigiCert_TLS_ECC_P384_Root_G5.der
-rwxr-xr-x 1 root root 1386 2026-01-14 12:35:05.000000000 +0000 DigiCert_TLS_RSA4096_Root_G5.der
-rwxr-xr-x 1 root root 1428 2026-01-14 12:35:05.000000000 +0000 DigiCert_Trusted_Root_G4.der
-rwxr-xr-x 1 root root  546 2026-01-14 12:35:05.000000000 +0000 GlobalSign_ECC_Root_CA_-_R5.der
-rwxr-xr-x 1 root root  889 2026-01-14 12:35:05.000000000 +0000 GlobalSign_Root_CA.der
-rwxr-xr-x 1 root root  867 2026-01-14 12:35:05.000000000 +0000 GlobalSign_Root_CA_-_R3.der
-rwxr-xr-x 1 root root 1415 2026-01-14 12:35:05.000000000 +0000 GlobalSign_Root_CA_-_R6.der
-rwxr-xr-x 1 root root  527 2026-01-14 12:35:05.000000000 +0000 GlobalSign_Root_E46.der
-rwxr-xr-x 1 root root 1374 2026-01-14 12:35:05.000000000 +0000 GlobalSign_Root_R46.der
-rwxr-xr-x 1 root root 1028 2026-01-14 12:35:05.000000000 +0000 Go_Daddy_Class_2_CA.der
-rwxr-xr-x 1 root root  969 2026-01-14 12:35:05.000000000 +0000 Go_Daddy_Root_Certificate_Authority_-_G2.der
-rwxr-xr-x 1 root root 1391 2026-01-14 12:35:05.000000000 +0000 ISRG_Root_X1.der
-rwxr-xr-x 1 root root  543 2026-01-14 12:35:05.000000000 +0000 ISRG_Root_X2.der
-rwxr-xr-x 1 root root  574 2026-01-14 12:35:05.000000000 +0000 Sectigo_Public_Server_Authentication_Root_E46.der
-rwxr-xr-x 1 root root 1422 2026-01-14 12:35:05.000000000 +0000 Sectigo_Public_Server_Authentication_Root_R46.der
-rwxr-xr-x 1 root root  659 2026-01-14 12:35:05.000000000 +0000 USERTrustECCCertificationAuthority.der
-rwxr-xr-x 1 root root 1506 2026-01-14 12:35:05.000000000 +0000 USERTrustRSACertificationAuthority.der
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 gsma

/nova/etc/ca/gsma:
total 8
-rwxr-xr-x 1 root root 589 2026-01-14 12:35:05.000000000 +0000 gsma_digicert.der
-rwxr-xr-x 1 root root 507 2026-01-14 12:35:05.000000000 +0000 gsma_sealsq.der

/nova/etc/leds:
total 124
-rwxr-xr-x 1 root root 123872 2026-01-29 09:58:04.000000000 +0000 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2026-01-29 09:58:04.000000000 +0000 system.x3

/nova/etc/pciinfo:
total 228
-rwxr-xr-x 1 root root 231141 2026-01-29 09:58:04.000000000 +0000 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 101 2026-01-29 09:58:04.000000000 +0000 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 992 2026-01-29 09:58:04.000000000 +0000 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2026-01-29 09:58:04.000000000 +0000 system.x3

/nova/etc/upnp:
total 64
-rwxr-xr-x 1 root root  3378 2026-01-14 12:35:05.000000000 +0000 connectionmanager.xml
-rwxr-xr-x 1 root root  5684 2026-01-14 12:35:05.000000000 +0000 contentdirectory.xml
-rwxr-xr-x 1 root root  8764 2026-01-14 12:35:05.000000000 +0000 logo120.png
-rwxr-xr-x 1 root root   930 2025-11-14 09:51:59.000000000 +0000 logo16.gif
-rwxr-xr-x 1 root root  1173 2025-11-14 09:51:59.000000000 +0000 logo32.gif
-rwxr-xr-x 1 root root  1504 2025-11-14 09:51:59.000000000 +0000 logo48.gif
-rwxr-xr-x 1 root root   735 2025-11-14 09:51:59.000000000 +0000 osinfo.xml
-rwxr-xr-x 1 root root  5928 2025-11-14 09:51:59.000000000 +0000 wancommonifcfg.xml
-rwxr-xr-x 1 root root 13444 2025-11-14 09:51:59.000000000 +0000 wanipconn.xml

/nova/etc/user:
total 4
-rwxr-xr-x 1 root root 2230 2026-01-29 09:58:04.000000000 +0000 system.x3

/nova/etc/www:
total 4
-rwxr-xr-x 1 root root 2509 2026-01-29 09:58:04.000000000 +0000 system.x3

/nova/lib:
total 16
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 defconf
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:17.000000000 +0000 profiler
-rwxr-xr-x 1 root root 4074 2026-01-29 09:54:40.000000000 +0000 xmlnames2

/nova/lib/console:
total 2328
-rwxr-xr-x 1 root root 2372018 2026-01-29 10:06:12.000000000 +0000 1073741824.mem
-rwxr-xr-x 1 root root     510 2025-11-14 09:51:57.000000000 +0000 logo.txt
-rwxr-xr-x 1 root root      18 2026-01-14 12:35:05.000000000 +0000 sublogo.txt

/nova/lib/defconf:
total 104
-rwxr-xr-x 1 root root   567 2025-11-14 09:51:57.000000000 +0000 defconf
-rwxr-xr-x 1 root root  4995 2026-01-14 12:35:05.000000000 +0000 defconf-caps
-rwxr-xr-x 1 root root  3700 2026-01-14 12:35:05.000000000 +0000 defconf-wps-sync
-rwxr-xr-x 1 root root 88902 2026-01-21 09:17:49.000000000 +0000 get-custom-defconf

/nova/lib/profiler:
total 28
-rwxr-xr-x 1 root root 24828 2026-01-29 10:42:48.000000000 +0000 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 636
-rwxr-xr-x 1 root root 173752 2026-01-29 09:58:33.000000000 +0000 kexec
-rwxr-xr-x 1 root root 321132 2026-01-29 10:43:31.000000000 +0000 mke2fs
-rwxr-xr-x 1 root root  25584 2026-01-29 09:58:04.000000000 +0000 nandfix
-rwxr-xr-x 1 root root  67628 2026-01-29 10:01:49.000000000 +0000 sysinit
-rwxr-xr-x 1 root root  50520 2026-01-29 09:58:32.000000000 +0000 vmcore-dmesg

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2026-01-29 11:00:18.000000000 +0000 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:18.000000000 +0000 deinstall
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:18.000000000 +0000 lock
lrwxrwxrwx 1 root root    8 2026-01-29 11:00:18.000000000 +0000 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2026-01-29 11:00:18.000000000 +0000 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2026-01-29 11:00:18.000000000 +0000 post
lrwxrwxrwx 1 root root    7 2026-01-29 11:00:18.000000000 +0000 run -> /rw/run
lrwxrwxrwx 1 root root    4 2026-01-29 11:00:18.000000000 +0000 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

