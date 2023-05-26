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
            url
        }
    }
`;
