import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { profileDataSelector } from './profileDataSelector';

const trackProfileData = {
   _id: '123',
   author: 'Alex',
   category: 'Семья',
   title: 'Выпивать 1 стакан воды в день',
   habitLength: 60,
   progress: 10,
   dateCreated: '10.10.2022',
   lastUpdated: '10.10.2022',
   status: 'new'
};

describe('profileDataSelector', () => {
   test('return value', () => {
      const state: DeepPartial<StateSchema> = {
         trackProfile: {
            profileData: trackProfileData
         }
      };
      expect(profileDataSelector(state as StateSchema)).toEqual({
         _id: '123',
         author: 'Alex',
         category: 'Семья',
         title: 'Выпивать 1 стакан воды в день',
         habitLength: 60,
         progress: 10,
         dateCreated: '10.10.2022',
         lastUpdated: '10.10.2022',
         status: 'new'
      });
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(profileDataSelector(state as StateSchema)).toEqual({});
   });
});