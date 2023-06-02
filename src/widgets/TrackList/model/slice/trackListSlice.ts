import { createSlice } from '@reduxjs/toolkit';
import { TrackListSchema } from '../types/trackList';


const initialState: TrackListSchema = {
   isLiading: false
};

export const trackListSlice = createSlice({
   name: 'trackList',
   initialState,
   reducers: {},
});


export const { actions: trackListActions } = trackListSlice;
export const { reducer: trackListReducer } = trackListSlice;