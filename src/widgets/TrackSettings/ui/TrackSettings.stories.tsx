import type { Meta, StoryObj } from '@storybook/react';

import { TrackSettings } from './TrackSettings';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { trackProfileReducer } from 'entities/TrackProfile';

const meta: Meta<typeof TrackSettings> = {
   title: 'widgets/TrackSettings',
   component: TrackSettings,
};

const asyncReducers = {
   trackProfile: trackProfileReducer
};

const profileData = {
   _id: '123',
   author: 'User',
   category: 'Семья',
   title: 'Купить молоко',
   habitLength: 60,
   progress: 45,
   dateCreated: '20.12.2022, 13.13.24',
   lastUpdated: '21.12.2022, 17.12.11',
   status: 'new'
};

export default meta;
type Story = StoryObj<typeof TrackSettings>;


export const Main: Story = {
   render: () => <TrackSettings />,
   decorators: [StoreDecorator({
      trackProfile: {
         profileData
      },
   }, asyncReducers)]
};

export const MainDarkTheme: Story = {
   render: () => <TrackSettings />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
      trackProfile: {
         profileData
      },
   }, asyncReducers)]
};