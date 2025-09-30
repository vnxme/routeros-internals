### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 5792768 bytes, 593 inodes, blocksize: 262144 bytes, created: Tue Mar 11 13:00:52 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 bin
drwxr-xr-x 8 root root 4096 2025-03-11 13:00:46.000000000 +0000 bndl
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 boot
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 dev
lrwxrwxrwx 1 root root   11 2025-03-11 13:00:46.000000000 +0000 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 etc
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 flash
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:46.000000000 +0000 nova
lrwxrwxrwx 1 root root    9 2025-03-11 13:00:46.000000000 +0000 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 proc
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 ram
lrwxrwxrwx 1 root root    9 2025-03-11 13:00:46.000000000 +0000 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 sbin
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 sys
lrwxrwxrwx 1 root root    7 2025-03-11 13:00:46.000000000 +0000 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:46.000000000 +0000 var

/bin:
total 28
lrwxrwxrwx 1 root root    21 2025-03-11 13:00:46.000000000 +0000 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root 18080 2025-03-11 12:05:45.000000000 +0000 catlog
lrwxrwxrwx 1 root root    15 2025-03-11 13:00:46.000000000 +0000 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root    15 2025-03-11 13:00:46.000000000 +0000 login -> /nova/bin/login
-rwxr-xr-x 1 root root  7512 2025-03-11 12:05:41.000000000 +0000 pakp
lrwxrwxrwx 1 root root    21 2025-03-11 13:00:46.000000000 +0000 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root    15 2025-03-11 13:00:46.000000000 +0000 shell -> /nova/bin/login

/bndl:
total 24
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:46.000000000 +0000 advanced-tools
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:46.000000000 +0000 dhcp
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:46.000000000 +0000 hotspot
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:46.000000000 +0000 ipv6
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:46.000000000 +0000 ppp
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:46.000000000 +0000 security

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:46.000000000 +0000 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 webfig

/bndl/advanced-tools/home/web/webfig:
total 8
-rw-r--r-- 1 root root 2360 2025-03-11 12:45:24.000000000 +0000 advtool-b6a18e54d46e.jg.gz
-rwxr-xr-x 1 root root  107 2025-03-11 12:45:24.000000000 +0000 advtool.info
lrwxrwxrwx 1 root root   26 2025-03-11 12:45:24.000000000 +0000 advtool.jg.gz -> advtool-b6a18e54d46e.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 lib

/bndl/advanced-tools/nova/bin:
total 200
-rwxr-xr-x 1 root root 30928 2025-03-11 12:44:42.000000000 +0000 ddns
-rwxr-xr-x 1 root root 14604 2025-03-11 12:44:24.000000000 +0000 fping
-rwxr-xr-x 1 root root 17352 2025-03-11 12:44:59.000000000 +0000 macscan
-rwxr-xr-x 1 root root 67732 2025-03-11 12:46:43.000000000 +0000 netwatch
-rwxr-xr-x 1 root root 16092 2025-03-11 12:44:31.000000000 +0000 pspeed
-rwxr-xr-x 1 root root 34796 2025-03-11 12:45:17.000000000 +0000 scanner
-rwxr-xr-x 1 root root 11576 2025-03-11 12:45:25.000000000 +0000 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 console

/bndl/advanced-tools/nova/lib/console:
total 28
-rwxr-xr-x 1 root root 24705 2025-03-11 12:44:52.000000000 +0000 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 home
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:46.000000000 +0000 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 webfig

/bndl/dhcp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4408 2025-03-11 12:45:17.000000000 +0000 dhcp-b0bb4825d0fa.jg.gz
-rwxr-xr-x 1 root root  101 2025-03-11 12:45:18.000000000 +0000 dhcp.info
lrwxrwxrwx 1 root root   23 2025-03-11 12:45:18.000000000 +0000 dhcp.jg.gz -> dhcp-b0bb4825d0fa.jg.gz

/bndl/dhcp/lib:
total 112
-rwxr-xr-x 1 root root 113520 2025-03-11 12:44:57.000000000 +0000 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 lib

/bndl/dhcp/nova/bin:
total 320
-rwxr-xr-x 1 root root 224224 2025-03-11 12:47:38.000000000 +0000 dhcp
-rwxr-xr-x 1 root root 100860 2025-03-11 12:46:37.000000000 +0000 dhcpclient

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 console

/bndl/dhcp/nova/lib/console:
total 108
-rwxr-xr-x 1 root root 109639 2025-03-11 12:44:35.000000000 +0000 1128267776.mem

/bndl/hotspot:
total 12
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:46.000000000 +0000 nova

/bndl/hotspot/home:
total 4
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:46.000000000 +0000 web

/bndl/hotspot/home/web:
total 8
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:46.000000000 +0000 hotspot
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 webfig

/bndl/hotspot/home/web/hotspot:
total 68
-rw-r--r-- 1 root root 1094 2025-03-11 11:58:04.000000000 +0000 alogin.html
-rw-r--r-- 1 root root  311 2025-03-11 11:58:04.000000000 +0000 api.json
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 css
-rw-r--r-- 1 root root  640 2025-03-11 11:58:04.000000000 +0000 error.html
-rw-r--r-- 1 root root 3719 2025-03-11 11:58:04.000000000 +0000 errors.txt
-rw-r--r-- 1 root root  903 2025-03-11 11:58:04.000000000 +0000 favicon.ico
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 img
-rw-r--r-- 1 root root 4423 2025-03-11 11:58:04.000000000 +0000 login.html
-rw-r--r-- 1 root root 1459 2025-03-11 11:58:04.000000000 +0000 logout.html
-rw-r--r-- 1 root root 7218 2025-03-11 11:58:04.000000000 +0000 md5.js
-rw-r--r-- 1 root root 1204 2025-03-11 11:58:04.000000000 +0000 radvert.html
-rw-r--r-- 1 root root  330 2025-03-11 11:58:04.000000000 +0000 redirect.html
-rw-r--r-- 1 root root  877 2025-03-11 11:58:04.000000000 +0000 rlogin.html
-rw-r--r-- 1 root root 2855 2025-03-11 11:58:04.000000000 +0000 status.html
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 xml

/bndl/hotspot/home/web/hotspot/css:
total 4
-rw-r--r-- 1 root root 4053 2025-03-11 11:58:04.000000000 +0000 style.css

/bndl/hotspot/home/web/hotspot/img:
total 8
-rw-r--r-- 1 root root 644 2025-03-11 11:58:04.000000000 +0000 password.svg
-rw-r--r-- 1 root root 444 2025-03-11 11:58:04.000000000 +0000 user.svg

