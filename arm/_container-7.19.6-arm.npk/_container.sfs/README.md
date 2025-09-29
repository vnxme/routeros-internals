### container.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 110496 bytes, 30 inodes, blocksize: 524288 bytes, created: Fri Sep 12 09:52:15 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-09-12 10:51:36.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-09-12 10:52:03.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-09-12 10:51:36.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 10:51:36.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 10:51:36.000000000 +0100 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root 836 2025-09-12 10:51:36.000000000 +0100 container-25e363817628.jg.gz
-rwxr-xr-x 1 root root 110 2025-09-12 10:51:36.000000000 +0100 container.info
lrwxrwxrwx 1 root root  28 2025-09-12 10:51:36.000000000 +0100 container.jg.gz -> container-25e363817628.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 10:52:03.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-09-12 10:52:07.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 3 root root 4096 2025-09-12 10:52:03.000000000 +0100 kernel
-rw-r--r-- 1 root root   18 2025-09-12 10:52:10.000000000 +0100 modules.dep.container

/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 4 root root 4096 2025-09-12 10:52:03.000000000 +0100 fs

/lib/modules/5.6.3/kernel/fs:
total 8
drwxr-xr-x 2 root root 4096 2025-09-12 10:52:03.000000000 +0100 exportfs
drwxr-xr-x 2 root root 4096 2025-09-12 10:52:03.000000000 +0100 overlayfs

/lib/modules/5.6.3/kernel/fs/exportfs:
total 8
-rw-r--r-- 1 root root 5948 2025-09-12 10:44:19.000000000 +0100 exportfs.ko

/lib/modules/5.6.3/kernel/fs/overlayfs:
total 100
-rw-r--r-- 1 root root 98996 2025-09-12 10:44:20.000000000 +0100 overlay.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-09-12 10:51:35.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-09-12 10:51:36.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-09-12 10:51:36.000000000 +0100 lib

/nova/bin:
total 240
-rwxr-xr-x 1 root root  55204 2025-09-12 10:51:35.000000000 +0100 apps
-rwxr-xr-x 1 root root 150604 2025-09-12 10:51:35.000000000 +0100 container
-rwxr-xr-x 1 root root  13576 2025-09-12 10:51:35.000000000 +0100 shell
-rwxr-xr-x 1 root root   9524 2025-09-12 10:51:35.000000000 +0100 test_http
-rwxr-xr-x 1 root root   5332 2025-09-12 10:51:35.000000000 +0100 test_path_delete

/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 10:51:36.000000000 +0100 pciinfo

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 146 2025-09-12 10:51:36.000000000 +0100 container.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-09-12 10:51:36.000000000 +0100 console

/nova/lib/console:
total 32
-rwxr-xr-x 1 root root 29471 2025-09-12 10:51:36.000000000 +0100 1291845632.mem
```

