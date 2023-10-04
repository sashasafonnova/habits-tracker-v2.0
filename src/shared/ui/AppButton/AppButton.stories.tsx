import type { Meta, StoryObj } from '@storybook/react';

import { AppButton } from './AppButton';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';


const meta: Meta<typeof AppButton> = {
   title: 'shared/AppButton',
   component: AppButton,
};

export default meta;
type Story = StoryObj<typeof AppButton>;


export const Background: Story = {
   render: () => <AppButton variant='background'>Test</AppButton>,
};

export const BackgroundDarkTheme: Story = {
   render: () => <AppButton variant='background'>Test</AppButton>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const Underline: Story = {
   render: () => <AppButton variant='underline'>Test</AppButton>,
};

export const UnderlineDarkTheme: Story = {
   render: () => <AppButton variant='underline'>Test</AppButton>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const Outline: Story = {
   render: () => <AppButton variant='outline'>Test</AppButton>,
};

export const OutlineDarkTheme: Story = {
   render: () => <AppButton variant='outline'>Test</AppButton>,
   decorators: [ThemeDecorator(Theme.DARK)]
};