### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 12470120 bytes, 733 inodes, blocksize: 262144 bytes, created: Tue Jun  2 09:50:44 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 bin
drwxr-xr-x 9 root root 4096 2026-06-02 10:50:40.000000000 +0100 bndl
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 boot
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 dev
lrwxrwxrwx 1 root root   11 2026-06-02 10:50:40.000000000 +0100 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 etc
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 flash
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 lib
lrwxrwxrwx 1 root root    4 2026-06-02 10:50:40.000000000 +0100 lib32 -> /lib
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:40.000000000 +0100 nova
lrwxrwxrwx 1 root root    9 2026-06-02 10:50:40.000000000 +0100 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 proc
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 ram
lrwxrwxrwx 1 root root    9 2026-06-02 10:50:40.000000000 +0100 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 sbin
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 sys
lrwxrwxrwx 1 root root    7 2026-06-02 10:50:40.000000000 +0100 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:40.000000000 +0100 var

/bin:
total 532
lrwxrwxrwx 1 root root     21 2026-06-02 10:50:40.000000000 +0100 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root  66924 2026-06-02 10:27:51.000000000 +0100 catlog
lrwxrwxrwx 1 root root     15 2026-06-02 10:50:40.000000000 +0100 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root     15 2026-06-02 10:50:40.000000000 +0100 login -> /nova/bin/login
-rwxr-xr-x 1 root root  72684 2026-06-02 10:45:09.000000000 +0100 mkexfatfs
-rwxr-xr-x 1 root root  66640 2026-06-02 10:27:52.000000000 +0100 pakp
lrwxrwxrwx 1 root root     21 2026-06-02 10:50:40.000000000 +0100 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root     15 2026-06-02 10:50:40.000000000 +0100 shell -> /nova/bin/login
-rwxr-xr-x 1 root root 330868 2026-06-02 10:45:29.000000000 +0100 sshfs

/bndl:
total 28
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:40.000000000 +0100 advanced-tools
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:40.000000000 +0100 dhcp
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:40.000000000 +0100 hotspot
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:40.000000000 +0100 ipv6
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:40.000000000 +0100 ppp
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:40.000000000 +0100 security
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:40.000000000 +0100 wifi

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:40.000000000 +0100 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 webfig

/bndl/advanced-tools/home/web/webfig:
total 16
-rw-r--r-- 1 root root 11108 2026-06-02 10:46:08.000000000 +0100 advtool-acc9768f27f9.jg.gz
-rwxr-xr-x 1 root root   108 2026-06-02 10:46:08.000000000 +0100 advtool.info
lrwxrwxrwx 1 root root    26 2026-06-02 10:46:08.000000000 +0100 advtool.jg.gz -> advtool-acc9768f27f9.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 lib

/bndl/advanced-tools/nova/bin:
total 540
-rwxr-xr-x 1 root root  67172 2026-06-02 10:45:50.000000000 +0100 ddns
-rwxr-xr-x 1 root root  66824 2026-06-02 10:45:40.000000000 +0100 fping
-rwxr-xr-x 1 root root  66964 2026-06-02 10:45:46.000000000 +0100 macscan
-rwxr-xr-x 1 root root 132960 2026-06-02 10:46:56.000000000 +0100 netwatch
-rwxr-xr-x 1 root root  66852 2026-06-02 10:45:42.000000000 +0100 pspeed
-rwxr-xr-x 1 root root  67212 2026-06-02 10:46:02.000000000 +0100 scanner
-rwxr-xr-x 1 root root  66812 2026-06-02 10:46:09.000000000 +0100 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 console

/bndl/advanced-tools/nova/lib/console:
total 28
-rwxr-xr-x 1 root root 25271 2026-06-02 10:45:42.000000000 +0100 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 home
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:40.000000000 +0100 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 webfig

/bndl/dhcp/home/web/webfig:
total 32
-rw-r--r-- 1 root root 27574 2026-06-02 10:45:55.000000000 +0100 dhcp-18bd695dd56c.jg.gz
-rwxr-xr-x 1 root root   102 2026-06-02 10:45:55.000000000 +0100 dhcp.info
lrwxrwxrwx 1 root root    23 2026-06-02 10:45:55.000000000 +0100 dhcp.jg.gz -> dhcp-18bd695dd56c.jg.gz

/bndl/dhcp/lib:
total 68
-rwxr-xr-x 1 root root 66872 2026-06-02 10:45:42.000000000 +0100 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 lib

/bndl/dhcp/nova/bin:
total 580
-rwxr-xr-x 1 root root 592672 2026-06-02 10:47:02.000000000 +0100 dhcp
lrwxrwxrwx 1 root root      4 2026-06-02 10:47:02.000000000 +0100 dhcpclient -> dhcp

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 console

/bndl/dhcp/nova/lib/console:
total 116
-rwxr-xr-x 1 root root 117088 2026-06-02 10:45:46.000000000 +0100 1128267776.mem

/bndl/hotspot:
total 12
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:40.000000000 +0100 nova

/bndl/hotspot/home:
total 4
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:40.000000000 +0100 web

/bndl/hotspot/home/web:
total 8
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:40.000000000 +0100 hotspot
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 webfig

/bndl/hotspot/home/web/hotspot:
total 68
-rw-r--r-- 1 root root 1094 2026-04-21 14:58:49.000000000 +0100 alogin.html
-rw-r--r-- 1 root root  311 2026-04-21 14:58:49.000000000 +0100 api.json
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 css
-rw-r--r-- 1 root root  640 2026-04-21 14:58:49.000000000 +0100 error.html
-rw-r--r-- 1 root root 4033 2026-04-21 14:58:49.000000000 +0100 errors.txt
-rw-r--r-- 1 root root  903 2026-04-21 14:58:49.000000000 +0100 favicon.ico
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 img
-rw-r--r-- 1 root root 4423 2026-04-21 14:58:49.000000000 +0100 login.html
-rw-r--r-- 1 root root 1459 2026-04-21 14:58:49.000000000 +0100 logout.html
-rw-r--r-- 1 root root 7218 2026-04-21 14:58:49.000000000 +0100 md5.js
-rw-r--r-- 1 root root 1204 2026-04-21 14:58:49.000000000 +0100 radvert.html
-rw-r--r-- 1 root root  330 2026-04-21 14:58:49.000000000 +0100 redirect.html
-rw-r--r-- 1 root root  877 2026-04-21 14:58:49.000000000 +0100 rlogin.html
-rw-r--r-- 1 root root 2855 2026-04-21 14:58:49.000000000 +0100 status.html
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 xml

/bndl/hotspot/home/web/hotspot/css:
total 4
-rw-r--r-- 1 root root 4053 2026-04-21 14:58:49.000000000 +0100 style.css

/bndl/hotspot/home/web/hotspot/img:
total 8
-rw-r--r-- 1 root root 644 2026-04-21 14:58:49.000000000 +0100 password.svg
-rw-r--r-- 1 root root 444 2026-04-21 14:58:49.000000000 +0100 user.svg

/bndl/hotspot/home/web/hotspot/xml:
total 32
-rw-r--r-- 1 root root 4251 2026-04-21 14:58:49.000000000 +0100 WISPAccessGatewayParam.xsd
-rw-r--r-- 1 root root  839 2026-04-21 14:58:49.000000000 +0100 alogin.html
-rw-r--r-- 1 root root  428 2026-04-21 14:58:49.000000000 +0100 error.html
-rw-r--r-- 1 root root  372 2026-04-21 14:58:49.000000000 +0100 flogout.html
-rw-r--r-- 1 root root  809 2026-04-21 14:58:49.000000000 +0100 login.html
-rw-r--r-- 1 root root  370 2026-04-21 14:58:49.000000000 +0100 logout.html
-rw-r--r-- 1 root root  545 2026-04-21 14:58:49.000000000 +0100 rlogin.html

/bndl/hotspot/home/web/webfig:
total 24
-rw-r--r-- 1 root root 20460 2026-06-02 10:46:10.000000000 +0100 hotspot-97d6fd9e5a47.jg.gz
-rwxr-xr-x 1 root root   108 2026-06-02 10:46:11.000000000 +0100 hotspot.info
lrwxrwxrwx 1 root root    26 2026-06-02 10:46:11.000000000 +0100 hotspot.jg.gz -> hotspot-97d6fd9e5a47.jg.gz

/bndl/hotspot/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 modules

/bndl/hotspot/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 5.6.3

/bndl/hotspot/lib/modules/5.6.3:
total 4
-rw-r--r-- 1 root root    0 2026-06-02 10:47:14.000000000 +0100 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 net

/bndl/hotspot/lib/modules/5.6.3/net:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 ipv4

/bndl/hotspot/lib/modules/5.6.3/net/ipv4:
total 84
-rw-r--r-- 1 root root 83984 2026-06-02 10:46:52.000000000 +0100 unicl.ko

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 lib

