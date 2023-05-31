import type { Meta, StoryObj } from '@storybook/react';

import { NotFoundPage } from './NotFoundPage';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof NotFoundPage> = {
   title: 'pages/NotFoundPage',
   component: NotFoundPage,
};

export default meta;
type Story = StoryObj<typeof NotFoundPage>;


export const Main: Story = {
   render: () => <NotFoundPage />,
};

export const DarkTheme: Story = {
   render: () => <NotFoundPage />,
   decorators: [ThemeDecorator(Theme.DARK)]
};