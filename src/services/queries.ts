import { gql } from '@apollo/client';

export const GET_REPOSITORIES = gql`
  query GetRepositories($username: String!) {
    user(login: $username) {
      repositories(first: 100, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          name
          description
          stargazerCount
          forkCount
          primaryLanguage {
            name
          }
          updatedAt
          url
        }
      }
    }
  }
`;
