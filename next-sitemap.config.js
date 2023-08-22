/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_RORY_DEV || "https://rory-log.vercel.app/",
  generateRobotsTxt: true,
  exclude: ["/404"],
  sitemapBaseFileName: "sitemap/sitemap",
};
