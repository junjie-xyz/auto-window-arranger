# User Guide / 使用指南

## English

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

## 简体中文

### 系统要求

- macOS 14 或更高版本。
- 支持 Apple Silicon。Universal 安装包包含 Intel 代码，但尚未完成 Intel 真机验证。
- 需要辅助功能权限，才能检查和移动你所选 App 的窗口。

### 安装

1. 从 [GitHub Releases](https://github.com/junjie-xyz/auto-window-arranger/releases) 下载已签名的 DMG。
2. 打开 DMG，将 **Auto Window Arranger** 拖入“应用程序”。
3. 推出 DMG，再从 `/Applications` 打开应用。

请先把应用移入 `/Applications`，再请求辅助功能权限。从 DMG 或其他位置运行可能导致 macOS 无法稳定保留授权。

### 首次设置

1. 阅读欢迎窗口中的辅助功能用途说明。
2. 添加需要排列窗口的 App；也可以暂时保持列表为空。
3. 点击“请求辅助功能权限”。
4. 在“系统设置 → 隐私与安全性 → 辅助功能”中启用 Auto Window Arranger。
5. 返回应用。权限状态会自动更新，无需重启。

以后可以在“设置…”中修改 App 列表。Auto Window Arranger 不会预选或要求安装任何第三方 App。

### 排列窗口

- **左键点击菜单栏图标：**排列一个已选择且正在运行的 App。
- **立即排列：**从右键菜单执行相同的单 App 排列。
- **组合排列：**把所有已选择且正在运行的 App 窗口放入一个组合布局。
- **默认单 App 快捷键：**`⌥⌘A`。
- **默认组合排列快捷键：**`⌥⇧⌘A`。

布局使用鼠标所在显示器的可用区域，不遮挡菜单栏和 Dock。一个窗口保持原尺寸并居中；两个至四个窗口使用分栏或宫格；五个窗口使用四窗口宫格，并把第五个窗口居中；六个及以上窗口使用自动等分网格。

开启 App 循环后，连续手动执行单 App 排列会依次处理当前正在运行的所选 App。自动排列不会切换前台 App。

### 自动排列

取得辅助功能权限后，Auto Window Arranger 会监控所选 App。符合条件的窗口打开或关闭后，应用会等待窗口状态稳定并重新排列，通常在约一秒内触发。

应用只处理 macOS 允许修改位置和尺寸的标准窗口。对话框、popover、固定尺寸窗口和其他辅助窗口可能被跳过。

### 设置与菜单

右键点击菜单栏图标可以使用：

- “立即排列”和“组合排列”；
- “辅助功能权限…”：查看或恢复授权；
- “设置…”：添加或移除 App、修改两个快捷键、开启或关闭 App 循环，或重置全部设置；
- “复制诊断信息”：复制用于支持的脱敏本机报告；
- “关于 Auto Window Arranger…”和“退出”。

自定义快捷键必须包含 Command、Option 或 Control。两个排列动作不能使用相同快捷键。如果快捷键与其他应用冲突，请在设置中更换组合。

### 常见问题

**无法请求辅助功能权限**

确认应用位于 `/Applications`，然后从右键菜单重新打开“辅助功能权限…”。如果系统设置没有定位到正确页面，请手动进入“隐私与安全性 → 辅助功能”。

**已经授权，但仍无法排列窗口**

在辅助功能设置中关闭再重新启用 Auto Window Arranger，确认当前运行的是 `/Applications` 中的副本，然后重试。

**没有找到可排列的窗口**

请在所选 App 中至少打开一个标准窗口。符合条件的最小化窗口会自动恢复，但对话框、popover 和不可调整尺寸的窗口会被排除。

**只移动了部分窗口**

部分 App 会强制最小尺寸或自行修改窗口位置。Auto Window Arranger 会重试、保留已经成功的变更，并在必要时报告“部分完成”。

需要帮助时，请阅读[支持文档](SUPPORT.md)或提交 [GitHub Issue](https://github.com/junjie-xyz/auto-window-arranger/issues)。不要公开凭据、窗口内容、私密文件或未脱敏日志。

### 卸载

1. 从右键菜单选择“退出”。
2. 使用 Finder 将 `/Applications` 中的 **Auto Window Arranger** 移到废纸篓。
3. 如需同时删除已保存的设置，可以运行：

   ```bash
   defaults delete xyz.junjie.auto-window-arranger
   ```

4. 如有需要，在“系统设置 → 隐私与安全性 → 辅助功能”中移除 Auto Window Arranger。

应用不会安装后台 helper 或自动更新程序。
