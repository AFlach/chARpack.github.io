import { visit } from 'unist-util-visit';

/**
 * Remark plugin to convert xref links to proper manual URLs.
 * If currentVersion is missing, leaves links unchanged.
 * 
 * Usage: remarkXref(currentVersion)
 */
export function remarkXref(currentVersion) {
  const version = typeof currentVersion === 'string' ? currentVersion.split('/')[0] : null;

  return () => (tree) => {
    visit(tree, 'link', (node) => {
      if (!node || node.type !== 'link' || !node.url) return;

      // Only rewrite xref links
      if (node.url.startsWith('xref:')) {
        const target = node.url.slice(5); // remove 'xref:'

        // Prepend version if available
        node.url = version ? `/manual/${version}/${target}` : `/manual/${target}`;
      }
    });
  };
}