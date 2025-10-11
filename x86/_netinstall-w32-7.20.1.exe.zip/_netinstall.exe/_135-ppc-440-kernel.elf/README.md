### 135-ppc-440-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV), statically linked, BuildID[sha1]=63a2b72cfe254a4b4e686212be42d4f01b184910, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV)
3621408       0x374220        CRC32 polynomial table, little endian
3629618       0x376232        xz compressed data
3675722       0x38164A        Unix path: /lib/firmware/updates/5.6.3-440
3719707       0x38C21B        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CE7-16-31, rev 0x-52c88000, size 1
3719739       0x38C23B        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CEF-16-20, rev 0x-52c88000, size 2048
3719867       0x38C2BB        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C10-14-30, rev 0x-51c88000, size 33
3741047       0x391577        Unix path: /sys/firmware/devicetree/base
3742977       0x391D01        Unix path: /sys/firmware/fdt': CRC check failed
3756817       0x395311        Neighborly text, "neighbor table overflow!ics"
3757089       0x395421        Neighborly text, "neighbor get requestNeighbour entry not found"
3757131       0x39544B        Neighborly text, "neighbor get requestified"
3757313       0x395501        Neighborly text, "neighbor dump requestp request"
3757364       0x395534        Neighborly text, "neighbor dump requestump request"
3757417       0x395569        Neighborly text, "neighbor dump requestor neighbor dump request"
3757483       0x3955AB        Neighborly text, "neighbor dump requesttable dump request"
3757537       0x3955E1        Neighborly text, "neighbor table dump requestghbor table dump request"
3757597       0x39561D        Neighborly text, "neighbor table dump requeste dump request"
3757647       0x39564F        Neighborly text, "neighbor table dump requestyer address given"
3757728       0x3956A0        Neighborly text, "Neighbor entry is now deadalid network address"
3757869       0x39572D        Neighborly text, "neighbor get requestrequest"
3757919       0x39575F        Neighborly text, "neighbor get requestget request"
3757973       0x395795        Neighborly text, "neighbor get request request"
3758024       0x3957C8        Neighborly text, "neighbor get request"
3830905       0x3A7479        Neighborly text, "NeighborSolicitss"
3830922       0x3A748A        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
4081304       0x3E4698        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4081420       0x3E470C        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4081544       0x3E4788        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4081660       0x3E47FC        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4247552       0x40D000        ELF, 32-bit MSB shared object, PowerPC or cisco 4500, version 1 (SYSV)
4251805       0x40E09D        Unix path: /home/agent/bamboo-agent/build-dir/ROS-V7ST-JOB1/7/kernel/linux6/arch/powerpc/kernel/vdso32
4252621       0x40E3CD        Unix path: /home/agent/bamboo-agent/build-dir/ROS-V7ST-JOB1/7/kernel/linux6/arch/powerpc/kernel/vdso32
4259840       0x410000        AES S-Box
4260096       0x410100        AES Inverse S-Box
4295265       0x418A61        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 15988
-rw-r--r-- 1 root root      492 2025-10-11 13:55:26.910072727 +0100 3e4698.cpio
-rw-r--r-- 1 root root 16793600 2025-10-11 13:55:33.871036608 +0100 418a61.cpio
```

