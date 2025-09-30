### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 8752604 bytes, 727 inodes, blocksize: 262144 bytes, created: Mon Feb 24 09:47:14 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 bin
drwxr-xr-x 9 root root 4096 2025-02-24 09:47:07.000000000 +0000 bndl
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 boot
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 dev
lrwxrwxrwx 1 root root   11 2025-02-24 09:47:07.000000000 +0000 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 etc
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 flash
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:07.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-24 09:47:07.000000000 +0000 nova
lrwxrwxrwx 1 root root    9 2025-02-24 09:47:07.000000000 +0000 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 proc
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 ram
lrwxrwxrwx 1 root root    9 2025-02-24 09:47:07.000000000 +0000 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 sbin
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 sys
lrwxrwxrwx 1 root root    7 2025-02-24 09:47:07.000000000 +0000 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2025-02-24 09:47:07.000000000 +0000 var

/bin:
total 288
lrwxrwxrwx 1 root root     21 2025-02-24 09:47:07.000000000 +0000 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root  18080 2025-02-24 08:53:33.000000000 +0000 catlog
lrwxrwxrwx 1 root root     15 2025-02-24 09:47:07.000000000 +0000 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root     15 2025-02-24 09:47:07.000000000 +0000 login -> /nova/bin/login
-rwxr-xr-x 1 root root  28188 2025-02-24 09:31:14.000000000 +0000 mkexfatfs
-rwxr-xr-x 1 root root   7512 2025-02-24 08:53:33.000000000 +0000 pakp
lrwxrwxrwx 1 root root     21 2025-02-24 09:47:07.000000000 +0000 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root     15 2025-02-24 09:47:07.000000000 +0000 shell -> /nova/bin/login
-rwxr-xr-x 1 root root 234824 2025-02-24 09:32:01.000000000 +0000 sshfs

/bndl:
total 28
drwxr-xr-x 4 root root 4096 2025-02-24 09:47:06.000000000 +0000 advanced-tools
drwxr-xr-x 5 root root 4096 2025-02-24 09:47:06.000000000 +0000 dhcp
drwxr-xr-x 5 root root 4096 2025-02-24 09:47:06.000000000 +0000 hotspot
drwxr-xr-x 4 root root 4096 2025-02-24 09:47:07.000000000 +0000 ipv6
drwxr-xr-x 5 root root 4096 2025-02-24 09:47:06.000000000 +0000 ppp
drwxr-xr-x 5 root root 4096 2025-02-24 09:47:06.000000000 +0000 security
drwxr-xr-x 4 root root 4096 2025-02-24 09:47:07.000000000 +0000 wifi

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-02-24 09:47:06.000000000 +0000 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 webfig

/bndl/advanced-tools/home/web/webfig:
total 8
-rw-r--r-- 1 root root 2360 2025-02-24 09:33:02.000000000 +0000 advtool-b6a18e54d46e.jg.gz
-rwxr-xr-x 1 root root  105 2025-02-24 09:33:02.000000000 +0000 advtool.info
lrwxrwxrwx 1 root root   26 2025-02-24 09:33:03.000000000 +0000 advtool.jg.gz -> advtool-b6a18e54d46e.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 lib

/bndl/advanced-tools/nova/bin:
total 200
-rwxr-xr-x 1 root root 31248 2025-02-24 09:32:41.000000000 +0000 ddns
-rwxr-xr-x 1 root root 14604 2025-02-24 09:32:23.000000000 +0000 fping
-rwxr-xr-x 1 root root 17384 2025-02-24 09:32:48.000000000 +0000 macscan
-rwxr-xr-x 1 root root 67732 2025-02-24 09:34:14.000000000 +0000 netwatch
-rwxr-xr-x 1 root root 16092 2025-02-24 09:32:29.000000000 +0000 pspeed
-rwxr-xr-x 1 root root 34796 2025-02-24 09:33:00.000000000 +0000 scanner
-rwxr-xr-x 1 root root 11576 2025-02-24 09:32:58.000000000 +0000 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 console

/bndl/advanced-tools/nova/lib/console:
total 28
-rwxr-xr-x 1 root root 24705 2025-02-24 09:32:39.000000000 +0000 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 home
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2025-02-24 09:47:06.000000000 +0000 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 webfig

/bndl/dhcp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4400 2025-02-24 09:33:35.000000000 +0000 dhcp-0bf9ffa6f664.jg.gz
-rwxr-xr-x 1 root root   99 2025-02-24 09:33:35.000000000 +0000 dhcp.info
lrwxrwxrwx 1 root root   23 2025-02-24 09:33:35.000000000 +0000 dhcp.jg.gz -> dhcp-0bf9ffa6f664.jg.gz

/bndl/dhcp/lib:
total 116
-rwxr-xr-x 1 root root 115056 2025-02-24 09:33:05.000000000 +0000 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 lib

/bndl/dhcp/nova/bin:
total 320
-rwxr-xr-x 1 root root 224064 2025-02-24 09:35:55.000000000 +0000 dhcp
-rwxr-xr-x 1 root root 100860 2025-02-24 09:34:35.000000000 +0000 dhcpclient

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 console

/bndl/dhcp/nova/lib/console:
total 108
-rwxr-xr-x 1 root root 109527 2025-02-24 09:33:21.000000000 +0000 1128267776.mem

/bndl/hotspot:
total 12
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-24 09:47:06.000000000 +0000 nova

/bndl/hotspot/home:
total 4
drwxr-xr-x 4 root root 4096 2025-02-24 09:47:06.000000000 +0000 web

/bndl/hotspot/home/web:
total 8
drwxr-xr-x 5 root root 4096 2025-02-24 09:47:06.000000000 +0000 hotspot
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 webfig

/bndl/hotspot/home/web/hotspot:
total 68
-rw-r--r-- 1 root root 1094 2025-02-24 08:46:02.000000000 +0000 alogin.html
-rw-r--r-- 1 root root  311 2025-02-24 08:46:02.000000000 +0000 api.json
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 css
-rw-r--r-- 1 root root  640 2025-02-24 08:46:02.000000000 +0000 error.html
-rw-r--r-- 1 root root 3719 2025-02-24 08:46:02.000000000 +0000 errors.txt
-rw-r--r-- 1 root root  903 2025-02-24 08:46:02.000000000 +0000 favicon.ico
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 img
-rw-r--r-- 1 root root 4423 2025-02-24 08:46:02.000000000 +0000 login.html
-rw-r--r-- 1 root root 1459 2025-02-24 08:46:02.000000000 +0000 logout.html
-rw-r--r-- 1 root root 7218 2025-02-24 08:46:02.000000000 +0000 md5.js
-rw-r--r-- 1 root root 1204 2025-02-24 08:46:02.000000000 +0000 radvert.html
-rw-r--r-- 1 root root  330 2025-02-24 08:46:02.000000000 +0000 redirect.html
-rw-r--r-- 1 root root  877 2025-02-24 08:46:02.000000000 +0000 rlogin.html
-rw-r--r-- 1 root root 2855 2025-02-24 08:46:02.000000000 +0000 status.html
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 xml

/bndl/hotspot/home/web/hotspot/css:
total 4
-rw-r--r-- 1 root root 4053 2025-02-24 08:46:02.000000000 +0000 style.css

/bndl/hotspot/home/web/hotspot/img:
total 8
-rw-r--r-- 1 root root 644 2025-02-24 08:46:02.000000000 +0000 password.svg
-rw-r--r-- 1 root root 444 2025-02-24 08:46:02.000000000 +0000 user.svg

/bndl/hotspot/home/web/hotspot/xml:
total 32
-rw-r--r-- 1 root root 4251 2025-02-24 08:46:02.000000000 +0000 WISPAccessGatewayParam.xsd
-rw-r--r-- 1 root root  839 2025-02-24 08:46:02.000000000 +0000 alogin.html
-rw-r--r-- 1 root root  428 2025-02-24 08:46:02.000000000 +0000 error.html
-rw-r--r-- 1 root root  372 2025-02-24 08:46:02.000000000 +0000 flogout.html
-rw-r--r-- 1 root root  809 2025-02-24 08:46:02.000000000 +0000 login.html
-rw-r--r-- 1 root root  370 2025-02-24 08:46:02.000000000 +0000 logout.html
-rw-r--r-- 1 root root  545 2025-02-24 08:46:02.000000000 +0000 rlogin.html

/bndl/hotspot/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4216 2025-02-24 09:34:38.000000000 +0000 hotspot-f1e2e1d4af99.jg.gz
-rwxr-xr-x 1 root root  105 2025-02-24 09:34:38.000000000 +0000 hotspot.info
lrwxrwxrwx 1 root root   26 2025-02-24 09:34:39.000000000 +0000 hotspot.jg.gz -> hotspot-f1e2e1d4af99.jg.gz

