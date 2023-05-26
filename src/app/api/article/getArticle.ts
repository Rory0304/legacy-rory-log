"server-only";

import { convertMarkdownToHtml } from "src/utils/markdown";
import client from "src/graphql/client";
import { GET_ARTICLE } from "src/graphql/query";
import {
  GetArticleQuery,
  GetArticleDocument,
  GetArticleQueryVariables,
  Article,
} from "src/graphql/generated";
import { getFetchPolicy } from "src/utils/getFetchPolicy";

export type ArticleType = Pick<
  Article,
  "title" | "category" | "content" | "date" | "slug" | "thumbnail" | "sys"
>;

interface GetArticleBySlugProps {
  slug: string;
  preview?: boolean;
}

export const getArticleBySlug = async ({
  slug,
  preview = false,
}: GetArticleBySlugProps): Promise<ArticleType> => {
  const { data } = await client.query<
    GetArticleQuery,
    GetArticleQueryVariables
  >({
    query: GetArticleDocument,
    variables: {
      slug: slug,
    },
    fetchPolicy: getFetchPolicy(preview),
  });

  const article = data.articleCollection?.items[0];
  const markdownContent = article?.content;
  const htmlContent = convertMarkdownToHtml(markdownContent ?? "");

  return {
    ...article,
    content: htmlContent,
  } as ArticleType;
};
