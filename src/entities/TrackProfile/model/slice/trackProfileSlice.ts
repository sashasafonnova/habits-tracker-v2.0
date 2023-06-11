import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TrackProfileSchema } from '../types/TrackProfileSchema';
import { UserTrack } from 'entities/UserTrack';
import { fetchTrackProfile } from '../services/fetchTrackProfile';


const initialState: TrackProfileSchema = {
   isLoading: false
};

export const trackProfileSlice = createSlice({
   name: 'trackProfile',
   initialState,
   reducers: {
      setProfileData: (state, action: PayloadAction<UserTrack>) => {
         state.profileData = action.payload;
      },
      clearProfileData: (state) => {
         state.profileData = undefined;
      },
   },
   
   extraReducers: (builder) => {
      builder
         .addCase(fetchTrackProfile.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(fetchTrackProfile.fulfilled, (state) => {
            state.isLoading = false;
         })
         .addCase(fetchTrackProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
   },
});


export const { actions: trackProfileActions } = trackProfileSlice;
export const { reducer: trackProfileReducer } = trackProfileSlice;