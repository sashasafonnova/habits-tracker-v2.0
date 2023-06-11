import type { Meta, StoryObj } from '@storybook/react';

import { TrackCategory } from './TrackCategory';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof TrackCategory> = {
   title: 'entities/TrackCategory',
   component: TrackCategory,
};

export default meta;
type Story = StoryObj<typeof TrackCategory>;


export const Main: Story = {
   render: () => <TrackCategory category={'Семья'}/>,
};

export const DarkTheme: Story = {
   render: () => <TrackCategory category={'Семья'}/>,
   decorators: [ThemeDecorator(Theme.DARK)]
};