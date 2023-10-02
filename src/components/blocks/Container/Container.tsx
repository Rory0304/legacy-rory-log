"use client";

import React from "react";
import MuiContainer from "@mui/material/Container";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <MuiContainer maxWidth="lg" sx={{ paddingY: 8, paddingX: 3 }}>
      {children}
    </MuiContainer>
  );
};

export default Container;
