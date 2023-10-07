import {  createSlice } from '@reduxjs/toolkit';
import { fetchProgressUpdate } from '../services/fetchProgressUpdate';
import { ProgressUpdateSchema } from '../types/ProgressUpdateSchema';

const initialState: ProgressUpdateSchema = {
   isFetching: false,
   fetchID: '',
};

export const progressUpdateSlice = createSlice({
   name: 'progressUpdate',
   initialState,
   reducers: {
      setFetchID: (state, action) => {
         state.fetchID = action.payload;
      }
   },
   
   extraReducers: (builder) => {
      builder
         .addCase(fetchProgressUpdate.pending, (state) => {
            state.fetchErrors = undefined;
            state.isFetching = true;
         })
         .addCase(fetchProgressUpdate.fulfilled, (state) => {
            state.isFetching = false;
         })
         .addCase(fetchProgressUpdate.rejected, (state, action) => {
            state.isFetching = false;
            state.fetchErrors = action.payload;
         });
   },
});


export const { actions: progressUpdateActions } = progressUpdateSlice;
export const { reducer: progressUpdateReducer } = progressUpdateSlice;