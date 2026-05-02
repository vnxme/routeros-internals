### wifi-qcom-be.sfs
#### Identification (`file <*>`):
```
Squashfs filesystem, little endian, version 4.0, xz compressed, 17803756 bytes, 65 inodes, blocksize: 524288 bytes, created: Wed Apr 22 08:30:40 2026
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 8
drwxr-xr-x 6 root root 4096 2026-04-22 09:30:23.000000000 +0100 lib
drwxr-xr-x 4 root root 4096 2026-04-22 09:29:06.000000000 +0100 nova

/lib:
total 16
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:06.000000000 +0100 bdwlan
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:06.000000000 +0100 config
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:06.000000000 +0100 firmware
drwxr-xr-x 3 root root 4096 2026-04-22 09:30:23.000000000 +0100 modules

/lib/bdwlan:
total 252
-rw-r--r-- 1 root root 161792 2026-04-22 09:29:06.000000000 +0100 ma53ug_pcie1.bdwlan
-rw-r--r-- 1 root root  63488 2026-04-22 09:29:06.000000000 +0100 ma53ug_soc1.bdwlan
-rw-r--r-- 1 root root  25656 2026-04-22 09:29:06.000000000 +0100 regdb.bin

/lib/config:
total 24
-rw-r--r-- 1 root root  591 2026-04-22 09:29:06.000000000 +0100 IPQ5332.ini
-rw-r--r-- 1 root root  590 2026-04-22 09:29:06.000000000 +0100 IPQ5424.ini
-rw-r--r-- 1 root root  590 2026-04-22 09:29:06.000000000 +0100 QCN6432.ini
-rw-r--r-- 1 root root  590 2026-04-22 09:29:06.000000000 +0100 QCN9274.ini
-rw-r--r-- 1 root root  857 2026-04-22 09:29:06.000000000 +0100 global.ini
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:06.000000000 +0100 internal

/lib/config/internal:
total 20
-rw-r--r-- 1 root root 650 2026-04-22 09:29:06.000000000 +0100 IPQ5332_i.ini
-rw-r--r-- 1 root root 649 2026-04-22 09:29:06.000000000 +0100 IPQ5424_i.ini
-rw-r--r-- 1 root root 648 2026-04-22 09:29:06.000000000 +0100 QCN6432_i.ini
-rw-r--r-- 1 root root 648 2026-04-22 09:29:06.000000000 +0100 QCN9274_i.ini
-rw-r--r-- 1 root root 589 2026-04-22 09:29:06.000000000 +0100 global_i.ini

/lib/firmware:
total 16148
-rw-r--r-- 1 root root 7380992 2026-04-22 09:29:06.000000000 +0100 wifi_fw_ipq5332_qcn6432cs_squashfs.img
-rw-r--r-- 1 root root 9154560 2026-04-22 09:29:06.000000000 +0100 wifi_fw_ipq5332_qcn9224_v2_single_dualmac_squashfs.img

/lib/modules:
total 4
drwxr-xr-x 4 root root 4096 2026-04-22 09:30:32.000000000 +0100 5.6.3

/lib/modules/5.6.3:
total 12
drwxr-xr-x 4 root root 4096 2026-04-22 09:30:32.000000000 +0100 kernel
drwxr-xr-x 2 root root 4096 2026-04-22 09:30:25.000000000 +0100 misc
-rw-r--r-- 1 root root  888 2026-04-22 09:30:37.000000000 +0100 modules.dep.wifi-qcom-be

/lib/modules/5.6.3/kernel:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:30:32.000000000 +0100 crypto
drwxr-xr-x 3 root root 4096 2026-04-22 09:30:32.000000000 +0100 drivers

/lib/modules/5.6.3/kernel/crypto:
total 8
-rw-r--r-- 1 root root 5768 2026-04-22 09:23:11.000000000 +0100 michael_mic.ko

/lib/modules/5.6.3/kernel/drivers:
total 4
drwxr-xr-x 3 root root 4096 2026-04-22 09:30:32.000000000 +0100 soc

/lib/modules/5.6.3/kernel/drivers/soc:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:30:32.000000000 +0100 qcom

/lib/modules/5.6.3/kernel/drivers/soc/qcom:
total 12
-rw-r--r-- 1 root root 11472 2026-04-22 09:23:13.000000000 +0100 mdt_loader.ko

/lib/modules/5.6.3/misc:
total 5364
-rw-r--r-- 1 root root   49400 2026-04-22 09:30:16.000000000 +0100 ath.ko
-rw-r--r-- 1 root root 1222752 2026-04-22 09:30:16.000000000 +0100 ath11k.ko
-rw-r--r-- 1 root root   35504 2026-04-22 09:30:16.000000000 +0100 ath11k_ahb.ko
-rw-r--r-- 1 root root   36368 2026-04-22 09:30:16.000000000 +0100 ath11k_pci.ko
-rw-r--r-- 1 root root 1815904 2026-04-22 09:30:17.000000000 +0100 ath12k.ko
-rw-r--r-- 1 root root  201224 2026-04-22 09:30:16.000000000 +0100 ath12k_wifi7.ko
-rw-r--r-- 1 root root   45912 2026-04-22 09:30:16.000000000 +0100 ath_debug.ko
-rw-r--r-- 1 root root  469888 2026-04-22 09:30:17.000000000 +0100 cfg80211.ko
-rw-r--r-- 1 root root   76752 2026-04-22 09:30:16.000000000 +0100 compat.ko
-rw-r--r-- 1 root root 1045056 2026-04-22 09:30:17.000000000 +0100 mac80211.ko
-rw-r--r-- 1 root root  114024 2026-04-22 09:30:16.000000000 +0100 mhi.ko
-rw-r--r-- 1 root root   19544 2026-04-22 09:30:16.000000000 +0100 mhi_fuse_blower_mod.ko
-rw-r--r-- 1 root root   29904 2026-04-22 09:30:16.000000000 +0100 mhi_pci_generic.ko
-rw-r--r-- 1 root root   14856 2026-04-22 09:30:16.000000000 +0100 qcom_common.ko
-rw-r--r-- 1 root root   29576 2026-04-22 09:30:16.000000000 +0100 qcom_glink.ko
-rw-r--r-- 1 root root    9752 2026-04-22 09:30:17.000000000 +0100 qcom_glink_smem.ko
-rw-r--r-- 1 root root    6288 2026-04-22 09:30:16.000000000 +0100 qcom_pil_info.ko
-rw-r--r-- 1 root root   12688 2026-04-22 09:30:16.000000000 +0100 qcom_q6v5.ko
-rw-r--r-- 1 root root   32696 2026-04-22 09:30:16.000000000 +0100 qcom_q6v5_mpd.ko
-rw-r--r-- 1 root root   21440 2026-04-22 09:30:16.000000000 +0100 qcom_q6v5_upd.ko
-rw-r--r-- 1 root root   19184 2026-04-22 09:30:17.000000000 +0100 qcom_q6v5_wcss_sec.ko
-rw-r--r-- 1 root root   24456 2026-04-22 09:30:16.000000000 +0100 qcom_smd.ko
-rw-r--r-- 1 root root   17520 2026-04-22 09:30:16.000000000 +0100 qcom_sysmon.ko
-rw-r--r-- 1 root root    7560 2026-04-22 09:30:17.000000000 +0100 qrtr-mhi_bp.ko
-rw-r--r-- 1 root root    6024 2026-04-22 09:30:17.000000000 +0100 qrtr-smd_bp.ko
-rw-r--r-- 1 root root   75904 2026-04-22 09:30:16.000000000 +0100 remoteproc.ko

/nova:
total 8
drwxr-xr-x 2 root root 4096 2026-04-22 09:30:37.000000000 +0100 bin
drwxr-xr-x 3 root root 4096 2026-04-22 09:29:06.000000000 +0100 etc

/nova/bin:
total 276
-rwxr-xr-x 1 root root 264748 2026-04-22 09:30:30.000000000 +0100 localphy-qcom-be
-rwxr-xr-x 1 root root  13648 2026-04-22 09:29:08.000000000 +0100 qcom-be-setup

/nova/etc:
total 4
drwxr-xr-x 2 root root 4096 2026-04-22 09:29:06.000000000 +0100 pciinfo

/nova/etc/pciinfo:
total 4
-rwxr-xr-x 1 root root 2197 2026-04-22 09:29:06.000000000 +0100 wifi-qcom-be.x3
```

