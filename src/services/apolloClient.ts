import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const GITHUB_API_URL = 'https://api.github.com/graphql';
const GITHUB_ACCESS_TOKEN = process.env.REACT_APP_GITHUB_API_URL;
// 
const httpLink = createHttpLink({
  uri: GITHUB_API_URL,
  headers: {
    Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
  },
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default client;