/bndl/hotspot/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 modules

/bndl/hotspot/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 5.6.3

/bndl/hotspot/lib/modules/5.6.3:
total 8
-rw-r--r-- 1 root root   13 2025-02-24 09:35:00.000000000 +0000 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 net

/bndl/hotspot/lib/modules/5.6.3/net:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 ipv4

/bndl/hotspot/lib/modules/5.6.3/net/ipv4:
total 44
-rw-r--r-- 1 root root 43956 2025-02-24 09:34:21.000000000 +0000 unicl.ko

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 lib

/bndl/hotspot/nova/bin:
total 256
-rwxr-xr-x 1 root root 260928 2025-02-24 09:34:34.000000000 +0000 hotspot

/bndl/hotspot/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 radius

/bndl/hotspot/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-02-24 09:34:09.000000000 +0000 hotspot.x3

/bndl/hotspot/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 console

/bndl/hotspot/nova/lib/console:
total 84
-rwxr-xr-x 1 root root 82346 2025-02-24 09:33:00.000000000 +0000 1132462080.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:07.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-02-24 09:47:07.000000000 +0000 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:07.000000000 +0000 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 webfig

/bndl/ipv6/home/web/webfig:
total 12
-rw-r--r-- 1 root root 7911 2025-02-24 09:33:08.000000000 +0000 ipv6-932ca749791f.jg.gz
-rwxr-xr-x 1 root root   99 2025-02-24 09:33:09.000000000 +0000 ipv6.info
lrwxrwxrwx 1 root root   23 2025-02-24 09:33:09.000000000 +0000 ipv6.jg.gz -> ipv6-932ca749791f.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-02-24 09:47:07.000000000 +0000 lib

/bndl/ipv6/nova/bin:
total 92
-rwxr-xr-x 1 root root 28912 2025-02-24 09:33:23.000000000 +0000 ippool6
-rwxr-xr-x 1 root root 57996 2025-02-24 09:32:51.000000000 +0000 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 route

/bndl/ipv6/nova/lib/console:
total 184
-rwxr-xr-x 1 root root 186728 2025-02-24 09:32:48.000000000 +0000 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2025-02-24 08:46:02.000000000 +0000 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-24 09:47:06.000000000 +0000 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 webfig

/bndl/ppp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 6450 2025-02-24 09:34:33.000000000 +0000 ppp-f833b7b4927e.jg.gz
-rwxr-xr-x 1 root root   97 2025-02-24 09:34:33.000000000 +0000 ppp.info
lrwxrwxrwx 1 root root   22 2025-02-24 09:34:34.000000000 +0000 ppp.jg.gz -> ppp-f833b7b4927e.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2025-02-24 09:47:06.000000000 +0000 5.6.3

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 misc
-rw-r--r-- 1 root root  293 2025-02-24 09:41:45.000000000 +0000 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 104
-rw-r--r-- 1 root root 11940 2025-02-24 09:28:45.000000000 +0000 ppp_async.ko
-rw-r--r-- 1 root root  6816 2025-02-24 09:28:45.000000000 +0000 ppp_deflate.ko
-rw-r--r-- 1 root root 34156 2025-02-24 09:28:45.000000000 +0000 ppp_generic.ko
-rw-r--r-- 1 root root  8684 2025-02-24 09:28:45.000000000 +0000 ppp_mppe.ko
-rw-r--r-- 1 root root 10100 2025-02-24 09:28:45.000000000 +0000 ppp_synctty.ko
-rw-r--r-- 1 root root 12972 2025-02-24 09:28:45.000000000 +0000 pppoe.ko
-rw-r--r-- 1 root root  4316 2025-02-24 09:28:45.000000000 +0000 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 96
-rw-r--r-- 1 root root 37560 2025-02-24 09:33:52.000000000 +0000 ovpn.ko
-rw-r--r-- 1 root root  6432 2025-02-24 09:34:15.000000000 +0000 pppoefp.ko
-rw-r--r-- 1 root root 48544 2025-02-24 09:34:49.000000000 +0000 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 64
-rw-r--r-- 1 root root 50132 2025-02-24 09:33:33.000000000 +0000 l2tp.ko
-rw-r--r-- 1 root root 10544 2025-02-24 09:32:59.000000000 +0000 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-02-24 09:47:06.000000000 +0000 etc
drwxr-xr-x 4 root root 4096 2025-02-24 09:47:06.000000000 +0000 lib

/bndl/ppp/nova/bin:
total 584
-rwxr-xr-x 1 root root 595528 2025-02-24 09:41:06.000000000 +0000 ppp
lrwxrwxrwx 1 root root      3 2025-02-24 09:41:06.000000000 +0000 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2025-02-24 09:33:44.000000000 +0000 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2025-02-24 09:33:44.000000000 +0000 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 profiler

/bndl/ppp/nova/lib/console:
total 144
-rwxr-xr-x 1 root root 147136 2025-02-24 09:34:07.000000000 +0000 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 4
-rwxr-xr-x 1 root root 1940 2025-02-24 09:35:23.000000000 +0000 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-24 09:47:06.000000000 +0000 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 webfig

/bndl/security/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4365 2025-02-24 09:38:19.000000000 +0000 secure-0a49065a769f.jg.gz
-rwxr-xr-x 1 root root  103 2025-02-24 09:38:19.000000000 +0000 secure.info
lrwxrwxrwx 1 root root   25 2025-02-24 09:38:19.000000000 +0000 secure.jg.gz -> secure-0a49065a769f.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 5.6.3

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2025-02-24 09:47:06.000000000 +0000 kernel
-rw-r--r-- 1 root root  106 2025-02-24 09:44:25.000000000 +0000 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 crypto
drwxr-xr-x 5 root root 4096 2025-02-24 09:47:06.000000000 +0000 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 88
-rw-r--r-- 1 root root  8384 2025-02-24 09:28:44.000000000 +0000 blowfish_common.ko
-rw-r--r-- 1 root root  6116 2025-02-24 09:28:44.000000000 +0000 blowfish_generic.ko
-rw-r--r-- 1 root root 23668 2025-02-24 09:28:44.000000000 +0000 camellia_generic.ko
-rw-r--r-- 1 root root  8412 2025-02-24 09:28:44.000000000 +0000 chacha20poly1305.ko
-rw-r--r-- 1 root root  3864 2025-02-24 09:28:44.000000000 +0000 echainiv.ko
-rw-r--r-- 1 root root 15864 2025-02-24 09:28:44.000000000 +0000 twofish_common.ko
-rw-r--r-- 1 root root  9892 2025-02-24 09:28:44.000000000 +0000 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 key
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root  8968 2025-02-24 09:28:51.000000000 +0000 ah4.ko
-rw-r--r-- 1 root root 12536 2025-02-24 09:28:51.000000000 +0000 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 36
-rw-r--r-- 1 root root 34200 2025-02-24 09:28:52.000000000 +0000 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 28
-rw-r--r-- 1 root root 27120 2025-02-24 09:28:55.000000000 +0000 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-02-24 09:47:06.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 lib

/bndl/security/nova/bin:
total 720
-rwxr-xr-x 1 root root 541600 2025-02-24 09:43:24.000000000 +0000 ipsec
lrwxrwxrwx 1 root root      5 2025-02-24 09:43:24.000000000 +0000 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 191660 2025-02-24 09:39:38.000000000 +0000 ssh
lrwxrwxrwx 1 root root      3 2025-02-24 09:39:45.000000000 +0000 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-02-24 09:36:53.000000000 +0000 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2025-02-24 09:36:53.000000000 +0000 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 console

/bndl/security/nova/lib/console:
total 88
-rwxr-xr-x 1 root root 89528 2025-02-24 09:38:28.000000000 +0000 1077936128.mem

/bndl/wifi:
total 8
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:07.000000000 +0000 home
drwxr-xr-x 5 root root 4096 2025-02-24 09:47:07.000000000 +0000 nova

/bndl/wifi/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:07.000000000 +0000 web

/bndl/wifi/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 webfig

/bndl/wifi/home/web/webfig:
total 16
-rw-r--r-- 1 root root 8897 2025-02-24 09:33:24.000000000 +0000 wave2-5c9c2c711e64.jg.gz
-rwxr-xr-x 1 root root  101 2025-02-24 09:33:24.000000000 +0000 wave2.info
lrwxrwxrwx 1 root root   24 2025-02-24 09:33:24.000000000 +0000 wave2.jg.gz -> wave2-5c9c2c711e64.jg.gz

/bndl/wifi/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-02-24 09:47:07.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:07.000000000 +0000 lib

/bndl/wifi/nova/bin:
total 1316
-rwxr-xr-x 1 root root 1344732 2025-02-24 09:43:15.000000000 +0000 ww2

/bndl/wifi/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 radius