/bndl/hotspot/home/web/hotspot/xml:
total 32
-rw-r--r-- 1 root root 4251 2025-03-11 11:58:04.000000000 +0000 WISPAccessGatewayParam.xsd
-rw-r--r-- 1 root root  839 2025-03-11 11:58:04.000000000 +0000 alogin.html
-rw-r--r-- 1 root root  428 2025-03-11 11:58:04.000000000 +0000 error.html
-rw-r--r-- 1 root root  372 2025-03-11 11:58:04.000000000 +0000 flogout.html
-rw-r--r-- 1 root root  809 2025-03-11 11:58:04.000000000 +0000 login.html
-rw-r--r-- 1 root root  370 2025-03-11 11:58:04.000000000 +0000 logout.html
-rw-r--r-- 1 root root  545 2025-03-11 11:58:04.000000000 +0000 rlogin.html

/bndl/hotspot/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4216 2025-03-11 12:47:03.000000000 +0000 hotspot-f1e2e1d4af99.jg.gz
-rwxr-xr-x 1 root root  107 2025-03-11 12:47:03.000000000 +0000 hotspot.info
lrwxrwxrwx 1 root root   26 2025-03-11 12:47:03.000000000 +0000 hotspot.jg.gz -> hotspot-f1e2e1d4af99.jg.gz

/bndl/hotspot/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 modules

/bndl/hotspot/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 5.6.3

/bndl/hotspot/lib/modules/5.6.3:
total 8
-rw-r--r-- 1 root root   13 2025-03-11 12:47:19.000000000 +0000 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 net

/bndl/hotspot/lib/modules/5.6.3/net:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 ipv4

/bndl/hotspot/lib/modules/5.6.3/net/ipv4:
total 44
-rw-r--r-- 1 root root 43352 2025-03-11 12:46:30.000000000 +0000 unicl.ko

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 lib

/bndl/hotspot/nova/bin:
total 256
-rwxr-xr-x 1 root root 260928 2025-03-11 12:46:39.000000000 +0000 hotspot

/bndl/hotspot/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 radius

/bndl/hotspot/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-03-11 12:46:58.000000000 +0000 hotspot.x3

/bndl/hotspot/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 console

/bndl/hotspot/nova/lib/console:
total 84
-rwxr-xr-x 1 root root 82346 2025-03-11 12:46:22.000000000 +0000 1132462080.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:46.000000000 +0000 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 webfig

/bndl/ipv6/home/web/webfig:
total 12
-rw-r--r-- 1 root root 7911 2025-03-11 12:45:36.000000000 +0000 ipv6-932ca749791f.jg.gz
-rwxr-xr-x 1 root root  101 2025-03-11 12:45:36.000000000 +0000 ipv6.info
lrwxrwxrwx 1 root root   23 2025-03-11 12:45:36.000000000 +0000 ipv6.jg.gz -> ipv6-932ca749791f.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:46.000000000 +0000 lib

/bndl/ipv6/nova/bin:
total 92
-rwxr-xr-x 1 root root 28784 2025-03-11 12:45:50.000000000 +0000 ippool6
-rwxr-xr-x 1 root root 57868 2025-03-11 12:44:55.000000000 +0000 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 route

/bndl/ipv6/nova/lib/console:
total 184
-rwxr-xr-x 1 root root 186728 2025-03-11 12:45:16.000000000 +0000 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2025-03-11 11:58:04.000000000 +0000 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:46.000000000 +0000 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 webfig

/bndl/ppp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 6450 2025-03-11 12:46:06.000000000 +0000 ppp-f833b7b4927e.jg.gz
-rwxr-xr-x 1 root root   99 2025-03-11 12:46:06.000000000 +0000 ppp.info
lrwxrwxrwx 1 root root   22 2025-03-11 12:46:06.000000000 +0000 ppp.jg.gz -> ppp-f833b7b4927e.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:46.000000000 +0000 5.6.3

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 misc
-rw-r--r-- 1 root root  293 2025-03-11 12:52:11.000000000 +0000 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 104
-rw-r--r-- 1 root root 11412 2025-03-11 12:39:21.000000000 +0000 ppp_async.ko
-rw-r--r-- 1 root root  6784 2025-03-11 12:39:21.000000000 +0000 ppp_deflate.ko
-rw-r--r-- 1 root root 33548 2025-03-11 12:39:21.000000000 +0000 ppp_generic.ko
-rw-r--r-- 1 root root  8732 2025-03-11 12:39:21.000000000 +0000 ppp_mppe.ko
-rw-r--r-- 1 root root  9524 2025-03-11 12:39:21.000000000 +0000 ppp_synctty.ko
-rw-r--r-- 1 root root 12784 2025-03-11 12:39:22.000000000 +0000 pppoe.ko
-rw-r--r-- 1 root root  4284 2025-03-11 12:39:22.000000000 +0000 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 92
-rw-r--r-- 1 root root 36084 2025-03-11 12:46:27.000000000 +0000 ovpn.ko
-rw-r--r-- 1 root root  6204 2025-03-11 12:47:27.000000000 +0000 pppoefp.ko
-rw-r--r-- 1 root root 48436 2025-03-11 12:47:27.000000000 +0000 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 60
-rw-r--r-- 1 root root 48912 2025-03-11 12:45:26.000000000 +0000 l2tp.ko
-rw-r--r-- 1 root root 10180 2025-03-11 12:45:01.000000000 +0000 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:46.000000000 +0000 etc
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:46.000000000 +0000 lib

/bndl/ppp/nova/bin:
total 584
-rwxr-xr-x 1 root root 594280 2025-03-11 12:51:30.000000000 +0000 ppp
lrwxrwxrwx 1 root root      3 2025-03-11 12:51:30.000000000 +0000 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2025-03-11 12:44:37.000000000 +0000 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2025-03-11 12:44:37.000000000 +0000 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 profiler

/bndl/ppp/nova/lib/console:
total 144
-rwxr-xr-x 1 root root 147136 2025-03-11 12:45:52.000000000 +0000 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 4
-rwxr-xr-x 1 root root 1940 2025-03-11 12:46:58.000000000 +0000 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:46.000000000 +0000 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 webfig

