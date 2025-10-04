### container.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 123120 bytes, 28 inodes, blocksize: 524288 bytes, created: Mon Sep 29 10:24:07 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-09-29 11:23:31.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-09-29 11:23:56.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-09-29 11:23:32.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-09-29 11:23:31.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-09-29 11:23:31.000000000 +0100 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root 1425 2025-09-29 11:23:31.000000000 +0100 container-3e1a84cfbecc.jg.gz
-rwxr-xr-x 1 root root  109 2025-09-29 11:23:31.000000000 +0100 container.info
lrwxrwxrwx 1 root root   28 2025-09-29 11:23:31.000000000 +0100 container.jg.gz -> container-3e1a84cfbecc.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-09-29 11:23:56.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-09-29 11:23:59.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 3 root root 4096 2025-09-29 11:23:56.000000000 +0100 kernel
-rw-r--r-- 1 root root   18 2025-09-29 11:24:03.000000000 +0100 modules.dep.container

/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 4 root root 4096 2025-09-29 11:23:56.000000000 +0100 fs

/lib/modules/5.6.3/kernel/fs:
total 8
drwxr-xr-x 2 root root 4096 2025-09-29 11:23:56.000000000 +0100 exportfs
drwxr-xr-x 2 root root 4096 2025-09-29 11:23:56.000000000 +0100 overlayfs

/lib/modules/5.6.3/kernel/fs/exportfs:
total 8
-rw-r--r-- 1 root root 5948 2025-09-29 11:16:08.000000000 +0100 exportfs.ko

/lib/modules/5.6.3/kernel/fs/overlayfs:
total 100
-rw-r--r-- 1 root root 98996 2025-09-29 11:16:09.000000000 +0100 overlay.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-09-29 11:23:31.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-09-29 11:23:32.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-09-29 11:23:31.000000000 +0100 lib

/nova/bin:
total 268
-rwxr-xr-x 1 root root  63444 2025-09-29 11:23:31.000000000 +0100 apps
-rwxr-xr-x 1 root root 175832 2025-09-29 11:23:30.000000000 +0100 container
-rwxr-xr-x 1 root root  31592 2025-09-29 11:23:30.000000000 +0100 shell

/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-09-29 11:23:32.000000000 +0100 pciinfo

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 146 2025-09-29 11:23:31.000000000 +0100 container.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-09-29 11:23:31.000000000 +0100 console

/nova/lib/console:
total 40
-rwxr-xr-x 1 root root 38645 2025-09-29 11:23:31.000000000 +0100 1291845632.mem
```

