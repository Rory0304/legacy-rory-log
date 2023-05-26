"use Client";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "@emotion/styled";

//
//
//

interface ArticleCategoryProps {
  tabs: string[];
  tab: string;
  total: number;
  onChange: (value: string) => void;
}

//
//
//

const StyledTab = styled(Tab)`
  border-bottom: 0;
  text-transform: capitalize;
  font-size: 1.25rem;
  color: #d1d6db;
  min-width: 0;
  padding: 0;
  margin-right: 1rem;
  transition: all 0.15s;

  &:hover {
    color: #333d4b;
    font-weight: bold;
  }

  &.Mui-selected {
    color: #333d4b;
    font-weight: bold;
  }
`;

const ArticleTabs: React.FC<ArticleCategoryProps> = ({
  tabs,
  tab,
  total,
  onChange,
}) => {
  return (
    <Tabs
      value={tab}
      variant="scrollable"
      onChange={(_, value) => onChange(value)}
      TabIndicatorProps={{
        sx: {
          display: "none",
        },
      }}
    >
      <StyledTab disableRipple value={"All"} label={`전체 (${total})`} />
      {tabs.map((tab) => (
        <StyledTab disableRipple value={tab} label={tab} key={tab} />
      ))}
    </Tabs>
  );
};

export default ArticleTabs;
