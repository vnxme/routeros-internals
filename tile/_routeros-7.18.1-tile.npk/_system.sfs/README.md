### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 11985632 bytes, 700 inodes, blocksize: 262144 bytes, created: Fri Feb 28 12:31:03 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:47.000000000 +0000 bin
drwxr-xr-x 9 root root 4096 2025-02-28 12:30:46.000000000 +0000 bndl
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 boot
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:47.000000000 +0000 dev
lrwxrwxrwx 1 root root   11 2025-02-28 12:30:47.000000000 +0000 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:47.000000000 +0000 etc
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:47.000000000 +0000 flash
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:47.000000000 +0000 lib
lrwxrwxrwx 1 root root    4 2025-02-28 12:30:47.000000000 +0000 lib32 -> /lib
drwxr-xr-x 5 root root 4096 2025-02-28 12:30:47.000000000 +0000 nova
lrwxrwxrwx 1 root root    9 2025-02-28 12:30:47.000000000 +0000 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:47.000000000 +0000 proc
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:47.000000000 +0000 ram
lrwxrwxrwx 1 root root    9 2025-02-28 12:30:47.000000000 +0000 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 sbin
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:47.000000000 +0000 sys
lrwxrwxrwx 1 root root    7 2025-02-28 12:30:47.000000000 +0000 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2025-02-28 12:30:47.000000000 +0000 var

/bin:
total 532
lrwxrwxrwx 1 root root     21 2025-02-28 12:30:47.000000000 +0000 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root  66896 2025-02-28 11:39:09.000000000 +0000 catlog
lrwxrwxrwx 1 root root     15 2025-02-28 12:30:47.000000000 +0000 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root     15 2025-02-28 12:30:47.000000000 +0000 login -> /nova/bin/login
-rwxr-xr-x 1 root root  72684 2025-02-28 12:15:30.000000000 +0000 mkexfatfs
-rwxr-xr-x 1 root root  66640 2025-02-28 11:39:09.000000000 +0000 pakp
lrwxrwxrwx 1 root root     21 2025-02-28 12:30:47.000000000 +0000 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root     15 2025-02-28 12:30:47.000000000 +0000 shell -> /nova/bin/login
-rwxr-xr-x 1 root root 330868 2025-02-28 12:16:14.000000000 +0000 sshfs

/bndl:
total 28
drwxr-xr-x 4 root root 4096 2025-02-28 12:30:46.000000000 +0000 advanced-tools
drwxr-xr-x 5 root root 4096 2025-02-28 12:30:46.000000000 +0000 dhcp
drwxr-xr-x 5 root root 4096 2025-02-28 12:30:46.000000000 +0000 hotspot
drwxr-xr-x 4 root root 4096 2025-02-28 12:30:46.000000000 +0000 ipv6
drwxr-xr-x 5 root root 4096 2025-02-28 12:30:46.000000000 +0000 ppp
drwxr-xr-x 5 root root 4096 2025-02-28 12:30:46.000000000 +0000 security
drwxr-xr-x 4 root root 4096 2025-02-28 12:30:46.000000000 +0000 wifi

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-02-28 12:30:46.000000000 +0000 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 webfig

/bndl/advanced-tools/home/web/webfig:
total 8
-rw-r--r-- 1 root root 2360 2025-02-28 12:17:16.000000000 +0000 advtool-b6a18e54d46e.jg.gz
-rwxr-xr-x 1 root root  107 2025-02-28 12:17:16.000000000 +0000 advtool.info
lrwxrwxrwx 1 root root   26 2025-02-28 12:17:16.000000000 +0000 advtool.jg.gz -> advtool-b6a18e54d46e.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 lib

/bndl/advanced-tools/nova/bin:
total 540
-rwxr-xr-x 1 root root  67156 2025-02-28 12:17:02.000000000 +0000 ddns
-rwxr-xr-x 1 root root  66796 2025-02-28 12:16:40.000000000 +0000 fping
-rwxr-xr-x 1 root root  66960 2025-02-28 12:17:10.000000000 +0000 macscan
-rwxr-xr-x 1 root root 132944 2025-02-28 12:18:32.000000000 +0000 netwatch
-rwxr-xr-x 1 root root  66844 2025-02-28 12:16:47.000000000 +0000 pspeed
-rwxr-xr-x 1 root root  67196 2025-02-28 12:17:20.000000000 +0000 scanner
-rwxr-xr-x 1 root root  66804 2025-02-28 12:17:17.000000000 +0000 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 console

/bndl/advanced-tools/nova/lib/console:
total 28
-rwxr-xr-x 1 root root 24705 2025-02-28 12:17:12.000000000 +0000 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 home
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2025-02-28 12:30:46.000000000 +0000 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 webfig

/bndl/dhcp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4408 2025-02-28 12:17:15.000000000 +0000 dhcp-b0bb4825d0fa.jg.gz
-rwxr-xr-x 1 root root  101 2025-02-28 12:17:15.000000000 +0000 dhcp.info
lrwxrwxrwx 1 root root   23 2025-02-28 12:17:15.000000000 +0000 dhcp.jg.gz -> dhcp-b0bb4825d0fa.jg.gz

/bndl/dhcp/lib:
total 196
-rwxr-xr-x 1 root root 198604 2025-02-28 12:17:23.000000000 +0000 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 lib

/bndl/dhcp/nova/bin:
total 584
-rwxr-xr-x 1 root root 395840 2025-02-28 12:19:48.000000000 +0000 dhcp
-rwxr-xr-x 1 root root 198848 2025-02-28 12:19:35.000000000 +0000 dhcpclient

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 console

/bndl/dhcp/nova/lib/console:
total 108
-rwxr-xr-x 1 root root 109639 2025-02-28 12:17:01.000000000 +0000 1128267776.mem

/bndl/hotspot:
total 12
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-28 12:30:46.000000000 +0000 nova

/bndl/hotspot/home:
total 4
drwxr-xr-x 4 root root 4096 2025-02-28 12:30:46.000000000 +0000 web

/bndl/hotspot/home/web:
total 8
drwxr-xr-x 5 root root 4096 2025-02-28 12:30:46.000000000 +0000 hotspot
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 webfig

/bndl/hotspot/home/web/hotspot:
total 68
-rw-r--r-- 1 root root 1094 2025-02-28 11:30:27.000000000 +0000 alogin.html
-rw-r--r-- 1 root root  311 2025-02-28 11:30:27.000000000 +0000 api.json
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 css
-rw-r--r-- 1 root root  640 2025-02-28 11:30:27.000000000 +0000 error.html
-rw-r--r-- 1 root root 3719 2025-02-28 11:30:27.000000000 +0000 errors.txt
-rw-r--r-- 1 root root  903 2025-02-28 11:30:27.000000000 +0000 favicon.ico
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 img
-rw-r--r-- 1 root root 4423 2025-02-28 11:30:27.000000000 +0000 login.html
-rw-r--r-- 1 root root 1459 2025-02-28 11:30:27.000000000 +0000 logout.html
-rw-r--r-- 1 root root 7218 2025-02-28 11:30:27.000000000 +0000 md5.js
-rw-r--r-- 1 root root 1204 2025-02-28 11:30:27.000000000 +0000 radvert.html
-rw-r--r-- 1 root root  330 2025-02-28 11:30:27.000000000 +0000 redirect.html
-rw-r--r-- 1 root root  877 2025-02-28 11:30:27.000000000 +0000 rlogin.html
-rw-r--r-- 1 root root 2855 2025-02-28 11:30:27.000000000 +0000 status.html
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 xml

/bndl/hotspot/home/web/hotspot/css:
total 4
-rw-r--r-- 1 root root 4053 2025-02-28 11:30:27.000000000 +0000 style.css

/bndl/hotspot/home/web/hotspot/img:
total 8
-rw-r--r-- 1 root root 644 2025-02-28 11:30:27.000000000 +0000 password.svg
-rw-r--r-- 1 root root 444 2025-02-28 11:30:27.000000000 +0000 user.svg

/bndl/hotspot/home/web/hotspot/xml:
total 32
-rw-r--r-- 1 root root 4251 2025-02-28 11:30:27.000000000 +0000 WISPAccessGatewayParam.xsd
-rw-r--r-- 1 root root  839 2025-02-28 11:30:27.000000000 +0000 alogin.html
-rw-r--r-- 1 root root  428 2025-02-28 11:30:27.000000000 +0000 error.html
-rw-r--r-- 1 root root  372 2025-02-28 11:30:27.000000000 +0000 flogout.html
-rw-r--r-- 1 root root  809 2025-02-28 11:30:27.000000000 +0000 login.html
-rw-r--r-- 1 root root  370 2025-02-28 11:30:27.000000000 +0000 logout.html
-rw-r--r-- 1 root root  545 2025-02-28 11:30:27.000000000 +0000 rlogin.html

