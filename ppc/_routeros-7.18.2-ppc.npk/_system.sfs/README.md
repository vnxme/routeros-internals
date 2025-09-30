### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 15244732 bytes, 2529 inodes, blocksize: 262144 bytes, created: Tue Mar 11 13:00:59 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 bin
drwxr-xr-x 9 root root 4096 2025-03-11 13:00:48.000000000 +0000 bndl
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 boot
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 dev
lrwxrwxrwx 1 root root   11 2025-03-11 13:00:48.000000000 +0000 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 etc
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 flash
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 nova
lrwxrwxrwx 1 root root    9 2025-03-11 13:00:48.000000000 +0000 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 proc
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ram
lrwxrwxrwx 1 root root    9 2025-03-11 13:00:48.000000000 +0000 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 sbin
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 sys
lrwxrwxrwx 1 root root    7 2025-03-11 13:00:48.000000000 +0000 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 var

/bin:
total 468
lrwxrwxrwx 1 root root     21 2025-03-11 13:00:48.000000000 +0000 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root  66860 2025-03-11 12:05:47.000000000 +0000 catlog
lrwxrwxrwx 1 root root     15 2025-03-11 13:00:48.000000000 +0000 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root     15 2025-03-11 13:00:48.000000000 +0000 login -> /nova/bin/login
-rwxr-xr-x 1 root root  72684 2025-03-11 12:43:15.000000000 +0000 mkexfatfs
-rwxr-xr-x 1 root root  66656 2025-03-11 12:05:46.000000000 +0000 pakp
lrwxrwxrwx 1 root root     21 2025-03-11 13:00:48.000000000 +0000 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root     15 2025-03-11 13:00:48.000000000 +0000 shell -> /nova/bin/login
-rwxr-xr-x 1 root root 264808 2025-03-11 12:43:56.000000000 +0000 sshfs

/bndl:
total 28
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 advanced-tools
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 dhcp
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 hotspot
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv6
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 ppp
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 security
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 wifi

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 webfig

/bndl/advanced-tools/home/web/webfig:
total 8
-rw-r--r-- 1 root root 2360 2025-03-11 12:45:24.000000000 +0000 advtool-b6a18e54d46e.jg.gz
-rwxr-xr-x 1 root root  107 2025-03-11 12:45:24.000000000 +0000 advtool.info
lrwxrwxrwx 1 root root   26 2025-03-11 12:45:24.000000000 +0000 advtool.jg.gz -> advtool-b6a18e54d46e.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib

/bndl/advanced-tools/nova/bin:
total 540
-rwxr-xr-x 1 root root  67172 2025-03-11 12:44:42.000000000 +0000 ddns
-rwxr-xr-x 1 root root  66812 2025-03-11 12:44:25.000000000 +0000 fping
-rwxr-xr-x 1 root root  66976 2025-03-11 12:44:59.000000000 +0000 macscan
-rwxr-xr-x 1 root root 133004 2025-03-11 12:46:43.000000000 +0000 netwatch
-rwxr-xr-x 1 root root  66860 2025-03-11 12:44:31.000000000 +0000 pspeed
-rwxr-xr-x 1 root root  67200 2025-03-11 12:45:17.000000000 +0000 scanner
-rwxr-xr-x 1 root root  66824 2025-03-11 12:45:25.000000000 +0000 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 console

/bndl/advanced-tools/nova/lib/console:
total 28
-rwxr-xr-x 1 root root 24705 2025-03-11 12:44:52.000000000 +0000 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 home
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 webfig

/bndl/dhcp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4408 2025-03-11 12:45:17.000000000 +0000 dhcp-b0bb4825d0fa.jg.gz
-rwxr-xr-x 1 root root  101 2025-03-11 12:45:18.000000000 +0000 dhcp.info
lrwxrwxrwx 1 root root   23 2025-03-11 12:45:18.000000000 +0000 dhcp.jg.gz -> dhcp-b0bb4825d0fa.jg.gz

/bndl/dhcp/lib:
total 132
-rwxr-xr-x 1 root root 133220 2025-03-11 12:45:04.000000000 +0000 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib

/bndl/dhcp/nova/bin:
total 392
-rwxr-xr-x 1 root root 264832 2025-03-11 12:47:38.000000000 +0000 dhcp
-rwxr-xr-x 1 root root 133376 2025-03-11 12:46:51.000000000 +0000 dhcpclient

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 console

/bndl/dhcp/nova/lib/console:
total 108
-rwxr-xr-x 1 root root 109639 2025-03-11 12:44:35.000000000 +0000 1128267776.mem

/bndl/hotspot:
total 12
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 nova

/bndl/hotspot/home:
total 4
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 web

/bndl/hotspot/home/web:
total 8
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 hotspot
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 webfig

/bndl/hotspot/home/web/hotspot:
total 68
-rw-r--r-- 1 root root 1094 2025-03-11 11:58:04.000000000 +0000 alogin.html
-rw-r--r-- 1 root root  311 2025-03-11 11:58:04.000000000 +0000 api.json
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 css
-rw-r--r-- 1 root root  640 2025-03-11 11:58:04.000000000 +0000 error.html
-rw-r--r-- 1 root root 3719 2025-03-11 11:58:04.000000000 +0000 errors.txt
-rw-r--r-- 1 root root  903 2025-03-11 11:58:04.000000000 +0000 favicon.ico
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 img
-rw-r--r-- 1 root root 4423 2025-03-11 11:58:04.000000000 +0000 login.html
-rw-r--r-- 1 root root 1459 2025-03-11 11:58:04.000000000 +0000 logout.html
-rw-r--r-- 1 root root 7218 2025-03-11 11:58:04.000000000 +0000 md5.js
-rw-r--r-- 1 root root 1204 2025-03-11 11:58:04.000000000 +0000 radvert.html
-rw-r--r-- 1 root root  330 2025-03-11 11:58:04.000000000 +0000 redirect.html
-rw-r--r-- 1 root root  877 2025-03-11 11:58:04.000000000 +0000 rlogin.html
-rw-r--r-- 1 root root 2855 2025-03-11 11:58:04.000000000 +0000 status.html
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 xml

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
drwxr-xr-x 6 root root 4096 2025-03-11 13:00:48.000000000 +0000 modules

/bndl/hotspot/lib/modules:
total 16
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 5.6.3
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 5.6.3-440
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 5.6.3-e500
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 5.6.3-smp

/bndl/hotspot/lib/modules/5.6.3:
total 8
-rw-r--r-- 1 root root   13 2025-03-11 12:47:23.000000000 +0000 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/bndl/hotspot/lib/modules/5.6.3/net:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv4

/bndl/hotspot/lib/modules/5.6.3/net/ipv4:
total 48
-rw-r--r-- 1 root root 46840 2025-03-11 12:46:30.000000000 +0000 unicl.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:46:30.000000000 +0000 unicl.ko.plt

/bndl/hotspot/lib/modules/5.6.3-440:
total 8
-rw-r--r-- 1 root root   13 2025-03-11 12:47:25.000000000 +0000 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/bndl/hotspot/lib/modules/5.6.3-440/net:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv4

/bndl/hotspot/lib/modules/5.6.3-440/net/ipv4:
total 48
-rw-r--r-- 1 root root 46840 2025-03-11 12:46:30.000000000 +0000 unicl.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:46:30.000000000 +0000 unicl.ko.plt

/bndl/hotspot/lib/modules/5.6.3-e500:
total 8
-rw-r--r-- 1 root root   13 2025-03-11 12:47:27.000000000 +0000 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/bndl/hotspot/lib/modules/5.6.3-e500/net:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv4

/bndl/hotspot/lib/modules/5.6.3-e500/net/ipv4:
total 48
-rw-r--r-- 1 root root 46840 2025-03-11 12:46:31.000000000 +0000 unicl.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:46:31.000000000 +0000 unicl.ko.plt

/bndl/hotspot/lib/modules/5.6.3-smp:
total 8
-rw-r--r-- 1 root root   13 2025-03-11 12:47:29.000000000 +0000 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/bndl/hotspot/lib/modules/5.6.3-smp/net:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv4

/bndl/hotspot/lib/modules/5.6.3-smp/net/ipv4:
total 48
-rw-r--r-- 1 root root 47084 2025-03-11 12:46:31.000000000 +0000 unicl.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:46:31.000000000 +0000 unicl.ko.plt

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib

/bndl/hotspot/nova/bin:
total 324
-rwxr-xr-x 1 root root 330308 2025-03-11 12:46:58.000000000 +0000 hotspot

/bndl/hotspot/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 radius

/bndl/hotspot/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-03-11 12:46:58.000000000 +0000 hotspot.x3

/bndl/hotspot/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 console

/bndl/hotspot/nova/lib/console:
total 84
-rwxr-xr-x 1 root root 82346 2025-03-11 12:46:22.000000000 +0000 1132462080.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 webfig

/bndl/ipv6/home/web/webfig:
total 12
-rw-r--r-- 1 root root 7911 2025-03-11 12:45:36.000000000 +0000 ipv6-932ca749791f.jg.gz
-rwxr-xr-x 1 root root  101 2025-03-11 12:45:36.000000000 +0000 ipv6.info
lrwxrwxrwx 1 root root   23 2025-03-11 12:45:36.000000000 +0000 ipv6.jg.gz -> ipv6-932ca749791f.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib

/bndl/ipv6/nova/bin:
total 136
-rwxr-xr-x 1 root root 67112 2025-03-11 12:45:50.000000000 +0000 ippool6
-rwxr-xr-x 1 root root 67312 2025-03-11 12:45:00.000000000 +0000 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 route

/bndl/ipv6/nova/lib/console:
total 184
-rwxr-xr-x 1 root root 186728 2025-03-11 12:45:16.000000000 +0000 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2025-03-11 11:58:04.000000000 +0000 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 webfig

/bndl/ppp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 6450 2025-03-11 12:46:06.000000000 +0000 ppp-f833b7b4927e.jg.gz
-rwxr-xr-x 1 root root   99 2025-03-11 12:46:06.000000000 +0000 ppp.info
lrwxrwxrwx 1 root root   22 2025-03-11 12:46:06.000000000 +0000 ppp.jg.gz -> ppp-f833b7b4927e.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 6 root root 4096 2025-03-11 13:00:48.000000000 +0000 modules

/bndl/ppp/lib/modules:
total 16
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 5.6.3
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 5.6.3-440
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 5.6.3-e500
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 5.6.3-smp

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 misc
-rw-r--r-- 1 root root  293 2025-03-11 12:52:16.000000000 +0000 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 112
-rw-r--r-- 1 root root 12804 2025-03-11 12:51:54.000000000 +0000 ppp_async.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 ppp_async.ko.plt
-rw-r--r-- 1 root root  7788 2025-03-11 12:51:54.000000000 +0000 ppp_deflate.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 ppp_deflate.ko.plt
-rw-r--r-- 1 root root 37828 2025-03-11 12:51:54.000000000 +0000 ppp_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 ppp_generic.ko.plt
-rw-r--r-- 1 root root  9428 2025-03-11 12:51:54.000000000 +0000 ppp_mppe.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 ppp_mppe.ko.plt
-rw-r--r-- 1 root root 10920 2025-03-11 12:51:54.000000000 +0000 ppp_synctty.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 ppp_synctty.ko.plt
-rw-r--r-- 1 root root 14036 2025-03-11 12:51:54.000000000 +0000 pppoe.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 pppoe.ko.plt
-rw-r--r-- 1 root root  4648 2025-03-11 12:51:54.000000000 +0000 pppox.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 pppox.ko.plt

/bndl/ppp/lib/modules/5.6.3/misc:
total 100
-rw-r--r-- 1 root root 38196 2025-03-11 12:46:28.000000000 +0000 ovpn.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:46:28.000000000 +0000 ovpn.ko.plt
-rw-r--r-- 1 root root  6292 2025-03-11 12:47:27.000000000 +0000 pppoefp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:47:27.000000000 +0000 pppoefp.ko.plt
-rw-r--r-- 1 root root 49272 2025-03-11 12:47:27.000000000 +0000 sstp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:47:27.000000000 +0000 sstp.ko.plt

/bndl/ppp/lib/modules/5.6.3/net:
total 64
-rw-r--r-- 1 root root 51544 2025-03-11 12:45:26.000000000 +0000 l2tp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:45:26.000000000 +0000 l2tp.ko.plt
-rw-r--r-- 1 root root 11172 2025-03-11 12:45:01.000000000 +0000 pptp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:45:01.000000000 +0000 pptp.ko.plt

/bndl/ppp/lib/modules/5.6.3-440:
total 16
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 misc
-rw-r--r-- 1 root root  293 2025-03-11 12:52:18.000000000 +0000 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3-440/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 drivers

/bndl/ppp/lib/modules/5.6.3-440/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3-440/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ppp

/bndl/ppp/lib/modules/5.6.3-440/kernel/drivers/net/ppp:
total 112
-rw-r--r-- 1 root root 12772 2025-03-11 12:51:54.000000000 +0000 ppp_async.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 ppp_async.ko.plt
-rw-r--r-- 1 root root  7812 2025-03-11 12:51:54.000000000 +0000 ppp_deflate.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 ppp_deflate.ko.plt
-rw-r--r-- 1 root root 37828 2025-03-11 12:51:54.000000000 +0000 ppp_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 ppp_generic.ko.plt
-rw-r--r-- 1 root root  9428 2025-03-11 12:51:54.000000000 +0000 ppp_mppe.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 ppp_mppe.ko.plt
-rw-r--r-- 1 root root 10888 2025-03-11 12:51:54.000000000 +0000 ppp_synctty.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 ppp_synctty.ko.plt
-rw-r--r-- 1 root root 14036 2025-03-11 12:51:54.000000000 +0000 pppoe.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 pppoe.ko.plt
-rw-r--r-- 1 root root  4648 2025-03-11 12:51:54.000000000 +0000 pppox.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 pppox.ko.plt

/bndl/ppp/lib/modules/5.6.3-440/misc:
total 100
-rw-r--r-- 1 root root 38228 2025-03-11 12:46:28.000000000 +0000 ovpn.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:46:28.000000000 +0000 ovpn.ko.plt
-rw-r--r-- 1 root root  6324 2025-03-11 12:47:27.000000000 +0000 pppoefp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:47:27.000000000 +0000 pppoefp.ko.plt
-rw-r--r-- 1 root root 49304 2025-03-11 12:47:27.000000000 +0000 sstp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:47:27.000000000 +0000 sstp.ko.plt

/bndl/ppp/lib/modules/5.6.3-440/net:
total 64
-rw-r--r-- 1 root root 51568 2025-03-11 12:45:26.000000000 +0000 l2tp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:45:26.000000000 +0000 l2tp.ko.plt
-rw-r--r-- 1 root root 11172 2025-03-11 12:45:01.000000000 +0000 pptp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:45:01.000000000 +0000 pptp.ko.plt

/bndl/ppp/lib/modules/5.6.3-e500:
total 16
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 misc
-rw-r--r-- 1 root root  293 2025-03-11 12:52:21.000000000 +0000 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3-e500/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 drivers

/bndl/ppp/lib/modules/5.6.3-e500/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3-e500/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ppp

/bndl/ppp/lib/modules/5.6.3-e500/kernel/drivers/net/ppp:
total 112
-rw-r--r-- 1 root root 12992 2025-03-11 12:51:54.000000000 +0000 ppp_async.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 ppp_async.ko.plt
-rw-r--r-- 1 root root  7820 2025-03-11 12:51:54.000000000 +0000 ppp_deflate.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 ppp_deflate.ko.plt
-rw-r--r-- 1 root root 38172 2025-03-11 12:51:54.000000000 +0000 ppp_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 ppp_generic.ko.plt
-rw-r--r-- 1 root root  9428 2025-03-11 12:51:54.000000000 +0000 ppp_mppe.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 ppp_mppe.ko.plt
-rw-r--r-- 1 root root 11108 2025-03-11 12:51:54.000000000 +0000 ppp_synctty.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 ppp_synctty.ko.plt
-rw-r--r-- 1 root root 14200 2025-03-11 12:51:55.000000000 +0000 pppoe.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:55.000000000 +0000 pppoe.ko.plt
-rw-r--r-- 1 root root  4648 2025-03-11 12:51:55.000000000 +0000 pppox.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:54.000000000 +0000 pppox.ko.plt

/bndl/ppp/lib/modules/5.6.3-e500/misc:
total 100
-rw-r--r-- 1 root root 38228 2025-03-11 12:46:28.000000000 +0000 ovpn.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:46:28.000000000 +0000 ovpn.ko.plt
-rw-r--r-- 1 root root  6324 2025-03-11 12:47:27.000000000 +0000 pppoefp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:47:27.000000000 +0000 pppoefp.ko.plt
-rw-r--r-- 1 root root 49304 2025-03-11 12:47:27.000000000 +0000 sstp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:47:27.000000000 +0000 sstp.ko.plt

/bndl/ppp/lib/modules/5.6.3-e500/net:
total 64
-rw-r--r-- 1 root root 51544 2025-03-11 12:45:27.000000000 +0000 l2tp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:45:27.000000000 +0000 l2tp.ko.plt
-rw-r--r-- 1 root root 11172 2025-03-11 12:45:02.000000000 +0000 pptp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:45:02.000000000 +0000 pptp.ko.plt

/bndl/ppp/lib/modules/5.6.3-smp:
total 16
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 misc
-rw-r--r-- 1 root root  293 2025-03-11 12:52:23.000000000 +0000 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3-smp/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 drivers

/bndl/ppp/lib/modules/5.6.3-smp/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3-smp/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ppp

/bndl/ppp/lib/modules/5.6.3-smp/kernel/drivers/net/ppp:
total 112
-rw-r--r-- 1 root root 13696 2025-03-11 12:51:55.000000000 +0000 ppp_async.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:55.000000000 +0000 ppp_async.ko.plt
-rw-r--r-- 1 root root  7852 2025-03-11 12:51:55.000000000 +0000 ppp_deflate.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:55.000000000 +0000 ppp_deflate.ko.plt
-rw-r--r-- 1 root root 38644 2025-03-11 12:51:55.000000000 +0000 ppp_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:55.000000000 +0000 ppp_generic.ko.plt
-rw-r--r-- 1 root root  9256 2025-03-11 12:51:55.000000000 +0000 ppp_mppe.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:55.000000000 +0000 ppp_mppe.ko.plt
-rw-r--r-- 1 root root 11864 2025-03-11 12:51:55.000000000 +0000 ppp_synctty.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:55.000000000 +0000 ppp_synctty.ko.plt
-rw-r--r-- 1 root root 14560 2025-03-11 12:51:55.000000000 +0000 pppoe.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:55.000000000 +0000 pppoe.ko.plt
-rw-r--r-- 1 root root  4680 2025-03-11 12:51:55.000000000 +0000 pppox.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:51:55.000000000 +0000 pppox.ko.plt

/bndl/ppp/lib/modules/5.6.3-smp/misc:
total 100
-rw-r--r-- 1 root root 39476 2025-03-11 12:46:28.000000000 +0000 ovpn.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:46:28.000000000 +0000 ovpn.ko.plt
-rw-r--r-- 1 root root  6500 2025-03-11 12:47:27.000000000 +0000 pppoefp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:47:27.000000000 +0000 pppoefp.ko.plt
-rw-r--r-- 1 root root 49224 2025-03-11 12:47:27.000000000 +0000 sstp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:47:27.000000000 +0000 sstp.ko.plt

/bndl/ppp/lib/modules/5.6.3-smp/net:
total 64
-rw-r--r-- 1 root root 51868 2025-03-11 12:45:27.000000000 +0000 l2tp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:45:27.000000000 +0000 l2tp.ko.plt
-rw-r--r-- 1 root root 11328 2025-03-11 12:45:02.000000000 +0000 pptp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:45:02.000000000 +0000 pptp.ko.plt

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 etc
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib

/bndl/ppp/nova/bin:
total 708
-rwxr-xr-x 1 root root 724940 2025-03-11 12:51:30.000000000 +0000 ppp
lrwxrwxrwx 1 root root      3 2025-03-11 12:51:30.000000000 +0000 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2025-03-11 12:44:38.000000000 +0000 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2025-03-11 12:44:38.000000000 +0000 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 profiler

/bndl/ppp/nova/lib/console:
total 144
-rwxr-xr-x 1 root root 147136 2025-03-11 12:45:52.000000000 +0000 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 68
-rwxr-xr-x 1 root root 67400 2025-03-11 12:46:58.000000000 +0000 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 webfig

/bndl/security/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4365 2025-03-11 12:52:23.000000000 +0000 secure-0a49065a769f.jg.gz
-rwxr-xr-x 1 root root  105 2025-03-11 12:52:24.000000000 +0000 secure.info
lrwxrwxrwx 1 root root   25 2025-03-11 12:52:24.000000000 +0000 secure.jg.gz -> secure-0a49065a769f.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 6 root root 4096 2025-03-11 13:00:48.000000000 +0000 modules

/bndl/security/lib/modules:
total 16
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 5.6.3
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 5.6.3-440
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 5.6.3-e500
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 5.6.3-smp

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 kernel
-rw-r--r-- 1 root root  162 2025-03-11 13:00:21.000000000 +0000 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 crypto
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 96
-rw-r--r-- 1 root root  7884 2025-03-11 12:59:32.000000000 +0000 blowfish_common.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:32.000000000 +0000 blowfish_common.ko.plt
-rw-r--r-- 1 root root  5016 2025-03-11 12:59:32.000000000 +0000 blowfish_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:32.000000000 +0000 blowfish_generic.ko.plt
-rw-r--r-- 1 root root 20828 2025-03-11 12:59:33.000000000 +0000 camellia_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:33.000000000 +0000 camellia_generic.ko.plt
-rw-r--r-- 1 root root 10496 2025-03-11 12:59:33.000000000 +0000 chacha20poly1305.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:33.000000000 +0000 chacha20poly1305.ko.plt
-rw-r--r-- 1 root root  5012 2025-03-11 12:59:33.000000000 +0000 chacha_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:33.000000000 +0000 chacha_generic.ko.plt
-rw-r--r-- 1 root root  4024 2025-03-11 12:59:32.000000000 +0000 echainiv.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:32.000000000 +0000 echainiv.ko.plt
-rw-r--r-- 1 root root  3972 2025-03-11 12:59:33.000000000 +0000 poly1305_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:33.000000000 +0000 poly1305_generic.ko.plt
-rw-r--r-- 1 root root 13964 2025-03-11 12:59:32.000000000 +0000 twofish_common.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:32.000000000 +0000 twofish_common.ko.plt
-rw-r--r-- 1 root root  8216 2025-03-11 12:59:32.000000000 +0000 twofish_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:32.000000000 +0000 twofish_generic.ko.plt

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 key
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root 10204 2025-03-11 12:59:31.000000000 +0000 ah4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:31.000000000 +0000 ah4.ko.plt
-rw-r--r-- 1 root root 13588 2025-03-11 12:59:32.000000000 +0000 esp4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:31.000000000 +0000 esp4.ko.plt

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 36
-rw-r--r-- 1 root root 35904 2025-03-11 12:59:31.000000000 +0000 af_key.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:31.000000000 +0000 af_key.ko.plt

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 32
-rw-r--r-- 1 root root 30496 2025-03-11 12:59:31.000000000 +0000 xfrm_user.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:31.000000000 +0000 xfrm_user.ko.plt

/bndl/security/lib/modules/5.6.3-440:
total 8
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 kernel
-rw-r--r-- 1 root root  106 2025-03-11 13:00:22.000000000 +0000 modules.dep.security

