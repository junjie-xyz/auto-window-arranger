# Security Policy / 安全政策

## English

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

## 简体中文

### 支持版本

目前尚未发布公开 stable 版本，因此没有已发布版本获得安全维护周期承诺。正式声明支持前，本节会列出受支持的 stable 版本。

### 私下报告漏洞

不要通过公开 Issue、Discussion、社交媒体帖子或公开日志提交凭据、token、证书、私钥、用户窗口内容、可识别身份的诊断信息或完整利用细节。

请使用仓库的 **Security → Report a vulnerability** 表单。如果该表单不可用，请发送邮件到 `ioriens@outlook.com`，并在主题中注明 `Security`。

报告应包含：

- 受影响版本、macOS 版本和硬件架构；
- 影响范围和最小可重复步骤；
- 预期行为与实际行为；
- 如有需要，提供脱敏诊断信息；
- 是否已向其他人或平台披露。

### 处理原则

- 先确认报告和影响，再承诺严重等级或处理时间。
- 修复使用新版本，不替换已有 Release tag 或资产。
- 安全版本重新执行签名、公证、staple、Gatekeeper 和干净安装验证。
- 公开公告不包含用户数据，并在用户获得合理更新时间后再披露利用细节。

### 安全边界

- 应用在本机使用 macOS 辅助功能 API 检查并排列用户所选 App 的窗口。
- macOS 要求用户明确批准辅助功能访问。
- 客户端构建不得包含 Apple、GitHub、公证、更新或其他服务凭据。
- Developer ID 签名和 Apple 公证提供来源与完整性信号，但不能阻止复制、反编译或逆向工程。
