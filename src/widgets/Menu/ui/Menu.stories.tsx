import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from './Menu';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof Menu> = {
   title: 'widgets/Menu',
   component: Menu,
};

export default meta;
type Story = StoryObj<typeof Menu>;


export const Main: Story = {
   render: () => <Menu closeMenu={() => {}}/>,
};

export const DarkTheme: Story = {
   render: () => <Menu closeMenu={() => {}} />,
};