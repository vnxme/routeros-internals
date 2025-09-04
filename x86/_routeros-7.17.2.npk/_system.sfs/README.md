### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 15412180 bytes, 833 inodes, blocksize: 262144 bytes, created: Thu Feb  6 10:06:21 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 64
drwxr-xr-x  2 root root 4096 2025-02-06 10:06:12.000000000 +0000 bin
drwxr-xr-x 11 root root 4096 2025-02-06 10:06:12.000000000 +0000 bndl
drwxr-xr-x  3 root root 4096 2025-02-06 10:06:12.000000000 +0000 boot
drwxr-xr-x  2 root root 4096 2025-02-06 10:06:12.000000000 +0000 dev
lrwxrwxrwx  1 root root   11 2025-02-06 10:06:12.000000000 +0000 dude -> /flash/dude
drwxr-xr-x  2 root root 4096 2025-02-06 10:06:12.000000000 +0000 etc
drwxr-xr-x  2 root root 4096 2025-02-06 10:06:12.000000000 +0000 flash
drwxr-xr-x  3 root root 4096 2025-02-06 10:06:12.000000000 +0000 home
drwxr-xr-x  2 root root 4096 2025-02-06 10:06:12.000000000 +0000 initrd
drwxr-xr-x  3 root root 4096 2025-02-06 10:06:12.000000000 +0000 lib
drwxr-xr-x  5 root root 4096 2025-02-06 10:06:12.000000000 +0000 nova
drwxr-xr-x  3 root root 4096 2025-02-06 10:06:12.000000000 +0000 old
lrwxrwxrwx  1 root root    9 2025-02-06 10:06:12.000000000 +0000 pckg -> /ram/pckg
drwxr-xr-x  2 root root 4096 2025-02-06 10:06:12.000000000 +0000 proc
drwxr-xr-x  2 root root 4096 2025-02-06 10:06:12.000000000 +0000 ram
lrwxrwxrwx  1 root root    9 2025-02-06 10:06:12.000000000 +0000 rw -> /flash/rw
drwxr-xr-x  2 root root 4096 2025-02-06 10:06:12.000000000 +0000 sbin
drwxr-xr-x  2 root root 4096 2025-02-06 10:06:12.000000000 +0000 sys
lrwxrwxrwx  1 root root    7 2025-02-06 10:06:12.000000000 +0000 tmp -> /rw/tmp
drwxr-xr-x  5 root root 4096 2025-02-06 10:06:12.000000000 +0000 var

/bin:
total 252
lrwxrwxrwx 1 root root     21 2025-02-06 10:06:12.000000000 +0000 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root  17756 2025-02-06 09:16:54.000000000 +0000 catlog
lrwxrwxrwx 1 root root     15 2025-02-06 10:06:12.000000000 +0000 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root     15 2025-02-06 10:06:12.000000000 +0000 login -> /nova/bin/login
-rwxr-xr-x 1 root root  23544 2025-02-06 09:54:13.000000000 +0000 mkexfatfs
-rwxr-xr-x 1 root root  13404 2025-02-06 09:16:54.000000000 +0000 pakp
lrwxrwxrwx 1 root root     21 2025-02-06 10:06:12.000000000 +0000 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root     15 2025-02-06 10:06:12.000000000 +0000 shell -> /nova/bin/login
-rwxr-xr-x 1 root root 195808 2025-02-06 09:54:59.000000000 +0000 sshfs

/bndl:
total 36
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 advanced-tools
drwxr-xr-x 5 root root 4096 2025-02-06 10:06:12.000000000 +0000 dhcp
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 extra-nic
drwxr-xr-x 5 root root 4096 2025-02-06 10:06:12.000000000 +0000 hotspot
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 ipv6
drwxr-xr-x 5 root root 4096 2025-02-06 10:06:12.000000000 +0000 ppp
drwxr-xr-x 5 root root 4096 2025-02-06 10:06:12.000000000 +0000 security
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 ups
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 wifi

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 webfig

/bndl/advanced-tools/home/web/webfig:
total 8
-rw-r--r-- 1 root root 2360 2025-02-06 09:56:02.000000000 +0000 advtool-b6a18e54d46e.jg.gz
-rwxr-xr-x 1 root root  107 2025-02-06 09:56:02.000000000 +0000 advtool.info
lrwxrwxrwx 1 root root   26 2025-02-06 09:56:02.000000000 +0000 advtool.jg.gz -> advtool-b6a18e54d46e.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 lib

/bndl/advanced-tools/nova/bin:
total 232
-rwxr-xr-x 1 root root 30300 2025-02-06 09:55:40.000000000 +0000 ddns
-rwxr-xr-x 1 root root 21752 2025-02-06 09:55:20.000000000 +0000 fping
-rwxr-xr-x 1 root root 21920 2025-02-06 09:55:49.000000000 +0000 macscan
-rwxr-xr-x 1 root root 67416 2025-02-06 09:57:21.000000000 +0000 netwatch
-rwxr-xr-x 1 root root 21804 2025-02-06 09:55:27.000000000 +0000 pspeed
-rwxr-xr-x 1 root root 38568 2025-02-06 09:56:06.000000000 +0000 scanner
-rwxr-xr-x 1 root root 17668 2025-02-06 09:56:13.000000000 +0000 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 console

/bndl/advanced-tools/nova/lib/console:
total 24
-rwxr-xr-x 1 root root 24113 2025-02-06 09:55:42.000000000 +0000 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 home
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 webfig

/bndl/dhcp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4200 2025-02-06 09:56:29.000000000 +0000 dhcp-5540fe7f653a.jg.gz
-rwxr-xr-x 1 root root  101 2025-02-06 09:56:29.000000000 +0000 dhcp.info
lrwxrwxrwx 1 root root   23 2025-02-06 09:56:30.000000000 +0000 dhcp.jg.gz -> dhcp-5540fe7f653a.jg.gz

/bndl/dhcp/lib:
total 96
-rwxr-xr-x 1 root root 96360 2025-02-06 09:55:59.000000000 +0000 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 lib

/bndl/dhcp/nova/bin:
total 280
-rwxr-xr-x 1 root root 195144 2025-02-06 09:58:27.000000000 +0000 dhcp
-rwxr-xr-x 1 root root  88252 2025-02-06 09:57:34.000000000 +0000 dhcpclient

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 console

/bndl/dhcp/nova/lib/console:
total 104
-rwxr-xr-x 1 root root 103057 2025-02-06 09:56:14.000000000 +0000 1128267776.mem

/bndl/extra-nic:
total 4
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 lib

/bndl/extra-nic/lib:
total 8
drwxr-xr-x 6 root root 4096 2025-02-06 10:06:12.000000000 +0000 firmware
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 modules

/bndl/extra-nic/lib/firmware:
total 16
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 bnx2
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 bnx2x
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 intel
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 rtl_nic

/bndl/extra-nic/lib/firmware/bnx2:
total 120
-rw-r--r-- 1 root root 103904 2025-02-06 09:09:23.000000000 +0000 bnx2-mips-09-6.2.1b.fw
-rw-r--r-- 1 root root   6104 2025-02-06 09:09:23.000000000 +0000 bnx2-rv2p-09-6.0.17.fw
-rw-r--r-- 1 root root   6616 2025-02-06 09:09:23.000000000 +0000 bnx2-rv2p-09ax-6.0.17.fw

/bndl/extra-nic/lib/firmware/bnx2x:
total 660
-rw-r--r-- 1 root root 170168 2025-02-06 09:09:23.000000000 +0000 bnx2x-e1-7.13.15.0.fw
-rw-r--r-- 1 root root 178608 2025-02-06 09:09:23.000000000 +0000 bnx2x-e1h-7.13.15.0.fw
-rw-r--r-- 1 root root 323360 2025-02-06 09:09:23.000000000 +0000 bnx2x-e2-7.13.15.0.fw

/bndl/extra-nic/lib/firmware/intel:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 ice

/bndl/extra-nic/lib/firmware/intel/ice:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 ddp

/bndl/extra-nic/lib/firmware/intel/ice/ddp:
total 624
-rw-r--r-- 1 root root 635256 2025-02-06 09:09:23.000000000 +0000 ice.pkg

/bndl/extra-nic/lib/firmware/rtl_nic:
total 4
-rw-r--r-- 1 root root 976 2025-02-06 09:09:23.000000000 +0000 rtl8168h-2.fw

/bndl/extra-nic/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 5.6.3-64

/bndl/extra-nic/lib/modules/5.6.3-64:
total 8
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 drivers
-rw-r--r-- 1 root root  106 2025-02-06 10:01:02.000000000 +0000 modules.dep.extra-nic

/bndl/extra-nic/lib/modules/5.6.3-64/drivers:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 net

/bndl/extra-nic/lib/modules/5.6.3-64/drivers/net:
total 2176
-rw-r--r-- 1 root root 443160 2025-02-06 09:56:35.000000000 +0000 i40e.ko
-rw-r--r-- 1 root root 186216 2025-02-06 09:56:21.000000000 +0000 iavf.ko
-rw-r--r-- 1 root root 885944 2025-02-06 10:00:52.000000000 +0000 ice.ko
-rw-r--r-- 1 root root 211672 2025-02-06 09:56:41.000000000 +0000 igb.ko
-rw-r--r-- 1 root root 102656 2025-02-06 09:57:13.000000000 +0000 igc.ko
-rw-r--r-- 1 root root   8536 2025-02-06 10:00:52.000000000 +0000 intel_auxiliary.ko
-rw-r--r-- 1 root root 307800 2025-02-06 09:56:50.000000000 +0000 ixgbe.ko
-rw-r--r-- 1 root root  58888 2025-02-06 09:56:48.000000000 +0000 ixgbevf.ko

/bndl/hotspot:
total 12
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-06 10:06:12.000000000 +0000 nova