/bndl/wifi/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 183 2025-02-24 09:32:32.000000000 +0000 wifi.x3

/bndl/wifi/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-02-24 09:32:32.000000000 +0000 wifi.x3

/bndl/wifi/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 console

/bndl/wifi/nova/lib/console:
total 192
-rwxr-xr-x 1 root root 194825 2025-02-24 09:33:18.000000000 +0000 1275068416.mem

/boot:
total 0

/dev:
total 0

/etc:
total 184
-rw-r--r-- 1 root root 130747 2025-02-24 08:46:26.000000000 +0000 license
-rw-r--r-- 1 root root  54800 2025-02-24 08:52:37.000000000 +0000 mt7621L-7.18.fwf
lrwxrwxrwx 1 root root     24 2025-02-24 09:47:07.000000000 +0000 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2025-02-24 09:47:07.000000000 +0000 web

/home/web:
total 64
drwxr-xr-x 2 root root  4096 2025-02-24 09:47:06.000000000 +0000 assets
-rwxr-xr-x 1 root root 18934 2025-02-24 08:51:39.000000000 +0000 bth-files.html
-rwxr-xr-x 1 root root   600 2025-02-24 08:46:26.000000000 +0000 favicon.png
-rwxr-xr-x 1 root root   689 2025-02-24 08:46:26.000000000 +0000 favicon.svg
-rwxr-xr-x 1 root root   708 2025-02-24 08:46:24.000000000 +0000 graph.css
drwxr-xr-x 2 root root  4096 2025-02-24 09:47:06.000000000 +0000 help
-rwxr-xr-x 1 root root  1254 2025-02-24 08:46:26.000000000 +0000 index2.html
lrwxrwxrwx 1 root root    12 2025-02-24 09:32:10.000000000 +0000 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2025-02-24 08:46:26.000000000 +0000 logo.png
-rw-r--r-- 1 root root  2507 2025-02-24 08:46:26.000000000 +0000 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2025-02-24 08:46:26.000000000 +0000 robots.txt
drwxr-xr-x 2 root root  4096 2025-02-24 09:47:06.000000000 +0000 webfig
drwxr-xr-x 2 root root  4096 2025-02-24 09:47:07.000000000 +0000 winbox

/home/web/assets:
total 160
-rw-r--r-- 1 root root  19040 2025-02-24 08:46:26.000000000 +0000 400.woff2
-rw-r--r-- 1 root root  19156 2025-02-24 08:46:26.000000000 +0000 700.woff2
-rwxr-xr-x 1 root root    799 2025-02-24 08:46:26.000000000 +0000 script-bd71a1293274.js
-rwxr-xr-x 1 root root 117563 2025-02-24 08:46:26.000000000 +0000 style-692511ab2675.css

/home/web/help:
total 4
-rw-r--r-- 1 root root 118 2025-02-24 08:46:26.000000000 +0000 license.html

/home/web/webfig:
total 680
-rwxr-xr-x 1 root root   9157 2025-02-24 08:50:26.000000000 +0000 curve255-541e54a862be.js
-rwxr-xr-x 1 root root     68 2025-02-24 08:55:38.000000000 +0000 icons.info
-rwxr-xr-x 1 root root  24341 2025-02-24 08:46:24.000000000 +0000 icons.png
-rwxr-xr-x 1 root root     55 2025-02-24 08:55:38.000000000 +0000 icons24.info
-rwxr-xr-x 1 root root  39797 2025-02-24 08:46:24.000000000 +0000 icons24.png
-rwxr-xr-x 1 root root     55 2025-02-24 08:55:38.000000000 +0000 icons32.info
-rwxr-xr-x 1 root root  55094 2025-02-24 08:46:24.000000000 +0000 icons32.png
-rwxr-xr-x 1 root root  21705 2025-02-24 08:50:26.000000000 +0000 index.html
lrwxrwxrwx 1 root root     13 2025-02-24 08:50:27.000000000 +0000 list -> /ram/gum.list
-rwxr-xr-x 1 root root 408548 2025-02-24 08:50:26.000000000 +0000 master-6894ebd52cab.js
-rw-r--r-- 1 root root 107679 2025-02-24 08:55:41.000000000 +0000 roteros-1b73c65c6f3a.jg.gz
-rwxr-xr-x 1 root root    107 2025-02-24 08:55:41.000000000 +0000 roteros.info
lrwxrwxrwx 1 root root     26 2025-02-24 08:55:42.000000000 +0000 roteros.jg.gz -> roteros-1b73c65c6f3a.jg.gz

/home/web/winbox:
total 0

/lib:
total 1904
-rwxr-xr-x 1 root root 279272 2025-02-24 08:48:33.000000000 +0000 libc.so
-rwxr-xr-x 1 root root  89280 2025-02-24 08:54:23.000000000 +0000 libeap.so
-rwxr-xr-x 1 root root  21840 2025-02-24 08:50:33.000000000 +0000 libjson.so
-rwxr-xr-x 1 root root 173944 2025-02-24 08:52:22.000000000 +0000 librappsup.so
-rwxr-xr-x 1 root root 122540 2025-02-24 08:51:28.000000000 +0000 libubox.so
-rwxr-xr-x 1 root root  76508 2025-02-24 08:50:26.000000000 +0000 libuc++.so
-rwxr-xr-x 1 root root 274196 2025-02-24 08:52:59.000000000 +0000 libucrypto.so
-rwxr-xr-x 1 root root  27308 2025-02-24 08:51:21.000000000 +0000 libufiber.so
-rwxr-xr-x 1 root root  69868 2025-02-24 08:51:27.000000000 +0000 libuhttp.so
-rwxr-xr-x 1 root root 612048 2025-02-24 08:51:01.000000000 +0000 libumsg.so
-rwxr-xr-x 1 root root  37020 2025-02-24 08:53:19.000000000 +0000 liburadius.so
-rwxr-xr-x 1 root root  10544 2025-02-24 08:53:11.000000000 +0000 libuxml++.so
-rwxr-xr-x 1 root root  36968 2025-02-24 08:50:30.000000000 +0000 libwww.so
-rwxr-xr-x 1 root root  13772 2025-02-24 08:50:33.000000000 +0000 libxml.so
-rwxr-xr-x 1 root root  67992 2025-02-24 08:50:35.000000000 +0000 libz.so
drwxr-xr-x 3 root root   4096 2025-02-24 09:47:06.000000000 +0000 modules
lrwxrwxrwx 1 root root     27 2025-02-24 09:47:07.000000000 +0000 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2025-02-24 09:47:06.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 6 root root 4096 2025-02-24 09:47:06.000000000 +0000 drivers
drwxr-xr-x 8 root root 4096 2025-02-24 09:47:06.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 misc
-rw-r--r-- 1 root root 3106 2025-02-24 09:32:07.000000000 +0000 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-02-24 09:47:06.000000000 +0000 net

/lib/modules/5.6.3/drivers:
total 16
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 char
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 crypto
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 mmc
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 net

/lib/modules/5.6.3/drivers/char:
total 20
-rw-r--r-- 1 root root 4924 2025-02-24 09:27:51.000000000 +0000 mt7621wdt.ko
-rw-r--r-- 1 root root 9160 2025-02-24 09:24:50.000000000 +0000 ticker.ko

/lib/modules/5.6.3/drivers/crypto:
total 24
-rw-r--r-- 1 root root 24100 2025-02-24 09:28:52.000000000 +0000 crypto_eip93.ko

/lib/modules/5.6.3/drivers/mmc:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 host

/lib/modules/5.6.3/drivers/mmc/host:
total 40
-rw-r--r-- 1 root root 37676 2025-02-24 09:28:37.000000000 +0000 mtk_sd.ko

/lib/modules/5.6.3/drivers/net:
total 556
-rw-r--r-- 1 root root  40276 2025-02-24 09:26:29.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root  11352 2025-02-24 09:26:07.000000000 +0000 imq.ko
-rw-r--r-- 1 root root  37716 2025-02-24 09:26:29.000000000 +0000 mediatek_switch.ko
-rw-r--r-- 1 root root  10548 2025-02-24 09:29:54.000000000 +0000 mpls_fp.ko
-rw-r--r-- 1 root root 192612 2025-02-24 09:29:56.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root  85324 2025-02-24 09:26:02.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root  24840 2025-02-24 09:27:40.000000000 +0000 raether.ko
-rw-r--r-- 1 root root  59148 2025-02-24 09:26:31.000000000 +0000 switch.ko
drwxr-xr-x 2 root root   4096 2025-02-24 09:47:06.000000000 +0000 usb
-rw-r--r-- 1 root root  23332 2025-02-24 09:24:51.000000000 +0000 via-velocity.ko
-rw-r--r-- 1 root root  57884 2025-02-24 09:30:04.000000000 +0000 vxlan2.ko

