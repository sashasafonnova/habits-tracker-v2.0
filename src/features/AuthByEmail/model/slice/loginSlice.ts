import { createSlice } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';


const initialState: LoginSchema = {
   email: '',
   password: '',
   isLoading: false,
};

export const loginSlice = createSlice({
   name: 'login',
   initialState,
   reducers: {
   },
});


export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;