import type { Meta, StoryObj } from '@storybook/react';

import { RemoveForm } from './RemoveForm';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';
import { RemoveTrackStatuses } from '../../model/types/RemoveTrackSchema';


const meta: Meta<typeof RemoveForm> = {
   title: 'features/RemoveTrack/RemoveForm',
   component: RemoveForm,
};

const removeTrackState = {removeTrack: {removeStatus: RemoveTrackStatuses.NOT_ACTIVE}};


export default meta;
type Story = StoryObj<typeof RemoveForm>;


export const Main: Story = {
   render: () => <RemoveForm onClose={() => {''}}/>,
   decorators: [StoreDecorator(removeTrackState)]
};

export const DarkTheme: Story = {
   render: () => <RemoveForm onClose={() => {''}} />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator(removeTrackState)]
};