/bndl/hotspot/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4216 2025-02-28 12:19:44.000000000 +0000 hotspot-f1e2e1d4af99.jg.gz
-rwxr-xr-x 1 root root  107 2025-02-28 12:19:44.000000000 +0000 hotspot.info
lrwxrwxrwx 1 root root   26 2025-02-28 12:19:44.000000000 +0000 hotspot.jg.gz -> hotspot-f1e2e1d4af99.jg.gz

/bndl/hotspot/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 modules

/bndl/hotspot/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 5.6.3

/bndl/hotspot/lib/modules/5.6.3:
total 8
-rw-r--r-- 1 root root   13 2025-02-28 12:19:58.000000000 +0000 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 net

/bndl/hotspot/lib/modules/5.6.3/net:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 ipv4

/bndl/hotspot/lib/modules/5.6.3/net/ipv4:
total 84
-rw-r--r-- 1 root root 83912 2025-02-28 12:19:27.000000000 +0000 unicl.ko

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 lib

/bndl/hotspot/nova/bin:
total 452
-rwxr-xr-x 1 root root 461276 2025-02-28 12:19:06.000000000 +0000 hotspot

/bndl/hotspot/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 radius

/bndl/hotspot/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-02-28 12:19:39.000000000 +0000 hotspot.x3

/bndl/hotspot/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 console

/bndl/hotspot/nova/lib/console:
total 84
-rwxr-xr-x 1 root root 82346 2025-02-28 12:19:39.000000000 +0000 1132462080.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-02-28 12:30:46.000000000 +0000 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 webfig

/bndl/ipv6/home/web/webfig:
total 12
-rw-r--r-- 1 root root 7911 2025-02-28 12:17:37.000000000 +0000 ipv6-932ca749791f.jg.gz
-rwxr-xr-x 1 root root  101 2025-02-28 12:17:37.000000000 +0000 ipv6.info
lrwxrwxrwx 1 root root   23 2025-02-28 12:17:38.000000000 +0000 ipv6.jg.gz -> ipv6-932ca749791f.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-02-28 12:30:46.000000000 +0000 lib

/bndl/ipv6/nova/bin:
total 200
-rwxr-xr-x 1 root root  67100 2025-02-28 12:17:51.000000000 +0000 ippool6
-rwxr-xr-x 1 root root 132836 2025-02-28 12:17:10.000000000 +0000 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 route

/bndl/ipv6/nova/lib/console:
total 184
-rwxr-xr-x 1 root root 186728 2025-02-28 12:17:24.000000000 +0000 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2025-02-28 11:30:27.000000000 +0000 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-28 12:30:46.000000000 +0000 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 webfig

/bndl/ppp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 6450 2025-02-28 12:20:26.000000000 +0000 ppp-f833b7b4927e.jg.gz
-rwxr-xr-x 1 root root   99 2025-02-28 12:20:26.000000000 +0000 ppp.info
lrwxrwxrwx 1 root root   22 2025-02-28 12:20:26.000000000 +0000 ppp.jg.gz -> ppp-f833b7b4927e.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2025-02-28 12:30:46.000000000 +0000 5.6.3

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 misc
-rw-r--r-- 1 root root  293 2025-02-28 12:26:39.000000000 +0000 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 164
-rw-r--r-- 1 root root 19856 2025-02-28 12:14:18.000000000 +0000 ppp_async.ko
-rw-r--r-- 1 root root 11824 2025-02-28 12:14:18.000000000 +0000 ppp_deflate.ko
-rw-r--r-- 1 root root 63040 2025-02-28 12:14:18.000000000 +0000 ppp_generic.ko
-rw-r--r-- 1 root root 13744 2025-02-28 12:14:18.000000000 +0000 ppp_mppe.ko
-rw-r--r-- 1 root root 16496 2025-02-28 12:14:18.000000000 +0000 ppp_synctty.ko
-rw-r--r-- 1 root root 23592 2025-02-28 12:14:18.000000000 +0000 pppoe.ko
-rw-r--r-- 1 root root  7080 2025-02-28 12:14:18.000000000 +0000 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 156
-rw-r--r-- 1 root root 66184 2025-02-28 12:18:50.000000000 +0000 ovpn.ko
-rw-r--r-- 1 root root 11592 2025-02-28 12:18:29.000000000 +0000 pppoefp.ko
-rw-r--r-- 1 root root 74192 2025-02-28 12:19:01.000000000 +0000 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 112
-rw-r--r-- 1 root root 92312 2025-02-28 12:18:17.000000000 +0000 l2tp.ko
-rw-r--r-- 1 root root 17632 2025-02-28 12:17:16.000000000 +0000 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-02-28 12:30:46.000000000 +0000 etc
drwxr-xr-x 4 root root 4096 2025-02-28 12:30:46.000000000 +0000 lib

/bndl/ppp/nova/bin:
total 964
-rwxr-xr-x 1 root root 987044 2025-02-28 12:26:10.000000000 +0000 ppp
lrwxrwxrwx 1 root root      3 2025-02-28 12:26:10.000000000 +0000 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2025-02-28 12:19:20.000000000 +0000 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2025-02-28 12:19:20.000000000 +0000 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 profiler

/bndl/ppp/nova/lib/console:
total 144
-rwxr-xr-x 1 root root 147136 2025-02-28 12:20:28.000000000 +0000 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 68
-rwxr-xr-x 1 root root 66628 2025-02-28 12:21:29.000000000 +0000 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-28 12:30:46.000000000 +0000 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 webfig

/bndl/security/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4365 2025-02-28 12:22:19.000000000 +0000 secure-0a49065a769f.jg.gz
-rwxr-xr-x 1 root root  105 2025-02-28 12:22:19.000000000 +0000 secure.info
lrwxrwxrwx 1 root root   25 2025-02-28 12:22:19.000000000 +0000 secure.jg.gz -> secure-0a49065a769f.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 5.6.3

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2025-02-28 12:30:46.000000000 +0000 kernel
-rw-r--r-- 1 root root  162 2025-02-28 12:29:25.000000000 +0000 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 crypto
drwxr-xr-x 5 root root 4096 2025-02-28 12:30:46.000000000 +0000 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 128
-rw-r--r-- 1 root root  9808 2025-02-28 12:14:18.000000000 +0000 blowfish_common.ko
-rw-r--r-- 1 root root  7528 2025-02-28 12:14:18.000000000 +0000 blowfish_generic.ko
-rw-r--r-- 1 root root 30112 2025-02-28 12:14:18.000000000 +0000 camellia_generic.ko
-rw-r--r-- 1 root root 15384 2025-02-28 12:14:18.000000000 +0000 chacha20poly1305.ko
-rw-r--r-- 1 root root  7208 2025-02-28 12:14:18.000000000 +0000 chacha_generic.ko
-rw-r--r-- 1 root root  6080 2025-02-28 12:14:18.000000000 +0000 echainiv.ko
-rw-r--r-- 1 root root  5352 2025-02-28 12:14:18.000000000 +0000 poly1305_generic.ko
-rw-r--r-- 1 root root 23504 2025-02-28 12:14:18.000000000 +0000 twofish_common.ko
-rw-r--r-- 1 root root 11432 2025-02-28 12:14:18.000000000 +0000 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 key
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 44
-rw-r--r-- 1 root root 18264 2025-02-28 12:14:19.000000000 +0000 ah4.ko
-rw-r--r-- 1 root root 23968 2025-02-28 12:14:19.000000000 +0000 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 68
-rw-r--r-- 1 root root 66232 2025-02-28 12:14:19.000000000 +0000 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 52
-rw-r--r-- 1 root root 49312 2025-02-28 12:14:19.000000000 +0000 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-02-28 12:30:46.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 lib

/bndl/security/nova/bin:
total 1232
-rwxr-xr-x 1 root root 926236 2025-02-28 12:27:43.000000000 +0000 ipsec
lrwxrwxrwx 1 root root      5 2025-02-28 12:27:43.000000000 +0000 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 331104 2025-02-28 12:23:38.000000000 +0000 ssh
lrwxrwxrwx 1 root root      3 2025-02-28 12:23:38.000000000 +0000 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-02-28 12:20:28.000000000 +0000 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2025-02-28 12:20:28.000000000 +0000 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 console

