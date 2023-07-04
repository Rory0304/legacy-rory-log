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
