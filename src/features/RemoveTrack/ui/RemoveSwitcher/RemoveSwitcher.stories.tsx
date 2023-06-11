import type { Meta, StoryObj } from '@storybook/react';
import { RemoveSwitcher } from './RemoveSwitcher';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';


const meta: Meta<typeof RemoveSwitcher> = {
   title: 'features/RemoveSwitcher',
   component: RemoveSwitcher,
};


export default meta;
type Story = StoryObj<typeof RemoveSwitcher>;


export const Main: Story = {
   render: () => <RemoveSwitcher />
};

export const DarkTheme: Story = {
   render: () => <RemoveSwitcher/>,
   decorators: [ThemeDecorator(Theme.DARK)]
};