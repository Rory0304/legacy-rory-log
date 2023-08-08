"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  Chip,
  Box,
} from "@mui/material";

import { ArticleType } from "src/app/api/articles/getArticles";
import { generateSlugWithoutSlash } from "src/app/api/articles/getArticleSlugs";

//
//
//

interface ArticleListProps {
  articleList: ArticleType[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articleList }) => {
  return (
    <List
      disablePadding
      sx={{
        marginBottom: 4,
        ".MuiListItem-root:first-of-type .MuiPaper-root": {
          paddingTop: 0,
        },
      }}
    >
      {articleList.map((article, index) => {
        const localizedDate = article.date
          ? new Date(article.date).toLocaleDateString()
          : "";

        return article.slug ? (
          <ListItem disablePadding divider key={`article-${index}`}>
            <Link href={`/articles/${generateSlugWithoutSlash(article.slug)}`}>
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  flexGrow: 1,
                  justifyContent: "space-between",
                  background: "transparent",
                  boxShadow: "none",
                  paddingY: 4,
                  borderRadius: 0,
                  alignItems: "center",

                  ":hover": {
                    "p:first-of-type": {
                      color: "coral",
                    },
                  },
                }}
              >
                <CardContent sx={{ padding: 0, marginRight: { xs: 0, sm: 4 } }}>
                  <Chip
                    label={article.category}
                    size="small"
                    sx={{ borderRadius: 4, marginBottom: 2 }}
                  />
                  <Typography
                    component="p"
                    variant="h5"
                    marginBottom={1}
                    fontWeight={400}
                    sx={{
                      transition: "color 0.15s",
                    }}
                  >
                    {article.title}
                  </Typography>
                  <Typography
                    component="p"
                    variant="body1"
                    color="GrayText"
                    marginBottom={3}
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      display: "-webkit-box",
                      WebkitLineClamp: "2",
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {(article.content ?? "").substring(0, 300)}
                  </Typography>
                  <Typography
                    component="span"
                    variant="caption"
                    color="GrayText"
                  >
                    <time dateTime={localizedDate} suppressHydrationWarning>
                      {localizedDate}
                    </time>
                  </Typography>
                </CardContent>
                {article.thumbnail?.url ? (
                  <Box display={{ xs: "none", sm: "block" }}>
                    <Image
                      src={article.thumbnail.url}
                      alt=""
                      width={180}
                      height={180}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                ) : null}
              </Card>
            </Link>
          </ListItem>
        ) : null;
      })}
    </List>
  );
};

export default ArticleList;
