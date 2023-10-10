import { ValidateEmailErrors, ValidateOtherErrors, ValidatePasswordErrors } from 'shared/types/validation';

export interface LoginSchema {
   email: string,
   password: string,
   isLoading: boolean,
   validateErrors: LoginValidateErrors
}

export interface LoginValidateErrors {
   email?: ValidateEmailErrors | '',
   password?: ValidatePasswordErrors | '',
   others?: ValidateOtherErrors | ''
}