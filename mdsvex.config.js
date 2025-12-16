import { defineMDSveXConfig as defineConfig } from "mdsvex";
import { remarkXref } from './src/lib/remark-xref.js';
import { remarkImages } from './src/lib/remark-img.js';
import { remarkExternalLinks } from './src/lib/remark-extref.js';

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
