### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 5662212 bytes, 539 inodes, blocksize: 262144 bytes, created: Fri Oct 10 09:52:28 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 bin
drwxr-xr-x 7 root root 4096 2025-10-10 10:52:22.000000000 +0100 bndl
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 boot
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 dev
lrwxrwxrwx 1 root root   11 2025-10-10 10:52:22.000000000 +0100 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 etc
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 flash
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:22.000000000 +0100 nova
lrwxrwxrwx 1 root root    9 2025-10-10 10:52:22.000000000 +0100 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 proc
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 ram
lrwxrwxrwx 1 root root    9 2025-10-10 10:52:22.000000000 +0100 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 sbin
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 sys
lrwxrwxrwx 1 root root    7 2025-10-10 10:52:22.000000000 +0100 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:22.000000000 +0100 var

/bin:
total 28
lrwxrwxrwx 1 root root    21 2025-10-10 10:52:22.000000000 +0100 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root 18080 2025-10-10 09:57:34.000000000 +0100 catlog
lrwxrwxrwx 1 root root    15 2025-10-10 10:52:22.000000000 +0100 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root    15 2025-10-10 10:52:22.000000000 +0100 login -> /nova/bin/login
-rwxr-xr-x 1 root root  7512 2025-10-10 09:57:34.000000000 +0100 pakp
lrwxrwxrwx 1 root root    21 2025-10-10 10:52:22.000000000 +0100 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root    15 2025-10-10 10:52:22.000000000 +0100 shell -> /nova/bin/login

/bndl:
total 20
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:22.000000000 +0100 advanced-tools
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:22.000000000 +0100 dhcp
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:22.000000000 +0100 ipv6
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:22.000000000 +0100 ppp
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:22.000000000 +0100 security

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:22.000000000 +0100 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 webfig

/bndl/advanced-tools/home/web/webfig:
total 8
-rw-r--r-- 1 root root 2370 2025-10-10 10:36:55.000000000 +0100 advtool-c647bc50a096.jg.gz
-rwxr-xr-x 1 root root  107 2025-10-10 10:36:55.000000000 +0100 advtool.info
lrwxrwxrwx 1 root root   26 2025-10-10 10:36:56.000000000 +0100 advtool.jg.gz -> advtool-c647bc50a096.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 lib

/bndl/advanced-tools/nova/bin:
total 204
-rwxr-xr-x 1 root root 31520 2025-10-10 10:36:03.000000000 +0100 ddns
-rwxr-xr-x 1 root root 15004 2025-10-10 10:35:41.000000000 +0100 fping
-rwxr-xr-x 1 root root 18072 2025-10-10 10:36:23.000000000 +0100 macscan
-rwxr-xr-x 1 root root 68500 2025-10-10 10:38:31.000000000 +0100 netwatch
-rwxr-xr-x 1 root root 16540 2025-10-10 10:35:48.000000000 +0100 pspeed
-rwxr-xr-x 1 root root 34812 2025-10-10 10:36:43.000000000 +0100 scanner
-rwxr-xr-x 1 root root 12008 2025-10-10 10:37:04.000000000 +0100 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 console

/bndl/advanced-tools/nova/lib/console:
total 28
-rwxr-xr-x 1 root root 27225 2025-10-10 10:36:15.000000000 +0100 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 home
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:22.000000000 +0100 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 webfig

/bndl/dhcp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4740 2025-10-10 10:36:59.000000000 +0100 dhcp-aed65be3c144.jg.gz
-rwxr-xr-x 1 root root  100 2025-10-10 10:36:59.000000000 +0100 dhcp.info
lrwxrwxrwx 1 root root   23 2025-10-10 10:37:00.000000000 +0100 dhcp.jg.gz -> dhcp-aed65be3c144.jg.gz

/bndl/dhcp/lib:
total 112
-rwxr-xr-x 1 root root 111152 2025-10-10 10:36:20.000000000 +0100 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 lib

/bndl/dhcp/nova/bin:
total 340
-rwxr-xr-x 1 root root 240572 2025-10-10 10:39:38.000000000 +0100 dhcp
-rwxr-xr-x 1 root root 104988 2025-10-10 10:38:05.000000000 +0100 dhcpclient

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 console

/bndl/dhcp/nova/lib/console:
total 116
-rwxr-xr-x 1 root root 118532 2025-10-10 10:36:44.000000000 +0100 1128267776.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:22.000000000 +0100 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 webfig

/bndl/ipv6/home/web/webfig:
total 12
-rw-r--r-- 1 root root 8069 2025-10-10 10:36:50.000000000 +0100 ipv6-51ca41a24a71.jg.gz
-rwxr-xr-x 1 root root  101 2025-10-10 10:36:50.000000000 +0100 ipv6.info
lrwxrwxrwx 1 root root   23 2025-10-10 10:36:50.000000000 +0100 ipv6.jg.gz -> ipv6-51ca41a24a71.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:22.000000000 +0100 lib

/bndl/ipv6/nova/bin:
total 92
-rwxr-xr-x 1 root root 30576 2025-10-10 10:37:04.000000000 +0100 ippool6
-rwxr-xr-x 1 root root 59500 2025-10-10 10:36:12.000000000 +0100 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 route

/bndl/ipv6/nova/lib/console:
total 192
-rwxr-xr-x 1 root root 193792 2025-10-10 10:36:31.000000000 +0100 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2025-10-10 09:48:07.000000000 +0100 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:22.000000000 +0100 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 webfig

