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
  IconButton,
} from "@mui/material";
import Link from "next/link";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

import useColorMode from "src/hooks/useColorMode";

//
//
//
const PAGE_LIST = [
  {
    title: "Articles",
    url: "/articles",
  },
];

const GlobalHeader: React.FC = () => {
  const { isDarkMode, toggleColorMode } = useColorMode();

  const [modeIcon, setModeIcon] = React.useState<React.ReactElement>(<></>);

  React.useEffect(() => {
    setModeIcon(
      isDarkMode ? (
        <DarkModeIcon sx={{ color: "#FDD835" }} />
      ) : (
        <LightModeIcon sx={{ color: "#FDD835" }} />
      )
    );
  }, [isDarkMode]);

  return (
    <AppBar
      elevation={0}
      sx={{
        borderRadius: 0,
        transition: "linear 0.2s",
        backdropFilter: "saturate(180%) blur(5px)",
        background: isDarkMode ? "rgba(0,0,0,.5)" : "hsla(0,0%,100%,.8)",
        boxShadow: isDarkMode
          ? "inset 0 -1px 0 0 hsla(0,0%,100%,.1)"
          : "inset 0 -1px 0 0 #eaeaea",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            rowGap={1}
            sx={{
              flexGrow: 1,
            }}
          >
            <Stack direction="row" alignItems="center">
              <Box>
                <Link passHref href="/">
                  <Button color="neutral" aria-label="rory-log">
                    <Typography component="h1" fontSize={24} fontWeight={800}>
                      🌱
                    </Typography>
                  </Button>
                </Link>
              </Box>
              {PAGE_LIST.map((page) => (
                <Link passHref href={page.url} key={page.title}>
                  <Button
                    color="neutral"
                    sx={{
                      my: 2,
                      display: "block",
                      color: isDarkMode ? "white" : "black",
                      textTransform: "initial",
                    }}
                  >
                    {page.title}
                  </Button>
                </Link>
              ))}
            </Stack>
            <Stack>
              <IconButton
                onClick={toggleColorMode}
                color="inherit"
                aria-label={`toggle ${isDarkMode ? "light" : "dark"} theme`}
              >
                {modeIcon}
              </IconButton>
            </Stack>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default GlobalHeader;
