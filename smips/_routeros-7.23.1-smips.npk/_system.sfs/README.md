### system.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 5724388 bytes, 534 inodes, blocksize: 262144 bytes, created: Tue Jun  2 09:50:03 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 56
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 bin
drwxr-xr-x 7 root root 4096 2026-06-02 10:50:02.000000000 +0100 bndl
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 boot
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 dev
lrwxrwxrwx 1 root root   11 2026-06-02 10:50:02.000000000 +0100 dude -> /flash/dude
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 etc
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 flash
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:02.000000000 +0100 nova
lrwxrwxrwx 1 root root    9 2026-06-02 10:50:02.000000000 +0100 pckg -> /ram/pckg
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 proc
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 ram
lrwxrwxrwx 1 root root    9 2026-06-02 10:50:02.000000000 +0100 rw -> /flash/rw
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 sbin
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 sys
lrwxrwxrwx 1 root root    7 2026-06-02 10:50:02.000000000 +0100 tmp -> /rw/tmp
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:02.000000000 +0100 var

/bin:
total 28
lrwxrwxrwx 1 root root    21 2026-06-02 10:50:02.000000000 +0100 bash -> /pckg/option/bin/bash
-rwxr-xr-x 1 root root 18592 2026-06-02 10:27:50.000000000 +0100 catlog
lrwxrwxrwx 1 root root    15 2026-06-02 10:50:02.000000000 +0100 gosh -> /nova/bin/login
lrwxrwxrwx 1 root root    15 2026-06-02 10:50:02.000000000 +0100 login -> /nova/bin/login
-rwxr-xr-x 1 root root  7544 2026-06-02 10:27:50.000000000 +0100 pakp
lrwxrwxrwx 1 root root    21 2026-06-02 10:50:02.000000000 +0100 sh -> /pckg/option/bin/bash
lrwxrwxrwx 1 root root    15 2026-06-02 10:50:02.000000000 +0100 shell -> /nova/bin/login

/bndl:
total 20
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:02.000000000 +0100 advanced-tools
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:02.000000000 +0100 dhcp
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:02.000000000 +0100 ipv6
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:02.000000000 +0100 ppp
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:02.000000000 +0100 security

/bndl/advanced-tools:
total 8
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:02.000000000 +0100 nova

/bndl/advanced-tools/home:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 web

/bndl/advanced-tools/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 webfig

/bndl/advanced-tools/home/web/webfig:
total 16
-rw-r--r-- 1 root root 11108 2026-06-02 10:46:08.000000000 +0100 advtool-acc9768f27f9.jg.gz
-rwxr-xr-x 1 root root   108 2026-06-02 10:46:08.000000000 +0100 advtool.info
lrwxrwxrwx 1 root root    26 2026-06-02 10:46:08.000000000 +0100 advtool.jg.gz -> advtool-acc9768f27f9.jg.gz

/bndl/advanced-tools/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 lib

/bndl/advanced-tools/nova/bin:
total 112
-rwxr-xr-x 1 root root 31552 2026-06-02 10:45:49.000000000 +0100 ddns
-rwxr-xr-x 1 root root 68340 2026-06-02 10:46:56.000000000 +0100 netwatch
-rwxr-xr-x 1 root root 12104 2026-06-02 10:46:09.000000000 +0100 wakeonlan

/bndl/advanced-tools/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 console

/bndl/advanced-tools/nova/lib/console:
total 24
-rwxr-xr-x 1 root root 20501 2026-06-02 10:45:42.000000000 +0100 1166016512.mem

/bndl/dhcp:
total 12
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 home
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:02.000000000 +0100 nova

/bndl/dhcp/home:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 web

/bndl/dhcp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 webfig

/bndl/dhcp/home/web/webfig:
total 32
-rw-r--r-- 1 root root 27574 2026-06-02 10:45:55.000000000 +0100 dhcp-18bd695dd56c.jg.gz
-rwxr-xr-x 1 root root   102 2026-06-02 10:45:55.000000000 +0100 dhcp.info
lrwxrwxrwx 1 root root    23 2026-06-02 10:45:56.000000000 +0100 dhcp.jg.gz -> dhcp-18bd695dd56c.jg.gz

/bndl/dhcp/lib:
total 28
-rwxr-xr-x 1 root root 26188 2026-06-02 10:45:41.000000000 +0100 libudhcp.so

/bndl/dhcp/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 lib

/bndl/dhcp/nova/bin:
total 340
-rwxr-xr-x 1 root root 347260 2026-06-02 10:47:02.000000000 +0100 dhcp
lrwxrwxrwx 1 root root      4 2026-06-02 10:47:02.000000000 +0100 dhcpclient -> dhcp

/bndl/dhcp/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 console

/bndl/dhcp/nova/lib/console:
total 116
-rwxr-xr-x 1 root root 117088 2026-06-02 10:45:46.000000000 +0100 1128267776.mem

/bndl/ipv6:
total 8
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 home
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:02.000000000 +0100 nova

/bndl/ipv6/home:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 web

/bndl/ipv6/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 webfig

/bndl/ipv6/home/web/webfig:
total 76
-rw-r--r-- 1 root root 71098 2026-06-02 10:45:59.000000000 +0100 ipv6-4d8e1a52b67b.jg.gz
-rwxr-xr-x 1 root root   102 2026-06-02 10:45:59.000000000 +0100 ipv6.info
lrwxrwxrwx 1 root root    23 2026-06-02 10:46:00.000000000 +0100 ipv6.jg.gz -> ipv6-4d8e1a52b67b.jg.gz

/bndl/ipv6/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:02.000000000 +0100 lib

/bndl/ipv6/nova/bin:
total 108
-rwxr-xr-x 1 root root 38800 2026-06-02 10:46:06.000000000 +0100 ippool6
-rwxr-xr-x 1 root root 68300 2026-06-02 10:46:02.000000000 +0100 radvd

/bndl/ipv6/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 route

/bndl/ipv6/nova/lib/console:
total 180
-rwxr-xr-x 1 root root 181444 2026-06-02 10:45:51.000000000 +0100 1212153856.mem

/bndl/ipv6/nova/lib/route:
total 0
-rw-r--r-- 1 root root 0 2026-04-21 14:58:49.000000000 +0100 ipv6.rp

/bndl/ppp:
total 12
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:02.000000000 +0100 nova

/bndl/ppp/home:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 web

/bndl/ppp/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 webfig

/bndl/ppp/home/web/webfig:
total 44
-rw-r--r-- 1 root root 39720 2026-06-02 10:45:58.000000000 +0100 ppp-20a75d2f7f8f.jg.gz
-rwxr-xr-x 1 root root   100 2026-06-02 10:45:58.000000000 +0100 ppp.info
lrwxrwxrwx 1 root root    22 2026-06-02 10:45:58.000000000 +0100 ppp.jg.gz -> ppp-20a75d2f7f8f.jg.gz