/bndl/ppp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 6632 2025-10-10 10:36:50.000000000 +0100 ppp-0e7aacafe7ee.jg.gz
-rwxr-xr-x 1 root root   99 2025-10-10 10:36:50.000000000 +0100 ppp.info
lrwxrwxrwx 1 root root   22 2025-10-10 10:36:50.000000000 +0100 ppp.jg.gz -> ppp-0e7aacafe7ee.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:22.000000000 +0100 5.6.3

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2025-10-10 10:46:30.000000000 +0100 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 104
-rw-r--r-- 1 root root 11412 2025-10-10 10:30:27.000000000 +0100 ppp_async.ko
-rw-r--r-- 1 root root  6784 2025-10-10 10:30:28.000000000 +0100 ppp_deflate.ko
-rw-r--r-- 1 root root 33548 2025-10-10 10:30:28.000000000 +0100 ppp_generic.ko
-rw-r--r-- 1 root root  8732 2025-10-10 10:30:28.000000000 +0100 ppp_mppe.ko
-rw-r--r-- 1 root root  9524 2025-10-10 10:30:28.000000000 +0100 ppp_synctty.ko
-rw-r--r-- 1 root root 12784 2025-10-10 10:30:28.000000000 +0100 pppoe.ko
-rw-r--r-- 1 root root  4284 2025-10-10 10:30:28.000000000 +0100 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 92
-rw-r--r-- 1 root root 36312 2025-10-10 10:38:30.000000000 +0100 ovpn.ko
-rw-r--r-- 1 root root  6204 2025-10-10 10:39:44.000000000 +0100 pppoefp.ko
-rw-r--r-- 1 root root 48436 2025-10-10 10:39:20.000000000 +0100 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 60
-rw-r--r-- 1 root root 48912 2025-10-10 10:37:22.000000000 +0100 l2tp.ko
-rw-r--r-- 1 root root 10180 2025-10-10 10:36:20.000000000 +0100 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:22.000000000 +0100 etc
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:22.000000000 +0100 lib

/bndl/ppp/nova/bin:
total 632
-rwxr-xr-x 1 root root 643528 2025-10-10 10:45:17.000000000 +0100 ppp
lrwxrwxrwx 1 root root      3 2025-10-10 10:45:50.000000000 +0100 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2025-10-10 10:36:11.000000000 +0100 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2025-10-10 10:36:11.000000000 +0100 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 profiler

/bndl/ppp/nova/lib/console:
total 160
-rwxr-xr-x 1 root root 160419 2025-10-10 10:36:33.000000000 +0100 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 4
-rwxr-xr-x 1 root root 1940 2025-10-10 10:41:01.000000000 +0100 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:22.000000000 +0100 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 webfig

/bndl/security/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4451 2025-10-10 10:43:07.000000000 +0100 secure-6d95ab448081.jg.gz
-rwxr-xr-x 1 root root  105 2025-10-10 10:43:07.000000000 +0100 secure.info
lrwxrwxrwx 1 root root   25 2025-10-10 10:43:07.000000000 +0100 secure.jg.gz -> secure-6d95ab448081.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 5.6.3

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:22.000000000 +0100 kernel
-rw-r--r-- 1 root root  106 2025-10-10 10:48:02.000000000 +0100 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 crypto
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:22.000000000 +0100 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 88
-rw-r--r-- 1 root root  8352 2025-10-10 10:30:26.000000000 +0100 blowfish_common.ko
-rw-r--r-- 1 root root  6020 2025-10-10 10:30:27.000000000 +0100 blowfish_generic.ko
-rw-r--r-- 1 root root 23348 2025-10-10 10:30:27.000000000 +0100 camellia_generic.ko
-rw-r--r-- 1 root root  8412 2025-10-10 10:30:27.000000000 +0100 chacha20poly1305.ko
-rw-r--r-- 1 root root  3800 2025-10-10 10:30:27.000000000 +0100 echainiv.ko
-rw-r--r-- 1 root root 15832 2025-10-10 10:30:27.000000000 +0100 twofish_common.ko
-rw-r--r-- 1 root root  9988 2025-10-10 10:30:27.000000000 +0100 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 key
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root  8904 2025-10-10 10:30:30.000000000 +0100 ah4.ko
-rw-r--r-- 1 root root 13068 2025-10-10 10:30:30.000000000 +0100 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 36
-rw-r--r-- 1 root root 33820 2025-10-10 10:30:31.000000000 +0100 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 28
-rw-r--r-- 1 root root 26880 2025-10-10 10:30:34.000000000 +0100 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:22.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 lib

/bndl/security/nova/bin:
total 760
-rwxr-xr-x 1 root root 546128 2025-10-10 10:47:29.000000000 +0100 ipsec
lrwxrwxrwx 1 root root      5 2025-10-10 10:47:32.000000000 +0100 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 228384 2025-10-10 10:43:12.000000000 +0100 ssh
lrwxrwxrwx 1 root root      3 2025-10-10 10:43:26.000000000 +0100 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2025-10-10 10:40:42.000000000 +0100 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2025-10-10 10:40:42.000000000 +0100 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 console

/bndl/security/nova/lib/console:
total 92
-rwxr-xr-x 1 root root 92892 2025-10-10 10:43:15.000000000 +0100 1077936128.mem

/boot:
total 0

/dev:
total 0

/etc:
total 172
-rw-r--r-- 1 root root 130743 2025-10-10 09:48:31.000000000 +0100 license
-rw-r--r-- 1 root root  43808 2025-10-10 09:54:46.000000000 +0100 qca9531L-7.20.1.fwf
lrwxrwxrwx 1 root root     24 2025-10-10 10:52:22.000000000 +0100 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:22.000000000 +0100 web

