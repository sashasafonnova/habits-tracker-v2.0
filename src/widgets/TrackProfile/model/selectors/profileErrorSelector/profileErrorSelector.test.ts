import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { profileErrorSelector } from './profileErrorSelector';


describe('profileErrorSelector', () => {
   test('return value', () => {
      const state: DeepPartial<StateSchema> = {
         trackProfile: {
            error: 'Не удалось получить трек'
         }
      };
      expect(profileErrorSelector(state as StateSchema)).toBe('Не удалось получить трек');
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(profileErrorSelector(state as StateSchema)).toEqual('');
   });
});