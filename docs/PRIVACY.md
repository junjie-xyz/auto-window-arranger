# Privacy Policy

[Read this policy with an English / 中文 switch.](https://junjie.xyz/auto-window-arranger/privacy.html)

Effective date: July 18, 2026

This policy is provided by Ding Junjie (丁俊杰), the independent developer of Auto Window Arranger.

### Summary

Auto Window Arranger processes window and app metadata locally to arrange windows. The app does not automatically send personal data, diagnostics, analytics, crash reports, or usage telemetry to the developer or any third party. It has no account, advertising, cloud sync, or automatic update service.

### Data processed on your Mac

After you choose target apps and grant macOS Accessibility permission, the app may process:

- selected app names, bundle identifiers, local app paths, running state, and process identifiers;
- window lists, roles, subroles, positions, sizes, and whether position or size can be changed;
- Accessibility authorization status and error codes;
- mouse position and display frames needed to choose the target screen;
- shortcut settings, onboarding state, selected apps, and arrangement preferences stored in `UserDefaults`.

The app may unminimize, move, resize, raise, activate, or unhide windows belonging to apps you selected. It does not request window titles, window contents, text values, document URLs, keyboard input, clipboard contents, or user file contents.

### Local logs and diagnostics

macOS Unified Logging may store local diagnostic events, hashed target-app identifiers, process and window counts, window geometry, Accessibility roles and error codes, shortcut display values, and retry state. The app does not upload these logs.

When you choose **Copy Diagnostics**, the app writes a sanitized report to the clipboard. The report includes app and macOS versions, CPU architecture, Accessibility status, app-install location, configured target count, safe-mode state, and recent fixed-format events. It excludes target-app names and identifiers, window contents, file paths, credentials, and window coordinates.

### Network activity and sharing

The app makes no automatic network requests. It does not sell or automatically share data. Opening a developer link, filing an issue, or sending an email or diagnostic report is an action you initiate. Information you submit is used to respond to support, privacy, or security requests and is retained only as long as reasonably necessary for that purpose, security records, or legal obligations.

### Retention and deletion

App preferences remain on your Mac until you remove them. To remove them, quit the app and run:

```bash
defaults delete xyz.junjie.auto-window-arranger
```

You can revoke Accessibility access in **System Settings → Privacy & Security → Accessibility**. Clipboard contents remain until replaced or cleared. Unified Logs are retained and deleted by macOS according to system policy; the app does not control or upload them.

You may request deletion of information you voluntarily sent to the developer by emailing `ioriens@outlook.com`, subject to security and legal retention requirements.

### Changes and contact

This policy must be updated before adding telemetry, automatic crash uploads, accounts, cloud sync, automatic update checks, advertising, or new remote data transfers. Privacy questions and requests may be sent to `ioriens@outlook.com`.
