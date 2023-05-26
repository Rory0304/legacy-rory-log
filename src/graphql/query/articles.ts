import { gql } from "@apollo/client";
import { FRAGMENT_ARTICLE } from "../fragment";


export const GET_ARTICLES = gql`
    query GetArticles {
        articleCollection {
            items {
                ...ArticleFields
            }
        }
    }

    ${FRAGMENT_ARTICLE}
`;