/bndl/security/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4365 2025-03-11 12:52:23.000000000 +0000 secure-0a49065a769f.jg.gz
-rwxr-xr-x 1 root root  105 2025-03-11 12:52:24.000000000 +0000 secure.info
lrwxrwxrwx 1 root root   25 2025-03-11 12:52:24.000000000 +0000 secure.jg.gz -> secure-0a49065a769f.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 5.6.3

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:46.000000000 +0000 kernel
-rw-r--r-- 1 root root  106 2025-03-11 13:00:15.000000000 +0000 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 crypto
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:46.000000000 +0000 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 88
-rw-r--r-- 1 root root  8352 2025-03-11 12:39:21.000000000 +0000 blowfish_common.ko
-rw-r--r-- 1 root root  6020 2025-03-11 12:39:21.000000000 +0000 blowfish_generic.ko
-rw-r--r-- 1 root root 23348 2025-03-11 12:39:21.000000000 +0000 camellia_generic.ko
-rw-r--r-- 1 root root  8412 2025-03-11 12:39:21.000000000 +0000 chacha20poly1305.ko
-rw-r--r-- 1 root root  3800 2025-03-11 12:39:21.000000000 +0000 echainiv.ko
-rw-r--r-- 1 root root 15832 2025-03-11 12:39:21.000000000 +0000 twofish_common.ko
-rw-r--r-- 1 root root  9988 2025-03-11 12:39:21.000000000 +0000 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 key
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root  8904 2025-03-11 12:39:24.000000000 +0000 ah4.ko
-rw-r--r-- 1 root root 13068 2025-03-11 12:39:24.000000000 +0000 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 36
-rw-r--r-- 1 root root 33820 2025-03-11 12:39:26.000000000 +0000 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 28
-rw-r--r-- 1 root root 26880 2025-03-11 12:39:28.000000000 +0000 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:46.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 lib

/bndl/security/nova/bin:
total 716
-rwxr-xr-x 1 root root 539712 2025-03-11 12:57:19.000000000 +0000 ipsec
lrwxrwxrwx 1 root root      5 2025-03-11 12:58:01.000000000 +0000 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 191500 2025-03-11 12:54:02.000000000 +0000 ssh
lrwxrwxrwx 1 root root      3 2025-03-11 12:54:03.000000000 +0000 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-03-11 12:51:13.000000000 +0000 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2025-03-11 12:51:13.000000000 +0000 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 console

/bndl/security/nova/lib/console:
total 88
-rwxr-xr-x 1 root root 89528 2025-03-11 12:51:48.000000000 +0000 1077936128.mem

/boot:
total 0

/dev:
total 0

/etc:
total 172
-rw-r--r-- 1 root root 130747 2025-03-11 11:58:28.000000000 +0000 license
-rw-r--r-- 1 root root  43600 2025-03-11 12:04:44.000000000 +0000 qca9531L-7.18.2.fwf
lrwxrwxrwx 1 root root     24 2025-03-11 13:00:46.000000000 +0000 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2025-03-11 13:00:46.000000000 +0000 web

/home/web:
total 64
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:46.000000000 +0000 assets
-rwxr-xr-x 1 root root 18983 2025-03-11 12:03:42.000000000 +0000 bth-files.html
-rwxr-xr-x 1 root root   600 2025-03-11 11:58:29.000000000 +0000 favicon.png
-rwxr-xr-x 1 root root   689 2025-03-11 11:58:29.000000000 +0000 favicon.svg
-rwxr-xr-x 1 root root   708 2025-03-11 11:58:27.000000000 +0000 graph.css
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:46.000000000 +0000 help
-rwxr-xr-x 1 root root  1254 2025-03-11 11:58:29.000000000 +0000 index2.html
lrwxrwxrwx 1 root root    12 2025-03-11 12:44:11.000000000 +0000 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2025-03-11 11:58:29.000000000 +0000 logo.png
-rw-r--r-- 1 root root  2507 2025-03-11 11:58:28.000000000 +0000 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2025-03-11 11:58:29.000000000 +0000 robots.txt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:46.000000000 +0000 webfig
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:46.000000000 +0000 winbox

/home/web/assets:
total 160
-rw-r--r-- 1 root root  19040 2025-03-11 11:58:28.000000000 +0000 400.woff2
-rw-r--r-- 1 root root  19156 2025-03-11 11:58:28.000000000 +0000 700.woff2
-rwxr-xr-x 1 root root    799 2025-03-11 11:58:29.000000000 +0000 script-bd71a1293274.js
-rwxr-xr-x 1 root root 117563 2025-03-11 11:58:29.000000000 +0000 style-692511ab2675.css

/home/web/help:
total 4
-rw-r--r-- 1 root root 118 2025-03-11 11:58:28.000000000 +0000 license.html

/home/web/webfig:
total 680
-rwxr-xr-x 1 root root   9157 2025-03-11 12:02:29.000000000 +0000 curve255-541e54a862be.js
-rwxr-xr-x 1 root root     70 2025-03-11 12:07:53.000000000 +0000 icons.info
-rwxr-xr-x 1 root root  24341 2025-03-11 11:58:26.000000000 +0000 icons.png
-rwxr-xr-x 1 root root     55 2025-03-11 12:07:54.000000000 +0000 icons24.info
-rwxr-xr-x 1 root root  39797 2025-03-11 11:58:26.000000000 +0000 icons24.png
-rwxr-xr-x 1 root root     55 2025-03-11 12:07:54.000000000 +0000 icons32.info
-rwxr-xr-x 1 root root  55094 2025-03-11 11:58:26.000000000 +0000 icons32.png
-rwxr-xr-x 1 root root  21705 2025-03-11 12:02:29.000000000 +0000 index.html
lrwxrwxrwx 1 root root     13 2025-03-11 12:02:29.000000000 +0000 list -> /ram/gum.list
-rwxr-xr-x 1 root root 408548 2025-03-11 12:02:29.000000000 +0000 master-6894ebd52cab.js
-rw-r--r-- 1 root root 107663 2025-03-11 12:07:56.000000000 +0000 roteros-baf706470128.jg.gz
-rwxr-xr-x 1 root root    109 2025-03-11 12:07:56.000000000 +0000 roteros.info
lrwxrwxrwx 1 root root     26 2025-03-11 12:07:57.000000000 +0000 roteros.jg.gz -> roteros-baf706470128.jg.gz

/home/web/winbox:
total 0

/lib:
total 1904
-rwxr-xr-x 1 root root 279128 2025-03-11 12:00:35.000000000 +0000 libc.so
-rwxr-xr-x 1 root root  89264 2025-03-11 12:06:15.000000000 +0000 libeap.so
-rwxr-xr-x 1 root root  21840 2025-03-11 12:02:36.000000000 +0000 libjson.so
-rwxr-xr-x 1 root root 173256 2025-03-11 12:04:24.000000000 +0000 librappsup.so
-rwxr-xr-x 1 root root 122540 2025-03-11 12:03:29.000000000 +0000 libubox.so
-rwxr-xr-x 1 root root  76508 2025-03-11 12:02:27.000000000 +0000 libuc++.so
-rwxr-xr-x 1 root root 274196 2025-03-11 12:04:27.000000000 +0000 libucrypto.so
-rwxr-xr-x 1 root root  27308 2025-03-11 12:03:19.000000000 +0000 libufiber.so
-rwxr-xr-x 1 root root  69868 2025-03-11 12:03:28.000000000 +0000 libuhttp.so
-rwxr-xr-x 1 root root 612460 2025-03-11 12:03:02.000000000 +0000 libumsg.so
-rwxr-xr-x 1 root root  37020 2025-03-11 12:05:20.000000000 +0000 liburadius.so
-rwxr-xr-x 1 root root  10544 2025-03-11 12:05:13.000000000 +0000 libuxml++.so
-rwxr-xr-x 1 root root  36968 2025-03-11 12:02:32.000000000 +0000 libwww.so
-rwxr-xr-x 1 root root  13772 2025-03-11 12:02:36.000000000 +0000 libxml.so
-rwxr-xr-x 1 root root  68088 2025-03-11 12:02:37.000000000 +0000 libz.so
drwxr-xr-x 3 root root   4096 2025-03-11 13:00:46.000000000 +0000 modules
lrwxrwxrwx 1 root root     27 2025-03-11 13:00:46.000000000 +0000 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2025-03-11 13:00:46.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:46.000000000 +0000 drivers
drwxr-xr-x 7 root root 4096 2025-03-11 13:00:46.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 misc
-rw-r--r-- 1 root root 1988 2025-03-11 12:44:08.000000000 +0000 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-03-11 13:00:46.000000000 +0000 net