/bndl/security/lib/modules/5.6.3-440/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 crypto
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/bndl/security/lib/modules/5.6.3-440/kernel/crypto:
total 84
-rw-r--r-- 1 root root  7884 2025-03-11 12:59:35.000000000 +0000 blowfish_common.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:35.000000000 +0000 blowfish_common.ko.plt
-rw-r--r-- 1 root root  5048 2025-03-11 12:59:35.000000000 +0000 blowfish_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:34.000000000 +0000 blowfish_generic.ko.plt
-rw-r--r-- 1 root root 20860 2025-03-11 12:59:35.000000000 +0000 camellia_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:35.000000000 +0000 camellia_generic.ko.plt
-rw-r--r-- 1 root root 10528 2025-03-11 12:59:35.000000000 +0000 chacha20poly1305.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:35.000000000 +0000 chacha20poly1305.ko.plt
-rw-r--r-- 1 root root  4024 2025-03-11 12:59:34.000000000 +0000 echainiv.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:34.000000000 +0000 echainiv.ko.plt
-rw-r--r-- 1 root root 13964 2025-03-11 12:59:35.000000000 +0000 twofish_common.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:35.000000000 +0000 twofish_common.ko.plt
-rw-r--r-- 1 root root  8216 2025-03-11 12:59:35.000000000 +0000 twofish_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:35.000000000 +0000 twofish_generic.ko.plt

/bndl/security/lib/modules/5.6.3-440/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 key
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 xfrm

/bndl/security/lib/modules/5.6.3-440/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root 10236 2025-03-11 12:59:34.000000000 +0000 ah4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:34.000000000 +0000 ah4.ko.plt
-rw-r--r-- 1 root root 13588 2025-03-11 12:59:34.000000000 +0000 esp4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:34.000000000 +0000 esp4.ko.plt

/bndl/security/lib/modules/5.6.3-440/kernel/net/key:
total 36
-rw-r--r-- 1 root root 35904 2025-03-11 12:59:34.000000000 +0000 af_key.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:34.000000000 +0000 af_key.ko.plt

/bndl/security/lib/modules/5.6.3-440/kernel/net/xfrm:
total 32
-rw-r--r-- 1 root root 30496 2025-03-11 12:59:33.000000000 +0000 xfrm_user.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:33.000000000 +0000 xfrm_user.ko.plt

/bndl/security/lib/modules/5.6.3-e500:
total 8
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 kernel
-rw-r--r-- 1 root root  162 2025-03-11 13:00:23.000000000 +0000 modules.dep.security

/bndl/security/lib/modules/5.6.3-e500/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 crypto
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/bndl/security/lib/modules/5.6.3-e500/kernel/crypto:
total 96
-rw-r--r-- 1 root root  7884 2025-03-11 12:59:37.000000000 +0000 blowfish_common.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:37.000000000 +0000 blowfish_common.ko.plt
-rw-r--r-- 1 root root  5016 2025-03-11 12:59:37.000000000 +0000 blowfish_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:37.000000000 +0000 blowfish_generic.ko.plt
-rw-r--r-- 1 root root 20828 2025-03-11 12:59:37.000000000 +0000 camellia_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:37.000000000 +0000 camellia_generic.ko.plt
-rw-r--r-- 1 root root 10528 2025-03-11 12:59:38.000000000 +0000 chacha20poly1305.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:38.000000000 +0000 chacha20poly1305.ko.plt
-rw-r--r-- 1 root root  5044 2025-03-11 12:59:38.000000000 +0000 chacha_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:38.000000000 +0000 chacha_generic.ko.plt
-rw-r--r-- 1 root root  4024 2025-03-11 12:59:36.000000000 +0000 echainiv.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:36.000000000 +0000 echainiv.ko.plt
-rw-r--r-- 1 root root  3972 2025-03-11 12:59:38.000000000 +0000 poly1305_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:38.000000000 +0000 poly1305_generic.ko.plt
-rw-r--r-- 1 root root 13964 2025-03-11 12:59:37.000000000 +0000 twofish_common.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:37.000000000 +0000 twofish_common.ko.plt
-rw-r--r-- 1 root root  8216 2025-03-11 12:59:37.000000000 +0000 twofish_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:37.000000000 +0000 twofish_generic.ko.plt

/bndl/security/lib/modules/5.6.3-e500/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 key
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 xfrm

/bndl/security/lib/modules/5.6.3-e500/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root 10236 2025-03-11 12:59:36.000000000 +0000 ah4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:36.000000000 +0000 ah4.ko.plt
-rw-r--r-- 1 root root 13588 2025-03-11 12:59:36.000000000 +0000 esp4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:36.000000000 +0000 esp4.ko.plt

/bndl/security/lib/modules/5.6.3-e500/kernel/net/key:
total 36
-rw-r--r-- 1 root root 35904 2025-03-11 12:59:36.000000000 +0000 af_key.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:36.000000000 +0000 af_key.ko.plt

/bndl/security/lib/modules/5.6.3-e500/kernel/net/xfrm:
total 32
-rw-r--r-- 1 root root 30528 2025-03-11 12:59:36.000000000 +0000 xfrm_user.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:36.000000000 +0000 xfrm_user.ko.plt

/bndl/security/lib/modules/5.6.3-smp:
total 8
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 kernel
-rw-r--r-- 1 root root  162 2025-03-11 13:00:25.000000000 +0000 modules.dep.security

/bndl/security/lib/modules/5.6.3-smp/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 crypto
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/bndl/security/lib/modules/5.6.3-smp/kernel/crypto:
total 96
-rw-r--r-- 1 root root  7916 2025-03-11 12:59:40.000000000 +0000 blowfish_common.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:40.000000000 +0000 blowfish_common.ko.plt
-rw-r--r-- 1 root root  5048 2025-03-11 12:59:39.000000000 +0000 blowfish_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:39.000000000 +0000 blowfish_generic.ko.plt
-rw-r--r-- 1 root root 20860 2025-03-11 12:59:40.000000000 +0000 camellia_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:40.000000000 +0000 camellia_generic.ko.plt
-rw-r--r-- 1 root root 10560 2025-03-11 12:59:41.000000000 +0000 chacha20poly1305.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:41.000000000 +0000 chacha20poly1305.ko.plt
-rw-r--r-- 1 root root  5076 2025-03-11 12:59:41.000000000 +0000 chacha_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:41.000000000 +0000 chacha_generic.ko.plt
-rw-r--r-- 1 root root  4056 2025-03-11 12:59:39.000000000 +0000 echainiv.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:39.000000000 +0000 echainiv.ko.plt
-rw-r--r-- 1 root root  4036 2025-03-11 12:59:41.000000000 +0000 poly1305_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:41.000000000 +0000 poly1305_generic.ko.plt
-rw-r--r-- 1 root root 13996 2025-03-11 12:59:40.000000000 +0000 twofish_common.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:40.000000000 +0000 twofish_common.ko.plt
-rw-r--r-- 1 root root  8248 2025-03-11 12:59:40.000000000 +0000 twofish_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:40.000000000 +0000 twofish_generic.ko.plt

/bndl/security/lib/modules/5.6.3-smp/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 key
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 xfrm

/bndl/security/lib/modules/5.6.3-smp/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root 10392 2025-03-11 12:59:39.000000000 +0000 ah4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:39.000000000 +0000 ah4.ko.plt
-rw-r--r-- 1 root root 13816 2025-03-11 12:59:39.000000000 +0000 esp4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:39.000000000 +0000 esp4.ko.plt

/bndl/security/lib/modules/5.6.3-smp/kernel/net/key:
total 36
-rw-r--r-- 1 root root 36600 2025-03-11 12:59:39.000000000 +0000 af_key.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:38.000000000 +0000 af_key.ko.plt

/bndl/security/lib/modules/5.6.3-smp/kernel/net/xfrm:
total 32
-rw-r--r-- 1 root root 30892 2025-03-11 12:59:38.000000000 +0000 xfrm_user.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:59:38.000000000 +0000 xfrm_user.ko.plt

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib

/bndl/security/nova/bin:
total 848
-rwxr-xr-x 1 root root 598616 2025-03-11 12:58:16.000000000 +0000 ipsec
lrwxrwxrwx 1 root root      5 2025-03-11 12:58:16.000000000 +0000 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 265676 2025-03-11 12:54:02.000000000 +0000 ssh
lrwxrwxrwx 1 root root      3 2025-03-11 12:54:03.000000000 +0000 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-03-11 12:51:13.000000000 +0000 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2025-03-11 12:51:13.000000000 +0000 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 console

/bndl/security/nova/lib/console:
total 88
-rwxr-xr-x 1 root root 89528 2025-03-11 12:51:48.000000000 +0000 1077936128.mem

/bndl/wifi:
total 8
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 home
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 nova

/bndl/wifi/home:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 web

/bndl/wifi/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 webfig

/bndl/wifi/home/web/webfig:
total 16
-rw-r--r-- 1 root root 8897 2025-03-11 12:44:59.000000000 +0000 wave2-5c9c2c711e64.jg.gz
-rwxr-xr-x 1 root root  103 2025-03-11 12:44:59.000000000 +0000 wave2.info
lrwxrwxrwx 1 root root   24 2025-03-11 12:45:00.000000000 +0000 wave2.jg.gz -> wave2-5c9c2c711e64.jg.gz

/bndl/wifi/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib

/bndl/wifi/nova/bin:
total 1544
-rwxr-xr-x 1 root root 1579808 2025-03-11 12:55:06.000000000 +0000 ww2

/bndl/wifi/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 radius

/bndl/wifi/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 183 2025-03-11 12:44:53.000000000 +0000 wifi.x3

/bndl/wifi/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-03-11 12:44:53.000000000 +0000 wifi.x3

/bndl/wifi/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 console

/bndl/wifi/nova/lib/console:
total 192
-rwxr-xr-x 1 root root 194825 2025-03-11 12:45:21.000000000 +0000 1275068416.mem

/boot:
total 0

/dev:
total 0

/etc:
total 400
-rw-r--r-- 1 root root  36868 2025-03-11 12:04:47.000000000 +0000 amcc460-7.18.2.fwf
-rw-r--r-- 1 root root 130747 2025-03-11 11:58:28.000000000 +0000 license
-rw-r--r-- 1 root root  39300 2025-03-11 12:04:47.000000000 +0000 mpc8323-7.18.2.fwf
-rw-r--r-- 1 root root  41108 2025-03-11 12:05:00.000000000 +0000 mpc8343-7.18.2.fwf
-rw-r--r-- 1 root root  40052 2025-03-11 12:05:01.000000000 +0000 mpc8544-7.18.2.fwf
-rw-r--r-- 1 root root  34740 2025-03-11 12:04:59.000000000 +0000 mpc8548-7.18.2.fwf
-rw-r--r-- 1 root root  36660 2025-03-11 12:05:00.000000000 +0000 p1023-7.18.2.fwf
-rw-r--r-- 1 root root  35860 2025-03-11 12:05:13.000000000 +0000 p2020-7.18.2.fwf
lrwxrwxrwx 1 root root     24 2025-03-11 13:00:48.000000000 +0000 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2025-03-11 13:00:48.000000000 +0000 web

/home/web:
total 64
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 assets
-rwxr-xr-x 1 root root 18983 2025-03-11 12:03:42.000000000 +0000 bth-files.html
-rwxr-xr-x 1 root root   600 2025-03-11 11:58:29.000000000 +0000 favicon.png
-rwxr-xr-x 1 root root   689 2025-03-11 11:58:29.000000000 +0000 favicon.svg
-rwxr-xr-x 1 root root   708 2025-03-11 11:58:27.000000000 +0000 graph.css
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 help
-rwxr-xr-x 1 root root  1254 2025-03-11 11:58:29.000000000 +0000 index2.html
lrwxrwxrwx 1 root root    12 2025-03-11 12:44:12.000000000 +0000 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2025-03-11 11:58:29.000000000 +0000 logo.png
-rw-r--r-- 1 root root  2507 2025-03-11 11:58:28.000000000 +0000 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2025-03-11 11:58:29.000000000 +0000 robots.txt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 webfig
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 winbox

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
total 2628
-rwxr-xr-x 1 root root 329264 2025-03-11 12:00:35.000000000 +0000 libc.so
-rwxr-xr-x 1 root root 133028 2025-03-11 12:06:18.000000000 +0000 libeap.so
-rwxr-xr-x 1 root root  66796 2025-03-11 12:02:36.000000000 +0000 libjson.so
-rwxr-xr-x 1 root root 199064 2025-03-11 12:04:27.000000000 +0000 librappsup.so
-rwxr-xr-x 1 root root 133204 2025-03-11 12:03:30.000000000 +0000 libubox.so
-rwxr-xr-x 1 root root 132960 2025-03-11 12:02:29.000000000 +0000 libuc++.so
-rwxr-xr-x 1 root root 330588 2025-03-11 12:05:09.000000000 +0000 libucrypto.so
-rwxr-xr-x 1 root root  67056 2025-03-11 12:03:22.000000000 +0000 libufiber.so
-rwxr-xr-x 1 root root 132864 2025-03-11 12:03:30.000000000 +0000 libuhttp.so
-rwxr-xr-x 1 root root 725724 2025-03-11 12:03:06.000000000 +0000 libumsg.so
-rwxr-xr-x 1 root root  69512 2025-03-11 12:05:21.000000000 +0000 liburadius.so
-rwxr-xr-x 1 root root  66744 2025-03-11 12:05:15.000000000 +0000 libuxml++.so
-rwxr-xr-x 1 root root  67308 2025-03-11 12:02:33.000000000 +0000 libwww.so
-rwxr-xr-x 1 root root  66784 2025-03-11 12:02:36.000000000 +0000 libxml.so
-rwxr-xr-x 1 root root 132440 2025-03-11 12:02:37.000000000 +0000 libz.so
drwxr-xr-x 6 root root   4096 2025-03-11 13:00:48.000000000 +0000 modules
lrwxrwxrwx 1 root root     27 2025-03-11 13:00:48.000000000 +0000 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 16
drwxr-xr-x 6 root root 4096 2025-03-11 13:00:48.000000000 +0000 5.6.3
drwxr-xr-x 6 root root 4096 2025-03-11 13:00:48.000000000 +0000 5.6.3-440
drwxr-xr-x 6 root root 4096 2025-03-11 13:00:48.000000000 +0000 5.6.3-e500
drwxr-xr-x 6 root root 4096 2025-03-11 13:00:48.000000000 +0000 5.6.3-smp

/lib/modules/5.6.3:
total 20
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 drivers
drwxr-xr-x 8 root root 4096 2025-03-11 13:00:48.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 misc
-rw-r--r-- 1 root root 2456 2025-03-11 12:44:09.000000000 +0000 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/lib/modules/5.6.3/drivers:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 char
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/lib/modules/5.6.3/drivers/char:
total 12
-rw-r--r-- 1 root root 8820 2025-03-11 12:36:51.000000000 +0000 ticker.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:36:51.000000000 +0000 ticker.ko.plt

/lib/modules/5.6.3/drivers/net:
total 648
-rw-r--r-- 1 root root  39324 2025-03-11 12:38:30.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:38:30.000000000 +0000 ath8327.ko.plt
-rw-r--r-- 1 root root  25404 2025-03-11 12:38:30.000000000 +0000 aths16.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:38:30.000000000 +0000 aths16.ko.plt
-rw-r--r-- 1 root root  37984 2025-03-11 12:37:24.000000000 +0000 atl1c.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:37:24.000000000 +0000 atl1c.ko.plt
-rw-r--r-- 1 root root  10452 2025-03-11 12:37:02.000000000 +0000 fsl_pq_mdio.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:37:02.000000000 +0000 fsl_pq_mdio.ko.plt
-rw-r--r-- 1 root root  28080 2025-03-11 12:36:58.000000000 +0000 gianfar.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:36:58.000000000 +0000 gianfar.ko.plt
-rw-r--r-- 1 root root   9076 2025-03-11 12:38:58.000000000 +0000 imq.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:38:58.000000000 +0000 imq.ko.plt
-rw-r--r-- 1 root root  10816 2025-03-11 12:42:01.000000000 +0000 mpls_fp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:01.000000000 +0000 mpls_fp.ko.plt
-rw-r--r-- 1 root root 189720 2025-03-11 12:42:01.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:01.000000000 +0000 packet_hook.ko.plt
-rw-r--r-- 1 root root  64976 2025-03-11 12:37:53.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:37:53.000000000 +0000 phy_helper.ko.plt
-rw-r--r-- 1 root root  25108 2025-03-11 12:36:51.000000000 +0000 rb616.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:36:51.000000000 +0000 rb616.ko.plt
-rw-r--r-- 1 root root   3828 2025-03-11 12:38:55.000000000 +0000 sram.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:38:55.000000000 +0000 sram.ko.plt
-rw-r--r-- 1 root root  66024 2025-03-11 12:38:30.000000000 +0000 switch.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:38:30.000000000 +0000 switch.ko.plt
-rw-r--r-- 1 root root  39204 2025-03-11 12:37:03.000000000 +0000 ucc_geth.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:37:03.000000000 +0000 ucc_geth.ko.plt
-rw-r--r-- 1 root root  22068 2025-03-11 12:36:53.000000000 +0000 via-velocity.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:36:53.000000000 +0000 via-velocity.ko.plt
-rw-r--r-- 1 root root  59144 2025-03-11 12:42:04.000000000 +0000 vxlan2.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 vxlan2.ko.plt

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-03-11 13:00:48.000000000 +0000 arch
drwxr-xr-x  2 root root 4096 2025-03-11 13:00:48.000000000 +0000 crypto
drwxr-xr-x  7 root root 4096 2025-03-11 13:00:48.000000000 +0000 drivers
drwxr-xr-x 11 root root 4096 2025-03-11 13:00:48.000000000 +0000 fs
drwxr-xr-x  5 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib
drwxr-xr-x 12 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 powerpc

/lib/modules/5.6.3/kernel/arch/powerpc:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 oprofile

/lib/modules/5.6.3/kernel/arch/powerpc/oprofile:
total 40
-rw-r--r-- 1 root root 40608 2025-03-11 12:42:05.000000000 +0000 oprofile.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 oprofile.ko.plt

/lib/modules/5.6.3/kernel/crypto:
total 60
-rw-r--r-- 1 root root  3152 2025-03-11 12:42:04.000000000 +0000 arc4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 arc4.ko.plt
-rw-r--r-- 1 root root 14832 2025-03-11 12:42:05.000000000 +0000 ccm.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 ccm.ko.plt
-rw-r--r-- 1 root root  5408 2025-03-11 12:42:05.000000000 +0000 cmac.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 cmac.ko.plt
-rw-r--r-- 1 root root  4088 2025-03-11 12:42:04.000000000 +0000 des_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 des_generic.ko.plt
-rw-r--r-- 1 root root  5420 2025-03-11 12:42:05.000000000 +0000 md4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 md4.ko.plt
-rw-r--r-- 1 root root  4200 2025-03-11 12:42:05.000000000 +0000 sha1_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 sha1_generic.ko.plt
-rw-r--r-- 1 root root  9208 2025-03-11 12:42:05.000000000 +0000 sha512_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 sha512_generic.ko.plt

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ata
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 mmc
drwxr-xr-x 6 root root 4096 2025-03-11 13:00:48.000000000 +0000 net
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 scsi
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 watchdog

/lib/modules/5.6.3/kernel/drivers/ata:
total 220
-rw-r--r-- 1 root root 211540 2025-03-11 12:42:04.000000000 +0000 libata.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 libata.ko.plt
-rw-r--r-- 1 root root  10504 2025-03-11 12:42:04.000000000 +0000 pata_rb_ppc.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 pata_rb_ppc.ko.plt

/lib/modules/5.6.3/kernel/drivers/mmc:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 core
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 host

/lib/modules/5.6.3/kernel/drivers/mmc/core:
total 160
-rw-r--r-- 1 root root  38480 2025-03-11 12:42:04.000000000 +0000 mmc_block.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 mmc_block.ko.plt
-rw-r--r-- 1 root root 122172 2025-03-11 12:42:04.000000000 +0000 mmc_core.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 mmc_core.ko.plt

/lib/modules/5.6.3/kernel/drivers/mmc/host:
total 20
-rw-r--r-- 1 root root 14888 2025-03-11 12:42:04.000000000 +0000 mmc_spi.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 mmc_spi.ko.plt
-rw-r--r-- 1 root root  2900 2025-03-11 12:42:04.000000000 +0000 of_mmc_spi.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 of_mmc_spi.ko.plt

/lib/modules/5.6.3/kernel/drivers/net:
total 172
-rw-r--r-- 1 root root 48044 2025-03-11 12:42:11.000000000 +0000 amt.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:11.000000000 +0000 amt.ko.plt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 bonding
drwxr-xr-x 4 root root  4096 2025-03-11 13:00:48.000000000 +0000 ethernet
-rw-r--r-- 1 root root 37904 2025-03-11 12:42:11.000000000 +0000 macsec.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:11.000000000 +0000 macsec.ko.plt
-rw-r--r-- 1 root root 22108 2025-03-11 12:42:03.000000000 +0000 macvlan.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 macvlan.ko.plt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 slip
-rw-r--r-- 1 root root 17768 2025-03-11 12:42:11.000000000 +0000 veth.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:11.000000000 +0000 veth.ko.plt
-rw-r--r-- 1 root root 20704 2025-03-11 12:42:11.000000000 +0000 vrf.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:11.000000000 +0000 vrf.ko.plt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 144
-rw-r--r-- 1 root root 144220 2025-03-11 12:42:03.000000000 +0000 bonding.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:03.000000000 +0000 bonding.ko.plt

/lib/modules/5.6.3/kernel/drivers/net/ethernet:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 intel
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 via

/lib/modules/5.6.3/kernel/drivers/net/ethernet/intel:
total 40
-rw-r--r-- 1 root root 40676 2025-03-11 12:42:11.000000000 +0000 e100.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:11.000000000 +0000 e100.ko.plt

/lib/modules/5.6.3/kernel/drivers/net/ethernet/via:
total 32
-rw-r--r-- 1 root root 31940 2025-03-11 12:42:11.000000000 +0000 via-rhine.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:11.000000000 +0000 via-rhine.ko.plt

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6076 2025-03-11 12:42:11.000000000 +0000 slhc.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:11.000000000 +0000 slhc.ko.plt

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 100
-rw-r--r-- 1 root root 100660 2025-03-11 12:42:11.000000000 +0000 wireguard.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:11.000000000 +0000 wireguard.ko.plt

/lib/modules/5.6.3/kernel/drivers/scsi:
total 188
-rw-r--r-- 1 root root 143648 2025-03-11 12:42:04.000000000 +0000 scsi_mod.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 scsi_mod.ko.plt
-rw-r--r-- 1 root root  43756 2025-03-11 12:42:04.000000000 +0000 sd_mod.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 sd_mod.ko.plt

/lib/modules/5.6.3/kernel/drivers/watchdog:
total 8
-rw-r--r-- 1 root root 7048 2025-03-11 12:42:04.000000000 +0000 mpc8xxx_wdt.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:04.000000000 +0000 mpc8xxx_wdt.ko.plt

/lib/modules/5.6.3/kernel/fs:
total 44
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 cifs
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 exfat
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ext4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 fat
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 fuse
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 jbd2
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ksmbd
-rw-r--r-- 1 root root 7496 2025-03-11 12:42:05.000000000 +0000 mbcache.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 mbcache.ko.plt
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 nls
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ntfs3

/lib/modules/5.6.3/kernel/fs/cifs:
total 520
-rw-r--r-- 1 root root 530684 2025-03-11 12:42:05.000000000 +0000 cifs.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 cifs.ko.plt

/lib/modules/5.6.3/kernel/fs/exfat:
total 80
-rw-r--r-- 1 root root 81900 2025-03-11 12:42:05.000000000 +0000 exfat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 exfat.ko.plt

/lib/modules/5.6.3/kernel/fs/ext4:
total 468
-rw-r--r-- 1 root root 476688 2025-03-11 12:42:05.000000000 +0000 ext4.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ext4.ko.plt

/lib/modules/5.6.3/kernel/fs/fat:
total 92
-rw-r--r-- 1 root root 76448 2025-03-11 12:42:05.000000000 +0000 fat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 fat.ko.plt
-rw-r--r-- 1 root root 14124 2025-03-11 12:42:05.000000000 +0000 vfat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 vfat.ko.plt

