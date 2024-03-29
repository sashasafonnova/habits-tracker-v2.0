import type { Meta, StoryObj } from '@storybook/react';

import CreateTrackPage from './CreateTrackPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { createTrackReducer } from 'features/CreateTrack';


const meta: Meta<typeof CreateTrackPage> = {
   title: 'pages/CreateTrackPage',
   component: CreateTrackPage,
};

const asyncReducers = {
   createTrack: createTrackReducer
};


export default meta;
type Story = StoryObj<typeof CreateTrackPage>;


export const Main: Story = {
   render: () => <CreateTrackPage />,
   decorators: [StoreDecorator({}, asyncReducers)],
};

export const DarkTheme: Story = {
   render: () => <CreateTrackPage />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({}, asyncReducers)]
};