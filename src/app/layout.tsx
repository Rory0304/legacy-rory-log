"use client";

import {
  GlobalMain,
  GlobalHeader,
  GlobalFooter,
} from "src/components/blocks/Global";
import { CssBaseline } from "@mui/material";
import emotionReset from "emotion-reset";
import { Global } from "@emotion/react";
import { resetStyles } from "src/constants/styles/resetStyles";

import MuiThemeProvider from "@mui/system/ThemeProvider";
import { createTheme } from "@mui/material/styles";
import { IntlProvider } from "react-intl";
import { ApolloProvider } from "@apollo/client";

import apolloClient from "src/graphql/client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Create a theme instance.
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
        />
        <link rel="icon" href={`/favicon.ico`} />
      </head>
      <ApolloProvider client={apolloClient}>
        <IntlProvider locale="ko">
          <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Global styles={[emotionReset, resetStyles]} />
            <body>
              <GlobalHeader />
              <GlobalMain>{children}</GlobalMain>
              <GlobalFooter />
            </body>
          </MuiThemeProvider>
        </IntlProvider>
      </ApolloProvider>
    </html>
  );
}
