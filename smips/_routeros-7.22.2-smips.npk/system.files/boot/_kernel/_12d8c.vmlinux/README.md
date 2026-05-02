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
3295488       0x324900        CRC32 polynomial table, little endian
3303700       0x326914        xz compressed data
3336635       0x32E9BB        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C1C-16-31, rev 0x-11cc8000, size 1
3336667       0x32E9DB        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C24-16-20, rev 0x-11cc8000, size 2048
3336795       0x32EA5B        Intel x86 or x64 microcode, sig 0x03000000, pf_mask 0x00, 1C48-14-30, rev 0x-11cc8000, size 33
3364285       0x3355BD        Neighborly text, "neighbor table overflow!tics"
3364669       0x33573D        Neighborly text, "neighbor get requestrequest"
3364719       0x33576F        Neighborly text, "neighbor get requestget request"
3364773       0x3357A5        Neighborly text, "neighbor get request request"
3364824       0x3357D8        Neighborly text, "neighbor get requestet request"
3364877       0x33580D        Neighborly text, "neighbor get requestNeighbour entry not found"
3364919       0x335837        Neighborly text, "neighbor get requestified"
3365101       0x3358ED        Neighborly text, "neighbor dump requestp request"
3365152       0x335920        Neighborly text, "neighbor dump requestump request"
3365205       0x335955        Neighborly text, "neighbor dump request"
3365247       0x33597F        Neighborly text, "neighbor dump requesttable dump request"
3365301       0x3359B5        Neighborly text, "neighbor table dump requestghbor table dump request"
3365361       0x3359F1        Neighborly text, "neighbor table dump requeste dump request"
3365411       0x335A23        Neighborly text, "neighbor table dump requestyer address given"
3365492       0x335A74        Neighborly text, "Neighbor entry is now dead"
3437072       0x347210        Neighborly text, "NeighborSolicitsp6InMsgs"
3437092       0x347224        Neighborly text, "NeighborAdvertisementsrs"
3506208       0x358020        AES Inverse S-Box
3506464       0x358120        AES S-Box
3698688       0x387000        ELF, 32-bit MSB MIPS64 shared object, MIPS, version 1 (SYSV)
3854084       0x3ACF04        ASCII cpio archive (SVR4 with no CRC), file name: "dev", file name length: "0x00000004", file size: "0x00000000"
3854200       0x3ACF78        ASCII cpio archive (SVR4 with no CRC), file name: "dev/console", file name length: "0x0000000C", file size: "0x00000000"
3854324       0x3ACFF4        ASCII cpio archive (SVR4 with no CRC), file name: "root", file name length: "0x00000005", file size: "0x00000000"
3854440       0x3AD068        ASCII cpio archive (SVR4 with no CRC), file name: "TRAILER!!!", file name length: "0x0000000B", file size: "0x00000000"
```
#### Listing (`ls -AlR --time-style=full-iso <*>`):
```
/:
total 4
-rw-r--r-- 1 root root 492 2026-05-02 20:33:26.592645826 +0100 3acf04.cpio
```

