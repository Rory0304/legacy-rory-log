import DOMPurify from 'isomorphic-dompurify';
import {marked} from 'marked';
import {markedHighlight} from "marked-highlight";
import hljs from 'highlight.js';

/**
 * ref: https://www.npmjs.com/package/marked-highlight
 */
marked.use(markedHighlight({
  langPrefix: 'hljs language-',
  highlight(code, lang) {
    const language = hljs.getLanguage(lang) ? lang : 'plaintext';
    return hljs.highlight(code, { language }).value;
  }
}));

/**
 * Convert markdown to html
 */
export const convertMarkdownToHtml = (markdown) => {
    const htmlResult = DOMPurify.sanitize(marked.parse(markdown));
    return htmlResult
}
