module.exports = function(eleventyConfig) {
  // Copy content assets to /assets/
  eleventyConfig.addPassthroughCopy({"content/assets": "assets"});

  // Copy styles and scripts to root-level directories
  eleventyConfig.addPassthroughCopy({"src/styles": "styles"});
  eleventyConfig.addPassthroughCopy({"src/js": "js"});

  // Watch for changes
  eleventyConfig.addWatchTarget("src/styles/");
  eleventyConfig.addWatchTarget("content/");

  // Date filter for display
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  });

  // Year and month for post list (stephango.com style: "2026 · 07")
  eleventyConfig.addFilter("yearMonth", (dateObj) => {
    const date = new Date(dateObj);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return `${year} · ${month}`;
  });

  // Reading time estimate
  eleventyConfig.addFilter("readingTime", (content) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} minute${minutes > 1 ? 's' : ''}`;
  });

  // Limit filter for arrays
  eleventyConfig.addFilter("limit", (array, limit) => {
    return array.slice(0, limit);
  });

  // Collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/posts/*.md")
      .filter(post => post.data.published !== false)
      .sort((a, b) => b.date - a.date);
  });

  eleventyConfig.addCollection("pages", function(collectionApi) {
    return collectionApi.getFilteredByGlob("content/pages/*.md");
  });

  // Set permalink for posts
  eleventyConfig.addGlobalData("eleventyComputed", {
    permalink: (data) => {
      if (data.page.inputPath.includes("content/posts/")) {
        const filename = data.page.fileSlug;
        return `/posts/${filename}/`;
      }
      return data.permalink;
    }
  });

  // Extract all unique tags from posts
  eleventyConfig.addCollection("tagList", function(collectionApi) {
    const tagSet = new Set();
    collectionApi.getAll().forEach(item => {
      if (item.data.tags) {
        item.data.tags.forEach(tag => tagSet.add(tag));
      }
    });
    return Array.from(tagSet).sort();
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "src/_includes",
      data: "src/_data"
    },
    pathPrefix: "/blog/",
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