/bndl/security/nova/lib/console:
total 88
-rwxr-xr-x 1 root root 89528 2025-02-28 12:22:24.000000000 +0000 1077936128.mem

/bndl/wifi:
total 8
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 home
drwxr-xr-x 5 root root 4096 2025-02-28 12:30:46.000000000 +0000 nova

/bndl/wifi/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 web

/bndl/wifi/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 webfig

/bndl/wifi/home/web/webfig:
total 16
-rw-r--r-- 1 root root 8897 2025-02-28 12:17:26.000000000 +0000 wave2-5c9c2c711e64.jg.gz
-rwxr-xr-x 1 root root  103 2025-02-28 12:17:26.000000000 +0000 wave2.info
lrwxrwxrwx 1 root root   24 2025-02-28 12:17:26.000000000 +0000 wave2.jg.gz -> wave2-5c9c2c711e64.jg.gz

/bndl/wifi/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-02-28 12:30:46.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 lib

/bndl/wifi/nova/bin:
total 1992
-rwxr-xr-x 1 root root 2038368 2025-02-28 12:27:15.000000000 +0000 ww2

/bndl/wifi/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 radius

/bndl/wifi/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 183 2025-02-28 12:17:07.000000000 +0000 wifi.x3

/bndl/wifi/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-02-28 12:17:07.000000000 +0000 wifi.x3

/bndl/wifi/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 console

/bndl/wifi/nova/lib/console:
total 192
-rwxr-xr-x 1 root root 194825 2025-02-28 12:17:33.000000000 +0000 1275068416.mem

/boot:
total 104
-rw-r--r-- 1 root root 103072 2025-02-28 11:44:17.000000000 +0000 initrd.rgz

/dev:
total 0

/etc:
total 260
-rw-r--r-- 1 root root 130747 2025-02-28 11:30:51.000000000 +0000 license
-rw-r--r-- 1 root root   4049 2025-02-28 11:30:51.000000000 +0000 stm8_hw_monitor.bin
lrwxrwxrwx 1 root root     24 2025-02-28 12:30:47.000000000 +0000 termcap -> /pckg/option/etc/termcap
-rw-r--r-- 1 root root 129440 2025-02-28 11:36:55.000000000 +0000 tilegx-7.18.1.fwf

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2025-02-28 12:30:47.000000000 +0000 web

/home/web:
total 64
drwxr-xr-x 2 root root  4096 2025-02-28 12:30:46.000000000 +0000 assets
-rwxr-xr-x 1 root root 18983 2025-02-28 11:35:49.000000000 +0000 bth-files.html
-rwxr-xr-x 1 root root   600 2025-02-28 11:30:52.000000000 +0000 favicon.png
-rwxr-xr-x 1 root root   689 2025-02-28 11:30:52.000000000 +0000 favicon.svg
-rwxr-xr-x 1 root root   708 2025-02-28 11:30:50.000000000 +0000 graph.css
drwxr-xr-x 2 root root  4096 2025-02-28 12:30:46.000000000 +0000 help
-rwxr-xr-x 1 root root  1254 2025-02-28 11:30:52.000000000 +0000 index2.html
lrwxrwxrwx 1 root root    12 2025-02-28 12:16:27.000000000 +0000 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2025-02-28 11:30:52.000000000 +0000 logo.png
-rw-r--r-- 1 root root  2507 2025-02-28 11:30:51.000000000 +0000 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2025-02-28 11:30:52.000000000 +0000 robots.txt
drwxr-xr-x 2 root root  4096 2025-02-28 12:30:46.000000000 +0000 webfig
drwxr-xr-x 2 root root  4096 2025-02-28 12:30:47.000000000 +0000 winbox

/home/web/assets:
total 160
-rw-r--r-- 1 root root  19040 2025-02-28 11:30:51.000000000 +0000 400.woff2
-rw-r--r-- 1 root root  19156 2025-02-28 11:30:51.000000000 +0000 700.woff2
-rwxr-xr-x 1 root root    799 2025-02-28 11:30:52.000000000 +0000 script-bd71a1293274.js
-rwxr-xr-x 1 root root 117563 2025-02-28 11:30:52.000000000 +0000 style-692511ab2675.css

/home/web/help:
total 4
-rw-r--r-- 1 root root 118 2025-02-28 11:30:51.000000000 +0000 license.html

/home/web/webfig:
total 680
-rwxr-xr-x 1 root root   9157 2025-02-28 11:34:40.000000000 +0000 curve255-541e54a862be.js
-rwxr-xr-x 1 root root     70 2025-02-28 11:39:43.000000000 +0000 icons.info
-rwxr-xr-x 1 root root  24341 2025-02-28 11:30:49.000000000 +0000 icons.png
-rwxr-xr-x 1 root root     55 2025-02-28 11:39:43.000000000 +0000 icons24.info
-rwxr-xr-x 1 root root  39797 2025-02-28 11:30:49.000000000 +0000 icons24.png
-rwxr-xr-x 1 root root     55 2025-02-28 11:39:43.000000000 +0000 icons32.info
-rwxr-xr-x 1 root root  55094 2025-02-28 11:30:49.000000000 +0000 icons32.png
-rwxr-xr-x 1 root root  21705 2025-02-28 11:34:40.000000000 +0000 index.html
lrwxrwxrwx 1 root root     13 2025-02-28 11:34:41.000000000 +0000 list -> /ram/gum.list
-rwxr-xr-x 1 root root 408548 2025-02-28 11:34:40.000000000 +0000 master-6894ebd52cab.js
-rw-r--r-- 1 root root 107654 2025-02-28 11:39:44.000000000 +0000 roteros-8445cfb232b8.jg.gz
-rwxr-xr-x 1 root root    107 2025-02-28 11:39:44.000000000 +0000 roteros.info
lrwxrwxrwx 1 root root     26 2025-02-28 11:39:45.000000000 +0000 roteros.jg.gz -> roteros-8445cfb232b8.jg.gz

/home/web/winbox:
total 0

/lib:
total 3204
-rwxr-xr-x 1 root root 460148 2025-02-28 11:32:53.000000000 +0000 libc.so
-rwxr-xr-x 1 root root 132976 2025-02-28 11:38:41.000000000 +0000 libeap.so
-rwxr-xr-x 1 root root  66732 2025-02-28 11:34:48.000000000 +0000 libjson.so
-rwxr-xr-x 1 root root 330032 2025-02-28 11:36:36.000000000 +0000 librappsup.so
-rwxr-xr-x 1 root root 198632 2025-02-28 11:35:41.000000000 +0000 libubox.so
-rwxr-xr-x 1 root root 132804 2025-02-28 11:34:39.000000000 +0000 libuc++.so
-rwxr-xr-x 1 root root 396040 2025-02-28 11:37:32.000000000 +0000 libucrypto.so
-rwxr-xr-x 1 root root  66948 2025-02-28 11:35:34.000000000 +0000 libufiber.so
-rwxr-xr-x 1 root root 132804 2025-02-28 11:35:40.000000000 +0000 libuhttp.so
-rwxr-xr-x 1 root root 922164 2025-02-28 11:35:14.000000000 +0000 libumsg.so
-rwxr-xr-x 1 root root  69452 2025-02-28 11:37:50.000000000 +0000 liburadius.so
-rwxr-xr-x 1 root root  66684 2025-02-28 11:37:41.000000000 +0000 libuxml++.so
-rwxr-xr-x 1 root root  67200 2025-02-28 11:34:45.000000000 +0000 libwww.so
-rwxr-xr-x 1 root root  66680 2025-02-28 11:34:47.000000000 +0000 libxml.so
-rwxr-xr-x 1 root root 132376 2025-02-28 11:34:48.000000000 +0000 libz.so
drwxr-xr-x 3 root root   4096 2025-02-28 12:30:46.000000000 +0000 modules
lrwxrwxrwx 1 root root     27 2025-02-28 12:30:47.000000000 +0000 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2025-02-28 12:30:46.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 5 root root 4096 2025-02-28 12:30:46.000000000 +0000 drivers
drwxr-xr-x 8 root root 4096 2025-02-28 12:30:46.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 misc
-rw-r--r-- 1 root root 2886 2025-02-28 12:16:22.000000000 +0000 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-02-28 12:30:46.000000000 +0000 net

/lib/modules/5.6.3/drivers:
total 12
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 char
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 crypto
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 net

