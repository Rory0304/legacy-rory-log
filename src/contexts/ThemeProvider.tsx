"use client";

import React from "react";
import { CssBaseline } from "@mui/material";
import emotionReset from "emotion-reset";
import { Global } from "@emotion/react";
import { resetStyles } from "src/constants/styles/resetStyles";

import ColorModeContext from "src/contexts/ColorModeContext";
import MuiThemeProvider from "@mui/system/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import { palette } from "src/styles/palette";

//
//
//
type ColorModeType = "light" | "dark";

interface ThemeProviderProps {
  children: React.ReactNode;
}

//
//
//
const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [mode, setMode] = React.useState<ColorModeType>("dark");

  React.useEffect(() => {
    if (window) {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setMode(systemPrefersDark ? "dark" : "light");
    }
  }, []);

  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode: ColorModeType) =>
      prevMode === "light" ? "dark" : "light"
    );
  }, []);

  const theme = createTheme({
    palette: {
      mode,
      ...palette,
      ...(mode === "light"
        ? {
            background: {
              default: "#fff",
            },
          }
        : {
            background: {
              default: "rgb(23 23 23/1)",
            },
          }),
    },
  });

  return (
    <ColorModeContext.Provider value={{ toggleColorMode }}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Global styles={[emotionReset, resetStyles]} />
        {children}
      </MuiThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ThemeProvider;
