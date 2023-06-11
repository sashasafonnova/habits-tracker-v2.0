import type { Meta, StoryObj } from '@storybook/react';

import {AppError} from './AppError';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

const meta: Meta<typeof AppError> = {
   title: 'widgets/AppError',
   component: AppError,
};

export default meta;
type Story = StoryObj<typeof AppError>;


export const Main: Story = {
   render: () => <AppError />
};

export const DarkTheme: Story = {
   render: () => <AppError />,
   decorators: [ThemeDecorator(Theme.DARK)]
};