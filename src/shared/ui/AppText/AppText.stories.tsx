import type { Meta, StoryObj } from '@storybook/react';

import { AppText } from './AppText';

const meta: Meta<typeof AppText> = {
  title: 'shared/AppText',
  component: AppText,
  args: {
    children: 'Пример текста',
  },
};

export default meta;
type Story = StoryObj<typeof AppText>;

export const SizeXS: Story = {
  args: {
    size: 'xs',
  },
};

export const SizeS: Story = {
  args: {
    size: 's',
  },
};

export const SizeM: Story = {
  args: {
    size: 'm',
  },
};

export const SizeL: Story = {
  args: {
    size: 'l',
  },
};

export const SizeXL: Story = {
  args: {
    size: 'xl',
  },
};

export const SizeXXL: Story = {
  args: {
    size: 'xxl',
  },
};

export const SizeXXXL: Story = {
  args: {
    size: 'xxxl',
  },
};

export const ColorMain: Story = {
  args: {
    color: 'main',
  },
};

export const ColorInverted: Story = {
  render: () => <div style={{ backgroundColor: '#000', height: 40 }}><AppText color='inverted'>Пример текста</AppText></div>,
};

export const ColorError: Story = {
  args: {
    color: 'error',
  },
};

export const ColorPrimary: Story = {
  args: {
    color: 'primary',
  },
};

export const WeightLight: Story = {
  args: {
    weight: 'light',
  },
};

export const WeightMedium: Story = {
  args: {
    weight: 'medium',
  },
};

export const WeightBold: Story = {
  args: {
    weight: 'bold',
  },
};

export const NoWrapAndDots: Story = {
  render: () => <div style={{ width: 180, height: 40, overflow: 'hidden' }}><AppText noWrap dots>Часть текста скрывается</AppText></div>,
};
