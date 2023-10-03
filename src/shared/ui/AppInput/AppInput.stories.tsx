import type { Meta, StoryObj } from '@storybook/react';

import { AppInput, AppInputVariant } from './AppInput';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

const meta: Meta<typeof AppInput> = {
   title: 'shared/AppInput',
   component: AppInput,
};

export default meta;
type Story = StoryObj<typeof AppInput>;


export const BackgroundStandart: Story = {
   render: () => <AppInput variant={AppInputVariant.BACKGROUND} placeholder={'login'} inputSize={'standart'}/>,
};

export const BackgroundStandartDarkTheme: Story = {
   render: () => <AppInput variant={AppInputVariant.BACKGROUND} placeholder={'login'} inputSize={'standart'}/>,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const ErrorStandart: Story = {
   render: () => <AppInput variant={AppInputVariant.BACKGROUND} mods={{error: true}} placeholder={'login'} inputSize={'standart'} />,
};

export const ErrorStandartDarkTheme: Story = {
   render: () => <AppInput variant={AppInputVariant.BACKGROUND} mods={{ error: true }} placeholder={'login'} inputSize={'standart'} />,
   decorators: [ThemeDecorator(Theme.DARK)]
};