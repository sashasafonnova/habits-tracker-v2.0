import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { getLoginEmail } from './getLoginEmail';
import { DeepPartial } from '@reduxjs/toolkit';


describe('getLoginEmail', () => {
   test('return value', () => {
      const state: DeepPartial<StateSchema> = {
         login: {
            email: 'test@test.com'
         }
      };
      expect(getLoginEmail(state as StateSchema)).toEqual('test@test.com');
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getLoginEmail(state as StateSchema)).toEqual('');
   });
});