/lib/modules/5.6.3/drivers/net/usb:
total 180
-rw-r--r-- 1 root root  69640 2025-02-24 09:29:42.000000000 +0000 fp_usbnet.ko
-rw-r--r-- 1 root root 108720 2025-02-24 09:29:22.000000000 +0000 mbim.ko

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-02-24 09:47:06.000000000 +0000 arch
drwxr-xr-x  2 root root 4096 2025-02-24 09:47:06.000000000 +0000 crypto
drwxr-xr-x  9 root root 4096 2025-02-24 09:47:06.000000000 +0000 drivers
drwxr-xr-x 11 root root 4096 2025-02-24 09:47:06.000000000 +0000 fs
drwxr-xr-x  5 root root 4096 2025-02-24 09:47:06.000000000 +0000 lib
drwxr-xr-x 13 root root 4096 2025-02-24 09:47:06.000000000 +0000 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 4 root root 4096 2025-02-24 09:47:06.000000000 +0000 mips

/lib/modules/5.6.3/kernel/arch/mips:
total 8
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 crypto
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 oprofile

/lib/modules/5.6.3/kernel/arch/mips/crypto:
total 16
-rw-r--r-- 1 root root 7860 2025-02-24 09:28:43.000000000 +0000 chacha-mips.ko
-rw-r--r-- 1 root root 5760 2025-02-24 09:28:44.000000000 +0000 poly1305-mips.ko

/lib/modules/5.6.3/kernel/arch/mips/oprofile:
total 40
-rw-r--r-- 1 root root 38436 2025-02-24 09:28:44.000000000 +0000 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 56
-rw-r--r-- 1 root root  3100 2025-02-24 09:28:44.000000000 +0000 arc4.ko
-rw-r--r-- 1 root root 12340 2025-02-24 09:28:44.000000000 +0000 ccm.ko
-rw-r--r-- 1 root root  5048 2025-02-24 09:28:44.000000000 +0000 cmac.ko
-rw-r--r-- 1 root root  3852 2025-02-24 09:28:44.000000000 +0000 des_generic.ko
-rw-r--r-- 1 root root  5024 2025-02-24 09:28:44.000000000 +0000 md4.ko
-rw-r--r-- 1 root root  4056 2025-02-24 09:28:44.000000000 +0000 sha1_generic.ko
-rw-r--r-- 1 root root 10096 2025-02-24 09:28:44.000000000 +0000 sha512_generic.ko

/lib/modules/5.6.3/kernel/drivers:
total 28
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 ata
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 hid
drwxr-xr-x 4 root root 4096 2025-02-24 09:47:06.000000000 +0000 mmc
drwxr-xr-x 7 root root 4096 2025-02-24 09:47:06.000000000 +0000 net
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 nvme
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 scsi
drwxr-xr-x 8 root root 4096 2025-02-24 09:47:06.000000000 +0000 usb

/lib/modules/5.6.3/kernel/drivers/ata:
total 260
-rw-r--r-- 1 root root  33232 2025-02-24 09:28:44.000000000 +0000 ahci.ko
-rw-r--r-- 1 root root  32380 2025-02-24 09:28:44.000000000 +0000 libahci.ko
-rw-r--r-- 1 root root 193976 2025-02-24 09:28:44.000000000 +0000 libata.ko

/lib/modules/5.6.3/kernel/drivers/hid:
total 72
-rw-r--r-- 1 root root 72648 2025-02-24 09:28:45.000000000 +0000 hid.ko

/lib/modules/5.6.3/kernel/drivers/mmc:
total 8
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 core
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 host

/lib/modules/5.6.3/kernel/drivers/mmc/core:
total 140
-rw-r--r-- 1 root root  35200 2025-02-24 09:28:45.000000000 +0000 mmc_block.ko
-rw-r--r-- 1 root root 104196 2025-02-24 09:28:45.000000000 +0000 mmc_core.ko

/lib/modules/5.6.3/kernel/drivers/mmc/host:
total 20
-rw-r--r-- 1 root root 13880 2025-02-24 09:28:45.000000000 +0000 mmc_spi.ko
-rw-r--r-- 1 root root  2800 2025-02-24 09:28:45.000000000 +0000 of_mmc_spi.ko

/lib/modules/5.6.3/kernel/drivers/net:
total 168
-rw-r--r-- 1 root root 47492 2025-02-24 09:28:45.000000000 +0000 amt.ko
drwxr-xr-x 2 root root  4096 2025-02-24 09:47:06.000000000 +0000 bonding
drwxr-xr-x 3 root root  4096 2025-02-24 09:47:06.000000000 +0000 ethernet
-rw-r--r-- 1 root root 38288 2025-02-24 09:28:45.000000000 +0000 macsec.ko
-rw-r--r-- 1 root root 20168 2025-02-24 09:28:45.000000000 +0000 macvlan.ko
drwxr-xr-x 2 root root  4096 2025-02-24 09:47:06.000000000 +0000 slip
drwxr-xr-x 2 root root  4096 2025-02-24 09:47:06.000000000 +0000 usb
-rw-r--r-- 1 root root 17072 2025-02-24 09:28:46.000000000 +0000 veth.ko
-rw-r--r-- 1 root root 19540 2025-02-24 09:28:46.000000000 +0000 vrf.ko
drwxr-xr-x 2 root root  4096 2025-02-24 09:47:06.000000000 +0000 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 132
-rw-r--r-- 1 root root 131536 2025-02-24 09:28:45.000000000 +0000 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 intel

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 40
-rw-r--r-- 1 root root 37232 2025-02-24 09:28:45.000000000 +0000 e100.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6276 2025-02-24 09:28:46.000000000 +0000 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 132
-rw-r--r-- 1 root root 19604 2025-02-24 09:28:46.000000000 +0000 ax88179_178a.ko
-rw-r--r-- 1 root root 40780 2025-02-24 09:28:46.000000000 +0000 hso.ko
-rw-r--r-- 1 root root 12832 2025-02-24 09:28:46.000000000 +0000 sierra_net.ko
-rw-r--r-- 1 root root 25512 2025-02-24 09:28:46.000000000 +0000 smsc95xx.ko
-rw-r--r-- 1 root root 27792 2025-02-24 09:28:46.000000000 +0000 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 80
-rw-r--r-- 1 root root 81660 2025-02-24 09:28:46.000000000 +0000 wireguard.ko

/lib/modules/5.6.3/kernel/drivers/nvme:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 host

/lib/modules/5.6.3/kernel/drivers/nvme/host:
total 100
-rw-r--r-- 1 root root 64028 2025-02-24 09:28:46.000000000 +0000 nvme-core.ko
-rw-r--r-- 1 root root 34744 2025-02-24 09:28:46.000000000 +0000 nvme.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 160
-rw-r--r-- 1 root root 118524 2025-02-24 09:28:46.000000000 +0000 scsi_mod.ko
-rw-r--r-- 1 root root  41076 2025-02-24 09:28:46.000000000 +0000 sd_mod.ko

/lib/modules/5.6.3/kernel/drivers/usb:
total 24
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 class
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 common
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 core
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 host
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 serial
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 storage

/lib/modules/5.6.3/kernel/drivers/usb/class:
total 28
-rw-r--r-- 1 root root 27336 2025-02-24 09:28:46.000000000 +0000 cdc-acm.ko

/lib/modules/5.6.3/kernel/drivers/usb/common:
total 8
-rw-r--r-- 1 root root 6280 2025-02-24 09:28:46.000000000 +0000 usb-common.ko

/lib/modules/5.6.3/kernel/drivers/usb/core:
total 180
-rw-r--r-- 1 root root 184116 2025-02-24 09:28:47.000000000 +0000 usbcore.ko

/lib/modules/5.6.3/kernel/drivers/usb/host:
total 128
-rw-r--r-- 1 root root 118468 2025-02-24 09:28:47.000000000 +0000 xhci-hcd.ko
-rw-r--r-- 1 root root   9536 2025-02-24 09:28:47.000000000 +0000 xhci-mtk.ko

/lib/modules/5.6.3/kernel/drivers/usb/serial:
total 316
-rw-r--r-- 1 root root   8664 2025-02-24 09:28:48.000000000 +0000 ch341.ko
-rw-r--r-- 1 root root  24292 2025-02-24 09:28:48.000000000 +0000 cp210x.ko
-rw-r--r-- 1 root root  77940 2025-02-24 09:28:48.000000000 +0000 ftdi_sio.ko
-rw-r--r-- 1 root root   5412 2025-02-24 09:28:48.000000000 +0000 ipw.ko
-rw-r--r-- 1 root root 101244 2025-02-24 09:28:48.000000000 +0000 option.ko
-rw-r--r-- 1 root root  15748 2025-02-24 09:28:48.000000000 +0000 pl2303.ko
-rw-r--r-- 1 root root  14232 2025-02-24 09:28:48.000000000 +0000 qcserial.ko
-rw-r--r-- 1 root root  14044 2025-02-24 09:28:48.000000000 +0000 sierra.ko
-rw-r--r-- 1 root root   8516 2025-02-24 09:28:48.000000000 +0000 usb_wwan.ko
-rw-r--r-- 1 root root  29724 2025-02-24 09:28:48.000000000 +0000 usbserial.ko

