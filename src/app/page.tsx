import React from "react";
import { PageSeo, ArticleList } from "src/components/pages";

import { getArticles } from "src/app/api/articles/getArticles";

const Articles = async () => {
  const articles = await getArticles({ preview: false });

  const getTabList = () => {
    const categorySet = new Set<string>([]);
    articles.forEach((article) => {
      if (typeof article.category === "string") {
        categorySet.add(article.category);
      }
    });
    return [...categorySet];
  };

  const tabList = getTabList();

  return (
    <>
      <PageSeo
        title="Articles | rory dev"
        description=" Mainly handle development-related knowledge and project retrospectives."
      />
      <ArticleList articleList={articles} tabList={tabList} />
    </>
  );
};

export default Articles;
