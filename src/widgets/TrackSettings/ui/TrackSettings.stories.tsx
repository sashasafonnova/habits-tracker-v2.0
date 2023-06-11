import type { Meta, StoryObj } from '@storybook/react';

import { TrackSettings } from './TrackSettings';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { RemoveTrackStatuses } from 'features/RemoveTrack/model/types/RemoveTrackSchema';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof TrackSettings> = {
   title: 'widgets/TrackSettings',
   component: TrackSettings,
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


export const IsDeleting: Story = {
   render: () => <TrackSettings />,
   decorators: [StoreDecorator({
      removeTrack: {
         removeStatus: RemoveTrackStatuses.IS_DELETING
      },
   })]
};

export const IsDeletingDarkTheme: Story = {
   render: () => <TrackSettings />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
      removeTrack: {
         removeStatus: RemoveTrackStatuses.IS_DELETING
      },
   })]
};

export const Deleted: Story = {
   render: () => <TrackSettings />,
   decorators: [StoreDecorator({
      removeTrack: {
         removeStatus: RemoveTrackStatuses.DELETED
      },
   })]
};

export const DeletedDarkTheme: Story = {
   render: () => <TrackSettings />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
      removeTrack: {
         removeStatus: RemoveTrackStatuses.DELETED
      },
   })]
};


export const Error: Story = {
   render: () => <TrackSettings />,
   decorators: [StoreDecorator({
      removeTrack: {
         removeStatus: RemoveTrackStatuses.ERROR
      },
   })]
};

export const ErrorDarkTheme: Story = {
   render: () => <TrackSettings />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
      removeTrack: {
         removeStatus: RemoveTrackStatuses.ERROR
      },
   })]
};


export const Main: Story = {
   render: () => <TrackSettings />,
   decorators: [StoreDecorator({
      trackProfile: {
         profileData
      },
   })]
};

export const MainDarkTheme: Story = {
   render: () => <TrackSettings />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
      trackProfile: {
         profileData
      },
   })]
};