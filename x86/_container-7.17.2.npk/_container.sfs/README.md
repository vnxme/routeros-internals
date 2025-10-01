### container.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 104050 bytes, 26 inodes, blocksize: 262144 bytes, created: Thu Feb  6 09:58:50 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2025-02-06 09:58:20.000000000 +0000 home
drwxr-xr-x 3 root root 4096 2025-02-06 09:58:50.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2025-02-06 09:58:20.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 09:58:20.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 09:58:20.000000000 +0000 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root 798 2025-02-06 09:58:20.000000000 +0000 container-718a12c6e9d5.jg.gz
-rwxr-xr-x 1 root root 109 2025-02-06 09:58:20.000000000 +0000 container.info
lrwxrwxrwx 1 root root  28 2025-02-06 09:58:20.000000000 +0000 container.jg.gz -> container-718a12c6e9d5.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 09:58:50.000000000 +0000 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 09:58:50.000000000 +0000 5.6.3-64

/lib/modules/5.6.3-64:
total 8
drwxr-xr-x 3 root root 4096 2025-02-06 09:58:50.000000000 +0000 kernel
-rw-r--r-- 1 root root   18 2025-02-06 09:58:48.000000000 +0000 modules.dep.container

/lib/modules/5.6.3-64/kernel:
total 4
drwxr-xr-x 4 root root 4096 2025-02-06 09:58:50.000000000 +0000 fs

/lib/modules/5.6.3-64/kernel/fs:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 09:58:50.000000000 +0000 exportfs
drwxr-xr-x 2 root root 4096 2025-02-06 09:58:50.000000000 +0000 overlayfs

/lib/modules/5.6.3-64/kernel/fs/exportfs:
total 8
-rw-r--r-- 1 root root 6984 2025-02-06 09:53:13.000000000 +0000 exportfs.ko

/lib/modules/5.6.3-64/kernel/fs/overlayfs:
total 116
-rw-r--r-- 1 root root 116696 2025-02-06 09:53:13.000000000 +0000 overlay.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 09:58:20.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-06 09:58:20.000000000 +0000 lib

/nova/bin:
total 192
-rwxr-xr-x 1 root root 140864 2025-02-06 09:58:20.000000000 +0000 container
-rwxr-xr-x 1 root root  17568 2025-02-06 09:58:20.000000000 +0000 shell
-rwxr-xr-x 1 root root  13512 2025-02-06 09:58:20.000000000 +0000 test_http
-rwxr-xr-x 1 root root  13368 2025-02-06 09:58:20.000000000 +0000 test_path_delete

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 09:58:20.000000000 +0000 console

/nova/lib/console:
total 20
-rwxr-xr-x 1 root root 18774 2025-02-06 09:58:20.000000000 +0000 1291845632.mem
```

