"use client";
import React from "react";
import styled from "@emotion/styled";
import useColorMode from "src/hooks/useColorMode";

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
  repo: "Rory0304/rory0304.github.io",
  issueTerm: "pathname",
  crossorigin: "anonymous",
  async: "true",
} as const;

const ArticleComment: React.FC = () => {
  const { isDarkMode } = useColorMode();

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
        scriptElement.setAttribute(
          "theme",
          isDarkMode ? "github-dark" : "github-light"
        );
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
