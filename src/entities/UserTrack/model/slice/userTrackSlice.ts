import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserTrack, UserTrackSchema } from '../types/userTrack';


const initialState: UserTrackSchema = {};

export const userTrackSlice = createSlice({
   name: 'userTrack',
   initialState,
   reducers: {

      setAuthData: (state, action: PayloadAction<UserTrack[]>) => {
         state.userTrackData = [...action.payload];
      },

      clearAuthData: (state) => {
         state.userTrackData = undefined;
      },

   },
});


export const { actions: userTrackActions } = userTrackSlice;
export const { reducer: userTrackReducer } = userTrackSlice;