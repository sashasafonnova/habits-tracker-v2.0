import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { loginIsLoadingSelector } from './loginIsLoadingSelector';

describe('loginIsLoadingSelector', () => {
   test('return value', () => {
      const state: DeepPartial<StateSchema> = {
         login: {
            email: '',
            password: '',
            isLoading: true,
            validateErrors: {}
         }
      };
      expect(loginIsLoadingSelector(state as StateSchema)).toEqual(true);
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(loginIsLoadingSelector(state as StateSchema)).toEqual(false);
   });
});