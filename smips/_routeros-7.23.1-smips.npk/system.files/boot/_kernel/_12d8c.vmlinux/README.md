### 12d8c.vmlinux
#### Identification (`file <*>`):
```
Applesoft BASIC program data, first line number 96
```
#### Analysis (`binwalk <*>`):
```

DECIMAL       HEXADECIMAL     DESCRIPTION
--------------------------------------------------------------------------------
3152420       0x301A24        Ubiquiti partition header, header size: 56 bytes, name: "PARTLABEL=", base address: 0x6E667300, data size: 0 bytes
3295872       0x324A80        CRC32 polynomial table, little endian
3304084       0x326A94        xz compressed data
3337019       0x32EB3B        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C9C-16-31, rev 0x-10cc8000, size 1
3337051       0x32EB5B        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CA4-16-20, rev 0x-10cc8000, size 2048
3337179       0x32EBDB        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1CC8-14-30, rev 0x-10cc8000, size 33
3364669       0x33573D        Neighborly text, "neighbor table overflow!tics"
3365053       0x3358BD        Neighborly text, "neighbor get requestrequest"
3365103       0x3358EF        Neighborly text, "neighbor get requestget request"
3365157       0x335925        Neighborly text, "neighbor get request request"
3365208       0x335958        Neighborly text, "neighbor get requestet request"
3365261       0x33598D        Neighborly text, "neighbor get requestNeighbour entry not found"
3365303       0x3359B7        Neighborly text, "neighbor get requestified"
3365485       0x335A6D        Neighborly text, "neighbor dump requestp request"
3365536       0x335AA0        Neighborly text, "neighbor dump requestump request"
3365589       0x335AD5        Neighborly text, "neighbor dump request"
3365631       0x335AFF        Neighborly text, "neighbor dump requesttable dump request"
3365685       0x335B35        Neighborly text, "neighbor table dump requestghbor table dump request"
3365745       0x335B71        Neighborly text, "neighbor table dump requeste dump request"
3365795       0x335BA3        Neighborly text, "neighbor table dump requestyer address given"
3365876       0x335BF4        Neighborly text, "Neighbor entry is now dead"
3437456       0x347390        Neighborly text, "NeighborSolicitsp6InMsgs"
3437476       0x3473A4        Neighborly text, "NeighborAdvertisementsrs"
3506208       0x358020        AES Inverse S-Box
3506464       0x358120        AES S-Box
3698688       0x387000        ELF, 32-bit MSB MIPS64 shared object, MIPS, version 1 (SYSV)
3854116       0x3ACF24        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
3854232       0x3ACF98        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
3854356       0x3AD014        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
3854472       0x3AD088        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4
-rw-r--r-- 1 root root 492 2026-06-08 09:59:32.925249364 +0100 3acf24.cpio
```

