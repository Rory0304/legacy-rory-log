/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_RORY_DEV || "https://rory0304.github.io",
  generateRobotsTxt: true,
  exclude: ["/404"],
  sitemapBaseFileName: "sitemap/sitemap",
};
