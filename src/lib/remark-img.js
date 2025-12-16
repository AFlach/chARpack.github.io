import { visit } from 'unist-util-visit';

/**
 * Remark plugin to handle images in Markdown:
 * - Rewrite `/manual/...` paths with current version
 * - Parse alt-text attributes like {class="mx-auto" width="600"}
 * - Apply default class if missing
 * @param {string} [currentVersion] - optional version string for manual images
 */
export function remarkImages(currentVersion) {
  const version = typeof currentVersion === 'string' ? currentVersion.split('/')[0] : null;
  const defaultClass = 'mx-auto max-w-md';

  // Parse alt-text attributes like {class="mx-auto" width="600"}
  function parseAltAttributes(alt) {
    const attrs = {};
    const match = alt.match(/\{([^}]+)\}/);
    if (match) {
      match[1].split(/\s+/).forEach((pair) => {
        const [key, val] = pair.split('=');
        if (key) {
          attrs[key] = val ? val.replace(/^"|"$/g, '') : true;
        }
      });
      // Remove the {...} from alt text
      alt = alt.replace(/\{[^}]+\}/, '').trim();
    }
    return { alt, attrs };
  }

  return () => (tree) => {
    // --- Markdown images ---
    visit(tree, 'image', (node) => {
      if (!node.url) return;

      // Only rewrite manual/ paths if version is provided
      if (version && node.url.startsWith('manual/')) {
        const filename = node.url.replace(/^manual\//, '');
        node.url = `/images/manual/${version}/${filename}`;
      }

      // Parse alt text for attributes
      const parsed = parseAltAttributes(node.alt || '');
      node.alt = parsed.alt;
      const attrs = parsed.attrs;

      // Apply default class if missing
      if (!attrs.class) {
        attrs.class = defaultClass;
      }

      // Attach attributes for mdsvex → Svelte
      node.data = node.data || {};
      node.data.hProperties = {
        ...node.data.hProperties,
        ...attrs
      };
    });

    // --- Inline HTML <img> ---
    visit(tree, 'html', (node) => {
      node.value = node.value.replace(
        /<img\s+([^>]*?)src=["']manual\/([^"']+)["']([^>]*?)>/gi,
        (match, before, file, after) => {
          // If no version, leave image path unchanged
          const imgSrc = version ? `/images/manual/${version}/${file}` : `manual/${file}`;

          // Extract alt-text attributes from alt=""
          const altMatch = /alt=["']([^"']+)["']/.exec(before + after);
          let altText = altMatch ? altMatch[1] : '';
          const parsed = parseAltAttributes(altText);
          altText = parsed.alt;

          // Build class attribute
          const hasClass = /class\s*=/.test(before + after);
          const classAttr = hasClass
            ? ''
            : ` class="${parsed.attrs.class || defaultClass}"`;

          // Rebuild other attributes
          const rest = Object.entries(parsed.attrs)
            .filter(([k]) => k !== 'class')
            .map(([k, v]) => `${k}="${v}"`)
            .join(' ');
          const restAttr = rest ? ` ${rest}` : '';

          return `<img ${before}src="${imgSrc}"${classAttr} alt="${altText}"${restAttr}${after}>`;
        }
      );
    });
  };
}
