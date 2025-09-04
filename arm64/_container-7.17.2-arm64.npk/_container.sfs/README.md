### container.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 60068 bytes, 16 inodes, blocksize: 524288 bytes, created: Thu Feb  6 09:58:52 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 8
drwxr-xr-x 3 root root 4096 2025-02-06 09:58:20.000000000 +0000 home
drwxr-xr-x 4 root root 4096 2025-02-06 09:58:52.000000000 +0000 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2025-02-06 09:58:20.000000000 +0000 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 09:58:52.000000000 +0000 webfig

/home/web/webfig:
total 8
-rw-r--r-- 1 root root 798 2025-02-06 09:58:20.000000000 +0000 container-718a12c6e9d5.jg.gz
-rwxr-xr-x 1 root root 109 2025-02-06 09:58:20.000000000 +0000 container.info
lrwxrwxrwx 1 root root  28 2025-02-06 09:58:52.000000000 +0000 container.jg.gz -> container-718a12c6e9d5.jg.gz

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 09:58:52.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-06 09:58:52.000000000 +0000 lib

/nova/bin:
total 168
-rwxr-xr-x 1 root root 134160 2025-02-06 09:58:20.000000000 +0000 container
-rwxr-xr-x 1 root root  13632 2025-02-06 09:58:20.000000000 +0000 shell
-rwxr-xr-x 1 root root   9524 2025-02-06 09:58:20.000000000 +0000 test_http
-rwxr-xr-x 1 root root   5332 2025-02-06 09:58:20.000000000 +0000 test_path_delete

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 09:58:52.000000000 +0000 console

/nova/lib/console:
total 20
-rwxr-xr-x 1 root root 18774 2025-02-06 09:58:20.000000000 +0000 1291845632.mem
```