/bndl/ppp/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 modules

/bndl/ppp/lib/modules:
total 4
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:02.000000000 +0100 5.6.3

/bndl/ppp/lib/modules/5.6.3:
total 16
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 misc
-rw-r--r-- 1 root root  278 2026-06-02 10:49:06.000000000 +0100 modules.dep.ppp
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 drivers

/bndl/ppp/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 net

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 ppp

/bndl/ppp/lib/modules/5.6.3/kernel/drivers/net/ppp:
total 104
-rw-r--r-- 1 root root 11412 2026-06-02 10:43:42.000000000 +0100 ppp_async.ko
-rw-r--r-- 1 root root  6784 2026-06-02 10:43:42.000000000 +0100 ppp_deflate.ko
-rw-r--r-- 1 root root 33524 2026-06-02 10:43:42.000000000 +0100 ppp_generic.ko
-rw-r--r-- 1 root root  8732 2026-06-02 10:43:42.000000000 +0100 ppp_mppe.ko
-rw-r--r-- 1 root root  9524 2026-06-02 10:43:42.000000000 +0100 ppp_synctty.ko
-rw-r--r-- 1 root root 13108 2026-06-02 10:43:42.000000000 +0100 pppoe.ko
-rw-r--r-- 1 root root  4284 2026-06-02 10:43:42.000000000 +0100 pppox.ko

/bndl/ppp/lib/modules/5.6.3/misc:
total 92
-rw-r--r-- 1 root root 36472 2026-06-02 10:46:39.000000000 +0100 ovpn.ko
-rw-r--r-- 1 root root  6168 2026-06-02 10:46:33.000000000 +0100 pppoefp.ko
-rw-r--r-- 1 root root 48468 2026-06-02 10:46:53.000000000 +0100 sstp.ko

/bndl/ppp/lib/modules/5.6.3/net:
total 60
-rw-r--r-- 1 root root 49136 2026-06-02 10:46:31.000000000 +0100 l2tp.ko
-rw-r--r-- 1 root root 10204 2026-06-02 10:46:01.000000000 +0100 pptp.ko

/bndl/ppp/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:02.000000000 +0100 etc
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:02.000000000 +0100 lib

/bndl/ppp/nova/bin:
total 640
-rwxr-xr-x 1 root root 653096 2026-06-02 10:48:44.000000000 +0100 ppp
lrwxrwxrwx 1 root root      3 2026-06-02 10:48:50.000000000 +0100 ppp-worker -> ppp

/bndl/ppp/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 radius

/bndl/ppp/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1974 2026-06-02 10:45:37.000000000 +0100 ppp.x3

/bndl/ppp/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 58 2026-06-02 10:45:37.000000000 +0100 ppp.x3

/bndl/ppp/nova/lib:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 profiler

/bndl/ppp/nova/lib/console:
total 144
-rwxr-xr-x 1 root root 146253 2026-06-02 10:45:52.000000000 +0100 1090519040.mem

/bndl/ppp/nova/lib/profiler:
total 4
-rwxr-xr-x 1 root root 1972 2026-06-02 10:46:48.000000000 +0100 ppp.p

/bndl/security:
total 12
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:02.000000000 +0100 nova

/bndl/security/home:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 web

/bndl/security/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 webfig

/bndl/security/home/web/webfig:
total 28
-rw-r--r-- 1 root root 22428 2026-06-02 10:47:28.000000000 +0100 secure-88687dc172de.jg.gz
-rwxr-xr-x 1 root root   106 2026-06-02 10:47:28.000000000 +0100 secure.info
lrwxrwxrwx 1 root root    25 2026-06-02 10:47:29.000000000 +0100 secure.jg.gz -> secure-88687dc172de.jg.gz

/bndl/security/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 modules

/bndl/security/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 5.6.3

/bndl/security/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:02.000000000 +0100 kernel
-rw-r--r-- 1 root root  106 2026-06-02 10:49:52.000000000 +0100 modules.dep.security

/bndl/security/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 crypto
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:02.000000000 +0100 net

/bndl/security/lib/modules/5.6.3/kernel/crypto:
total 88
-rw-r--r-- 1 root root  8352 2026-06-02 10:43:41.000000000 +0100 blowfish_common.ko
-rw-r--r-- 1 root root  6020 2026-06-02 10:43:41.000000000 +0100 blowfish_generic.ko
-rw-r--r-- 1 root root 23348 2026-06-02 10:43:41.000000000 +0100 camellia_generic.ko
-rw-r--r-- 1 root root  8412 2026-06-02 10:43:41.000000000 +0100 chacha20poly1305.ko
-rw-r--r-- 1 root root  3800 2026-06-02 10:43:42.000000000 +0100 echainiv.ko
-rw-r--r-- 1 root root 15832 2026-06-02 10:43:42.000000000 +0100 twofish_common.ko
-rw-r--r-- 1 root root  9988 2026-06-02 10:43:42.000000000 +0100 twofish_generic.ko

/bndl/security/lib/modules/5.6.3/kernel/net:
total 12
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 key
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 xfrm

/bndl/security/lib/modules/5.6.3/kernel/net/ipv4:
total 28
-rw-r--r-- 1 root root  8960 2026-06-02 10:43:44.000000000 +0100 ah4.ko
-rw-r--r-- 1 root root 13140 2026-06-02 10:43:44.000000000 +0100 esp4.ko

/bndl/security/lib/modules/5.6.3/kernel/net/key:
total 36
-rw-r--r-- 1 root root 34696 2026-06-02 10:43:46.000000000 +0100 af_key.ko

/bndl/security/lib/modules/5.6.3/kernel/net/xfrm:
total 40
-rw-r--r-- 1 root root 11776 2026-06-02 10:43:49.000000000 +0100 xfrm_interface.ko
-rw-r--r-- 1 root root 27444 2026-06-02 10:43:49.000000000 +0100 xfrm_user.ko

/bndl/security/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 bin
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:02.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 lib

/bndl/security/nova/bin:
total 796
-rwxr-xr-x 1 root root 573600 2026-06-02 10:49:29.000000000 +0100 ipsec
lrwxrwxrwx 1 root root      5 2026-06-02 10:49:38.000000000 +0100 ipsec-worker -> ipsec
-rwxr-xr-x 1 root root 234096 2026-06-02 10:48:32.000000000 +0100 ssh
lrwxrwxrwx 1 root root      3 2026-06-02 10:48:32.000000000 +0100 sshd -> ssh

/bndl/security/nova/etc:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 services

/bndl/security/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 56 2026-06-02 10:47:17.000000000 +0100 security.x3

/bndl/security/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 123 2026-06-02 10:47:17.000000000 +0100 security.x3

/bndl/security/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 console

