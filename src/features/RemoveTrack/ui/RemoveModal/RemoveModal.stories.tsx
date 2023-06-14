import type { Meta, StoryObj } from '@storybook/react';

import { RemoveModal } from './RemoveModal';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { RemoveTrackStatuses } from '../../model/types/RemoveTrackSchema';
import { removeTrackReducer } from '../../model/slice/removeTrackSlice';

const meta: Meta<typeof RemoveModal> = {
   title: 'features/RemoveTrack/RemoveModal',
   component: RemoveModal,
};

const asyncReducers = {
   removeTrack: removeTrackReducer
};


export default meta;
type Story = StoryObj<typeof RemoveModal>;


export const Main: Story = {
   render: () => <RemoveModal onClose={() => { ''}} />,
   decorators: [StoreDecorator({ removeTrack: { removeStatus: RemoveTrackStatuses.NOT_ACTIVE } }, asyncReducers)]
};

export const DarkTheme: Story = {
   render: () => <RemoveModal onClose={() => { ''}} />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ removeTrack: { removeStatus: RemoveTrackStatuses.NOT_ACTIVE } }, asyncReducers)]
};

export const IsDeleting: Story = {
   render: () => <RemoveModal onClose={() => {''}} />,
   decorators: [StoreDecorator({ removeTrack: { removeStatus: RemoveTrackStatuses.IS_DELETING } }, asyncReducers)]
};

export const IsDeletingDarkTheme: Story = {
   render: () => <RemoveModal onClose={() => { '' }} />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ removeTrack: { removeStatus: RemoveTrackStatuses.IS_DELETING } }, asyncReducers)]
};

export const Error: Story = {
   render: () => <RemoveModal onClose={() => {''}} />,
   decorators: [StoreDecorator({ removeTrack: { removeStatus: RemoveTrackStatuses.ERROR } }, asyncReducers)]
};

export const ErrorDarkTheme: Story = {
   render: () => <RemoveModal onClose={() => {''}} />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ removeTrack: { removeStatus: RemoveTrackStatuses.ERROR } }, asyncReducers)]
};