/bndl/hotspot/home:
total 4
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 web

/bndl/hotspot/home/web:
total 8
drwxr-xr-x 5 root root 4096 2025-02-06 10:06:12.000000000 +0000 hotspot
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 webfig

/bndl/hotspot/home/web/hotspot:
total 68
-rw-r--r-- 1 root root 1094 2025-02-06 09:09:24.000000000 +0000 alogin.html
-rw-r--r-- 1 root root  311 2025-02-06 09:09:24.000000000 +0000 api.json
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 css
-rw-r--r-- 1 root root  640 2025-02-06 09:09:24.000000000 +0000 error.html
-rw-r--r-- 1 root root 3719 2025-02-06 09:09:24.000000000 +0000 errors.txt
-rw-r--r-- 1 root root  903 2025-02-06 09:09:24.000000000 +0000 favicon.ico
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 img
-rw-r--r-- 1 root root 4423 2025-02-06 09:09:24.000000000 +0000 login.html
-rw-r--r-- 1 root root 1459 2025-02-06 09:09:24.000000000 +0000 logout.html
-rw-r--r-- 1 root root 7218 2025-02-06 09:09:24.000000000 +0000 md5.js
-rw-r--r-- 1 root root 1204 2025-02-06 09:09:24.000000000 +0000 radvert.html
-rw-r--r-- 1 root root  330 2025-02-06 09:09:24.000000000 +0000 redirect.html
-rw-r--r-- 1 root root  877 2025-02-06 09:09:24.000000000 +0000 rlogin.html
-rw-r--r-- 1 root root 2855 2025-02-06 09:09:24.000000000 +0000 status.html
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 xml

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
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 modules

/bndl/hotspot/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 5.6.3-64

/bndl/hotspot/lib/modules/5.6.3-64:
total 8
-rw-r--r-- 1 root root   13 2025-02-06 09:57:43.000000000 +0000 modules.dep.hotspot
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 net

/bndl/hotspot/lib/modules/5.6.3-64/net:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 ipv4

/bndl/hotspot/lib/modules/5.6.3-64/net/ipv4:
total 52
-rw-r--r-- 1 root root 49528 2025-02-06 09:57:11.000000000 +0000 unicl.ko

/bndl/hotspot/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 lib

/bndl/hotspot/nova/bin:
total 224
-rwxr-xr-x 1 root root 227812 2025-02-06 09:57:32.000000000 +0000 hotspot

/bndl/hotspot/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 radius

/bndl/hotspot/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-02-06 09:55:30.000000000 +0000 hotspot.x3

/bndl/hotspot/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 console

/bndl/hotspot/nova/lib/console:
total 80
-rwxr-xr-x 1 root root 80546 2025-02-06 09:55:39.000000000 +0000 1132462080.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 webfig

/bndl/ipv6/home/web/webfig:
total 12
-rw-r--r-- 1 root root 7441 2025-02-06 09:55:59.000000000 +0000 ipv6-b898739b568b.jg.gz
-rwxr-xr-x 1 root root  101 2025-02-06 09:55:59.000000000 +0000 ipv6.info
lrwxrwxrwx 1 root root   23 2025-02-06 09:55:59.000000000 +0000 ipv6.jg.gz -> ipv6-b898739b568b.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 lib

/bndl/ipv6/nova/bin:
total 92
-rwxr-xr-x 1 root root 34344 2025-02-06 09:56:13.000000000 +0000 ippool6
-rwxr-xr-x 1 root root 55020 2025-02-06 09:55:51.000000000 +0000 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 route

/bndl/ipv6/nova/lib/console:
total 176
-rwxr-xr-x 1 root root 178196 2025-02-06 09:55:52.000000000 +0000 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2025-02-06 09:09:24.000000000 +0000 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-06 10:06:12.000000000 +0000 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 webfig

/bndl/ppp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 6392 2025-02-06 09:57:32.000000000 +0000 ppp-0185abe62dd5.jg.gz
-rwxr-xr-x 1 root root   98 2025-02-06 09:57:32.000000000 +0000 ppp.info
lrwxrwxrwx 1 root root   22 2025-02-06 09:57:33.000000000 +0000 ppp.jg.gz -> ppp-0185abe62dd5.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2025-02-06 10:06:12.000000000 +0000 5.6.3-64

/bndl/ppp/lib/modules/5.6.3-64:
total 16
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 misc
-rw-r--r-- 1 root root  293 2025-02-06 10:03:34.000000000 +0000 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3-64/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 drivers

/bndl/ppp/lib/modules/5.6.3-64/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3-64/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 ppp

/bndl/ppp/lib/modules/5.6.3-64/kernel/drivers/net/ppp:
total 112
-rw-r--r-- 1 root root 12584 2025-02-06 09:53:13.000000000 +0000 ppp_async.ko
-rw-r--r-- 1 root root  8048 2025-02-06 09:53:13.000000000 +0000 ppp_deflate.ko
-rw-r--r-- 1 root root 40272 2025-02-06 09:53:13.000000000 +0000 ppp_generic.ko
-rw-r--r-- 1 root root  9272 2025-02-06 09:53:13.000000000 +0000 ppp_mppe.ko
-rw-r--r-- 1 root root 10952 2025-02-06 09:53:13.000000000 +0000 ppp_synctty.ko
-rw-r--r-- 1 root root 15592 2025-02-06 09:53:13.000000000 +0000 pppoe.ko
-rw-r--r-- 1 root root  6048 2025-02-06 09:53:13.000000000 +0000 pppox.ko

/bndl/ppp/lib/modules/5.6.3-64/misc:
total 104
-rw-r--r-- 1 root root 40392 2025-02-06 09:57:19.000000000 +0000 ovpn.ko
-rw-r--r-- 1 root root  7104 2025-02-06 09:58:07.000000000 +0000 pppoefp.ko
-rw-r--r-- 1 root root 55256 2025-02-06 09:57:44.000000000 +0000 sstp.ko

/bndl/ppp/lib/modules/5.6.3-64/net:
total 64
-rw-r--r-- 1 root root 52240 2025-02-06 09:56:16.000000000 +0000 l2tp.ko
-rw-r--r-- 1 root root 12240 2025-02-06 09:55:53.000000000 +0000 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 etc
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 lib

/bndl/ppp/nova/bin:
total 512
-rwxr-xr-x 1 root root 520272 2025-02-06 10:02:55.000000000 +0000 ppp
lrwxrwxrwx 1 root root      3 2025-02-06 10:03:12.000000000 +0000 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2025-02-06 09:56:00.000000000 +0000 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2025-02-06 09:56:00.000000000 +0000 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 profiler

/bndl/ppp/nova/lib/console:
total 140
-rwxr-xr-x 1 root root 142856 2025-02-06 09:57:16.000000000 +0000 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 16
-rwxr-xr-x 1 root root 13516 2025-02-06 09:59:09.000000000 +0000 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-06 10:06:12.000000000 +0000 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 webfig

/bndl/security/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4365 2025-02-06 09:59:26.000000000 +0000 secure-0a49065a769f.jg.gz
-rwxr-xr-x 1 root root  105 2025-02-06 09:59:26.000000000 +0000 secure.info
lrwxrwxrwx 1 root root   25 2025-02-06 09:59:26.000000000 +0000 secure.jg.gz -> secure-0a49065a769f.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 5.6.3-64

/bndl/security/lib/modules/5.6.3-64:
total 8
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 kernel
-rw-r--r-- 1 root root  106 2025-02-06 10:05:30.000000000 +0000 modules.dep.security

/bndl/security/lib/modules/5.6.3-64/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 crypto
drwxr-xr-x 5 root root 4096 2025-02-06 10:06:12.000000000 +0000 net

/bndl/security/lib/modules/5.6.3-64/kernel/crypto:
total 108
-rw-r--r-- 1 root root  8456 2025-02-06 09:53:13.000000000 +0000 blowfish_common.ko
-rw-r--r-- 1 root root  5848 2025-02-06 09:53:13.000000000 +0000 blowfish_generic.ko
-rw-r--r-- 1 root root 31840 2025-02-06 09:53:13.000000000 +0000 camellia_generic.ko
-rw-r--r-- 1 root root  9216 2025-02-06 09:53:13.000000000 +0000 chacha20poly1305.ko
-rw-r--r-- 1 root root  4608 2025-02-06 09:53:13.000000000 +0000 echainiv.ko
-rw-r--r-- 1 root root 24224 2025-02-06 09:53:13.000000000 +0000 twofish_common.ko
-rw-r--r-- 1 root root  8536 2025-02-06 09:53:13.000000000 +0000 twofish_generic.ko

/bndl/security/lib/modules/5.6.3-64/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 key
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 xfrm

/bndl/security/lib/modules/5.6.3-64/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root 10560 2025-02-06 09:53:13.000000000 +0000 ah4.ko
-rw-r--r-- 1 root root 14872 2025-02-06 09:53:13.000000000 +0000 esp4.ko

/bndl/security/lib/modules/5.6.3-64/kernel/net/key:
total 36
-rw-r--r-- 1 root root 33888 2025-02-06 09:53:13.000000000 +0000 af_key.ko

/bndl/security/lib/modules/5.6.3-64/kernel/net/xfrm:
total 32
-rw-r--r-- 1 root root 28800 2025-02-06 09:53:13.000000000 +0000 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 lib

/bndl/security/nova/bin:
total 608
-rwxr-xr-x 1 root root 447068 2025-02-06 10:04:59.000000000 +0000 ipsec
lrwxrwxrwx 1 root root      5 2025-02-06 10:05:04.000000000 +0000 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 171420 2025-02-06 10:01:53.000000000 +0000 ssh
lrwxrwxrwx 1 root root      3 2025-02-06 10:01:59.000000000 +0000 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-02-06 09:59:05.000000000 +0000 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2025-02-06 09:59:05.000000000 +0000 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 console

