import DOMPurify from "isomorphic-dompurify";
import { Marked, Renderer } from "@ts-stack/markdown";
import hljs from "highlight.js";

const STRIPPING_HTML_TAG_REGEX_PATTERN = /(<([^>]+)>)/gi;

/**
 * Initialize markdown renderer
 * ref: https://github.com/ts-stack/markdown
 */
class CustomRenderer extends Renderer {
  override heading(text: string, level: number, raw: string) {
    const regexp = /\s*{([^}]+)}$/;
    const execArr = regexp.exec(text);
    let id: string;

    if (execArr) {
      text = text.replace(regexp, "");
      id = execArr[1];
    } else {
      id = text
        .replace(/[^\w\sㄱ-ㅎ가-힣]/g, "")
        .replace(/\s+/g, "-")
        .toLocaleLowerCase();
    }

    return `<h${level} id="${id}">${text}</h${level}>`;
  }
}

/**
 * Initialize markdown option
 * ref: https://www.npmjs.com/package/marked-highlight
 */
Marked.setOptions({
  renderer: new CustomRenderer(),
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
