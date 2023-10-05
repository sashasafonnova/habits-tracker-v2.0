import type { Meta, StoryObj } from '@storybook/react';
import listIcon from '../../assets/list-view-icon.svg';

import { AppIcon } from './AppIcon';

const meta: Meta<typeof AppIcon> = {
  title: 'shared/AppIcon',
  component: AppIcon,
};

export default meta;
type Story = StoryObj<typeof AppIcon>;

export const FillDark: Story = {
  render: () => <AppIcon width={30} height={30} color='fillDark' Svg={listIcon} />,
};

export const FillLight: Story = {
  render: () => <AppIcon width={30} height={30} color='fillLight' Svg={listIcon} />,
};

export const StrokeDark: Story = {
  render: () => <AppIcon width={30} height={30} color='strokeDark' Svg={listIcon} />,
};

export const StrokeLight: Story = {
  render: () => <AppIcon width={30} height={30} color='strokeLight' Svg={listIcon} />,
};
