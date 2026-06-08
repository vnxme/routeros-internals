### 5716404-ppc-e500-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV), statically linked, BuildID[sha1]=35453bbc4574ce68a0774e0f2f832c3cdfd7feb0, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV)
4001920       0x3D1080        CRC32 polynomial table, little endian
4010126       0x3D308E        xz compressed data
4048434       0x3DC632        Unix path: /lib/firmware/updates/5.6.3-e500
4068007       0x3E12A7        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C72-16-31, rev 0x-1c38000, size 1
4068039       0x3E12C7        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C7A-16-20, rev 0x-1c38000, size 2048
4068167       0x3E1347        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C9B-14-30, rev 0x-1c38000, size 33
4115827       0x3ECD73        Unix path: /sys/firmware/devicetree/base
4118015       0x3ED5FF        Unix path: /sys/firmware/fdt': CRC check failed
4137353       0x3F2189        Neighborly text, "neighbor table overflow!ics"
4137625       0x3F2299        Neighborly text, "neighbor get requestNeighbour entry not found"
4137667       0x3F22C3        Neighborly text, "neighbor get requestified"
4137849       0x3F2379        Neighborly text, "neighbor dump requestp request"
4137900       0x3F23AC        Neighborly text, "neighbor dump requestump request"
4137953       0x3F23E1        Neighborly text, "neighbor dump requestor neighbor dump request"
4138019       0x3F2423        Neighborly text, "neighbor dump requesttable dump request"
4138073       0x3F2459        Neighborly text, "neighbor table dump requestghbor table dump request"
4138133       0x3F2495        Neighborly text, "neighbor table dump requeste dump request"
4138183       0x3F24C7        Neighborly text, "neighbor table dump requestyer address given"
4138264       0x3F2518        Neighborly text, "Neighbor entry is now deadalid network address"
4138405       0x3F25A5        Neighborly text, "neighbor get requestrequest"
4138455       0x3F25D7        Neighborly text, "neighbor get requestget request"
4138509       0x3F260D        Neighborly text, "neighbor get request request"
4138560       0x3F2640        Neighborly text, "neighbor get request"
4211329       0x404281        Neighborly text, "NeighborSolicitss"
4211346       0x404292        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
4462156       0x44164C        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4462272       0x4416C0        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4462396       0x44173C        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4462512       0x4417B0        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4665344       0x473000        ELF, 32-bit MSB shared object, PowerPC or cisco 4500, version 1 (SYSV)
4669597       0x47409D        Unix path: /home/gitlab-runner/builds/msBP8JuA8/0/dev-rb/ros/ros/ros/kernel/linux6/arch/powerpc/kernel/vdso32
4670441       0x4743E9        Unix path: /home/gitlab-runner/builds/msBP8JuA8/0/dev-rb/ros/ros/ros/kernel/linux6/arch/powerpc/kernel/vdso32
4677632       0x476000        AES S-Box
4677888       0x476100        AES Inverse S-Box
4713521       0x47EC31        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 5300
-rw-r--r-- 1 root root     492 2026-06-08 15:58:21.040877143 +0100 44164c.cpio
-rw-r--r-- 1 root root 5478400 2026-06-08 15:58:22.343880577 +0100 47ec31.cpio
```

