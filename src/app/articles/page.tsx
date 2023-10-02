import React from "react";
import { Metadata } from "next";
import Container from "src/components/blocks/Container/Container";
import { PageHeader, ArticlesLayout } from "src/components/pages";

import { getArticles } from "src/app/api/articles/getArticles";

export const metadata: Metadata = {
  title: "Article | rory log",
  description: "개발 관련 지식, 프로젝트 회고 관련 글을 작성합니다.",
  alternates: {
    canonical: "https://rory-log.vercel.app/articles",
  },
};

const Articles = async () => {
  const articles = await getArticles({ preview: false });

  const getTabList = () => {
    const categoryMap: { [key: string]: number } = {};

    articles.forEach((article) => {
      const category = article.category;
      if (typeof category === "string") {
        categoryMap[category] = (categoryMap[category] ?? 0) + 1;
      }
    });

    return categoryMap;
  };

  const tabList = getTabList();

  return (
    <Container>
      <PageHeader
        title={"Articles"}
        description="개발 관련 지식, 프로젝트 회고 관련 글을 작성합니다."
      />
      <ArticlesLayout articleList={articles} tabList={tabList} />
    </Container>
  );
};

export default Articles;
