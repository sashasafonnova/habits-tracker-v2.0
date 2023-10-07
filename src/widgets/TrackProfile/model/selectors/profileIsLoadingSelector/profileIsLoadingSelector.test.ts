import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { profileIsLoadingSelector } from './profileIsLoadingSelector';


describe('profileIsLoadingSelector', () => {
   test('return value', () => {
      const state: DeepPartial<StateSchema> = {
         trackProfile: {
            isLoading: true
         }
      };
      expect(profileIsLoadingSelector(state as StateSchema)).toBe(true);
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(profileIsLoadingSelector(state as StateSchema)).toEqual(false);
   });
});