/lib/modules/5.6.3/drivers:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 char
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 net

/lib/modules/5.6.3/drivers/char:
total 20
-rw-r--r-- 1 root root 4868 2025-03-11 12:36:36.000000000 +0000 ar7100wdt.ko
-rw-r--r-- 1 root root 8784 2025-03-11 12:36:50.000000000 +0000 ticker.ko

/lib/modules/5.6.3/drivers/net:
total 496
-rw-r--r-- 1 root root  39704 2025-03-11 12:36:59.000000000 +0000 ag7240.ko
-rw-r--r-- 1 root root  43960 2025-03-11 12:38:26.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root  26836 2025-03-11 12:38:26.000000000 +0000 aths16.ko
-rw-r--r-- 1 root root  10680 2025-03-11 12:38:57.000000000 +0000 imq.ko
-rw-r--r-- 1 root root 173816 2025-03-11 12:42:01.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root  85288 2025-03-11 12:37:53.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root   3376 2025-03-11 12:38:55.000000000 +0000 sram.ko
-rw-r--r-- 1 root root  56616 2025-03-11 12:38:30.000000000 +0000 switch.ko
-rw-r--r-- 1 root root  55852 2025-03-11 12:42:03.000000000 +0000 vxlan2.ko

/lib/modules/5.6.3/kernel:
total 20
drwxr-xr-x  3 root root 4096 2025-03-11 13:00:46.000000000 +0000 arch
drwxr-xr-x  2 root root 4096 2025-03-11 13:00:46.000000000 +0000 crypto
drwxr-xr-x  3 root root 4096 2025-03-11 13:00:46.000000000 +0000 drivers
drwxr-xr-x  5 root root 4096 2025-03-11 13:00:46.000000000 +0000 lib
drwxr-xr-x 10 root root 4096 2025-03-11 13:00:46.000000000 +0000 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:46.000000000 +0000 mips

/lib/modules/5.6.3/kernel/arch/mips:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 crypto
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 oprofile

/lib/modules/5.6.3/kernel/arch/mips/crypto:
total 16
-rw-r--r-- 1 root root 7964 2025-03-11 12:39:21.000000000 +0000 chacha-mips.ko
-rw-r--r-- 1 root root 5888 2025-03-11 12:39:21.000000000 +0000 poly1305-mips.ko

/lib/modules/5.6.3/kernel/arch/mips/oprofile:
total 36
-rw-r--r-- 1 root root 34056 2025-03-11 12:39:21.000000000 +0000 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 24
-rw-r--r-- 1 root root  3068 2025-03-11 12:39:21.000000000 +0000 arc4.ko
-rw-r--r-- 1 root root  3820 2025-03-11 12:39:21.000000000 +0000 des_generic.ko
-rw-r--r-- 1 root root  3992 2025-03-11 12:39:21.000000000 +0000 sha1_generic.ko
-rw-r--r-- 1 root root 10000 2025-03-11 12:39:21.000000000 +0000 sha512_generic.ko

/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:46.000000000 +0000 net

/lib/modules/5.6.3/kernel/drivers/net:
total 52
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:46.000000000 +0000 bonding
-rw-r--r-- 1 root root 19068 2025-03-11 12:39:21.000000000 +0000 macvlan.ko
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:46.000000000 +0000 slip
-rw-r--r-- 1 root root 18184 2025-03-11 12:39:22.000000000 +0000 vrf.ko
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:46.000000000 +0000 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 128
-rw-r--r-- 1 root root 130880 2025-03-11 12:39:21.000000000 +0000 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6052 2025-03-11 12:39:22.000000000 +0000 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 80
-rw-r--r-- 1 root root 80192 2025-03-11 12:39:22.000000000 +0000 wireguard.ko

/lib/modules/5.6.3/kernel/lib:
total 24
-rw-r--r-- 1 root root 3340 2025-03-11 12:39:22.000000000 +0000 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 crypto
-rw-r--r-- 1 root root 3492 2025-03-11 12:39:23.000000000 +0000 ts_bm.ko
-rw-r--r-- 1 root root 3324 2025-03-11 12:39:23.000000000 +0000 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 64
-rw-r--r-- 1 root root  2304 2025-03-11 12:39:22.000000000 +0000 libarc4.ko
-rw-r--r-- 1 root root  7468 2025-03-11 12:39:22.000000000 +0000 libblake2s-generic.ko
-rw-r--r-- 1 root root  3732 2025-03-11 12:39:22.000000000 +0000 libblake2s.ko
-rw-r--r-- 1 root root  7040 2025-03-11 12:39:22.000000000 +0000 libchacha20poly1305.ko
-rw-r--r-- 1 root root 11708 2025-03-11 12:39:22.000000000 +0000 libcurve25519-generic.ko
-rw-r--r-- 1 root root  1992 2025-03-11 12:39:22.000000000 +0000 libcurve25519.ko
-rw-r--r-- 1 root root 20668 2025-03-11 12:39:22.000000000 +0000 libdes.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18368 2025-03-11 12:39:23.000000000 +0000 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14908 2025-03-11 12:39:23.000000000 +0000 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 32
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 8021q
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 ipv4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 ipv6
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 sched
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 unix
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 xfrm

