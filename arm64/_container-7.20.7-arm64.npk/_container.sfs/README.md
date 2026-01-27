### container.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 207972 bytes, 31 inodes, blocksize: 524288 bytes, created: Thu Jan  8 10:30:17 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2026-01-08 10:29:41.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-08 10:30:03.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-08 10:30:17.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:29:41.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:30:17.000000000 +0000 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root 1425 2026-01-08 10:29:41.000000000 +0000 container-3e1a84cfbecc.jg.gz
-rwxr-xr-x 1 root root  111 2026-01-08 10:29:41.000000000 +0000 container.info
lrwxrwxrwx 1 root root   28 2026-01-08 10:30:17.000000000 +0000 container.jg.gz -> container-3e1a84cfbecc.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:30:03.000000000 +0000 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:30:12.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2026-01-08 10:30:03.000000000 +0000 kernel
-rw-r--r-- 1 root root   13 2026-01-08 10:30:15.000000000 +0000 modules.dep.container

/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 3 root root 4096 2026-01-08 10:30:03.000000000 +0000 drivers
drwxr-xr-x 3 root root 4096 2026-01-08 10:30:03.000000000 +0000 net

/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:30:03.000000000 +0000 staging

/lib/modules/5.6.3/kernel/drivers/staging:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:30:03.000000000 +0000 coral-gasket

/lib/modules/5.6.3/kernel/drivers/staging/coral-gasket:
total 88
-rw-r--r-- 1 root root 22280 2026-01-08 10:23:55.000000000 +0000 apex.ko
-rw-r--r-- 1 root root 64264 2026-01-08 10:23:55.000000000 +0000 gasket.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:30:04.000000000 +0000 sctp

/lib/modules/5.6.3/kernel/net/sctp:
total 384
-rw-r--r-- 1 root root 389984 2026-01-08 10:24:03.000000000 +0000 sctp.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-08 10:30:17.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2026-01-08 10:29:41.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-08 10:30:17.000000000 +0000 lib

/nova/bin:
total 268
-rwxr-xr-x 1 root root  63444 2026-01-08 10:29:40.000000000 +0000 apps
-rwxr-xr-x 1 root root 175832 2026-01-08 10:29:40.000000000 +0000 container
-rwxr-xr-x 1 root root  31592 2026-01-08 10:29:40.000000000 +0000 shell

/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:29:41.000000000 +0000 pciinfo

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 146 2026-01-08 10:29:41.000000000 +0000 container.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:30:17.000000000 +0000 console

/nova/lib/console:
total 40
-rwxr-xr-x 1 root root 38645 2026-01-08 10:29:40.000000000 +0000 1291845632.mem
```

