### wifi-qcom.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 10703228 bytes, 122 inodes, blocksize: 524288 bytes, created: Thu Feb  6 10:12:04 2025
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 8
drwxr-xr-x 6 root root 4096 2025-02-06 10:11:20.000000000 +0000 lib
drwxr-xr-x 4 root root 4096 2025-02-06 10:11:20.000000000 +0000 nova

/lib:
total 16
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:20.000000000 +0000 bdwlan
drwxr-xr-x 3 root root 4096 2025-02-06 10:11:20.000000000 +0000 config
drwxr-xr-x 6 root root 4096 2025-02-06 10:11:20.000000000 +0000 firmware
drwxr-xr-x 3 root root 4096 2025-02-06 10:11:20.000000000 +0000 modules

/lib/bdwlan:
total 512
-rw-r--r-- 1 root root  65536 2025-02-06 10:11:20.000000000 +0000 c52_130.bdwlan
-rw-r--r-- 1 root root  65536 2025-02-06 10:11:20.000000000 +0000 c53_130.bdwlan
-rw-r--r-- 1 root root  65536 2025-02-06 10:11:20.000000000 +0000 capax_130.bdwlan
-rw-r--r-- 1 root root 131072 2025-02-06 10:11:20.000000000 +0000 crs418.bdwlan
-rw-r--r-- 1 root root 131072 2025-02-06 10:11:20.000000000 +0000 h53_soc1_502.bdwlan
-rw-r--r-- 1 root root  65536 2025-02-06 10:11:20.000000000 +0000 s53_130.bdwlan

/lib/config:
total 24
-rw-r--r-- 1 root root   74 2025-02-06 10:11:20.000000000 +0000 QCA6018.ini
-rw-r--r-- 1 root root   72 2025-02-06 10:11:20.000000000 +0000 QCA8074.ini
-rw-r--r-- 1 root root  145 2025-02-06 10:11:20.000000000 +0000 QCN9000.ini
-rw-r--r-- 1 root root 5647 2025-02-06 10:11:20.000000000 +0000 global.ini
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:20.000000000 +0000 internal

/lib/config/internal:
total 24
-rw-r--r-- 1 root root 3507 2025-02-06 10:11:20.000000000 +0000 QCA6018_i.ini
-rw-r--r-- 1 root root 4381 2025-02-06 10:11:20.000000000 +0000 QCA8074V2_i.ini
-rw-r--r-- 1 root root 3395 2025-02-06 10:11:20.000000000 +0000 QCA8074_i.ini
-rwxr-xr-x 1 root root 3566 2025-02-06 10:11:20.000000000 +0000 QCN9000_i.ini
-rw-r--r-- 1 root root 3023 2025-02-06 10:11:20.000000000 +0000 global_i.ini

/lib/firmware:
total 16
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:20.000000000 +0000 IPQ6018
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:20.000000000 +0000 IPQ8074v1
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:20.000000000 +0000 IPQ8074v2
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:20.000000000 +0000 qcn9000

/lib/firmware/IPQ6018:
total 4308
-rw-r--r-- 1 root root    2407 2025-02-06 10:11:20.000000000 +0000 firmware_rdp_feature.ini
-rw-r--r-- 1 root root    2407 2025-02-06 10:11:20.000000000 +0000 firmware_rdp_feature_512P.ini
-rw-r--r-- 1 root root     148 2025-02-06 10:11:20.000000000 +0000 m3_fw.b00
-rw-r--r-- 1 root root    6712 2025-02-06 10:11:20.000000000 +0000 m3_fw.b01
-rw-r--r-- 1 root root  294912 2025-02-06 10:11:20.000000000 +0000 m3_fw.b02
-rw-r--r-- 1 root root     153 2025-02-06 10:11:20.000000000 +0000 m3_fw.flist
-rw-r--r-- 1 root root    6860 2025-02-06 10:11:20.000000000 +0000 m3_fw.mdt
-rw-r--r-- 1 root root     340 2025-02-06 10:11:20.000000000 +0000 q6_fw.b00
-rw-r--r-- 1 root root    7000 2025-02-06 10:11:20.000000000 +0000 q6_fw.b01
-rw-r--r-- 1 root root    4696 2025-02-06 10:11:20.000000000 +0000 q6_fw.b02
-rw-r--r-- 1 root root 2845520 2025-02-06 10:11:20.000000000 +0000 q6_fw.b03
-rw-r--r-- 1 root root  407232 2025-02-06 10:11:20.000000000 +0000 q6_fw.b04
-rw-r--r-- 1 root root  208100 2025-02-06 10:11:20.000000000 +0000 q6_fw.b05
-rw-r--r-- 1 root root   10112 2025-02-06 10:11:20.000000000 +0000 q6_fw.b07
-rw-r--r-- 1 root root  562630 2025-02-06 10:11:20.000000000 +0000 q6_fw.b08
-rw-r--r-- 1 root root     408 2025-02-06 10:11:20.000000000 +0000 q6_fw.flist
-rw-r--r-- 1 root root    7340 2025-02-06 10:11:20.000000000 +0000 q6_fw.mdt
-rw-r--r-- 1 root root    5642 2025-02-06 10:11:20.000000000 +0000 qdss_trace_config.bin