/lib/modules/5.6.3/drivers/char:
total 16
-rw-r--r-- 1 root root 14536 2025-02-28 12:09:09.000000000 +0000 ticker.ko

/lib/modules/5.6.3/drivers/crypto:
total 48
-rw-r--r-- 1 root root 48376 2025-02-28 12:11:29.000000000 +0000 tilegx_crypton.ko

/lib/modules/5.6.3/drivers/net:
total 1124
-rw-r--r-- 1 root root  62000 2025-02-28 12:10:45.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root  65328 2025-02-28 12:09:38.000000000 +0000 atl1c.ko
-rw-r--r-- 1 root root  14952 2025-02-28 12:09:58.000000000 +0000 imq.ko
-rw-r--r-- 1 root root  20088 2025-02-28 12:13:59.000000000 +0000 mpls_fp.ko
-rw-r--r-- 1 root root 370664 2025-02-28 12:14:02.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root  51464 2025-02-28 12:10:17.000000000 +0000 phy_amcc_qt2025.ko
-rw-r--r-- 1 root root 145392 2025-02-28 12:10:19.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root  15416 2025-02-28 12:10:17.000000000 +0000 phy_ti_tlk10232.ko
-rw-r--r-- 1 root root 108528 2025-02-28 12:10:49.000000000 +0000 switch.ko
-rw-r--r-- 1 root root 138328 2025-02-28 12:09:39.000000000 +0000 tilegx.ko
drwxr-xr-x 2 root root   4096 2025-02-28 12:30:46.000000000 +0000 usb
-rw-r--r-- 1 root root  36648 2025-02-28 12:09:10.000000000 +0000 via-velocity.ko
-rw-r--r-- 1 root root  99808 2025-02-28 12:14:07.000000000 +0000 vxlan2.ko

/lib/modules/5.6.3/drivers/net/usb:
total 300
-rw-r--r-- 1 root root 119600 2025-02-28 12:13:06.000000000 +0000 fp_usbnet.ko
-rw-r--r-- 1 root root 180400 2025-02-28 12:12:47.000000000 +0000 mbim.ko

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-02-28 12:30:46.000000000 +0000 arch
drwxr-xr-x  2 root root 4096 2025-02-28 12:30:46.000000000 +0000 crypto
drwxr-xr-x  7 root root 4096 2025-02-28 12:30:46.000000000 +0000 drivers
drwxr-xr-x  4 root root 4096 2025-02-28 12:30:46.000000000 +0000 fs
drwxr-xr-x  5 root root 4096 2025-02-28 12:30:46.000000000 +0000 lib
drwxr-xr-x 13 root root 4096 2025-02-28 12:30:46.000000000 +0000 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 tile

/lib/modules/5.6.3/kernel/arch/tile:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 oprofile

/lib/modules/5.6.3/kernel/arch/tile/oprofile:
total 72
-rw-r--r-- 1 root root 71320 2025-02-28 12:14:18.000000000 +0000 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 56
-rw-r--r-- 1 root root  4368 2025-02-28 12:14:18.000000000 +0000 arc4.ko
-rw-r--r-- 1 root root 22888 2025-02-28 12:14:18.000000000 +0000 ccm.ko
-rw-r--r-- 1 root root  7648 2025-02-28 12:14:18.000000000 +0000 cmac.ko
-rw-r--r-- 1 root root  5560 2025-02-28 12:14:18.000000000 +0000 des_generic.ko
-rw-r--r-- 1 root root  7024 2025-02-28 12:14:18.000000000 +0000 md4.ko

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 ata
drwxr-xr-x 7 root root 4096 2025-02-28 12:30:46.000000000 +0000 net
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 scsi
drwxr-xr-x 8 root root 4096 2025-02-28 12:30:46.000000000 +0000 usb
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 watchdog

/lib/modules/5.6.3/kernel/drivers/ata:
total 540
-rw-r--r-- 1 root root  43488 2025-02-28 12:14:18.000000000 +0000 ahci.ko
-rw-r--r-- 1 root root  59208 2025-02-28 12:14:18.000000000 +0000 libahci.ko
-rw-r--r-- 1 root root 446224 2025-02-28 12:14:18.000000000 +0000 libata.ko

/lib/modules/5.6.3/kernel/drivers/net:
total 276
-rw-r--r-- 1 root root 81968 2025-02-28 12:14:18.000000000 +0000 amt.ko
drwxr-xr-x 2 root root  4096 2025-02-28 12:30:46.000000000 +0000 bonding
-rw-r--r-- 1 root root 64520 2025-02-28 12:14:18.000000000 +0000 macsec.ko
-rw-r--r-- 1 root root 37216 2025-02-28 12:14:18.000000000 +0000 macvlan.ko
drwxr-xr-x 2 root root  4096 2025-02-28 12:30:46.000000000 +0000 phy
drwxr-xr-x 2 root root  4096 2025-02-28 12:30:46.000000000 +0000 slip
drwxr-xr-x 2 root root  4096 2025-02-28 12:30:46.000000000 +0000 usb
-rw-r--r-- 1 root root 29952 2025-02-28 12:14:18.000000000 +0000 veth.ko
-rw-r--r-- 1 root root 35128 2025-02-28 12:14:18.000000000 +0000 vrf.ko
drwxr-xr-x 2 root root  4096 2025-02-28 12:30:46.000000000 +0000 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 232
-rw-r--r-- 1 root root 235856 2025-02-28 12:14:18.000000000 +0000 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/phy:
total 140
-rw-r--r-- 1 root root 140608 2025-02-28 12:14:18.000000000 +0000 libphy.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 12
-rw-r--r-- 1 root root 11408 2025-02-28 12:14:18.000000000 +0000 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 228
-rw-r--r-- 1 root root 31568 2025-02-28 12:14:18.000000000 +0000 ax88179_178a.ko
-rw-r--r-- 1 root root 74152 2025-02-28 12:14:18.000000000 +0000 hso.ko
-rw-r--r-- 1 root root 22456 2025-02-28 12:14:18.000000000 +0000 sierra_net.ko
-rw-r--r-- 1 root root 43880 2025-02-28 12:14:18.000000000 +0000 smsc95xx.ko
-rw-r--r-- 1 root root 50920 2025-02-28 12:14:18.000000000 +0000 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 148
-rw-r--r-- 1 root root 148784 2025-02-28 12:14:19.000000000 +0000 wireguard.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 316
-rw-r--r-- 1 root root 241408 2025-02-28 12:14:19.000000000 +0000 scsi_mod.ko
-rw-r--r-- 1 root root  78128 2025-02-28 12:14:19.000000000 +0000 sd_mod.ko

/lib/modules/5.6.3/kernel/drivers/usb:
total 24
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 class
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 common
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 core
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 host
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 serial
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 storage

/lib/modules/5.6.3/kernel/drivers/usb/class:
total 44
-rw-r--r-- 1 root root 44320 2025-02-28 12:14:19.000000000 +0000 cdc-acm.ko

/lib/modules/5.6.3/kernel/drivers/usb/common:
total 8
-rw-r--r-- 1 root root 7824 2025-02-28 12:14:19.000000000 +0000 usb-common.ko

/lib/modules/5.6.3/kernel/drivers/usb/core:
total 348
-rw-r--r-- 1 root root 352632 2025-02-28 12:14:19.000000000 +0000 usbcore.ko

/lib/modules/5.6.3/kernel/drivers/usb/host:
total 116
-rw-r--r-- 1 root root 79760 2025-02-28 12:14:19.000000000 +0000 ehci-hcd.ko
-rw-r--r-- 1 root root 36752 2025-02-28 12:14:19.000000000 +0000 ohci-hcd.ko

/lib/modules/5.6.3/kernel/drivers/usb/serial:
total 412
-rw-r--r-- 1 root root  14336 2025-02-28 12:14:19.000000000 +0000 ch341.ko
-rw-r--r-- 1 root root  33160 2025-02-28 12:14:19.000000000 +0000 cp210x.ko
-rw-r--r-- 1 root root  99624 2025-02-28 12:14:19.000000000 +0000 ftdi_sio.ko
-rw-r--r-- 1 root root   8032 2025-02-28 12:14:19.000000000 +0000 ipw.ko
-rw-r--r-- 1 root root 114560 2025-02-28 12:14:19.000000000 +0000 option.ko
-rw-r--r-- 1 root root  23784 2025-02-28 12:14:19.000000000 +0000 pl2303.ko
-rw-r--r-- 1 root root  18048 2025-02-28 12:14:19.000000000 +0000 qcserial.ko
-rw-r--r-- 1 root root  21816 2025-02-28 12:14:19.000000000 +0000 sierra.ko
-rw-r--r-- 1 root root  14656 2025-02-28 12:14:19.000000000 +0000 usb_wwan.ko
-rw-r--r-- 1 root root  56272 2025-02-28 12:14:19.000000000 +0000 usbserial.ko

