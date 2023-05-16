"use client";

import React from "react";
import { Stack, Typography } from "@mui/material";

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <Stack paddingY={6} component="header">
      <Typography variant="h3" component="h1" fontWeight={800} marginBottom={2}>
        {title}
      </Typography>
      <Typography variant="body1" color="grayText">
        {description}
      </Typography>
    </Stack>
  );
};

export default PageHeader;
