import type { Meta, StoryObj } from '@storybook/react';

import { FetchLoader } from './FetchLoader';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';

const meta: Meta<typeof FetchLoader> = {
   title: 'shared/FetchLoader',
   component: FetchLoader,
};

export default meta;
type Story = StoryObj<typeof FetchLoader>;


export const OnlyLoader: Story = {
   render: () => <FetchLoader loader={true}/>,
};

export const OnlyLoaderDarkTheme: Story = {
   render: () => <FetchLoader loader={true} />,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const LoanderAndTitle: Story = {
   render: () => <FetchLoader loader={true} title={'Идет удаление трека...'}/>,
};

export const LoanderAndTitleDarkTheme: Story = {
   render: () => <FetchLoader loader={true} title={'Идет удаление трека...'} />,
   decorators: [ThemeDecorator(Theme.DARK)]
};

export const TitleAndBtn: Story = {
   render: () => <FetchLoader title={'Трек успешно удален'} action={'Вернуться к списку'}/>,
};

export const TitleAndBtnDarkTheme: Story = {
   render: () => <FetchLoader title={'Трек успешно удален'} action={'Вернуться к списку'} />,
   decorators: [ThemeDecorator(Theme.DARK)]
};