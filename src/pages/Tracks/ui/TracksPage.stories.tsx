import type { Meta, StoryObj } from '@storybook/react';

import TracksPage from './TracksPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { tracksListReducer } from 'widgets/TracksList';


const meta: Meta<typeof TracksPage> = {
   title: 'pages/TracksPage',
   component: TracksPage,
};

const asyncReducers = {
   tracksList: tracksListReducer
};

const trackData = {
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
type Story = StoryObj<typeof TracksPage>;


export const Main: Story = {
   render: () => <TracksPage />,
   decorators: [StoreDecorator({
      tracksList: {
         isLoading: false,
         tracksList: [trackData, trackData],
      }
   }, asyncReducers)],
};

export const DarkTheme: Story = {
   render: () => <TracksPage />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
      tracksList: {
         isLoading: false,
         tracksList: [trackData, trackData],
      }
   }, asyncReducers)]
};