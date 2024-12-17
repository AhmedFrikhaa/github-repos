import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import RepoMetadata from '../RepoMetadata';

export default {
    title: 'Components/RepoMetadata',
    component: RepoMetadata,
} as Meta<typeof RepoMetadata>;

const Template: StoryFn<typeof RepoMetadata> = (args) => <RepoMetadata {...args} />;

export const Default = Template.bind({});
Default.args = {
    language: 'TypeScript',
    stars: 1500,
    forks: 200,
    updatedAt: '2024-06-12T12:00:00Z',
};
