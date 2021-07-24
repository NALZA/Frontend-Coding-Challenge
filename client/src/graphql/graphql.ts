import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import awsconfig from "./aws-exports";

export const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export const link = from([
  errorLink,
  new HttpLink({ uri: awsconfig.aws_appsync_graphqlEndpoint,
  headers: {
    "X-Api-Key": awsconfig.aws_appsync_apiKey
  }
   }),
]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});