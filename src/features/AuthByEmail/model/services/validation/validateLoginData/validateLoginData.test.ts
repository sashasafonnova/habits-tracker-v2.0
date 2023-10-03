import { ValidateEmailErrors, ValidatePasswordErrors } from 'features/AuthByEmail/model/types/login';
import { validateLoginData } from './validateLoginData';

const invalidLoginData = {
   email: 'alextest.ru',
   password: 'Abc23'
};

describe('validateLoginData', () => {
   test('check all', () => {
      const validateErrors = {
         email: ValidateEmailErrors.EMAIL_INCORRECT,
         password: ValidatePasswordErrors.PASSWORD_INCORRECT 
      };
      expect(validateLoginData(invalidLoginData, 'all')).toEqual(validateErrors);
   });


   test('check only email', () => {
      const validateErrors = {
         email: ValidateEmailErrors.EMAIL_INCORRECT,
      };
      expect(validateLoginData(invalidLoginData, 'email')).toEqual(validateErrors);
   });


   test('check only password', () => {
      const validateErrors = {
         password: ValidatePasswordErrors.PASSWORD_INCORRECT
      };
      expect(validateLoginData(invalidLoginData, 'password')).toEqual(validateErrors);
   });
});