/bndl/security/nova/lib/console:
total 84
-rwxr-xr-x 1 root root 83008 2025-02-06 09:59:33.000000000 +0000 1077936128.mem

/bndl/ups:
total 8
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 nova

/bndl/ups/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 web

/bndl/ups/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 webfig

/bndl/ups/home/web/webfig:
total 8
-rw-r--r-- 1 root root 765 2025-02-06 09:56:04.000000000 +0000 ups-e29683c8d492.jg.gz
-rwxr-xr-x 1 root root  98 2025-02-06 09:56:05.000000000 +0000 ups.info
lrwxrwxrwx 1 root root  22 2025-02-06 09:56:05.000000000 +0000 ups.jg.gz -> ups-e29683c8d492.jg.gz

/bndl/ups/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 lib

/bndl/ups/nova/bin:
total 72
-rwxr-xr-x 1 root root 50888 2025-02-06 09:55:54.000000000 +0000 ups
-rwxr-xr-x 1 root root 17708 2025-02-06 09:55:47.000000000 +0000 ups-waker

/bndl/ups/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 console

/bndl/ups/nova/lib/console:
total 16
-rwxr-xr-x 1 root root 15805 2025-02-06 09:56:02.000000000 +0000 1174405120.mem

/bndl/wifi:
total 8
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 home
drwxr-xr-x 5 root root 4096 2025-02-06 10:06:12.000000000 +0000 nova

/bndl/wifi/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 web

/bndl/wifi/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 webfig

/bndl/wifi/home/web/webfig:
total 16
-rw-r--r-- 1 root root 8793 2025-02-06 09:56:23.000000000 +0000 wave2-797c789e3769.jg.gz
-rwxr-xr-x 1 root root  103 2025-02-06 09:56:23.000000000 +0000 wave2.info
lrwxrwxrwx 1 root root   24 2025-02-06 09:56:24.000000000 +0000 wave2.jg.gz -> wave2-797c789e3769.jg.gz

/bndl/wifi/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 lib

/bndl/wifi/nova/bin:
total 1152
-rwxr-xr-x 1 root root 1178356 2025-02-06 10:05:11.000000000 +0000 ww2

/bndl/wifi/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 radius

/bndl/wifi/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 183 2025-02-06 09:55:49.000000000 +0000 wifi.x3

/bndl/wifi/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-02-06 09:55:49.000000000 +0000 wifi.x3

/bndl/wifi/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 console

/bndl/wifi/nova/lib/console:
total 180
-rwxr-xr-x 1 root root 182005 2025-02-06 09:56:17.000000000 +0000 1275068416.mem

/boot:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 EFI

/boot/EFI:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 BOOT

/boot/EFI/BOOT:
total 3436
-rwxr-xr-x 1 root root 3516640 2025-02-06 09:41:50.000000000 +0000 BOOTX64.EFI

/dev:
total 0

/etc:
total 128
-rw-r--r-- 1 root root 130747 2025-02-06 09:09:53.000000000 +0000 license
lrwxrwxrwx 1 root root     24 2025-02-06 10:06:12.000000000 +0000 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2025-02-06 10:06:12.000000000 +0000 web

/home/web:
total 56
drwxr-xr-x 2 root root  4096 2025-02-06 10:06:12.000000000 +0000 assets
-rwxr-xr-x 1 root root 10295 2025-02-06 09:15:02.000000000 +0000 bth-files.html
-rwxr-xr-x 1 root root   600 2025-02-06 09:09:54.000000000 +0000 favicon.png
-rwxr-xr-x 1 root root   689 2025-02-06 09:09:54.000000000 +0000 favicon.svg
-rwxr-xr-x 1 root root   708 2025-02-06 09:09:52.000000000 +0000 graph.css
drwxr-xr-x 2 root root  4096 2025-02-06 10:06:12.000000000 +0000 help
-rwxr-xr-x 1 root root  1254 2025-02-06 09:09:54.000000000 +0000 index2.html
lrwxrwxrwx 1 root root    12 2025-02-06 09:55:10.000000000 +0000 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2025-02-06 09:09:54.000000000 +0000 logo.png
-rw-r--r-- 1 root root  2507 2025-02-06 09:09:53.000000000 +0000 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2025-02-06 09:09:54.000000000 +0000 robots.txt
drwxr-xr-x 2 root root  4096 2025-02-06 10:06:12.000000000 +0000 webfig
drwxr-xr-x 2 root root  4096 2025-02-06 10:06:12.000000000 +0000 winbox

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

/initrd:
total 0

/lib:
total 1616
-rwxr-xr-x 1 root root 235032 2025-02-06 09:11:57.000000000 +0000 libc.so
-rwxr-xr-x 1 root root  79908 2025-02-06 09:17:32.000000000 +0000 libeap.so
-rwxr-xr-x 1 root root  25872 2025-02-06 09:13:58.000000000 +0000 libjson.so
-rwxr-xr-x 1 root root 137620 2025-02-06 09:15:44.000000000 +0000 librappsup.so
-rwxr-xr-x 1 root root 100412 2025-02-06 09:14:49.000000000 +0000 libubox.so
-rwxr-xr-x 1 root root  67360 2025-02-06 09:13:50.000000000 +0000 libuc++.so
-rwxr-xr-x 1 root root 232552 2025-02-06 09:16:24.000000000 +0000 libucrypto.so
-rwxr-xr-x 1 root root  30184 2025-02-06 09:14:42.000000000 +0000 libufiber.so
-rwxr-xr-x 1 root root  63248 2025-02-06 09:14:48.000000000 +0000 libuhttp.so
-rwxr-xr-x 1 root root 471568 2025-02-06 09:14:24.000000000 +0000 libumsg.so
-rwxr-xr-x 1 root root  36904 2025-02-06 09:16:41.000000000 +0000 liburadius.so
-rwxr-xr-x 1 root root  13528 2025-02-06 09:16:34.000000000 +0000 libuxml++.so
-rwxr-xr-x 1 root root  34596 2025-02-06 09:13:54.000000000 +0000 libwww.so
-rwxr-xr-x 1 root root  17628 2025-02-06 09:13:57.000000000 +0000 libxml.so
-rwxr-xr-x 1 root root  66932 2025-02-06 09:13:57.000000000 +0000 libz.so
drwxr-xr-x 3 root root   4096 2025-02-06 10:06:12.000000000 +0000 modules
lrwxrwxrwx 1 root root     27 2025-02-06 10:06:12.000000000 +0000 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2025-02-06 10:06:12.000000000 +0000 5.6.3-64

/lib/modules/5.6.3-64:
total 20
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 drivers
drwxr-xr-x 8 root root 4096 2025-02-06 10:06:12.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 misc
-rw-r--r-- 1 root root 2689 2025-02-06 09:55:02.000000000 +0000 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-02-06 10:06:12.000000000 +0000 net

/lib/modules/5.6.3-64/drivers:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 char
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 net

/lib/modules/5.6.3-64/drivers/char:
total 24
-rw-r--r-- 1 root root 6488 2025-02-06 09:48:57.000000000 +0000 csel0.ko
-rw-r--r-- 1 root root 7232 2025-02-06 09:48:01.000000000 +0000 ticker.ko
-rw-r--r-- 1 root root 4976 2025-02-06 09:49:09.000000000 +0000 vt1211wdt.ko

/lib/modules/5.6.3-64/drivers/net:
total 652
-rw-r--r-- 1 root root  43120 2025-02-06 09:48:30.000000000 +0000 atl1c.ko
-rw-r--r-- 1 root root  10056 2025-02-06 09:49:03.000000000 +0000 imq.ko
-rw-r--r-- 1 root root  10624 2025-02-06 09:52:13.000000000 +0000 mpls_fp.ko
-rw-r--r-- 1 root root 223040 2025-02-06 09:52:17.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root  95664 2025-02-06 09:49:08.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root  83344 2025-02-06 09:49:52.000000000 +0000 switch.ko
drwxr-xr-x 2 root root   4096 2025-02-06 10:06:12.000000000 +0000 usb
-rw-r--r-- 1 root root  22904 2025-02-06 09:48:00.000000000 +0000 via-velocity.ko
-rw-r--r-- 1 root root  41944 2025-02-06 09:52:23.000000000 +0000 virtio_net.ko
-rw-r--r-- 1 root root  52040 2025-02-06 09:52:26.000000000 +0000 vmxnet3.ko
-rw-r--r-- 1 root root  58016 2025-02-06 09:52:59.000000000 +0000 vxlan2.ko

/lib/modules/5.6.3-64/drivers/net/usb:
total 212
-rw-r--r-- 1 root root  82680 2025-02-06 09:52:17.000000000 +0000 fp_usbnet.ko
-rw-r--r-- 1 root root 131056 2025-02-06 09:51:55.000000000 +0000 mbim.ko

/lib/modules/5.6.3-64/kernel:
total 24
drwxr-xr-x  3 root root 4096 2025-02-06 10:06:12.000000000 +0000 arch
drwxr-xr-x  2 root root 4096 2025-02-06 10:06:12.000000000 +0000 crypto
drwxr-xr-x 10 root root 4096 2025-02-06 10:06:12.000000000 +0000 drivers
drwxr-xr-x  5 root root 4096 2025-02-06 10:06:12.000000000 +0000 fs
drwxr-xr-x  5 root root 4096 2025-02-06 10:06:12.000000000 +0000 lib
drwxr-xr-x 14 root root 4096 2025-02-06 10:06:12.000000000 +0000 net

/lib/modules/5.6.3-64/kernel/arch:
total 4
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 x86

/lib/modules/5.6.3-64/kernel/arch/x86:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 crypto
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 oprofile

