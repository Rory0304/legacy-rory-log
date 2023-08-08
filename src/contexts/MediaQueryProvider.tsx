"use client";

import React from "react";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

interface MediaQueryContextProps {
  laptopOrSmaller: boolean;
  tabletOrSmaller: boolean;
  mobileOrSmaller: boolean;
}

const MediaQueryContext = React.createContext<MediaQueryContextProps>({
  laptopOrSmaller: false,
  tabletOrSmaller: false,
  mobileOrSmaller: false,
});

const useMediaQueryContext = () => {
  const context = React.useContext<MediaQueryContextProps>(MediaQueryContext);

  if (!context) {
    throw new Error("useMediaQueryContext is not defined");
  }
  return context;
};

type MediaQueryProviderProps = { children: React.ReactNode };

const MediaQueryProvider = ({ children }: MediaQueryProviderProps) => {
  const theme = useTheme();
  const laptopOrSmaller = useMediaQuery(theme.breakpoints.down("xl"), {
    noSsr: true,
  });
  const tabletOrSmaller = useMediaQuery(theme.breakpoints.down("lg"), {
    noSsr: true,
  });
  const mobileOrSmaller = useMediaQuery(theme.breakpoints.down("md"), {
    noSsr: true,
  });

  return (
    <MediaQueryContext.Provider
      value={{
        laptopOrSmaller,
        tabletOrSmaller,
        mobileOrSmaller,
      }}
    >
      {children}
    </MediaQueryContext.Provider>
  );
};

export { MediaQueryProvider, useMediaQueryContext };
