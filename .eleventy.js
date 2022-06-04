// filters
const console = require('./src/_11ty/filters/console.js');
const { dateReadable, dateGetYear } = require('./src/_11ty/filters/date.js');

// plugins
const toc = require('eleventy-plugin-nesting-toc'); // https://github.com/JordanShurmer/eleventy-plugin-nesting-toc
const syntaxHighlighting = require('@11ty/eleventy-plugin-syntaxhighlight');
const rss = require('@11ty/eleventy-plugin-rss');
const assetsForPermalink = require('eleventy-plugin-page-assets');
const svgContents = require("eleventy-plugin-svg-contents"); // https://github.com/brob/eleventy-plugin-svg-contents
const { markdownConfigured } = require('./src/_11ty/plugins/markdown-it.js');

// collections
const orderedTimelineEvents = require('./src/_11ty/collections/orderedTimelineEvents.js');
const orderedCaseStudies = require('./src/_11ty/collections/orderedCaseStudies.js');

module.exports = function (eleventyConfig) {
  const markdownIt = require('markdown-it');

  // configure markdown
  eleventyConfig.setLibrary('md', markdownConfigured(markdownIt));

  // filters
  eleventyConfig.addFilter('console', console);
  eleventyConfig.addFilter('dateReadable', dateReadable);
  eleventyConfig.addFilter('dateGetYear', dateGetYear);
  eleventyConfig.addFilter('markdown', value => markdownConfigured(markdownIt).render(value));

  // plugins
  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addPlugin(toc, {tags: ['h2', 'h3', 'h4', 'h5', 'h6']});
  eleventyConfig.addPlugin(syntaxHighlighting);
  eleventyConfig.addPlugin(rss);
  eleventyConfig.addPlugin(assetsForPermalink, {
    mode: 'directory',
    hashAssets: false,
    postsMatching: 'src/content/posts/*/*.md'
  });

  // Collections
  eleventyConfig.addCollection('orderedTimelineEvents', orderedTimelineEvents);
  eleventyConfig.addCollection('orderedCaseStudies', orderedCaseStudies);

  // copy these static assets
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/sw.js');

  eleventyConfig.setBrowserSyncConfig({
    files: './dist/css/**/*.css'
  });

  return {
    dir: {
      input: "src",
      output: "dist",
      layouts: "_layouts"
    },
  };
};