/bndl/security/nova/lib/console:
total 92
-rwxr-xr-x 1 root root 92543 2026-06-02 10:47:27.000000000 +0100 1077936128.mem

/boot:
total 0

/dev:
total 0

/etc:
total 172
-rw-r--r-- 1 root root 130743 2026-06-02 10:25:11.000000000 +0100 license
-rw-r--r-- 1 root root  43792 2026-06-02 10:28:09.000000000 +0100 qca9531L-7.23.1.fwf
lrwxrwxrwx 1 root root     24 2026-06-02 10:50:02.000000000 +0100 termcap -> /pckg/option/etc/termcap

/flash:
total 0

/home:
total 4
drwxr-xr-x 6 root root 4096 2026-06-02 10:50:02.000000000 +0100 web

/home/web:
total 64
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:02.000000000 +0100 assets
-rwxr-xr-x 1 root root 19798 2026-06-02 10:27:11.000000000 +0100 bth-files.html
-rwxr-xr-x 1 root root   600 2026-01-08 09:06:12.000000000 +0000 favicon.png
-rwxr-xr-x 1 root root   689 2026-01-08 09:06:12.000000000 +0000 favicon.svg
-rwxr-xr-x 1 root root   708 2026-01-08 09:06:11.000000000 +0000 graph.css
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:02.000000000 +0100 help
-rwxr-xr-x 1 root root  1317 2026-01-08 09:06:12.000000000 +0000 index2.html
lrwxrwxrwx 1 root root    12 2026-06-02 10:45:35.000000000 +0100 license.txt -> /etc/license
-rwxr-xr-x 1 root root    68 2026-01-08 09:06:12.000000000 +0000 logo.png
-rw-r--r-- 1 root root  2427 2026-04-21 14:58:49.000000000 +0100 mikrotik_logo.svg
-rwxr-xr-x 1 root root    27 2026-01-08 09:06:12.000000000 +0000 robots.txt
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:02.000000000 +0100 webfig
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:02.000000000 +0100 winbox

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
total 1976
-rwxr-xr-x 1 root root 278808 2026-06-02 10:25:49.000000000 +0100 libc.so
-rwxr-xr-x 1 root root  89264 2026-06-02 10:28:08.000000000 +0100 libeap.so
-rwxr-xr-x 1 root root  21872 2026-06-02 10:26:52.000000000 +0100 libjson.so
-rwxr-xr-x 1 root root 186804 2026-06-02 10:27:31.000000000 +0100 librappsup.so
-rwxr-xr-x 1 root root 126632 2026-06-02 10:27:11.000000000 +0100 libubox.so
-rwxr-xr-x 1 root root  76508 2026-06-02 10:26:46.000000000 +0100 libuc++.so
-rwxr-xr-x 1 root root 290864 2026-06-02 10:27:35.000000000 +0100 libucrypto.so
-rwxr-xr-x 1 root root  27764 2026-06-02 10:27:09.000000000 +0100 libufiber.so
-rwxr-xr-x 1 root root  71756 2026-06-02 10:27:11.000000000 +0100 libuhttp.so
-rwxr-xr-x 1 root root 650856 2026-06-02 10:27:00.000000000 +0100 libumsg.so
-rwxr-xr-x 1 root root  37020 2026-06-02 10:27:42.000000000 +0100 liburadius.so
-rwxr-xr-x 1 root root  10576 2026-06-02 10:27:39.000000000 +0100 libuxml++.so
-rwxr-xr-x 1 root root  37348 2026-06-02 10:26:49.000000000 +0100 libwww.so
-rwxr-xr-x 1 root root  13804 2026-06-02 10:26:51.000000000 +0100 libxml.so
-rwxr-xr-x 1 root root  68120 2026-06-02 10:26:50.000000000 +0100 libz.so
drwxr-xr-x 3 root root   4096 2026-06-02 10:50:02.000000000 +0100 modules
lrwxrwxrwx 1 root root     27 2026-06-02 10:50:02.000000000 +0100 valgrind -> /pckg/valgrind/lib/valgrind

/lib/modules:
total 4
drwxr-xr-x 6 root root 4096 2026-06-02 10:50:02.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 20
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:02.000000000 +0100 drivers
drwxr-xr-x 7 root root 4096 2026-06-02 10:50:02.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 misc
-rw-r--r-- 1 root root 1488 2026-06-02 10:45:33.000000000 +0100 modules.dep.system
drwxr-xr-x 6 root root 4096 2026-06-02 10:50:02.000000000 +0100 net

/lib/modules/5.6.3/drivers:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 char
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 net

/lib/modules/5.6.3/drivers/char:
total 20
-rw-r--r-- 1 root root 4868 2026-06-02 10:41:44.000000000 +0100 ar7100wdt.ko
-rw-r--r-- 1 root root 8816 2026-06-02 10:42:00.000000000 +0100 ticker.ko

/lib/modules/5.6.3/drivers/net:
total 436
-rw-r--r-- 1 root root  39384 2026-06-02 10:41:47.000000000 +0100 ag7240.ko
-rw-r--r-- 1 root root  26944 2026-06-02 10:43:10.000000000 +0100 aths16.ko
-rw-r--r-- 1 root root  10680 2026-06-02 10:42:03.000000000 +0100 imq.ko
-rw-r--r-- 1 root root 175880 2026-06-02 10:44:30.000000000 +0100 packet_hook.ko
-rw-r--r-- 1 root root  60828 2026-06-02 10:43:04.000000000 +0100 phy_helper.ko
-rw-r--r-- 1 root root   3376 2026-06-02 10:41:54.000000000 +0100 sram.ko
-rw-r--r-- 1 root root  59004 2026-06-02 10:43:13.000000000 +0100 switch.ko
-rw-r--r-- 1 root root  58928 2026-06-02 10:44:20.000000000 +0100 vxlan2.ko

/lib/modules/5.6.3/kernel:
total 20
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 arch
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 crypto
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 drivers
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:02.000000000 +0100 lib
drwxr-xr-x 9 root root 4096 2026-06-02 10:50:02.000000000 +0100 net

/lib/modules/5.6.3/kernel/arch:
total 4
drwxr-xr-x 4 root root 4096 2026-06-02 10:50:02.000000000 +0100 mips

/lib/modules/5.6.3/kernel/arch/mips:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 crypto
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 oprofile

/lib/modules/5.6.3/kernel/arch/mips/crypto:
total 16
-rw-r--r-- 1 root root 7964 2026-06-02 10:43:41.000000000 +0100 chacha-mips.ko
-rw-r--r-- 1 root root 5888 2026-06-02 10:43:41.000000000 +0100 poly1305-mips.ko

/lib/modules/5.6.3/kernel/arch/mips/oprofile:
total 36
-rw-r--r-- 1 root root 34056 2026-06-02 10:43:41.000000000 +0100 oprofile.ko

