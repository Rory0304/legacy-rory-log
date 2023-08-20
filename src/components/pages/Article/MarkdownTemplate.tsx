"use client";

import React from "react";
import styled from "@mui/material/styles/styled";
import Box from "@mui/material/Box";

const StyledMarkdownTemplate = styled(Box)(({ theme }) => ({
  paddingBottom: "4rem",
  backgroundColor: "transparent",

  // Customize github stylesheet
  "&.markdown-body": {
    lineHeight: "2rem !important",

    h2: {
      scrollMarginTop: "calc(var(--sticky-header-height) + 10px)",
    },

    img: {
      display: "block",
      margin: "0 auto",
      maxWidth: "100%",
    },

    "menu, ol, ul": {
      listStyle: "revert",
    },

    [theme.breakpoints.down("md")]: {
      lineHeight: "1.75rem !important",
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
