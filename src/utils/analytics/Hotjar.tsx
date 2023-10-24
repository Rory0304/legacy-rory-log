"use client";

import React from "react";
import Script from "next/script";

/**
 * Hotjar
 * @see https://help.hotjar.com/hc/en-us/articles/115009336727-How-to-Install-Your-Hotjar-Tracking-Code
 */
const Hotjar: React.FC = () => {
  const hjid = process.env.NEXT_PUBLIC_CREDENTIALS_HOTJAR_ID ?? "";
  const hjsv = process.env.NEXT_PUBLIC_CREDENTIALS_HOTJAR_SNIPPET_VERSION ?? "";

  if (!hjid || !hjsv || process.env.NODE_ENV !== "production") {
    return null;
  }

  return (
    <Script
      id="hotjar-script"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `(function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${hjid},hjsv:${hjsv}};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
      }}
    />
  );
};

export default Hotjar;
