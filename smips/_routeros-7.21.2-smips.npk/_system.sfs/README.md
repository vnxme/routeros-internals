### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 5715168 bytes, 540 inodes, blocksize: 262144 bytes, created: Thu Jan 29 10:57:21 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 bin
drwxr-xr-x 7 root root 4096 2026-01-29 10:57:19.000000000 +0000 bndl
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 boot
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 dev
lrwxrwxrwx 1 root root   11 2026-01-29 10:57:19.000000000 +0000 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 etc
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 flash
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-29 10:57:19.000000000 +0000 nova
lrwxrwxrwx 1 root root    9 2026-01-29 10:57:19.000000000 +0000 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 proc
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 ram
lrwxrwxrwx 1 root root    9 2026-01-29 10:57:19.000000000 +0000 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 sbin
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 sys
lrwxrwxrwx 1 root root    7 2026-01-29 10:57:19.000000000 +0000 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2026-01-29 10:57:19.000000000 +0000 var

/bin:
total 28
lrwxrwxrwx 1 root root    21 2026-01-29 10:57:19.000000000 +0000 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root 18080 2026-01-29 10:02:53.000000000 +0000 catlog
lrwxrwxrwx 1 root root    15 2026-01-29 10:57:19.000000000 +0000 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root    15 2026-01-29 10:57:19.000000000 +0000 login -> /nova/bin/login
-rwxr-xr-x 1 root root  7512 2026-01-29 10:02:57.000000000 +0000 pakp
lrwxrwxrwx 1 root root    21 2026-01-29 10:57:19.000000000 +0000 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root    15 2026-01-29 10:57:19.000000000 +0000 shell -> /nova/bin/login

/bndl:
total 20
drwxr-xr-x 4 root root 4096 2026-01-29 10:57:19.000000000 +0000 advanced-tools
drwxr-xr-x 5 root root 4096 2026-01-29 10:57:19.000000000 +0000 dhcp
drwxr-xr-x 4 root root 4096 2026-01-29 10:57:19.000000000 +0000 ipv6
drwxr-xr-x 5 root root 4096 2026-01-29 10:57:19.000000000 +0000 ppp
drwxr-xr-x 5 root root 4096 2026-01-29 10:57:19.000000000 +0000 security

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2026-01-29 10:57:19.000000000 +0000 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 webfig

/bndl/advanced-tools/home/web/webfig:
total 8
-rw-r--r-- 1 root root 2407 2026-01-29 10:45:35.000000000 +0000 advtool-990a874d6308.jg.gz
-rwxr-xr-x 1 root root  106 2026-01-29 10:45:36.000000000 +0000 advtool.info
lrwxrwxrwx 1 root root   26 2026-01-29 10:45:36.000000000 +0000 advtool.jg.gz -> advtool-990a874d6308.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 lib

/bndl/advanced-tools/nova/bin:
total 204
-rwxr-xr-x 1 root root 31520 2026-01-29 10:45:09.000000000 +0000 ddns
-rwxr-xr-x 1 root root 15004 2026-01-29 10:44:45.000000000 +0000 fping
-rwxr-xr-x 1 root root 18072 2026-01-29 10:45:24.000000000 +0000 macscan
-rwxr-xr-x 1 root root 68596 2026-01-29 10:47:10.000000000 +0000 netwatch
-rwxr-xr-x 1 root root 16540 2026-01-29 10:44:53.000000000 +0000 pspeed
-rwxr-xr-x 1 root root 34812 2026-01-29 10:45:41.000000000 +0000 scanner
-rwxr-xr-x 1 root root 12008 2026-01-29 10:45:44.000000000 +0000 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 console

/bndl/advanced-tools/nova/lib/console:
total 28
-rwxr-xr-x 1 root root 26059 2026-01-29 10:45:14.000000000 +0000 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 home
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2026-01-29 10:57:19.000000000 +0000 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 webfig

/bndl/dhcp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4979 2026-01-29 10:45:59.000000000 +0000 dhcp-56fe4f79ab54.jg.gz
-rwxr-xr-x 1 root root  101 2026-01-29 10:45:59.000000000 +0000 dhcp.info
lrwxrwxrwx 1 root root   23 2026-01-29 10:45:59.000000000 +0000 dhcp.jg.gz -> dhcp-56fe4f79ab54.jg.gz

/bndl/dhcp/lib:
total 112
-rwxr-xr-x 1 root root 112188 2026-01-29 10:45:26.000000000 +0000 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 lib

/bndl/dhcp/nova/bin:
total 336
-rwxr-xr-x 1 root root 236492 2026-01-29 10:48:40.000000000 +0000 dhcp
-rwxr-xr-x 1 root root 105052 2026-01-29 10:47:19.000000000 +0000 dhcpclient

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 console

/bndl/dhcp/nova/lib/console:
total 120
-rwxr-xr-x 1 root root 120952 2026-01-29 10:45:41.000000000 +0000 1128267776.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2026-01-29 10:57:19.000000000 +0000 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 webfig

/bndl/ipv6/home/web/webfig:
total 16
-rw-r--r-- 1 root root 8293 2026-01-29 10:45:54.000000000 +0000 ipv6-fec458ac8beb.jg.gz
-rwxr-xr-x 1 root root  101 2026-01-29 10:45:54.000000000 +0000 ipv6.info
lrwxrwxrwx 1 root root   23 2026-01-29 10:45:54.000000000 +0000 ipv6.jg.gz -> ipv6-fec458ac8beb.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2026-01-29 10:57:19.000000000 +0000 lib

/bndl/ipv6/nova/bin:
total 96
-rwxr-xr-x 1 root root 30576 2026-01-29 10:46:10.000000000 +0000 ippool6
-rwxr-xr-x 1 root root 64524 2026-01-29 10:45:23.000000000 +0000 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 route

/bndl/ipv6/nova/lib/console:
total 188
-rwxr-xr-x 1 root root 188460 2026-01-29 10:45:39.000000000 +0000 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2025-12-04 12:00:20.000000000 +0000 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-29 10:57:19.000000000 +0000 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 webfig

