import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

const meta: Meta<typeof ThemeSwitcher> = {
   title: 'features/ThemeSwitcher',
   component: ThemeSwitcher,
};

const style = {
   background: 'var(--footer-color)',
};


export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;


export const Main: Story = {
   render: () => <div style={style}><ThemeSwitcher /></div>,
};

export const DarkTheme: Story = {
   render: () => <ThemeSwitcher />,
   decorators: [ThemeDecorator(Theme.DARK)]
};