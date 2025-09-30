### container.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 113036 bytes, 30 inodes, blocksize: 262144 bytes, created: Mon Feb 24 09:37:19 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-02-24 09:36:47.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-24 09:37:09.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-24 09:36:47.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-24 09:36:47.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:36:47.000000000 +0000 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root 798 2025-02-24 09:36:47.000000000 +0000 container-718a12c6e9d5.jg.gz
-rwxr-xr-x 1 root root 107 2025-02-24 09:36:47.000000000 +0000 container.info
lrwxrwxrwx 1 root root  28 2025-02-24 09:36:47.000000000 +0000 container.jg.gz -> container-718a12c6e9d5.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-02-24 09:37:09.000000000 +0000 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-02-24 09:37:12.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 3 root root 4096 2025-02-24 09:37:09.000000000 +0000 kernel
-rw-r--r-- 1 root root   18 2025-02-24 09:37:15.000000000 +0000 modules.dep.container

/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 4 root root 4096 2025-02-24 09:37:09.000000000 +0000 fs

/lib/modules/5.6.3/kernel/fs:
total 8
drwxr-xr-x 2 root root 4096 2025-02-24 09:37:09.000000000 +0000 exportfs
drwxr-xr-x 2 root root 4096 2025-02-24 09:37:09.000000000 +0000 overlayfs

/lib/modules/5.6.3/kernel/fs/exportfs:
total 8
-rw-r--r-- 1 root root 5948 2025-02-24 09:28:36.000000000 +0000 exportfs.ko

/lib/modules/5.6.3/kernel/fs/overlayfs:
total 100
-rw-r--r-- 1 root root 98996 2025-02-24 09:28:37.000000000 +0000 overlay.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-24 09:36:47.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-24 09:36:47.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-02-24 09:36:47.000000000 +0000 lib

/nova/bin:
total 236
-rwxr-xr-x 1 root root  55200 2025-02-24 09:36:47.000000000 +0000 apps
-rwxr-xr-x 1 root root 146492 2025-02-24 09:36:47.000000000 +0000 container
-rwxr-xr-x 1 root root  13632 2025-02-24 09:36:47.000000000 +0000 shell
-rwxr-xr-x 1 root root   9524 2025-02-24 09:36:47.000000000 +0000 test_http
-rwxr-xr-x 1 root root   5332 2025-02-24 09:36:47.000000000 +0000 test_path_delete

/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:36:47.000000000 +0000 pciinfo

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 146 2025-02-24 09:36:47.000000000 +0000 container.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-24 09:36:47.000000000 +0000 console

/nova/lib/console:
total 32
-rwxr-xr-x 1 root root 29439 2025-02-24 09:36:47.000000000 +0000 1291845632.mem
```