/lib/modules/5.6.3/kernel/fs/fuse:
total 116
-rw-r--r-- 1 root root 117840 2025-03-11 12:42:05.000000000 +0000 fuse.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 fuse.ko.plt

/lib/modules/5.6.3/kernel/fs/jbd2:
total 80
-rw-r--r-- 1 root root 78356 2025-03-11 12:42:05.000000000 +0000 jbd2.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 jbd2.ko.plt

/lib/modules/5.6.3/kernel/fs/ksmbd:
total 260
-rw-r--r-- 1 root root 265960 2025-03-11 12:42:05.000000000 +0000 ksmbd.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ksmbd.ko.plt

/lib/modules/5.6.3/kernel/fs/nls:
total 28
-rw-r--r-- 1 root root 8180 2025-03-11 12:42:05.000000000 +0000 nls_base.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 nls_base.ko.plt
-rw-r--r-- 1 root root 6684 2025-03-11 12:42:05.000000000 +0000 nls_cp437.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 nls_cp437.ko.plt
-rw-r--r-- 1 root root 5076 2025-03-11 12:42:05.000000000 +0000 nls_iso8859-1.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 nls_iso8859-1.ko.plt
-rw-r--r-- 1 root root 2880 2025-03-11 12:42:05.000000000 +0000 nls_utf8.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 nls_utf8.ko.plt

/lib/modules/5.6.3/kernel/fs/ntfs3:
total 232
-rw-r--r-- 1 root root 235900 2025-03-11 12:42:05.000000000 +0000 ntfs3.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ntfs3.ko.plt

/lib/modules/5.6.3/kernel/lib:
total 52
-rw-r--r-- 1 root root 4524 2025-03-11 12:42:05.000000000 +0000 asn1_decoder.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 asn1_decoder.ko.plt
-rw-r--r-- 1 root root 3352 2025-03-11 12:42:10.000000000 +0000 crc-ccitt.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:10.000000000 +0000 crc-ccitt.ko.plt
-rw-r--r-- 1 root root 2572 2025-03-11 12:42:04.000000000 +0000 crc-itu-t.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:04.000000000 +0000 crc-itu-t.ko.plt
-rw-r--r-- 1 root root 2564 2025-03-11 12:42:05.000000000 +0000 crc16.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 crc16.ko.plt
-rw-r--r-- 1 root root 2288 2025-03-11 12:42:04.000000000 +0000 crc7.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:04.000000000 +0000 crc7.ko.plt
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 crypto
-rw-r--r-- 1 root root 4436 2025-03-11 12:42:05.000000000 +0000 oid_registry.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 oid_registry.ko.plt
-rw-r--r-- 1 root root 3708 2025-03-11 12:42:04.000000000 +0000 ts_bm.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:04.000000000 +0000 ts_bm.ko.plt
-rw-r--r-- 1 root root 3572 2025-03-11 12:42:04.000000000 +0000 ts_kmp.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:04.000000000 +0000 ts_kmp.ko.plt
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 72
-rw-r--r-- 1 root root  2196 2025-03-11 12:42:04.000000000 +0000 libarc4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 libarc4.ko.plt
-rw-r--r-- 1 root root  7216 2025-03-11 12:42:04.000000000 +0000 libblake2s-generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 libblake2s-generic.ko.plt
-rw-r--r-- 1 root root  4092 2025-03-11 12:42:05.000000000 +0000 libblake2s.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libblake2s.ko.plt
-rw-r--r-- 1 root root  2252 2025-03-11 12:42:05.000000000 +0000 libchacha.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libchacha.ko.plt
-rw-r--r-- 1 root root  7612 2025-03-11 12:42:05.000000000 +0000 libchacha20poly1305.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libchacha20poly1305.ko.plt
-rw-r--r-- 1 root root 10812 2025-03-11 12:42:05.000000000 +0000 libcurve25519-generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libcurve25519-generic.ko.plt
-rw-r--r-- 1 root root  1916 2025-03-11 12:42:05.000000000 +0000 libcurve25519.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libcurve25519.ko.plt
-rw-r--r-- 1 root root 18356 2025-03-11 12:42:04.000000000 +0000 libdes.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 libdes.ko.plt
-rw-r--r-- 1 root root  4900 2025-03-11 12:42:05.000000000 +0000 libpoly1305.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libpoly1305.ko.plt

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19924 2025-03-11 12:42:11.000000000 +0000 zlib_deflate.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:11.000000000 +0000 zlib_deflate.ko.plt

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 15436 2025-03-11 12:42:11.000000000 +0000 zlib_inflate.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:11.000000000 +0000 zlib_inflate.ko.plt

/lib/modules/5.6.3/kernel/net:
total 40
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 802
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 8021q
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv6
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 mpls
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 sched
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 unix
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 xfrm

/lib/modules/5.6.3/kernel/net/802:
total 12
-rw-r--r-- 1 root root 11536 2025-03-11 12:42:11.000000000 +0000 mrp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:11.000000000 +0000 mrp.ko.plt

/lib/modules/5.6.3/kernel/net/8021q:
total 28
-rw-r--r-- 1 root root 28236 2025-03-11 12:42:03.000000000 +0000 8021q.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 8021q.ko.plt

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 84
-rw-r--r-- 1 root root  2660 2025-03-11 12:42:04.000000000 +0000 ebt_802_3.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_802_3.ko.plt
-rw-r--r-- 1 root root  3652 2025-03-11 12:42:04.000000000 +0000 ebt_arp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_arp.ko.plt
-rw-r--r-- 1 root root  3264 2025-03-11 12:42:04.000000000 +0000 ebt_arpreply.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_arpreply.ko.plt
-rw-r--r-- 1 root root  3240 2025-03-11 12:42:04.000000000 +0000 ebt_dnat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_dnat.ko.plt
-rw-r--r-- 1 root root  3684 2025-03-11 12:42:04.000000000 +0000 ebt_ip.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_ip.ko.plt
-rw-r--r-- 1 root root  3856 2025-03-11 12:42:04.000000000 +0000 ebt_ip6.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_ip6.ko.plt
-rw-r--r-- 1 root root  3556 2025-03-11 12:42:04.000000000 +0000 ebt_limit.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_limit.ko.plt
-rw-r--r-- 1 root root  2600 2025-03-11 12:42:04.000000000 +0000 ebt_mark.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_mark.ko.plt
-rw-r--r-- 1 root root  2532 2025-03-11 12:42:04.000000000 +0000 ebt_mark_m.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_mark_m.ko.plt
-rw-r--r-- 1 root root  2500 2025-03-11 12:42:04.000000000 +0000 ebt_pkttype.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_pkttype.ko.plt
-rw-r--r-- 1 root root  3144 2025-03-11 12:42:04.000000000 +0000 ebt_redirect.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_redirect.ko.plt
-rw-r--r-- 1 root root  3104 2025-03-11 12:42:04.000000000 +0000 ebt_snat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_snat.ko.plt
-rw-r--r-- 1 root root  4076 2025-03-11 12:42:04.000000000 +0000 ebt_stp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_stp.ko.plt
-rw-r--r-- 1 root root  3052 2025-03-11 12:42:04.000000000 +0000 ebt_vlan.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_vlan.ko.plt
-rw-r--r-- 1 root root  3236 2025-03-11 12:42:04.000000000 +0000 ebtable_filter.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebtable_filter.ko.plt
-rw-r--r-- 1 root root  3236 2025-03-11 12:42:04.000000000 +0000 ebtable_nat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebtable_nat.ko.plt
-rw-r--r-- 1 root root 17064 2025-03-11 12:42:04.000000000 +0000 ebtables.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebtables.ko.plt

/lib/modules/5.6.3/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 18852 2025-03-11 12:42:11.000000000 +0000 ip_tunnel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:11.000000000 +0000 ip_tunnel.ko.plt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 netfilter
-rw-r--r-- 1 root root 16112 2025-03-11 12:42:03.000000000 +0000 udp_tunnel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 udp_tunnel.ko.plt

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 80
-rw-r--r-- 1 root root 16092 2025-03-11 12:42:04.000000000 +0000 ip_tables.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ip_tables.ko.plt
-rw-r--r-- 1 root root  3852 2025-03-11 12:42:04.000000000 +0000 ipt_REJECT.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ipt_REJECT.ko.plt
-rw-r--r-- 1 root root  4164 2025-03-11 12:42:04.000000000 +0000 iptable_filter.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 iptable_filter.ko.plt
-rw-r--r-- 1 root root  4280 2025-03-11 12:42:04.000000000 +0000 iptable_mangle.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 iptable_mangle.ko.plt
-rw-r--r-- 1 root root  3824 2025-03-11 12:42:04.000000000 +0000 iptable_nat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 iptable_nat.ko.plt
-rw-r--r-- 1 root root  4436 2025-03-11 12:42:04.000000000 +0000 iptable_raw.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 iptable_raw.ko.plt
-rw-r--r-- 1 root root  3824 2025-03-11 12:42:04.000000000 +0000 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_defrag_ipv4.ko.plt
-rw-r--r-- 1 root root 10708 2025-03-11 12:42:04.000000000 +0000 nf_nat_h323.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_h323.ko.plt
-rw-r--r-- 1 root root  5192 2025-03-11 12:42:04.000000000 +0000 nf_nat_pptp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_pptp.ko.plt
-rw-r--r-- 1 root root  4568 2025-03-11 12:42:04.000000000 +0000 nf_reject_ipv4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_reject_ipv4.ko.plt

/lib/modules/5.6.3/kernel/net/ipv6:
total 516
-rw-r--r-- 1 root root  10112 2025-03-11 12:42:05.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ah6.ko.plt
-rw-r--r-- 1 root root  13288 2025-03-11 12:42:05.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 esp6.ko.plt
-rw-r--r-- 1 root root   3592 2025-03-11 12:42:03.000000000 +0000 ip6_udp_tunnel.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:03.000000000 +0000 ip6_udp_tunnel.ko.plt
-rw-r--r-- 1 root root 483044 2025-03-11 12:42:05.000000000 +0000 ipv6.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ipv6.ko.plt
drwxr-xr-x 2 root root   4096 2025-03-11 13:00:48.000000000 +0000 netfilter
-rw-r--r-- 1 root root   5668 2025-03-11 12:42:05.000000000 +0000 tunnel6.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 tunnel6.ko.plt

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 88
-rw-r--r-- 1 root root 16520 2025-03-11 12:42:04.000000000 +0000 ip6_tables.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ip6_tables.ko.plt
-rw-r--r-- 1 root root  4364 2025-03-11 12:42:06.000000000 +0000 ip6t_NPT.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6t_NPT.ko.plt
-rw-r--r-- 1 root root  3888 2025-03-11 12:42:06.000000000 +0000 ip6t_REJECT.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6t_REJECT.ko.plt
-rw-r--r-- 1 root root  2788 2025-03-11 12:42:06.000000000 +0000 ip6t_eui64.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6t_eui64.ko.plt
-rw-r--r-- 1 root root  3212 2025-03-11 12:42:06.000000000 +0000 ip6t_ipv6header.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6t_ipv6header.ko.plt
-rw-r--r-- 1 root root  4212 2025-03-11 12:42:05.000000000 +0000 ip6table_filter.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 ip6table_filter.ko.plt
-rw-r--r-- 1 root root  4448 2025-03-11 12:42:06.000000000 +0000 ip6table_mangle.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6table_mangle.ko.plt
-rw-r--r-- 1 root root  3828 2025-03-11 12:42:06.000000000 +0000 ip6table_nat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6table_nat.ko.plt
-rw-r--r-- 1 root root  4440 2025-03-11 12:42:06.000000000 +0000 ip6table_raw.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6table_raw.ko.plt
-rw-r--r-- 1 root root 11036 2025-03-11 12:42:04.000000000 +0000 nf_defrag_ipv6.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_defrag_ipv6.ko.plt
-rw-r--r-- 1 root root  5200 2025-03-11 12:42:06.000000000 +0000 nf_reject_ipv6.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 nf_reject_ipv6.ko.plt

/lib/modules/5.6.3/kernel/net/mpls:
total 56
-rw-r--r-- 1 root root  5616 2025-03-11 12:42:11.000000000 +0000 mpls_iptunnel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:11.000000000 +0000 mpls_iptunnel.ko.plt
-rw-r--r-- 1 root root 47972 2025-03-11 12:42:11.000000000 +0000 mpls_router.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:11.000000000 +0000 mpls_router.ko.plt

/lib/modules/5.6.3/kernel/net/netfilter:
total 548
-rw-r--r-- 1 root root 112448 2025-03-11 12:42:04.000000000 +0000 nf_conntrack.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack.ko.plt
-rw-r--r-- 1 root root  10536 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_ftp.ko.plt
-rw-r--r-- 1 root root  43000 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_h323.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_h323.ko.plt
-rw-r--r-- 1 root root   8248 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_irc.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_irc.ko.plt
-rw-r--r-- 1 root root  32260 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_netlink.ko.plt
-rw-r--r-- 1 root root   8352 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_pptp.ko.plt
-rw-r--r-- 1 root root   8456 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_rtsp.ko.plt
-rw-r--r-- 1 root root  28244 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_sip.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_sip.ko.plt
-rw-r--r-- 1 root root   6904 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_tftp.ko.plt
-rw-r--r-- 1 root root  31196 2025-03-11 12:42:04.000000000 +0000 nf_nat.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_nat.ko.plt
-rw-r--r-- 1 root root   4776 2025-03-11 12:42:04.000000000 +0000 nf_nat_ftp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_nat_ftp.ko.plt
-rw-r--r-- 1 root root   4492 2025-03-11 12:42:04.000000000 +0000 nf_nat_irc.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_nat_irc.ko.plt
-rw-r--r-- 1 root root   7896 2025-03-11 12:42:04.000000000 +0000 nf_nat_rtsp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_nat_rtsp.ko.plt
-rw-r--r-- 1 root root  12264 2025-03-11 12:42:04.000000000 +0000 nf_nat_sip.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_nat_sip.ko.plt
-rw-r--r-- 1 root root   3400 2025-03-11 12:42:04.000000000 +0000 nf_nat_tftp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_nat_tftp.ko.plt
-rw-r--r-- 1 root root   9692 2025-03-11 12:42:04.000000000 +0000 nfnetlink.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nfnetlink.ko.plt
-rw-r--r-- 1 root root  27560 2025-03-11 12:42:04.000000000 +0000 x_tables.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 x_tables.ko.plt
-rw-r--r-- 1 root root   7360 2025-03-11 12:42:04.000000000 +0000 xt_CT.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_CT.ko.plt
-rw-r--r-- 1 root root   4248 2025-03-11 12:42:04.000000000 +0000 xt_DSCP.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_DSCP.ko.plt
-rw-r--r-- 1 root root   3628 2025-03-11 12:42:04.000000000 +0000 xt_HL.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_HL.ko.plt
-rw-r--r-- 1 root root   3692 2025-03-11 12:42:04.000000000 +0000 xt_MASQUERADE.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_MASQUERADE.ko.plt
-rw-r--r-- 1 root root   3952 2025-03-11 12:42:04.000000000 +0000 xt_NETMAP.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_NETMAP.ko.plt
-rw-r--r-- 1 root root   3236 2025-03-11 12:42:04.000000000 +0000 xt_REDIRECT.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_REDIRECT.ko.plt
-rw-r--r-- 1 root root   6516 2025-03-11 12:42:04.000000000 +0000 xt_TCPMSS.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_TCPMSS.ko.plt
-rw-r--r-- 1 root root   5280 2025-03-11 12:42:04.000000000 +0000 xt_addrtype.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_addrtype.ko.plt
-rw-r--r-- 1 root root   4404 2025-03-11 12:42:04.000000000 +0000 xt_connbytes.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_connbytes.ko.plt
-rw-r--r-- 1 root root   5088 2025-03-11 12:42:04.000000000 +0000 xt_connmark.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_connmark.ko.plt
-rw-r--r-- 1 root root   5292 2025-03-11 12:42:04.000000000 +0000 xt_conntrack.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_conntrack.ko.plt
-rw-r--r-- 1 root root   3124 2025-03-11 12:42:04.000000000 +0000 xt_dscp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_dscp.ko.plt
-rw-r--r-- 1 root root  18272 2025-03-11 12:42:04.000000000 +0000 xt_hashlimit.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_hashlimit.ko.plt
-rw-r--r-- 1 root root   3604 2025-03-11 12:42:04.000000000 +0000 xt_helper.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_helper.ko.plt
-rw-r--r-- 1 root root   2868 2025-03-11 12:42:04.000000000 +0000 xt_hl.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_hl.ko.plt
-rw-r--r-- 1 root root   2772 2025-03-11 12:42:04.000000000 +0000 xt_length.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_length.ko.plt
-rw-r--r-- 1 root root   2604 2025-03-11 12:42:04.000000000 +0000 xt_mac.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_mac.ko.plt
-rw-r--r-- 1 root root   3080 2025-03-11 12:42:04.000000000 +0000 xt_mark.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_mark.ko.plt
-rw-r--r-- 1 root root   3564 2025-03-11 12:42:04.000000000 +0000 xt_multiport.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_multiport.ko.plt
-rw-r--r-- 1 root root   5496 2025-03-11 12:42:04.000000000 +0000 xt_nat.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_nat.ko.plt
-rw-r--r-- 1 root root   3992 2025-03-11 12:42:04.000000000 +0000 xt_physdev.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_physdev.ko.plt
-rw-r--r-- 1 root root   4676 2025-03-11 12:42:04.000000000 +0000 xt_policy.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_policy.ko.plt
-rw-r--r-- 1 root root   2508 2025-03-11 12:42:04.000000000 +0000 xt_realm.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_realm.ko.plt
-rw-r--r-- 1 root root   3220 2025-03-11 12:42:04.000000000 +0000 xt_statistic.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_statistic.ko.plt
-rw-r--r-- 1 root root   3116 2025-03-11 12:42:04.000000000 +0000 xt_string.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_string.ko.plt
-rw-r--r-- 1 root root   3240 2025-03-11 12:42:04.000000000 +0000 xt_tcpmss.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_tcpmss.ko.plt
-rw-r--r-- 1 root root   4220 2025-03-11 12:42:04.000000000 +0000 xt_tcpudp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_tcpudp.ko.plt

/lib/modules/5.6.3/kernel/net/sched:
total 96
-rw-r--r-- 1 root root 28108 2025-03-11 12:42:03.000000000 +0000 sch_cake.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_cake.ko.plt
-rw-r--r-- 1 root root  8348 2025-03-11 12:42:03.000000000 +0000 sch_codel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_codel.ko.plt
-rw-r--r-- 1 root root 11332 2025-03-11 12:42:03.000000000 +0000 sch_fq_codel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_fq_codel.ko.plt
-rw-r--r-- 1 root root 29064 2025-03-11 12:42:03.000000000 +0000 sch_htb.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_htb.ko.plt
-rw-r--r-- 1 root root 10260 2025-03-11 12:42:03.000000000 +0000 sch_red.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_red.ko.plt

/lib/modules/5.6.3/kernel/net/unix:
total 36
-rw-r--r-- 1 root root 34812 2025-03-11 12:42:03.000000000 +0000 unix.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 unix.ko.plt

/lib/modules/5.6.3/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 8080 2025-03-11 12:42:03.000000000 +0000 xfrm_algo.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:03.000000000 +0000 xfrm_algo.ko.plt

/lib/modules/5.6.3/misc:
total 224
-rw-r--r-- 1 root root 10712 2025-03-11 12:36:55.000000000 +0000 btest.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:55.000000000 +0000 btest.ko.plt
-rw-r--r-- 1 root root  6388 2025-03-11 12:40:50.000000000 +0000 dot1x.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:40:50.000000000 +0000 dot1x.ko.plt
-rw-r--r-- 1 root root  8528 2025-03-11 12:36:41.000000000 +0000 fancon.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:41.000000000 +0000 fancon.ko.plt
-rw-r--r-- 1 root root 47892 2025-03-11 12:37:21.000000000 +0000 flash.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:21.000000000 +0000 flash.ko.plt
-rw-r--r-- 1 root root  4748 2025-03-11 12:39:20.000000000 +0000 jiffies.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:20.000000000 +0000 jiffies.ko.plt
-rw-r--r-- 1 root root  3076 2025-03-11 12:37:14.000000000 +0000 ledgroup.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:14.000000000 +0000 ledgroup.ko.plt
-rw-r--r-- 1 root root 10736 2025-03-11 12:36:48.000000000 +0000 logring.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:48.000000000 +0000 logring.ko.plt
-rw-r--r-- 1 root root 25336 2025-03-11 12:37:29.000000000 +0000 mesh.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:29.000000000 +0000 mesh.ko.plt
-rw-r--r-- 1 root root  8972 2025-03-11 12:36:47.000000000 +0000 panics.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:47.000000000 +0000 panics.ko.plt
-rw-r--r-- 1 root root  9020 2025-03-11 12:38:59.000000000 +0000 rb.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:59.000000000 +0000 rb.ko.plt
-rw-r--r-- 1 root root  5896 2025-03-11 12:39:27.000000000 +0000 romon.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:27.000000000 +0000 romon.ko.plt
-rw-r--r-- 1 root root  5728 2025-03-11 12:37:25.000000000 +0000 snif.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:25.000000000 +0000 snif.ko.plt
-rw-r--r-- 1 root root 26592 2025-03-11 12:37:45.000000000 +0000 traffic_gen.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:45.000000000 +0000 traffic_gen.ko.plt
-rw-r--r-- 1 root root  6724 2025-03-11 12:37:25.000000000 +0000 ulog.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:25.000000000 +0000 ulog.ko.plt
-rw-r--r-- 1 root root 14208 2025-03-11 12:36:50.000000000 +0000 voltage.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:50.000000000 +0000 voltage.ko.plt

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 sched

/lib/modules/5.6.3/net/bridge:
total 224
-rw-r--r-- 1 root root 198008 2025-03-11 12:41:14.000000000 +0000 bridge2.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:41:14.000000000 +0000 bridge2.ko.plt
-rw-r--r-- 1 root root  18268 2025-03-11 12:41:14.000000000 +0000 bridge2_netfilter.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:41:14.000000000 +0000 bridge2_netfilter.ko.plt
-rw-r--r-- 1 root root   2608 2025-03-11 12:37:25.000000000 +0000 ebt_snif.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:37:25.000000000 +0000 ebt_snif.ko.plt
-rw-r--r-- 1 root root   2840 2025-03-11 12:37:25.000000000 +0000 ebt_ulog.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:37:25.000000000 +0000 ebt_ulog.ko.plt

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 28
-rw-r--r-- 1 root root 3460 2025-03-11 12:36:53.000000000 +0000 ipt_SAME.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:36:53.000000000 +0000 ipt_SAME.ko.plt
-rw-r--r-- 1 root root 5888 2025-03-11 12:36:54.000000000 +0000 ipt_TARPIT.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:36:54.000000000 +0000 ipt_TARPIT.ko.plt
-rw-r--r-- 1 root root 4164 2025-03-11 12:36:55.000000000 +0000 ipt_psd.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:36:55.000000000 +0000 ipt_psd.ko.plt
-rw-r--r-- 1 root root 2692 2025-03-11 12:37:25.000000000 +0000 ipt_snif.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:37:25.000000000 +0000 ipt_snif.ko.plt
-rw-r--r-- 1 root root 3292 2025-03-11 12:37:25.000000000 +0000 ipt_ulog.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:37:25.000000000 +0000 ipt_ulog.ko.plt

