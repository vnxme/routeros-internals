### 16980812-ppc-440-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV), statically linked, BuildID[sha1]=eaf9dd0ea48939998e3d2b673ba1a77d4bda28d0, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV)
3633920       0x377300        CRC32 polynomial table, little endian
3642130       0x379312        xz compressed data
3688234       0x38472A        Unix path: /lib/firmware/updates/5.6.3-440
3732215       0x38F2F7        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CC3-16-31, rev 0x-21c88000, size 1
3732247       0x38F317        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CCB-16-20, rev 0x-21c88000, size 2048
3732375       0x38F397        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CEC-14-30, rev 0x-21c88000, size 33
3754379       0x39498B        Unix path: /sys/firmware/devicetree/base
3756309       0x395115        Unix path: /sys/firmware/fdt': CRC check failed
3770169       0x398739        Neighborly text, "neighbor table overflow!ics"
3770441       0x398849        Neighborly text, "neighbor get requestNeighbour entry not found"
3770483       0x398873        Neighborly text, "neighbor get requestified"
3770665       0x398929        Neighborly text, "neighbor dump requestp request"
3770716       0x39895C        Neighborly text, "neighbor dump requestump request"
3770769       0x398991        Neighborly text, "neighbor dump requestor neighbor dump request"
3770835       0x3989D3        Neighborly text, "neighbor dump requesttable dump request"
3770889       0x398A09        Neighborly text, "neighbor table dump requestghbor table dump request"
3770949       0x398A45        Neighborly text, "neighbor table dump requeste dump request"
3770999       0x398A77        Neighborly text, "neighbor table dump requestyer address given"
3771080       0x398AC8        Neighborly text, "Neighbor entry is now deadalid network address"
3771221       0x398B55        Neighborly text, "neighbor get requestrequest"
3771271       0x398B87        Neighborly text, "neighbor get requestget request"
3771325       0x398BBD        Neighborly text, "neighbor get request request"
3771376       0x398BF0        Neighborly text, "neighbor get request"
3845713       0x3AAE51        Neighborly text, "NeighborSolicitss"
3845730       0x3AAE62        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
4097784       0x3E86F8        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4097900       0x3E876C        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4098024       0x3E87E8        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4098140       0x3E885C        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4263936       0x411000        ELF, 32-bit MSB shared object, PowerPC or cisco 4500, version 1 (SYSV)
4276224       0x414000        AES S-Box
4276480       0x414100        AES Inverse S-Box
4311705       0x41CA99        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 5144
-rw-r--r-- 1 root root     492 2026-05-02 20:32:22.735596602 +0100 3e86f8.cpio
-rw-r--r-- 1 root root 5319680 2026-05-02 20:32:24.802598049 +0100 41ca99.cpio
```

