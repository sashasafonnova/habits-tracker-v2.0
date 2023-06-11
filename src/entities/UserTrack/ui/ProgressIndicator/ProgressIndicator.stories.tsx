import type { Meta, StoryObj } from '@storybook/react';

import { ProgressIndicator } from './ProgressIndicator';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ProgressIndicator> = {
   title: 'entities/ProgressIndicator',
   component: ProgressIndicator,
};

const styles = {
   width: 300,
   height: 300,
};

export default meta;
type Story = StoryObj<typeof ProgressIndicator>;


export const Main: Story = {
   render: () => (    
      <div style={styles}>
         <ProgressIndicator trackLength={60} progress={24} />
      </div>
   ),
};

export const DarkTheme: Story = {
   render: () => (
      <div style={styles}>
         <ProgressIndicator trackLength={60} progress={24} />
      </div>
   ),
   decorators: [ThemeDecorator(Theme.DARK)]
};