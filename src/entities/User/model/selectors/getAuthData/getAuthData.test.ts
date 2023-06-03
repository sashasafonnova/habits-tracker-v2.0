import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { getAuthData } from './getAuthData';


describe('getAuthData', () => {
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
      expect(getAuthData(state as StateSchema)).toEqual({
         id: '123',
         firstName: 'Alex',
         email: 'alex@test.com',
         token: '12312345'
      });
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(getAuthData(state as StateSchema)).toEqual(undefined);
   });
});