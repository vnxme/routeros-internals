### 12d8c.vmlinux
#### Identification (`file <*>`):
```
Applesoft BASIC program data, first line number 240
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
3358312       0x333E68        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3515936       0x35A620        CRC32 polynomial table, little endian
3524404       0x35C734        xz compressed data
3591412       0x36CCF4        Unix path: /lib/firmware/updates/5.6.3
3616879       0x37306F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CD0-16-31, rev 0x3438c000, size 1
3616911       0x37308F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CD8-16-20, rev 0x3438c000, size 2048
3617039       0x37310F        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CFC-14-30, rev 0x3438c000, size 33
3645991       0x37A227        Copyright string: "Copyright 2005-2007 Rodolfo Giometti <giometti@linux.it>"
3654940       0x37C51C        Unix path: /sys/firmware/devicetree/base
3671081       0x380429        Neighborly text, "neighbor table overflow!ork address"
3671293       0x3804FD        Neighborly text, "neighbor get requestrequest"
3671343       0x38052F        Neighborly text, "neighbor get requestget request"
3671397       0x380565        Neighborly text, "neighbor get request request"
3671448       0x380598        Neighborly text, "neighbor get requestet request"
3671501       0x3805CD        Neighborly text, "neighbor get requestNeighbour entry not found"
3671543       0x3805F7        Neighborly text, "neighbor get requestified"
3671725       0x3806AD        Neighborly text, "neighbor dump requestp request"
3671776       0x3806E0        Neighborly text, "neighbor dump requestump request"
3671829       0x380715        Neighborly text, "neighbor dump request"
3671871       0x38073F        Neighborly text, "neighbor dump requesttable dump request"
3671925       0x380775        Neighborly text, "neighbor table dump requestghbor table dump request"
3671985       0x3807B1        Neighborly text, "neighbor table dump requeste dump request"
3672035       0x3807E3        Neighborly text, "neighbor table dump requestyer address given"
3672116       0x380834        Neighborly text, "Neighbor entry is now dead"
3833888       0x3A8020        AES Inverse S-Box
3834144       0x3A8120        AES S-Box
4112384       0x3EC000        ELF, 32-bit MSB MIPS64 shared object, MIPS, version 1 (SYSV)
4265288       0x411548        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
4265404       0x4115BC        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
4265528       0x411638        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
4265644       0x4116AC        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4
-rw-r--r-- 1 root root 492 2025-10-01 15:46:32.712660964 +0100 411548.cpio
```

