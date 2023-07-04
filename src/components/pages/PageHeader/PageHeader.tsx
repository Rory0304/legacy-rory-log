"use client";

import React from "react";
import { Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { fadeIn, staggerImmediate } from "src/constants/styles/animation";

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <Stack
      paddingY={8}
      component={motion.header}
      initial="initial"
      animate="animate"
      variants={staggerImmediate}
    >
      {/* Introduce area */}
      <Typography
        variant="h3"
        component={motion.h1}
        fontWeight={800}
        marginBottom={2}
        variants={fadeIn}
      >
        {title}
      </Typography>
      <Typography
        variant="h6"
        component={motion.p}
        color="grayText"
        fontWeight={400}
        variants={fadeIn}
      >
        {description}
      </Typography>
    </Stack>
  );
};

export default PageHeader;
