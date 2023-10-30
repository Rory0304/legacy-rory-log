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
      className="toc"
      position="sticky"
      display={{ xs: "none", lg: "block" }}
      top={100}
      right={0}
      component="aside"
      maxHeight={680}
      height={"fit-content"}
      marginTop={5}
      overflow="scroll"
      sx={{
        gridArea: "toc",
      }}
    >
      <Box
        component="ul"
        paddingX={2}
        sx={{
          borderLeft: "1px solid #eaeaea",
        }}
      >
        {headings.map((item) => (
          <Typography
            key={item.id}
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
