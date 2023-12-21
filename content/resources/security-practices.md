---
title: Security Practices
---
# Security Practices

## **Security Baseline**

**Compliance with SOC2 Type ||**

We began our SOC2 journey in late 2021 and made improvements to our security posture across all aspects of our operations. *We’re never done working on our security program and we’re committed to sharing information about our security improvements going forward.*

**Strong Identity and Access Management Practices**

We access our AWS Console and APIs using SSO. Additionally it’s common to use IAM User Credentials for services but this is almost never necessary, and instead we’ve opted to use IAM Roles for our workloads.

**Monitoring and Tooling**

We’ve enabled CloudTrail and GuardDuty and Vanta to report on, and monitor our Cloud posture. We monitor our code for vulnerabilities using Dependabot and Snyk.

**We scan our software for vulnerabilities.**

No single tool will catch everything and specializes in all types of issues. We use dependabot and snyk to help with our dependency management, and knowing when we have software dependencies we need to patch. Semgrep helps us find security and quality problems through static analysis.

**Regular patching and updates**

Replay runs on top of Firefox, Chromium, and Node. It benefits from the security and maturity of the these massive projects. The Replay browser on your machine will update automatically with the latest security patches when updates are available.

## **Beyond the Baseline**

**Design and Architecture**

Maintaining the security of our infrastructure is simple because viewing a Replay does not make real network connections, interactions with the filesystem, or other syscalls. When viewing a Replay, your recording is containerized in a separate kubernetes pod from other recordings.

**We anonymize production data before using it for testing.**

Development teams need data representative of real data to develop properly. We fully anonymize our production database of all PII before it’s used in staging to test database changes

**Protecting our Perimeter with Tailscale and Araali**

What would happen if we accidentally made a mistake configuring our VPC that contain our infrastructure? We use Tailscale as a VPN to provide secure access to our network, and Araali Networks as a host based firewall implemented in BPF. The Replay team is immediately alerted if a host in our Replay infrastructure tries to communicate with services that are outside of our network.

**We provide the security features you need**

Your Replay recordings are yours, not ours. We offer “*Bring your own bucket*” to our enterprise customers. All customers are able to use SSO and OIDC without any additional cost, without an **[SSO tax](https://sso.tax/)**

## Privacy + Security Policies

For additional information, see our [Privacy + Security Policies](https://www.replay.io/security-and-privacy).

## **Reporting Security Problems**

If you’re a security researcher, or find a security issue in Replay’s product, you can email our security team at security@replay.io. We have not yet established a bug bounty because they require significant attention, but we did establish a safe place to report security problems to Replay, or coordinate directly with our security team.