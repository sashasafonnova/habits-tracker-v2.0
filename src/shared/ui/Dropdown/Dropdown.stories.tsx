import type { Meta, StoryObj } from '@storybook/react';

import { Dropdown, DropdownVariant } from './Dropdown';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { categories } from 'entities/TrackCategory';

const meta: Meta<typeof Dropdown> = {
   title: 'shared/Dropdown',
   component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;


export const Background: Story = {
   render: () => <Dropdown list={categories} variant={DropdownVariant.BACKGROUND}/>,
};

export const BackgroundDarkTheme: Story = {
   render: () => <Dropdown list={categories} variant={DropdownVariant.BACKGROUND}/>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const Short: Story = {
   render: () => <Dropdown list={categories} variant={DropdownVariant.BACKGROUND} mods={{short: true}}/>,
};

export const ShortDarkTheme: Story = {
   render: () => <Dropdown list={categories} variant={DropdownVariant.BACKGROUND} mods={{ short: true }} />,
   decorators: [ThemeDecorator(Theme.DARK)]
};