/lib/modules/5.6.3/kernel/net/8021q:
total 24
-rw-r--r-- 1 root root 24024 2025-03-11 12:39:23.000000000 +0000 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 84
-rw-r--r-- 1 root root  2640 2025-03-11 12:39:23.000000000 +0000 ebt_802_3.ko
-rw-r--r-- 1 root root  3572 2025-03-11 12:39:23.000000000 +0000 ebt_arp.ko
-rw-r--r-- 1 root root  3168 2025-03-11 12:39:23.000000000 +0000 ebt_arpreply.ko
-rw-r--r-- 1 root root  3164 2025-03-11 12:39:23.000000000 +0000 ebt_dnat.ko
-rw-r--r-- 1 root root  3548 2025-03-11 12:39:23.000000000 +0000 ebt_ip.ko
-rw-r--r-- 1 root root  3780 2025-03-11 12:39:23.000000000 +0000 ebt_ip6.ko
-rw-r--r-- 1 root root  3428 2025-03-11 12:39:23.000000000 +0000 ebt_limit.ko
-rw-r--r-- 1 root root  2580 2025-03-11 12:39:23.000000000 +0000 ebt_mark.ko
-rw-r--r-- 1 root root  2512 2025-03-11 12:39:23.000000000 +0000 ebt_mark_m.ko
-rw-r--r-- 1 root root  2448 2025-03-11 12:39:23.000000000 +0000 ebt_pkttype.ko
-rw-r--r-- 1 root root  3036 2025-03-11 12:39:23.000000000 +0000 ebt_redirect.ko
-rw-r--r-- 1 root root  3024 2025-03-11 12:39:24.000000000 +0000 ebt_snat.ko
-rw-r--r-- 1 root root  3804 2025-03-11 12:39:24.000000000 +0000 ebt_stp.ko
-rw-r--r-- 1 root root  2956 2025-03-11 12:39:24.000000000 +0000 ebt_vlan.ko
-rw-r--r-- 1 root root  3108 2025-03-11 12:39:24.000000000 +0000 ebtable_filter.ko
-rw-r--r-- 1 root root  3108 2025-03-11 12:39:24.000000000 +0000 ebtable_nat.ko
-rw-r--r-- 1 root root 16480 2025-03-11 12:39:24.000000000 +0000 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 16692 2025-03-11 12:39:24.000000000 +0000 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:46.000000000 +0000 netfilter
-rw-r--r-- 1 root root 14636 2025-03-11 12:39:24.000000000 +0000 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 68
-rw-r--r-- 1 root root 15492 2025-03-11 12:39:24.000000000 +0000 ip_tables.ko
-rw-r--r-- 1 root root  3672 2025-03-11 12:39:24.000000000 +0000 ipt_REJECT.ko
-rw-r--r-- 1 root root  3756 2025-03-11 12:39:24.000000000 +0000 iptable_filter.ko
-rw-r--r-- 1 root root  3852 2025-03-11 12:39:24.000000000 +0000 iptable_mangle.ko
-rw-r--r-- 1 root root  3520 2025-03-11 12:39:24.000000000 +0000 iptable_nat.ko
-rw-r--r-- 1 root root  4088 2025-03-11 12:39:24.000000000 +0000 iptable_raw.ko
-rw-r--r-- 1 root root  3436 2025-03-11 12:39:24.000000000 +0000 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root  9284 2025-03-11 12:39:24.000000000 +0000 nf_nat_h323.ko
-rw-r--r-- 1 root root  4988 2025-03-11 12:39:24.000000000 +0000 nf_nat_pptp.ko
-rw-r--r-- 1 root root  4364 2025-03-11 12:39:24.000000000 +0000 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 436
-rw-r--r-- 1 root root   8872 2025-03-11 12:39:24.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root  12292 2025-03-11 12:39:25.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root   3552 2025-03-11 12:39:25.000000000 +0000 ip6_udp_tunnel.ko
-rw-r--r-- 1 root root 397488 2025-03-11 12:39:25.000000000 +0000 ipv6.ko
drwxr-xr-x 2 root root   4096 2025-03-11 13:00:46.000000000 +0000 netfilter
-rw-r--r-- 1 root root   4920 2025-03-11 12:39:26.000000000 +0000 tunnel6.ko

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 68
-rw-r--r-- 1 root root 15940 2025-03-11 12:39:25.000000000 +0000 ip6_tables.ko
-rw-r--r-- 1 root root  3920 2025-03-11 12:39:25.000000000 +0000 ip6t_NPT.ko
-rw-r--r-- 1 root root  3744 2025-03-11 12:39:25.000000000 +0000 ip6t_REJECT.ko
-rw-r--r-- 1 root root  2884 2025-03-11 12:39:25.000000000 +0000 ip6t_eui64.ko
-rw-r--r-- 1 root root  3148 2025-03-11 12:39:25.000000000 +0000 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  3760 2025-03-11 12:39:25.000000000 +0000 ip6table_filter.ko
-rw-r--r-- 1 root root  4088 2025-03-11 12:39:25.000000000 +0000 ip6table_mangle.ko
-rw-r--r-- 1 root root  3524 2025-03-11 12:39:25.000000000 +0000 ip6table_nat.ko
-rw-r--r-- 1 root root  4092 2025-03-11 12:39:26.000000000 +0000 ip6table_raw.ko
-rw-r--r-- 1 root root  9532 2025-03-11 12:39:26.000000000 +0000 nf_defrag_ipv6.ko
-rw-r--r-- 1 root root  5136 2025-03-11 12:39:26.000000000 +0000 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 488
-rw-r--r-- 1 root root 86836 2025-03-11 12:39:26.000000000 +0000 nf_conntrack.ko
-rw-r--r-- 1 root root  9860 2025-03-11 12:39:26.000000000 +0000 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root 40504 2025-03-11 12:39:26.000000000 +0000 nf_conntrack_h323.ko
-rw-r--r-- 1 root root  8108 2025-03-11 12:39:26.000000000 +0000 nf_conntrack_irc.ko
-rw-r--r-- 1 root root 25644 2025-03-11 12:39:26.000000000 +0000 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root  7520 2025-03-11 12:39:26.000000000 +0000 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root  8084 2025-03-11 12:39:26.000000000 +0000 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root 26740 2025-03-11 12:39:26.000000000 +0000 nf_conntrack_sip.ko
-rw-r--r-- 1 root root  6796 2025-03-11 12:39:26.000000000 +0000 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root 28828 2025-03-11 12:39:26.000000000 +0000 nf_nat.ko
-rw-r--r-- 1 root root  4460 2025-03-11 12:39:27.000000000 +0000 nf_nat_ftp.ko
-rw-r--r-- 1 root root  4104 2025-03-11 12:39:27.000000000 +0000 nf_nat_irc.ko
-rw-r--r-- 1 root root  7576 2025-03-11 12:39:27.000000000 +0000 nf_nat_rtsp.ko
-rw-r--r-- 1 root root 11772 2025-03-11 12:39:27.000000000 +0000 nf_nat_sip.ko
-rw-r--r-- 1 root root  3028 2025-03-11 12:39:27.000000000 +0000 nf_nat_tftp.ko
-rw-r--r-- 1 root root  8404 2025-03-11 12:39:27.000000000 +0000 nfnetlink.ko
-rw-r--r-- 1 root root 24068 2025-03-11 12:39:27.000000000 +0000 x_tables.ko
-rw-r--r-- 1 root root  6080 2025-03-11 12:39:27.000000000 +0000 xt_CT.ko
-rw-r--r-- 1 root root  3964 2025-03-11 12:39:27.000000000 +0000 xt_DSCP.ko
-rw-r--r-- 1 root root  3404 2025-03-11 12:39:27.000000000 +0000 xt_HL.ko
-rw-r--r-- 1 root root  3412 2025-03-11 12:39:27.000000000 +0000 xt_MASQUERADE.ko
-rw-r--r-- 1 root root  3768 2025-03-11 12:39:27.000000000 +0000 xt_NETMAP.ko
-rw-r--r-- 1 root root  3100 2025-03-11 12:39:27.000000000 +0000 xt_REDIRECT.ko
-rw-r--r-- 1 root root  6144 2025-03-11 12:39:27.000000000 +0000 xt_TCPMSS.ko
-rw-r--r-- 1 root root  5148 2025-03-11 12:39:27.000000000 +0000 xt_addrtype.ko
-rw-r--r-- 1 root root  4244 2025-03-11 12:39:27.000000000 +0000 xt_connbytes.ko
-rw-r--r-- 1 root root  4312 2025-03-11 12:39:27.000000000 +0000 xt_connmark.ko
-rw-r--r-- 1 root root  4948 2025-03-11 12:39:27.000000000 +0000 xt_conntrack.ko
-rw-r--r-- 1 root root  2988 2025-03-11 12:39:27.000000000 +0000 xt_dscp.ko
-rw-r--r-- 1 root root 16184 2025-03-11 12:39:27.000000000 +0000 xt_hashlimit.ko
-rw-r--r-- 1 root root  3436 2025-03-11 12:39:27.000000000 +0000 xt_helper.ko
-rw-r--r-- 1 root root  2812 2025-03-11 12:39:27.000000000 +0000 xt_hl.ko
-rw-r--r-- 1 root root  2748 2025-03-11 12:39:27.000000000 +0000 xt_length.ko
-rw-r--r-- 1 root root  2600 2025-03-11 12:39:27.000000000 +0000 xt_mac.ko
-rw-r--r-- 1 root root  2912 2025-03-11 12:39:27.000000000 +0000 xt_mark.ko
-rw-r--r-- 1 root root  3384 2025-03-11 12:39:27.000000000 +0000 xt_multiport.ko
-rw-r--r-- 1 root root  5096 2025-03-11 12:39:27.000000000 +0000 xt_nat.ko
-rw-r--r-- 1 root root  3948 2025-03-11 12:39:27.000000000 +0000 xt_physdev.ko
-rw-r--r-- 1 root root  4456 2025-03-11 12:39:28.000000000 +0000 xt_policy.ko
-rw-r--r-- 1 root root  2504 2025-03-11 12:39:28.000000000 +0000 xt_realm.ko
-rw-r--r-- 1 root root  3048 2025-03-11 12:39:28.000000000 +0000 xt_statistic.ko
-rw-r--r-- 1 root root  2920 2025-03-11 12:39:28.000000000 +0000 xt_string.ko
-rw-r--r-- 1 root root  3112 2025-03-11 12:39:28.000000000 +0000 xt_tcpmss.ko
-rw-r--r-- 1 root root  3968 2025-03-11 12:39:28.000000000 +0000 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/sched:
total 84
-rw-r--r-- 1 root root 28280 2025-03-11 12:39:28.000000000 +0000 sch_cake.ko
-rw-r--r-- 1 root root  7420 2025-03-11 12:39:28.000000000 +0000 sch_codel.ko
-rw-r--r-- 1 root root 10028 2025-03-11 12:39:28.000000000 +0000 sch_fq_codel.ko
-rw-r--r-- 1 root root 24044 2025-03-11 12:39:28.000000000 +0000 sch_htb.ko
-rw-r--r-- 1 root root  8816 2025-03-11 12:39:28.000000000 +0000 sch_red.ko

