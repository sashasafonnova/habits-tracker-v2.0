import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { validateLoginData } from './validation/validateLoginData/validateLoginData';
import { LoginValidateErrors, ValidateOtherErrors } from '../types/login';
import { loginActions } from '../slice/loginSlice';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByEmailProps {
   email: string;
   password: string;
}


export const loginByEmail = createAsyncThunk < User, LoginByEmailProps, ThunkConfig<LoginValidateErrors | ValidateOtherErrors>>(
   'auth/loginByEmail',
   async (authData, thunkAPI) => {

      const errors = validateLoginData(authData, 'all');
      const errorsValues = Object.values(errors).find(el => Boolean(el));

      if (errorsValues) {
         return thunkAPI.rejectWithValue(errors);
      }

      try {
         const response = await thunkAPI.extra.api.post<User>('/login', authData);

         if (!response.data) {
            throw new Error();
         }

         thunkAPI.dispatch(userActions.setAuthData(response.data));
         thunkAPI.dispatch(loginActions.clearForm());
         thunkAPI.dispatch(loginActions.setValidateErrors({}));

         return response.data;
      } catch (e) {

         return thunkAPI.rejectWithValue(ValidateOtherErrors.SERVER_ERROR);
      }
   },
);