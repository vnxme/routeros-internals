### container.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 142576 bytes, 28 inodes, blocksize: 524288 bytes, created: Tue Oct 14 13:41:21 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-10-14 14:40:54.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2025-10-14 14:41:03.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2025-10-14 14:40:54.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:40:54.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:40:54.000000000 +0100 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root 4069 2025-10-14 14:40:53.000000000 +0100 container-14440e55cf17.jg.gz
-rwxr-xr-x 1 root root  114 2025-10-14 14:40:53.000000000 +0100 container.info
lrwxrwxrwx 1 root root   28 2025-10-14 14:40:54.000000000 +0100 container.jg.gz -> container-14440e55cf17.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:41:03.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-10-14 14:41:12.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 3 root root 4096 2025-10-14 14:41:03.000000000 +0100 kernel
-rw-r--r-- 1 root root   18 2025-10-14 14:41:15.000000000 +0100 modules.dep.container

/lib/modules/5.6.3/kernel:
total 4
drwxr-xr-x 4 root root 4096 2025-10-14 14:41:03.000000000 +0100 fs

/lib/modules/5.6.3/kernel/fs:
total 8
drwxr-xr-x 2 root root 4096 2025-10-14 14:41:03.000000000 +0100 exportfs
drwxr-xr-x 2 root root 4096 2025-10-14 14:41:04.000000000 +0100 overlayfs

/lib/modules/5.6.3/kernel/fs/exportfs:
total 8
-rw-r--r-- 1 root root 5948 2025-10-14 14:32:23.000000000 +0100 exportfs.ko

/lib/modules/5.6.3/kernel/fs/overlayfs:
total 100
-rw-r--r-- 1 root root 98996 2025-10-14 14:32:24.000000000 +0100 overlay.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-10-14 14:40:49.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2025-10-14 14:40:54.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2025-10-14 14:40:53.000000000 +0100 lib

/nova/bin:
total 276
-rwxr-xr-x 1 root root 212892 2025-10-14 14:40:49.000000000 +0100 container
-rwxr-xr-x 1 root root  26192 2025-10-14 14:40:49.000000000 +0100 run
-rwxr-xr-x 1 root root  39892 2025-10-14 14:40:49.000000000 +0100 shell

/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:40:54.000000000 +0100 pciinfo

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 251 2025-10-14 14:40:54.000000000 +0100 container.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-10-14 14:40:53.000000000 +0100 console

/nova/lib/console:
total 52
-rwxr-xr-x 1 root root 51336 2025-10-14 14:40:53.000000000 +0100 1291845632.mem
```