/bndl/hotspot/nova/bin:
total 452
-rwxr-xr-x 1 root root 461300 2026-06-02 10:47:09.000000000 +0100 hotspot

/bndl/hotspot/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 radius

/bndl/hotspot/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2026-06-02 10:46:01.000000000 +0100 hotspot.x3

/bndl/hotspot/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 console

/bndl/hotspot/nova/lib/console:
total 80
-rwxr-xr-x 1 root root 80055 2026-06-02 10:46:02.000000000 +0100 1132462080.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:40.000000000 +0100 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 webfig

/bndl/ipv6/home/web/webfig:
total 76
-rw-r--r-- 1 root root 71098 2026-06-02 10:45:59.000000000 +0100 ipv6-4d8e1a52b67b.jg.gz
-rwxr-xr-x 1 root root   102 2026-06-02 10:45:59.000000000 +0100 ipv6.info
lrwxrwxrwx 1 root root    23 2026-06-02 10:46:00.000000000 +0100 ipv6.jg.gz -> ipv6-4d8e1a52b67b.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:40.000000000 +0100 lib

/bndl/ipv6/nova/bin:
total 200
-rwxr-xr-x 1 root root  67156 2026-06-02 10:46:06.000000000 +0100 ippool6
-rwxr-xr-x 1 root root 132936 2026-06-02 10:46:06.000000000 +0100 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 route

/bndl/ipv6/nova/lib/console:
total 180
-rwxr-xr-x 1 root root 181444 2026-06-02 10:45:51.000000000 +0100 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2026-04-21 14:58:49.000000000 +0100 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:40.000000000 +0100 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 webfig

/bndl/ppp/home/web/webfig:
total 44
-rw-r--r-- 1 root root 39720 2026-06-02 10:45:58.000000000 +0100 ppp-20a75d2f7f8f.jg.gz
-rwxr-xr-x 1 root root   100 2026-06-02 10:45:58.000000000 +0100 ppp.info
lrwxrwxrwx 1 root root    22 2026-06-02 10:45:58.000000000 +0100 ppp.jg.gz -> ppp-20a75d2f7f8f.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:40.000000000 +0100 5.6.3

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2026-06-02 10:49:04.000000000 +0100 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 164
-rw-r--r-- 1 root root 19856 2026-06-02 10:44:22.000000000 +0100 ppp_async.ko
-rw-r--r-- 1 root root 11824 2026-06-02 10:44:22.000000000 +0100 ppp_deflate.ko
-rw-r--r-- 1 root root 62784 2026-06-02 10:44:22.000000000 +0100 ppp_generic.ko
-rw-r--r-- 1 root root 13744 2026-06-02 10:44:22.000000000 +0100 ppp_mppe.ko
-rw-r--r-- 1 root root 16496 2026-06-02 10:44:22.000000000 +0100 ppp_synctty.ko
-rw-r--r-- 1 root root 23592 2026-06-02 10:44:22.000000000 +0100 pppoe.ko
-rw-r--r-- 1 root root  7080 2026-06-02 10:44:22.000000000 +0100 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 156
-rw-r--r-- 1 root root 66664 2026-06-02 10:46:39.000000000 +0100 ovpn.ko
-rw-r--r-- 1 root root 11432 2026-06-02 10:46:32.000000000 +0100 pppoefp.ko
-rw-r--r-- 1 root root 74192 2026-06-02 10:46:53.000000000 +0100 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 112
-rw-r--r-- 1 root root 92824 2026-06-02 10:46:31.000000000 +0100 l2tp.ko
-rw-r--r-- 1 root root 17632 2026-06-02 10:46:01.000000000 +0100 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:40.000000000 +0100 etc
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:40.000000000 +0100 lib

/bndl/ppp/nova/bin:
total 1092
-rwxr-xr-x 1 root root 1118196 2026-06-02 10:48:50.000000000 +0100 ppp
lrwxrwxrwx 1 root root       3 2026-06-02 10:48:51.000000000 +0100 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2026-06-02 10:45:37.000000000 +0100 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2026-06-02 10:45:37.000000000 +0100 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 profiler

/bndl/ppp/nova/lib/console:
total 144
-rwxr-xr-x 1 root root 146253 2026-06-02 10:45:52.000000000 +0100 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 68
-rwxr-xr-x 1 root root 66628 2026-06-02 10:46:48.000000000 +0100 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:40.000000000 +0100 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 webfig

/bndl/security/home/web/webfig:
total 28
-rw-r--r-- 1 root root 22428 2026-06-02 10:47:28.000000000 +0100 secure-88687dc172de.jg.gz
-rwxr-xr-x 1 root root   106 2026-06-02 10:47:28.000000000 +0100 secure.info
lrwxrwxrwx 1 root root    25 2026-06-02 10:47:29.000000000 +0100 secure.jg.gz -> secure-88687dc172de.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 5.6.3

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:40.000000000 +0100 kernel
-rw-r--r-- 1 root root  162 2026-06-02 10:49:50.000000000 +0100 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 crypto
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:40.000000000 +0100 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 128
-rw-r--r-- 1 root root  9808 2026-06-02 10:44:21.000000000 +0100 blowfish_common.ko
-rw-r--r-- 1 root root  7528 2026-06-02 10:44:21.000000000 +0100 blowfish_generic.ko
-rw-r--r-- 1 root root 30112 2026-06-02 10:44:21.000000000 +0100 camellia_generic.ko
-rw-r--r-- 1 root root 15384 2026-06-02 10:44:21.000000000 +0100 chacha20poly1305.ko
-rw-r--r-- 1 root root  7208 2026-06-02 10:44:21.000000000 +0100 chacha_generic.ko
-rw-r--r-- 1 root root  6080 2026-06-02 10:44:21.000000000 +0100 echainiv.ko
-rw-r--r-- 1 root root  5352 2026-06-02 10:44:21.000000000 +0100 poly1305_generic.ko
-rw-r--r-- 1 root root 23504 2026-06-02 10:44:22.000000000 +0100 twofish_common.ko
-rw-r--r-- 1 root root 11432 2026-06-02 10:44:22.000000000 +0100 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 key
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 44
-rw-r--r-- 1 root root 18264 2026-06-02 10:44:25.000000000 +0100 ah4.ko
-rw-r--r-- 1 root root 23968 2026-06-02 10:44:25.000000000 +0100 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 68
-rw-r--r-- 1 root root 66232 2026-06-02 10:44:26.000000000 +0100 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 76
-rw-r--r-- 1 root root 24416 2026-06-02 10:44:27.000000000 +0100 xfrm_interface.ko
-rw-r--r-- 1 root root 49312 2026-06-02 10:44:27.000000000 +0100 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:40.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 lib

/bndl/security/nova/bin:
total 1356
-rwxr-xr-x 1 root root 991056 2026-06-02 10:49:39.000000000 +0100 ipsec
lrwxrwxrwx 1 root root      5 2026-06-02 10:49:39.000000000 +0100 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 396944 2026-06-02 10:48:31.000000000 +0100 ssh
lrwxrwxrwx 1 root root      3 2026-06-02 10:48:32.000000000 +0100 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2026-06-02 10:47:17.000000000 +0100 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2026-06-02 10:47:17.000000000 +0100 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 console

/bndl/security/nova/lib/console:
total 92
-rwxr-xr-x 1 root root 92599 2026-06-02 10:47:27.000000000 +0100 1077936128.mem

/bndl/wifi:
total 12
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:40.000000000 +0100 nova

/bndl/wifi/home:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 web

/bndl/wifi/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 webfig

/bndl/wifi/home/web/webfig:
total 80
-rw-r--r-- 1 root root 73929 2026-06-02 10:46:05.000000000 +0100 wave2-61719aa0f1dc.jg.gz
-rwxr-xr-x 1 root root   104 2026-06-02 10:46:05.000000000 +0100 wave2.info
lrwxrwxrwx 1 root root    24 2026-06-02 10:46:05.000000000 +0100 wave2.jg.gz -> wave2-61719aa0f1dc.jg.gz

/bndl/wifi/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 modules

/bndl/wifi/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 5.6.3

/bndl/wifi/lib/modules/5.6.3:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 misc
-rw-r--r-- 1 root root   23 2026-06-02 10:50:20.000000000 +0100 modules.dep.wifi

/bndl/wifi/lib/modules/5.6.3/misc:
total 84
-rw-r--r-- 1 root root 82952 2026-06-02 10:47:09.000000000 +0100 c2.ko

/bndl/wifi/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:40.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 lib

/bndl/wifi/nova/bin:
total 2060
-rwxr-xr-x 1 root root 2105808 2026-06-02 10:50:12.000000000 +0100 ww2

/bndl/wifi/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 radius

/bndl/wifi/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 183 2026-06-02 10:45:43.000000000 +0100 wifi.x3