/bndl/ppp/home/web/webfig:
total 12
-rw-r--r-- 1 root root 6646 2026-01-29 10:46:33.000000000 +0000 ppp-3833e10a898f.jg.gz
-rwxr-xr-x 1 root root   99 2026-01-29 10:46:33.000000000 +0000 ppp.info
lrwxrwxrwx 1 root root   22 2026-01-29 10:46:34.000000000 +0000 ppp.jg.gz -> ppp-3833e10a898f.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2026-01-29 10:57:19.000000000 +0000 5.6.3

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 misc
-rw-r--r-- 1 root root  278 2026-01-29 10:54:37.000000000 +0000 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 104
-rw-r--r-- 1 root root 11412 2026-01-29 10:39:00.000000000 +0000 ppp_async.ko
-rw-r--r-- 1 root root  6784 2026-01-29 10:39:00.000000000 +0000 ppp_deflate.ko
-rw-r--r-- 1 root root 33612 2026-01-29 10:39:00.000000000 +0000 ppp_generic.ko
-rw-r--r-- 1 root root  8732 2026-01-29 10:39:00.000000000 +0000 ppp_mppe.ko
-rw-r--r-- 1 root root  9524 2026-01-29 10:39:00.000000000 +0000 ppp_synctty.ko
-rw-r--r-- 1 root root 12784 2026-01-29 10:39:00.000000000 +0000 pppoe.ko
-rw-r--r-- 1 root root  4284 2026-01-29 10:39:00.000000000 +0000 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 92
-rw-r--r-- 1 root root 36424 2026-01-29 10:47:10.000000000 +0000 ovpn.ko
-rw-r--r-- 1 root root  6204 2026-01-29 10:47:47.000000000 +0000 pppoefp.ko
-rw-r--r-- 1 root root 48436 2026-01-29 10:48:16.000000000 +0000 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 60
-rw-r--r-- 1 root root 48944 2026-01-29 10:46:01.000000000 +0000 l2tp.ko
-rw-r--r-- 1 root root 10180 2026-01-29 10:45:28.000000000 +0000 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2026-01-29 10:57:19.000000000 +0000 etc
drwxr-xr-x 4 root root 4096 2026-01-29 10:57:19.000000000 +0000 lib

/bndl/ppp/nova/bin:
total 640
-rwxr-xr-x 1 root root 651720 2026-01-29 10:53:35.000000000 +0000 ppp
lrwxrwxrwx 1 root root      3 2026-01-29 10:54:17.000000000 +0000 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2026-01-29 10:45:56.000000000 +0000 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2026-01-29 10:45:56.000000000 +0000 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 profiler

/bndl/ppp/nova/lib/console:
total 152
-rwxr-xr-x 1 root root 154909 2026-01-29 10:46:05.000000000 +0000 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 4
-rwxr-xr-x 1 root root 1940 2026-01-29 10:48:41.000000000 +0000 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-29 10:57:19.000000000 +0000 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 webfig

/bndl/security/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4502 2026-01-29 10:52:38.000000000 +0000 secure-b9984ff4934e.jg.gz
-rwxr-xr-x 1 root root  104 2026-01-29 10:52:38.000000000 +0000 secure.info
lrwxrwxrwx 1 root root   25 2026-01-29 10:52:38.000000000 +0000 secure.jg.gz -> secure-b9984ff4934e.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 5.6.3

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2026-01-29 10:57:19.000000000 +0000 kernel
-rw-r--r-- 1 root root  106 2026-01-29 10:56:59.000000000 +0000 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 crypto
drwxr-xr-x 5 root root 4096 2026-01-29 10:57:19.000000000 +0000 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 88
-rw-r--r-- 1 root root  8352 2026-01-29 10:38:59.000000000 +0000 blowfish_common.ko
-rw-r--r-- 1 root root  6020 2026-01-29 10:38:59.000000000 +0000 blowfish_generic.ko
-rw-r--r-- 1 root root 23348 2026-01-29 10:38:59.000000000 +0000 camellia_generic.ko
-rw-r--r-- 1 root root  8412 2026-01-29 10:38:59.000000000 +0000 chacha20poly1305.ko
-rw-r--r-- 1 root root  3800 2026-01-29 10:38:59.000000000 +0000 echainiv.ko
-rw-r--r-- 1 root root 15832 2026-01-29 10:39:00.000000000 +0000 twofish_common.ko
-rw-r--r-- 1 root root  9988 2026-01-29 10:39:00.000000000 +0000 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 key
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root  8904 2026-01-29 10:39:02.000000000 +0000 ah4.ko
-rw-r--r-- 1 root root 13068 2026-01-29 10:39:02.000000000 +0000 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 36
-rw-r--r-- 1 root root 33820 2026-01-29 10:39:03.000000000 +0000 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 28
-rw-r--r-- 1 root root 26880 2026-01-29 10:39:06.000000000 +0000 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 bin
drwxr-xr-x 4 root root 4096 2026-01-29 10:57:19.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 lib

/bndl/security/nova/bin:
total 788
-rwxr-xr-x 1 root root 569456 2026-01-29 10:55:56.000000000 +0000 ipsec
lrwxrwxrwx 1 root root      5 2026-01-29 10:56:38.000000000 +0000 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 233424 2026-01-29 10:53:47.000000000 +0000 ssh
lrwxrwxrwx 1 root root      3 2026-01-29 10:53:47.000000000 +0000 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2026-01-29 10:50:17.000000000 +0000 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2026-01-29 10:50:17.000000000 +0000 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 console

/bndl/security/nova/lib/console:
total 96
-rwxr-xr-x 1 root root 94476 2026-01-29 10:51:20.000000000 +0000 1077936128.mem

/boot:
total 0

/dev:
total 0

/etc:
total 172
-rw-r--r-- 1 root root 130743 2026-01-14 12:35:05.000000000 +0000 license
-rw-r--r-- 1 root root  43808 2026-01-29 10:00:24.000000000 +0000 qca9531L-7.21.2.fwf
lrwxrwxrwx 1 root root     24 2026-01-29 10:57:19.000000000 +0000 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2026-01-29 10:57:19.000000000 +0000 web

