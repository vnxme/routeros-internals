### container.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 224690 bytes, 31 inodes, blocksize: 262144 bytes, created: Sat Oct 11 01:52:29 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-10-10 10:39:01.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-10 10:39:25.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-10 10:39:38.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:39:01.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:39:38.000000000 +0100 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root 1425 2025-10-10 10:39:01.000000000 +0100 container-3e1a84cfbecc.jg.gz
-rwxr-xr-x 1 root root  111 2025-10-10 10:39:01.000000000 +0100 container.info
lrwxrwxrwx 1 root root   28 2025-10-10 10:39:38.000000000 +0100 container.jg.gz -> container-3e1a84cfbecc.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:39:25.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:39:32.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2025-10-10 10:39:25.000000000 +0100 kernel
-rw-r--r-- 1 root root   13 2025-10-10 10:39:35.000000000 +0100 modules.dep.container

/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 3 root root 4096 2025-10-10 10:39:25.000000000 +0100 drivers
drwxr-xr-x 3 root root 4096 2025-10-10 10:39:25.000000000 +0100 net

/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-10-10 10:39:25.000000000 +0100 staging

/lib/modules/5.6.3/kernel/drivers/staging:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:39:25.000000000 +0100 coral-gasket

/lib/modules/5.6.3/kernel/drivers/staging/coral-gasket:
total 88
-rw-r--r-- 1 root root 22280 2025-10-10 10:32:30.000000000 +0100 apex.ko
-rw-r--r-- 1 root root 64264 2025-10-10 10:32:30.000000000 +0100 gasket.ko

/lib/modules/5.6.3/kernel/net:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:39:25.000000000 +0100 sctp

/lib/modules/5.6.3/kernel/net/sctp:
total 384
-rw-r--r-- 1 root root 389984 2025-10-10 10:32:38.000000000 +0100 sctp.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-10 10:39:38.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-10 10:39:01.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-10 10:39:38.000000000 +0100 lib

/nova/bin:
total 268
-rwxr-xr-x 1 root root  63444 2025-10-10 10:39:00.000000000 +0100 apps
-rwxr-xr-x 1 root root 175832 2025-10-10 10:39:00.000000000 +0100 container
-rwxr-xr-x 1 root root  31592 2025-10-10 10:39:00.000000000 +0100 shell

/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:39:01.000000000 +0100 pciinfo

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 146 2025-10-10 10:39:01.000000000 +0100 container.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-10 10:39:38.000000000 +0100 console

/nova/lib/console:
total 40
-rwxr-xr-x 1 root root 38645 2025-10-10 10:39:01.000000000 +0100 1291845632.mem
```

