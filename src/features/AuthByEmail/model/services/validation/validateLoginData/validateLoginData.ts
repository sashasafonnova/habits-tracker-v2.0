import { LoginData, LoginValidateErrors } from '../../../types/login';
import { checkEmail } from '../checkEmail/checkEmail';
import { checkPassword } from '../checkPassword/checkPassword';

export type Fields = 'all' | 'email' | 'password'


export const validateLoginData = (data: LoginData, field: Fields) => {
   const { email, password } = data;

   const errors: LoginValidateErrors = {};

   switch (field){
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
   }

   return errors;
};