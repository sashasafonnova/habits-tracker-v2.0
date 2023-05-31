import type { Meta, StoryObj } from '@storybook/react';

import { PageLoader } from './PageLoader';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

const meta: Meta<typeof PageLoader> = {
   title: 'widgets/PageLoader',
   component: PageLoader,
};

export default meta;
type Story = StoryObj<typeof PageLoader>;


export const Main: Story = {
   render: () => <PageLoader />,
};

export const DarkTheme: Story = {
   render: () => <PageLoader />,
   decorators: [ThemeDecorator(Theme.DARK)]
};