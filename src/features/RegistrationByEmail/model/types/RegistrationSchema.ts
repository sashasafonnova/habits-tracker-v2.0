import { ValidateEmailErrors, ValidateNamesErrors, ValidateOtherErrors, ValidatePasswordErrors } from 'shared/types/validation';

export interface RegistrationSchema {
   firstName: string,
   email: string,
   password: string,
   isLoading: boolean,
   validateErrors?: RegistrationValidateErrors | null
}

export interface RegistrationValidateErrors {
   firstName?: ValidateNamesErrors | '',
   email?: ValidateEmailErrors | '',
   password?: ValidatePasswordErrors | '',
   others?: ValidateOtherErrors | ''
}