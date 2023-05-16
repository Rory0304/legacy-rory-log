"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  MenuItem,
  Menu,
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
    url: "/articles",
  },
  {
    title: "Logs",
    url: "/logs",
  },
];

const GlobalHeader: React.FC = () => {
  const [headerStyle, setHeaderStyle] = React.useState<AppBarProps["sx"]>({});
  const isScrollTriggered = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  React.useEffect(() => {
    if (isScrollTriggered) {
      setHeaderStyle({
        bgcolor: "white",
        boxShadow: "0 1px 3px 0 rgba(0,0,0,.12)",
      });
    } else {
      setHeaderStyle({
        bgcolor: "transparent",
        boxShadow: "none",
      });
    }
  }, [isScrollTriggered]);

  return (
    <AppBar
      elevation={0}
      sx={{
        borderRadius: 0,
        transition: "linear 0.2s",
        bgcolor: "transparent",
        ...headerStyle,
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