/bndl/wifi/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2026-06-02 10:45:43.000000000 +0100 wifi.x3

/bndl/wifi/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 console

/bndl/wifi/nova/lib/console:
total 232
-rwxr-xr-x 1 root root 236877 2026-06-02 10:46:01.000000000 +0100 1275068416.mem

/boot:
total 104
-rw-r--r-- 1 root root 104784 2026-06-02 10:30:15.000000000 +0100 initrd.rgz

/dev:
total 0

/etc:
total 260
-rw-r--r-- 1 root root 130743 2026-06-02 10:25:11.000000000 +0100 license
-rw-r--r-- 1 root root   4049 2026-04-21 14:29:40.000000000 +0100 stm8_hw_monitor.bin
lrwxrwxrwx 1 root root     24 2026-06-02 10:50:40.000000000 +0100 termcap -> /pckg/option/etc/termcap
-rw-r--r-- 1 root root 128864 2026-06-02 10:28:09.000000000 +0100 tilegx-7.23.1.fwf

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2026-06-02 10:50:40.000000000 +0100 web

/home/web:
total 64
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:40.000000000 +0100 assets
-rwxr-xr-x 1 root root 19798 2026-06-02 10:27:11.000000000 +0100 bth-files.html
-rwxr-xr-x 1 root root   600 2026-01-08 09:06:12.000000000 +0000 favicon.png
-rwxr-xr-x 1 root root   689 2026-01-08 09:06:12.000000000 +0000 favicon.svg
-rwxr-xr-x 1 root root   708 2026-01-08 09:06:11.000000000 +0000 graph.css
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:40.000000000 +0100 help
-rwxr-xr-x 1 root root  1317 2026-01-08 09:06:12.000000000 +0000 index2.html
lrwxrwxrwx 1 root root    12 2026-06-02 10:45:35.000000000 +0100 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2026-01-08 09:06:12.000000000 +0000 logo.png
-rw-r--r-- 1 root root  2427 2026-04-21 14:58:49.000000000 +0100 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2026-01-08 09:06:12.000000000 +0000 robots.txt
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:40.000000000 +0100 webfig
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:40.000000000 +0100 winbox

/home/web/assets:
total 172
-rw-r--r-- 1 root root  19040 2026-04-21 14:58:49.000000000 +0100 400.woff2
-rw-r--r-- 1 root root  19156 2026-04-21 14:58:49.000000000 +0100 700.woff2
-rwxr-xr-x 1 root root   1050 2026-01-08 09:06:12.000000000 +0000 script-582e5506ba67.js
-rwxr-xr-x 1 root root 128490 2026-06-02 10:25:11.000000000 +0100 style-2d2fe181ac93.css

/home/web/help:
total 4
-rw-r--r-- 1 root root 118 2026-04-21 14:58:49.000000000 +0100 license.html

/home/web/webfig:
total 1516
-rwxr-xr-x 1 root root   9157 2026-06-02 10:26:47.000000000 +0100 curve255-541e54a862be.js
-rwxr-xr-x 1 root root     72 2026-06-02 10:28:39.000000000 +0100 icons.info
-rwxr-xr-x 1 root root  25219 2026-04-21 08:56:38.000000000 +0100 icons.png
-rwxr-xr-x 1 root root     55 2026-06-02 10:28:39.000000000 +0100 icons24.info
-rwxr-xr-x 1 root root  41114 2026-04-21 08:56:38.000000000 +0100 icons24.png
-rwxr-xr-x 1 root root     55 2026-06-02 10:28:39.000000000 +0100 icons32.info
-rwxr-xr-x 1 root root  56951 2026-04-21 08:56:38.000000000 +0100 icons32.png
-rwxr-xr-x 1 root root  24001 2026-06-02 10:26:47.000000000 +0100 index.html
lrwxrwxrwx 1 root root     13 2026-06-02 10:26:47.000000000 +0100 list -> /ram/gum.list
-rwxr-xr-x 1 root root 434147 2026-06-02 10:26:47.000000000 +0100 master-6de47960b3c1.js
-rw-r--r-- 1 root root 933217 2026-06-02 10:28:40.000000000 +0100 roteros-6183747dccd0.jg.gz
-rwxr-xr-x 1 root root    109 2026-06-02 10:28:40.000000000 +0100 roteros.info
lrwxrwxrwx 1 root root     26 2026-06-02 10:28:41.000000000 +0100 roteros.jg.gz -> roteros-6183747dccd0.jg.gz

/home/web/winbox:
total 0

/lib:
total 3332
-rwxr-xr-x 1 root root 460148 2026-06-02 10:25:49.000000000 +0100 libc.so
-rwxr-xr-x 1 root root 132976 2026-06-02 10:28:08.000000000 +0100 libeap.so
-rwxr-xr-x 1 root root  66732 2026-06-02 10:26:51.000000000 +0100 libjson.so
-rwxr-xr-x 1 root root 330104 2026-06-02 10:27:30.000000000 +0100 librappsup.so
-rwxr-xr-x 1 root root 198636 2026-06-02 10:27:10.000000000 +0100 libubox.so
-rwxr-xr-x 1 root root 132804 2026-06-02 10:26:46.000000000 +0100 libuc++.so
-rwxr-xr-x 1 root root 461696 2026-06-02 10:27:34.000000000 +0100 libucrypto.so
-rwxr-xr-x 1 root root  66940 2026-06-02 10:27:09.000000000 +0100 libufiber.so
-rwxr-xr-x 1 root root 132752 2026-06-02 10:27:11.000000000 +0100 libuhttp.so
-rwxr-xr-x 1 root root 987780 2026-06-02 10:26:59.000000000 +0100 libumsg.so
-rwxr-xr-x 1 root root  69452 2026-06-02 10:27:42.000000000 +0100 liburadius.so
-rwxr-xr-x 1 root root  66684 2026-06-02 10:27:39.000000000 +0100 libuxml++.so
-rwxr-xr-x 1 root root  67204 2026-06-02 10:26:49.000000000 +0100 libwww.so
-rwxr-xr-x 1 root root  66680 2026-06-02 10:26:51.000000000 +0100 libxml.so
-rwxr-xr-x 1 root root 132376 2026-06-02 10:26:50.000000000 +0100 libz.so
drwxr-xr-x 3 root root   4096 2026-06-02 10:50:40.000000000 +0100 modules
lrwxrwxrwx 1 root root     27 2026-06-02 10:50:40.000000000 +0100 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2026-06-02 10:50:40.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:40.000000000 +0100 drivers
drwxr-xr-x 8 root root 4096 2026-06-02 10:50:40.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 misc
-rw-r--r-- 1 root root 2411 2026-06-02 10:45:33.000000000 +0100 modules.dep.system
drwxr-xr-x 6 root root 4096 2026-06-02 10:50:40.000000000 +0100 net

/lib/modules/5.6.3/drivers:
total 12
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 char
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 crypto
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 net

/lib/modules/5.6.3/drivers/char:
total 16
-rw-r--r-- 1 root root 14536 2026-06-02 10:42:00.000000000 +0100 ticker.ko

/lib/modules/5.6.3/drivers/crypto:
total 48
-rw-r--r-- 1 root root 48376 2026-06-02 10:42:39.000000000 +0100 tilegx_crypton.ko

/lib/modules/5.6.3/drivers/net:
total 1164
-rw-r--r-- 1 root root  65040 2026-06-02 10:43:08.000000000 +0100 ath8327.ko
-rw-r--r-- 1 root root  66288 2026-06-02 10:41:57.000000000 +0100 atl1c.ko
-rw-r--r-- 1 root root  14952 2026-06-02 10:42:03.000000000 +0100 imq.ko
-rw-r--r-- 1 root root  20408 2026-06-02 10:44:30.000000000 +0100 mpls_fp.ko
-rw-r--r-- 1 root root 386872 2026-06-02 10:44:30.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root  51464 2026-06-02 10:42:59.000000000 +0100 phy_amcc_qt2025.ko
-rw-r--r-- 1 root root 155920 2026-06-02 10:43:01.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root  15416 2026-06-02 10:42:59.000000000 +0100 phy_ti_tlk10232.ko
-rw-r--r-- 1 root root 110816 2026-06-02 10:43:12.000000000 +0100 switch.ko
-rw-r--r-- 1 root root 137952 2026-06-02 10:41:43.000000000 +0100 tilegx.ko
drwxr-xr-x 2 root root   4096 2026-06-02 10:50:40.000000000 +0100 usb
-rw-r--r-- 1 root root  36648 2026-06-02 10:42:00.000000000 +0100 via-velocity.ko
-rw-r--r-- 1 root root 105448 2026-06-02 10:44:20.000000000 +0100 vxlan2.ko

