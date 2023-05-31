import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof Footer> = {
   title: 'widgets/Footer',
   component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;


export const Main: Story = {
   render: () => <Footer />,
};

export const DarkTheme: Story = {
   render: () => <Footer />,
   decorators: [ThemeDecorator(Theme.DARK)]
};