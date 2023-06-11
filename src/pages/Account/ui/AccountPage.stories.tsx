import type { Meta, StoryObj } from '@storybook/react';

import AccountPage from './AccountPage';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { StoreDecorator } from 'shared/config/storybook/decorators/StoreDecorator';

const meta: Meta<typeof AccountPage> = {
   title: 'pages/AccountPage',
   component: AccountPage,
};


export default meta;
type Story = StoryObj<typeof AccountPage>;


export const Main: Story = {
   render: () => <AccountPage />,
   decorators: [StoreDecorator({
      user: {
         authData: {
            id: '111',
            firstName: 'Alex',
            email: 'test@com',
            token: '111'
         }
      }
   })]
};

export const DarkTheme: Story = {
   render: () => <AccountPage />,
   decorators: [ThemeDecorator(Theme.DARK), StoreDecorator({
      user: {
         authData: {
            id: '111',
            firstName: 'Alex',
            email: 'test@com',
            token: '111'
         }
      }
   })]
};