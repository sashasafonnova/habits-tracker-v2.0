import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { DeepPartial } from '@reduxjs/toolkit';
import { loginErrorsSelector } from './loginErrorsSelector';
import { ValidateEmailErrors, ValidatePasswordErrors } from 'shared/types/validation';

const validateErrors = {
   email: ValidateEmailErrors.EMAIL_EMPTY,
   password: ValidatePasswordErrors.PASSWORD_INCORRECT,
};

describe('loginErrorSelector', () => {
   test('return value', () => {
      const state: DeepPartial<StateSchema> = {
         login: {
            email: '',
            password: '',
            isLoading: false,
            validateErrors: {
               email: ValidateEmailErrors.EMAIL_EMPTY,
               password: ValidatePasswordErrors.PASSWORD_INCORRECT
            }
         }
      };
      expect(loginErrorsSelector(state as StateSchema)).toEqual(validateErrors);
   });

   test('with empty state', () => {
      const state: DeepPartial<StateSchema> = {};
      expect(loginErrorsSelector(state as StateSchema)).toEqual({});
   });
});