'server-only'

import {convertMarkdownToHtml} from 'src/utils/markdown';


import client from 'src/graphql/client';
import { GET_ARTICLE } from 'src/graphql/query';

interface GetArticleBySlugProps {
    slug: string;
    preview?: boolean;
}

export const getArticleBySlug = async(slug: string, preview=false) => {

    const {data} = await client.query({
        query: GET_ARTICLE,
        variables: {
            slug: slug
        },
        fetchPolicy: preview ? 'network-only' : 'cache-first'
    });

    const article = data.articleCollection.items?.[0];

    const markdownContent = article.content;
    const htmlContent = convertMarkdownToHtml(markdownContent);


    return {
        ...article,
        content: htmlContent
    }
}