/home/web:
total 64
drwxr-xr-x 2 root root  4096 2026-01-29 10:57:19.000000000 +0000 assets
-rwxr-xr-x 1 root root 19798 2026-01-29 09:59:26.000000000 +0000 bth-files.html
-rwxr-xr-x 1 root root   600 2026-01-14 12:35:05.000000000 +0000 favicon.png
-rwxr-xr-x 1 root root   689 2026-01-14 12:35:05.000000000 +0000 favicon.svg
-rwxr-xr-x 1 root root   708 2026-01-14 12:35:05.000000000 +0000 graph.css
drwxr-xr-x 2 root root  4096 2026-01-29 10:57:19.000000000 +0000 help
-rwxr-xr-x 1 root root  1317 2026-01-14 12:35:05.000000000 +0000 index2.html
lrwxrwxrwx 1 root root    12 2026-01-29 10:44:40.000000000 +0000 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2026-01-14 12:35:05.000000000 +0000 logo.png
-rw-r--r-- 1 root root  2427 2026-01-14 12:35:05.000000000 +0000 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2026-01-14 12:35:05.000000000 +0000 robots.txt
drwxr-xr-x 2 root root  4096 2026-01-29 10:57:19.000000000 +0000 webfig
drwxr-xr-x 2 root root  4096 2026-01-29 10:57:19.000000000 +0000 winbox

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
lrwxrwxrwx 1 root root     26 2026-01-29 10:04:06.000000000 +0000 roteros.jg.gz -> roteros-7bf05b783f0b.jg.gz

/home/web/winbox:
total 0

/lib:
total 1968
-rwxr-xr-x 1 root root 278776 2026-01-29 09:56:07.000000000 +0000 libc.so
-rwxr-xr-x 1 root root  89264 2026-01-29 10:02:30.000000000 +0000 libeap.so
-rwxr-xr-x 1 root root  21840 2026-01-29 09:58:11.000000000 +0000 libjson.so
-rwxr-xr-x 1 root root 185080 2026-01-29 10:00:57.000000000 +0000 librappsup.so
-rwxr-xr-x 1 root root 122652 2026-01-29 09:59:12.000000000 +0000 libubox.so
-rwxr-xr-x 1 root root  76508 2026-01-29 09:58:02.000000000 +0000 libuc++.so
-rwxr-xr-x 1 root root 286984 2026-01-29 10:01:20.000000000 +0000 libucrypto.so
-rwxr-xr-x 1 root root  27668 2026-01-29 09:59:03.000000000 +0000 libufiber.so
-rwxr-xr-x 1 root root  66376 2026-01-29 09:59:11.000000000 +0000 libuhttp.so
-rwxr-xr-x 1 root root 651636 2026-01-29 09:58:41.000000000 +0000 libumsg.so
-rwxr-xr-x 1 root root  37020 2026-01-29 10:01:38.000000000 +0000 liburadius.so
-rwxr-xr-x 1 root root  10544 2026-01-29 10:01:27.000000000 +0000 libuxml++.so
-rwxr-xr-x 1 root root  37252 2026-01-29 09:58:07.000000000 +0000 libwww.so
-rwxr-xr-x 1 root root  13772 2026-01-29 09:58:10.000000000 +0000 libxml.so
-rwxr-xr-x 1 root root  68088 2026-01-29 09:58:12.000000000 +0000 libz.so
drwxr-xr-x 3 root root   4096 2026-01-29 10:57:19.000000000 +0000 modules
lrwxrwxrwx 1 root root     27 2026-01-29 10:57:19.000000000 +0000 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2026-01-29 10:57:19.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 4 root root 4096 2026-01-29 10:57:19.000000000 +0000 drivers
drwxr-xr-x 7 root root 4096 2026-01-29 10:57:19.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 misc
-rw-r--r-- 1 root root 1488 2026-01-29 10:44:36.000000000 +0000 modules.dep.system
drwxr-xr-x 6 root root 4096 2026-01-29 10:57:19.000000000 +0000 net

/lib/modules/5.6.3/drivers:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 char
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 net

/lib/modules/5.6.3/drivers/char:
total 20
-rw-r--r-- 1 root root 4868 2026-01-29 10:36:06.000000000 +0000 ar7100wdt.ko
-rw-r--r-- 1 root root 8784 2026-01-29 10:36:26.000000000 +0000 ticker.ko

/lib/modules/5.6.3/drivers/net:
total 468
-rw-r--r-- 1 root root  39384 2026-01-29 10:36:40.000000000 +0000 ag7240.ko
-rw-r--r-- 1 root root  26912 2026-01-29 10:38:59.000000000 +0000 aths16.ko
-rw-r--r-- 1 root root  10680 2026-01-29 10:40:34.000000000 +0000 imq.ko
-rw-r--r-- 1 root root 175532 2026-01-29 10:42:22.000000000 +0000 packet_hook.ko
-rw-r--r-- 1 root root  91068 2026-01-29 10:37:48.000000000 +0000 phy_helper.ko
-rw-r--r-- 1 root root   3376 2026-01-29 10:40:42.000000000 +0000 sram.ko
-rw-r--r-- 1 root root  58188 2026-01-29 10:39:03.000000000 +0000 switch.ko
-rw-r--r-- 1 root root  58600 2026-01-29 10:42:16.000000000 +0000 vxlan2.ko

/lib/modules/5.6.3/kernel:
total 20
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 arch
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 crypto
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 drivers
drwxr-xr-x 5 root root 4096 2026-01-29 10:57:19.000000000 +0000 lib
drwxr-xr-x 9 root root 4096 2026-01-29 10:57:19.000000000 +0000 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 4 root root 4096 2026-01-29 10:57:19.000000000 +0000 mips

/lib/modules/5.6.3/kernel/arch/mips:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 crypto
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 oprofile

/lib/modules/5.6.3/kernel/arch/mips/crypto:
total 16
-rw-r--r-- 1 root root 7964 2026-01-29 10:38:59.000000000 +0000 chacha-mips.ko
-rw-r--r-- 1 root root 5888 2026-01-29 10:38:59.000000000 +0000 poly1305-mips.ko

