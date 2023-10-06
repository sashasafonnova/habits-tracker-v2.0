import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { UserTrack } from 'entities/UserTrack';


export const fetchUserTracks = createAsyncThunk<UserTrack[], undefined, ThunkConfig<string>>(
   'userTrack/fetchUserTracks',
   async (_, thunkAPI) => {
      try {
         const response = await thunkAPI.extra.api.get('/habits');

         if (!response.data) {
            throw new Error();
         }

         return response.data;
      } catch (e) {
         console.log(e);
         return thunkAPI.rejectWithValue('Не удалось получить треки');
      }
   },
);