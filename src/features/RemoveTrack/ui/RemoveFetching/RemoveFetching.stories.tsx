import type { Meta, StoryObj } from '@storybook/react';
import { RemoveFetching } from './RemoveFetching';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';


const meta: Meta<typeof RemoveFetching> = {
   title: 'features/RemoveTrack/RemoveFetching',
   component: RemoveFetching,
};


export default meta;
type Story = StoryObj<typeof RemoveFetching>;


export const Main: Story = {
   render: () => <RemoveFetching />
};

export const DarkTheme: Story = {
   render: () => <RemoveFetching />,
   decorators: [ThemeDecorator(Theme.DARK)]
};