/lib/modules/5.6.3/kernel/crypto:
total 8
-rw-r--r-- 1 root root 3068 2026-06-02 10:43:41.000000000 +0100 arc4.ko
-rw-r--r-- 1 root root 3820 2026-06-02 10:43:42.000000000 +0100 des_generic.ko

/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 5 root root 4096 2026-06-02 10:50:02.000000000 +0100 net

/lib/modules/5.6.3/kernel/drivers/net:
total 32
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:02.000000000 +0100 bonding
-rw-r--r-- 1 root root 19176 2026-06-02 10:43:42.000000000 +0100 macvlan.ko
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:02.000000000 +0100 slip
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:02.000000000 +0100 wireguard

/lib/modules/5.6.3/kernel/drivers/net/bonding:
total 132
-rw-r--r-- 1 root root 132456 2026-06-02 10:43:42.000000000 +0100 bonding.ko

/lib/modules/5.6.3/kernel/drivers/net/slip:
total 8
-rw-r--r-- 1 root root 6052 2026-06-02 10:43:42.000000000 +0100 slhc.ko

/lib/modules/5.6.3/kernel/drivers/net/wireguard:
total 72
-rw-r--r-- 1 root root 69668 2026-06-02 10:43:42.000000000 +0100 wireguard.ko

/lib/modules/5.6.3/kernel/lib:
total 24
-rw-r--r-- 1 root root 3340 2026-06-02 10:43:43.000000000 +0100 crc-ccitt.ko
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 crypto
-rw-r--r-- 1 root root 3492 2026-06-02 10:43:43.000000000 +0100 ts_bm.ko
-rw-r--r-- 1 root root 3324 2026-06-02 10:43:43.000000000 +0100 ts_kmp.ko
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 zlib_deflate
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 zlib_inflate

/lib/modules/5.6.3/kernel/lib/crypto:
total 64
-rw-r--r-- 1 root root  2304 2026-06-02 10:43:43.000000000 +0100 libarc4.ko
-rw-r--r-- 1 root root  7468 2026-06-02 10:43:43.000000000 +0100 libblake2s-generic.ko
-rw-r--r-- 1 root root  3676 2026-06-02 10:43:43.000000000 +0100 libblake2s.ko
-rw-r--r-- 1 root root  7040 2026-06-02 10:43:43.000000000 +0100 libchacha20poly1305.ko
-rw-r--r-- 1 root root 11708 2026-06-02 10:43:43.000000000 +0100 libcurve25519-generic.ko
-rw-r--r-- 1 root root  1992 2026-06-02 10:43:43.000000000 +0100 libcurve25519.ko
-rw-r--r-- 1 root root 20668 2026-06-02 10:43:43.000000000 +0100 libdes.ko

/lib/modules/5.6.3/kernel/lib/zlib_deflate:
total 20
-rw-r--r-- 1 root root 18368 2026-06-02 10:43:43.000000000 +0100 zlib_deflate.ko

/lib/modules/5.6.3/kernel/lib/zlib_inflate:
total 16
-rw-r--r-- 1 root root 14908 2026-06-02 10:43:43.000000000 +0100 zlib_inflate.ko

/lib/modules/5.6.3/kernel/net:
total 28
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 8021q
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 ipv4
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 ipv6
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 sched
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 xfrm

/lib/modules/5.6.3/kernel/net/8021q:
total 24
-rw-r--r-- 1 root root 24336 2026-06-02 10:43:43.000000000 +0100 8021q.ko

/lib/modules/5.6.3/kernel/net/bridge:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/bridge/netfilter:
total 88
-rw-r--r-- 1 root root  2640 2026-06-02 10:43:43.000000000 +0100 ebt_802_3.ko
-rw-r--r-- 1 root root  3572 2026-06-02 10:43:43.000000000 +0100 ebt_arp.ko
-rw-r--r-- 1 root root  3168 2026-06-02 10:43:43.000000000 +0100 ebt_arpreply.ko
-rw-r--r-- 1 root root  3164 2026-06-02 10:43:44.000000000 +0100 ebt_dnat.ko
-rw-r--r-- 1 root root  3548 2026-06-02 10:43:44.000000000 +0100 ebt_ip.ko
-rw-r--r-- 1 root root  3780 2026-06-02 10:43:44.000000000 +0100 ebt_ip6.ko
-rw-r--r-- 1 root root  4696 2026-06-02 10:43:44.000000000 +0100 ebt_limit.ko
-rw-r--r-- 1 root root  2580 2026-06-02 10:43:44.000000000 +0100 ebt_mark.ko
-rw-r--r-- 1 root root  2512 2026-06-02 10:43:44.000000000 +0100 ebt_mark_m.ko
-rw-r--r-- 1 root root  2448 2026-06-02 10:43:44.000000000 +0100 ebt_pkttype.ko
-rw-r--r-- 1 root root  3036 2026-06-02 10:43:44.000000000 +0100 ebt_redirect.ko
-rw-r--r-- 1 root root  3024 2026-06-02 10:43:44.000000000 +0100 ebt_snat.ko
-rw-r--r-- 1 root root  3804 2026-06-02 10:43:44.000000000 +0100 ebt_stp.ko
-rw-r--r-- 1 root root  2956 2026-06-02 10:43:44.000000000 +0100 ebt_vlan.ko
-rw-r--r-- 1 root root  3236 2026-06-02 10:43:44.000000000 +0100 ebtable_filter.ko
-rw-r--r-- 1 root root  3236 2026-06-02 10:43:44.000000000 +0100 ebtable_nat.ko
-rw-r--r-- 1 root root 16600 2026-06-02 10:43:44.000000000 +0100 ebtables.ko

/lib/modules/5.6.3/kernel/net/ipv4:
total 40
-rw-r--r-- 1 root root 16652 2026-06-02 10:43:44.000000000 +0100 ip_tunnel.ko
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:02.000000000 +0100 netfilter
-rw-r--r-- 1 root root 14756 2026-06-02 10:43:45.000000000 +0100 udp_tunnel.ko

/lib/modules/5.6.3/kernel/net/ipv4/netfilter:
total 72
-rw-r--r-- 1 root root 15720 2026-06-02 10:43:44.000000000 +0100 ip_tables.ko
-rw-r--r-- 1 root root  3672 2026-06-02 10:43:44.000000000 +0100 ipt_REJECT.ko
-rw-r--r-- 1 root root  3880 2026-06-02 10:43:44.000000000 +0100 iptable_filter.ko
-rw-r--r-- 1 root root  3976 2026-06-02 10:43:45.000000000 +0100 iptable_mangle.ko
-rw-r--r-- 1 root root  3680 2026-06-02 10:43:45.000000000 +0100 iptable_nat.ko
-rw-r--r-- 1 root root  4212 2026-06-02 10:43:45.000000000 +0100 iptable_raw.ko
-rw-r--r-- 1 root root  3548 2026-06-02 10:43:45.000000000 +0100 nf_defrag_ipv4.ko
-rw-r--r-- 1 root root  9284 2026-06-02 10:43:45.000000000 +0100 nf_nat_h323.ko
-rw-r--r-- 1 root root  4996 2026-06-02 10:43:45.000000000 +0100 nf_nat_pptp.ko
-rw-r--r-- 1 root root  4404 2026-06-02 10:43:45.000000000 +0100 nf_reject_ipv4.ko

