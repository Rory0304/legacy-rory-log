import React from "react";
import { PageHeader } from "src/components/pages";
import LogList from "src/components/pages/Logs/LogList";
import Container from "src/components/blocks/Container/Container";

import { getLogs } from "src/app/api/logs/getLogs";
import { Metadata } from "next";

import "src/styles/github-markdown-dark.css";
import "src/styles/github-markdown-light.css";

export const metadata: Metadata = {
  title: "Diary | rory log",
  description: "짧은 생각, 감정, 교훈에 대한 기록을 남깁니다.",
  alternates: {
    canonical: "https://rory-log.vercel.app/logs",
  },
};

const Diary = async () => {
  const logs = await getLogs({ preview: false });
  return (
    <Container>
      <PageHeader
        title={"Diary"}
        description="짧은 생각, 감정, 교훈에 대한 기록을 남깁니다."
      />
      <LogList logList={logs} />
    </Container>
  );
};

export default Diary;
