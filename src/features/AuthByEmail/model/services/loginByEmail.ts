import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';

interface LoginByEmailProps {
   email: string;
   password: string;
}

export const loginByEmail = createAsyncThunk<User, LoginByEmailProps, { rejectValue: string }>(
   'auth/loginByEmail',
   async (authData, thunkAPI) => {
      try {
         const response = await axios.post<User>(`${process.env.FETCH_URL}/login`, authData);

         if (!response.data) {
            throw new Error();
         }

         thunkAPI.dispatch(userActions.setAuthData(response.data));

         return response.data;
      } catch (e) {
         console.log(e);
         return thunkAPI.rejectWithValue('error');
      }
   },
);