import { createSlice } from '@reduxjs/toolkit';
import { TrackListSchema } from '../types/trackList';
import { fetchAllTracks } from '../services/fetchUserTracks';


const initialState: TrackListSchema = {
   isLoading: false
};

export const trackListSlice = createSlice({
   name: 'trackList',
   initialState,
   reducers: {},

   extraReducers: (builder) => {
      builder
         .addCase(fetchAllTracks.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(fetchAllTracks.fulfilled, (state) => {
            state.isLoading = false;
         })
         .addCase(fetchAllTracks.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
         });
   },
});


export const { actions: trackListActions } = trackListSlice;
export const { reducer: trackListReducer } = trackListSlice;