import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { authDataSelector } from './authDataSelector';


describe('authDataSelector', () => {
   test('return value', () => {
      const state: DeepPartial<StateSchema> = {
         user: {
            authData: {
               id: '123',
               firstName: 'Alex',
               email: 'alex@test.com',
               token: '12312345'
            }
         }
      };
      expect(authDataSelector(state as StateSchema)).toEqual({
         id: '123',
         firstName: 'Alex',
         email: 'alex@test.com',
         token: '12312345'
      });
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(authDataSelector(state as StateSchema)).toEqual(undefined);
   });
});