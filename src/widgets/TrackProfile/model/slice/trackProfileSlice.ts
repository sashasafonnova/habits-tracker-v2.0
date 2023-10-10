import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TrackProfileSchema } from '../types/TrackProfileSchema';
import { UserTrack } from 'entities/UserTrack';
import { fetchTrackProfile } from '../services/fetchTrackProfile/fetchTrackProfile';

const initialState: TrackProfileSchema = {
   profileData: null,
   isLoading: false,
   existStatus: 'exist'
};

export const trackProfileSlice = createSlice({
   name: 'trackProfile',
   initialState,
   reducers: {
      setProfileData: (state, action: PayloadAction<UserTrack>) => {
         state.profileData = action.payload;
      },
      clearProfileData: (state) => {
         state.profileData = null;
      },
      changeExistStatus: (state, action) => {
         if (action.payload === 'deleted') {
            state.profileData = null;
            state.existStatus = action.payload;
         }
      },
   },
   
   extraReducers: (builder) => {
      builder
         .addCase(fetchTrackProfile.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(fetchTrackProfile.fulfilled, (state, action: PayloadAction<UserTrack>) => {
            state.isLoading = false;
            state.profileData = action.payload;
         })
         .addCase(fetchTrackProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
   },
});


export const { actions: trackProfileActions } = trackProfileSlice;
export const { reducer: trackProfileReducer } = trackProfileSlice;