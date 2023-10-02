"use client";

import React from "react";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

interface TocListProps {
  headings: { id: string; text: string }[];
}

const TocList: React.FC<TocListProps> = ({ headings }) => {
  return (
    <Box
      position="sticky"
      display={{ xs: "none", lg: "block" }}
      top={100}
      right={0}
      component="aside"
      maxHeight={680}
      height={"fit-content"}
      marginTop={5}
      overflow="scroll"
    >
      <Box
        component="header"
        paddingY={2}
        paddingX={2}
        sx={{
          borderBottom: "1px solid #eaeaea",
        }}
      >
        <Typography
          component="h2"
          variant="body1"
          color="GrayText"
          fontWeight={800}
        >
          목차
        </Typography>
      </Box>
      <Box component="ul" padding={2}>
        {headings.map((item) => (
          <Typography
            key={`#${item}`}
            component="li"
            color="GrayText"
            variant="body2"
            marginBottom={1.5}
            sx={{
              "&:hover": {
                color: "coral",
              },
            }}
          >
            <Link href={`#${item.id}`}>{item.text}</Link>
          </Typography>
        ))}
      </Box>
    </Box>
  );
};

export default TocList;
