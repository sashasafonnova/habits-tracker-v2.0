import { checkEmail } from './checkEmail';
import { ValidateEmailErrors } from '../../../types/login';

describe('checkEmail', () => {
   test('empty string', () => { 
      expect(checkEmail('')).toBe(ValidateEmailErrors.EMAIL_EMPTY);
   });

   test('with valid value', () => {
      expect(checkEmail('alex@test.ru')).toEqual(undefined);
   });

   test('with invalid value', () => {
      expect(checkEmail('alextest.ru')).toEqual(ValidateEmailErrors.EMAIL_INCORRECT);
   });
});