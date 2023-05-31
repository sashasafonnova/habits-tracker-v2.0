import type { Meta, StoryObj } from '@storybook/react';

import { HomePage } from './HomePage';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof HomePage> = {
   title: 'pages/HomePage',
   component: HomePage,
};

export default meta;
type Story = StoryObj<typeof HomePage>;


export const Main: Story = {
   render: () => <HomePage />,
};

export const DarkTheme: Story = {
   render: () => <HomePage />,
   decorators: [ThemeDecorator(Theme.DARK)]
};