/lib/modules/5.6.3/kernel/net/ipv6:
total 36
-rw-r--r-- 1 root root  8928 2026-06-02 10:43:45.000000000 +0100 ah6.ko
-rw-r--r-- 1 root root 12332 2026-06-02 10:43:45.000000000 +0100 esp6.ko
-rw-r--r-- 1 root root  3560 2026-06-02 10:43:45.000000000 +0100 ip6_udp_tunnel.ko
drwxr-xr-x 2 root root  4096 2026-06-02 10:50:02.000000000 +0100 netfilter

/lib/modules/5.6.3/kernel/net/ipv6/netfilter:
total 64
-rw-r--r-- 1 root root 16016 2026-06-02 10:43:45.000000000 +0100 ip6_tables.ko
-rw-r--r-- 1 root root  3920 2026-06-02 10:43:45.000000000 +0100 ip6t_NPT.ko
-rw-r--r-- 1 root root  3744 2026-06-02 10:43:45.000000000 +0100 ip6t_REJECT.ko
-rw-r--r-- 1 root root  2884 2026-06-02 10:43:45.000000000 +0100 ip6t_eui64.ko
-rw-r--r-- 1 root root  3148 2026-06-02 10:43:45.000000000 +0100 ip6t_ipv6header.ko
-rw-r--r-- 1 root root  3916 2026-06-02 10:43:45.000000000 +0100 ip6table_filter.ko
-rw-r--r-- 1 root root  4212 2026-06-02 10:43:46.000000000 +0100 ip6table_mangle.ko
-rw-r--r-- 1 root root  3684 2026-06-02 10:43:46.000000000 +0100 ip6table_nat.ko
-rw-r--r-- 1 root root  4216 2026-06-02 10:43:46.000000000 +0100 ip6table_raw.ko
-rw-r--r-- 1 root root  5136 2026-06-02 10:43:46.000000000 +0100 nf_reject_ipv6.ko

/lib/modules/5.6.3/kernel/net/netfilter:
total 400
-rw-r--r-- 1 root root  9884 2026-06-02 10:43:46.000000000 +0100 nf_conntrack_ftp.ko
-rw-r--r-- 1 root root 40524 2026-06-02 10:43:46.000000000 +0100 nf_conntrack_h323.ko
-rw-r--r-- 1 root root  8108 2026-06-02 10:43:46.000000000 +0100 nf_conntrack_irc.ko
-rw-r--r-- 1 root root 25908 2026-06-02 10:43:46.000000000 +0100 nf_conntrack_netlink.ko
-rw-r--r-- 1 root root  7552 2026-06-02 10:43:46.000000000 +0100 nf_conntrack_pptp.ko
-rw-r--r-- 1 root root  8084 2026-06-02 10:43:46.000000000 +0100 nf_conntrack_rtsp.ko
-rw-r--r-- 1 root root 26784 2026-06-02 10:43:46.000000000 +0100 nf_conntrack_sip.ko
-rw-r--r-- 1 root root  6796 2026-06-02 10:43:46.000000000 +0100 nf_conntrack_tftp.ko
-rw-r--r-- 1 root root 28708 2026-06-02 10:43:47.000000000 +0100 nf_nat.ko
-rw-r--r-- 1 root root  4460 2026-06-02 10:43:47.000000000 +0100 nf_nat_ftp.ko
-rw-r--r-- 1 root root  4104 2026-06-02 10:43:47.000000000 +0100 nf_nat_irc.ko
-rw-r--r-- 1 root root  7544 2026-06-02 10:43:47.000000000 +0100 nf_nat_rtsp.ko
-rw-r--r-- 1 root root 11772 2026-06-02 10:43:47.000000000 +0100 nf_nat_sip.ko
-rw-r--r-- 1 root root  3028 2026-06-02 10:43:47.000000000 +0100 nf_nat_tftp.ko
-rw-r--r-- 1 root root  8664 2026-06-02 10:43:47.000000000 +0100 nfnetlink.ko
-rw-r--r-- 1 root root 24224 2026-06-02 10:43:47.000000000 +0100 x_tables.ko
-rw-r--r-- 1 root root  6048 2026-06-02 10:43:47.000000000 +0100 xt_CT.ko
-rw-r--r-- 1 root root  3964 2026-06-02 10:43:47.000000000 +0100 xt_DSCP.ko
-rw-r--r-- 1 root root  3404 2026-06-02 10:43:47.000000000 +0100 xt_HL.ko
-rw-r--r-- 1 root root  3380 2026-06-02 10:43:47.000000000 +0100 xt_MASQUERADE.ko
-rw-r--r-- 1 root root  3768 2026-06-02 10:43:47.000000000 +0100 xt_NETMAP.ko
-rw-r--r-- 1 root root  3100 2026-06-02 10:43:47.000000000 +0100 xt_REDIRECT.ko
-rw-r--r-- 1 root root  6144 2026-06-02 10:43:47.000000000 +0100 xt_TCPMSS.ko
-rw-r--r-- 1 root root  5140 2026-06-02 10:43:47.000000000 +0100 xt_addrtype.ko
-rw-r--r-- 1 root root  4212 2026-06-02 10:43:47.000000000 +0100 xt_connbytes.ko
-rw-r--r-- 1 root root  4312 2026-06-02 10:43:47.000000000 +0100 xt_connmark.ko
-rw-r--r-- 1 root root  4948 2026-06-02 10:43:48.000000000 +0100 xt_conntrack.ko
-rw-r--r-- 1 root root  2988 2026-06-02 10:43:48.000000000 +0100 xt_dscp.ko
-rw-r--r-- 1 root root 16348 2026-06-02 10:43:48.000000000 +0100 xt_hashlimit.ko
-rw-r--r-- 1 root root  3404 2026-06-02 10:43:48.000000000 +0100 xt_helper.ko
-rw-r--r-- 1 root root  2812 2026-06-02 10:43:48.000000000 +0100 xt_hl.ko
-rw-r--r-- 1 root root  2748 2026-06-02 10:43:48.000000000 +0100 xt_length.ko
-rw-r--r-- 1 root root  2600 2026-06-02 10:43:48.000000000 +0100 xt_mac.ko
-rw-r--r-- 1 root root  3092 2026-06-02 10:43:48.000000000 +0100 xt_mark.ko
-rw-r--r-- 1 root root  3384 2026-06-02 10:43:48.000000000 +0100 xt_multiport.ko
-rw-r--r-- 1 root root  5064 2026-06-02 10:43:48.000000000 +0100 xt_nat.ko
-rw-r--r-- 1 root root  4000 2026-06-02 10:43:48.000000000 +0100 xt_physdev.ko
-rw-r--r-- 1 root root  4456 2026-06-02 10:43:48.000000000 +0100 xt_policy.ko
-rw-r--r-- 1 root root  2504 2026-06-02 10:43:48.000000000 +0100 xt_realm.ko
-rw-r--r-- 1 root root  3048 2026-06-02 10:43:48.000000000 +0100 xt_statistic.ko
-rw-r--r-- 1 root root  2920 2026-06-02 10:43:48.000000000 +0100 xt_string.ko
-rw-r--r-- 1 root root  3112 2026-06-02 10:43:48.000000000 +0100 xt_tcpmss.ko
-rw-r--r-- 1 root root  3968 2026-06-02 10:43:48.000000000 +0100 xt_tcpudp.ko

