"use client";

import React from "react";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

const StyledMarkdownTemplate = styled(Box)(({ theme }) => ({
  paddingBottom: "4rem",
  backgroundColor: "transparent",

  // Customize github stylesheet
  "&.markdown-body": {
    h2: {
      scrollMarginTop: "calc(var(--sticky-header-height) + 10px)",
    },

    img: {
      display: "block",
      margin: "0 auto",
      maxHeight: "350px",
      maxWidth: "100%",
      borderRadius: "6px",
    },

    "menu, ol, ul": {
      listStyle: "revert",
    },
  },
}));

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