/lib/modules/5.6.3/drivers/net/usb:
total 308
-rw-r--r-- 1 root root 127456 2026-06-02 10:43:28.000000000 +0100 fp_usbnet.ko
-rw-r--r-- 1 root root 182768 2026-06-02 10:43:11.000000000 +0100 mbim.ko

/lib/modules/5.6.3/kernel:
total 24
drwxr-xr-x  3 root root 4096 2026-06-02 10:50:40.000000000 +0100 arch
drwxr-xr-x  2 root root 4096 2026-06-02 10:50:40.000000000 +0100 crypto
drwxr-xr-x  7 root root 4096 2026-06-02 10:50:40.000000000 +0100 drivers
drwxr-xr-x  4 root root 4096 2026-06-02 10:50:40.000000000 +0100 fs
drwxr-xr-x  5 root root 4096 2026-06-02 10:50:40.000000000 +0100 lib
drwxr-xr-x 12 root root 4096 2026-06-02 10:50:40.000000000 +0100 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 tile

/lib/modules/5.6.3/kernel/arch/tile:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 oprofile

/lib/modules/5.6.3/kernel/arch/tile/oprofile:
total 72
-rw-r--r-- 1 root root 71320 2026-06-02 10:44:21.000000000 +0100 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 56
-rw-r--r-- 1 root root  4368 2026-06-02 10:44:21.000000000 +0100 arc4.ko
-rw-r--r-- 1 root root 22888 2026-06-02 10:44:21.000000000 +0100 ccm.ko
-rw-r--r-- 1 root root  7648 2026-06-02 10:44:21.000000000 +0100 cmac.ko
-rw-r--r-- 1 root root  5560 2026-06-02 10:44:21.000000000 +0100 des_generic.ko
-rw-r--r-- 1 root root  7024 2026-06-02 10:44:21.000000000 +0100 md4.ko

/lib/modules/5.6.3/kernel/drivers:
total 20
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 ata
drwxr-xr-x 7 root root 4096 2026-06-02 10:50:40.000000000 +0100 net
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 scsi
drwxr-xr-x 8 root root 4096 2026-06-02 10:50:40.000000000 +0100 usb
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 watchdog

/lib/modules/5.6.3/kernel/drivers/ata:
total 540
-rw-r--r-- 1 root root  43872 2026-06-02 10:44:22.000000000 +0100 ahci.ko
-rw-r--r-- 1 root root  59208 2026-06-02 10:44:22.000000000 +0100 libahci.ko
-rw-r--r-- 1 root root 446448 2026-06-02 10:44:22.000000000 +0100 libata.ko

/lib/modules/5.6.3/kernel/drivers/net:
total 164
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:40.000000000 +0100 bonding
-rw-r--r-- 1 root root 70912 2026-06-02 10:44:22.000000000 +0100 macsec.ko
-rw-r--r-- 1 root root 37448 2026-06-02 10:44:22.000000000 +0100 macvlan.ko
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:40.000000000 +0100 phy
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:40.000000000 +0100 slip
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:40.000000000 +0100 usb
-rw-r--r-- 1 root root 29952 2026-06-02 10:44:23.000000000 +0100 veth.ko
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:40.000000000 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 236
-rw-r--r-- 1 root root 238224 2026-06-02 10:44:22.000000000 +0100 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/phy:
total 140
-rw-r--r-- 1 root root 140608 2026-06-02 10:44:22.000000000 +0100 libphy.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 12
-rw-r--r-- 1 root root 11408 2026-06-02 10:44:22.000000000 +0100 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/usb:
total 232
-rw-r--r-- 1 root root 33480 2026-06-02 10:44:22.000000000 +0100 ax88179_178a.ko
-rw-r--r-- 1 root root 74152 2026-06-02 10:44:23.000000000 +0100 hso.ko
-rw-r--r-- 1 root root 22456 2026-06-02 10:44:23.000000000 +0100 sierra_net.ko
-rw-r--r-- 1 root root 43880 2026-06-02 10:44:23.000000000 +0100 smsc95xx.ko
-rw-r--r-- 1 root root 50848 2026-06-02 10:44:23.000000000 +0100 usbnet.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 128
-rw-r--r-- 1 root root 128688 2026-06-02 10:44:23.000000000 +0100 wireguard.ko

/lib/modules/5.6.3/kernel/drivers/scsi:
total 316
-rw-r--r-- 1 root root 241408 2026-06-02 10:44:23.000000000 +0100 scsi_mod.ko
-rw-r--r-- 1 root root  78128 2026-06-02 10:44:23.000000000 +0100 sd_mod.ko

/lib/modules/5.6.3/kernel/drivers/usb:
total 24
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 class
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 common
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 core
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 host
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 serial
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 storage

/lib/modules/5.6.3/kernel/drivers/usb/class:
total 48
-rw-r--r-- 1 root root 45216 2026-06-02 10:44:23.000000000 +0100 cdc-acm.ko

/lib/modules/5.6.3/kernel/drivers/usb/common:
total 8
-rw-r--r-- 1 root root 7824 2026-06-02 10:44:23.000000000 +0100 usb-common.ko

/lib/modules/5.6.3/kernel/drivers/usb/core:
total 348
-rw-r--r-- 1 root root 353024 2026-06-02 10:44:23.000000000 +0100 usbcore.ko

/lib/modules/5.6.3/kernel/drivers/usb/host:
total 116
-rw-r--r-- 1 root root 79760 2026-06-02 10:44:23.000000000 +0100 ehci-hcd.ko
-rw-r--r-- 1 root root 36752 2026-06-02 10:44:23.000000000 +0100 ohci-hcd.ko

/lib/modules/5.6.3/kernel/drivers/usb/serial:
total 412
-rw-r--r-- 1 root root  14336 2026-06-02 10:44:23.000000000 +0100 ch341.ko
-rw-r--r-- 1 root root  33160 2026-06-02 10:44:23.000000000 +0100 cp210x.ko
-rw-r--r-- 1 root root  99624 2026-06-02 10:44:23.000000000 +0100 ftdi_sio.ko
-rw-r--r-- 1 root root   8032 2026-06-02 10:44:23.000000000 +0100 ipw.ko
-rw-r--r-- 1 root root 114560 2026-06-02 10:44:23.000000000 +0100 option.ko
-rw-r--r-- 1 root root  23784 2026-06-02 10:44:23.000000000 +0100 pl2303.ko
-rw-r--r-- 1 root root  18048 2026-06-02 10:44:23.000000000 +0100 qcserial.ko
-rw-r--r-- 1 root root  21816 2026-06-02 10:44:23.000000000 +0100 sierra.ko
-rw-r--r-- 1 root root  14656 2026-06-02 10:44:23.000000000 +0100 usb_wwan.ko
-rw-r--r-- 1 root root  56272 2026-06-02 10:44:23.000000000 +0100 usbserial.ko

/lib/modules/5.6.3/kernel/drivers/usb/storage:
total 124
-rw-r--r-- 1 root root 125584 2026-06-02 10:44:23.000000000 +0100 usb-storage.ko

/lib/modules/5.6.3/kernel/drivers/watchdog:
total 16
-rw-r--r-- 1 root root 14312 2026-06-02 10:44:24.000000000 +0100 tile_wdt.ko

/lib/modules/5.6.3/kernel/fs:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 cifs
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 ksmbd

/lib/modules/5.6.3/kernel/fs/cifs:
total 860
-rw-r--r-- 1 root root 877560 2026-06-02 10:44:24.000000000 +0100 cifs.ko

/lib/modules/5.6.3/kernel/fs/ksmbd:
total 468
-rw-r--r-- 1 root root 477432 2026-06-02 10:44:24.000000000 +0100 ksmbd.ko

/lib/modules/5.6.3/kernel/lib:
total 52
-rw-r--r-- 1 root root 7056 2026-06-02 10:44:24.000000000 +0100 asn1_decoder.ko
-rw-r--r-- 1 root root 4552 2026-06-02 10:44:24.000000000 +0100 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 crypto
-rw-r--r-- 1 root root 6704 2026-06-02 10:44:24.000000000 +0100 oid_registry.ko
-rw-r--r-- 1 root root 5560 2026-06-02 10:44:24.000000000 +0100 ts_bm.ko
-rw-r--r-- 1 root root 5416 2026-06-02 10:44:24.000000000 +0100 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 92
-rw-r--r-- 1 root root  3072 2026-06-02 10:44:24.000000000 +0100 libarc4.ko
-rw-r--r-- 1 root root 10680 2026-06-02 10:44:24.000000000 +0100 libblake2s-generic.ko
-rw-r--r-- 1 root root  5384 2026-06-02 10:44:24.000000000 +0100 libblake2s.ko
-rw-r--r-- 1 root root  3032 2026-06-02 10:44:24.000000000 +0100 libchacha.ko
-rw-r--r-- 1 root root 11656 2026-06-02 10:44:24.000000000 +0100 libchacha20poly1305.ko
-rw-r--r-- 1 root root  9632 2026-06-02 10:44:24.000000000 +0100 libcurve25519-generic.ko
-rw-r--r-- 1 root root  2568 2026-06-02 10:44:24.000000000 +0100 libcurve25519.ko
-rw-r--r-- 1 root root 25040 2026-06-02 10:44:24.000000000 +0100 libdes.ko
-rw-r--r-- 1 root root  6384 2026-06-02 10:44:24.000000000 +0100 libpoly1305.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 36
-rw-r--r-- 1 root root 33832 2026-06-02 10:44:24.000000000 +0100 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 24
-rw-r--r-- 1 root root 23080 2026-06-02 10:44:24.000000000 +0100 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 40
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 802
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 8021q
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 ipv4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 ipv6
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 mpls
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 rfkill
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 sched
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 xfrm

