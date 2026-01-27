### 219900-ppc-e300-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV), statically linked, BuildID[sha1]=412b013bc85938a7ab2efcd377869b88c70bd98e, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV)
3464416       0x34DCE0        CRC32 polynomial table, little endian
3472626       0x34FCF2        xz compressed data
3520266       0x35B70A        Unix path: /lib/firmware/updates/5.6.3
3546548       0x361DB4        Unix path: /sys/firmware/devicetree/base
3548489       0x362549        Unix path: /sys/firmware/fdt': CRC check failed
3562449       0x365BD1        Neighborly text, "neighbor table overflow!ics"
3562721       0x365CE1        Neighborly text, "neighbor get requestNeighbour entry not found"
3562763       0x365D0B        Neighborly text, "neighbor get requestified"
3562945       0x365DC1        Neighborly text, "neighbor dump requestp request"
3562996       0x365DF4        Neighborly text, "neighbor dump requestump request"
3563049       0x365E29        Neighborly text, "neighbor dump requestor neighbor dump request"
3563115       0x365E6B        Neighborly text, "neighbor dump requesttable dump request"
3563169       0x365EA1        Neighborly text, "neighbor table dump requestghbor table dump request"
3563229       0x365EDD        Neighborly text, "neighbor table dump requeste dump request"
3563279       0x365F0F        Neighborly text, "neighbor table dump requestyer address given"
3563360       0x365F60        Neighborly text, "Neighbor entry is now deadalid network address"
3563501       0x365FED        Neighborly text, "neighbor get requestrequest"
3563551       0x36601F        Neighborly text, "neighbor get requestget request"
3563605       0x366055        Neighborly text, "neighbor get request request"
3563656       0x366088        Neighborly text, "neighbor get request"
3635609       0x377999        Neighborly text, "NeighborSolicitss"
3635626       0x3779AA        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
3865736       0x3AFC88        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
3865852       0x3AFCFC        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
3865976       0x3AFD78        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
3866092       0x3AFDEC        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4026368       0x3D7000        ELF, 32-bit MSB shared object, PowerPC or cisco 4500, version 1 (SYSV)
4030621       0x3D809D        Unix path: /home/gitlab-runner/builds/msBP8JuA8/0/dev-rb/ros/ros/ros/kernel/linux6/arch/powerpc/kernel/vdso32
4031465       0x3D83E9        Unix path: /home/gitlab-runner/builds/msBP8JuA8/0/dev-rb/ros/ros/ros/kernel/linux6/arch/powerpc/kernel/vdso32
4038656       0x3DA000        AES S-Box
4038912       0x3DA100        AES Inverse S-Box
4073105       0x3E2691        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 15988
-rw-r--r-- 1 root root      492 2026-01-27 11:36:54.890464498 +0000 3afc88.cpio
-rw-r--r-- 1 root root 16793088 2026-01-27 11:37:01.837389889 +0000 3e2691.cpio
```

