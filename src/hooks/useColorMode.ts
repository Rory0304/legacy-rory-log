"use client";

import React from "react";
import useTheme from "@mui/material/styles/useTheme";
import ColorModeContext from "src/contexts/ColorModeContext";

const useColorMode = () => {
  const theme = useTheme();
  const { toggleColorMode } = React.useContext(ColorModeContext);
  const isDarkMode = theme.palette.mode === "dark";

  return { isDarkMode, toggleColorMode };
};

export default useColorMode;
