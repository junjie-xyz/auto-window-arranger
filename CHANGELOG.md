# Changelog

[Read the changelog with an English / 中文 switch.](https://junjie.xyz/auto-window-arranger/changelog.html)

This project follows [Semantic Versioning](https://semver.org/). Each release records verified features, known issues, minimum macOS version, and supported architectures.

## [Unreleased]

No unreleased public changes.

## [1.0.0-beta.1] - 2026-07-19

First public beta.

### Verified

- Single-app arrangement and combined multi-app arrangement.
- Layouts for one, two, three, four, five, and six or more windows.
- Configurable global shortcuts, target-app selection, and cycling between running target apps.
- Automatic re-arrangement after selected windows open or close.
- First-run guidance for installation location and macOS Accessibility permission, including recovery after permission is revoked.
- Target-app installation and running-state feedback, persisted settings, shortcut-conflict feedback, and sanitized diagnostics.
- Debug and Release test suites passed on Apple Silicon.
- Universal packaging contains arm64 and x86_64 code.

### Requirements

- macOS 14 or later.
- Apple Silicon is supported.

### Known limitations

- Intel code is included in the Universal package, but Intel hardware has not yet been verified.
- Lume-based clean-install and full UI validation is not yet complete.
