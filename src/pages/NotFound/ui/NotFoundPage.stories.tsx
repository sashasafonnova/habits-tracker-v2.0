import type { Meta, StoryObj } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof NotFoundPage> = {
   title: 'pages/NotFoundPage',
   component: NotFoundPage,
};

const authData = {
   id: '123',
   firstName: 'Alex',
   email: 'alex@test.com',
   token: '111'
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;


export const Main: Story = {
   render: () => <NotFoundPage />,
   decorators: [StoreDecorator({user: {authData}})]
};

export const DarkTheme: Story = {
   render: () => <NotFoundPage />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData } })]
};