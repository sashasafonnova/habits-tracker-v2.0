import {  PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchUserTracks } from '../services/fetchUserTracks';
import { TracksListSchema } from '../types/TracksListSchema';
import { UserTrack } from 'entities/UserTrack';


const initialState: TracksListSchema = {
   tracksList: null,
   isLoading: false
};

export const tracksListSlice = createSlice({
   name: 'tracksList',
   initialState,
   reducers: {
      updateTrack: (state, action: PayloadAction<UserTrack>) => {
         const index = state.tracksList.findIndex((item) => item._id === action.payload._id);
         state.tracksList.splice(index, 1, action.payload);
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchUserTracks.pending, (state) => {
            state.fetchError = undefined;
            state.isLoading = true;
         })
         .addCase(fetchUserTracks.fulfilled, (state, action) => {
            state.isLoading = false;
            state.tracksList = action.payload;
         })
         .addCase(fetchUserTracks.rejected, (state, action) => {
            state.isLoading = false;
            state.fetchError = action.payload;
         });
   },
});


export const { actions: tracksListActions } = tracksListSlice;
export const { reducer: tracksListReducer } = tracksListSlice;