/lib/modules/5.6.3/kernel/drivers/usb/storage:
total 76
-rw-r--r-- 1 root root 74624 2025-02-24 09:28:48.000000000 +0000 usb-storage.ko

/lib/modules/5.6.3/kernel/fs:
total 44
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 cifs
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 exfat
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 ext4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 fat
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 fuse
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 jbd2
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 ksmbd
-rw-r--r-- 1 root root 7280 2025-02-24 09:28:49.000000000 +0000 mbcache.ko
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 nls
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 ntfs3

/lib/modules/5.6.3/kernel/fs/cifs:
total 492
-rw-r--r-- 1 root root 501560 2025-02-24 09:28:48.000000000 +0000 cifs.ko

/lib/modules/5.6.3/kernel/fs/exfat:
total 80
-rw-r--r-- 1 root root 78496 2025-02-24 09:28:48.000000000 +0000 exfat.ko

/lib/modules/5.6.3/kernel/fs/ext4:
total 456
-rw-r--r-- 1 root root 463556 2025-02-24 09:28:48.000000000 +0000 ext4.ko

/lib/modules/5.6.3/kernel/fs/fat:
total 88
-rw-r--r-- 1 root root 72124 2025-02-24 09:28:48.000000000 +0000 fat.ko
-rw-r--r-- 1 root root 12828 2025-02-24 09:28:49.000000000 +0000 vfat.ko

/lib/modules/5.6.3/kernel/fs/fuse:
total 108
-rw-r--r-- 1 root root 107940 2025-02-24 09:28:49.000000000 +0000 fuse.ko

/lib/modules/5.6.3/kernel/fs/jbd2:
total 76
-rw-r--r-- 1 root root 76080 2025-02-24 09:28:49.000000000 +0000 jbd2.ko

/lib/modules/5.6.3/kernel/fs/ksmbd:
total 248
-rw-r--r-- 1 root root 251384 2025-02-24 09:28:49.000000000 +0000 ksmbd.ko

/lib/modules/5.6.3/kernel/fs/nls:
total 28
-rw-r--r-- 1 root root 7760 2025-02-24 09:28:49.000000000 +0000 nls_base.ko
-rw-r--r-- 1 root root 6604 2025-02-24 09:28:49.000000000 +0000 nls_cp437.ko
-rw-r--r-- 1 root root 5020 2025-02-24 09:28:49.000000000 +0000 nls_iso8859-1.ko
-rw-r--r-- 1 root root 2740 2025-02-24 09:28:49.000000000 +0000 nls_utf8.ko

/lib/modules/5.6.3/kernel/fs/ntfs3:
total 212
-rw-r--r-- 1 root root 214996 2025-02-24 09:28:49.000000000 +0000 ntfs3.ko

/lib/modules/5.6.3/kernel/lib:
total 44
-rw-r--r-- 1 root root 4176 2025-02-24 09:28:49.000000000 +0000 asn1_decoder.ko
-rw-r--r-- 1 root root 3428 2025-02-24 09:28:49.000000000 +0000 crc-ccitt.ko
-rw-r--r-- 1 root root 2672 2025-02-24 09:28:49.000000000 +0000 crc16.ko
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 crypto
-rw-r--r-- 1 root root 4280 2025-02-24 09:28:49.000000000 +0000 oid_registry.ko
-rw-r--r-- 1 root root 3524 2025-02-24 09:28:49.000000000 +0000 ts_bm.ko
-rw-r--r-- 1 root root 3356 2025-02-24 09:28:50.000000000 +0000 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 64
-rw-r--r-- 1 root root  2336 2025-02-24 09:28:49.000000000 +0000 libarc4.ko
-rw-r--r-- 1 root root  7468 2025-02-24 09:28:49.000000000 +0000 libblake2s-generic.ko
-rw-r--r-- 1 root root  3700 2025-02-24 09:28:49.000000000 +0000 libblake2s.ko
-rw-r--r-- 1 root root  6912 2025-02-24 09:28:49.000000000 +0000 libchacha20poly1305.ko
-rw-r--r-- 1 root root 11612 2025-02-24 09:28:49.000000000 +0000 libcurve25519-generic.ko
-rw-r--r-- 1 root root  2024 2025-02-24 09:28:49.000000000 +0000 libcurve25519.ko
-rw-r--r-- 1 root root 20540 2025-02-24 09:28:49.000000000 +0000 libdes.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18400 2025-02-24 09:28:50.000000000 +0000 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14972 2025-02-24 09:28:50.000000000 +0000 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 44
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 802
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 8021q
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 ipv4
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 ipv6
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 mpls
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 rfkill
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 sched
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 unix
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 xfrm

/lib/modules/5.6.3/kernel/net/802:
total 12
-rw-r--r-- 1 root root 10304 2025-02-24 09:28:50.000000000 +0000 mrp.ko

