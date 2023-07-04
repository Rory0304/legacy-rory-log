"use client";
import React from "react";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

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
  return (
    <FilledInput
      disableUnderline
      hiddenLabel
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
