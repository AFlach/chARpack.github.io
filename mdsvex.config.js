import { defineMDSveXConfig as defineConfig } from "mdsvex";
import remarkCustom from './src/lib/remark-custom.js';


const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [remarkCustom],
  rehypePlugins: [],
});

export default config;
