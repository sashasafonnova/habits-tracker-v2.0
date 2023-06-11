import type { Meta, StoryObj } from '@storybook/react';

import { GoBack } from './GoBack';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

const meta: Meta<typeof GoBack> = {
   title: 'features/GoBack',
   component: GoBack,
};

const styles = {
   width: 300,
   height: 300,
};

export default meta;
type Story = StoryObj<typeof GoBack>;


export const Main: Story = {
   render: () => <div style={styles}><GoBack /></div>
};

export const DarkTheme: Story = {
   render: () => <div style={styles}><GoBack /></div>,
   decorators: [ThemeDecorator(Theme.DARK)]
};