import type { Meta, StoryObj } from '@storybook/react';

import { AppLink } from './AppLink';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof AppLink> = {
   title: 'shared/AppLink',
   component: AppLink,
};

export default meta;
type Story = StoryObj<typeof AppLink>;


export const Clear: Story = {
   render: () => <AppLink variant='clear' to={'/'}>Ссылка</AppLink>,
};

export const ClearDark: Story = {
   render: () => <AppLink variant='clear' to={'/'}>Ссылка</AppLink>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const Button: Story = {
   render: () => <AppLink variant='button' to='/'>Ссылка</AppLink>,
};

export const ButtonDarkTheme: Story = {
   render: () => <AppLink variant='button' to={'/'}>Ссылка</AppLink>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const Underline: Story = {
   render: () => <AppLink variant='underline' to='/'>Ссылка</AppLink>,
};

export const UnderlineDarkTheme: Story = {
   render: () => <AppLink variant='underline' to={'/'}>Ссылка</AppLink>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const White: Story = {
   render: () => <AppLink variant='white' to='/'>Ссылка</AppLink>,
};

export const WhiteDarkTheme: Story = {
   render: () => <AppLink variant='white' to={'/'}>Ссылка</AppLink>,
   decorators: [ThemeDecorator(Theme.DARK)]
};


