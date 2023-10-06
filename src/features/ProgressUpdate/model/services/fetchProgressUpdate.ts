import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { userTrackActions } from 'entities/UserTrack';

interface ProgressUpdateProps {
   id: string;
   progress: number;
   status?: string;
}

export const fetchProgressUpdate = createAsyncThunk < null, ProgressUpdateProps, ThunkConfig<string>>(
   'updateTrack/fetchProgressUpdate',
   async ({id, ...props}, thunkAPI) => {

      try {         
         const response = await thunkAPI.extra.api.post(`/habits${id}`, props);

         if (!response.data) {
            throw new Error();
         }

         thunkAPI.dispatch(userTrackActions.setUserTrackData(response.data));

         return response.data;
      } catch (e) {

         return thunkAPI.rejectWithValue('Не удалось обновить трек');
      }
   },
);