/home/web:
total 64
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:22.000000000 +0100 assets
-rwxr-xr-x 1 root root 19357 2025-10-10 09:53:54.000000000 +0100 bth-files.html
-rwxr-xr-x 1 root root   600 2025-10-10 09:48:31.000000000 +0100 favicon.png
-rwxr-xr-x 1 root root   689 2025-10-10 09:48:31.000000000 +0100 favicon.svg
-rwxr-xr-x 1 root root   708 2025-10-10 09:48:29.000000000 +0100 graph.css
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:22.000000000 +0100 help
-rwxr-xr-x 1 root root  1254 2025-10-10 09:48:31.000000000 +0100 index2.html
lrwxrwxrwx 1 root root    12 2025-10-10 10:35:35.000000000 +0100 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2025-10-10 09:48:31.000000000 +0100 logo.png
-rw-r--r-- 1 root root  2507 2025-10-10 09:48:31.000000000 +0100 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2025-10-10 09:48:31.000000000 +0100 robots.txt
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:22.000000000 +0100 webfig
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:22.000000000 +0100 winbox

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
total 1944
-rwxr-xr-x 1 root root 279128 2025-10-10 09:50:37.000000000 +0100 libc.so
-rwxr-xr-x 1 root root  89264 2025-10-10 09:56:49.000000000 +0100 libeap.so
-rwxr-xr-x 1 root root  21840 2025-10-10 09:52:38.000000000 +0100 libjson.so
-rwxr-xr-x 1 root root 178744 2025-10-10 09:55:04.000000000 +0100 librappsup.so
-rwxr-xr-x 1 root root 122656 2025-10-10 09:53:37.000000000 +0100 libubox.so
-rwxr-xr-x 1 root root  76508 2025-10-10 09:52:29.000000000 +0100 libuc++.so
-rwxr-xr-x 1 root root 282476 2025-10-10 09:55:33.000000000 +0100 libucrypto.so
-rwxr-xr-x 1 root root  27668 2025-10-10 09:53:27.000000000 +0100 libufiber.so
-rwxr-xr-x 1 root root  70140 2025-10-10 09:53:34.000000000 +0100 libuhttp.so
-rwxr-xr-x 1 root root 641808 2025-10-10 09:53:07.000000000 +0100 libumsg.so
-rwxr-xr-x 1 root root  37020 2025-10-10 09:55:49.000000000 +0100 liburadius.so
-rwxr-xr-x 1 root root  10544 2025-10-10 09:55:40.000000000 +0100 libuxml++.so
-rwxr-xr-x 1 root root  37432 2025-10-10 09:52:34.000000000 +0100 libwww.so
-rwxr-xr-x 1 root root  13772 2025-10-10 09:52:38.000000000 +0100 libxml.so
-rwxr-xr-x 1 root root  68088 2025-10-10 09:52:39.000000000 +0100 libz.so
drwxr-xr-x 3 root root   4096 2025-10-10 10:52:22.000000000 +0100 modules
lrwxrwxrwx 1 root root     27 2025-10-10 10:52:22.000000000 +0100 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:22.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:22.000000000 +0100 drivers
drwxr-xr-x 7 root root 4096 2025-10-10 10:52:22.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 misc
-rw-r--r-- 1 root root 1488 2025-10-10 10:35:32.000000000 +0100 modules.dep.system
drwxr-xr-x 6 root root 4096 2025-10-10 10:52:22.000000000 +0100 net

/lib/modules/5.6.3/drivers:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 char
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 net

/lib/modules/5.6.3/drivers/char:
total 20
-rw-r--r-- 1 root root 4868 2025-10-10 10:28:00.000000000 +0100 ar7100wdt.ko
-rw-r--r-- 1 root root 8784 2025-10-10 10:28:14.000000000 +0100 ticker.ko

/lib/modules/5.6.3/drivers/net:
total 464
-rw-r--r-- 1 root root  38888 2025-10-10 10:28:58.000000000 +0100 ag7240.ko
-rw-r--r-- 1 root root  26836 2025-10-10 10:30:36.000000000 +0100 aths16.ko
-rw-r--r-- 1 root root  10680 2025-10-10 10:31:39.000000000 +0100 imq.ko
-rw-r--r-- 1 root root 173760 2025-10-10 10:33:26.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root  87924 2025-10-10 10:29:29.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root   3376 2025-10-10 10:31:35.000000000 +0100 sram.ko
-rw-r--r-- 1 root root  57776 2025-10-10 10:30:39.000000000 +0100 switch.ko
-rw-r--r-- 1 root root  58600 2025-10-10 10:33:19.000000000 +0100 vxlan2.ko

/lib/modules/5.6.3/kernel:
total 20
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 arch
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 crypto
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 drivers
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:22.000000000 +0100 lib
drwxr-xr-x 9 root root 4096 2025-10-10 10:52:22.000000000 +0100 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 4 root root 4096 2025-10-10 10:52:22.000000000 +0100 mips

/lib/modules/5.6.3/kernel/arch/mips:
total 8
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 crypto
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 oprofile

/lib/modules/5.6.3/kernel/arch/mips/crypto:
total 16
-rw-r--r-- 1 root root 7964 2025-10-10 10:30:26.000000000 +0100 chacha-mips.ko
-rw-r--r-- 1 root root 5888 2025-10-10 10:30:26.000000000 +0100 poly1305-mips.ko

/lib/modules/5.6.3/kernel/arch/mips/oprofile:
total 36
-rw-r--r-- 1 root root 34056 2025-10-10 10:30:26.000000000 +0100 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 24
-rw-r--r-- 1 root root  3068 2025-10-10 10:30:26.000000000 +0100 arc4.ko
-rw-r--r-- 1 root root  3820 2025-10-10 10:30:27.000000000 +0100 des_generic.ko
-rw-r--r-- 1 root root  3992 2025-10-10 10:30:27.000000000 +0100 sha1_generic.ko
-rw-r--r-- 1 root root 10000 2025-10-10 10:30:27.000000000 +0100 sha512_generic.ko

/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 5 root root 4096 2025-10-10 10:52:22.000000000 +0100 net

