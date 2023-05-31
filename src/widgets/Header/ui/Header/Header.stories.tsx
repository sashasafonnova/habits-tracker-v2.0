import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Header> = {
   title: 'widgets/Header',
   component: Header,
};

export default meta;
type Story = StoryObj<typeof Header>;


export const Main: Story = {
   render: () => <Header />,
};

export const DarkTheme: Story = {
   render: () => <Header />,
   decorators: [ThemeDecorator(Theme.DARK)]
};