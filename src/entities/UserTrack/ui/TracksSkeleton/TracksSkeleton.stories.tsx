import type { Meta, StoryObj } from '@storybook/react';

import { TracksSkeleton } from './TracksSkeleton';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

const meta: Meta<typeof TracksSkeleton> = {
   title: 'entities/TracksSkeleton',
   component: TracksSkeleton,
};


export default meta;
type Story = StoryObj<typeof TracksSkeleton>;


export const Main: Story = {
   render: () => <TracksSkeleton />
};

export const DarkTheme: Story = {
   render: () => <TracksSkeleton />,
   decorators: [ThemeDecorator(Theme.DARK)]
};