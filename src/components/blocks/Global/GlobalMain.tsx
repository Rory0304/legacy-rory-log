"use client";

import React from "react";
import Container from "@mui/material/Container";

interface GlobalMainProps {
  children: React.ReactNode;
}

const GlobalMain: React.FC<GlobalMainProps> = ({ children }) => {
  return (
    <main>
      <Container maxWidth="md" sx={{ paddingY: 8 }}>
        {children}
      </Container>
    </main>
  );
};

export default GlobalMain;