/lib/firmware/IPQ8074v1:
total 4048
-rw-r--r-- 1 root root    9629 2025-02-06 10:11:20.000000000 +0000 firmware_rdp_feature.ini
-rw-r--r-- 1 root root    9057 2025-02-06 10:11:20.000000000 +0000 firmware_rdp_feature_512P.ini
-rw-r--r-- 1 root root     148 2025-02-06 10:11:20.000000000 +0000 m3_fw.b00
-rw-r--r-- 1 root root     136 2025-02-06 10:11:20.000000000 +0000 m3_fw.b01
-rw-r--r-- 1 root root  262144 2025-02-06 10:11:20.000000000 +0000 m3_fw.b02
-rw-r--r-- 1 root root     153 2025-02-06 10:11:20.000000000 +0000 m3_fw.flist
-rw-r--r-- 1 root root     284 2025-02-06 10:11:20.000000000 +0000 m3_fw.mdt
-rw-r--r-- 1 root root     340 2025-02-06 10:11:20.000000000 +0000 q6_fw.b00
-rw-r--r-- 1 root root     328 2025-02-06 10:11:20.000000000 +0000 q6_fw.b01
-rw-r--r-- 1 root root    4696 2025-02-06 10:11:20.000000000 +0000 q6_fw.b02
-rw-r--r-- 1 root root 2674704 2025-02-06 10:11:20.000000000 +0000 q6_fw.b03
-rw-r--r-- 1 root root  446400 2025-02-06 10:11:20.000000000 +0000 q6_fw.b04
-rw-r--r-- 1 root root  193476 2025-02-06 10:11:20.000000000 +0000 q6_fw.b05
-rw-r--r-- 1 root root    9024 2025-02-06 10:11:20.000000000 +0000 q6_fw.b07
-rw-r--r-- 1 root root  479286 2025-02-06 10:11:20.000000000 +0000 q6_fw.b08
-rw-r--r-- 1 root root     408 2025-02-06 10:11:20.000000000 +0000 q6_fw.flist
-rw-r--r-- 1 root root     668 2025-02-06 10:11:20.000000000 +0000 q6_fw.mdt

/lib/firmware/IPQ8074v2:
total 5380
-rw-r--r-- 1 root root    4202 2025-02-06 10:11:20.000000000 +0000 firmware_rdp_feature.ini
-rw-r--r-- 1 root root    4202 2025-02-06 10:11:20.000000000 +0000 firmware_rdp_feature_512P.ini
-rw-r--r-- 1 root root     204 2025-02-06 10:11:20.000000000 +0000 fw_ini_cfg.bin
-rw-r--r-- 1 root root     148 2025-02-06 10:11:20.000000000 +0000 m3_fw.b00
-rw-r--r-- 1 root root     136 2025-02-06 10:11:20.000000000 +0000 m3_fw.b01
-rw-r--r-- 1 root root  327680 2025-02-06 10:11:20.000000000 +0000 m3_fw.b02
-rw-r--r-- 1 root root     162 2025-02-06 10:11:20.000000000 +0000 m3_fw.flist
-rw-r--r-- 1 root root     284 2025-02-06 10:11:20.000000000 +0000 m3_fw.mdt
-rw-r--r-- 1 root root     340 2025-02-06 10:11:20.000000000 +0000 q6_fw.b00
-rw-r--r-- 1 root root     328 2025-02-06 10:11:20.000000000 +0000 q6_fw.b01
-rw-r--r-- 1 root root    4696 2025-02-06 10:11:20.000000000 +0000 q6_fw.b02
-rw-r--r-- 1 root root 3230352 2025-02-06 10:11:20.000000000 +0000 q6_fw.b03
-rw-r--r-- 1 root root 1000864 2025-02-06 10:11:20.000000000 +0000 q6_fw.b04
-rw-r--r-- 1 root root  254532 2025-02-06 10:11:20.000000000 +0000 q6_fw.b05
-rw-r--r-- 1 root root    9976 2025-02-06 10:11:20.000000000 +0000 q6_fw.b07
-rw-r--r-- 1 root root  603512 2025-02-06 10:11:20.000000000 +0000 q6_fw.b08
-rw-r--r-- 1 root root     432 2025-02-06 10:11:20.000000000 +0000 q6_fw.flist
-rw-r--r-- 1 root root     668 2025-02-06 10:11:20.000000000 +0000 q6_fw.mdt
-rw-r--r-- 1 root root    6060 2025-02-06 10:11:20.000000000 +0000 qdss_trace_config.bin

