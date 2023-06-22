"use client";

import React from "react";
import useTheme from "@mui/material/styles/useTheme";
import ColorModeContext from "src/contexts/ColorModeContext";

const useColorMode = () => {
  const theme = useTheme();
  const { toggleColorMode } = React.useContext(ColorModeContext);
  const isDarkMode = theme.palette.mode === "dark";

  React.useEffect(() => {
    const prevMode = theme.palette.mode === "dark" ? "light" : "dark";
    const currentMode = theme.palette.mode;

    // Set dataset on body to allow for global styling based on light/dark mode
    document.body.dataset.theme = currentMode;

    // Change highligh stylesheet based on light/dark mode
    document
      .querySelector(`link[title="${currentMode}"]`)
      ?.removeAttribute("disabled");
    document
      .querySelector(`link[title="${prevMode}"]`)
      ?.setAttribute("disabled", "disabled");
  }, [theme]);

  return { isDarkMode, toggleColorMode };
};

export default useColorMode;
