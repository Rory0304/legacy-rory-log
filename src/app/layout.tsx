import {
  GlobalMain,
  GlobalHeader,
  GlobalFooter,
} from "src/components/blocks/Global";
import { AppProvider, ThemeProvider, MediaQueryProvider } from "src/contexts";
import localFont from "next/font/local";
import GTM from "src/utils/analytics/GTM";
import Hotjar from "src/utils/analytics/Hotjar";

const myFont = localFont({
  src: "../assets/PretendardVariable.woff2",
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
  /**
   * Run script on Client
   * @see https://github.com/gaearon/overreacted.io/blob/master/src/html.js#L21
   */
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

      <body className={myFont.className} data-theme="light">
        <script
          id="theme-initialize"
          dangerouslySetInnerHTML={{ __html: fnToRunOnClient }}
        />
        <AppProvider>
          <ThemeProvider>
            <MediaQueryProvider>
              <GlobalHeader />
              <GlobalMain>{children}</GlobalMain>
              <GlobalFooter />
            </MediaQueryProvider>
          </ThemeProvider>
        </AppProvider>

        {/* Page Analytics */}
        <GTM />
        <Hotjar />
      </body>
    </html>
  );
}
