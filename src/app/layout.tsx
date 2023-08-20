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
  const fnToRunOnClient = `(function () {
    document.body.dataset.theme =
      window.localStorage.getItem("theme") ||
      (window.matchMedia?.("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
  })()`;

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
              <script
                id="theme-initialize"
                dangerouslySetInnerHTML={{ __html: fnToRunOnClient }}
              />
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
