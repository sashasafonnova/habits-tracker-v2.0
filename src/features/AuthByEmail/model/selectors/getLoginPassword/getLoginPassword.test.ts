import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginPassword } from './getLoginPassword';
import { DeepPartial } from '@reduxjs/toolkit';

describe('getLoginPassword', () => {
   test('return value', () => {
      const state: DeepPartial<StateSchema> = {
         login: {
            password: '123123'
         }
      };
      expect(getLoginPassword(state as StateSchema)).toEqual('123123');
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getLoginPassword(state as StateSchema)).toEqual('');
   });
});