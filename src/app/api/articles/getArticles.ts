"server-only";

import { convertMarkdownToHtml, stripHtmlTag } from "src/utils/markdown";

import client from "src/graphql/client";

import {
  GetArticlesDocument,
  GetArticlesQuery,
  GetArticlesQueryVariables,
  Article,
} from "src/graphql/generated";

export type ArticleType = Pick<
  Article,
  "title" | "category" | "content" | "date" | "slug" | "thumbnail" | "sys"
>;

export const getArticles = async ({
  preview = false,
}): Promise<ArticleType[]> => {
  const { data } = await client.query<
    GetArticlesQuery,
    GetArticlesQueryVariables
  >({
    query: GetArticlesDocument,
    fetchPolicy: preview ? "network-only" : "cache-first",
  });

  const articles = data.articleCollection?.items.map((item: any) => {
    const markdownContent = item.content;
    const textContent = stripHtmlTag(convertMarkdownToHtml(markdownContent));

    return {
      ...item,
      content: textContent,
    };
  }) as GetArticlesQuery;

  return articles as ArticleType[];
};
