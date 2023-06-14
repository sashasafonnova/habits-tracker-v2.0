import type { Meta, StoryObj } from '@storybook/react';

import LoginPage from './LoginPage';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { loginReducer } from 'features/AuthByEmail';

const meta: Meta<typeof LoginPage> = {
   title: 'pages/LoginPage',
   component: LoginPage,
};

const asyncReducers = {
   login: loginReducer
};

export default meta;
type Story = StoryObj<typeof LoginPage>;


export const Main: Story = {
   render: () => <LoginPage />,
   decorators: [StoreDecorator({})]
};

export const DarkTheme: Story = {
   render: () => <LoginPage />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({}, asyncReducers)]
};