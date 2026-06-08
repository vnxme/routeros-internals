### 17041828-ppc-440-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV), statically linked, BuildID[sha1]=1a0086c12f0834aa69e3e518cc14f9e24c9fcba6, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV)
3621632       0x374300        CRC32 polynomial table, little endian
3629842       0x376312        xz compressed data
3675946       0x38172A        Unix path: /lib/firmware/updates/5.6.3-440
3719927       0x38C2F7        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CC3-16-31, rev 0x-51c88000, size 1
3719959       0x38C317        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CCB-16-20, rev 0x-51c88000, size 2048
3720087       0x38C397        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CEC-14-30, rev 0x-51c88000, size 33
3741267       0x391653        Unix path: /sys/firmware/devicetree/base
3743197       0x391DDD        Unix path: /sys/firmware/fdt': CRC check failed
3757041       0x3953F1        Neighborly text, "neighbor table overflow!ics"
3757313       0x395501        Neighborly text, "neighbor get requestNeighbour entry not found"
3757355       0x39552B        Neighborly text, "neighbor get requestified"
3757537       0x3955E1        Neighborly text, "neighbor dump requestp request"
3757588       0x395614        Neighborly text, "neighbor dump requestump request"
3757641       0x395649        Neighborly text, "neighbor dump requestor neighbor dump request"
3757707       0x39568B        Neighborly text, "neighbor dump requesttable dump request"
3757761       0x3956C1        Neighborly text, "neighbor table dump requestghbor table dump request"
3757821       0x3956FD        Neighborly text, "neighbor table dump requeste dump request"
3757871       0x39572F        Neighborly text, "neighbor table dump requestyer address given"
3757952       0x395780        Neighborly text, "Neighbor entry is now deadalid network address"
3758093       0x39580D        Neighborly text, "neighbor get requestrequest"
3758143       0x39583F        Neighborly text, "neighbor get requestget request"
3758197       0x395875        Neighborly text, "neighbor get request request"
3758248       0x3958A8        Neighborly text, "neighbor get request"
3832617       0x3A7B29        Neighborly text, "NeighborSolicitss"
3832634       0x3A7B3A        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
4085400       0x3E5698        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4085516       0x3E570C        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4085640       0x3E5788        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4085756       0x3E57FC        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4255744       0x40F000        ELF, 32-bit MSB shared object, PowerPC or cisco 4500, version 1 (SYSV)
4259997       0x41009D        Unix path: /home/gitlab-runner/builds/msBP8JuA8/0/dev-rb/ros/ros/ros/kernel/linux6/arch/powerpc/kernel/vdso32
4260841       0x4103E9        Unix path: /home/gitlab-runner/builds/msBP8JuA8/0/dev-rb/ros/ros/ros/kernel/linux6/arch/powerpc/kernel/vdso32
4268032       0x412000        AES S-Box
4268288       0x412100        AES Inverse S-Box
4303473       0x41AA71        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 5300
-rw-r--r-- 1 root root     492 2026-06-08 15:58:13.697632175 +0100 3e5698.cpio
-rw-r--r-- 1 root root 5478400 2026-06-08 15:58:14.664635883 +0100 41aa71.cpio
```