/lib/modules/5.6.3/kernel/drivers/net:
total 52
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:22.000000000 +0100 bonding
-rw-r--r-- 1 root root 19068 2025-10-10 10:30:27.000000000 +0100 macvlan.ko
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:22.000000000 +0100 slip
-rw-r--r-- 1 root root 18184 2025-10-10 10:30:28.000000000 +0100 vrf.ko
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:22.000000000 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 132
-rw-r--r-- 1 root root 131600 2025-10-10 10:30:27.000000000 +0100 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6052 2025-10-10 10:30:28.000000000 +0100 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 80
-rw-r--r-- 1 root root 80160 2025-10-10 10:30:28.000000000 +0100 wireguard.ko

/lib/modules/5.6.3/kernel/lib:
total 24
-rw-r--r-- 1 root root 3340 2025-10-10 10:30:28.000000000 +0100 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 crypto
-rw-r--r-- 1 root root 3492 2025-10-10 10:30:28.000000000 +0100 ts_bm.ko
-rw-r--r-- 1 root root 3324 2025-10-10 10:30:29.000000000 +0100 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 64
-rw-r--r-- 1 root root  2304 2025-10-10 10:30:28.000000000 +0100 libarc4.ko
-rw-r--r-- 1 root root  7468 2025-10-10 10:30:28.000000000 +0100 libblake2s-generic.ko
-rw-r--r-- 1 root root  3732 2025-10-10 10:30:28.000000000 +0100 libblake2s.ko
-rw-r--r-- 1 root root  7040 2025-10-10 10:30:28.000000000 +0100 libchacha20poly1305.ko
-rw-r--r-- 1 root root 11708 2025-10-10 10:30:28.000000000 +0100 libcurve25519-generic.ko
-rw-r--r-- 1 root root  1992 2025-10-10 10:30:28.000000000 +0100 libcurve25519.ko
-rw-r--r-- 1 root root 20668 2025-10-10 10:30:28.000000000 +0100 libdes.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18368 2025-10-10 10:30:29.000000000 +0100 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14908 2025-10-10 10:30:29.000000000 +0100 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 28
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 8021q
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 ipv4
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 ipv6
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 sched
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 xfrm

