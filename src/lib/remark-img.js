// remark-images.js
import { visit } from 'unist-util-visit';
import path from 'path';

/**
 * Remark plugin to rewrite manual image paths and add default class if missing.
 * Works with mdsvex and SvelteKit.
 */
export function remarkImages() {
  const defaultClass = 'mx-auto max-w-md';

  return () => (tree) => {
    visit(tree, 'image', (node) => {
      if (!node.url) return;

      const parts = node.url.split('/');
      const manualIndex = parts.indexOf('manual');

      if (manualIndex !== -1 && parts.length > manualIndex + 1) {
        const version = parts[manualIndex + 1];
        if (!version) return;

        const filename = path.basename(node.url);
        node.url = `/images/manual/${version}/${filename}`;
      }

      // Ensure hProperties exist
      node.data ||= {};
      node.data.hProperties ||= {};

      // Add default class if missing
      if (!node.data.hProperties.className) {
        node.data.hProperties.className = defaultClass;
      }
    });
  };
}
