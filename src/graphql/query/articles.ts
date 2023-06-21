import { gql } from "@apollo/client";
import { FRAGMENT_ARTICLE } from "../fragment";

export const GET_ARTICLES = gql`
  query GetArticles {
    articleCollection(order: date_DESC) {
      items {
        ...ArticleFields
      }
    }
  }

  ${FRAGMENT_ARTICLE}
`;

export const GET_ARTICLE_SLUGS = gql`
  query GetArticleSlugs {
    articleCollection(order: date_DESC) {
      items {
        slug
      }
    }
  }
`;
