import { createAsyncThunk } from '@reduxjs/toolkit';
import { CreateTrackData, CreateTrackOtherErrors, ValidateCreateTrackErrors } from '../types/createTrack';
import { createTrackActions } from '../slice/createTrackSlice';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { validateCreateTrack } from './validation/validateCreateTrack';


export const fetchCreateTrack = createAsyncThunk < null, CreateTrackData, ThunkConfig<ValidateCreateTrackErrors | CreateTrackOtherErrors>>(
   'createTrack/fetchCreateTrack',
   async (trackData, thunkAPI) => {

      const errors = validateCreateTrack(trackData);
      const errorsValues = Object.values(errors).find(el => Boolean(el));

      if (errorsValues) {
         return thunkAPI.rejectWithValue(errors);
      }

      try {         
         const response = await thunkAPI.extra.api.post('/habits', trackData);

         if (!response.data) {
            throw new Error();
         }   

         thunkAPI.dispatch(createTrackActions.clearForm());
         thunkAPI.dispatch(createTrackActions.setValidateErrors({}));

         return response.data;
      } catch (e) {

         return thunkAPI.rejectWithValue(CreateTrackOtherErrors.SERVER_ERROR);
      }
   },
);