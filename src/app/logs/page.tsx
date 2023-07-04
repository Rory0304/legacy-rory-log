import React from "react";
import { PageSeo, PageHeader } from "src/components/pages";
import LogList from "src/components/pages/Logs/LogList";

import { getLogs } from "src/app/api/logs/getLogs";

import "src/styles/github-markdown-dark.css";
import "src/styles/github-markdown-light.css";

const Logs = async () => {
  const logs = await getLogs({ preview: false });
  return (
    <>
      <PageSeo
        title="Log | rory dev"
        description="커리어, 가치관, 루틴에 관한 짧은 고민들을 정리합니다."
      />
      <PageHeader
        title={"Log"}
        description="커리어, 가치관, 루틴에 관한 짧은 고민들을 정리합니다."
      />
      <LogList logList={logs} />
    </>
  );
};

export default Logs;
