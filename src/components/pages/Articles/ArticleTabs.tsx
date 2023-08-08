"use client";

import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useMediaQueryContext } from "src/contexts/MediaQueryProvider";
import styled from "@mui/material/styles/styled";
//
//
//

interface ArticleCategoryProps {
  tabs: { [key: string]: number };
  tab: string;
  total: number;
  onChange: (value: string) => void;
}

//
//
//

const StyledTab = styled(Tab)(({ theme }) => ({
  borderBottom: 0,
  textTransfrom: "none",
  minWidth: 0,
  minHeight: "32px",
  padding: 0,
  fontSize: "1rem",
  transition: "all 0.15s",
  fontWeight: 600,
  alignItems: "flex-start",

  [theme.breakpoints.down("md")]: {
    marginRight: "1rem",
  },
}));

const ArticleTabs: React.FC<ArticleCategoryProps> = ({
  tabs,
  tab,
  total,
  onChange,
}) => {
  const { mobileOrSmaller } = useMediaQueryContext();
  const tabsKey = Object.keys(tabs);

  return (
    <Tabs
      value={tab}
      orientation={mobileOrSmaller ? "horizontal" : "vertical"}
      variant="scrollable"
      onChange={(_, value) => onChange(value)}
      scrollButtons={false}
      TabIndicatorProps={{
        sx: {
          display: "none",
        },
      }}
    >
      <StyledTab disableRipple value={"All"} label={`전체 (${total})`} />
      {tabsKey.map((tab) => (
        <StyledTab
          disableRipple
          value={tab}
          label={`${tab} ${tabs[tab] ? `(${tabs[tab]})` : null}`}
          key={tab}
        />
      ))}
    </Tabs>
  );
};

export default ArticleTabs;
