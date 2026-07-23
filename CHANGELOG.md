# Changelog

[Read the changelog with an English / 中文 switch.](https://junjie.xyz/auto-window-arranger/changelog.html)

This project follows [Semantic Versioning](https://semver.org/). Each release records verified features, known issues, minimum macOS version, and supported architectures.

## [Unreleased]

No unreleased public changes.

## [1.0.0-beta.3] - 2026-07-23

Third public beta, fixing Launch at Login recovery when macOS cannot read the initial login-item status.

### Fixed

- The Launch at Login toggle remains available when Service Management reports that it cannot find the current service.
- Enabling from that state now retries registration and keeps the Login Items Settings action available.
- Registration failures show the macOS error description, domain, and code for further diagnosis.

### Validation

- All 114 automated tests passed, including the unavailable-status retry path and English and Simplified Chinese resources.
- The Universal DMG contains `arm64` and `x86_64`, was signed with Developer ID, notarized with status Accepted, stapled, and passed image, signature, entitlement, and Gatekeeper validation.
- DMG SHA256: `5c6c210aa603710ae145927c4b99244763d13954f7171d92b2380b43248f4ad1`.
- At the user's request, this build did not perform a real login-item state change, VM install, or hardware functional test. Validation on macOS Tahoe 26.3.1 is pending user testing.

### Requirements

- macOS 14 or later.
- Apple Silicon is supported.

### Known limitations

- Real Launch at Login registration on macOS Tahoe 26.3.1 is awaiting user confirmation.
- Intel hardware, full UI, multi-display, and broader compatibility validation remain incomplete, and stable `v1.0.0` has not been released.

## [1.0.0-beta.2] - 2026-07-23

Second public beta, focused on settings and menu bar control.

### Added

- Launch at Login using the supported macOS login-item service, off by default and synchronized with the system state.
- A setting that chooses whether left-clicking the menu bar icon arranges one app or all selected running apps together.
- A persistent switch for automatic arrangement after eligible windows open or close; manual menu and shortcut actions remain available when it is off.
- Clear actions for both global shortcuts, including persistence of an unset shortcut.

### Changed

- Redesigned Settings with clearer sections for menu bar behavior, shortcuts, active apps, and startup.
- Shortcut recording temporarily suspends registered global shortcuts so an existing combination is not intercepted before recording.
- Reset All Settings now restores the click action and automatic arrangement and turns off Launch at Login.

### Validation

- All 113 automated tests passed, including localization, light and dark Settings layouts, login-item state, shortcut recording, automatic-task cancellation, and preference reset.
- The Universal DMG contains `arm64` and `x86_64`, was signed with Developer ID, notarized with status Accepted, stapled, and passed image, signature, entitlement, and Gatekeeper validation.
- All three public Release assets were downloaded again and matched the published SHA256 and release manifest.
- The verified DMG was installed in a disposable clone of a clean Lume macOS 26.5.2 VM, and the first app process launch succeeded. The host Mac was locked, so Finder drag-install and onboarding visual evidence were not repeated for this build; this does not constitute full UI validation.

### Requirements

- macOS 14 or later.
- Apple Silicon is supported.

### Known limitations

- Intel code is included in the Universal package, but Intel hardware has not yet been verified.
- Full UI, multi-display, and broader compatibility validation remain incomplete, and stable `v1.0.0` has not been released.

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
- The public Beta was downloaded with Safari and installed in a clean Lume macOS 26.5.2 VM with quarantine provenance preserved; SHA256, image validity, Gatekeeper acceptance, Finder installation to `/Applications`, and first launch into onboarding were verified.
- A limited post-install UI and user smoke check was completed; this does not constitute full UI or stable-release validation.

### Requirements

- macOS 14 or later.
- Apple Silicon is supported.

### Known limitations

- Intel code is included in the Universal package, but Intel hardware has not yet been verified.
- Full UI and broader compatibility validation remain incomplete, and stable `v1.0.0` has not been released.
