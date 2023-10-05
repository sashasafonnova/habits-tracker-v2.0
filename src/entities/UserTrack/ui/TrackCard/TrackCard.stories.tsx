import type { Meta, StoryObj } from '@storybook/react';

import { TrackCard } from './TrackCard';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { UserTrack } from 'entities/UserTrack';


const meta: Meta<typeof TrackCard> = {
   title: 'entities/TrackCard',
   component: TrackCard,
};


const trackData: UserTrack = {
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
type Story = StoryObj<typeof TrackCard>;


export const Card: Story = {
   render: () => <TrackCard track={trackData} />
};

export const CardDarkTheme: Story = {
   render: () => <TrackCard track={trackData} />,
   decorators: [ThemeDecorator(Theme.DARK)]
};