/lib/modules/5.6.3-64/kernel/arch/x86/crypto:
total 160
-rw-r--r-- 1 root root 11800 2025-02-06 09:53:13.000000000 +0000 blake2s-x86_64.ko
-rw-r--r-- 1 root root 22160 2025-02-06 09:53:13.000000000 +0000 chacha-x86_64.ko
-rw-r--r-- 1 root root 29552 2025-02-06 09:53:13.000000000 +0000 curve25519-x86_64.ko
-rw-r--r-- 1 root root 72064 2025-02-06 09:53:13.000000000 +0000 des3_ede-x86_64.ko
-rw-r--r-- 1 root root 19104 2025-02-06 09:53:13.000000000 +0000 poly1305-x86_64.ko

/lib/modules/5.6.3-64/kernel/arch/x86/oprofile:
total 68
-rw-r--r-- 1 root root 65944 2025-02-06 09:53:13.000000000 +0000 oprofile.ko

/lib/modules/5.6.3-64/kernel/crypto:
total 48
-rw-r--r-- 1 root root  4104 2025-02-06 09:53:13.000000000 +0000 arc4.ko
-rw-r--r-- 1 root root 13856 2025-02-06 09:53:13.000000000 +0000 ccm.ko
-rw-r--r-- 1 root root  5632 2025-02-06 09:53:13.000000000 +0000 cmac.ko
-rw-r--r-- 1 root root  4896 2025-02-06 09:53:13.000000000 +0000 des_generic.ko
-rw-r--r-- 1 root root  5360 2025-02-06 09:53:13.000000000 +0000 md4.ko

/lib/modules/5.6.3-64/kernel/drivers:
total 32
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 hwmon
drwxr-xr-x 9 root root 4096 2025-02-06 10:06:12.000000000 +0000 net
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 pps
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 ptp
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 ssb
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 tty
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 usb
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 watchdog

/lib/modules/5.6.3-64/kernel/drivers/hwmon:
total 92
-rw-r--r-- 1 root root  5768 2025-02-06 09:53:13.000000000 +0000 hwmon-vid.ko
-rw-r--r-- 1 root root 58760 2025-02-06 09:53:13.000000000 +0000 it87.ko
-rw-r--r-- 1 root root 22672 2025-02-06 09:53:13.000000000 +0000 lm87.ko

/lib/modules/5.6.3-64/kernel/drivers/net:
total 236
drwxr-xr-x  2 root root  4096 2025-02-06 10:06:12.000000000 +0000 bonding
drwxr-xr-x 23 root root  4096 2025-02-06 10:06:12.000000000 +0000 ethernet
drwxr-xr-x  2 root root  4096 2025-02-06 10:06:12.000000000 +0000 hyperv
-rw-r--r--  1 root root 36976 2025-02-06 09:53:13.000000000 +0000 macsec.ko
-rw-r--r--  1 root root 22688 2025-02-06 09:53:13.000000000 +0000 macvlan.ko
-rw-r--r--  1 root root  6632 2025-02-06 09:53:13.000000000 +0000 mdio.ko
-rw-r--r--  1 root root 14152 2025-02-06 09:53:13.000000000 +0000 net_failover.ko
drwxr-xr-x  2 root root  4096 2025-02-06 10:06:12.000000000 +0000 phy
drwxr-xr-x  2 root root  4096 2025-02-06 10:06:12.000000000 +0000 slip
-rw-r--r--  1 root root 48048 2025-02-06 09:53:13.000000000 +0000 tun.ko
drwxr-xr-x  2 root root  4096 2025-02-06 10:06:12.000000000 +0000 usb
-rw-r--r--  1 root root 18776 2025-02-06 09:53:13.000000000 +0000 veth.ko
-rw-r--r--  1 root root 19240 2025-02-06 09:53:13.000000000 +0000 vrf.ko
drwxr-xr-x  2 root root  4096 2025-02-06 10:06:12.000000000 +0000 wireguard
-rw-r--r--  1 root root 32216 2025-02-06 09:53:13.000000000 +0000 xen-netfront.ko

/lib/modules/5.6.3-64/kernel/drivers/net/bonding:
total 144
-rw-r--r-- 1 root root 145544 2025-02-06 09:53:13.000000000 +0000 bonding.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet:
total 84
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 3com
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 8390
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 amazon
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 amd
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 atheros
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 broadcom
drwxr-xr-x 5 root root 4096 2025-02-06 10:06:12.000000000 +0000 chelsio
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 dec
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 dlink
drwxr-xr-x 5 root root 4096 2025-02-06 10:06:12.000000000 +0000 intel
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 marvell
drwxr-xr-x 4 root root 4096 2025-02-06 10:06:12.000000000 +0000 mellanox
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 natsemi
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 nvidia
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 rdc
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 realtek
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 sfc
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 sis
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 sun
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 ti
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 via

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/3com:
total 52
-rw-r--r-- 1 root root 53112 2025-02-06 09:53:13.000000000 +0000 3c59x.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/8390:
total 32
-rw-r--r-- 1 root root 13568 2025-02-06 09:53:13.000000000 +0000 8390.ko
-rw-r--r-- 1 root root 13936 2025-02-06 09:53:13.000000000 +0000 ne2k-pci.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/amazon:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 ena

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/amazon/ena:
total 88
-rw-r--r-- 1 root root 86568 2025-02-06 09:53:13.000000000 +0000 ena.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/amd:
total 44
-rw-r--r-- 1 root root 43616 2025-02-06 09:53:13.000000000 +0000 pcnet32.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/atheros:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 alx

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/atheros/alx:
total 44
-rw-r--r-- 1 root root 42032 2025-02-06 09:53:13.000000000 +0000 alx.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/broadcom:
total 276
-rw-r--r-- 1 root root  34912 2025-02-06 09:53:13.000000000 +0000 b44.ko
-rw-r--r-- 1 root root  80144 2025-02-06 09:53:13.000000000 +0000 bnx2.ko
drwxr-xr-x 2 root root   4096 2025-02-06 10:06:12.000000000 +0000 bnx2x
drwxr-xr-x 2 root root   4096 2025-02-06 10:06:12.000000000 +0000 bnxt
-rw-r--r-- 1 root root 152752 2025-02-06 09:53:13.000000000 +0000 tg3.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/broadcom/bnx2x:
total 652
-rw-r--r-- 1 root root 664888 2025-02-06 09:53:13.000000000 +0000 bnx2x.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/broadcom/bnxt:
total 196
-rw-r--r-- 1 root root 199592 2025-02-06 09:53:13.000000000 +0000 bnxt_en.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/chelsio:
total 12
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 cxgb3
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 cxgb4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 cxgb4vf

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/chelsio/cxgb3:
total 152
-rw-r--r-- 1 root root 153704 2025-02-06 09:53:13.000000000 +0000 cxgb3.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/chelsio/cxgb4:
total 332
-rw-r--r-- 1 root root 339368 2025-02-06 09:53:13.000000000 +0000 cxgb4.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/chelsio/cxgb4vf:
total 64
-rw-r--r-- 1 root root 64328 2025-02-06 09:53:13.000000000 +0000 cxgb4vf.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/dec:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 tulip

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/dec/tulip:
total 140
-rw-r--r-- 1 root root 30544 2025-02-06 09:53:13.000000000 +0000 dmfe.ko
-rw-r--r-- 1 root root 76784 2025-02-06 09:53:13.000000000 +0000 tulip.ko
-rw-r--r-- 1 root root 29096 2025-02-06 09:53:13.000000000 +0000 winbond-840.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/dlink:
total 32
-rw-r--r-- 1 root root 31944 2025-02-06 09:53:13.000000000 +0000 sundance.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/intel:
total 52
-rw-r--r-- 1 root root 40472 2025-02-06 09:53:13.000000000 +0000 e100.ko
drwxr-xr-x 2 root root  4096 2025-02-06 10:06:12.000000000 +0000 e1000
drwxr-xr-x 2 root root  4096 2025-02-06 10:06:12.000000000 +0000 e1000e
drwxr-xr-x 2 root root  4096 2025-02-06 10:06:12.000000000 +0000 igbvf

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/intel/e1000:
total 124
-rw-r--r-- 1 root root 123528 2025-02-06 09:53:13.000000000 +0000 e1000.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/intel/e1000e:
total 200
-rw-r--r-- 1 root root 201240 2025-02-06 09:53:13.000000000 +0000 e1000e.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/intel/igbvf:
total 40
-rw-r--r-- 1 root root 37912 2025-02-06 09:53:13.000000000 +0000 igbvf.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/marvell:
total 100
-rw-r--r-- 1 root root 40120 2025-02-06 09:53:13.000000000 +0000 skge.ko
-rw-r--r-- 1 root root 60736 2025-02-06 09:53:13.000000000 +0000 sky2.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/mellanox:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 mlx4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 mlx5

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/mellanox/mlx4:
total 432
-rw-r--r-- 1 root root 310464 2025-02-06 09:53:13.000000000 +0000 mlx4_core.ko
-rw-r--r-- 1 root root 129320 2025-02-06 09:53:13.000000000 +0000 mlx4_en.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/mellanox/mlx5:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 core

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/mellanox/mlx5/core:
total 484
-rw-r--r-- 1 root root 492032 2025-02-06 09:53:13.000000000 +0000 mlx5_core.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/natsemi:
total 60
-rw-r--r-- 1 root root 35168 2025-02-06 09:53:13.000000000 +0000 natsemi.ko
-rw-r--r-- 1 root root 23088 2025-02-06 09:53:13.000000000 +0000 ns83820.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/nvidia:
total 64
-rw-r--r-- 1 root root 64248 2025-02-06 09:53:13.000000000 +0000 forcedeth.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/rdc:
total 20
-rw-r--r-- 1 root root 20480 2025-02-06 09:53:13.000000000 +0000 r6040.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/realtek:
total 136
-rw-r--r-- 1 root root 26952 2025-02-06 09:53:13.000000000 +0000 8139cp.ko
-rw-r--r-- 1 root root 32640 2025-02-06 09:53:13.000000000 +0000 8139too.ko
-rw-r--r-- 1 root root 77096 2025-02-06 09:53:13.000000000 +0000 r8169.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/sfc:
total 248
-rw-r--r-- 1 root root 253352 2025-02-06 09:53:13.000000000 +0000 sfc.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/sis:
total 32
-rw-r--r-- 1 root root 31528 2025-02-06 09:53:13.000000000 +0000 sis900.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/sun:
total 88
-rw-r--r-- 1 root root 87544 2025-02-06 09:53:13.000000000 +0000 niu.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/ti:
total 36
-rw-r--r-- 1 root root 36592 2025-02-06 09:53:13.000000000 +0000 tlan.ko

