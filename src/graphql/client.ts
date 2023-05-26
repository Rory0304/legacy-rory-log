import { ApolloClient, InMemoryCache } from "@apollo/client";


const CONTENTFUL_GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_CONTENTFUL_GRAPHQL_ENDPOINT ?? '';
const CONTENTFUL_SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? '';
const CONTENTFUL_ENVIRONMENT = process.env.NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT ?? 'master';
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_API_ACCESS_TOKEN ?? '';


/**
 * GraphQL client.
 * - ref: https://www.apollographql.com/docs/react/api/core/ApolloClient/
 */
const client = new ApolloClient({
    uri: `${CONTENTFUL_GRAPHQL_ENDPOINT}/spaces/${CONTENTFUL_SPACE_ID}/environments/${CONTENTFUL_ENVIRONMENT}?access_token=${ACCESS_TOKEN}`,
    cache: new InMemoryCache(),
});

export default client;
