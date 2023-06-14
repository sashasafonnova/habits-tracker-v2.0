import type { Meta, StoryObj } from '@storybook/react';

import { TrackList } from './TrackList';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { UserTrack, userTrackReducer } from 'entities/UserTrack';


const meta: Meta<typeof TrackList> = {
   title: 'entities/TrackList',
   component: TrackList,
};

const asyncReducers = {
   userTrack: userTrackReducer
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
type Story = StoryObj<typeof TrackList>;


export const IsLoading: Story = {
   render: () => <TrackList/>,
   decorators: [StoreDecorator({
      userTrack: {
         isLoading: true
      }
   }, asyncReducers)]
};

export const IsLoadingDarkTheme: Story = {
   render: () => <TrackList/>,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
      userTrack: {
         isLoading: true
      }
   }, asyncReducers)]
};

export const Error: Story = {
   render: () => <TrackList />,
   decorators: [StoreDecorator({
      userTrack: {
         isLoading: false,
         error: 'Не удалось получить треки'
      }
   }, asyncReducers)]
};

export const ErrorDarkTheme: Story = {
   render: () => <TrackList />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
      userTrack: {
         isLoading: false,
         error: 'Не удалось получить треки'
      }
   }, asyncReducers)]
};

export const List: Story = {
   render: () => <TrackList />,
   decorators: [StoreDecorator({
      userTrack: {
         userTrackData: [trackData, trackData, trackData],
         isLoading: false
      }
   }, asyncReducers)]
};

export const ListDarkTheme: Story = {
   render: () => <TrackList />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
      userTrack: {
         userTrackData: [trackData, trackData, trackData],
         isLoading: false
      }
   }, asyncReducers)]
};