/lib/modules/5.6.3/kernel/arch/mips/oprofile:
total 36
-rw-r--r-- 1 root root 34056 2026-01-29 10:38:59.000000000 +0000 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 24
-rw-r--r-- 1 root root  3068 2026-01-29 10:38:59.000000000 +0000 arc4.ko
-rw-r--r-- 1 root root  3820 2026-01-29 10:38:59.000000000 +0000 des_generic.ko
-rw-r--r-- 1 root root  3992 2026-01-29 10:38:59.000000000 +0000 sha1_generic.ko
-rw-r--r-- 1 root root 10000 2026-01-29 10:38:59.000000000 +0000 sha512_generic.ko

/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 5 root root 4096 2026-01-29 10:57:19.000000000 +0000 net

/lib/modules/5.6.3/kernel/drivers/net:
total 52
drwxr-xr-x 2 root root  4096 2026-01-29 10:57:19.000000000 +0000 bonding
-rw-r--r-- 1 root root 19192 2026-01-29 10:39:00.000000000 +0000 macvlan.ko
drwxr-xr-x 2 root root  4096 2026-01-29 10:57:19.000000000 +0000 slip
-rw-r--r-- 1 root root 18308 2026-01-29 10:39:00.000000000 +0000 vrf.ko
drwxr-xr-x 2 root root  4096 2026-01-29 10:57:19.000000000 +0000 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 132
-rw-r--r-- 1 root root 132148 2026-01-29 10:39:00.000000000 +0000 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6052 2026-01-29 10:39:00.000000000 +0000 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 80
-rw-r--r-- 1 root root 80368 2026-01-29 10:39:00.000000000 +0000 wireguard.ko

/lib/modules/5.6.3/kernel/lib:
total 24
-rw-r--r-- 1 root root 3340 2026-01-29 10:39:00.000000000 +0000 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 crypto
-rw-r--r-- 1 root root 3492 2026-01-29 10:39:01.000000000 +0000 ts_bm.ko
-rw-r--r-- 1 root root 3324 2026-01-29 10:39:01.000000000 +0000 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 zlib_deflate
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 64
-rw-r--r-- 1 root root  2304 2026-01-29 10:39:00.000000000 +0000 libarc4.ko
-rw-r--r-- 1 root root  7468 2026-01-29 10:39:00.000000000 +0000 libblake2s-generic.ko
-rw-r--r-- 1 root root  3732 2026-01-29 10:39:01.000000000 +0000 libblake2s.ko
-rw-r--r-- 1 root root  7040 2026-01-29 10:39:01.000000000 +0000 libchacha20poly1305.ko
-rw-r--r-- 1 root root 11708 2026-01-29 10:39:01.000000000 +0000 libcurve25519-generic.ko
-rw-r--r-- 1 root root  1992 2026-01-29 10:39:01.000000000 +0000 libcurve25519.ko
-rw-r--r-- 1 root root 20668 2026-01-29 10:39:01.000000000 +0000 libdes.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18368 2026-01-29 10:39:01.000000000 +0000 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14908 2026-01-29 10:39:01.000000000 +0000 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 28
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 8021q
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 ipv4
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 ipv6
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 sched
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 xfrm

