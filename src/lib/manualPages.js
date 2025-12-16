import fs from 'fs';
import path from 'path';

export function getAllManualRoutes() {
  const base = path.resolve('src/routes/manual');
  const versions = fs.readdirSync(base).filter(v => fs.statSync(path.join(base, v)).isDirectory());

  const routes = [];

  versions.forEach(version => {
    const versionPath = path.join(base, version);
    const sections = fs.readdirSync(versionPath).filter(s => fs.statSync(path.join(versionPath, s)).isDirectory());

    sections.forEach(section => {
      const sectionPath = path.join(versionPath, section);
      const pages = fs.readdirSync(sectionPath).filter(p => p.endsWith('.md'));

      pages.forEach(page => {
        const pageName = page.replace('.md', '');
        routes.push(`/manual/${version}/${section}/${pageName}`);
      });
    });
  });

  return routes;
}


export function getManualVersions() {
  const manualBase = path.resolve('src/routes/manual');
  if (!fs.existsSync(manualBase)) return [];

  return fs.readdirSync(manualBase, { withFileTypes: true })
    .filter(entry => entry.isDirectory())   // only directories
    .map(entry => entry.name);
}