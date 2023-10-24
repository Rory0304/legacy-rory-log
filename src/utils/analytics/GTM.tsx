import React from "react";
import { useRouter } from "next/router";
import Script from "next/script";

import * as events from "./events";

/**
 * Google tag manager
 * @see https://developers.google.com/tag-platform/tag-manager/web
 */
const GTM: React.FC = () => {
  const router = useRouter();

  //
  // Emit page view event, when router changes
  //
  React.useEffect(
    () => {
      if (process.env.NODE_ENV !== "production") {
        return;
      }

      router.events.on("routeChangeComplete", events.eventPageView);

      return () => {
        router.events.off("routeChangeComplete", events.eventPageView);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.events]
  );

  //
  //
  //

  const id = process.env.NEXT_PUBLIC_GTM_ID ?? "";
  if (!id || process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <>
      {/* head script */}
      <Script
        id="script-gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm .js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${id});`,
        }}
      />

      {/* body content */}
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${id}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
        }}
      />
    </>
  );
};

export default Object.assign(GTM, events);