/lib/modules/5.6.3-64/kernel/drivers/net/ethernet/via:
total 36
-rw-r--r-- 1 root root 35000 2025-02-06 09:53:13.000000000 +0000 via-rhine.ko

/lib/modules/5.6.3-64/kernel/drivers/net/hyperv:
total 60
-rw-r--r-- 1 root root 57640 2025-02-06 09:53:13.000000000 +0000 hv_netvsc.ko

/lib/modules/5.6.3-64/kernel/drivers/net/phy:
total 136
-rw-r--r-- 1 root root 112816 2025-02-06 09:53:13.000000000 +0000 libphy.ko
-rw-r--r-- 1 root root  23248 2025-02-06 09:53:13.000000000 +0000 realtek.ko

/lib/modules/5.6.3-64/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6776 2025-02-06 09:53:13.000000000 +0000 slhc.ko

/lib/modules/5.6.3-64/kernel/drivers/net/usb:
total 300
-rw-r--r-- 1 root root 22352 2025-02-06 09:53:13.000000000 +0000 ax88179_178a.ko
-rw-r--r-- 1 root root 45888 2025-02-06 09:53:13.000000000 +0000 hso.ko
-rw-r--r-- 1 root root 31128 2025-02-06 09:53:13.000000000 +0000 pegasus.ko
-rw-r--r-- 1 root root 62152 2025-02-06 09:53:13.000000000 +0000 r8152.ko
-rw-r--r-- 1 root root 16384 2025-02-06 09:53:13.000000000 +0000 rtl8150.ko
-rw-r--r-- 1 root root 15792 2025-02-06 09:53:13.000000000 +0000 sierra_net.ko
-rw-r--r-- 1 root root 30952 2025-02-06 09:53:13.000000000 +0000 smsc75xx.ko
-rw-r--r-- 1 root root 28616 2025-02-06 09:53:13.000000000 +0000 smsc95xx.ko
-rw-r--r-- 1 root root 37168 2025-02-06 09:53:13.000000000 +0000 usbnet.ko

/lib/modules/5.6.3-64/kernel/drivers/net/wireguard:
total 96
-rw-r--r-- 1 root root 97840 2025-02-06 09:53:13.000000000 +0000 wireguard.ko

/lib/modules/5.6.3-64/kernel/drivers/pps:
total 16
-rw-r--r-- 1 root root 14624 2025-02-06 09:53:13.000000000 +0000 pps_core.ko

/lib/modules/5.6.3-64/kernel/drivers/ptp:
total 24
-rw-r--r-- 1 root root 20560 2025-02-06 09:53:13.000000000 +0000 ptp.ko

/lib/modules/5.6.3-64/kernel/drivers/ssb:
total 48
-rw-r--r-- 1 root root 48472 2025-02-06 09:53:13.000000000 +0000 ssb.ko

/lib/modules/5.6.3-64/kernel/drivers/tty:
total 76
-rw-r--r-- 1 root root 40120 2025-02-06 09:53:13.000000000 +0000 cyclades.ko
-rw-r--r-- 1 root root 35136 2025-02-06 09:53:13.000000000 +0000 mxser.ko

/lib/modules/5.6.3-64/kernel/drivers/usb:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 class
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 serial

/lib/modules/5.6.3-64/kernel/drivers/usb/class:
total 36
-rw-r--r-- 1 root root 33328 2025-02-06 09:53:13.000000000 +0000 cdc-acm.ko

/lib/modules/5.6.3-64/kernel/drivers/usb/serial:
total 232
-rw-r--r-- 1 root root  10056 2025-02-06 09:53:13.000000000 +0000 ch341.ko
-rw-r--r-- 1 root root  23640 2025-02-06 09:53:13.000000000 +0000 cp210x.ko
-rw-r--r-- 1 root root   6896 2025-02-06 09:53:13.000000000 +0000 ipw.ko
-rw-r--r-- 1 root root 113896 2025-02-06 09:53:13.000000000 +0000 option.ko
-rw-r--r-- 1 root root  17832 2025-02-06 09:53:13.000000000 +0000 pl2303.ko
-rw-r--r-- 1 root root  16824 2025-02-06 09:53:13.000000000 +0000 qcserial.ko
-rw-r--r-- 1 root root  18136 2025-02-06 09:53:13.000000000 +0000 sierra.ko
-rw-r--r-- 1 root root  13496 2025-02-06 09:53:13.000000000 +0000 usb_wwan.ko

/lib/modules/5.6.3-64/kernel/drivers/watchdog:
total 20
-rw-r--r-- 1 root root 7328 2025-02-06 09:53:13.000000000 +0000 softdog.ko
-rw-r--r-- 1 root root 8912 2025-02-06 09:53:13.000000000 +0000 wdat_wdt.ko

/lib/modules/5.6.3-64/kernel/fs:
total 12
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 cifs
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 ksmbd
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 udf

/lib/modules/5.6.3-64/kernel/fs/cifs:
total 552
-rw-r--r-- 1 root root 561800 2025-02-06 09:53:13.000000000 +0000 cifs.ko

/lib/modules/5.6.3-64/kernel/fs/ksmbd:
total 256
-rw-r--r-- 1 root root 260976 2025-02-06 09:53:13.000000000 +0000 ksmbd.ko

/lib/modules/5.6.3-64/kernel/fs/udf:
total 92
-rw-r--r-- 1 root root 94032 2025-02-06 09:53:13.000000000 +0000 udf.ko

/lib/modules/5.6.3-64/kernel/lib:
total 52
-rw-r--r-- 1 root root 4760 2025-02-06 09:53:13.000000000 +0000 asn1_decoder.ko
-rw-r--r-- 1 root root 4664 2025-02-06 09:53:13.000000000 +0000 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 crypto
-rw-r--r-- 1 root root 5584 2025-02-06 09:53:13.000000000 +0000 oid_registry.ko
-rw-r--r-- 1 root root 4256 2025-02-06 09:53:13.000000000 +0000 ts_bm.ko
-rw-r--r-- 1 root root 4144 2025-02-06 09:53:13.000000000 +0000 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 zlib_inflate

/lib/modules/5.6.3-64/kernel/lib/crypto:
total 112
-rw-r--r-- 1 root root  3112 2025-02-06 09:53:13.000000000 +0000 libarc4.ko
-rw-r--r-- 1 root root  7040 2025-02-06 09:53:13.000000000 +0000 libblake2s-generic.ko
-rw-r--r-- 1 root root  4552 2025-02-06 09:53:13.000000000 +0000 libblake2s.ko
-rw-r--r-- 1 root root  3096 2025-02-06 09:53:13.000000000 +0000 libchacha.ko
-rw-r--r-- 1 root root  8960 2025-02-06 09:53:13.000000000 +0000 libchacha20poly1305.ko
-rw-r--r-- 1 root root 37240 2025-02-06 09:53:13.000000000 +0000 libcurve25519-generic.ko
-rw-r--r-- 1 root root  2648 2025-02-06 09:53:13.000000000 +0000 libcurve25519.ko
-rw-r--r-- 1 root root 30064 2025-02-06 09:53:13.000000000 +0000 libdes.ko

/lib/modules/5.6.3-64/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 19408 2025-02-06 09:53:13.000000000 +0000 zlib_deflate.ko

/lib/modules/5.6.3-64/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 16368 2025-02-06 09:53:13.000000000 +0000 zlib_inflate.ko

/lib/modules/5.6.3-64/kernel/net:
total 48
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 802
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 8021q
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 bridge
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 core
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 ipv4
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 ipv6
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 mpls
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 rfkill
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 sched
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 unix
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 xfrm

/lib/modules/5.6.3-64/kernel/net/802:
total 16
-rw-r--r-- 1 root root 12456 2025-02-06 09:53:13.000000000 +0000 mrp.ko

/lib/modules/5.6.3-64/kernel/net/8021q:
total 32
-rw-r--r-- 1 root root 30208 2025-02-06 09:53:13.000000000 +0000 8021q.ko

/lib/modules/5.6.3-64/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 netfilter

