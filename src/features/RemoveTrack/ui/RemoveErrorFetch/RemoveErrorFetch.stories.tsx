import type { Meta, StoryObj } from '@storybook/react';
import { RemoveErrorFetch } from './RemoveErrorFetch';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';


const meta: Meta<typeof RemoveErrorFetch> = {
   title: 'features/RemoveTrack/RemoveErrorFetch',
   component: RemoveErrorFetch,
};


export default meta;
type Story = StoryObj<typeof RemoveErrorFetch>;


export const Main: Story = {
   render: () => <RemoveErrorFetch />
};

export const DarkTheme: Story = {
   render: () => <RemoveErrorFetch />,
   decorators: [ThemeDecorator(Theme.DARK)]
};