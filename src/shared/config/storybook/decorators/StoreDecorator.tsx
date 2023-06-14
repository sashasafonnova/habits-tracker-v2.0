/* eslint-disable react/display-name */
import { DeepPartial } from '@reduxjs/toolkit';
import { Decorator } from '@storybook/react';
import { StoreProvider } from 'app/providers/StoreProvider';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { ReducersList } from 'shared/lib/hooks/useStateCreator';


export const StoreDecorator = (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList): Decorator => (Story) => (

   <StoreProvider initialState={state as StateSchema} asyncReducers={asyncReducers}>
      <Story />
   </StoreProvider>
);