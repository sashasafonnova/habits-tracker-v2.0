import type { Meta, StoryObj } from '@storybook/react';

import RegistrationPage from './RegistrationPage';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof RegistrationPage> = {
   title: 'pages/RegistrationPage',
   component: RegistrationPage,
};

export default meta;
type Story = StoryObj<typeof RegistrationPage>;


export const Main: Story = {
   render: () => <RegistrationPage />,
};

export const DarkTheme: Story = {
   render: () => <RegistrationPage />,
   decorators: [ThemeDecorator(Theme.DARK)]
};