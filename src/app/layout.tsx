import {
  GlobalMain,
  GlobalHeader,
  GlobalFooter,
} from "src/components/blocks/Global";
import { AppProvider, ThemeProvider } from "src/contexts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github.min.css"
          title="light"
        />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin=""
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css"
          title="dark"
        />
        <link rel="icon" href={`/favicon.ico`} />
      </head>

      <AppProvider>
        <ThemeProvider>
          <body>
            <GlobalHeader />
            <GlobalMain>{children}</GlobalMain>
            <GlobalFooter />
          </body>
        </ThemeProvider>
      </AppProvider>
    </html>
  );
}
