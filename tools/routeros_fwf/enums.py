# Copyright 2025 VNXME
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Relevant materials:
# https://patchwork.ozlabs.org/project/openwrt/patch/20200403182056.43730-2-hacks@slashdirt.org/
# https://github.com/adron-s/mtik_routerboot_encdec

MAGIC = {
    b'\x30\x78\x30\x37': {'be': False, 'magic': '70x0', 'platform': '70x0',     'arch': 'arm64', 'compatible': 'marvell,armada7040',      'soc': 'Marvell Armada 7040 (88F7040)'},
    b'\x37\x33\x41\x4d': {'be': False, 'magic': 'MA37', 'platform': 'a3700',    'arch': 'arm64', 'compatible': 'marvell,armada3720',      'soc': 'Marvell Armada 3720 (88F3720)'},
    b'\x4e\x70\x6c\x41': {'be': False, 'magic': 'AlpN', 'platform': 'al2',      'arch': 'arm',   'compatible': 'annapurna-labs,alpine',   'soc': 'Annapurna Labs Alpine AL21400'},
    b'\x34\x36\x6c\x61': {'be': False, 'magic': 'al64', 'platform': 'al64',     'arch': 'arm64', 'compatible': 'annapurna-labs,alpine2',  'soc': 'Annapurna Labs Alpine v2'},
    b'\x42\x34\x36\x61': {'be': False, 'magic': 'a64B', 'platform': 'al64B',    'arch': 'arm64', 'compatible': 'annapurna-labs,alpine2B', 'soc': 'Annapurna Labs Alpine v2B'},
    b'\x4e\x33\x6c\x61': {'be': False, 'magic': 'al3N', 'platform': 'al64v3',   'arch': 'arm64', 'compatible': 'annapurna-labs,alpine3',  'soc': 'Annapurna Labs Alpine v3'},
    b'\x61\x34\x36\x30': {'be': True,  'magic': 'a460', 'platform': 'amcc460',  'arch': 'ppc',                                            'soc': 'Applied Micro PowerPC 460'},
    b'\x30\x30\x31\x37': {'be': True,  'magic': '7100', 'platform': 'ar7100',   'arch': 'mipsbe',                                         'soc': 'Atheros AR7100'}, # SPI + NAND
    b'\x31\x34\x32\x37': {'be': True,  'magic': '7241', 'platform': 'ar7240',   'arch': 'mipsbe',                                         'soc': 'Atheros AR7240'}, # SPI + NAND
    b'\x30\x33\x33\x39': {'be': True,  'magic': '9330', 'platform': 'ar9330',   'arch': 'mipsbe',                                         'soc': 'Atheros AR9330'}, # SPI + NAND
    b'\x4c\x33\x33\x39': {'be': True,  'magic': '933L', 'platform': 'ar9330L',  'arch': 'mipsbe',                                         'soc': 'Atheros AR9330'},
    b'\x30\x34\x33\x39': {'be': True,  'magic': '9340', 'platform': 'ar9340',   'arch': 'mipsbe',                                         'soc': 'Atheros AR9340'}, # SPI + NAND
    b'\x6c\x34\x33\x39': {'be': True,  'magic': '934l', 'platform': 'ar9340L',  'arch': 'mipsbe',                                         'soc': 'Atheros AR9340'},
    b'\x34\x34\x33\x39': {'be': True,  'magic': '9344', 'platform': 'ar9344',   'arch': 'mipsbe',                                         'soc': 'Atheros AR9344'}, # SPI + NAND
    b'\x4c\x34\x33\x39': {'be': True,  'magic': '934L', 'platform': 'ar9344L',  'arch': 'mipsbe',                                         'soc': 'Atheros AR9344'},
    b'\x28\x25\x78\x6d': {'be': False, 'magic': 'mx%(', 'platform': 'dx2528',   'arch': 'arm64',  'compatible': 'marvell,alleycat5',      'soc': 'Marvell Prestera 98DX2528'},
    b'\x73\x79\x73\x4d': {'be': False, 'magic': 'Msys', 'platform': 'dx3230L',  'arch': 'arm',    'compatible': 'marvell,msys',           'soc': 'Marvell Prestera 98DX3230'},
    b'\x32\x36\x35\x37': {'be': False, 'magic': '7562', 'platform': 'en7562',   'arch': 'arm',    'compatible': 'econet,en7523',          'soc': 'EcoNet EN7523'},
    b'\x34\x4e\x70\x69': {'be': False, 'magic': 'ipN4', 'platform': 'ipq4000',  'arch': 'arm',    'compatible': 'qcom,ipq4019',           'soc': 'Qualcomm Dakota IPQ4019'},
    b'\x34\x71\x70\x69': {'be': False, 'magic': 'ipq4', 'platform': 'ipq4000L', 'arch': 'arm',    'compatible': 'qcom,ipq4019',           'soc': 'Qualcomm Dakota IPQ4019'},
    b'\x65\x6c\x70\x6d': {'be': False, 'magic': 'mple', 'platform': 'ipq5000',  'arch': 'arm',    'compatible': 'qcom,ipq5018',           'soc': 'Qualcomm Maple IPQ5018'},
    b'\x6d\x61\x69\x6d': {'be': False, 'magic': 'miam', 'platform': 'ipq5300',  'arch': 'arm64',                                          'soc': 'Qualcomm Miami IPQ5300'},
    b'\x36\x71\x70\x69': {'be': False, 'magic': 'ipq6', 'platform': 'ipq6000',  'arch': 'arm64',  'compatible': 'qcom,ipq6018',           'soc': 'Qualcomm Cypress IPQ6018'},
    b'\x30\x71\x70\x69': {'be': False, 'magic': 'ipq0', 'platform': 'ipq8060',  'arch': 'arm',                                            'soc': 'Qualcomm Akronite IPQ8068'},
    b'\x37\x71\x70\x69': {'be': False, 'magic': 'ipq7', 'platform': 'ipq807x',  'arch': 'arm64',  'compatible': 'qcom,ipq807x',           'soc': 'Qualcomm Hawkeye IPQ807x'},
    b'\x38\x71\x70\x69': {'be': False, 'magic': 'ipq8', 'platform': 'ipq9574',  'arch': 'arm64',  'compatible': 'qcom,ipq9574',           'soc': 'Qualcomm Alder IPQ9574'},
    b'\x35\x32\x63\x65': {'be': False, 'magic': 'ec25', 'platform': 'mdm9607',  'arch': 'arm',    'compatible': 'qcom,mdm9607',           'soc': 'Qualcomm MDM9607'},
    b'\x38\x33\x32\x33': {'be': True,  'magic': '8323', 'platform': 'mpc8323',  'arch': 'ppc',                                            'soc': 'Freescale PowerQUICC II Pro MPC8323'},
    b'\x38\x33\x34\x33': {'be': True,  'magic': '8343', 'platform': 'mpc8343',  'arch': 'ppc',                                            'soc': 'Freescale PowerQUICC II Pro MPC8343'},
    b'\x38\x35\x34\x34': {'be': True,  'magic': '8544', 'platform': 'mpc8544',  'arch': 'ppc',                                            'soc': 'Freescale PowerQUICC III MPC8544'},
    b'\x38\x35\x78\x78': {'be': True,  'magic': '85xx', 'platform': 'mpc8548',  'arch': 'ppc',                                            'soc': 'Freescale PowerQUICC III MPC8548'},
    b'\x31\x32\x36\x37': {'be': False, 'magic': '7621', 'platform': 'mt7621L',  'arch': 'mmips',                                          'soc': 'MediaTek MT7621'},
    b'\x31\x30\x32\x33': {'be': True,  'magic': '1023', 'platform': 'p1023',    'arch': 'ppc',                                            'soc': 'Freescale QorlQ P1023'},
    b'\x32\x30\x32\x30': {'be': True,  'magic': '2020', 'platform': 'p2020',    'arch': 'ppc',                                            'soc': 'Freescale QorlQ P2020'},
    b'\x38\x35\x31\x33': {'be': True,  'magic': '8513', 'platform': 'qca8513',  'arch': 'mipsbe',                                         'soc': 'Qualcomm Atheros QCA8513'}, # SPI + NAND
    b'\x38\x35\x31\x4c': {'be': True,  'magic': '851L', 'platform': 'qca8513L', 'arch': 'mipsbe',                                         'soc': 'Qualcomm Atheros QCA8513'},
    b'\x38\x37\x31\x4c': {'be': True,  'magic': '871L', 'platform': 'qca8719L', 'arch': 'mipsbe',                                         'soc': 'Qualcomm Atheros QCA8719'},
    b'\x30\x33\x35\x39': {'be': True,  'magic': '9530', 'platform': 'qca9531',  'arch': 'mipsbe',                                         'soc': 'Qualcomm Atheros QCA9531'},
    b'\x4c\x33\x35\x39': {'be': True,  'magic': '953L', 'platform': 'qca9531L', 'arch': 'mipsbe',                                         'soc': 'Qualcomm Atheros QCA9531'}, # compatible with smips
    b'\x30\x35\x35\x39': {'be': True,  'magic': '9550', 'platform': 'qca9550',  'arch': 'mipsbe',                                         'soc': 'Qualcomm Atheros QCA9550'}, # SPI + NAND
    b'\x4c\x35\x35\x39': {'be': True,  'magic': '955L', 'platform': 'qca9550L', 'arch': 'mipsbe',                                         'soc': 'Qualcomm Atheros QCA9550'},
    b'\x65\x6c\x69\x54': {'be': False, 'magic': 'Tile', 'platform': 'tilegx',   'arch': 'tile',                                           'soc': 'Tilera Tile-GX'},
}
