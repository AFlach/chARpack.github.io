import { visit } from 'unist-util-visit';

/**
 * Add target="_blank" and rel="noreferrer" for external links
 */
export function remarkExternalLinks() {
  return () => (tree) => {
    visit(tree, 'link', (node) => {
      if (!node.url) return;

      if (/^(https?:)?\/\//.test(node.url)) {
        node.data = node.data || {};
        node.data.hProperties = node.data.hProperties || {};
        node.data.hProperties.target = '_blank';
        node.data.hProperties.rel = 'noreferrer';
      }
    });
  };
}