/lib/modules/5.6.3/kernel/net/802:
total 20
-rw-r--r-- 1 root root 17992 2026-06-02 10:44:24.000000000 +0100 mrp.ko

/lib/modules/5.6.3/kernel/net/8021q:
total 52
-rw-r--r-- 1 root root 50256 2026-06-02 10:44:24.000000000 +0100 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 164
-rw-r--r-- 1 root root  3888 2026-06-02 10:44:24.000000000 +0100 ebt_802_3.ko
-rw-r--r-- 1 root root  5376 2026-06-02 10:44:24.000000000 +0100 ebt_arp.ko
-rw-r--r-- 1 root root  4728 2026-06-02 10:44:24.000000000 +0100 ebt_arpreply.ko
-rw-r--r-- 1 root root  4808 2026-06-02 10:44:24.000000000 +0100 ebt_dnat.ko
-rw-r--r-- 1 root root  5632 2026-06-02 10:44:24.000000000 +0100 ebt_ip.ko
-rw-r--r-- 1 root root  6080 2026-06-02 10:44:24.000000000 +0100 ebt_ip6.ko
-rw-r--r-- 1 root root  7136 2026-06-02 10:44:24.000000000 +0100 ebt_limit.ko
-rw-r--r-- 1 root root  4744 2026-06-02 10:44:24.000000000 +0100 ebt_mark.ko
-rw-r--r-- 1 root root  5064 2026-06-02 10:44:24.000000000 +0100 ebt_mark_m.ko
-rw-r--r-- 1 root root  3568 2026-06-02 10:44:25.000000000 +0100 ebt_pkttype.ko
-rw-r--r-- 1 root root  4552 2026-06-02 10:44:25.000000000 +0100 ebt_redirect.ko
-rw-r--r-- 1 root root  4544 2026-06-02 10:44:25.000000000 +0100 ebt_snat.ko
-rw-r--r-- 1 root root  6264 2026-06-02 10:44:25.000000000 +0100 ebt_stp.ko
-rw-r--r-- 1 root root  4480 2026-06-02 10:44:25.000000000 +0100 ebt_vlan.ko
-rw-r--r-- 1 root root  4920 2026-06-02 10:44:25.000000000 +0100 ebtable_filter.ko
-rw-r--r-- 1 root root  4920 2026-06-02 10:44:25.000000000 +0100 ebtable_nat.ko
-rw-r--r-- 1 root root 44120 2026-06-02 10:44:25.000000000 +0100 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 64
-rw-r--r-- 1 root root 30552 2026-06-02 10:44:25.000000000 +0100 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:40.000000000 +0100 netfilter
-rw-r--r-- 1 root root 27280 2026-06-02 10:44:25.000000000 +0100 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 128
-rw-r--r-- 1 root root 38264 2026-06-02 10:44:25.000000000 +0100 ip_tables.ko
-rw-r--r-- 1 root root  6144 2026-06-02 10:44:25.000000000 +0100 ipt_REJECT.ko
-rw-r--r-- 1 root root  6272 2026-06-02 10:44:25.000000000 +0100 iptable_filter.ko
-rw-r--r-- 1 root root  6464 2026-06-02 10:44:25.000000000 +0100 iptable_mangle.ko
-rw-r--r-- 1 root root  5792 2026-06-02 10:44:25.000000000 +0100 iptable_nat.ko
-rw-r--r-- 1 root root  6720 2026-06-02 10:44:25.000000000 +0100 iptable_raw.ko
-rw-r--r-- 1 root root  5960 2026-06-02 10:44:25.000000000 +0100 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root 19784 2026-06-02 10:44:25.000000000 +0100 nf_nat_h323.ko
-rw-r--r-- 1 root root 10016 2026-06-02 10:44:25.000000000 +0100 nf_nat_pptp.ko
-rw-r--r-- 1 root root  7464 2026-06-02 10:44:25.000000000 +0100 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 56
-rw-r--r-- 1 root root 17288 2026-06-02 10:44:25.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root 22712 2026-06-02 10:44:25.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root  5224 2026-06-02 10:44:25.000000000 +0100 ip6_udp_tunnel.ko
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:40.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 112
-rw-r--r-- 1 root root 39008 2026-06-02 10:44:25.000000000 +0100 ip6_tables.ko
-rw-r--r-- 1 root root  6104 2026-06-02 10:44:25.000000000 +0100 ip6t_NPT.ko
-rw-r--r-- 1 root root  6208 2026-06-02 10:44:25.000000000 +0100 ip6t_REJECT.ko
-rw-r--r-- 1 root root  4000 2026-06-02 10:44:25.000000000 +0100 ip6t_eui64.ko
-rw-r--r-- 1 root root  4608 2026-06-02 10:44:25.000000000 +0100 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  6280 2026-06-02 10:44:25.000000000 +0100 ip6table_filter.ko
-rw-r--r-- 1 root root  6920 2026-06-02 10:44:25.000000000 +0100 ip6table_mangle.ko
-rw-r--r-- 1 root root  5792 2026-06-02 10:44:25.000000000 +0100 ip6table_nat.ko
-rw-r--r-- 1 root root  6728 2026-06-02 10:44:25.000000000 +0100 ip6table_raw.ko
-rw-r--r-- 1 root root  8408 2026-06-02 10:44:26.000000000 +0100 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/mpls:
total 96
-rw-r--r-- 1 root root  8912 2026-06-02 10:44:26.000000000 +0100 mpls_iptunnel.ko
-rw-r--r-- 1 root root 82016 2026-06-02 10:44:26.000000000 +0100 mpls_router.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 704
-rw-r--r-- 1 root root 16000 2026-06-02 10:44:26.000000000 +0100 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root 69936 2026-06-02 10:44:26.000000000 +0100 nf_conntrack_h323.ko
-rw-r--r-- 1 root root 12952 2026-06-02 10:44:26.000000000 +0100 nf_conntrack_irc.ko
-rw-r--r-- 1 root root 60800 2026-06-02 10:44:26.000000000 +0100 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root 15880 2026-06-02 10:44:26.000000000 +0100 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root 14448 2026-06-02 10:44:26.000000000 +0100 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root 46760 2026-06-02 10:44:26.000000000 +0100 nf_conntrack_sip.ko
-rw-r--r-- 1 root root 10112 2026-06-02 10:44:26.000000000 +0100 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root 59112 2026-06-02 10:44:26.000000000 +0100 nf_nat.ko
-rw-r--r-- 1 root root  7288 2026-06-02 10:44:26.000000000 +0100 nf_nat_ftp.ko
-rw-r--r-- 1 root root  6672 2026-06-02 10:44:26.000000000 +0100 nf_nat_irc.ko
-rw-r--r-- 1 root root 14760 2026-06-02 10:44:26.000000000 +0100 nf_nat_rtsp.ko
-rw-r--r-- 1 root root 22528 2026-06-02 10:44:26.000000000 +0100 nf_nat_sip.ko
-rw-r--r-- 1 root root  5096 2026-06-02 10:44:26.000000000 +0100 nf_nat_tftp.ko
-rw-r--r-- 1 root root 16704 2026-06-02 10:44:26.000000000 +0100 nfnetlink.ko
-rw-r--r-- 1 root root 58656 2026-06-02 10:44:26.000000000 +0100 x_tables.ko
-rw-r--r-- 1 root root 11112 2026-06-02 10:44:26.000000000 +0100 xt_CT.ko
-rw-r--r-- 1 root root  6472 2026-06-02 10:44:26.000000000 +0100 xt_DSCP.ko
-rw-r--r-- 1 root root  5176 2026-06-02 10:44:26.000000000 +0100 xt_HL.ko
-rw-r--r-- 1 root root  5248 2026-06-02 10:44:26.000000000 +0100 xt_MASQUERADE.ko
-rw-r--r-- 1 root root  5808 2026-06-02 10:44:26.000000000 +0100 xt_NETMAP.ko
-rw-r--r-- 1 root root  4848 2026-06-02 10:44:26.000000000 +0100 xt_REDIRECT.ko
-rw-r--r-- 1 root root 10488 2026-06-02 10:44:26.000000000 +0100 xt_TCPMSS.ko
-rw-r--r-- 1 root root  8136 2026-06-02 10:44:26.000000000 +0100 xt_addrtype.ko
-rw-r--r-- 1 root root  5912 2026-06-02 10:44:26.000000000 +0100 xt_connbytes.ko
-rw-r--r-- 1 root root  7272 2026-06-02 10:44:26.000000000 +0100 xt_connmark.ko
-rw-r--r-- 1 root root  8360 2026-06-02 10:44:26.000000000 +0100 xt_conntrack.ko
-rw-r--r-- 1 root root  4576 2026-06-02 10:44:26.000000000 +0100 xt_dscp.ko
-rw-r--r-- 1 root root 32704 2026-06-02 10:44:26.000000000 +0100 xt_hashlimit.ko
-rw-r--r-- 1 root root  5168 2026-06-02 10:44:26.000000000 +0100 xt_helper.ko
-rw-r--r-- 1 root root  4304 2026-06-02 10:44:26.000000000 +0100 xt_hl.ko
-rw-r--r-- 1 root root  4048 2026-06-02 10:44:26.000000000 +0100 xt_length.ko
-rw-r--r-- 1 root root  3736 2026-06-02 10:44:26.000000000 +0100 xt_mac.ko
-rw-r--r-- 1 root root  4656 2026-06-02 10:44:26.000000000 +0100 xt_mark.ko
-rw-r--r-- 1 root root  5072 2026-06-02 10:44:26.000000000 +0100 xt_multiport.ko
-rw-r--r-- 1 root root  8704 2026-06-02 10:44:26.000000000 +0100 xt_nat.ko
-rw-r--r-- 1 root root  6056 2026-06-02 10:44:26.000000000 +0100 xt_physdev.ko
-rw-r--r-- 1 root root  7568 2026-06-02 10:44:26.000000000 +0100 xt_policy.ko
-rw-r--r-- 1 root root  3544 2026-06-02 10:44:26.000000000 +0100 xt_realm.ko
-rw-r--r-- 1 root root  4608 2026-06-02 10:44:26.000000000 +0100 xt_statistic.ko
-rw-r--r-- 1 root root  4384 2026-06-02 10:44:26.000000000 +0100 xt_string.ko
-rw-r--r-- 1 root root  4664 2026-06-02 10:44:26.000000000 +0100 xt_tcpmss.ko
-rw-r--r-- 1 root root  6496 2026-06-02 10:44:26.000000000 +0100 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/rfkill:
total 36
-rw-r--r-- 1 root root 34136 2026-06-02 10:44:26.000000000 +0100 rfkill.ko

