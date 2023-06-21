"server-only";

import client from "src/graphql/client";
import {
  GetArticleSlugsDocument,
  GetArticleSlugsQuery,
  GetArticleSlugsQueryVariables,
} from "src/graphql/generated";

import { getFetchPolicy } from "src/utils/getFetchPolicy";

export const generateSlugWithoutSlash = (slug: string | null | undefined) => {
  if (!slug) return "";

  if (slug.startsWith("/")) return slug.replace("/", "");

  return slug;
};

export const getArticleSlugs = async ({
  preview = false,
}): Promise<{ slug: string }[]> => {
  const { data } = await client.query<
    GetArticleSlugsQuery,
    GetArticleSlugsQueryVariables
  >({
    query: GetArticleSlugsDocument,
    fetchPolicy: getFetchPolicy(preview),
  });

  const articleSlugs =
    data.articleCollection?.items.map((item) => ({
      slug: generateSlugWithoutSlash(item?.slug),
    })) ?? [];

  return articleSlugs;
};
