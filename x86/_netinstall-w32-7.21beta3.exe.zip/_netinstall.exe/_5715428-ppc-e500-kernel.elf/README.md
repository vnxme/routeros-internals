### 5715428-ppc-e500-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV), statically linked, BuildID[sha1]=45cb5988cba958e458040355bd1ccf875fcdcb89, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV)
4001760       0x3D0FE0        CRC32 polynomial table, little endian
4009966       0x3D2FEE        xz compressed data
4048274       0x3DC592        Unix path: /lib/firmware/updates/5.6.3-e500
4067847       0x3E1207        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CD2-16-31, rev 0x-2c38000, size 1
4067879       0x3E1227        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CDA-16-20, rev 0x-2c38000, size 2048
4068007       0x3E12A7        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CFB-14-30, rev 0x-2c38000, size 33
4115667       0x3ECCD3        Unix path: /sys/firmware/devicetree/base
4117855       0x3ED55F        Unix path: /sys/firmware/fdt': CRC check failed
4137193       0x3F20E9        Neighborly text, "neighbor table overflow!ics"
4137465       0x3F21F9        Neighborly text, "neighbor get requestNeighbour entry not found"
4137507       0x3F2223        Neighborly text, "neighbor get requestified"
4137689       0x3F22D9        Neighborly text, "neighbor dump requestp request"
4137740       0x3F230C        Neighborly text, "neighbor dump requestump request"
4137793       0x3F2341        Neighborly text, "neighbor dump requestor neighbor dump request"
4137859       0x3F2383        Neighborly text, "neighbor dump requesttable dump request"
4137913       0x3F23B9        Neighborly text, "neighbor table dump requestghbor table dump request"
4137973       0x3F23F5        Neighborly text, "neighbor table dump requeste dump request"
4138023       0x3F2427        Neighborly text, "neighbor table dump requestyer address given"
4138104       0x3F2478        Neighborly text, "Neighbor entry is now deadalid network address"
4138245       0x3F2505        Neighborly text, "neighbor get requestrequest"
4138295       0x3F2537        Neighborly text, "neighbor get requestget request"
4138349       0x3F256D        Neighborly text, "neighbor get request request"
4138400       0x3F25A0        Neighborly text, "neighbor get request"
4210017       0x403D61        Neighborly text, "NeighborSolicitss"
4210034       0x403D72        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
4462156       0x44164C        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4462272       0x4416C0        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4462396       0x44173C        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4462512       0x4417B0        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4665344       0x473000        ELF, 32-bit MSB shared object, PowerPC or cisco 4500, version 1 (SYSV)
4669597       0x47409D        Unix path: /home/agent/bamboo-agent/build-dir/ROS-V7B-JOB1/7/kernel/linux6/arch/powerpc/kernel/vdso32
4670409       0x4743C9        Unix path: /home/agent/bamboo-agent/build-dir/ROS-V7B-JOB1/7/kernel/linux6/arch/powerpc/kernel/vdso32
4677632       0x476000        AES S-Box
4677888       0x476100        AES Inverse S-Box
4713521       0x47EC31        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 5288
-rw-r--r-- 1 root root     492 2025-10-15 15:56:00.805658215 +0100 44164c.cpio
-rw-r--r-- 1 root root 5474304 2025-10-15 15:56:02.944657552 +0100 47ec31.cpio
```

