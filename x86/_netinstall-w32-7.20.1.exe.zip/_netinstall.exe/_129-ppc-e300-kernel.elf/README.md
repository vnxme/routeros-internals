### 129-ppc-e300-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV), statically linked, BuildID[sha1]=783076bb4549ec205a39bbc9212165f04dfd5ed3, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV)
3464384       0x34DCC0        CRC32 polynomial table, little endian
3472594       0x34FCD2        xz compressed data
3520234       0x35B6EA        Unix path: /lib/firmware/updates/5.6.3
3546516       0x361D94        Unix path: /sys/firmware/devicetree/base
3548457       0x362529        Unix path: /sys/firmware/fdt': CRC check failed
3562417       0x365BB1        Neighborly text, "neighbor table overflow!ics"
3562689       0x365CC1        Neighborly text, "neighbor get requestNeighbour entry not found"
3562731       0x365CEB        Neighborly text, "neighbor get requestified"
3562913       0x365DA1        Neighborly text, "neighbor dump requestp request"
3562964       0x365DD4        Neighborly text, "neighbor dump requestump request"
3563017       0x365E09        Neighborly text, "neighbor dump requestor neighbor dump request"
3563083       0x365E4B        Neighborly text, "neighbor dump requesttable dump request"
3563137       0x365E81        Neighborly text, "neighbor table dump requestghbor table dump request"
3563197       0x365EBD        Neighborly text, "neighbor table dump requeste dump request"
3563247       0x365EEF        Neighborly text, "neighbor table dump requestyer address given"
3563328       0x365F40        Neighborly text, "Neighbor entry is now deadalid network address"
3563469       0x365FCD        Neighborly text, "neighbor get requestrequest"
3563519       0x365FFF        Neighborly text, "neighbor get requestget request"
3563573       0x366035        Neighborly text, "neighbor get request request"
3563624       0x366068        Neighborly text, "neighbor get request"
3635577       0x377979        Neighborly text, "NeighborSolicitss"
3635594       0x37798A        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
3865736       0x3AFC88        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
3865852       0x3AFCFC        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
3865976       0x3AFD78        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
3866092       0x3AFDEC        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4026368       0x3D7000        ELF, 32-bit MSB shared object, PowerPC or cisco 4500, version 1 (SYSV)
4030621       0x3D809D        Unix path: /home/agent/bamboo-agent/build-dir/ROS-V7ST-JOB1/7/kernel/linux6/arch/powerpc/kernel/vdso32
4031437       0x3D83CD        Unix path: /home/agent/bamboo-agent/build-dir/ROS-V7ST-JOB1/7/kernel/linux6/arch/powerpc/kernel/vdso32
4038656       0x3DA000        AES S-Box
4038912       0x3DA100        AES Inverse S-Box
4073105       0x3E2691        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 15988
-rw-r--r-- 1 root root      492 2025-10-11 13:55:01.209198572 +0100 3afc88.cpio
-rw-r--r-- 1 root root 16793600 2025-10-11 13:55:08.195165036 +0100 3e2691.cpio
```

