import type { Meta, StoryObj } from '@storybook/react';

import { TrackProgress } from './TrackProgress';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof TrackProgress> = {
   title: 'entities/TrackProgress',
   component: TrackProgress,
};

export default meta;
type Story = StoryObj<typeof TrackProgress>;


export const Main: Story = {
   render: () => <TrackProgress trackLength={30} progress={15}/>
};

export const DarkTheme: Story = {
   render: () => <TrackProgress trackLength={30} progress={15} />,
   decorators: [ThemeDecorator(Theme.DARK)]
};