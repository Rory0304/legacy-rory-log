"use client";

import React from "react";

import { Typography, Pagination, Box } from "@mui/material";
import { useSearchParams, usePathname, useRouter } from "next/navigation";

import { useUpdateEffect, useDebounce } from "react-use";

import { ArticleList, ArticleTabs, ArticleSearchInput } from ".";
import { ArticleType } from "src/app/api/articles/getArticles";

//
//
//
const ARTICLES_PER_PAGE = 10;

interface ArticlesLayoutProps {
  articleList: ArticleType[];
  tabList: { [key: string]: number };
}

const ArticlesLayout: React.FC<ArticlesLayoutProps> = ({
  articleList,
  tabList,
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  //
  //
  //
  const searchInputQueryParams = searchParams?.get("q");
  const searchTabQueryParams = searchParams?.get("tab");

  //
  //
  //
  const [page, setPage] = React.useState(1);
  const [searchInput, setSearchInput] = React.useState(
    searchInputQueryParams ?? ""
  );
  const [debouncedSearchInput, setDebouncedSearchInput] = React.useState("");
  const [selectedTab, setSelectedTab] = React.useState(
    searchTabQueryParams ?? "All"
  );
  const [searchedArticleList, setSearchedArticleList] =
    React.useState<ArticleType[]>(articleList);

  const total = Math.ceil(searchedArticleList.length / ARTICLES_PER_PAGE);

  //
  //
  //
  useDebounce(() => setDebouncedSearchInput(searchInput), 300, [searchInput]);

  // Reset pagination
  React.useEffect(() => {
    setPage(1);
  }, [selectedTab, searchInput]);

  useUpdateEffect(() => {
    setSelectedTab("All");
    router.push(pathname + "?q=" + debouncedSearchInput);
  }, [debouncedSearchInput]);

  // Update searchedArticleList when debounced searchInput changes
  useUpdateEffect(() => {
    const searchedArticleList = articleList.filter((article) =>
      article.title?.includes(searchInputQueryParams ?? "")
    );
    setSearchedArticleList(searchedArticleList);
  }, [searchInputQueryParams]);

  // Update searchedArticleList when searchTabQueryParams changes
  useUpdateEffect(() => {
    if (searchTabQueryParams) {
      const filteredArticleList =
        selectedTab === "All"
          ? articleList
          : articleList.filter((article) => article.category === selectedTab);
      setSearchedArticleList(filteredArticleList);
    }
  }, [searchTabQueryParams]);

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    router.push(pathname + "?tab=" + tab);
  };

  return (
    <>
      <Box display="flex" justifyContent="flex-end" marginBottom={4}>
        <ArticleSearchInput
          serachInputValue={searchInput}
          onChange={setSearchInput}
          onEnter={(value) => {
            setSelectedTab("All");
            router.push(pathname + "?q=" + value);
          }}
        />
      </Box>

      <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
        <Box sx={{ flex: "0 0 auto", paddingRight: {xs: 0, md: 6 }}}>
          <Typography variant="h6" fontWeight={700} sx={{ paddingBottom: 2 }}>
            <Typography component="span" sx={{ marginRight: 1 }}>
              🏷️
            </Typography>
            Category
          </Typography>
          <ArticleTabs
            tabs={tabList}
            tab={selectedTab}
            total={articleList.length}
            onChange={handleTabChange}
          />
        </Box>
        <Box>
          {Boolean(searchInputQueryParams) ? (
            <Typography fontWeight={600} paddingBottom={4}>
              총 {searchedArticleList.length}개의 게시글이 검색되었습니다.
            </Typography>
          ) : null}
          <ArticleList articleList={searchedArticleList} />
          <Box>
            <Pagination
              shape="rounded"
              count={total}
              page={page}
              onChange={(_, value) => setPage(value)}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ArticlesLayout;
