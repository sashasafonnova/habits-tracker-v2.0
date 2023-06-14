import type { Meta, StoryObj } from '@storybook/react';

import { Menu } from './Menu';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';


const meta: Meta<typeof Menu> = {
   title: 'widgets/Menu',
   component: Menu,
};

const authData = {
   id: '123',
   firstName: 'Alex',
   email: 'alex@test.com',
   token: '111'
};


export default meta;
type Story = StoryObj<typeof Menu>;


export const Main: Story = {
   render: () => <Menu closeMenu={() => {}}/>,
   decorators: [StoreDecorator({ user: { authData } })]
};

export const DarkTheme: Story = {
   render: () => <Menu closeMenu={() => {}} />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({ user: { authData } })]
};