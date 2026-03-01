import markdownIt from "markdown-it";
import { katex } from "@mdit/plugin-katex";

export default function (eleventyConfig) {
  // Configure markdown-it with KaTeX for compile-time LaTeX rendering
  const md = markdownIt({ html: true }).use(katex);
  eleventyConfig.setLibrary("md", md);

  // Shortcode for current year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Human-readable date filter
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  // Pass through static assets
  eleventyConfig.addPassthroughCopy("src/public");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
    },
  };
}
