"use client";

import React from "react";
import emotionReset from "emotion-reset";

import { Global } from "@emotion/react";
import { resetStyles } from "src/constants/styles/resetStyles";
import ColorModeContext from "src/contexts/ColorModeContext";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
import CssBaseline from "@mui/material/CssBaseline";
import { getDesignTokens } from "src/styles/designTokens";

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
  const [mode, setMode] = React.useState<ColorModeType>("light");

  //
  // setting mode of react state in browser rendering
  //
  React.useEffect(() => {
    const currentMode = window.localStorage.getItem("theme") || "light";
    setMode(currentMode as ColorModeType);
  }, []);

  //
  //
  //
  const toggleColorMode = React.useCallback(() => {
    const currentMode = mode === "light" ? "dark" : "light";
    setMode(currentMode);
    // Set data-theme
    localStorage.setItem("theme", currentMode);
    // Set dataset on body to allow for global styling based on light/dark mode
    document.body.dataset.theme = currentMode;
  }, [mode]);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Global styles={[emotionReset, resetStyles]} />
      <ColorModeContext.Provider value={{ toggleColorMode }}>
        {children}
      </ColorModeContext.Provider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
