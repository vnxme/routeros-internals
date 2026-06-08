### 219900-ppc-e300-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV), statically linked, BuildID[sha1]=01d439b9b1e26e984770792dac9daddbd120a296, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV)
3464640       0x34DDC0        CRC32 polynomial table, little endian
3472850       0x34FDD2        xz compressed data
3520490       0x35B7EA        Unix path: /lib/firmware/updates/5.6.3
3546820       0x361EC4        Unix path: /sys/firmware/devicetree/base
3548761       0x362659        Unix path: /sys/firmware/fdt': CRC check failed
3562705       0x365CD1        Neighborly text, "neighbor table overflow!ics"
3562977       0x365DE1        Neighborly text, "neighbor get requestNeighbour entry not found"
3563019       0x365E0B        Neighborly text, "neighbor get requestified"
3563201       0x365EC1        Neighborly text, "neighbor dump requestp request"
3563252       0x365EF4        Neighborly text, "neighbor dump requestump request"
3563305       0x365F29        Neighborly text, "neighbor dump requestor neighbor dump request"
3563371       0x365F6B        Neighborly text, "neighbor dump requesttable dump request"
3563425       0x365FA1        Neighborly text, "neighbor table dump requestghbor table dump request"
3563485       0x365FDD        Neighborly text, "neighbor table dump requeste dump request"
3563535       0x36600F        Neighborly text, "neighbor table dump requestyer address given"
3563616       0x366060        Neighborly text, "Neighbor entry is now deadalid network address"
3563757       0x3660ED        Neighborly text, "neighbor get requestrequest"
3563807       0x36611F        Neighborly text, "neighbor get requestget request"
3563861       0x366155        Neighborly text, "neighbor get request request"
3563912       0x366188        Neighborly text, "neighbor get request"
3637321       0x378049        Neighborly text, "NeighborSolicitss"
3637338       0x37805A        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
3865736       0x3AFC88        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
3865852       0x3AFCFC        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
3865976       0x3AFD78        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
3866092       0x3AFDEC        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4026368       0x3D7000        ELF, 32-bit MSB shared object, PowerPC or cisco 4500, version 1 (SYSV)
4030621       0x3D809D        Unix path: /home/gitlab-runner/builds/msBP8JuA8/0/dev-rb/ros/ros/ros/kernel/linux6/arch/powerpc/kernel/vdso32
4031465       0x3D83E9        Unix path: /home/gitlab-runner/builds/msBP8JuA8/0/dev-rb/ros/ros/ros/kernel/linux6/arch/powerpc/kernel/vdso32
4038656       0x3DA000        AES S-Box
4038912       0x3DA100        AES Inverse S-Box
4073121       0x3E26A1        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 5300
-rw-r--r-- 1 root root     492 2026-06-08 15:57:55.576805516 +0100 3afc88.cpio
-rw-r--r-- 1 root root 5478400 2026-06-08 15:57:56.887809347 +0100 3e26a1.cpio
```

