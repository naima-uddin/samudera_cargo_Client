const fs = require('fs');
const path = require('path');

const SITE_URL = (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://samuderathai.com').replace(/\/$/, '');
const APP_DIR = path.join(process.cwd(), 'app');
const PUBLIC_DIR = path.join(process.cwd(), 'public');
const PUBLIC_SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

const EXCLUDE_ROUTE_PREFIXES = [
  '/auth',
  '/bookings',
  '/profile',
  '/my-shipping',
  '/manual-shipping',
  '/invoice',
];

const EXCLUDE_ROUTES = new Set([
  '/404',
  '/_not-found',
]);

const HIGH_PRIORITY_ROUTES = new Set([
  '/',
  '/service',
  '/industries',
  '/contact',
  '/tracking-number',
]);

const PAGE_FILE_NAMES = new Set(['page.js', 'page.jsx', 'page.tsx', 'page.mjs']);

function toPosix(p) {
  return p.replace(/\\/g, '/');
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      files.push(...walk(fullPath));
      continue;
    }

    if (entry.isFile()) {
      files.push(fullPath);
    }
  }

  return files;
}

function fileToRoute(filePath) {
  const relativePath = toPosix(path.relative(APP_DIR, filePath));
  const fileName = path.basename(relativePath);

  if (!PAGE_FILE_NAMES.has(fileName)) {
    return null;
  }

  const routePath = toPosix(path.dirname(relativePath));

  if (routePath === '.' || routePath === '') {
    return '/';
  }

  const segments = routePath.split('/').filter(Boolean);
  const route = `/${segments.join('/')}`;

  return route.replace(/\/+/g, '/');
}

function normalizeRoute(route) {
  if (!route) return null;
  if (route !== '/' && route.endsWith('/')) return route.slice(0, -1);
  return route;
}

function routeToUrl(route) {
  if (route === '/') {
    return `${SITE_URL}/`;
  }

  return `${SITE_URL}${route}/`;
}

function shouldExcludeRoute(route) {
  const normalizedRoute = normalizeRoute(route);
  if (!normalizedRoute) return true;
  if (EXCLUDE_ROUTES.has(normalizedRoute)) return true;

  const lowerRoute = normalizedRoute.toLowerCase();
  return EXCLUDE_ROUTE_PREFIXES.some((prefix) => lowerRoute === prefix || lowerRoute.startsWith(`${prefix}/`));
}

function priorityForRoute(route) {
  return HIGH_PRIORITY_ROUTES.has(route) ? '1.0' : '0.7';
}

function changeFreqForRoute(route) {
  return HIGH_PRIORITY_ROUTES.has(route) ? 'daily' : 'weekly';
}

function buildSitemapXml(routes) {
  const lastmod = new Date().toISOString();
  const urls = routes
    .map((route) => {
      const loc = routeToUrl(route);
      const changefreq = changeFreqForRoute(route);
      const priority = priorityForRoute(route);

      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    '</urlset>',
    '',
  ].join('\n');
}

function removePartitionedSitemaps(dirPath) {
  if (!fs.existsSync(dirPath)) {
    return;
  }

  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    if (!entry.isFile()) {
      continue;
    }

    if (/^sitemap-\d+\.xml$/i.test(entry.name)) {
      fs.unlinkSync(path.join(dirPath, entry.name));
    }
  }
}

function main() {
  if (!fs.existsSync(APP_DIR)) {
    throw new Error('Cannot generate sitemap: app directory does not exist.');
  }

  const allFiles = walk(APP_DIR);
  const pageFiles = allFiles.filter((f) => PAGE_FILE_NAMES.has(path.basename(f)));

  const routes = Array.from(
    new Set(
      pageFiles
        .map(fileToRoute)
        .map(normalizeRoute)
        .filter(Boolean)
        .filter((route) => !shouldExcludeRoute(route))
    )
  ).sort();

  const xml = buildSitemapXml(routes);
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  fs.writeFileSync(PUBLIC_SITEMAP_PATH, xml, 'utf8');

  removePartitionedSitemaps(PUBLIC_DIR);

  console.log(`Generated single sitemap with ${routes.length} URLs at ${PUBLIC_SITEMAP_PATH}`);
}

main();