/lib/modules/5.6.3/kernel/net/sched:
total 84
-rw-r--r-- 1 root root 28280 2026-06-02 10:43:48.000000000 +0100 sch_cake.ko
-rw-r--r-- 1 root root  7420 2026-06-02 10:43:49.000000000 +0100 sch_codel.ko
-rw-r--r-- 1 root root 10028 2026-06-02 10:43:49.000000000 +0100 sch_fq_codel.ko
-rw-r--r-- 1 root root 24044 2026-06-02 10:43:49.000000000 +0100 sch_htb.ko
-rw-r--r-- 1 root root  8816 2026-06-02 10:43:49.000000000 +0100 sch_red.ko

/lib/modules/5.6.3/kernel/net/xfrm:
total 8
-rw-r--r-- 1 root root 7012 2026-06-02 10:43:49.000000000 +0100 xfrm_algo.ko

/lib/modules/5.6.3/misc:
total 180
-rw-r--r-- 1 root root 10368 2026-06-02 10:42:01.000000000 +0100 btest.ko
-rw-r--r-- 1 root root  1980 2026-06-02 10:44:05.000000000 +0100 c2glue.ko
-rw-r--r-- 1 root root 45520 2026-06-02 10:42:31.000000000 +0100 flash.ko
-rw-r--r-- 1 root root  5352 2026-06-02 10:42:11.000000000 +0100 jiffies.ko
-rw-r--r-- 1 root root  3000 2026-06-02 10:41:53.000000000 +0100 ledgroup.ko
-rw-r--r-- 1 root root 11124 2026-06-02 10:41:54.000000000 +0100 logring.ko
-rw-r--r-- 1 root root 22056 2026-06-02 10:42:32.000000000 +0100 mesh.ko
-rw-r--r-- 1 root root  5848 2026-06-02 10:41:54.000000000 +0100 panics.ko
-rw-r--r-- 1 root root  7732 2026-06-02 10:41:58.000000000 +0100 rb.ko
-rw-r--r-- 1 root root  5720 2026-06-02 10:42:16.000000000 +0100 romon.ko
-rw-r--r-- 1 root root  5408 2026-06-02 10:42:29.000000000 +0100 snif.ko
-rw-r--r-- 1 root root 24964 2026-06-02 10:42:15.000000000 +0100 traffic_gen.ko
-rw-r--r-- 1 root root  6636 2026-06-02 10:42:30.000000000 +0100 ulog.ko

/lib/modules/5.6.3/net:
total 16
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 bridge
drwxr-xr-x 3 root root 4096 2026-06-02 10:50:02.000000000 +0100 ipv4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 netfilter
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 sched

/lib/modules/5.6.3/net/bridge:
total 232
-rw-r--r-- 1 root root 207576 2026-06-02 10:44:34.000000000 +0100 bridge2.ko
-rw-r--r-- 1 root root  16884 2026-06-02 10:44:34.000000000 +0100 bridge2_netfilter.ko
-rw-r--r-- 1 root root   2464 2026-06-02 10:42:26.000000000 +0100 ebt_snif.ko
-rw-r--r-- 1 root root   2696 2026-06-02 10:42:28.000000000 +0100 ebt_ulog.ko

/lib/modules/5.6.3/net/ipv4:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 netfilter

/lib/modules/5.6.3/net/ipv4/netfilter:
total 24
-rw-r--r-- 1 root root 3324 2026-06-02 10:42:01.000000000 +0100 ipt_SAME.ko
-rw-r--r-- 1 root root 6140 2026-06-02 10:42:02.000000000 +0100 ipt_TARPIT.ko
-rw-r--r-- 1 root root 4060 2026-06-02 10:42:01.000000000 +0100 ipt_psd.ko
-rw-r--r-- 1 root root 2564 2026-06-02 10:42:26.000000000 +0100 ipt_snif.ko
-rw-r--r-- 1 root root 3040 2026-06-02 10:42:28.000000000 +0100 ipt_ulog.ko

/lib/modules/5.6.3/net/netfilter:
total 60
-rw-r--r-- 1 root root  2028 2026-06-02 10:43:05.000000000 +0100 nf_conntrack_ipv4.ko
-rw-r--r-- 1 root root  2028 2026-06-02 10:43:05.000000000 +0100 nf_conntrack_ipv6.ko
-rw-r--r-- 1 root root 10524 2026-06-02 10:43:09.000000000 +0100 xt_ein.ko
-rw-r--r-- 1 root root 12424 2026-06-02 10:42:06.000000000 +0100 xt_layer7.ko
-rw-r--r-- 1 root root 16556 2026-06-02 10:43:09.000000000 +0100 xt_misc.ko
-rw-r--r-- 1 root root  3960 2026-06-02 10:42:01.000000000 +0100 xt_tls.ko

/lib/modules/5.6.3/net/sched:
total 76
-rw-r--r-- 1 root root  5188 2026-06-02 10:42:18.000000000 +0100 cls_fw.ko
-rw-r--r-- 1 root root 11520 2026-06-02 10:42:20.000000000 +0100 cls_linear.ko
-rw-r--r-- 1 root root 12596 2026-06-02 10:42:34.000000000 +0100 proto_agr.ko
-rw-r--r-- 1 root root 18524 2026-06-02 10:42:34.000000000 +0100 sch_agr.ko
-rw-r--r-- 1 root root 10312 2026-06-02 10:42:02.000000000 +0100 sch_pcq.ko
-rw-r--r-- 1 root root  8032 2026-06-02 10:42:21.000000000 +0100 sch_sfq.ko

