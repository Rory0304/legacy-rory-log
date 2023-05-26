"use client";

import React from "react";

import { IntlProvider } from "react-intl";
import { ApolloProvider } from "@apollo/client";

import apolloClient from "src/graphql/client";

interface AppProviderProps {
  children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <ApolloProvider client={apolloClient}>
      <IntlProvider locale="ko">{children}</IntlProvider>
    </ApolloProvider>
  );
};

export default AppProvider;
