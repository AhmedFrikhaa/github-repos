import React from 'react';
import { render, screen } from '@testing-library/react';
import RepoList from '../components/RepoList';
import '@testing-library/jest-dom';

const mockRepos = [
    {
        id: 1,
        name: 'Repo 1',
        description: 'Description 1',
        url: 'https://github.com/test-user/repo1',
        language: 'TypeScript',
        stargazerCount: 120,
        forkCount: 60,
        updatedAt: '2024-06-10T10:00:00Z',
    },
    {
        id: 2,
        name: 'Repo 2',
        description: 'Description 2',
        url: 'https://github.com/test-user/repo2',
        language: 'Python',
        stargazerCount: 80,
        forkCount: 30,
        updatedAt: '2024-06-11T11:00:00Z',
    },
];

describe('RepoList Component', () => {
    test('renders multiple RepoCards', () => {
        render(<RepoList repos={mockRepos} />);
        expect(screen.getByText('Repo 1')).toBeInTheDocument();
        expect(screen.getByText('Repo 2')).toBeInTheDocument();
    });

    test('shows a message when no repositories are available', () => {
        render(<RepoList repos={[]} />);
        expect(screen.getByText('No repositories found.')).toBeInTheDocument();
    });
});
