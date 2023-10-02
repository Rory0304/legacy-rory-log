"use client";

import React from "react";

interface GlobalMainProps {
  children: React.ReactNode;
}

const GlobalMain: React.FC<GlobalMainProps> = ({ children }) => {
  return <main>{children}</main>;
};

export default GlobalMain;
