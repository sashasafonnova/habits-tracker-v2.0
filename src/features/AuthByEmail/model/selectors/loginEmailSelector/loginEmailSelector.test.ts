import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { loginEmailSelector } from './loginEmailSelector';
import { DeepPartial } from '@reduxjs/toolkit';


describe('loginEmailSelector', () => {
   test('return value', () => {
      const state: DeepPartial<StateSchema> = {
         login: {
            email: 'test@test.com',
            password: '',
            isLoading: false,
            validateErrors: {}
         }
      };
      expect(loginEmailSelector(state as StateSchema)).toEqual('test@test.com');
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(loginEmailSelector(state as StateSchema)).toEqual('');
   });
});