/lib/modules/5.6.3/kernel/net/8021q:
total 28
-rw-r--r-- 1 root root 26100 2025-02-24 09:28:50.000000000 +0000 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 84
-rw-r--r-- 1 root root  2672 2025-02-24 09:28:50.000000000 +0000 ebt_802_3.ko
-rw-r--r-- 1 root root  3604 2025-02-24 09:28:50.000000000 +0000 ebt_arp.ko
-rw-r--r-- 1 root root  3168 2025-02-24 09:28:50.000000000 +0000 ebt_arpreply.ko
-rw-r--r-- 1 root root  3228 2025-02-24 09:28:50.000000000 +0000 ebt_dnat.ko
-rw-r--r-- 1 root root  3612 2025-02-24 09:28:50.000000000 +0000 ebt_ip.ko
-rw-r--r-- 1 root root  3844 2025-02-24 09:28:50.000000000 +0000 ebt_ip6.ko
-rw-r--r-- 1 root root  3516 2025-02-24 09:28:50.000000000 +0000 ebt_limit.ko
-rw-r--r-- 1 root root  2612 2025-02-24 09:28:50.000000000 +0000 ebt_mark.ko
-rw-r--r-- 1 root root  2544 2025-02-24 09:28:50.000000000 +0000 ebt_mark_m.ko
-rw-r--r-- 1 root root  2512 2025-02-24 09:28:50.000000000 +0000 ebt_pkttype.ko
-rw-r--r-- 1 root root  3068 2025-02-24 09:28:50.000000000 +0000 ebt_redirect.ko
-rw-r--r-- 1 root root  3056 2025-02-24 09:28:50.000000000 +0000 ebt_snat.ko
-rw-r--r-- 1 root root  3932 2025-02-24 09:28:50.000000000 +0000 ebt_stp.ko
-rw-r--r-- 1 root root  3020 2025-02-24 09:28:50.000000000 +0000 ebt_vlan.ko
-rw-r--r-- 1 root root  3140 2025-02-24 09:28:50.000000000 +0000 ebtable_filter.ko
-rw-r--r-- 1 root root  3140 2025-02-24 09:28:50.000000000 +0000 ebtable_nat.ko
-rw-r--r-- 1 root root 17244 2025-02-24 09:28:50.000000000 +0000 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 17220 2025-02-24 09:28:51.000000000 +0000 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2025-02-24 09:47:06.000000000 +0000 netfilter
-rw-r--r-- 1 root root 14828 2025-02-24 09:28:51.000000000 +0000 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 76
-rw-r--r-- 1 root root 16404 2025-02-24 09:28:51.000000000 +0000 ip_tables.ko
-rw-r--r-- 1 root root  3736 2025-02-24 09:28:51.000000000 +0000 ipt_REJECT.ko
-rw-r--r-- 1 root root  3788 2025-02-24 09:28:51.000000000 +0000 iptable_filter.ko
-rw-r--r-- 1 root root  3884 2025-02-24 09:28:51.000000000 +0000 iptable_mangle.ko
-rw-r--r-- 1 root root  3552 2025-02-24 09:28:51.000000000 +0000 iptable_nat.ko
-rw-r--r-- 1 root root  4120 2025-02-24 09:28:51.000000000 +0000 iptable_raw.ko
-rw-r--r-- 1 root root  3468 2025-02-24 09:28:51.000000000 +0000 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root  9444 2025-02-24 09:28:51.000000000 +0000 nf_nat_h323.ko
-rw-r--r-- 1 root root  5020 2025-02-24 09:28:51.000000000 +0000 nf_nat_pptp.ko
-rw-r--r-- 1 root root  4396 2025-02-24 09:28:51.000000000 +0000 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 476
-rw-r--r-- 1 root root   9008 2025-02-24 09:28:51.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root  11872 2025-02-24 09:28:51.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root   3760 2025-02-24 09:28:51.000000000 +0000 ip6_udp_tunnel.ko
-rw-r--r-- 1 root root 445124 2025-02-24 09:28:52.000000000 +0000 ipv6.ko
drwxr-xr-x 2 root root   4096 2025-02-24 09:47:06.000000000 +0000 netfilter
-rw-r--r-- 1 root root   4952 2025-02-24 09:28:52.000000000 +0000 tunnel6.ko

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 80
-rw-r--r-- 1 root root 16880 2025-02-24 09:28:52.000000000 +0000 ip6_tables.ko
-rw-r--r-- 1 root root  3984 2025-02-24 09:28:52.000000000 +0000 ip6t_NPT.ko
-rw-r--r-- 1 root root  3776 2025-02-24 09:28:52.000000000 +0000 ip6t_REJECT.ko
-rw-r--r-- 1 root root  2916 2025-02-24 09:28:52.000000000 +0000 ip6t_eui64.ko
-rw-r--r-- 1 root root  3180 2025-02-24 09:28:52.000000000 +0000 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  3792 2025-02-24 09:28:52.000000000 +0000 ip6table_filter.ko
-rw-r--r-- 1 root root  4120 2025-02-24 09:28:52.000000000 +0000 ip6table_mangle.ko
-rw-r--r-- 1 root root  3556 2025-02-24 09:28:52.000000000 +0000 ip6table_nat.ko
-rw-r--r-- 1 root root  4124 2025-02-24 09:28:52.000000000 +0000 ip6table_raw.ko
-rw-r--r-- 1 root root 10128 2025-02-24 09:28:52.000000000 +0000 nf_defrag_ipv6.ko
-rw-r--r-- 1 root root  5200 2025-02-24 09:28:52.000000000 +0000 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 52
-rw-r--r-- 1 root root  5256 2025-02-24 09:28:52.000000000 +0000 mpls_iptunnel.ko
-rw-r--r-- 1 root root 44960 2025-02-24 09:28:52.000000000 +0000 mpls_router.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 524
-rw-r--r-- 1 root root 113388 2025-02-24 09:28:52.000000000 +0000 nf_conntrack.ko
-rw-r--r-- 1 root root   9972 2025-02-24 09:28:53.000000000 +0000 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root  40432 2025-02-24 09:28:53.000000000 +0000 nf_conntrack_h323.ko
-rw-r--r-- 1 root root   8164 2025-02-24 09:28:53.000000000 +0000 nf_conntrack_irc.ko
-rw-r--r-- 1 root root  30084 2025-02-24 09:28:53.000000000 +0000 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root   7680 2025-02-24 09:28:53.000000000 +0000 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root   8160 2025-02-24 09:28:53.000000000 +0000 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root  26900 2025-02-24 09:28:53.000000000 +0000 nf_conntrack_sip.ko
-rw-r--r-- 1 root root   6860 2025-02-24 09:28:53.000000000 +0000 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root  29216 2025-02-24 09:28:53.000000000 +0000 nf_nat.ko
-rw-r--r-- 1 root root   4492 2025-02-24 09:28:53.000000000 +0000 nf_nat_ftp.ko
-rw-r--r-- 1 root root   4168 2025-02-24 09:28:53.000000000 +0000 nf_nat_irc.ko
-rw-r--r-- 1 root root   7608 2025-02-24 09:28:53.000000000 +0000 nf_nat_rtsp.ko
-rw-r--r-- 1 root root  11960 2025-02-24 09:28:53.000000000 +0000 nf_nat_sip.ko
-rw-r--r-- 1 root root   3060 2025-02-24 09:28:53.000000000 +0000 nf_nat_tftp.ko
-rw-r--r-- 1 root root   8716 2025-02-24 09:28:53.000000000 +0000 nfnetlink.ko
-rw-r--r-- 1 root root  25300 2025-02-24 09:28:53.000000000 +0000 x_tables.ko
-rw-r--r-- 1 root root   6700 2025-02-24 09:28:53.000000000 +0000 xt_CT.ko
-rw-r--r-- 1 root root   3980 2025-02-24 09:28:53.000000000 +0000 xt_DSCP.ko
-rw-r--r-- 1 root root   3468 2025-02-24 09:28:53.000000000 +0000 xt_HL.ko
-rw-r--r-- 1 root root   3444 2025-02-24 09:28:54.000000000 +0000 xt_MASQUERADE.ko
-rw-r--r-- 1 root root   3832 2025-02-24 09:28:54.000000000 +0000 xt_NETMAP.ko
-rw-r--r-- 1 root root   3132 2025-02-24 09:28:54.000000000 +0000 xt_REDIRECT.ko
-rw-r--r-- 1 root root   6208 2025-02-24 09:28:54.000000000 +0000 xt_TCPMSS.ko
-rw-r--r-- 1 root root   5180 2025-02-24 09:28:54.000000000 +0000 xt_addrtype.ko
-rw-r--r-- 1 root root   4276 2025-02-24 09:28:54.000000000 +0000 xt_connbytes.ko
-rw-r--r-- 1 root root   4512 2025-02-24 09:28:54.000000000 +0000 xt_connmark.ko
-rw-r--r-- 1 root root   5012 2025-02-24 09:28:54.000000000 +0000 xt_conntrack.ko
-rw-r--r-- 1 root root   3052 2025-02-24 09:28:54.000000000 +0000 xt_dscp.ko
-rw-r--r-- 1 root root  16820 2025-02-24 09:28:54.000000000 +0000 xt_hashlimit.ko
-rw-r--r-- 1 root root   3468 2025-02-24 09:28:54.000000000 +0000 xt_helper.ko
-rw-r--r-- 1 root root   2844 2025-02-24 09:28:54.000000000 +0000 xt_hl.ko
-rw-r--r-- 1 root root   2780 2025-02-24 09:28:54.000000000 +0000 xt_length.ko
-rw-r--r-- 1 root root   2664 2025-02-24 09:28:54.000000000 +0000 xt_mac.ko
-rw-r--r-- 1 root root   2944 2025-02-24 09:28:54.000000000 +0000 xt_mark.ko
-rw-r--r-- 1 root root   3448 2025-02-24 09:28:54.000000000 +0000 xt_multiport.ko
-rw-r--r-- 1 root root   5128 2025-02-24 09:28:54.000000000 +0000 xt_nat.ko
-rw-r--r-- 1 root root   3980 2025-02-24 09:28:54.000000000 +0000 xt_physdev.ko
-rw-r--r-- 1 root root   4488 2025-02-24 09:28:54.000000000 +0000 xt_policy.ko
-rw-r--r-- 1 root root   2536 2025-02-24 09:28:54.000000000 +0000 xt_realm.ko
-rw-r--r-- 1 root root   3080 2025-02-24 09:28:54.000000000 +0000 xt_statistic.ko
-rw-r--r-- 1 root root   2952 2025-02-24 09:28:54.000000000 +0000 xt_string.ko
-rw-r--r-- 1 root root   3144 2025-02-24 09:28:55.000000000 +0000 xt_tcpmss.ko
-rw-r--r-- 1 root root   4032 2025-02-24 09:28:55.000000000 +0000 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/rfkill:
total 16
-rw-r--r-- 1 root root 15268 2025-02-24 09:28:55.000000000 +0000 rfkill.ko

/lib/modules/5.6.3/kernel/net/sched:
total 88
-rw-r--r-- 1 root root 28564 2025-02-24 09:28:55.000000000 +0000 sch_cake.ko
-rw-r--r-- 1 root root  7508 2025-02-24 09:28:55.000000000 +0000 sch_codel.ko
-rw-r--r-- 1 root root 10116 2025-02-24 09:28:55.000000000 +0000 sch_fq_codel.ko
-rw-r--r-- 1 root root 25096 2025-02-24 09:28:55.000000000 +0000 sch_htb.ko
-rw-r--r-- 1 root root  9324 2025-02-24 09:28:55.000000000 +0000 sch_red.ko