/lib/modules/5.6.3/net/netfilter:
total 60
-rw-r--r-- 1 root root  2008 2025-03-11 12:38:16.000000000 +0000 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:16.000000000 +0000 nf_conntrack_ipv4.ko.plt
-rw-r--r-- 1 root root  2008 2025-03-11 12:38:16.000000000 +0000 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:16.000000000 +0000 nf_conntrack_ipv6.ko.plt
-rw-r--r-- 1 root root 11200 2025-03-11 12:38:16.000000000 +0000 xt_ein.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:16.000000000 +0000 xt_ein.ko.plt
-rw-r--r-- 1 root root 13128 2025-03-11 12:37:00.000000000 +0000 xt_layer7.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:00.000000000 +0000 xt_layer7.ko.plt
-rw-r--r-- 1 root root 18448 2025-03-11 12:38:16.000000000 +0000 xt_misc.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:16.000000000 +0000 xt_misc.ko.plt
-rw-r--r-- 1 root root  3520 2025-03-11 12:37:09.000000000 +0000 xt_tls.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:09.000000000 +0000 xt_tls.ko.plt

/lib/modules/5.6.3/net/sched:
total 84
-rw-r--r-- 1 root root  5612 2025-03-11 12:37:15.000000000 +0000 cls_fw.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:15.000000000 +0000 cls_fw.ko.plt
-rw-r--r-- 1 root root 12432 2025-03-11 12:37:15.000000000 +0000 cls_linear.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:15.000000000 +0000 cls_linear.ko.plt
-rw-r--r-- 1 root root 12296 2025-03-11 12:37:31.000000000 +0000 proto_agr.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:31.000000000 +0000 proto_agr.ko.plt
-rw-r--r-- 1 root root 19196 2025-03-11 12:37:32.000000000 +0000 sch_agr.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:32.000000000 +0000 sch_agr.ko.plt
-rw-r--r-- 1 root root 11088 2025-03-11 12:36:58.000000000 +0000 sch_pcq.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:58.000000000 +0000 sch_pcq.ko.plt
-rw-r--r-- 1 root root  9116 2025-03-11 12:39:29.000000000 +0000 sch_sfq.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:29.000000000 +0000 sch_sfq.ko.plt

/lib/modules/5.6.3-440:
total 20
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 drivers
drwxr-xr-x 8 root root 4096 2025-03-11 13:00:48.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 misc
-rw-r--r-- 1 root root 2261 2025-03-11 12:44:10.000000000 +0000 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/lib/modules/5.6.3-440/drivers:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 char
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/lib/modules/5.6.3-440/drivers/char:
total 12
-rw-r--r-- 1 root root 8820 2025-03-11 12:36:51.000000000 +0000 ticker.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:36:51.000000000 +0000 ticker.ko.plt

/lib/modules/5.6.3-440/drivers/net:
total 592
-rw-r--r-- 1 root root  39324 2025-03-11 12:38:30.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:38:30.000000000 +0000 ath8327.ko.plt
-rw-r--r-- 1 root root  25404 2025-03-11 12:38:30.000000000 +0000 aths16.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:38:30.000000000 +0000 aths16.ko.plt
-rw-r--r-- 1 root root  37856 2025-03-11 12:37:24.000000000 +0000 atl1c.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:37:24.000000000 +0000 atl1c.ko.plt
-rw-r--r-- 1 root root  67548 2025-03-11 12:37:08.000000000 +0000 ibm_newemac.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:37:08.000000000 +0000 ibm_newemac.ko.plt
-rw-r--r-- 1 root root   9044 2025-03-11 12:38:58.000000000 +0000 imq.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:38:58.000000000 +0000 imq.ko.plt
-rw-r--r-- 1 root root 189568 2025-03-11 12:42:01.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:01.000000000 +0000 packet_hook.ko.plt
-rw-r--r-- 1 root root  64976 2025-03-11 12:37:53.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:37:53.000000000 +0000 phy_helper.ko.plt
-rw-r--r-- 1 root root  65896 2025-03-11 12:38:30.000000000 +0000 switch.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:38:30.000000000 +0000 switch.ko.plt
-rw-r--r-- 1 root root  22244 2025-03-11 12:36:53.000000000 +0000 via-velocity.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:36:53.000000000 +0000 via-velocity.ko.plt
-rw-r--r-- 1 root root  59144 2025-03-11 12:42:04.000000000 +0000 vxlan2.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 vxlan2.ko.plt

/lib/modules/5.6.3-440/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-03-11 13:00:48.000000000 +0000 arch
drwxr-xr-x  2 root root 4096 2025-03-11 13:00:48.000000000 +0000 crypto
drwxr-xr-x  3 root root 4096 2025-03-11 13:00:48.000000000 +0000 drivers
drwxr-xr-x 11 root root 4096 2025-03-11 13:00:48.000000000 +0000 fs
drwxr-xr-x  5 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib
drwxr-xr-x 11 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/lib/modules/5.6.3-440/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 powerpc

/lib/modules/5.6.3-440/kernel/arch/powerpc:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 oprofile

/lib/modules/5.6.3-440/kernel/arch/powerpc/oprofile:
total 36
-rw-r--r-- 1 root root 32896 2025-03-11 12:42:05.000000000 +0000 oprofile.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 oprofile.ko.plt

/lib/modules/5.6.3-440/kernel/crypto:
total 64
-rw-r--r-- 1 root root  3184 2025-03-11 12:42:05.000000000 +0000 arc4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 arc4.ko.plt
-rw-r--r-- 1 root root 14864 2025-03-11 12:42:05.000000000 +0000 ccm.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 ccm.ko.plt
-rw-r--r-- 1 root root  5408 2025-03-11 12:42:05.000000000 +0000 cmac.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 cmac.ko.plt
-rw-r--r-- 1 root root  4120 2025-03-11 12:42:05.000000000 +0000 des_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 des_generic.ko.plt
-rw-r--r-- 1 root root  5484 2025-03-11 12:42:05.000000000 +0000 md4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 md4.ko.plt
-rw-r--r-- 1 root root  4264 2025-03-11 12:42:05.000000000 +0000 sha1_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 sha1_generic.ko.plt
-rw-r--r-- 1 root root  9304 2025-03-11 12:42:05.000000000 +0000 sha512_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 sha512_generic.ko.plt

/lib/modules/5.6.3-440/kernel/drivers:
total 4
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/lib/modules/5.6.3-440/kernel/drivers/net:
total 108
-rw-r--r-- 1 root root 48044 2025-03-11 12:39:36.000000000 +0000 amt.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:36.000000000 +0000 amt.ko.plt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 bonding
-rw-r--r-- 1 root root 22132 2025-03-11 12:42:03.000000000 +0000 macvlan.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 macvlan.ko.plt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 slip
-rw-r--r-- 1 root root 20740 2025-03-11 12:39:04.000000000 +0000 vrf.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:04.000000000 +0000 vrf.ko.plt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 wireguard

/lib/modules/5.6.3-440/kernel/drivers/net/bonding:
total 144
-rw-r--r-- 1 root root 144220 2025-03-11 12:42:03.000000000 +0000 bonding.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:03.000000000 +0000 bonding.ko.plt

/lib/modules/5.6.3-440/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6076 2025-03-11 12:39:04.000000000 +0000 slhc.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:39:04.000000000 +0000 slhc.ko.plt

/lib/modules/5.6.3-440/kernel/drivers/net/wireguard:
total 100
-rw-r--r-- 1 root root 100660 2025-03-11 12:39:04.000000000 +0000 wireguard.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:39:04.000000000 +0000 wireguard.ko.plt

/lib/modules/5.6.3-440/kernel/fs:
total 44
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 cifs
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 exfat
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ext4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 fat
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 fuse
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 jbd2
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ksmbd
-rw-r--r-- 1 root root 7496 2025-03-11 12:42:05.000000000 +0000 mbcache.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 mbcache.ko.plt
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 nls
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ntfs3

/lib/modules/5.6.3-440/kernel/fs/cifs:
total 520
-rw-r--r-- 1 root root 530876 2025-03-11 12:42:05.000000000 +0000 cifs.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 cifs.ko.plt

/lib/modules/5.6.3-440/kernel/fs/exfat:
total 80
-rw-r--r-- 1 root root 81900 2025-03-11 12:42:05.000000000 +0000 exfat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 exfat.ko.plt

/lib/modules/5.6.3-440/kernel/fs/ext4:
total 468
-rw-r--r-- 1 root root 477032 2025-03-11 12:42:05.000000000 +0000 ext4.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ext4.ko.plt

/lib/modules/5.6.3-440/kernel/fs/fat:
total 92
-rw-r--r-- 1 root root 76448 2025-03-11 12:42:05.000000000 +0000 fat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 fat.ko.plt
-rw-r--r-- 1 root root 14124 2025-03-11 12:42:05.000000000 +0000 vfat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 vfat.ko.plt

/lib/modules/5.6.3-440/kernel/fs/fuse:
total 116
-rw-r--r-- 1 root root 117936 2025-03-11 12:42:05.000000000 +0000 fuse.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 fuse.ko.plt

/lib/modules/5.6.3-440/kernel/fs/jbd2:
total 80
-rw-r--r-- 1 root root 78488 2025-03-11 12:42:05.000000000 +0000 jbd2.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 jbd2.ko.plt

/lib/modules/5.6.3-440/kernel/fs/ksmbd:
total 260
-rw-r--r-- 1 root root 266052 2025-03-11 12:42:05.000000000 +0000 ksmbd.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ksmbd.ko.plt

/lib/modules/5.6.3-440/kernel/fs/nls:
total 28
-rw-r--r-- 1 root root 8180 2025-03-11 12:42:05.000000000 +0000 nls_base.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 nls_base.ko.plt
-rw-r--r-- 1 root root 6684 2025-03-11 12:42:05.000000000 +0000 nls_cp437.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 nls_cp437.ko.plt
-rw-r--r-- 1 root root 5076 2025-03-11 12:42:05.000000000 +0000 nls_iso8859-1.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 nls_iso8859-1.ko.plt
-rw-r--r-- 1 root root 2880 2025-03-11 12:42:05.000000000 +0000 nls_utf8.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 nls_utf8.ko.plt

/lib/modules/5.6.3-440/kernel/fs/ntfs3:
total 232
-rw-r--r-- 1 root root 236060 2025-03-11 12:42:05.000000000 +0000 ntfs3.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ntfs3.ko.plt

/lib/modules/5.6.3-440/kernel/lib:
total 44
-rw-r--r-- 1 root root 4524 2025-03-11 12:42:05.000000000 +0000 asn1_decoder.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 asn1_decoder.ko.plt
-rw-r--r-- 1 root root 3352 2025-03-11 12:39:04.000000000 +0000 crc-ccitt.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:39:04.000000000 +0000 crc-ccitt.ko.plt
-rw-r--r-- 1 root root 2564 2025-03-11 12:42:05.000000000 +0000 crc16.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 crc16.ko.plt
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 crypto
-rw-r--r-- 1 root root 4436 2025-03-11 12:42:05.000000000 +0000 oid_registry.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 oid_registry.ko.plt
-rw-r--r-- 1 root root 3708 2025-03-11 12:42:04.000000000 +0000 ts_bm.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:04.000000000 +0000 ts_bm.ko.plt
-rw-r--r-- 1 root root 3572 2025-03-11 12:42:04.000000000 +0000 ts_kmp.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:04.000000000 +0000 ts_kmp.ko.plt
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 zlib_inflate

/lib/modules/5.6.3-440/kernel/lib/crypto:
total 72
-rw-r--r-- 1 root root  2196 2025-03-11 12:42:05.000000000 +0000 libarc4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libarc4.ko.plt
-rw-r--r-- 1 root root  7216 2025-03-11 12:42:05.000000000 +0000 libblake2s-generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libblake2s-generic.ko.plt
-rw-r--r-- 1 root root  4092 2025-03-11 12:42:05.000000000 +0000 libblake2s.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libblake2s.ko.plt
-rw-r--r-- 1 root root  2252 2025-03-11 12:42:05.000000000 +0000 libchacha.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libchacha.ko.plt
-rw-r--r-- 1 root root  7740 2025-03-11 12:42:05.000000000 +0000 libchacha20poly1305.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libchacha20poly1305.ko.plt
-rw-r--r-- 1 root root 10812 2025-03-11 12:42:05.000000000 +0000 libcurve25519-generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libcurve25519-generic.ko.plt
-rw-r--r-- 1 root root  1916 2025-03-11 12:42:05.000000000 +0000 libcurve25519.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libcurve25519.ko.plt
-rw-r--r-- 1 root root 18356 2025-03-11 12:42:05.000000000 +0000 libdes.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libdes.ko.plt
-rw-r--r-- 1 root root  4900 2025-03-11 12:42:05.000000000 +0000 libpoly1305.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libpoly1305.ko.plt

/lib/modules/5.6.3-440/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19924 2025-03-11 12:39:36.000000000 +0000 zlib_deflate.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:36.000000000 +0000 zlib_deflate.ko.plt

/lib/modules/5.6.3-440/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 15436 2025-03-11 12:39:32.000000000 +0000 zlib_inflate.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:32.000000000 +0000 zlib_inflate.ko.plt

/lib/modules/5.6.3-440/kernel/net:
total 36
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 802
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 8021q
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv6
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 sched
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 unix
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 xfrm

/lib/modules/5.6.3-440/kernel/net/802:
total 12
-rw-r--r-- 1 root root 11568 2025-03-11 12:39:36.000000000 +0000 mrp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:36.000000000 +0000 mrp.ko.plt

/lib/modules/5.6.3-440/kernel/net/8021q:
total 28
-rw-r--r-- 1 root root 28204 2025-03-11 12:42:03.000000000 +0000 8021q.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 8021q.ko.plt

/lib/modules/5.6.3-440/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 netfilter

/lib/modules/5.6.3-440/kernel/net/bridge/netfilter:
total 84
-rw-r--r-- 1 root root  2660 2025-03-11 12:42:04.000000000 +0000 ebt_802_3.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_802_3.ko.plt
-rw-r--r-- 1 root root  3652 2025-03-11 12:42:04.000000000 +0000 ebt_arp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_arp.ko.plt
-rw-r--r-- 1 root root  3264 2025-03-11 12:42:04.000000000 +0000 ebt_arpreply.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_arpreply.ko.plt
-rw-r--r-- 1 root root  3272 2025-03-11 12:42:04.000000000 +0000 ebt_dnat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_dnat.ko.plt
-rw-r--r-- 1 root root  3684 2025-03-11 12:42:04.000000000 +0000 ebt_ip.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_ip.ko.plt
-rw-r--r-- 1 root root  3856 2025-03-11 12:42:04.000000000 +0000 ebt_ip6.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_ip6.ko.plt
-rw-r--r-- 1 root root  3556 2025-03-11 12:42:04.000000000 +0000 ebt_limit.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_limit.ko.plt
-rw-r--r-- 1 root root  2600 2025-03-11 12:42:04.000000000 +0000 ebt_mark.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_mark.ko.plt
-rw-r--r-- 1 root root  2532 2025-03-11 12:42:04.000000000 +0000 ebt_mark_m.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_mark_m.ko.plt
-rw-r--r-- 1 root root  2500 2025-03-11 12:42:04.000000000 +0000 ebt_pkttype.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_pkttype.ko.plt
-rw-r--r-- 1 root root  3144 2025-03-11 12:42:04.000000000 +0000 ebt_redirect.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_redirect.ko.plt
-rw-r--r-- 1 root root  3104 2025-03-11 12:42:04.000000000 +0000 ebt_snat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_snat.ko.plt
-rw-r--r-- 1 root root  4076 2025-03-11 12:42:04.000000000 +0000 ebt_stp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_stp.ko.plt
-rw-r--r-- 1 root root  3052 2025-03-11 12:42:04.000000000 +0000 ebt_vlan.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_vlan.ko.plt
-rw-r--r-- 1 root root  3236 2025-03-11 12:42:04.000000000 +0000 ebtable_filter.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebtable_filter.ko.plt
-rw-r--r-- 1 root root  3236 2025-03-11 12:42:04.000000000 +0000 ebtable_nat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebtable_nat.ko.plt
-rw-r--r-- 1 root root 17064 2025-03-11 12:42:04.000000000 +0000 ebtables.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebtables.ko.plt

/lib/modules/5.6.3-440/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 18884 2025-03-11 12:39:05.000000000 +0000 ip_tunnel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:05.000000000 +0000 ip_tunnel.ko.plt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 netfilter
-rw-r--r-- 1 root root 16112 2025-03-11 12:42:03.000000000 +0000 udp_tunnel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 udp_tunnel.ko.plt

/lib/modules/5.6.3-440/kernel/net/ipv4/netfilter:
total 80
-rw-r--r-- 1 root root 16092 2025-03-11 12:42:04.000000000 +0000 ip_tables.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ip_tables.ko.plt
-rw-r--r-- 1 root root  3852 2025-03-11 12:42:04.000000000 +0000 ipt_REJECT.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ipt_REJECT.ko.plt
-rw-r--r-- 1 root root  4164 2025-03-11 12:42:04.000000000 +0000 iptable_filter.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 iptable_filter.ko.plt
-rw-r--r-- 1 root root  4280 2025-03-11 12:42:04.000000000 +0000 iptable_mangle.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 iptable_mangle.ko.plt
-rw-r--r-- 1 root root  3824 2025-03-11 12:42:04.000000000 +0000 iptable_nat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 iptable_nat.ko.plt
-rw-r--r-- 1 root root  4436 2025-03-11 12:42:04.000000000 +0000 iptable_raw.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 iptable_raw.ko.plt
-rw-r--r-- 1 root root  3824 2025-03-11 12:42:04.000000000 +0000 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_defrag_ipv4.ko.plt
-rw-r--r-- 1 root root 10708 2025-03-11 12:42:04.000000000 +0000 nf_nat_h323.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_h323.ko.plt
-rw-r--r-- 1 root root  5192 2025-03-11 12:42:04.000000000 +0000 nf_nat_pptp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_pptp.ko.plt
-rw-r--r-- 1 root root  4568 2025-03-11 12:42:04.000000000 +0000 nf_reject_ipv4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_reject_ipv4.ko.plt

/lib/modules/5.6.3-440/kernel/net/ipv6:
total 516
-rw-r--r-- 1 root root  10112 2025-03-11 12:42:05.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ah6.ko.plt
-rw-r--r-- 1 root root  13288 2025-03-11 12:42:05.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 esp6.ko.plt
-rw-r--r-- 1 root root   3592 2025-03-11 12:42:03.000000000 +0000 ip6_udp_tunnel.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:03.000000000 +0000 ip6_udp_tunnel.ko.plt
-rw-r--r-- 1 root root 483316 2025-03-11 12:42:05.000000000 +0000 ipv6.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ipv6.ko.plt
drwxr-xr-x 2 root root   4096 2025-03-11 13:00:48.000000000 +0000 netfilter
-rw-r--r-- 1 root root   5668 2025-03-11 12:42:05.000000000 +0000 tunnel6.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 tunnel6.ko.plt

/lib/modules/5.6.3-440/kernel/net/ipv6/netfilter:
total 88
-rw-r--r-- 1 root root 16520 2025-03-11 12:42:04.000000000 +0000 ip6_tables.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ip6_tables.ko.plt
-rw-r--r-- 1 root root  4364 2025-03-11 12:42:06.000000000 +0000 ip6t_NPT.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6t_NPT.ko.plt
-rw-r--r-- 1 root root  3888 2025-03-11 12:42:06.000000000 +0000 ip6t_REJECT.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6t_REJECT.ko.plt
-rw-r--r-- 1 root root  2788 2025-03-11 12:42:06.000000000 +0000 ip6t_eui64.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6t_eui64.ko.plt
-rw-r--r-- 1 root root  3212 2025-03-11 12:42:06.000000000 +0000 ip6t_ipv6header.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6t_ipv6header.ko.plt
-rw-r--r-- 1 root root  4212 2025-03-11 12:42:06.000000000 +0000 ip6table_filter.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6table_filter.ko.plt
-rw-r--r-- 1 root root  4480 2025-03-11 12:42:06.000000000 +0000 ip6table_mangle.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6table_mangle.ko.plt
-rw-r--r-- 1 root root  3828 2025-03-11 12:42:06.000000000 +0000 ip6table_nat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6table_nat.ko.plt
-rw-r--r-- 1 root root  4472 2025-03-11 12:42:06.000000000 +0000 ip6table_raw.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6table_raw.ko.plt
-rw-r--r-- 1 root root 11036 2025-03-11 12:42:04.000000000 +0000 nf_defrag_ipv6.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_defrag_ipv6.ko.plt
-rw-r--r-- 1 root root  5200 2025-03-11 12:42:06.000000000 +0000 nf_reject_ipv6.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 nf_reject_ipv6.ko.plt

/lib/modules/5.6.3-440/kernel/net/netfilter:
total 532
-rw-r--r-- 1 root root 99552 2025-03-11 12:42:04.000000000 +0000 nf_conntrack.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack.ko.plt
-rw-r--r-- 1 root root 10536 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_ftp.ko.plt
-rw-r--r-- 1 root root 43000 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_h323.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_h323.ko.plt
-rw-r--r-- 1 root root  8248 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_irc.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_irc.ko.plt
-rw-r--r-- 1 root root 28536 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_netlink.ko.plt
-rw-r--r-- 1 root root  8352 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_pptp.ko.plt
-rw-r--r-- 1 root root  8456 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_rtsp.ko.plt
-rw-r--r-- 1 root root 28244 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_sip.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_sip.ko.plt
-rw-r--r-- 1 root root  6904 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_tftp.ko.plt
-rw-r--r-- 1 root root 31196 2025-03-11 12:42:04.000000000 +0000 nf_nat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat.ko.plt
-rw-r--r-- 1 root root  4776 2025-03-11 12:42:04.000000000 +0000 nf_nat_ftp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_ftp.ko.plt
-rw-r--r-- 1 root root  4492 2025-03-11 12:42:04.000000000 +0000 nf_nat_irc.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_irc.ko.plt
-rw-r--r-- 1 root root  7896 2025-03-11 12:42:04.000000000 +0000 nf_nat_rtsp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_rtsp.ko.plt
-rw-r--r-- 1 root root 12264 2025-03-11 12:42:04.000000000 +0000 nf_nat_sip.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_sip.ko.plt
-rw-r--r-- 1 root root  3400 2025-03-11 12:42:04.000000000 +0000 nf_nat_tftp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_tftp.ko.plt
-rw-r--r-- 1 root root  9488 2025-03-11 12:42:04.000000000 +0000 nfnetlink.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nfnetlink.ko.plt
-rw-r--r-- 1 root root 27592 2025-03-11 12:42:04.000000000 +0000 x_tables.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 x_tables.ko.plt
-rw-r--r-- 1 root root  6684 2025-03-11 12:42:04.000000000 +0000 xt_CT.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_CT.ko.plt
-rw-r--r-- 1 root root  4248 2025-03-11 12:42:04.000000000 +0000 xt_DSCP.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_DSCP.ko.plt
-rw-r--r-- 1 root root  3628 2025-03-11 12:42:04.000000000 +0000 xt_HL.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_HL.ko.plt
-rw-r--r-- 1 root root  3692 2025-03-11 12:42:04.000000000 +0000 xt_MASQUERADE.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_MASQUERADE.ko.plt
-rw-r--r-- 1 root root  3952 2025-03-11 12:42:04.000000000 +0000 xt_NETMAP.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_NETMAP.ko.plt
-rw-r--r-- 1 root root  3236 2025-03-11 12:42:04.000000000 +0000 xt_REDIRECT.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_REDIRECT.ko.plt
-rw-r--r-- 1 root root  6516 2025-03-11 12:42:04.000000000 +0000 xt_TCPMSS.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_TCPMSS.ko.plt
-rw-r--r-- 1 root root  5280 2025-03-11 12:42:04.000000000 +0000 xt_addrtype.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_addrtype.ko.plt
-rw-r--r-- 1 root root  4404 2025-03-11 12:42:04.000000000 +0000 xt_connbytes.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_connbytes.ko.plt
-rw-r--r-- 1 root root  4872 2025-03-11 12:42:04.000000000 +0000 xt_connmark.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_connmark.ko.plt
-rw-r--r-- 1 root root  5292 2025-03-11 12:42:04.000000000 +0000 xt_conntrack.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_conntrack.ko.plt
-rw-r--r-- 1 root root  3156 2025-03-11 12:42:04.000000000 +0000 xt_dscp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_dscp.ko.plt
-rw-r--r-- 1 root root 18272 2025-03-11 12:42:04.000000000 +0000 xt_hashlimit.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_hashlimit.ko.plt
-rw-r--r-- 1 root root  3636 2025-03-11 12:42:04.000000000 +0000 xt_helper.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_helper.ko.plt
-rw-r--r-- 1 root root  2868 2025-03-11 12:42:04.000000000 +0000 xt_hl.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_hl.ko.plt
-rw-r--r-- 1 root root  2772 2025-03-11 12:42:04.000000000 +0000 xt_length.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_length.ko.plt
-rw-r--r-- 1 root root  2604 2025-03-11 12:42:04.000000000 +0000 xt_mac.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_mac.ko.plt
-rw-r--r-- 1 root root  3080 2025-03-11 12:42:04.000000000 +0000 xt_mark.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_mark.ko.plt
-rw-r--r-- 1 root root  3596 2025-03-11 12:42:04.000000000 +0000 xt_multiport.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_multiport.ko.plt
-rw-r--r-- 1 root root  5496 2025-03-11 12:42:04.000000000 +0000 xt_nat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_nat.ko.plt
-rw-r--r-- 1 root root  3992 2025-03-11 12:42:04.000000000 +0000 xt_physdev.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_physdev.ko.plt
-rw-r--r-- 1 root root  4676 2025-03-11 12:42:04.000000000 +0000 xt_policy.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_policy.ko.plt
-rw-r--r-- 1 root root  2508 2025-03-11 12:42:04.000000000 +0000 xt_realm.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_realm.ko.plt
-rw-r--r-- 1 root root  3220 2025-03-11 12:42:04.000000000 +0000 xt_statistic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_statistic.ko.plt
-rw-r--r-- 1 root root  3116 2025-03-11 12:42:04.000000000 +0000 xt_string.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_string.ko.plt
-rw-r--r-- 1 root root  3240 2025-03-11 12:42:04.000000000 +0000 xt_tcpmss.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_tcpmss.ko.plt
-rw-r--r-- 1 root root  4220 2025-03-11 12:42:04.000000000 +0000 xt_tcpudp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_tcpudp.ko.plt

