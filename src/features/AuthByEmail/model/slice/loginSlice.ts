import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
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
      clearForm: (state) => {
         state.email = '';
         state.password = '';
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(loginByEmail.pending, (state) => {
            state.error = undefined;
            state.isLoading = true;
         })
         .addCase(loginByEmail.fulfilled, (state) => {
            state.isLoading = false;
         })
         .addCase(loginByEmail.rejected, (state) => {
            state.isLoading = false;
            state.error = 'Неверный логин или пароль';
         });
   },
});


export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;