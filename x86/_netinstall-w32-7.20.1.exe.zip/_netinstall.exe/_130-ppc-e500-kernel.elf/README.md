### 130-ppc-e500-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV), statically linked, BuildID[sha1]=03527deff749d2cf1702f7e6e4c3cdca3af67c7f, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV)
4001696       0x3D0FA0        CRC32 polynomial table, little endian
4009902       0x3D2FAE        xz compressed data
4048210       0x3DC552        Unix path: /lib/firmware/updates/5.6.3-e500
4067787       0x3E11CB        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C96-16-31, rev 0x-2c38000, size 1
4067819       0x3E11EB        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C9E-16-20, rev 0x-2c38000, size 2048
4067947       0x3E126B        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CBF-14-30, rev 0x-2c38000, size 33
4115607       0x3ECC97        Unix path: /sys/firmware/devicetree/base
4117795       0x3ED523        Unix path: /sys/firmware/fdt': CRC check failed
4137161       0x3F20C9        Neighborly text, "neighbor table overflow!ics"
4137433       0x3F21D9        Neighborly text, "neighbor get requestNeighbour entry not found"
4137475       0x3F2203        Neighborly text, "neighbor get requestified"
4137657       0x3F22B9        Neighborly text, "neighbor dump requestp request"
4137708       0x3F22EC        Neighborly text, "neighbor dump requestump request"
4137761       0x3F2321        Neighborly text, "neighbor dump requestor neighbor dump request"
4137827       0x3F2363        Neighborly text, "neighbor dump requesttable dump request"
4137881       0x3F2399        Neighborly text, "neighbor table dump requestghbor table dump request"
4137941       0x3F23D5        Neighborly text, "neighbor table dump requeste dump request"
4137991       0x3F2407        Neighborly text, "neighbor table dump requestyer address given"
4138072       0x3F2458        Neighborly text, "Neighbor entry is now deadalid network address"
4138213       0x3F24E5        Neighborly text, "neighbor get requestrequest"
4138263       0x3F2517        Neighborly text, "neighbor get requestget request"
4138317       0x3F254D        Neighborly text, "neighbor get request request"
4138368       0x3F2580        Neighborly text, "neighbor get request"
4209681       0x403C11        Neighborly text, "NeighborSolicitss"
4209698       0x403C22        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
4462156       0x44164C        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4462272       0x4416C0        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4462396       0x44173C        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4462512       0x4417B0        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4665344       0x473000        ELF, 32-bit MSB shared object, PowerPC or cisco 4500, version 1 (SYSV)
4669597       0x47409D        Unix path: /home/agent/bamboo-agent/build-dir/ROS-V7ST-JOB1/7/kernel/linux6/arch/powerpc/kernel/vdso32
4670413       0x4743CD        Unix path: /home/agent/bamboo-agent/build-dir/ROS-V7ST-JOB1/7/kernel/linux6/arch/powerpc/kernel/vdso32
4677632       0x476000        AES S-Box
4677888       0x476100        AES Inverse S-Box
4713505       0x47EC21        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 15988
-rw-r--r-- 1 root root      492 2025-10-11 13:55:11.486148779 +0100 44164c.cpio
-rw-r--r-- 1 root root 16793600 2025-10-11 13:55:18.410115960 +0100 47ec21.cpio
```

