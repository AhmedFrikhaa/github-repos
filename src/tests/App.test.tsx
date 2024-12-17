import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from '../App';
import { GET_REPOSITORIES } from '../services/queries';

const mockResponse = [
  {
    request: {
      query: GET_REPOSITORIES,
      variables: { username: 'octocat' },
    },
    result: {
      data: {
        user: {
          repositories: {
            nodes: [
              {
                id: '1',
                name: 'Test Repo',
                description: 'Test description',
                url: 'https://github.com/octocat/test-repo',
                stargazerCount: 10,
                forkCount: 5,
                primaryLanguage: { name: 'JavaScript' },
                updatedAt: '2024-06-12T12:00:00Z',
              },
            ],
          },
        },
      },
    },
  },
];

describe('App Component', () => {
  test('renders without crashing and fetches repositories', async () => {
    render(
      <MockedProvider mocks={mockResponse} addTypename={false}>
        <App />
      </MockedProvider>
    );

  });
});
