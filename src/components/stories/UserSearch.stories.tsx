import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import UserSearch from '../UserSearch';

export default {
    title: 'Components/UserSearch',
    component: UserSearch,
} as Meta;

const Template: StoryFn<typeof UserSearch> = (args) => <UserSearch {...args} />;

export const Default = Template.bind({});
Default.args = {
    onSearch: (username: string) => alert(`Searching for: ${username}`),
};