/lib/modules/5.6.3-64/kernel/net/bridge/netfilter:
total 120
-rw-r--r-- 1 root root  3496 2025-02-06 09:53:13.000000000 +0000 ebt_802_3.ko
-rw-r--r-- 1 root root  4208 2025-02-06 09:53:13.000000000 +0000 ebt_arp.ko
-rw-r--r-- 1 root root  4080 2025-02-06 09:53:13.000000000 +0000 ebt_arpreply.ko
-rw-r--r-- 1 root root  4064 2025-02-06 09:53:13.000000000 +0000 ebt_dnat.ko
-rw-r--r-- 1 root root  4208 2025-02-06 09:53:13.000000000 +0000 ebt_ip.ko
-rw-r--r-- 1 root root  4336 2025-02-06 09:53:13.000000000 +0000 ebt_ip6.ko
-rw-r--r-- 1 root root  4576 2025-02-06 09:53:13.000000000 +0000 ebt_limit.ko
-rw-r--r-- 1 root root  3768 2025-02-06 09:53:13.000000000 +0000 ebt_mark.ko
-rw-r--r-- 1 root root  3856 2025-02-06 09:53:13.000000000 +0000 ebt_mark_m.ko
-rw-r--r-- 1 root root  3432 2025-02-06 09:53:13.000000000 +0000 ebt_pkttype.ko
-rw-r--r-- 1 root root  3936 2025-02-06 09:53:13.000000000 +0000 ebt_redirect.ko
-rw-r--r-- 1 root root  4024 2025-02-06 09:53:13.000000000 +0000 ebt_snat.ko
-rw-r--r-- 1 root root  4456 2025-02-06 09:53:13.000000000 +0000 ebt_stp.ko
-rw-r--r-- 1 root root  3824 2025-02-06 09:53:13.000000000 +0000 ebt_vlan.ko
-rw-r--r-- 1 root root  4504 2025-02-06 09:53:13.000000000 +0000 ebtable_filter.ko
-rw-r--r-- 1 root root  4504 2025-02-06 09:53:13.000000000 +0000 ebtable_nat.ko
-rw-r--r-- 1 root root 25840 2025-02-06 09:53:13.000000000 +0000 ebtables.ko

/lib/modules/5.6.3-64/kernel/net/core:
total 12
-rw-r--r-- 1 root root 8904 2025-02-06 09:53:13.000000000 +0000 failover.ko

/lib/modules/5.6.3-64/kernel/net/ipv4:
total 44
-rw-r--r-- 1 root root 20496 2025-02-06 09:53:13.000000000 +0000 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2025-02-06 10:06:12.000000000 +0000 netfilter
-rw-r--r-- 1 root root 15912 2025-02-06 09:53:13.000000000 +0000 udp_tunnel.ko

/lib/modules/5.6.3-64/kernel/net/ipv4/netfilter:
total 100
-rw-r--r-- 1 root root 23248 2025-02-06 09:53:13.000000000 +0000 ip_tables.ko
-rw-r--r-- 1 root root  4984 2025-02-06 09:53:13.000000000 +0000 ipt_REJECT.ko
-rw-r--r-- 1 root root  5184 2025-02-06 09:53:13.000000000 +0000 iptable_filter.ko
-rw-r--r-- 1 root root  5072 2025-02-06 09:53:13.000000000 +0000 iptable_mangle.ko
-rw-r--r-- 1 root root  4912 2025-02-06 09:53:13.000000000 +0000 iptable_nat.ko
-rw-r--r-- 1 root root  5616 2025-02-06 09:53:13.000000000 +0000 iptable_raw.ko
-rw-r--r-- 1 root root  5040 2025-02-06 09:53:13.000000000 +0000 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root 10920 2025-02-06 09:53:13.000000000 +0000 nf_nat_h323.ko
-rw-r--r-- 1 root root  5592 2025-02-06 09:53:13.000000000 +0000 nf_nat_pptp.ko
-rw-r--r-- 1 root root  5776 2025-02-06 09:53:13.000000000 +0000 nf_reject_ipv4.ko

/lib/modules/5.6.3-64/kernel/net/ipv6:
total 508
-rw-r--r-- 1 root root  10680 2025-02-06 09:53:13.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root  14424 2025-02-06 09:53:13.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root   4504 2025-02-06 09:53:13.000000000 +0000 ip6_udp_tunnel.ko
-rw-r--r-- 1 root root 467424 2025-02-06 09:53:13.000000000 +0000 ipv6.ko
drwxr-xr-x 2 root root   4096 2025-02-06 10:06:12.000000000 +0000 netfilter
-rw-r--r-- 1 root root   6568 2025-02-06 09:53:13.000000000 +0000 tunnel6.ko

/lib/modules/5.6.3-64/kernel/net/ipv6/netfilter:
total 104
-rw-r--r-- 1 root root 23944 2025-02-06 09:53:13.000000000 +0000 ip6_tables.ko
-rw-r--r-- 1 root root  4672 2025-02-06 09:53:13.000000000 +0000 ip6t_NPT.ko
-rw-r--r-- 1 root root  5048 2025-02-06 09:53:13.000000000 +0000 ip6t_REJECT.ko
-rw-r--r-- 1 root root  3664 2025-02-06 09:53:13.000000000 +0000 ip6t_eui64.ko
-rw-r--r-- 1 root root  3952 2025-02-06 09:53:13.000000000 +0000 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  5192 2025-02-06 09:53:13.000000000 +0000 ip6table_filter.ko
-rw-r--r-- 1 root root  5144 2025-02-06 09:53:13.000000000 +0000 ip6table_mangle.ko
-rw-r--r-- 1 root root  4912 2025-02-06 09:53:13.000000000 +0000 ip6table_nat.ko
-rw-r--r-- 1 root root  5624 2025-02-06 09:53:13.000000000 +0000 ip6table_raw.ko
-rw-r--r-- 1 root root 12456 2025-02-06 09:53:13.000000000 +0000 nf_defrag_ipv6.ko
-rw-r--r-- 1 root root  6544 2025-02-06 09:53:13.000000000 +0000 nf_reject_ipv6.ko

/lib/modules/5.6.3-64/kernel/net/mpls:
total 56
-rw-r--r-- 1 root root  6496 2025-02-06 09:53:13.000000000 +0000 mpls_iptunnel.ko
-rw-r--r-- 1 root root 47216 2025-02-06 09:53:13.000000000 +0000 mpls_router.ko

/lib/modules/5.6.3-64/kernel/net/netfilter:
total 640
-rw-r--r-- 1 root root 126152 2025-02-06 09:53:13.000000000 +0000 nf_conntrack.ko
-rw-r--r-- 1 root root  12200 2025-02-06 09:53:13.000000000 +0000 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root  53208 2025-02-06 09:53:13.000000000 +0000 nf_conntrack_h323.ko
-rw-r--r-- 1 root root  10344 2025-02-06 09:53:13.000000000 +0000 nf_conntrack_irc.ko
-rw-r--r-- 1 root root  30416 2025-02-06 09:53:13.000000000 +0000 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root  10008 2025-02-06 09:53:13.000000000 +0000 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root   9984 2025-02-06 09:53:13.000000000 +0000 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root  30912 2025-02-06 09:53:13.000000000 +0000 nf_conntrack_sip.ko
-rw-r--r-- 1 root root   8880 2025-02-06 09:53:13.000000000 +0000 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root  32736 2025-02-06 09:53:13.000000000 +0000 nf_nat.ko
-rw-r--r-- 1 root root   5928 2025-02-06 09:53:13.000000000 +0000 nf_nat_ftp.ko
-rw-r--r-- 1 root root   5608 2025-02-06 09:53:13.000000000 +0000 nf_nat_irc.ko
-rw-r--r-- 1 root root   9112 2025-02-06 09:53:13.000000000 +0000 nf_nat_rtsp.ko
-rw-r--r-- 1 root root  12408 2025-02-06 09:53:13.000000000 +0000 nf_nat_sip.ko
-rw-r--r-- 1 root root   4184 2025-02-06 09:53:13.000000000 +0000 nf_nat_tftp.ko
-rw-r--r-- 1 root root  11688 2025-02-06 09:53:13.000000000 +0000 nfnetlink.ko
-rw-r--r-- 1 root root  38960 2025-02-06 09:53:13.000000000 +0000 x_tables.ko
-rw-r--r-- 1 root root   8392 2025-02-06 09:53:13.000000000 +0000 xt_CT.ko
-rw-r--r-- 1 root root   5144 2025-02-06 09:53:13.000000000 +0000 xt_DSCP.ko
-rw-r--r-- 1 root root   4400 2025-02-06 09:53:13.000000000 +0000 xt_HL.ko
-rw-r--r-- 1 root root   4688 2025-02-06 09:53:13.000000000 +0000 xt_MASQUERADE.ko
-rw-r--r-- 1 root root   4688 2025-02-06 09:53:13.000000000 +0000 xt_NETMAP.ko
-rw-r--r-- 1 root root   4328 2025-02-06 09:53:13.000000000 +0000 xt_REDIRECT.ko
-rw-r--r-- 1 root root   7248 2025-02-06 09:53:13.000000000 +0000 xt_TCPMSS.ko
-rw-r--r-- 1 root root   5936 2025-02-06 09:53:13.000000000 +0000 xt_addrtype.ko
-rw-r--r-- 1 root root   4760 2025-02-06 09:53:13.000000000 +0000 xt_connbytes.ko
-rw-r--r-- 1 root root   5984 2025-02-06 09:53:13.000000000 +0000 xt_connmark.ko
-rw-r--r-- 1 root root   6176 2025-02-06 09:53:13.000000000 +0000 xt_conntrack.ko
-rw-r--r-- 1 root root   4184 2025-02-06 09:53:13.000000000 +0000 xt_dscp.ko
-rw-r--r-- 1 root root  18536 2025-02-06 09:53:13.000000000 +0000 xt_hashlimit.ko
-rw-r--r-- 1 root root   4568 2025-02-06 09:53:13.000000000 +0000 xt_helper.ko
-rw-r--r-- 1 root root   3720 2025-02-06 09:53:13.000000000 +0000 xt_hl.ko
-rw-r--r-- 1 root root   3720 2025-02-06 09:53:13.000000000 +0000 xt_length.ko
-rw-r--r-- 1 root root   3472 2025-02-06 09:53:13.000000000 +0000 xt_mac.ko
-rw-r--r-- 1 root root   3944 2025-02-06 09:53:13.000000000 +0000 xt_mark.ko
-rw-r--r-- 1 root root   4288 2025-02-06 09:53:13.000000000 +0000 xt_multiport.ko
-rw-r--r-- 1 root root   6544 2025-02-06 09:53:13.000000000 +0000 xt_nat.ko
-rw-r--r-- 1 root root   4824 2025-02-06 09:53:13.000000000 +0000 xt_physdev.ko
-rw-r--r-- 1 root root   5368 2025-02-06 09:53:13.000000000 +0000 xt_policy.ko
-rw-r--r-- 1 root root   3408 2025-02-06 09:53:13.000000000 +0000 xt_realm.ko
-rw-r--r-- 1 root root   4136 2025-02-06 09:53:13.000000000 +0000 xt_statistic.ko
-rw-r--r-- 1 root root   3920 2025-02-06 09:53:13.000000000 +0000 xt_string.ko
-rw-r--r-- 1 root root   4048 2025-02-06 09:53:13.000000000 +0000 xt_tcpmss.ko
-rw-r--r-- 1 root root   5152 2025-02-06 09:53:13.000000000 +0000 xt_tcpudp.ko

