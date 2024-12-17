import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import dotenv from 'dotenv';

dotenv.config();
const GITHUB_API_URL = 'https://api.github.com/graphql';

//this should be a secret but for the sake of this example I will leave it here
const GITHUB_ACCESS_TOKEN =process.env.GITHUB_ACCESS_TOKEN;

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
