import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { tracksListSelector } from './tracksListSelector';


describe('userTracksSelector', () => {
   test('return value', () => {
      
      const testTrack = {
         _id: '123',
         author: 'asdfg12345',
         category: 'Работа',
         title: 'Купить хлеб',
         habitLength: 60,
         progress: 30,
         dateCreated: '16.03.2023',
         lastUpdated: '16.03.2023',
         status: 'new',
      };

      const state: DeepPartial<StateSchema> = {
         tracksList: {
            tracksList: [
               testTrack,
               testTrack
            ],
            isLoading: false,
         }
      };
      expect(tracksListSelector(state as StateSchema)).toEqual([
         testTrack,
         testTrack
      ]);
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(tracksListSelector(state as StateSchema)).toEqual(null);
   });
});