/lib/modules/5.6.3-64/kernel/net/rfkill:
total 24
-rw-r--r-- 1 root root 22608 2025-02-06 09:53:13.000000000 +0000 rfkill.ko

/lib/modules/5.6.3-64/kernel/net/sched:
total 88
-rw-r--r-- 1 root root 24008 2025-02-06 09:53:13.000000000 +0000 sch_cake.ko
-rw-r--r-- 1 root root  8384 2025-02-06 09:53:13.000000000 +0000 sch_codel.ko
-rw-r--r-- 1 root root 10848 2025-02-06 09:53:13.000000000 +0000 sch_fq_codel.ko
-rw-r--r-- 1 root root 27536 2025-02-06 09:53:13.000000000 +0000 sch_htb.ko
-rw-r--r-- 1 root root 10344 2025-02-06 09:53:13.000000000 +0000 sch_red.ko

/lib/modules/5.6.3-64/kernel/net/unix:
total 40
-rw-r--r-- 1 root root 38648 2025-02-06 09:53:13.000000000 +0000 unix.ko

/lib/modules/5.6.3-64/kernel/net/xfrm:
total 12
-rw-r--r-- 1 root root 11448 2025-02-06 09:53:13.000000000 +0000 xfrm_algo.ko

/lib/modules/5.6.3-64/misc:
total 160
-rw-r--r-- 1 root root 18456 2025-02-06 09:48:58.000000000 +0000 bprog.ko
-rw-r--r-- 1 root root 11576 2025-02-06 09:48:04.000000000 +0000 btest.ko
-rw-r--r-- 1 root root  7856 2025-02-06 09:52:15.000000000 +0000 dot1x.ko
-rw-r--r-- 1 root root  5792 2025-02-06 09:50:24.000000000 +0000 jiffies.ko
-rw-r--r-- 1 root root  3784 2025-02-06 09:48:17.000000000 +0000 ledgroup.ko
-rw-r--r-- 1 root root 13296 2025-02-06 09:47:56.000000000 +0000 logring.ko
-rw-r--r-- 1 root root 25624 2025-02-06 09:48:40.000000000 +0000 mesh.ko
-rw-r--r-- 1 root root  5520 2025-02-06 09:48:11.000000000 +0000 pex8606.ko
-rw-r--r-- 1 root root  6992 2025-02-06 09:50:29.000000000 +0000 romon.ko
-rw-r--r-- 1 root root  7064 2025-02-06 09:48:35.000000000 +0000 snif.ko
-rw-r--r-- 1 root root 28488 2025-02-06 09:48:50.000000000 +0000 traffic_gen.ko
-rw-r--r-- 1 root root  8664 2025-02-06 09:48:36.000000000 +0000 ulog.ko

/lib/modules/5.6.3-64/net:
total 16
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2025-02-06 10:06:12.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 sched

/lib/modules/5.6.3-64/net/bridge:
total 208
-rw-r--r-- 1 root root 184168 2025-02-06 09:52:04.000000000 +0000 bridge2.ko
-rw-r--r-- 1 root root  16648 2025-02-06 09:52:04.000000000 +0000 bridge2_netfilter.ko
-rw-r--r-- 1 root root   3416 2025-02-06 09:48:29.000000000 +0000 ebt_snif.ko
-rw-r--r-- 1 root root   3744 2025-02-06 09:48:31.000000000 +0000 ebt_ulog.ko

/lib/modules/5.6.3-64/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 netfilter

/lib/modules/5.6.3-64/net/ipv4/netfilter:
total 36
-rw-r--r-- 1 root root 4184 2025-02-06 09:48:01.000000000 +0000 ipt_SAME.ko
-rw-r--r-- 1 root root 7256 2025-02-06 09:48:02.000000000 +0000 ipt_TARPIT.ko
-rw-r--r-- 1 root root 4960 2025-02-06 09:48:02.000000000 +0000 ipt_psd.ko
-rw-r--r-- 1 root root 3640 2025-02-06 09:48:29.000000000 +0000 ipt_snif.ko
-rw-r--r-- 1 root root 4216 2025-02-06 09:48:31.000000000 +0000 ipt_ulog.ko

/lib/modules/5.6.3-64/net/netfilter:
total 64
-rw-r--r-- 1 root root  2784 2025-02-06 09:49:11.000000000 +0000 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  2784 2025-02-06 09:49:11.000000000 +0000 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 12240 2025-02-06 09:49:20.000000000 +0000 xt_ein.ko
-rw-r--r-- 1 root root 13408 2025-02-06 09:48:07.000000000 +0000 xt_layer7.ko
-rw-r--r-- 1 root root 20104 2025-02-06 09:49:20.000000000 +0000 xt_misc.ko
-rw-r--r-- 1 root root  4528 2025-02-06 09:48:04.000000000 +0000 xt_tls.ko

/lib/modules/5.6.3-64/net/sched:
total 92
-rw-r--r-- 1 root root  6232 2025-02-06 09:48:18.000000000 +0000 cls_fw.ko
-rw-r--r-- 1 root root 12952 2025-02-06 09:48:23.000000000 +0000 cls_linear.ko
-rw-r--r-- 1 root root 13776 2025-02-06 09:48:41.000000000 +0000 proto_agr.ko
-rw-r--r-- 1 root root 19704 2025-02-06 09:48:41.000000000 +0000 sch_agr.ko
-rw-r--r-- 1 root root 10688 2025-02-06 09:48:05.000000000 +0000 sch_pcq.ko
-rw-r--r-- 1 root root  6368 2025-02-06 09:50:17.000000000 +0000 sch_rate.ko
-rw-r--r-- 1 root root  9248 2025-02-06 09:50:36.000000000 +0000 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2025-02-06 10:06:12.000000000 +0000 bin
drwxr-xr-x 11 root root 4096 2025-02-06 10:06:12.000000000 +0000 etc
drwxr-xr-x  5 root root 4096 2025-02-06 10:06:12.000000000 +0000 lib
lrwxrwxrwx  1 root root    8 2025-02-06 10:06:12.000000000 +0000 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2025-02-06 10:06:12.000000000 +0000 store -> /rw/store

