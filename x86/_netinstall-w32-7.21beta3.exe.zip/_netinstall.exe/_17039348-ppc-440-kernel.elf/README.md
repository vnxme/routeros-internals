### 17039348-ppc-440-kernel.elf
#### Identification (`file <*>`):
```
ELF 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV), statically linked, BuildID[sha1]=9c7cf12ddc3e2c81384bcdf7719b51b9eb7c385c, stripped
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
0             0x0             ELF, 32-bit MSB executable, PowerPC or cisco 4500, version 1 (SYSV)
3621472       0x374260        CRC32 polynomial table, little endian
3629682       0x376272        xz compressed data
3675786       0x38168A        Unix path: /lib/firmware/updates/5.6.3-440
3719767       0x38C257        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C23-16-31, rev 0x-51c88000, size 1
3719799       0x38C277        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C2B-16-20, rev 0x-51c88000, size 2048
3719927       0x38C2F7        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C4C-14-30, rev 0x-51c88000, size 33
3741107       0x3915B3        Unix path: /sys/firmware/devicetree/base
3743037       0x391D3D        Unix path: /sys/firmware/fdt': CRC check failed
3756881       0x395351        Neighborly text, "neighbor table overflow!ics"
3757153       0x395461        Neighborly text, "neighbor get requestNeighbour entry not found"
3757195       0x39548B        Neighborly text, "neighbor get requestified"
3757377       0x395541        Neighborly text, "neighbor dump requestp request"
3757428       0x395574        Neighborly text, "neighbor dump requestump request"
3757481       0x3955A9        Neighborly text, "neighbor dump requestor neighbor dump request"
3757547       0x3955EB        Neighborly text, "neighbor dump requesttable dump request"
3757601       0x395621        Neighborly text, "neighbor table dump requestghbor table dump request"
3757661       0x39565D        Neighborly text, "neighbor table dump requeste dump request"
3757711       0x39568F        Neighborly text, "neighbor table dump requestyer address given"
3757792       0x3956E0        Neighborly text, "Neighbor entry is now deadalid network address"
3757933       0x39576D        Neighborly text, "neighbor get requestrequest"
3757983       0x39579F        Neighborly text, "neighbor get requestget request"
3758037       0x3957D5        Neighborly text, "neighbor get request request"
3758088       0x395808        Neighborly text, "neighbor get request"
3831273       0x3A75E9        Neighborly text, "NeighborSolicitss"
3831290       0x3A75FA        Neighborly text, "NeighborAdvertisementscmp6OutMsgs"
4081304       0x3E4698        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4081420       0x3E470C        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4081544       0x3E4788        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4081660       0x3E47FC        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
4247552       0x40D000        ELF, 32-bit MSB shared object, PowerPC or cisco 4500, version 1 (SYSV)
4251805       0x40E09D        Unix path: /home/agent/bamboo-agent/build-dir/ROS-V7B-JOB1/7/kernel/linux6/arch/powerpc/kernel/vdso32
4252617       0x40E3C9        Unix path: /home/agent/bamboo-agent/build-dir/ROS-V7B-JOB1/7/kernel/linux6/arch/powerpc/kernel/vdso32
4259840       0x410000        AES S-Box
4260096       0x410100        AES Inverse S-Box
4295281       0x418A71        xz compressed data
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 5288
-rw-r--r-- 1 root root     492 2025-10-15 15:55:33.693673227 +0100 3e4698.cpio
-rw-r--r-- 1 root root 5474304 2025-10-15 15:55:35.842673108 +0100 418a71.cpio
```

