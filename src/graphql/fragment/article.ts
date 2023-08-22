import { gql } from "@apollo/client";

export const FRAGMENT_ARTICLE = gql`
  fragment ArticleFields on Article {
    sys {
      id
    }
    title
    slug
    content
    category
    date
    thumbnail {
      url(transform: { width: 1426, height: 500, format: WEBP, quality: 100 })
    }
  }
`;
