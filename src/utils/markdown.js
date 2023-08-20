import DOMPurify from "isomorphic-dompurify";
import { marked } from "marked";
import { markedHighlight } from "marked-highlight";
import hljs from "highlight.js";

const STRIPPING_HTML_TAG_REGEX_PATTERN = /(<([^>]+)>)/gi;

/**
 * Initialize markdown option
 * ref: https://www.npmjs.com/package/marked-highlight
 */
marked.use(
  markedHighlight({
    langPrefix: "hljs language-",
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : "plaintext";
      return hljs.highlight(code, { language }).value;
    },
  })
);

/**
 * Convert markdown to html
 * @param {string} markdown
 */
export const convertMarkdownToHtml = (markdown) => {
  const htmlResult = DOMPurify.sanitize(marked.parse(markdown));
  return htmlResult;
};

/**
 * Strip html tag from html string
 * @param {string} htmlString
 */
export const stripHtmlTag = (htmlString) => {
  const textContent = htmlString.replace(STRIPPING_HTML_TAG_REGEX_PATTERN, "");
  return textContent;
};

/**
 * Strip html tag from html string
 * @param {number} heading
 * @param {string} htmlContent
 */
export const filterHeadings = (heading, htmlContent) => {
  const idPattern = new RegExp(
    `<h([${heading}])[^>]*id=['"]([^'"]+)['"][^>]*>(.*?)<\/h${heading}>`,
    "g"
  );
  const matches = htmlContent.matchAll(idPattern);

  const headings = Array.from(matches, (match) => ({
    text: stripHtmlTag(match[3]),
    id: match[2],
  }));

  return headings;
};
