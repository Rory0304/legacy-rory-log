"use client";
import React from "react";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import useTheme from "@mui/material/styles/useTheme";
import useMediaQuery from "@mui/material/useMediaQuery";

interface ArticleSearchInputProps {
  serachInputValue: string;
  onChange: (value: string) => void;
  onEnter: (value: string) => void;
}

const ArticleSearchInput: React.FC<ArticleSearchInputProps> = ({
  serachInputValue,
  onChange,
  onEnter,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <FilledInput
      disableUnderline
      hiddenLabel
      fullWidth={isMobile}
      size="small"
      placeholder="아티클 제목 검색"
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
      value={serachInputValue}
      onChange={(e) => onChange(e.target.value)}
      inputProps={{
        onKeyDown: (e) => {
          if (e.key === "Enter") {
            onEnter((e.target as HTMLInputElement).value);
          }
        },
      }}
      sx={{
        borderRadius: 1.5,
      }}
    />
  );
};

export default ArticleSearchInput;