/lib/modules/5.6.3-440/kernel/net/sched:
total 96
-rw-r--r-- 1 root root 28108 2025-03-11 12:42:03.000000000 +0000 sch_cake.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_cake.ko.plt
-rw-r--r-- 1 root root  8348 2025-03-11 12:42:03.000000000 +0000 sch_codel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_codel.ko.plt
-rw-r--r-- 1 root root 11332 2025-03-11 12:42:03.000000000 +0000 sch_fq_codel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_fq_codel.ko.plt
-rw-r--r-- 1 root root 29064 2025-03-11 12:42:03.000000000 +0000 sch_htb.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_htb.ko.plt
-rw-r--r-- 1 root root 10260 2025-03-11 12:42:03.000000000 +0000 sch_red.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_red.ko.plt

/lib/modules/5.6.3-440/kernel/net/unix:
total 36
-rw-r--r-- 1 root root 34812 2025-03-11 12:42:03.000000000 +0000 unix.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 unix.ko.plt

/lib/modules/5.6.3-440/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 8080 2025-03-11 12:42:03.000000000 +0000 xfrm_algo.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:03.000000000 +0000 xfrm_algo.ko.plt

/lib/modules/5.6.3-440/misc:
total 212
-rw-r--r-- 1 root root 10712 2025-03-11 12:36:55.000000000 +0000 btest.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:55.000000000 +0000 btest.ko.plt
-rw-r--r-- 1 root root  6388 2025-03-11 12:40:50.000000000 +0000 dot1x.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:40:50.000000000 +0000 dot1x.ko.plt
-rw-r--r-- 1 root root 47892 2025-03-11 12:37:21.000000000 +0000 flash.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:21.000000000 +0000 flash.ko.plt
-rw-r--r-- 1 root root  4748 2025-03-11 12:39:20.000000000 +0000 jiffies.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:20.000000000 +0000 jiffies.ko.plt
-rw-r--r-- 1 root root  3108 2025-03-11 12:37:14.000000000 +0000 ledgroup.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:14.000000000 +0000 ledgroup.ko.plt
-rw-r--r-- 1 root root 10736 2025-03-11 12:36:48.000000000 +0000 logring.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:48.000000000 +0000 logring.ko.plt
-rw-r--r-- 1 root root 25336 2025-03-11 12:37:30.000000000 +0000 mesh.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:30.000000000 +0000 mesh.ko.plt
-rw-r--r-- 1 root root  9004 2025-03-11 12:36:47.000000000 +0000 panics.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:47.000000000 +0000 panics.ko.plt
-rw-r--r-- 1 root root  9064 2025-03-11 12:38:59.000000000 +0000 rb.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:59.000000000 +0000 rb.ko.plt
-rw-r--r-- 1 root root  5896 2025-03-11 12:39:27.000000000 +0000 romon.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:27.000000000 +0000 romon.ko.plt
-rw-r--r-- 1 root root  5728 2025-03-11 12:37:25.000000000 +0000 snif.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:25.000000000 +0000 snif.ko.plt
-rw-r--r-- 1 root root 26624 2025-03-11 12:37:45.000000000 +0000 traffic_gen.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:45.000000000 +0000 traffic_gen.ko.plt
-rw-r--r-- 1 root root  6724 2025-03-11 12:37:25.000000000 +0000 ulog.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:25.000000000 +0000 ulog.ko.plt
-rw-r--r-- 1 root root 12872 2025-03-11 12:36:50.000000000 +0000 voltage.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:50.000000000 +0000 voltage.ko.plt

/lib/modules/5.6.3-440/net:
total 16
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 sched

/lib/modules/5.6.3-440/net/bridge:
total 224
-rw-r--r-- 1 root root 197900 2025-03-11 12:41:14.000000000 +0000 bridge2.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:41:14.000000000 +0000 bridge2.ko.plt
-rw-r--r-- 1 root root  18268 2025-03-11 12:41:12.000000000 +0000 bridge2_netfilter.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:41:12.000000000 +0000 bridge2_netfilter.ko.plt
-rw-r--r-- 1 root root   2608 2025-03-11 12:37:25.000000000 +0000 ebt_snif.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:37:25.000000000 +0000 ebt_snif.ko.plt
-rw-r--r-- 1 root root   2840 2025-03-11 12:37:25.000000000 +0000 ebt_ulog.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:37:25.000000000 +0000 ebt_ulog.ko.plt

/lib/modules/5.6.3-440/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 netfilter

/lib/modules/5.6.3-440/net/ipv4/netfilter:
total 28
-rw-r--r-- 1 root root 3460 2025-03-11 12:36:53.000000000 +0000 ipt_SAME.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:36:53.000000000 +0000 ipt_SAME.ko.plt
-rw-r--r-- 1 root root 5888 2025-03-11 12:36:54.000000000 +0000 ipt_TARPIT.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:36:54.000000000 +0000 ipt_TARPIT.ko.plt
-rw-r--r-- 1 root root 4164 2025-03-11 12:36:55.000000000 +0000 ipt_psd.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:36:55.000000000 +0000 ipt_psd.ko.plt
-rw-r--r-- 1 root root 2692 2025-03-11 12:37:25.000000000 +0000 ipt_snif.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:37:25.000000000 +0000 ipt_snif.ko.plt
-rw-r--r-- 1 root root 3292 2025-03-11 12:37:25.000000000 +0000 ipt_ulog.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:37:25.000000000 +0000 ipt_ulog.ko.plt

/lib/modules/5.6.3-440/net/netfilter:
total 60
-rw-r--r-- 1 root root  2008 2025-03-11 12:38:16.000000000 +0000 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:16.000000000 +0000 nf_conntrack_ipv4.ko.plt
-rw-r--r-- 1 root root  2008 2025-03-11 12:38:16.000000000 +0000 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:16.000000000 +0000 nf_conntrack_ipv6.ko.plt
-rw-r--r-- 1 root root 11200 2025-03-11 12:38:16.000000000 +0000 xt_ein.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:16.000000000 +0000 xt_ein.ko.plt
-rw-r--r-- 1 root root 13128 2025-03-11 12:37:00.000000000 +0000 xt_layer7.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:00.000000000 +0000 xt_layer7.ko.plt
-rw-r--r-- 1 root root 18448 2025-03-11 12:38:16.000000000 +0000 xt_misc.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:16.000000000 +0000 xt_misc.ko.plt
-rw-r--r-- 1 root root  3520 2025-03-11 12:37:09.000000000 +0000 xt_tls.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:09.000000000 +0000 xt_tls.ko.plt

/lib/modules/5.6.3-440/net/sched:
total 84
-rw-r--r-- 1 root root  5612 2025-03-11 12:37:16.000000000 +0000 cls_fw.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:16.000000000 +0000 cls_fw.ko.plt
-rw-r--r-- 1 root root 12432 2025-03-11 12:37:16.000000000 +0000 cls_linear.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:16.000000000 +0000 cls_linear.ko.plt
-rw-r--r-- 1 root root 12328 2025-03-11 12:37:31.000000000 +0000 proto_agr.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:31.000000000 +0000 proto_agr.ko.plt
-rw-r--r-- 1 root root 19228 2025-03-11 12:37:32.000000000 +0000 sch_agr.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:32.000000000 +0000 sch_agr.ko.plt
-rw-r--r-- 1 root root 11088 2025-03-11 12:36:58.000000000 +0000 sch_pcq.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:58.000000000 +0000 sch_pcq.ko.plt
-rw-r--r-- 1 root root  9116 2025-03-11 12:39:29.000000000 +0000 sch_sfq.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:29.000000000 +0000 sch_sfq.ko.plt

/lib/modules/5.6.3-e500:
total 20
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 drivers
drwxr-xr-x 8 root root 4096 2025-03-11 13:00:48.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 misc
-rw-r--r-- 1 root root 2483 2025-03-11 12:44:10.000000000 +0000 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/lib/modules/5.6.3-e500/drivers:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 char
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/lib/modules/5.6.3-e500/drivers/char:
total 12
-rw-r--r-- 1 root root 8940 2025-03-11 12:36:51.000000000 +0000 ticker.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:36:51.000000000 +0000 ticker.ko.plt

/lib/modules/5.6.3-e500/drivers/net:
total 1940
-rw-r--r-- 1 root root   39324 2025-03-11 12:38:31.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:38:31.000000000 +0000 ath8327.ko.plt
-rw-r--r-- 1 root root   25404 2025-03-11 12:38:31.000000000 +0000 aths16.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:38:31.000000000 +0000 aths16.ko.plt
-rw-r--r-- 1 root root   38188 2025-03-11 12:37:24.000000000 +0000 atl1c.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:37:24.000000000 +0000 atl1c.ko.plt
-rw-r--r-- 1 root root 1392544 2025-03-11 12:38:00.000000000 +0000 dpa.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:38:00.000000000 +0000 dpa.ko.plt
-rw-r--r-- 1 root root   10452 2025-03-11 12:37:02.000000000 +0000 fsl_pq_mdio.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:37:02.000000000 +0000 fsl_pq_mdio.ko.plt
-rw-r--r-- 1 root root   28196 2025-03-11 12:36:58.000000000 +0000 gianfar.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:36:58.000000000 +0000 gianfar.ko.plt
-rw-r--r-- 1 root root    9044 2025-03-11 12:38:58.000000000 +0000 imq.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:38:58.000000000 +0000 imq.ko.plt
-rw-r--r-- 1 root root   10848 2025-03-11 12:42:00.000000000 +0000 mpls_fp.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:42:00.000000000 +0000 mpls_fp.ko.plt
-rw-r--r-- 1 root root  189568 2025-03-11 12:42:01.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:42:01.000000000 +0000 packet_hook.ko.plt
-rw-r--r-- 1 root root   64976 2025-03-11 12:37:53.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:37:53.000000000 +0000 phy_helper.ko.plt
-rw-r--r-- 1 root root    3828 2025-03-11 12:38:55.000000000 +0000 sram.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:38:55.000000000 +0000 sram.ko.plt
-rw-r--r-- 1 root root   65896 2025-03-11 12:38:31.000000000 +0000 switch.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:38:31.000000000 +0000 switch.ko.plt
-rw-r--r-- 1 root root   22164 2025-03-11 12:36:53.000000000 +0000 via-velocity.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:36:53.000000000 +0000 via-velocity.ko.plt
-rw-r--r-- 1 root root   59144 2025-03-11 12:42:04.000000000 +0000 vxlan2.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:42:04.000000000 +0000 vxlan2.ko.plt

/lib/modules/5.6.3-e500/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-03-11 13:00:48.000000000 +0000 arch
drwxr-xr-x  2 root root 4096 2025-03-11 13:00:48.000000000 +0000 crypto
drwxr-xr-x  5 root root 4096 2025-03-11 13:00:48.000000000 +0000 drivers
drwxr-xr-x 11 root root 4096 2025-03-11 13:00:48.000000000 +0000 fs
drwxr-xr-x  5 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib
drwxr-xr-x 13 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/lib/modules/5.6.3-e500/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 powerpc

/lib/modules/5.6.3-e500/kernel/arch/powerpc:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 oprofile

/lib/modules/5.6.3-e500/kernel/arch/powerpc/oprofile:
total 40
-rw-r--r-- 1 root root 38500 2025-03-11 12:42:05.000000000 +0000 oprofile.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 oprofile.ko.plt

/lib/modules/5.6.3-e500/kernel/crypto:
total 60
-rw-r--r-- 1 root root  3152 2025-03-11 12:42:05.000000000 +0000 arc4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 arc4.ko.plt
-rw-r--r-- 1 root root 14864 2025-03-11 12:42:05.000000000 +0000 ccm.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 ccm.ko.plt
-rw-r--r-- 1 root root  5408 2025-03-11 12:42:05.000000000 +0000 cmac.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 cmac.ko.plt
-rw-r--r-- 1 root root  4088 2025-03-11 12:42:05.000000000 +0000 des_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 des_generic.ko.plt
-rw-r--r-- 1 root root  5420 2025-03-11 12:42:05.000000000 +0000 md4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 md4.ko.plt
-rw-r--r-- 1 root root  4232 2025-03-11 12:42:05.000000000 +0000 sha1_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 sha1_generic.ko.plt
-rw-r--r-- 1 root root  9208 2025-03-11 12:42:05.000000000 +0000 sha512_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 sha512_generic.ko.plt

/lib/modules/5.6.3-e500/kernel/drivers:
total 12
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 crypto
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 mmc
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/lib/modules/5.6.3-e500/kernel/drivers/crypto:
total 52
-rw-r--r-- 1 root root 49632 2025-03-11 12:42:05.000000000 +0000 talitos.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 talitos.ko.plt

/lib/modules/5.6.3-e500/kernel/drivers/mmc:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 core
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 host

/lib/modules/5.6.3-e500/kernel/drivers/mmc/core:
total 160
-rw-r--r-- 1 root root  38448 2025-03-11 12:42:04.000000000 +0000 mmc_block.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 mmc_block.ko.plt
-rw-r--r-- 1 root root 122340 2025-03-11 12:42:04.000000000 +0000 mmc_core.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 mmc_core.ko.plt

/lib/modules/5.6.3-e500/kernel/drivers/mmc/host:
total 20
-rw-r--r-- 1 root root 15392 2025-03-11 12:42:04.000000000 +0000 mmc_spi.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 mmc_spi.ko.plt
-rw-r--r-- 1 root root  2900 2025-03-11 12:42:04.000000000 +0000 of_mmc_spi.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 of_mmc_spi.ko.plt

/lib/modules/5.6.3-e500/kernel/drivers/net:
total 228
-rw-r--r-- 1 root root 48076 2025-03-11 12:41:08.000000000 +0000 amt.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:41:08.000000000 +0000 amt.ko.plt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 bonding
-rw-r--r-- 1 root root 37632 2025-03-11 12:40:49.000000000 +0000 macsec.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:40:49.000000000 +0000 macsec.ko.plt
-rw-r--r-- 1 root root 22608 2025-03-11 12:42:03.000000000 +0000 macvlan.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 macvlan.ko.plt
-rw-r--r-- 1 root root 13172 2025-03-11 12:40:30.000000000 +0000 net_failover.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:40:30.000000000 +0000 net_failover.ko.plt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 slip
-rw-r--r-- 1 root root 17832 2025-03-11 12:40:54.000000000 +0000 veth.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:40:54.000000000 +0000 veth.ko.plt
-rw-r--r-- 1 root root 41264 2025-03-11 12:40:31.000000000 +0000 virtio_net.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:40:31.000000000 +0000 virtio_net.ko.plt
-rw-r--r-- 1 root root 20772 2025-03-11 12:39:42.000000000 +0000 vrf.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:42.000000000 +0000 vrf.ko.plt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 wireguard

/lib/modules/5.6.3-e500/kernel/drivers/net/bonding:
total 144
-rw-r--r-- 1 root root 144252 2025-03-11 12:42:03.000000000 +0000 bonding.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:03.000000000 +0000 bonding.ko.plt

/lib/modules/5.6.3-e500/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6076 2025-03-11 12:39:41.000000000 +0000 slhc.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:39:41.000000000 +0000 slhc.ko.plt

/lib/modules/5.6.3-e500/kernel/drivers/net/wireguard:
total 100
-rw-r--r-- 1 root root 100948 2025-03-11 12:39:42.000000000 +0000 wireguard.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:39:42.000000000 +0000 wireguard.ko.plt

/lib/modules/5.6.3-e500/kernel/fs:
total 44
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 cifs
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 exfat
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ext4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 fat
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 fuse
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 jbd2
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ksmbd
-rw-r--r-- 1 root root 7496 2025-03-11 12:42:05.000000000 +0000 mbcache.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 mbcache.ko.plt
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 nls
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ntfs3

/lib/modules/5.6.3-e500/kernel/fs/cifs:
total 520
-rw-r--r-- 1 root root 531116 2025-03-11 12:42:05.000000000 +0000 cifs.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 cifs.ko.plt

/lib/modules/5.6.3-e500/kernel/fs/exfat:
total 84
-rw-r--r-- 1 root root 81932 2025-03-11 12:42:05.000000000 +0000 exfat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 exfat.ko.plt

/lib/modules/5.6.3-e500/kernel/fs/ext4:
total 468
-rw-r--r-- 1 root root 477208 2025-03-11 12:42:05.000000000 +0000 ext4.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ext4.ko.plt

/lib/modules/5.6.3-e500/kernel/fs/fat:
total 92
-rw-r--r-- 1 root root 76728 2025-03-11 12:42:05.000000000 +0000 fat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 fat.ko.plt
-rw-r--r-- 1 root root 14124 2025-03-11 12:42:05.000000000 +0000 vfat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 vfat.ko.plt

/lib/modules/5.6.3-e500/kernel/fs/fuse:
total 116
-rw-r--r-- 1 root root 118184 2025-03-11 12:42:05.000000000 +0000 fuse.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 fuse.ko.plt

/lib/modules/5.6.3-e500/kernel/fs/jbd2:
total 80
-rw-r--r-- 1 root root 78452 2025-03-11 12:42:05.000000000 +0000 jbd2.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 jbd2.ko.plt

/lib/modules/5.6.3-e500/kernel/fs/ksmbd:
total 260
-rw-r--r-- 1 root root 266056 2025-03-11 12:42:05.000000000 +0000 ksmbd.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ksmbd.ko.plt

/lib/modules/5.6.3-e500/kernel/fs/nls:
total 28
-rw-r--r-- 1 root root 8180 2025-03-11 12:42:05.000000000 +0000 nls_base.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 nls_base.ko.plt
-rw-r--r-- 1 root root 6684 2025-03-11 12:42:05.000000000 +0000 nls_cp437.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 nls_cp437.ko.plt
-rw-r--r-- 1 root root 5076 2025-03-11 12:42:05.000000000 +0000 nls_iso8859-1.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 nls_iso8859-1.ko.plt
-rw-r--r-- 1 root root 2880 2025-03-11 12:42:05.000000000 +0000 nls_utf8.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 nls_utf8.ko.plt

/lib/modules/5.6.3-e500/kernel/fs/ntfs3:
total 232
-rw-r--r-- 1 root root 236220 2025-03-11 12:42:05.000000000 +0000 ntfs3.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ntfs3.ko.plt

/lib/modules/5.6.3-e500/kernel/lib:
total 48
-rw-r--r-- 1 root root 4524 2025-03-11 12:42:05.000000000 +0000 asn1_decoder.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 asn1_decoder.ko.plt
-rw-r--r-- 1 root root 3352 2025-03-11 12:39:41.000000000 +0000 crc-ccitt.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:39:41.000000000 +0000 crc-ccitt.ko.plt
-rw-r--r-- 1 root root 2604 2025-03-11 12:42:04.000000000 +0000 crc-itu-t.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:04.000000000 +0000 crc-itu-t.ko.plt
-rw-r--r-- 1 root root 2288 2025-03-11 12:42:04.000000000 +0000 crc7.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:04.000000000 +0000 crc7.ko.plt
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 crypto
-rw-r--r-- 1 root root 4436 2025-03-11 12:42:05.000000000 +0000 oid_registry.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 oid_registry.ko.plt
-rw-r--r-- 1 root root 3708 2025-03-11 12:42:04.000000000 +0000 ts_bm.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:04.000000000 +0000 ts_bm.ko.plt
-rw-r--r-- 1 root root 3572 2025-03-11 12:42:04.000000000 +0000 ts_kmp.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:04.000000000 +0000 ts_kmp.ko.plt
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 zlib_inflate

/lib/modules/5.6.3-e500/kernel/lib/crypto:
total 72
-rw-r--r-- 1 root root  2196 2025-03-11 12:42:05.000000000 +0000 libarc4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libarc4.ko.plt
-rw-r--r-- 1 root root  7216 2025-03-11 12:42:05.000000000 +0000 libblake2s-generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libblake2s-generic.ko.plt
-rw-r--r-- 1 root root  4092 2025-03-11 12:42:05.000000000 +0000 libblake2s.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libblake2s.ko.plt
-rw-r--r-- 1 root root  2252 2025-03-11 12:42:05.000000000 +0000 libchacha.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libchacha.ko.plt
-rw-r--r-- 1 root root  7740 2025-03-11 12:42:05.000000000 +0000 libchacha20poly1305.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libchacha20poly1305.ko.plt
-rw-r--r-- 1 root root 10812 2025-03-11 12:42:05.000000000 +0000 libcurve25519-generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libcurve25519-generic.ko.plt
-rw-r--r-- 1 root root  1916 2025-03-11 12:42:05.000000000 +0000 libcurve25519.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libcurve25519.ko.plt
-rw-r--r-- 1 root root 18356 2025-03-11 12:42:05.000000000 +0000 libdes.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libdes.ko.plt
-rw-r--r-- 1 root root  4900 2025-03-11 12:42:05.000000000 +0000 libpoly1305.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libpoly1305.ko.plt

/lib/modules/5.6.3-e500/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19924 2025-03-11 12:40:30.000000000 +0000 zlib_deflate.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:40:30.000000000 +0000 zlib_deflate.ko.plt

/lib/modules/5.6.3-e500/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 15436 2025-03-11 12:40:30.000000000 +0000 zlib_inflate.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:40:30.000000000 +0000 zlib_inflate.ko.plt

/lib/modules/5.6.3-e500/kernel/net:
total 44
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 802
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 8021q
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 bridge
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 core
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv6
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 mpls
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 sched
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 unix
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 xfrm

/lib/modules/5.6.3-e500/kernel/net/802:
total 12
-rw-r--r-- 1 root root 11568 2025-03-11 12:40:54.000000000 +0000 mrp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:40:54.000000000 +0000 mrp.ko.plt

