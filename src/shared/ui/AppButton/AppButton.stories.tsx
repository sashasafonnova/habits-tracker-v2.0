import type { Meta, StoryObj } from '@storybook/react';

import { AppButton, AppButtonVariant } from './AppButton';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';


const meta: Meta<typeof AppButton> = {
   title: 'shared/AppButton',
   component: AppButton,
};

export default meta;
type Story = StoryObj<typeof AppButton>;


export const ClearText: Story = {
   render: () => <AppButton variant={ AppButtonVariant.CLEAR_TEXT }>Test</AppButton>,
};

export const ClearTextDarkTheme: Story = {
   render: () => <AppButton variant={AppButtonVariant.CLEAR_TITLE}>Test</AppButton>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const ClearTitle: Story = {
   render: () => <AppButton variant={AppButtonVariant.CLEAR_TITLE}>Test</AppButton>,
};

export const ClearTitleDarkTheme: Story = {
   render: () => <AppButton variant={AppButtonVariant.CLEAR_TITLE}>Test</AppButton>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const ClearWhite: Story = {
   render: () => <AppButton variant={AppButtonVariant.CLEAR_WHITE}>Test</AppButton>,
};

export const ClearWhiteDarkTheme: Story = {
   render: () => <AppButton variant={AppButtonVariant.CLEAR_WHITE}>Test</AppButton>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const Background: Story = {
   render: () => <AppButton variant={AppButtonVariant.BACKGROUND}>Test</AppButton>,
};

export const BackgroundDarkTheme: Story = {
   render: () => <AppButton variant={AppButtonVariant.BACKGROUND}>Test</AppButton>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const Underline: Story = {
   render: () => <AppButton variant={AppButtonVariant.UNDERLINE}>Test</AppButton>,
};

export const UnderlineDarkTheme: Story = {
   render: () => <AppButton variant={AppButtonVariant.UNDERLINE}>Test</AppButton>,
   decorators: [ThemeDecorator(Theme.DARK)]
};