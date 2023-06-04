import type { Meta, StoryObj } from '@storybook/react';

import { TrackList } from './TrackList';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

const meta: Meta<typeof TrackList> = {
   title: 'widgets/TrackList',
   component: TrackList,
};

export default meta;
type Story = StoryObj<typeof TrackList>;


export const Main: Story = {
   render: () => <TrackList/>
};

export const MainDarkTheme: Story = {
   render: () => <TrackList />,
   decorators: [ThemeDecorator(Theme.DARK)]
};