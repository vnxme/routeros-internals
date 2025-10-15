### 219900-ppc-e300-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV), statically linked, BuildID[sha1]=3f36b6fcc85936e5c9d5d6419613464f94d069a1, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV)
3464448       0x34DD00        CRC32 polynomial table, little endian
3472658       0x34FD12        xz compressed data
3520298       0x35B72A        Unix path: /lib/firmware/updates/5.6.3
3546628       0x361E04        Unix path: /sys/firmware/devicetree/base
3548569       0x362599        Unix path: /sys/firmware/fdt': CRC check failed
3562513       0x365C11        Neighborly text, "neighbor table overflow!ics"
3562785       0x365D21        Neighborly text, "neighbor get requestNeighbour entry not found"
3562827       0x365D4B        Neighborly text, "neighbor get requestified"
3563009       0x365E01        Neighborly text, "neighbor dump requestp request"
3563060       0x365E34        Neighborly text, "neighbor dump requestump request"
3563113       0x365E69        Neighborly text, "neighbor dump requestor neighbor dump request"
3563179       0x365EAB        Neighborly text, "neighbor dump requesttable dump request"
3563233       0x365EE1        Neighborly text, "neighbor table dump requestghbor table dump request"
3563293       0x365F1D        Neighborly text, "neighbor table dump requeste dump request"
3563343       0x365F4F        Neighborly text, "neighbor table dump requestyer address given"
3563424       0x365FA0        Neighborly text, "Neighbor entry is now deadalid network address"
3563565       0x36602D        Neighborly text, "neighbor get requestrequest"
3563615       0x36605F        Neighborly text, "neighbor get requestget request"
3563669       0x366095        Neighborly text, "neighbor get request request"
3563720       0x3660C8        Neighborly text, "neighbor get request"
3635977       0x377B09        Neighborly text, "NeighborSolicitss"
3635994       0x377B1A        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
3865736       0x3AFC88        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
3865852       0x3AFCFC        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
3865976       0x3AFD78        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
3866092       0x3AFDEC        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4026368       0x3D7000        ELF, 32-bit MSB shared object, PowerPC or cisco 4500, version 1 (SYSV)
4030621       0x3D809D        Unix path: /home/agent/bamboo-agent/build-dir/ROS-V7B-JOB1/7/kernel/linux6/arch/powerpc/kernel/vdso32
4031433       0x3D83C9        Unix path: /home/agent/bamboo-agent/build-dir/ROS-V7B-JOB1/7/kernel/linux6/arch/powerpc/kernel/vdso32
4038656       0x3DA000        AES S-Box
4038912       0x3DA100        AES Inverse S-Box
4073121       0x3E26A1        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 5288
-rw-r--r-- 1 root root     492 2025-10-15 15:55:37.897672994 +0100 3afc88.cpio
-rw-r--r-- 1 root root 5474304 2025-10-15 15:55:40.093672873 +0100 3e26a1.cpio
```

