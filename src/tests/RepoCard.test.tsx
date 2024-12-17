import React from 'react';
import { render, screen } from '@testing-library/react';
import RepoCard from '../components/RepoCard';
import '@testing-library/jest-dom';

const mockRepo = {
    name: 'Test Repo',
    description: 'This is a test repository',
    url: 'https://github.com/test-user/test-repo',
    language: 'JavaScript',
    stargazerCount: 100,
    forkCount: 50,
    updatedAt: '2024-06-12T12:00:00Z',
};

describe('RepoCard Component', () => {
    test('renders repository name and description', () => {
        render(<RepoCard {...mockRepo} />);
        expect(screen.getByText(mockRepo.name)).toBeInTheDocument();
        expect(screen.getByText(mockRepo.description)).toBeInTheDocument();
    });

    test('renders repository metadata', () => {
        render(<RepoCard {...mockRepo} />);
        expect(screen.getByText('JavaScript')).toBeInTheDocument();
        expect(screen.getByText('100')).toBeInTheDocument();
        expect(screen.getByText('50')).toBeInTheDocument();
    });

    test('contains valid link to repository', () => {
        render(<RepoCard {...mockRepo} />);
        const link = screen.getByRole('link', { name: mockRepo.name });
        expect(link).toHaveAttribute('href', mockRepo.url);
    });
});