/lib/modules/5.6.3/kernel/drivers/usb/storage:
total 124
-rw-r--r-- 1 root root 123680 2025-02-28 12:14:19.000000000 +0000 usb-storage.ko

/lib/modules/5.6.3/kernel/drivers/watchdog:
total 16
-rw-r--r-- 1 root root 14312 2025-02-28 12:14:19.000000000 +0000 tile_wdt.ko

/lib/modules/5.6.3/kernel/fs:
total 8
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 cifs
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 ksmbd

/lib/modules/5.6.3/kernel/fs/cifs:
total 860
-rw-r--r-- 1 root root 877560 2025-02-28 12:14:19.000000000 +0000 cifs.ko

/lib/modules/5.6.3/kernel/fs/ksmbd:
total 468
-rw-r--r-- 1 root root 475960 2025-02-28 12:14:19.000000000 +0000 ksmbd.ko

/lib/modules/5.6.3/kernel/lib:
total 52
-rw-r--r-- 1 root root 7056 2025-02-28 12:14:19.000000000 +0000 asn1_decoder.ko
-rw-r--r-- 1 root root 4552 2025-02-28 12:14:19.000000000 +0000 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 crypto
-rw-r--r-- 1 root root 6704 2025-02-28 12:14:19.000000000 +0000 oid_registry.ko
-rw-r--r-- 1 root root 5560 2025-02-28 12:14:19.000000000 +0000 ts_bm.ko
-rw-r--r-- 1 root root 5416 2025-02-28 12:14:19.000000000 +0000 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 92
-rw-r--r-- 1 root root  3072 2025-02-28 12:14:19.000000000 +0000 libarc4.ko
-rw-r--r-- 1 root root 10680 2025-02-28 12:14:19.000000000 +0000 libblake2s-generic.ko
-rw-r--r-- 1 root root  5384 2025-02-28 12:14:19.000000000 +0000 libblake2s.ko
-rw-r--r-- 1 root root  3032 2025-02-28 12:14:19.000000000 +0000 libchacha.ko
-rw-r--r-- 1 root root 11656 2025-02-28 12:14:19.000000000 +0000 libchacha20poly1305.ko
-rw-r--r-- 1 root root  9632 2025-02-28 12:14:19.000000000 +0000 libcurve25519-generic.ko
-rw-r--r-- 1 root root  2568 2025-02-28 12:14:19.000000000 +0000 libcurve25519.ko
-rw-r--r-- 1 root root 25040 2025-02-28 12:14:19.000000000 +0000 libdes.ko
-rw-r--r-- 1 root root  6384 2025-02-28 12:14:19.000000000 +0000 libpoly1305.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 36
-rw-r--r-- 1 root root 33832 2025-02-28 12:14:19.000000000 +0000 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 24
-rw-r--r-- 1 root root 23080 2025-02-28 12:14:19.000000000 +0000 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 44
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 802
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 8021q
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 ipv4
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 ipv6
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 mpls
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 rfkill
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 sched
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 unix
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 xfrm

/lib/modules/5.6.3/kernel/net/802:
total 20
-rw-r--r-- 1 root root 17992 2025-02-28 12:14:19.000000000 +0000 mrp.ko

