import type { Meta, StoryObj } from '@storybook/react';

import { TrackProfileSkeleton } from './TrackProfileSkeleton';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof TrackProfileSkeleton> = {
   title: 'entities/TrackProfileSkeleton',
   component: TrackProfileSkeleton,
};

export default meta;
type Story = StoryObj<typeof TrackProfileSkeleton>;


export const SkeletonMain: Story = {
   render: () => <TrackProfileSkeleton />
};

export const SkeletonDarkTheme: Story = {
   render: () => <TrackProfileSkeleton />,
   decorators: [ThemeDecorator(Theme.DARK)]
};