/lib/modules/5.6.3/kernel/net/unix:
total 36
-rw-r--r-- 1 root root 33560 2025-02-24 09:28:55.000000000 +0000 unix.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 7076 2025-02-24 09:28:55.000000000 +0000 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 224
-rw-r--r-- 1 root root 10532 2025-02-24 09:24:53.000000000 +0000 btest.ko
-rw-r--r-- 1 root root  6580 2025-02-24 09:29:47.000000000 +0000 dot1x.ko
-rw-r--r-- 1 root root 47712 2025-02-24 09:25:20.000000000 +0000 flash.ko
-rw-r--r-- 1 root root  4592 2025-02-24 09:26:57.000000000 +0000 jiffies.ko
-rw-r--r-- 1 root root  3064 2025-02-24 09:25:08.000000000 +0000 ledgroup.ko
-rw-r--r-- 1 root root 11360 2025-02-24 09:24:47.000000000 +0000 logring.ko
-rw-r--r-- 1 root root 22980 2025-02-24 09:25:44.000000000 +0000 mesh.ko
-rw-r--r-- 1 root root  8628 2025-02-24 09:24:45.000000000 +0000 panics.ko
-rw-r--r-- 1 root root 12496 2025-02-24 09:24:48.000000000 +0000 poe_simple.ko
-rw-r--r-- 1 root root  6804 2025-02-24 09:26:34.000000000 +0000 rb.ko
-rw-r--r-- 1 root root  5940 2025-02-24 09:27:05.000000000 +0000 romon.ko
-rw-r--r-- 1 root root  5404 2025-02-24 09:25:23.000000000 +0000 snif.ko
-rw-r--r-- 1 root root 27220 2025-02-24 09:25:43.000000000 +0000 traffic_gen.ko
-rw-r--r-- 1 root root 19476 2025-02-24 09:25:34.000000000 +0000 ts.ko
-rw-r--r-- 1 root root  6552 2025-02-24 09:25:27.000000000 +0000 ulog.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-02-24 09:47:06.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 sched

/lib/modules/5.6.3/net/bridge:
total 192
-rw-r--r-- 1 root root 167848 2025-02-24 09:28:58.000000000 +0000 bridge2.ko
-rw-r--r-- 1 root root  17596 2025-02-24 09:28:57.000000000 +0000 bridge2_netfilter.ko
-rw-r--r-- 1 root root   2496 2025-02-24 09:25:21.000000000 +0000 ebt_snif.ko
-rw-r--r-- 1 root root   2728 2025-02-24 09:25:25.000000000 +0000 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 28
-rw-r--r-- 1 root root 3356 2025-02-24 09:24:52.000000000 +0000 ipt_SAME.ko
-rw-r--r-- 1 root root 6252 2025-02-24 09:24:53.000000000 +0000 ipt_TARPIT.ko
-rw-r--r-- 1 root root 4364 2025-02-24 09:24:52.000000000 +0000 ipt_psd.ko
-rw-r--r-- 1 root root 2596 2025-02-24 09:25:21.000000000 +0000 ipt_snif.ko
-rw-r--r-- 1 root root 3072 2025-02-24 09:25:25.000000000 +0000 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 60
-rw-r--r-- 1 root root  2060 2025-02-24 09:26:11.000000000 +0000 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  2060 2025-02-24 09:26:11.000000000 +0000 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 10796 2025-02-24 09:26:15.000000000 +0000 xt_ein.ko
-rw-r--r-- 1 root root 12392 2025-02-24 09:24:57.000000000 +0000 xt_layer7.ko
-rw-r--r-- 1 root root 16772 2025-02-24 09:26:15.000000000 +0000 xt_misc.ko
-rw-r--r-- 1 root root  3684 2025-02-24 09:25:04.000000000 +0000 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 76
-rw-r--r-- 1 root root  5212 2025-02-24 09:25:08.000000000 +0000 cls_fw.ko
-rw-r--r-- 1 root root 11756 2025-02-24 09:25:11.000000000 +0000 cls_linear.ko
-rw-r--r-- 1 root root 12836 2025-02-24 09:25:31.000000000 +0000 proto_agr.ko
-rw-r--r-- 1 root root 18652 2025-02-24 09:25:31.000000000 +0000 sch_agr.ko
-rw-r--r-- 1 root root 10712 2025-02-24 09:24:55.000000000 +0000 sch_pcq.ko
-rw-r--r-- 1 root root  8176 2025-02-24 09:27:42.000000000 +0000 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2025-02-24 09:47:06.000000000 +0000 bin
drwxr-xr-x 11 root root 4096 2025-02-24 09:47:06.000000000 +0000 etc
drwxr-xr-x  5 root root 4096 2025-02-24 09:47:06.000000000 +0000 lib
lrwxrwxrwx  1 root root    8 2025-02-24 09:47:07.000000000 +0000 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2025-02-24 09:47:07.000000000 +0000 store -> /rw/store

/nova/bin:
total 10964
-rwxr-xr-x 1 root root   23736 2025-02-24 08:51:18.000000000 +0000 agent
-rwxr-xr-x 1 root root   12568 2025-02-24 08:51:16.000000000 +0000 arpd
-rwxr-xr-x 1 root root   17104 2025-02-24 08:53:20.000000000 +0000 backup
-rwxr-xr-x 1 root root  264828 2025-02-24 08:55:46.000000000 +0000 bridge2
-rwxr-xr-x 1 root root   76048 2025-02-24 08:53:30.000000000 +0000 btest
-rwxr-xr-x 1 root root   55672 2025-02-24 08:51:59.000000000 +0000 bth
-rwxr-xr-x 1 root root 1025428 2025-02-24 08:55:13.000000000 +0000 cerm
lrwxrwxrwx 1 root root       4 2025-02-24 08:55:13.000000000 +0000 cerm-worker -> cerm
-rwxr-xr-x 1 root root  172136 2025-02-24 08:55:07.000000000 +0000 cloud
-rwxr-xr-x 1 root root   92096 2025-02-24 08:53:21.000000000 +0000 crossfig
-rwxr-xr-x 1 root root   65772 2025-02-24 08:55:49.000000000 +0000 detnet
-rwxr-xr-x 1 root root   80612 2025-02-24 08:52:00.000000000 +0000 discover
-rwxr-xr-x 1 root root  327228 2025-02-24 08:55:14.000000000 +0000 diskd
-rwxr-xr-x 1 root root  111228 2025-02-24 08:55:56.000000000 +0000 dot1x
-rwxr-xr-x 1 root root   39920 2025-02-24 08:53:21.000000000 +0000 email
-rwxr-xr-x 1 root root  113148 2025-02-24 08:54:33.000000000 +0000 fileman
-rwxr-xr-x 1 root root   34916 2025-02-24 08:51:18.000000000 +0000 ftpd
-rwxr-xr-x 1 root root  155840 2025-02-24 08:52:14.000000000 +0000 graphing
-rwxr-xr-x 1 root root    4440 2025-02-24 08:54:21.000000000 +0000 havecardbus
-rwxr-xr-x 1 root root   64016 2025-02-24 08:53:08.000000000 +0000 igmpproxy
-rwxr-xr-x 1 root root   82384 2025-02-24 08:54:01.000000000 +0000 installer
-rwxr-xr-x 1 root root   28976 2025-02-24 08:54:13.000000000 +0000 ippool
-rwxr-xr-x 1 root root   55376 2025-02-24 08:53:35.000000000 +0000 keyman
-rwxr-xr-x 1 root root   47376 2025-02-24 08:51:56.000000000 +0000 kidcontrol
-rwxr-xr-x 1 root root  245604 2025-02-24 08:52:22.000000000 +0000 lcdstat
-rwxr-xr-x 1 root root   73372 2025-02-24 08:54:06.000000000 +0000 led
-rwxr-xr-x 1 root root  120960 2025-02-24 08:54:42.000000000 +0000 letsencrypt
-rwxr-xr-x 1 root root   85372 2025-02-24 08:53:40.000000000 +0000 loader
-rwxr-xr-x 1 root root   80560 2025-02-24 08:51:27.000000000 +0000 log
-rwxr-xr-x 1 root root  166736 2025-02-24 08:56:48.000000000 +0000 login
-rwxr-xr-x 1 root root   54284 2025-02-24 08:51:19.000000000 +0000 logmaker
-rwxr-xr-x 1 root root   22348 2025-02-24 08:51:16.000000000 +0000 macping
-rwxr-xr-x 1 root root   37048 2025-02-24 08:53:37.000000000 +0000 mactel
-rwxr-xr-x 1 root root   23016 2025-02-24 08:51:17.000000000 +0000 mepty
-rwxr-xr-x 1 root root   85372 2025-02-24 08:52:04.000000000 +0000 mesh
-rwxr-xr-x 1 root root   67432 2025-02-24 08:57:07.000000000 +0000 mode
lrwxrwxrwx 1 root root       7 2025-02-24 08:54:21.000000000 +0000 modprobed -> moduler
-rwxr-xr-x 1 root root   80444 2025-02-24 08:54:21.000000000 +0000 moduler
-rwxr-xr-x 1 root root   77240 2025-02-24 08:55:25.000000000 +0000 mproxy
-rwxr-xr-x 1 root root   60772 2025-02-24 08:53:33.000000000 +0000 mtget
-rwxr-xr-x 1 root root   48704 2025-02-24 08:51:56.000000000 +0000 natpmp
-rwxr-xr-x 1 root root 1690548 2025-02-24 08:59:17.000000000 +0000 net
-rwxr-xr-x 1 root root   71888 2025-02-24 08:54:11.000000000 +0000 ntp
-rwxr-xr-x 1 root root    6152 2025-02-24 08:51:13.000000000 +0000 panicsl
-rwxr-xr-x 1 root root  755560 2025-02-24 08:57:04.000000000 +0000 parser
-rwxr-xr-x 1 root root   35320 2025-02-24 08:51:37.000000000 +0000 partd
-rwxr-xr-x 1 root root   40292 2025-02-24 08:51:22.000000000 +0000 ping
-rwxr-xr-x 1 root root   48828 2025-02-24 08:54:03.000000000 +0000 portman
-rwxr-xr-x 1 root root   33400 2025-02-24 09:30:21.000000000 +0000 profiler
-rwxr-xr-x 1 root root   86280 2025-02-24 08:54:41.000000000 +0000 ptp
-rwxr-xr-x 1 root root  153980 2025-02-24 08:51:25.000000000 +0000 quickset
-rwxr-xr-x 1 root root   51312 2025-02-24 08:54:26.000000000 +0000 radius
-rwxr-xr-x 1 root root  163564 2025-02-24 08:55:00.000000000 +0000 resolver
-rwxr-xr-x 1 root root   10224 2025-02-24 08:54:51.000000000 +0000 resolver_ctl
-rwxr-xr-x 1 root root   95276 2025-02-24 08:54:31.000000000 +0000 romon
-rwxr-xr-x 1 root root 1764652 2025-02-24 08:59:59.000000000 +0000 route
-rwxr-xr-x 1 root root   16136 2025-02-24 08:53:41.000000000 +0000 rtrace
-rwxr-xr-x 1 root root   28148 2025-02-24 08:53:58.000000000 +0000 sermgr
-rwxr-xr-x 1 root root   33632 2025-02-24 08:51:38.000000000 +0000 sertcp
-rwxr-xr-x 1 root root   68860 2025-02-24 08:51:47.000000000 +0000 sniffer
-rwxr-xr-x 1 root root  212040 2025-02-24 08:55:33.000000000 +0000 snmp
-rwxr-xr-x 1 root root   66180 2025-02-24 08:52:01.000000000 +0000 socks
-rwxr-xr-x 1 root root  121072 2025-02-24 08:55:13.000000000 +0000 ssld
-rwxr-xr-x 1 root root   29212 2025-02-24 08:53:25.000000000 +0000 sstore
-rwxr-xr-x 1 root root  326320 2025-02-24 08:57:18.000000000 +0000 sys2
-rwxr-xr-x 1 root root   20936 2025-02-24 08:51:18.000000000 +0000 telnet
-rwxr-xr-x 1 root root   10008 2025-02-24 08:51:13.000000000 +0000 telser
-rwxr-xr-x 1 root root   37108 2025-02-24 08:51:50.000000000 +0000 tftpd
-rwxr-xr-x 1 root root   28788 2025-02-24 08:51:21.000000000 +0000 traceroute
-rwxr-xr-x 1 root root  108832 2025-02-24 08:51:56.000000000 +0000 trafficgen
-rwxr-xr-x 1 root root   22856 2025-02-24 08:51:34.000000000 +0000 trafflow
-rwxr-xr-x 1 root root   23824 2025-02-24 08:51:18.000000000 +0000 undo
-rwxr-xr-x 1 root root  149884 2025-02-24 08:52:09.000000000 +0000 upnp
-rwxr-xr-x 1 root root   82128 2025-02-24 08:54:26.000000000 +0000 user
-rwxr-xr-x 1 root root   94016 2025-02-24 08:54:18.000000000 +0000 vrrp
-rwxr-xr-x 1 root root   30704 2025-02-24 08:51:46.000000000 +0000 watchdog
-rwxr-xr-x 1 root root  154512 2025-02-24 08:54:51.000000000 +0000 wproxy
-rwxr-xr-x 1 root root  125780 2025-02-24 08:55:21.000000000 +0000 www

