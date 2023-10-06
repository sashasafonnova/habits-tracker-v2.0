import type { Meta, StoryObj } from '@storybook/react';

import { TracksListSkeleton } from './TracksListSkeleton';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

const meta: Meta<typeof TracksListSkeleton> = {
   title: 'widgets/TracksListSkeleton',
   component: TracksListSkeleton,
};


export default meta;
type Story = StoryObj<typeof TracksListSkeleton>;


export const Main: Story = {
   render: () => <TracksListSkeleton />
};

export const DarkTheme: Story = {
   render: () => <TracksListSkeleton />,
   decorators: [ThemeDecorator(Theme.DARK)]
};