/lib/modules/5.6.3-e500/kernel/net/8021q:
total 28
-rw-r--r-- 1 root root 28204 2025-03-11 12:42:03.000000000 +0000 8021q.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 8021q.ko.plt

/lib/modules/5.6.3-e500/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 netfilter

/lib/modules/5.6.3-e500/kernel/net/bridge/netfilter:
total 84
-rw-r--r-- 1 root root  2660 2025-03-11 12:42:04.000000000 +0000 ebt_802_3.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_802_3.ko.plt
-rw-r--r-- 1 root root  3652 2025-03-11 12:42:04.000000000 +0000 ebt_arp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_arp.ko.plt
-rw-r--r-- 1 root root  3264 2025-03-11 12:42:04.000000000 +0000 ebt_arpreply.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_arpreply.ko.plt
-rw-r--r-- 1 root root  3272 2025-03-11 12:42:04.000000000 +0000 ebt_dnat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_dnat.ko.plt
-rw-r--r-- 1 root root  3684 2025-03-11 12:42:04.000000000 +0000 ebt_ip.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_ip.ko.plt
-rw-r--r-- 1 root root  3856 2025-03-11 12:42:04.000000000 +0000 ebt_ip6.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_ip6.ko.plt
-rw-r--r-- 1 root root  3556 2025-03-11 12:42:04.000000000 +0000 ebt_limit.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_limit.ko.plt
-rw-r--r-- 1 root root  2600 2025-03-11 12:42:04.000000000 +0000 ebt_mark.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_mark.ko.plt
-rw-r--r-- 1 root root  2532 2025-03-11 12:42:04.000000000 +0000 ebt_mark_m.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_mark_m.ko.plt
-rw-r--r-- 1 root root  2500 2025-03-11 12:42:04.000000000 +0000 ebt_pkttype.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_pkttype.ko.plt
-rw-r--r-- 1 root root  3144 2025-03-11 12:42:04.000000000 +0000 ebt_redirect.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_redirect.ko.plt
-rw-r--r-- 1 root root  3104 2025-03-11 12:42:04.000000000 +0000 ebt_snat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_snat.ko.plt
-rw-r--r-- 1 root root  4076 2025-03-11 12:42:04.000000000 +0000 ebt_stp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_stp.ko.plt
-rw-r--r-- 1 root root  3052 2025-03-11 12:42:04.000000000 +0000 ebt_vlan.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_vlan.ko.plt
-rw-r--r-- 1 root root  3236 2025-03-11 12:42:04.000000000 +0000 ebtable_filter.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebtable_filter.ko.plt
-rw-r--r-- 1 root root  3236 2025-03-11 12:42:04.000000000 +0000 ebtable_nat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebtable_nat.ko.plt
-rw-r--r-- 1 root root 17064 2025-03-11 12:42:04.000000000 +0000 ebtables.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebtables.ko.plt

/lib/modules/5.6.3-e500/kernel/net/core:
total 8
-rw-r--r-- 1 root root 7248 2025-03-11 12:40:30.000000000 +0000 failover.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:40:30.000000000 +0000 failover.ko.plt

/lib/modules/5.6.3-e500/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 18884 2025-03-11 12:40:30.000000000 +0000 ip_tunnel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:40:30.000000000 +0000 ip_tunnel.ko.plt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 netfilter
-rw-r--r-- 1 root root 16112 2025-03-11 12:42:03.000000000 +0000 udp_tunnel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 udp_tunnel.ko.plt

/lib/modules/5.6.3-e500/kernel/net/ipv4/netfilter:
total 80
-rw-r--r-- 1 root root 16092 2025-03-11 12:42:04.000000000 +0000 ip_tables.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ip_tables.ko.plt
-rw-r--r-- 1 root root  3852 2025-03-11 12:42:04.000000000 +0000 ipt_REJECT.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ipt_REJECT.ko.plt
-rw-r--r-- 1 root root  4196 2025-03-11 12:42:04.000000000 +0000 iptable_filter.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 iptable_filter.ko.plt
-rw-r--r-- 1 root root  4280 2025-03-11 12:42:04.000000000 +0000 iptable_mangle.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 iptable_mangle.ko.plt
-rw-r--r-- 1 root root  3824 2025-03-11 12:42:04.000000000 +0000 iptable_nat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 iptable_nat.ko.plt
-rw-r--r-- 1 root root  4468 2025-03-11 12:42:04.000000000 +0000 iptable_raw.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 iptable_raw.ko.plt
-rw-r--r-- 1 root root  3824 2025-03-11 12:42:04.000000000 +0000 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_defrag_ipv4.ko.plt
-rw-r--r-- 1 root root 10708 2025-03-11 12:42:04.000000000 +0000 nf_nat_h323.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_h323.ko.plt
-rw-r--r-- 1 root root  5192 2025-03-11 12:42:04.000000000 +0000 nf_nat_pptp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_pptp.ko.plt
-rw-r--r-- 1 root root  4568 2025-03-11 12:42:04.000000000 +0000 nf_reject_ipv4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_reject_ipv4.ko.plt

/lib/modules/5.6.3-e500/kernel/net/ipv6:
total 520
-rw-r--r-- 1 root root  10144 2025-03-11 12:42:05.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ah6.ko.plt
-rw-r--r-- 1 root root  13320 2025-03-11 12:42:05.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 esp6.ko.plt
-rw-r--r-- 1 root root   3592 2025-03-11 12:42:03.000000000 +0000 ip6_udp_tunnel.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:03.000000000 +0000 ip6_udp_tunnel.ko.plt
-rw-r--r-- 1 root root 483908 2025-03-11 12:42:05.000000000 +0000 ipv6.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ipv6.ko.plt
drwxr-xr-x 2 root root   4096 2025-03-11 13:00:48.000000000 +0000 netfilter
-rw-r--r-- 1 root root   5668 2025-03-11 12:42:05.000000000 +0000 tunnel6.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 tunnel6.ko.plt

/lib/modules/5.6.3-e500/kernel/net/ipv6/netfilter:
total 88
-rw-r--r-- 1 root root 16520 2025-03-11 12:42:04.000000000 +0000 ip6_tables.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ip6_tables.ko.plt
-rw-r--r-- 1 root root  4364 2025-03-11 12:42:06.000000000 +0000 ip6t_NPT.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6t_NPT.ko.plt
-rw-r--r-- 1 root root  3888 2025-03-11 12:42:06.000000000 +0000 ip6t_REJECT.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6t_REJECT.ko.plt
-rw-r--r-- 1 root root  2788 2025-03-11 12:42:06.000000000 +0000 ip6t_eui64.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6t_eui64.ko.plt
-rw-r--r-- 1 root root  3212 2025-03-11 12:42:06.000000000 +0000 ip6t_ipv6header.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6t_ipv6header.ko.plt
-rw-r--r-- 1 root root  4212 2025-03-11 12:42:06.000000000 +0000 ip6table_filter.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6table_filter.ko.plt
-rw-r--r-- 1 root root  4480 2025-03-11 12:42:06.000000000 +0000 ip6table_mangle.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6table_mangle.ko.plt
-rw-r--r-- 1 root root  3828 2025-03-11 12:42:06.000000000 +0000 ip6table_nat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6table_nat.ko.plt
-rw-r--r-- 1 root root  4472 2025-03-11 12:42:06.000000000 +0000 ip6table_raw.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6table_raw.ko.plt
-rw-r--r-- 1 root root 11036 2025-03-11 12:42:04.000000000 +0000 nf_defrag_ipv6.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_defrag_ipv6.ko.plt
-rw-r--r-- 1 root root  5200 2025-03-11 12:42:06.000000000 +0000 nf_reject_ipv6.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 nf_reject_ipv6.ko.plt

/lib/modules/5.6.3-e500/kernel/net/mpls:
total 56
-rw-r--r-- 1 root root  5648 2025-03-11 12:40:44.000000000 +0000 mpls_iptunnel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:40:44.000000000 +0000 mpls_iptunnel.ko.plt
-rw-r--r-- 1 root root 48124 2025-03-11 12:40:49.000000000 +0000 mpls_router.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:40:49.000000000 +0000 mpls_router.ko.plt

/lib/modules/5.6.3-e500/kernel/net/netfilter:
total 532
-rw-r--r-- 1 root root 99584 2025-03-11 12:42:04.000000000 +0000 nf_conntrack.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack.ko.plt
-rw-r--r-- 1 root root 10536 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_ftp.ko.plt
-rw-r--r-- 1 root root 43032 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_h323.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_h323.ko.plt
-rw-r--r-- 1 root root  8248 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_irc.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_irc.ko.plt
-rw-r--r-- 1 root root 28536 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_netlink.ko.plt
-rw-r--r-- 1 root root  8352 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_pptp.ko.plt
-rw-r--r-- 1 root root  8456 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_rtsp.ko.plt
-rw-r--r-- 1 root root 28244 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_sip.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_sip.ko.plt
-rw-r--r-- 1 root root  6904 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_tftp.ko.plt
-rw-r--r-- 1 root root 31228 2025-03-11 12:42:04.000000000 +0000 nf_nat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat.ko.plt
-rw-r--r-- 1 root root  4776 2025-03-11 12:42:04.000000000 +0000 nf_nat_ftp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_ftp.ko.plt
-rw-r--r-- 1 root root  4492 2025-03-11 12:42:04.000000000 +0000 nf_nat_irc.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_irc.ko.plt
-rw-r--r-- 1 root root  7896 2025-03-11 12:42:04.000000000 +0000 nf_nat_rtsp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_rtsp.ko.plt
-rw-r--r-- 1 root root 12264 2025-03-11 12:42:04.000000000 +0000 nf_nat_sip.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_sip.ko.plt
-rw-r--r-- 1 root root  3400 2025-03-11 12:42:04.000000000 +0000 nf_nat_tftp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_tftp.ko.plt
-rw-r--r-- 1 root root  9488 2025-03-11 12:42:04.000000000 +0000 nfnetlink.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nfnetlink.ko.plt
-rw-r--r-- 1 root root 27592 2025-03-11 12:42:04.000000000 +0000 x_tables.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 x_tables.ko.plt
-rw-r--r-- 1 root root  6684 2025-03-11 12:42:04.000000000 +0000 xt_CT.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_CT.ko.plt
-rw-r--r-- 1 root root  4248 2025-03-11 12:42:04.000000000 +0000 xt_DSCP.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_DSCP.ko.plt
-rw-r--r-- 1 root root  3628 2025-03-11 12:42:04.000000000 +0000 xt_HL.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_HL.ko.plt
-rw-r--r-- 1 root root  3692 2025-03-11 12:42:04.000000000 +0000 xt_MASQUERADE.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_MASQUERADE.ko.plt
-rw-r--r-- 1 root root  3952 2025-03-11 12:42:04.000000000 +0000 xt_NETMAP.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_NETMAP.ko.plt
-rw-r--r-- 1 root root  3236 2025-03-11 12:42:04.000000000 +0000 xt_REDIRECT.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_REDIRECT.ko.plt
-rw-r--r-- 1 root root  6516 2025-03-11 12:42:04.000000000 +0000 xt_TCPMSS.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_TCPMSS.ko.plt
-rw-r--r-- 1 root root  5312 2025-03-11 12:42:04.000000000 +0000 xt_addrtype.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_addrtype.ko.plt
-rw-r--r-- 1 root root  4404 2025-03-11 12:42:04.000000000 +0000 xt_connbytes.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_connbytes.ko.plt
-rw-r--r-- 1 root root  4872 2025-03-11 12:42:04.000000000 +0000 xt_connmark.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_connmark.ko.plt
-rw-r--r-- 1 root root  5292 2025-03-11 12:42:04.000000000 +0000 xt_conntrack.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_conntrack.ko.plt
-rw-r--r-- 1 root root  3156 2025-03-11 12:42:04.000000000 +0000 xt_dscp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_dscp.ko.plt
-rw-r--r-- 1 root root 18272 2025-03-11 12:42:04.000000000 +0000 xt_hashlimit.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_hashlimit.ko.plt
-rw-r--r-- 1 root root  3636 2025-03-11 12:42:04.000000000 +0000 xt_helper.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_helper.ko.plt
-rw-r--r-- 1 root root  2868 2025-03-11 12:42:04.000000000 +0000 xt_hl.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_hl.ko.plt
-rw-r--r-- 1 root root  2772 2025-03-11 12:42:04.000000000 +0000 xt_length.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_length.ko.plt
-rw-r--r-- 1 root root  2604 2025-03-11 12:42:04.000000000 +0000 xt_mac.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_mac.ko.plt
-rw-r--r-- 1 root root  3080 2025-03-11 12:42:04.000000000 +0000 xt_mark.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_mark.ko.plt
-rw-r--r-- 1 root root  3596 2025-03-11 12:42:04.000000000 +0000 xt_multiport.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_multiport.ko.plt
-rw-r--r-- 1 root root  5496 2025-03-11 12:42:04.000000000 +0000 xt_nat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_nat.ko.plt
-rw-r--r-- 1 root root  3992 2025-03-11 12:42:04.000000000 +0000 xt_physdev.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_physdev.ko.plt
-rw-r--r-- 1 root root  4676 2025-03-11 12:42:04.000000000 +0000 xt_policy.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_policy.ko.plt
-rw-r--r-- 1 root root  2508 2025-03-11 12:42:04.000000000 +0000 xt_realm.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_realm.ko.plt
-rw-r--r-- 1 root root  3220 2025-03-11 12:42:04.000000000 +0000 xt_statistic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_statistic.ko.plt
-rw-r--r-- 1 root root  3116 2025-03-11 12:42:04.000000000 +0000 xt_string.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_string.ko.plt
-rw-r--r-- 1 root root  3240 2025-03-11 12:42:04.000000000 +0000 xt_tcpmss.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_tcpmss.ko.plt
-rw-r--r-- 1 root root  4220 2025-03-11 12:42:04.000000000 +0000 xt_tcpudp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 xt_tcpudp.ko.plt

/lib/modules/5.6.3-e500/kernel/net/sched:
total 96
-rw-r--r-- 1 root root 28108 2025-03-11 12:42:03.000000000 +0000 sch_cake.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_cake.ko.plt
-rw-r--r-- 1 root root  8348 2025-03-11 12:42:03.000000000 +0000 sch_codel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_codel.ko.plt
-rw-r--r-- 1 root root 11364 2025-03-11 12:42:03.000000000 +0000 sch_fq_codel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_fq_codel.ko.plt
-rw-r--r-- 1 root root 28904 2025-03-11 12:42:03.000000000 +0000 sch_htb.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_htb.ko.plt
-rw-r--r-- 1 root root 10260 2025-03-11 12:42:03.000000000 +0000 sch_red.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_red.ko.plt

/lib/modules/5.6.3-e500/kernel/net/unix:
total 36
-rw-r--r-- 1 root root 34812 2025-03-11 12:42:03.000000000 +0000 unix.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 unix.ko.plt

/lib/modules/5.6.3-e500/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 8080 2025-03-11 12:42:03.000000000 +0000 xfrm_algo.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:03.000000000 +0000 xfrm_algo.ko.plt

/lib/modules/5.6.3-e500/misc:
total 224
-rw-r--r-- 1 root root 10712 2025-03-11 12:36:55.000000000 +0000 btest.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:55.000000000 +0000 btest.ko.plt
-rw-r--r-- 1 root root  6388 2025-03-11 12:40:50.000000000 +0000 dot1x.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:40:50.000000000 +0000 dot1x.ko.plt
-rw-r--r-- 1 root root  8612 2025-03-11 12:36:42.000000000 +0000 fancon.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:42.000000000 +0000 fancon.ko.plt
-rw-r--r-- 1 root root 48908 2025-03-11 12:37:21.000000000 +0000 flash.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:21.000000000 +0000 flash.ko.plt
-rw-r--r-- 1 root root  4748 2025-03-11 12:39:20.000000000 +0000 jiffies.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:20.000000000 +0000 jiffies.ko.plt
-rw-r--r-- 1 root root  3108 2025-03-11 12:37:14.000000000 +0000 ledgroup.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:14.000000000 +0000 ledgroup.ko.plt
-rw-r--r-- 1 root root 10736 2025-03-11 12:36:49.000000000 +0000 logring.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:49.000000000 +0000 logring.ko.plt
-rw-r--r-- 1 root root 25336 2025-03-11 12:37:30.000000000 +0000 mesh.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:30.000000000 +0000 mesh.ko.plt
-rw-r--r-- 1 root root  9004 2025-03-11 12:36:47.000000000 +0000 panics.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:47.000000000 +0000 panics.ko.plt
-rw-r--r-- 1 root root  9148 2025-03-11 12:38:59.000000000 +0000 rb.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:59.000000000 +0000 rb.ko.plt
-rw-r--r-- 1 root root  5896 2025-03-11 12:39:27.000000000 +0000 romon.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:27.000000000 +0000 romon.ko.plt
-rw-r--r-- 1 root root  5728 2025-03-11 12:37:25.000000000 +0000 snif.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:25.000000000 +0000 snif.ko.plt
-rw-r--r-- 1 root root 26624 2025-03-11 12:37:45.000000000 +0000 traffic_gen.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:45.000000000 +0000 traffic_gen.ko.plt
-rw-r--r-- 1 root root  6724 2025-03-11 12:37:25.000000000 +0000 ulog.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:25.000000000 +0000 ulog.ko.plt
-rw-r--r-- 1 root root 14252 2025-03-11 12:36:50.000000000 +0000 voltage.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:50.000000000 +0000 voltage.ko.plt

/lib/modules/5.6.3-e500/net:
total 16
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 sched

/lib/modules/5.6.3-e500/net/bridge:
total 224
-rw-r--r-- 1 root root 197900 2025-03-11 12:41:14.000000000 +0000 bridge2.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:41:14.000000000 +0000 bridge2.ko.plt
-rw-r--r-- 1 root root  18268 2025-03-11 12:41:12.000000000 +0000 bridge2_netfilter.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:41:12.000000000 +0000 bridge2_netfilter.ko.plt
-rw-r--r-- 1 root root   2608 2025-03-11 12:37:25.000000000 +0000 ebt_snif.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:37:25.000000000 +0000 ebt_snif.ko.plt
-rw-r--r-- 1 root root   2840 2025-03-11 12:37:25.000000000 +0000 ebt_ulog.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:37:25.000000000 +0000 ebt_ulog.ko.plt

/lib/modules/5.6.3-e500/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 netfilter

/lib/modules/5.6.3-e500/net/ipv4/netfilter:
total 28
-rw-r--r-- 1 root root 3460 2025-03-11 12:36:53.000000000 +0000 ipt_SAME.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:36:53.000000000 +0000 ipt_SAME.ko.plt
-rw-r--r-- 1 root root 5888 2025-03-11 12:36:54.000000000 +0000 ipt_TARPIT.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:36:54.000000000 +0000 ipt_TARPIT.ko.plt
-rw-r--r-- 1 root root 4164 2025-03-11 12:36:55.000000000 +0000 ipt_psd.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:36:55.000000000 +0000 ipt_psd.ko.plt
-rw-r--r-- 1 root root 2692 2025-03-11 12:37:25.000000000 +0000 ipt_snif.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:37:25.000000000 +0000 ipt_snif.ko.plt
-rw-r--r-- 1 root root 3292 2025-03-11 12:37:25.000000000 +0000 ipt_ulog.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:37:25.000000000 +0000 ipt_ulog.ko.plt

/lib/modules/5.6.3-e500/net/netfilter:
total 60
-rw-r--r-- 1 root root  2008 2025-03-11 12:38:16.000000000 +0000 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:16.000000000 +0000 nf_conntrack_ipv4.ko.plt
-rw-r--r-- 1 root root  2008 2025-03-11 12:38:16.000000000 +0000 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:16.000000000 +0000 nf_conntrack_ipv6.ko.plt
-rw-r--r-- 1 root root 11200 2025-03-11 12:38:17.000000000 +0000 xt_ein.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:17.000000000 +0000 xt_ein.ko.plt
-rw-r--r-- 1 root root 13128 2025-03-11 12:37:00.000000000 +0000 xt_layer7.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:00.000000000 +0000 xt_layer7.ko.plt
-rw-r--r-- 1 root root 18448 2025-03-11 12:38:17.000000000 +0000 xt_misc.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:17.000000000 +0000 xt_misc.ko.plt
-rw-r--r-- 1 root root  3520 2025-03-11 12:37:09.000000000 +0000 xt_tls.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:09.000000000 +0000 xt_tls.ko.plt

/lib/modules/5.6.3-e500/net/sched:
total 84
-rw-r--r-- 1 root root  5612 2025-03-11 12:37:16.000000000 +0000 cls_fw.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:16.000000000 +0000 cls_fw.ko.plt
-rw-r--r-- 1 root root 12432 2025-03-11 12:37:16.000000000 +0000 cls_linear.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:16.000000000 +0000 cls_linear.ko.plt
-rw-r--r-- 1 root root 12328 2025-03-11 12:37:31.000000000 +0000 proto_agr.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:31.000000000 +0000 proto_agr.ko.plt
-rw-r--r-- 1 root root 19228 2025-03-11 12:37:32.000000000 +0000 sch_agr.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:32.000000000 +0000 sch_agr.ko.plt
-rw-r--r-- 1 root root 11088 2025-03-11 12:36:58.000000000 +0000 sch_pcq.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:58.000000000 +0000 sch_pcq.ko.plt
-rw-r--r-- 1 root root  9116 2025-03-11 12:39:29.000000000 +0000 sch_sfq.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:29.000000000 +0000 sch_sfq.ko.plt

/lib/modules/5.6.3-smp:
total 20
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 drivers
drwxr-xr-x 8 root root 4096 2025-03-11 13:00:48.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 misc
-rw-r--r-- 1 root root 2632 2025-03-11 12:44:11.000000000 +0000 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/lib/modules/5.6.3-smp/drivers:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 char
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/lib/modules/5.6.3-smp/drivers/char:
total 12
-rw-r--r-- 1 root root 9056 2025-03-11 12:36:51.000000000 +0000 ticker.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:36:51.000000000 +0000 ticker.ko.plt

/lib/modules/5.6.3-smp/drivers/net:
total 1960
-rw-r--r-- 1 root root   39684 2025-03-11 12:38:31.000000000 +0000 ath8327.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:38:31.000000000 +0000 ath8327.ko.plt
-rw-r--r-- 1 root root   25556 2025-03-11 12:38:31.000000000 +0000 aths16.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:38:31.000000000 +0000 aths16.ko.plt
-rw-r--r-- 1 root root   40488 2025-03-11 12:37:24.000000000 +0000 atl1c.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:37:24.000000000 +0000 atl1c.ko.plt
-rw-r--r-- 1 root root 1396624 2025-03-11 12:38:00.000000000 +0000 dpa.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:38:00.000000000 +0000 dpa.ko.plt
-rw-r--r-- 1 root root    9844 2025-03-11 12:37:02.000000000 +0000 fsl_pq_mdio.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:37:02.000000000 +0000 fsl_pq_mdio.ko.plt
-rw-r--r-- 1 root root   29484 2025-03-11 12:36:58.000000000 +0000 gianfar.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:36:58.000000000 +0000 gianfar.ko.plt
-rw-r--r-- 1 root root    9540 2025-03-11 12:38:58.000000000 +0000 imq.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:38:58.000000000 +0000 imq.ko.plt
-rw-r--r-- 1 root root   11924 2025-03-11 12:42:01.000000000 +0000 mpls_fp.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:42:01.000000000 +0000 mpls_fp.ko.plt
-rw-r--r-- 1 root root  204668 2025-03-11 12:42:01.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:42:01.000000000 +0000 packet_hook.ko.plt
-rw-r--r-- 1 root root   65104 2025-03-11 12:37:53.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:37:53.000000000 +0000 phy_helper.ko.plt
-rw-r--r-- 1 root root    3860 2025-03-11 12:38:55.000000000 +0000 sram.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:38:55.000000000 +0000 sram.ko.plt
-rw-r--r-- 1 root root   68340 2025-03-11 12:38:31.000000000 +0000 switch.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:38:31.000000000 +0000 switch.ko.plt
-rw-r--r-- 1 root root   22760 2025-03-11 12:36:53.000000000 +0000 via-velocity.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:36:53.000000000 +0000 via-velocity.ko.plt
-rw-r--r-- 1 root root   60776 2025-03-11 12:42:04.000000000 +0000 vxlan2.ko
-rw-r--r-- 1 root root       0 2025-03-11 12:42:04.000000000 +0000 vxlan2.ko.plt

