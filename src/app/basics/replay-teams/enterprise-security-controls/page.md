---
title: Enterprise security controls
---

## Self Storage a.k.a. Bring Your Own Bucket

It’s possible to host your Replay data in the S3 Bucket or storage of your choice. This gives you full control of how your data is accessed, the ability to monitor access, and revoke access at any point.

### URL Allowlist and Blocklist

It’s possible to specify a set of URLs which can be included or excluded from a Replay. This gives you control to limit Replay recordings to web apps that are hosted on certain URLs or to environments that belong to match domains.

Examples

- Allow recordings for development and staging, exclude production

- Allow recordings for `/search` exclude recordings which match `/checkout`

## SSO Integrations

Replay supports SSO integrations such as Okta and SAML 2.0 so that you can keep your existing identity and authentication system.
