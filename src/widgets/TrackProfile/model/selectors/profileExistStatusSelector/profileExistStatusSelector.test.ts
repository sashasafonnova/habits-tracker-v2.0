import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { profileExistStatusSelector } from './profileExistStatusSelector';


describe('profileExistStatusSelector', () => {
   test('return value', () => {
      const state: DeepPartial<StateSchema> = {
         trackProfile: {
            profileData: null,
            isLoading: false,
            existStatus: 'deleted'
         }
      };
      expect(profileExistStatusSelector(state as StateSchema)).toBe('deleted');
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(profileExistStatusSelector(state as StateSchema)).toEqual('exist');
   });
});