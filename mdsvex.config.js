import { defineMDSveXConfig as defineConfig } from "mdsvex";
//import { remarkXref } from './src/lib/remark-xref.js';
//import { remarkImages } from './src/lib/remark-img.js';
//import { remarkExternalLinks } from './src/lib/remark-extref.js';
import remarkAttrsIgnoreCode from './src/lib/remark-attrs-ignore-code.js'


const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [
    remarkAttrsIgnoreCode
  ],
  rehypePlugins: [],
});

export default config;