/lib/modules/5.6.3/kernel/net/8021q:
total 52
-rw-r--r-- 1 root root 50040 2025-02-28 12:14:19.000000000 +0000 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 164
-rw-r--r-- 1 root root  3888 2025-02-28 12:14:19.000000000 +0000 ebt_802_3.ko
-rw-r--r-- 1 root root  5376 2025-02-28 12:14:19.000000000 +0000 ebt_arp.ko
-rw-r--r-- 1 root root  4728 2025-02-28 12:14:19.000000000 +0000 ebt_arpreply.ko
-rw-r--r-- 1 root root  4808 2025-02-28 12:14:19.000000000 +0000 ebt_dnat.ko
-rw-r--r-- 1 root root  5632 2025-02-28 12:14:19.000000000 +0000 ebt_ip.ko
-rw-r--r-- 1 root root  6080 2025-02-28 12:14:19.000000000 +0000 ebt_ip6.ko
-rw-r--r-- 1 root root  5400 2025-02-28 12:14:19.000000000 +0000 ebt_limit.ko
-rw-r--r-- 1 root root  4744 2025-02-28 12:14:19.000000000 +0000 ebt_mark.ko
-rw-r--r-- 1 root root  5064 2025-02-28 12:14:19.000000000 +0000 ebt_mark_m.ko
-rw-r--r-- 1 root root  3568 2025-02-28 12:14:19.000000000 +0000 ebt_pkttype.ko
-rw-r--r-- 1 root root  4552 2025-02-28 12:14:19.000000000 +0000 ebt_redirect.ko
-rw-r--r-- 1 root root  4544 2025-02-28 12:14:19.000000000 +0000 ebt_snat.ko
-rw-r--r-- 1 root root  6264 2025-02-28 12:14:19.000000000 +0000 ebt_stp.ko
-rw-r--r-- 1 root root  4480 2025-02-28 12:14:19.000000000 +0000 ebt_vlan.ko
-rw-r--r-- 1 root root  4920 2025-02-28 12:14:19.000000000 +0000 ebtable_filter.ko
-rw-r--r-- 1 root root  4920 2025-02-28 12:14:19.000000000 +0000 ebtable_nat.ko
-rw-r--r-- 1 root root 44120 2025-02-28 12:14:19.000000000 +0000 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 64
-rw-r--r-- 1 root root 30552 2025-02-28 12:14:19.000000000 +0000 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2025-02-28 12:30:46.000000000 +0000 netfilter
-rw-r--r-- 1 root root 27280 2025-02-28 12:14:19.000000000 +0000 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 128
-rw-r--r-- 1 root root 38216 2025-02-28 12:14:19.000000000 +0000 ip_tables.ko
-rw-r--r-- 1 root root  6144 2025-02-28 12:14:19.000000000 +0000 ipt_REJECT.ko
-rw-r--r-- 1 root root  6272 2025-02-28 12:14:19.000000000 +0000 iptable_filter.ko
-rw-r--r-- 1 root root  6464 2025-02-28 12:14:19.000000000 +0000 iptable_mangle.ko
-rw-r--r-- 1 root root  5792 2025-02-28 12:14:19.000000000 +0000 iptable_nat.ko
-rw-r--r-- 1 root root  6720 2025-02-28 12:14:19.000000000 +0000 iptable_raw.ko
-rw-r--r-- 1 root root  5960 2025-02-28 12:14:19.000000000 +0000 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root 19784 2025-02-28 12:14:19.000000000 +0000 nf_nat_h323.ko
-rw-r--r-- 1 root root 10016 2025-02-28 12:14:19.000000000 +0000 nf_nat_pptp.ko
-rw-r--r-- 1 root root  7464 2025-02-28 12:14:19.000000000 +0000 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 888
-rw-r--r-- 1 root root  17352 2025-02-28 12:14:19.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root  22712 2025-02-28 12:14:19.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root   5224 2025-02-28 12:14:19.000000000 +0000 ip6_udp_tunnel.ko
-rw-r--r-- 1 root root 838992 2025-02-28 12:14:19.000000000 +0000 ipv6.ko
drwxr-xr-x 2 root root   4096 2025-02-28 12:30:46.000000000 +0000 netfilter
-rw-r--r-- 1 root root   8584 2025-02-28 12:14:19.000000000 +0000 tunnel6.ko

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 132
-rw-r--r-- 1 root root 39408 2025-02-28 12:14:19.000000000 +0000 ip6_tables.ko
-rw-r--r-- 1 root root  6104 2025-02-28 12:14:19.000000000 +0000 ip6t_NPT.ko
-rw-r--r-- 1 root root  6208 2025-02-28 12:14:19.000000000 +0000 ip6t_REJECT.ko
-rw-r--r-- 1 root root  4000 2025-02-28 12:14:19.000000000 +0000 ip6t_eui64.ko
-rw-r--r-- 1 root root  4608 2025-02-28 12:14:19.000000000 +0000 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  6280 2025-02-28 12:14:19.000000000 +0000 ip6table_filter.ko
-rw-r--r-- 1 root root  6920 2025-02-28 12:14:19.000000000 +0000 ip6table_mangle.ko
-rw-r--r-- 1 root root  5792 2025-02-28 12:14:19.000000000 +0000 ip6table_nat.ko
-rw-r--r-- 1 root root  6728 2025-02-28 12:14:19.000000000 +0000 ip6table_raw.ko
-rw-r--r-- 1 root root 18064 2025-02-28 12:14:19.000000000 +0000 nf_defrag_ipv6.ko
-rw-r--r-- 1 root root  8408 2025-02-28 12:14:19.000000000 +0000 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 92
-rw-r--r-- 1 root root  8912 2025-02-28 12:14:19.000000000 +0000 mpls_iptunnel.ko
-rw-r--r-- 1 root root 81696 2025-02-28 12:14:19.000000000 +0000 mpls_router.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 940
-rw-r--r-- 1 root root 225688 2025-02-28 12:14:19.000000000 +0000 nf_conntrack.ko
-rw-r--r-- 1 root root  16536 2025-02-28 12:14:19.000000000 +0000 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root  70616 2025-02-28 12:14:19.000000000 +0000 nf_conntrack_h323.ko
-rw-r--r-- 1 root root  12952 2025-02-28 12:14:19.000000000 +0000 nf_conntrack_irc.ko
-rw-r--r-- 1 root root  60560 2025-02-28 12:14:19.000000000 +0000 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root  16472 2025-02-28 12:14:19.000000000 +0000 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root  14448 2025-02-28 12:14:19.000000000 +0000 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root  46864 2025-02-28 12:14:19.000000000 +0000 nf_conntrack_sip.ko
-rw-r--r-- 1 root root  10112 2025-02-28 12:14:19.000000000 +0000 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root  59096 2025-02-28 12:14:19.000000000 +0000 nf_nat.ko
-rw-r--r-- 1 root root   7288 2025-02-28 12:14:19.000000000 +0000 nf_nat_ftp.ko
-rw-r--r-- 1 root root   6736 2025-02-28 12:14:19.000000000 +0000 nf_nat_irc.ko
-rw-r--r-- 1 root root  14824 2025-02-28 12:14:19.000000000 +0000 nf_nat_rtsp.ko
-rw-r--r-- 1 root root  22528 2025-02-28 12:14:19.000000000 +0000 nf_nat_sip.ko
-rw-r--r-- 1 root root   5096 2025-02-28 12:14:19.000000000 +0000 nf_nat_tftp.ko
-rw-r--r-- 1 root root  16704 2025-02-28 12:14:19.000000000 +0000 nfnetlink.ko
-rw-r--r-- 1 root root  58656 2025-02-28 12:14:19.000000000 +0000 x_tables.ko
-rw-r--r-- 1 root root  11112 2025-02-28 12:14:19.000000000 +0000 xt_CT.ko
-rw-r--r-- 1 root root   6472 2025-02-28 12:14:19.000000000 +0000 xt_DSCP.ko
-rw-r--r-- 1 root root   5176 2025-02-28 12:14:19.000000000 +0000 xt_HL.ko
-rw-r--r-- 1 root root   5248 2025-02-28 12:14:19.000000000 +0000 xt_MASQUERADE.ko
-rw-r--r-- 1 root root   5872 2025-02-28 12:14:19.000000000 +0000 xt_NETMAP.ko
-rw-r--r-- 1 root root   4848 2025-02-28 12:14:19.000000000 +0000 xt_REDIRECT.ko
-rw-r--r-- 1 root root  10488 2025-02-28 12:14:19.000000000 +0000 xt_TCPMSS.ko
-rw-r--r-- 1 root root   8256 2025-02-28 12:14:19.000000000 +0000 xt_addrtype.ko
-rw-r--r-- 1 root root   5912 2025-02-28 12:14:19.000000000 +0000 xt_connbytes.ko
-rw-r--r-- 1 root root   7336 2025-02-28 12:14:19.000000000 +0000 xt_connmark.ko
-rw-r--r-- 1 root root   8360 2025-02-28 12:14:19.000000000 +0000 xt_conntrack.ko
-rw-r--r-- 1 root root   4576 2025-02-28 12:14:19.000000000 +0000 xt_dscp.ko
-rw-r--r-- 1 root root  32704 2025-02-28 12:14:19.000000000 +0000 xt_hashlimit.ko
-rw-r--r-- 1 root root   5168 2025-02-28 12:14:19.000000000 +0000 xt_helper.ko
-rw-r--r-- 1 root root   4304 2025-02-28 12:14:19.000000000 +0000 xt_hl.ko
-rw-r--r-- 1 root root   4048 2025-02-28 12:14:19.000000000 +0000 xt_length.ko
-rw-r--r-- 1 root root   3736 2025-02-28 12:14:19.000000000 +0000 xt_mac.ko
-rw-r--r-- 1 root root   4344 2025-02-28 12:14:19.000000000 +0000 xt_mark.ko
-rw-r--r-- 1 root root   5072 2025-02-28 12:14:19.000000000 +0000 xt_multiport.ko
-rw-r--r-- 1 root root   8704 2025-02-28 12:14:19.000000000 +0000 xt_nat.ko
-rw-r--r-- 1 root root   5816 2025-02-28 12:14:19.000000000 +0000 xt_physdev.ko
-rw-r--r-- 1 root root   7568 2025-02-28 12:14:19.000000000 +0000 xt_policy.ko
-rw-r--r-- 1 root root   3544 2025-02-28 12:14:19.000000000 +0000 xt_realm.ko
-rw-r--r-- 1 root root   4608 2025-02-28 12:14:19.000000000 +0000 xt_statistic.ko
-rw-r--r-- 1 root root   4384 2025-02-28 12:14:19.000000000 +0000 xt_string.ko
-rw-r--r-- 1 root root   4664 2025-02-28 12:14:19.000000000 +0000 xt_tcpmss.ko
-rw-r--r-- 1 root root   6496 2025-02-28 12:14:19.000000000 +0000 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/rfkill:
total 36
-rw-r--r-- 1 root root 34136 2025-02-28 12:14:19.000000000 +0000 rfkill.ko

/lib/modules/5.6.3/kernel/net/sched:
total 144
-rw-r--r-- 1 root root 45512 2025-02-28 12:14:19.000000000 +0000 sch_cake.ko
-rw-r--r-- 1 root root 13256 2025-02-28 12:14:19.000000000 +0000 sch_codel.ko
-rw-r--r-- 1 root root 18008 2025-02-28 12:14:19.000000000 +0000 sch_fq_codel.ko
-rw-r--r-- 1 root root 44184 2025-02-28 12:14:19.000000000 +0000 sch_htb.ko
-rw-r--r-- 1 root root 15800 2025-02-28 12:14:19.000000000 +0000 sch_red.ko

/lib/modules/5.6.3/kernel/net/unix:
total 60
-rw-r--r-- 1 root root 61016 2025-02-28 12:14:19.000000000 +0000 unix.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 16
-rw-r--r-- 1 root root 13432 2025-02-28 12:14:19.000000000 +0000 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 520
-rw-r--r-- 1 root root 17272 2025-02-28 12:09:12.000000000 +0000 btest.ko
-rw-r--r-- 1 root root 11152 2025-02-28 12:13:17.000000000 +0000 dot1x.ko
-rw-r--r-- 1 root root 61312 2025-02-28 12:12:45.000000000 +0000 fan_i2c.ko
-rw-r--r-- 1 root root 14480 2025-02-28 12:08:57.000000000 +0000 fancon.ko
-rw-r--r-- 1 root root 86144 2025-02-28 12:09:47.000000000 +0000 flash.ko
-rw-r--r-- 1 root root  7192 2025-02-28 12:10:56.000000000 +0000 jiffies.ko
-rw-r--r-- 1 root root 26472 2025-02-28 12:09:37.000000000 +0000 lcd.ko
-rw-r--r-- 1 root root  4400 2025-02-28 12:09:24.000000000 +0000 ledgroup.ko
-rw-r--r-- 1 root root 20952 2025-02-28 12:09:03.000000000 +0000 logring.ko
-rw-r--r-- 1 root root 39696 2025-02-28 12:09:57.000000000 +0000 mesh.ko
-rw-r--r-- 1 root root  9440 2025-02-28 12:09:03.000000000 +0000 panics.ko
-rw-r--r-- 1 root root 10848 2025-02-28 12:10:42.000000000 +0000 rb.ko
-rw-r--r-- 1 root root  9440 2025-02-28 12:10:56.000000000 +0000 romon.ko
-rw-r--r-- 1 root root 17024 2025-02-28 12:10:32.000000000 +0000 simcard.ko
-rw-r--r-- 1 root root  9272 2025-02-28 12:09:45.000000000 +0000 snif.ko
-rw-r--r-- 1 root root 50728 2025-02-28 12:12:30.000000000 +0000 stm8_fan.ko
-rw-r--r-- 1 root root 47104 2025-02-28 12:09:57.000000000 +0000 traffic_gen.ko
-rw-r--r-- 1 root root 34320 2025-02-28 12:09:37.000000000 +0000 ts.ko
-rw-r--r-- 1 root root 11176 2025-02-28 12:09:45.000000000 +0000 ulog.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-02-28 12:30:46.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 sched

