"use client";
import React from "react";
import styled from "@emotion/styled";

const StyledArticleCommentSection = styled.section`
  margin-top: 6rem;

  // Customize utterances style
  // ref: https://utteranc.es
  .utterances {
    max-width: 100%;
  }
`;

const UTTERANCES_CONFIG = {
  src: "https://utteranc.es/client.js",
  repo: "Rory0304/rory-dev",
  issueTerm: "pathname",
  theme: "github-light",
  crossorigin: "anonymous",
  async: "true",
} as const;

const ArticleComment: React.FC = () => {
  return (
    <StyledArticleCommentSection
      className="article-comment"
      ref={(elem) => {
        if (!elem) {
          return;
        }

        // ref: https://github.com/utterance/utterances/issues/161
        const scriptElement = document.createElement("script");

        scriptElement.setAttribute("src", UTTERANCES_CONFIG.src);
        scriptElement.setAttribute("repo", UTTERANCES_CONFIG.repo);
        scriptElement.setAttribute("issue-term", UTTERANCES_CONFIG.issueTerm);
        scriptElement.setAttribute("theme", UTTERANCES_CONFIG.theme);
        scriptElement.setAttribute(
          "crossorigin",
          UTTERANCES_CONFIG.crossorigin
        );
        scriptElement.setAttribute("async", UTTERANCES_CONFIG.async);

        elem.appendChild(scriptElement);
      }}
    />
  );
};

export default ArticleComment;