/lib/modules/5.6.3/kernel/net/8021q:
total 24
-rw-r--r-- 1 root root 24128 2026-01-29 10:39:01.000000000 +0000 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 88
-rw-r--r-- 1 root root  2640 2026-01-29 10:39:01.000000000 +0000 ebt_802_3.ko
-rw-r--r-- 1 root root  3572 2026-01-29 10:39:01.000000000 +0000 ebt_arp.ko
-rw-r--r-- 1 root root  3168 2026-01-29 10:39:01.000000000 +0000 ebt_arpreply.ko
-rw-r--r-- 1 root root  3164 2026-01-29 10:39:01.000000000 +0000 ebt_dnat.ko
-rw-r--r-- 1 root root  3548 2026-01-29 10:39:01.000000000 +0000 ebt_ip.ko
-rw-r--r-- 1 root root  3780 2026-01-29 10:39:01.000000000 +0000 ebt_ip6.ko
-rw-r--r-- 1 root root  4696 2026-01-29 10:39:01.000000000 +0000 ebt_limit.ko
-rw-r--r-- 1 root root  2580 2026-01-29 10:39:01.000000000 +0000 ebt_mark.ko
-rw-r--r-- 1 root root  2512 2026-01-29 10:39:01.000000000 +0000 ebt_mark_m.ko
-rw-r--r-- 1 root root  2448 2026-01-29 10:39:01.000000000 +0000 ebt_pkttype.ko
-rw-r--r-- 1 root root  3036 2026-01-29 10:39:01.000000000 +0000 ebt_redirect.ko
-rw-r--r-- 1 root root  3024 2026-01-29 10:39:01.000000000 +0000 ebt_snat.ko
-rw-r--r-- 1 root root  3804 2026-01-29 10:39:02.000000000 +0000 ebt_stp.ko
-rw-r--r-- 1 root root  2956 2026-01-29 10:39:02.000000000 +0000 ebt_vlan.ko
-rw-r--r-- 1 root root  3108 2026-01-29 10:39:02.000000000 +0000 ebtable_filter.ko
-rw-r--r-- 1 root root  3108 2026-01-29 10:39:02.000000000 +0000 ebtable_nat.ko
-rw-r--r-- 1 root root 16480 2026-01-29 10:39:02.000000000 +0000 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 16692 2026-01-29 10:39:02.000000000 +0000 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2026-01-29 10:57:19.000000000 +0000 netfilter
-rw-r--r-- 1 root root 14636 2026-01-29 10:39:02.000000000 +0000 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 68
-rw-r--r-- 1 root root 15492 2026-01-29 10:39:02.000000000 +0000 ip_tables.ko
-rw-r--r-- 1 root root  3672 2026-01-29 10:39:02.000000000 +0000 ipt_REJECT.ko
-rw-r--r-- 1 root root  3756 2026-01-29 10:39:02.000000000 +0000 iptable_filter.ko
-rw-r--r-- 1 root root  3852 2026-01-29 10:39:02.000000000 +0000 iptable_mangle.ko
-rw-r--r-- 1 root root  3520 2026-01-29 10:39:02.000000000 +0000 iptable_nat.ko
-rw-r--r-- 1 root root  4088 2026-01-29 10:39:02.000000000 +0000 iptable_raw.ko
-rw-r--r-- 1 root root  3436 2026-01-29 10:39:02.000000000 +0000 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root  9284 2026-01-29 10:39:02.000000000 +0000 nf_nat_h323.ko
-rw-r--r-- 1 root root  4956 2026-01-29 10:39:02.000000000 +0000 nf_nat_pptp.ko
-rw-r--r-- 1 root root  4364 2026-01-29 10:39:02.000000000 +0000 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 36
-rw-r--r-- 1 root root  8872 2026-01-29 10:39:02.000000000 +0000 ah6.ko
-rw-r--r-- 1 root root 12292 2026-01-29 10:39:02.000000000 +0000 esp6.ko
-rw-r--r-- 1 root root  3552 2026-01-29 10:39:03.000000000 +0000 ip6_udp_tunnel.ko
drwxr-xr-x 2 root root  4096 2026-01-29 10:57:19.000000000 +0000 netfilter

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 56
-rw-r--r-- 1 root root 15792 2026-01-29 10:39:03.000000000 +0000 ip6_tables.ko
-rw-r--r-- 1 root root  3920 2026-01-29 10:39:03.000000000 +0000 ip6t_NPT.ko
-rw-r--r-- 1 root root  3744 2026-01-29 10:39:03.000000000 +0000 ip6t_REJECT.ko
-rw-r--r-- 1 root root  2884 2026-01-29 10:39:03.000000000 +0000 ip6t_eui64.ko
-rw-r--r-- 1 root root  3148 2026-01-29 10:39:03.000000000 +0000 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  3760 2026-01-29 10:39:03.000000000 +0000 ip6table_filter.ko
-rw-r--r-- 1 root root  4088 2026-01-29 10:39:03.000000000 +0000 ip6table_mangle.ko
-rw-r--r-- 1 root root  3524 2026-01-29 10:39:03.000000000 +0000 ip6table_nat.ko
-rw-r--r-- 1 root root  4092 2026-01-29 10:39:03.000000000 +0000 ip6table_raw.ko
-rw-r--r-- 1 root root  5136 2026-01-29 10:39:03.000000000 +0000 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 400
-rw-r--r-- 1 root root  9884 2026-01-29 10:39:03.000000000 +0000 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root 40468 2026-01-29 10:39:03.000000000 +0000 nf_conntrack_h323.ko
-rw-r--r-- 1 root root  8108 2026-01-29 10:39:03.000000000 +0000 nf_conntrack_irc.ko
-rw-r--r-- 1 root root 25660 2026-01-29 10:39:03.000000000 +0000 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root  7520 2026-01-29 10:39:04.000000000 +0000 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root  8084 2026-01-29 10:39:04.000000000 +0000 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root 26700 2026-01-29 10:39:04.000000000 +0000 nf_conntrack_sip.ko
-rw-r--r-- 1 root root  6796 2026-01-29 10:39:04.000000000 +0000 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root 28916 2026-01-29 10:39:04.000000000 +0000 nf_nat.ko
-rw-r--r-- 1 root root  4460 2026-01-29 10:39:04.000000000 +0000 nf_nat_ftp.ko
-rw-r--r-- 1 root root  4104 2026-01-29 10:39:04.000000000 +0000 nf_nat_irc.ko
-rw-r--r-- 1 root root  7544 2026-01-29 10:39:04.000000000 +0000 nf_nat_rtsp.ko
-rw-r--r-- 1 root root 11772 2026-01-29 10:39:04.000000000 +0000 nf_nat_sip.ko
-rw-r--r-- 1 root root  3028 2026-01-29 10:39:04.000000000 +0000 nf_nat_tftp.ko
-rw-r--r-- 1 root root  8404 2026-01-29 10:39:04.000000000 +0000 nfnetlink.ko
-rw-r--r-- 1 root root 24068 2026-01-29 10:39:04.000000000 +0000 x_tables.ko
-rw-r--r-- 1 root root  6048 2026-01-29 10:39:04.000000000 +0000 xt_CT.ko
-rw-r--r-- 1 root root  3964 2026-01-29 10:39:04.000000000 +0000 xt_DSCP.ko
-rw-r--r-- 1 root root  3404 2026-01-29 10:39:04.000000000 +0000 xt_HL.ko
-rw-r--r-- 1 root root  3380 2026-01-29 10:39:04.000000000 +0000 xt_MASQUERADE.ko
-rw-r--r-- 1 root root  3768 2026-01-29 10:39:04.000000000 +0000 xt_NETMAP.ko
-rw-r--r-- 1 root root  3100 2026-01-29 10:39:04.000000000 +0000 xt_REDIRECT.ko
-rw-r--r-- 1 root root  6144 2026-01-29 10:39:04.000000000 +0000 xt_TCPMSS.ko
-rw-r--r-- 1 root root  5140 2026-01-29 10:39:04.000000000 +0000 xt_addrtype.ko
-rw-r--r-- 1 root root  4212 2026-01-29 10:39:04.000000000 +0000 xt_connbytes.ko
-rw-r--r-- 1 root root  4312 2026-01-29 10:39:05.000000000 +0000 xt_connmark.ko
-rw-r--r-- 1 root root  4948 2026-01-29 10:39:05.000000000 +0000 xt_conntrack.ko
-rw-r--r-- 1 root root  2988 2026-01-29 10:39:05.000000000 +0000 xt_dscp.ko
-rw-r--r-- 1 root root 16184 2026-01-29 10:39:05.000000000 +0000 xt_hashlimit.ko
-rw-r--r-- 1 root root  3404 2026-01-29 10:39:05.000000000 +0000 xt_helper.ko
-rw-r--r-- 1 root root  2812 2026-01-29 10:39:05.000000000 +0000 xt_hl.ko
-rw-r--r-- 1 root root  2748 2026-01-29 10:39:05.000000000 +0000 xt_length.ko
-rw-r--r-- 1 root root  2600 2026-01-29 10:39:05.000000000 +0000 xt_mac.ko
-rw-r--r-- 1 root root  3092 2026-01-29 10:39:05.000000000 +0000 xt_mark.ko
-rw-r--r-- 1 root root  3384 2026-01-29 10:39:05.000000000 +0000 xt_multiport.ko
-rw-r--r-- 1 root root  5064 2026-01-29 10:39:05.000000000 +0000 xt_nat.ko
-rw-r--r-- 1 root root  3948 2026-01-29 10:39:05.000000000 +0000 xt_physdev.ko
-rw-r--r-- 1 root root  4456 2026-01-29 10:39:05.000000000 +0000 xt_policy.ko
-rw-r--r-- 1 root root  2504 2026-01-29 10:39:05.000000000 +0000 xt_realm.ko
-rw-r--r-- 1 root root  3048 2026-01-29 10:39:05.000000000 +0000 xt_statistic.ko
-rw-r--r-- 1 root root  2920 2026-01-29 10:39:05.000000000 +0000 xt_string.ko
-rw-r--r-- 1 root root  3112 2026-01-29 10:39:05.000000000 +0000 xt_tcpmss.ko
-rw-r--r-- 1 root root  3968 2026-01-29 10:39:05.000000000 +0000 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/sched:
total 84
-rw-r--r-- 1 root root 28280 2026-01-29 10:39:06.000000000 +0000 sch_cake.ko
-rw-r--r-- 1 root root  7420 2026-01-29 10:39:06.000000000 +0000 sch_codel.ko
-rw-r--r-- 1 root root 10028 2026-01-29 10:39:06.000000000 +0000 sch_fq_codel.ko
-rw-r--r-- 1 root root 24044 2026-01-29 10:39:06.000000000 +0000 sch_htb.ko
-rw-r--r-- 1 root root  8816 2026-01-29 10:39:06.000000000 +0000 sch_red.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 7012 2026-01-29 10:39:06.000000000 +0000 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 192
-rw-r--r-- 1 root root 11360 2026-01-29 10:42:12.000000000 +0000 appmark.ko
-rw-r--r-- 1 root root 10368 2026-01-29 10:36:28.000000000 +0000 btest.ko
-rw-r--r-- 1 root root  1980 2026-01-29 10:41:59.000000000 +0000 c2glue.ko
-rw-r--r-- 1 root root 45292 2026-01-29 10:37:10.000000000 +0000 flash.ko
-rw-r--r-- 1 root root  5408 2026-01-29 10:41:02.000000000 +0000 jiffies.ko
-rw-r--r-- 1 root root  3000 2026-01-29 10:37:28.000000000 +0000 ledgroup.ko
-rw-r--r-- 1 root root 11092 2026-01-29 10:36:21.000000000 +0000 logring.ko
-rw-r--r-- 1 root root 22056 2026-01-29 10:37:12.000000000 +0000 mesh.ko
-rw-r--r-- 1 root root  5816 2026-01-29 10:36:17.000000000 +0000 panics.ko
-rw-r--r-- 1 root root  7732 2026-01-29 10:40:36.000000000 +0000 rb.ko
-rw-r--r-- 1 root root  5720 2026-01-29 10:41:11.000000000 +0000 romon.ko
-rw-r--r-- 1 root root  5240 2026-01-29 10:37:04.000000000 +0000 snif.ko
-rw-r--r-- 1 root root 24964 2026-01-29 10:38:36.000000000 +0000 traffic_gen.ko
-rw-r--r-- 1 root root  6424 2026-01-29 10:37:04.000000000 +0000 ulog.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 bridge
drwxr-xr-x 3 root root 4096 2026-01-29 10:57:19.000000000 +0000 ipv4
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 netfilter
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 sched

