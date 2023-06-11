import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { trackProfileActions } from 'entities/TrackProfile';
import { UserTrack } from 'entities/UserTrack';

interface fetchTrackProfileProps {
   trackId: string
}

export const fetchTrackProfile = createAsyncThunk<UserTrack, fetchTrackProfileProps, ThunkConfig<string>>(
   'trackProfile/fetchTrackProfile',
   async (fetchData, thunkAPI) => {
      
      const { trackId } = fetchData;
      try {
         const response = await thunkAPI.extra.api.get(`/habits/${trackId }`);

         if (!response.data) {
            throw new Error();
         }

         thunkAPI.dispatch(trackProfileActions.setProfileData(response.data));

         return response.data;
      } catch (e) {
         console.log(e);
         return thunkAPI.rejectWithValue('Не удалось получить трек');
      }
   },
);