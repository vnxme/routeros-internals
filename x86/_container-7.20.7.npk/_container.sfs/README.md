### container.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 168334 bytes, 33 inodes, blocksize: 262144 bytes, created: Thu Jan  8 10:30:15 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2026-01-08 10:29:41.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-08 10:30:15.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-08 10:29:41.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:29:41.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:29:41.000000000 +0000 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root 1425 2026-01-08 10:29:41.000000000 +0000 container-3e1a84cfbecc.jg.gz
-rwxr-xr-x 1 root root  111 2026-01-08 10:29:41.000000000 +0000 container.info
lrwxrwxrwx 1 root root   28 2026-01-08 10:29:41.000000000 +0000 container.jg.gz -> container-3e1a84cfbecc.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:30:15.000000000 +0000 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:30:15.000000000 +0000 5.6.3-64

/lib/modules/5.6.3-64:
total 8
drwxr-xr-x 4 root root 4096 2026-01-08 10:30:15.000000000 +0000 kernel
-rw-r--r-- 1 root root   31 2026-01-08 10:30:08.000000000 +0000 modules.dep.container

/lib/modules/5.6.3-64/kernel:
total 8
drwxr-xr-x 3 root root 4096 2026-01-08 10:30:15.000000000 +0000 drivers
drwxr-xr-x 4 root root 4096 2026-01-08 10:30:15.000000000 +0000 fs

/lib/modules/5.6.3-64/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2026-01-08 10:30:15.000000000 +0000 staging

/lib/modules/5.6.3-64/kernel/drivers/staging:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:30:15.000000000 +0000 coral-gasket

/lib/modules/5.6.3-64/kernel/drivers/staging/coral-gasket:
total 76
-rw-r--r-- 1 root root 20256 2026-01-08 10:24:29.000000000 +0000 apex.ko
-rw-r--r-- 1 root root 54512 2026-01-08 10:24:29.000000000 +0000 gasket.ko

/lib/modules/5.6.3-64/kernel/fs:
total 8
drwxr-xr-x 2 root root 4096 2026-01-08 10:30:15.000000000 +0000 exportfs
drwxr-xr-x 2 root root 4096 2026-01-08 10:30:15.000000000 +0000 overlayfs

/lib/modules/5.6.3-64/kernel/fs/exportfs:
total 8
-rw-r--r-- 1 root root 6984 2026-01-08 10:24:29.000000000 +0000 exportfs.ko

/lib/modules/5.6.3-64/kernel/fs/overlayfs:
total 116
-rw-r--r-- 1 root root 116696 2026-01-08 10:24:29.000000000 +0000 overlay.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-08 10:29:40.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2026-01-08 10:29:41.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-08 10:29:40.000000000 +0000 lib

/nova/bin:
total 288
-rwxr-xr-x 1 root root  63336 2026-01-08 10:29:40.000000000 +0000 apps
-rwxr-xr-x 1 root root 186912 2026-01-08 10:29:40.000000000 +0000 container
-rwxr-xr-x 1 root root  38500 2026-01-08 10:29:40.000000000 +0000 shell

/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:29:41.000000000 +0000 pciinfo

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 146 2026-01-08 10:29:41.000000000 +0000 container.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-08 10:29:40.000000000 +0000 console

/nova/lib/console:
total 40
-rwxr-xr-x 1 root root 38645 2026-01-08 10:29:40.000000000 +0000 1291845632.mem
```

