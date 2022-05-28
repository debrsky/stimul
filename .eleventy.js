const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("src/style.css");
  eleventyConfig.addWatchTarget("src/style.css");

  eleventyConfig.addPassthroughCopy("src/**/*.{jpg,png}");
  eleventyConfig.addPassthroughCopy("src/files");

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: "_layouts",
      includes: "_includes"
    }
  };
};
