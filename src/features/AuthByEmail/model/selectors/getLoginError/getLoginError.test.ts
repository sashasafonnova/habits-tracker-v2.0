import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginError } from './getLoginError';

describe('getLoginError', () => {
   test('return value', () => {
      const state: DeepPartial<StateSchema> = {
         login: {
            error: 'error',
         }
      };
      expect(getLoginError(state as StateSchema)).toEqual('error');
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getLoginError(state as StateSchema)).toEqual(undefined);
   });
});