/lib/modules/5.6.3/kernel/net/8021q:
total 24
-rw-r--r-- 1 root root 24024 2025-10-10 10:30:29.000000000 +0100 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 88
-rw-r--r-- 1 root root  2640 2025-10-10 10:30:29.000000000 +0100 ebt_802_3.ko
-rw-r--r-- 1 root root  3572 2025-10-10 10:30:29.000000000 +0100 ebt_arp.ko
-rw-r--r-- 1 root root  3168 2025-10-10 10:30:29.000000000 +0100 ebt_arpreply.ko
-rw-r--r-- 1 root root  3164 2025-10-10 10:30:29.000000000 +0100 ebt_dnat.ko
-rw-r--r-- 1 root root  3548 2025-10-10 10:30:29.000000000 +0100 ebt_ip.ko
-rw-r--r-- 1 root root  3780 2025-10-10 10:30:29.000000000 +0100 ebt_ip6.ko
-rw-r--r-- 1 root root  4696 2025-10-10 10:30:29.000000000 +0100 ebt_limit.ko
-rw-r--r-- 1 root root  2580 2025-10-10 10:30:29.000000000 +0100 ebt_mark.ko
-rw-r--r-- 1 root root  2512 2025-10-10 10:30:29.000000000 +0100 ebt_mark_m.ko
-rw-r--r-- 1 root root  2448 2025-10-10 10:30:29.000000000 +0100 ebt_pkttype.ko
-rw-r--r-- 1 root root  3036 2025-10-10 10:30:29.000000000 +0100 ebt_redirect.ko
-rw-r--r-- 1 root root  3024 2025-10-10 10:30:29.000000000 +0100 ebt_snat.ko
-rw-r--r-- 1 root root  3804 2025-10-10 10:30:29.000000000 +0100 ebt_stp.ko
-rw-r--r-- 1 root root  2956 2025-10-10 10:30:29.000000000 +0100 ebt_vlan.ko
-rw-r--r-- 1 root root  3108 2025-10-10 10:30:29.000000000 +0100 ebtable_filter.ko
-rw-r--r-- 1 root root  3108 2025-10-10 10:30:29.000000000 +0100 ebtable_nat.ko
-rw-r--r-- 1 root root 16480 2025-10-10 10:30:30.000000000 +0100 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 16692 2025-10-10 10:30:30.000000000 +0100 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:22.000000000 +0100 netfilter
-rw-r--r-- 1 root root 14636 2025-10-10 10:30:30.000000000 +0100 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 68
-rw-r--r-- 1 root root 15492 2025-10-10 10:30:30.000000000 +0100 ip_tables.ko
-rw-r--r-- 1 root root  3672 2025-10-10 10:30:30.000000000 +0100 ipt_REJECT.ko
-rw-r--r-- 1 root root  3756 2025-10-10 10:30:30.000000000 +0100 iptable_filter.ko
-rw-r--r-- 1 root root  3852 2025-10-10 10:30:30.000000000 +0100 iptable_mangle.ko
-rw-r--r-- 1 root root  3520 2025-10-10 10:30:30.000000000 +0100 iptable_nat.ko
-rw-r--r-- 1 root root  4088 2025-10-10 10:30:30.000000000 +0100 iptable_raw.ko
-rw-r--r-- 1 root root  3436 2025-10-10 10:30:30.000000000 +0100 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root  9284 2025-10-10 10:30:30.000000000 +0100 nf_nat_h323.ko
-rw-r--r-- 1 root root  4956 2025-10-10 10:30:30.000000000 +0100 nf_nat_pptp.ko
-rw-r--r-- 1 root root  4364 2025-10-10 10:30:30.000000000 +0100 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 36
-rw-r--r-- 1 root root  8872 2025-10-10 10:30:30.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root 12292 2025-10-10 10:30:30.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root  3552 2025-10-10 10:30:30.000000000 +0100 ip6_udp_tunnel.ko
drwxr-xr-x 2 root root  4096 2025-10-10 10:52:22.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 56
-rw-r--r-- 1 root root 15792 2025-10-10 10:30:30.000000000 +0100 ip6_tables.ko
-rw-r--r-- 1 root root  3920 2025-10-10 10:30:31.000000000 +0100 ip6t_NPT.ko
-rw-r--r-- 1 root root  3744 2025-10-10 10:30:31.000000000 +0100 ip6t_REJECT.ko
-rw-r--r-- 1 root root  2884 2025-10-10 10:30:31.000000000 +0100 ip6t_eui64.ko
-rw-r--r-- 1 root root  3148 2025-10-10 10:30:31.000000000 +0100 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  3760 2025-10-10 10:30:31.000000000 +0100 ip6table_filter.ko
-rw-r--r-- 1 root root  4088 2025-10-10 10:30:31.000000000 +0100 ip6table_mangle.ko
-rw-r--r-- 1 root root  3524 2025-10-10 10:30:31.000000000 +0100 ip6table_nat.ko
-rw-r--r-- 1 root root  4092 2025-10-10 10:30:31.000000000 +0100 ip6table_raw.ko
-rw-r--r-- 1 root root  5136 2025-10-10 10:30:31.000000000 +0100 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 400
-rw-r--r-- 1 root root  9884 2025-10-10 10:30:31.000000000 +0100 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root 40468 2025-10-10 10:30:32.000000000 +0100 nf_conntrack_h323.ko
-rw-r--r-- 1 root root  8108 2025-10-10 10:30:32.000000000 +0100 nf_conntrack_irc.ko
-rw-r--r-- 1 root root 25612 2025-10-10 10:30:32.000000000 +0100 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root  7520 2025-10-10 10:30:32.000000000 +0100 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root  8084 2025-10-10 10:30:32.000000000 +0100 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root 26700 2025-10-10 10:30:32.000000000 +0100 nf_conntrack_sip.ko
-rw-r--r-- 1 root root  6796 2025-10-10 10:30:32.000000000 +0100 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root 28916 2025-10-10 10:30:32.000000000 +0100 nf_nat.ko
-rw-r--r-- 1 root root  4460 2025-10-10 10:30:32.000000000 +0100 nf_nat_ftp.ko
-rw-r--r-- 1 root root  4104 2025-10-10 10:30:32.000000000 +0100 nf_nat_irc.ko
-rw-r--r-- 1 root root  7544 2025-10-10 10:30:32.000000000 +0100 nf_nat_rtsp.ko
-rw-r--r-- 1 root root 11772 2025-10-10 10:30:32.000000000 +0100 nf_nat_sip.ko
-rw-r--r-- 1 root root  3028 2025-10-10 10:30:32.000000000 +0100 nf_nat_tftp.ko
-rw-r--r-- 1 root root  8404 2025-10-10 10:30:32.000000000 +0100 nfnetlink.ko
-rw-r--r-- 1 root root 24068 2025-10-10 10:30:32.000000000 +0100 x_tables.ko
-rw-r--r-- 1 root root  6048 2025-10-10 10:30:32.000000000 +0100 xt_CT.ko
-rw-r--r-- 1 root root  3964 2025-10-10 10:30:32.000000000 +0100 xt_DSCP.ko
-rw-r--r-- 1 root root  3404 2025-10-10 10:30:32.000000000 +0100 xt_HL.ko
-rw-r--r-- 1 root root  3380 2025-10-10 10:30:33.000000000 +0100 xt_MASQUERADE.ko
-rw-r--r-- 1 root root  3768 2025-10-10 10:30:33.000000000 +0100 xt_NETMAP.ko
-rw-r--r-- 1 root root  3100 2025-10-10 10:30:33.000000000 +0100 xt_REDIRECT.ko
-rw-r--r-- 1 root root  6144 2025-10-10 10:30:33.000000000 +0100 xt_TCPMSS.ko
-rw-r--r-- 1 root root  5140 2025-10-10 10:30:33.000000000 +0100 xt_addrtype.ko
-rw-r--r-- 1 root root  4212 2025-10-10 10:30:33.000000000 +0100 xt_connbytes.ko
-rw-r--r-- 1 root root  4312 2025-10-10 10:30:33.000000000 +0100 xt_connmark.ko
-rw-r--r-- 1 root root  4948 2025-10-10 10:30:33.000000000 +0100 xt_conntrack.ko
-rw-r--r-- 1 root root  2988 2025-10-10 10:30:33.000000000 +0100 xt_dscp.ko
-rw-r--r-- 1 root root 16184 2025-10-10 10:30:33.000000000 +0100 xt_hashlimit.ko
-rw-r--r-- 1 root root  3404 2025-10-10 10:30:33.000000000 +0100 xt_helper.ko
-rw-r--r-- 1 root root  2812 2025-10-10 10:30:33.000000000 +0100 xt_hl.ko
-rw-r--r-- 1 root root  2748 2025-10-10 10:30:33.000000000 +0100 xt_length.ko
-rw-r--r-- 1 root root  2600 2025-10-10 10:30:33.000000000 +0100 xt_mac.ko
-rw-r--r-- 1 root root  2912 2025-10-10 10:30:33.000000000 +0100 xt_mark.ko
-rw-r--r-- 1 root root  3384 2025-10-10 10:30:33.000000000 +0100 xt_multiport.ko
-rw-r--r-- 1 root root  5064 2025-10-10 10:30:33.000000000 +0100 xt_nat.ko
-rw-r--r-- 1 root root  3948 2025-10-10 10:30:33.000000000 +0100 xt_physdev.ko
-rw-r--r-- 1 root root  4456 2025-10-10 10:30:33.000000000 +0100 xt_policy.ko
-rw-r--r-- 1 root root  2504 2025-10-10 10:30:33.000000000 +0100 xt_realm.ko
-rw-r--r-- 1 root root  3048 2025-10-10 10:30:33.000000000 +0100 xt_statistic.ko
-rw-r--r-- 1 root root  2920 2025-10-10 10:30:34.000000000 +0100 xt_string.ko
-rw-r--r-- 1 root root  3112 2025-10-10 10:30:34.000000000 +0100 xt_tcpmss.ko
-rw-r--r-- 1 root root  3968 2025-10-10 10:30:34.000000000 +0100 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/sched:
total 84
-rw-r--r-- 1 root root 28280 2025-10-10 10:30:34.000000000 +0100 sch_cake.ko
-rw-r--r-- 1 root root  7420 2025-10-10 10:30:34.000000000 +0100 sch_codel.ko
-rw-r--r-- 1 root root 10028 2025-10-10 10:30:34.000000000 +0100 sch_fq_codel.ko
-rw-r--r-- 1 root root 24044 2025-10-10 10:30:34.000000000 +0100 sch_htb.ko
-rw-r--r-- 1 root root  8816 2025-10-10 10:30:34.000000000 +0100 sch_red.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 7012 2025-10-10 10:30:34.000000000 +0100 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 176
-rw-r--r-- 1 root root 10368 2025-10-10 10:28:16.000000000 +0100 btest.ko
-rw-r--r-- 1 root root  1984 2025-10-10 10:33:02.000000000 +0100 c2glue.ko
-rw-r--r-- 1 root root 44944 2025-10-10 10:28:48.000000000 +0100 flash.ko
-rw-r--r-- 1 root root  5408 2025-10-10 10:31:45.000000000 +0100 jiffies.ko
-rw-r--r-- 1 root root  3000 2025-10-10 10:30:58.000000000 +0100 ledgroup.ko
-rw-r--r-- 1 root root 11092 2025-10-10 10:28:12.000000000 +0100 logring.ko
-rw-r--r-- 1 root root 22056 2025-10-10 10:28:54.000000000 +0100 mesh.ko
-rw-r--r-- 1 root root  5816 2025-10-10 10:28:09.000000000 +0100 panics.ko
-rw-r--r-- 1 root root  7700 2025-10-10 10:31:45.000000000 +0100 rb.ko
-rw-r--r-- 1 root root  5688 2025-10-10 10:31:55.000000000 +0100 romon.ko
-rw-r--r-- 1 root root  5240 2025-10-10 10:28:50.000000000 +0100 snif.ko
-rw-r--r-- 1 root root 24964 2025-10-10 10:31:56.000000000 +0100 traffic_gen.ko
-rw-r--r-- 1 root root  6424 2025-10-10 10:28:46.000000000 +0100 ulog.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2025-10-10 10:52:22.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 sched

