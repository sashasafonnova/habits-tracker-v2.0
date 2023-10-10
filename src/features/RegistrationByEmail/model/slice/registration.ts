import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RegistrationSchema, RegistrationValidateErrors } from '../types/RegistrationSchema';
import { registrationByEmail } from '../services/registrationByEmail';


const initialState: RegistrationSchema = {
   firstName: '',
   email: '',
   password: '',
   isLoading: false,
   validateErrors: {}
};

export const registrationSlice = createSlice({
   name: 'registration',
   initialState,
   reducers: {
      setFirstName: (state, action: PayloadAction<string>) => {
         state.firstName = action.payload;
      },
      setEmail: (state, action: PayloadAction<string>) => {
         state.email = action.payload;
      },
      setPassword: (state, action: PayloadAction<string>) => {
         state.password = action.payload;
      },
      setValidateErrors: (state, action:PayloadAction<RegistrationValidateErrors>) => {
         state.validateErrors = action.payload;
      },
      clearForm: (state) => {
         state.email = '';
         state.password = '';
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(registrationByEmail.pending, (state, action) => {
            console.log(action);

            state.validateErrors = {};
            state.isLoading = true;
         })
         .addCase(registrationByEmail.fulfilled, (state) => {
            state.isLoading = false;
         })
         .addCase(registrationByEmail.rejected, (state, action) => {
            state.isLoading = false;

            if (typeof action.payload === 'object'){
               state.validateErrors = action.payload;
            } else {
               state.validateErrors.others = action.payload;
            }
         });
   },
});


export const { actions: registrationActions } = registrationSlice;
export const { reducer: registrationReducer } = registrationSlice;