import type { Meta, StoryObj } from '@storybook/react';

import { Home } from './Home';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

const meta: Meta<typeof Home> = {
   title: 'widgets/Home',
   component: Home,
};

export default meta;
type Story = StoryObj<typeof Home>;


export const Main: Story = {
   render: () => <Home />,
};

export const DarkTheme: Story = {
   render: () => <Home />,
   decorators: [ThemeDecorator(Theme.DARK)]
};