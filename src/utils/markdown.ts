import DOMPurify from 'isomorphic-dompurify';
import {marked} from 'marked';

/**
 * Convert markdown to html
 *
 */
export const convertMarkdownToHtml = (markdown: string) => {
    const htmlResult = DOMPurify.sanitize(marked.parse(markdown));
    return htmlResult
}
