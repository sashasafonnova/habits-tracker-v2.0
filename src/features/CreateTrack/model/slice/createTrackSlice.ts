import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CreateTrackSchema, CreateTrackStatuses, TrackLength, ValidateCreateTrackErrors } from '../types/createTrack';
import { CategoryNames } from 'entities/TrackCategory';
import { fetchCreateTrack } from '../services/fetchCreateTrack';


const initialState: CreateTrackSchema = {
   category: '',
   title: '',
   trackLength: '10',
   createStatus: CreateTrackStatuses.AWAIT,
   validateErrors: {},
};

export const createTrackSlice = createSlice({
   name: 'createTrack',
   initialState,
   reducers: {
      setCategory: (state, action: PayloadAction<CategoryNames>) => {
         state.category = action.payload;
      },
      setName: (state, action: PayloadAction<string>) => {
         state.title = action.payload;
      },
      
      setLength: (state, action: PayloadAction<TrackLength>) => {
         state.trackLength = action.payload;
      },
      clearForm: (state) => {
         state.category = '';
         state.title = '';
         state.trackLength ='10';
      },
      setValidateErrors: (state, action: PayloadAction<ValidateCreateTrackErrors>) => {
         state.validateErrors = action.payload;
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(fetchCreateTrack.pending, (state) => {
            state.validateErrors = {};
            state.createStatus = CreateTrackStatuses.IS_CREATING;
         })
         .addCase(fetchCreateTrack.fulfilled, (state) => {
            state.createStatus = CreateTrackStatuses.CREATED;
         })
         .addCase(fetchCreateTrack.rejected, (state, action) => {
            state.createStatus = CreateTrackStatuses.REJECTED;

            if (typeof action.payload === 'object') {
               state.validateErrors = action.payload;
            } else {
               state.validateErrors.others = action.payload;
            }
         });

   },
});


export const { actions: createTrackActions } = createTrackSlice;
export const { reducer: createTrackReducer } = createTrackSlice;