import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { UserTrack } from 'entities/UserTrack';
import { trackProfileActions } from 'widgets/TrackProfile';
import { tracksListActions } from 'widgets/TracksList';

interface ProgressUpdateProps {
   id: string;
   progress: number;
   status?: string;
   lastUpdated: string;
}

export const fetchProgressUpdate = createAsyncThunk <UserTrack, ProgressUpdateProps, ThunkConfig<string>>(
   'updateTrack/fetchProgressUpdate',
   async ({id, ...props}, thunkAPI) => {

      try {         
         const response = await thunkAPI.extra.api.patch(`/habits/${id}`, props);

         if (!response.data) {
            throw new Error();
         }

         thunkAPI.dispatch(tracksListActions.updateTrack(response.data));
         thunkAPI.dispatch(trackProfileActions.setProfileData(response.data));

         return response.data;
      } catch (e) {

         return thunkAPI.rejectWithValue('Не удалось обновить трек');
      }
   },
);