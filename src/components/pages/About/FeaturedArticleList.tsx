"use client";

import React from "react";
import { m } from "framer-motion";
import { Box, Stack, CardContent, Card, Typography } from "@mui/material";
import Link from "next/link";
import { ArticleType } from "src/app/api/articles/getArticles";
import Image from "next/image";
import styled from "@emotion/styled";
import { fadeInSlideToLeft } from "src/constants/styles/animation";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import { fadeIn, staggerImmediate } from "src/constants/styles/animation";

interface FeaturedArticleListProps {
  featuredArticleList: ArticleType[];
}

const StyledFeaturedArticleCard = styled(Card)`
  background-color: transparent;
  border-radius: 8px;
  overflow: unset;

  &:hover {
    color: coral;

    .featured-article-card-image {
      transform: translate3d(0, -3%, 0);
      box-shadow: 0px 5px 12px 6px rgba(109, 109, 109, 0.12);
    }
  }
`;

const FeaturedArticleCard: React.FC<ArticleType> = ({
  slug,
  title,
  date,
  category,
  thumbnail,
}) => {
  const localizedDate = new Date(date).toLocaleDateString();

  return (
    <Link href={`/articles/${slug}`}>
      <StyledFeaturedArticleCard elevation={0}>
        <Box
          className="featured-article-card-image"
          position="relative"
          sx={{
            paddingTop: "67.5%",
            marginBottom: 1,
            border: "1px solid #eaeaea",
            borderRadius: 2,
            transform: "translate3d(0, 0, 0)",
            transition: "0.2s ease-in-out",
          }}
        >
          {thumbnail?.url ? (
            <Image
              fill
              src={thumbnail.url}
              alt={`${title} thumbnail`}
              style={{
                borderRadius: 8,
                objectFit: "cover",
              }}
            />
          ) : null}
        </Box>
        <CardContent sx={{ paddingY: 1, paddingX: 0 }}>
          <Typography
            component="span"
            variant="body2"
            color="GrayText"
            marginBottom={2}
          >
            {category}
          </Typography>
          <Typography
            component="h4"
            variant="h6"
            marginBottom={1}
            sx={{
              transition: "color 0.15s",
            }}
          >
            {title}
          </Typography>
          <Typography component="span" variant="caption" color="GrayText">
            <time dateTime={localizedDate} suppressHydrationWarning>
              {localizedDate}
            </time>
          </Typography>
        </CardContent>
      </StyledFeaturedArticleCard>
    </Link>
  );
};

const FeaturedArticleList: React.FC<FeaturedArticleListProps> = ({
  featuredArticleList,
}) => {
  return (
    <Box paddingY={3}>
      <Stack
        direction="row"
        marginBottom={3}
        justifyContent="space-between"
        alignItems="center"
        component={m.div}
        initial="initial"
        animate="animate"
        variants={staggerImmediate}
      >
        <Typography
          component={m.h1}
          variant="h4"
          fontWeight={700}
          variants={fadeIn}
        >
          대표 아티클
        </Typography>
        <Link href="/articles">
          <Typography
            component={m.span}
            color="GrayText"
            sx={{ opacity: 0.75, "&:hover": { opacity: 1 } }}
          >
            Read all
            <TrendingFlatIcon sx={{ verticalAlign: "top", marginLeft: 0.5 }} />
          </Typography>
        </Link>
      </Stack>

      <Stack
        component={m.ul}
        initial="initial"
        animate="visible"
        variants={{
          visible: {
            transition: { staggerChildren: 0.1, delayChildren: 0.02 },
          },
        }}
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          columnGap: 4,
          rowGap: 4,
        }}
      >
        {featuredArticleList.slice(0, 3).map((article, index) => (
          <m.li key={`featured-article-${index}`} variants={fadeInSlideToLeft}>
            <FeaturedArticleCard {...article} />
          </m.li>
        ))}
      </Stack>
    </Box>
  );
};
export default FeaturedArticleList;
