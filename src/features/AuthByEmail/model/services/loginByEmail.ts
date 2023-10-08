import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { LoginValidateErrors } from '../types/login';
import { loginActions } from '../slice/loginSlice';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { validateFormData } from 'shared/lib/validation/validateFormData/validateFormData';
import { loginEmailSelector } from '../selectors/loginEmailSelector/loginEmailSelector';
import { loginPasswordSelector } from '../selectors/loginPasswordSelector/loginPasswordSelector';
import { ValidateOtherErrors } from 'shared/types/validation';

export const loginByEmail = createAsyncThunk <User, void, ThunkConfig<LoginValidateErrors | ValidateOtherErrors>>(
   'auth/loginByEmail',
   async (_, thunkAPI) => {

      const email = loginEmailSelector(thunkAPI.getState());
      const password = loginPasswordSelector(thunkAPI.getState());
      const authData = { email, password };

      const errors = validateFormData(authData, 'all');
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