"use client";

import React from "react";
import { CssBaseline } from "@mui/material";
import emotionReset from "emotion-reset";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";

import { Global } from "@emotion/react";
import { resetStyles } from "src/constants/styles/resetStyles";
import ColorModeContext from "src/contexts/ColorModeContext";
import MuiThemeProvider from "@mui/material/styles/ThemeProvider";
import createTheme from "@mui/material/styles/createTheme";
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
  const options = { key: "mui" };

  const [mode, setMode] = React.useState<ColorModeType>("light");

  /**
   * setting mode of react state in browser rendering
   */
  React.useEffect(() => {
    const currentMode = window.localStorage.getItem("theme") || "light";
    setMode(currentMode as ColorModeType);
  }, []);

  const toggleColorMode = React.useCallback(() => {
    const currentMode = mode === "light" ? "dark" : "light";
    setMode(currentMode);
    // Set data-theme
    localStorage.setItem("theme", currentMode);
    // Set dataset on body to allow for global styling based on light/dark mode
    document.body.dataset.theme = currentMode;
  }, [mode]);

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  const [{ cache, flush }] = React.useState(() => {
    const cache = createCache(options);
    cache.compat = true;
    const prevInsert = cache.insert;
    let inserted: string[] = [];
    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };
    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };
    return { cache, flush };
  });

  // ref: https://nextjs.org/docs/app/building-your-application/styling/css-in-js#configuring-css-in-js-in-app
  useServerInsertedHTML(() => {
    const names = flush();
    if (names.length === 0) {
      return null;
    }
    let styles = "";
    for (const name of names) {
      styles += cache.inserted[name];
    }

    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(" ")}`}
        dangerouslySetInnerHTML={{
          __html: styles,
        }}
      />
    );
  });

  return (
    <CacheProvider value={cache}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Global styles={[emotionReset, resetStyles]} />
        <ColorModeContext.Provider value={{ toggleColorMode }}>
          {children}
        </ColorModeContext.Provider>
      </MuiThemeProvider>
    </CacheProvider>
  );
};

export default ThemeProvider;
