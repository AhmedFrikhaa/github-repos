import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RepoList from '../RepoList';

export default {
    title: 'Components/RepoList',
    component: RepoList,
} as Meta<typeof RepoList>;

const Template: StoryFn<typeof RepoList> = (args) => <RepoList {...args} />;

export const Default = Template.bind({});
Default.args = {
    repos: [
        {
            id: 1,
            name: 'react',
            description: 'A declarative, efficient, and flexible JavaScript library for building user interfaces.',
            url: 'https://github.com/facebook/react',
            language: 'JavaScript',
            stargazerCount: 200000,
            forkCount: 35000,
            updatedAt: '2024-06-12T12:00:00Z',
        },
        {
            id: 2,
            name: 'typescript',
            description: 'TypeScript is a superset of JavaScript that compiles to clean JavaScript output.',
            url: 'https://github.com/microsoft/TypeScript',
            language: 'TypeScript',
            stargazerCount: 85000,
            forkCount: 12000,
            updatedAt: '2024-05-30T12:00:00Z',
        },
        {
            id: 3,
            name: 'storybook',
            description: 'Storybook is a frontend workshop for building UI components and pages in isolation.',
            url: 'https://github.com/storybookjs/storybook',
            language: 'JavaScript',
            stargazerCount: 73000,
            forkCount: 8700,
            updatedAt: '2024-06-01T12:00:00Z',
        },
    ],
};