/lib/modules/5.6.3/kernel/net/unix:
total 32
-rw-r--r-- 1 root root 30760 2025-03-11 12:39:28.000000000 +0000 unix.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 7012 2025-03-11 12:39:28.000000000 +0000 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 172
-rw-r--r-- 1 root root 10368 2025-03-11 12:36:54.000000000 +0000 btest.ko
-rw-r--r-- 1 root root 44788 2025-03-11 12:37:21.000000000 +0000 flash.ko
-rw-r--r-- 1 root root  4528 2025-03-11 12:39:19.000000000 +0000 jiffies.ko
-rw-r--r-- 1 root root  3000 2025-03-11 12:37:13.000000000 +0000 ledgroup.ko
-rw-r--r-- 1 root root 11092 2025-03-11 12:36:48.000000000 +0000 logring.ko
-rw-r--r-- 1 root root 22056 2025-03-11 12:37:29.000000000 +0000 mesh.ko
-rw-r--r-- 1 root root  5816 2025-03-11 12:36:46.000000000 +0000 panics.ko
-rw-r--r-- 1 root root  7584 2025-03-11 12:38:58.000000000 +0000 rb.ko
-rw-r--r-- 1 root root  5688 2025-03-11 12:39:26.000000000 +0000 romon.ko
-rw-r--r-- 1 root root  5240 2025-03-11 12:37:24.000000000 +0000 snif.ko
-rw-r--r-- 1 root root 24964 2025-03-11 12:37:45.000000000 +0000 traffic_gen.ko
-rw-r--r-- 1 root root  6424 2025-03-11 12:37:25.000000000 +0000 ulog.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:46.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 sched

