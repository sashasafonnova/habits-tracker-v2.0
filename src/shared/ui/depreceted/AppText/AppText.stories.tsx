import type { Meta, StoryObj } from '@storybook/react';

import { AppText, AppTextColors, AppTextSizes } from './AppText';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

const meta: Meta<typeof AppText> = {
   title: 'shared/AppText',
   component: AppText,
};

export default meta;
type Story = StoryObj<typeof AppText>;


export const ColorMain: Story = {
   render: () => <AppText color={AppTextColors.MAIN}>Lorem ipsum dolor</AppText>,
};

export const ColorMainDarkTheme: Story = {
   render: () => <AppText color={AppTextColors.MAIN}>Lorem ipsum dolor</AppText>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const ColorError: Story = {
   render: () => <AppText color={AppTextColors.ERROR}>Lorem ipsum dolor</AppText>,
};

export const ColorErrorDarkTheme: Story = {
   render: () => <AppText color={AppTextColors.ERROR}>Lorem ipsum dolor</AppText>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const ColorPrimary: Story = {
   render: () => <AppText color={AppTextColors.PRIMARY}>Lorem ipsum dolor</AppText>,
};

export const ColorPrimaryDarkTheme: Story = {
   render: () => <AppText color={AppTextColors.PRIMARY}>Lorem ipsum dolor</AppText>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const ColorDone: Story = {
   render: () => <AppText color={AppTextColors.DONE}>Lorem ipsum dolor</AppText>,
};

export const ColorDoneDarkTheme: Story = {
   render: () => <AppText color={AppTextColors.DONE}>Lorem ipsum dolor</AppText>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const SizeXS: Story = {
   render: () => <AppText textSize={AppTextSizes.XS}>Lorem ipsum dolor</AppText>,
};

export const SizeXSDarkTheme: Story = {
   render: () => <AppText textSize={AppTextSizes.XS}>Lorem ipsum dolor</ AppText>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const SizeS: Story = {
   render: () => <AppText textSize={AppTextSizes.S}>Lorem ipsum dolor</AppText>,
};

export const SizeSDarkTheme: Story = {
   render: () => <AppText textSize={AppTextSizes.S}>Lorem ipsum dolor</ AppText>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const SizeM: Story = {
   render: () => <AppText textSize={AppTextSizes.M}>Lorem ipsum dolor</AppText>,
};

export const SizeMDarkTheme: Story = {
   render: () => <AppText textSize={AppTextSizes.M}>Lorem ipsum dolor</AppText>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const ModsExtrabold: Story = {
   render: () => <AppText color={AppTextColors.MAIN} textSize={AppTextSizes.S} mods={{extraBold: true}}>Lorem ipsum dolor</AppText>,
};

export const ModsExtraboldDarkTheme: Story = {
   render: () => <AppText color={AppTextColors.MAIN} textSize={AppTextSizes.S} mods={{extraBold: true}}>Lorem ipsum dolor</AppText>,
   decorators: [ThemeDecorator(Theme.DARK)]
};