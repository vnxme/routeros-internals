# routeros-internals

## Summary

This project enables everyone to look inside MikroTik RouterOS and study its internals.

## Description

RouterOS packages and system images are thoroughly packed and compressed to prevent users from studying the internals. This repository (in particular, the [main branch](https://github.com/vnxme/routeros-internals/tree/main)) contains a set of Linux shell and Python tools to deal with these files.

The [releases page](https://github.com/vnxme/routeros-internals/releases) includes the compressed internals of various RouterOS versions whether published by the vendor or patched by third parties. Some of the released versions are unpacked into [separate branches](https://github.com/vnxme/routeros-internals/branches/active) for a swift file analysis and debug.

## Fork Policy

The authors and contributors are grateful to GitHub for hosting the project. Each RouterOS version adds over 1.5 GB to GitHub storage space consumption which is normally unlimited for releases. However, separate branches affect the total repository size which GitHub [strongly recommends](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits) to be kept under 10 GB. That's why only the most recent and/or critical RouterOS versions are held in separate branches.

Unless you intend to unpack and analyse RouterOS versions that aren't published by this project, there is basically no point in forking it. Still you are welcome to enhance the tools by forking the project, making some relevant changes and submitting PRs. 

## Legal Notice

**Non-Affiliation:** This project is **NOT** affiliated with, endorsed by, sponsored by, or officially connected to SIA Mikrotīkls or any of its subsidiaries or affiliates. The use of any trademarks, service marks, trade names, logos, or brand identifiers associated with SIA Mikrotīkls is solely for identification and informational purposes. This is an independent, community-driven project developed without endorsement from or collaboration with SIA Mikrotīkls. All product and company names are the registered trademarks of their respective owners.

**Liability:** The software is provided **"as is"**, without warranty of any kind, express or implied. By using this software, you acknowledge that the authors and contributors **bear no responsibility** for any issues, damages, or losses incurred through its use. This includes, but is not limited to: data loss, system instability, security vulnerabilities, or any other direct or indirect consequences arising from the execution, performance, or misuse of this software. Users are solely responsible for evaluating the risks, testing the software in safe environments, and determining its suitability for their intended purposes. No guarantee of correctness, reliability, or fitness for a particular purpose is provided.

**Permitted Use:** The software provided in this repository is primarily for **educational purposes and legitimate forensic research**. It is intended to facilitate academic study, security analysis, vulnerability understanding, and lawful investigative activities. By accessing this repository, you acknowledge that this software is provided for knowledge advancement and responsible security research, and agree to use it in compliance with all applicable laws, licenses and ethical standards. For full terms, see [LICENSE](LICENSE.md).

This notice constitutes an integral part of this repository's terms and applies to the fullest extent permitted by applicable law.
