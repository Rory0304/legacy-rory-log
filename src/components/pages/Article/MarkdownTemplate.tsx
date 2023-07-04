"use client";

import React from "react";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";

const StyledMarkdownTemplate = styled(Box)`
  padding-bottom: 4rem;
  background-color: transparent;

  &.markdown-body {
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
