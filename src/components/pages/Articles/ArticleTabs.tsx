"use client";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "@emotion/styled";

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

const StyledTab = styled(Tab)`
  border-bottom: 0;
  text-transform: none;
  min-width: 0;
  min-height: 32px;
  padding: 0;
  font-size: 1rem;
  transition: all 0.15s;
  font-weight: 600;
  align-items: flex-start;
`;

const ArticleTabs: React.FC<ArticleCategoryProps> = ({
  tabs,
  tab,
  total,
  onChange,
}) => {
  const tabsKey = Object.keys(tabs);

  return (
    <Tabs
      value={tab}
      orientation="vertical"
      variant="scrollable"
      onChange={(_, value) => onChange(value)}
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
