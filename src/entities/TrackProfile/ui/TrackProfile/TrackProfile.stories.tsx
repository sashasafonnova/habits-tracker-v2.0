import type { Meta, StoryObj } from '@storybook/react';

import { TrackProfile } from './TrackProfile';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { trackProfileReducer } from '../../model/slice/trackProfileSlice';


const meta: Meta<typeof TrackProfile> = {
   title: 'entities/TrackProfile',
   component: TrackProfile,
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
type Story = StoryObj<typeof TrackProfile>;


export const IsLoading: Story = {
   render: () => <TrackProfile/>,
   decorators: [StoreDecorator({
      trackProfile: {
         isLoading: true
      }
   }, asyncReducers)]
};

export const IsLoadingDarkTheme: Story = {
   render: () => <TrackProfile/>,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
      trackProfile: {
         isLoading: true,
      }
   }, asyncReducers)]
};

export const Error: Story = {
   render: () => <TrackProfile />,
   decorators: [StoreDecorator({
      trackProfile: {
         isLoading: false,
         error: 'Не удалось получить данные'
      }
   }, asyncReducers)]
};

export const ErrorDarkTheme: Story = {
   render: () => <TrackProfile />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
      trackProfile: {
         isLoading: false,
         error: 'Не удалось получить данные'
      }
   }, asyncReducers)]
};

export const ProfileCard: Story = {
   render: () => <TrackProfile />,
   decorators: [StoreDecorator({
      trackProfile: {
         profileData
      }
   }, asyncReducers)]
};

export const ProfileCardDarkTheme: Story = {
   render: () => <TrackProfile />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
      trackProfile: {
         profileData
      }
   }, asyncReducers)]
};

export const Deleted: Story = {
   render: () => <TrackProfile />,
   decorators: [StoreDecorator({
      trackProfile: {
         existStatus: 'deleted'
      }
   }, asyncReducers)]
};

export const DeletedDarkTheme: Story = {
   render: () => <TrackProfile />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
      trackProfile: {
         existStatus: 'deleted'
      }
   }, asyncReducers)]
};