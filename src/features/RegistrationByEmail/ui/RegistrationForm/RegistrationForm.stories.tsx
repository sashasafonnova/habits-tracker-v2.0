import type { Meta, StoryObj } from '@storybook/react';

import { RegistrationForm } from './RegistrationForm';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

const meta: Meta<typeof RegistrationForm> = {
   title: 'features/RegistrationForm',
   component: RegistrationForm,
};

export default meta;
type Story = StoryObj<typeof RegistrationForm>;


export const Main: Story = {
   render: () => <RegistrationForm />,
};

export const DarkTheme: Story = {
   render: () => <RegistrationForm />,
   decorators: [ThemeDecorator(Theme.DARK)]
};