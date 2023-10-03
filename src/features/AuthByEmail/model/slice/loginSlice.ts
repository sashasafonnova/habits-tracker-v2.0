import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginSchema, LoginValidateErrors } from '../types/login';
import { loginByEmail } from '../services/loginByEmail';


const initialState: LoginSchema = {
   email: '',
   password: '',
   isLoading: false,
};

export const loginSlice = createSlice({
   name: 'login',
   initialState,
   reducers: {
      setEmail: (state, action: PayloadAction<string>) => {
         state.email = action.payload;
      },
      setPassword: (state, action: PayloadAction<string>) => {
         state.password = action.payload;
      },
      setValidateErrors: (state, action:PayloadAction<LoginValidateErrors>) => {
         state.validateErrors = action.payload;
      },
      clearForm: (state) => {
         state.email = '';
         state.password = '';
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(loginByEmail.pending, (state, action) => {
            console.log(action);

            state.validateErrors = {};
            state.isLoading = true;
         })
         .addCase(loginByEmail.fulfilled, (state) => {
            state.isLoading = false;
         })
         .addCase(loginByEmail.rejected, (state, action) => {
            state.isLoading = false;

            if (typeof action.payload === 'object'){
               state.validateErrors = action.payload;
            } else {
               state.validateErrors.others = action.payload;
            }
         });
   },
});


export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;