/nova/etc:
total 52
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 leds
-rwxr-xr-x 1 root root 1242 2025-02-24 08:46:24.000000000 +0000 lognames
-rwxr-xr-x 1 root root   10 2025-02-24 08:46:24.000000000 +0000 logo
-rwxr-xr-x 1 root root    1 2025-02-24 08:46:24.000000000 +0000 manual-url
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 pciinfo
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 services
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 system_names
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 upnp
-rwxr-xr-x 1 root root   26 2025-02-24 08:46:24.000000000 +0000 url
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 user
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 www

/nova/etc/leds:
total 124
-rwxr-xr-x 1 root root 126901 2025-02-24 08:50:30.000000000 +0000 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2025-02-24 08:50:30.000000000 +0000 system.x3

/nova/etc/pciinfo:
total 156
-rwxr-xr-x 1 root root 159575 2025-02-24 08:50:30.000000000 +0000 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-02-24 08:50:30.000000000 +0000 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 992 2025-02-24 08:50:30.000000000 +0000 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2025-02-24 08:50:30.000000000 +0000 system.x3

/nova/etc/upnp:
total 64
-rwxr-xr-x 1 root root  3378 2025-02-24 08:46:26.000000000 +0000 connectionmanager.xml
-rwxr-xr-x 1 root root  5684 2025-02-24 08:46:26.000000000 +0000 contentdirectory.xml
-rwxr-xr-x 1 root root  8764 2025-02-24 08:46:26.000000000 +0000 logo120.png
-rwxr-xr-x 1 root root   930 2025-02-24 08:46:26.000000000 +0000 logo16.gif
-rwxr-xr-x 1 root root  1173 2025-02-24 08:46:26.000000000 +0000 logo32.gif
-rwxr-xr-x 1 root root  1504 2025-02-24 08:46:26.000000000 +0000 logo48.gif
-rwxr-xr-x 1 root root   735 2025-02-24 08:46:26.000000000 +0000 osinfo.xml
-rwxr-xr-x 1 root root  5928 2025-02-24 08:46:26.000000000 +0000 wancommonifcfg.xml
-rwxr-xr-x 1 root root 13444 2025-02-24 08:46:26.000000000 +0000 wanipconn.xml

/nova/etc/user:
total 4
-rwxr-xr-x 1 root root 2230 2025-02-24 08:50:30.000000000 +0000 system.x3

/nova/etc/www:
total 4
-rwxr-xr-x 1 root root 2458 2025-02-24 08:50:30.000000000 +0000 system.x3

/nova/lib:
total 16
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 defconf
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:06.000000000 +0000 profiler
-rwxr-xr-x 1 root root 4085 2025-02-24 08:46:25.000000000 +0000 xmlnames2

/nova/lib/console:
total 2192
-rwxr-xr-x 1 root root 2233228 2025-02-24 08:57:27.000000000 +0000 1073741824.mem
-rwxr-xr-x 1 root root     510 2025-02-24 08:46:24.000000000 +0000 logo.txt
-rwxr-xr-x 1 root root      18 2025-02-24 08:46:24.000000000 +0000 sublogo.txt

/nova/lib/defconf:
total 100
-rwxr-xr-x 1 root root   567 2025-02-24 08:46:24.000000000 +0000 defconf
-rwxr-xr-x 1 root root  4995 2025-02-24 08:46:24.000000000 +0000 defconf-caps
-rwxr-xr-x 1 root root  3700 2025-02-24 08:46:24.000000000 +0000 defconf-wps-sync
-rwxr-xr-x 1 root root 85178 2025-02-24 08:46:24.000000000 +0000 get-custom-defconf

/nova/lib/profiler:
total 16
-rwxr-xr-x 1 root root 14724 2025-02-24 09:30:20.000000000 +0000 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 480
-rwxr-xr-x 1 root root 395976 2025-02-24 09:31:09.000000000 +0000 mke2fs
-rwxr-xr-x 1 root root  24892 2025-02-24 08:50:27.000000000 +0000 nandfix
-rwxr-xr-x 1 root root  64264 2025-02-24 08:53:25.000000000 +0000 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2025-02-24 09:47:07.000000000 +0000 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 deinstall
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 lock
lrwxrwxrwx 1 root root    8 2025-02-24 09:47:07.000000000 +0000 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2025-02-24 09:47:07.000000000 +0000 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2025-02-24 09:47:07.000000000 +0000 post
lrwxrwxrwx 1 root root    7 2025-02-24 09:47:07.000000000 +0000 run -> /rw/run
lrwxrwxrwx 1 root root    4 2025-02-24 09:47:07.000000000 +0000 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