/lib/modules/5.6.3/net/bridge:
total 196
-rw-r--r-- 1 root root 171972 2026-01-29 10:41:31.000000000 +0000 bridge2.ko
-rw-r--r-- 1 root root  17088 2026-01-29 10:41:31.000000000 +0000 bridge2_netfilter.ko
-rw-r--r-- 1 root root   2464 2026-01-29 10:37:02.000000000 +0000 ebt_snif.ko
-rw-r--r-- 1 root root   2696 2026-01-29 10:37:02.000000000 +0000 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 24
-rw-r--r-- 1 root root 3260 2026-01-29 10:36:25.000000000 +0000 ipt_SAME.ko
-rw-r--r-- 1 root root 6140 2026-01-29 10:36:27.000000000 +0000 ipt_TARPIT.ko
-rw-r--r-- 1 root root 4060 2026-01-29 10:36:26.000000000 +0000 ipt_psd.ko
-rw-r--r-- 1 root root 2564 2026-01-29 10:37:01.000000000 +0000 ipt_snif.ko
-rw-r--r-- 1 root root 3040 2026-01-29 10:37:02.000000000 +0000 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 60
-rw-r--r-- 1 root root  2028 2026-01-29 10:37:43.000000000 +0000 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  2028 2026-01-29 10:37:43.000000000 +0000 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 10464 2026-01-29 10:37:50.000000000 +0000 xt_ein.ko
-rw-r--r-- 1 root root 12424 2026-01-29 10:36:35.000000000 +0000 xt_layer7.ko
-rw-r--r-- 1 root root 16748 2026-01-29 10:37:49.000000000 +0000 xt_misc.ko
-rw-r--r-- 1 root root  3832 2026-01-29 10:36:43.000000000 +0000 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 76
-rw-r--r-- 1 root root  5156 2026-01-29 10:36:46.000000000 +0000 cls_fw.ko
-rw-r--r-- 1 root root 11488 2026-01-29 10:36:49.000000000 +0000 cls_linear.ko
-rw-r--r-- 1 root root 12596 2026-01-29 10:37:14.000000000 +0000 proto_agr.ko
-rw-r--r-- 1 root root 18524 2026-01-29 10:37:14.000000000 +0000 sch_agr.ko
-rw-r--r-- 1 root root 10312 2026-01-29 10:36:30.000000000 +0000 sch_pcq.ko
-rw-r--r-- 1 root root  8000 2026-01-29 10:41:16.000000000 +0000 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2026-01-29 10:57:19.000000000 +0000 bin
drwxr-xr-x 11 root root 4096 2026-01-29 10:57:19.000000000 +0000 etc
drwxr-xr-x  5 root root 4096 2026-01-29 10:57:19.000000000 +0000 lib
lrwxrwxrwx  1 root root    8 2026-01-29 10:57:19.000000000 +0000 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2026-01-29 10:57:19.000000000 +0000 store -> /rw/store