/lib/modules/5.6.3/net/bridge:
total 332
-rw-r--r-- 1 root root 302064 2025-02-28 12:13:49.000000000 +0000 bridge2.ko
-rw-r--r-- 1 root root  28136 2025-02-28 12:13:49.000000000 +0000 bridge2_netfilter.ko
-rw-r--r-- 1 root root   3496 2025-02-28 12:09:42.000000000 +0000 ebt_snif.ko
-rw-r--r-- 1 root root   3960 2025-02-28 12:09:41.000000000 +0000 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 40
-rw-r--r-- 1 root root  4912 2025-02-28 12:09:08.000000000 +0000 ipt_SAME.ko
-rw-r--r-- 1 root root 10088 2025-02-28 12:09:10.000000000 +0000 ipt_TARPIT.ko
-rw-r--r-- 1 root root  6880 2025-02-28 12:09:10.000000000 +0000 ipt_psd.ko
-rw-r--r-- 1 root root  3656 2025-02-28 12:09:42.000000000 +0000 ipt_snif.ko
-rw-r--r-- 1 root root  4624 2025-02-28 12:09:41.000000000 +0000 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 88
-rw-r--r-- 1 root root  2736 2025-02-28 12:10:19.000000000 +0000 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  2736 2025-02-28 12:10:20.000000000 +0000 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 19160 2025-02-28 12:10:28.000000000 +0000 xt_ein.ko
-rw-r--r-- 1 root root 20088 2025-02-28 12:09:14.000000000 +0000 xt_layer7.ko
-rw-r--r-- 1 root root 31192 2025-02-28 12:10:28.000000000 +0000 xt_misc.ko
-rw-r--r-- 1 root root  5248 2025-02-28 12:09:17.000000000 +0000 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 132
-rw-r--r-- 1 root root  8504 2025-02-28 12:09:29.000000000 +0000 cls_fw.ko
-rw-r--r-- 1 root root 20904 2025-02-28 12:09:33.000000000 +0000 cls_linear.ko
-rw-r--r-- 1 root root 23456 2025-02-28 12:09:58.000000000 +0000 proto_agr.ko
-rw-r--r-- 1 root root 34176 2025-02-28 12:09:58.000000000 +0000 sch_agr.ko
-rw-r--r-- 1 root root 16848 2025-02-28 12:09:13.000000000 +0000 sch_pcq.ko
-rw-r--r-- 1 root root 13608 2025-02-28 12:11:03.000000000 +0000 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2025-02-28 12:30:46.000000000 +0000 bin
drwxr-xr-x 11 root root 4096 2025-02-28 12:30:46.000000000 +0000 etc
drwxr-xr-x  5 root root 4096 2025-02-28 12:30:46.000000000 +0000 lib
lrwxrwxrwx  1 root root    8 2025-02-28 12:30:47.000000000 +0000 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2025-02-28 12:30:47.000000000 +0000 store -> /rw/store

/nova/bin:
total 20560
-rwxr-xr-x 1 root root   66972 2025-02-28 11:35:31.000000000 +0000 agent
-rwxr-xr-x 1 root root   66796 2025-02-28 11:35:29.000000000 +0000 arpd
-rwxr-xr-x 1 root root   67088 2025-02-28 11:37:43.000000000 +0000 backup
-rwxr-xr-x 1 root root  526648 2025-02-28 11:40:10.000000000 +0000 bridge2
-rwxr-xr-x 1 root root  133044 2025-02-28 11:37:55.000000000 +0000 btest
-rwxr-xr-x 1 root root  132868 2025-02-28 11:36:10.000000000 +0000 bth
-rwxr-xr-x 1 root root 1381028 2025-02-28 11:39:24.000000000 +0000 cerm
lrwxrwxrwx 1 root root       4 2025-02-28 11:39:24.000000000 +0000 cerm-worker -> cerm
-rwxr-xr-x 1 root root  329892 2025-02-28 11:39:06.000000000 +0000 cloud
-rwxr-xr-x 1 root root  198268 2025-02-28 11:37:24.000000000 +0000 crossfig
-rwxr-xr-x 1 root root  133020 2025-02-28 11:38:34.000000000 +0000 detnet
-rwxr-xr-x 1 root root  198568 2025-02-28 11:36:10.000000000 +0000 discover
-rwxr-xr-x 1 root root  526948 2025-02-28 11:39:11.000000000 +0000 diskd
-rwxr-xr-x 1 root root  198728 2025-02-28 11:40:02.000000000 +0000 dot1x
-rwxr-xr-x 1 root root   67452 2025-02-28 11:37:50.000000000 +0000 email
-rwxr-xr-x 1 root root  198828 2025-02-28 11:39:38.000000000 +0000 fileman
-rwxr-xr-x 1 root root   67136 2025-02-28 11:35:32.000000000 +0000 ftpd
-rwxr-xr-x 1 root root  284148 2025-02-28 11:36:27.000000000 +0000 graphing
-rwxr-xr-x 1 root root   66532 2025-02-28 11:39:22.000000000 +0000 havecardbus
-rwxr-xr-x 1 root root  132820 2025-02-28 11:37:18.000000000 +0000 igmpproxy
-rwxr-xr-x 1 root root  198376 2025-02-28 11:39:07.000000000 +0000 installer
-rwxr-xr-x 1 root root   67080 2025-02-28 11:39:33.000000000 +0000 ippool
-rwxr-xr-x 1 root root  132880 2025-02-28 11:37:54.000000000 +0000 keyman
-rwxr-xr-x 1 root root  132824 2025-02-28 11:36:05.000000000 +0000 kidcontrol
-rwxr-xr-x 1 root root  395332 2025-02-28 11:36:29.000000000 +0000 lcdstat
-rwxr-xr-x 1 root root  133128 2025-02-28 11:38:24.000000000 +0000 led
-rwxr-xr-x 1 root root  198512 2025-02-28 11:39:18.000000000 +0000 letsencrypt
-rwxr-xr-x 1 root root  133016 2025-02-28 11:39:09.000000000 +0000 loader
-rwxr-xr-x 1 root root  133108 2025-02-28 11:35:41.000000000 +0000 log
-rwxr-xr-x 1 root root  330228 2025-02-28 11:41:13.000000000 +0000 login
-rwxr-xr-x 1 root root  132624 2025-02-28 11:35:34.000000000 +0000 logmaker
-rwxr-xr-x 1 root root   67064 2025-02-28 11:35:29.000000000 +0000 macping
-rwxr-xr-x 1 root root   67260 2025-02-28 11:37:55.000000000 +0000 mactel
-rwxr-xr-x 1 root root   67144 2025-02-28 11:35:31.000000000 +0000 mepty
-rwxr-xr-x 1 root root  198316 2025-02-28 11:36:18.000000000 +0000 mesh
-rwxr-xr-x 1 root root  132592 2025-02-28 11:41:23.000000000 +0000 mode
lrwxrwxrwx 1 root root       7 2025-02-28 11:39:23.000000000 +0000 modprobed -> moduler
-rwxr-xr-x 1 root root  133384 2025-02-28 11:39:22.000000000 +0000 moduler
-rwxr-xr-x 1 root root  133520 2025-02-28 11:40:08.000000000 +0000 mproxy
-rwxr-xr-x 1 root root  133004 2025-02-28 11:38:02.000000000 +0000 mtget
-rwxr-xr-x 1 root root  132832 2025-02-28 11:36:10.000000000 +0000 natpmp
-rwxr-xr-x 1 root root 2955828 2025-02-28 11:43:07.000000000 +0000 net
-rwxr-xr-x 1 root root  132984 2025-02-28 11:38:49.000000000 +0000 ntp
-rwxr-xr-x 1 root root   66624 2025-02-28 11:35:26.000000000 +0000 panicsl
-rwxr-xr-x 1 root root 1314592 2025-02-28 11:41:13.000000000 +0000 parser
-rwxr-xr-x 1 root root   67156 2025-02-28 11:35:57.000000000 +0000 partd
-rwxr-xr-x 1 root root   67236 2025-02-28 11:35:36.000000000 +0000 ping
-rwxr-xr-x 1 root root  132956 2025-02-28 11:39:05.000000000 +0000 portman
-rwxr-xr-x 1 root root   67188 2025-02-28 12:14:43.000000000 +0000 profiler
-rwxr-xr-x 1 root root  198420 2025-02-28 11:39:20.000000000 +0000 ptp
-rwxr-xr-x 1 root root  264232 2025-02-28 11:35:38.000000000 +0000 quickset
-rwxr-xr-x 1 root root  132924 2025-02-28 11:39:19.000000000 +0000 radius
-rwxr-xr-x 1 root root  330088 2025-02-28 11:39:18.000000000 +0000 resolver
-rwxr-xr-x 1 root root   66816 2025-02-28 11:39:11.000000000 +0000 resolver_ctl
-rwxr-xr-x 1 root root  198768 2025-02-28 11:38:43.000000000 +0000 romon
-rwxr-xr-x 1 root root 3281104 2025-02-28 11:44:14.000000000 +0000 route
-rwxr-xr-x 1 root root   66924 2025-02-28 11:38:23.000000000 +0000 rtrace
-rwxr-xr-x 1 root root   67252 2025-02-28 11:39:32.000000000 +0000 sermgr
-rwxr-xr-x 1 root root   67184 2025-02-28 11:35:55.000000000 +0000 sertcp
-rwxr-xr-x 1 root root  132868 2025-02-28 11:36:03.000000000 +0000 sniffer
-rwxr-xr-x 1 root root  330040 2025-02-28 11:40:19.000000000 +0000 snmp
-rwxr-xr-x 1 root root  132932 2025-02-28 11:36:16.000000000 +0000 socks
-rwxr-xr-x 1 root root  198632 2025-02-28 11:39:34.000000000 +0000 ssld
-rwxr-xr-x 1 root root   67100 2025-02-28 11:37:53.000000000 +0000 sstore
-rwxr-xr-x 1 root root  920860 2025-02-28 11:41:23.000000000 +0000 sys2
-rwxr-xr-x 1 root root   66904 2025-02-28 11:35:33.000000000 +0000 telnet
-rwxr-xr-x 1 root root   66724 2025-02-28 11:35:27.000000000 +0000 telser
-rwxr-xr-x 1 root root   67324 2025-02-28 11:36:02.000000000 +0000 tftpd
-rwxr-xr-x 1 root root   67136 2025-02-28 11:35:29.000000000 +0000 traceroute
-rwxr-xr-x 1 root root  198456 2025-02-28 11:36:10.000000000 +0000 trafficgen
-rwxr-xr-x 1 root root   67012 2025-02-28 11:35:49.000000000 +0000 trafflow
-rwxr-xr-x 1 root root   67048 2025-02-28 11:35:30.000000000 +0000 undo
-rwxr-xr-x 1 root root  264240 2025-02-28 11:36:16.000000000 +0000 upnp
-rwxr-xr-x 1 root root  133328 2025-02-28 11:39:31.000000000 +0000 user
-rwxr-xr-x 1 root root  198564 2025-02-28 11:38:17.000000000 +0000 vrrp
-rwxr-xr-x 1 root root   67256 2025-02-28 11:35:55.000000000 +0000 watchdog
-rwxr-xr-x 1 root root  264760 2025-02-28 11:38:44.000000000 +0000 wproxy
-rwxr-xr-x 1 root root  264664 2025-02-28 11:40:07.000000000 +0000 www

