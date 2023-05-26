"use client";

import React from "react";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

//
//
//

const YOUTUBEID_REGEX_PATTERN =
  /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=|embed\/|v\/)?([a-zA-Z0-9\-_]+)/;

//
//
//

interface YoutubeProps {
  videoUrl: string;
}

const StyledResponsiveYoutubeContainer = styled(Box)`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-bottom: 56.25%; /* 16:9 Aspect Ratio */
`;

const StyledResponsiveIframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

const Youtube: React.FC<YoutubeProps> = ({ videoUrl }) => {
  const getYoutubeId = React.useCallback(() => {
    const match = videoUrl.match(YOUTUBEID_REGEX_PATTERN);

    if (match) {
      const videoId = match[1];
      return videoId;
    } else {
      return null;
    }
  }, [videoUrl]);

  const videoId = getYoutubeId();

  return (
    <StyledResponsiveYoutubeContainer>
      <StyledResponsiveIframe
        allowFullScreen
        id="player"
        src={`https://www.youtube.com/embed/${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      />
    </StyledResponsiveYoutubeContainer>
  );
};

export default Youtube;
