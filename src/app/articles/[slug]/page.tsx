import { PageSeo, PageHeader, ArticleList } from "src/components/pages";
import ArticleTemplate from "src/components/pages/Article/ArticleTemplate";
import NextScript from "next/script";
import { getArticleBySlug } from "src/app/api/article/getArticle";
import { useRouter } from "next/navigation";
import { getArticles } from "src/app/api/articles/getArticles";
import { getParsedSearchQuery } from "src/utils/search";

import "github-markdown-css/github-markdown-light.css";
import "highlight.js/styles/github.css";

const Article = async ({ params }: any) => {
  const parsedSlug = getParsedSearchQuery(params.slug) ?? "";
  const article = await getArticleBySlug(`/articles/${parsedSlug}`);

  return (
    <>
      <PageSeo
        title="Articles | rory dev"
        description=" Mainly handle development-related knowledge and project retrospectives."
      />
      <ArticleTemplate article={article} />
    </>
  );
};

export default Article;
