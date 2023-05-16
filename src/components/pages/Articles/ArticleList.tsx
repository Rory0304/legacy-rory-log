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
  Pagination,
  Box,
  Chip,
} from "@mui/material";

const ARTICLES_PER_PAGE = 10;

interface ArticleListProps {
  articleList: {
    slug?: string;
    title?: string;
    content?: string;
    category?: string;
    date?: string;
    thumbnail?: {
      url: string;
    };
  }[];
}

const ArticleList: React.FC<ArticleListProps> = ({ articleList }) => {
  const [page, setPage] = React.useState(1);
  const total = Math.ceil(articleList.length / ARTICLES_PER_PAGE);

  return (
    <>
      <List disablePadding sx={{ marginBottom: 4 }}>
        {articleList.map((data, index) =>
          data.slug ? (
            <Link href={data.slug} key={`article-${index}`}>
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
                        textDecoration: "underline",
                        fontWeight: 600,
                      },
                    },
                  }}
                >
                  <CardContent sx={{ padding: 0, marginRight: 4 }}>
                    <Chip
                      label={data.category}
                      size="small"
                      sx={{ borderRadius: 4, marginBottom: 2 }}
                    />
                    <Typography
                      component="p"
                      variant="h5"
                      marginBottom={1}
                      fontWeight={400}
                    >
                      {data.title}
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
                      {data.content}
                    </Typography>
                    <Typography
                      component="span"
                      variant="caption"
                      color="GrayText"
                    >
                      {data.date
                        ? new Date(data.date).toLocaleDateString()
                        : null}
                    </Typography>
                  </CardContent>
                  {data.thumbnail?.url ? (
                    <Image
                      src={data.thumbnail.url}
                      alt=""
                      width={150}
                      height={150}
                    />
                  ) : null}
                </Card>
              </ListItem>
            </Link>
          ) : null
        )}
      </List>

      <Box>
        <Pagination
          shape="rounded"
          count={total}
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      </Box>
    </>
  );
};

export default ArticleList;