/nova/bin:
total 8964
-rwxr-xr-x 1 root root   24232 2026-01-29 09:58:57.000000000 +0000 agent
-rwxr-xr-x 1 root root   13032 2026-01-29 09:59:00.000000000 +0000 arpd
-rwxr-xr-x 1 root root   18208 2026-01-29 10:01:32.000000000 +0000 backup
-rwxr-xr-x 1 root root  290124 2026-01-29 10:04:31.000000000 +0000 bridge2
-rwxr-xr-x 1 root root   82648 2026-01-29 10:02:02.000000000 +0000 btest
-rwxr-xr-x 1 root root 1024148 2026-01-29 10:03:30.000000000 +0000 cerm
lrwxrwxrwx 1 root root       4 2026-01-29 10:03:41.000000000 +0000 cerm-worker -> cerm
-rwxr-xr-x 1 root root  174600 2026-01-29 10:03:07.000000000 +0000 cloud
-rwxr-xr-x 1 root root  100304 2026-01-29 10:01:20.000000000 +0000 crossfig
-rwxr-xr-x 1 root root   67836 2026-01-29 10:02:21.000000000 +0000 detnet
-rwxr-xr-x 1 root root   84324 2026-01-29 09:59:49.000000000 +0000 discover
-rwxr-xr-x 1 root root   40400 2026-01-29 10:01:39.000000000 +0000 email
-rwxr-xr-x 1 root root  150892 2026-01-29 10:03:53.000000000 +0000 fileman
-rwxr-xr-x 1 root root   35028 2026-01-29 09:59:02.000000000 +0000 ftpd
-rwxr-xr-x 1 root root  157520 2026-01-29 10:00:03.000000000 +0000 graphing
-rwxr-xr-x 1 root root    4440 2026-01-29 10:03:30.000000000 +0000 havecardbus
-rwxr-xr-x 1 root root   64672 2026-01-29 10:01:18.000000000 +0000 igmpproxy
-rwxr-xr-x 1 root root   83984 2026-01-29 10:03:10.000000000 +0000 installer
-rwxr-xr-x 1 root root   30544 2026-01-29 10:03:42.000000000 +0000 ippool
-rwxr-xr-x 1 root root   55392 2026-01-29 10:01:47.000000000 +0000 keyman
-rwxr-xr-x 1 root root   48192 2026-01-29 09:59:45.000000000 +0000 kidcontrol
-rwxr-xr-x 1 root root   71928 2026-01-29 10:03:43.000000000 +0000 led
-rwxr-xr-x 1 root root  122400 2026-01-29 10:03:15.000000000 +0000 letsencrypt
-rwxr-xr-x 1 root root   85020 2026-01-29 10:03:02.000000000 +0000 loader
-rwxr-xr-x 1 root root   88432 2026-01-29 09:59:11.000000000 +0000 log
-rwxr-xr-x 1 root root  174960 2026-01-29 10:05:17.000000000 +0000 login
-rwxr-xr-x 1 root root   55676 2026-01-29 09:59:05.000000000 +0000 logmaker
-rwxr-xr-x 1 root root   22844 2026-01-29 09:59:00.000000000 +0000 macping
-rwxr-xr-x 1 root root   37864 2026-01-29 10:01:39.000000000 +0000 mactel
-rwxr-xr-x 1 root root   23448 2026-01-29 09:59:01.000000000 +0000 mepty
-rwxr-xr-x 1 root root   85708 2026-01-29 09:59:55.000000000 +0000 mesh
-rwxr-xr-x 1 root root   68968 2026-01-29 10:05:21.000000000 +0000 mode
lrwxrwxrwx 1 root root       7 2026-01-29 10:04:00.000000000 +0000 modprobed -> moduler
-rwxr-xr-x 1 root root  117452 2026-01-29 10:03:57.000000000 +0000 moduler
-rwxr-xr-x 1 root root   80696 2026-01-29 10:04:30.000000000 +0000 mproxy
-rwxr-xr-x 1 root root   60420 2026-01-29 10:01:51.000000000 +0000 mtget
-rwxr-xr-x 1 root root   49440 2026-01-29 09:59:49.000000000 +0000 natpmp
-rwxr-xr-x 1 root root  830820 2026-01-29 10:07:09.000000000 +0000 net
-rwxr-xr-x 1 root root   71904 2026-01-29 10:02:23.000000000 +0000 ntp
-rwxr-xr-x 1 root root    6152 2026-01-29 09:58:57.000000000 +0000 panicsl
-rwxr-xr-x 1 root root  828888 2026-01-29 10:05:35.000000000 +0000 parser
-rwxr-xr-x 1 root root   47220 2026-01-29 09:59:04.000000000 +0000 ping
-rwxr-xr-x 1 root root   49180 2026-01-29 10:01:43.000000000 +0000 portman
-rwxr-xr-x 1 root root   33832 2026-01-29 10:42:42.000000000 +0000 profiler
-rwxr-xr-x 1 root root  153996 2026-01-29 09:59:11.000000000 +0000 quickset
-rwxr-xr-x 1 root root   57284 2026-01-29 10:03:20.000000000 +0000 radius
-rwxr-xr-x 1 root root  170780 2026-01-29 10:03:26.000000000 +0000 resolver
-rwxr-xr-x 1 root root   10224 2026-01-29 10:03:17.000000000 +0000 resolver_ctl
-rwxr-xr-x 1 root root   96716 2026-01-29 10:02:44.000000000 +0000 romon
-rwxr-xr-x 1 root root 1213852 2026-01-29 10:08:25.000000000 +0000 route
-rwxr-xr-x 1 root root   16664 2026-01-29 10:02:19.000000000 +0000 rtrace
-rwxr-xr-x 1 root root   44996 2026-01-29 10:03:43.000000000 +0000 sermgr
-rwxr-xr-x 1 root root   35552 2026-01-29 09:59:27.000000000 +0000 sertcp
-rwxr-xr-x 1 root root   73148 2026-01-29 09:59:41.000000000 +0000 sniffer
-rwxr-xr-x 1 root root  215784 2026-01-29 10:04:49.000000000 +0000 snmp
-rwxr-xr-x 1 root root   66772 2026-01-29 09:59:57.000000000 +0000 socks
-rwxr-xr-x 1 root root   37336 2026-01-29 09:59:45.000000000 +0000 socksify
-rwxr-xr-x 1 root root  125200 2026-01-29 10:03:40.000000000 +0000 ssld
-rwxr-xr-x 1 root root   31344 2026-01-29 10:01:44.000000000 +0000 sstore
-rwxr-xr-x 1 root root  241536 2026-01-29 10:05:33.000000000 +0000 sys2
-rwxr-xr-x 1 root root   20904 2026-01-29 09:59:01.000000000 +0000 telnet
-rwxr-xr-x 1 root root   30672 2026-01-29 09:59:04.000000000 +0000 telser
-rwxr-xr-x 1 root root   37620 2026-01-29 09:59:36.000000000 +0000 tftpd
-rwxr-xr-x 1 root root   34740 2026-01-29 09:59:00.000000000 +0000 traceroute
-rwxr-xr-x 1 root root  112720 2026-01-29 09:59:52.000000000 +0000 trafficgen
-rwxr-xr-x 1 root root   23416 2026-01-29 09:59:19.000000000 +0000 trafflow
-rwxr-xr-x 1 root root   26600 2026-01-29 09:59:01.000000000 +0000 undo
-rwxr-xr-x 1 root root  100652 2026-01-29 09:59:59.000000000 +0000 upnp
-rwxr-xr-x 1 root root   84720 2026-01-29 10:03:40.000000000 +0000 user
-rwxr-xr-x 1 root root   99132 2026-01-29 10:02:19.000000000 +0000 vrrp
-rwxr-xr-x 1 root root   30784 2026-01-29 09:59:26.000000000 +0000 watchdog
-rwxr-xr-x 1 root root  154528 2026-01-29 10:02:44.000000000 +0000 wproxy
-rwxr-xr-x 1 root root  138180 2026-01-29 10:04:16.000000000 +0000 www

