import { gql } from "@apollo/client";
import { FRAGMENT_ARTICLE } from "../fragment";


export const GET_ARTICLE = gql`
    query GetArticle($slug: String!) {
        articleCollection(where: { slug: $slug }) {
            items {
            ...ArticleFields
            }
        }
    }

    ${FRAGMENT_ARTICLE}
`;

