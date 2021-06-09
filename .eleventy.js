const util = require('util');
const markdownItAnchor = require("markdown-it-anchor");
const svgContents = require("eleventy-plugin-svg-contents"); // https://github.com/brob/eleventy-plugin-svg-contents
const toc = require('eleventy-plugin-nesting-toc'); // https://github.com/JordanShurmer/eleventy-plugin-nesting-toc

module.exports = function (eleventyConfig) {
  const markdownIt = require('markdown-it');
  const headlineAnchorSettings = {
    permalink: true,
    permalinkSymbol: '#',
    permalinkClass: 'main__heading-link',
    renderPermalink: (slug, opts, state, idx) => {
      // based on fifth version in
      // https://amberwilson.co.uk/blog/are-your-anchor-links-accessible/
      const linkContent = state.tokens[idx + 1].children[0].content;
    
      // Create the openning <div> for the wrapper
      const headingWrapperTokenOpen = Object.assign(
        new state.Token('div_open', 'div', 1),
        {
          attrs: [['class', 'main__heading-wrapper']],
        }
      );
      // Create the closing </div> for the wrapper
      const headingWrapperTokenClose = Object.assign(
        new state.Token('div_close', 'div', -1),
        {
          attrs: [['class', 'main__heading-wrapper']],
        }
      );
    
      // Create the tokens for the full accessible anchor link
      // <a class="deeplink" href="#your-own-platform-is-the-nearest-you-can-get-help-to-setup">
      //   <span aria-hidden="true">
      //     ${opts.permalinkSymbol}
      //   </span>
      //   <span class="visually-hidden">
      //     Section titled Your "own" platform is the nearest you can(get help to) setup
      //   </span>
      // </a >
      const anchorTokens = [
        Object.assign(new state.Token('link_open', 'a', 1), {
          attrs: [
            ...(opts.permalinkClass ? [['class', opts.permalinkClass]] : []),
            ['href', opts.permalinkHref(slug, state)],
            ...Object.entries(opts.permalinkAttrs(slug, state)),
          ],
        }),
        Object.assign(new state.Token('span_open', 'span', 1), {
          attrs: [['aria-hidden', 'true']],
        }),
        Object.assign(new state.Token('html_block', '', 0), {
          content: opts.permalinkSymbol,
        }),
        Object.assign(new state.Token('span_close', 'span', -1), {}),
        Object.assign(new state.Token('span_open', 'span', 1), {
          attrs: [['class', 'sr-only']],
        }),
        Object.assign(new state.Token('html_block', '', 0), {
          content: `Section titled ${linkContent}`,
        }),
        Object.assign(new state.Token('span_close', 'span', -1), {}),
        new state.Token('link_close', 'a', -1),
      ];
    
      // idx is the index of the heading's first token
      // insert the wrapper opening before the heading
      state.tokens.splice(idx, 0, headingWrapperTokenOpen);
      // insert the anchor link tokens after the wrapper opening and the 3 tokens of the heading
      state.tokens.splice(idx + 3 + 1, 0, ...anchorTokens);
      // insert the wrapper closing after all these
      state.tokens.splice(
        idx + 3 + 1 + anchorTokens.length,
        0,
        headingWrapperTokenClose
      );
    }
  }
  const markdownConfigured = markdownIt({ html: true }).use(markdownItAnchor, headlineAnchorSettings);

  eleventyConfig.setLibrary('md', markdownConfigured);

  eleventyConfig.addFilter('console', function(value) {
      const str = util.inspect(value);
      return `<div style="white-space: pre-wrap;">${unescape(str)}</div>;`
  });
 
  eleventyConfig.addFilter('dateReadable', date => date.toLocaleDateString('de-de'));

  eleventyConfig.addFilter('dateGetYear', date => date.getFullYear());

  eleventyConfig.addPlugin(svgContents);
  eleventyConfig.addPlugin(toc, {tags: ['h2', 'h3', 'h4', 'h5', 'h6']});

  eleventyConfig.addPassthroughCopy('src/css');
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