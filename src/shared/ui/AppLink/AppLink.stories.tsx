import type { Meta, StoryObj } from '@storybook/react';

import { AppLink, AppLinkVariant } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
   title: 'shared/AppLink',
   component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;


export const Clear: Story = {
   render: () => <AppLink variant={AppLinkVariant.CLEAR} to={'/'}>Ссылка</AppLink>,
};

export const ClearDark: Story = {
   render: () => <AppLink variant={AppLinkVariant.CLEAR} to={'/'}>Ссылка</AppLink>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const Button: Story = {
   render: () => <AppLink variant={AppLinkVariant.BUTTON} to='/'>Ссылка</AppLink>,
};

export const ButtonDarkTheme: Story = {
   render: () => <AppLink variant={AppLinkVariant.BUTTON} to={'/'}>Ссылка</AppLink>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const Underline: Story = {
   render: () => <AppLink variant={AppLinkVariant.UNDERLINE} to='/'>Ссылка</AppLink>,
};

export const UnderlineDark: Story = {
   render: () => <AppLink variant={AppLinkVariant.UNDERLINE} to={'/'}>Ссылка</AppLink>,
   decorators: [ThemeDecorator(Theme.DARK)]
};