/nova/etc:
total 52
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 leds
-rwxr-xr-x 1 root root 1286 2026-01-14 12:35:05.000000000 +0000 lognames
-rwxr-xr-x 1 root root   10 2025-11-14 09:51:57.000000000 +0000 logo
-rwxr-xr-x 1 root root    1 2025-11-14 09:51:57.000000000 +0000 manual-url
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 net-remote
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 pciinfo
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 radius
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 services
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 system_names
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 upnp
-rwxr-xr-x 1 root root   26 2026-01-14 12:35:05.000000000 +0000 url
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 user
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 www

/nova/etc/leds:
total 4
-rwxr-xr-x 1 root root 12 2026-01-29 09:58:07.000000000 +0000 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2026-01-29 09:58:07.000000000 +0000 system.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 762 2026-01-29 09:58:07.000000000 +0000 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 101 2026-01-29 09:58:07.000000000 +0000 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 992 2026-01-29 09:58:07.000000000 +0000 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2026-01-29 09:58:07.000000000 +0000 system.x3

/nova/etc/upnp:
total 40
-rwxr-xr-x 1 root root   930 2025-11-14 09:51:59.000000000 +0000 logo16.gif
-rwxr-xr-x 1 root root  1173 2025-11-14 09:51:59.000000000 +0000 logo32.gif
-rwxr-xr-x 1 root root  1504 2025-11-14 09:51:59.000000000 +0000 logo48.gif
-rwxr-xr-x 1 root root   735 2025-11-14 09:51:59.000000000 +0000 osinfo.xml
-rwxr-xr-x 1 root root  5928 2025-11-14 09:51:59.000000000 +0000 wancommonifcfg.xml
-rwxr-xr-x 1 root root 13444 2025-11-14 09:51:59.000000000 +0000 wanipconn.xml

/nova/etc/user:
total 4
-rwxr-xr-x 1 root root 2230 2026-01-29 09:58:07.000000000 +0000 system.x3

/nova/etc/www:
total 4
-rwxr-xr-x 1 root root 2509 2026-01-29 09:58:07.000000000 +0000 system.x3

/nova/lib:
total 16
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 console
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 defconf
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 profiler
-rwxr-xr-x 1 root root 4074 2026-01-29 09:54:40.000000000 +0000 xmlnames2

/nova/lib/console:
total 1644
-rwxr-xr-x 1 root root 1671490 2026-01-29 10:06:05.000000000 +0000 1073741824.mem
-rwxr-xr-x 1 root root     510 2025-11-14 09:51:57.000000000 +0000 logo.txt
-rwxr-xr-x 1 root root      18 2026-01-14 12:35:05.000000000 +0000 sublogo.txt

/nova/lib/defconf:
total 104
-rwxr-xr-x 1 root root   567 2025-11-14 09:51:57.000000000 +0000 defconf
-rwxr-xr-x 1 root root  4995 2026-01-14 12:35:05.000000000 +0000 defconf-caps
-rwxr-xr-x 1 root root  3700 2026-01-14 12:35:05.000000000 +0000 defconf-wps-sync
-rwxr-xr-x 1 root root 88902 2026-01-21 09:17:49.000000000 +0000 get-custom-defconf

/nova/lib/profiler:
total 16
-rwxr-xr-x 1 root root 13664 2026-01-29 10:42:42.000000000 +0000 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 92
-rwxr-xr-x 1 root root 24844 2026-01-29 09:58:04.000000000 +0000 nandfix
-rwxr-xr-x 1 root root 64200 2026-01-29 10:01:49.000000000 +0000 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2026-01-29 10:57:19.000000000 +0000 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 deinstall
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 lock
lrwxrwxrwx 1 root root    8 2026-01-29 10:57:19.000000000 +0000 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2026-01-29 10:57:19.000000000 +0000 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2026-01-29 10:57:19.000000000 +0000 post
lrwxrwxrwx 1 root root    7 2026-01-29 10:57:19.000000000 +0000 run -> /rw/run
lrwxrwxrwx 1 root root    4 2026-01-29 10:57:19.000000000 +0000 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

