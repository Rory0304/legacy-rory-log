import React from "react";
import { PageSeo, AboutMe, FeaturedArticleList } from "src/components/pages";

import { getFeaturedArticles } from "src/app/api/articles/getArticles";

const Home = async () => {
  const featuredArticles = await getFeaturedArticles({ preview: false });

  return (
    <div>
      <PageSeo title="Home | rory dev" description="rory dev" />
      <AboutMe />
      <FeaturedArticleList featuredArticleList={featuredArticles} />
    </div>
  );
};

export default Home;
