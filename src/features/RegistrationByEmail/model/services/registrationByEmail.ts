import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { validateFormData } from 'shared/lib/validation/validateFormData/validateFormData';
import { ValidateOtherErrors } from 'shared/types/validation';
import { RegistrationValidateErrors } from '../types/RegistrationSchema';
import { registrationActions } from '../slice/registration';
import { registrationEmailSelector } from '../selectors/registrationEmailSelector/registrationEmailSelector';
import { registrationPasswordSelector } from '../selectors/registrationPasswordSelector/registrationPasswordSelector';
import { registrationFirstNameSelector } from '../selectors/registrationFirstNameSelector/registrationFirstNameSelector';

export const registrationByEmail = createAsyncThunk <User, void, ThunkConfig<RegistrationValidateErrors | ValidateOtherErrors>>(
   'auth/registrationByEmail',
   async (_, thunkAPI) => {

      const firstName = registrationFirstNameSelector(thunkAPI.getState());
      const email = registrationEmailSelector(thunkAPI.getState());
      const password = registrationPasswordSelector(thunkAPI.getState());
      const authData = { firstName, email, password };

      const errors = validateFormData(authData, 'all');
      const errorsValues = Object.values(errors).find(el => Boolean(el));

      if (errorsValues) {
         return thunkAPI.rejectWithValue(errors);
      }

      try {
         const response = await thunkAPI.extra.api.post<User>('/registration', authData);

         if (!response.data) {
            throw new Error();
         }

         thunkAPI.dispatch(userActions.setAuthData(response.data));
         thunkAPI.dispatch(registrationActions.clearForm());
         thunkAPI.dispatch(registrationActions.setValidateErrors({}));

         return response.data;
      } catch (e) {

         return thunkAPI.rejectWithValue(ValidateOtherErrors.REGISTRATION_ERROR);
      }
   },
);