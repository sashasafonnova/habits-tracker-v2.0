import { createSlice } from '@reduxjs/toolkit';
import { RemoveTrackSchema, RemoveTrackStatuses } from '../types/RemoveTrackSchema';
import { fetchRemoveTrack } from '../services/fetchRemoveTrack';



const initialState: RemoveTrackSchema = {
   removeStatus: RemoveTrackStatuses.NOT_ACTIVE,
};

export const removeTrackSlice = createSlice({
   name: 'removeTrack',
   initialState,
   reducers: {

      clearRemoveStatus: (state) => {
         state.removeStatus = RemoveTrackStatuses.NOT_ACTIVE;
         delete state.error;
      }
   },

   extraReducers: (builder) => {
      builder
         .addCase(fetchRemoveTrack.pending, (state) => {
            state.removeStatus = RemoveTrackStatuses.IS_DELETING;
         })
         .addCase(fetchRemoveTrack.fulfilled, (state) => {
            state.removeStatus = RemoveTrackStatuses.DELETED;
         })
         .addCase(fetchRemoveTrack.rejected, (state) => {
            state.removeStatus = RemoveTrackStatuses.ERROR;
            state.error = 'Не удалось удалить трек';
         });
   },
});


export const { actions: removeTrackActions } = removeTrackSlice;
export const { reducer: removeTrackReducer } = removeTrackSlice;