/nova/etc:
total 52
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 leds
-rwxr-xr-x 1 root root 1242 2025-02-28 11:30:50.000000000 +0000 lognames
-rwxr-xr-x 1 root root   10 2025-02-28 11:30:50.000000000 +0000 logo
-rwxr-xr-x 1 root root    1 2025-02-28 11:30:50.000000000 +0000 manual-url
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 pciinfo
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 services
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 system_names
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 upnp
-rwxr-xr-x 1 root root   26 2025-02-28 11:30:50.000000000 +0000 url
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 user
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 www

/nova/etc/leds:
total 124
-rwxr-xr-x 1 root root 126901 2025-02-28 11:34:43.000000000 +0000 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2025-02-28 11:34:43.000000000 +0000 system.x3

/nova/etc/pciinfo:
total 200
-rwxr-xr-x 1 root root 204648 2025-02-28 11:34:43.000000000 +0000 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-02-28 11:34:43.000000000 +0000 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 992 2025-02-28 11:34:43.000000000 +0000 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2025-02-28 11:34:43.000000000 +0000 system.x3

/nova/etc/upnp:
total 64
-rwxr-xr-x 1 root root  3378 2025-02-28 11:30:52.000000000 +0000 connectionmanager.xml
-rwxr-xr-x 1 root root  5684 2025-02-28 11:30:52.000000000 +0000 contentdirectory.xml
-rwxr-xr-x 1 root root  8764 2025-02-28 11:30:52.000000000 +0000 logo120.png
-rwxr-xr-x 1 root root   930 2025-02-28 11:30:52.000000000 +0000 logo16.gif
-rwxr-xr-x 1 root root  1173 2025-02-28 11:30:52.000000000 +0000 logo32.gif
-rwxr-xr-x 1 root root  1504 2025-02-28 11:30:52.000000000 +0000 logo48.gif
-rwxr-xr-x 1 root root   735 2025-02-28 11:30:52.000000000 +0000 osinfo.xml
-rwxr-xr-x 1 root root  5928 2025-02-28 11:30:52.000000000 +0000 wancommonifcfg.xml
-rwxr-xr-x 1 root root 13444 2025-02-28 11:30:52.000000000 +0000 wanipconn.xml

/nova/etc/user:
total 4
-rwxr-xr-x 1 root root 2230 2025-02-28 11:34:43.000000000 +0000 system.x3

/nova/etc/www:
total 4
-rwxr-xr-x 1 root root 2458 2025-02-28 11:34:43.000000000 +0000 system.x3

/nova/lib:
total 24
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 defconf
-rw-r--r-- 1 root root 4521 2025-02-28 11:30:49.000000000 +0000 javasign.raw
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:46.000000000 +0000 profiler
-rwxr-xr-x 1 root root 4085 2025-02-28 11:30:50.000000000 +0000 xmlnames2

/nova/lib/console:
total 2192
-rwxr-xr-x 1 root root 2233832 2025-02-28 11:41:52.000000000 +0000 1073741824.mem
-rwxr-xr-x 1 root root     510 2025-02-28 11:30:49.000000000 +0000 logo.txt
-rwxr-xr-x 1 root root      18 2025-02-28 11:30:49.000000000 +0000 sublogo.txt

/nova/lib/defconf:
total 100
-rwxr-xr-x 1 root root   567 2025-02-28 11:30:49.000000000 +0000 defconf
-rwxr-xr-x 1 root root  4995 2025-02-28 11:30:49.000000000 +0000 defconf-caps
-rwxr-xr-x 1 root root  3700 2025-02-28 11:30:49.000000000 +0000 defconf-wps-sync
-rwxr-xr-x 1 root root 85178 2025-02-28 11:30:49.000000000 +0000 get-custom-defconf

/nova/lib/profiler:
total 80
-rwxr-xr-x 1 root root 78272 2025-02-28 12:14:43.000000000 +0000 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 720
-rwxr-xr-x 1 root root 529908 2025-02-28 12:15:08.000000000 +0000 mke2fs
-rwxr-xr-x 1 root root  66184 2025-02-28 11:34:41.000000000 +0000 nandfix
-rwxr-xr-x 1 root root 132912 2025-02-28 11:37:54.000000000 +0000 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2025-02-28 12:30:47.000000000 +0000 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:47.000000000 +0000 deinstall
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:47.000000000 +0000 lock
lrwxrwxrwx 1 root root    8 2025-02-28 12:30:47.000000000 +0000 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2025-02-28 12:30:47.000000000 +0000 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2025-02-28 12:30:47.000000000 +0000 post
lrwxrwxrwx 1 root root    7 2025-02-28 12:30:47.000000000 +0000 run -> /rw/run
lrwxrwxrwx 1 root root    4 2025-02-28 12:30:47.000000000 +0000 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

