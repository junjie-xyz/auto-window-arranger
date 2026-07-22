# Auto Window Arranger

Auto Window Arranger is a macOS menu bar app that precisely arranges every window from the apps you choose. Trigger a layout manually, use configurable global shortcuts, or let the app update the layout when windows open and close.

Auto Window Arranger 是一款 macOS 菜单栏应用，用于精确排列你所选 App 的全部窗口。你可以手动触发布局、使用可配置的全局快捷键，或在窗口打开和关闭后自动更新布局。

[Official website / 官方网站](https://junjie.xyz/auto-window-arranger/)

## Download / 下载

Download the public beta from the dedicated [v1.0.0-beta.1 pre-release](https://github.com/junjie-xyz/auto-window-arranger/releases/tag/v1.0.0-beta.1). v1 is currently free.

请从专用的 [v1.0.0-beta.1 预发布页面](https://github.com/junjie-xyz/auto-window-arranger/releases/tag/v1.0.0-beta.1)下载公开 Beta。v1 当前免费。

### Requirements / 系统要求

- macOS 14 or later / macOS 14 或更高版本
- Apple Silicon is supported / 支持 Apple Silicon
- The Universal build includes Intel code, but Intel hardware has not yet been verified / Universal 包含 Intel 代码，但 Intel 真机尚未验证
- macOS Accessibility permission is required to inspect and move selected windows / 检查和移动所选窗口需要 macOS 辅助功能权限

## Window layouts / 窗口布局

- 1 window: keep its size and center it / 1 个窗口：保持原尺寸并居中
- 2 windows: equal columns / 2 个窗口：左右等分
- 3 windows: three equal columns / 3 个窗口：横向三等分
- 4 windows: 2 × 2 grid / 4 个窗口：2 × 2 宫格
- 5 windows: four in a grid, with the fifth centered at the same size / 5 个窗口：前四个组成宫格，第五个以相同尺寸居中叠放
- 6 or more windows: balanced grid / 6 个及以上窗口：自动等分网格

Layouts use the usable area of the display under the pointer and keep clear of the menu bar and Dock. The app does not preselect or require any third-party app.

布局使用鼠标所在显示器的可用区域，不遮挡菜单栏和 Dock。应用不会预设或要求安装任何第三方 App。

## Privacy / 隐私

Window and app metadata is processed locally. Auto Window Arranger has no account, advertising, telemetry, automatic crash upload, cloud sync, automatic update check, or automatic network request.

窗口与 App 元数据只在本机处理。Auto Window Arranger 不含账号、广告、遥测、自动崩溃上传、云同步、自动更新检查或自动网络请求。

Read the complete [Privacy Policy](docs/PRIVACY.md). / 阅读完整的[隐私政策](docs/PRIVACY.md)。

## Documentation / 文档

- [Website / 官网](https://junjie.xyz/auto-window-arranger/)
- [User Guide / 使用指南](docs/USER_GUIDE.md)
- [Privacy / 隐私](docs/PRIVACY.md)
- [Support / 支持](docs/SUPPORT.md)
- [License / 许可](LICENSE)
- [Changelog / 变更记录](CHANGELOG.md)
- [Issues / 问题反馈](https://github.com/junjie-xyz/auto-window-arranger/issues)
- [Security / 安全](SECURITY.md)
- [Releases / 发布](https://github.com/junjie-xyz/auto-window-arranger/releases)

This repository contains public distribution assets and documentation only. The application source code and private build records are not published here.

本仓库只包含公开分发资产和文档，不公开应用源码或私有构建记录。
