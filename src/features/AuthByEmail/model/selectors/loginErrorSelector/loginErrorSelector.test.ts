import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { loginErrorSelector } from './loginErrorSelector';

describe('loginErrorSelector', () => {
   test('return value', () => {
      const state: DeepPartial<StateSchema> = {
         login: {
            error: 'error',
         }
      };
      expect(loginErrorSelector(state as StateSchema)).toBe('error');
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(loginErrorSelector(state as StateSchema)).toEqual(undefined);
   });
});