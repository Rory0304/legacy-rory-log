import { PageSeo } from "src/components/pages";
import { ArticleComment, ArticleLayout } from "src/components/pages/Article";
import { getArticleBySlug } from "src/app/api/article/getArticle";
import { getArticleSlugs } from "src/app/api/articles/getArticleSlugs";
import {
  stripHtmlTag,
  filterHeadings,
} from "src/utils/markdown";

import "src/styles/github-markdown-dark.css";
import "src/styles/github-markdown-light.css";
import "highlight.js/styles/atom-one-dark.css";

// -ref: https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#dynamicparams
const dynamicParams = false;
export { dynamicParams };

export const generateStaticParams = async () => {
  const slugs = await getArticleSlugs({ preview: false });

  return slugs;
};

const Article = async ({ params }: { params: { slug: string } }) => {
  const article = await getArticleBySlug({ slug: params.slug });
  const headings = filterHeadings(2, article?.content ?? "");

  return (
    <>
      <PageSeo
        title={`${article.title ?? ""} | rory-log`}
        description={stripHtmlTag(article.content ?? "").substring(0, 300)}
        imageUrl={article.thumbnail?.url as string}
      />
      <ArticleLayout article={article} headings={headings} />
      <ArticleComment />
    </>
  );
};

export default Article;
