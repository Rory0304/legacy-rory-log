"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Button,
  Stack,
  useScrollTrigger,
} from "@mui/material";
import type { AppBarProps } from "@mui/material";
import Link from "next/link";

const PAGE_LIST = [
  {
    title: "Articles",
    url: "/",
  },
  {
    title: "Logs",
    url: "/logs",
  },
  {
    title: "About",
    url: "/about",
  },
];

const GlobalHeader: React.FC = () => {
  return (
    <AppBar
      elevation={0}
      sx={{
        borderRadius: 0,
        transition: "linear 0.2s",
        backdropFilter: "saturate(180%) blur(5px)",
        background: "hsla(0,0%,100%,.8)",
        boxShadow: "inset 0 -1px 0 0 #eaeaea",
      }}
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Link passHref href="/">
                <Typography
                  component="h1"
                  fontSize={24}
                  fontWeight={800}
                  sx={{ marginY: 2, display: "block", color: "black" }}
                >
                  Rory<span style={{ color: "coral" }}>-</span>
                  Dev
                </Typography>
              </Link>
            </Box>
            <Stack direction="row" rowGap={1}>
              {PAGE_LIST.map((page) => (
                <Link passHref href={page.url} key={page.title}>
                  <Button
                    color="neutral"
                    sx={{
                      my: 2,
                      display: "block",
                      color: "black",
                      textTransform: "initial",
                    }}
                  >
                    {page.title}
                  </Button>
                </Link>
              ))}
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default GlobalHeader;
