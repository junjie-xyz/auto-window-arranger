# User Guide

[Read the user guide with an English / 中文 switch.](https://junjie.xyz/auto-window-arranger/guide.html)

### Requirements

- macOS 14 or later.
- Apple Silicon is supported. The Universal build includes Intel code, but Intel hardware has not yet been verified.
- Accessibility permission is required to inspect and move the windows of apps you select.

### Install

1. Download the signed DMG from [GitHub Releases](https://github.com/junjie-xyz/auto-window-arranger/releases).
2. Open the DMG and drag **Auto Window Arranger** to **Applications**.
3. Eject the DMG, then open the app from `/Applications`.

Move the app to `/Applications` before requesting Accessibility permission. Running it from the DMG or another location can prevent macOS from keeping the authorization stable.

### First setup

1. Read the Accessibility explanation in the welcome window.
2. Add the apps whose windows you want to arrange. The list may remain empty until you are ready.
3. Select **Request Accessibility Permission**.
4. In **System Settings → Privacy & Security → Accessibility**, enable Auto Window Arranger.
5. Return to the app. The permission status updates automatically; no restart is required.

You can change the selected apps later in **Settings…**. Auto Window Arranger does not preselect or require any third-party app.

### Arrange windows

- **Left-click the menu bar icon:** arrange one selected, running app.
- **Arrange Now:** perform the same single-app arrangement from the right-click menu.
- **Arrange Together:** place the windows of all selected, running apps into one combined layout.
- **Default single-app shortcut:** `⌥⌘A`.
- **Default combined shortcut:** `⌥⇧⌘A`.

Layouts use the usable area of the display under the pointer and keep clear of the menu bar and Dock. One window keeps its size and is centered; two to four windows use columns or a grid; five windows use a four-window grid with the fifth centered; six or more use a balanced grid.

When app cycling is enabled, repeated manual single-app arrangements move through the selected apps that are currently running. Automatic arrangements do not change the frontmost app.

### Automatic arrangement

After Accessibility permission is granted, Auto Window Arranger monitors the selected apps. Opening or closing an eligible window schedules a new arrangement after the window state settles, normally within about one second.

The app only handles standard windows whose position and size macOS allows it to change. Dialogs, popovers, fixed-size windows, and other auxiliary windows may be skipped.

### Settings and menu

Right-click the menu bar icon to access:

- **Arrange Now** and **Arrange Together**;
- **Accessibility Permission…** to review or recover authorization;
- **Settings…** to add or remove apps, change both shortcuts, enable or disable app cycling, or reset all settings;
- **Copy Diagnostics** to copy a sanitized local report for support;
- **About Auto Window Arranger…** and **Quit**.

Custom shortcuts must include Command, Option, or Control. The two arrangement actions cannot use the same shortcut. If a shortcut conflicts with another app, choose a different combination in Settings.

### Troubleshooting

**Accessibility cannot be requested**

Confirm the app is in `/Applications`, then reopen **Accessibility Permission…** from the right-click menu. If System Settings does not open at the correct page, go to **Privacy & Security → Accessibility** manually.

**Permission is enabled but windows cannot be arranged**

Turn Auto Window Arranger off and on again in Accessibility settings, confirm that the running copy is the one in `/Applications`, and retry.

**No eligible windows are found**

Open at least one standard window in a selected app. Minimized eligible windows are restored automatically, but dialogs, popovers, and windows that cannot be resized are excluded.

**Only some windows move**

Some apps enforce minimum sizes or change their own window frames. Auto Window Arranger retries, keeps successful changes, and reports a partial result when necessary.

For help, read [Support](SUPPORT.md) or open a [GitHub Issue](https://github.com/junjie-xyz/auto-window-arranger/issues). Do not post credentials, window contents, private files, or unredacted logs.

### Uninstall

1. Choose **Quit** from the right-click menu.
2. Move **Auto Window Arranger** from `/Applications` to the Trash using Finder.
3. Optionally remove its saved settings:

   ```bash
   defaults delete xyz.junjie.auto-window-arranger
   ```

4. Optionally remove Auto Window Arranger from **System Settings → Privacy & Security → Accessibility**.

The app does not install a background helper or automatic updater.