/lib/modules/5.6.3/net/bridge:
total 196
-rw-r--r-- 1 root root 170328 2025-10-10 10:32:15.000000000 +0100 bridge2.ko
-rw-r--r-- 1 root root  16456 2025-10-10 10:32:15.000000000 +0100 bridge2_netfilter.ko
-rw-r--r-- 1 root root   2464 2025-10-10 10:28:47.000000000 +0100 ebt_snif.ko
-rw-r--r-- 1 root root   2696 2025-10-10 10:28:43.000000000 +0100 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 24
-rw-r--r-- 1 root root 3260 2025-10-10 10:28:15.000000000 +0100 ipt_SAME.ko
-rw-r--r-- 1 root root 6108 2025-10-10 10:28:17.000000000 +0100 ipt_TARPIT.ko
-rw-r--r-- 1 root root 4060 2025-10-10 10:28:15.000000000 +0100 ipt_psd.ko
-rw-r--r-- 1 root root 2564 2025-10-10 10:28:47.000000000 +0100 ipt_snif.ko
-rw-r--r-- 1 root root 3040 2025-10-10 10:28:43.000000000 +0100 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 60
-rw-r--r-- 1 root root  2028 2025-10-10 10:29:45.000000000 +0100 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  2028 2025-10-10 10:29:46.000000000 +0100 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 10464 2025-10-10 10:29:51.000000000 +0100 xt_ein.ko
-rw-r--r-- 1 root root 12424 2025-10-10 10:28:22.000000000 +0100 xt_layer7.ko
-rw-r--r-- 1 root root 16516 2025-10-10 10:29:51.000000000 +0100 xt_misc.ko
-rw-r--r-- 1 root root  3588 2025-10-10 10:28:36.000000000 +0100 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 76
-rw-r--r-- 1 root root  5156 2025-10-10 10:28:35.000000000 +0100 cls_fw.ko
-rw-r--r-- 1 root root 11488 2025-10-10 10:28:37.000000000 +0100 cls_linear.ko
-rw-r--r-- 1 root root 12596 2025-10-10 10:28:56.000000000 +0100 proto_agr.ko
-rw-r--r-- 1 root root 18524 2025-10-10 10:28:56.000000000 +0100 sch_agr.ko
-rw-r--r-- 1 root root 10312 2025-10-10 10:28:20.000000000 +0100 sch_pcq.ko
-rw-r--r-- 1 root root  8000 2025-10-10 10:31:52.000000000 +0100 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2025-10-10 10:52:22.000000000 +0100 bin
drwxr-xr-x 11 root root 4096 2025-10-10 10:52:22.000000000 +0100 etc
drwxr-xr-x  5 root root 4096 2025-10-10 10:52:22.000000000 +0100 lib
lrwxrwxrwx  1 root root    8 2025-10-10 10:52:22.000000000 +0100 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2025-10-10 10:52:22.000000000 +0100 store -> /rw/store

