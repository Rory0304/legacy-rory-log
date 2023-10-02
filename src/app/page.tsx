import React from "react";
import { Metadata } from "next";
import Container from "src/components/blocks/Container/Container";
import { AboutMe, FeaturedArticleList } from "src/components/pages";

import { getFeaturedArticles } from "src/app/api/articles/getArticles";

export const metadata: Metadata = {
  title: "Home | rory log",
  description: "rory log",
  alternates: {
    canonical: "https://rory-log.vercel.app/",
  },
};

const Home = async () => {
  const featuredArticles = await getFeaturedArticles({ preview: false });

  return (
    <Container>
      <AboutMe />
      <FeaturedArticleList featuredArticleList={featuredArticles} />
    </Container>
  );
};

export default Home;
