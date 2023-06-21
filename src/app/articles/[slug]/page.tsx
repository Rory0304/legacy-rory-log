import { PageSeo } from "src/components/pages";
import { ArticleComment, ArticleTemplate } from "src/components/pages/Article";
import { getArticleBySlug } from "src/app/api/article/getArticle";
import { getArticleSlugs } from "src/app/api/articles/getArticleSlugs";

import "github-markdown-css/github-markdown-light.css";
import "highlight.js/styles/github.css";

// -ref: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
const dynamicParams = false;
export { dynamicParams };

export const generateStaticParams = async () => {
  const slugs = await getArticleSlugs({ preview: false });

  return slugs;
};

const Article = async ({ params }: { params: { slug: string } }) => {
  const article = await getArticleBySlug({ slug: params.slug });

  return (
    <>
      <PageSeo
        title="Articles | rory dev"
        description=" Mainly handle development-related knowledge and project retrospectives."
      />
      <ArticleTemplate article={article} />
      <ArticleComment />
    </>
  );
};

export default Article;