/nova:
total 12
drwxr-xr-x  2 root root 4096 2026-06-02 10:50:02.000000000 +0100 bin
drwxr-xr-x 12 root root 4096 2026-06-02 10:50:02.000000000 +0100 etc
drwxr-xr-x  5 root root 4096 2026-06-02 10:50:02.000000000 +0100 lib
lrwxrwxrwx  1 root root    8 2026-06-02 10:50:02.000000000 +0100 logs -> /rw/logs
lrwxrwxrwx  1 root root    9 2026-06-02 10:50:02.000000000 +0100 store -> /rw/store

/nova/bin:
total 9264
-rwxr-xr-x 1 root root   24328 2026-06-02 10:27:07.000000000 +0100 agent
-rwxr-xr-x 1 root root   13128 2026-06-02 10:27:08.000000000 +0100 arpd
-rwxr-xr-x 1 root root   18208 2026-06-02 10:27:40.000000000 +0100 backup
-rwxr-xr-x 1 root root  307036 2026-06-02 10:28:51.000000000 +0100 bridge2
-rwxr-xr-x 1 root root   82648 2026-06-02 10:27:50.000000000 +0100 btest
-rwxr-xr-x 1 root root 1110344 2026-06-02 10:28:42.000000000 +0100 cerm
lrwxrwxrwx 1 root root       4 2026-06-02 10:28:43.000000000 +0100 cerm-worker -> cerm
-rwxr-xr-x 1 root root  176760 2026-06-02 10:28:23.000000000 +0100 cloud
-rwxr-xr-x 1 root root  100544 2026-06-02 10:27:37.000000000 +0100 crossfig
-rwxr-xr-x 1 root root   67832 2026-06-02 10:27:53.000000000 +0100 detnet
-rwxr-xr-x 1 root root   98436 2026-06-02 10:27:20.000000000 +0100 discover
-rwxr-xr-x 1 root root   40748 2026-06-02 10:27:45.000000000 +0100 email
-rwxr-xr-x 1 root root  162460 2026-06-02 10:28:21.000000000 +0100 fileman
-rwxr-xr-x 1 root root   35124 2026-06-02 10:27:07.000000000 +0100 ftpd
-rwxr-xr-x 1 root root  157520 2026-06-02 10:27:27.000000000 +0100 graphing
-rwxr-xr-x 1 root root   64800 2026-06-02 10:27:36.000000000 +0100 igmpproxy
-rwxr-xr-x 1 root root   84256 2026-06-02 10:27:57.000000000 +0100 installer
-rwxr-xr-x 1 root root   30560 2026-06-02 10:27:57.000000000 +0100 ippool
-rwxr-xr-x 1 root root   55292 2026-06-02 10:27:44.000000000 +0100 keyman
-rwxr-xr-x 1 root root   48256 2026-06-02 10:27:21.000000000 +0100 kidcontrol
-rwxr-xr-x 1 root root   77432 2026-06-02 10:28:01.000000000 +0100 led
-rwxr-xr-x 1 root root  129196 2026-06-02 10:28:20.000000000 +0100 letsencrypt
-rwxr-xr-x 1 root root   85340 2026-06-02 10:27:51.000000000 +0100 loader
-rwxr-xr-x 1 root root   92544 2026-06-02 10:27:11.000000000 +0100 log
-rwxr-xr-x 1 root root  179088 2026-06-02 10:29:03.000000000 +0100 login
-rwxr-xr-x 1 root root   55084 2026-06-02 10:27:09.000000000 +0100 logmaker
-rwxr-xr-x 1 root root   22940 2026-06-02 10:27:06.000000000 +0100 macping
-rwxr-xr-x 1 root root   38920 2026-06-02 10:27:42.000000000 +0100 mactel
-rwxr-xr-x 1 root root   23640 2026-06-02 10:27:08.000000000 +0100 mepty
-rwxr-xr-x 1 root root   85836 2026-06-02 10:27:23.000000000 +0100 mesh
-rwxr-xr-x 1 root root   71960 2026-06-02 10:28:45.000000000 +0100 mode
lrwxrwxrwx 1 root root       7 2026-06-02 10:28:10.000000000 +0100 modprobed -> moduler
-rwxr-xr-x 1 root root  125676 2026-06-02 10:28:10.000000000 +0100 moduler
-rwxr-xr-x 1 root root   80696 2026-06-02 10:28:26.000000000 +0100 mproxy
-rwxr-xr-x 1 root root   61972 2026-06-02 10:27:46.000000000 +0100 mtget
-rwxr-xr-x 1 root root   49536 2026-06-02 10:27:17.000000000 +0100 natpmp
-rwxr-xr-x 1 root root  836596 2026-06-02 10:29:40.000000000 +0100 net
-rwxr-xr-x 1 root root   71904 2026-06-02 10:27:50.000000000 +0100 ntp
-rwxr-xr-x 1 root root    6184 2026-06-02 10:27:05.000000000 +0100 panicsl
-rwxr-xr-x 1 root root  898936 2026-06-02 10:29:32.000000000 +0100 parser
-rwxr-xr-x 1 root root   47300 2026-06-02 10:27:09.000000000 +0100 ping
-rwxr-xr-x 1 root root   49096 2026-06-02 10:27:15.000000000 +0100 portman
-rwxr-xr-x 1 root root   34776 2026-06-02 10:44:46.000000000 +0100 profiler
-rwxr-xr-x 1 root root  154012 2026-06-02 10:27:10.000000000 +0100 quickset
-rwxr-xr-x 1 root root   57972 2026-06-02 10:27:59.000000000 +0100 radius
-rwxr-xr-x 1 root root  170664 2026-06-02 10:28:32.000000000 +0100 resolver
-rwxr-xr-x 1 root root   10024 2026-06-02 10:28:28.000000000 +0100 resolver_ctl
-rwxr-xr-x 1 root root   96716 2026-06-02 10:27:58.000000000 +0100 romon
-rwxr-xr-x 1 root root 1234620 2026-06-02 10:30:05.000000000 +0100 route
-rwxr-xr-x 1 root root   16792 2026-06-02 10:27:50.000000000 +0100 rtrace
-rwxr-xr-x 1 root root   44016 2026-06-02 10:28:02.000000000 +0100 sermgr
-rwxr-xr-x 1 root root   46064 2026-06-02 10:27:17.000000000 +0100 sertcp
-rwxr-xr-x 1 root root   73212 2026-06-02 10:27:17.000000000 +0100 sniffer
-rwxr-xr-x 1 root root  223976 2026-06-02 10:28:41.000000000 +0100 snmp
-rwxr-xr-x 1 root root   66636 2026-06-02 10:27:24.000000000 +0100 socks
-rwxr-xr-x 1 root root   37496 2026-06-02 10:27:20.000000000 +0100 socksify
-rwxr-xr-x 1 root root  125872 2026-06-02 10:28:16.000000000 +0100 ssld
-rwxr-xr-x 1 root root   38816 2026-06-02 10:27:46.000000000 +0100 sstore
-rwxr-xr-x 1 root root  244992 2026-06-02 10:29:06.000000000 +0100 sys2
-rwxr-xr-x 1 root root   20936 2026-06-02 10:27:08.000000000 +0100 telnet
-rwxr-xr-x 1 root root   30768 2026-06-02 10:27:09.000000000 +0100 telser
-rwxr-xr-x 1 root root   37780 2026-06-02 10:27:18.000000000 +0100 tftpd
-rwxr-xr-x 1 root root   34636 2026-06-02 10:27:08.000000000 +0100 traceroute
-rwxr-xr-x 1 root root  112912 2026-06-02 10:27:21.000000000 +0100 trafficgen
-rwxr-xr-x 1 root root   23544 2026-06-02 10:27:14.000000000 +0100 trafflow
-rwxr-xr-x 1 root root   26664 2026-06-02 10:27:06.000000000 +0100 undo
-rwxr-xr-x 1 root root  100652 2026-06-02 10:27:26.000000000 +0100 upnp
-rwxr-xr-x 1 root root   86064 2026-06-02 10:28:15.000000000 +0100 user
-rwxr-xr-x 1 root root   99260 2026-06-02 10:28:03.000000000 +0100 vrrp
-rwxr-xr-x 1 root root   30816 2026-06-02 10:27:15.000000000 +0100 watchdog
-rwxr-xr-x 1 root root  151776 2026-06-02 10:28:18.000000000 +0100 wproxy
-rwxr-xr-x 1 root root  146356 2026-06-02 10:28:24.000000000 +0100 www

