"use client";

import React from "react";
import { Box, Stack, CardContent, Card, Typography } from "@mui/material";
import Link from "next/link";
import { ArticleType } from "src/app/api/articles/getArticles";
import Image from "next/image";
import styled from "@emotion/styled";

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
      <Typography component="h1" variant="h4" fontWeight={700} marginBottom={3}>
        추천 아티클
      </Typography>
      <Stack
        component="ul"
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
          columnGap: 4,
          rowGap: 4,
        }}
      >
        {featuredArticleList.slice(0, 6).map((article, index) => (
          <li key={`featured-article-${index}`}>
            <FeaturedArticleCard {...article} />
          </li>
        ))}
      </Stack>
    </Box>
  );
};
export default FeaturedArticleList;
