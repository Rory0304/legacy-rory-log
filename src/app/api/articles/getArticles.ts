'server-only'

import client from 'src/graphql/client';
import { GET_ARTICLES } from 'src/graphql/query';

interface GetArticlesProps {
    preview: boolean;
};

export const getArticles = async ({preview = false}: GetArticlesProps): Promise<any | null> => {
    const { data } = await client.query({
        query: GET_ARTICLES,
        fetchPolicy: preview ? 'network-only' : 'network-only',
    });

    return data.articleCollection.items;
};
