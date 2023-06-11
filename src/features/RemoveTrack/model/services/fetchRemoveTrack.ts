import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface fetchTrackProfileProps {
   trackId: string
}

export const fetchRemoveTrack = createAsyncThunk<null, fetchTrackProfileProps, ThunkConfig<string>>(
   'removeTrack/fetchRemoveTrack',
   async (fetchData, thunkAPI) => {

      const { trackId } = fetchData;
      try {
         const response = await thunkAPI.extra.api.delete(`/habits/${trackId}`);

         if (!response.data) {
            throw new Error();
         }

         return response.data;
      } catch (e) {
         console.log(e);
         return thunkAPI.rejectWithValue('Не удалось удалить трек');
      }
   },
);