/lib/modules/5.6.3-smp/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-03-11 13:00:48.000000000 +0000 arch
drwxr-xr-x  2 root root 4096 2025-03-11 13:00:48.000000000 +0000 crypto
drwxr-xr-x  5 root root 4096 2025-03-11 13:00:48.000000000 +0000 drivers
drwxr-xr-x 11 root root 4096 2025-03-11 13:00:48.000000000 +0000 fs
drwxr-xr-x  6 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib
drwxr-xr-x 13 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/lib/modules/5.6.3-smp/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 powerpc

/lib/modules/5.6.3-smp/kernel/arch/powerpc:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 oprofile

/lib/modules/5.6.3-smp/kernel/arch/powerpc/oprofile:
total 44
-rw-r--r-- 1 root root 41800 2025-03-11 12:42:05.000000000 +0000 oprofile.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 oprofile.ko.plt

/lib/modules/5.6.3-smp/kernel/crypto:
total 80
-rw-r--r-- 1 root root  3184 2025-03-11 12:42:05.000000000 +0000 arc4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 arc4.ko.plt
-rw-r--r-- 1 root root 14896 2025-03-11 12:42:05.000000000 +0000 ccm.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 ccm.ko.plt
-rw-r--r-- 1 root root  5440 2025-03-11 12:42:05.000000000 +0000 cmac.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 cmac.ko.plt
-rw-r--r-- 1 root root  4120 2025-03-11 12:42:05.000000000 +0000 des_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 des_generic.ko.plt
-rw-r--r-- 1 root root  5452 2025-03-11 12:42:05.000000000 +0000 md4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 md4.ko.plt
-rw-r--r-- 1 root root 15132 2025-03-11 12:42:05.000000000 +0000 rsa_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 rsa_generic.ko.plt
-rw-r--r-- 1 root root  4264 2025-03-11 12:42:05.000000000 +0000 sha1_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 sha1_generic.ko.plt
-rw-r--r-- 1 root root  9240 2025-03-11 12:42:05.000000000 +0000 sha512_generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 sha512_generic.ko.plt

/lib/modules/5.6.3-smp/kernel/drivers:
total 12
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 crypto
drwxr-xr-x 4 root root 4096 2025-03-11 13:00:48.000000000 +0000 mmc
drwxr-xr-x 5 root root 4096 2025-03-11 13:00:48.000000000 +0000 net

/lib/modules/5.6.3-smp/kernel/drivers/crypto:
total 56
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 caam
-rw-r--r-- 1 root root 50368 2025-03-11 12:42:05.000000000 +0000 talitos.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 talitos.ko.plt

/lib/modules/5.6.3-smp/kernel/drivers/crypto/caam:
total 176
-rw-r--r-- 1 root root  11600 2025-03-11 12:42:05.000000000 +0000 caam.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 caam.ko.plt
-rw-r--r-- 1 root root 121476 2025-03-11 12:42:05.000000000 +0000 caam_jr.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 caam_jr.ko.plt
-rw-r--r-- 1 root root  16584 2025-03-11 12:42:05.000000000 +0000 caamalg_desc.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 caamalg_desc.ko.plt
-rw-r--r-- 1 root root   4772 2025-03-11 12:42:05.000000000 +0000 caamhash_desc.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 caamhash_desc.ko.plt
-rw-r--r-- 1 root root  13924 2025-03-11 12:42:05.000000000 +0000 error.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 error.ko.plt

/lib/modules/5.6.3-smp/kernel/drivers/mmc:
total 8
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 core
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 host

/lib/modules/5.6.3-smp/kernel/drivers/mmc/core:
total 160
-rw-r--r-- 1 root root  39184 2025-03-11 12:42:04.000000000 +0000 mmc_block.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 mmc_block.ko.plt
-rw-r--r-- 1 root root 122872 2025-03-11 12:42:04.000000000 +0000 mmc_core.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 mmc_core.ko.plt

/lib/modules/5.6.3-smp/kernel/drivers/mmc/host:
total 20
-rw-r--r-- 1 root root 15456 2025-03-11 12:42:04.000000000 +0000 mmc_spi.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 mmc_spi.ko.plt
-rw-r--r-- 1 root root  2932 2025-03-11 12:42:04.000000000 +0000 of_mmc_spi.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 of_mmc_spi.ko.plt

/lib/modules/5.6.3-smp/kernel/drivers/net:
total 232
-rw-r--r-- 1 root root 48732 2025-03-11 12:41:54.000000000 +0000 amt.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:41:54.000000000 +0000 amt.ko.plt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 bonding
-rw-r--r-- 1 root root 42296 2025-03-11 12:41:54.000000000 +0000 macsec.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:41:54.000000000 +0000 macsec.ko.plt
-rw-r--r-- 1 root root 23736 2025-03-11 12:42:03.000000000 +0000 macvlan.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 macvlan.ko.plt
-rw-r--r-- 1 root root 13864 2025-03-11 12:41:53.000000000 +0000 net_failover.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:41:53.000000000 +0000 net_failover.ko.plt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 slip
-rw-r--r-- 1 root root 19268 2025-03-11 12:41:54.000000000 +0000 veth.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:41:54.000000000 +0000 veth.ko.plt
-rw-r--r-- 1 root root 43268 2025-03-11 12:41:53.000000000 +0000 virtio_net.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:41:53.000000000 +0000 virtio_net.ko.plt
-rw-r--r-- 1 root root 22244 2025-03-11 12:41:21.000000000 +0000 vrf.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:41:21.000000000 +0000 vrf.ko.plt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 wireguard

/lib/modules/5.6.3-smp/kernel/drivers/net/bonding:
total 144
-rw-r--r-- 1 root root 144880 2025-03-11 12:42:03.000000000 +0000 bonding.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:03.000000000 +0000 bonding.ko.plt

/lib/modules/5.6.3-smp/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6108 2025-03-11 12:41:21.000000000 +0000 slhc.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:41:21.000000000 +0000 slhc.ko.plt

/lib/modules/5.6.3-smp/kernel/drivers/net/wireguard:
total 104
-rw-r--r-- 1 root root 104248 2025-03-11 12:41:42.000000000 +0000 wireguard.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:41:42.000000000 +0000 wireguard.ko.plt

/lib/modules/5.6.3-smp/kernel/fs:
total 48
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 cifs
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 exfat
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ext4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 fat
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 fuse
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 jbd2
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ksmbd
-rw-r--r-- 1 root root 8448 2025-03-11 12:42:05.000000000 +0000 mbcache.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 mbcache.ko.plt
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 nls
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 ntfs3

/lib/modules/5.6.3-smp/kernel/fs/cifs:
total 532
-rw-r--r-- 1 root root 542252 2025-03-11 12:42:05.000000000 +0000 cifs.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 cifs.ko.plt

/lib/modules/5.6.3-smp/kernel/fs/exfat:
total 84
-rw-r--r-- 1 root root 83892 2025-03-11 12:42:05.000000000 +0000 exfat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 exfat.ko.plt

/lib/modules/5.6.3-smp/kernel/fs/ext4:
total 480
-rw-r--r-- 1 root root 490136 2025-03-11 12:42:05.000000000 +0000 ext4.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ext4.ko.plt

/lib/modules/5.6.3-smp/kernel/fs/fat:
total 96
-rw-r--r-- 1 root root 78648 2025-03-11 12:42:05.000000000 +0000 fat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 fat.ko.plt
-rw-r--r-- 1 root root 14344 2025-03-11 12:42:05.000000000 +0000 vfat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 vfat.ko.plt

/lib/modules/5.6.3-smp/kernel/fs/fuse:
total 124
-rw-r--r-- 1 root root 123112 2025-03-11 12:42:05.000000000 +0000 fuse.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 fuse.ko.plt

/lib/modules/5.6.3-smp/kernel/fs/jbd2:
total 84
-rw-r--r-- 1 root root 85248 2025-03-11 12:42:05.000000000 +0000 jbd2.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 jbd2.ko.plt

/lib/modules/5.6.3-smp/kernel/fs/ksmbd:
total 268
-rw-r--r-- 1 root root 271496 2025-03-11 12:42:05.000000000 +0000 ksmbd.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ksmbd.ko.plt

/lib/modules/5.6.3-smp/kernel/fs/nls:
total 32
-rw-r--r-- 1 root root 8764 2025-03-11 12:42:05.000000000 +0000 nls_base.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 nls_base.ko.plt
-rw-r--r-- 1 root root 6716 2025-03-11 12:42:05.000000000 +0000 nls_cp437.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 nls_cp437.ko.plt
-rw-r--r-- 1 root root 5108 2025-03-11 12:42:05.000000000 +0000 nls_iso8859-1.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 nls_iso8859-1.ko.plt
-rw-r--r-- 1 root root 2912 2025-03-11 12:42:05.000000000 +0000 nls_utf8.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 nls_utf8.ko.plt

/lib/modules/5.6.3-smp/kernel/fs/ntfs3:
total 232
-rw-r--r-- 1 root root 237192 2025-03-11 12:42:05.000000000 +0000 ntfs3.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ntfs3.ko.plt

/lib/modules/5.6.3-smp/kernel/lib:
total 52
-rw-r--r-- 1 root root 4556 2025-03-11 12:42:05.000000000 +0000 asn1_decoder.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 asn1_decoder.ko.plt
-rw-r--r-- 1 root root 3384 2025-03-11 12:41:14.000000000 +0000 crc-ccitt.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:41:14.000000000 +0000 crc-ccitt.ko.plt
-rw-r--r-- 1 root root 2636 2025-03-11 12:42:04.000000000 +0000 crc-itu-t.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:04.000000000 +0000 crc-itu-t.ko.plt
-rw-r--r-- 1 root root 2352 2025-03-11 12:42:04.000000000 +0000 crc7.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:04.000000000 +0000 crc7.ko.plt
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 crypto
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 mpi
-rw-r--r-- 1 root root 4468 2025-03-11 12:42:05.000000000 +0000 oid_registry.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:05.000000000 +0000 oid_registry.ko.plt
-rw-r--r-- 1 root root 3740 2025-03-11 12:42:04.000000000 +0000 ts_bm.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:04.000000000 +0000 ts_bm.ko.plt
-rw-r--r-- 1 root root 3604 2025-03-11 12:42:04.000000000 +0000 ts_kmp.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:04.000000000 +0000 ts_kmp.ko.plt
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 zlib_inflate

/lib/modules/5.6.3-smp/kernel/lib/crypto:
total 76
-rw-r--r-- 1 root root  2228 2025-03-11 12:42:05.000000000 +0000 libarc4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libarc4.ko.plt
-rw-r--r-- 1 root root  7248 2025-03-11 12:42:05.000000000 +0000 libblake2s-generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libblake2s-generic.ko.plt
-rw-r--r-- 1 root root  4124 2025-03-11 12:42:05.000000000 +0000 libblake2s.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libblake2s.ko.plt
-rw-r--r-- 1 root root  2284 2025-03-11 12:42:05.000000000 +0000 libchacha.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libchacha.ko.plt
-rw-r--r-- 1 root root  7772 2025-03-11 12:42:05.000000000 +0000 libchacha20poly1305.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libchacha20poly1305.ko.plt
-rw-r--r-- 1 root root 10844 2025-03-11 12:42:05.000000000 +0000 libcurve25519-generic.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libcurve25519-generic.ko.plt
-rw-r--r-- 1 root root  1948 2025-03-11 12:42:05.000000000 +0000 libcurve25519.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libcurve25519.ko.plt
-rw-r--r-- 1 root root 18388 2025-03-11 12:42:05.000000000 +0000 libdes.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libdes.ko.plt
-rw-r--r-- 1 root root  4932 2025-03-11 12:42:05.000000000 +0000 libpoly1305.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 libpoly1305.ko.plt

/lib/modules/5.6.3-smp/kernel/lib/mpi:
total 20
-rw-r--r-- 1 root root 19536 2025-03-11 12:42:05.000000000 +0000 mpi.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:05.000000000 +0000 mpi.ko.plt

/lib/modules/5.6.3-smp/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19956 2025-03-11 12:41:49.000000000 +0000 zlib_deflate.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:41:49.000000000 +0000 zlib_deflate.ko.plt

/lib/modules/5.6.3-smp/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 15468 2025-03-11 12:41:46.000000000 +0000 zlib_inflate.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:41:46.000000000 +0000 zlib_inflate.ko.plt

/lib/modules/5.6.3-smp/kernel/net:
total 44
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 802
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 8021q
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 bridge
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 core
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv4
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv6
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 mpls
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 sched
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 unix
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 xfrm

/lib/modules/5.6.3-smp/kernel/net/802:
total 12
-rw-r--r-- 1 root root 11964 2025-03-11 12:41:54.000000000 +0000 mrp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:41:54.000000000 +0000 mrp.ko.plt

/lib/modules/5.6.3-smp/kernel/net/8021q:
total 32
-rw-r--r-- 1 root root 29184 2025-03-11 12:42:03.000000000 +0000 8021q.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 8021q.ko.plt

/lib/modules/5.6.3-smp/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 netfilter

/lib/modules/5.6.3-smp/kernel/net/bridge/netfilter:
total 88
-rw-r--r-- 1 root root  2692 2025-03-11 12:42:04.000000000 +0000 ebt_802_3.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_802_3.ko.plt
-rw-r--r-- 1 root root  3684 2025-03-11 12:42:04.000000000 +0000 ebt_arp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_arp.ko.plt
-rw-r--r-- 1 root root  3296 2025-03-11 12:42:04.000000000 +0000 ebt_arpreply.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_arpreply.ko.plt
-rw-r--r-- 1 root root  3304 2025-03-11 12:42:04.000000000 +0000 ebt_dnat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_dnat.ko.plt
-rw-r--r-- 1 root root  3716 2025-03-11 12:42:04.000000000 +0000 ebt_ip.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_ip.ko.plt
-rw-r--r-- 1 root root  3888 2025-03-11 12:42:04.000000000 +0000 ebt_ip6.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_ip6.ko.plt
-rw-r--r-- 1 root root  3628 2025-03-11 12:42:04.000000000 +0000 ebt_limit.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_limit.ko.plt
-rw-r--r-- 1 root root  2632 2025-03-11 12:42:04.000000000 +0000 ebt_mark.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_mark.ko.plt
-rw-r--r-- 1 root root  2564 2025-03-11 12:42:04.000000000 +0000 ebt_mark_m.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_mark_m.ko.plt
-rw-r--r-- 1 root root  2564 2025-03-11 12:42:04.000000000 +0000 ebt_pkttype.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_pkttype.ko.plt
-rw-r--r-- 1 root root  3176 2025-03-11 12:42:04.000000000 +0000 ebt_redirect.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_redirect.ko.plt
-rw-r--r-- 1 root root  3136 2025-03-11 12:42:04.000000000 +0000 ebt_snat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_snat.ko.plt
-rw-r--r-- 1 root root  4140 2025-03-11 12:42:04.000000000 +0000 ebt_stp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_stp.ko.plt
-rw-r--r-- 1 root root  3084 2025-03-11 12:42:04.000000000 +0000 ebt_vlan.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebt_vlan.ko.plt
-rw-r--r-- 1 root root  3268 2025-03-11 12:42:04.000000000 +0000 ebtable_filter.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebtable_filter.ko.plt
-rw-r--r-- 1 root root  3268 2025-03-11 12:42:04.000000000 +0000 ebtable_nat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebtable_nat.ko.plt
-rw-r--r-- 1 root root 17800 2025-03-11 12:42:04.000000000 +0000 ebtables.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ebtables.ko.plt

/lib/modules/5.6.3-smp/kernel/net/core:
total 8
-rw-r--r-- 1 root root 7936 2025-03-11 12:41:53.000000000 +0000 failover.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:41:53.000000000 +0000 failover.ko.plt

/lib/modules/5.6.3-smp/kernel/net/ipv4:
total 44
-rw-r--r-- 1 root root 19492 2025-03-11 12:41:46.000000000 +0000 ip_tunnel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:41:46.000000000 +0000 ip_tunnel.ko.plt
drwxr-xr-x 2 root root  4096 2025-03-11 13:00:48.000000000 +0000 netfilter
-rw-r--r-- 1 root root 16400 2025-03-11 12:42:03.000000000 +0000 udp_tunnel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 udp_tunnel.ko.plt

/lib/modules/5.6.3-smp/kernel/net/ipv4/netfilter:
total 84
-rw-r--r-- 1 root root 17160 2025-03-11 12:42:04.000000000 +0000 ip_tables.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ip_tables.ko.plt
-rw-r--r-- 1 root root  3884 2025-03-11 12:42:04.000000000 +0000 ipt_REJECT.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ipt_REJECT.ko.plt
-rw-r--r-- 1 root root  4228 2025-03-11 12:42:04.000000000 +0000 iptable_filter.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 iptable_filter.ko.plt
-rw-r--r-- 1 root root  4344 2025-03-11 12:42:04.000000000 +0000 iptable_mangle.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 iptable_mangle.ko.plt
-rw-r--r-- 1 root root  3856 2025-03-11 12:42:04.000000000 +0000 iptable_nat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 iptable_nat.ko.plt
-rw-r--r-- 1 root root  4500 2025-03-11 12:42:04.000000000 +0000 iptable_raw.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 iptable_raw.ko.plt
-rw-r--r-- 1 root root  3856 2025-03-11 12:42:04.000000000 +0000 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_defrag_ipv4.ko.plt
-rw-r--r-- 1 root root 10772 2025-03-11 12:42:04.000000000 +0000 nf_nat_h323.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_h323.ko.plt
-rw-r--r-- 1 root root  5224 2025-03-11 12:42:04.000000000 +0000 nf_nat_pptp.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_nat_pptp.ko.plt
-rw-r--r-- 1 root root  4600 2025-03-11 12:42:04.000000000 +0000 nf_reject_ipv4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_reject_ipv4.ko.plt

/lib/modules/5.6.3-smp/kernel/net/ipv6:
total 536
-rw-r--r-- 1 root root  10300 2025-03-11 12:42:05.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ah6.ko.plt
-rw-r--r-- 1 root root  13560 2025-03-11 12:42:05.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 esp6.ko.plt
-rw-r--r-- 1 root root   3748 2025-03-11 12:42:03.000000000 +0000 ip6_udp_tunnel.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:03.000000000 +0000 ip6_udp_tunnel.ko.plt
-rw-r--r-- 1 root root 502464 2025-03-11 12:42:05.000000000 +0000 ipv6.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 ipv6.ko.plt
drwxr-xr-x 2 root root   4096 2025-03-11 13:00:48.000000000 +0000 netfilter
-rw-r--r-- 1 root root   5844 2025-03-11 12:42:05.000000000 +0000 tunnel6.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:05.000000000 +0000 tunnel6.ko.plt

/lib/modules/5.6.3-smp/kernel/net/ipv6/netfilter:
total 88
-rw-r--r-- 1 root root 17556 2025-03-11 12:42:04.000000000 +0000 ip6_tables.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 ip6_tables.ko.plt
-rw-r--r-- 1 root root  4428 2025-03-11 12:42:07.000000000 +0000 ip6t_NPT.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:07.000000000 +0000 ip6t_NPT.ko.plt
-rw-r--r-- 1 root root  3952 2025-03-11 12:42:06.000000000 +0000 ip6t_REJECT.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6t_REJECT.ko.plt
-rw-r--r-- 1 root root  2820 2025-03-11 12:42:06.000000000 +0000 ip6t_eui64.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6t_eui64.ko.plt
-rw-r--r-- 1 root root  3244 2025-03-11 12:42:06.000000000 +0000 ip6t_ipv6header.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6t_ipv6header.ko.plt
-rw-r--r-- 1 root root  4244 2025-03-11 12:42:06.000000000 +0000 ip6table_filter.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6table_filter.ko.plt
-rw-r--r-- 1 root root  4512 2025-03-11 12:42:06.000000000 +0000 ip6table_mangle.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6table_mangle.ko.plt
-rw-r--r-- 1 root root  3860 2025-03-11 12:42:06.000000000 +0000 ip6table_nat.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6table_nat.ko.plt
-rw-r--r-- 1 root root  4504 2025-03-11 12:42:06.000000000 +0000 ip6table_raw.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 ip6table_raw.ko.plt
-rw-r--r-- 1 root root 11696 2025-03-11 12:42:04.000000000 +0000 nf_defrag_ipv6.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:04.000000000 +0000 nf_defrag_ipv6.ko.plt
-rw-r--r-- 1 root root  5232 2025-03-11 12:42:06.000000000 +0000 nf_reject_ipv6.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:06.000000000 +0000 nf_reject_ipv6.ko.plt

/lib/modules/5.6.3-smp/kernel/net/mpls:
total 60
-rw-r--r-- 1 root root  5828 2025-03-11 12:41:53.000000000 +0000 mpls_iptunnel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:41:53.000000000 +0000 mpls_iptunnel.ko.plt
-rw-r--r-- 1 root root 50440 2025-03-11 12:41:54.000000000 +0000 mpls_router.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:41:54.000000000 +0000 mpls_router.ko.plt