/lib/modules/5.6.3/net/bridge:
total 192
-rw-r--r-- 1 root root 164676 2025-03-11 12:41:10.000000000 +0000 bridge2.ko
-rw-r--r-- 1 root root  16456 2025-03-11 12:41:10.000000000 +0000 bridge2_netfilter.ko
-rw-r--r-- 1 root root   2464 2025-03-11 12:37:22.000000000 +0000 ebt_snif.ko
-rw-r--r-- 1 root root   2696 2025-03-11 12:37:21.000000000 +0000 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 24
-rw-r--r-- 1 root root 3260 2025-03-11 12:36:53.000000000 +0000 ipt_SAME.ko
-rw-r--r-- 1 root root 6108 2025-03-11 12:36:53.000000000 +0000 ipt_TARPIT.ko
-rw-r--r-- 1 root root 4060 2025-03-11 12:36:54.000000000 +0000 ipt_psd.ko
-rw-r--r-- 1 root root 2564 2025-03-11 12:37:22.000000000 +0000 ipt_snif.ko
-rw-r--r-- 1 root root 3040 2025-03-11 12:37:21.000000000 +0000 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 60
-rw-r--r-- 1 root root  2028 2025-03-11 12:38:09.000000000 +0000 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  2028 2025-03-11 12:38:09.000000000 +0000 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 10464 2025-03-11 12:38:15.000000000 +0000 xt_ein.ko
-rw-r--r-- 1 root root 12424 2025-03-11 12:37:00.000000000 +0000 xt_layer7.ko
-rw-r--r-- 1 root root 16516 2025-03-11 12:38:15.000000000 +0000 xt_misc.ko
-rw-r--r-- 1 root root  3588 2025-03-11 12:37:08.000000000 +0000 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 76
-rw-r--r-- 1 root root  5156 2025-03-11 12:37:11.000000000 +0000 cls_fw.ko
-rw-r--r-- 1 root root 11488 2025-03-11 12:37:15.000000000 +0000 cls_linear.ko
-rw-r--r-- 1 root root 12596 2025-03-11 12:37:30.000000000 +0000 proto_agr.ko
-rw-r--r-- 1 root root 18524 2025-03-11 12:37:30.000000000 +0000 sch_agr.ko
-rw-r--r-- 1 root root 10312 2025-03-11 12:36:57.000000000 +0000 sch_pcq.ko
-rw-r--r-- 1 root root  8000 2025-03-11 12:39:28.000000000 +0000 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2025-03-11 13:00:46.000000000 +0000 bin
drwxr-xr-x 11 root root 4096 2025-03-11 13:00:46.000000000 +0000 etc
drwxr-xr-x  5 root root 4096 2025-03-11 13:00:46.000000000 +0000 lib
lrwxrwxrwx  1 root root    8 2025-03-11 13:00:46.000000000 +0000 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2025-03-11 13:00:46.000000000 +0000 store -> /rw/store

/nova/bin:
total 8572
-rwxr-xr-x 1 root root   23672 2025-03-11 12:03:18.000000000 +0000 agent
-rwxr-xr-x 1 root root   12504 2025-03-11 12:03:18.000000000 +0000 arpd
-rwxr-xr-x 1 root root   17136 2025-03-11 12:05:36.000000000 +0000 backup
-rwxr-xr-x 1 root root  264828 2025-03-11 12:08:11.000000000 +0000 bridge2
-rwxr-xr-x 1 root root   76080 2025-03-11 12:05:51.000000000 +0000 btest
-rwxr-xr-x 1 root root 1025652 2025-03-11 12:07:11.000000000 +0000 cerm
lrwxrwxrwx 1 root root       4 2025-03-11 12:07:11.000000000 +0000 cerm-worker -> cerm
-rwxr-xr-x 1 root root  172392 2025-03-11 12:07:09.000000000 +0000 cloud
-rwxr-xr-x 1 root root   90720 2025-03-11 12:05:13.000000000 +0000 crossfig
-rwxr-xr-x 1 root root   65580 2025-03-11 12:06:30.000000000 +0000 detnet
-rwxr-xr-x 1 root root   80260 2025-03-11 12:04:00.000000000 +0000 discover
-rwxr-xr-x 1 root root   39920 2025-03-11 12:05:29.000000000 +0000 email
-rwxr-xr-x 1 root root  113148 2025-03-11 12:06:05.000000000 +0000 fileman
-rwxr-xr-x 1 root root   34884 2025-03-11 12:03:22.000000000 +0000 ftpd
-rwxr-xr-x 1 root root  155840 2025-03-11 12:04:11.000000000 +0000 graphing
-rwxr-xr-x 1 root root    4440 2025-03-11 12:05:31.000000000 +0000 havecardbus
-rwxr-xr-x 1 root root   63696 2025-03-11 12:05:04.000000000 +0000 igmpproxy
-rwxr-xr-x 1 root root   82512 2025-03-11 12:06:42.000000000 +0000 installer
-rwxr-xr-x 1 root root   29440 2025-03-11 12:06:55.000000000 +0000 ippool
-rwxr-xr-x 1 root root   55376 2025-03-11 12:05:55.000000000 +0000 keyman
-rwxr-xr-x 1 root root   47376 2025-03-11 12:03:54.000000000 +0000 kidcontrol
-rwxr-xr-x 1 root root   68908 2025-03-11 12:06:14.000000000 +0000 led
-rwxr-xr-x 1 root root  120960 2025-03-11 12:07:23.000000000 +0000 letsencrypt
-rwxr-xr-x 1 root root   85244 2025-03-11 12:05:38.000000000 +0000 loader
-rwxr-xr-x 1 root root   80368 2025-03-11 12:03:27.000000000 +0000 log
-rwxr-xr-x 1 root root  166736 2025-03-11 12:08:51.000000000 +0000 login
-rwxr-xr-x 1 root root   54284 2025-03-11 12:03:22.000000000 +0000 logmaker
-rwxr-xr-x 1 root root   22332 2025-03-11 12:03:16.000000000 +0000 macping
-rwxr-xr-x 1 root root   37048 2025-03-11 12:05:49.000000000 +0000 mactel
-rwxr-xr-x 1 root root   23016 2025-03-11 12:03:19.000000000 +0000 mepty
-rwxr-xr-x 1 root root   85052 2025-03-11 12:04:02.000000000 +0000 mesh
-rwxr-xr-x 1 root root   67432 2025-03-11 12:08:37.000000000 +0000 mode
lrwxrwxrwx 1 root root       7 2025-03-11 12:05:52.000000000 +0000 modprobed -> moduler
-rwxr-xr-x 1 root root   80444 2025-03-11 12:05:46.000000000 +0000 moduler
-rwxr-xr-x 1 root root   77368 2025-03-11 12:07:44.000000000 +0000 mproxy
-rwxr-xr-x 1 root root   60740 2025-03-11 12:05:36.000000000 +0000 mtget
-rwxr-xr-x 1 root root   48640 2025-03-11 12:03:58.000000000 +0000 natpmp
-rwxr-xr-x 1 root root  808708 2025-03-11 12:10:32.000000000 +0000 net
-rwxr-xr-x 1 root root   71888 2025-03-11 12:06:36.000000000 +0000 ntp
-rwxr-xr-x 1 root root    6152 2025-03-11 12:03:16.000000000 +0000 panicsl
-rwxr-xr-x 1 root root  754696 2025-03-11 12:09:08.000000000 +0000 parser
-rwxr-xr-x 1 root root   40292 2025-03-11 12:03:24.000000000 +0000 ping
-rwxr-xr-x 1 root root   48828 2025-03-11 12:05:33.000000000 +0000 portman
-rwxr-xr-x 1 root root   33240 2025-03-11 12:42:20.000000000 +0000 profiler
-rwxr-xr-x 1 root root  153980 2025-03-11 12:03:29.000000000 +0000 quickset
-rwxr-xr-x 1 root root   51312 2025-03-11 12:05:57.000000000 +0000 radius
-rwxr-xr-x 1 root root  163340 2025-03-11 12:06:45.000000000 +0000 resolver
-rwxr-xr-x 1 root root   10224 2025-03-11 12:06:45.000000000 +0000 resolver_ctl
-rwxr-xr-x 1 root root   94796 2025-03-11 12:07:04.000000000 +0000 romon
-rwxr-xr-x 1 root root 1188012 2025-03-11 12:11:35.000000000 +0000 route
-rwxr-xr-x 1 root root   16136 2025-03-11 12:06:25.000000000 +0000 rtrace
-rwxr-xr-x 1 root root   28372 2025-03-11 12:06:53.000000000 +0000 sermgr
-rwxr-xr-x 1 root root   33536 2025-03-11 12:03:42.000000000 +0000 sertcp
-rwxr-xr-x 1 root root   68700 2025-03-11 12:03:57.000000000 +0000 sniffer
-rwxr-xr-x 1 root root  212472 2025-03-11 12:08:05.000000000 +0000 snmp
-rwxr-xr-x 1 root root   66020 2025-03-11 12:04:01.000000000 +0000 socks
-rwxr-xr-x 1 root root  121072 2025-03-11 12:06:24.000000000 +0000 ssld
-rwxr-xr-x 1 root root   29340 2025-03-11 12:05:30.000000000 +0000 sstore
-rwxr-xr-x 1 root root  257648 2025-03-11 12:08:59.000000000 +0000 sys2
-rwxr-xr-x 1 root root   20904 2025-03-11 12:03:21.000000000 +0000 telnet
-rwxr-xr-x 1 root root   10008 2025-03-11 12:03:15.000000000 +0000 telser
-rwxr-xr-x 1 root root   36916 2025-03-11 12:03:45.000000000 +0000 tftpd
-rwxr-xr-x 1 root root   28692 2025-03-11 12:03:20.000000000 +0000 traceroute
-rwxr-xr-x 1 root root  108800 2025-03-11 12:03:57.000000000 +0000 trafficgen
-rwxr-xr-x 1 root root   22856 2025-03-11 12:03:35.000000000 +0000 trafflow
-rwxr-xr-x 1 root root   23824 2025-03-11 12:03:19.000000000 +0000 undo
-rwxr-xr-x 1 root root  100636 2025-03-11 12:04:08.000000000 +0000 upnp
-rwxr-xr-x 1 root root   82128 2025-03-11 12:07:10.000000000 +0000 user
-rwxr-xr-x 1 root root   93504 2025-03-11 12:06:33.000000000 +0000 vrrp
-rwxr-xr-x 1 root root   30704 2025-03-11 12:03:40.000000000 +0000 watchdog
-rwxr-xr-x 1 root root  154512 2025-03-11 12:06:50.000000000 +0000 wproxy
-rwxr-xr-x 1 root root  125780 2025-03-11 12:07:46.000000000 +0000 www

