import type { PaletteMode } from "@mui/material";

export const palette = {
  primary: {
    main: "#FF7F50",
    light: "#FF7F50",
    dark: "#FF7F50",
    contrastText: "#FF7F50",
  },
  neutral: {
    main: "#64748B",
    light: "#64748B",
    dark: "#64748B",
    contrastText: "#64748B",
  },
};

export const typography = {
  fontFamily: [
    "Pretendard",
    "-apple-system",
    "BlinkMacSystemFont",
    '"Segoe UI"',
    "Roboto",
    '"Helvetica Neue"',
    "Arial",
    "sans-serif",
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(","),
};

export const getDesignTokens = (mode: PaletteMode) => ({
  typography,
  palette: {
    mode,
    ...palette,
  },
});
