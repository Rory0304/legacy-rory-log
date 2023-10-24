import DOMPurify from "isomorphic-dompurify";
import { Marked } from "@ts-stack/markdown";
import hljs from "highlight.js";

const STRIPPING_HTML_TAG_REGEX_PATTERN = /(<([^>]+)>)/gi;

/**
 * Initialize markdown option
 * ref: https://www.npmjs.com/package/marked-highlight
 */
Marked.setOptions({
  langPrefix: "hljs language-",
  highlight: (code, lang) => {
    const language = lang || "plaintext";
    return hljs.highlight(code, { language }).value;
  },
});

export const convertMarkdownToHtml = (markdown: string) => {
  const htmlResult = DOMPurify.sanitize(Marked.parse(markdown));
  return htmlResult;
};

export const stripHtmlTag = (htmlString: string) => {
  const textContent = htmlString.replace(STRIPPING_HTML_TAG_REGEX_PATTERN, "");
  return textContent;
};

export const filterHeadings = (heading: number, htmlContent: string) => {
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
