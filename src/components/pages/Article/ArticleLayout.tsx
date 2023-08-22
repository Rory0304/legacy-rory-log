"use client";

import React from "react";

import {
  Typography,
  Box,
  Chip,
  Button,
  colors,
  Divider,
  Stack,
  Avatar,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "src/constants/contact";
import { ArticleType } from "src/app/api/article/getArticle";
import MarkdownTemplate from "./MarkdownTemplate";
import TocList from "./TocList";

//
//
//

interface ArticleLayoutProps {
  article: ArticleType;
  headings: { id: string; text: string }[];
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ article, headings }) => {
  const { title, content, category, thumbnail, date } = article;

  const [localizedDate, setLocalizedDate] = React.useState(date);

  React.useEffect(() => {
    setLocalizedDate(new Date(date).toLocaleDateString());
  }, [date]);

  return (
    <article className="article-template">
      <Box
        component="header"
        sx={{
          display: "flex",
          width: "100%",
          height: 322,
        }}
      >
        <Box
          sx={{
            width: "100vw",
            height: "100%",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              inset: 0,
              height: 385,
            }}
          >
            {thumbnail?.url ? (
              <Image
                fill
                priority
                src={thumbnail.url}
                alt={`${title} 썸네일입니다.`}
                style={{ objectFit: "cover" }}
              />
            ) : null}
          </Box>
        </Box>
      </Box>
      <Box
        position="relative"
        display={{ sm: "block", md: "grid" }}
        gap={6}
        sx={{ gridTemplateColumns: "minmax(0,1fr) minmax(0,16rem)" }}
      >
        <Box component="section">
          <Box paddingY={6}>
            <Chip label={category} sx={{ borderRadius: 4, marginBottom: 1 }} />
            <Typography
              component="h1"
              variant="h4"
              fontWeight={800}
              sx={{ marginBottom: 2 }}
            >
              {title}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              <time dateTime={localizedDate} suppressHydrationWarning>
                {localizedDate}
              </time>
            </Typography>
          </Box>
          <MarkdownTemplate content={content ?? ""} />
          <Divider />
          <Box marginTop={3}>
            <Typography
              component="p"
              variant="h6"
              fontWeight={700}
              marginBottom={1}
            >
              글쓴이
            </Typography>
            <Stack direction="row" columnGap={2}>
              <Avatar
                alt="Rory (로리)"
                src="/profile-image.png"
                sx={{ width: 56, height: 56 }}
              />
              <div>
                <Typography marginBottom={0.5} fontWeight={700}>
                  Rory (로리)
                </Typography>
                <Stack direction="row" gap={1}>
                  {contactInfo.map((contact) => (
                    <Link key={contact.url} href={contact.url}>
                      <Typography
                        color="coral"
                        fontWeight={700}
                        sx={{
                          transition: "cubic-bezier(.4,0,.2,1) 0.15s",
                          ":hover": {
                            boxShadow: "0px 2px 0px 0px coral",
                          },
                        }}
                      >
                        {contact.title}
                      </Typography>
                    </Link>
                  ))}
                </Stack>
              </div>
            </Stack>
          </Box>
        </Box>
        <TocList headings={headings} />
      </Box>
      <Box paddingTop={10} textAlign="center">
        <Link passHref href="/articles">
          <Button
            disableElevation
            LinkComponent={"a"}
            variant="contained"
            size="large"
            sx={{
              width: 200,
              bgcolor: colors.grey[200],
              color: "text.secondary",
              "&:hover": {
                bgcolor: colors.grey[300],
              },
            }}
          >
            목록으로
          </Button>
        </Link>
      </Box>
    </article>
  );
};

export default ArticleLayout;
