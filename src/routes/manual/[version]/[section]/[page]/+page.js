import { getPageFromMDPath, loadFullTreeVersionManual } from '$lib/loadmd';
import { error } from '@sveltejs/kit';

export async function load({ params, url }) {
  const { version, section, page } = params;

  // Load the full structure of the manual for this version
  const sections = loadFullTreeVersionManual(version);

  // Grab all MD files dynamically
  const modules = import.meta.glob('/src/routes/manual/**/**/*.md');

  // Find the module key matching this page
  const mdKey = Object.keys(modules).find((key) => {
    // Example key: /src/routes/manual/master/00-getting_started/00-introduction.md
    return key.includes(`/manual/${version}/${section}/${page}.md`);
  });

  if (!mdKey) {
    throw error(404, `Page not found: ${version}/${section}/${page}`);
  }

  // Load the module
  const mod = await modules[mdKey]();

  // Get the page info from your tree (for metadata, title, etc.)
  const thisSection = sections.find((sec) => sec.name === section);
  if (!thisSection) throw error(404, `Section not found: ${section}`);

  const pageContent = thisSection.pages.find((p) => p.pageRoute === page);
  if (!pageContent) throw error(404, `Page content not found: ${page}`);

  // // Flatten all pages in order for prev/next navigation
  const pageList = sections.flatMap((s) => s.pages);
  
  // const index = pageList.findIndex((p) => p.absRoute + '/' === url.pathname);
  // Normalize URLs to avoid trailing slash mismatches
  const normalizedPath = url.pathname.replace(/\/$/, '');
  const index = pageList.findIndex(
    (p) => p.absRoute.replace(/\/$/, '') === normalizedPath
  );

  const prev = pageList[index - 1];
  const next = pageList[index + 1];

  return {
    content: mod.default,      // Markdown content (or compiled Svelte component if using mdsvex)
    metadata: mod.metadata,    // Optional metadata from the MD file
    version,
    section,
    page,
    thisPage: getPageFromMDPath(mdKey),
    sections,
    pageContent,
    prev,
    next
  };
}
