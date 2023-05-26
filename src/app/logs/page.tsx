import React from "react";
import { PageSeo, PageHeader } from "src/components/pages";
import LogList from "src/components/pages/Logs/LogList";

import { getLogs } from "src/app/api/logs/getLogs";

const Logs = async () => {
  const logs = await getLogs({ preview: false });
  return (
    <>
      <PageSeo
        title="Logs | rory dev"
        description="I typically write short pieces about personal routines, marathons, lessons learned, and other related topics."
      />
      <PageHeader title={"로그"} description="짧은 고민들을 정리합니다." />
      <LogList logList={logs} />
    </>
  );
};

export default Logs;
