### container.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 145148 bytes, 28 inodes, blocksize: 524288 bytes, created: Thu Jan 29 10:49:53 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2026-01-29 10:49:24.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2026-01-29 10:49:35.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2026-01-29 10:49:24.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:49:24.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:49:24.000000000 +0000 webfig

/home/web/webfig:
total 12
-rw-r--r-- 1 root root 4248 2026-01-29 10:49:24.000000000 +0000 container-df84abf750dc.jg.gz
-rwxr-xr-x 1 root root  111 2026-01-29 10:49:24.000000000 +0000 container.info
lrwxrwxrwx 1 root root   28 2026-01-29 10:49:24.000000000 +0000 container.jg.gz -> container-df84abf750dc.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:49:35.000000000 +0000 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-01-29 10:49:44.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 3 root root 4096 2026-01-29 10:49:35.000000000 +0000 kernel
-rw-r--r-- 1 root root   18 2026-01-29 10:49:47.000000000 +0000 modules.dep.container

/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 4 root root 4096 2026-01-29 10:49:35.000000000 +0000 fs

/lib/modules/5.6.3/kernel/fs:
total 8
drwxr-xr-x 2 root root 4096 2026-01-29 10:49:35.000000000 +0000 exportfs
drwxr-xr-x 2 root root 4096 2026-01-29 10:49:35.000000000 +0000 overlayfs

/lib/modules/5.6.3/kernel/fs/exportfs:
total 8
-rw-r--r-- 1 root root 5948 2026-01-29 10:40:05.000000000 +0000 exportfs.ko

/lib/modules/5.6.3/kernel/fs/overlayfs:
total 100
-rw-r--r-- 1 root root 98996 2026-01-29 10:40:06.000000000 +0000 overlay.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-01-29 10:49:20.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2026-01-29 10:49:24.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2026-01-29 10:49:23.000000000 +0000 lib

/nova/bin:
total 288
-rwxr-xr-x 1 root root 221156 2026-01-29 10:49:20.000000000 +0000 container
-rwxr-xr-x 1 root root  26192 2026-01-29 10:49:20.000000000 +0000 run
-rwxr-xr-x 1 root root  44020 2026-01-29 10:49:20.000000000 +0000 shell

/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:49:24.000000000 +0000 pciinfo

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 251 2026-01-29 10:49:24.000000000 +0000 container.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-01-29 10:49:23.000000000 +0000 console

/nova/lib/console:
total 52
-rwxr-xr-x 1 root root 51656 2026-01-29 10:49:23.000000000 +0000 1291845632.mem
```

