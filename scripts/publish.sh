#!/bin/bash
# Publish script for blog updates

set -e

echo "📝 Publishing blog updates..."

# Check if we're in the right directory
if [ ! -f ".eleventy.js" ]; then
  echo "❌ Error: Not in blog root directory"
  exit 1
fi

# Update content submodule
echo "📦 Updating content submodule..."
cd content
git pull origin main
cd ..

# Update submodule reference
git add content
if git diff --cached --quiet; then
  echo "✅ Content already up to date"
else
  git commit -m "Update content submodule"
  echo "✅ Content submodule updated"
fi

# Build locally to verify
echo "🔨 Building site..."
npm run build

# Check build output
if [ ! -d "_site" ]; then
  echo "❌ Build failed - no _site directory"
  exit 1
fi

echo "✅ Build successful"

# Push to GitHub
echo "🚀 Pushing to GitHub..."
git push origin main

echo "✨ Done! GitHub Actions will deploy your changes."
echo "📍 Check progress: https://github.com/Hi-Yincan/blog/actions"