/lib/modules/5.6.3/kernel/net/sched:
total 144
-rw-r--r-- 1 root root 45512 2026-06-02 10:44:26.000000000 +0100 sch_cake.ko
-rw-r--r-- 1 root root 13256 2026-06-02 10:44:26.000000000 +0100 sch_codel.ko
-rw-r--r-- 1 root root 18008 2026-06-02 10:44:26.000000000 +0100 sch_fq_codel.ko
-rw-r--r-- 1 root root 44184 2026-06-02 10:44:26.000000000 +0100 sch_htb.ko
-rw-r--r-- 1 root root 15800 2026-06-02 10:44:27.000000000 +0100 sch_red.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 16
-rw-r--r-- 1 root root 13432 2026-06-02 10:44:27.000000000 +0100 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 548
-rw-r--r-- 1 root root 18808 2026-06-02 10:44:11.000000000 +0100 appmark.ko
-rw-r--r-- 1 root root 17272 2026-06-02 10:42:01.000000000 +0100 btest.ko
-rw-r--r-- 1 root root  2592 2026-06-02 10:44:05.000000000 +0100 c2glue.ko
-rw-r--r-- 1 root root 11152 2026-06-02 10:43:31.000000000 +0100 dot1x.ko
-rw-r--r-- 1 root root 61312 2026-06-02 10:43:18.000000000 +0100 fan_i2c.ko
-rw-r--r-- 1 root root 14480 2026-06-02 10:41:47.000000000 +0100 fancon.ko
-rw-r--r-- 1 root root 87360 2026-06-02 10:42:31.000000000 +0100 flash.ko
-rw-r--r-- 1 root root  9128 2026-06-02 10:42:11.000000000 +0100 jiffies.ko
-rw-r--r-- 1 root root 26536 2026-06-02 10:41:59.000000000 +0100 lcd.ko
-rw-r--r-- 1 root root  4400 2026-06-02 10:41:53.000000000 +0100 ledgroup.ko
-rw-r--r-- 1 root root 21016 2026-06-02 10:41:54.000000000 +0100 logring.ko
-rw-r--r-- 1 root root 39696 2026-06-02 10:42:32.000000000 +0100 mesh.ko
-rw-r--r-- 1 root root  9440 2026-06-02 10:41:54.000000000 +0100 panics.ko
-rw-r--r-- 1 root root 11000 2026-06-02 10:41:58.000000000 +0100 rb.ko
-rw-r--r-- 1 root root  9440 2026-06-02 10:42:16.000000000 +0100 romon.ko
-rw-r--r-- 1 root root 17024 2026-06-02 10:41:56.000000000 +0100 simcard.ko
-rw-r--r-- 1 root root  9488 2026-06-02 10:42:29.000000000 +0100 snif.ko
-rw-r--r-- 1 root root 50728 2026-06-02 10:43:05.000000000 +0100 stm8_fan.ko
-rw-r--r-- 1 root root 47168 2026-06-02 10:42:14.000000000 +0100 traffic_gen.ko
-rw-r--r-- 1 root root 35008 2026-06-02 10:41:58.000000000 +0100 ts.ko
-rw-r--r-- 1 root root 11808 2026-06-02 10:42:30.000000000 +0100 ulog.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 sched

/lib/modules/5.6.3/net/bridge:
total 464
-rw-r--r-- 1 root root 432848 2026-06-02 10:44:34.000000000 +0100 bridge2.ko
-rw-r--r-- 1 root root  29488 2026-06-02 10:44:33.000000000 +0100 bridge2_netfilter.ko
-rw-r--r-- 1 root root   3496 2026-06-02 10:42:25.000000000 +0100 ebt_snif.ko
-rw-r--r-- 1 root root   3960 2026-06-02 10:42:27.000000000 +0100 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 40
-rw-r--r-- 1 root root  4976 2026-06-02 10:42:00.000000000 +0100 ipt_SAME.ko
-rw-r--r-- 1 root root 10088 2026-06-02 10:42:02.000000000 +0100 ipt_TARPIT.ko
-rw-r--r-- 1 root root  6880 2026-06-02 10:42:01.000000000 +0100 ipt_psd.ko
-rw-r--r-- 1 root root  3656 2026-06-02 10:42:25.000000000 +0100 ipt_snif.ko
-rw-r--r-- 1 root root  4624 2026-06-02 10:42:27.000000000 +0100 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 88
-rw-r--r-- 1 root root  2736 2026-06-02 10:43:02.000000000 +0100 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  2736 2026-06-02 10:43:02.000000000 +0100 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 19160 2026-06-02 10:43:09.000000000 +0100 xt_ein.ko
-rw-r--r-- 1 root root 20088 2026-06-02 10:42:06.000000000 +0100 xt_layer7.ko
-rw-r--r-- 1 root root 31216 2026-06-02 10:43:09.000000000 +0100 xt_misc.ko
-rw-r--r-- 1 root root  5896 2026-06-02 10:42:01.000000000 +0100 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 132
-rw-r--r-- 1 root root  8568 2026-06-02 10:42:17.000000000 +0100 cls_fw.ko
-rw-r--r-- 1 root root 20968 2026-06-02 10:42:20.000000000 +0100 cls_linear.ko
-rw-r--r-- 1 root root 23456 2026-06-02 10:42:34.000000000 +0100 proto_agr.ko
-rw-r--r-- 1 root root 34176 2026-06-02 10:42:34.000000000 +0100 sch_agr.ko
-rw-r--r-- 1 root root 16848 2026-06-02 10:42:02.000000000 +0100 sch_pcq.ko
-rw-r--r-- 1 root root 13672 2026-06-02 10:42:21.000000000 +0100 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2026-06-02 10:50:40.000000000 +0100 bin
drwxr-xr-x 12 root root 4096 2026-06-02 10:50:40.000000000 +0100 etc
drwxr-xr-x  5 root root 4096 2026-06-02 10:50:40.000000000 +0100 lib
lrwxrwxrwx  1 root root    8 2026-06-02 10:50:40.000000000 +0100 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2026-06-02 10:50:40.000000000 +0100 store -> /rw/store

