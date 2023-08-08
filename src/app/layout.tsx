import {
  GlobalMain,
  GlobalHeader,
  GlobalFooter,
} from "src/components/blocks/Global";
import { AppProvider, ThemeProvider, MediaQueryProvider } from "src/contexts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <link
          rel="stylesheet preload"
          as="style"
          crossOrigin=""
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.8/dist/web/static/pretendard.css"
        />
        <link rel="icon" href={`/favicon.ico`} />
      </head>

      <AppProvider>
        <ThemeProvider>
          <MediaQueryProvider>
            <body>
              <GlobalHeader />
              <GlobalMain>{children}</GlobalMain>
              <GlobalFooter />
            </body>
          </MediaQueryProvider>
        </ThemeProvider>
      </AppProvider>
    </html>
  );
}
