import { ValidatePasswordErrors } from '../../../types/login';

export const checkPassword = (password: string) => {

   let passwordError: ValidatePasswordErrors;

   const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;


   if (password === '') {
      passwordError = ValidatePasswordErrors.PASSWORD_EMPTY;
   }

   if (!password.match(passwordPattern) && password !== '') {
      passwordError = ValidatePasswordErrors.PASSWORD_INCORRECT;
   }

   return passwordError;
};