/nova/bin:
total 22812
-rwxr-xr-x 1 root root   66988 2026-06-02 10:27:07.000000000 +0100 agent
-rwxr-xr-x 1 root root  132668 2026-06-02 10:27:19.000000000 +0100 apptraffic
-rwxr-xr-x 1 root root   66812 2026-06-02 10:27:08.000000000 +0100 arpd
-rwxr-xr-x 1 root root   67104 2026-06-02 10:27:40.000000000 +0100 backup
-rwxr-xr-x 1 root root  592228 2026-06-02 10:28:51.000000000 +0100 bridge2
-rwxr-xr-x 1 root root  133164 2026-06-02 10:27:50.000000000 +0100 btest
-rwxr-xr-x 1 root root  132892 2026-06-02 10:27:21.000000000 +0100 bth
-rwxr-xr-x 1 root root 1512256 2026-06-02 10:28:45.000000000 +0100 cerm
lrwxrwxrwx 1 root root       4 2026-06-02 10:28:45.000000000 +0100 cerm-worker -> cerm
-rwxr-xr-x 1 root root  329936 2026-06-02 10:28:23.000000000 +0100 cloud
-rwxr-xr-x 1 root root  198280 2026-06-02 10:27:36.000000000 +0100 crossfig
-rwxr-xr-x 1 root root  133020 2026-06-02 10:27:53.000000000 +0100 detnet
-rwxr-xr-x 1 root root  198656 2026-06-02 10:27:19.000000000 +0100 discover
-rwxr-xr-x 1 root root  592596 2026-06-02 10:28:23.000000000 +0100 diskd
-rwxr-xr-x 1 root root  264316 2026-06-02 10:28:47.000000000 +0100 dot1x
-rwxr-xr-x 1 root root   67424 2026-06-02 10:27:45.000000000 +0100 email
-rwxr-xr-x 1 root root  396244 2026-06-02 10:28:25.000000000 +0100 figman
-rwxr-xr-x 1 root root  264528 2026-06-02 10:28:18.000000000 +0100 fileman
-rwxr-xr-x 1 root root   67144 2026-06-02 10:27:07.000000000 +0100 ftpd
-rwxr-xr-x 1 root root  284156 2026-06-02 10:27:29.000000000 +0100 graphing
-rwxr-xr-x 1 root root  132836 2026-06-02 10:27:36.000000000 +0100 igmpproxy
-rwxr-xr-x 1 root root  198392 2026-06-02 10:27:57.000000000 +0100 installer
-rwxr-xr-x 1 root root   67100 2026-06-02 10:27:57.000000000 +0100 ippool
-rwxr-xr-x 1 root root  132836 2026-06-02 10:27:44.000000000 +0100 keyman
-rwxr-xr-x 1 root root  132840 2026-06-02 10:27:21.000000000 +0100 kidcontrol
-rwxr-xr-x 1 root root  395352 2026-06-02 10:27:29.000000000 +0100 lcdstat
-rwxr-xr-x 1 root root  198656 2026-06-02 10:28:01.000000000 +0100 led
-rwxr-xr-x 1 root root  264036 2026-06-02 10:28:20.000000000 +0100 letsencrypt
-rwxr-xr-x 1 root root  133024 2026-06-02 10:27:51.000000000 +0100 loader
-rwxr-xr-x 1 root root  198732 2026-06-02 10:27:10.000000000 +0100 log
-rwxr-xr-x 1 root root  330280 2026-06-02 10:29:03.000000000 +0100 login
-rwxr-xr-x 1 root root  132580 2026-06-02 10:27:09.000000000 +0100 logmaker
-rwxr-xr-x 1 root root   67080 2026-06-02 10:27:06.000000000 +0100 macping
-rwxr-xr-x 1 root root   67280 2026-06-02 10:27:42.000000000 +0100 mactel
-rwxr-xr-x 1 root root   67160 2026-06-02 10:27:08.000000000 +0100 mepty
-rwxr-xr-x 1 root root  198332 2026-06-02 10:27:22.000000000 +0100 mesh
-rwxr-xr-x 1 root root  132684 2026-06-02 10:28:57.000000000 +0100 mode
lrwxrwxrwx 1 root root       7 2026-06-02 10:28:10.000000000 +0100 modprobed -> moduler
-rwxr-xr-x 1 root root  788832 2026-06-02 10:28:06.000000000 +0100 moduler
-rwxr-xr-x 1 root root  133560 2026-06-02 10:28:25.000000000 +0100 mproxy
-rwxr-xr-x 1 root root  133012 2026-06-02 10:27:46.000000000 +0100 mtget
-rwxr-xr-x 1 root root  132852 2026-06-02 10:27:16.000000000 +0100 natpmp
-rwxr-xr-x 1 root root 3021068 2026-06-02 10:29:49.000000000 +0100 net
-rwxr-xr-x 1 root root  133004 2026-06-02 10:27:50.000000000 +0100 ntp
-rwxr-xr-x 1 root root   66624 2026-06-02 10:27:05.000000000 +0100 panicsl
-rwxr-xr-x 1 root root 1576916 2026-06-02 10:29:20.000000000 +0100 parser
-rwxr-xr-x 1 root root   67172 2026-06-02 10:27:14.000000000 +0100 partd
-rwxr-xr-x 1 root root  132848 2026-06-02 10:27:09.000000000 +0100 ping
-rwxr-xr-x 1 root root  132896 2026-06-02 10:27:13.000000000 +0100 portman
-rwxr-xr-x 1 root root   67204 2026-06-02 10:44:49.000000000 +0100 profiler
-rwxr-xr-x 1 root root  198652 2026-06-02 10:28:11.000000000 +0100 ptp
-rwxr-xr-x 1 root root  264252 2026-06-02 10:27:09.000000000 +0100 quickset
-rwxr-xr-x 1 root root  133008 2026-06-02 10:27:59.000000000 +0100 radius
-rwxr-xr-x 1 root root  330084 2026-06-02 10:28:32.000000000 +0100 resolver
-rwxr-xr-x 1 root root   66708 2026-06-02 10:28:26.000000000 +0100 resolver_ctl
-rwxr-xr-x 1 root root  198784 2026-06-02 10:27:56.000000000 +0100 romon
-rwxr-xr-x 1 root root 3477740 2026-06-02 10:30:12.000000000 +0100 route
-rwxr-xr-x 1 root root   67348 2026-06-02 10:27:20.000000000 +0100 rproxy
-rwxr-xr-x 1 root root   66940 2026-06-02 10:27:50.000000000 +0100 rtrace
-rwxr-xr-x 1 root root  133016 2026-06-02 10:28:02.000000000 +0100 sermgr
-rwxr-xr-x 1 root root  132828 2026-06-02 10:27:17.000000000 +0100 sertcp
-rwxr-xr-x 1 root root  132908 2026-06-02 10:27:16.000000000 +0100 sniffer
-rwxr-xr-x 1 root root  395584 2026-06-02 10:28:41.000000000 +0100 snmp
-rwxr-xr-x 1 root root  132840 2026-06-02 10:27:23.000000000 +0100 socks
-rwxr-xr-x 1 root root   67020 2026-06-02 10:27:20.000000000 +0100 socksify
-rwxr-xr-x 1 root root  264220 2026-06-02 10:28:16.000000000 +0100 ssld
-rwxr-xr-x 1 root root   67228 2026-06-02 10:27:46.000000000 +0100 sstore
-rwxr-xr-x 1 root root  462148 2026-06-02 10:29:03.000000000 +0100 sys2
-rwxr-xr-x 1 root root   66904 2026-06-02 10:27:08.000000000 +0100 telnet
-rwxr-xr-x 1 root root   67228 2026-06-02 10:27:09.000000000 +0100 telser
-rwxr-xr-x 1 root root   67344 2026-06-02 10:27:18.000000000 +0100 tftpd
-rwxr-xr-x 1 root root   67088 2026-06-02 10:27:08.000000000 +0100 traceroute
-rwxr-xr-x 1 root root  198472 2026-06-02 10:27:20.000000000 +0100 trafficgen
-rwxr-xr-x 1 root root   67028 2026-06-02 10:27:14.000000000 +0100 trafflow
-rwxr-xr-x 1 root root   66976 2026-06-02 10:27:06.000000000 +0100 undo
-rwxr-xr-x 1 root root  264260 2026-06-02 10:27:25.000000000 +0100 upnp
-rwxr-xr-x 1 root root  198908 2026-06-02 10:28:15.000000000 +0100 user
-rwxr-xr-x 1 root root  198600 2026-06-02 10:28:03.000000000 +0100 vrrp
-rwxr-xr-x 1 root root   67268 2026-06-02 10:27:15.000000000 +0100 watchdog
-rwxr-xr-x 1 root root  264776 2026-06-02 10:28:18.000000000 +0100 wproxy
-rwxr-xr-x 1 root root  264732 2026-06-02 10:28:30.000000000 +0100 www

