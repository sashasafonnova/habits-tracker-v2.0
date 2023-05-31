import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

const meta: Meta<typeof Modal> = {
   title: 'shared/Modal',
   component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;


export const Main: Story = {
   render: () => <Modal>Any Content</Modal>,
};

export const DarkTheme: Story = {
   render: () => <Modal>Any Content</Modal>,
   decorators: [ThemeDecorator(Theme.DARK)]
};