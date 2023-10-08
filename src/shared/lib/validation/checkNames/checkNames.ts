import { ValidateNamesErrors } from 'shared/types/validation';

export const checkNames = (name: string | undefined) => {
   let nameError: ValidateNamesErrors | undefined;

   const namePattern = /^[а-яА-ЯёЁa-zA-Z]+$/;

   if (name === '') {
      nameError = ValidateNamesErrors.NAME_EMPTY;
   }

   if (name && !name.match(namePattern)) {
      nameError = ValidateNamesErrors.NAME_INCORRECT;
   }

   return nameError;
};
