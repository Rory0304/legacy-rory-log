"use client";

import React from "react";
import useTheme from "@mui/material/styles/useTheme";
import ColorModeContext from "src/contexts/ColorModeContext";

const useColorMode = () => {
  const theme = useTheme();
  const { toggleColorMode } = React.useContext(ColorModeContext);
  const isDarkMode = theme.palette.mode === "dark";

  React.useEffect(() => {
    const currentMode = theme.palette.mode;

    // Set dataset on body to allow for global styling based on light/dark mode
    document.body.dataset.theme = currentMode;
  }, [theme]);

  return { isDarkMode, toggleColorMode };
};

export default useColorMode;
