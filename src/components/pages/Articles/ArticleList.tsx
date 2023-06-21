"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

import styled from "@emotion/styled";

import {
  Typography,
  Card,
  CardContent,
  List,
  ListItem,
  Pagination,
  Box,
  Chip,
  Tab,
} from "@mui/material";

import ArticleTabs from "./ArticleTabs";
import { ArticleType } from "src/app/api/articles/getArticles";
import { generateSlugWithoutSlash } from "src/app/api/articles/getArticleSlugs";

//
//
//

const ARTICLES_PER_PAGE = 10;

interface ArticleListProps {
  articleList: ArticleType[];
  tabList: { [key: string]: number };
}

const ArticleList: React.FC<ArticleListProps> = ({ articleList, tabList }) => {
  const [page, setPage] = React.useState(1);
  const [selectedTab, setSelectedTab] = React.useState("All");
  const [searchedArticleList, setSearchedArticleList] =
    React.useState<ArticleType[]>(articleList);

  const total = Math.ceil(searchedArticleList.length / ARTICLES_PER_PAGE);

  React.useEffect(() => {
    // initialize page number when category is changed
    setPage(1);

    // filter article list by category
    if (selectedTab === "All") {
      setSearchedArticleList(articleList);
    } else {
      const filteredArticleList = articleList.filter(
        (article) => article.category === selectedTab
      );
      setSearchedArticleList(filteredArticleList);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTab]);

  return (
    <Box paddingY={6}>
      <ArticleTabs
        tabs={tabList}
        tab={selectedTab}
        total={articleList.length}
        onChange={setSelectedTab}
      />
      <List disablePadding sx={{ marginBottom: 4 }}>
        {searchedArticleList.map((article, index) => {
          const localizedDate = article.date
            ? new Date(article.date).toLocaleDateString()
            : "";

          return article.slug ? (
            <Link
              href={`/articles/${generateSlugWithoutSlash(article.slug)}`}
              key={`article-${index}`}
            >
              <ListItem disablePadding divider>
                <Card
                  sx={{
                    display: "flex",
                    flexGrow: 1,
                    justifyContent: "space-between",
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
                  <CardContent sx={{ padding: 0, marginRight: 4 }}>
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
                      {article.content}
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
                    <Image
                      src={article.thumbnail.url}
                      alt=""
                      width={150}
                      height={150}
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  ) : null}
                </Card>
              </ListItem>
            </Link>
          ) : null;
        })}
      </List>

      <Box>
        <Pagination
          shape="rounded"
          count={total}
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      </Box>
    </Box>
  );
};

export default ArticleList;
