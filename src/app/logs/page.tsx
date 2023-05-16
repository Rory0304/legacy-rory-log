import React from "react";
import { PageSeo, PageHeader } from "src/components/pages";

const Logs = () => {
  return (
    <>
      <PageSeo
        title="Logs | rory dev"
        description="I typically write short pieces about personal routines, marathons, lessons learned, and other related topics."
      />
      <PageHeader
        title={"Logs."}
        description="Mainly handle short form contents."
      />
    </>
  );
};

export default Logs;
