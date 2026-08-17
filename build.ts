#!/usr/bin/env bun
// @ts-nocheck
const { minify } = await import("html-minifier-terser@7.2.0");

await Bun.write(
  "index.html",
  await minify(await Bun.file("src/index.html").text(), {
    collapseWhitespace: true,
    removeComments: true,
    minifyCSS: true,
    minifyJS: true,
  }),
);
