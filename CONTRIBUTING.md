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