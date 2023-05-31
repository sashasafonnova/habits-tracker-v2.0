import type { Meta, StoryObj } from '@storybook/react';

import LoginPage from './LoginPage';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof LoginPage> = {
   title: 'pages/LoginPage',
   component: LoginPage,
};

export default meta;
type Story = StoryObj<typeof LoginPage>;


export const Main: Story = {
   render: () => <LoginPage />,
};

export const DarkTheme: Story = {
   render: () => <LoginPage />,
   decorators: [ThemeDecorator(Theme.DARK)]
};