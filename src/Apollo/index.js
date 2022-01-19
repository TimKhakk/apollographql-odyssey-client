import { ApolloProvider as Provider, ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: 'https://apollographql-odyssey-server.herokuapp.com/',
  cache,
})

export const Apollo = ({ children }) => <Provider client={client}>{children}</Provider>;
