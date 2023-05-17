import React from "react";
import { PageSeo, PageHeader, ArticleList } from "src/components/pages";

import { getArticles } from "src/app/api/articles/getArticles";

const Articles = async () => {
  const articles = await getArticles({ preview: false });

  return (
    <>
      <PageSeo
        title="Articles | rory dev"
        description=" Mainly handle development-related knowledge and project retrospectives."
      />
      <PageHeader
        title={"Articles."}
        description="Mainly handle development-related knowledge and project
          retrospectives."
      />
      <ArticleList articleList={articles} />
    </>
  );
};

export default Articles;
