# Security Policy

[Read this policy with an English / 中文 switch.](https://junjie.xyz/auto-window-arranger/security.html)

### Supported versions

No public stable version has been released, so no released version currently has a promised security-maintenance period. This section will identify supported stable versions before support is claimed.

### Reporting a vulnerability

Do not submit credentials, tokens, certificates, private keys, user window contents, identifiable diagnostics, or complete exploit details through a public issue, discussion, social post, or public log.

Use the repository's **Security → Report a vulnerability** form. If that form is unavailable, send reports to `ioriens@outlook.com` with `Security` in the subject.

Include:

- affected version, macOS version, and hardware architecture;
- impact and the smallest repeatable steps;
- expected and actual behavior;
- sanitized diagnostics, if relevant; and
- whether the issue has been disclosed elsewhere.

### Handling principles

- Reports are acknowledged and assessed before a severity or timeline is promised.
- Fixes use a new version and never replace an existing release tag or asset.
- Security releases repeat signing, notarization, stapling, Gatekeeper, and clean-install validation.
- Public advisories avoid user data and delay exploit details until users have had a reasonable opportunity to update.

### Security boundary

- The app uses the macOS Accessibility API locally to inspect and arrange windows of user-selected apps.
- macOS requires explicit user approval for Accessibility access.
- Client builds must not contain Apple, GitHub, notarization, update, or other service credentials.
- Developer ID signing and Apple notarization provide source and integrity signals, but do not prevent copying, decompilation, or reverse engineering.
