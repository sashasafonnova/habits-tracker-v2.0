import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading', () => {
   test('return value', () => {
      const state: DeepPartial<StateSchema> = {
         login: {
            isLoading: true,
         }
      };
      expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
   });
});