/nova/etc:
total 52
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 leds
-rwxr-xr-x 1 root root 1242 2025-03-11 11:58:27.000000000 +0000 lognames
-rwxr-xr-x 1 root root   10 2025-03-11 11:58:27.000000000 +0000 logo
-rwxr-xr-x 1 root root    1 2025-03-11 11:58:27.000000000 +0000 manual-url
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 pciinfo
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 services
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 system_names
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 upnp
-rwxr-xr-x 1 root root   26 2025-03-11 11:58:27.000000000 +0000 url
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 user
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 www

/nova/etc/leds:
total 4
-rwxr-xr-x 1 root root 12 2025-03-11 12:02:32.000000000 +0000 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2025-03-11 12:02:32.000000000 +0000 system.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 762 2025-03-11 12:02:32.000000000 +0000 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-03-11 12:02:32.000000000 +0000 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 992 2025-03-11 12:02:32.000000000 +0000 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2025-03-11 12:02:32.000000000 +0000 system.x3

/nova/etc/upnp:
total 40
-rwxr-xr-x 1 root root   930 2025-03-11 11:58:29.000000000 +0000 logo16.gif
-rwxr-xr-x 1 root root  1173 2025-03-11 11:58:29.000000000 +0000 logo32.gif
-rwxr-xr-x 1 root root  1504 2025-03-11 11:58:29.000000000 +0000 logo48.gif
-rwxr-xr-x 1 root root   735 2025-03-11 11:58:29.000000000 +0000 osinfo.xml
-rwxr-xr-x 1 root root  5928 2025-03-11 11:58:29.000000000 +0000 wancommonifcfg.xml
-rwxr-xr-x 1 root root 13444 2025-03-11 11:58:29.000000000 +0000 wanipconn.xml

/nova/etc/user:
total 4
-rwxr-xr-x 1 root root 2230 2025-03-11 12:02:32.000000000 +0000 system.x3

/nova/etc/www:
total 4
-rwxr-xr-x 1 root root 2458 2025-03-11 12:02:32.000000000 +0000 system.x3

/nova/lib:
total 16
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 defconf
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 profiler
-rwxr-xr-x 1 root root 4085 2025-03-11 11:58:27.000000000 +0000 xmlnames2

/nova/lib/console:
total 1528
-rwxr-xr-x 1 root root 1554795 2025-03-11 12:09:31.000000000 +0000 1073741824.mem
-rwxr-xr-x 1 root root     510 2025-03-11 11:58:26.000000000 +0000 logo.txt
-rwxr-xr-x 1 root root      18 2025-03-11 11:58:26.000000000 +0000 sublogo.txt

/nova/lib/defconf:
total 100
-rwxr-xr-x 1 root root   567 2025-03-11 11:58:26.000000000 +0000 defconf
-rwxr-xr-x 1 root root  4995 2025-03-11 11:58:26.000000000 +0000 defconf-caps
-rwxr-xr-x 1 root root  3700 2025-03-11 11:58:26.000000000 +0000 defconf-wps-sync
-rwxr-xr-x 1 root root 85178 2025-03-11 11:58:26.000000000 +0000 get-custom-defconf

/nova/lib/profiler:
total 16
-rwxr-xr-x 1 root root 14688 2025-03-11 12:42:19.000000000 +0000 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 92
-rwxr-xr-x 1 root root 24844 2025-03-11 12:02:30.000000000 +0000 nandfix
-rwxr-xr-x 1 root root 64264 2025-03-11 12:05:24.000000000 +0000 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2025-03-11 13:00:46.000000000 +0000 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 deinstall
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 lock
lrwxrwxrwx 1 root root    8 2025-03-11 13:00:46.000000000 +0000 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2025-03-11 13:00:46.000000000 +0000 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:46.000000000 +0000 post
lrwxrwxrwx 1 root root    7 2025-03-11 13:00:46.000000000 +0000 run -> /rw/run
lrwxrwxrwx 1 root root    4 2025-03-11 13:00:46.000000000 +0000 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