/nova/etc:
total 68
-rwxr-xr-x 1 root root 9044 2026-01-08 09:06:11.000000000 +0000 app_rules.json
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:40.000000000 +0100 ca
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 leds
-rwxr-xr-x 1 root root 1341 2026-05-26 11:47:41.000000000 +0100 lognames
-rwxr-xr-x 1 root root   10 2026-01-08 09:06:11.000000000 +0000 logo
-rwxr-xr-x 1 root root    1 2026-01-08 09:06:11.000000000 +0000 manual-url
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 pciinfo
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 services
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 system_names
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 upnp
-rwxr-xr-x 1 root root   26 2026-01-08 09:06:11.000000000 +0000 url
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 user
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 www

/nova/etc/ca:
total 104
-rwxr-xr-x 1 root root  837 2026-01-08 09:06:11.000000000 +0000 AmazonRootCA1.der
-rwxr-xr-x 1 root root  955 2026-01-08 09:06:11.000000000 +0000 DigiCert_Assured_ID_Root_CA.der
-rwxr-xr-x 1 root root  922 2026-01-08 09:06:11.000000000 +0000 DigiCert_Assured_ID_Root_G2.der
-rwxr-xr-x 1 root root  586 2026-01-08 09:06:11.000000000 +0000 DigiCert_Assured_ID_Root_G3.der
-rwxr-xr-x 1 root root  947 2026-01-08 09:06:11.000000000 +0000 DigiCert_Global_Root_CA.der
-rwxr-xr-x 1 root root  914 2026-01-08 09:06:11.000000000 +0000 DigiCert_Global_Root_G2.der
-rwxr-xr-x 1 root root  579 2026-01-08 09:06:11.000000000 +0000 DigiCert_Global_Root_G3.der
-rwxr-xr-x 1 root root  969 2026-01-08 09:06:11.000000000 +0000 DigiCert_High_Assurance_EV_Root_CA.der
-rwxr-xr-x 1 root root  541 2026-01-08 09:06:11.000000000 +0000 DigiCert_TLS_ECC_P384_Root_G5.der
-rwxr-xr-x 1 root root 1386 2026-01-08 09:06:11.000000000 +0000 DigiCert_TLS_RSA4096_Root_G5.der
-rwxr-xr-x 1 root root 1428 2026-01-08 09:06:11.000000000 +0000 DigiCert_Trusted_Root_G4.der
-rwxr-xr-x 1 root root  546 2026-01-08 09:06:11.000000000 +0000 GlobalSign_ECC_Root_CA_-_R5.der
-rwxr-xr-x 1 root root  889 2026-01-08 09:06:11.000000000 +0000 GlobalSign_Root_CA.der
-rwxr-xr-x 1 root root  867 2026-01-08 09:06:11.000000000 +0000 GlobalSign_Root_CA_-_R3.der
-rwxr-xr-x 1 root root 1415 2026-01-08 09:06:11.000000000 +0000 GlobalSign_Root_CA_-_R6.der
-rwxr-xr-x 1 root root  527 2026-01-08 09:06:11.000000000 +0000 GlobalSign_Root_E46.der
-rwxr-xr-x 1 root root 1374 2026-01-08 09:06:11.000000000 +0000 GlobalSign_Root_R46.der
-rwxr-xr-x 1 root root 1028 2026-01-08 09:06:11.000000000 +0000 Go_Daddy_Class_2_CA.der
-rwxr-xr-x 1 root root  969 2026-01-08 09:06:11.000000000 +0000 Go_Daddy_Root_Certificate_Authority_-_G2.der
-rwxr-xr-x 1 root root 1391 2026-01-08 09:06:11.000000000 +0000 ISRG_Root_X1.der
-rwxr-xr-x 1 root root  543 2026-01-08 09:06:11.000000000 +0000 ISRG_Root_X2.der
-rwxr-xr-x 1 root root  574 2026-01-08 09:06:11.000000000 +0000 Sectigo_Public_Server_Authentication_Root_E46.der
-rwxr-xr-x 1 root root 1422 2026-01-08 09:06:11.000000000 +0000 Sectigo_Public_Server_Authentication_Root_R46.der
-rwxr-xr-x 1 root root  659 2026-01-08 09:06:11.000000000 +0000 USERTrustECCCertificationAuthority.der
-rwxr-xr-x 1 root root 1506 2026-01-08 09:06:11.000000000 +0000 USERTrustRSACertificationAuthority.der
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 gsma

/nova/etc/ca/gsma:
total 8
-rwxr-xr-x 1 root root 589 2026-01-08 09:06:11.000000000 +0000 gsma_digicert.der
-rwxr-xr-x 1 root root 507 2026-01-08 09:06:11.000000000 +0000 gsma_sealsq.der

/nova/etc/leds:
total 116
-rwxr-xr-x 1 root root 118780 2026-06-02 10:26:48.000000000 +0100 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2026-06-02 10:26:48.000000000 +0100 system.x3

/nova/etc/pciinfo:
total 124
-rwxr-xr-x 1 root root 123533 2026-06-02 10:26:48.000000000 +0100 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 101 2026-06-02 10:26:48.000000000 +0100 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 1148 2026-06-02 10:26:48.000000000 +0100 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2026-06-02 10:26:48.000000000 +0100 system.x3

/nova/etc/upnp:
total 64
-rwxr-xr-x 1 root root  3378 2026-01-08 09:06:12.000000000 +0000 connectionmanager.xml
-rwxr-xr-x 1 root root  5684 2026-01-08 09:06:12.000000000 +0000 contentdirectory.xml
-rwxr-xr-x 1 root root  8764 2026-01-08 09:06:12.000000000 +0000 logo120.png
-rwxr-xr-x 1 root root   930 2026-01-08 09:06:12.000000000 +0000 logo16.gif
-rwxr-xr-x 1 root root  1173 2026-01-08 09:06:12.000000000 +0000 logo32.gif
-rwxr-xr-x 1 root root  1504 2026-01-08 09:06:12.000000000 +0000 logo48.gif
-rwxr-xr-x 1 root root   735 2026-01-08 09:06:12.000000000 +0000 osinfo.xml
-rwxr-xr-x 1 root root  5928 2026-01-08 09:06:12.000000000 +0000 wancommonifcfg.xml
-rwxr-xr-x 1 root root 13444 2026-01-08 09:06:12.000000000 +0000 wanipconn.xml

/nova/etc/user:
total 4
-rwxr-xr-x 1 root root 2230 2026-06-02 10:26:48.000000000 +0100 system.x3

/nova/etc/www:
total 4
-rwxr-xr-x 1 root root 2509 2026-06-02 10:26:48.000000000 +0100 system.x3

/nova/lib:
total 20
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 defconf
-rw-r--r-- 1 root root 4521 2026-01-08 09:06:11.000000000 +0000 javasign.raw
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 profiler

/nova/lib/console:
total 2184
-rwxr-xr-x 1 root root 2227244 2026-06-02 10:29:39.000000000 +0100 1073741824.mem
-rwxr-xr-x 1 root root     510 2026-01-08 09:06:11.000000000 +0000 logo.txt
-rwxr-xr-x 1 root root      18 2026-01-08 09:06:11.000000000 +0000 sublogo.txt

/nova/lib/defconf:
total 108
-rwxr-xr-x 1 root root   567 2026-01-08 09:06:11.000000000 +0000 defconf
-rwxr-xr-x 1 root root  4995 2026-01-08 09:06:11.000000000 +0000 defconf-caps
-rwxr-xr-x 1 root root  3700 2026-01-08 09:06:11.000000000 +0000 defconf-wps-sync
-rwxr-xr-x 1 root root 91442 2026-06-02 10:25:11.000000000 +0100 get-custom-defconf

/nova/lib/profiler:
total 76
-rwxr-xr-x 1 root root 76592 2026-06-02 10:44:49.000000000 +0100 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 720
-rwxr-xr-x 1 root root 529908 2026-06-02 10:45:01.000000000 +0100 mke2fs
-rwxr-xr-x 1 root root  66184 2026-06-02 10:26:47.000000000 +0100 nandfix
-rwxr-xr-x 1 root root 132916 2026-06-02 10:27:46.000000000 +0100 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2026-06-02 10:50:40.000000000 +0100 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 deinstall
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 lock
lrwxrwxrwx 1 root root    8 2026-06-02 10:50:40.000000000 +0100 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2026-06-02 10:50:40.000000000 +0100 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:40.000000000 +0100 post
lrwxrwxrwx 1 root root    7 2026-06-02 10:50:40.000000000 +0100 run -> /rw/run
lrwxrwxrwx 1 root root    4 2026-06-02 10:50:40.000000000 +0100 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

