import { ValidatePasswordErrors } from 'shared/types/validation';

export const checkPassword = (password: string | undefined) => {
   let passwordError: ValidatePasswordErrors | undefined;

   const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

   if (password === '') {
      passwordError = ValidatePasswordErrors.PASSWORD_EMPTY;
   }

   if (password && !password.match(passwordPattern)) {
      passwordError = ValidatePasswordErrors.PASSWORD_INCORRECT;
   }

   return passwordError;
};
