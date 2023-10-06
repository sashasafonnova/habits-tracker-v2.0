import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { tracksIsLoadingSelector } from './tracksIsLoadingSelector';


describe('tracksIsLoadingSelector', () => {
   test('return value', () => {
      const state: DeepPartial<StateSchema> = {
         tracksList: {
            isLoading: true
         }
      };
      expect(tracksIsLoadingSelector(state as StateSchema)).toBe(true);
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(tracksIsLoadingSelector(state as StateSchema)).toEqual(false);
   });
});