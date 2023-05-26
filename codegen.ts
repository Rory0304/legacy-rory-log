import type { CodegenConfig } from "@graphql-codegen/cli";

//
//
//

const CONTENTFUL_GRAPHQL_ENDPOINT =
  process.env.NEXT_PUBLIC_CONTENTFUL_GRAPHQL_ENDPOINT ?? "";
const CONTENTFUL_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? "";
const CONTENTFUL_ENVIRONMENT =
  process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT ?? "master";
const ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_API_ACCESS_TOKEN ?? "";

//
//
//

const SCHEMA_URL = `${CONTENTFUL_GRAPHQL_ENDPOINT}/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}`;

//
// Generate GraphQL schema and TypeScript types
// ref: https://the-guild.dev/graphql/codegen/docs/guides/react-vue
//

const config: CodegenConfig = {
  overwrite: true,
  // ref: https://the-guild.dev/graphql/config/docs/user/schema#passing-headers
  schema: {
    [SCHEMA_URL]: {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    },
  },
  documents: "src/graphql/**/*.ts",
  generates: {
    "src/graphql/generated.ts": {
      plugins: [
        "typescript",
        "typescript-apollo-client-helpers",
        "typescript-react-apollo",
        "typescript-operations",
      ],
      config: {
        // ref: https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-apollo#withhooks
        withHooks: false,
        // ref: https://the-guild.dev/graphql/codegen/plugins/typescript/typescript-react-apollo#withresulttype
        withResultType: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};

export default config;
