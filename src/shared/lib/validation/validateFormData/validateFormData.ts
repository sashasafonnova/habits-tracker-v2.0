import { FormData, FormValidateErrors } from 'shared/types/validation';
import { checkEmail } from '../checkEmail/checkEmail';
import { checkPassword } from '../checkPassword/checkPassword';

export type Fields = 'all' | 'email' | 'password';

export const validateFormData = (data: FormData, field: Fields) => {
   const {
      email = undefined, password = undefined
   } = data;

   const errors: FormValidateErrors = {};

   switch (field) {
   case 'all':
      errors.email = checkEmail(email);
      errors.password = checkPassword(password);
      break;
   case 'email':
      errors.email = checkEmail(email);
      break;
   case 'password':
      errors.password = checkPassword(password);
      break;
   default:
      errors.email = checkEmail(email);
      errors.password = checkPassword(password);
   }

   return errors;
};
