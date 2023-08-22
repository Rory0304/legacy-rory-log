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
} from "@mui/material";
import { LogType } from "src/app/api/logs/getLogs";
import { Youtube } from "src/components/blocks";

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

  return (
    <>
      <div>
        <List disablePadding sx={{ marginBottom: 4 }}>
          {logList.map((log, index) => {
            const localizedDate = new Date(log.date).toLocaleDateString();

            return (
              <ListItem key={`log-${index}`} disablePadding divider>
                <article>
                  <Box paddingBottom={3}>
                    <Typography variant="h5" component="h2" paddingBottom={1}>
                      {log.title}
                    </Typography>
                    <Typography
                      variant="caption"
                      component="p"
                      color="text.secondary"
                    >
                      <time dateTime={localizedDate} suppressHydrationWarning>
                        {localizedDate}
                      </time>
                    </Typography>
                  </Box>
                  <Box paddingBottom={3}>
                    {log.youtubeUrl ? (
                      <>
                        <Youtube videoUrl={log.youtubeUrl} />
                        <Box paddingBottom={3} />
                      </>
                    ) : null}
                    <StyledMarkdownTemplate
                      className="markdown-body"
                      dangerouslySetInnerHTML={{ __html: log.content }}
                    />
                  </Box>
                  <Stack direction="row" columnGap={1} paddingBottom={3}>
                    {log.tag.map((t, index) => (
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

export default LogList;