/nova/bin:
total 8888
-rwxr-xr-x 1 root root   24232 2025-10-10 09:53:25.000000000 +0100 agent
-rwxr-xr-x 1 root root   13032 2025-10-10 09:53:23.000000000 +0100 arpd
-rwxr-xr-x 1 root root   18208 2025-10-10 09:55:44.000000000 +0100 backup
-rwxr-xr-x 1 root root  277132 2025-10-10 09:58:40.000000000 +0100 bridge2
-rwxr-xr-x 1 root root   76672 2025-10-10 09:56:09.000000000 +0100 btest
-rwxr-xr-x 1 root root 1024724 2025-10-10 09:57:37.000000000 +0100 cerm
lrwxrwxrwx 1 root root       4 2025-10-10 09:57:44.000000000 +0100 cerm-worker -> cerm
-rwxr-xr-x 1 root root  174600 2025-10-10 09:57:24.000000000 +0100 cloud
-rwxr-xr-x 1 root root   96192 2025-10-10 09:55:33.000000000 +0100 crossfig
-rwxr-xr-x 1 root root   66108 2025-10-10 09:56:31.000000000 +0100 detnet
-rwxr-xr-x 1 root root   84324 2025-10-10 09:54:11.000000000 +0100 discover
-rwxr-xr-x 1 root root   40448 2025-10-10 09:55:52.000000000 +0100 email
-rwxr-xr-x 1 root root  150108 2025-10-10 09:58:02.000000000 +0100 fileman
-rwxr-xr-x 1 root root   34884 2025-10-10 09:53:27.000000000 +0100 ftpd
-rwxr-xr-x 1 root root  157536 2025-10-10 09:54:23.000000000 +0100 graphing
-rwxr-xr-x 1 root root    4440 2025-10-10 09:56:43.000000000 +0100 havecardbus
-rwxr-xr-x 1 root root   64576 2025-10-10 09:55:29.000000000 +0100 igmpproxy
-rwxr-xr-x 1 root root   83984 2025-10-10 09:56:46.000000000 +0100 installer
-rwxr-xr-x 1 root root   30544 2025-10-10 09:57:29.000000000 +0100 ippool
-rwxr-xr-x 1 root root   55392 2025-10-10 09:56:01.000000000 +0100 keyman
-rwxr-xr-x 1 root root   48192 2025-10-10 09:54:13.000000000 +0100 kidcontrol
-rwxr-xr-x 1 root root   70556 2025-10-10 09:56:36.000000000 +0100 led
-rwxr-xr-x 1 root root  121712 2025-10-10 09:57:21.000000000 +0100 letsencrypt
-rwxr-xr-x 1 root root   85020 2025-10-10 09:56:46.000000000 +0100 loader
-rwxr-xr-x 1 root root   88416 2025-10-10 09:53:34.000000000 +0100 log
-rwxr-xr-x 1 root root  170864 2025-10-10 09:59:23.000000000 +0100 login
-rwxr-xr-x 1 root root   56540 2025-10-10 09:53:28.000000000 +0100 logmaker
-rwxr-xr-x 1 root root   22844 2025-10-10 09:53:25.000000000 +0100 macping
-rwxr-xr-x 1 root root   37864 2025-10-10 09:55:53.000000000 +0100 mactel
-rwxr-xr-x 1 root root   23448 2025-10-10 09:53:26.000000000 +0100 mepty
-rwxr-xr-x 1 root root   85708 2025-10-10 09:54:16.000000000 +0100 mesh
-rwxr-xr-x 1 root root   68776 2025-10-10 09:58:56.000000000 +0100 mode
lrwxrwxrwx 1 root root       7 2025-10-10 09:57:29.000000000 +0100 modprobed -> moduler
-rwxr-xr-x 1 root root  115084 2025-10-10 09:57:20.000000000 +0100 moduler
-rwxr-xr-x 1 root root   80680 2025-10-10 09:58:21.000000000 +0100 mproxy
-rwxr-xr-x 1 root root   61428 2025-10-10 09:55:58.000000000 +0100 mtget
-rwxr-xr-x 1 root root   49264 2025-10-10 09:54:16.000000000 +0100 natpmp
-rwxr-xr-x 1 root root  818804 2025-10-10 10:01:19.000000000 +0100 net
-rwxr-xr-x 1 root root   71904 2025-10-10 09:56:35.000000000 +0100 ntp
-rwxr-xr-x 1 root root    6152 2025-10-10 09:53:21.000000000 +0100 panicsl
-rwxr-xr-x 1 root root  799512 2025-10-10 09:59:48.000000000 +0100 parser
-rwxr-xr-x 1 root root   40804 2025-10-10 09:53:28.000000000 +0100 ping
-rwxr-xr-x 1 root root   49612 2025-10-10 09:57:09.000000000 +0100 portman
-rwxr-xr-x 1 root root   33832 2025-10-10 10:33:42.000000000 +0100 profiler
-rwxr-xr-x 1 root root  153996 2025-10-10 09:53:34.000000000 +0100 quickset
-rwxr-xr-x 1 root root   57252 2025-10-10 09:57:39.000000000 +0100 radius
-rwxr-xr-x 1 root root  164444 2025-10-10 09:57:28.000000000 +0100 resolver
-rwxr-xr-x 1 root root   10224 2025-10-10 09:56:44.000000000 +0100 resolver_ctl
-rwxr-xr-x 1 root root   96716 2025-10-10 09:56:50.000000000 +0100 romon
-rwxr-xr-x 1 root root 1241260 2025-10-10 10:02:26.000000000 +0100 route
-rwxr-xr-x 1 root root   16664 2025-10-10 09:56:17.000000000 +0100 rtrace
-rwxr-xr-x 1 root root   43364 2025-10-10 09:57:11.000000000 +0100 sermgr
-rwxr-xr-x 1 root root   36080 2025-10-10 09:53:48.000000000 +0100 sertcp
-rwxr-xr-x 1 root root   72716 2025-10-10 09:53:59.000000000 +0100 sniffer
-rwxr-xr-x 1 root root  211992 2025-10-10 09:58:40.000000000 +0100 snmp
-rwxr-xr-x 1 root root   66772 2025-10-10 09:54:14.000000000 +0100 socks
-rwxr-xr-x 1 root root   37208 2025-10-10 09:54:10.000000000 +0100 socksify
-rwxr-xr-x 1 root root  129344 2025-10-10 09:58:08.000000000 +0100 ssld
-rwxr-xr-x 1 root root   30492 2025-10-10 09:55:55.000000000 +0100 sstore
-rwxr-xr-x 1 root root  237376 2025-10-10 09:59:38.000000000 +0100 sys2
-rwxr-xr-x 1 root root   20904 2025-10-10 09:53:26.000000000 +0100 telnet
-rwxr-xr-x 1 root root   30672 2025-10-10 09:53:27.000000000 +0100 telser
-rwxr-xr-x 1 root root   37572 2025-10-10 09:53:55.000000000 +0100 tftpd
-rwxr-xr-x 1 root root   29188 2025-10-10 09:53:25.000000000 +0100 traceroute
-rwxr-xr-x 1 root root  110128 2025-10-10 09:54:10.000000000 +0100 trafficgen
-rwxr-xr-x 1 root root   23416 2025-10-10 09:53:44.000000000 +0100 trafflow
-rwxr-xr-x 1 root root   24384 2025-10-10 09:53:24.000000000 +0100 undo
-rwxr-xr-x 1 root root  100652 2025-10-10 09:54:18.000000000 +0100 upnp
-rwxr-xr-x 1 root root   84464 2025-10-10 09:57:15.000000000 +0100 user
-rwxr-xr-x 1 root root   98844 2025-10-10 09:56:25.000000000 +0100 vrrp
-rwxr-xr-x 1 root root   30720 2025-10-10 09:53:59.000000000 +0100 watchdog
-rwxr-xr-x 1 root root  154528 2025-10-10 09:57:01.000000000 +0100 wproxy
-rwxr-xr-x 1 root root  130308 2025-10-10 09:58:12.000000000 +0100 www

