import { FormData, FormValidateErrors } from 'shared/types/validation';
import { checkEmail } from '../checkEmail/checkEmail';
import { checkPassword } from '../checkPassword/checkPassword';
import { checkNames } from '../checkNames/checkNames';

export type Fields = 'all' | 'email' | 'password' | 'firstName';

export const validateFormData = (data: FormData, field: Fields) => {
   const {
      email = undefined, password = undefined, firstName = undefined,
   } = data;

   const errors: FormValidateErrors = {};

   switch (field) {
   case 'all':
      errors.email = checkEmail(email);
      errors.password = checkPassword(password);
      errors.firstName = checkNames(firstName);
      break;
   case 'firstName':
      errors.firstName = checkNames(firstName);
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
