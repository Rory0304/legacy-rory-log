'server-only'

import client from 'src/graphql/client';
import { GET_LOGS } from 'src/graphql/query';

import { convertMarkdownToHtml } from 'src/utils/markdown';

interface GetLogsProps {
    preview: boolean;
};

export type LogType = {
 sys:  {
    id: string;
  };
  title: string;
  content: string;
  youtubeUrl: string;
  media: {
    url: string;
  }
  date: string;
  tag: string[];
}

export const getLogs = async ({preview = false}: GetLogsProps): Promise<any | null> => {
    const { data } = await client.query({
        query: GET_LOGS,
        fetchPolicy: preview ? 'network-only' : 'cache-first',
    });

    const logs = data.logCollection.items.map((log: LogType) => {
        const markdownContent = log.content;
        const htmlContent = convertMarkdownToHtml(markdownContent);
        return {
            ...log,
            content: htmlContent
        }
    })

    return logs;
};
