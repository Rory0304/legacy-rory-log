import { ArticleComment, ArticleLayout } from "src/components/pages/Article";
import { getArticleBySlug } from "src/app/api/article/getArticle";
import { getArticleSlugs } from "src/app/api/articles/getArticleSlugs";
import { filterHeadings } from "src/utils/markdown";

import "src/styles/github-markdown-dark.css";
import "src/styles/github-markdown-light.css";
import "highlight.js/styles/atom-one-dark.css";

const dynamicParams = true;
export { dynamicParams };

export const generateStaticParams = async () => {
  const slugs = await getArticleSlugs({ preview: false });

  return slugs;
};

const Article = async ({ params }: { params: { slug: string } }) => {
  const article = await getArticleBySlug({ slug: params.slug, preview: true });
  const headings = filterHeadings(2, article?.content ?? "");

  return (
    <>
      <ArticleLayout article={article} headings={headings} />
      <ArticleComment />
    </>
  );
};

export default Article;
