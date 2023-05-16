"use client";

import {
  Typography,
  Container,
  Box,
  Chip,
  Button,
  colors,
  Divider,
  Stack,
} from "@mui/material";
import { isNullableType } from "graphql";
import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "src/constants/contact";
//
//
//

interface ArticleTemplateProps {
  article: {
    title: string;
    slug: string;
    content: string;
    category: string;
    date: string;
    thumbnail?: {
      url: string;
    };
  };
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({ article }) => {
  const { title, slug, content, category, thumbnail, date } = article;

  return (
    <article>
      <Box
        component="header"
        sx={{
          display: "flex",
          width: "100%",
          height: 385,
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
              />
            ) : null}
          </Box>
        </Box>
      </Box>
      <Box>
        <Box paddingBottom={4}>
          <Chip label={category} sx={{ borderRadius: 4, marginBottom: 1 }} />
          <Typography
            component="h1"
            variant="h4"
            fontWeight={800}
            sx={{ marginBottom: 2 }}
          >
            {title}
          </Typography>
          <Typography variant="caption" color="GrayText">
            {new Date(date).toLocaleDateString()}
          </Typography>
        </Box>
        <Box
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: content }}
          paddingBottom={4}
        />
        <Divider />
        <Box marginTop={3}>
          <Typography variant="h6" fontWeight={700} marginBottom={1}>
            글쓴이
          </Typography>
          <Typography marginBottom={1} fontWeight={700}>
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
        </Box>
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
              color: "GrayText",
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

export default ArticleTemplate;
