"use client";

import React from "react";
import { NextSeo } from "next-seo";

import { usePathname } from "next/navigation";

interface PageSeoProps {
  title: string;
  description: string;
  imageUrl?: string;
  canonical?: string;
}

const PageSeo: React.FC<PageSeoProps> = ({
  title,
  description,
  imageUrl,
  canonical,
}) => {
  const pathname = usePathname();

  return (
    <NextSeo
      title={title ?? undefined}
      description={description ?? undefined}
      canonical={canonical ?? pathname ?? undefined}
      openGraph={{
        type: "website",
        title: title ?? undefined,
        description: description ?? undefined,
        url: pathname ?? undefined,
        images: imageUrl ? [{ url: imageUrl }] : undefined,
      }}
    />
  );
};

export default PageSeo;
