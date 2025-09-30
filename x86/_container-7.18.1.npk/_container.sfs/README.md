### container.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 148650 bytes, 35 inodes, blocksize: 262144 bytes, created: Fri Feb 28 12:20:39 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-02-28 12:20:06.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-28 12:20:39.000000000 +0000 lib
drwxr-xr-x 5 root root 4096 2025-02-28 12:20:07.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:20:06.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:20:06.000000000 +0000 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root 798 2025-02-28 12:20:06.000000000 +0000 container-718a12c6e9d5.jg.gz
-rwxr-xr-x 1 root root 109 2025-02-28 12:20:06.000000000 +0000 container.info
lrwxrwxrwx 1 root root  28 2025-02-28 12:20:06.000000000 +0000 container.jg.gz -> container-718a12c6e9d5.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:20:39.000000000 +0000 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:20:39.000000000 +0000 5.6.3-64

/lib/modules/5.6.3-64:
total 8
drwxr-xr-x 4 root root 4096 2025-02-28 12:20:39.000000000 +0000 kernel
-rw-r--r-- 1 root root   31 2025-02-28 12:20:33.000000000 +0000 modules.dep.container

/lib/modules/5.6.3-64/kernel:
total 8
drwxr-xr-x 3 root root 4096 2025-02-28 12:20:39.000000000 +0000 drivers
drwxr-xr-x 4 root root 4096 2025-02-28 12:20:39.000000000 +0000 fs

/lib/modules/5.6.3-64/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2025-02-28 12:20:39.000000000 +0000 staging

/lib/modules/5.6.3-64/kernel/drivers/staging:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:20:39.000000000 +0000 coral-gasket

/lib/modules/5.6.3-64/kernel/drivers/staging/coral-gasket:
total 76
-rw-r--r-- 1 root root 20256 2025-02-28 12:14:29.000000000 +0000 apex.ko
-rw-r--r-- 1 root root 54512 2025-02-28 12:14:29.000000000 +0000 gasket.ko

/lib/modules/5.6.3-64/kernel/fs:
total 8
drwxr-xr-x 2 root root 4096 2025-02-28 12:20:39.000000000 +0000 exportfs
drwxr-xr-x 2 root root 4096 2025-02-28 12:20:39.000000000 +0000 overlayfs

/lib/modules/5.6.3-64/kernel/fs/exportfs:
total 8
-rw-r--r-- 1 root root 6984 2025-02-28 12:14:30.000000000 +0000 exportfs.ko

/lib/modules/5.6.3-64/kernel/fs/overlayfs:
total 116
-rw-r--r-- 1 root root 116696 2025-02-28 12:14:30.000000000 +0000 overlay.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2025-02-28 12:20:05.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-28 12:20:07.000000000 +0000 etc
drwxr-xr-x 3 root root 4096 2025-02-28 12:20:06.000000000 +0000 lib

/nova/bin:
total 264
-rwxr-xr-x 1 root root  55092 2025-02-28 12:20:05.000000000 +0000 apps
-rwxr-xr-x 1 root root 157280 2025-02-28 12:20:05.000000000 +0000 container
-rwxr-xr-x 1 root root  17568 2025-02-28 12:20:05.000000000 +0000 shell
-rwxr-xr-x 1 root root  13512 2025-02-28 12:20:05.000000000 +0000 test_http
-rwxr-xr-x 1 root root  13368 2025-02-28 12:20:05.000000000 +0000 test_path_delete

/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:20:07.000000000 +0000 pciinfo

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 146 2025-02-28 12:20:07.000000000 +0000 container.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-28 12:20:06.000000000 +0000 console

/nova/lib/console:
total 32
-rwxr-xr-x 1 root root 29439 2025-02-28 12:20:06.000000000 +0000 1291845632.mem
```