/nova/etc:
total 56
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 ca
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 leds
-rwxr-xr-x 1 root root 1341 2026-05-26 11:47:41.000000000 +0100 lognames
-rwxr-xr-x 1 root root   10 2026-01-08 09:06:11.000000000 +0000 logo
-rwxr-xr-x 1 root root    1 2026-01-08 09:06:11.000000000 +0000 manual-url
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 net-remote
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 pciinfo
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 radius
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 services
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 system_names
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 upnp
-rwxr-xr-x 1 root root   26 2026-01-08 09:06:11.000000000 +0000 url
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 user
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 www

/nova/etc/ca:
total 8
-rwxr-xr-x 1 root root  914 2026-01-08 09:06:11.000000000 +0000 DigiCert_Global_Root_G2.der
-rwxr-xr-x 1 root root 1391 2026-01-08 09:06:11.000000000 +0000 ISRG_Root_X1.der

/nova/etc/leds:
total 4
-rwxr-xr-x 1 root root 12 2026-06-02 10:26:49.000000000 +0100 system.x3

/nova/etc/net-remote:
total 4
-rwxr-xr-x 1 root root 1204 2026-06-02 10:26:49.000000000 +0100 system.x3

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 763 2026-06-02 10:26:49.000000000 +0100 system.x3

/nova/etc/radius:
total 4
-rwxr-xr-x 1 root root 101 2026-06-02 10:26:49.000000000 +0100 system.x3

/nova/etc/services:
total 4
-rwxr-xr-x 1 root root 1148 2026-06-02 10:26:49.000000000 +0100 system.x3

/nova/etc/system_names:
total 4
-rwxr-xr-x 1 root root 1324 2026-06-02 10:26:49.000000000 +0100 system.x3

/nova/etc/upnp:
total 40
-rwxr-xr-x 1 root root   930 2026-01-08 09:06:12.000000000 +0000 logo16.gif
-rwxr-xr-x 1 root root  1173 2026-01-08 09:06:12.000000000 +0000 logo32.gif
-rwxr-xr-x 1 root root  1504 2026-01-08 09:06:12.000000000 +0000 logo48.gif
-rwxr-xr-x 1 root root   735 2026-01-08 09:06:12.000000000 +0000 osinfo.xml
-rwxr-xr-x 1 root root  5928 2026-01-08 09:06:12.000000000 +0000 wancommonifcfg.xml
-rwxr-xr-x 1 root root 13444 2026-01-08 09:06:12.000000000 +0000 wanipconn.xml

/nova/etc/user:
total 4
-rwxr-xr-x 1 root root 2230 2026-06-02 10:26:49.000000000 +0100 system.x3

/nova/etc/www:
total 4
-rwxr-xr-x 1 root root 2509 2026-06-02 10:26:49.000000000 +0100 system.x3

/nova/lib:
total 12
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 console
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 defconf
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 profiler

/nova/lib/console:
total 1528
-rwxr-xr-x 1 root root 1556256 2026-06-02 10:29:39.000000000 +0100 1073741824.mem
-rwxr-xr-x 1 root root     510 2026-01-08 09:06:11.000000000 +0000 logo.txt
-rwxr-xr-x 1 root root      18 2026-01-08 09:06:11.000000000 +0000 sublogo.txt

/nova/lib/defconf:
total 108
-rwxr-xr-x 1 root root   567 2026-01-08 09:06:11.000000000 +0000 defconf
-rwxr-xr-x 1 root root  4995 2026-01-08 09:06:11.000000000 +0000 defconf-caps
-rwxr-xr-x 1 root root  3700 2026-01-08 09:06:11.000000000 +0000 defconf-wps-sync
-rwxr-xr-x 1 root root 91442 2026-06-02 10:25:11.000000000 +0100 get-custom-defconf

/nova/lib/profiler:
total 16
-rwxr-xr-x 1 root root 13744 2026-06-02 10:44:45.000000000 +0100 system.p

/proc:
total 0

/ram:
total 0

/sbin:
total 92
-rwxr-xr-x 1 root root 24876 2026-06-02 10:26:47.000000000 +0100 nandfix
-rwxr-xr-x 1 root root 65080 2026-06-02 10:27:46.000000000 +0100 sysinit

/sys:
total 0

/var:
total 12
lrwxrwxrwx 1 root root    6 2026-06-02 10:50:02.000000000 +0100 cm -> /rw/cm
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 deinstall
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 lock
lrwxrwxrwx 1 root root    8 2026-06-02 10:50:02.000000000 +0100 pckg -> /rw/pckg
lrwxrwxrwx 1 root root   14 2026-06-02 10:50:02.000000000 +0100 pdb -> /flash/var/pdb
drwxr-xr-x 2 root root 4096 2026-06-02 10:50:02.000000000 +0100 post
lrwxrwxrwx 1 root root    7 2026-06-02 10:50:02.000000000 +0100 run -> /rw/run
lrwxrwxrwx 1 root root    4 2026-06-02 10:50:02.000000000 +0100 tmp -> /tmp

/var/deinstall:
total 0

/var/lock:
total 0

/var/post:
total 0
```

