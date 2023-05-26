"use client";

import React from "react";
import { CssBaseline } from "@mui/material";
import emotionReset from "emotion-reset";
import { Global } from "@emotion/react";
import { resetStyles } from "src/constants/styles/resetStyles";

import MuiThemeProvider from "@mui/system/ThemeProvider";
import { theme } from "src/styles/theme";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Global styles={[emotionReset, resetStyles]} />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
