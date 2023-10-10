import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { loginPasswordSelector } from './loginPasswordSelector';
import { DeepPartial } from '@reduxjs/toolkit';

describe('loginPasswordSelector', () => {
   test('return value', () => {
      const state: DeepPartial<StateSchema> = {
         login: {
            email: '',
            password: '123123',
            isLoading: false,
            validateErrors: {}
         }
      };
      expect(loginPasswordSelector(state as StateSchema)).toBe('123123');
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(loginPasswordSelector(state as StateSchema)).toEqual('');
   });
});