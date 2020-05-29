import ApolloClient from "apollo-boost";

import config from "../config";

const client = new ApolloClient({
  uri: config.NEXT_PUBLIC_GRAPHQL_URI,
});

export default client;
