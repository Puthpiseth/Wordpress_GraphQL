// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-templates-blog-post-archive-js": () => import("./../../../src/templates/blog-post-archive.js" /* webpackChunkName: "component---src-templates-blog-post-archive-js" */),
  "component---src-templates-blog-post-js": () => import("./../../../src/templates/blog-post.js" /* webpackChunkName: "component---src-templates-blog-post-js" */),
  "component---src-templates-category-js": () => import("./../../../src/templates/category.js" /* webpackChunkName: "component---src-templates-category-js" */),
  "component---src-templates-page-js": () => import("./../../../src/templates/page.js" /* webpackChunkName: "component---src-templates-page-js" */),
  "component---src-templates-tag-js": () => import("./../../../src/templates/tag.js" /* webpackChunkName: "component---src-templates-tag-js" */)
}