/lib/modules/5.6.3-smp/kernel/net/netfilter:
total 552
-rw-r--r-- 1 root root 106924 2025-03-11 12:42:04.000000000 +0000 nf_conntrack.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack.ko.plt
-rw-r--r-- 1 root root  10552 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_ftp.ko.plt
-rw-r--r-- 1 root root  43096 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_h323.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_h323.ko.plt
-rw-r--r-- 1 root root   8252 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_irc.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_irc.ko.plt
-rw-r--r-- 1 root root  29544 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_netlink.ko.plt
-rw-r--r-- 1 root root   8476 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_pptp.ko.plt
-rw-r--r-- 1 root root   8496 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_rtsp.ko.plt
-rw-r--r-- 1 root root  28372 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_sip.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_sip.ko.plt
-rw-r--r-- 1 root root   6936 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_conntrack_tftp.ko.plt
-rw-r--r-- 1 root root  31668 2025-03-11 12:42:04.000000000 +0000 nf_nat.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_nat.ko.plt
-rw-r--r-- 1 root root   4808 2025-03-11 12:42:04.000000000 +0000 nf_nat_ftp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_nat_ftp.ko.plt
-rw-r--r-- 1 root root   4556 2025-03-11 12:42:04.000000000 +0000 nf_nat_irc.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_nat_irc.ko.plt
-rw-r--r-- 1 root root   8040 2025-03-11 12:42:04.000000000 +0000 nf_nat_rtsp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_nat_rtsp.ko.plt
-rw-r--r-- 1 root root  12352 2025-03-11 12:42:04.000000000 +0000 nf_nat_sip.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_nat_sip.ko.plt
-rw-r--r-- 1 root root   3432 2025-03-11 12:42:04.000000000 +0000 nf_nat_tftp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nf_nat_tftp.ko.plt
-rw-r--r-- 1 root root   9676 2025-03-11 12:42:04.000000000 +0000 nfnetlink.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 nfnetlink.ko.plt
-rw-r--r-- 1 root root  28940 2025-03-11 12:42:04.000000000 +0000 x_tables.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 x_tables.ko.plt
-rw-r--r-- 1 root root   6748 2025-03-11 12:42:04.000000000 +0000 xt_CT.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_CT.ko.plt
-rw-r--r-- 1 root root   4280 2025-03-11 12:42:04.000000000 +0000 xt_DSCP.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_DSCP.ko.plt
-rw-r--r-- 1 root root   3660 2025-03-11 12:42:04.000000000 +0000 xt_HL.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_HL.ko.plt
-rw-r--r-- 1 root root   3756 2025-03-11 12:42:04.000000000 +0000 xt_MASQUERADE.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_MASQUERADE.ko.plt
-rw-r--r-- 1 root root   3984 2025-03-11 12:42:04.000000000 +0000 xt_NETMAP.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_NETMAP.ko.plt
-rw-r--r-- 1 root root   3300 2025-03-11 12:42:04.000000000 +0000 xt_REDIRECT.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_REDIRECT.ko.plt
-rw-r--r-- 1 root root   6580 2025-03-11 12:42:04.000000000 +0000 xt_TCPMSS.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_TCPMSS.ko.plt
-rw-r--r-- 1 root root   5344 2025-03-11 12:42:04.000000000 +0000 xt_addrtype.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_addrtype.ko.plt
-rw-r--r-- 1 root root   4436 2025-03-11 12:42:04.000000000 +0000 xt_connbytes.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_connbytes.ko.plt
-rw-r--r-- 1 root root   4936 2025-03-11 12:42:04.000000000 +0000 xt_connmark.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_connmark.ko.plt
-rw-r--r-- 1 root root   5356 2025-03-11 12:42:04.000000000 +0000 xt_conntrack.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_conntrack.ko.plt
-rw-r--r-- 1 root root   3188 2025-03-11 12:42:04.000000000 +0000 xt_dscp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_dscp.ko.plt
-rw-r--r-- 1 root root  18936 2025-03-11 12:42:04.000000000 +0000 xt_hashlimit.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_hashlimit.ko.plt
-rw-r--r-- 1 root root   3668 2025-03-11 12:42:04.000000000 +0000 xt_helper.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_helper.ko.plt
-rw-r--r-- 1 root root   2900 2025-03-11 12:42:04.000000000 +0000 xt_hl.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_hl.ko.plt
-rw-r--r-- 1 root root   2804 2025-03-11 12:42:04.000000000 +0000 xt_length.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_length.ko.plt
-rw-r--r-- 1 root root   2636 2025-03-11 12:42:04.000000000 +0000 xt_mac.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_mac.ko.plt
-rw-r--r-- 1 root root   3112 2025-03-11 12:42:04.000000000 +0000 xt_mark.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_mark.ko.plt
-rw-r--r-- 1 root root   3628 2025-03-11 12:42:04.000000000 +0000 xt_multiport.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_multiport.ko.plt
-rw-r--r-- 1 root root   5560 2025-03-11 12:42:04.000000000 +0000 xt_nat.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_nat.ko.plt
-rw-r--r-- 1 root root   4024 2025-03-11 12:42:04.000000000 +0000 xt_physdev.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_physdev.ko.plt
-rw-r--r-- 1 root root   4740 2025-03-11 12:42:04.000000000 +0000 xt_policy.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_policy.ko.plt
-rw-r--r-- 1 root root   2540 2025-03-11 12:42:04.000000000 +0000 xt_realm.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_realm.ko.plt
-rw-r--r-- 1 root root   3284 2025-03-11 12:42:04.000000000 +0000 xt_statistic.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_statistic.ko.plt
-rw-r--r-- 1 root root   3148 2025-03-11 12:42:04.000000000 +0000 xt_string.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_string.ko.plt
-rw-r--r-- 1 root root   3272 2025-03-11 12:42:04.000000000 +0000 xt_tcpmss.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_tcpmss.ko.plt
-rw-r--r-- 1 root root   4284 2025-03-11 12:42:04.000000000 +0000 xt_tcpudp.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:42:04.000000000 +0000 xt_tcpudp.ko.plt

/lib/modules/5.6.3-smp/kernel/net/sched:
total 96
-rw-r--r-- 1 root root 28132 2025-03-11 12:42:03.000000000 +0000 sch_cake.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_cake.ko.plt
-rw-r--r-- 1 root root  8412 2025-03-11 12:42:03.000000000 +0000 sch_codel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_codel.ko.plt
-rw-r--r-- 1 root root 11396 2025-03-11 12:42:03.000000000 +0000 sch_fq_codel.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_fq_codel.ko.plt
-rw-r--r-- 1 root root 30516 2025-03-11 12:42:03.000000000 +0000 sch_htb.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_htb.ko.plt
-rw-r--r-- 1 root root 10804 2025-03-11 12:42:03.000000000 +0000 sch_red.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 sch_red.ko.plt

/lib/modules/5.6.3-smp/kernel/net/unix:
total 40
-rw-r--r-- 1 root root 38008 2025-03-11 12:42:03.000000000 +0000 unix.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:42:03.000000000 +0000 unix.ko.plt

/lib/modules/5.6.3-smp/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 8112 2025-03-11 12:42:03.000000000 +0000 xfrm_algo.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:42:03.000000000 +0000 xfrm_algo.ko.plt

/lib/modules/5.6.3-smp/misc:
total 232
-rw-r--r-- 1 root root 10844 2025-03-11 12:36:55.000000000 +0000 btest.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:55.000000000 +0000 btest.ko.plt
-rw-r--r-- 1 root root  6680 2025-03-11 12:40:50.000000000 +0000 dot1x.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:40:50.000000000 +0000 dot1x.ko.plt
-rw-r--r-- 1 root root  8240 2025-03-11 12:36:42.000000000 +0000 fancon.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:42.000000000 +0000 fancon.ko.plt
-rw-r--r-- 1 root root 49492 2025-03-11 12:37:21.000000000 +0000 flash.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:21.000000000 +0000 flash.ko.plt
-rw-r--r-- 1 root root  4780 2025-03-11 12:39:20.000000000 +0000 jiffies.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:20.000000000 +0000 jiffies.ko.plt
-rw-r--r-- 1 root root  3140 2025-03-11 12:37:14.000000000 +0000 ledgroup.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:14.000000000 +0000 ledgroup.ko.plt
-rw-r--r-- 1 root root 11224 2025-03-11 12:36:49.000000000 +0000 logring.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:49.000000000 +0000 logring.ko.plt
-rw-r--r-- 1 root root 26172 2025-03-11 12:37:30.000000000 +0000 mesh.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:30.000000000 +0000 mesh.ko.plt
-rw-r--r-- 1 root root  9144 2025-03-11 12:36:47.000000000 +0000 panics.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:47.000000000 +0000 panics.ko.plt
-rw-r--r-- 1 root root  9180 2025-03-11 12:38:59.000000000 +0000 rb.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:59.000000000 +0000 rb.ko.plt
-rw-r--r-- 1 root root  6128 2025-03-11 12:39:27.000000000 +0000 romon.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:27.000000000 +0000 romon.ko.plt
-rw-r--r-- 1 root root  5904 2025-03-11 12:37:25.000000000 +0000 snif.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:25.000000000 +0000 snif.ko.plt
-rw-r--r-- 1 root root 28816 2025-03-11 12:37:45.000000000 +0000 traffic_gen.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:45.000000000 +0000 traffic_gen.ko.plt
-rw-r--r-- 1 root root  6772 2025-03-11 12:37:25.000000000 +0000 ulog.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:25.000000000 +0000 ulog.ko.plt
-rw-r--r-- 1 root root 14284 2025-03-11 12:36:50.000000000 +0000 voltage.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:50.000000000 +0000 voltage.ko.plt

/lib/modules/5.6.3-smp/net:
total 16
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-03-11 13:00:48.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 sched

/lib/modules/5.6.3-smp/net/bridge:
total 232
-rw-r--r-- 1 root root 208440 2025-03-11 12:41:14.000000000 +0000 bridge2.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:41:14.000000000 +0000 bridge2.ko.plt
-rw-r--r-- 1 root root  19252 2025-03-11 12:41:13.000000000 +0000 bridge2_netfilter.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:41:13.000000000 +0000 bridge2_netfilter.ko.plt
-rw-r--r-- 1 root root   2640 2025-03-11 12:37:25.000000000 +0000 ebt_snif.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:37:25.000000000 +0000 ebt_snif.ko.plt
-rw-r--r-- 1 root root   2872 2025-03-11 12:37:25.000000000 +0000 ebt_ulog.ko
-rw-r--r-- 1 root root      0 2025-03-11 12:37:25.000000000 +0000 ebt_ulog.ko.plt

/lib/modules/5.6.3-smp/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 netfilter

/lib/modules/5.6.3-smp/net/ipv4/netfilter:
total 28
-rw-r--r-- 1 root root 3492 2025-03-11 12:36:54.000000000 +0000 ipt_SAME.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:36:54.000000000 +0000 ipt_SAME.ko.plt
-rw-r--r-- 1 root root 6076 2025-03-11 12:36:54.000000000 +0000 ipt_TARPIT.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:36:54.000000000 +0000 ipt_TARPIT.ko.plt
-rw-r--r-- 1 root root 4544 2025-03-11 12:36:55.000000000 +0000 ipt_psd.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:36:55.000000000 +0000 ipt_psd.ko.plt
-rw-r--r-- 1 root root 2724 2025-03-11 12:37:25.000000000 +0000 ipt_snif.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:37:25.000000000 +0000 ipt_snif.ko.plt
-rw-r--r-- 1 root root 3324 2025-03-11 12:37:25.000000000 +0000 ipt_ulog.ko
-rw-r--r-- 1 root root    0 2025-03-11 12:37:25.000000000 +0000 ipt_ulog.ko.plt

/lib/modules/5.6.3-smp/net/netfilter:
total 60
-rw-r--r-- 1 root root  2040 2025-03-11 12:38:17.000000000 +0000 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:17.000000000 +0000 nf_conntrack_ipv4.ko.plt
-rw-r--r-- 1 root root  2040 2025-03-11 12:38:17.000000000 +0000 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:17.000000000 +0000 nf_conntrack_ipv6.ko.plt
-rw-r--r-- 1 root root 11364 2025-03-11 12:38:17.000000000 +0000 xt_ein.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:17.000000000 +0000 xt_ein.ko.plt
-rw-r--r-- 1 root root 13100 2025-03-11 12:37:00.000000000 +0000 xt_layer7.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:00.000000000 +0000 xt_layer7.ko.plt
-rw-r--r-- 1 root root 18692 2025-03-11 12:38:17.000000000 +0000 xt_misc.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:38:17.000000000 +0000 xt_misc.ko.plt
-rw-r--r-- 1 root root  3552 2025-03-11 12:37:09.000000000 +0000 xt_tls.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:09.000000000 +0000 xt_tls.ko.plt

/lib/modules/5.6.3-smp/net/sched:
total 84
-rw-r--r-- 1 root root  5772 2025-03-11 12:37:16.000000000 +0000 cls_fw.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:16.000000000 +0000 cls_fw.ko.plt
-rw-r--r-- 1 root root 12824 2025-03-11 12:37:16.000000000 +0000 cls_linear.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:16.000000000 +0000 cls_linear.ko.plt
-rw-r--r-- 1 root root 12528 2025-03-11 12:37:32.000000000 +0000 proto_agr.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:32.000000000 +0000 proto_agr.ko.plt
-rw-r--r-- 1 root root 19268 2025-03-11 12:37:32.000000000 +0000 sch_agr.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:37:32.000000000 +0000 sch_agr.ko.plt
-rw-r--r-- 1 root root 11540 2025-03-11 12:36:58.000000000 +0000 sch_pcq.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:36:58.000000000 +0000 sch_pcq.ko.plt
-rw-r--r-- 1 root root  9400 2025-03-11 12:39:29.000000000 +0000 sch_sfq.ko
-rw-r--r-- 1 root root     0 2025-03-11 12:39:29.000000000 +0000 sch_sfq.ko.plt

/nova:
total 12
drwxr-xr-x  2 root root 4096 2025-03-11 13:00:48.000000000 +0000 bin
drwxr-xr-x 11 root root 4096 2025-03-11 13:00:48.000000000 +0000 etc
drwxr-xr-x  5 root root 4096 2025-03-11 13:00:48.000000000 +0000 lib
lrwxrwxrwx  1 root root    8 2025-03-11 13:00:48.000000000 +0000 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2025-03-11 13:00:48.000000000 +0000 store -> /rw/store

/nova/bin:
total 15588
-rwxr-xr-x 1 root root   66988 2025-03-11 12:03:18.000000000 +0000 agent
-rwxr-xr-x 1 root root   66812 2025-03-11 12:03:18.000000000 +0000 arpd
-rwxr-xr-x 1 root root   67100 2025-03-11 12:05:36.000000000 +0000 backup
-rwxr-xr-x 1 root root  330100 2025-03-11 12:08:11.000000000 +0000 bridge2
-rwxr-xr-x 1 root root  133108 2025-03-11 12:05:51.000000000 +0000 btest
-rwxr-xr-x 1 root root   67348 2025-03-11 12:04:03.000000000 +0000 bth
-rwxr-xr-x 1 root root 1316424 2025-03-11 12:07:11.000000000 +0000 cerm
lrwxrwxrwx 1 root root       4 2025-03-11 12:07:11.000000000 +0000 cerm-worker -> cerm
-rwxr-xr-x 1 root root  198880 2025-03-11 12:07:09.000000000 +0000 cloud
-rwxr-xr-x 1 root root  132796 2025-03-11 12:05:12.000000000 +0000 crossfig
-rwxr-xr-x 1 root root  133036 2025-03-11 12:06:30.000000000 +0000 detnet
-rwxr-xr-x 1 root root  133092 2025-03-11 12:04:00.000000000 +0000 discover
-rwxr-xr-x 1 root root  395984 2025-03-11 12:07:29.000000000 +0000 diskd
-rwxr-xr-x 1 root root  133252 2025-03-11 12:08:01.000000000 +0000 dot1x
-rwxr-xr-x 1 root root   67464 2025-03-11 12:05:29.000000000 +0000 email
-rwxr-xr-x 1 root root  133416 2025-03-11 12:06:05.000000000 +0000 fileman
-rwxr-xr-x 1 root root   67148 2025-03-11 12:03:22.000000000 +0000 ftpd
-rwxr-xr-x 1 root root  218672 2025-03-11 12:04:15.000000000 +0000 graphing
-rwxr-xr-x 1 root root   66472 2025-03-11 12:05:53.000000000 +0000 havecardbus
-rwxr-xr-x 1 root root  132876 2025-03-11 12:05:04.000000000 +0000 igmpproxy
-rwxr-xr-x 1 root root  132852 2025-03-11 12:06:46.000000000 +0000 installer
-rwxr-xr-x 1 root root   67096 2025-03-11 12:06:55.000000000 +0000 ippool
-rwxr-xr-x 1 root root   67300 2025-03-11 12:05:55.000000000 +0000 keyman
-rwxr-xr-x 1 root root   67300 2025-03-11 12:03:54.000000000 +0000 kidcontrol
-rwxr-xr-x 1 root root  329904 2025-03-11 12:04:21.000000000 +0000 lcdstat
-rwxr-xr-x 1 root root  133144 2025-03-11 12:06:14.000000000 +0000 led
-rwxr-xr-x 1 root root  198532 2025-03-11 12:07:23.000000000 +0000 letsencrypt
-rwxr-xr-x 1 root root  133016 2025-03-11 12:05:38.000000000 +0000 loader
-rwxr-xr-x 1 root root  133120 2025-03-11 12:03:27.000000000 +0000 log
-rwxr-xr-x 1 root root  199220 2025-03-11 12:08:55.000000000 +0000 login
-rwxr-xr-x 1 root root   67104 2025-03-11 12:03:22.000000000 +0000 logmaker
-rwxr-xr-x 1 root root   67084 2025-03-11 12:03:17.000000000 +0000 macping
-rwxr-xr-x 1 root root   67276 2025-03-11 12:05:49.000000000 +0000 mactel
-rwxr-xr-x 1 root root   67160 2025-03-11 12:03:19.000000000 +0000 mepty
-rwxr-xr-x 1 root root  132844 2025-03-11 12:04:03.000000000 +0000 mesh
-rwxr-xr-x 1 root root  132604 2025-03-11 12:08:42.000000000 +0000 mode
lrwxrwxrwx 1 root root       7 2025-03-11 12:05:53.000000000 +0000 modprobed -> moduler
-rwxr-xr-x 1 root root  133388 2025-03-11 12:05:53.000000000 +0000 moduler
-rwxr-xr-x 1 root root  133524 2025-03-11 12:07:44.000000000 +0000 mproxy
-rwxr-xr-x 1 root root   67484 2025-03-11 12:05:36.000000000 +0000 mtget
-rwxr-xr-x 1 root root   67312 2025-03-11 12:03:58.000000000 +0000 natpmp
-rwxr-xr-x 1 root root 1973028 2025-03-11 12:10:53.000000000 +0000 net
-rwxr-xr-x 1 root root  133048 2025-03-11 12:06:36.000000000 +0000 ntp
-rwxr-xr-x 1 root root   66640 2025-03-11 12:03:16.000000000 +0000 panicsl
-rwxr-xr-x 1 root root  856032 2025-03-11 12:09:02.000000000 +0000 parser
-rwxr-xr-x 1 root root   67164 2025-03-11 12:03:41.000000000 +0000 partd
-rwxr-xr-x 1 root root   67248 2025-03-11 12:03:23.000000000 +0000 ping
-rwxr-xr-x 1 root root   67444 2025-03-11 12:05:33.000000000 +0000 portman
-rwxr-xr-x 1 root root   67212 2025-03-11 12:42:25.000000000 +0000 profiler
-rwxr-xr-x 1 root root  132992 2025-03-11 12:07:23.000000000 +0000 ptp
-rwxr-xr-x 1 root root  198760 2025-03-11 12:03:29.000000000 +0000 quickset
-rwxr-xr-x 1 root root   67400 2025-03-11 12:05:57.000000000 +0000 radius
-rwxr-xr-x 1 root root  199076 2025-03-11 12:07:04.000000000 +0000 resolver
-rwxr-xr-x 1 root root   66832 2025-03-11 12:06:51.000000000 +0000 resolver_ctl
-rwxr-xr-x 1 root root  133296 2025-03-11 12:07:04.000000000 +0000 romon
-rwxr-xr-x 1 root root 2167196 2025-03-11 12:12:01.000000000 +0000 route
-rwxr-xr-x 1 root root   66940 2025-03-11 12:06:25.000000000 +0000 rtrace
-rwxr-xr-x 1 root root   67268 2025-03-11 12:06:53.000000000 +0000 sermgr
-rwxr-xr-x 1 root root   67196 2025-03-11 12:03:42.000000000 +0000 sertcp
-rwxr-xr-x 1 root root  132884 2025-03-11 12:03:57.000000000 +0000 sniffer
-rwxr-xr-x 1 root root  264616 2025-03-11 12:08:05.000000000 +0000 snmp
-rwxr-xr-x 1 root root  132948 2025-03-11 12:04:00.000000000 +0000 socks
-rwxr-xr-x 1 root root  198648 2025-03-11 12:06:24.000000000 +0000 ssld
-rwxr-xr-x 1 root root   67112 2025-03-11 12:05:30.000000000 +0000 sstore
-rwxr-xr-x 1 root root  809312 2025-03-11 12:08:51.000000000 +0000 sys2
-rwxr-xr-x 1 root root   66872 2025-03-11 12:03:21.000000000 +0000 telnet
-rwxr-xr-x 1 root root   66668 2025-03-11 12:03:15.000000000 +0000 telser
-rwxr-xr-x 1 root root   67340 2025-03-11 12:03:45.000000000 +0000 tftpd
-rwxr-xr-x 1 root root   67192 2025-03-11 12:03:20.000000000 +0000 traceroute
-rwxr-xr-x 1 root root  133032 2025-03-11 12:03:57.000000000 +0000 trafficgen
-rwxr-xr-x 1 root root   67020 2025-03-11 12:03:35.000000000 +0000 trafflow
-rwxr-xr-x 1 root root   67060 2025-03-11 12:03:19.000000000 +0000 undo
-rwxr-xr-x 1 root root  198772 2025-03-11 12:04:09.000000000 +0000 upnp
-rwxr-xr-x 1 root root  133340 2025-03-11 12:07:10.000000000 +0000 user
-rwxr-xr-x 1 root root  133088 2025-03-11 12:06:33.000000000 +0000 vrrp
-rwxr-xr-x 1 root root   67264 2025-03-11 12:03:40.000000000 +0000 watchdog
-rwxr-xr-x 1 root root  199348 2025-03-11 12:06:50.000000000 +0000 wproxy
-rwxr-xr-x 1 root root  199228 2025-03-11 12:07:55.000000000 +0000 www

/nova/etc:
total 52
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 leds
-rwxr-xr-x 1 root root 1242 2025-03-11 11:58:27.000000000 +0000 lognames
-rwxr-xr-x 1 root root   10 2025-03-11 11:58:27.000000000 +0000 logo
-rwxr-xr-x 1 root root    1 2025-03-11 11:58:27.000000000 +0000 manual-url
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 pciinfo
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 services
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 system_names
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 upnp
-rwxr-xr-x 1 root root   26 2025-03-11 11:58:27.000000000 +0000 url
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 user
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 www

/nova/etc/leds:
total 124
-rwxr-xr-x 1 root root 126901 2025-03-11 12:02:32.000000000 +0000 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2025-03-11 12:02:32.000000000 +0000 system.x3

/nova/etc/pciinfo:
total 196
-rwxr-xr-x 1 root root 199933 2025-03-11 12:02:32.000000000 +0000 system.x3

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
total 64
-rwxr-xr-x 1 root root  3378 2025-03-11 11:58:29.000000000 +0000 connectionmanager.xml
-rwxr-xr-x 1 root root  5684 2025-03-11 11:58:29.000000000 +0000 contentdirectory.xml
-rwxr-xr-x 1 root root  8764 2025-03-11 11:58:29.000000000 +0000 logo120.png
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
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 defconf
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 profiler
-rwxr-xr-x 1 root root 4085 2025-03-11 11:58:27.000000000 +0000 xmlnames2

/nova/lib/console:
total 2184
-rwxr-xr-x 1 root root 2225784 2025-03-11 12:09:36.000000000 +0000 1073741824.mem
-rwxr-xr-x 1 root root     510 2025-03-11 11:58:26.000000000 +0000 logo.txt
-rwxr-xr-x 1 root root      18 2025-03-11 11:58:26.000000000 +0000 sublogo.txt

/nova/lib/defconf:
total 100
-rwxr-xr-x 1 root root   567 2025-03-11 11:58:26.000000000 +0000 defconf
-rwxr-xr-x 1 root root  4995 2025-03-11 11:58:26.000000000 +0000 defconf-caps
-rwxr-xr-x 1 root root  3700 2025-03-11 11:58:26.000000000 +0000 defconf-wps-sync
-rwxr-xr-x 1 root root 85178 2025-03-11 11:58:26.000000000 +0000 get-custom-defconf

/nova/lib/profiler:
total 88
-rwxr-xr-x 1 root root 89292 2025-03-11 12:42:24.000000000 +0000 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 528
-rwxr-xr-x 1 root root 398964 2025-03-11 12:43:03.000000000 +0000 mke2fs
-rwxr-xr-x 1 root root  66356 2025-03-11 12:02:30.000000000 +0000 nandfix
-rwxr-xr-x 1 root root  67392 2025-03-11 12:05:24.000000000 +0000 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2025-03-11 13:00:48.000000000 +0000 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 deinstall
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 lock
lrwxrwxrwx 1 root root    8 2025-03-11 13:00:48.000000000 +0000 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2025-03-11 13:00:48.000000000 +0000 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2025-03-11 13:00:48.000000000 +0000 post
lrwxrwxrwx 1 root root    7 2025-03-11 13:00:48.000000000 +0000 run -> /rw/run
lrwxrwxrwx 1 root root    4 2025-03-11 13:00:48.000000000 +0000 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

