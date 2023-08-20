"use client";

import React from "react";
import Image from "next/image";
import { m } from "framer-motion";
import { fadeIn, staggerImmediate } from "src/constants/styles/animation";

import { Stack, Box, Typography } from "@mui/material";

const AboutMe: React.FC = () => {
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      component={m.article}
      initial="initial"
      animate="animate"
      alignItems={{ xs: "flex-start", sm: "center" }}
      columnGap={3}
      paddingY={10}
      variants={staggerImmediate}
    >
      <Box component={m.div} variants={fadeIn}>
        <Image
          src="/profile-avatar.svg"
          alt="profile-avatar"
          width={100}
          height={100}
        />
      </Box>
      <Box>
        <Typography
          component={m.h1}
          variant="h4"
          fontWeight={800}
          marginBottom={1}
          variants={fadeIn}
        >{`안녕하세요, 로리입니다.`}</Typography>
        <Typography
          component={m.p}
          variant="h6"
          color="GrayText"
          whiteSpace="pre-line"
          fontWeight={400}
          variants={fadeIn}
        >{`글쓰기를 즐겨하는 프론트엔드 개발자입니다. \n 동료와 사용자에게 도움을 주는 것에 개발의 동기를 얻습니다.`}</Typography>
      </Box>
    </Stack>
  );
};

export default AboutMe;
