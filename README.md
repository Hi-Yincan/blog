# 个人博客

一个极简主义的个人静态博客，完全复刻 [Steph Ango](https://stephango.com/) 的设计风格，采用 [Flexoki](https://stephango.com/flexoki) 配色系统。

---

## ✨ 特点

- 🎨 **Flexoki 配色**：温暖的模拟墨水色调，支持亮色/暗色主题
- 📝 **内容优先**：极简设计，零视觉干扰
- ⚡ **极速加载**：无框架、无 Web 字体，页面体积 <50KB
- 🔒 **内容私有**：文章存储在私有仓库，构建产物公开部署
- 🤖 **全自动发布**：一条命令完成从写作到上线

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

---

## 📚 文档

### 中文文档（人类可读）

- **[文档导航](docs4human/README.md)** - 所有文档的入口
- **[项目介绍](docs4human/项目介绍.md)** - 设计理念、技术架构
- **[开发指南](docs4human/开发指南.md)** - 环境配置、开发工作流
- **[发布流程](docs4human/发布流程.md)** - 文章发布、内容管理
- **[设计说明](docs4human/设计说明.md)** - Flexoki 配色、布局系统
- **[常见问题](docs4human/常见问题.md)** - FAQ、故障排除

### 技术文档（Agent 可读）

- **[文档索引](docs/README.md)** - Agent 文档导航
- **[ARCHITECTURE.md](docs/ARCHITECTURE.md)** - 技术架构
- **[STRUCTURE.md](docs/STRUCTURE.md)** - 目录结构
- **[WORKFLOW.md](docs/WORKFLOW.md)** - CI/CD 流程
- **[DECISIONS.md](docs/DECISIONS.md)** - 架构决策记录

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
├── docs/                # Agent 可读文档
├── docs4human/          # 人类可读文档（中文）
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

## 🔄 工作流程

### 分支管理

- **main**：生产分支，合并经过测试的代码
- **feature 分支**：新功能开发（如 `feat/navigation`）
- **gh-pages**：GitHub Pages 部署分支（自动生成）

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

## 🤝 贡献

欢迎贡献代码、文档或设计改进！

### 贡献流程

```bash
# 1. Fork 并克隆
git clone https://github.com/YOUR_USERNAME/blog.git
cd blog

# 2. 创建 feature 分支
git checkout -b feat/your-feature

# 3. 开发并测试
npm run serve
# 做出更改...

# 4. 提交
git add .
git commit -m "Feat: add your feature"
git push origin feat/your-feature

# 5. 创建 Pull Request
gh pr create --title "Your Feature" --body "Description"
```

### 代码规范

- **CSS**：使用 Flexoki 变量，不硬编码颜色
- **Markdown**：文章使用 `YYYY-MM-DD-slug.md` 格式
- **提交信息**：遵循 Conventional Commits（`Feat:`, `Fix:`, `Docs:`）

---

## 📄 许可协议

- **代码**：[MIT License](LICENSE)
- **内容**：All Rights Reserved（私有内容仓库）
- **Flexoki 配色**：MIT License（来自 Steph Ango）

---

## 🙏 致谢

- **[Steph Ango](https://stephango.com/)**：设计灵感和 Flexoki 配色系统
- **[11ty](https://www.11ty.dev/)**：优秀的静态网站生成器
- **[GitHub Pages](https://pages.github.com/)**：免费托管服务

---

## 📧 联系方式

- **GitHub**：[@Hi-Yincan](https://github.com/Hi-Yincan)
- **博客**：[hi-yincan.github.io/blog](https://hi-yincan.github.io/blog)

---

## 📌 相关链接

- **设计参考**：https://stephango.com/
- **Flexoki 官网**：https://stephango.com/flexoki
- **Flexoki GitHub**：https://github.com/kepano/flexoki
- **11ty 文档**：https://www.11ty.dev/docs/