/nova/etc:
total 52
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 leds
-rwxr-xr-x 1 root root 1279 2025-10-10 09:48:29.000000000 +0100 lognames
-rwxr-xr-x 1 root root   10 2025-10-10 09:48:29.000000000 +0100 logo
-rwxr-xr-x 1 root root    1 2025-10-10 09:48:29.000000000 +0100 manual-url
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 pciinfo
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 services
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 system_names
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 upnp
-rwxr-xr-x 1 root root   26 2025-10-10 09:48:29.000000000 +0100 url
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 user
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 www

/nova/etc/leds:
total 4
-rwxr-xr-x 1 root root 12 2025-10-10 09:52:35.000000000 +0100 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2025-10-10 09:52:35.000000000 +0100 system.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 762 2025-10-10 09:52:34.000000000 +0100 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 101 2025-10-10 09:52:35.000000000 +0100 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 992 2025-10-10 09:52:34.000000000 +0100 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2025-10-10 09:52:34.000000000 +0100 system.x3

/nova/etc/upnp:
total 40
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
-rwxr-xr-x 1 root root 2458 2025-10-10 09:52:35.000000000 +0100 system.x3

/nova/lib:
total 16
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 defconf
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 profiler
-rwxr-xr-x 1 root root 4085 2025-10-10 09:48:30.000000000 +0100 xmlnames2

/nova/lib/console:
total 1672
-rwxr-xr-x 1 root root 1700154 2025-10-10 10:00:27.000000000 +0100 1073741824.mem
-rwxr-xr-x 1 root root     510 2025-10-10 09:48:29.000000000 +0100 logo.txt
-rwxr-xr-x 1 root root      18 2025-10-10 09:48:29.000000000 +0100 sublogo.txt

/nova/lib/defconf:
total 100
-rwxr-xr-x 1 root root   567 2025-10-10 09:48:29.000000000 +0100 defconf
-rwxr-xr-x 1 root root  4995 2025-10-10 09:48:29.000000000 +0100 defconf-caps
-rwxr-xr-x 1 root root  3700 2025-10-10 09:48:29.000000000 +0100 defconf-wps-sync
-rwxr-xr-x 1 root root 85713 2025-10-10 09:48:29.000000000 +0100 get-custom-defconf

/nova/lib/profiler:
total 16
-rwxr-xr-x 1 root root 15360 2025-10-10 10:33:41.000000000 +0100 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 92
-rwxr-xr-x 1 root root 24844 2025-10-10 09:52:32.000000000 +0100 nandfix
-rwxr-xr-x 1 root root 63624 2025-10-10 09:55:55.000000000 +0100 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2025-10-10 10:52:22.000000000 +0100 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 deinstall
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 lock
lrwxrwxrwx 1 root root    8 2025-10-10 10:52:22.000000000 +0100 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2025-10-10 10:52:22.000000000 +0100 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2025-10-10 10:52:22.000000000 +0100 post
lrwxrwxrwx 1 root root    7 2025-10-10 10:52:22.000000000 +0100 run -> /rw/run
lrwxrwxrwx 1 root root    4 2025-10-10 10:52:22.000000000 +0100 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

