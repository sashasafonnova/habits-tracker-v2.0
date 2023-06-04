import { DeepPartial } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';


export const StoreDecorator = (state: DeepPartial<StateSchema>) => {

   const StrDecorator: Decorator = (Story) => (
      <StoreProvider initialState={state as StateSchema}>
         <Story />
      </StoreProvider>
   );

   return StrDecorator;
};