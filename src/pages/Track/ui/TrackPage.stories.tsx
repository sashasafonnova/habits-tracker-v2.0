import type { Meta, StoryObj } from '@storybook/react';

import TrackPage from './TrackPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { trackProfileReducer } from 'entities/TrackProfile';


const meta: Meta<typeof TrackPage> = {
   title: 'pages/TrackPage',
   component: TrackPage,
};

const asyncReducers = {
   trackProfile: trackProfileReducer
};

const profileData = {
   trackProfile: {
      profileData: {
         _id: '123',
         author: 'User',
         category: 'Семья',
         title: 'Купить молоко',
         habitLength: 60,
         progress: 45,
         dateCreated: '20.12.2022, 13.13.24',
         lastUpdated: '21.12.2022, 17.12.11',
         status: 'new'
      },
   }
};


export default meta;
type Story = StoryObj<typeof TrackPage>;


export const Main: Story = {
   render: () => <TrackPage />,
   decorators: [StoreDecorator(profileData, asyncReducers)],
};

export const DarkTheme: Story = {
   render: () => <TrackPage />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator(profileData, asyncReducers)] 
};