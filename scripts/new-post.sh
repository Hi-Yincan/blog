#!/bin/bash
# Create a new blog post

set -e

# Check if title is provided
if [ -z "$1" ]; then
  echo "Usage: ./scripts/new-post.sh \"Post Title\""
  exit 1
fi

TITLE="$1"
DATE=$(date +%Y-%m-%d)
SLUG=$(echo "$TITLE" | iconv -t ascii//TRANSLIT | sed -E 's/[^a-zA-Z0-9]+/-/g' | sed -E 's/^-+|-+$//g' | tr '[:upper:]' '[:lower:]')
FILENAME="content/posts/${DATE}-${SLUG}.md"

# Check if file already exists
if [ -f "$FILENAME" ]; then
  echo "❌ Error: Post already exists: $FILENAME"
  exit 1
fi

# Create the post file
cat > "$FILENAME" <<EOF
---
layout: layouts/post.njk
title: ${TITLE}
date: ${DATE}
tags: []
description:
---

## Introduction

Your content here...

EOF

echo "✅ Created new post: $FILENAME"
echo "📝 Edit the file and add your content"
echo "🏷️  Don't forget to add tags and description in frontmatter"
