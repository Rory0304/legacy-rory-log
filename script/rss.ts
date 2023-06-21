import { Feed } from "feed";
import { writeFileSync } from "fs";

import { getArticles } from "../src/app/api/articles/getArticles";
import { SITE_CONFIG } from "src/constants/config";

const author = {
  name: SITE_CONFIG.author.name,
  email: SITE_CONFIG.author.contacts.email,
  link: SITE_CONFIG.url,
} as const;

const generateRSSFeed = async () => {
  const articles = await getArticles({ preview: false });
  const feed = new Feed({
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    id: SITE_CONFIG.url,
    link: SITE_CONFIG.url,
    language: "ko",
    favicon: `${SITE_CONFIG.url}/favicon.ico`,
    copyright: `© ${SITE_CONFIG.since} ${SITE_CONFIG.author.name}. All rights reserved.`,
    generator: "Next.js",
    author: author,
  });

  articles.map((article) => {
    feed.addItem({
      title: article.title as string,
      id: article.slug as string,
      link: `${SITE_CONFIG.url}/articles/${article.slug}`,
      description: article.content?.slice(0, 100) as string,
      content: article.content as string,
      author: [author],
      date: new Date(article.date),
    });
  });

  // RSS 2.0
  writeFileSync("./public/rss.xml", feed.rss2(), "utf-8");
};

(async () => {
  try {
    console.log(`Generating RSS Feed`);
    await generateRSSFeed();
    console.log(`RSS Feed generated successfully`);
    process.exit(0);
  } catch (error) {
    console.error("Error generating RSS feed:", error);
    process.exit(1);
  }
})();
