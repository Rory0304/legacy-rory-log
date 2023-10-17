"use client";

import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";
import {
  Typography,
  List,
  ListItem,
  Box,
  Stack,
  Pagination,
  Tooltip,
  IconButton,
} from "@mui/material";
import { LogType } from "src/app/api/logs/getLogs";
import { Youtube } from "src/components/blocks";
import LinkIcon from "@mui/icons-material/Link";

//
//
//

const LOGS_PER_PAGE = 10;

interface LogListProps {
  logList: LogType[];
}

//
//
//

const StyledMarkdownTemplate = styled(Box)`
  &.markdown-body {
    menu,
    ol,
    ul {
      list-style: revert;
    }
  }
`;

const LogList: React.FC<LogListProps> = ({ logList }) => {
  const [page, setPage] = React.useState(1);
  const total = Math.ceil(logList.length / LOGS_PER_PAGE);

  const handleClipboardCopy = async (
    text: string,
    successAction?: () => void,
    failAction?: () => void
  ) => {
    try {
      await navigator.clipboard.writeText(text);
      successAction && successAction();
    } catch (error) {
      failAction && failAction();
    }
  };

  return (
    <>
      <div>
        <List disablePadding sx={{ marginBottom: 4 }}>
          {logList.map((log, index) => {
            const { title, youtubeUrl, content, tag } = log;
            const localizedDate = new Date(log.date).toLocaleDateString();

            return (
              <ListItem key={`log-${index}`} disablePadding divider>
                <article>
                  <Box paddingBottom={3}>
                    <Link href={`#${title}`}>
                      <Typography
                        id={title}
                        variant="h5"
                        component="h2"
                        paddingBottom={1}
                        fontWeight={500}
                        sx={{
                          scrollMarginTop:
                            "calc(var(--sticky-header-height) + 10px)",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {title}
                        <Tooltip
                          title="Copy"
                          onClick={() =>
                            handleClipboardCopy(
                              `${
                                process.env.NEXT_PUBLIC_RORY_DEV
                              }/dairy/${encodeURIComponent(title)}`
                            )
                          }
                          sx={{
                            marginLeft: 0.5,
                          }}
                        >
                          <IconButton>
                            <LinkIcon />
                          </IconButton>
                        </Tooltip>
                      </Typography>
                    </Link>
                    <Typography component="p" color="text.secondary">
                      <time dateTime={localizedDate} suppressHydrationWarning>
                        {localizedDate}
                      </time>
                    </Typography>
                  </Box>
                  <Box paddingBottom={3}>
                    {youtubeUrl ? (
                      <Box margin="0 auto" maxWidth="md">
                        <Youtube videoUrl={youtubeUrl} />
                        <Box paddingBottom={3} />
                      </Box>
                    ) : null}
                    <StyledMarkdownTemplate
                      className="markdown-body"
                      dangerouslySetInnerHTML={{ __html: content }}
                    />
                  </Box>
                  <Stack direction="row" columnGap={1} paddingBottom={3}>
                    {tag.map((t, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        color="text.secondary"
                      >
                        #{t}
                      </Typography>
                    ))}
                  </Stack>
                </article>
              </ListItem>
            );
          })}
        </List>
      </div>
      <Stack direction="row" justifyContent="center">
        <Pagination
          shape="rounded"
          count={total}
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      </Stack>
    </>
  );
};

export default LogList;
