"use client";

import React from "react";
import Image from "next/image";

import { Stack, Box, Typography } from "@mui/material";

const AboutMe: React.FC = () => {
  return (
    <Stack
      direction="row"
      component="article"
      alignItems="center"
      columnGap={3}
      paddingY={10}
    >
      <Box>
        <Image
          src="/profile-avatar.svg"
          alt="profile-avatar"
          width={100}
          height={100}
        />
      </Box>
      <Box>
        <Typography
          component="h1"
          variant="h4"
          fontWeight={800}
          marginBottom={1}
        >{`안녕하세요, 로리입니다. `}</Typography>
        <Typography
          component="p"
          variant="h6"
          color="GrayText"
          whiteSpace="pre-line"
          fontWeight={400}
        >{`글쓰기를 즐겨하는 프론트엔드 개발자입니다. \n 최근에는 인디 웹 개발자로 활동하며, 다양한 프로젝트를 진행해보고 있습니다.`}</Typography>
      </Box>
    </Stack>
  );
};

export default AboutMe;
