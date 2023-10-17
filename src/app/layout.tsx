import {
  GlobalMain,
  GlobalHeader,
  GlobalFooter,
} from "src/components/blocks/Global";
import { AppProvider, ThemeProvider, MediaQueryProvider } from "src/contexts";
import localFont from "@next/font/local";

const myFont = localFont({
  src: "../styles/PretendardVariable.woff2",
  fallback: [
    "Pretendard",
    "-apple-system",
    "BlinkMacSystemFont",
    "system-ui",
    "Roboto",
    "Helvetica Neue",
    "Segoe UI",
    "Apple SD Gothic Neo",
    "Noto Sans KR",
    "Malgun Gothic",
    "Apple Color Emoji",
    "Segoe UI Emoji",
    "Segoe UI Symbol",
    "sans-serif",
  ],
});

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
        <link rel="icon" href={`/favicon.ico`} />
      </head>

      <AppProvider>
        <ThemeProvider>
          <MediaQueryProvider>
            <body className={myFont.className}>
              {/* ref: https://github.com/gaearon/overreacted.io/blob/master/src/html.js#L21  */}
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
