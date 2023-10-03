import { ValidateEmailErrors } from '../../../types/login';


export const checkEmail = (email: string) => {

   let emailError: ValidateEmailErrors; 

   const emailPattern = /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/;


   if (email === '') {
      emailError = ValidateEmailErrors.EMAIL_EMPTY;
   }

   if (!email.match(emailPattern) && email !== '') {
      emailError = ValidateEmailErrors.EMAIL_INCORRECT;
   }

   return emailError;
};