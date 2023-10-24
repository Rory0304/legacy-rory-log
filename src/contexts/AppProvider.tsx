"use client";

import React from "react";
import { ApolloProvider } from "@apollo/client";
import { LazyMotion, domAnimation } from "framer-motion";

import apolloClient from "src/graphql/client";

interface AppProviderProps {
  children: React.ReactNode;
}

// - Apollo provider ref: https://www.apollographql.com/docs/react/get-started/
// - Framer motion ref: https://www.framer.com/motion/guide-reduce-bundle-size/
const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <LazyMotion features={domAnimation}>{children}</LazyMotion>
    </ApolloProvider>
  );
};

export default AppProvider;