/lib/firmware/qcn9000:
total 4460
-rw-r--r-- 1 root root 4243616 2025-02-06 10:11:20.000000000 +0000 amss.bin
-rw-r--r-- 1 root root    5023 2025-02-06 10:11:20.000000000 +0000 firmware_rdp_feature.ini
-rw-r--r-- 1 root root    5022 2025-02-06 10:11:20.000000000 +0000 firmware_rdp_feature_512P.ini
-rw-r--r-- 1 root root     254 2025-02-06 10:11:20.000000000 +0000 fw_ini_cfg.bin
-rwxr-xr-x 1 root root  340108 2025-02-06 10:11:20.000000000 +0000 m3.bin
-rw-r--r-- 1 root root    6220 2025-02-06 10:11:20.000000000 +0000 qdss_trace_config.bin

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2025-02-06 10:11:43.000000000 +0000 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 4 root root 4096 2025-02-06 10:11:41.000000000 +0000 kernel
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:20.000000000 +0000 misc
-rw-r--r-- 1 root root  314 2025-02-06 10:11:45.000000000 +0000 modules.dep.wifi-qcom

/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 5 root root 4096 2025-02-06 10:11:41.000000000 +0000 drivers
drwxr-xr-x 4 root root 4096 2025-02-06 10:11:41.000000000 +0000 net

/lib/modules/5.6.3/kernel/drivers:
total 12
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:41.000000000 +0000 remoteproc
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:41.000000000 +0000 rpmsg
drwxr-xr-x 3 root root 4096 2025-02-06 10:11:41.000000000 +0000 soc

/lib/modules/5.6.3/kernel/drivers/remoteproc:
total 132
-rw-r--r-- 1 root root  9584 2025-02-06 09:52:14.000000000 +0000 qcom_common.ko
-rw-r--r-- 1 root root 12336 2025-02-06 09:52:14.000000000 +0000 qcom_q6v5.ko
-rw-r--r-- 1 root root 40312 2025-02-06 09:52:14.000000000 +0000 qcom_q6v5_mpd.ko
-rw-r--r-- 1 root root 46024 2025-02-06 09:52:14.000000000 +0000 qcom_q6v5_wcss.ko
-rw-r--r-- 1 root root 14552 2025-02-06 09:52:14.000000000 +0000 qcom_sysmon.ko

/lib/modules/5.6.3/kernel/drivers/rpmsg:
total 20
-rw-r--r-- 1 root root 17856 2025-02-06 09:52:14.000000000 +0000 rpmsg_char.ko

/lib/modules/5.6.3/kernel/drivers/soc:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:41.000000000 +0000 qcom

/lib/modules/5.6.3/kernel/drivers/soc/qcom:
total 12
-rw-r--r-- 1 root root 9256 2025-02-06 09:52:15.000000000 +0000 mdt_loader.ko

/lib/modules/5.6.3/kernel/net:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:41.000000000 +0000 qrtr
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:40.000000000 +0000 wireless

/lib/modules/5.6.3/kernel/net/qrtr:
total 8
-rw-r--r-- 1 root root 5952 2025-02-06 09:52:21.000000000 +0000 qrtr-smd.ko

/lib/modules/5.6.3/kernel/net/wireless:
total 360
-rw-r--r-- 1 root root 367616 2025-02-06 09:52:22.000000000 +0000 cfg80211.ko

/lib/modules/5.6.3/misc:
total 14036
-rw-r--r-- 1 root root  534344 2025-02-06 10:06:57.000000000 +0000 ipq_cnss2.ko
-rw-r--r-- 1 root root    7016 2025-02-06 10:11:14.000000000 +0000 mem_manager.ko
-rw-r--r-- 1 root root  477776 2025-02-06 10:11:14.000000000 +0000 monitor.ko
-rw-r--r-- 1 root root 3253840 2025-02-06 10:11:15.000000000 +0000 qca_ol.ko
-rw-r--r-- 1 root root  291072 2025-02-06 10:11:14.000000000 +0000 qca_spectral.ko
-rw-r--r-- 1 root root  338392 2025-02-06 10:11:14.000000000 +0000 qdf.ko
-rw-r--r-- 1 root root 7688216 2025-02-06 10:11:19.000000000 +0000 umac.ko
-rw-r--r-- 1 root root 1765040 2025-02-06 10:11:14.000000000 +0000 wifi_3_0.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2025-02-06 10:11:54.000000000 +0000 bin
drwxr-xr-x 3 root root 4096 2025-02-06 10:05:51.000000000 +0000 etc

/nova/bin:
total 248
-rwxr-xr-x 1 root root 224260 2025-02-06 10:11:38.000000000 +0000 localphy-qcom
-rwxr-xr-x 1 root root  25872 2025-02-06 10:11:21.000000000 +0000 qcawificfg

/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2025-02-06 10:05:51.000000000 +0000 pciinfo

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 1201 2025-02-06 10:05:51.000000000 +0000 wifi-qcom.x3
```

