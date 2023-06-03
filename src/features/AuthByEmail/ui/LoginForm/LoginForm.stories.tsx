import type { Meta, StoryObj } from '@storybook/react';

import { LoginForm } from './LoginForm';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof LoginForm> = {
   title: 'features/LoginForm',
   component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;


export const Main: Story = {
   render: () => <LoginForm/>,
   decorators: [StoreDecorator({})]
};

export const DarkTheme: Story = {
   render: () => <LoginForm />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({})]
};