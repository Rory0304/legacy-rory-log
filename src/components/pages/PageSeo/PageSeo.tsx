"use client";

import React from "react";
import { NextSeo } from "next-seo";

import { usePathname } from "next/navigation";

interface PageSeoProps {
  title: string;
  description: string;
  canonical?: string;
}

const PageSeo: React.FC<PageSeoProps> = ({ title, description, canonical }) => {
  const pathname = usePathname();

  return (
    <NextSeo
      title={title ?? undefined}
      description={description ?? undefined}
      canonical={canonical ?? pathname ?? undefined}
    />
  );
};

export default PageSeo;
