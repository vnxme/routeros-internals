### container.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 279168 bytes, 36 inodes, blocksize: 524288 bytes, created: Tue Jun  2 09:46:58 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 12
drwxr-xr-x 3 root root 4096 2026-06-02 10:46:42.000000000 +0100 home
drwxr-xr-x 3 root root 4096 2026-06-02 10:46:48.000000000 +0100 lib
drwxr-xr-x 5 root root 4096 2026-06-02 10:46:43.000000000 +0100 nova

/home:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:46:42.000000000 +0100 web

/home/web:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:46:43.000000000 +0100 webfig

/home/web/webfig:
total 36
-rw-r--r-- 1 root root 30130 2026-06-02 10:46:42.000000000 +0100 container-c902cca20858.jg.gz
-rwxr-xr-x 1 root root   111 2026-06-02 10:46:42.000000000 +0100 container.info
lrwxrwxrwx 1 root root    28 2026-06-02 10:46:43.000000000 +0100 container.jg.gz -> container-c902cca20858.jg.gz

/lib:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:46:48.000000000 +0100 modules

/lib/modules:
total 4
drwxr-xr-x 3 root root 4096 2026-06-02 10:46:53.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 8
drwxr-xr-x 4 root root 4096 2026-06-02 10:46:48.000000000 +0100 kernel
-rw-r--r-- 1 root root  180 2026-06-02 10:46:55.000000000 +0100 modules.dep.container

/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 4 root root 4096 2026-06-02 10:46:48.000000000 +0100 fs
drwxr-xr-x 4 root root 4096 2026-06-02 10:46:48.000000000 +0100 sound

/lib/modules/5.6.3/kernel/fs:
total 8
drwxr-xr-x 2 root root 4096 2026-06-02 10:46:48.000000000 +0100 exportfs
drwxr-xr-x 2 root root 4096 2026-06-02 10:46:48.000000000 +0100 overlayfs

/lib/modules/5.6.3/kernel/fs/exportfs:
total 8
-rw-r--r-- 1 root root 5948 2026-06-02 10:44:33.000000000 +0100 exportfs.ko

/lib/modules/5.6.3/kernel/fs/overlayfs:
total 100
-rw-r--r-- 1 root root 98996 2026-06-02 10:44:33.000000000 +0100 overlay.ko

/lib/modules/5.6.3/kernel/sound:
total 12
drwxr-xr-x 2 root root 4096 2026-06-02 10:46:48.000000000 +0100 core
-rw-r--r-- 1 root root 3556 2026-06-02 10:44:35.000000000 +0100 soundcore.ko
drwxr-xr-x 2 root root 4096 2026-06-02 10:46:48.000000000 +0100 usb

/lib/modules/5.6.3/kernel/sound/core:
total 160
-rw-r--r-- 1 root root  9764 2026-06-02 10:44:35.000000000 +0100 snd-hwdep.ko
-rw-r--r-- 1 root root 74664 2026-06-02 10:44:35.000000000 +0100 snd-pcm.ko
-rw-r--r-- 1 root root 22264 2026-06-02 10:44:35.000000000 +0100 snd-rawmidi.ko
-rw-r--r-- 1 root root 47448 2026-06-02 10:44:35.000000000 +0100 snd.ko

/lib/modules/5.6.3/kernel/sound/usb:
total 216
-rw-r--r-- 1 root root 195088 2026-06-02 10:44:35.000000000 +0100 snd-usb-audio.ko
-rw-r--r-- 1 root root  23220 2026-06-02 10:44:35.000000000 +0100 snd-usbmidi-lib.ko

/nova:
total 12
drwxr-xr-x 2 root root 4096 2026-06-02 10:46:41.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-06-02 10:46:43.000000000 +0100 etc
drwxr-xr-x 3 root root 4096 2026-06-02 10:46:41.000000000 +0100 lib

/nova/bin:
total 340
-rwxr-xr-x 1 root root 344412 2026-06-02 10:46:41.000000000 +0100 container

/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:46:43.000000000 +0100 pciinfo

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 357 2026-06-02 10:46:43.000000000 +0100 container.x3

/nova/lib:
total 4
drwxr-xr-x 2 root root 4096 2026-06-02 10:46:41.000000000 +0100 console

/nova/lib/console:
total 60
-rwxr-xr-x 1 root root 59454 2026-06-02 10:46:41.000000000 +0100 1291845632.mem
```

