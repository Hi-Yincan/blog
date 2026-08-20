# HiYincan-Blog

极简主义静态博客，复刻 [Steph Ango](https://stephango.com/) 的设计风格，采用 [Flexoki](https://stephango.com/flexoki) 配色系统。

---

## 🚀 快速开始

### 克隆仓库

```bash
git clone --recurse-submodules https://github.com/Hi-Yincan/blog.git
cd blog
```

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run serve
```

访问 http://localhost:8080

### 构建静态网站

```bash
npm run build
```

输出到 `_site/` 目录。

---

## 📝 发布文章

### 快速发布

```bash
./scripts/publish.sh "新文章：AI Agent 开发心得"
```

自动完成：提交内容 → 触发 CI → 构建 → 部署。

### 手动发布

```bash
# 1. 写作
vim content/posts/2026-07-27-my-post.md

# 2. 提交到内容仓库
cd content
git add posts/2026-07-27-my-post.md
git commit -m "Add: 新文章标题"
git push origin main

# 3. CI 自动构建和部署（约 2-3 分钟）
```

### 文章可见性控制

通过文章 frontmatter 控制「是否上线」和「是否出现在列表」：

| frontmatter | 效果 |
|-------------|------|
| （默认，不写） | 正常发布，出现在首页 / 归档 / 标签页 / RSS |
| `unlisted: true` | 上线但**不出现在任何列表**，仅直接链接可见，自动添加 `noindex`（建议搜索引擎不要收录） |
| `unlisted: true` + `permalink: /me/` | 同上，并可自定义链接（不写则默认为 `/posts/{slug}/`） |
| `permalink: false` | **完全不上线**：内容保留在仓库，但不生成任何页面（适合暂存草稿） |

示例 —— 一篇仅通过链接分享的文章：

```markdown
---
layout: layouts/post.njk
title: 文章标题
date: 2026-08-21
unlisted: true
permalink: /me/
---
```

> 注意：`unlisted` 只是「不列出」，页面仍可被直接访问；`permalink: false` 才是「彻底不上网」。两者可独立使用。

---

## 🛠 技术栈

| 类别 | 技术 | 说明 |
|------|------|------|
| **静态网站生成器** | [11ty](https://www.11ty.dev/) | 零配置、快速构建 |
| **模板引擎** | Nunjucks | 灵活、可读性强 |
| **样式** | 原生 CSS | 无框架、完全自定义 |
| **配色** | [Flexoki](https://stephango.com/flexoki) | 开源、明暗主题 |
| **部署** | GitHub Pages | 免费、自动化 |
| **CI/CD** | GitHub Actions | 内容更新自动触发 |

---

## 📂 项目结构

```
blog/
├── content/              # Git 子模块（私有仓库）
│   ├── posts/           # 博客文章
│   ├── pages/           # 静态页面
│   └── assets/          # 图片、附件
│
├── src/                 # 源代码
│   ├── _includes/       # 模板和布局
│   ├── styles/          # CSS 样式
│   └── js/              # JavaScript 脚本
│
├── _site/               # 构建输出（gitignored）
│
├── .eleventy.js         # 11ty 配置
├── package.json         # Node 依赖
│
└── .github/workflows/   # CI/CD 配置
```

---

## 🎨 设计系统

### Flexoki 配色

基于 [Flexoki](https://stephango.com/flexoki) 开源配色方案：

- **13 级灰阶**：从 `#FFFCF0` (paper) 到 `#100F0F` (black)
- **8 种语义色**：red、orange、yellow、green、cyan、blue、purple、magenta
- **完整明暗映射**：亮色主题使用 600 级，暗色主题使用 400 级

### 布局原则

- **单栏居中**：内容宽度 37em（约 60-80 字符/行）
- **系统字体**：-apple-system, BlinkMacSystemFont, Inter
- **移动优先**：响应式断点 600px、860px
- **极简交互**：无动画、无弹窗、纯文本导航

---

### CI/CD 流程

```
内容仓库 push
    ↓
触发 repository_dispatch
    ↓
博客仓库 Actions 启动
    ↓
更新子模块 → npm ci → npm run build
    ↓
部署到 gh-pages 分支
    ↓
GitHub Pages 自动发布
```

**完成时间**：约 2-3 分钟。

---

## 📄 许可协议

- **代码**：[MIT License](LICENSE)
- **内容**：All Rights Reserved（Private）
- **Flexoki 配色**：MIT License（来自 Steph Ango）

---

## 🙏 致谢

- **[Steph Ango](https://stephango.com/)**：设计灵感和 Flexoki 配色系统
- **[11ty](https://www.11ty.dev/)**：优秀的静态网站生成器
- **[GitHub Pages](https://pages.github.com/)**：免费托管服务

---

## 📌 相关链接

- **设计参考**：https://stephango.com/
- **Flexoki 官网**：https://stephango.com/flexoki
- **Flexoki GitHub**：https://github.com/kepano/flexoki
- **11ty 文档**：https://www.11ty.dev/docs/
