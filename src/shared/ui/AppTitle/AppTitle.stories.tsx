import type { Meta, StoryObj } from '@storybook/react';

import { AppTitle, AppTitleColor, AppTitleVariant } from './AppTitle';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

const meta: Meta<typeof AppTitle> = {
   title: 'shared/AppTitle',
   component: AppTitle,
};

export default meta;
type Story = StoryObj<typeof AppTitle>;


export const Small: Story = {
   render: () => <AppTitle variant={AppTitleVariant.SMALL}>Page Title</AppTitle>,
};
 
export const SmallDarkTheme: Story = {
   render: () => <AppTitle variant={AppTitleVariant.SMALL}>Page Title</AppTitle>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const Standart: Story = {
   render: () => <AppTitle variant={AppTitleVariant.STANDART}>Page Title</AppTitle>,
};

export const StandartDarkTheme: Story = {
   render: () => <AppTitle variant={AppTitleVariant.STANDART}>Page Title</AppTitle>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const Big: Story = {
   render: () => <AppTitle variant={AppTitleVariant.BIG}>Page Title</AppTitle>,
};

export const BigDarkTheme: Story = {
   render: () => <AppTitle variant={AppTitleVariant.BIG}>Page Title</AppTitle>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const Large: Story = {
   render: () => <AppTitle variant={AppTitleVariant.LARGE}>Page Title</AppTitle>,
};

export const LargeDarkTheme: Story = {
   render: () => <AppTitle variant={AppTitleVariant.LARGE}>Page Title</AppTitle>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const Main: Story = {
   render: () => <AppTitle variant={AppTitleVariant.LARGE} color={AppTitleColor.MAIN}>Page Title</AppTitle>,
};

export const MainDarkTheme: Story = {
   render: () => <AppTitle variant={AppTitleVariant.LARGE} color={AppTitleColor.MAIN}>Page Title</AppTitle>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const Primary: Story = {
   render: () => <AppTitle variant={AppTitleVariant.LARGE} color={AppTitleColor.PRIMARY}>Page Title</AppTitle>,
};

export const PrimaryDarkTheme: Story = {
   render: () => <AppTitle variant={AppTitleVariant.LARGE} color={AppTitleColor.PRIMARY}>Page Title</AppTitle>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const White: Story = {
   render: () => <AppTitle variant={AppTitleVariant.LARGE} color={AppTitleColor.WHITE}>Page Title</AppTitle>,
};

export const WhiheDarkTheme: Story = {
   render: () => <AppTitle variant={AppTitleVariant.LARGE} color={AppTitleColor.WHITE}>Page Title</AppTitle>,
   decorators: [ThemeDecorator(Theme.DARK)]
};