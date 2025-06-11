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

import glob
import os
import unittest

from .classes import *


class TestDocument(unittest.TestCase):
    def test_from_file(self, debug: bool = True):
        filepaths = glob.glob(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'samples', '*.x3'))
        if len(filepaths) == 0:
            self.fail('No *.x3 files in samples directory')
        for filepath in filepaths:
            try:
                document = Document().from_file(filepath, validate=True)
                if debug: print(f"{filepath} has a reproducible document:\n{document.to_xml_string(indent=4)}\n")
            except ValueError as e:
                self.fail(e)


if __name__ == '__main__':
    unittest.main()