/nova/bin:
total 10404
-rwxr-xr-x 1 root root   26020 2025-02-06 09:14:39.000000000 +0000 agent
-rwxr-xr-x 1 root root   17660 2025-02-06 09:14:39.000000000 +0000 arpd
-rwxr-xr-x 1 root root   22040 2025-02-06 09:16:42.000000000 +0000 backup
-rwxr-xr-x 1 root root  297848 2025-02-06 09:19:17.000000000 +0000 bridge2
-rwxr-xr-x 1 root root   67488 2025-02-06 09:16:57.000000000 +0000 btest
-rwxr-xr-x 1 root root   55056 2025-02-06 09:15:20.000000000 +0000 bth
-rwxr-xr-x 1 root root  918664 2025-02-06 09:18:22.000000000 +0000 cerm
lrwxrwxrwx 1 root root       4 2025-02-06 09:18:27.000000000 +0000 cerm-worker -> cerm
-rwxr-xr-x 1 root root  157860 2025-02-06 09:18:11.000000000 +0000 cloud
-rwxr-xr-x 1 root root   91788 2025-02-06 09:16:27.000000000 +0000 crossfig
-rwxr-xr-x 1 root root   63396 2025-02-06 09:19:06.000000000 +0000 detnet
-rwxr-xr-x 1 root root   75696 2025-02-06 09:15:12.000000000 +0000 discover
-rwxr-xr-x 1 root root  256652 2025-02-06 09:18:08.000000000 +0000 diskd
-rwxr-xr-x 1 root root  104528 2025-02-06 09:19:24.000000000 +0000 dot1x
-rwxr-xr-x 1 root root   42884 2025-02-06 09:16:40.000000000 +0000 email
-rwxr-xr-x 1 root root   71652 2025-02-06 09:16:42.000000000 +0000 figman
-rwxr-xr-x 1 root root   84056 2025-02-06 09:18:33.000000000 +0000 fileman
-rwxr-xr-x 1 root root   34372 2025-02-06 09:14:40.000000000 +0000 ftpd
-rwxr-xr-x 1 root root  140848 2025-02-06 09:15:35.000000000 +0000 graphing
-rwxr-xr-x 1 root root   13300 2025-02-06 09:18:17.000000000 +0000 havecardbus
-rwxr-xr-x 1 root root   59100 2025-02-06 09:16:22.000000000 +0000 igmpproxy
-rwxr-xr-x 1 root root   71420 2025-02-06 09:17:58.000000000 +0000 installer
-rwxr-xr-x 1 root root   34328 2025-02-06 09:18:15.000000000 +0000 ippool
-rwxr-xr-x 1 root root   55496 2025-02-06 09:17:00.000000000 +0000 keyman
-rwxr-xr-x 1 root root   46816 2025-02-06 09:15:22.000000000 +0000 kidcontrol
-rwxr-xr-x 1 root root  215116 2025-02-06 09:15:40.000000000 +0000 lcdstat
-rwxr-xr-x 1 root root   67604 2025-02-06 09:17:25.000000000 +0000 led
-rwxr-xr-x 1 root root  112504 2025-02-06 09:18:10.000000000 +0000 letsencrypt
-rwxr-xr-x 1 root root   84220 2025-02-06 09:17:07.000000000 +0000 loader
-rwxr-xr-x 1 root root   71648 2025-02-06 09:14:45.000000000 +0000 log
-rwxr-xr-x 1 root root  145964 2025-02-06 09:20:08.000000000 +0000 login
-rwxr-xr-x 1 root root   58900 2025-02-06 09:14:42.000000000 +0000 logmaker
-rwxr-xr-x 1 root root   30216 2025-02-06 09:14:40.000000000 +0000 macping
-rwxr-xr-x 1 root root   42688 2025-02-06 09:16:58.000000000 +0000 mactel
-rwxr-xr-x 1 root root   30300 2025-02-06 09:14:40.000000000 +0000 mepty
-rwxr-xr-x 1 root root   75444 2025-02-06 09:15:24.000000000 +0000 mesh
-rwxr-xr-x 1 root root   67412 2025-02-06 09:19:45.000000000 +0000 mode
lrwxrwxrwx 1 root root       7 2025-02-06 09:18:17.000000000 +0000 modprobed -> moduler
-rwxr-xr-x 1 root root   80196 2025-02-06 09:18:17.000000000 +0000 moduler
-rwxr-xr-x 1 root root   72156 2025-02-06 09:19:14.000000000 +0000 mproxy
-rwxr-xr-x 1 root root   63384 2025-02-06 09:16:53.000000000 +0000 mtget
-rwxr-xr-x 1 root root   46828 2025-02-06 09:15:07.000000000 +0000 natpmp
-rwxr-xr-x 1 root root 1428172 2025-02-06 09:21:59.000000000 +0000 net
-rwxr-xr-x 1 root root   67452 2025-02-06 09:17:24.000000000 +0000 ntp
-rwxr-xr-x 1 root root   13388 2025-02-06 09:14:36.000000000 +0000 panicsl
-rwxr-xr-x 1 root root  606056 2025-02-06 09:20:08.000000000 +0000 parser
-rwxr-xr-x 1 root root   38572 2025-02-06 09:14:42.000000000 +0000 ping
-rwxr-xr-x 1 root root   51036 2025-02-06 09:17:55.000000000 +0000 portman
-rwxr-xr-x 1 root root   38528 2025-02-06 09:53:23.000000000 +0000 profiler
-rwxr-xr-x 1 root root   75544 2025-02-06 09:18:06.000000000 +0000 ptp
-rwxr-xr-x 1 root root  137316 2025-02-06 09:14:48.000000000 +0000 quickset
-rwxr-xr-x 1 root root   51012 2025-02-06 09:16:59.000000000 +0000 radius
-rwxr-xr-x 1 root root  145776 2025-02-06 09:18:10.000000000 +0000 resolver
-rwxr-xr-x 1 root root   13584 2025-02-06 09:18:10.000000000 +0000 resolver_ctl
-rwxr-xr-x 1 root root   88184 2025-02-06 09:17:39.000000000 +0000 romon
-rwxr-xr-x 1 root root 1466828 2025-02-06 09:23:14.000000000 +0000 route
-rwxr-xr-x 1 root root   21880 2025-02-06 09:17:26.000000000 +0000 rtrace
-rwxr-xr-x 1 root root   30396 2025-02-06 09:18:11.000000000 +0000 sermgr
-rwxr-xr-x 1 root root   34424 2025-02-06 09:15:02.000000000 +0000 sertcp
-rwxr-xr-x 1 root root   63244 2025-02-06 09:15:15.000000000 +0000 sniffer
-rwxr-xr-x 1 root root  186688 2025-02-06 09:19:21.000000000 +0000 snmp
-rwxr-xr-x 1 root root   63304 2025-02-06 09:15:25.000000000 +0000 socks
-rwxr-xr-x 1 root root  108520 2025-02-06 09:18:50.000000000 +0000 ssld
-rwxr-xr-x 1 root root   30244 2025-02-06 09:16:42.000000000 +0000 sstore
-rwxr-xr-x 1 root root  785532 2025-02-06 09:20:09.000000000 +0000 sys2
-rwxr-xr-x 1 root root   25956 2025-02-06 09:14:41.000000000 +0000 telnet
-rwxr-xr-x 1 root root   17584 2025-02-06 09:14:37.000000000 +0000 telser
-rwxr-xr-x 1 root root   38660 2025-02-06 09:15:08.000000000 +0000 tftpd
-rwxr-xr-x 1 root root   34372 2025-02-06 09:14:41.000000000 +0000 traceroute
-rwxr-xr-x 1 root root  104256 2025-02-06 09:15:18.000000000 +0000 trafficgen
-rwxr-xr-x 1 root root   26056 2025-02-06 09:14:56.000000000 +0000 trafflow
-rwxr-xr-x 1 root root   26104 2025-02-06 09:14:39.000000000 +0000 undo
-rwxr-xr-x 1 root root  141372 2025-02-06 09:15:25.000000000 +0000 upnp
-rwxr-xr-x 1 root root   80084 2025-02-06 09:18:15.000000000 +0000 user
-rwxr-xr-x 1 root root   87980 2025-02-06 09:17:30.000000000 +0000 vrrp
-rwxr-xr-x 1 root root   30396 2025-02-06 09:14:59.000000000 +0000 watchdog
-rwxr-xr-x 1 root root  141988 2025-02-06 09:18:01.000000000 +0000 wproxy
-rwxr-xr-x 1 root root  113140 2025-02-06 09:18:55.000000000 +0000 www

/nova/etc:
total 88
-rwxr-xr-x 1 root root 8204 2025-02-06 09:09:54.000000000 +0000 font_8x10.raw
-rwxr-xr-x 1 root root 8204 2025-02-06 09:09:54.000000000 +0000 font_8x16.raw
-rwxr-xr-x 1 root root 8204 2025-02-06 09:09:54.000000000 +0000 font_8x8.raw
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 leds
-rwxr-xr-x 1 root root 1229 2025-02-06 09:09:52.000000000 +0000 lognames
-rwxr-xr-x 1 root root   10 2025-02-06 09:09:52.000000000 +0000 logo
-rwxr-xr-x 1 root root    1 2025-02-06 09:09:52.000000000 +0000 manual-url
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 pciinfo
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 services
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 system_names
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 upnp
-rwxr-xr-x 1 root root   26 2025-02-06 09:09:52.000000000 +0000 url
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 user
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 www

/nova/etc/leds:
total 128
-rwxr-xr-x 1 root root 126981 2025-02-06 09:13:53.000000000 +0000 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2025-02-06 09:13:53.000000000 +0000 system.x3

/nova/etc/pciinfo:
total 220
-rwxr-xr-x 1 root root 224997 2025-02-06 09:13:53.000000000 +0000 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 57 2025-02-06 09:13:53.000000000 +0000 system.x3

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
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 defconf
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 profiler
-rwxr-xr-x 1 root root 4085 2025-02-06 09:09:52.000000000 +0000 xmlnames2

/nova/lib/console:
total 2096
-rwxr-xr-x 1 root root 2135347 2025-02-06 09:20:49.000000000 +0000 1073741824.mem
-rwxr-xr-x 1 root root     510 2025-02-06 09:09:52.000000000 +0000 logo.txt
-rwxr-xr-x 1 root root      18 2025-02-06 09:09:52.000000000 +0000 sublogo.txt

/nova/lib/defconf:
total 100
-rwxr-xr-x 1 root root   567 2025-02-06 09:09:52.000000000 +0000 defconf
-rwxr-xr-x 1 root root  4995 2025-02-06 09:09:52.000000000 +0000 defconf-caps
-rwxr-xr-x 1 root root  3700 2025-02-06 09:09:52.000000000 +0000 defconf-wps-sync
-rwxr-xr-x 1 root root 85033 2025-02-06 09:09:52.000000000 +0000 get-custom-defconf

/nova/lib/profiler:
total 32
-rwxr-xr-x 1 root root 29256 2025-02-06 09:53:23.000000000 +0000 system.p

/old:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 system

/old/system:
total 8
-rwxr-xr-x 1 root root 6620 2025-02-06 09:09:53.000000000 +0000 halt

/proc:
total 0

/ram:
total 0

/sbin:
total 1156
-rwxr-xr-x 1 root root  45168 2025-02-06 09:14:09.000000000 +0000 fsck
-rwxr-xr-x 1 root root 570976 2025-02-06 09:14:06.000000000 +0000 fsck.ext2
-rwxr-xr-x 1 root root     49 2025-02-06 09:09:53.000000000 +0000 hwclock
-rwxr-xr-x 1 root root 124652 2025-02-06 09:13:34.000000000 +0000 kexec
-rwxr-xr-x 1 root root 333532 2025-02-06 09:14:12.000000000 +0000 mke2fs
-rwxr-xr-x 1 root root  63068 2025-02-06 09:16:45.000000000 +0000 sysinit
-rwxr-xr-x 1 root root  25860 2025-02-06 09:13:34.000000000 +0000 vmcore-dmesg

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2025-02-06 10:06:12.000000000 +0000 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 deinstall
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 lock
lrwxrwxrwx 1 root root    8 2025-02-06 10:06:12.000000000 +0000 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2025-02-06 10:06:12.000000000 +0000 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2025-02-06 10:06:12.000000000 +0000 post
lrwxrwxrwx 1 root root    7 2025-02-06 10:06:12.000000000 +0000 run -> /rw/run
lrwxrwxrwx 1 root root    4 2025-02-06 10:06:12.000000000 +0000 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

