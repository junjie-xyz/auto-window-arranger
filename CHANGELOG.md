# Changelog / 变更记录

This project follows [Semantic Versioning](https://semver.org/). Each release records verified features, known issues, minimum macOS version, and supported architectures.

本项目采用 [Semantic Versioning](https://semver.org/)。每个版本记录已验证功能、已知问题、最低 macOS 版本和支持架构。

## [Unreleased]

No unreleased public changes. / 暂无尚未发布的公开变更。

## [1.0.0-beta.1] - 2026-07-19

First public beta. / 首个公开 Beta。

### Verified / 已验证

- Single-app arrangement and combined multi-app arrangement. / 单 App 排列和多 App 组合排列。
- Layouts for one, two, three, four, five, and six or more windows. / 已验证 1、2、3、4、5 和 6 个以上窗口的布局。
- Configurable global shortcuts, target-app selection, and cycling between running target apps. / 可配置的全局快捷键、目标 App 选择及运行中目标 App 的循环切换。
- Automatic re-arrangement after selected windows open or close. / 所选窗口打开或关闭后的自动重排。
- First-run guidance for installation location and macOS Accessibility permission, including recovery after permission is revoked. / 首次运行时的安装位置和 macOS 辅助功能权限引导，以及权限撤销后的恢复入口。
- Target-app installation and running-state feedback, persisted settings, shortcut-conflict feedback, and sanitized diagnostics. / 目标 App 安装与运行状态反馈、设置持久化、快捷键冲突反馈和脱敏诊断。
- Debug and Release test suites passed on Apple Silicon. / Debug 和 Release 测试套件已在 Apple Silicon 上通过。
- Universal packaging contains arm64 and x86_64 code. / Universal 包已包含 arm64 和 x86_64 代码。

### Requirements / 系统要求

- macOS 14 or later. / macOS 14 或更高版本。
- Apple Silicon is supported. / 支持 Apple Silicon。

### Known limitations / 已知限制

- Intel code is included in the Universal package, but Intel hardware has not yet been verified. / Universal 包已包含 Intel 代码，但 Intel 真机尚未验证。
- Lume-based clean-install and full UI validation is not yet complete. / 基于 Lume 的干净安装与完整界面验证尚未完成。
