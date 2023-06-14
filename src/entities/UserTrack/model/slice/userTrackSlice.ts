import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserTrack, UserTrackSchema } from '../types/userTrack';
import { fetchUserTracks } from '../services/fetchUserTracks';


const initialState: UserTrackSchema = {
   isLoading: false
};

export const userTrackSlice = createSlice({
   name: 'userTrack',
   initialState,
   reducers: {

      setUserTrackData: (state, action: PayloadAction<UserTrack[]>) => {
         state.userTrackData = [...action.payload];
      },

      clearUserTrackData: (state) => {
         state.userTrackData = undefined;
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(fetchUserTracks.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(fetchUserTracks.fulfilled, (state) => {
            state.isLoading = false;
         })
         .addCase(fetchUserTracks.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
   },
});


export const { actions: userTrackActions } = userTrackSlice;
export const { reducer: userTrackReducer } = userTrackSlice;