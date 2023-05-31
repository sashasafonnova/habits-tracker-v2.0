import type { Meta, StoryObj } from '@storybook/react';

import { Loader } from './Loader';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Loader> = {
   title: 'shared/Loader',
   component: Loader,
};

export default meta;
type Story = StoryObj<typeof Loader>;


export const Main: Story = {
   render: () => <Loader/>,
};

export const DarkTheme: Story = {
   render: () => <Loader />,
   decorators: [ThemeDecorator(Theme.DARK)]
};