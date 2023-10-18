"use client";

import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

import "highlight.js/styles/atom-one-dark.css";

const StyledMarkdownTemplate = styled(Box)`
  padding-bottom: 4rem;
  background-color: transparent;

  // Customize github stylesheet
  &.markdown-body {
    h2 {
      scroll-margin-top: calc(var(--sticky-header-height) + 10px);
    }

    img {
      display: block;
      margin: 0 auto;
      max-height: 350px;
      max-width: 100%;
      border-radius: 6px;
    }

    menu,
    ol,
    ul {
      list-style: revert;
    }
  }
`;

interface MarkdownTemplateProps {
  content: string;
}

const MarkdownTemplate: React.FC<MarkdownTemplateProps> = ({ content }) => {
  return (
    <StyledMarkdownTemplate
      className="markdown-body"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};
export default MarkdownTemplate;
